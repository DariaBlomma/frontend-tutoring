// ========================================
// ТИПЫ ДАННЫХ И МАТЕМАТИКА
// ========================================

// --- СТРОКИ (String) ---
const name = "Михаил";
const city = 'Москва';
const greeting = `Привет, ${name}! Ты из города ${city}.`;

console.log("--- СТРОКИ ---");
console.log(name);
console.log(greeting);

// Длина строки
console.log(`Длина имени: ${name.length} символов`);


// --- ЧИСЛА (Number) ---
const age = 25;          // целое
const height = 1.82;     // дробное (точка, не запятая!)
const temperature = -5;  // отрицательное

console.log("\n--- ЧИСЛА ---");
console.log(`Возраст: ${age}`);
console.log(`Рост: ${height} м`);
console.log(`Температура: ${temperature}°C`);


// --- БУЛЕВЫ (Boolean) ---
const isStudent = true;
const hasJob = false;

console.log("\n--- БУЛЕВЫ ---");
console.log(`Студент? ${isStudent}`);
console.log(`Работает? ${hasJob}`);


// --- МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ ---
const a = 17;
const b = 5;

console.log("\n--- МАТЕМАТИКА ---");
console.log(`a = ${a}, b = ${b}`);
console.log(`Сложение:    ${a} + ${b} = ${a + b}`);
console.log(`Вычитание:   ${a} - ${b} = ${a - b}`);
console.log(`Умножение:   ${a} * ${b} = ${a * b}`);
console.log(`Деление:     ${a} / ${b} = ${a / b}`);
console.log(`Остаток:     ${a} % ${b} = ${a % b}`);
console.log(`Степень:     ${a} ** ${b} = ${a ** b}`);


// --- ПРИОРИТЕТ ОПЕРАЦИЙ ---
console.log("\n--- ПРИОРИТЕТ ---");
console.log(`2 + 2 * 2 = ${2 + 2 * 2}`);           // 6 (умножение раньше)
console.log(`(2 + 2) * 2 = ${(2 + 2) * 2}`);       // 8 (скобки меняют порядок)


// --- CONST vs LET ---
console.log("\n--- CONST vs LET ---");

const PI = 3.14159;
// PI = 3; // Ошибка! const нельзя менять

let balance = 1000;
console.log(`Баланс до: ${balance}`);
balance = balance + 500;
console.log(`Баланс после пополнения: ${balance}`);
balance = balance - 200;
console.log(`Баланс после покупки: ${balance}`);