let n = prompt("Nhập vào số n:");  
n = Number(n); 
if (Number.isInteger(n) && n >= 0) { 
    let fibonacci = []; 
    for (let i = 0; i < n; i++) {  
        if (i === 0) {  
            fibonacci.push(1); 
        } else if (i === 1) {  
            fibonacci.push(1); 
        } else {  
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);  
        }  
    }  
    alert("Dãy Fibonacci gồm " + n + " số là: " + fibonacci.join(", ")); 
} else {  
    alert("Dữ liệu nhập vào không hợp lệ"); 
}  