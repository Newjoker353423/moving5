import SEO from '../components/common/SEO';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <SEO
        title="من نحن - مكتب الخبير المعتمد"
        description="تعرف على مكتب الخبير المعتمد، الرائد في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية مع أكثر من 15 عاماً من الخبرة"
        canonicalUrl="https://furniture-expert.org/about"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
              <span className="text-[#D4AF37] font-semibold text-lg">من نحن</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              مكتب الخبير المعتمد
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              الرائد في تقييم أضرار الأثاث والممتلكات في المملكة العربية السعودية
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Our Story */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A2C56] mb-6">قصتنا</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    تأسس مكتب الخبير المعتمد في عام 2010 برؤية واضحة: تقديم خدمات تقييم احترافية ودقيقة للأضرار التي تلحق بالأثاث والممتلكات في المملكة العربية السعودية.
                  </p>
                  <p className="mb-4">
                    بدأنا كفريق صغير من الخبراء المتخصصين، واليوم نفخر بكوننا الخيار الأول للأفراد والشركات وشركات التأمين في تقييم الأضرار وإعداد التقارير الفنية المتخصصة.
                  </p>
                  <p>
                    خلال أكثر من 15 عاماً من العمل، قمنا بتقييم أكثر من 1000 حالة، وأصبحنا الشريك الموثوق للعديد من شركات التأمين والمؤسسات القانونية في المملكة.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/professional_moving_services_jeddah.jpeg"
                  alt="مكتب الخبير المعتمد"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C56]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1A2C56] mb-4">رسالتنا</h3>
                <p className="text-gray-700 leading-relaxed">
                  تقديم خدمات تقييم احترافية ودقيقة للأضرار التي تلحق بالأثاث والممتلكات، مع الالتزام بأعلى معايير الجودة والمهنية، لمساعدة عملائنا في الحصول على حقوقهم كاملة.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1A2C56] mb-4">رؤيتنا</h3>
                <p className="text-gray-700 leading-relaxed">
                  أن نكون المرجع الأول والأكثر ثقة في مجال تقييم أضرار الأثاث والممتلكات في المنطقة، من خلال الابتكار المستمر وتطوير خبراتنا لخدمة عملائنا بأفضل ما لدينا.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">قيمنا الأساسية</h2>
              <p className="text-gray-600 text-lg">المبادئ التي نؤمن بها ونعمل وفقاً لها</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1A2C56] mb-2">الدقة</h3>
                <p className="text-gray-600 text-sm">نلتزم بأعلى معايير الدقة في جميع تقييماتنا</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1A2C56] mb-2">الأمانة</h3>
                <p className="text-gray-600 text-sm">نحافظ على أعلى مستويات الأمانة والشفافية</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1A2C56] mb-2">السرعة</h3>
                <p className="text-gray-600 text-sm">نقدم خدماتنا بسرعة دون التنازل عن الجودة</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1A2C56] mb-2">الخدمة</h3>
                <p className="text-gray-600 text-sm">نضع رضا عملائنا في المقدمة دائماً</p>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
                <p className="text-gray-200">نفخر بما حققناه خلال مسيرتنا المهنية</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">+1000</div>
                  <div className="text-gray-200">حالة مُقيمة</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">15+</div>
                  <div className="text-gray-200">سنة خبرة</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">97%</div>
                  <div className="text-gray-200">نسبة رضا العملاء</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">24/7</div>
                  <div className="text-gray-200">دعم متواصل</div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">فريق الخبراء</h2>
              <p className="text-gray-600 text-lg">نخبة من الخبراء المعتمدين في تقييم الأضرار</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <img
                  src="/images/author/Fahad_AlHarbi.png"
                  alt="فهد الحربي"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-[#1A2C56] mb-2">فهد الحربي</h3>
                <p className="text-[#D4AF37] font-semibold mb-3">الخبير الرئيسي</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  خبير معتمد في تقييم الأضرار مع أكثر من 15 عاماً من الخبرة في المجال
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <img
                  src="/images/author/Noura_AlDossary.png"
                  alt="نورا الدوسري"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-[#1A2C56] mb-2">نورا الدوسري</h3>
                <p className="text-[#D4AF37] font-semibold mb-3">خبيرة الأثاث الأنتيك</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  متخصصة في تقييم الأثاث الأنتيك والقطع الثمينة مع خبرة 12 عاماً
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                <img
                  src="/images/author/Khalid_AlOtaibi.png"
                  alt="خالد العتيبي"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-[#1A2C56] mb-2">خالد العتيبي</h3>
                <p className="text-[#D4AF37] font-semibold mb-3">خبير التقييم القانوني</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  متخصص في التقييم للقضايا القانونية والنزاعات التجارية
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">الشهادات والاعتمادات</h2>
              <p className="text-gray-600 text-lg">نحمل أعلى الشهادات المهنية في المجال</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#1A2C56] mb-2">شهادة الخبير المعتمد</h3>
                <p className="text-gray-600 text-xs">من الهيئة السعودية للمهندسين</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#1A2C56] mb-2">عضوية الغرفة التجارية</h3>
                <p className="text-gray-600 text-xs">غرفة جدة التجارية الصناعية</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#1A2C56] mb-2">شهادة الجودة</h3>
                <p className="text-gray-600 text-xs">ISO 9001:2015</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#1A2C56] mb-2">ترخيص وزارة التجارة</h3>
                <p className="text-gray-600 text-xs">رقم الترخيص: 1234567890</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">هل تحتاج إلى خدماتنا؟</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                نحن هنا لمساعدتك في تقييم الأضرار وإعداد التقارير اللازمة. تواصل معنا اليوم للحصول على استشارة مجانية.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-[#1A2C56] text-white px-8 py-3 rounded-lg hover:bg-[#2A3F6B] transition-colors font-semibold"
                >
                  تواصل معنا
                </Link>
                <Link 
                  href="/services" 
                  className="bg-transparent border-2 border-[#1A2C56] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#1A2C56] hover:text-white transition-colors font-semibold"
                >
                  تعرف على خدماتنا
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}