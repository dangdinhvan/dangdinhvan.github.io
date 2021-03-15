for(let i=0;i<10;i++){
    console.log(i);
}


let i=0;
while(i<10){
    console.log(i);
    i++;
}


let j=10;
do{
    j--;
    if(j===8){
        console.log("8chia het cho 2");
        continue;
    }
    console.log(j);
}while(j>0);

//bt: cho n, n<=50, liet ke cac so chia het chi 5 trong khoang tu 0 den n
function demChiaHetcho5(n){
    let count=0;
    if(n<0||n>50){
        return;
    }
    for(let i=0;i<=n;i++){
        if(i%5==0){
            console.log(i);
            count++;
        }
    }
    return count;
}