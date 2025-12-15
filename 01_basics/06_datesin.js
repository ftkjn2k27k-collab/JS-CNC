// let myDate = new Date()
// console.log(myDate.toString())
// // console.log(myDate.toDateString())
// // console.log(myDate.toLocaleDateString())
// // console.log(typeof myDate)         // Date is object datattype
// // let myCreatedDate = new Date(2023,3,21)   // Month starts from 0 in this format
// // console.log(myCreatedDate.toDateString())
// let myCreatedDate = new Date("01-14-2025")     // Date in milliseconds  Month starts from usual
// console.log(myCreatedDate.toLocaleDateString())
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));  // For date in  seconds
 let newDate = new Date()
// console.log(newDate.getMonth());  // Month starts from 0
newDate.toLocaleDateString('default',{
    weekday: "long",                                   //. Use control+ space to speecify 
})


