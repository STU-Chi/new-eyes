document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); // 當頁面加載時應用淡入過渡效果

    const backButton = document.getElementById('back-button');

    if (backButton) {
        backButton.addEventListener('click', function () {
            document.body.classList.add('slide-down'); // 添加向下切換過渡效果
            setTimeout(() => {
                window.location.href = 'CH.html'; // 返回到第二個網頁
            }, 500); // 等待過渡完成後再重定向
        });
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // 阻止右鍵選單彈出

    // 顯示訊息
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';

    // 自動隱藏訊息，2 秒後消失
    setTimeout(function () {
        messageDiv.style.display = 'none';
    }, 2000);
});