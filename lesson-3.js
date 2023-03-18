// //  Напишіть функцію makeShef(shefName), яка повертає функцію
// //makeDish(dish), яка памятає ім'я шефа під час її виклику
// //Функція makeDish має логіровать "<shef> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }

// const stepan = makeShef("Stepan");
// const maryna = makeShef("Maryna");

// stepan("Borsch");
// stepan("Varenyky");
// maryna("Soup");

// Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентіфікатор у властивість id та викликає callback
//передаючи йому створений об'єкт.
//showProduct(product) - коллбек, що приймає об'єкт
//продукта і логірує його в консоль

// function makeProduct(name, price, callback) {
//   const obj = {
//     id: Math.random(),
//     name,
//     price,
//   };
//   callback(obj);
// }

// const showProduct = (product) => console.log(product);

// makeProduct("Banana", 10, showProduct);

// task-3
//  Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//яка застосується до кожного елемента масива.
//Функція each має повернути новий масив, елементами
//якого будуть результати виклику callback.
//callback функція має множити елементи на 2

// function each(array, callback) {
//     let newArray = array.map(callback);
//     return newArray;
// }

// function double(a) {
// return a * 2;
// }

// console.log(each([1, 2, 5, 7, 8], double));

// Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка лічить і виводе в консоль кількість своїх викликів

// function makeCounter() {
//   let total = 0;
//   return function () {
//     total += 1;
//     console.log(total);
//   };
// }
// const counter = makeCounter();
// counter();
// counter();
// counter();
// counter();

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// // Отримати масив імен усіх користувачів (поле name).

// const userNames = users.map(({ name }) => name);
// console.log(userNames);

// Напишіть функцію getUsersByColor(users, color), яка отримує масив користувачів і колір очей та повертає масив користувачів з таким кольором (властивість eyeColor)

// function getUsersByColor(users, color) {
//   const array = users.filter(({eyeColor}) => eyeColor === color);
//   console.log(array);
//   return array
// }
// getUsersByColor(users, 'blue')
// Напишіть функцію getInactiveUsers(users), яка отримує масив користувачів та повертає масив неактивних користувачів (властивість isActive)

// function getInactiveUsers(users) {
//   const status = users.filter(({ isActive }) => !isActive);
//   console.log(status);
//   return status;
// }
// getInactiveUsers(users);
