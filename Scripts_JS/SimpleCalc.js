const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const operation = document.getElementById('operation')
const op = document.getElementById('op')
function Calculate() {

    const s = number1.value + " " + operation.value + " " + number2.value
    op.innerHTML = eval(s)
    console.log(eval(s)
    );

}
