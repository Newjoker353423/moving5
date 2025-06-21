# إعدادات Cloudflare Pages

## إعدادات البناء (Build Settings):

### Framework preset:
- **Framework**: Next.js (Static HTML Export)

### Build command:
```bash
npm run build:static
```

### Build output directory:
```
out
```

### Root directory:
```
/
```

### Environment variables (إذا لزم الأمر):
```
NODE_VERSION=18.17.0
NPM_VERSION=9.6.7
```

## إعدادات إضافية:

### في قسم Functions and Pages:
- **Compatibility flags**: 
  - `nodejs_compat`
  
### في قسم Custom domains:
- أضف النطاق المخصص إذا كان لديك

## ملاحظات مهمة:

1. تأكد من أن Build command هو: `npm run build:static`
2. Build output directory يجب أن يكون: `out`
3. إذا واجهت مشاكل، جرب:
   - حذف deployment وإعادة إنشاؤه
   - التأكد من أن جميع dependencies موجودة في package.json
   - فحص logs أثناء البناء

## إصلاح المشاكل الشائعة:

### إذا لم يظهر الموقع:
1. تحقق من أن الـ routing يعمل بشكل صحيح
2. تأكد من وجود ملف `_redirects` في مجلد public
3. فحص console في المتصفح للأخطاء JavaScript

### إذا كانت الصور لا تظهر:
- تأكد من أن `images.unoptimized = true` في next.config.js

### مشاكل التوجيه (Routing):
- تأكد من أن `trailingSlash = true` في next.config.js
- تحقق من إعدادات `_redirects` 