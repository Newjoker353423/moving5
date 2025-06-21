import { format, parseISO } from 'date-fns';
import { ar } from 'date-fns/locale';

// Format date in Arabic locale
export function formatDate(dateString) {
  const date = parseISO(dateString);
  return format(date, 'dd MMMM yyyy', { locale: ar });
}

// Convert post title to slug
export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\u0621-\u064A\u0660-\u0669a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Get reading time estimate
export function getReadingTime(text) {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}

// Generate schema markup for blog posts
export function generatePostSchema(post, siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'datePublished': post.date,
    'dateModified': post.date,
    'author': {
      '@type': 'Person',
      'name': post.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'مكتب الخبير المعتمد',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/images/logo.png`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`
    }
  };
}

// Get category name in Arabic
export function getCategoryName(categorySlug) {
  const categories = {
    'furniture-damage': 'أضرار الأثاث',
    'insurance-claims': 'المطالبات التأمينية',
    'legal': 'القضايا القانونية',
    'technical': 'تقنيات التقييم',
    'advisory': 'استشارات',
    'market': 'سوق الأثاث',
    'educational': 'تعليمي',
    'healthcare': 'الرعاية الصحية',
  };
  
  return categories[categorySlug] || categorySlug;
}

// Get related posts from the same category
export function getRelatedPosts(currentPost, allPosts, limit = 3) {
  return allPosts
    .filter(post => 
      post.slug !== currentPost.slug && 
      post.category === currentPost.category
    )
    .slice(0, limit);
} 