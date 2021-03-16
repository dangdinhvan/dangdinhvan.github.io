// bt1: in ra số hoàn hảo < n
function kiemTraSoHoanHao(a) {
    let sum = 0;
    for (let i = 1; i <= a / 2; i++) {
        if (a % i === 0) {
            sum += i;
        }
    }
    if (sum === a) {
        return true;
    }
    return false;
}
function inSoHoanHao(n) {
    for (let i = 6; i < n; i++) {
        if (kiemTraSoHoanHao(i) == true) {
            console.log(i);
        }
    }
}

// bt2: Tìm số nhỏ nhất và lớn nhất trong mảng
function min_Max(array) {
    let min = array[0];
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log(`${min} là số bé nhất trong mảng`);
    for (let j = 1; j < array.length; j++) {
        if (array[j] > max) {
            max = array[j];
        }
    }
    console.log(`${max} là số lớn nhất trong mảng`);
}

// bt3: Tìm số lớn thứ 2 trong mảng
function second_Max(a) {
    let max1;
    let max2;
    if (a[0] > a[1]) {
        max1 = a[0];
        max2 = a[1];
    }
    else {
        max1 = a[1];
        max2 = a[0];
    }
    for (let i = 2; i < a.length; i++) {
        if (a[i] > max1) {
            max2 = max1;
            max1 = a[i];
        }
        else if (a[i] > max2) {
            max2 = a[i];
        }
    }
    return `${max2} là số lớn thứ hai trong mảng`
}

// bt4: Trả về vị trí số lẻ đầu tiên và số chẵn cuối cùng
function vi_tri(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            console.log(`Vị trí số lẻ đầu tiên là ${i}`);
            break;
        }
        let so_chan;
        for (let j = 0; j < a.length; j++) {
            if (a[j] % 2 === 0) {
                so_chan = j;
            }
        }
        console.log(`Vị trí số chẵn cuối cùng là ${so_chan}`);
    }
}
// bt5: Đảo ngược chuỗi
function inDaoNguoc(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

