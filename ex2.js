let N = +prompt("Mời bạn nhập số để kiểm tra có chia hết cho 5 :");  
if (N <= 0) {  
    alert("Dữ liệu nhập vào không hợp lệ");   
} else if(Number.isInteger(N) && N > 0) {  
    let result = [];   
    for (let i = 1; i <= N; i++) {  
        if (i % 5 === 0) {  
            result.push(i);  
        }  
    }  
    alert("Các số chia hết cho 5 từ 1 đến " + N + " là : " + result.join(", "));  
} else {
    alert("Dữ liệu nhập vào không hợp lệ"); 
}