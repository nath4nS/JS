/*
* Object 
    * Objeto
    * Propriedades / Atributos 
    * Funcionalidades / Métodos
    
    { propriedade: "valor" }

*/

    console.log({
        name: "Nathan",
        idade: 21,
        andar: function(){
            console.log('andar')
        }
    })

    const person = {
        name: 'John',
        age: 30,
        weight: 88.6,
        isAdmin: true
    }
    
    console.log(person.age)
    console.log(`${person.name} tem ${person.age} anos.`)