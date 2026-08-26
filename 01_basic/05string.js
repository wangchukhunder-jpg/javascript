// string intrpolation
//const name="abc"
//const age=13
//console.log(`hello my name is ${name} and my age is ${age}`)
//another way to declare string 
const myname=new String('abcd-efgh')//here you use object
/*console.log(myname[0]);//a
console.log(myname.__proto__);//{} obj
console.log(myname.length);// 4 ,there are many methods of string you can study it
console.log(myname.toUpperCase);//ABCD
console.log(myname.charAt[1]);//b
console.log(myname.indexOf(b));//1*/
const newstring=myname.substring(0,4)
console.log(newstring);//abcd

const anotherstring=myname.slice(-8,4);//it also does the same thing but main point is it also take negative values
console.log(anotherstring);

const newstringOne="   abcdefgh    ";
console.log(newstringOne);
console.log(newstringOne.trim());//trim remove the starting and end spaces,there is also trim start and trimend


const url="https://abc.com/abc%20def";
console.log(url.replace('%20','-'));
console.log(url.includes('abc'));//true
console.log(myname.split('-'));