//immediately Invoked Function Expressions IIFE
(function chai(){ // named iife
    console.log("Db connected")
})();         // We use iife coz global scope ke pollution ko htane ke liye iife use hota hai
            // if to use two iife ek sath toh use ;



((name)=>{
    console.log(`Db connected two ${name} `);
})('sam')      