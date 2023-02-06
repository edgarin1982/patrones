function sum(a, b){
    return a + b;

}
let resp = sum (1,2);
console.log(resp);

const fsum = sum;
resp = fsum(5,6)
console.log(resp);

/* funcion de orden superior */
function operation(fn, a, b) {
    console.log('Se hace algo');
    console.log(fn(a,b));     
}
operation(sum, 10, 20)

/* funcion flecha */

let fAn =  () => console.log('algo');    
fAn();

operation((a, b) => a*b, 5,5);
operation((a,b) => {
    const c =a + b;
    return c * 2;
},1, 2)

//foreach

const names = ['Hector', 'Juan', 'Pablo'];

names.forEach((item)=> console.log(item));