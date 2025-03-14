function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, symbol) {}

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".result");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const plusminus = document.querySelector(".plusminus");
const dot = document.querySelector(".dot");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (display.textContent.length <= 11) {
            if (display.textContent == "0") {
                display.textContent = number.textContent;
            } else {
                display.textContent = display.textContent + number.textContent;
            }
        }
    });
});

clear.addEventListener("click", () => {
    display.textContent = "0";
});

backspace.addEventListener("click", () => {
    if (display.textContent.length == 1 && display.textContent != "0") {
        display.textContent = "0";
    } else if (display.textContent != "0") {
        display.textContent = display.textContent.slice(0, -1);
    }
});

plusminus.addEventListener("click", () => {
    if (display.textContent.length <= 11) {
        display.textContent = -display.textContent;
    }
});

dot.addEventListener("click", () => {
    if (display.textContent.split(".").length - 1 == 0) {
        if (display.textContent.length <= 11) {
            display.textContent = display.textContent + dot.textContent;
        }
    }
});
