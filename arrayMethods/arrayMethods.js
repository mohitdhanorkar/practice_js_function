// // Array.lenght()
// const alphabates = ["A", "B", "C", "D", "E"];
// console.log(alphabates.length);

// Array.map()
// const number1 = [4, 25, 8, 12];
// console.log(number1.map(myFunction));
// function myFunction(num){
//     return num*10;
// }

// // Array.push()
// const object = ["Wood", "Pen", "Rubber", "Sharpner"];
// object.push("Steel", "Buds");
// console.log(object);

// // Array.pop() 
// const object1 = ["Pen", "Pencil", "Page", "Charger", "Nose"]
// object1.pop();
// console.log(object1)

// // Array.reverse()
// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits2.reverse());

// // Array.shift()
// let fruitsA1 = ['Papaya', 'Berry', 'Guva'];
// let firstFruit = fruitsA1.shift(); // 'Papaya'
// console.log(fruitsA1)  // ['Berry', 'Guva']

// //Array.slice()
// let person11 = ['Amit', 'Sumit', 'Harshal', 'Abhishek', 'Saish', 'Swapnil', 'Aditya'];
// let slicePerson = person11.slice(1,6);
// console.log(slicePerson)

// // Array.sort()
// let al = ['a', 'p', 'r', 't', 'd'];
// console.log(al.sort())

// Array.splice() --- here we can replace or add something with the help of index 
let cars = ['Swift', 'Benz', 'Maruti', 'Verna', 'Polo'];
let removeCars = cars.splice(1,2, 'Alto', 'Balano');
console.log(cars)