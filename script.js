// اختيار شاشة العرض وجميع الأزرار
const displayArea = document.querySelector('#display-area');
const buttons = document.querySelectorAll('button');

// التعامل مع كل زر عند النقر
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;  // النص الموجود في الزر

        // إذا كان الزر "C" لمسح الشاشة
        if (button.id === 'clear') {
            displayArea.innerText = '';

        // إذا كان الزر "DEL" لمسح آخر مدخل
        } else if (button.id === 'backspace') {
            displayArea.innerText = displayArea.innerText.slice(0, -1);

        // إذا كان الزر "=" لحساب النتيجة
        } else if (button.id === 'equal') {
            try {
                // حساب المدخل باستخدام eval()، لكن تأكد من سلامة الإدخال
                displayArea.innerText = eval(displayArea.innerText);
            } catch (error) {
                displayArea.innerText = 'Error';
            }

        // عند الضغط على أي زر آخر (رقم أو عملية)
        } else {
            displayArea.innerText += buttonText;
        }
    });
});

