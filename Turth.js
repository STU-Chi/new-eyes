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

openOverlayButton.addEventListener('click', () => {
  modalOverlay.style.display = 'flex'; 
});

// This is not what I said, it was Lucain !
floatingButton.addEventListener('click', () => {
  clickCount++;
  if (clickCount < 3) {
    modalContent.textContent = `I still here！`;
  } else if (clickCount < 4) {
    modalContent.textContent = "Not boring, huh?";
  } else if (clickCount < 6) {
    modalContent.textContent = "Be good, be obedient and stop pressing the button!";
  } else if (clickCount < 7) {
    modalContent.textContent = "Wow！you just click many time.";
  } else if (clickCount < 8) {
    modalContent.textContent = "You are so boring! Isn't it?";
  } else if (clickCount < 9) {
    modalContent.textContent = "....";
  } else if (clickCount < 10) {
    modalContent.textContent = "Don't force me to be rude！";
  } else if (clickCount < 11) {
    modalContent.textContent = "STOP IT!";
    modalContent.classList.add('large-text'); 
  } else if (clickCount < 13) {
    modalContent.textContent = ".....";
    modalContent.classList.remove('large-text'); 
  } else if (clickCount < 14) {
    modalContent.textContent = "Well,Go ahead,Do whatever you want!";
  } else if (clickCount < 16) {
    modalContent.textContent = ".....";
  } else if (clickCount < 17) {
    modalContent.textContent = "Who am I fooling?";
  } else if (clickCount < 18) {
    modalContent.textContent = " You know what?You Win!...bye";
  } else if (clickCount === 40) {
    modalContent.textContent = " I said I've left!";
  } else if (clickCount === 87) {
    modalContent.textContent = " IT'OVER!";
    modalContent.classList.add('large-text'); 
  } else if (clickCount === 100) {
    modalContent.textContent = " Wow! You pressed 100 times, you are so perseverant, what else can I say?";
    modalContent.classList.remove('large-text');
  } else if (clickCount === 101) {
    modalContent.textContent = " Just go with it, I don't care about you anymore";
  }else {
    modalContent.textContent = `The creator is offline!`;
    modalContent.classList.remove('large-text');
  }

  secondOverlay.style.display = 'flex'; 
  myModal.classList.add('show'); 
  });

secondOverlay.addEventListener('click', (event) => {
  if (event.target === secondOverlay) {
  secondOverlay.style.display = 'none'; 
  myModal.classList.remove('show'); 
  }
});

myModal.addEventListener('click', (event) => {
  event.stopPropagation(); 
}); 

/* myModal.addEventListener('click', (event) => {
  secondOverlay.style.display = 'none'; 
  myModal.classList.remove('show'); //other idea
});*/


closeTopButton.addEventListener('click', () => {

  modalOverlay.classList.add('hide-animation');
  modalOverlay.addEventListener('animationend', () => {
    modalOverlay.style.display = 'none'; 
    modalOverlay.classList.remove('hide-animation'); 
  }, { once: true }); 
});

closeBottomButton.addEventListener('click', () => {
  modalOverlay.classList.add('hide-animation');
  
  modalOverlay.addEventListener('animationend', () => {
    modalOverlay.style.display = 'none';
    modalOverlay.classList.remove('hide-animation');
  }, { once: true });
});

function constrainFloatingButton(button) {
  const overlayRect = modalOverlay.getBoundingClientRect();
  const topButtonRect = closeTopButton.getBoundingClientRect();
  const bottomButtonRect = closeBottomButton.getBoundingClientRect();
  const minY = topButtonRect.bottom; 
  const maxY = bottomButtonRect.top - button.offsetHeight; 
  const randomX = Math.random() * (overlayRect.width - button.offsetWidth);
  const randomY = Math.random() * (maxY - minY) + minY;

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

function setupFloatingButtons() {
  constrainFloatingButton(floatingButton);
  constrainFloatingButton(floatingButton1);
  constrainFloatingButton(floatingButton2);
  constrainFloatingButton(floatingButton3);
  constrainFloatingButton(floatingButton4);
}

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


function showRandomButton() {

  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

  openOverlayButton.style.left = randomX + 'px';
  openOverlayButton.style.top = randomY + 'px';

  document.getElementById('openOverlayButton').style.display = 'block';

  setTimeout(() => {
    openOverlayButton.style.display = 'none';
  }, 3000); 
}

setInterval(showRandomButton, 7000);
