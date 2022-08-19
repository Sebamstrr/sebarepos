function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

 // console.log inprime --> hello//
 /*console.log inprime | Dojo*/

 function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

// console.log inprime | hello//
/*
result = 15
*/

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

//console.log inprime | num is 3
// console.log inprime | result is 18

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

/* console.log inprime | logAndReturn 15,10,10,15*/

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

//console.log inprime | timesTwo 15,10,20,15

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

//console.log inprime | ('result is (3*2) + (5*2) = 16)




