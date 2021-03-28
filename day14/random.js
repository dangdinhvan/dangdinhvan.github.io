let x = Math.floor(Math.random() * 100 + 1);
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
        alertMessage.style.fontSize = "20px";
    }
    else if (number < 0 || number > 100) {
        alertMessage.innerHTML = "Số nhập vào không hợp lệ!"
        alertMessage.style.color = "red";
        alertMessage.style.fontSize = "20px";
    }
    else {
        count++;
        if (number === x) {
            alertMessage.innerHTML = "Chúc mừng bạn đã đoán đúng!";
            button.disabled = true;
            alertMessage.style.color = "red";
            alertMessage.style.fontSize = "20px";
        }
        else if (number > x) {
            alertMessage.innerHTML = "Số bạn đoán quá cao.";
            alertMessage.style.color = "red";
            alertMessage.style.fontSize = "20px";
        }
        else {
            alertMessage.innerHTML = "Số bạn đoán quá thấp.";
            alertMessage.style.color = "red";
            alertMessage.style.fontSize = "20px";
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