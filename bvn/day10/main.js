
// bt1: Xác định ngày tháng
function date_time() {
    let date = new Date();
    console.log("Today is: " + date);
    let m = date.getMonth();
    if (m >= 0 && m <= 2) {
        console.log("Hiện tại là tháng " + (m + 1) + ". Hiện tại là mùa xuân.");
    }
    else if (m >= 3 && m <= 5) {
        console.log("Hiện tại là tháng " + (m + 1) + ". Hiện tại là mùa hè.");
    }
    else if (m >= 6 && m <= 8) {
        console.log("Hiện tại là tháng " + (m + 1) + ". Hiện tại là mùa thu.");
    }
    else {
        console.log("Hiện tại là tháng " + (m + 1) + ". Hiện tại là mùa đông.");
    }
}

//  bt2: Xác định số ngày trong 1 tháng
function daysOfMonth(m, y) {
    if (m < 1 || m > 12) {
        return "tháng nhập không hợp lệ";
    }
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
        console.log("tháng " + m + ", năm " + y + " có 31 ngày.");
    }
    else if (m === 4 || m === 6 || m === 9 || m === 11) {
        console.log("tháng " + m + ", năm " + y + " có 30 ngày.");
    }
    else if (y % 400 === 0 || (y % 4 === 0 && y % 100 != 0)) {
        console.log("tháng " + m + ", năm " + y + " có 29 ngày.");
    }
    else {
        console.log("tháng " + m + ", năm " + y + " có 28 ngày.");
    }
}

// bt3: Tính tổng các chữ số trong một số nguyên dương
function sumOfPositiveInterger(a) {
    if (a <= 0) {
        return "so nhap vao khong hop le";
    }
    let s=0;
    while(a>0){
        let sotachra=a%10;
        s+=sotachra;
        a=Math.floor(a/10);
    }
    return s;
}

// bt4: In ra 1 chuỗi
function printString(x) {
    if (typeof x !== "string") {
        return "chuoi k hop le";
    }
    if (x.length > 10) {
        let a = x.replace(x.substring(10), "...");
        return a;
    }
    return x;
}

//bt5: Hàm translate
function translate(language) {
    switch (language) {
        case "French":
            console.log("Bonjour");
            break;
        case "Hawaiian":
            console.log("Hui");
            break;
        case "Germany":
            console.log("Hallo");
            break;
        case "Italy":
            console.log("Ciao");
            break;
        case "Hawaiian":
            console.log("Croatia");
            break;
        default:
            console.log("Xin chào");
    }
}