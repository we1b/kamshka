// فهرس المقالات - بيحتوي على الداتا الأساسية عشان لو حبيت تستخدمها برمجيا بعدين
// لا يتم وضع المحتوى الكامل هنا، فقط المعلومات اللي بتظهر في الكروت

const articlesData = [
    {
        id: "001",
        title: "كيف تبني عادات تستمر معك طول العمر؟",
        category: "تطوير الذات",
        date: "12 أكتوبر 2023",
        shortDescription: "خطوات عملية وعلمية لبناء عادات إيجابية والتخلص من العادات السلبية بدون الاعتماد على قوة الإرادة فقط.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
        link: "article-001.html"
    },
    {
        id: "002",
        title: "أدوات وتقنيات لتنظيم وقتك بفاعلية",
        category: "إنتاجية",
        date: "15 أكتوبر 2023",
        shortDescription: "دليل شامل لأهم الأدوات والطرق اللي هتساعدك تنجز شغلك في وقت أقل وبجودة أعلى.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        link: "article-002.html"
    },
    {
        id: "003",
        title: "مستقبل الذكاء الاصطناعي في صناعة المحتوى",
        category: "تقنية",
        date: "20 أكتوبر 2023",
        shortDescription: "نظرة عميقة على التطورات اللي بتحصل وازاي تقدر تستفيد منها كمصنع محتوى بدل ما تخاف منها.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        link: "article-003.html"
    }
];

// تصدير البيانات لو بتستخدم نظام موديولز، بس احنا شغالين بنظام فلات فهتبقى متاحة على مستوى الويندوز
window.articlesData = articlesData;