document.addEventListener('DOMContentLoaded', function () {
    const PIT = document.getElementById('ps');
    const submitButton = document.getElementById('submit');
    const messageElement = document.getElementById('message');

    let isTriangle = false; 
    const originalMessage = '16-15-23-5-18'; 


    function checkPassword() {
        const pwd = PIT.value.trim().toUpperCase();

        if (pwd === 'LUCAIN') { // ... , I guess he has something to say to you :O
            document.body.classList.add('slide-up');
            setTimeout(() => {
                window.location.href = 'ch4.html'; 
            }, 500); 

        }else if (pwd === 'POWER') { // My friend, I already told you the answer, didn’t I? >:)
                document.body.classList.add('slide-up');
                setTimeout(() => {
                    window.location.href = 'CH.html'; 
                }, 500); 
               
        }else {
            PIT.classList.add('error', 'shake');
            setTimeout(() => {
                PIT.classList.remove('error', 'shake');
            }, 1000);
            PIT.value = ''; 
        }
    }


const toggleMessage = () => {
    const inputValue = PIT.value.toLowerCase(); 

    if ((inputValue === 'bill' || inputValue === 'billcipher' || inputValue === 'bill cipher' ) && !isTriangle) {
        // buy gold, BYE!
        isTriangle = true; 
        const triangle = document.querySelector('.triangle'); 
        triangle.style.display = 'block'; 
        messageElement.textContent = 'Doritos'; // I like it :)
        messageElement.classList.add('invisible'); 
        PIT.value = ''; 

    } else if (isTriangle && (inputValue === 'power' || inputValue === 'lucain')) {
        checkPassword(); 
    } else if (isTriangle && inputValue !== 'bill' && inputValue !== 'billcipher' && inputValue !== 'bill cipher' && inputValue !== 'power' && inputValue !== 'lucain') {
        const triangle = document.querySelector('.triangle'); 
        triangle.style.display = 'none'; 
        messageElement.textContent = '16-15-23-5-18'; 
        messageElement.classList.remove('invisible'); 
        isTriangle = false; 
        PIT.value = ''; 
    } else {
        checkPassword(); 
    }
};

    submitButton.addEventListener('click', () => {
        toggleMessage(); 
        checkPassword(); 
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleMessage(); 
            checkPassword(); 
        }
    });

    const triangleElement = document.createElement('div');
    triangleElement.className = 'triangle'; 
    document.body.appendChild(triangleElement); 
});


document.addEventListener('DOMContentLoaded', function () {
    const textItems = document.querySelectorAll('.text-item');

    textItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked'); 
            }, 300); 
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); 
    const textItems = document.querySelectorAll('.text-item');

    textItems.forEach(item => {
        item.addEventListener('click', function () {
            if (this.id === 'ch4') {
                this.classList.add('error');
                this.classList.add('shake');
                setTimeout(() => {
                    this.classList.remove('shake');
                    this.classList.remove('error');
                }, 1500); 
            } else {
                document.body.classList.add('slide-up'); 
                setTimeout(() => {
                    let targetUrl = '';
                    if (this.id === 'ch1') {
                        targetUrl = 'ch1.html'; 
                    } else if (this.id === 'ch2') {
                        targetUrl = 'ch2.html';
                    }else if (this.id === 'ch3') {
                        targetUrl = 'ch3.html'; 
                    }
                    window.location.href = targetUrl;
                }, 500); 
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); 

    const backButton = document.getElementById('backs-button');

    if (backButton) {
        backButton.addEventListener('click', function () {
            document.body.classList.add('slide-up'); 
            setTimeout(() => {
                window.location.href = 'eye.html';
            }, 500); 
        });
    }
});