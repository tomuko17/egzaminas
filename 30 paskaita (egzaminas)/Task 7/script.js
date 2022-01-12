/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};


let result = Object.values(audi);
console.log(result);

let result2 = Object.keys(audi);
console.log(result2);

//jei reikia "keys" tai žiūrėti result2