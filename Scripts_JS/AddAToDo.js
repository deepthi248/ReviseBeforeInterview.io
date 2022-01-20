const input = document.getElementById('input')
const button = document.getElementById('AddtoDo')
const list = document.getElementById('list')


function AddtoDo() {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    list.appendChild(li)
}