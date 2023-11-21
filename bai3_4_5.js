
// let a = 0, b = 1 , c =0 ;

// document.write( " 20 số fibonacci đầu tiên là: " +a ," " + b);

// let n = 1;

// for ( let i = 1 ; i < 20 ; i ++){
    
//     c = a + b;
//     a = b ;
//     b = c ;
//     document.write(" "+c);

//     for ( ; n < 2 ;  n++ ){
//         if ( c % 5 === 0){
//             document.write('</br>' + "Số đầu tiên chia hết cho 5 là: " + c);
           
//         }

//     }


// }

let a = 0, b = 1, c = 0;

document.write(" 20 số Fibonacci đầu tiên là: " + a + " " + b);
let n = 1;
let Tong = a + b ;

for (let i = 1; i < 20; i++) {
    c = a + b;
    a = b;
    b = c;
    
    document.write(" " + c);

    if (c % 5 === 0 && n <= 1) {
        document.write('</br>' + " Số đầu tiên chia hết cho 5 là: " + c);
        n++;
    }

    Tong = Tong + c;
    
}

    document.write('</br>' +  "Tổng của 20 số Fibonacci là: "+Tong);
   
    


