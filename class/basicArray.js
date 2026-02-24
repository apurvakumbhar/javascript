//Array
let myArr=[0,1,2,3,4,5];
console.log(`My array values:`,myArr);
console.log(typeof(myArr));

const my_Arr=new Array(0,1,2,3);
console.log(typeof(my_Arr));
console.log(my_Arr[1]);

//Array methods
console.log(my_Arr.push(8));//add value into array

console.log(my_Arr.pop());//remove value

console.log(my_Arr.unshift(9));//it shifts all elements and added at first pos.

console.log(my_Arr.shift());

console.log(my_Arr.indexOf(3));

console.log(my_Arr.includes(2));

console.log(my_Arr.slice(1,2));