function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}
console.log(calc(25, 25, sum));

function rest(n2,n3) {
    return n2-n3
}
function calcc(n2,n3,restar){
    return  restar(n2,n3)
}
console.log(calcc(40,6,rest))


setTimeout(function (){

    console.log('Hola javascript')
},2000)