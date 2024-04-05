// let product = (a,b) => a*b;
// console.log(product(2,5));

// let student ={
//     name: "Gabriel",
//     class: "10th",
//     address: {
//         H_No : 22,
//         street: "Friends street",
//         city: "New Delhi"
//     },
//     cgpa: 10
// };
// console.log(student.name,student.class)
// console.log(student.address.H_No,student.address.street,student.address.city)
// console.log(student.cgpa);

// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// for(item in array){
//     if(array[item]==' '){
//         array[item]='empty string';
//     }
//     console.log(array[item])
// }

// let cop=[array];//gives array of array
// let cop=array;//gives copy of array
// console.log(cop);
//###################333333 SPREAD OPERATOR #######################33
// ###############FOR OBJECT##################
// const persons = {
//     name:'Atish',
//     age:25,
//     city: 'Yamunanagar'
// };
// console.log(typeof(persons))
// console.log(persons)
// console.log(persons.name,persons.age,persons.city)
// ###########################
// const copiedObject =persons;
// console.log(copiedObject)
// ###########################
// const spreadObj={...persons};
// console.log(spreadObj)
    // spreadObj.pincode=135001;
    // console.log(spreadObj)
// console.log(persons)
// persons.gender='M';
// console.log(persons)
// ###############FOR ARRAY##################
// const arr=[2,3,'P',92,2.23];
// const arrNum=[2,3,4,92,223];
// console.log(arr)
// console.log(typeof(arr))
// console.log(typeof(arrNum))
    // const copiedArray=arr;//reference passed
    // console.log(copiedArray)
    // copiedArray.push(412);
    // console.log(arr)
    // console.log(copiedArray)
//     arrNum.push('Manchurian')
// const spreadArray=[...arrNum];
// console.log(arrNum)
// console.log(spreadArray)
// spreadArray.push(606);
// console.log(arrNum)
// arrNum.push('Dry')
// console.log(arrNum)
// console.log(spreadArray)
//###################333333 REST OPERATOR ########################
// const myArray = (...param) => {
//     return param;
// };
// console.log(myArray(1,3,2,5,4));
//###################333333 DESTRUCTURING ########################
// let {name,age} = persons;
// console.log(name,age)
// let [NUM1,num2,num3]= arrNum;
// console.log(num2,num3,NUM1)
// console.log(name,age);
// console.log(myArray(NUM1,num2,num3));
// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



// key1 = 20;

// key3 = 123
// console.log(key1,key3)
// console.log(obj1.key1, obj1.key3)

    

// const promise1 = new Promise((resolve)=>{
//     console.log('a')
//     console.log('b')
//     setTimeout(()=>{
//         console.log('c')
//         setTimeout(()=>{
//             console.log('d')
//             resolve('e')
//         },0)
//     },3000)
// })
// promise1.then(res=>console.log(res))


// const promise1 = new Promise((resolve) =>{
//     console.log('a')
//     console.log('b')
//     setTimeout(()=>{
//         console.log('c')
//         setTimeout(()=>{
//             resolve('d')
//         },0)
//     },3000)
// })
// const promise2 = new Promise (resolve =>   resolve('e'))

// async function sampleFunction(){
//     const sample1 = await promise1;
//     console.log(sample1);
//     const sample2 = await promise2;
//     console.log(sample2)
    
// }
// sampleFunction();




