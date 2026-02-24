const superHeroes = ["Batman","Ironman","Spiderman"]
const a=[1,2,3];
superHeroes.push(a);
console.log(superHeroes);

console.log(superHeroes[2]);
console.log(superHeroes[3][2]);

//Array concate
const ar=[1,2,3,4];
console.log(superHeroes.concat(ar));//concate

//nested array
const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(arr1);

const arr2=arr1.flat(Infinity);//flattedned all levels no matter how we 
console.log(arr2);

const arr3=arr1.flat(1);//how we a nested array should be flattened default value is 1 
console.log(arr3);

//flat does not change original array it returns new array.useful when working we nested data

//data scripting using this method
console.log(Array.isArray("Tejshree"));//check given value is array or not
console.log(Array.isArray("Batman"));

console.log(Array.from("Tejshree"));//covert an iteratable obj like string, map, set into an array

console.log(Array.from({name:"tej"}));

console.log(Object.keys({name:"tej"}));
console.log(Object.values({name:"tej"}));
console.log(Object.entries({name:"tej"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))//create new array from given value no matters how many 
//Imp(interview):diff bet :Arrayof->convert value,arrayfrom-->converts interable

//fun,string,basic array--->oral


