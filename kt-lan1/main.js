//  b1: tinh tong giua ha so nguyen
function tinhTongGiuaHaiSoNguyen(a, b) {
    let sum = 0;
    if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
        return "thong so nhap vao khong hop le";
    }
    for (i = a + 1; i < b; i++) {
        sum += i;
    }
    console.log(`Tổng giữa hai sô nguyên ${a} và ${b} là ${sum}`);
}

// b2: chuyen 1 chuoi ve dang spinal case
function changeSpinalCase(str) {
    let newStr="";
    let a;
    for(let i=0;i<str.length;i++){
        newStr= str.substr(i,1).tolowercase();
    }
    return newStr;
}

// b3: tinh thoi gian sau x giay
function countTime(t, x) {
    let s = Number.parseInt(t.substr(t.length - 2, 2));
    let newt = t.substr(0, t.length - 2) + (s + x);
    return newt;
}

// b4: tinh thoi gian oc sen leo len mieng gieng
function tinhThoiGianOcSen(h, x, y) {
    if (h <= 0 || x <= y || y <= 0) {
        return "thong so nhap vao khong hop le";
    }
    
    let thoiGian = h / (x - y);
    console.log(`thời gian ốc sên leo lên đến miệng giếng có độ cao ${h} là ${thoiGian} ngày`);
}

// b5: sap xep cac chu so de ra so nho nhat
function changeToMin(a) {
    if (Number.isInteger(a) === false || a <= 0) {
        return "thong so nhap vao khong hop le";
    }
    let arr = [];
    while (a > 0) {
        soTachRa = a % 10;
        arr.push(soTachRa);
        a = Math.floor(a / 10);
    }
    arr.sort(function(a, b){return a - b});
    let soMoi=0;
    for(let i=0;i<arr.length;i++){
        soMoi=soMoi*10+arr[i];
    }
    return soMoi;
}

// b6: thay doi mau nen trang html
function changeBackgroundColor() {
    let colors = [];
    document.body.style.backgroundColor = "" ;
}