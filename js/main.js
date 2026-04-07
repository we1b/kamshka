/* Path: js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    loadNavbarFooter();       
    initProtection();         
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();     
    }
    initCounters();
});

function loadNavbarFooter() {
    const navbarHTML = `
    <nav class="fixed top-0 w-full glass-panel z-50 !bg-white/80 backdrop-blur-md border-b border-white/50 h-20 flex items-center shadow-sm">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3 font-black text-2xl text-teal-800 hover:scale-105 transition">
                <img src="images/icon.svg" class="w-10 h-10 drop-shadow-sm object-contain" alt="Logo" onerror="this.style.display='none'"> 
                <span>كمشكاة</span>
            </a>
            
            <div class="hidden md:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-full border border-slate-200 backdrop-blur-sm">
                <a href="index.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-teal-600 hover:shadow-sm transition">الرئيسية</a>
                <a href="categories.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-teal-600 hover:shadow-sm transition">التصنيفات</a>
                <a href="library.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-teal-600 hover:shadow-sm transition">المكتبة</a>
                <a href="gallery.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-teal-600 hover:shadow-sm transition">المعرض</a>
                <a href="about.html" class="nav-link px-4 py-2 rounded-full text-slate-600 font-bold text-sm hover:bg-white hover:text-teal-600 hover:shadow-sm transition">من نحن</a>
            </div>

            <div class="flex items-center gap-3">
                 <a href="contact.html" class="hidden md:flex bg-teal-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-teal-700 transition shadow-lg shadow-teal-200 text-sm items-center gap-2">
                    تواصل معنا
                 </a>
                 <button id="mobile-menu-btn" class="md:hidden p-2 text-teal-800 bg-white/50 rounded-lg border border-white">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                 </button>
            </div>
        </div>
    </nav>
    
    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-white/95 backdrop-blur-xl z-[40] flex flex-col items-center justify-center gap-6 hidden transition-opacity duration-300 opacity-0">
        <a href="index.html" class="text-2xl font-black text-teal-900 hover:text-teal-600 transition">الرئيسية</a>
        <a href="categories.html" class="text-2xl font-black text-teal-900 hover:text-teal-600 transition">التصنيفات</a>
        <a href="library.html" class="text-2xl font-black text-teal-900 hover:text-teal-600 transition">المكتبة</a>
        <a href="gallery.html" class="text-2xl font-black text-teal-900 hover:text-teal-600 transition">المعرض</a>
        <a href="about.html" class="text-2xl font-black text-teal-900 hover:text-teal-600 transition">من نحن</a>
        <a href="contact.html" class="text-2xl font-black text-teal-900 hover:text-teal-600 transition">تواصل معنا</a>
        <button id="close-mobile-menu" class="absolute top-8 right-8 p-3 bg-teal-50 text-teal-800 rounded-full">
            <i data-lucide="x" class="w-6 h-6"></i>
        </button>
    </div>
    `;

    const footerHTML = `
    <footer class="text-center py-8 mt-auto relative z-10">
        <div class="glass-panel inline-flex flex-col items-center px-8 py-6 rounded-3xl bg-white/60 backdrop-blur-md gap-4">
            <div class="flex gap-4 mb-2">
                <a href="https://www.facebook.com/MostafaKmshkat" class="text-slate-400 hover:text-blue-600 transition"><i data-lucide="facebook" class="w-5 h-5"></i></a>
                <a href="https://www.instagram.com/mostafakmshkat/" class="text-slate-400 hover:text-pink-600 transition"><i data-lucide="instagram" class="w-5 h-5"></i></a>
                <a href="https://x.com/Mostafakamishka" class="text-slate-400 hover:text-slate-800 transition"><i data-lucide="twitter" class="w-5 h-5"></i></a>
            </div>
            <p class="text-teal-800 font-bold text-sm">جميع الحقوق محفوظة © مصطفى كمشكاة 2026</p>
            <div class="text-xs text-slate-500 font-semibold">استعن بالله ولا تعجز</div>
        </div>
    </footer>`;

    const headerPh = document.getElementById('header-ph');
    const footerPh = document.getElementById('footer-ph');

    if(headerPh) headerPh.innerHTML = navbarHTML;
    if(footerPh) footerPh.innerHTML = footerHTML;

    // Mobile Menu Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeMobileBtn = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0');
                mobileMenu.classList.add('opacity-100');
            }, 10);
        });
    }

    if (closeMobileBtn && mobileMenu) {
        closeMobileBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('opacity-100');
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    }

    // Highlight active link
    const currentPage = document.body.dataset.page;
    if (currentPage) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('href').includes(currentPage)) {
                link.classList.add('bg-white', 'text-teal-600', 'shadow-sm');
                link.classList.remove('text-slate-600');
            }
        });
    }

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// حماية المحتوى
function initProtection() { 
    document.addEventListener('contextmenu', event => event.preventDefault()); 
    document.addEventListener('copy', event => {
        event.preventDefault();
    });
}

// عدادات الأرقام
function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200; 

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText.replace('+', '');
            const time = value / speed;

            if (data < value) {
                counter.innerText = Math.ceil(data + time) + '+';
                setTimeout(animate, 20);
            } else {
                counter.innerText = value + '+';
            }
        }
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animate();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// دوال المشاركة والتفاعل
window.shareItem = function(title, url) {
    const shareUrl = url || window.location.href;
    if (navigator.share) {
        navigator.share({ title: title || 'كمشكاة', url: shareUrl }).catch(console.error);
    } else {
        navigator.clipboard.writeText(shareUrl);
        alert('تم نسخ الرابط للمشاركة!');
    }
};

window.toggleLike = function(btnElement) {
    const countSpan = btnElement.querySelector('.like-count');
    const icon = btnElement.querySelector('i');
    let count = parseInt(countSpan.innerText);
    
    if (btnElement.classList.contains('liked')) {
        countSpan.innerText = count - 1;
        btnElement.classList.remove('liked');
        icon.classList.remove('fill-current', 'text-red-500');
    } else {
        countSpan.innerText = count + 1;
        btnElement.classList.add('liked');
        icon.classList.add('fill-current', 'text-red-500');
    }
    
    icon.style.transform = 'scale(1.2)';
    setTimeout(() => { icon.style.transform = 'scale(1)'; }, 200);
};