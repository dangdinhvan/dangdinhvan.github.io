let screenUp = document.getElementById("screenUp");
let screenDown = document.getElementById("screenDown");
let giaTri = "";
screenDown.innerHTML="0";

function AC() {
    screenUp.innerHTML = "";
    screenDown.innerHTML = "0";
    giaTri = "";
}

function sqrt() {
    screenUp.innerHTML = screenUp.innerHTML + "&radic;";
    giaTri += "can";
}

function giaiThua() {
    screenUp.innerHTML = screenUp.innerHTML + "!";
    giaTri = Number(giaTri);
    let tich = 1;
    for (let i = 1; i <= giaTri; i++) {
        tich *= i;
    }
    giaTri = String(tich);
}

function nhan() {
    screenUp.innerHTML = screenUp.innerHTML + "&times;";
    giaTri += "*";
}

function chia() {
    screenUp.innerHTML = screenUp.innerHTML + "&divide;";
    giaTri += "/";
}

function cong() {
    screenUp.innerHTML = screenUp.innerHTML + "+";
    giaTri += "+";
}
function tru() {
    screenUp.innerHTML = screenUp.innerHTML + "&minus;";
    giaTri += "-";
}

function phanTram() {
    screenUp.innerHTML = screenUp.innerHTML + "%";
    giaTri = Number(giaTri);
    giaTri = String(giaTri / 100);
}

function dauBang() {
    if (giaTri.slice(0, 3) === "can") {
        giaTri = giaTri.slice(3, giaTri.length);
        let soMoi = Math.sqrt(Number(giaTri));
        giaTri = soMoi;
    }
    screenDown.innerHTML = Number(eval(giaTri)).toLocaleString('en-US');
}

function input(input) {
    screenUp.innerHTML += input;
    giaTri += input;
}

