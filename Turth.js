// 取得元素
let clickCount = 0;
const openOverlayButton = document.getElementById('openOverlayButton');
const modalOverlay = document.getElementById('modalOverlay');
const secondOverlay = document.getElementById('secondOverlay');
const closeTopButton = document.getElementById('closeTopButton');
const closeBottomButton = document.getElementById('closeBottomButton');
const myModal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');
const floatingButton = document.getElementById('myFloatingButton');
const floatingButton1 = document.getElementById('floatingButton1');
const floatingButton2 = document.getElementById('floatingButton2');
const floatingButton3 = document.getElementById('floatingButton3');
const floatingButton4 = document.getElementById('floatingButton4');

// 打開第一層遮罩層的按鈕
openOverlayButton.addEventListener('click', () => {
  modalOverlay.style.display = 'flex'; // 顯示第一層遮罩層
});

// 漂浮按鈕點擊，顯示第二層遮罩層並改變文字
floatingButton.addEventListener('click', () => {
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
  } else if (clickCount < 13) {
    modalContent.textContent = ".....";
    modalContent.classList.remove('large-text'); // 移除大字樣式
  } else if (clickCount < 14) {
    modalContent.textContent = "Well,Go ahead,Do whatever you want!";
  } else if (clickCount < 16) {
    modalContent.textContent = ".....";
  } else if (clickCount < 17) {
    modalContent.textContent = "Who am I fooling?";
  } else if (clickCount < 18) {
    modalContent.textContent = " You know what?You Win!...bye";
  } else {
    modalContent.textContent = `The creator is offline!`;
    modalContent.classList.remove('large-text'); // 移除大字樣式
  }

  secondOverlay.style.display = 'flex'; // 顯示第二層遮罩層
  myModal.classList.add('show'); // 顯示彈出視窗
  });

 // 只有點擊遮罩層時關閉視窗
secondOverlay.addEventListener('click', (event) => {
  if (event.target === secondOverlay) {
  secondOverlay.style.display = 'none'; // 隱藏第二層遮罩層
  myModal.classList.remove('show'); // 隱藏彈出視窗
  }
});

// 阻止點擊視窗時關閉
myModal.addEventListener('click', (event) => {
  event.stopPropagation(); // 阻止事件冒泡
}); 

/* // 點擊彈出視窗退出第二層遮罩層
myModal.addEventListener('click', (event) => {
  secondOverlay.style.display = 'none'; // 隱藏第二層遮罩層
  myModal.classList.remove('show'); // 隱藏彈出視窗
});*/

// 上按鈕點擊事件，添加動畫並隱藏第一層遮罩層
closeTopButton.addEventListener('click', () => {
  // 先添加動畫 class
  modalOverlay.classList.add('hide-animation');
  
  // 設定動畫結束後隱藏元素
  modalOverlay.addEventListener('animationend', () => {
    modalOverlay.style.display = 'none'; // 隱藏第一層遮罩層
    modalOverlay.classList.remove('hide-animation'); // 移除動畫 class，為了下次打開能正常顯示
  }, { once: true }); // 使用 once: true 保證事件只執行一次
});

// 下按鈕點擊事件，添加動畫並隱藏第一層遮罩層
closeBottomButton.addEventListener('click', () => {
  modalOverlay.classList.add('hide-animation');
  
  modalOverlay.addEventListener('animationend', () => {
    modalOverlay.style.display = 'none';
    modalOverlay.classList.remove('hide-animation');
  }, { once: true });
});


// 限制漂浮按鈕範圍的函數
function constrainFloatingButton(button) {
  const overlayRect = modalOverlay.getBoundingClientRect();
  const topButtonRect = closeTopButton.getBoundingClientRect();
  const bottomButtonRect = closeBottomButton.getBoundingClientRect();

  // 計算上下限範圍
  const minY = topButtonRect.bottom; // 不超過上方關閉按鈕的底部
  const maxY = bottomButtonRect.top - button.offsetHeight; // 不超過下方關閉按鈕的頂部

  // 隨機計算新位置，保持在範圍內
  const randomX = Math.random() * (overlayRect.width - button.offsetWidth);
  const randomY = Math.random() * (maxY - minY) + minY;

  // 設定新位置
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

// 將所有漂浮按鈕的範圍設置在關閉按鈕之間
function setupFloatingButtons() {
  constrainFloatingButton(floatingButton);
  constrainFloatingButton(floatingButton1);
  constrainFloatingButton(floatingButton2);
  constrainFloatingButton(floatingButton3);
  constrainFloatingButton(floatingButton4);
}

// 固定漂浮按鈕內容
floatingButton1.addEventListener('click', () => {
  secondOverlay.style.display = 'flex';
  myModal.classList.add('show');
  modalContent.textContent = "I see all~";
});

floatingButton2.addEventListener('click', () => {
  secondOverlay.style.display = 'flex';
  myModal.classList.add('show');
  modalContent.textContent = "ha! one more baby";
});

floatingButton3.addEventListener('click', () => {
  secondOverlay.style.display = 'flex';
  myModal.classList.add('show');
  modalContent.textContent = "shame on you";
});

floatingButton4.addEventListener('click', () => {
  secondOverlay.style.display = 'flex';
  myModal.classList.add('show');
  modalContent.textContent = "because I away see you";
});


// 隨機出現按鈕
function showRandomButton() {
  // 隨機設定按鈕的顯示位置
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

  openOverlayButton.style.left = randomX + 'px';
  openOverlayButton.style.top = randomY + 'px';

  // 按鈕顯示
  openOverlayButton.style.display = 'block';

  // 設定按鈕隨機時間後隱藏
  setTimeout(() => {
    openOverlayButton.style.display = 'none';
  }, 2000); // 2秒後隱藏
}

// 每隔3秒隨機顯示按鈕
setInterval(showRandomButton, 5000);
