//  b1: tinh tong giua hai so nguyen
function tinhTongGiuaHaiSoNguyen(a, b) {
    let sum = 0;
    if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
        return "thong so nhap vao khong hop le";
    }
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            sum += i;
        }
        console.log(`Tổng giữa hai sô nguyên ${a} và ${b} là ${sum}`);
    }
    if (a > b) {
        for (let j = b + 1; j < a; j++) {
            sum += j;
        }
        console.log(`Tổng giữa hai sô nguyên ${b} và ${a} là ${sum}`);
    }
}

// b2: chuyen 1 chuoi ve dang spinal case
function changeSpinalCase(str) {
    let newStr = str.toLowerCase().split(" ").join("-");
    console.log(newStr);
}

// b3: tinh thoi gian sau x giay
function countTime(t, x) {
    let gio = Number(t.substring(0, 2));
    let phut = Number(t.substring(3, 5));
    let giay = Number(t.substring(6, 8));
    let temp = gio * 3600 + phut * 60 + giay + x;
    let newGio = Math.floor(temp / 3600);
    let newPhut = Math.floor((temp % 3600) / 60);
    let newGiay = Math.floor((temp % 3600) % 60);
    while (newGio >= 24) {
        newGio = newGio - 24;
    }
    console.log(`Thời gian mới là ${newGio}:${newPhut}:${newGiay}`);
}

// b4: tinh thoi gian oc sen leo len mieng gieng
function tinhThoiGianOcSen(h, x, y) {
    if (h <= 0 || x <= 0 || y <= 0) {
        return "tham số nhập vào không hợp lệ";
    }
    else if (x <= y) {
        return "ốc sên không bao giờ leo lên được miệng giếng";
    }
    else if (x > h) {
        return "ốc sên chỉ cần nửa ngày để leo lên miệng giếng";
    }
    else {
        let dem = 0;
        let doCaoConLai = h;
        while (x <= doCaoConLai) {
            dem++;
            doCaoConLai = doCaoConLai - (x - y);
        }
        console.log(`thời gian ốc sên leo lên đến miệng giếng có độ cao ${h}m là ${dem + 1} ngày`);
    }
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
    arr.sort(function (a, b) { return a - b });
    console.log(arr);
    let temp;
    if (arr[0] === 0) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] !== 0) {
                temp = arr[j];
                arr[j] = arr[0];
                arr[0] = temp;
                break;
            }
        }
    }
    let soMoi = 0;
    for (let i = 0; i < arr.length; i++) {
        soMoi = soMoi * 10 + arr[i];
    }
    return soMoi;
}

// b6: thay doi mau nen trang html
function changeBackgroundColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("output").innerHTML = "HEX Color: " + color;
    document.body.style.backgroundColor = color;
}