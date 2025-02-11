// -----

// let response = fetch("mylmage.png");
// let blob = response.blob();

// -----
// setTimeout/clearTimeout

// let timerld = setTimeout(() => alert("nothing never happened"), 1000); // вспливаюче
// // вікно (nothing never happened) з затримкою в 1с (1000мс = 1с)
// alert(timerld); // вспливаюче вікно з 1,а потім через 1с вспливаюче вікно
// //(nothing never happened)

// clearTimeout(timerld); // тільки вспливаюче вікно з 1 - ідентифікатор таймера

// -----
// setInterval/clearInterval

// відобразимо повідомлення кожні 2сю Через 5с - припиняється

// // повторити з інтервалом в 2с
// let timerld = setInterval(() => alert("tik"), 2000);

// // зупинити через 6с
// setTimeout(() => {
//   clearInterval(timerld), alert("stop tik");
// }, 6000);

// -----

// LESSON 12

// -----
// сенхронний код

// console.log("1"); // 1
// console.log("2"); // 2
// console.log("3"); // 3
// console.log("4"); // 4

// -----
// асенхронний код

// setTimeout(() => console.log("2"), 2000); // відкладає на 2с віддати 2 в консолі

// -----

// const hello = () => {
//   console.log("hello");
// };

// const timeout = setTimeout(hello, 1000); // hello

// // прибрати попередню функцію

// clearTimeout(timeout); // оскільки це синхронна функція, то вона буде виконуватись перед попередньою

// -----

// const hello = () => {
//   console.log("hello");
// };

// const setInt = setInterval(hello, 2000);

// -----
// на кнопки з HTML: одна запускаєБ інша зупиняє

// const startBtn = document.querySelector("#start");

// const stoptBtn = document.querySelector("#stop");

// let time = null;

// при натисканні на кнопку start спрацьовує функція (в консоль видається 123)
// startBtn.addEventListener("click", () => {
//   time = setInterval(() => {
//     console.log("123");
//   }, 1000);
// });

// // при натисканні на кнопку stop - функція зупиняється
// stoptBtn.addEventListener("click", () => {
//   clearInterval(time);
//   console.log("Stop");
// });

// -----
// this

// const a = {
//   classic() {
//     setTimeout(function () {
//       console.log(`${this}, classic in obj`);
//     });
//   },
//   arr() {
//     setTimeout(() => {
//       console.log(`${this}, arr in obj`);
//     });
//   },
// };

// a.classic(); // [object Window], classic in obj

// a.arr(); // [object Object], arr in obj

// -----
// Date

// const data = new Date();
// console.log(data); // видає дату на зараз

// const data1 = new Date("March, 10, 2023");
// console.log(data1); // Fri Mar 10 2023 00:00:00

// // можно передати 7 аргументів (рік, місяць (починається з 0)б день, година, хвилина, секунда)

// const data2 = new Date(2024, 4, 25, 5, 45, 59);
// console.log(data2); // Sat May 25 2024 05:45:59

// -----
// unics час - 1/01/1970

// const unixData = new Date(1000000000000); // цифра - скільки мілісекунд минуло з 1/01/1970 00:00:00
// console.log(unixData); // Sun Sep 09 2001 03:46:40

// // порахуємо скільки мілісекунд минуло з 1/01/1970 00:00:00 до тепер
// const newUnixDate = Date.now();
// console.log(newUnixDate); // 1739305547629

// -----
// методи Date

// const date = new Date();

// // викликаємо день сьогоднішній
// console.log(date.getDate()); // 11

// console.log(date.getMonth()); // 1 - це лютій, бо місяці рахуються з 0

// console.log(date.getFullYear()); // 2025

// -----
// toLocaleDateString

// перекладаємо на укр. мову дату

// const date = new Date();

// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

// const ukr = date.toLocaleString("Uk-uk", options);
// console.log(ukr);

// -----
// promise

// let prom = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(console.log("resolve ok")), 1000); // resolve ok
// });

// -----
// then - дозволяє виконати код, в якому можна опрацювати результати

// let prom = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("resolve ok"), 1000);
//   setTimeout(() => reject("reject Nook"), 1000);
// });

// prom.then(
//   (resolve) => console.log(resolve),
//   (reject) => console.log(reject)
// ); // resolve ok

// -----
// catch - якби ми зотіли обрабляти помилку, то використовували catch

// let prom = new Promise(function (resolve, reject) {
//   setTimeout(() => reject("reject Nook"), 1000);
// });

// prom.catch(alert); // вспливаюче вікно з reject Nook

// -----
// finally - виконується в будь якому випадку

// let prom = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("resolve ok"), 1000);
//   setTimeout(() => reject("reject Nook"), 1000);
// });

// prom.finally(alert);

// -----
// всі ці методи можна ще прописати так:

// let prom = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("resolve ok"), 1000);
//   setTimeout(() => reject("reject Nook"), 1000);
// })
//   .then()
//   .catch()
//   .finally();

// -----
// задачка на promis
// функція, яка буде обробляти якесь завантаження

// function load(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Err ${script}`));

//     document.head.append(script);
//   });
// }

// let prom = load(
//   "https://cdnjs.cloudflare.com/ajax/lodash.js/4.17.11/lodash.js"
// );

// prom.then(
//   (script) => console.log(`Download ${script}`),
//   (error) => console.log(`Error ${error.message}`)
// ); // Error Err [object HTMLScriptElement] - тому, що посилання некорректне

// prom.catch((error) => console.log(`Error ${error.message}`)); // Error Err [object HTMLScriptElement]

// prom.finally(console.log("Final")); // Final - першою строкою перед всіма

// -----

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 2
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   }) // 7
//   .then(function (result) {
//     console.log(result);
//   }); // 12

// -----
