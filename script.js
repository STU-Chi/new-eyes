document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit');
    const messageElement = document.getElementById('message');

    let isTriangle = false; // 狀態變數，用來判斷是否顯示三角形
    const originalMessage = '16-15-23-5-18'; // 原文


    // 檢查密碼是否正確
    function checkPassword() {
        const password = passwordInput.value.trim().toUpperCase();

        if (password === 'LUCAIN') { 
            // 密碼正確，添加過渡動畫，並在動畫後跳轉到下一頁
            document.body.classList.add('slide-up');
            setTimeout(() => {
                window.location.href = 'ch4.html'; // 跳轉到下一個頁面
            }, 500); // 等待動畫完成後進行跳轉

        }else if (password === 'POWER') { 
                // 密碼正確，添加過渡動畫，並在動畫後跳轉到下一頁
                document.body.classList.add('slide-up');
                setTimeout(() => {
                    window.location.href = 'CH.html'; // 跳轉到下一個頁面
                }, 500); // 等待動畫完成後進行跳轉
               
        }else {
            // 密碼錯誤，顯示錯誤效果
            passwordInput.classList.add('error', 'shake');
            setTimeout(() => {
                passwordInput.classList.remove('error', 'shake');
            }, 1000);
        }
    }

    // 切換顯示三角形或文字
const toggleMessage = () => {
    const inputValue = passwordInput.value.toLowerCase(); // 將輸入的值轉為小寫

    if ((inputValue === 'bill' || inputValue === 'billcipher' ) && !isTriangle) {
        // 只有當目前不是三角形顯示狀態時，才切換顯示三角形
        isTriangle = true; // 將狀態設置為顯示三角形
        const triangle = document.querySelector('.triangle'); // 獲取三角形元素
        triangle.style.display = 'block'; // 顯示三角形
        messageElement.textContent = 'Doritos'; // 更改 h1 內容
        messageElement.classList.add('invisible'); // 讓 h1 內容不可見
        passwordInput.value = ''; // 清空輸入框

    } else if (isTriangle && (inputValue === 'power' || inputValue === 'lucain')) {
        // 當三角形顯示且輸入的密碼是 'power' 或 'lucain'，進行跳轉
        checkPassword(); // 檢查輸入的密碼，進行相應的跳轉

    } else if (isTriangle && inputValue !== 'bill' && inputValue !== 'billcipher' && inputValue !== 'power' && inputValue !== 'lucain') {
        // 當三角形顯示且輸入不是 'bill'、'power' 或 'lucain'，隱藏三角形並恢復 h1 內容
        const triangle = document.querySelector('.triangle'); // 獲取三角形元素
        triangle.style.display = 'none'; // 隱藏三角形
        messageElement.textContent = '16-15-23-5-18'; // 恢復 h1 的原始內容
        messageElement.classList.remove('invisible'); // 顯示 h1 內容
        isTriangle = false; // 重置狀態
        passwordInput.value = ''; // 清空輸入框
    } else {
        // 如果三角形未顯示，執行密碼檢查
        checkPassword(); // 檢查密碼是否正確
    }
};

// 按鈕點擊事件
    submitButton.addEventListener('click', () => {
        toggleMessage(); // 切換三角形顯示
        checkPassword(); // 進行密碼檢查
    });

    // Enter 鍵事件
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleMessage(); // 切換三角形顯示
            checkPassword(); // 進行密碼檢查
        }
    });

    // 在 DOM 加載後添加三角形元素
    const triangleElement = document.createElement('div');
    triangleElement.className = 'triangle'; // 設置三角形類名
    document.body.appendChild(triangleElement); // 將三角形添加到頁面中
});


document.addEventListener('DOMContentLoaded', function () {
    const textItems = document.querySelectorAll('.text-item');

    textItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked'); // 移除點擊效果
            }, 300); // 點擊效果持續時間
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); // 當頁面加載時應用淡入過渡效果

    const textItems = document.querySelectorAll('.text-item');

    textItems.forEach(item => {
        item.addEventListener('click', function () {
            if (this.id === 'ch4') {
                this.classList.add('error');
                this.classList.add('shake');
                setTimeout(() => {
                    this.classList.remove('shake');
                    this.classList.remove('error');
                }, 1500); // 錯誤樣式持續時間
            } else {
                document.body.classList.add('slide-up'); // 添加向上切換過渡效果
                setTimeout(() => {
                    let targetUrl = '';
                    if (this.id === 'ch1') {
                        targetUrl = 'ch1.html'; // 點擊 CH1 時跳轉到第三頁
                    } else if (this.id === 'ch2') {
                        targetUrl = 'ch2.html'; // 點擊 CH2 時跳轉到另一個頁面
                    }else if (this.id === 'ch3') {
                        targetUrl = 'ch3.html'; // 點擊 CH2 時跳轉到另一個頁面
                    }
                    window.location.href = targetUrl;
                }, 500); // 等待過渡完成後再重定向
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); // 當頁面加載時應用淡入過渡效果

    const backButton = document.getElementById('backs-button');

    if (backButton) {
        backButton.addEventListener('click', function () {
            document.body.classList.add('slide-up'); // 添加向下切換過渡效果
            setTimeout(() => {
                window.location.href = 'eye.html'; // 返回到第二個網頁
            }, 500); // 等待過渡完成後再重定向
        });
    }
});