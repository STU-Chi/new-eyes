document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit');

    // 檢查密碼是否正確
    function checkPassword() {
        const password = passwordInput.value.trim().toUpperCase();
        if (password === 'LUCAIN') { 
            // 密碼正確，添加過渡動畫，並在動畫後跳轉到下一頁
            document.body.classList.add('slide-up');
            setTimeout(() => {
                window.location.href = 'ch4.html'; // 跳轉到下一個頁面
            }, 500); // 等待動畫完成後進行跳轉

        }if (password === 'POWER') { 
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

    // 按鈕點擊事件
    submitButton.addEventListener('click', checkPassword);

    // Enter 鍵事件
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
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
