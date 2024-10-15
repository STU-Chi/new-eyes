document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); // 當頁面加載時應用淡入過渡效果

    const backButton = document.getElementById('back-button');

    if (backButton) {
        backButton.addEventListener('click', function () {
            document.body.classList.add('slide-down'); // 添加向下切換過渡效果
            setTimeout(() => {
                window.location.href = 'eye.html'; // 返回到第二個網頁
            }, 500); // 等待過渡完成後再重定向
        });
    }
});


// 獲取 tooltip 元素
const tooltip = document.getElementById('tooltip');
let hideTimeout; // 用來存儲 setTimeout 的引用

// 禁止右鍵菜單並顯示自定義提示
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // 禁止默認右鍵菜單

    // 取消之前的隱藏計時（如果存在）
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }

    // 顯示提示框
    tooltip.style.display = 'block';

    // 根據鼠標位置調整提示框位置，讓它位於鼠標右下角
    tooltip.style.left = e.pageX + 10 + 'px'; // 向右偏移 10px
    tooltip.style.top = e.pageY + 10 + 'px';  // 向下偏移 10px

    // 5秒後自動隱藏提示框
    hideTimeout = setTimeout(function () {
        tooltip.style.display = 'none';
    }, 3000); // 3000 毫秒 = 3 秒
});

// 當鼠標移動時，更新提示框的位置
document.addEventListener('mousemove', function (e) {
    // 確保提示框跟隨鼠標移動
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
});

// 當點擊其他位置時隱藏提示框
document.addEventListener('click', function () {
    tooltip.style.display = 'none';
});