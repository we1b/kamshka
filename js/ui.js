// سكربت للتعامل مع واجهة المستخدم والرسائل التفاعلية

document.addEventListener('DOMContentLoaded', () => {
    
    // دالة لإظهار رسالة منبثقة (Toast) بدل استخدام الـ alert المزعج
    function showToast(message) {
        const toastContainer = document.getElementById('toast-container');
        const toastMessage = document.getElementById('toast-message');
        
        if (toastContainer && toastMessage) {
            toastMessage.textContent = message;
            toastContainer.classList.remove('hidden');
            
            // إضافة حركة ظهور
            toastContainer.style.opacity = '0';
            toastContainer.style.transform = 'translate(-50%, 20px)';
            toastContainer.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                toastContainer.style.opacity = '1';
                toastContainer.style.transform = 'translate(-50%, 0)';
            }, 10);

            // إخفاء الرسالة بعد 3 ثواني
            setTimeout(() => {
                toastContainer.style.opacity = '0';
                toastContainer.style.transform = 'translate(-50%, 20px)';
                setTimeout(() => {
                    toastContainer.classList.add('hidden');
                }, 300);
            }, 3000);
        }
    }

    // التعامل مع نموذج النشرة البريدية
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // منع إعادة تحميل الصفحة
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if(emailInput.value) {
                showToast('تم الاشتراك في النشرة بنجاح، شكرا ليك!');
                emailInput.value = ''; // تفريغ الحقل
            }
        });
    }

    // التعامل مع نموذج التواصل
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            if(nameInput && nameInput.value) {
                showToast(`رسالتك وصلت يا ${nameInput.value}، هنرد عليك قريب!`);
                contactForm.reset(); // تفريغ النموذج
            }
        });
    }
});