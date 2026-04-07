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
            <div class="glass-panel rounded-3xl bg-white/60 border-white/80 overflow-hidden hover:-translate-y-2 transition duration-300 hover:shadow-xl p-6 text-center flex flex-col items-center">
                <a href="${book.id}.html" class="block w-full mb-6">
                    <img src="${book.coverImage}" class="w-full h-64 object-cover rounded-xl shadow-md transform hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/400x600/dcfce7/065f46?text=غلاف+الكتاب'">
                </a>
                <h2 class="text-xl font-black text-emerald-900 mb-2">${book.title}</h2>
                <p class="text-sm text-slate-500 font-bold mb-4">${book.author}</p>
                <a href="${book.id}.html" class="mt-auto bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-bold hover:bg-emerald-600 hover:text-white transition w-full">
                    تفاصيل الكتاب
                </a>
            </div>
        `;
    });
    container.innerHTML = html;
}