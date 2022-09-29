const firstNumber = Number(prompt("Digite o primeiro número"))
const secondNumber = Number(prompt("Digite o segundo número"))

function expressionsResults (number1, number2) {
    const sum = number1 + number2
    const subtraction = number1 - number2
    const multiplication = number1 * number2
    const division = (number1 / number2).toFixed(1)
    const restofDivision = number1 % number2

    let oddOrPair = sum % 2
    let checkDifference

    if (oddOrPair == 0) {
        oddOrPair = "par"
    } else {
        oddOrPair = "impar"
    }

    if (number1 === number2) {
        checkDifference = "iguais"
    }else {
        checkDifference = "diferentes"
    }

    alert(`Os números informados foram ${number1} e ${number2}
    Soma: ${sum}
    Subtração: ${subtraction}
    Multiplicação: ${multiplication}
    Divisão: ${division}
    Resto da divisão: ${restofDivision}

    A soma dos números é ${oddOrPair}
    Os números são ${checkDifference}`)
}

expressionsResults(firstNumber, secondNumber)