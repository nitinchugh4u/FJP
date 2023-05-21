//  declearation and initialise
let a = 10;
// print 
console.log(a);
// type of variable
console.log(typeof a);
// Reinitialise
a = "hello";
console.log(a);
console.log(typeof a);


// var

var admin;
var name;
name="john"
admin=name;
alert(admin);
console.log(admin);


// string in js

// 1) single quotes
var str = 'hello , to the batch fjp-9';
console.log(str);

// 2) double quotes
var str = "hello , to the library"
console.log(str);

// 3) backticks
// 3.1 varaible
var user = "Nitin"
console.log(user);

var str = `hello ${user}, how are you`;
console.log(str);

// 3.2) evaluate expressions
var str = ` bring me ${1+1} glass of water`; 
console.log(str);

var str = `hello my name is ${user} and i am going to ${1+1} places tomorrow`;
console.log(str);



// understanding var let const

// 1) var

// In var we can reinitialise as well redeclaered the varaible

var b = 10;
console.log(b);

 var b = 20;
 console.log(b);

// To overcome this we use let
// 2) let
let c = 100 ;
console.log(c);

// in let redeclearation is not allowed but reinitialsiation is allowed
//  let c = 1000;
//  console.log(c);

 c = 200;
 console.log(c);

var num  = 10;
for (var i = 0; i < num; i++){
    if (i % 2 == 0){
        console.log("num is even");

    }

}
console.log(i);
// var keyword is function scoped in case of function else global scoped

function add() {
    var x = 20;
    var y = 30;
    console.log(x+y);
}

// show error 
// console.log(x); uncaught reference error x is not defined
// console.log(y);


// let keywoard is block scoped
{
// this part is known is blocked
}

// let j = 20;
for(var i = 0; i < num; i++){
    let j = 10;
    if(i % 2 == 0){
        let inif = 'hello';
        console.log(i);
        console.log(inif);
    }
    
    // console.log(inif);
    console.log(i);

}
console.log(i);
// console.log(j); uncaught reference error j is not defined
// console.log(inif); uncaught reference error inif is not defined
console.log(`value of i is ${i}`);


//const

// 1) always decleared and initialise together

// 2) const v;  missing initilizer in const declearation
// v=20;


const p = 10;
// cannot be redecleare and reinitialise 

//  scope  same as let























