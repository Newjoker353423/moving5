import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../../components/common/SEO';
import { NextSeo } from 'next-seo';

// قائمة بدراسات الحالة مع الصور الصحيحة
const caseStudies = [
  {
    id: 'antique-furniture-international-shipping',
    title: 'مجموعة أثاث أنتيك متضررة أثناء النقل الدولي',
    category: 'النقل الدولي',
    client: 'مجموعة الفيصل للفنادق',
    date: '2025-04-10',
    imageUrl: '/images/international_moving_services.jpeg',
    summary: 'تقييم أضرار مجموعة أثاث أنتيك ثمينة تعرضت للتلف أثناء شحنها من أوروبا إلى السعودية'
  },
  {
    id: 'warehouse-storage-damage',
    title: 'أضرار ناتجة عن سوء التخزين في مستودع',
    category: 'أضرار التخزين',
    client: 'شركة تجارية خاصة',
    date: '2025-03-15',
    imageUrl: '/images/secure_storage_solutions.jpeg',
    summary: 'تقييم الأضرار الناتجة عن سوء التخزين لمجموعة أثاث فاخرة في مستودع لمدة عام كامل'
  },
  {
    id: 'legal-dispute-homeowner-moving-company',
    title: 'نزاع قانوني بين مالك منزل وشركة نقل',
    category: 'القضايا القانونية',
    client: 'مالك منزل خاص',
    date: '2025-02-22',
    imageUrl: '/images/furniture_movers_saudi_arabia.jpeg',
    summary: 'تقييم خبير لأضرار الأثاث في نزاع قانوني بين مالك منزل وشركة نقل عفش محلية'
  },
  {
    id: 'complete-home-furniture-damage',
    title: 'تلف أثاث منزلي كامل أثناء نقل بين المدن',
    category: 'النقل بين المدن',
    client: 'عائلة سعودية',
    date: '2025-01-30',
    imageUrl: '/images/long_distance_moving_saudi.jpeg',
    summary: 'تقييم أضرار شاملة لأثاث منزلي كامل تعرض للتلف أثناء النقل من الرياض إلى جدة'
  },
  {
    id: 'luxury-hotel-furniture-assessment',
    title: 'تقييم أضرار النقل لأثاث فندق فاخر',
    category: 'قطاع الضيافة',
    client: 'فندق الريتز كارلتون - الرياض',
    date: '2024-12-15',
    imageUrl: '/images/specialized_furniture_moving.jpeg',
    summary: 'تقييم شامل لأضرار 200 قطعة أثاث فاخرة تعرضت للتلف أثناء عملية نقل كبرى'
  },
  {
    id: 'antique-furniture-water-damage',
    title: 'تقييم أضرار الأثاث الأنتيك بعد حادث تسرب مياه',
    category: 'الأضرار المائية',
    client: 'مجموعة خاصة - جدة',
    date: '2024-11-10',
    imageUrl: '/images/furniture_wrapping_services.jpeg',
    summary: 'تقييم خبير للأضرار التي لحقت بمجموعة نادرة من قطع الأثاث الأنتيك بعد حادث تسرب مياه'
  },
  {
    id: 'fire-damage-wooden-library',
    title: 'تقييم أضرار حريق في مكتبة خشبية ثمينة',
    category: 'أضرار الحرائق',
    client: 'مكتبة خاصة - المدينة المنورة',
    date: '2024-10-05',
    imageUrl: '/images/professional_moving_equipment.jpeg',
    summary: 'تقييم متخصص لأضرار الحريق التي لحقت بمكتبة خشبية قيمة تضم كتباً ومخطوطات نادرة'
  },
  {
    id: 'office-furniture-relocation-damage',
    title: 'تقييم أضرار مكاتب وأثاث شركة بعد انتقال المقر الرئيسي',
    category: 'الأثاث المكتبي',
    client: 'شركة البحر الأحمر للتطوير',
    date: '2024-09-15',
    imageUrl: '/images/office_relocation_services.jpeg',
    summary: 'تقييم أضرار نقل لمكاتب وأثاث مكتبي فاخر خلال عملية انتقال مقر الشركة الرئيسي'
  },
  {
    id: 'luxury-home-furniture-international-shipping',
    title: 'تقييم أضرار أثاث منزلي فاخر بعد عملية نقل دولية',
    category: 'النقل الدولي',
    client: 'عائلة خاصة - الرياض',
    date: '2024-08-22',
    imageUrl: '/images/residential_moving_jeddah.jpeg',
    summary: 'تقييم أضرار النقل الدولي لأثاث منزلي فاخر قادم من الولايات المتحدة الأمريكية'
  },
  {
    id: 'hotel-rooms-renovation-damage',
    title: 'تقييم أضرار غرف نوم فندقية بعد تجديد شامل',
    category: 'قطاع الضيافة',
    client: 'فندق الخليج - الخبر',
    date: '2024-07-08',
    imageUrl: '/images/furniture_transportation_experts.jpeg',
    summary: 'تقييم الأضرار التي لحقت بأثاث 50 غرفة فندقية أثناء عملية تجديد شاملة'
  }
];

