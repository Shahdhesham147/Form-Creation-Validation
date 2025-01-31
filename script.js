// انتظار تحميل المحتوى بالكامل
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // عند إرسال النموذج
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // منع إرسال النموذج

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true; // حالة التحقق من الصحة
        let messages = []; // لتخزين الرسائل

        // تحقق من اسم المستخدم
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // تحقق من البريد الإلكتروني
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // تحقق من كلمة المرور
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // عرض الملاحظات بناءً على النتيجة
        feedbackDiv.style.display = "block"; // إظهار الملاحظات
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // اللون الأخضر لنجاح التسجيل
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // عرض الأخطاء
            feedbackDiv.style.color = "#dc3545"; // اللون الأحمر للأخطاء
        }
    });
});

