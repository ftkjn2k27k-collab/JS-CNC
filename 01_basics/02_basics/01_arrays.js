const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);
// // Array methods
// // myArr.push(6)
// // myArr.pop()   // removes last element
// console.log(myArr);
// // myArr.unshift(9)    // Will add 9 in the start
// // myArr.shift()      // WIll remove unshift
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(1));
// const newArray = myArr.join()    // join will convert it into string 
// console.log(newArray);
// console.log(typeof newArray);

console.log("A",myArr);
const myn1 = myArr.slice(1,3);   // returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.

console.log(myn1);
console.log("B",myArr); 

const myn2 = myArr.splice(1,3);   // returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.


console.log("C",myArr);

console.log(myn2);




