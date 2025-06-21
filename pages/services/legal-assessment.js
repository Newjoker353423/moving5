import SEO from '../../components/common/SEO';
import Link from 'next/link';

export default function LegalAssessment() {
  const legalServices = [
    {
      title: 'النزاعات التجارية',
      description: 'تقييم الأضرار في النزاعات بين الشركات والمؤسسات التجارية',
      cases: '150+ قضية',
      successRate: '95%'
    },
    {
      title: 'القضايا المدنية',
      description: 'تقييم الأضرار في القضايا المدنية والشخصية',
      cases: '200+ قضية',
      successRate: '92%'
    },
    {
      title: 'قضايا التأمين',
      description: 'النزاعات مع شركات التأمين حول قيمة التعويضات',
      cases: '100+ قضية',
      successRate: '98%'
    },
    {
      title: 'القضايا العمالية',
      description: 'تقييم أضرار الممتلكات في بيئة العمل',
      cases: '80+ قضية',
      successRate: '90%'
    }
  ];

  return (
    <>
      <SEO
        title="التقييم القانوني - مكتب الخبير المعتمد"
        description="خدمة التقييم القانوني المتخصصة للقضايا والنزاعات مع إعداد تقارير معتمدة للمحاكم وشهادة الخبرة"
        canonicalUrl="https://furniture-expert.org/services/legal-assessment"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
              <span className="text-[#D4AF37] font-semibold text-lg">التقييم القانوني</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              خبرة قانونية معتمدة للمحاكم
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              تقييم احترافي للأضرار في القضايا القانونية مع إعداد تقارير معتمدة وشهادة خبرة أمام المحاكم
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-[#D4AF37] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#E5C158] transition-colors font-semibold"
              >
                احجز استشارة قانونية
              </Link>
              <a 
                href="tel:+966-5X-XXX-XXXX" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A2C56] transition-colors font-semibold"
              >
                اتصل للطوارئ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Service Overview */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A2C56] mb-6">لماذا تحتاج خبير معتمد للقضايا القانونية؟</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    في القضايا القانونية، يلعب تقييم الأضرار دوراً حاسماً في تحديد قيمة التعويضات. 
                    المحاكم تتطلب تقارير من خبراء معتمدين لضمان العدالة والدقة في الأحكام.
                  </p>
                  <p className="mb-4">
                    نحن نقدم خدمات تقييم قانونية متخصصة مع خبراء مرخصين ومعتمدين من الجهات المختصة، 
                    مما يضمن قبول تقاريرنا في جميع المحاكم السعودية.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="font-semibold text-blue-800">خبراء مرخصون</span>
                    </div>
                    <p className="text-blue-700 text-sm">جميع خبرائنا مرخصون من وزارة العدل ومعتمدون للشهادة أمام المحاكم</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/office_relocation_services.jpeg"
                  alt="التقييم القانوني"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C56]/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-[#1A2C56]">500+</div>
                  <div className="text-sm text-gray-600">قضية ناجحة</div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Services */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">أنواع القضايا التي نتعامل معها</h2>
              <p className="text-gray-600 text-lg">خبرة واسعة في مختلف أنواع القضايا القانونية</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {legalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">القضايا المنجزة</div>
                      <div className="text-lg font-bold text-[#1A2C56]">{service.cases}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">نسبة النجاح</div>
                      <div className="text-lg font-bold text-green-600">{service.successRate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">رسوم الخدمة القانونية</h2>
              <p className="text-gray-600 text-lg">رسوم شفافة ومناسبة لجميع أنواع القضايا</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">التقرير الأساسي</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">1,200 ريال</div>
                  <p className="text-gray-600 text-sm">للقضايا البسيطة</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقرير فني معتمد</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">توثيق فوتوغرافي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقدير الأضرار</span>
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-gray-100 text-[#1A2C56] py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                >
                  اطلب الآن
                </Link>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#D4AF37] relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  الأكثر طلباً
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">التقرير المتقدم</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">2,000 ريال</div>
                  <p className="text-gray-600 text-sm">للقضايا المعقدة</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقرير شامل ومفصل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تحليل فني متقدم</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">استشارة قانونية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">مراجعة قانونية</span>
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-[#1A2C56] text-white py-3 rounded-lg hover:bg-[#2A3F6B] transition-colors font-semibold"
                >
                  اطلب الآن
                </Link>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">الخدمة الشاملة</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">3,500 ريال</div>
                  <p className="text-gray-600 text-sm">مع الشهادة في المحكمة</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقرير شامل معتمد</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">شهادة أمام المحكمة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">استشارة قانونية شاملة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">متابعة القضية</span>
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-gray-100 text-[#1A2C56] py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                >
                  اطلب الآن
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">لديك قضية قانونية؟</h2>
              <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                احصل على تقرير خبرة معتمد يساعدك في كسب قضيتك والحصول على حقوقك كاملة
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-[#D4AF37] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#E5C158] transition-colors font-semibold"
                >
                  احجز استشارة قانونية
                </Link>
                <a 
                  href="tel:+966-5X-XXX-XXXX" 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A2C56] transition-colors font-semibold"
                >
                  اتصل للطوارئ
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}