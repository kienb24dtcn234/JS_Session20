let N = +prompt("Nhập một số nguyên dương N:");   
if (N <= 0) {  
    alert("Dữ liệu nhập vào không hợp lệ"); 
} else if(Number.isInteger(N) && N > 0) {  
    let tong = 0;   
    for (let i = 1; i <= N; i++) {  
        tong += i;  
    }  
    alert("Tổng tất cả các số nguyên từ 1 đến " + N + " là: " + tong);  
} else {
    alert("Dữ liệu nhập vào không hợp lệ");  
}
