



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


//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню

// const min = 3;
// const max = 8;

// for (let index = max; index >= min; index -= 1) {
//     if (index % 2 === 0) {
//         console.log(index);
//     }
// }

// for (let index = max; index >= min; index -= 1) {
//     if (!(index % 2)) {
//         console.log(index);
//     }
    
// }


//4. За допомогою циклу for знайдіть добуток (результат множення) усіх парних чисел у проміжку від min до max включно

// const min = 1;
// const max = 4;
// let result = 1; 
// for (let index = min; index <= max; index += 1) {

//     if (index % 2 === 0) {
//         result *= index;
//     //    console.log(index)
//     }
    
// }
// console.log(result);

