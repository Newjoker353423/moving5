// Import Node.js modules conditionally to prevent client-side errors
let fs;
let path;
let matter;

if (typeof window === 'undefined') {
  fs = require('fs');
  path = require('path');
  matter = require('gray-matter');
  // ESM modules need to be imported asynchronously
  // We'll handle this in the getPostData function
} else {
  // Client-side imports
  matter = require('gray-matter');
}

let postsDirectory;
if (typeof window === 'undefined') {
  postsDirectory = path.join(process.cwd(), 'posts');
}

// Mock data for client-side rendering with correct image paths
const mockPosts = [
  {
    slug: 'types-of-wood-fractures-and-how-to-identify-their-causes',
    title: 'أنواع كسور الخشب وكيفية تحديد أسبابها',
    date: '2025-05-20',
    author: 'سلطان الغامدي',
    category: 'technical',
    excerpt: 'شرح تفصيلي لأنواع كسور الخشب المختلفة وأسبابها، وكيفية تمييز كسور النقل عن الكسور الناتجة عن عوامل أخرى مع أمثلة عملية ونصائح الخبراء.',
    readTime: '8 دقائق',
    image: '/images/specialized_furniture_moving.jpeg'
  },
  {
    slug: 'hidden-damage-detection-techniques',
    title: 'تقنيات الكشف عن الأضرار الخفية في الأثاث',
    date: '2025-05-19',
    author: 'سلطان الغامدي',
    category: 'technical',
    excerpt: 'دليل شامل للتقنيات المتقدمة في اكتشاف الأضرار غير المرئية في الأثاث، من الفحص بالموجات فوق الصوتية إلى التصوير الحراري والأساليب التقليدية المجربة.',
    readTime: '10 دقائق',
    image: '/images/professional_moving_equipment.jpeg'
  },
  {
    slug: 'distinguishing-old-vs-new-damage',
    title: 'كيف تفرق بين الضرر السابق والضرر الحديث',
    date: '2025-05-18',
    author: 'سلطان الغامدي',
    category: 'technical',
    excerpt: 'دليل متخصص لتمييز الأضرار القديمة عن الحديثة في الأثاث، مع معايير علمية دقيقة وأمثلة عملية لضمان تقييم عادل ودقيق للمطالبات التأمينية والقانونية.',
    readTime: '12 دقيقة',
    image: '/images/furniture_wrapping_services.jpeg'
  },
  {
    slug: 'how-to-choose-a-moving-company-to-reduce-damage-risks',
    title: 'كيف تختار شركة نقل عفش لتقليل مخاطر الضرر',
    date: '2025-05-17',
    author: 'خالد العتيبي',
    category: 'advisory',
    excerpt: 'دليل شامل لاختيار شركة نقل عفش موثوقة في المملكة العربية السعودية، مع نصائح عملية لتقليل مخاطر تضرر الأثاث أثناء النقل وتجنب المشاكل الشائعة.',
    readTime: '15 دقيقة',
    image: '/images/reliable_movers_riyadh.jpeg'
  },
  {
    slug: 'comprehensive-furniture-inspection-checklist',
    title: 'قائمة تحقق شاملة قبل توقيع استلام الأثاث',
    date: '2025-05-16',
    author: 'نورة الدوسري',
    category: 'advisory',
    excerpt: 'دليل تفصيلي لفحص الأثاث قبل توقيع إيصال الاستلام، مع قائمة تحقق شاملة تضمن حماية حقوقك وتجنب المشاكل المستقبلية مع شركات النقل والتأمين.',
    readTime: '12 دقيقة',
    image: '/images/professional_packing_team.jpeg'
  },
  {
    slug: 'essential-documents-for-furniture-protection',
    title: 'الوثائق الضرورية لحماية حقوقك أثناء نقل العفش',
    date: '2025-05-15',
    author: 'تركي الشهري',
    category: 'advisory',
    excerpt: 'دليل شامل للوثائق والمستندات الأساسية التي تحتاجها لحماية حقوقك أثناء نقل الأثاث، مع نماذج عملية ونصائح لتجنب المشاكل القانونية والمالية.',
    readTime: '14 دقيقة',
    image: '/images/best_furniture_relocation_jeddah.jpeg'
  },
  {
    slug: 'legal-rights-furniture-damage-during-transport',
    title: 'حقوقك القانونية عند تضرر الأثاث أثناء النقل',
    date: '2025-05-14',
    author: 'فهد الحربي',
    category: 'legal',
    excerpt: 'دليل شامل لحقوقك القانونية في المملكة العربية السعودية عند تضرر الأثاث أثناء النقل، مع شرح الإجراءات القانونية والمسارات المتاحة للحصول على التعويض العادل.',
    readTime: '16 دقيقة',
    image: '/images/office_relocation_services.jpeg'
  },
  {
    slug: 'how-to-prepare-successful-insurance-claim',
    title: 'كيفية إعداد ملف مطالبة تأمينية ناجحة',
    date: '2025-05-13',
    author: 'فهد الحربي',
    category: 'legal',
    excerpt: 'دليل شامل لإعداد ملف مطالبة تأمينية قوي ومقنع، مع الخطوات العملية والوثائق المطلوبة لضمان الحصول على التعويض العادل من شركة التأمين.',
    readTime: '18 دقيقة',
    image: '/images/commercial_moving_services.jpeg'
  },
  {
    slug: 'importance-of-photographic-documentation',
    title: 'أهمية التوثيق المصور قبل وبعد عملية النقل',
    date: '2025-05-12',
    author: 'نورة الدوسري',
    category: 'advisory',
    excerpt: 'دليل شامل لأهمية التوثيق المصور في حماية حقوقك أثناء نقل الأثاث، مع تقنيات التصوير الاحترافية والأخطاء الشائعة التي يجب تجنبها.',
    readTime: '14 دقيقة',
    image: '/images/professional_packing_team.jpeg'
  },
  {
    slug: 'guide-to-packing-valuable-fragile-items',
    title: 'دليل تغليف القطع الثمينة والهشة',
    date: '2025-05-11',
    author: 'تركي الشهري',
    category: 'educational',
    excerpt: 'دليل تفصيلي لتغليف وحماية القطع الثمينة والهشة أثناء النقل، مع تقنيات احترافية ومواد متخصصة لضمان وصولها سالمة.',
    readTime: '16 دقيقة',
    image: '/images/furniture_wrapping_services.jpeg'
  },
  {
    slug: 'furniture-inspection-upon-arrival',
    title: 'كيفية فحص الأثاث فور وصوله إلى المنزل الجديد',
    date: '2025-05-10',
    author: 'خالد العتيبي',
    category: 'educational',
    excerpt: 'دليل شامل لفحص الأثاث بطريقة احترافية فور وصوله، مع قوائم تحقق مفصلة وإجراءات التوثيق اللازمة لحماية حقوقك.',
    readTime: '12 دقيقة',
    image: '/images/house_moving_experts_jeddah.jpeg'
  },
  {
    slug: 'common-furniture-assembly-problems',
    title: 'التعامل مع المشاكل الشائعة أثناء فك وتركيب الأثاث',
    date: '2025-05-09',
    author: 'ماجد القحطاني',
    category: 'educational',
    excerpt: 'دليل شامل لحل المشاكل الشائعة التي تواجه عملية فك وتركيب الأثاث، مع حلول عملية ونصائح احترافية لتجنب الأضرار.',
    readTime: '14 دقيقة',
    image: '/images/furniture_assembly_jeddah.jpeg'
  },
  {
    slug: 'transport-damage-impact-on-luxury-furniture-value',
    title: 'كيف تؤثر أضرار النقل على قيمة الأثاث الفاخر',
    date: '2025-05-08',
    author: 'سلطان الغامدي',
    category: 'market',
    excerpt: 'تحليل شامل لتأثير أضرار النقل على القيمة السوقية للأثاث الفاخر، مع دراسات حالة ونصائح لحماية الاستثمار في القطع الثمينة.',
    readTime: '16 دقيقة',
    image: '/images/furniture_movers_saudi_arabia.jpeg'
  },
  {
    slug: 'latest-furniture-tracking-and-insurance-technologies',
    title: 'أحدث تقنيات تتبع شحنات الأثاث وتأمينها',
    date: '2025-05-06',
    author: 'تركي الشهري',
    category: 'market',
    excerpt: 'استعراض لأحدث التقنيات المستخدمة في تتبع شحنات الأثاث وحمايتها، مع تحليل لفوائدها في تقليل المخاطر وتوثيق عمليات النقل بشكل احترافي.',
    readTime: '14 دقيقة',
    image: '/images/professional_moving_equipment.jpeg'
  },
  {
    slug: 'household-goods-insurance-market-trends-saudi',
    title: 'اتجاهات سوق التأمين على المنقولات المنزلية في السعودية',
    date: '2025-05-05',
    author: 'فهد الحربي',
    category: 'market',
    excerpt: 'تحليل شامل لاتجاهات سوق التأمين على المنقولات المنزلية في المملكة، مع نظرة على التطورات الأخيرة والتوقعات المستقبلية وأفضل الشركات.',
    readTime: '18 دقيقة',
    image: '/images/international_moving_services.jpeg'
  },
  {
    slug: 'uniform-management-systems-for-saudi-hospitals-and-clinics',
    title: 'أنظمة إدارة الزي الموحد للمستشفيات والعيادات السعودية',
    date: '2025-05-07',
    author: 'محمد الشمري',
    category: 'healthcare',
    excerpt: 'دليل شامل لإدارة الزي الموحد في المؤسسات الصحية السعودية، مع استراتيجيات لضمان الامتثال للمعايير وتعزيز الهوية المؤسسية.',
    readTime: '10 دقائق',
    image: '/images/residential_moving_jeddah.jpeg'
  }
];

