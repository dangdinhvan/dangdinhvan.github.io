let para1 = document.getElementById("paragrap1");
let para2 = document.getElementById("paragrap2");
let para3 = document.getElementById("paragrap3");

function changeColor() {
    para1.style.color="blue";
    para2.style.color="yellow";
    para3.style.color="red";
}

function changeBackgroundColor(color){
    document.body.style.backgroundColor=color;
}

function copyContent(a,b){
    if(a==="paragrap1"&&b==="paragrap2"){
        para1.innerHTML=para2.innerHTML;
    }
}

function changeFontSize(x){
    if(Number.isInteger(x)===false){
        return "thông số nhập vào không hợp lệ";
    }
    para1.style.fontSize=x+"px";
    para2.style.fontSize=x+"px";
    para3.style.fontSize=x+"px";
    return true;
}
