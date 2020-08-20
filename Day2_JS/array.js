let fruits = ["Apple", "Banana","Apple"];
fruits.push("Avocado");
fruits.unshift("Strawberry");
// for (let i=0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }
console.log(fruits.lastIndexOf("Apple"));
let pos = 0;
fruits.splice(pos,1);// Removing element in an array
console.log(fruits);

// Mapping array example
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(elem => elem*3);
console.log(map1);