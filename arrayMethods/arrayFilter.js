const ages = [34, 44, 17, 16, 50, 25, 18, 15];
function checkAdult(age){
    return age>=18;
}
console.log(ages.filter(checkAdult)) // it will filter the age which is less than 18 