let array=[1,2,3];
let names;
names = ["An","Anh","Hieu","Thinh"];

//lay phan tu theo index
console.log(names[3]);

//duyet mang
for(let i=0;i<names.length;i++){
    console.log(`toi ten la ${names[i]}`);
}

for(let item of names){
    console.log(item); // in ra cac phan tu
}

for(let index in names){
    console.log(index); //in index cua cac phan tu
}

//push de them moi 1 phan tu vao mang
names.push("Quynh");
console.log(names);

//pop de lay phan tu cuoi cung  cua mang
console.log(array.pop());

// cho 1 mang so nguyen neu phan tu < 0 thi thay phan tu do bang 0
function thaySo(arr){
    for(let i in arr){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}

function drawSquaare(n){
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n;j++){
            console.log("*");
        }
    }
}

