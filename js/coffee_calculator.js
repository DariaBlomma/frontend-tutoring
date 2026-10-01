// ========================================
// КАЛЬКУЛЯТОР ЗАКАЗА КОФЕ
// ========================================

// --- Данные о напитках ---
const espressoPrice = 150;
const lattePrice = 250;
const cappuccinoPrice = 200;

// --- Доплаты за размер ---
const sizeS = 0;    // базовый размер, без доплаты
const sizeM = 50;   // +50₽ за размер M
const sizeL = 100;  // +100₽ за размер L

// --- Функция расчета стоимости ---
function calculateOrder(price, quantity, sizeExtra) {
    const total = (price + sizeExtra) * quantity;
    return total;
}

// --- Заказ 1: Эспрессо S, 2 штуки ---
const order1 = calculateOrder(espressoPrice, 2, sizeS);
console.log(`Заказ 1: Эспрессо S, 2 шт. — ${order1}₽`);

// --- Заказ 2: Латте M, 1 штука ---
const order2 = calculateOrder(lattePrice, 1, sizeM);
console.log(`Заказ 2: Латте M, 1 шт. — ${order2}₽`);

// --- Заказ 3: Капучино L, 3 штуки ---
const order3 = calculateOrder(cappuccinoPrice, 3, sizeL);
console.log(`Заказ 3: Капучино L, 3 шт. — ${order3}₽`);

// --- Итого по всем заказам ---
const grandTotal = order1 + order2 + order3;
console.log(`\n========== ИТОГО ==========`);
console.log(`Общая сумма: ${grandTotal}₽`);