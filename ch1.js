function caesarCipher(shift) {
    let input = document.getElementById('text-area').value;
    let output = input.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt();
            let base = char >= 'a' ? 97 : 65;
            return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
    document.getElementById('text-area').value = output;
}


function atbashcipher() {
    let text = document.getElementById('text-area').value; 
    let encryptedText = ''; 
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) { 
            let code = char.charCodeAt(0); 
            if (char >= 'a' && char <= 'z') { 
                encryptedText += String.fromCharCode('z'.charCodeAt(0) - (code - 'a'.charCodeAt(0)));
            } else if (char >= 'A' && char <= 'Z') { 
                encryptedText += String.fromCharCode('Z'.charCodeAt(0) - (code - 'A'.charCodeAt(0)));
            }
        } else {
            encryptedText += char; 
        }
    }
    document.getElementById('text-area').value = encryptedText; 
}



function a1z26Cipher() {
    let text = document.getElementById('text-area').value.trim(); 
    if (isNumeric(text)) {
        document.getElementById('text-area').value = a1z26Decrypt(text);
    } else {
        document.getElementById('text-area').value = a1z26Encrypt(text);
    }
}
function isNumeric(text) {
    return /^[0-9,\s]+$/.test(text); 
}
function a1z26Encrypt(text) {
    let encryptedText = [];
    text = text.toUpperCase(); 
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'A' && char <= 'Z') {
            encryptedText.push(char.charCodeAt(0) - 'A'.charCodeAt(0) + 1); // A=1, B=2, ..., Z=26
        } else {
            encryptedText.push(char); 
        }
    }
    return encryptedText.join(' '); 
}

function a1z26Decrypt(text) {
    let decryptedText = '';
    let numbers = text.split(/[,\s]+/); 
    for (let i = 0; i < numbers.length; i++) {
        let num = parseInt(numbers[i]);
        if (num >= 1 && num <= 26) {
            decryptedText += String.fromCharCode(num + 'A'.charCodeAt(0) - 1); 
        } else {
            decryptedText += numbers[i]; 
        }
    }
    return decryptedText;
}

function isBinary(str) {
    return /^[01\s]+$/.test(str); 
}
function filterValidCharacters(text) {
    return text.replace(/[^a-zA-Z0-9 ]/g, '');
}
function textToBinary(text) {
    return text.split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0')) 
        .join(' ');
}

function binaryToText(binary) {
    try {
        
        const cleanedBinary = binary.trim().replace(/\s+/g, ' ');

        return cleanedBinary.split(' ')
            .filter(bin => bin.length === 8) 
            .map(bin => String.fromCharCode(parseInt(bin, 2))) 
            .join(''); 
    } catch (error) {
        console.error("Error decoding binary:", error.message);
        return ''; 
    }
}


function binarycipher() {
    let inputText = document.getElementById('text-area').value.trim();

    if (isBinary(inputText)) {
        let decryptedText = binaryToText(inputText);
        document.getElementById('text-area').value = decryptedText;

    } else {
        let encryptedBinary = textToBinary(inputText);
        document.getElementById('text-area').value = encryptedBinary;
    }
}


function validateKey(key) {
    if (!key) {
        alert("Key is empty");
        return false;
    }

    if (!/[a-zA-Z]/.test(key)) {
        alert("Key has no letters");
        return false;
    }

    return true;
}


function vigenereEncrypt() {
    let plainText = document.getElementById('text-area').value;
    let key = document.getElementById('vigenere-key').value.trim();

    if (validateKey(key)) {
        key = key.toUpperCase();
        let encryptedText = '';
        let keyIndex = 0;

        for (let i = 0; i < plainText.length; i++) {
            let char = plainText[i];

            if (/[a-zA-Z]/.test(char)) {
                let charCode = plainText[i].toUpperCase().charCodeAt(0) - 65;
                let keyCode = key[keyIndex % key.length].charCodeAt(0) - 65;
                let encryptedCharCode = (charCode + keyCode) % 26 + 65;
                encryptedText += String.fromCharCode(encryptedCharCode);

                keyIndex++;
            } else {
                encryptedText += char; 
            }
        }

        document.getElementById('text-area').value = encryptedText;
    }
}


