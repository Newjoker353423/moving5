import SEO from '../components/common/SEO';
import Link from 'next/link';

export default function Terms() {
  return (
    <>
      <SEO
        title="الشروط والأحكام - مكتب الخبير المعتمد"
        description="اطلع على الشروط والأحكام الخاصة بخدمات تقييم أضرار الأثاث والممتلكات في مكتب الخبير المعتمد"
        canonicalUrl="https://furniture-expert.org/terms"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
              <span className="text-[#D4AF37] font-semibold text-lg">الشروط والأحكام</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              الشروط والأحكام العامة
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Last Updated */}
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-gray-600 text-sm">
                <strong>آخر تحديث:</strong> 25 مايو 2025
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">مقدمة</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  مرحباً بكم في مكتب الخبير المعتمد لتقييم أضرار الأثاث والممتلكات. هذه الشروط والأحكام تحكم استخدامكم لخدماتنا وموقعنا الإلكتروني. باستخدام خدماتنا، فإنكم توافقون على الالتزام بهذه الشروط والأحكام.
                </p>
                <p>
                  نحن نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وسيتم إشعاركم بأي تغييرات جوهرية.
                </p>
              </div>
            </section>

            {/* Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">الخدمات المقدمة</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">نقدم الخدمات التالية:</p>
                <ul className="list-disc pr-6 mb-6 space-y-2">
                  <li>تقييم أضرار الأثاث والممتلكات أثناء النقل والشحن</li>
                  <li>إعداد التقارير الفنية للمطالبات التأمينية</li>
                  <li>التقييم القانوني للأضرار في النزاعات التجارية</li>
                  <li>تقييم الأثاث الأنتيك والقطع الثمينة</li>
                  <li>الاستشارات المهنية في حماية الأثاث</li>
                  <li>برامج التدريب والتأهيل المتخصصة</li>
                </ul>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">التزامات العميل</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <ul className="list-disc pr-6 space-y-3">
                  <li>تقديم معلومات دقيقة وكاملة عن الأضرار المراد تقييمها</li>
                  <li>السماح بالوصول إلى الممتلكات المتضررة للفحص والتقييم</li>
                  <li>تقديم جميع الوثائق والمستندات ذات الصلة</li>
                  <li>دفع الرسوم المتفق عليها في المواعيد المحددة</li>
                  <li>عدم التدخل في عملية التقييم أو محاولة التأثير على النتائج</li>
                </ul>
              </div>
            </section>

            {/* Our Commitments */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">التزاماتنا</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <ul className="list-disc pr-6 space-y-3">
                  <li>تقديم خدمات تقييم مهنية ودقيقة وفقاً لأعلى المعايير</li>
                  <li>الحفاظ على سرية جميع المعلومات المقدمة من العملاء</li>
                  <li>تسليم التقارير في المواعيد المتفق عليها</li>
                  <li>تقديم الدعم الفني والاستشارات اللازمة</li>
                  <li>الالتزام بالمعايير المهنية والأخلاقية في جميع أعمالنا</li>
                </ul>
              </div>
            </section>

            {/* Fees and Payment */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">الرسوم والدفع</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <ul className="list-disc pr-6 space-y-3">
                  <li>يتم تحديد رسوم الخدمة بناءً على نوع وحجم العمل المطلوب</li>
                  <li>يجب دفع 50% من الرسوم مقدماً قبل بدء العمل</li>
                  <li>يتم دفع الرصيد المتبقي عند تسليم التقرير النهائي</li>
                  <li>في حالة إلغاء الخدمة، لا يتم استرداد المبلغ المدفوع مقدماً</li>
                  <li>جميع الرسوم لا تشمل ضريبة القيمة المضافة</li>
                </ul>
              </div>
            </section>

            {/* Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">المسؤولية</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  نحن نبذل قصارى جهدنا لتقديم تقييمات دقيقة ومهنية، ولكن:
                </p>
                <ul className="list-disc pr-6 space-y-3">
                  <li>مسؤوليتنا تقتصر على قيمة الرسوم المدفوعة للخدمة</li>
                  <li>لا نتحمل مسؤولية أي أضرار غير مباشرة أو تبعية</li>
                  <li>التقييم يعتمد على المعلومات والوثائق المقدمة من العميل</li>
                  <li>لا نضمن نتائج معينة في المطالبات التأمينية أو القضايا القانونية</li>
                </ul>
              </div>
            </section>

            {/* Confidentiality */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">السرية</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  نحن ملتزمون بالحفاظ على سرية جميع المعلومات المقدمة من عملائنا:
                </p>
                <ul className="list-disc pr-6 space-y-3">
                  <li>لا نكشف عن أي معلومات للأطراف الثالثة دون موافقة كتابية</li>
                  <li>جميع الموظفين ملزمون بتوقيع اتفاقيات سرية</li>
                  <li>يتم حفظ جميع الوثائق والملفات بشكل آمن</li>
                  <li>يحق للعميل طلب إتلاف الوثائق بعد انتهاء الخدمة</li>
                </ul>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">حل النزاعات</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <ul className="list-disc pr-6 space-y-3">
                  <li>نسعى لحل أي خلافات ودياً من خلال التفاوض المباشر</li>
                  <li>في حالة عدم التوصل لحل، يتم اللجوء للوساطة</li>
                  <li>المحاكم السعودية هي المختصة بنظر أي نزاعات قانونية</li>
                  <li>يطبق النظام السعودي على جميع الخدمات والعقود</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">التواصل</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  لأي استفسارات حول هذه الشروط والأحكام، يرجى التواصل معنا:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>البريد الإلكتروني:</strong> legal@furniture-expert.org</p>
                  <p><strong>الهاتف:</strong> +966-5X-XXX-XXXX</p>
                  <p><strong>العنوان:</strong> جدة، المملكة العربية السعودية</p>
                </div>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t border-gray-200">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#1A2C56] text-white px-8 py-3 rounded-lg hover:bg-[#2A3F6B] transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                العودة للصفحة الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}