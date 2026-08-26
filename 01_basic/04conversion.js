console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true because comparison convert null to a number treating it as 0
console.log(undefined>0) //it will give false for any comparison
//=== it stricly check not only with number but with datatype also
console.log("2">=2)