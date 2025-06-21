import SEO from '../../components/common/SEO';
import Link from 'next/link';

export default function AntiqueEvaluation() {
  const antiqueTypes = [
    {
      title: 'الأثاث الكلاسيكي',
      description: 'تقييم الأثاث الكلاسيكي والتراثي من مختلف العصور',
      expertise: 'خبرة 20+ سنة',
      accuracy: '99%'
    },
    {
      title: 'التحف الفنية',
      description: 'تقييم التحف والقطع الفنية النادرة والثمينة',
      expertise: 'خبراء متخصصون',
      accuracy: '98%'
    },
    {
      title: 'المجوهرات الأثرية',
      description: 'تقييم المجوهرات والحلي الأثرية والتراثية',
      expertise: 'معتمدون دولياً',
      accuracy: '99%'
    },
    {
      title: 'الساعات النادرة',
      description: 'تقييم الساعات الأثرية والكلاسيكية النادرة',
      expertise: 'خبراء ساعات',
      accuracy: '97%'
    }
  ];

  const evaluationFactors = [
    {
      title: 'العمر والتاريخ',
      description: 'تحديد عمر القطعة وتاريخها الحقيقي',
      icon: 'history'
    },
    {
      title: 'الأصالة والمنشأ',
      description: 'التحقق من أصالة القطعة ومنشئها',
      icon: 'authenticity'
    },
    {
      title: 'الحالة والجودة',
      description: 'تقييم حالة القطعة ومستوى الحفظ',
      icon: 'condition'
    },
    {
      title: 'الندرة والطلب',
      description: 'تحديد مدى ندرة القطعة والطلب عليها',
      icon: 'rarity'
    }
  ];

  return (
    <>
      <SEO
        title="تقييم الأثاث الثمين والأنتيك - مكتب الخبير المعتمد"
        description="خدمة متخصصة في تقييم الأثاث الثمين والأنتيك والتحف النادرة مع خبراء معتمدين دولياً"
        canonicalUrl="https://furniture-expert.org/services/antique-evaluation"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
              <span className="text-[#D4AF37] font-semibold text-lg">تقييم الأثاث الثمين</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              خبراء تقييم الأثاث الثمين والأنتيك
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              تقييم احترافي للأثاث الثمين والتحف النادرة والقطع الأثرية بأعلى معايير الدقة والاحترافية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-[#D4AF37] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#E5C158] transition-colors font-semibold"
              >
                احجز تقييم مجاني
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
                <h2 className="text-3xl font-bold text-[#1A2C56] mb-6">لماذا تحتاج خبير لتقييم الأثاث الثمين؟</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    تقييم الأثاث الثمين والأنتيك يتطلب خبرة متخصصة ومعرفة عميقة بالتاريخ والفنون والحرف التقليدية. 
                    القيمة الحقيقية للقطع الأثرية لا تعتمد فقط على المواد المستخدمة، بل على عوامل متعددة معقدة.
                  </p>
                  <p className="mb-4">
                    خبراؤنا المعتمدون دولياً يمتلكون المعرفة والأدوات اللازمة لتقييم دقيق يضمن لك معرفة القيمة الحقيقية 
                    لممتلكاتك الثمينة.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      <span className="font-semibold text-amber-800">خبراء معتمدون دولياً</span>
                    </div>
                    <p className="text-amber-700 text-sm">معتمدون من الجمعيات الدولية لتقييم التحف والأثاث الثمين</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/furniture_movers_saudi_arabia.jpeg"
                  alt="تقييم الأثاث الثمين"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C56]/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-[#1A2C56]">1000+</div>
                  <div className="text-sm text-gray-600">قطعة ثمينة مُقيمة</div>
                </div>
              </div>
            </div>
          </section>

          {/* Antique Types */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">أنواع القطع التي نقيمها</h2>
              <p className="text-gray-600 text-lg">خبرة واسعة في تقييم جميع أنواع التحف والقطع الثمينة</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {antiqueTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">مستوى الخبرة</div>
                      <div className="text-lg font-bold text-[#1A2C56]">{type.expertise}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">دقة التقييم</div>
                      <div className="text-lg font-bold text-green-600">{type.accuracy}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Evaluation Factors */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">عوامل التقييم</h2>
              <p className="text-gray-600 text-lg">العوامل الأساسية التي نعتمد عليها في تقييم القطع الثمينة</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {evaluationFactors.map((factor, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#1A2C56] rounded-full flex items-center justify-center mx-auto mb-6">
                    {factor.icon === 'history' && (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {factor.icon === 'authenticity' && (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {factor.icon === 'condition' && (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                    {factor.icon === 'rarity' && (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-3">{factor.title}</h3>
                  <p className="text-gray-600 text-sm">{factor.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Included */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">ما يشمله التقييم</h2>
                <p className="text-gray-600 text-lg">خدمة شاملة تغطي جميع جوانب التقييم</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#1A2C56] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-3">فحص تفصيلي</h3>
                  <p className="text-gray-600 text-sm">فحص دقيق للقطعة من جميع الجوانب</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-3">تقرير مفصل</h3>
                  <p className="text-gray-600 text-sm">تقرير شامل بالقيمة والتفاصيل</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#1A2C56] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-3">توثيق احترافي</h3>
                  <p className="text-gray-600 text-sm">توثيق فوتوغرافي عالي الجودة</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-3">شهادة أصالة</h3>
                  <p className="text-gray-600 text-sm">شهادة معتمدة بأصالة القطعة</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#1A2C56] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-3">تقدير السوق</h3>
                  <p className="text-gray-600 text-sm">تقدير القيمة السوقية الحالية</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2C56] mb-3">استشارة مجانية</h3>
                  <p className="text-gray-600 text-sm">استشارة حول العناية والحفظ</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2C56] mb-4">باقات التقييم</h2>
              <p className="text-gray-600 text-lg">اختر الباقة المناسبة لاحتياجاتك</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">التقييم الأساسي</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">800 ريال</div>
                  <p className="text-gray-600 text-sm">للقطع العادية</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">فحص أساسي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقرير مبسط</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">تقدير القيمة</span>
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
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">التقييم المتقدم</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">1,500 ريال</div>
                  <p className="text-gray-600 text-sm">للقطع الثمينة</p>
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
                    <span className="text-sm">تقرير مفصل معتمد</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">شهادة أصالة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">توثيق احترافي</span>
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
                  <h3 className="text-xl font-bold text-[#1A2C56] mb-2">التقييم الشامل</h3>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">2,500 ريال</div>
                  <p className="text-gray-600 text-sm">للقطع النادرة</p>
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
                    <span className="text-sm">تقرير معتمد دولياً</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">بحث تاريخي مفصل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">استشارة شاملة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">ضمان دقة التقييم</span>
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
              <h2 className="text-3xl font-bold mb-4">لديك قطعة ثمينة تريد تقييمها؟</h2>
              <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                احصل على تقييم احترافي دقيق من خبراء معتمدين دولياً واكتشف القيمة الحقيقية لممتلكاتك الثمينة
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-[#D4AF37] text-[#1A2C56] px-8 py-3 rounded-lg hover:bg-[#E5C158] transition-colors font-semibold"
                >
                  احجز تقييم مجاني
                </Link>
                <a 
                  href="tel:+966-5X-XXX-XXXX" 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A2C56] transition-colors font-semibold"
                >
                  استشارة فورية
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}