



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




//5. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера
//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"
//Пароль перевіряти так:
 //Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"


// const corrLogin = "admin";
// const corrPassword = "adminPassword";

// const firstQuestion = prompt("Hello, please enter your login!");

// if(firstQuestion === corrLogin) {
//   let corrAnswer = prompt("Please enter your password");
//   if(corrAnswer === corrPassword){
//     console.log("Hello!");
//   } else if(corrAnswer === null){
//     console.log("Authorization has been cancelled");
//   } else {
//     console.log("Goodbye!");
//   }
// } else if (firstQuestion === null) {
//   console.log("Authorization has been cancelled");
// } else {
//  console.log("Goodbye!");
// }

// switch (firstQuestion) {
//   case corrLogin:
//     let corrAnswer = prompt("Please enter your password");
//     switch (corrAnswer) {
//       case corrPassword:
//         console.log("Hello!");
//         break;
//       case null:
//         console.log("Authorization has been cancelled!");
//         break;
//       default: console.log("Goodbye!");
//         break;
//     }
//     break;
//   case null:
//     console.log("Authorization has been cancelled");
//     break;
//   default:
//      console.log("Goodbye!");
//     break;
// }

//6. Дано рядок, що складається із символів, наприклад, 'a1abcde'.
// Перевір, що першим символом цього рядка є літера 'a'.
// Якщо так - виведи 'yes' у консоль, в противному випадку виведи 'no'.

// const string = 'a1abcde';

// //1 var
// // const array = string.split("");
// // if (array[0] === "a") {
// //     console.log("yes");
// // } else {
// //     console.log("no");
// // }

// //2 var
// // if (string[0] === "a") {
// //     console.log("yes");
// // } else {
// //     console.log("no");
// // }

// //3 var
// const firstLetter = string.startsWith("a") ? "yes": "no";
// console.log(firstLetter);



//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:
//name: John
//"age: 20"
//"hobby: skydiving"
//"premium: false"
//"mood: happy"

const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
  };

  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;

  const keys = Object.keys(user);
  for (const key of keys) {
    // console.log(key);
    console.log(`${key}: ${user[key]}`)
  }




