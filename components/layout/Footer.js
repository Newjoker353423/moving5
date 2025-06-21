import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A2C56] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">مكتب الخبير المعتمد</h3>
            <p className="mb-4">
              خبراء في تقييم أضرار الأثاث والممتلكات منذ أكثر من 15 عام، نقدم خدمات احترافية موثوقة في جميع أنحاء المملكة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://twitter.com/furniture_expert" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sultan-alghamdi" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition duration-200">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition duration-200">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D4AF37] transition duration-200">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#D4AF37] transition duration-200">
                  دراسات حالة
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4AF37] transition duration-200">
                  المدونة
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/transport-damage" className="hover:text-[#D4AF37] transition duration-200">
                  تقييم أضرار النقل
                </Link>
              </li>
              <li>
                <Link href="/services/insurance-claims" className="hover:text-[#D4AF37] transition duration-200">
                  التقييم للمطالبات التأمينية
                </Link>
              </li>
              <li>
                <Link href="/services/legal-assessment" className="hover:text-[#D4AF37] transition duration-200">
                  التقييم للقضايا القانونية
                </Link>
              </li>
              <li>
                <Link href="/services/antique-evaluation" className="hover:text-[#D4AF37] transition duration-200">
                  تقييم الأثاث الثمين والأنتيك
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">اتصل بنا</h3>
            <address className="not-italic">
              <p className="mb-2">حي الحمراء، جدة</p>
              <p className="mb-2">المملكة العربية السعودية</p>
              <p className="mb-2 dir-ltr">+966-5X-XXX-XXXX</p>
              <p>contact@furniture-expert.org</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <p>&copy; {currentYear} مكتب الخبير المعتمد. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-gray-300 hover:text-[#D4AF37] transition duration-200">
                الشروط والأحكام
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/privacy" className="text-gray-300 hover:text-[#D4AF37] transition duration-200">
                سياسة الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 