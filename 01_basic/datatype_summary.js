//primitive
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

/*const id=Symbol('123')
const b_id=Symbol('123')
console.log( id===b_id)//false
const BigNumber=532768643532843//it autmatically convert to BigInt

// Reference(Non primitive)
//Array,Objects,Functions
const heros=["shaktiman","baalveer"]
let myObj={
    name:"abc",
    age:22,
}
//type of null is also object

const myFunction=function(){
    console.log("hello");
}*/

// memory :two type 
//stack and heap 
// stack in used in all primitive type 
//heap is used in non-primitive

//stack
let myName="abc"
let anotherName=myName
anotherName="bcd"
console.log(myName)//abc
console.log(anotherName)//bcd
//here we get copy

//heap
let userone={
    email:"abc@gmail.com",
    upi:"abc@sbi"
}
let usertwo=userone//here variable is declared but the value will be the reference of userone itself
usertwo.email="bcd@gamail.com"
console.log(userone.email);//bcd...
console.log(usertwo.email);//bcd...