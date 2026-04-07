/* Path: js/main.js */
// الوظيفة: الأساسيات (تحميل الـ Navbar و الـ Footer، الروابط، حماية المحتوى، والعدادات)

document.addEventListener('DOMContentLoaded', () => {
    loadNavbarFooter();
    initProtection();
    initCounters();
});

function loadNavbarFooter() {
    // الهيدر (Navbar)
    const navbarHTML = `
    <nav class="fixed top-0 w-full glass-panel z-50 bg-white/90 backdrop-blur-md border-b border-white/50 h-20 flex items-center shadow-sm transition-all duration-300">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <!-- اللوجو -->
            <a href="index.html" class="flex items-center gap-2 font-black text-2xl text-emerald-800 hover:scale-105 transition">
                <img src="images/logo.png" class="w-10 h-10 drop-shadow-sm object-contain" alt="كمشكاة" onerror="this.src='images/ui/logo.png'; this.onerror=null;"> 
                <span>كمشكاة</span>
            </a>
            
            <!-- القائمة على الديسكتوب -->
            <div class="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200">
                <a href="index.html" class="px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition">الرئيسية</a>
                <a href="about.html" class="px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition">من نحن</a>
                <a href="articles.html" class="px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition">المقالات</a>
                <a href="library.html" class="px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition">المكتبة</a>
                <a href="gallery.html" class="px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition">المعرض</a>
                <a href="contact.html" class="px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-emerald-600 transition">تواصل معنا</a>
            </div>

            <!-- زرار القائمة للموبايل -->
            <div class="flex items-center gap-2">
                <button id="mobile-menu-btn" onclick="toggleMobileMenu()" class="md:hidden p-2 rounded-lg bg-slate-100 text-emerald-800 hover:bg-emerald-100 transition border border-slate-200">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- القائمة المنسدلة للموبايل -->
        <div id="mobile-menu" class="hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 p-4 shadow-xl flex flex-col gap-2 md:hidden origin-top">
            <a href="index.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="home" class="w-5 h-5 text-emerald-600"></i> الرئيسية</a>
            <a href="about.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="info" class="w-5 h-5 text-emerald-600"></i> من نحن</a>
            <a href="articles.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="book-open" class="w-5 h-5 text-emerald-600"></i> المقالات</a>
            <a href="library.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="library" class="w-5 h-5 text-emerald-600"></i> المكتبة</a>
            <a href="gallery.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="image" class="w-5 h-5 text-emerald-600"></i> المعرض</a>
            <a href="contact.html" class="p-3 rounded-xl hover:bg-emerald-50 text-slate-700 font-bold flex items-center gap-3"><i data-lucide="phone" class="w-5 h-5 text-emerald-600"></i> تواصل معنا</a>
        </div>
    </nav>`;

    // الفوتر (Footer)
    const footerHTML = `
    <footer class="text-center py-8 mt-auto relative z-10 border-t border-white/50 bg-white/40 backdrop-blur-sm">
        <div class="inline-block px-8 py-2 rounded-full">
            <p class="text-emerald-900 font-bold text-sm">جميع الحقوق محفوظة © كمشكاة 2026</p>
        </div>
    </footer>`;

    // حقن الكود في الأماكن المخصصة له
    const headerEl = document.getElementById('header-ph');
    const footerEl = document.getElementById('footer-ph');
    
    if(headerEl) headerEl.innerHTML = navbarHTML;
    if(footerEl) footerEl.innerHTML = footerHTML;
    
    // تشغيل الأيقونات
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// دالة فتح وقفل قائمة الموبايل
window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// حماية المحتوى (منع الكليك يمين والسحب)
function initProtection() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('dragstart', function(e) { 
        if(e.target.tagName.toLowerCase() === 'img') {
            e.preventDefault(); 
        }
    });
}

// عدادات الأرقام في الرئيسية
function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    if(counters.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const el = entry.target;
                const target = +el.dataset.target || 0;
                animateValue(el, 0, target, 2000); 
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(c => observer.observe(c));
}

// أنيميشن العداد
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}