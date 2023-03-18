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
