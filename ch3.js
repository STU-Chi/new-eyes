document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');
    const backButton = document.getElementById('back-button');

    if (backButton) {
        backButton.addEventListener('click', function () {
            document.body.classList.add('slide-down'); 
            setTimeout(() => {
                window.location.href = 'CH.html'; 
            }, 500); 
        });
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();

    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';

    setTimeout(function () {
        messageDiv.style.display = 'none';
    }, 3000);

    messageDiv.addEventListener('click', () => {
    window.location.href = 'Turth.html'; 
    });
});

