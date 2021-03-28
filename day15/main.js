
function quyDoiTienTe() {
    let moneyInput = document.getElementById("moneyInput").value;
    let donViTienTeFrom = document.getElementById("from").value;
    let donViTienTeTo = document.getElementById("to").value;
    let moneyOutput = document.getElementById("output");
    if (donViTienTeFrom === "USD") {
        if(donViTienTeTo==="VND"){
            moneyOutput.innerHTML=`${(moneyInput*23000).toLocaleString()} ${donViTienTeTo}`;
        }
        if(donViTienTeTo==="EUR"){
            moneyOutput.innerHTML=`${(moneyInput*0.85).toLocaleString()} ${donViTienTeTo}`;
        }
        if(donViTienTeTo==="USD"){
            moneyOutput.innerHTML=`${(moneyInput).toLocaleString()} ${donViTienTeTo}`;
        }
    }
    if (donViTienTeFrom === "EUR") {
        if(donViTienTeTo==="USD"){
            moneyOutput.innerHTML=`${(moneyInput*1.18).toLocaleString()} ${donViTienTeTo}`;
        }
        if(donViTienTeTo==="VND"){
            moneyOutput.innerHTML=`${(moneyInput*27000).toLocaleString()} ${donViTienTeTo}`;
        }
        if(donViTienTeTo==="EUR"){
            moneyOutput.innerHTML=`${(moneyInput).toLocaleString()} ${donViTienTeTo}`;
        }
    }
    if (donViTienTeFrom === "VND") {
        if(donViTienTeTo==="USD"){
            moneyOutput.innerHTML=`${(moneyInput*0.000044).toLocaleString()} ${donViTienTeTo}`;
        }
        if(donViTienTeTo==="VND"){
            moneyOutput.innerHTML=`${(moneyInput).toLocaleString()} ${donViTienTeTo}`;
        }
        if(donViTienTeTo==="EUR"){
            moneyOutput.innerHTML=`${(moneyInput*0.000037).toLocaleString()} ${donViTienTeTo}`;
        }
    }
}