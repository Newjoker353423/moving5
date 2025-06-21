// هذا المكون مسؤول عن عرض عنوان المدونة ووصفها، وليس شريط تنقل
const BlogHeader = ({ title, description }) => {
  return (
    <div className="relative bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white py-32 mb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#D4AF37]/10 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#D4AF37]/10 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/5"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white/5"></div>
      
      {/* Decorative Side Elements */}
      <div className="absolute left-0 top-1/4 h-24 w-3 bg-[#D4AF37]/30 rounded-r-lg"></div>
      <div className="absolute right-0 top-2/4 h-24 w-3 bg-[#D4AF37]/30 rounded-l-lg"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
            <span className="text-[#D4AF37] font-semibold text-lg">مدونة الخبير المعتمد</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 leading-relaxed mb-6">
              {description}
            </p>
          )}
          
          {/* Enhanced Decorative Element */}
          <div className="mt-10 flex justify-center">
            <div className="w-28 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-full"></div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-base">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
              <span className="text-[#D4AF37] mr-1">✓</span> نصائح من الخبراء
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
              <span className="text-[#D4AF37] mr-1">✓</span> دراسات حالة واقعية
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
              <span className="text-[#D4AF37] mr-1">✓</span> إرشادات قانونية
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave - Made larger */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#FFFFFF"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#FFFFFF"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </div>
  );
};

export default BlogHeader;