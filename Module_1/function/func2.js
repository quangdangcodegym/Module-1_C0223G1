

/**
//-------------------Tính giai thừa
5! = 5*4*3*2*1
 Tên hàm: factorial
 Tham số: number
Trả về: số

let number = 4;
function factorial(number){
    let result = 1;
    for(let i=number;i>=1;i--){
        result *=i;
    }
    return result;
}

console.log(`${number}! giai thừa là ${factorial(number)}`);
 */

/**
 /---------------------Đổi chỗ 2 số a,b
 Tên hàm:  swap
 Đầu vào: 2 số a, b
 Đầu ra: 

  let a = 5;
 let b = 7;

 function swap(x, y){
    a = y;
    b = x;
 }

 swap(a, b)
 console.log(a);
 console.log(b);

 */

/**
 Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải 
 là nguyên dương không. 
 Nếu là nguyên dương trả về true, ngược lại trả về false.
 Tên hàm: positiveNumber
 Đầu vào: number
 Đầu ra: true/false

 function positiveNumber(number){
    // if(number>0){
    //     return true;
    // }else{
    //     return false;
    // }
    // return number >0 ? true : false;
    return number>0;
}
 */


/**
Bài 1: Tính tổng các giá trị dương 
trong mảng 1 chiều các số thực
Tên hàm: sum
Đầu vào: numbers
Đầu ra: tổng các số dương: total

let arr = [5,-8,1,7]
function sum(numbers){
    let total = 0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>0){
            total += numbers[i];
        }
    }
    return total;
}
 */

/**
Tính tổng các giá trị chính phương 
trong mảng 1 chiều các số nguyên


console.log(Math.sqrt(10));

let a = 3.5622776601683795;
console.log(Math.ceil(a));
console.log(Math.floor(a));
console.log(Math.round(a));

//--------- Viết hàm kiểm tra số chính phương
function isSquareNumber(num){
    let haftNumber = Math.round(Math.sqrt(num));
    console.log(haftNumber);
    for(let i=1;i<=haftNumber;i++){
        if(i*i==num){
            return true;
        }
    }
    return false;
}

console.log(`Số 15 có phải là số chính phương ko
 ${isSquareNumber(15)}`);
 */
 function isSquareNumber(num){
    let haftNumber = Math.round(Math.sqrt(num));
    console.log(haftNumber);
    for(let i=1;i<=haftNumber;i++){
        if(i*i==num){
            return true;
        }
    }
    return false;
}

 let arr = [6,9,4,5];
function sum(numbers){
    let total = 0;
    for(let i=0;i<numbers.length;i++){
        if(isSquareNumber(numbers[i])){
                total+= numbers[i];
        }
    }
    return total;
}

console.log(`Tổng các số chính phương ${sum(arr)}`);


console.log(3.11%1);


