"use strict" // Treat all js code as new version
// datatypes type number,string,boolean,null,undefined,symbol(for uniqueness in react),object
console.log(typeof "sarthak")
console.log(typeof null)
console.log(typeof undefined)


//  types ==>.  Primitive(change in copy not in original )
// 7 types : String,number,boolean,null,undefined,symbol,BigInt

// Reference type/ Non Primitive(Values allocated directly in memory)
// Type of N.P. give object always (For functions it is object function)
//  Objects,arrays,functions

const id = Symbol("123")
const anotherId = Symbol("123")   // Unique
console.log(id==anotherId)

// Arrays [" "], {name:"SARTHAK",age: "20"}

