var students = [
    { name: "Hoa", age: 18 },
    { name: "Lan", age: 22 },
    { name: "Vinh", age: 20 },
    { name: "Huy", age: 19 },
    { name: "Tuyền", age: 19 },
];
// bt1: Tính độ tuổi trung bình của các sinh viên
function tinhTuoiTB(students) {
    let tongTuoi = 0;
    for (let i = 0; i < students.length; i++) {
        tongTuoi = tongTuoi + students[i].age;
    }
    let tuoiTB = tongTuoi / students.length;
    return tuoiTB;
}
console.log("Tuổi trung bình của các sinh viên là: " + tinhTuoiTB(students));

// bt2: Sắp xếp tuổi sinh viên từ thấp đến cao
console.log(students.sort((a, b) => (b.age - a.age)));

// c2:
function sapXepTuoi(obj) {
    let min = obj[0];
    for (i = 0; i < obj.length; i++) {
        for (k = i + 1; k < obj.length; k++) {
            if (obj[i].age < obj[k].age) {
                min = obj[k];
                obj[k] = obj[i];
                obj[i] = min;
            }
        }
    }
    console.log(obj);
}
sapXepTuoi(students);

// bt3: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, "".
let values = [false,NaN,24,0,"",undefined,null,"ANBC",true];
function giaTri(arr){
    let newArr =[];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]) newArr.push(arr[i]);
    }
    return newArr
}
console.log(giaTri(values))

// bt4: kiểm tra chuỗi đối xứng
function kiemTraChuoiDoiXung(str){
    let reverseStr=""; 
    for(let i=str.length-1;i>=0;i--){
            reverseStr=reverseStr+str[i];
    }
    reverseStr = reverseStr.split(" ").join("").toLowerCase();
    let newStr = str.split(" ").join("").toLowerCase();

    if(newStr === reverseStr){
        return true;
    }else{
        return false;
    }
}

// bt5: Lọc ra chuối có độ dài lớn nhất
function locChuoiCoDoDaiMax(arr) {
    let max = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    let newArray = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length === max) {
            newArray.push(arr[j]);
        }
    }
    return newArray;
}