// مكون فلتر التصنيف
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3 text-[#1A2C56]">تصفية حسب المجال</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeCategory === 'all'
              ? 'bg-[#1A2C56] text-white shadow-md'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          الكل
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeCategory === category
                ? 'bg-[#1A2C56] text-white shadow-md'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

// مكون بطاقة دراسة الحالة
const CaseStudyCard = ({ caseStudy }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#D4AF37]/30 transform hover:-translate-y-1">
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={caseStudy.imageUrl}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#1A2C56]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
          {caseStudy.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1A2C56] mb-2 line-clamp-2">{caseStudy.title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-2">{caseStudy.summary}</p>
        <div className="flex items-center justify-between">
          <div className="text-[#D4AF37]">
            <span className="text-xs font-semibold">{caseStudy.client}</span>
          </div>
          <Link href={`/case-studies/${caseStudy.id}`} className="text-[#1A2C56] hover:text-[#D4AF37] text-sm font-semibold flex items-center gap-1 transition-colors">
            عرض التفاصيل
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function CaseStudiesIndex() {
  // استخراج التصنيفات الفريدة من دراسات الحالة
  const uniqueCategories = [...new Set(caseStudies.map(cs => cs.category))];
  
  // حالة التصنيف النشط
  const [activeCategory, setActiveCategory] = useState('all');
  
  // تصفية دراسات الحالة حسب التصنيف المحدد
  const filteredCaseStudies = activeCategory === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeCategory);

  return (
    <>
      <SEO
        title="دراسات حالة | مكتب الخبير المعتمد لتقييم أضرار الأثاث"
        description="استعرض دراسات الحالة المتخصصة في تقييم أضرار الأثاث والمطالبات التأمينية من مكتب الخبير المعتمد في المملكة العربية السعودية."
        canonicalUrl="https://furniture-expert.org/case-studies"
      />

      {/* قسم العنوان الرئيسي */}
      <div className="bg-gradient-to-r from-[#1A2C56] to-[#2A3F73] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">دراسات حالة متخصصة في تقييم أضرار الأثاث</h1>
            <p className="text-xl opacity-90">استعرض نماذج من حالات حقيقية قمنا بتقييمها واكتشف منهجيتنا المهنية في التعامل مع مختلف أنواع الأضرار</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* إحصائيات سريعة */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1A2C56] mb-2">+1000</div>
              <div className="text-gray-600">حالة تم تقييمها</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1A2C56] mb-2">97%</div>
              <div className="text-gray-600">نسبة القبول في المطالبات</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1A2C56] mb-2">15+</div>
              <div className="text-gray-600">سنة خبرة</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1A2C56] mb-2">48</div>
              <div className="text-gray-600">ساعة متوسط وقت التقييم</div>
            </div>
          </div>
        </div>

        {/* فلتر التصنيف */}
        <CategoryFilter 
          categories={uniqueCategories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        {/* قائمة دراسات الحالة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
        
        {/* قسم الاتصال */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1A2C56] mb-2">هل تحتاج إلى تقييم خبير لأضرار الأثاث؟</h2>
            <p className="text-gray-600 mb-6">فريقنا المتخصص جاهز لمساعدتك في تقييم الأضرار وإعداد التقارير اللازمة للمطالبات التأمينية والقضايا القانونية</p>
            <Link href="/contact" className="inline-block bg-[#1A2C56] text-white px-8 py-3 rounded-lg hover:bg-[#15234A] transition-colors font-medium">
              تواصل معنا الآن
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
} 