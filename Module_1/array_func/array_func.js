const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

fruits.forEach((item, index)=>{
    console.log(`${item} - ${index}`);
})




function myFunction(value) {
    console.log(`${value}`);
}



function sum(a,b){
    return a + b;
}

const sum1 = function(a, b){
    return a+b;
}
console.log(sum1(4,4));

//---------------------
const sum2 = (a,b)=>{
    return a+b;
}
console.log(sum2(5,5));


const hello1 = function(number){            // hàm vô danh - anonymous
    console.log("Hello " + number);
}
hello1(5);

const hello2 = (number)=>{
    console.log("Hello " + number);
}

const hello3 = number => console.log("Hello " + number);

