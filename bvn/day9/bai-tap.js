//chuyen tu  ºC sang ºF
function DoCtoDoF(doC){
    return(doC*1.8+32);
}
let doF=DoCtoDoF(50);

//chuyen tu ºF sang ºC
function DoFtoDoC(doF){
    return((doF-32)/1.8);
}
let doC=DoFtoDoC(122);

//chuyen tu $ sang VND
function USDtoVND(usd){
    return(usd*22930);
}
let VNDfromUSD = USDtoVND(1);

//chuyen tu VND sang $
function VNDtoUSD(vnd){
    return(vnd/22930);
}
let usd = VNDtoUSD(100000);

//chuyen tu EURO sang VND
function EURtoVND(eur){
    return(eur*26544.67);
}
let VNDfromEUR = EURtoVND(1);

//chuyen tu VND sang EURO
function VNDtoEUR(vnd){
    return(vnd/26544.67);
}
let eur = VNDtoEUR(100000);

//tinh the ky cua 1 nam
function tinhTheKy(year){
    return Math.ceil(year/100);
}
let theki = tinhTheKy(2021);
alert(`nam ban nhap thuoc the ky ${theki}`);