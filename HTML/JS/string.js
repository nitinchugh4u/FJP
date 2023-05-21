// string is a sequence of character

 var str = 'hello pepcoders';
//  h e l l o <space>  p e p c o  d  e  r  s
//  0 1 2 3 4   5      
// 6 7 8 9 10 11 12 13 14

console.log(str);
console.log(str[4]);


// string in js are inmutable
str[4] = 'z';
console.log(str);

console.log(str.length);


// string method

// 1) slice method
// string_name.slice(start,end) = starting index is inclusive and ending index is exclusive

// slice performed on the string  str is not changed 

var slicedstr = str.slice(3, 7);
console.log(slicedstr);

var slicedstr = str.slice(1, 12);
console.log(slicedstr);

// sliced performed on the string str  is not changed
console.log(str);

var slicedstr = str.slice(6);
console.log(slicedstr);

var slicedstr = str.slice(2);
console.log(slicedstr);


// 2) Substring method
//  stringname.substring(start,end) = starting index is inclusive and ending index is exclusive

slicedstr = str.substring(0, 5);  
console.log(slicedstr);


// 3) tolowerCase / toupperCase

var str = 'hello';
console.log(str.toUpperCase());

var str = "BYE";
console.log(str.toLowerCase());


//  4) concatenation method
let firstStr = "hello";
let secondStr = "World";
console.log(firstStr + secondStr);

let concatenatedStr = firstStr.concat(secondStr, " you only love once");
console.log(concatenatedStr);

// 5) trim method 

// remove all the starting whitespace and ending whitespaces of a string,



var str = '     hello world     ';
console.log(str);
console.log(str.length);

console.log(str.trim().length);



// 6) split method

//  split a string  in to substring using the specified seperator and  return them as an array

var str = 'hello 123 hello 456';
console.log(str.length);

var  res = str.split("");
console.log(res);
// no space means will print char wise

var res = str.split(" ");
console.log(res); 
// space k basis pr space include nhi hoga

var res = str.split("2");
console.log(res);
// same 2 willl not include like upper case mei space ki trh willl not include









