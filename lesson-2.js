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

const stones = [
  { name: "emerald", price: 1300, quantity: 4 },
  { name: "diamond", price: 2700, quantity: 6 },
  { name: "sapphire", price: 400, quantity: 7 },
  { name: "rubble", price: 150, quantity: 100 },
];

const calcTotalPrice = (stones, stonesName) => {
 const totalPrice = stones.reduce((total, {name, price, quantity}) => {
  if (name === stonesName) {
    return total + price * quantity;
  }
return total;
  },0);
return totalPrice;
}
console.log(calcTotalPrice(stones, "sapphire"));