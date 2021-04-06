console.log("hello main.js");
// chu thich 1 dong

/*
chu thich
nhieu dong

*/

/*
cac kieu du lieu

1. Number
- so nguyen
- so thuc
- imfinity
- NaN (Not a Number)

2. String
- dat trong dau ''
- dat trong dau ""
- dat trong dau `` (dung khi truyen vao 1 bieu thuc)
* "chuoi" + "chuoi" = "chuoi"
* "chuoi" + number = "chuoi"(chi rieng phep +)

3. Boolean
- chi co 2 gia tri true va false
 
4. null
- null la mot bien / doi tuong no trong / k co gi

5. undefined
- mot bien/ hang so da duoc khai bao. chua duoc khoi tao thi no mang gia tri undefined
*/

/*
ham so - function

*/
function sendEmail() {
    console.log("this is email")
}
sendEmail();

function getAMessage(from, message = "khong co noi dung") {
    console.log(from + ":" + message);
}
getAMessage('Robin', 'hi');

getAMessage("john");

function getABox() {
    return "this is a box";
}
let box = getABox();