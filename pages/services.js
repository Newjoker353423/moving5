import SEO from '../components/common/SEO';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'تقييم أضرار النقل والشحن',
      description: 'تقييم شامل للأضرار التي تلحق بالأثاث والممتلكات أثناء عمليات النقل المحلي والدولي',
      image: '/images/furniture_transportation_experts.jpeg',
      features: [
        'فحص دقيق للأضرار الظاهرة والخفية',
        'تحديد أسباب الضرر وطبيعته',
        'تقدير قيمة الإصلاح أو الاستبدال',
        'إعداد تقرير فني مفصل',
        'توثيق فوتوغرافي احترافي'
      ],
      price: 'يبدأ من 500 ريال',
      duration: '2-3 أيام عمل'
    },
    {
      id: 2,
      title: 'المطالبات التأمينية',
      description: 'إعداد التقارير والوثائق اللازمة للمطالبات التأمينية بأعلى معايير الدقة والمهنية',
      image: '/images/professional_moving_services_jeddah.jpeg',
      features: [
        'إعداد تقارير معتمدة لشركات التأمين',
        'تقدير دقيق لقيمة الأضرار',
        'متابعة المطالبة مع شركة التأمين',
        'تقديم الاستشارات القانونية',
        'ضمان قبول المطالبة'
      ],
      price: 'يبدأ من 800 ريال',
      duration: '3-5 أيام عمل'
    },
    {
      id: 3,
      title: 'التقييم القانوني',
      description: 'تقييم الأضرار للقضايا القانونية والنزاعات التجارية مع إعداد تقارير معتمدة للمحاكم',
      image: '/images/office_relocation_services.jpeg',
      features: [
        'تقارير معتمدة للمحاكم',
        'شهادة خبرة أمام القضاء',
        'تحليل قانوني للأضرار',
        'تقدير التعويضات المناسبة',
        'استشارات قانونية متخصصة'
      ],
      price: 'يبدأ من 1200 ريال',
      duration: '5-7 أيام عمل'
    },
    {
      id: 4,
      title: 'تقييم الأثاث الأنتيك والثمين',
      description: 'تقييم متخصص للأثاث الأنتيك والقطع الثمينة والتحف النادرة',
      image: '/images/specialized_furniture_moving.jpeg',
      features: [
        'خبرة في الأثاث الأنتيك والتراثي',
        'تحديد العمر والأصالة',
        'تقييم القيمة السوقية الحالية',
        'شهادات تقييم معتمدة',
        'استشارات الحفظ والصيانة'
      ],
      price: 'يبدأ من 1000 ريال',
      duration: '3-4 أيام عمل'
    },
    {
      id: 5,
      title: 'الاستشارات المهنية',
      description: 'استشارات متخصصة في حماية الأثاث والممتلكات وإدارة المخاطر',
      image: '/images/reliable_movers_riyadh.jpeg',
      features: [
        'استشارات حماية الممتلكات',
        'تقييم المخاطر المحتملة',
        'وضع خطط الحماية والوقاية',
        'تدريب الموظفين',
        'متابعة دورية'
      ],
      price: 'يبدأ من 300 ريال/ساعة',
      duration: 'حسب الحاجة'
    },
    {
      id: 6,
      title: 'التدريب والتأهيل',
      description: 'برامج تدريبية متخصصة لتأهيل خبراء تقييم الأضرار والعاملين في المجال',
      image: '/images/professional_packing_team.jpeg',
      features: [
        'دورات تدريبية معتمدة',
        'تأهيل خبراء التقييم',
        'ورش عمل متخصصة',
        'شهادات مهنية',
        'متابعة ما بعد التدريب'
      ],
      price: 'يبدأ من 2000 ريال/دورة',
      duration: '3-5 أيام'
    }
  ];

  return (
    <>
      <SEO
        title="خدماتنا - مكتب الخبير المعتمد"
        description="تعرف على خدمات مكتب الخبير المعتمد في تقييم أضرار الأثاث، المطالبات التأمينية، التقييم القانوني، والاستشارات المهنية"
        canonicalUrl="https://furniture-expert.org/services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
              <span className="text-[#D4AF37] font-semibold text-lg">خدماتنا المتخصصة</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              خدمات تقييم احترافية شاملة
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              نقدم مجموعة متكاملة من الخدمات المتخصصة في تقييم أضرار الأثاث والممتلكات
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduction */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A2C56] mb-6">لماذا تختار خدماتنا؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A2C56] mb-3">خبرة 15+ عاماً</h3>
                <p className="text-gray-600">فريق من الخبراء المعتمدين مع خبرة واسعة في المجال</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A2C56] mb-3">تقارير معتمدة</h3>
                <p className="text-gray-600">تقارير فنية دقيقة ومعتمدة من الجهات المختصة</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A2C56] mb-3">سرعة في التنفيذ</h3>
                <p className="text-gray-600">نلتزم بالمواعيد المحددة مع ضمان الجودة</p>
              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="mb-16">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-lg w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C56]/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                      <h3 className="text-2xl font-bold text-[#1A2C56] mb-4">{service.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-[#1A2C56] mb-3">ما نقدمه:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm text-gray-500 mb-1">السعر</div>
                          <div className="font-semibold text-[#1A2C56]">{service.price}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm text-gray-500 mb-1">مدة التنفيذ</div>
                          <div className="font-semibold text-[#1A2C56]">{service.duration}</div>
                        </div>
                      </div>
                      
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#1A2C56] text-white px-6 py-3 rounded-lg hover:bg-[#2A3F6B] transition-colors font-semibold"
                      >
                        طلب الخدمة
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">كيف نعمل؟</h2>
              <p className="text-gray-600 text-lg">عملية بسيطة ومنظمة لضمان أفضل النتائج</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">1</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1A2C56] mb-2">التواصل الأولي</h3>
                <p className="text-gray-600 text-sm">تواصل معنا وأخبرنا عن احتياجك</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">2</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1A2C56] mb-2">الفحص والتقييم</h3>
                <p className="text-gray-600 text-sm">زيارة الموقع وفحص الأضرار بدقة</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">3</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1A2C56] mb-2">إعداد التقرير</h3>
                <p className="text-gray-600 text-sm">كتابة تقرير فني مفصل ودقيق</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">4</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1A2C56] mb-2">التسليم والمتابعة</h3>
                <p className="text-gray-600 text-sm">تسليم التقرير ومتابعة ما بعد الخدمة</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">الأسئلة الشائعة</h2>
              <p className="text-gray-600 text-lg">إجابات على أكثر الأسئلة شيوعاً حول خدماتنا</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1A2C56] mb-3">كم تستغرق عملية التقييم؟</h3>
                <p className="text-gray-600 text-sm">تختلف المدة حسب نوع وحجم الضرر، لكن معظم التقييمات تكتمل خلال 2-5 أيام عمل.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1A2C56] mb-3">هل التقارير معتمدة قانونياً؟</h3>
                <p className="text-gray-600 text-sm">نعم، جميع تقاريرنا معتمدة ومقبولة في المحاكم وشركات التأمين.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1A2C56] mb-3">هل تقدمون خدمات في جميع أنحاء المملكة؟</h3>
                <p className="text-gray-600 text-sm">نعم، نقدم خدماتنا في جميع مناطق المملكة العربية السعودية.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1A2C56] mb-3">ما هي طرق الدفع المتاحة؟</h3>
                <p className="text-gray-600 text-sm">نقبل التحويل البنكي، الشيكات، والدفع النقدي. يتم دفع 50% مقدماً.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">جاهز للبدء؟</h2>
              <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-[#D4AF37] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#E5C158] transition-colors font-semibold"
                >
                  احصل على عرض سعر
                </Link>
                <Link 
                  href="/case-studies" 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A2C56] transition-colors font-semibold"
                >
                  شاهد أعمالنا السابقة
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}