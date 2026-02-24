//synchronous
console.log("start");
function Add(a,b)
{
    return a+b;
}
let result =Add(3,2);
console.log(result);
console.log("End");

//Asynchronous
console.log("start");
setTimeout(()=>{ //it is asyn , it waits 2 sec meanwhile js print end after 2 sec it gets inside timeout
console.log("Inside Timeout")
},2000);//2000--seconds
console.log("End");
