"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/



// Функция для сложения двух чисел
function sum(a, b) {
    return a + b;
}

// Функция для вычисления разности двух чисел
function subtract(a, b) {
    return a >= b ? a - b : 0;
}

// Функция для умножения двух чисел
function multiply(a, b) {
    return a * b;
}

// Функция для деления двух чисел
function divide(a, b) {
    return b !== 0 ? a / b : "Деление на ноль!";
}

// Примеры вызова функций
console.log(sum(2, 6)); // Выведет 8
console.log(subtract(6, 2)); // Выведет 4
console.log(multiply(2, 6)); // Выведет 12
console.log(divide(6, 2)); // Выведет 3
