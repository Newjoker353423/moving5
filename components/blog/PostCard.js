import Link from 'next/link';
import { formatDate } from '../../lib/utils';

const PostCard = ({ post }) => {
  // Determine the image to use based on the post category and slug
  const getPostImage = (category, slug) => {
    // First check if post has its own image
    if (post.image) {
      return post.image;
    }
    
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
      'uniform-management-systems-for-saudi-hospitals-and-clinics': '/images/office_relocation_services.jpeg',
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
    
    return categoryImages[category] || '/images/furniture_transportation_experts.jpeg';
  };

  // Get author image
  const getAuthorImage = (authorName) => {
    const authorMap = {
      'سلطان الغامدي': '/images/author/Majed_AlQahtani.png',
      'خالد العتيبي': '/images/author/Khalid_AlOtaibi.png',
      'نورة الدوسري': '/images/author/Noura_AlDossary.png',
      'تركي الشهري': '/images/author/Turki_AlShehri .png',
      'فهد الحربي': '/images/author/Fahad_AlHarbi.png',
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

  return (
    <article className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#D4AF37]/20 transition-all duration-500 transform hover:-translate-y-2">
      {/* Image Section */}
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={getPostImage(post.category, post.slug)}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-[#1A2C56]/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      <div className="p-6">
        {/* Author Info */}
        <div className="flex items-center mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-[#F8F8F8] group-hover:ring-[#D4AF37]/30 transition-all duration-300">
            <img
              src={getAuthorImage(post.author)}
              alt={post.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mr-4">
            <p className="text-sm font-bold text-[#1A2C56]">{post.author}</p>
            <div className="flex items-center text-xs text-gray-500 gap-2">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {formatDate(post.date)}
              </span>
              {post.readTime && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {post.readTime}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#1A2C56] transition-colors">
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#1A2C56] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Read More Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#D4AF37] font-medium group-hover:gap-3 transition-all duration-300">
              <span>اقرأ المزيد</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            
            {/* Reading Progress Indicator */}
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Border Animation */}
      <div className="h-1 bg-gradient-to-r from-[#1A2C56] via-[#D4AF37] to-[#1A2C56] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
    </article>
  );
};

export default PostCard; 