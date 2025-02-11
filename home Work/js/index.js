// Домашнє завдання

// -----
// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to. Зробіть два варіанти рішення.
// Використовуючи setInterval.

// function printNumbers(from, to) {
//   let numbers = from;
//   let timer = setInterval(function () {
//     console.log(numbers);
//     if (numbers == to) {
//       clearInterval(timer);
//     }
//     numbers++;
//   }, 1000);
// }

// printNumbers(1, 10);

// Використовуючи вкладений setTimeout

// function printNumbers(from, to) {
//   let numbers = from;
//   setTimeout(function run() {
//     console.log(numbers);
//     if (numbers < to) {
//       setTimeout(run, 1000);
//     }
//     numbers++;
//   }, 1000);
// }

// printNumbers(11, 20);

// setTimeout(() => console.log(i), 1000);

// -----
// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд,
// так щоб ми могли додати до нього.then:

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// delay(3000).then(() => alert("виконалось через 3 секунди"));

// -----
