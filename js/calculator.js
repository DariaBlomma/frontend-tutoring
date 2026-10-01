// ========================================
// ПРОСТОЙ КАЛЬКУЛЯТОР
// ========================================

// Функции для каждой операции
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Исходные числа
const num1 = 25;
const num2 = 7;

// Считаем и выводим результат
const sum = add(num1, num2);
const diff = subtract(num1, num2);
const product = multiply(num1, num2);
const quotient = divide(num1, num2);

console.log(`Числа: ${num1} и ${num2}`);
console.log(`Сложение: ${num1} + ${num2} = ${sum}`);
console.log(`Вычитание: ${num1} - ${num2} = ${diff}`);
console.log(`Умножение: ${num1} * ${num2} = ${product}`);
console.log(`Деление: ${num1} / ${num2} = ${quotient}`);