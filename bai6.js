let dem = 0;
let Tong = 0;

for ( let i = 1 ; i <= 30 ; i++  ){
    dem += 7;
    document.write(+dem +" ")
    Tong += dem;
}

    document.write('</br>' + "Tổng của 30 số tự nhiên đầu tiên chia hết cho 7 là: " + Tong);