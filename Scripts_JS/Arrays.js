//splice ; slice ; puh ; shift ;unshift 

let array1 = [1, 2, 3, 4];

const res = array1.push(5);
console.log(res)  // 5 
console.log(array1) //added 5

console.log(array1.pop())
console.log(array1)//removed 4

console.log(array1.shift())
console.log(array1); //removed 1

console.log(array1.unshift(4));
console.log(array1) //adds the element in the starting 

//delete 
const array2 = [1, 2, 3, 4, 6, 7]
array2.splice(0, 2, 4, 5)
console.log(array2);

array2.slice(3)//delete 3rd element