//object-- Javascript object is an physical entity which is having type and properties.

// let person= {
//     firstName: "Mohit",
//     lastName: "Dhanorkar",
//     age : 25,
//     colour: "White"
// };
// console.log(person.firstName)

//using this keyword

const person1={
    firstName: "Rohit",
    lastName: "Varma",
    DOB: 23/3/1999,
    age: 25,
    fullDetails: function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person1.fullDetails());