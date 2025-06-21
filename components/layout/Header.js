import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (path) => {
    return router.pathname === path;
  };

  const services = [
    {
      title: 'تقييم أضرار النقل',
      href: '/services/transport-damage',
      description: 'تقييم الأضرار أثناء النقل والشحن',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: 'المطالبات التأمينية',
      href: '/services/insurance-claims',
      description: 'إعداد ومتابعة المطالبات التأمينية',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'التقييم القانوني',
      href: '/services/legal-assessment',
      description: 'تقييم للقضايا والنزاعات القانونية',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: 'تقييم الأثاث الثمين',
      href: '/services/antique-evaluation',
      description: 'تقييم الأثاث الثمين والتحف النادرة',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#1A2C56]/95 backdrop-blur-md shadow-lg' 
        : 'bg-[#1A2C56]'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={closeMenus}>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-[#1A2C56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl lg:text-2xl text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                  مكتب الخبير المعتمد
                </span>
                <div className="text-xs text-gray-300 hidden lg:block">
                  خبراء تقييم الأضرار والممتلكات
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            <Link 
              href="/" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
              }`}
              onClick={closeMenus}
            >
              الرئيسية
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"></div>
              )}
            </Link>

            <Link 
              href="/about" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
              }`}
              onClick={closeMenus}
            >
              من نحن
              {isActive('/about') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"></div>
              )}
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-lg transition-all duration-300 ${
                  router.pathname.startsWith('/services') 
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                    : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>خدماتنا</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                {router.pathname.startsWith('/services') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"></div>
                )}
              </button>

              {/* Services Dropdown Menu */}
              <div 
                className={`absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-start space-x-3 rtl:space-x-reverse p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                      onClick={closeMenus}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-[#1A2C56] rounded-lg flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-[#1A2C56] transition-colors duration-200">
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[#1A2C56] group-hover:text-[#D4AF37] transition-colors duration-200">
                          {service.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                  <Link
                    href="/services"
                    className="text-sm text-[#1A2C56] hover:text-[#D4AF37] font-medium transition-colors duration-200"
                    onClick={closeMenus}
                  >
                    عرض جميع الخدمات ←
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/case-studies" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/case-studies') 
                  ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
              }`}
              onClick={closeMenus}
            >
              دراسات حالة
              {isActive('/case-studies') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"></div>
              )}
            </Link>

            <Link 
              href="/blog" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/blog') 
                  ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
              }`}
              onClick={closeMenus}
            >
              المدونة
              {isActive('/blog') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"></div>
              )}
            </Link>

            <Link 
              href="/contact" 
              className="bg-[#D4AF37] text-[#1A2C56] px-6 py-2 rounded-lg hover:bg-[#E5C158] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={closeMenus}
            >
              اتصل بنا
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50" 
            onClick={toggleMenu}
          >
            <svg 
              className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2 border-t border-white/10">
            <Link 
              href="/" 
              className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
              }`}
              onClick={closeMenus}
            >
              الرئيسية
            </Link>

            <Link 
              href="/about" 
              className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/about') 
                  ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
              }`}
              onClick={closeMenus}
            >
              من نحن
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                  router.pathname.startsWith('/services') 
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                    : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
                }`}
                onClick={toggleServices}
              >
                <span>خدماتنا</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pr-4 space-y-1">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-[#D4AF37] transition-colors duration-200"
                    onClick={closeMenus}
                  >
                    جميع الخدمات
                  </Link>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-[#D4AF37] transition-colors duration-200"
                      onClick={closeMenus}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/case-studies" 
              className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/case-studies') 
                  ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
              }`}
              onClick={closeMenus}
            >
              دراسات حالة
            </Link>

            <Link 
              href="/blog" 
              className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive('/blog') 
                  ? 'text-[#D4AF37] bg-[#D4AF37]/10' 
                  : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
              }`}
              onClick={closeMenus}
            >
              المدونة
            </Link>

            <Link 
              href="/contact" 
              className="block mx-4 mt-4 bg-[#D4AF37] text-[#1A2C56] px-6 py-3 rounded-lg hover:bg-[#E5C158] transition-all duration-300 font-semibold text-center"
              onClick={closeMenus}
            >
              اتصل بنا
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;