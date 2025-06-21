import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../../components/common/SEO';
import { getAllPostSlugs, getPostData, getRelatedPosts } from '../../lib/posts';
import { getImageForCategory, getAuthorImage } from '../../lib/imageUtils';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { 
  generateArticleSchema, 
  generateBreadcrumbSchema,
  generateOrganizationSchema 
} from '../../lib/schema';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function BlogPost({ post, relatedPosts }) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTableOfContents, setShowTableOfContents] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${post.title} - مكتب الخبير المعتمد`;

  // Reading progress tracking
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const handleShare = (platform) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
    };
    
    window.open(urls[platform], '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('تم نسخ الرابط!');
    setShowShareMenu(false);
  };

  // Breadcrumb for article page
  const breadcrumbs = [
    { name: 'الرئيسية', url: '/' },
    { name: 'المدونة', url: '/blog' },
    { name: post.title, url: null }
  ];

  const structuredData = [
    generateArticleSchema(post),
    generateBreadcrumbSchema(breadcrumbs),
    generateOrganizationSchema()
  ];

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`https://fakhrkhaleej.com/blog/${post.slug}`}
        openGraph={{
          type: 'article',
          title: post.title,
          description: post.excerpt,
          url: `https://fakhrkhaleej.com/blog/${post.slug}`,
          images: [
            {
              url: `https://fakhrkhaleej.com${post.image || '/images/furniture_transportation_experts.jpeg'}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
          article: {
            publishedTime: post.date,
            modifiedTime: post.date,
            authors: [post.author],
            section: getCategoryName(post.category),
            tags: [post.category, 'تقييم أضرار الأثاث', 'السعودية']
          }
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${post.title}, ${getCategoryName(post.category)}, تقييم أضرار الأثاث, ${post.author}, السعودية`
          },
          {
            name: 'author',
            content: post.author
          },
          {
            name: 'article:author',
            content: post.author
          },
          {
            name: 'article:published_time',
            content: post.date
          }
        ]}
      />
      
      <Head>
        <title>{post.title} | مكتب الخبير المعتمد</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#1A2C56] to-[#D4AF37] transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {/* Share Button */}
        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="w-12 h-12 bg-[#1A2C56] text-white rounded-full shadow-lg hover:bg-[#2A3F6B] transition-all duration-300 flex items-center justify-center group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
          
          {showShareMenu && (
            <div className="absolute left-16 top-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 min-w-48">
              <h4 className="font-semibold text-gray-800 mb-3">مشاركة المقال</h4>
              <div className="space-y-2">
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  تويتر
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  فيسبوك
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  واتساب
                </button>
                <button
                  onClick={() => handleShare('telegram')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  تيليجرام
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-3 w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  نسخ الرابط
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Back to Top */}
        {isScrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-[#D4AF37] text-[#1A2C56] rounded-full shadow-lg hover:bg-[#E5C158] transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-[#1A2C56] transition-colors">
                الرئيسية
              </Link>
            </li>
            <li className="text-gray-400 mx-2">/</li>
            <li>
              <Link href="/blog" className="text-gray-500 hover:text-[#1A2C56] transition-colors">
                المدونة
              </Link>
            </li>
            <li className="text-gray-400 mx-2">/</li>
            <li>
              <span className="text-gray-500 hover:text-[#1A2C56] transition-colors cursor-pointer">
                {getCategoryName(post.category)}
              </span>
            </li>
            <li className="text-gray-400 mx-2">/</li>
            <li className="text-gray-700 truncate font-medium">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center bg-[#1A2C56] text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {getCategoryName(post.category)}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1A2C56] mb-8 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-3">
              <img
                src={getAuthorImage(post.author)}
                alt={post.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
              />
              <div>
                <p className="font-bold text-gray-900 text-lg">{post.author}</p>
                <p className="text-sm text-[#1A2C56] font-medium">خبير معتمد</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">{format(new Date(post.date), 'dd MMMM yyyy', { locale: ar })}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{post.readTime}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-medium">1,234 مشاهدة</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={post.image || getImageForCategory(post.category)}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = getImageForCategory(post.category);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            
            {/* Image Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-gray-800 text-sm font-medium">
                  صورة توضيحية للمقال - {post.title}
                </p>
              </div>
            </div>
          </div>

          {/* Article Summary */}
          <div className="bg-gradient-to-r from-[#1A2C56]/5 to-[#D4AF37]/5 rounded-2xl p-8 mb-8 border-r-4 border-[#D4AF37]">
            <h2 className="text-xl font-bold text-[#1A2C56] mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              ملخص المقال
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-16">
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
          />
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="mb-12 p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-xl font-bold text-[#1A2C56] mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              الكلمات المفتاحية
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-[#1A2C56] hover:text-[#1A2C56] transition-all duration-300 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="mb-16 bg-gradient-to-br from-[#1A2C56] to-[#2A3F6B] rounded-3xl p-8 text-white">
          <div className="flex items-start gap-6">
            <img
              src={getAuthorImage(post.author)}
              alt={post.author}
              className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{post.author}</h3>
              <p className="text-[#D4AF37] font-semibold mb-4">خبير معتمد في تقييم أضرار الأثاث</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                خبير معتمد مع أكثر من 15 عاماً من الخبرة في مجال تقييم أضرار الأثاث والممتلكات. 
                متخصص في المطالبات التأمينية والتقييم القانوني للأضرار.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#D4AF37] text-[#1A2C56] px-6 py-2 rounded-lg font-semibold hover:bg-[#E5C158] transition-colors">
                  عرض المقالات الأخرى
                </button>
                <button className="border border-white/30 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  تواصل مع الكاتب
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">مقالات ذات صلة</h2>
              <p className="text-gray-600 text-lg">اكتشف المزيد من المقالات المتخصصة في نفس المجال</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image || getImageForCategory(relatedPost.category)}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#1A2C56]/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold">
                          {getCategoryName(relatedPost.category)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-bold text-[#1A2C56] mb-3 line-clamp-2 group-hover:text-[#D4AF37] transition-colors text-lg">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {relatedPost.readTime}
                        </div>
                        
                        <div className="text-[#1A2C56] group-hover:text-[#D4AF37] transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-[#1A2C56] via-[#2A3F6B] to-[#1A2C56] rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">هل تحتاج لاستشارة متخصصة؟</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              احصل على استشارة مجانية من خبرائنا المعتمدين في تقييم أضرار الأثاث والممتلكات
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-[#1A2C56] px-8 py-4 rounded-xl font-bold hover:bg-[#E5C158] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                احجز استشارة مجانية
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1A2C56] transition-all duration-300"
              >
                تصفح خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </article>

      <style jsx>{`
        .article-content h2 {
          @apply text-2xl font-bold text-[#1A2C56] mt-8 mb-4;
        }
        .article-content h3 {
          @apply text-xl font-bold text-[#1A2C56] mt-6 mb-3;
        }
        .article-content p {
          @apply text-gray-700 leading-relaxed mb-4;
        }
        .article-content ul, .article-content ol {
          @apply mb-4 pr-6;
        }
        .article-content li {
          @apply mb-2 text-gray-700;
        }
        .article-content blockquote {
          @apply border-r-4 border-[#D4AF37] bg-gray-50 p-4 my-6 italic;
        }
        .article-content strong {
          @apply font-bold text-[#1A2C56];
        }
        .article-content a {
          @apply text-[#1A2C56] hover:text-[#D4AF37] underline;
        }
      `}</style>
    </>
  );
}

// Helper function to convert category code to Arabic name
function getCategoryName(category) {
  const categoryNames = {
    'technical': 'مقالات تقنية',
    'advisory': 'مقالات استشارية',
    'legal': 'مقالات قانونية',
    'educational': 'مقالات تعليمية',
    'market': 'سوق الأثاث',
    'healthcare': 'الرعاية الصحية'
  };
  return categoryNames[category] || category;
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug);
  const relatedPosts = getRelatedPosts(params.slug, post.category, 3);
  
  return {
    props: {
      post,
      relatedPosts,
    },
  };
}