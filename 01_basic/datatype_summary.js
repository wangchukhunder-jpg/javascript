//primitive
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const id=Symbol('123')
const b_id=Symbol('123')
console.log( id===b_id)//false
const BigNumber=532768643532843n//it autmatically convert to BigInt

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
}