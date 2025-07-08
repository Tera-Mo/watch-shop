document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // تعيين الصورة الأولى كنشطة افتراضياً
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // إزالة فئة 'active' من جميع الصور المصغرة
            thumbnails.forEach(t => t.classList.remove('active'));

            // تغيير src الصورة الرئيسية إلى قيمة data-full للصورة المصغرة
            mainImage.src = thumbnail.dataset.full;

            // إضافة فئة 'active' للصورة المصغرة التي تم النقر عليها
            thumbnail.classList.add('active');
        });
    });

    // إضافة وظيفة التمرير الناعم لأزرار التنقل (إذا لم تكن موجودة بالفعل)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // تأكد من أن targetId ليس فارغًا أو مجرد #
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});