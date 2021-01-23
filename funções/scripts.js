/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

/*let date = new Date("2020-12-01")
    console.log(date)*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando."
    }
}

const nathan = new Person("Nathan")
const paulo = new Person("Paulo")
console.log(nathan.walk())
console.log(paulo.walk())