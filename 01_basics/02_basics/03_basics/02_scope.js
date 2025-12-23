//const { use } = require("react");

// Global scope is outside the{ } and local scope is code written inside of {}
//function one(){
//     const username ="Sarthak"
//     function two(){
//         const website ="Youtube"
//         console.log(username);
        
//     }
//    //console.log(website);
//     two()
    
// }
// one()
if (true) {
    const username = "sarthak"
    if(username==="sarthak"){
        const website ="youtube"
        console.log(website+username)
    }
    
}

// intresting concept
function addOne(num){
    return num+1 

}
console.log(addOne(5))
const addTwo = function(num){
    return num+2
}
addTwo(5)
console.log(addTwo(5))

