/*. Large Shirts: 
Modify the make_shirt() function so that shirts are large by default, with a message that reads 
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message.*/

function make_shirt(size:string, msg:string){
    return size + msg
}
let myfunct=make_shirt("large"," I love typeScript")

console.log (myfunct);

//Large as default:
function make_shirt1(msg:string,size:string="large"){
    return size + msg
}
let myFun1=make_shirt1(" I Love TypeScript")

console.log(myFun1);

//medium as default:
function make_shirt2(msg:string,size:string="medium"){
    return size + msg
}
let myFun2=make_shirt2(" I Love typeScript")
console.log(myFun2);

//any size:
function make_shirt3(msg:string,size:string){
   return msg + size 
}
let myFun3=make_shirt3("any size"," I Love TypeScript")

console.log(myFun3);
