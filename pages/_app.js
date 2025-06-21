import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { generateOrganizationSchema, generateWebsiteSchema } from '../lib/schema';

// Default SEO configuration
const defaultSEO = {
  title: 'مكتب الخبير المعتمد | خبراء تقييم أضرار الأثاث في السعودية',
  description: 'خبراء معتمدون في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع خبرة تزيد عن 15 عاماً',
  canonical: 'https://fakhrkhaleej.com',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://fakhrkhaleej.com',
    siteName: 'مكتب الخبير المعتمد',
    title: 'مكتب الخبير المعتمد | خبراء تقييم أضرار الأثاث في السعودية',
    description: 'خبراء معتمدون في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع خبرة تزيد عن 15 عاماً',
    images: [
      {
        url: 'https://fakhrkhaleej.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مكتب الخبير المعتمد لتقييم أضرار الأثاث',
      }
    ]
  },
  twitter: {
    handle: '@fakhrkhaleej',
    site: '@fakhrkhaleej',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'theme-color',
      content: '#1A2C56'
    },
    {
      httpEquiv: 'content-language',
      content: 'ar-SA'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: '/images/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous'
    }
  ]
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Head>
        {/* Global Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generateOrganizationSchema(),
              generateWebsiteSchema()
            ])
          }}
        />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/arabic-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Performance optimization */}
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        
        {/* Geo location */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.country" content="Saudi Arabia" />
        <meta name="geo.placename" content="Jeddah" />
        
        {/* Language alternatives */}
        <link rel="alternate" hrefLang="ar" href="https://fakhrkhaleej.com" />
        <link rel="alternate" hrefLang="x-default" href="https://fakhrkhaleej.com" />
        
        {/* Webmaster tools verification (uncomment when ready) */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        {/* <meta name="msvalidate.01" content="your-bing-verification-code" /> */}
        {/* <meta name="yandex-verification" content="your-yandex-verification-code" /> */}
      </Head>
      
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </>
  );
}

export default MyApp; 