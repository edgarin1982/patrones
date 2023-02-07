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

//for each este metodo es inmutable ya que no cambia a nuestro array

const names = ['Hector', 'Juan', 'Pablo'];

names.forEach((item)=> console.log(item));
names.forEach((item)=> console.log(item.toUpperCase()));

//metodo map

const namesUper = names.map((item ) => item.toUpperCase())
console.log(namesUper);

//reduce metodo
const numeros = [5,4,7,1,10]

const total = numeros.reduce((ac, item) => {
    return ac + item;
},0)
console.log(total);
