// bt1: Tính số lần để về 1, nếu là số chẵn thì chia 2, nếu là số lẻ thì nhân 3 +1
function demSoLanVe1(n) {
    if (Number.isInteger(n) === false) {
        return "So nhap vao khong hop le";
    }
    let dem = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        }
        else if (n % 2 === 1) {
            n = n * 3 + 1;
        }
        dem += 1;
    }

    if (n === 1) {
        return `Số lần để về 1 là ${dem} lần`;
    }
    else {
        return -1;
    }
}

// bt2: Vẽ hình chữ nhật đặc kích thước mxn
document.write("bài 2: Vẽ hình chữ nhật đặc kích thước m*n");
document.write("<br />");
function drawRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Thong so dau vao khong hop le");
        return;
    }
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            str += " * ";
        }
        str += "<br />";
    }
    document.write(str);
}
drawRectangle(6, 5);

// bt3: Vẽ hình chữ nhật rỗng
document.write("bài 3: Vẽ hình chữ nhật rỗng kích thước m*n");
document.write("<br />");
function drawEmptyRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Thong so dau vao khong hop le");
        return;
    }
    let str = "";
    for (let x = 0; x < m; x++) {
        str += " * ";
    }
    for (let i = 1; i < n - 1; i++) {
        str += "<br />";
        for (let j = 0; j < m; j++) {
            if (j === 0 || j === m - 1) {
                str += " * ";
            }
            else {
                str += " * ".fontcolor("white");
            }
        }
    }
    str += "<br />";
    for (let x = 0; x < m; x++) {
        str += " * ";
    }
    document.write(str);
}
drawEmptyRectangle(6, 5);

// bt4: Vẽ tam giác vuông
document.write("<br />");
document.write("bài 4: Vẽ tam giác vuông cân cạnh m");
document.write("<br />");
function drawRightTriangle(m) {
    if (m <= 0 || Number.isInteger(m) === false) {
        document.write("Thong so dau vao khong hop le");
        return;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j <= i; j++) {
            document.write(" * ");
        }
        document.write("<br />");
    }
}
drawRightTriangle(5);

// bt5: Vẽ tam giác cân ngược
document.write("<br />");
document.write("bài 5: Vẽ tam giác cân ngược với chiều cao h");
document.write("<br />");
function drawTamGiacCanNguoc(h) {
    if (h <= 0 || Number.isInteger(h) === false) {
        document.write("Thong so dau vao khong hop le");
        return;
    }
    for (let i = 0; i < 2 * h - 1; i += 2) {
        for (let j = 0; j < 2 * h - 1 - i; j++) {
           document.write(" * ");
        }
        document.write("<br />");                                  
        for (let k=0;k<=i/2;k++) {
          document.write(" * ".fontcolor("white"));
        }
    }
}
drawTamGiacCanNguoc(4);