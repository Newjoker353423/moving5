import { useState, useEffect } from 'react';
import BlogHeader from '../../components/blog/BlogHeader';
import SEO from '../../components/common/SEO';
import { getAllPostsWithContent, getAllCategories } from '../../lib/posts';
import { getImageForCategory } from '../../lib/imageUtils';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ initialPosts, categories }) {
  const [posts, setPosts] = useState(initialPosts);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const postsPerPage = 6;

  // Filter and sort posts
  useEffect(() => {
    setIsLoading(true);
    let filteredPosts = [...initialPosts];

    // Filter by category
    if (activeCategory !== 'all') {
      filteredPosts = filteredPosts.filter(post => post.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort posts
    filteredPosts.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'title':
          return a.title.localeCompare(b.title, 'ar');
        case 'author':
          return a.author.localeCompare(b.author, 'ar');
        default:
          return 0;
      }
    });

    setPosts(filteredPosts);
    setCurrentPage(1);
    setTimeout(() => setIsLoading(false), 300);
  }, [activeCategory, searchTerm, sortBy, initialPosts]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Pagination
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="مدونة الخبير المعتمد - مقالات متخصصة في تقييم أضرار الأثاث"
        description="اكتشف أحدث المقالات والنصائح حول تقييم أضرار الأثاث والمطالبات التأمينية وحماية ممتلكاتك من خبراء مكتب الخبير المعتمد."
        canonicalUrl="https://furniture-expert.org/blog"
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1A2C56] via-[#2A3F6B] to-[#1A2C56] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-[#D4AF37]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <svg className="w-5 h-5 text-[#D4AF37] ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-[#D4AF37] font-semibold">مدونة الخبير المعتمد</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              مقالات متخصصة في
              <span className="block text-[#D4AF37]">تقييم الأضرار</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              اكتشف أحدث المقالات والنصائح المهنية من خبراء معتمدين في مجال تقييم أضرار الأثاث والممتلكات
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-6 py-4 pr-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
                <svg className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">{initialPosts.length}</div>
                <div className="text-gray-300">مقال متخصص</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">{categories.length}</div>
                <div className="text-gray-300">فئة رئيسية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">15+</div>
                <div className="text-gray-300">سنة خبرة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">1000+</div>
                <div className="text-gray-300">حالة مُقيمة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Filters Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#1A2C56] mb-4">تصفح حسب الفئة</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                    activeCategory === 'all'
                      ? 'bg-[#1A2C56] text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-105'
                  }`}
                >
                  جميع المقالات ({initialPosts.length})
                </button>
                {categories.map((category) => {
                  const categoryCount = initialPosts.filter(post => post.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                        activeCategory === category
                          ? 'bg-[#1A2C56] text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-105'
                      }`}
                    >
                      {getCategoryName(category)} ({categoryCount})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sort Options */}
            <div className="lg:w-64">
              <h3 className="text-lg font-bold text-[#1A2C56] mb-4">ترتيب حسب</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A2C56] focus:border-transparent bg-white"
              >
                <option value="newest">الأحدث أولاً</option>
                <option value="oldest">الأقدم أولاً</option>
                <option value="title">حسب العنوان</option>
                <option value="author">حسب الكاتب</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-2">
                {activeCategory === 'all' ? 'جميع المقالات' : `مقالات فئة: ${getCategoryName(activeCategory)}`}
              </h2>
              <p className="text-gray-600">
                عرض {currentPosts.length} من أصل {posts.length} مقال
                {searchTerm && ` - نتائج البحث عن: "${searchTerm}"`}
              </p>
            </div>
            {posts.length > postsPerPage && (
              <div className="text-sm text-gray-500">
                صفحة {currentPage} من {totalPages}
              </div>
            )}
          </div>
        </div>
        
        {/* Posts Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post, index) => (
                <article key={post.slug} className={`group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${index === 0 && currentPage === 1 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className={`relative overflow-hidden cursor-pointer ${index === 0 && currentPage === 1 ? 'h-80' : 'h-64'}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = getImageForCategory(post.category);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#1A2C56]/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full font-semibold shadow-lg">
                          {getCategoryName(post.category)}
                        </span>
                      </div>

                      {/* Featured Badge for first post */}
                      {index === 0 && currentPage === 1 && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#D4AF37] text-[#1A2C56] text-xs px-3 py-2 rounded-full font-bold shadow-lg">
                            مقال مميز
                          </span>
                        </div>
                      )}

                      {/* Reading Time */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <svg className="w-4 h-4 text-[#1A2C56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-[#1A2C56] text-xs font-semibold">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <div className={`p-6 ${index === 0 && currentPage === 1 ? 'lg:p-8' : ''}`}>
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {post.author}
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className={`font-bold mb-3 leading-tight text-[#1A2C56] hover:text-[#D4AF37] transition-colors cursor-pointer line-clamp-2 ${index === 0 && currentPage === 1 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className={`text-gray-600 mb-6 leading-relaxed line-clamp-3 ${index === 0 && currentPage === 1 ? 'text-lg' : ''}`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 bg-[#1A2C56] text-white px-6 py-3 rounded-xl hover:bg-[#2A3F6B] font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        قراءة المقال
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </Link>
                      
                      <div className="flex items-center gap-3">
                        <button className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-[#D4AF37] transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  السابق
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-[#1A2C56] text-white'
                          : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  التالي
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <div className="max-w-md mx-auto">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">لا توجد نتائج</h3>
              <p className="text-gray-600 mb-8 text-lg">
                {searchTerm 
                  ? `لم نجد أي مقالات تحتوي على "${searchTerm}"`
                  : 'لا توجد مقالات في هذه الفئة حالياً'
                }
              </p>
              <div className="flex gap-4 justify-center">
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="bg-[#D4AF37] text-[#1A2C56] px-6 py-3 rounded-xl hover:bg-[#E5C158] transition-colors font-semibold"
                  >
                    مسح البحث
                  </button>
                )}
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    setSearchTerm('');
                  }}
                  className="bg-[#1A2C56] text-white px-6 py-3 rounded-xl hover:bg-[#2A3F6B] transition-colors font-semibold"
                >
                  عرض جميع المقالات
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-br from-[#1A2C56] via-[#2A3F6B] to-[#1A2C56] rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <div className="inline-flex items-center bg-[#D4AF37]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <svg className="w-5 h-5 text-[#D4AF37] ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[#D4AF37] font-semibold">النشرة الإخبارية</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">ابق على اطلاع بأحدث المقالات</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              احصل على إشعارات بالمقالات الجديدة والنصائح المتخصصة مباشرة في بريدك الإلكتروني
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border-0"
                />
                <button className="bg-[#D4AF37] text-[#1A2C56] px-8 py-4 rounded-xl font-bold hover:bg-[#E5C158] transition-all duration-300 transform hover:scale-105 shadow-lg">
                  اشتراك مجاني
                </button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                لن نرسل لك رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Helper function to convert category code to Arabic name
function getCategoryName(category) {
  const categoryNames = {
    'all': 'جميع المقالات',
    'technical': 'مقالات تقنية',
    'advisory': 'مقالات استشارية',
    'legal': 'مقالات قانونية',
    'educational': 'مقالات تعليمية',
    'market': 'سوق الأثاث',
    'healthcare': 'الرعاية الصحية'
  };
  return categoryNames[category] || category;
}

export async function getStaticProps() {
  const allPosts = await getAllPostsWithContent();
  const categories = getAllCategories();
  
  return {
    props: {
      initialPosts: allPosts,
      categories,
    },
  };
}