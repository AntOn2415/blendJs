



//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"What is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"
// const offName = "ECMAScript";
// const answer = prompt("What is the official name of JavaScript?")
// // if (answer === offName) {
// //   alert("True!");
// // } else {
// //   alert("Don't you know? ECMAScript!");
// // }
// const message = answer === offName ? "True!" : "Don't you know? ECMAScript!";
// alert(message);





//2. Напишіть програму, яка запитає у користувача "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"

// const input = prompt("Enter the number of minutes to format");
// let hour = String(Math.floor(input / 60)).padStart(2, '0');
// let minutes = String(input % 60).padStart(2, "0");
// const time = `${hour}:${minutes}`;
// console.log(time);
