// const user={
//     username: "Sarthak",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`)
//         console.log(this); // Current variables ki baat krta hai
        
        
//     }

// }
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this) 

// this works good with objects but not with functions
// function chai(){
//     let username= "sarthak"
//     console.log(this)
//     //console.log(this.username) ==> this whill be undefined
// }
// chai()

// arrow fn.
const chai =()=>{
    let username= "sarthak"
    console.log(this)

}
chai()

const addTwo =(num1,num2)=>{
    return num1+num2

}
console.log(addTwo(3,4));
// Implicit return 
//const addTwo =(num1,num2)=>  (num1+num2) // no need to type return keyword with () but with {}

// To return object
//const addTwo =(num1,num2)=>  ({username:"Sarthak"})


