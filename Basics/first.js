// Previously JS can only be written on browswee.
// But now due to advancement in tech we can write JS on console.
// To run JS we should install node js (or any others).

// Print in Console
// console.log("Ayush");
// console.table(["Ayush","Thor","Another","Way to Print"]);

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
//  let num = "10abc";
//  console.log(typeof num);
//  Output - String
//  to convert to int 
//  let int = Number(num);
//  console.log(typeof int);
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

// String

// const a ="Ayush"
// const b = new String("Ayush")

// use modern syntax 
// let a ="Good"
// console.log(`Ayush is a ${a} boy`);

// Random No 
// console.log(Math.random());
// Returns a random no between 0 and 1
 
// random no between custom 2 nos
// let Max = 10
// let Min = 1
// console.log((Math.floor(Math.random()*(Max-Min+1))+Min));

// Dates

// let date = new Date()
// console.log(date); 2024-06-20T16:07:21.870Z
// it is in non readable format use the following fns
// console.log(date.toString()); Thu Jun 20 2024 21:37:21 GMT+0530 (India Standard Time)
// console.log(date.toDateString()); Thu Jun 20 2024
// console.log(date.toTimeString()); 21:37:21 GMT+0530 (India Standard Time)
// console.log(date.toLocaleTimeString()); 9:37:21 pm
// console.log(date.toLocaleDateString()); 20/6/2024

// create custom dates
// let mydate = new Date("2006-03-08")
// console.log(mydate.toLocaleDateString());

// Array operations 
// let arr = [1,2,3,4,5]
// console.log(arr); [ 1, 2, 3, 4, 5 ]

// Splice and Slice 
// let b = arr.slice(1,3);  // doesnt includes last no as well as not change array
// console.log(b); [ 2, 3 ]
// console.log(arr); [ 1, 2, 3, 4, 5 ]

// let c = arr.splice(1,3) // doesnt includes last no as well as not change array
// console.log(c); [ 2, 3, 4 ]
// console.log(arr); [ 1, 5 ]

// Objects

// let a = {}
// object is declared 

// eg 
// let b={
//     name : "Ayush",
//     age : 10,
// }
// console.log(b);
// console.log(b.age);
// console.log(b["name"]);

// Functions
// function Ayush(params) {
//     console.log("Ayush");
// }

// let a = function(){
//     console.log("Hi");
// }
// a()

// Arrow function 
// let c = () => {
//   console.log("Ayush");
// }
// c()

// in single line 
// let n = () => {}


// Immedietly invoked function 

// (function c(){
//     console.log(`function started`);
// })();

// ((user)=>{
//     console.log(`Hello ${user}`);
// })("Ayush");

// loops 
// use for in for obects(it returns keys) and arrays(for arrays it returns index)
// let arr = ["Ayush","Thor","Hulk"]
// for (const key in arr) {
//     console.log(arr[key]);
// }
// let obj ={
//     name : "Ayush",
//     age : 18,
//     salary:"infinity"
// }
// for (const key in obj) {
//     console.log(obj[key]);
// }

// for of returns values in array
// let arr = ["Ayush","Thor","Hulk"]
// for (const key of arr) {
//     console.log(key); No need to write arr[keys]
// }

// for each

// let arr = ["Ayush","Thor","Hulk"]
// arr.forEach((val)=>{console.log(val);})
// arr.forEach((val,index,arr)=>{console.log(val,index,arr);})

// will get index as well as array 
// we can use also filter operator it can return values
// let arr = ["Ayush","Thor","Hulk"]
// let b = arr.filter((val)=>{
//     console.log(val);
//     return val;
// })
// console.log(b);

// ................................Basics completed........................................