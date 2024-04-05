// The word async before a function makes the function return a promise
'use strict'
// async function promise1(){
//     return 'hello';
// }
// console.log(promise1 ());
// console.log(typeof(promise1()));
// ###################-Is-same-as-###################
// function promFunc(){
//     return Promise.resolve('Hello')
// }
// console.log(promFunc())
// console.log(typeof(promFunc()))

// async function myFunction(){
//     let tipu = new Promise((resolve,reject) =>{
//         resolve("I love Javascript");
//     })
//     console.log(await tipu)
// }
// myFunction()
// async function myFunction(){
//     let pappu= new Promise((resolve,reject) =>{
//         setTimeout(()=>{resolve("I am a Javascript Programmer")},3000)
//     })
//     console.log(await pappu)
// }
// myFunction();
