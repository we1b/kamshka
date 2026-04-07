// سكربت بسيط وخفيف للتحكم في واجهة المستخدم

document.addEventListener('DOMContentLoaded', () => {
    // التحكم في قائمة الموبايل
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // تأثير زجاجي إضافي عند فتح القائمة
            if(!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('glass-panel');
            }
        });
    }

    // إضافة تأثير بسيط عند التمرير للهيدر
    const header = document.querySelector('nav');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-xl');
                header.classList.replace('rgba(255, 255, 255, 0.65)', 'rgba(255, 255, 255, 0.85)');
            } else {
                header.classList.remove('shadow-xl');
                header.classList.replace('rgba(255, 255, 255, 0.85)', 'rgba(255, 255, 255, 0.65)');
            }
        });
    }
});