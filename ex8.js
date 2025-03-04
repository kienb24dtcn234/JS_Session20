let n = Number(prompt("Mời nhập số lượng số nguyên tố:"));
if (Number.isInteger(n) && n > 0) {
    let b = [];
    let num = 2;

    while (b.length < n) {
    let c= true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        c = false;
        break;
    }
}
    if (c) {
        b.push(num);
    }
    num++;
}alert(b);
} else {alert("Dữ liệu nhập vào không hợp lệ");
}