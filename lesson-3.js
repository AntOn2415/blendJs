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
