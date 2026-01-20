console.log(2*2)
console.log(2/2)
console.log(2+2)
console.log(2-2)

let str1="Apurva ";
let str2="Shradhha";
console.log(str1+str2)

//imp note:Only javascript automatically convert a string to number in arithmatical operations.
console.log("1"+2)
console.log("1"+"2+2")
console.log("1"+3+"2")

console.log(true)//true is just true.JavaScript prints it directly.
console.log(+true)//here + is not addition sign it converts values to number ,the value true becomes 1.
console.log(+"")//+ sign converts values to number ,but the value is empty so it gives output 0.
//why does this happen?

let gameCounter=100;
gameCounter++
console.log(gameCounter)

let scoreCounter=200;
++scoreCounter
console.log(scoreCounter)