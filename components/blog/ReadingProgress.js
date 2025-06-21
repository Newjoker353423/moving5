import { useState, useEffect } from 'react';

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector(target);
    
    if (!article) {
      return;
    }
    
    const scrollListener = () => {
      const element = article;
      const totalHeight = element.clientHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      if (totalHeight - windowHeight <= 0) {
        setReadingProgress(100);
      } else {
        const percentage = (scrollTop / (totalHeight - windowHeight)) * 100;
        setReadingProgress(Math.min(100, Math.max(0, percentage)));
      }
    };
    
    window.addEventListener('scroll', scrollListener);
    
    // Initial calculation
    scrollListener();
    
    return () => window.removeEventListener('scroll', scrollListener);
  }, [target]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#1A2C56] to-[#D4AF37] transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
};

export default ReadingProgress; 