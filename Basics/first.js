// Previously JS can only be written on browswee.
// But now due to advancement in tech we can write JS on console.
// To run JS we should install node js (or any others).

// Print in Console
console.log("Ayush");
console.table(["Ayush","Thor","Another","Way to Print"]);

// Difference between 

// const - Value Cannot Be changed after declaration
// eg :
// const a = 10;
// a=5;
// console.log(a); Shows Error

// let and var can be used
// we commoly use let because of some limitations is var like scope

// "use strict"; Treats the whole code as new JS 

// we cant use 
// alert("Alert");
// because we are using js not browser

// Datatypes
// string
// number
// bigInt
// boolean
// null
// undefined
// symbol

// to find datatype 
// typeof is used 
// console.log(typeof "Ayush");
// typeof null is Object
// console.log(typeof null);

// Conversion in JS (Type casting);
 let num = "10abc";
 console.log(typeof num);
//  Output - String
//  to convert to int 
 let int = Number(num);
 console.log(typeof int);
 // Output - number
//  console.log(int);
//  but value is NaN 
// we can also use Boolean , String

// operations are same as other languages

// Some amazing things
// console.log(1+1);
// console.log(1+"1");
// console.log("1"+1);
// console.log("1"+1+1);
// console.log(1+1+"1");

// Output
// 2
// 11
// 11
// 111
// 21

// Memory in JS
// Stack(Primitive) eg: number,null ; Heap(Non Primitive) eg:Array,Function ;

// In stack copy is given while in heap original value(like pointer) is given