import SEO from '../components/common/SEO';
import Link from 'next/link';

export default function Privacy() {
  return (
    <>
      <SEO
        title="سياسة الخصوصية - مكتب الخبير المعتمد"
        description="تعرف على سياسة الخصوصية وحماية البيانات في مكتب الخبير المعتمد لتقييم أضرار الأثاث والممتلكات"
        canonicalUrl="https://furniture-expert.org/privacy"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
              <span className="text-[#D4AF37] font-semibold text-lg">سياسة الخصوصية</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              سياسة الخصوصية وحماية البيانات
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              نحن ملتزمون بحماية خصوصيتكم وأمان بياناتكم الشخصية
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
                  في مكتب الخبير المعتمد، نحن نقدر ثقتكم ونلتزم بحماية خصوصيتكم. هذه السياسة توضح كيفية جمعنا واستخدامنا وحماية المعلومات الشخصية التي تقدمونها لنا.
                </p>
                <p>
                  نحن نلتزم بأعلى معايير الأمان والخصوصية وفقاً للقوانين السعودية ولائحة حماية البيانات الشخصية.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">البيانات التي نجمعها</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <h3 className="text-lg font-semibold text-[#1A2C56] mb-4">المعلومات الشخصية:</h3>
                <ul className="list-disc pr-6 mb-6 space-y-2">
                  <li>الاسم الكامل ومعلومات الاتصال</li>
                  <li>عنوان البريد الإلكتروني ورقم الهاتف</li>
                  <li>العنوان الفعلي للممتلكات المراد تقييمها</li>
                  <li>معلومات الهوية الوطنية أو السجل التجاري</li>
                  <li>تفاصيل الأضرار والممتلكات المتضررة</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1A2C56] mb-4">المعلومات التقنية:</h3>
                <ul className="list-disc pr-6 mb-6 space-y-2">
                  <li>عنوان IP ومعلومات المتصفح</li>
                  <li>ملفات تعريف الارتباط (Cookies)</li>
                  <li>سجلات الوصول للموقع الإلكتروني</li>
                  <li>معلومات الجهاز ونظام التشغيل</li>
                </ul>
              </div>
            </section>

            {/* Data Usage */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">كيفية استخدام البيانات</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">نستخدم المعلومات المجمعة للأغراض التالية:</p>
                <ul className="list-disc pr-6 space-y-3">
                  <li><strong>تقديم الخدمات:</strong> تنفيذ عمليات التقييم وإعداد التقارير</li>
                  <li><strong>التواصل:</strong> الرد على استفساراتكم وتقديم الدعم</li>
                  <li><strong>تحسين الخدمات:</strong> تطوير وتحسين جودة خدماتنا</li>
                  <li><strong>الالتزام القانوني:</strong> الوفاء بالمتطلبات القانونية والتنظيمية</li>
                  <li><strong>الأمان:</strong> حماية موقعنا وخدماتنا من الاستخدام غير المشروع</li>
                  <li><strong>التسويق:</strong> إرسال معلومات حول خدماتنا الجديدة (بموافقتكم)</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">مشاركة البيانات</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">نحن لا نبيع أو نؤجر معلوماتكم الشخصية لأطراف ثالثة. قد نشارك المعلومات في الحالات التالية فقط:</p>
                <ul className="list-disc pr-6 space-y-3">
                  <li><strong>بموافقتكم الصريحة:</strong> عندما تمنحوننا إذناً كتابياً</li>
                  <li><strong>مقدمو الخدمات:</strong> شركاء موثوقون يساعدوننا في تقديم الخدمات</li>
                  <li><strong>المتطلبات القانونية:</strong> عند الطلب من السلطات المختصة</li>
                  <li><strong>حماية الحقوق:</strong> لحماية حقوقنا أو حقوق الآخرين</li>
                  <li><strong>شركات التأمين:</strong> عند الحاجة لإعداد المطالبات التأمينية</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">أمان البيانات</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">نطبق إجراءات أمنية صارمة لحماية بياناتكم:</p>
                <ul className="list-disc pr-6 space-y-3">
                  <li><strong>التشفير:</strong> جميع البيانات الحساسة مشفرة أثناء النقل والتخزين</li>
                  <li><strong>الوصول المحدود:</strong> فقط الموظفون المخولون يمكنهم الوصول للبيانات</li>
                  <li><strong>النسخ الاحتياطية:</strong> نسخ احتياطية منتظمة ومؤمنة</li>
                  <li><strong>مراقبة الأنظمة:</strong> مراقبة مستمرة للكشف عن أي نشاط مشبوه</li>
                  <li><strong>التدريب:</strong> تدريب منتظم للموظفين على أمان المعلومات</li>
                  <li><strong>التحديثات الأمنية:</strong> تحديث مستمر لأنظمة الحماية</li>
                </ul>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">الاحتفاظ بالبيانات</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <ul className="list-disc pr-6 space-y-3">
                  <li><strong>ملفات العملاء:</strong> نحتفظ بها لمدة 7 سنوات وفقاً للمتطلبات القانونية</li>
                  <li><strong>التقارير الفنية:</strong> تحفظ لمدة 10 سنوات للمرجعية المستقبلية</li>
                  <li><strong>المراسلات:</strong> تحفظ لمدة 3 سنوات من آخر تواصل</li>
                  <li><strong>البيانات التسويقية:</strong> حتى طلب إلغاء الاشتراك</li>
                  <li><strong>السجلات المالية:</strong> وفقاً لمتطلبات الزكاة والضريبة</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">حقوقكم</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">لديكم الحقوق التالية فيما يتعلق ببياناتكم الشخصية:</p>
                <ul className="list-disc pr-6 space-y-3">
                  <li><strong>الوصول:</strong> طلب نسخة من البيانات المحفوظة عنكم</li>
                  <li><strong>التصحيح:</strong> طلب تصحيح أي معلومات غير دقيقة</li>
                  <li><strong>الحذف:</strong> طلب حذف بياناتكم في ظروف معينة</li>
                  <li><strong>التقييد:</strong> طلب تقييد معالجة بياناتكم</li>
                  <li><strong>النقل:</strong> الحصول على بياناتكم بصيغة قابلة للقراءة</li>
                  <li><strong>الاعتراض:</strong> الاعتراض على معالجة بياناتكم لأغراض معينة</li>
                  <li><strong>إلغاء الموافقة:</strong> سحب موافقتكم في أي وقت</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">ملفات تعريف الارتباط</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">نستخدم ملفات تعريف الارتباط لتحسين تجربتكم:</p>
                <ul className="list-disc pr-6 space-y-3">
                  <li><strong>ملفات ضرورية:</strong> لضمان عمل الموقع بشكل صحيح</li>
                  <li><strong>ملفات الأداء:</strong> لفهم كيفية استخدام الموقع</li>
                  <li><strong>ملفات الوظائف:</strong> لتذكر تفضيلاتكم</li>
                  <li><strong>ملفات التسويق:</strong> لعرض إعلانات مناسبة (بموافقتكم)</li>
                </ul>
                <p className="mt-4">
                  يمكنكم التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح.
                </p>
              </div>
            </section>

            {/* Children Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">خصوصية الأطفال</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  خدماتنا مخصصة للبالغين فقط. نحن لا نجمع عمداً معلومات شخصية من الأطفال دون سن 18 عاماً. 
                  إذا علمنا أننا جمعنا معلومات من طفل، سنقوم بحذفها فوراً.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">تحديثات السياسة</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعاركم بأي تغييرات جوهرية من خلال:
                </p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>نشر السياسة المحدثة على موقعنا</li>
                  <li>إرسال إشعار بالبريد الإلكتروني</li>
                  <li>إشعار على الموقع الإلكتروني</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A2C56] mb-6">التواصل</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  لأي استفسارات حول سياسة الخصوصية أو لممارسة حقوقكم، يرجى التواصل معنا:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>مسؤول حماية البيانات:</strong> privacy@furniture-expert.org</p>
                  <p><strong>الهاتف:</strong> +966-5X-XXX-XXXX</p>
                  <p><strong>العنوان:</strong> جدة، المملكة العربية السعودية</p>
                  <p><strong>ساعات العمل:</strong> الأحد - الخميس، 9:00 ص - 5:00 م</p>
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