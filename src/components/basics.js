// // import compose from "lodash/fp/compose.js"
// // import pipe from "lodash/fp/pipe.js"
// // //FUNCTIONAL PROGRAMMING
// // //function is a first class citizen
// // //1 variable, return , as argument
// // // function sayHello()
// // // {
// // //     console.log("Hello");

// // // }
// // // const fn=sayHello;
// // // fn();

// // // function greet(fn)
// // // {
// // //     fn();


// // // }
// // // greet(sayHello);
// // // function greet(x)
// // // {
// // //     return function(y){
// // //         return x+y;
// // //     }
// // // }
// // // // const fn=greet();
// // // // console.log(fn());

// // // console.log(greet(5)(4));
// // //currying
// // //Higher Order Functions
// // //either returns a function or receives a function as arguments

// // // const trim=(str)=>{
// // //     return str.trim();
// // // }
// // // const trim=str=>str.trim();
// // // const toLower=str=>str.toLowerCase();

// // // let input="   JavaScript  ";
// // // //let output="<div>"+trim(input)+"<div>";
// // // //let output =`<div>${toLower(trim(input))}<div>`;
// // // //const wrap=str=>`<div>${str}}<div>`;
// // // //const wrap=(element,str)=>`<${element}>${str}</${element}>`
// // // const wrap=element=>str=>`<${element}>${str}</${element}>`
// // // //const result=wrap(toLower(trim(input)));
// // // //const fn= compose(wrap,toLower,trim);
// // // const fn=pipe(trim,toLower,wrap("div"));

// // // const result=fn(input);
// // // console.log(result);
// // // // function add(a)
// // // // {
// // // //         return function(b)
// // // //         {
// // // //             return a+b;
// // // //         }
// // // // }
// // // // const fn=add(5);
// // // // const result=fn(4)
// // // // function sum(a,b)
// // // // {
// // // //     return a+b;

// // // // }

// // // function  numfun(x){
// // //     return x*Math.random();
// // // }
// // // function numfun(x)
// // // {
// // //     return x*2; 
// // // }
// // // console.group(numfun(10));
// // const minAge=20;
// // // function isEligible(age){
// // //     return age>minAge;

// // // }
// // function isEligible(age,minAge){
// //     return age>minAge;

// // }


// // console.log(isEligible(19,minAge));

// //OBJECTS   
// // let str="Code";
// // let str1=str.toLowerCase();
// // console.log(str);
// // console.log(str1);
// // if(str==str1)
// // const person={"name":"Code"};
// // // const data=person;
// // // data.name="Coding";
// // // console.log(person,data);
// // const data={...person}
// // data.name="Coding";
// // console.log(person,data);

// const person={
//     name:"Code",
//     age:10,
//     address:{
//         city:"ABC"
//     }
// }
// const data={...person,address:{
//     ...person.address
// }};
// data.name="Coding";
// data.address.city="Test";

// console.log(data,person);
import { Map } from 'immutable'
import { produce } from 'immer';
let book = Map({ "title": "My Book" });
//MAP API get,set

// function publish(book)
// {
//    // book.isPublished=true;
//    //const newBook=book.set("isPublished",true);
//    //return newBook;
//  const nBook=  produce(book,draftBook=>{
//         draftBook.isPublished=true;

//    })
//    return nBook;


// }
//  const nbook=publish(book);
// console.log(nbook.toJS());

//book.set("isPublished","true")
//console.log(book.set("title"));
//actions ->events ->Dispatch
//Store
//reducer -> action, copy of store ->return updated store

//Bug Application
//Add,Resolve,Delete  // actions
//1 Design a Store
// [  {id:,description,resolved:} ]; //Example
//{  bugs:[{}],currentuser:{},}
//2. Define Actions
// Add, Resolve, Delete
//object { type:"bugAdded",description:"asdsa"}
//flux { type:"bugAdded",payload:{description:""}}
//3. Create a reducer
//reducer-->function (store,action)
//4. Setup store
let lastid = 1;
//3. Reducer
function reducer(state = [], action) {
    if (action.type == "bugAdded")
    {
        return [...state,
        {
            id: lastid++,
            description: action.payload.description,
            resolved: false

        }]
    }
    else
    {
        return state;
    }
}
//4. Setup Store
import { createStore } from 'redux';
const store=createStore(reducer);
//store.dispatch()
console.log(store.getState())
store.dispatch(
    {type:"bugAdded",
    payload:
    {
        description:"First Bug"
    }})
    

    console.log(store.getState())
