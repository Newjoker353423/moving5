import { useEffect, useRef, memo } from 'react';

const MapComponent = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const leafletLoadedRef = useRef(false);

  useEffect(() => {
    // تجنب إعادة التحميل عند Fast Refresh
    if (typeof window !== 'undefined' && window.L) {
      leafletLoadedRef.current = true;
    }

    // تحقق مما إذا كان عنصر الخريطة متاحًا
    if (!mapRef.current) return;
    
    // التحقق من توفر Leaflet
    if (typeof window === 'undefined' || (!window.L && !leafletLoadedRef.current)) {
      // تحميل Leaflet بشكل ديناميكي إذا لم يكن متوفرا
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      script.crossOrigin = '';
      script.async = true;
      
      script.onload = () => {
        leafletLoadedRef.current = true;
        initializeMap();
      };

      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    } else if (window.L) {
      // Leaflet متوفر بالفعل
      initializeMap();
    }
    
    // دالة التنظيف
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const initializeMap = () => {
    // منع إعادة التهيئة
    if (mapInstanceRef.current) return;
    
    // التأكد من توفر Leaflet
    if (!window.L) return;
    
    try {
      // تهيئة الخريطة مع التركيز على السعودية
      const map = window.L.map(mapRef.current).setView([24.7136, 46.6753], 5);
      mapInstanceRef.current = map;
      
      // إضافة طبقة OpenStreetMap
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // إضافة علامات مناطق الخدمة
      const serviceAreas = [
        { name: "الرياض", lat: 24.7136, lng: 46.6753, description: "خدمات تقييم أضرار الأثاث في الرياض" },
        { name: "جدة", lat: 21.4858, lng: 39.1925, description: "خدمات تقييم أضرار الأثاث في جدة" },
        { name: "الدمام", lat: 26.4207, lng: 50.0888, description: "خدمات تقييم أضرار الأثاث في الدمام" },
        { name: "مكة المكرمة", lat: 21.3891, lng: 39.8579, description: "خدمات تقييم أضرار الأثاث في مكة المكرمة" },
        { name: "المدينة المنورة", lat: 24.5247, lng: 39.5692, description: "خدمات تقييم أضرار الأثاث في المدينة المنورة" },
        { name: "الطائف", lat: 21.2667, lng: 40.4167, description: "خدمات تقييم أضرار الأثاث في الطائف" },
        { name: "تبوك", lat: 28.3998, lng: 36.5714, description: "خدمات تقييم أضرار الأثاث في تبوك" },
        { name: "بريدة", lat: 26.3594, lng: 43.9818, description: "خدمات تقييم أضرار الأثاث في بريدة" },
        { name: "خميس مشيط", lat: 18.3, lng: 42.7333, description: "خدمات تقييم أضرار الأثاث في خميس مشيط" }
      ];
      
      // إنشاء علامات لكل منطقة خدمة
      serviceAreas.forEach(area => {
        const marker = window.L.marker([area.lat, area.lng]).addTo(map);
        
        marker.bindPopup(`
          <div dir="rtl" style="text-align: right; min-width: 200px;">
            <h3 style="margin: 0 0 8px; font-weight: bold; font-size: 16px;">${area.name}</h3>
            <p style="margin: 0 0 8px;">${area.description}</p>
            <a href="/contact" style="color: #3B82F6; text-decoration: underline;">اتصل بنا</a>
          </div>
        `);
      });
    } catch (error) {
      console.error("حدث خطأ أثناء تهيئة الخريطة:", error);
    }
  };

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full" 
      style={{ direction: 'ltr' }}
    />
  );
};

// استخدام memo لمنع إعادة الرسم غير الضرورية
export default memo(MapComponent); 