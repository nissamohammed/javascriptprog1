//1) Write a program that prints the numbers from 1 to 100.
 //But for multiples of three, print "Fizz" instead of the number,
 //and for the multiples of five, print "Buzz." For numbers that are 
 //multiples of both three and five, print "FizzBuzz."

 for(n=1;n<=100;n++){
    if(n%3==0){
        console.log('Fizz');

    }
     if(n%5==0){
        console.log('Buzz');
    }
    if(n%3==0 &&  n%5==0){
        console.log('FizzBuzz');
    }
    else{
        console.log(n);
    }
 }