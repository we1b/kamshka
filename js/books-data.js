/* Path: js/books-data.js */

const booksData = [
    {
        id: "book-001",
        title: "بوصلة النور",
        author: "مصطفى عبد الناصر",
        coverImage: "images/book1.jpg",
        pdfFile: "book/book1.pdf",
        type: "كتاب إلكتروني",
        description: "هذا الكتاب هو دليلك للنجاح بسلام نفسي. يأخذ بيدك وسط زحمة الحياة ليقدم لك أدوات عملية مستوحاة من منهجنا لتنير لك الطريق كالمشكاة. ستتعلم في هذا الكتاب كيف توجه نور الوحي وعلوم تطوير الذات لتكون بوصلتك في بناء عادات حقيقية ومستدامة."
    },
    {
        id: "book-002",
        title: "دليل التعافي",
        author: "مصطفى كمشكاة",
        coverImage: "images/book2.jpg",
        pdfFile: "book/book2.pdf",
        type: "كتاب إلكتروني",
        description: "خطوات عملية ومجربة للتعافي من المشتتات والضغوط اليومية، وكيف تجد المساحة الآمنة بداخلك."
    },
    {
        id: "book-003",
        title: "عادات حقيقية",
        author: "مصطفى عبد الناصر",
        coverImage: "images/book3.jpg",
        pdfFile: "book/book3.pdf",
        type: "كتاب إلكتروني",
        description: "بعيدا عن التحفيز المزيف، هذا الكتاب يقدم لك أدوات عملية لبناء عادات ثابتة لا تتأثر بتقلبات المزاج أو ضغط الحياة."
    }
];

// دالة لجلب كل الكتب
function getAllBooks() {
    return booksData;
}

// دالة لجلب كتاب معين عن طريق الـ ID
function getBookById(id) {
    return booksData.find(book => book.id === id);
}

// لو حابب تعرض الكتب في صفحة المكتبة ممكن تستخدم الدالة دي
function renderBooksList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    booksData.forEach(book => {
        html += `
            <div class="glass-panel rounded-3xl bg-white/60 border-white/80 overflow-hidden hover:-translate-y-2 transition duration-300 hover:shadow-xl p-6 text-center flex flex-col items-center group relative">
                
                <div class="relative w-full mb-6 overflow-hidden rounded-xl">
                    <a href="${book.id}.html" class="block w-full">
                        <img src="${book.coverImage}" class="w-full h-64 object-cover shadow-md transform group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/400x600/ccfbf1/0f766e?text=غلاف+الكتاب'">
                    </a>
                    
                    <!-- زرار المشاركة بيظهر لما الماوس ييجي على الصورة -->
                    <div class="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                        <button onclick="shareItem('كتاب ${book.title}', window.location.origin + window.location.pathname.replace('library.html', '') + '${book.id}.html')" class="bg-white/90 backdrop-blur-sm text-teal-700 p-2.5 rounded-full shadow-lg hover:bg-teal-600 hover:text-white transition transform hover:scale-110" title="مشاركة">
                            <i data-lucide="share-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>

                <h2 class="text-xl font-black text-teal-900 mb-2">${book.title}</h2>
                <p class="text-sm text-slate-500 font-bold mb-4">${book.author}</p>
                
                <div class="mt-auto w-full flex flex-col gap-2">
                    <a href="${book.id}.html" class="bg-teal-50 text-teal-800 px-6 py-2 rounded-xl font-bold hover:bg-teal-100 transition w-full flex items-center justify-center gap-2 shadow-sm">
                        <i data-lucide="info" class="w-4 h-4"></i> التفاصيل
                    </a>
                    <a href="${book.pdfFile}" download class="bg-teal-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-teal-700 transition shadow-md w-full flex items-center justify-center gap-2">
                        <i data-lucide="download" class="w-4 h-4"></i> تحميل PDF
                    </a>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    
    // تفعيل الأيقونات بعد إضافتها للصفحة
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}