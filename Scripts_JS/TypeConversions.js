let number = 12345;
let name = "12345"
let string = "deepthi"

//convertign number to string 
number = String(number)
console.log(typeof (number)) //string 
console.log(String(undefined), typeof (String(undefined))); //undefined string


//String to Number
name = parseInt(name)
string = parseInt(string)
console.log(typeof (name)); //number
console.log(typeof (string), " ", string); //string NaN
console.log(parseInt(null)); //NaN


//Bolean conversion
name = Boolean(name)
console.log(typeof (name), " ", name);//boolean, true -- any value other than 0 are true for boolean 
name = Boolean(0)
console.log(typeof (name), " ", name);//boolean false