let screenUp = document.getElementById("screenUp");
let screenDown = document.getElementById("screenDown");
let giaTri = "";

function AC() {
    screenUp.innerHTML = "";
    screenDown.innerHTML = "";
    giaTri = "";
}

function sqrt() {
    screenUp.innerHTML = screenUp.innerHTML + "&radic;";
    giaTri = giaTri + "can";
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
    giaTri = giaTri + "*";
}

function chia() {
    screenUp.innerHTML = screenUp.innerHTML + "&divide;";
    giaTri = giaTri + "/";
}

function cong() {
    screenUp.innerHTML = screenUp.innerHTML + "+";
    giaTri = giaTri + "+";
}
function tru() {
    screenUp.innerHTML = screenUp.innerHTML + "&minus;";
    giaTri = giaTri + "-";
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
        screenDown.innerHTML = String(soMoi.toLocaleString('en-US'));
    }
    else {
        screenDown.innerHTML = Number(eval(giaTri)).toLocaleString('en-US');
    }
}

function seven() {
    screenUp.innerHTML = screenUp.innerHTML + "7";
    giaTri = giaTri + "7";
}

function eight() {
    screenUp.innerHTML = screenUp.innerHTML + "8";
    giaTri = giaTri + "8";
}

function nine() {
    screenUp.innerHTML = screenUp.innerHTML + "9";
    giaTri = giaTri + "9";
}

function four() {
    screenUp.innerHTML = screenUp.innerHTML + "4";
    giaTri = giaTri + "4";
}

function five() {
    screenUp.innerHTML = screenUp.innerHTML + "5";
    giaTri = giaTri + "5";
}

function six() {
    screenUp.innerHTML = screenUp.innerHTML + "6";
    giaTri = giaTri + "6";
}

function one() {
    screenUp.innerHTML = screenUp.innerHTML + "1";
    giaTri = giaTri + "1";
}

function two() {
    screenUp.innerHTML = screenUp.innerHTML + "2";
    giaTri = giaTri + "2";
}

function three() {
    screenUp.innerHTML = screenUp.innerHTML + "3";
    giaTri = giaTri + "3";
}

function zero() {
    screenUp.innerHTML = screenUp.innerHTML + "0";
    giaTri = giaTri + "0";
}

function dauCham() {
    screenUp.innerHTML = screenUp.innerHTML + ".";
    giaTri = giaTri + ".";
}

