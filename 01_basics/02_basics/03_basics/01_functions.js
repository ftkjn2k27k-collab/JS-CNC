// function sayMyName (){
//     console.log("S");
//     console.log("H");

    
// }
// sayMyName()
// function addTwoNO(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNO(3,"5")

// function addTwoNumbers(number1,number2){
//     // let result = number1+number2
//     // return result
//     return number1+number2        // Nothing is evaluated after return is used
// }
// const result = addTwoNumbers(3,5)
// console.log("Result: ",result);


// function loginUserMessage(username){  // We cana define username = sam here and it will return sam just logged in 
//     if(!username){   // !undefined is same as username===undefined
//         console.log("Please enter a username");
//         return    // it wont evaluate below code
        

//     }
//     return `${username} just logged in `

// }
// console.log(loginUserMessage("Sarthak"));    // This will overwrite above 


function calculateCartPrice(...num1){ // (val1,val2...num1) => this will give output 300,400
    return num1

}
console.log(calculateCartPrice(100,200,300,400));

// Function with objects
const user ={
    username: "Sarthak",
    price: 199
}
function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handelObject(user)
handelObject({
    username: "sam",
    price: 199

})
const myNewarray =[100,200,400,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewarray))
