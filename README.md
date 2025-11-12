# New-Portfolio

Portfolio شخصي مبني بـ React و TypeScript

## التقنيات المستخدمة

- React 18
- TypeScript
- Vite
- Bootstrap 5
- SCSS
- Font Awesome

## تشغيل المشروع

```bash
# تنزيل التبعيات
npm install

# تشغيل المشروع في وضع التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء
npm run preview
```

## بنية المشروع

```
src/
├── components/          # مكونات React
│   ├── Navbar.tsx      # شريط التنقل
│   ├── Hero.tsx        # القسم الرئيسي
│   └── Resume.tsx      # قسم السيرة الذاتية
├── assets/             # الملفات الثابتة
│   ├── images/         # الصور
│   ├── icons/          # الأيقونات
│   └── resume/         # ملفات السيرة الذاتية
├── styles/             # ملفات التنسيق
│   └── main.scss       # التنسيق الرئيسي
├── App.tsx             # المكون الرئيسي
└── main.tsx            # نقطة الدخول
```