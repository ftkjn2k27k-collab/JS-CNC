// Singleton
//Object literals
// const mySym = Symbol("Key1")
 const Jsuser = {
    name: "Sarthak",
    "full name ": "Sarthak Handa",
    [mySym] : "myKey1",
    age: 20,
    location : "Mandi",
    email : "@gmail.com",
    isLoggedIn : false,
    LastLoggedIn : [ "Monday","Saturday"]

}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);


Jsuser.email = "sarthakhanda2005@gmail.com"
//Object.freeze(Jsuser)      // No change after we use Object.freeze()
console.log(Jsuser);


Jsuser.greetings = function(){
    console.log("Hello user ");
    
}

Jsuser.greetingsTwo = function(){
    console.log(`Hello user,${this.email}` );
    
}
console.log(Jsuser.greetingsTwo);


// use . in most cases in some  [ ],SPECIAL symbol case 









