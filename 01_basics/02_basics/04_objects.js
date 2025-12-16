//const tinderuser = new Object()  //. Both does same thing     Singleton object

const tinderuser = { }   // Non singleton object
tinderuser.id = "123abc"
tinderuser.name ="sarthak"
tinderuser.isLoggedIn = false
//console.log(tinderuser);

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        usersfullname:{
            firstname: "Sarthak",
            lastname : "Handa"
        }
    }
}
console.log(regularUser.fullname.usersfullname.lastname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));  // Less use


console.log(tinderuser.hasOwnProperty("isLoggedIn"));


// OBJECT DE-STRUCTURE
const course = {
    coursename: "jsscript",
    price: "999",
    instructor: "hitesh"
}
//course.instructor.     // to extract values use either of one method

const{instructor: inst} = course
console.log(inst);


// JSON API'S.  object without name or in format of arrays 

//keys,value in strings








