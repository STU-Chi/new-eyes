document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); 

    const backButton = document.getElementById('back-button');

    if (backButton) {
        backButton.addEventListener('click', function () {
            document.body.classList.add('slide-down'); 
            setTimeout(() => {
                window.location.href = 'eye.html'; 
            }, 500); 
        });
    }
});

const tooltip = document.getElementById('tooltip');
let hideTimeout; 

document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); 
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    tooltip.style.display = 'block';
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';  
    hideTimeout = setTimeout(function () {
        tooltip.style.display = 'none';
    }, 3000); 
});

document.addEventListener('mousemove', function (e) {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
});

document.addEventListener('click', function () {
    tooltip.style.display = 'none';
});
