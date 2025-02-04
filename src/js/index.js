function fizzBuzz(n) {
    let output = []

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            output.push('FizzBuzz')
        } else if (i % 3 == 0) {
            output.push('Fizz')
        } else if (i % 5 == 0) {
            output.push('Buzz')
        } else {
            output.push(i)
        }
    }
    return output.join('\n')
}

function checkFizzBuzz() {
    const valueInputN = document.getElementById("integerId")
    const resultTextarea = document.getElementById("resultId")
    const showSuccess = document.getElementById('showSuccess')
    resultTextarea.style.color = "black"

    const n = parseInt(valueInputN.value)

    if (isNaN(n) || n < 1) {
        resultTextarea.value = "Por favor, insira um número inteiro positivo válido."
        resultTextarea.style.color = "red"
        showSuccess.textContent = ""
        return
    }

    const result = fizzBuzz(n)
    resultTextarea.value = result
    showSuccess.textContent = "Compilação bem-sucedida :)"
}

function resetFields() {
    ['integerId', 'resultId'].forEach(id => document.getElementById(id).value = "")
    document.getElementById('showSuccess').textContent = ""

}

const reset = document.getElementById('reset')
reset.addEventListener('click', resetFields)
