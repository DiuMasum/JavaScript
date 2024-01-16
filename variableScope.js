// variable scope = where a variable is recognized
//                  and accessible (local vs global)


//local variable
 function function1(){
    let x = 1;
    console.log(x);
 }

 function function2(){
    let x = 2;
    console.log(x);
 }

 function2();



 // global variable
 let x = 3;

 function function3(){
    console.log(x);
 }

 function function4(){
    console.log(x);
 }

 function4();