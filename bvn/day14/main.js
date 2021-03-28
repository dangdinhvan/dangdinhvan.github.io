let para1 = document.getElementById("paragrap1");
let para2 = document.getElementById("paragrap2");
let para3 = document.getElementById("paragrap3");

function changeColor() {
    para1.style.color="blue";
    para2.style.color="yellow";
    para3.style.color="red";
}

function changeBackgroundColor(){
    document.body.style.backgroundColor="green";
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

function increaseFontSize(paragraphID){
    let a=window.getComputedStyle(para1).getPropertyValue("font-size");
    if(paragraphID="paragrap1"){
        para1.style.fontSize;
    }
    console.log(a);

}
