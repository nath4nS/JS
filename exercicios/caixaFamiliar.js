// Sistema de gastos familiares

// O meu código

const receitas = [300.00];
const despesas = [150, 100, 250.25];

    let total = receitas.reduce((total, currentElement) => total + currentElement);
    let gastos = despesas.reduce((gastos, currentElement) => gastos + currentElement);
    //console.log(total, gastos)

function soma() {
    let saldo = total - gastos;
    let saldoA = total > gastos;
    let saldoB = total < gastos;

    let saldofinal;

    if(saldoA) {
        saldofinal = "O seu saldo está positivo, sobrou R$ " + `${saldo}` + " reais."
    } else if(saldoB) {
        saldofinal = "O seu saldo está negativo, faltou R$ " + `${saldo}` + " reais."
    } else {
        saldofinal = "O seu saldo ficou R$ 0"
    }

    return saldofinal.replace(".", ",");
}

soma()


// O Exemplo da aula

let family = {
    incomes: [3000, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 174.89, 1450.00, 4000.50]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const its0k = total >= 0

    let balanceText = "negativo"

    if (its0k) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2).replace(".", ",")}R$`)
}

calculateBalance()