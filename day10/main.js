/**
 * cau dieu kien
 */


function checkN(n) {
    //kiem tra n co lon hon 0
    if (n > 0) {
        console.log("n lon hon 0");
    }

    //kiem tra n la so chan hay le
    if (n % 2 === 0) {
        console.log("n la so chan");
    } else {
        console.log("n la so le");
    }

    //kiem tra n la so duong, so am hay so am
    if (n > 0) {
        console.log("n la so duong");
    } else if (n < 0) {
        console.log("n la so am");
    } else {
        console.log("n la so 0");
    }
}

/**
 * 1. viet ham kiem tra 2 so va tra ve so lon hon
 * 2. 
 * - Cho 3 mon toan, li, hoa.
 * -viet ham tinh diem trung binh mon va kiem tra xep loai hoc luc.
 * biet rang:
 * +DTB >=8 va <=10: xep loai gioi
 * +DTB >=6.5 va <8: xep loai kha
 * +DTB >=4 va <6.5: xep loai tb
 * +DTB <4 va >0 :xep loai yeu
 * tinh diem mon hov theo thang diem 10
 */

function soLonHon(a, b) {
    if (a > b) {
        console.log(`${a} lon hon ${b}`);
        return a;
    } else {
        console.log(`${b} lon hon ${a}`);
        return b;
    }
}

function tinhDTB(t, l, h) {

    if (t < 0 || t > 10 || l < 0 || l > 10 || h < 0 || h > 10) {
        return "diem khong hop le";
    }
    let dtb = (t + l + h) / 3;
    if (dtb >= 8 && dtb <= 10) {
        console.log("xep loai gioi");
        return dtb;
    }
    else if (dtb >= 6.5 && dtb < 8) {
        console.log("xep loai kha");
        return dtb;
    }
    else if (dtb >= 4 && dtb < 6.5) {
        console.log("xep loai TB");
        return dtb;
    }
    else {
        console.log("xep loai yeu");
        return dtb;
    }
}


function checkSo4() {
    let a = 4;
    switch (a) {
        case 3:
            console.log("small");
            break
        case 4:
            console.log("equal");
            break
        case 5:
            console.log("big");
            break
        default:
            console.log("default");
    }
}



function giaiPTbac2(a, b, c) {
    if (a === 0) {
        return "a,b,c k hop le";
    }
    let delta = b * b - 4 * a * c;
    console.log(delta);
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("x1= " + x1+", "+"x2= " + x2);
    }
    else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("x= " + x);
    }
    else {
        return "pt vo ghiem";
    }
}


function kiemTraTamGiac(a,b,c){
    if(a<=0||b<=0||c<=0){
        return "a,b,c k hop le";
    }
    if(a+b>c&&a+c>b&&b+c>a){
        console.log("day la tam giac");
        let p=(a+b+c)/2;
        let s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
        return "dien tich tam giac: "+s;
    }
    else{
        return "day k phai la tam giac";
    }
}





