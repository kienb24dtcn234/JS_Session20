let a = prompt("Nhập vào số a:");  
let b = prompt("Nhập vào số b:");  
a = Number(a);  
b = Number(b);  
if (Number.isInteger(a) && Number.isInteger(b)) {  
    let result = 1;  
    for (let i = 0; i < Math.abs(b); i++) {  
        result *= a;  
    }  
    if (b < 0) {  
        result = 1 / result;  
    }  
    alert(`Kết quả của ${a}^${b} là: ${result}`);  
} else {  
    alert("Nhập vào không hợp lệ");  
}  