// Get all post data
export function getAllPosts() {
  // Server-side execution
  if (typeof window === 'undefined' && fs) {
    try {
      // Get file names under /posts
      const fileNames = fs.readdirSync(postsDirectory);
      const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
          slug,
          ...matterResult.data,
        };
      });

      // Sort posts by date
      return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });
    } catch (error) {
      console.error('Error getting posts:', error);
      return [...mockPosts];
    }
  } 
  // Client-side execution - use mock data
  else {
    return [...mockPosts].sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}

// Get all post slugs
export function getAllPostSlugs() {
  // Server-side execution
  if (typeof window === 'undefined' && fs) {
    try {
      const fileNames = fs.readdirSync(postsDirectory);
      return fileNames.map((fileName) => {
        return {
          params: {
            slug: fileName.replace(/\.md$/, ''),
          },
        };
      });
    } catch (error) {
      console.error('Error getting post slugs:', error);
      return mockPosts.map(post => ({ params: { slug: post.slug } }));
    }
  } 
  // Client-side execution - use mock data
  else {
    return mockPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    });
  }
}

// Get full post data including HTML content
export async function getPostData(slug) {
  if (typeof window === 'undefined' && fs) {
    try {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Import remark and remark-html dynamically (ESM modules)
      const [remarkPkg, remarkHtmlPkg] = await Promise.all([
        import('remark'),
        import('remark-html')
      ]);

      // Use remark to convert markdown into HTML string
      const processedContent = await remarkPkg.remark()
        .use(remarkHtmlPkg.default)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      // Combine the data with the id and contentHtml
      return {
        slug,
        contentHtml,
        ...matterResult.data,
      };
    } catch (error) {
      console.error(`Error processing post ${slug}:`, error);
      return {
        slug,
        contentHtml: '<p>المحتوى غير متوفر</p>',
        title: 'عنوان غير متوفر',
        date: 'تاريخ غير متوفر',
        excerpt: 'محتوى غير متوفر',
      };
    }
  } else {
    // Return mock data for client-side
    const post = mockPosts.find((post) => post.slug === slug);
    return {
      ...post,
      contentHtml: `<h1>${post?.title || 'عنوان المقال'}</h1><p>${post?.excerpt || 'محتوى المقال'}</p>`,
    };
  }
}

