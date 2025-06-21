import SEO from '../../components/common/SEO';
import Link from 'next/link';

export default function InsuranceClaims() {
  const claimSteps = [
    {
      step: 1,
      title: 'تقييم الضرر',
      description: 'فحص شامل وتوثيق دقيق للأضرار',
      icon: 'assessment'
    },
    {
      step: 2,
      title: 'إعداد الوثائق',
      description: 'تجميع جميع المستندات المطلوبة',
      icon: 'documents'
    },
    {
      step: 3,
      title: 'تقديم المطالبة',
      description: 'تقديم المطالبة لشركة التأمين',
      icon: 'submit'
    },
    {
      step: 4,
      title: 'المتابعة',
      description: 'متابعة المطالبة حتى الحصول على التعويض',
      icon: 'follow'
    }
  ];

  const insuranceTypes = [
    {
      title: 'تأمين النقل البحري',
      description: 'مطالبات الأضرار أثناء الشحن البحري الدولي',
      coverage: '95%',
      timeframe: '30-45 يوم'
    },
    {
      title: 'تأمين النقل البري',
      description: 'مطالبات أضرار النقل المحلي والإقليمي',
      coverage: '90%',
      timeframe: '15-30 يوم'
    },
    {
      title: 'تأمين النقل الجوي',
      description: 'مطالبات الأضرار في الشحن الجوي السريع',
      coverage: '98%',
      timeframe: '10-20 يوم'
    },
    {
      title: 'التأمين الشامل',
      description: 'تغطية شاملة لجميع أنواع المخاطر',
      coverage: '100%',
      timeframe: '20-35 يوم'
    }
  ];

  return (
    <>
      <SEO
        title="المطالبات التأمينية - مكتب الخبير المعتمد"
        description="خدمة متخصصة في إعداد ومتابعة المطالبات التأمينية للأثاث والممتلكات المتضررة مع ضمان الحصول على أقصى تعويض"
        canonicalUrl="https://furniture-expert.org/services/insurance-claims"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
              <span className="text-[#D4AF37] font-semibold text-lg">المطالبات التأمينية</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              احصل على أقصى تعويض تأميني
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              نساعدك في إعداد ومتابعة المطالبات التأمينية بأعلى معايير الاحترافية لضمان حصولك على حقوقك كاملة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-[#D4AF37] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#E5C158] transition-colors font-semibold"
              >
                ابدأ مطالبتك الآن
              </Link>
              <a 
                href="tel:+966-5X-XXX-XXXX" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A2C56] transition-colors font-semibold"
              >
                استشارة فورية
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
                <h2 className="text-3xl font-bold text-[#1A2C56] mb-6">لماذا تحتاج خبير للمطالبات التأمينية؟</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    المطالبات التأمينية عملية معقدة تتطلب خبرة متخصصة وفهماً عميقاً لسياسات التأمين والقوانين المعمول بها. 
                    بدون الخبرة المناسبة، قد تفقد جزءاً كبيراً من حقوقك أو قد ترفض مطالبتك بالكامل.
                  </p>
                  <p className="mb-4">
                    نحن نضمن لك الحصول على أقصى تعويض ممكن من خلال إعداد مطالبات احترافية مدعومة بالأدلة والوثائق اللازمة.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-green-800">نسبة نجاح 97%</span>
                    </div>
                    <p className="text-green-700 text-sm">في الحصول على التعويض المطلوب خلال آخر 3 سنوات</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/professional_moving_services_jeddah.jpeg"
                  alt="المطالبات التأمينية"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C56]/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-[#1A2C56]">+500</div>
                  <div className="text-sm text-gray-600">مطالبة ناجحة</div>
                </div>
              </div>
            </div>
          </section>

          {/* Insurance Types */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">أنواع التأمين التي نتعامل معها</h2>
              <p className="text-gray-600 text-lg">خبرة واسعة في جميع أنواع التأمين</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {insuranceTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">نسبة النجاح</div>
                      <div className="text-lg font-bold text-green-600">{type.coverage}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">مدة المعالجة</div>
                      <div className="text-lg font-bold text-[#1A2C56]">{type.timeframe}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Claims Process */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">عملية المطالبة</h2>
              <p className="text-gray-600 text-lg">خطوات منظمة لضمان نجاح مطالبتك</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {claimSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < claimSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 z-0"></div>
                  )}
                  <div className="w-20 h-20 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      {step.icon === 'assessment' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      )}
                      {step.icon === 'documents' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {step.icon === 'submit' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      )}
                      {step.icon === 'follow' && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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

          {/* Required Documents */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">الوثائق المطلوبة</h2>
                <p className="text-gray-600 text-lg">تأكد من توفر هذه الوثائق لتسريع عملية المطالبة</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#1A2C56] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">وثيقة التأمين</h3>
                  <p className="text-gray-600 text-sm">نسخة من بوليصة التأمين وشروط التغطية</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">صور الأضرار</h3>
                  <p className="text-gray-600 text-sm">توثيق فوتوغرافي شامل للأضرار من زوايا مختلفة</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#1A2C56] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">فواتير الشراء</h3>
                  <p className="text-gray-600 text-sm">فواتير شراء الأثاث لإثبات القيمة الأصلية</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">تقرير النقل</h3>
                  <p className="text-gray-600 text-sm">تقرير شركة النقل وإثبات استلام البضاعة</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#1A2C56] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">هوية المالك</h3>
                  <p className="text-gray-600 text-sm">نسخة من الهوية الوطنية أو السجل التجاري</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">تقدير الإصلاح</h3>
                  <p className="text-gray-600 text-sm">عروض أسعار من ورش الإصلاح المعتمدة</p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">قصص نجاح</h2>
              <p className="text-gray-600 text-lg">أمثلة على مطالبات ناجحة تمت معالجتها</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">أثاث مكتبي فاخر</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">85,000 ريال</div>
                  <p className="text-gray-600 text-sm">تعويض كامل خلال 25 يوم</p>
                </div>
                <p className="text-gray-600 text-sm">
                  تضرر أثاث مكتبي فاخر أثناء النقل الدولي. تم الحصول على تعويض كامل بقيمة 85,000 ريال.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">أثاث منزلي كامل</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">120,000 ريال</div>
                  <p className="text-gray-600 text-sm">تعويض كامل خلال 35 يوم</p>
                </div>
                <p className="text-gray-600 text-sm">
                  تضرر أثاث منزل كامل أثناء الانتقال. تم الحصول على تعويض كامل بقيمة 120,000 ريال.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-2">تحف أنتيك نادرة</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">200,000 ريال</div>
                  <p className="text-gray-600 text-sm">تعويض كامل خلال 45 يوم</p>
                </div>
                <p className="text-gray-600 text-sm">
                  تضررت مجموعة تحف أنتيك نادرة. تم الحصول على تعويض كامل بقيمة 200,000 ريال.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">رسوم الخدمة</h2>
              <p className="text-gray-600 text-lg">رسوم تنافسية مع ضمان النتائج</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">رسوم ثابتة</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">800 ريال</div>
                  <p className="text-gray-600 text-sm">للمطالبات البسيطة</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">إعداد المطالبة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تجميع الوثائق</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقديم المطالبة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">متابعة أساسية</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm text-center">للمطالبات أقل من 50,000 ريال</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#D4AF37] relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  الأكثر طلباً
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">نسبة من التعويض</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">10%</div>
                  <p className="text-gray-600 text-sm">من قيمة التعويض المحصل</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">خدمة شاملة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">متابعة مكثفة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">ضمان النتيجة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">لا تدفع إلا عند النجاح</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm text-center">للمطالبات أكثر من 50,000 ريال</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">لديك مطالبة تأمينية؟</h2>
              <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                لا تضيع حقوقك! تواصل معنا اليوم للحصول على أقصى تعويض ممكن من شركة التأمين
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-[#D4AF37] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#E5C158] transition-colors font-semibold"
                >
                  ابدأ مطالبتك الآن
                </Link>
                <a 
                  href="tel:+966-5X-XXX-XXXX" 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A2C56] transition-colors font-semibold"
                >
                  استشارة مجانية
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}