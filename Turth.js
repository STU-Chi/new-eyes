// 初始化按鈕點擊次數
let clickCount = 0;

// 取得按鈕與視窗元素
const button = document.getElementById('myButton');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');
const modalOverlay = document.getElementById('modalOverlay');
const randomButton = document.getElementById('randomButton');

// 定義點擊事件
button.addEventListener('click', () => {
  clickCount++;

  // 根據點擊次數變更視窗內的文字
  if (clickCount < 4) {
    modalContent.textContent = `I still here！`;
  } else if (clickCount < 5) {
    modalContent.textContent = "Wow！you just click many time.";
  } else if (clickCount < 7) {
    modalContent.textContent = "Be good, be obedient and stop pressing the button!";
  } else if (clickCount < 8) {
    modalContent.textContent = "You are so boring! Isn't it?";
  } else if (clickCount === 10) {
    modalContent.textContent = "Don't force me to be rude！";
  } else if (clickCount === 11) {
    modalContent.textContent = "STOP IT!";
    modalContent.classList.add('large-text'); // 加入大字樣式
  } else if (clickCount < 12) {
    modalContent.textContent = ".....";
    modalContent.classList.remove('large-text'); // 移除大字樣式
  }else if (clickCount < 13) {
    modalContent.textContent = "Well,Go ahead,Do whatever you want!";
    modalContent.classList.remove('large-text'); // 移除大字樣式
  }else if (clickCount < 15) {
    modalContent.textContent = ".....";
  } else if (clickCount < 16) {
    modalContent.textContent = "Who am I fooling?";
  }else if (clickCount < 17) {
    modalContent.textContent = " You know what?You Win!...bye";
  }else {
    modalContent.textContent = `This is the ${clickCount} th click,The creator is offline!`;
    modalContent.classList.remove('large-text'); // 移除大字樣式
  }

  // 顯示視窗和遮罩層
  modal.classList.add('show');
  modalOverlay.classList.add('show');
});

// 只有點擊遮罩層時關閉視窗
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modal.classList.remove('show');
    modalOverlay.classList.remove('show');
  }
});

// 阻止點擊視窗時關閉
modal.addEventListener('click', (event) => {
  event.stopPropagation(); // 阻止事件冒泡
});

// 隨機出現按鈕
function showRandomButton() {
    // 隨機設定按鈕的顯示位置
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
  
    randomButton.style.left = randomX + 'px';
    randomButton.style.top = randomY + 'px';
  
    // 按鈕顯示
    randomButton.style.display = 'block';
  
    // 設定按鈕隨機時間後隱藏
    setTimeout(() => {
      randomButton.style.display = 'none';
    }, 2000); // 2秒後隱藏
  }
  
  // 每隔3秒隨機顯示按鈕
  setInterval(showRandomButton, 10000);
