document.write("lam bai tap ve hinh");
document.write("<br />")
document.write("bai 1: Vẽ hình chữ nhật đặc kích thước mxn (m,n>0)");

function drawRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Thong so dau vao khong hop le");
        return;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            document.write("     *");
        }
        document.write("<br />");
    }

    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            str += "* ";
        }
        str += "<br />";
    }
    document.write(str);
}

document.write("bai2: Ve hinh chu nhat rong");
function drawEmtyRectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("Thong so dau vao khong hop le");
        return;
    }
    let str = "";
    // ve hang dau
    for (let x = 0; x < m; x++) {
        str += "* ";
    }
    // ve cac hang o giua
    for (let i = 1; i < n - 1; i++) {
        str += "<br />";
        for (let j = 0; j < m; j++) {
            if (j === 0 || j === m - 1) {
                str += "* ";
            }
            else {
                str += "* ".fontcolor("white");
            }
        }
    }
    // ve hang cuoi
    str += "<br />";
    for (x = 0; x < m; x++) {
        str += "* ";
    }
    document.write(str);
}

