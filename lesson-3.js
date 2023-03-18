//  Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), яка памятає ім'я шефа під час її виклику
//Функція makeDish має логіровать "<shef> is cooking <dish>"

function makeShef(shefName) {
  return function makeDish(dish) {
    console.log(`${shefName} is cooking ${dish}`);
  };
}

const stepan = makeShef("Stepan");
const maryna = makeShef("Maryna");

stepan("Borsch");
stepan("Varenyky");
maryna("Soup");
