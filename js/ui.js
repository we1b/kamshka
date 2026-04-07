/* Path: js/ui.js */
// الوظيفة: واجهة المستخدم (تأثيرات الظهور، أنيميشن، مودال، Lightbox)

document.addEventListener('DOMContentLoaded', () => {
    initFadeInAnimations();
});

// تأثير الظهور التدريجي (Fade-in) للعناصر أثناء التمرير
function initFadeInAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // العنصر يظهر لما 15% منه يدخل الشاشة
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // إزالة كلاسات الإخفاء وإضافة كلاسات الظهور
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // تطبيق التأثير على أي عنصر واخد كلاس fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        // حالة البداية: مخفي ونازل لتحت شوية
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
        fadeObserver.observe(el);
    });
}

// دالة فتح عارض الصور (Lightbox)
window.openLightbox = function(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const dl = document.getElementById('lightbox-download');
    
    if(lb && img) {
        img.src = src;
        if(dl) dl.href = src;
        
        lb.classList.remove('hidden');
        lb.classList.add('flex');
        
        // أنيميشن تكبير الصورة
        setTimeout(() => { 
            img.classList.remove('scale-95');
            img.classList.add('scale-100'); 
        }, 50);
    }
};

// دالة إغلاق عارض الصور
window.closeLightbox = function() {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    
    if(lb && img) {
        // أنيميشن تصغير الصورة الأول
        img.classList.remove('scale-100');
        img.classList.add('scale-95');
        
        // إخفاء الـ Lightbox بعد الأنيميشن
        setTimeout(() => {
            lb.classList.add('hidden');
            lb.classList.remove('flex');
        }, 200);
    }
};