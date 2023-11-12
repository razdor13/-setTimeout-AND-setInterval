const btn = document.querySelector(".btn");
let timerId,
    i = 0;

// const timerId = setTimeout(
//     function (text) {
//         console.log(text);
//     },
//     2000,
//     "hello"
// );

// const timerId2 = setTimeout(logger, 2000, "hello"); // функція додана в змінну тому що в майбутньому таких функцій з таймінгами може бути багато і
// //якось потрібно буде зупиняти у разі чого , тому ми для цього їх ініціалізуємо

// clearInterval(timerId2); // ось як приклад ми зупинили наш таймер на виклик функції

// btn.addEventListener("click", () => {
//     timerId = setInterval(logger, 500);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log("text");
//     i++;
// }

// let id = setTimeout(function log() { // це рекурсивний виклик сеттаймаут він потрібен у разі якщо сетінтервал не допоможе(у випадку довгого виконання функції )
//     console.log("text 2 ");
//     id = setTimeout(log, 500);
// }, 500);

function myAnimation() {
    const elem = document.querySelector(".box");
    let pos = 0;

    const id = setInterval(freme, 10);
    function freme() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", myAnimation);
