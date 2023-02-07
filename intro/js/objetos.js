class Drink{
  constructor(name){
    this.name = name;
  }
  info(){
    return 'la botella es de ' + this.name;
  }
}

const drink = new Drink('agua');
console.log(drink.info());


//funcional

function Drink2(name) {
    this.name = name;
    this.info = function () {
        return 'la botella es de ' + this.name;
    }
}
const drink2 = new Drink2('agua');
console.log(drink2.info());


//herencia
class Beer extends Drink{
    constructor(name, alcohol){
        super(name);
        this.alcohol = alcohol;
    }
    info(){
        return super.info() + ' ' + this.alcohol;
    }
}

const beer = new Beer('corona', 4.8);
console.log(beer.info());