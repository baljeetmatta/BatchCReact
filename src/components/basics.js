import compose from "lodash/fp/compose.js"
import pipe from "lodash/fp/pipe.js"
//FUNCTIONAL PROGRAMMING
//function is a first class citizen
//1 variable, return , as argument
// function sayHello()
// {
//     console.log("Hello");

// }
// const fn=sayHello;
// fn();

// function greet(fn)
// {
//     fn();


// }
// greet(sayHello);
// function greet(x)
// {
//     return function(y){
//         return x+y;
//     }
// }
// // const fn=greet();
// // console.log(fn());

// console.log(greet(5)(4));
//currying
//Higher Order Functions
//either returns a function or receives a function as arguments

// const trim=(str)=>{
//     return str.trim();
// }
// const trim=str=>str.trim();
// const toLower=str=>str.toLowerCase();

// let input="   JavaScript  ";
// //let output="<div>"+trim(input)+"<div>";
// //let output =`<div>${toLower(trim(input))}<div>`;
// //const wrap=str=>`<div>${str}}<div>`;
// //const wrap=(element,str)=>`<${element}>${str}</${element}>`
// const wrap=element=>str=>`<${element}>${str}</${element}>`
// //const result=wrap(toLower(trim(input)));
// //const fn= compose(wrap,toLower,trim);
// const fn=pipe(trim,toLower,wrap("div"));

// const result=fn(input);
// console.log(result);
// // function add(a)
// // {
// //         return function(b)
// //         {
// //             return a+b;
// //         }
// // }
// // const fn=add(5);
// // const result=fn(4)
// // function sum(a,b)
// // {
// //     return a+b;

// // }

// function  numfun(x){
//     return x*Math.random();
// }
// function numfun(x)
// {
//     return x*2; 
// }
// console.group(numfun(10));
const minAge=20;
// function isEligible(age){
//     return age>minAge;

// }
function isEligible(age,minAge){
    return age>minAge;

}


console.log(isEligible(19,minAge));