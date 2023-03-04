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

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;

//   const keys = Object.keys(user);
//   for (const key of keys) {
//     // console.log(key);
//     console.log(`${key}: ${user[key]}`)
//   }

//2. Є об'єкт, в якому зберігаються зарплати команди.
// Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат.
// Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//   mango: 1000,
//   poly: 1600,
//   ajax: 1470,
// };

// function getTotalSalary(salaries) {

//     let total = 0;
//     const everySalary = Object.values(salaries);

//     for (const salary of everySalary) {
//         total += salary;
//     }
//     return total
// }

// console.log(getTotalSalary(salaries))

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: "emerald", price: 1300, quantity: 4 },
//   { name: "diamond", price: 2700, quantity: 6 },
//   { name: "sapphire", price: 400, quantity: 7 },
//   { name: "rubble", price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stonesName) => {
//  const totalPrice = stones.reduce((total, {name, price, quantity}) => {
//   if (name === stonesName) {
//     return total + price * quantity;
//   }
// return total;
//   },0);
// return totalPrice;
// }
// console.log(calcTotalPrice(stones, "sapphire"));

//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

// const calculator = {
//   read(a, b) {
//     if (a && b) {
//       this.prop1 = Number(a);
//       this.prop2 = Number(b);
//     }
//   },
//   sum() {
//     if (!this.prop1 && !this.prop2) {
//       return null;
//     }
//     return this.prop1 + this.prop2;
//   },
//   mult() {
//     if (!this.prop1 && !this.prop2) {
//       return null;
//     }
//     return this.prop1 * this.prop2;
//   },
// };
// calculator.read(3);
// console.log(calculator.mult());

//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}

// function updateObject(obj, ...removedKeys) {
//   const newObj = { ...obj };
//   console.log(newObj);
//   for (const key in newObj) {
//     if (removedKeys.includes(key)) {
//       delete newObj[key];
//     }
//   }
//   return newObj;
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "c"));
