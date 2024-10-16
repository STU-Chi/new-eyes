// Caesar Cipher (Shift)
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


// Atbash 加密
function atbashcipher() {
    let text = document.getElementById('text-area').value; // 獲取當前文本框的內容
    let encryptedText = ''; // 用來存儲加密後的內容
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) { // 檢查是否為字母
            let code = char.charCodeAt(0); // 獲取字符的 ASCII 編碼
            if (char >= 'a' && char <= 'z') { // 小寫字母
                encryptedText += String.fromCharCode('z'.charCodeAt(0) - (code - 'a'.charCodeAt(0)));
            } else if (char >= 'A' && char <= 'Z') { // 大寫字母
                encryptedText += String.fromCharCode('Z'.charCodeAt(0) - (code - 'A'.charCodeAt(0)));
            }
        } else {
            encryptedText += char; // 非字母字符保持不變
        }
    }
    document.getElementById('text-area').value = encryptedText; // 將加密後的內容回寫到文本框
}


// A1Z26 加密/解密切換
function a1z26Cipher() {
    let text = document.getElementById('text-area').value.trim(); // 獲取文本框內容
    if (isNumeric(text)) {
        // 如果文本是數字，則進行解密操作
        document.getElementById('text-area').value = a1z26Decrypt(text);
    } else {
        // 如果文本是字母，則進行加密操作
        document.getElementById('text-area').value = a1z26Encrypt(text);
    }
}

// 判斷文本是否為數字（A1Z26 格式：數字用空格或逗號分隔）
function isNumeric(text) {
    return /^[0-9,\s]+$/.test(text); // 檢查是否全為數字、逗號或空格
}

// A1Z26 加密函數：字母轉換為數字
function a1z26Encrypt(text) {
    let encryptedText = [];
    text = text.toUpperCase(); // 將所有字母轉換為大寫
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'A' && char <= 'Z') {
            encryptedText.push(char.charCodeAt(0) - 'A'.charCodeAt(0) + 1); // A=1, B=2, ..., Z=26
        } else {
            encryptedText.push(char); // 非字母保持不變
        }
    }
    return encryptedText.join(' '); // 數字之間用空格分隔
}

// A1Z26 解密函數：數字轉換為字母
function a1z26Decrypt(text) {
    let decryptedText = '';
    let numbers = text.split(/[,\s]+/); // 按空格或逗號分隔數字
    for (let i = 0; i < numbers.length; i++) {
        let num = parseInt(numbers[i]);
        if (num >= 1 && num <= 26) {
            decryptedText += String.fromCharCode(num + 'A'.charCodeAt(0) - 1); // 1=A, 2=B, ..., 26=Z
        } else {
            decryptedText += numbers[i]; // 如果是其他字符，保持不變
        }
    }
    return decryptedText;
}


// 檢查字串是否為二進位格式
function isBinary(str) {
    return /^[01\s]+$/.test(str);
}

// 將文本加密為二進位
function textToBinary(text) {
    return text.split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');
}

// 將二進位解密為文本
function binaryToText(binary) {
    return binary.split(' ')
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join('');
}

// 加解密按鈕
function binarycipher() {
    let inputText = document.getElementById('text-area').value.trim();

    // 只對允許的字符（英文字母、數字和空格）進行加密
    let validText = filterValidCharacters(inputText);

    if (isBinary(validText)) {
        // 如果是二進位，執行解密
        let decryptedText = binaryToText(validText);
        document.getElementById('text-area').value = decryptedText;
    } else {
        // 否則執行加密
        let encryptedBinary = textToBinary(validText);
        document.getElementById('text-area').value = encryptedBinary;
    }
}

// 過濾非英文字母、數字或空格的字符
function filterValidCharacters(text) {
    // 只允許 a-z、A-Z、0-9 和空格
    return text.replace(/[^a-zA-Z0-9 ]/g, '');
}


// 檢查金鑰是否有效
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

// Vigenère 加密函數
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
                encryptedText += char; // 非字母保持不變
            }
        }

        document.getElementById('text-area').value = encryptedText;
    }
}

// Vigenère 解密函數
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
                decryptedText += char; // 非字母保持不變
            }
        }

        document.getElementById('text-area').value = decryptedText;
    }
}


// 摩斯碼對應表
const morseCode = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',     'F': '..-.',
    'G': '--.',   'H': '....',  'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',  'Q': '--.-',  'R': '.-.',
    'S': '...',   'T': '-',     'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',  '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': '/' // 空格用斜線表示
};

// 反向對應表，用於解碼
const reverseMorseCode = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [value, key])
);

// 檢查是否為摩斯碼格式
function isMorseCode(text) {
    return /^[.\-/ ]+$/.test(text);
}

