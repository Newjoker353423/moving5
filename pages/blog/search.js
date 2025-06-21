import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PostList from '../../components/blog/PostList';
import SearchBar from '../../components/blog/SearchBar';
import Pagination from '../../components/ui/Pagination';
import SEO from '../../components/common/SEO';
import { getAllPosts, paginatePosts } from '../../lib/posts';

const POSTS_PER_PAGE = 9;

export default function SearchResults({ initialPosts }) {
  const router = useRouter();
  const { q } = router.query;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (q) {
      setSearchQuery(q);
      const query = q.toLowerCase();
      
      // Filter posts based on title, excerpt, content, tags, author
      const searchResults = initialPosts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        (post.author && post.author.toLowerCase().includes(query)) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query))) ||
        (post.category && post.category.toLowerCase().includes(query))
      );
      
      // Paginate results
      const { posts: paginatedPosts, pagination } = paginatePosts(searchResults, 1, POSTS_PER_PAGE);
      setFilteredPosts(paginatedPosts);
      setTotalPages(pagination.totalPages);
      setCurrentPage(1);
    }
  }, [q, initialPosts]);

  const handlePageChange = (page) => {
    const query = q.toLowerCase();
    
    // Filter posts based on search query
    const searchResults = initialPosts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      (post.author && post.author.toLowerCase().includes(query)) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query))) ||
      (post.category && post.category.toLowerCase().includes(query))
    );
    
    // Paginate results
    const { posts: paginatedPosts, pagination } = paginatePosts(searchResults, page, POSTS_PER_PAGE);
    setFilteredPosts(paginatedPosts);
    setCurrentPage(page);
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <SEO
        title={`نتائج البحث: ${searchQuery || ''} - مدونة الخبير المعتمد`}
        description={`نتائج البحث عن "${searchQuery || ''}" في مدونة الخبير المعتمد للأثاث والتقييم.`}
        canonicalUrl={`https://furniture-expert.org/blog/search?q=${searchQuery || ''}`}
      />
      
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            نتائج البحث: {searchQuery}
          </h1>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Search Results */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#1A2C56] mb-4">
                تم العثور على {filteredPosts.length} نتيجة
              </h2>
              <PostList posts={filteredPosts} />
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔎</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">لم يتم العثور على نتائج</h3>
              <p className="text-gray-600 mb-6">
                لم نتمكن من العثور على نتائج مطابقة لـ "{searchQuery}". يرجى تجربة كلمات بحث أخرى أو تصفح الفئات.
              </p>
              <button
                onClick={() => router.push('/blog')}
                className="bg-[#1A2C56] text-white px-6 py-3 rounded-lg hover:bg-[#2A3F6B] transition-colors"
              >
                العودة إلى المدونة
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  
  return {
    props: {
      initialPosts: allPosts,
    },
  };
} 