let x = Math.floor(Math.random() * 100);
let alertMessage = document.getElementById("alert");
let resultMessage = document.getElementById("result");
let button = document.getElementById("click");
let count = 0;
function pressOnClick() {
    let number = parseInt(document.getElementById("number").value);
    console.log(x, number);
    if (!Number.isInteger(number)) {
        alertMessage.innerHTML = "Vui lòng nhập số!";
        alertMessage.style.color = "red";
    }
    else {
        count++;
        if (number === x) {
            alertMessage.innerHTML = "Chúc mừng bạn đã đoán đúng!";
            button.disabled = true;
            alertMessage.style.color = "red";
            alertMessage.style.fontSize = "20px";
            alertMessage.style.imageRendering()
        }
        else if (number > x) {
            alertMessage.innerHTML = "Số bạn đoán quá cao.";
        }
        else {
            alertMessage.innerHTML = "Số bạn đoán quá thấp.";
        }
        resultMessage.innerHTML += `Lần đoán thứ ${count} có giá trị là ${number}.<br>`;
        if (count === 10) {
            button.disabled = true;
        }
    }
}
function reset() {
    location.reload();
}