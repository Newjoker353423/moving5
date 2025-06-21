import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '../lib/posts';
import { getMultipleImagesForCategory } from '../lib/imageUtils';
import { NextSeo } from 'next-seo';
import { format } from 'date-fns';
import SEO from '../components/common/SEO';
import { getAllPosts } from '../lib/posts';
import { 
  generateOrganizationSchema, 
  generateWebsiteSchema, 
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateBreadcrumbSchema 
} from '../lib/schema';

export default function Home({ allPostsData, featuredImages, recentPosts }) {
  // Breadcrumb for homepage
  const breadcrumbs = [
    { name: 'الرئيسية', url: '/' }
  ];

  // FAQ data for structured markup
  const faqs = [
    {
      question: 'ما هي خدمات تقييم أضرار الأثاث؟',
      answer: 'نقدم خدمات تقييم شاملة للأضرار التي تلحق بالأثاث أثناء النقل أو بسبب عوامل أخرى، مع إعداد التقارير المطلوبة للمطالبات التأمينية والقضايا القانونية.'
    },
    {
      question: 'كم تستغرق عملية التقييم؟',
      answer: 'عادة ما تستغرق عملية التقييم من يوم إلى ثلاثة أيام عمل حسب حجم وتعقيد الحالة.'
    },
    {
      question: 'هل تقدمون خدماتكم في جميع أنحاء المملكة؟',
      answer: 'نعم، نقدم خدماتنا في جميع مدن المملكة العربية السعودية مع فريق من الخبراء المعتمدين.'
    }
  ];

  const structuredData = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateServiceSchema(),
    generateBreadcrumbSchema(breadcrumbs),
    {
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
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <NextSeo
        title="مكتب الخبير المعتمد - خبراء تقييم أضرار الأثاث في السعودية"
        description="خبراء معتمدون في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع خبرة تزيد عن 15 عاماً. خدمات تقييم احترافية للمطالبات التأمينية والقضايا القانونية."
        canonical="https://fakhrkhaleej.com/"
        openGraph={{
          url: 'https://fakhrkhaleej.com/',
          title: 'مكتب الخبير المعتمد - خبراء تقييم أضرار الأثاث في السعودية',
          description: 'خبراء معتمدون في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع خبرة تزيد عن 15 عاماً',
          images: [
            {
              url: 'https://fakhrkhaleej.com/images/og-homepage.jpg',
              width: 1200,
              height: 630,
              alt: 'مكتب الخبير المعتمد لتقييم أضرار الأثاث',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'تقييم أضرار الأثاث, خبير معتمد السعودية, مطالبات تأمينية, تقييم قانوني, الأثاث الثمين, استشارات مهنية, تقييم النقل, خبراء الأثاث جدة, تقييم الممتلكات, ضرر الأثاث'
          },
          {
            name: 'author',
            content: 'مكتب الخبير المعتمد'
          },
          {
            name: 'publisher',
            content: 'مكتب الخبير المعتمد'
          },
          {
            name: 'robots',
            content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          }
        ]}
      />
      
      <Head>
        <title>مكتب الخبير المعتمد - خبراء تقييم أضرار الأثاث في السعودية</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="خبراء معتمدون في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع خبرة تزيد عن 15 عاماً" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <main>
        <section className="hero bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-20 rounded-2xl mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#D4AF37]/10 blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#D4AF37]/10 blur-xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
                <span className="text-[#D4AF37] font-semibold text-lg">مكتب الخبير المعتمد</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                خبراء تقييم أضرار الأثاث في المملكة العربية السعودية
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
                نقدم خدمات تقييم احترافية للأضرار التي تلحق بالأثاث والممتلكات، مع خبرة تزيد عن 15 عاماً في المجال
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services" className="bg-[#D4AF37] text-[#1A2C56] font-bold py-4 px-8 rounded-xl hover:bg-[#E5C158] transition-all transform hover:scale-105 shadow-lg">
                  استكشف خدماتنا
                </Link>
                <Link href="/case-studies" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-[#1A2C56] transition-all">
                  دراسات الحالة
                </Link>
              </div>
              
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "+1000", label: "حالة مُقيمة" },
                  { value: "15+", label: "سنة خبرة" },
                  { value: "97%", label: "نسبة النجاح" },
                  { value: "24/7", label: "دعم متواصل" }
                ].map((stat, index) => (
                  <div key={`stat-${index}`} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="featured-categories mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#1A2C56] text-center">خدماتنا المتخصصة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, name: 'تقييم أضرار النقل', desc: 'تقييم شامل للأضرار التي تلحق بالأثاث أثناء عمليات النقل والشحن', image: '/images/furniture_transportation_experts.jpeg' },
              { id: 2, name: 'المطالبات التأمينية', desc: 'إعداد التقارير والوثائق اللازمة للمطالبات التأمينية', image: '/images/professional_moving_services_jeddah.jpeg' },
              { id: 3, name: 'التقييم القانوني', desc: 'تقييم الأضرار للقضايا القانونية والنزاعات التجارية', image: '/images/office_relocation_services.jpeg' },
              { id: 4, name: 'تقييم الأثاث الثمين', desc: 'تقييم متخصص للأثاث الأنتيك والقطع الثمينة', image: '/images/specialized_furniture_moving.jpeg' },
              { id: 5, name: 'الاستشارات المهنية', desc: 'استشارات متخصصة في حماية الأثاث والممتلكات', image: '/images/reliable_movers_riyadh.jpeg' },
              { id: 6, name: 'التدريب والتأهيل', desc: 'برامج تدريبية لتأهيل خبراء تقييم الأضرار', image: '/images/professional_packing_team.jpeg' }
            ].map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link href="/services" className="text-[#1A2C56] font-semibold hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                    اعرف المزيد
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="latest-posts mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#1A2C56]">أحدث المقالات المتخصصة</h2>
            <Link href="/blog" className="text-[#1A2C56] font-semibold hover:text-[#D4AF37] transition-colors flex items-center gap-2">
              عرض جميع المقالات
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.slice(0, 6).map((post) => (
              <div key={post.id || post.slug} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image || getMultipleImagesForCategory(post.category, 1)[0]}
                    alt={post.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#1A2C56]/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
                      {getCategoryName(post.category)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A2C56] line-clamp-2 leading-tight">
                    <Link href={`/blog/${post.id || post.slug}`} className="hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#1A2C56] to-[#2A3F6B] rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {post.author.split(' ')[0].charAt(0)}
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-900 font-semibold">{post.author}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id || post.slug}`}
                      className="text-[#1A2C56] hover:text-[#D4AF37] font-semibold text-sm flex items-center gap-1 transition-colors"
                    >
                      اقرأ المزيد
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] rounded-2xl p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-6 left-6 w-24 h-24 rounded-full bg-[#D4AF37]/20 blur-xl"></div>
          <div className="absolute bottom-6 right-6 w-32 h-32 rounded-full bg-[#D4AF37]/20 blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تحتاج إلى تقييم خبير لأضرار الأثاث؟</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              فريقنا المتخصص جاهز لمساعدتك في تقييم الأضرار وإعداد التقارير اللازمة للمطالبات التأمينية والقضايا القانونية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-[#D4AF37] text-[#1A2C56] font-bold py-4 px-8 rounded-xl hover:bg-[#E5C158] transition-all transform hover:scale-105 shadow-lg">
                تواصل معنا الآن
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-[#1A2C56] transition-all">
                تعرف على خدماتنا
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm opacity-80">
              {[
                {
                  id: 'phone',
                  icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>,
                  text: '+966-5X-XXX-XXXX'
                },
                {
                  id: 'email',
                  icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>,
                  text: 'contact@furniture-expert.org'
                },
                {
                  id: 'location',
                  icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>,
                  text: 'جدة، المملكة العربية السعودية'
                }
              ].map(contact => (
                <div key={contact.id} className="flex items-center gap-2">
                  {contact.icon}
                  {contact.text}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  // Get featured images for the six main categories
  const categories = ['healthcare', 'hospitality', 'education', 'security', 'aviation', 'government'];
  const featuredImages = categories.map(category => {
    return getMultipleImagesForCategory(category, 1)[0];
  });
  
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);
  
  return {
    props: {
      allPostsData,
      featuredImages,
      recentPosts,
    },
  };
} 