// arrow function

function sayHi(name) {
    return `hi ${name}`;
}
let hello = sayHi("quynh");
// viet rut gon
let hello2 = (name) => `hi ${name}`;
console.log(hello2("an"));

// timh tong cua mang
let sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};
console.log(sumArray([1,2,3]));

var binhPhuong = a => a * a;

var chuoi = () => "empty";

// object

let person = new Object;
person.name="quynh";
console.log(person.name);

let animal={
    name: "fish",
    color: "gray",
    "number feet": 2,
}
console.log(animal.color);
console.log(animal["number feet"]);

delete animal["number feet"]; //xoa phan tu gan va them phan tu moi
console.log(animal);