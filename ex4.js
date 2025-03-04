let str = prompt("Hãy nhập 1 chuỗi bất kì ");
let search = prompt("Nhập từ khóa để tìm kiếm");
let flag = 0;
for (let i = 0; i < str.length; i++){
    if (str[i] == search) {
        flag = 1;
        break;
    }
}
flag == 1 ? console.log("Tồn tại từ cần tìm kiếm ") : console.log("Không tồn tại từ cần tìm kiếm");