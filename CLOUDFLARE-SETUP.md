# دليل إعداد Cloudflare Pages 🚀

## المشكلة الشائعة
إذا كان موقعك لا يفتح على Cloudflare Pages رغم نجاح البناء، فالمشكلة عادة في إعدادات البناء أو التوجيه.

## إعدادات البناء الصحيحة

### 1. في Cloudflare Pages Dashboard:

**Framework preset:**
```
Next.js (Static HTML Export)
```

**Build command:**
```bash
npm run build:static
```

**Build output directory:**
```
out
```

**Root directory:**
```
/ (اتركه فارغ أو ضع /)
```

### 2. Environment Variables (اختياري):
```
NODE_VERSION=18.17.0
NPM_VERSION=9.6.7
```

## الإعدادات في الكود

### next.config.js ✅
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: 'export',        // مهم للغاية
  distDir: 'out',          // مجلد الإخراج
  images: {
    unoptimized: true,     // ضروري لـ static export
    domains: ['localhost'],
  },
}
```

### package.json ✅
```json
{
  "scripts": {
    "build:static": "next build && next export"
  }
}
```

### public/_redirects ✅
```
/*    /index.html   200
```

## خطوات الحل

### 1. تحديث الإعدادات:
- تأكد من أن `output: 'export'` موجود في next.config.js
- تأكد من أن Build command هو `npm run build:static`
- تأكد من أن Output directory هو `out`

### 2. إعادة النشر:
- في Cloudflare Pages Dashboard
- اذهب إلى Deployments
- اضغط على "Retry deployment"
- أو اضغط على "View details" ثم "Retry"

### 3. فحص الأخطاء:
- راجع Build logs في Cloudflare
- تحقق من Console في المتصفح (F12)
- تأكد من عدم وجود أخطاء JavaScript

## مشاكل شائعة وحلولها

### المشكلة: صفحة بيضاء
**الحل:**
- تحقق من أن `trailingSlash: true`
- تأكد من وجود ملف `_redirects`

### المشكلة: الصور لا تظهر
**الحل:**
- تأكد من `images.unoptimized: true`
- تحقق من مسارات الصور

### المشكلة: التوجيه لا يعمل
**الحل:**
- تحقق من ملف `_redirects`
- تأكد من `trailingSlash: true`

### المشكلة: API Routes لا تعمل
**الحل:**
- API Routes لا تعمل مع static export
- استخدم ملفات ثابتة بدلاً منها (مثل sitemap.xml)

## اختبار محلي

للتأكد من أن كل شيء يعمل:

```bash
npm run build:static
cd out
npx serve -s .
```

إذا عمل محلياً، فسيعمل على Cloudflare Pages.

## روابط مفيدة

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

## ملاحظات مهمة

1. **لا تستخدم API Routes** مع static export
2. **استخدم ملفات ثابتة** للبيانات الديناميكية
3. **تأكد من الإعدادات** قبل النشر
4. **اختبر محلياً** دائماً

---

✅ **مع هذه الإعدادات، يجب أن يعمل موقعك بشكل مثالي على Cloudflare Pages!** 