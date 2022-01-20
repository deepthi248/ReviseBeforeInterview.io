
/*
const global_var = 1;
first(); //can be called even before declaration is because of the variable environment object created by execution context & Hoisting 

function first() {
    const cn1 = "deepthi";
    var vr1 = "sai";
    // console.log(let1); // is not defined  -referror

    if (cn1 == "deepthi") {
        var vr2 = "jai";
        let let1 = "shetty";
    }

    console.log(let1); //let is block scoped and cant be called 
    console.log(vr2); //is function scoped 
    console.log(let1); // is not defined  
};

first();
*/
//------------------------------------------------------------------------

var y = 10;

{
    let sname = "Newton";
    let rolln = 1;
    console.log(sname, rolln, x, y); // printed without any problem - y =10 && x=undefined because of var ; if x is declared as let x - then error referece - cant access before intialisation
    var x = 50;
    var y = 60;
    // console.log(x_inner, y_inner);

    //x_inner isnot defined
    let x_inner = 10;
    var y_inner = 30;
    console.log(sname);
    console.log(x);
    console.log(x, y);
    var y = 10; //can be reassigned 



}
//  console.log(x_inner); //not defined 
console.log(y_inner + "y_inner"); // var is function scope -- hence printed 



function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        let innerName = "deepu";
        alert(name); // use variable declared in the parent function
    }
    displayName();

}
// console.log(a, b)//ref error;
let a = 10
const b = 10
console.log(c); //undefined
var c = 10;

function func1() {
    let a = 10
    // var a = 10; //identifier is declared

    var b = 10;
    // let b = 10 //identifier is declared
    function c() {
        console.log(a);
    }

    return c();
}

func1() //10 is printed