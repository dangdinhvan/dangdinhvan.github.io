// bt1: Đếm số nguyên tố trong đoạn a,b
function kiemTraSoNguyenTo(a) {
    if (a < 2) {
        return `${a} k phai la so nguyen to`;
    }
    for (let i = 2; i <= a / 2; i++) {
        if (a % i === 0) {
            return `${a} k phai so nguyen to`;
        }
    }
    return true;
}

function demSoNguyenTo(a, b) {
    if (a < 0 || b < a) {
        return "Thong so nhap vao khong hop le";
    }
    let dem = 0;
    for (let i = a; i <= b; i++) {
        if (kiemTraSoNguyenTo(i) === true) {
            console.log(i);
            dem++;
        }
    }
    return `Có ${dem} số nguyên tố trong đoạn từ ${a} đến ${b}`;
}

// bt2: Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng
function chenVaoSoLonNhat(arr, x) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    arr.splice(arr.indexOf(max) + 1, 0, x);
    return arr;
}

// bt4: Kiểm tra tính đối xứng của một số.
function kiemTraSoDoiXung(n) {
    if (n <= 0) {
        return "so nhap vao khong hop le";
    }
    let soMoi = 0;
    let temp = n;
    while (temp > 0) {
        let soTachRa = temp % 10;
        soMoi = soMoi * 10 + soTachRa;
        temp = Math.floor(temp / 10);
    }
    if (soMoi === n) {
        console.log(n + " là số đối xứng");
    }
    else {
        console.log(n + " không phải số đối xứng");
    }
}

// bt5: Viết chương trình tính tiền cước TAXI
function tinhTienCuocTaxi(s, t) {
    if (s < 0 || t < 0) {
        return "thong so nhap vao khong hop le";
    }
    let tien;
    if (s >= 0 && s <= 1) {
        tien = 9000;
    }
    else if (s > 1 && s <= 30) {
        tien = 9000 + 11000 * (s - 1);
    }
    else {
        tien = 9000 + 11000 * 29 + 9500 * (s - 30);
    }
    if (t !== 0) {
        tien += (20000 * t);
    }
    console.log("Giá cước taxi cho " + s + " km và chờ " + t + " tiếng" + " là " + tien + " VND");
}