const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".result");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const plusminus = document.querySelector(".plusminus");
const dot = document.querySelector(".dot");

const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");

let memory = 0;
let operand = "";
let newNumber = false;

function clearall() {
    memory = 0;
    operand = "";
    display.textContent = "0";
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (newNumber) {
            display.textContent = "0";
            newNumber = false;
        }
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
    clearall();
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
    } else if (display.textContent.slice(0, 1) == "-") {
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

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        newNumber = true;
        if (operand == "") {
            memory = parseFloat(display.textContent);
            operand = operation.textContent;
        } else {
            num = parseFloat(display.textContent);
            operate(memory, num, operand);
            operand = operation.textContent;
        }
    });
});

equal.addEventListener("click", () => {
    num = parseFloat(display.textContent);
    operate(memory, num, operand);
    memory = 0;
    operand = "";
});

function add(a, b) {
    display.textContent = a + b;
}

function substract(a, b) {
    display.textContent = a - b;
}

function multiply(a, b) {
    display.textContent = a * b;
}

function divide(a, b) {
    if (b == 0) {
        display.textContent = "I can't";
    } else {
        display.textContent = a / b;
    }
}

function operate(a, b, symbol) {
    switch (symbol) {
        case "+":
            add(a, b);
            break;
        case "-":
            substract(a, b);
            break;
        case "x":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
    memory = parseFloat(display.textContent);
    newNumber = true;
}
