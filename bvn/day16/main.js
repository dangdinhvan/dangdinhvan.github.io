function tinhTuoi() {
    let namSinh = document.getElementById("nam-sinh").value;
    let date = new Date();
    let curentYear = date.getFullYear();
    let button = document.getElementById("button");
    if (namSinh > curentYear || Number(namSinh) == false) {
        document.getElementById("kq-tuoi").innerHTML = "Năm sinh nhập vào không hợp lệ";
        document.getElementById("kq-tuoi").style.fontSize = "16px";
    }
    else if (namSinh < 1900) {
        document.getElementById("kq-tuoi").innerHTML = "Năm sinh phải lớn hơn 1900";
        document.getElementById("kq-tuoi").style.fontSize = "16px";
    }
    else {
        document.getElementById("kq-tuoi").innerHTML = `${curentYear - namSinh} tuổi`;
    }
}

function tinhBMI() {
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;
    let alert = document.getElementById("alert");
    if (weight < 20 || weight > 200 || height < 1 || height > 2) {
        alert.innerHTML = "Thông số nhập vào không hợp lệ";
    }
    else {
        let BMI = (weight / (height * height)).toFixed(1);
        if (BMI < 18.5) {
            alert.innerHTML = "Thân hình của bạn hơi gầy.<br /> Hãy bồi dưỡng thêm nhé!";
            document.getElementById("output").innerHTML = `BMI = ${BMI}`;
        }
        else if (BMI >= 18.5 && BMI <= 22) {
            alert.innerHTML = "Thân hình của bạn bình thường.<br /> Hãy giữ vững nhé!";
            document.getElementById("output").innerHTML = `BMI = ${BMI}`;
        }
        else if (BMI > 22 && BMI < 25) {
            alert.innerHTML = "Bạn hơi thừa cân. <br /> Hãy luyện tập thể dục và điều chỉnh ăn uống nhé!";
            document.getElementById("output").innerHTML = `BMI = ${BMI}`;
        }
        else if (BMI >= 25 && BMI < 30) {
            alert.innerHTML = "Bạn bị béo phì cấp độ 1. <br /> Hãy luyện tập thể dục và điều chỉnh ăn uống nhé!";
            document.getElementById("output").innerHTML = `BMI = ${BMI}`;
        }
        else if (BMI >= 30 && BMI < 40) {
            alert.innerHTML = "Bạn bị béo phì cấp độ 2. <br /> Hãy giảm cân ngay đi!";
            document.getElementById("output").innerHTML = `BMI = ${BMI}`;
        }
        else if (BMI >= 40) {
            alert.innerHTML = "Bạn bị béo phì cấp độ 3. <br /> Làm ơn! Giảm cân ngay và luôn đi!";
            document.getElementById("output").innerHTML = `BMI = ${BMI}`;
        }
    }
}