let kiemtra = prompt("Mời bạn nhập một chuỗi số nguyên 3 chữ số có phải số đối xứng hay không:");  
if (Number.isInteger(+kiemtra) && kiemtra.length === 3) {  
    let checks = true;  
    for (let i = 0; i < Math.floor(kiemtra.length / 2); i++) {  
        if (kiemtra[i] !== kiemtra[kiemtra.length - 1 - i]) {  
            checks = false;  
            break;  
        }  
    }  
    if (checks) {  
        alert("Đây là số đối xứng");  
    } else {  
        alert("Đây không phải số đối xứng");  
    }  
} else {  
    alert("Số không hợp lệ");  
}  