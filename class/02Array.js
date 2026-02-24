const superheros=["batman","spiderman","Ironman","thor"];
const a=[0,1,2,3];

superheros.push(a);
console.log(superheros);

console.log(superheros[3]);
console.log(superheros[2][3]);

//Array concat
const arr=[1,2,3,4];
console.log(superheros.concat(arr));

//Nested array
const arr1=[1,2,3,[4,5,6],7,8,[6,7,[4,5]]];
console.log(arr1);

const arr2=arr1.flat(Infinity);
console.log(arr2);

const arr3=arr1.flat(1);
console.log(arr3);

//how the nested array specifies ,how did the array should be flattened
//flattened all levels no matter how we
//flat does not change original array it returns new array useful when working with nested data 

//datascripting using this methods
console.log(Array.isArray("Apurva"));//check given value is array or not
console.log(Array.isArray("thor"));

console.log(Array.from("Apurva"));
//converts an iteratable objects like string set map into an array

console.log(Array.from({name:"Apurva"}));

console.log(Object.keys({name:"Apurva"}));
console.log(Object.values({name:"Apurva"}));
console.log(Object.entries({name:"Apurva"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//create new array from given value no matters how many
//IMP_QUE:difference between array.of=coverts values,array.from =converts iteratable
//IMP:array ,string,object,function