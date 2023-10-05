
//Constructor function
//When we want to create an blueprint of object then we can use constructor function...... 
// function Student(first, last, age, cls){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
//   }
//   var student1 = new Student("Mohit", "Dhanorkar", 25, "B1");
//   var student2 = new Student("Rohit", "Dhanorkar", 22, "B4");

//   console.log(student1);
//   console.log(student2);


//   //Simple Function
//   // Javascript function is a block of code design to perform a particular task

//   function number(a,b){
//     return a*b;
//   }
//   console.log(number(2,4));

//   // Arrow function---- JavaScript arrow function allows us to create shortest function syntax.

//   let myFunction = (a, b) => a*b;
//   console.log(myFunction(4,5));

  //Synchronous function---- It means javascript engine execute the code line by line, it's totally depends on each  other
  // const function1 = () => {
  //   console.log('function1 ia staring');
  //   function2();
  //   console.log('function1 is ending');
  // }
  // const function2 = () => {
  //   console.log('function2 is starting');
  // }
  // function1();

  //Asynchronous function---- javascript asynchronous function is does not depends upon other functions, it totally running parallel to other function.
  // const fucntion2 = () =>{
  //   setTimeout(() => {
  //     console.log('function2 is start');
  //   }, 3000);
  // }
  // const function1 = () =>{
  //   console.log('function1 is starting');
  //   fucntion2();
  //   console.log('function1 is ending');
  // }
  // function1();

  //Promises function---- Promise function is an object which is use to handle future responses.
  const shop = new Promise(function(resolve, reject){
    const isgetting = false;
    if(isgetting){
      resolve("I got my Chocolate");
    }
    else{
      reject("Need to buy another one.....")
    }
  })
  shop
  .then((data) =>{
    console.log("YaHoo!!", data);
  })
  .catch((data) =>{
    console.log("OH No!", data);
  })
  