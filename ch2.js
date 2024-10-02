/*ch2*/
const dialogTextElement = document.getElementById('dialog-text');
const displayTextButton = document.getElementById('display-text-btn');

const dialog = [

"Hello 樹德科大電通系 - 黃淳綺 ", 

"My friend, you have met a terrible, terrible demise. But, uh, you know", 

"I-I don’t feel too bad about it.After all, if- if it weren’t from me, it would ",

"have just been from 「someone else, ya know? I guess ,what I’m trying to say is life, life goes on.」 ",

"W- well, from- for everyone else, life goes on. Not- not for you, you’re,",

"you're dead. But that’s neither here nor there. And he said to me, ",

"“What’s the significance of the story?” I said to him “ not every story has to ",

"have significance, ya know? Sometimes uhh, you know, sometimes a story is just ",

"a story. When You try to read into every little thing and find meaning ",

"in everything anyone says, you’ll just drive yourself crazy. ",

"I Had a friend do it once - wasn’t pretty - we talked about it for years. ",

"Of course, it was only then I realized I made sandwiches and, ya know?  ",

"A-Actually, I-I suppose that’s the problem; Now, if I recall correctly there ",
 
"was a bakery nearby. I- I said to him “My friend, l-let me go get you some ",

"rye bread.” Now, I-I’m unsure if enjoy rye bread,but I assure you that does.",

"Now this was on a Tuesday which was good because rye bread was always fresh",
 
"on Tuesday. They made sourdough on Monday and threw it out Wednesday. O-or ",

"rather they sold it at a discount for people wantin' to feed the ducks and ",

"then, probably at the end of the day finally they threw it all out.",

];

let isTyping = false; // 用來追蹤是否正在打字

function typeText(textArray, index = 0, letterIndex = 0) {
    if (index < textArray.length) {
        if (letterIndex < textArray[index].length) {
            dialogTextElement.textContent += textArray[index][letterIndex];
            letterIndex++;
            setTimeout(() => typeText(textArray, index, letterIndex), 70);
        } else {
            dialogTextElement.textContent += "\n"; // 換行
            setTimeout(() => typeText(textArray, index + 1), 500); // 開始打下一行
        }
    } else {
        // 完成打字後重新啟用按鈕
        displayTextButton.disabled = false;
        isTyping = false;
    }
}

displayTextButton.addEventListener('click', () => {
    if (!isTyping) { // 確保不會重複啟動打字效果
        dialogTextElement.textContent = ""; // 清除之前的文字
        isTyping = true; // 設置為打字狀態
        displayTextButton.disabled = true; // 禁用按鈕直到打字完成
        typeText(dialog);
    }
});


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

