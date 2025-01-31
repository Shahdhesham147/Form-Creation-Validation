// دالة لاسترجاع البيانات من الـ API وعرضها
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // رابط الـ API
    const dataContainer = document.getElementById('api-data'); // العنصر الذي سيعرض البيانات

    try {
        // جلب البيانات من الـ API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // إزالة النص المؤقت "Loading..."
        dataContainer.innerHTML = '';

        // إنشاء قائمة لعرض الأسماء
        const userList = document.createElement('ul');

        // إضافة كل اسم مستخدم في القائمة
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // إضافة اسم المستخدم
            userList.appendChild(listItem);
        });

        // إضافة القائمة إلى العنصر
        dataContainer.appendChild(userList);
    } catch (error) {
        // في حالة حدوث خطأ، عرض رسالة فشل
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', fetchUserData);

