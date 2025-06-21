import PostCard from './PostCard';
import Link from 'next/link';

const PostList = ({ posts }) => {
  // Get category image for featured post
  const getFeaturedImage = (category) => {
    const categoryImages = {
      'technical': '/images/specialized_furniture_moving.jpeg',
      'advisory': '/images/reliable_movers_riyadh.jpeg',
      'legal': '/images/office_relocation_services.jpeg',
      'educational': '/images/professional_moving_services_jeddah.jpeg',
      'market': '/images/furniture_movers_saudi_arabia.jpeg',
      'healthcare': '/images/professional_moving_services_jeddah.jpeg',
    };
    return categoryImages[category] || '/images/furniture_transportation_experts.jpeg';
  };

  return (
    <div className="py-8">
      {/* Featured Post (First Post) */}
      {posts.length > 0 && (
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A2C56] via-[#2A3F6B] to-[#1A2C56] p-1 shadow-2xl">
            <div className="bg-white rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ مقال مميز
                    </span>
                    <span className="bg-[#F8F8F8] text-[#1A2C56] px-3 py-1 rounded-full text-xs font-medium">
                      {posts[0].category}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${posts[0].slug}`} className="block">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1A2C56] leading-tight hover:text-[#D4AF37] transition-colors">
                      {posts[0].title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed line-clamp-4">
                    {posts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#1A2C56] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {posts[0].author.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {posts[0].author}
                        </span>
                      </div>
                      {posts[0].readTime && (
                        <div className="flex items-center gap-1 text-gray-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{posts[0].readTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${posts[0].slug}`}
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold"
                  >
                    <span>اقرأ المقال كاملاً</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Link>
                </div>
                
                {/* Image Side */}
                <div className="relative overflow-hidden h-[400px]">
                  <Link href={`/blog/${posts[0].slug}`} className="block h-full w-full">
                    <img
                      src={posts[0].image || getFeaturedImage(posts[0].category)}
                      alt={posts[0].title}
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[#D4AF37]/20 backdrop-blur-sm"></div>
                    <div className="absolute bottom-12 left-12 w-24 h-24 rounded-full bg-[#1A2C56]/10 backdrop-blur-sm"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Posts Grid */}
      {posts.length > 1 && (
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A2C56] mb-4">
              المزيد من المقالات المتخصصة
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <div
                key={post.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* If only one post, show it in grid */}
      {posts.length === 1 && (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#1A2C56] mb-8">
            المقالات المتاحة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <PostCard post={posts[0]} />
          </div>
        </div>
      )}

      {/* Loading Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default PostList;