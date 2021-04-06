// getElementById(tenID) de lay ra cac phan tu co id tuong ung
// innerHTML la noi dung cua element
// document.getElementById("demo").innerHTML = "Xin chao cac ban. Toi la DOM";

document.getElementsByClassName(); //tra ve mang
document.getElementsByTagName(); //tra ve mang
document.querySelector(); //tra ve obj
document.querySelectorAll(); //tra ve mang

let hello = document.getElementById("demo");
hello.innerHTML = "Hello World";
hello.style.color = "blue";
hello.style.backgroundColor = "yellow";

function pressOnClick() {
    hello.innerHTML = "hi you!";
    hello.style.color = "red";
}