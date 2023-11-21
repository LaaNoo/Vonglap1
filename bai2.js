let nhietDo = parseFloat(prompt("Nhập vào nhiệt độ hiện tại: "));

while (nhietDo > 100 || nhietDo < 20){
    if (nhietDo > 100) {
        alert("Nhiệt độ quá cao. Hãy giảm nhiệt độ!");
    } else if (nhietDo < 20) {
        alert("Nhiệt độ quá thấp. Hãy tăng nhiệt độ!");
    } else {
        alert("Nhiệt độ ổn định. Không cần thay đổi.");
    }
    
}