export interface Service {
  title: string;
  description: string;
  descriptionAr: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive websites using cutting-edge technologies for optimal performance and user experience.",
    descriptionAr: "بناء مواقع عصرية متجاوبة باستخدام أحدث التقنيات لضمان أفضل أداء.",
    icon: "code",
  },
  {
    title: "App Development",
    description:
      "Designing and developing smart mobile applications that work efficiently on Android and iOS platforms.",
    descriptionAr: "تصميم وتطوير تطبيقات موبايل ذكية تعمل بكفاءة على Android و iOS.",
    icon: "smartphone",
  },
  {
    title: "Cyber Security",
    description:
      "Securing websites and identifying vulnerabilities to ensure user data protection and system integrity.",
    descriptionAr: "تأمين المواقع واكتشاف الثغرات البرمجية لضمان حماية بيانات المستخدمين.",
    icon: "shield",
  },
  {
    title: "UI/UX Design",
    description:
      "Enhancing user experience and designing attractive, intuitive interfaces that drive engagement.",
    descriptionAr: "تحسين تجربة المستخدم وتصميم واجهات جذابة وسهلة الاستخدام.",
    icon: "palette",
  },
  {
    title: "Bug Fixing",
    description:
      "Analyzing code and fixing technical errors to ensure 100% website stability and reliability.",
    descriptionAr: "تحليل الأكواد وإصلاح الأخطاء التقنية لضمان استقرار الموقع بنسبة 100%.",
    icon: "bug",
  },
  {
    title: "Performance",
    description:
      "Accelerating website performance and improving search engine rankings through SEO optimization.",
    descriptionAr: "تسريع أداء المواقع وتحسين نتائجها في محركات البحث SEO.",
    icon: "rocket",
  },
];
