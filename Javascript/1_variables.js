 const id=12345  //this can not be changed because it is constant
let email="h@gmail.com"
var account =12890
city="hydrabad"
let accountstate; //if you will not assign any value to the made variable that it will known as undefined

// id=2 not allowed

/*
   prefer not to use var because of issue in block scope and functional scope
*/
email="har@gmail.com"
account=135
city="delhi"

console.table([id,email,account,city,accountstate]);
