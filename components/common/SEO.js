import Head from 'next/head';

const SEO = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogType = 'website',
  ogImage = '/images/furniture_transportation_experts.jpeg',
  structuredData = null,
  keywords = '',
  author = 'مكتب الخبير المعتمد',
  publishedTime = null,
  modifiedTime = null,
  article = false,
  noindex = false,
  nofollow = false
}) => {
  const siteTitle = 'مكتب الخبير المعتمد | خبراء تقييم أضرار الأثاث';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'خبراء معتمدون في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع خبرة تزيد عن 15 عاماً';
  const metaDescription = description || defaultDescription;
  const defaultKeywords = 'تقييم أضرار الأثاث, خبير معتمد, السعودية, مطالبات تأمينية, تقييم قانوني, الأثاث الثمين, استشارات مهنية';
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#1A2C56" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Language and Locale */}
      <meta name="language" content="Arabic" />
      <meta httpEquiv="content-language" content="ar-SA" />
      <meta name="geo.region" content="SA" />
      <meta name="geo.country" content="Saudi Arabia" />
      <meta name="geo.placename" content="Jeddah" />
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'},max-snippet:-1,max-image-preview:large,max-video-preview:-1`} />
      <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
      <meta name="bingbot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content="مكتب الخبير المعتمد" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:locale:alternate" content="en_US" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={`https://fakhrkhaleej.com${ogImage}`} />
      <meta property="og:image:alt" content={title || 'مكتب الخبير المعتمد لتقييم أضرار الأثاث'} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Article specific Open Graph */}
      {article && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content="تقييم أضرار الأثاث" />
          <meta property="article:tag" content={metaKeywords} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fakhrkhaleej" />
      <meta name="twitter:creator" content="@fakhrkhaleej" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`https://fakhrkhaleej.com${ogImage}`} />
      <meta name="twitter:image:alt" content={title || 'مكتب الخبير المعتمد'} />
      
      {/* Apple specific */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="الخبير المعتمد" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      
      {/* Microsoft specific */}
      <meta name="msapplication-TileColor" content="#1A2C56" />
      <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Favicons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Security headers */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Performance hints */}
      <link rel="preload" href="/fonts/arabic-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Additional meta for better SEO */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="expires" content="never" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Link Relations */}
      <link rel="home" href="https://fakhrkhaleej.com" />
      <link rel="help" href="https://fakhrkhaleej.com/contact" />
      <link rel="search" href="https://fakhrkhaleej.com/blog/search" />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="ar" href={canonicalUrl || 'https://fakhrkhaleej.com'} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl || 'https://fakhrkhaleej.com'} />
    </Head>
  );
};

export default SEO; 