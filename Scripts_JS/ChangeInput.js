const input1 = document.getElementById('number1')
const input2 = document.getElementById('number2')

const handleChange = (number) => {
    if (number == 1) {
        const temp = parseInt(input1.value) + 1;
        input2.value = temp;
    }
    else {
        const temp = parseInt(input2.value) + 1;
        input1.value = temp;
    }
}
