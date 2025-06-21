import SEO from '../../components/common/SEO';
import Link from 'next/link';

export default function TransportDamage() {
  const processSteps = [
    {
      step: 1,
      title: 'الفحص الأولي',
      description: 'فحص شامل للأضرار الظاهرة والخفية',
      icon: 'search'
    },
    {
      step: 2,
      title: 'التوثيق',
      description: 'توثيق فوتوغرافي احترافي للأضرار',
      icon: 'camera'
    },
    {
      step: 3,
      title: 'التحليل',
      description: 'تحليل أسباب الضرر وتحديد المسؤولية',
      icon: 'analysis'
    },
    {
      step: 4,
      title: 'التقرير',
      description: 'إعداد تقرير فني مفصل ومعتمد',
      icon: 'report'
    }
  ];

  const damageTypes = [
    {
      title: 'الكسور والشقوق',
      description: 'تقييم الكسور في الخشب والزجاج والمواد الهشة',
      image: '/images/furniture_transportation_experts.jpeg'
    },
    {
      title: 'الخدوش والتآكل',
      description: 'تحليل الخدوش السطحية والعميقة في الأسطح',
      image: '/images/specialized_furniture_moving.jpeg'
    },
    {
      title: 'التشوه والانحناء',
      description: 'قياس التشوهات الهيكلية والانحناءات',
      image: '/images/professional_moving_equipment.jpeg'
    },
    {
      title: 'فقدان الأجزاء',
      description: 'توثيق الأجزاء المفقودة أو المكسورة',
      image: '/images/furniture_wrapping_services.jpeg'
    }
  ];

  return (
    <>
      <SEO
        title="تقييم أضرار النقل والشحن - مكتب الخبير المعتمد"
        description="خدمة متخصصة في تقييم الأضرار التي تلحق بالأثاث والممتلكات أثناء عمليات النقل والشحن المحلي والدولي"
        canonicalUrl="https://furniture-expert.org/services/transport-damage"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
              <span className="text-[#D4AF37] font-semibold text-lg">تقييم أضرار النقل</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              تقييم احترافي لأضرار النقل والشحن
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              خدمة متخصصة في تقييم وتوثيق الأضرار التي تلحق بالأثاث والممتلكات أثناء عمليات النقل
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-[#D4AF37] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#E5C158] transition-colors font-semibold"
              >
                احصل على تقييم فوري
              </Link>
              <a 
                href="tel:+966-5X-XXX-XXXX" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A2C56] transition-colors font-semibold"
              >
                اتصل الآن
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
                <h2 className="text-3xl font-bold text-[#1A2C56] mb-6">لماذا تحتاج لتقييم أضرار النقل؟</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    عمليات النقل والشحن تعرض الأثاث والممتلكات لمخاطر متعددة قد تؤدي إلى أضرار مختلفة. 
                    تقييم هذه الأضرار بشكل احترافي ودقيق أمر ضروري لضمان حصولك على التعويض المناسب.
                  </p>
                  <p className="mb-4">
                    نحن نقدم خدمة تقييم شاملة تشمل الفحص الدقيق، التوثيق الاحترافي، وإعداد التقارير المعتمدة 
                    التي تساعدك في المطالبات التأمينية والقانونية.
                  </p>
                  <ul className="list-disc pr-6 space-y-2">
                    <li>تقييم دقيق لجميع أنواع الأضرار</li>
                    <li>توثيق فوتوغرافي احترافي</li>
                    <li>تقارير معتمدة قانونياً</li>
                    <li>تحديد قيمة الإصلاح أو الاستبدال</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/furniture_transportation_experts.jpeg"
                  alt="تقييم أضرار النقل"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C56]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </section>

          {/* Damage Types */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">أنواع الأضرار التي نقيمها</h2>
              <p className="text-gray-600 text-lg">نتعامل مع جميع أنواع الأضرار التي قد تحدث أثناء النقل</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {damageTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A2C56] mb-3">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">عملية التقييم</h2>
              <p className="text-gray-600 text-lg">منهجية علمية ومنظمة لضمان دقة التقييم</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      {step.icon === 'search' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                      {step.icon === 'camera' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {step.icon === 'analysis' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {step.icon === 'report' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">مميزات خدمتنا</h2>
                <p className="text-gray-600 text-lg">لماذا نحن الخيار الأفضل لتقييم أضرار النقل؟</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">استجابة سريعة</h3>
                  <p className="text-gray-600 text-sm">نصل إليك خلال 24 ساعة من التواصل</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">دقة عالية</h3>
                  <p className="text-gray-600 text-sm">تقييم دقيق باستخدام أحدث التقنيات</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">تقارير معتمدة</h3>
                  <p className="text-gray-600 text-sm">تقارير مقبولة في المحاكم وشركات التأمين</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">فريق متخصص</h3>
                  <p className="text-gray-600 text-sm">خبراء معتمدون مع سنوات من الخبرة</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">دعم مستمر</h3>
                  <p className="text-gray-600 text-sm">متابعة ودعم حتى انتهاء المطالبة</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">أسعار تنافسية</h3>
                  <p className="text-gray-600 text-sm">أسعار عادلة مع ضمان الجودة</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">باقات الخدمة</h2>
              <p className="text-gray-600 text-lg">اختر الباقة المناسبة لاحتياجاتك</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">الباقة الأساسية</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">500 ريال</div>
                  <p className="text-gray-600 text-sm">للأضرار البسيطة</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">فحص أولي للأضرار</span>
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
                    <span className="text-sm">تقرير مبسط</span>
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
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">الباقة المتقدمة</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">800 ريال</div>
                  <p className="text-gray-600 text-sm">للأضرار المتوسطة</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">فحص شامل ومفصل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">توثيق احترافي متقدم</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقرير فني مفصل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقدير قيمة الإصلاح</span>
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
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">الباقة الشاملة</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">1200 ريال</div>
                  <p className="text-gray-600 text-sm">للأضرار المعقدة</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">فحص متخصص شامل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">توثيق ثلاثي الأبعاد</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقرير معتمد قانونياً</span>
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
                    <span className="text-sm">متابعة المطالبة</span>
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
              <h2 className="text-3xl font-bold mb-4">هل تعرض أثاثك للضرر أثناء النقل؟</h2>
              <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                لا تتردد في التواصل معنا للحصول على تقييم احترافي وضمان حقوقك كاملة
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-[#D4AF37] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#E5C158] transition-colors font-semibold"
                >
                  احجز موعد تقييم
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