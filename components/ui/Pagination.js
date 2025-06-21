const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are less than or equal to maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first and last page
      // Show pages around current page
      const leftSiblingIndex = Math.max(currentPage - 1, 1);
      const rightSiblingIndex = Math.min(currentPage + 1, totalPages);
      
      // Show dots if pages are skipped
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
      
      if (!shouldShowLeftDots && shouldShowRightDots) {
        // Show more pages on the left
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (shouldShowLeftDots && !shouldShowRightDots) {
        // Show more pages on the right
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else if (shouldShowLeftDots && shouldShowRightDots) {
        // Show dots on both sides
        pageNumbers.push(1);
        pageNumbers.push('...');
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else {
        // Show all pages
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }
    }
    
    return pageNumbers;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center mt-16 space-y-4">
      {/* Page Info */}
      <div className="text-sm text-gray-600 text-center">
        صفحة {currentPage} من {totalPages} ({totalPages * 9} مقال إجمالي)
      </div>
      
      {/* Navigation */}
      <nav className="flex items-center space-x-1 rtl:space-x-reverse">
        {/* Previous Page Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
            currentPage === 1
              ? 'text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50'
              : 'text-[#1A2C56] border-[#1A2C56] hover:bg-[#1A2C56] hover:text-white'
          }`}
        >
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          السابق
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1 rtl:space-x-reverse mx-4">
          {getPageNumbers().map((pageNumber, index) => (
            <button
              key={index}
              onClick={() => typeof pageNumber === 'number' && onPageChange(pageNumber)}
              className={`min-w-[40px] h-10 rounded-lg transition-all duration-200 ${
                pageNumber === currentPage
                  ? 'bg-[#1A2C56] text-white shadow-lg transform scale-105'
                  : pageNumber === '...'
                  ? 'text-gray-500 cursor-default'
                  : 'text-[#1A2C56] hover:bg-[#F8F8F8] border border-transparent hover:border-[#1A2C56]'
              }`}
              disabled={pageNumber === '...'}
            >
              {pageNumber}
            </button>
          ))}
        </div>

        {/* Next Page Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
            currentPage === totalPages
              ? 'text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50'
              : 'text-[#1A2C56] border-[#1A2C56] hover:bg-[#1A2C56] hover:text-white'
          }`}
        >
          التالي
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
      
      {/* Quick Navigation */}
      {totalPages > 5 && (
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#1A2C56] hover:underline'
            }`}
          >
            الصفحة الأولى
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#1A2C56] hover:underline'
            }`}
          >
            الصفحة الأخيرة
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination; 