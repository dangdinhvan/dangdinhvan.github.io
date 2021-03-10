function thong_bao1(message){
    console.log("xin chao cac ban");
}
thong_bao1();


function thong_bao(message, x){
    console.log(message, x);
}
thong_bao('xin chao','"web14"');

function sum(a,b){
    return(a+b);
}
let c = sum(5,6);

function binh_phuong(p){
    return(p*p);
}
let bp = binh_phuong(6);

function tinhTheKy(year){
    return Math.ceil(year/100);
}
let theki = tinhTheKy(2021);
alert(`nam ban nhap thuoc the ky ${theki}`);