// Get all categories
export function getAllCategories() {
  const posts = getAllPosts();
  const categories = new Set();
  
  posts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  
  return Array.from(categories);
}

// Get posts by category
export function getPostsByCategory(category) {
  const posts = getAllPosts();
  
  if (category === 'all') {
    return posts;
  }
  
  return posts.filter(post => post.category === category);
}

// Paginate posts
export function paginatePosts(posts, page = 1, limit = 9) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / limit);
  
  return {
    posts: paginatedPosts,
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts: posts.length,
    },
  };
}

export function getRelatedPosts(currentPostId, currentCategory, limit = 3) {
  const allPosts = getAllPosts();
  
  // Filter posts in same category but exclude current post
  const sameCategoryPosts = allPosts
    .filter(post => post.category === currentCategory && post.slug !== currentPostId)
    .slice(0, limit);
  
  // If we don't have enough related posts, add some recent posts
  if (sameCategoryPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => post.slug !== currentPostId && !sameCategoryPosts.find(p => p.slug === post.slug))
      .slice(0, limit - sameCategoryPosts.length);
    
    return [...sameCategoryPosts, ...recentPosts];
  }
  
  return sameCategoryPosts;
}

// Helper function specifically for next.js getStaticProps
export function getSortedPostsData() {
  return getAllPosts();
}

// Get all post data with HTML content
export async function getAllPostsWithContent() {
  const allPosts = getAllPosts();
  
  // Map each post to include HTML content
  const postsWithContent = await Promise.all(
    allPosts.map(async (post) => {
      // We already fixed getPostData to use dynamic imports
      const fullPost = await getPostData(post.slug);
      return fullPost;
    })
  );
  
  return postsWithContent;
} 