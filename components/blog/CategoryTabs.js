import React from 'react';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  // Translate category names to Arabic
  const getCategoryNameArabic = (category) => {
    const categoryNames = {
      'all': 'جميع المقالات',
      'technical': 'مقالات تقنية',
      'advisory': 'نصائح استشارية',
      'legal': 'مقالات قانونية',
      'educational': 'مقالات تعليمية',
      'market': 'دراسات سوقية',
      'healthcare': 'الرعاية الصحية'
    };
    
    return categoryNames[category] || category;
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    const categoryIcons = {
      'all': '📚',
      'technical': '⚙️',
      'advisory': '💼',
      'legal': '⚖️',
      'educational': '📖',
      'market': '📊',
      'healthcare': '🏥'
    };
    
    return categoryIcons[category] || '📄';
  };

  return (
    <div className="mb-8">
      <div className="bg-white rounded-2xl shadow-sm p-2 overflow-x-auto">
        <div className="flex flex-nowrap min-w-max">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                relative flex items-center whitespace-nowrap px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-gradient-to-r from-[#1A2C56] to-[#2A3F6B] text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <span className="mr-2">{getCategoryIcon(category)}</span>
              <span>{getCategoryNameArabic(category)}</span>
              {activeCategory === category && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] text-white">
                  {category === 'all' 
                    ? categories.length - 1 
                    : categories.filter(cat => cat === category).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Category Dropdown (Displayed on smaller screens) */}
      <div className="md:hidden mt-4">
        <select
          value={activeCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full bg-white rounded-lg border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1A2C56]"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {getCategoryIcon(category)} {getCategoryNameArabic(category)}
            </option>
          ))}
        </select>
      </div>

      {/* Category Description */}
      <div className="mt-6 text-center">
        {activeCategory === 'technical' && (
          <p className="text-gray-600">مقالات متخصصة تتناول الجوانب التقنية لتقييم أضرار الأثاث وطرق الفحص الاحترافية.</p>
        )}
        {activeCategory === 'advisory' && (
          <p className="text-gray-600">نصائح وإرشادات عملية للتعامل مع شركات النقل وحماية الأثاث من الأضرار.</p>
        )}
        {activeCategory === 'legal' && (
          <p className="text-gray-600">مقالات تشرح الجوانب القانونية المتعلقة بأضرار الأثاث والمطالبات التأمينية.</p>
        )}
        {activeCategory === 'educational' && (
          <p className="text-gray-600">مقالات تعليمية لمساعدة العملاء على فهم عمليات تقييم الأثاث وإجراءات النقل الآمن.</p>
        )}
        {activeCategory === 'market' && (
          <p className="text-gray-600">دراسات حول سوق التأمين والاتجاهات الحديثة في مجال نقل وتأمين الأثاث.</p>
        )}
        {activeCategory === 'healthcare' && (
          <p className="text-gray-600">مقالات متخصصة في مجال إدارة المنشآت الصحية والأنظمة المتعلقة بها.</p>
        )}
        {activeCategory === 'all' && (
          <p className="text-gray-600">جميع المقالات المتخصصة في مجال تقييم أضرار الأثاث والمطالبات التأمينية.</p>
        )}
      </div>

      {/* Category Stats */}
      {activeCategory !== 'all' && (
        <div className="flex justify-center mt-2">
          <span className="inline-flex items-center text-xs text-gray-500">
            <svg className="w-4 h-4 mr-1 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            يتم تحديث المقالات أسبوعياً
          </span>
        </div>
      )}
    </div>
  );
};

export default CategoryTabs;