let num1 = 10
let num2 = 2

//Unary 
//post decrement and increment
console.log(num1++); //increments 
console.log(num2--);//decrements 
//pre decrewments & increments
console.log(++num1); //increments 
console.log(--num2);//decrements 

console.log(!num2);//Not equals to
console.log(~num2);//bitwise reverse and returns the number



//Binary
console.log(`
addition, ${num1 + num2}
subtraction ${num1 - num2}
multiplication ${num1 * num2}
division ${num1 / num2}
division by 0 ${num1 / 0} 
percentage ${num1 % num2}
exponential ${num1 ** num2}
 `)//division by 0 is infinity ; exponential is 100 (10*10)

console.log("deepthi" + "sai"); //deepthisai
console.log("deepthi" + 24); //deepthi24

//Chaining 

let a = b = 10
console.log(a, b); //10 10

console.log(a += 10, b -= 10, a *= 10, b /= 10, b %= 100); //20 0 200 0 0

//Nullis coalesling operator 

let null_value = null
console.log(null_value ?? 'yes it is null/undefined')


//spread operator 

//arrays 
let arr = [1, 2, 3, 4]
console.log([...arr, 5]); // 1 2 3 4 5
let arr_names = ['deepthi', 'sai']
const [...new_Array] = arr_names
console.log(new_Array); //copy
const [firstName, lastName] = arr_names
console.log(firstName, lastName); //deepthi sai

let obj1 = {
    name: "deepthi",
    occupation: "student"
}

let obj2 = {
    age: 25
}
obj2 = { ...obj1, obj2 }
console.log(obj2);//{name: 'deepthi', occupation: 'student', obj2: {…}}


let obj3 = { ...obj1, ...obj2 }
console.log(obj3); //{name: 'deepthi', occupation: 'student', age: 25}

let { name, occupation } = obj1
console.log(name, occupation);//deepthi student
