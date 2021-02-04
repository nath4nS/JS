// for...in

let person = {
    name: 'Nathan',
    age: 20,
    weight: 80.2
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}