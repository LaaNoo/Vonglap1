for ( let i = 1 ; i <= 100 ; i ++){
    
    if ( i % 5 == 0 && i % 3 == 0){
        document.write( '</br>' + "FizzBuzz");

    } else if ( i % 5 == 0){
        document.write( '</br>' + "Buzz");

    } else if (  i % 3 == 0 ){
        document.write( '</br>' + "Fizz");
    }

    document.write( i + '<br>');
}