// 將文本加密為摩斯碼
function textToMorse(text) {
    return text.toUpperCase().split('')
        .map(char => morseCode[char] || '') // 轉換每個字符
        .join(' '); // 用空格分隔
}

// 將摩斯碼解密為文本
function morseToText(morse) {
    return morse.split(' ')
        .map(code => reverseMorseCode[code] || '') // 轉換每個摩斯碼
        .join(''); // 合併為字串
}

// 加解密按鈕
function morsecipher() {
    let inputText = document.getElementById('text-area').value.trim();

    if (isMorseCode(inputText)) {
        // 如果是摩斯碼，執行解密
        let decryptedText = morseToText(inputText);
        document.getElementById('text-area').value = decryptedText;
    } else {
        // 否則執行加密
        let encryptedMorse = textToMorse(inputText);
        document.getElementById('text-area').value = encryptedMorse;
    }
}

function hliexscipher() {
    const textArea = document.getElementById('text-area');
    const text = textArea.value.trim(); // 獲取文本框內容並移除空白字符
    const placeholderText = textArea.getAttribute('placeholder'); // 獲取預設提示文本
    let isEncrypted = textArea.classList.contains('encrypted-text'); // 檢查是否已加密

    // 過濾非英文字母、數字和空格的字符（保留英文字母、數字和空格）
    const validText = filterValidCharacters(text);

    // 如果文本框是空的、為佔位符，或只含數字，停止加密/解密
    if (validText === "" || validText === placeholderText) {
        textArea.classList.remove('encrypted-text'); // 移除加密狀態
        textArea.style.fontSize = ''; // 恢復字體到原大小
        return; // 停止執行
    }

    if (!isEncrypted) {
        // 加密：應用自訂字體 HelixCipher 
        textArea.classList.add('encrypted-text'); // 加入使用自訂字體的 class
    } else {
        // 解密：恢復默認字體
        textArea.classList.remove('encrypted-text'); // 移除自訂字體的 class
        textArea.style.fontSize = ''; // 恢復字體大小
    }

    // 監聽 textarea 的輸入變化，當內容被清空或恢復成預設佔位符時，移除加密狀態
    textArea.addEventListener('input', () => {
        const updatedText = textArea.value.trim();
        if (updatedText === "" || updatedText === placeholderText) {
            textArea.classList.remove('encrypted-text');
            textArea.style.fontSize = ''; // 恢復到默認字體大小
        }
    });
}

// 過濾非英文字母、數字和空格的字符
function filterValidCharacters(text) {
    // 只允許 a-z、A-Z、0-9 和空格，過濾掉其他字符（例如中文）
    return text.replace(/[^a-zA-Z ]/g, '');
}


// 顯示圖片的函數
const showImageBtn = document.getElementById('show-image-btn');
const imageModal = document.getElementById('image-modal');
const closeModalBtn = document.getElementById('close-btn');
const modalBackground = document.getElementById('modal-background');

showImageBtn.addEventListener('click', () => {
    imageModal.style.display = 'block';
    modalBackground.style.display = 'block';
    setTimeout(() => {
        imageModal.classList.add('show-image'); // 開始放大動畫
    }, 10); // 短暫延遲讓 display: block 生效
});

// 關閉圖片的函數
closeModalBtn.addEventListener('click', () => {
    imageModal.classList.remove('show-image'); // 開始縮小動畫
    setTimeout(() => {
        modalBackground.style.display = 'none'; // 等動畫結束後隱藏背景
    }, 300); // 這裡的 300ms 需要和 CSS 的動畫時間相同
});

// 點擊背景也能關閉圖片
modalBackground.addEventListener('click', () => {
    imageModal.classList.remove('show-image'); // 開始縮小動畫
    setTimeout(() => {
        modalBackground.style.display = 'none'; // 等動畫結束後隱藏背景
    }, 300); // 這裡的 300ms 需要和 CSS 的動畫時間相同
});



document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in'); // 當頁面加載時應用淡入過渡效果

    const backButton = document.getElementById('back-button');

    // 定義返回函式，應用動畫並返回上一頁
    function handleBackNavigation() {
        document.body.classList.add('slide-down'); // 添加向下切換過渡效果
        setTimeout(() => {
            window.location.href = 'CH.html'; // 重定向到你的目標頁面
        }, 500); // 等待過渡完成後再重定向
    }

    // 綁定 back 按鈕點擊事件
    if (backButton) {
        backButton.addEventListener('click', handleBackNavigation);
    }

    // 監聽瀏覽器的退回事件
    window.addEventListener('popstate', function () {
        handleBackNavigation(); // 執行與 back 按鈕相同的退場動畫
    });
});
