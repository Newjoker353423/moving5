// Schema markup utilities for SEO
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "مكتب الخبير المعتمد لتقييم أضرار الأثاث",
    "alternateName": "Fakhr Khaleej Expert Office",
    "url": "https://fakhrkhaleej.com",
    "logo": "https://fakhrkhaleej.com/images/logo.png",
    "description": "خبراء معتمدون في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع خبرة تزيد عن 15 عاماً",
    "foundingDate": "2008",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+966-5X-XXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"],
        "areaServed": "SA"
      },
      {
        "@type": "ContactPoint",
        "email": "info@fakhrkhaleej.com",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"],
        "areaServed": "SA"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "شارع الأمير محمد بن عبدالعزيز",
      "addressLocality": "جدة",
      "addressRegion": "مكة المكرمة",
      "addressCountry": "SA"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "المملكة العربية السعودية"
    },
    "knowsAbout": [
      "تقييم أضرار الأثاث",
      "المطالبات التأمينية",
      "التقييم القانوني للممتلكات",
      "تقييم الأثاث الثمين",
      "الاستشارات المهنية"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/fakhr-khaleej",
      "https://twitter.com/fakhrkhaleej",
      "https://www.facebook.com/fakhrkhaleej"
    ]
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "مكتب الخبير المعتمد",
    "alternateName": "Fakhr Khaleej Expert Office",
    "url": "https://fakhrkhaleej.com",
    "description": "موقع متخصص في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية",
    "inLanguage": "ar-SA",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fakhrkhaleej.com/blog/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@id": "https://fakhrkhaleej.com/#organization"
    }
  };
};

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url ? `https://fakhrkhaleej.com${breadcrumb.url}` : undefined
    }))
  };
};

export const generateArticleSchema = (post) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": [
      `https://fakhrkhaleej.com${post.image || '/images/furniture_transportation_experts.jpeg'}`
    ],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://fakhrkhaleej.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "مكتب الخبير المعتمد",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fakhrkhaleej.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://fakhrkhaleej.com/blog/${post.slug}`
    },
    "articleSection": getCategoryName(post.category),
    "wordCount": post.contentHtml ? post.contentHtml.split(' ').length : 1000,
    "timeRequired": post.readTime || "10 دقائق",
    "inLanguage": "ar-SA",
    "about": [
      {
        "@type": "Thing",
        "name": "تقييم أضرار الأثاث"
      },
      {
        "@type": "Thing", 
        "name": "المملكة العربية السعودية"
      }
    ]
  };
};

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "خدمات تقييم أضرار الأثاث",
    "description": "خدمات متخصصة في تقييم أضرار الأثاث والممتلكات للمطالبات التأمينية والقضايا القانونية",
    "provider": {
      "@type": "Organization",
      "name": "مكتب الخبير المعتمد",
      "url": "https://fakhrkhaleej.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://fakhrkhaleej.com/services",
      "servicePhone": "+966-5X-XXX-XXXX"
    },
    "serviceType": [
      "تقييم أضرار النقل",
      "المطالبات التأمينية", 
      "التقييم القانوني",
      "تقييم الأثاث الثمين",
      "الاستشارات المهنية"
    ]
  };
};

export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "subType": "Professional Service",
    "name": "مكتب الخبير المعتمد لتقييم أضرار الأثاث",
    "description": "خبراء معتمدون في تقييم أضرار الأثاث والممتلكات",
    "url": "https://fakhrkhaleej.com",
    "telephone": "+966-5X-XXX-XXXX",
    "email": "info@fakhrkhaleej.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "شارع الأمير محمد بن عبدالعزيز",
      "addressLocality": "جدة",
      "addressRegion": "مكة المكرمة",
      "postalCode": "21432",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.485811,
      "longitude": 39.192505
    },
    "openingHours": [
      "Mo-Th 08:00-17:00",
      "Su 08:00-17:00"
    ],
    "image": "https://fakhrkhaleej.com/images/office.jpg",
    "priceRange": "$$",
    "acceptsReservations": true,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "أحمد السعدي"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "خدمة ممتازة وتقييم دقيق للأضرار. فريق محترف وموثوق."
      }
    ]
  };
};

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
  return categoryNames[category] || 'مقالات عامة';
} 