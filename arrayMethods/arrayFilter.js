const ages = [34, 44, 17, 16, 50, 25, 18, 15];
function checkAdult(age){
    return age>=18;
}
console.log(ages.filter(checkAdult)) // it will filter the age which is less than 18 

// ------------------------------------------------------------------------------------------------

const number = [12, 19, 14, 22, 97];
function evenNumber(even){
    return even % 2;
}
console.log(number.filter(evenNumber)) // it will filter out the numbers which is divisible by 2 

// -------------------------------------------------------------------------------------------------