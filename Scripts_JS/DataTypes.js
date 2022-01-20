/*
lets see diff datatypes in js
There are 8 
Dynamic variable assignment is possible in JS
*/

// String
let name = "deepthi"
let name_string = String(name)
console.log(name_string);

//Inetegers -- 2
let bigint = BigInt(12345677);
console.log(typeof (bigint));

let integer = 1234
let integer_name = Number(1234)
let integer_1 = 12.35
console.log(integer, "is of type", typeof (integer));

//Booleans 
let boolean_value = true;
let bool = Boolean(false)
console.log(bool);

//Undefined 
let n;
console.log(n, " type of undefined is", typeof (n));//type is undefined

//null 
let null_value = null;
console.log(null_value, " type of null is ", typeof (null_value));  //type is object 

//Objects 
let obj_1 = {
    name: "deepthi",
    location: "India"
}
console.log(obj_1, " ", typeof (obj_1))

//Symbols
let sym = Symbol('id') //unique Identification
console.log(sym)