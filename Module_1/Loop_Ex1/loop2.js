/**
//------------ Bài 1: Bài này nói cái gì?, 
//                    diễn giải ra từng bước chạy
//Kết quả: .....
let num = +prompt("Enter a number: ");   // 5
let total = 0;
while (num != -1) {
    //phần code tính tổng
    total += num;
    num = +prompt("Enter a number: ");   
}
alert(`Tổng là: ${total}`)



//-- Bài này nói cái gì?
let num = +prompt("Enter a number: ");  // 50
let sum = 0;
for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
alert(sum)

//------------ Bài 2: Bài này nói cái gì?, 
//                    diễn giải ra từng bước chạy
let num = +prompt("Enter a number: ");  // 50
let count = 0;
let sum = 0;
for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
        sum += i;
        count++;
    }
    if(count == 6){
        break;
    }
}
console.log(`Tổng 5 số chẵn đầu tiên: ${sum}` );


//-----------Bài này ra cái gì
//------------ Bài 3: Bài này nói cái gì?, 
//                    diễn giải ra từng bước chạy
let str = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        str += "* "
    }
    str += "\n";        // Tại vì sao phải bỏ \n  ???
}
console.log(str);


//------------ Bài 4: Bài này nói cái gì?, 
//                    diễn giải ra từng bước chạy
let str = "";
for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {      // vì sao lại j<=i ???
        str += "* "
    }
    str += "\n";        
}
console.log(str);

//--------------


//------------ Bài 5: Bài này nói cái gì?, 
//                    diễn giải ra từng bước chạy
let str = "";
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {      // Chỗ này j<4 thì sẽ như thế nào???  
        if(i==j){
            str += "*";
        }else{
            str += " "; // Vì sao phải " " ???, vì sao lại có else
        }
    }
    str += "\n";        
}
console.log(str);

//------------ Bài 6: Bài này nói cái gì?, 
//                    diễn giải ra từng bước chạy
//--------Cái này ra cái gì ???
let str = "";
for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {      // Chỗ này ĐỔI LẠI j<=i thì sẽ như thế nào???  
        if(i==j){
            str += "*";
        }else{
            str += " "; // Vì sao phải " " ???, vì sao lại có else
        }
    }
    str += "\n";        
}
console.log(str);


//-- 
let str = "";
for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= 4-1 -i; j++) {     
        str += "*";
    }
    str += "\n";        
}
console.log(str);


console.log("***\n******");
 */

// 














