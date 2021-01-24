/*
    Prototype

    * Prototype-based language
    * propotype chain
    * _proto

*/

/*
    Tyoe conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

    console.log(Number('9') + 5)

*/

/*
    Manipulando Strings e Números
    . Transformar String em Número e Número em String

    let string = "123"
    console.log(Number(string))
    let number = 321
    console.log(String(number))


    . Contar quantos caracteres tem uma palavra e quantos digítos tem um número

    let word = "Paralelepipedo"
    console.log(word.length)
    let number = 123456
    console.log(String(number).length)


    Manipulando Strings e Números
    . Transformar um número quebrado com 2 casas decimais e trocar por pontos

    let number = 345.124587845
    console.log(number.toFixed(2).replace(".", ","))


    Manipulando Strings e Números
    . Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

    let word = "Programar é muito bom!"
    // Maiúsculas = UpperCase - Minúsculas = LowerCase
    console.log(word.toUpperCase())


    Manipulando Strings 
    . Verificar se o texto contém a palavra Amor

    let phrase = "Eu quero viver o Amor!"
    console.log(phrase.includes('Amor'))


    Manipulando Strings e Arrays
    . Separe um texto que contém espaços, eu um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque_

    let phrase = "Eu quero viver o Amor!"
    let myArray = phrase.split(" ")
    let phraseWithUndescrore = myArray.join("_")
    console.log(phraseWithUndescrore.toLowerCase())


    Manipulando Arrays
    . Criar Array com construtor

    let myArray = new Array('a', 'b', 'c')
    console.log(myArray)


    Manipulando Arrays
    . Contar elementos de um array

    console.log([
        "a", 
        {type: "array"}, 
        function() { return "alo"},
    ].length)

    console.log(["a", "b", "c"].length)


    Manipulando Arrays
    . Transformar uma cadeia de caracteres em elementos de um array

    let word = "Palavra"
    console.log(Array.from(word))


    Manipulando Arrays

    let techs = ["html", "css", "js"]

    // adicionar um item no fim
        techs.push("nodejs")

    // adicionar no começo
        techs.unshift("sql")

    // remover do fim
        //techs.pop()

    // remover do começo
        //techs.shift()

    // pegar somente alguns elementos do array
        //console.log(techs.slice(1,3))

    // remover 1 ou mais itens em qualquer posição do array
        //techs.splice(1, 2)

    // encontrar a posição do elemento no array
    let index = techs.indexOf('html')
    techs.splice(index, 1)

    console.log(techs)
*/