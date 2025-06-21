// SEO Configuration for all pages
export const siteConfig = {
  name: 'مكتب الخبير المعتمد',
  title: 'مكتب الخبير المعتمد | خبراء تقييم أضرار الأثاث في السعودية',
  description: 'خبراء معتمدون في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع خبرة تزيد عن 15 عاماً',
  url: 'https://fakhrkhaleej.com',
  ogImage: 'https://fakhrkhaleej.com/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/fakhrkhaleej',
    facebook: 'https://facebook.com/fakhrkhaleej',
    linkedin: 'https://linkedin.com/company/fakhr-khaleej',
    instagram: 'https://instagram.com/fakhrkhaleej'
  },
  contact: {
    phone: '+966-5X-XXX-XXXX',
    email: 'info@fakhrkhaleej.com',
    address: 'شارع الأمير محمد بن عبدالعزيز، جدة، المملكة العربية السعودية'
  }
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: 'مكتب الخبير المعتمد - خبراء تقييم أضرار الأثاث في السعودية',
    description: 'خبراء معتمدون في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع خبرة تزيد عن 15 عاماً. خدمات تقييم احترافية للمطالبات التأمينية والقضايا القانونية.',
    keywords: 'تقييم أضرار الأثاث, خبير معتمد السعودية, مطالبات تأمينية, تقييم قانوني, الأثاث الثمين, استشارات مهنية, تقييم النقل, خبراء الأثاث جدة, تقييم الممتلكات, ضرر الأثاث',
    ogImage: '/images/og-homepage.jpg'
  },
  services: {
    title: 'خدماتنا المتخصصة في تقييم أضرار الأثاث | مكتب الخبير المعتمد',
    description: 'اكتشف خدماتنا المتخصصة في تقييم أضرار الأثاث: تقييم أضرار النقل، المطالبات التأمينية، التقييم القانوني، تقييم الأثاث الثمين، والاستشارات المهنية.',
    keywords: 'خدمات تقييم الأضرار, تقييم أضرار النقل, مطالبات تأمينية, تقييم قانوني, أثاث ثمين, استشارات مهنية',
    ogImage: '/images/og-services.jpg'
  },
  about: {
    title: 'عن مكتب الخبير المعتمد | خبراء تقييم الأضرار في السعودية',
    description: 'تعرف على مكتب الخبير المعتمد، الرائد في مجال تقييم أضرار الأثاث في المملكة العربية السعودية مع فريق من الخبراء المعتمدين وخبرة تزيد عن 15 عاماً.',
    keywords: 'مكتب الخبير المعتمد, خبراء تقييم, أضرار الأثاث, السعودية, خبرة 15 عام',
    ogImage: '/images/og-about.jpg'
  },
  contact: {
    title: 'تواصل معنا | مكتب الخبير المعتمد',
    description: 'تواصل مع فريق خبراء تقييم أضرار الأثاث المعتمدين للحصول على استشارة مجانية وخدمات تقييم احترافية في جميع أنحاء المملكة العربية السعودية.',
    keywords: 'تواصل معنا, استشارة مجانية, خبراء تقييم, أضرار الأثاث, السعودية',
    ogImage: '/images/og-contact.jpg'
  },
  blog: {
    title: 'مدونة مكتب الخبير المعتمد | مقالات متخصصة في تقييم الأضرار',
    description: 'اقرأ أحدث المقالات المتخصصة في تقييم أضرار الأثاث، نصائح الخبراء، والأدلة العملية لحماية أثاثك وممتلكاتك.',
    keywords: 'مدونة تقييم الأضرار, مقالات الأثاث, نصائح الخبراء, حماية الأثاث, تقييم الممتلكات',
    ogImage: '/images/og-blog.jpg'
  },
  caseStudies: {
    title: 'دراسات الحالة | مكتب الخبير المعتمد',
    description: 'استكشف دراسات الحالة الواقعية لمشاريع تقييم أضرار الأثاث التي نفذها فريق الخبراء المعتمدين بنجاح.',
    keywords: 'دراسات حالة, مشاريع تقييم, أضرار الأثاث, نجاحات الخبراء',
    ogImage: '/images/og-case-studies.jpg'
  },
  privacy: {
    title: 'سياسة الخصوصية | مكتب الخبير المعتمد',
    description: 'اطلع على سياسة الخصوصية وحماية البيانات في مكتب الخبير المعتمد لخدمات تقييم أضرار الأثاث.',
    keywords: 'سياسة الخصوصية, حماية البيانات, مكتب الخبير المعتمد',
    ogImage: '/images/og-privacy.jpg'
  },
  terms: {
    title: 'شروط الاستخدام | مكتب الخبير المعتمد',
    description: 'اقرأ شروط الاستخدام وأحكام الخدمة لموقع مكتب الخبير المعتمد لخدمات تقييم أضرار الأثاث.',
    keywords: 'شروط الاستخدام, أحكام الخدمة, مكتب الخبير المعتمد',
    ogImage: '/images/og-terms.jpg'
  }
};

// Helper function to get page config
export const getPageConfig = (pageName) => {
  return pageConfigs[pageName] || pageConfigs.home;
};

// Generate canonical URL
export const getCanonicalUrl = (path = '') => {
  return `${siteConfig.url}${path}`;
};

// Generate page title
export const generatePageTitle = (title, includeBaseline = true) => {
  if (!includeBaseline) return title;
  return title ? `${title} | ${siteConfig.name}` : siteConfig.title;
}; 