
/**
let number = +prompt("Nhập vào 1 số: ");
while(number<0){
    number = +prompt("Sai rồi! Nhập vào 1 số: ");
}
**/
let number;
number = +prompt("Nhập vào 1 số: ");
do{
    if(number<0){
        number = +prompt("Sai rồi! Nhập vào 1 số: ");
    }
}while(number<0)