function vigenereDecrypt() {
    let encryptedText = document.getElementById('text-area').value;
    let key = document.getElementById('vigenere-key').value.trim();

    if (validateKey(key)) {
        key = key.toUpperCase();
        let decryptedText = '';
        let keyIndex = 0;

        for (let i = 0; i < encryptedText.length; i++) {
            let char = encryptedText[i];

            if (/[a-zA-Z]/.test(char)) {
                let charCode = encryptedText[i].toUpperCase().charCodeAt(0) - 65;
                let keyCode = key[keyIndex % key.length].charCodeAt(0) - 65;
                let decryptedCharCode = (charCode - keyCode + 26) % 26 + 65;
                decryptedText += String.fromCharCode(decryptedCharCode);

                keyIndex++;
            } else {
                decryptedText += char; 
            }
        }

        document.getElementById('text-area').value = decryptedText;
    }
}


const morseCode = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',     'F': '..-.',
    'G': '--.',   'H': '....',  'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',  'Q': '--.-',  'R': '.-.',
    'S': '...',   'T': '-',     'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',  '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': '/' 
};

const reverseMorseCode = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [value, key])
);
function isMorseCode(text) {
    return /^[.\-/ ]+$/.test(text);
}
function textToMorse(text) {
    return text.toUpperCase().split('')
        .map(char => morseCode[char] || '') 
        .join(' '); 
}
function morseToText(morse) {
    return morse.split(' ')
        .map(code => reverseMorseCode[code] || '') 
        .join(''); 
}
function morsecipher() {
    let inputText = document.getElementById('text-area').value.trim();

    if (isMorseCode(inputText)) {
        let decryptedText = morseToText(inputText);
        document.getElementById('text-area').value = decryptedText;
    } else {
        let encryptedMorse = textToMorse(inputText);
        document.getElementById('text-area').value = encryptedMorse;
    }
}

function hliexscipher() {
    const textArea = document.getElementById('text-area');
    const text = textArea.value.trim(); 
    const placeholderText = textArea.getAttribute('placeholder'); 
    let isEncrypted = textArea.classList.contains('encrypted-text'); 
    const validText = filterValidCharacters(text);

    if (validText === "" || validText === placeholderText) {
        textArea.classList.remove('encrypted-text'); 
        textArea.style.fontSize = ''; 
        return; 
    }

    if (!isEncrypted) {
        textArea.classList.add('encrypted-text'); 
    } else {
        textArea.classList.remove('encrypted-text'); 
        textArea.style.fontSize = ''; 
    }

    textArea.addEventListener('input', () => {
        const updatedText = textArea.value.trim();
        if (updatedText === "" || updatedText === placeholderText) {
            textArea.classList.remove('encrypted-text');
            textArea.style.fontSize = ''; 
        }
    });
}

function filterValidCharacters(text) {
    return text.replace(/[^a-zA-Z ]/g, '');
}


const showImageBtn = document.getElementById('show-image-btn');
const imageModal = document.getElementById('image-modal');
const closeModalBtn = document.getElementById('close-btn');
const modalBackground = document.getElementById('modal-background');

showImageBtn.addEventListener('click', () => {
    imageModal.style.display = 'block';
    modalBackground.style.display = 'block';
    setTimeout(() => {
        imageModal.classList.add('show-image');
    }, 10); 
});

closeModalBtn.addEventListener('click', () => {
    imageModal.classList.remove('show-image');
    setTimeout(() => {
        modalBackground.style.display = 'none';
    }, 300);
});

modalBackground.addEventListener('click', () => {
    imageModal.classList.remove('show-image'); 
    setTimeout(() => {
        modalBackground.style.display = 'none';
    }, 300); 
});



document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); 
    const backButton = document.getElementById('back-button');

    function handleBackNavigation() {
        document.body.classList.add('slide-down'); 
        setTimeout(() => {
            window.location.href = 'CH.html'; 
        }, 500); 
    }
    if (backButton) {
        backButton.addEventListener('click', handleBackNavigation);
    }
    window.addEventListener('popstate', function () {
        handleBackNavigation(); 
    });
});
