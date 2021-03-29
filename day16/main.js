function tinhTuoi() {
    let namSinh = document.getElementById("nam-sinh").value;
    let date = new Date();
    let curentYear = date.getFullYear();
    let button=document.getElementById("button");
    if (namSinh > curentYear||namSinh<0||Number(namSinh)==false) {
       button.disabled=true;
       document.getElementById("kq-tuoi").innerHTML="Năm sinh nhập vào không hợp lệ";
       document.getElementById("kq-tuoi").style.fontSize="13px";
    }
    else {
        document.getElementById("kq-tuoi").innerHTML = `${curentYear - namSinh} tuổi`;
    }
}

function tinhBMI(){
    let height=document.getElementById("height").value/100;
    let weight=document.getElementById("weight").value;
    let alert=document.getElementById("alert");
    if(weight<20||weight>200||height<1||height>2){
        alert.innerHTML="thong so nhap vao khong hop le";
    }
    else{
        let BMI=(weight/(height*height)).toFixed(1);
        if(BMI>=18&&BMI<=22){
            alert.innerHTML="than hinh can doi";
            document.getElementById("output").innerHTML=BMI;
        }
        else if(BMI<18){
            alert.innerHTML="than hinh hoi gay";
            document.getElementById("output").innerHTML=BMI;
        }
        else if(BMI>22){
            alert.innerHTML="than hinh hoi beo";
            document.getElementById("output").innerHTML=BMI;
        }
    }
}