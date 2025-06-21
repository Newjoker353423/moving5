import Image from 'next/image';
import Link from 'next/link';
import { formatDate, getReadingTime, getCategoryName } from '../../lib/utils';
import { useState, useEffect } from 'react';
import RelatedPosts from './RelatedPosts';
import ReadingProgress from './ReadingProgress';
import { getRelatedPosts } from '../../lib/posts';

const PostDetail = ({ post, content, relatedPosts }) => {
  const [currentHeading, setCurrentHeading] = useState('');
  const [headings, setHeadings] = useState([]);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Get author image
  const getAuthorImage = (authorName) => {
    const authorMap = {
      'سلطان الغامدي': '/images/author/Majed_AlQahtani.png',
      'خالد العتيبي': '/images/author/Khalid_AlOtaibi.png',
      'نورة الدوسري': '/images/author/Noura_AlDossary.png',
      'تركي الشهري': '/images/author/Turki_AlShehri .png',
      'فهد الحربي': '/images/author/Fahad_AlHarbi.png',
      'ماجد القحطاني': '/images/author/Majed_AlQahtani.png',
      'محمد الشمري': '/images/author/Majed_AlQahtani.png',
      // Fallback for English names
      'Khalid AlOtaibi': '/images/author/Khalid_AlOtaibi.png',
      'Noura AlDossary': '/images/author/Noura_AlDossary.png',
      'Turki AlShehri': '/images/author/Turki_AlShehri .png',
      'Fahad AlHarbi': '/images/author/Fahad_AlHarbi.png',
      'Majed AlQahtani': '/images/author/Majed_AlQahtani.png',
    };
    
    return authorMap[authorName] || '/images/author/Majed_AlQahtani.png';
  };

  // Determine post image based on category
  const getPostImage = (category, slug) => {
    // Use specific images based on blog post slug
    const slugToImage = {
      'types-of-wood-fractures-and-how-to-identify-their-causes': '/images/specialized_furniture_moving.jpeg',
      'transport-damage-impact-on-luxury-furniture-value': '/images/specialized_furniture_moving.jpeg',
      'legal-rights-furniture-damage-during-transport': '/images/office_relocation_services.jpeg',
      'latest-furniture-tracking-and-insurance-technologies': '/images/professional_moving_equipment.jpeg',
      'importance-of-photographic-documentation': '/images/professional_packing_team.jpeg',
      'how-to-choose-a-moving-company-to-reduce-damage-risks': '/images/reliable_movers_riyadh.jpeg',
      'how-to-prepare-successful-insurance-claim': '/images/professional_moving_services_jeddah.jpeg',
      'hidden-damage-detection-techniques': '/images/professional_moving_equipment.jpeg',
      'household-goods-insurance-market-trends-saudi': '/images/secure_storage_solutions.jpeg',
      'furniture-inspection-upon-arrival': '/images/house_moving_experts_jeddah.jpeg',
      'guide-to-packing-valuable-fragile-items': '/images/furniture_wrapping_services.jpeg',
      'essential-documents-for-furniture-protection': '/images/office_relocation_services.jpeg',
      'comprehensive-furniture-inspection-checklist': '/images/professional_packing_team.jpeg',
      'distinguishing-old-vs-new-damage': '/images/furniture_wrapping_services.jpeg',
      'common-furniture-assembly-problems': '/images/furniture_assembly_jeddah.jpeg',
    };
    
    // If we have a specific image for this slug, use it
    if (slug && slugToImage[slug]) {
      return slugToImage[slug];
    }
    
    // Otherwise, fall back to category-based image mapping
    const categoryImages = {
      'furniture-damage': '/images/furniture_transportation_experts.jpeg',
      'insurance-claims': '/images/professional_moving_services_jeddah.jpeg',
      'legal': '/images/office_relocation_services.jpeg',
      'technical': '/images/specialized_furniture_moving.jpeg',
      'advisory': '/images/reliable_movers_riyadh.jpeg',
      'market': '/images/furniture_movers_saudi_arabia.jpeg',
      'educational': '/images/international_moving_services.jpeg',
      'healthcare': '/images/professional_moving_services_jeddah.jpeg',
    };
    
    // Use post.image if available, otherwise fall back to category mapping
    return post.image || categoryImages[category] || '/images/furniture_transportation_experts.jpeg';
  };

  const readingTime = post.readTime || getReadingTime(content);

  // Extract headings from content
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(content, 'text/html');
      const h2Elements = htmlDoc.querySelectorAll('h2');
      
      const extractedHeadings = Array.from(h2Elements).map(h2 => ({
        id: h2.textContent.replace(/\s+/g, '-').toLowerCase(),
        text: h2.textContent
      }));
      
      setHeadings(extractedHeadings);
    }
  }, [content]);

  // Handle scroll to track current heading
  useEffect(() => {
    const handleScroll = () => {
      if (typeof document !== 'undefined') {
        const headingElements = document.querySelectorAll('h2');
        
        for (let i = headingElements.length - 1; i >= 0; i--) {
          const heading = headingElements[i];
          const rect = heading.getBoundingClientRect();
          
          if (rect.top <= 100) {
            setCurrentHeading(heading.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Social share links
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://furniture-expert.org/blog/${post.slug}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://furniture-expert.org/blog/${post.slug}`)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - https://furniture-expert.org/blog/${post.slug}`)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://furniture-expert.org/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`
  };

  return (
    <>
      <ReadingProgress target="article.blog-post" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Table of Contents Toggle */}
        {headings.length > 0 && (
          <div className="lg:hidden sticky top-0 z-30 bg-white py-2 mb-6">
            <button 
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="flex items-center justify-between w-full bg-[#1A2C56] text-white px-4 py-3 rounded-lg"
            >
              <span className="font-medium">محتويات المقال</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isTocOpen ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isTocOpen && (
              <div className="mt-2 bg-white rounded-lg shadow-md p-4 border border-gray-100">
                <nav>
                  <ul className="space-y-2">
                    {headings.map(heading => (
                      <li key={heading.id}>
                        <a 
                          href={`#${heading.id}`}
                          onClick={() => setIsTocOpen(false)}
                          className={`block py-2 pr-3 border-r-2 text-sm hover:text-[#D4AF37] transition-colors ${
                            currentHeading === heading.id 
                              ? 'border-[#D4AF37] text-[#D4AF37] font-bold' 
                              : 'border-gray-200 text-gray-600'
                          }`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="lg:w-2/3 blog-post">
      {/* Post Header */}
      <header className="mb-8">
              <div className="mb-6">
                <Link href="/blog" className="inline-flex items-center text-[#D4AF37] hover:text-[#1A2C56] transition-colors">
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>العودة إلى المدونة</span>
                </Link>
              </div>
              
        <div className="flex items-center mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden ring-4 ring-[#1A2C56]/10">
            <Image
              src={getAuthorImage(post.author)}
              alt={post.author}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mr-4">
                  <p className="text-lg font-bold text-gray-900">{post.author}</p>
            <div className="flex items-center text-sm text-gray-500">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {readingTime}
                    </span>
            </div>
          </div>
        </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="inline-block bg-[#F8F8F8] text-[#1A2C56] text-sm px-4 py-2 rounded-full font-medium">
            {getCategoryName(post.category)}
          </span>
                
                {post.tags && post.tags.map(tag => (
                  <span key={tag} className="inline-block bg-[#F8F8F8] text-gray-600 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social Share Buttons */}
              <div className="relative">
                <button 
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  className="flex items-center gap-2 bg-[#1A2C56] text-white px-4 py-2 rounded-lg hover:bg-[#2A3F6B] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>مشاركة المقال</span>
                </button>
                
                {isShareOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-3 z-10">
                    <div className="flex items-center gap-3">
                      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:opacity-80">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:opacity-80">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                        </svg>
                      </a>
                      <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </a>
                      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
        </div>
      </header>

      {/* Featured Image */}
            <div className="relative h-[400px] w-full mb-12 rounded-xl overflow-hidden shadow-lg">
        <Image 
                src={getPostImage(post.category, post.slug)}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          priority={true}
                className="transition-transform duration-700 hover:scale-105"
        />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Post Content */}
      <div 
              className="prose prose-lg max-w-none rtl:text-right ltr:text-left prose-headings:font-bold prose-headings:text-[#1A2C56] prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: content }}
      />

            {/* Tags and Share Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">الوسوم</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Share Buttons */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">شارك المقال</h3>
                  <div className="flex gap-3">
                    <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                      </svg>
                    </a>
                    <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                    <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-6">
                <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden ring-4 ring-[#1A2C56]/10">
                  <Image
                    src={getAuthorImage(post.author)}
                    alt={post.author}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">عن الكاتب</h3>
                  <p className="text-lg font-bold text-[#1A2C56]">{post.author}</p>
                  <p className="text-gray-600 mt-2">
                    خبير معتمد في تقييم أضرار الأثاث بخبرة أكثر من 15 عاماً في المجال. متخصص في تقديم الاستشارات المهنية وإعداد التقارير المعتمدة لشركات التأمين والمحاكم.
                  </p>
                  <a href="#" className="inline-block mt-4 text-[#D4AF37] hover:text-[#1A2C56] transition-colors">
                    عرض جميع مقالات الكاتب
                  </a>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link href="/blog" className="inline-flex items-center justify-center gap-2 bg-[#1A2C56] text-white px-6 py-3 rounded-lg hover:bg-[#2A3F6B] transition-colors">
                <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>العودة إلى المدونة</span>
        </Link>
      </div>
    </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            {/* Desktop Table of Contents */}
            {headings.length > 0 && (
              <div className="hidden lg:block bg-white rounded-xl p-6 shadow-sm sticky top-24 mb-8">
                <h3 className="text-lg font-bold text-[#1A2C56] mb-4 border-r-4 border-[#D4AF37] pr-3">
                  محتويات المقال
                </h3>
                <nav>
                  <ul className="space-y-2">
                    {headings.map(heading => (
                      <li key={heading.id}>
                        <a 
                          href={`#${heading.id}`}
                          className={`block py-2 pr-3 border-r-2 text-sm hover:text-[#D4AF37] transition-colors ${
                            currentHeading === heading.id 
                              ? 'border-[#D4AF37] text-[#D4AF37] font-bold' 
                              : 'border-gray-200 text-gray-600'
                          }`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            {/* Related Posts - Hidden on mobile, shown in desktop sidebar */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div className="hidden lg:block mb-8">
                <RelatedPosts posts={relatedPosts} />
              </div>
            )}

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-[#1A2C56] to-[#2A3F6B] text-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">هل تحتاج إلى مساعدة؟</h3>
              <p className="mb-6 text-white/90">
                تواصل مع خبرائنا للحصول على استشارة مجانية حول تقييم أضرار الأثاث والمطالبات التأمينية.
              </p>
              <Link href="/contact" className="block w-full bg-[#D4AF37] text-[#1A2C56] text-center px-4 py-3 rounded-lg font-bold hover:bg-[#E5C158] transition-colors">
                طلب استشارة
              </Link>
            </div>

            {/* Related Categories */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <h3 className="text-lg font-bold text-[#1A2C56] mb-4">
                فئات ذات صلة
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog?category=technical" className="bg-gray-100 text-gray-700 text-sm px-3 py-2 rounded-lg hover:bg-[#1A2C56] hover:text-white transition-colors">
                  مقالات تقنية
                </Link>
                <Link href="/blog?category=advisory" className="bg-gray-100 text-gray-700 text-sm px-3 py-2 rounded-lg hover:bg-[#1A2C56] hover:text-white transition-colors">
                  نصائح استشارية
                </Link>
                <Link href="/blog?category=legal" className="bg-gray-100 text-gray-700 text-sm px-3 py-2 rounded-lg hover:bg-[#1A2C56] hover:text-white transition-colors">
                  مقالات قانونية
                </Link>
                <Link href="/blog?category=educational" className="bg-gray-100 text-gray-700 text-sm px-3 py-2 rounded-lg hover:bg-[#1A2C56] hover:text-white transition-colors">
                  مقالات تعليمية
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1A2C56] mb-4">
                اشترك في النشرة البريدية
              </h3>
              <p className="text-gray-600 mb-4">
                احصل على أحدث المقالات والنصائح مباشرة إلى بريدك الإلكتروني.
              </p>
              <form className="space-y-3">
                <input 
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
                <button type="submit" className="w-full bg-[#1A2C56] text-white px-4 py-3 rounded-lg font-bold hover:bg-[#2A3F6B] transition-colors">
                  اشتراك
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.
              </p>
            </div>
          </aside>
        </div>
        
        {/* Mobile Related Posts (shown below article on mobile) */}
        <div className="lg:hidden mt-12">
          {relatedPosts && relatedPosts.length > 0 && (
            <RelatedPosts posts={relatedPosts} />
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetail; 