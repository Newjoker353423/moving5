import Link from 'next/link';
import Image from 'next/image';
import { formatDate, getCategoryName } from '../../lib/utils';

const RelatedPosts = ({ posts, title = 'مقالات ذات صلة' }) => {
  // Get post image based on slug and category
  const getPostImage = (post) => {
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
    if (post.slug && slugToImage[post.slug]) {
      return slugToImage[post.slug];
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
    return post.image || categoryImages[post.category] || '/images/furniture_transportation_experts.jpeg';
  };

  if (!posts || posts.length === 0) return null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-[#1A2C56] mb-6 border-r-4 border-[#D4AF37] pr-3">
        {title}
      </h3>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={post.slug}
            className="flex gap-4 group"
          >
            <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <Image 
                src={getPostImage(post)}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#1A2C56] transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center text-sm text-gray-500 mb-1">
                <span className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                {getCategoryName(post.category)}
              </span>
                <span className="mx-2">•</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link 
          href="/blog"
          className="text-[#D4AF37] hover:text-[#1A2C56] transition-colors font-medium"
        >
          عرض المزيد من المقالات
        </Link>
      </div>
    </div>
  );
};

export default RelatedPosts; 