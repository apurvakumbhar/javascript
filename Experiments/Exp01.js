//Activity 01:Const ,let,var difference
//const example
const z = 10;
//z=20;  //re assignment not allowed
console.log("const z:",z);
document.write("const z: " + z + "<br>");

//let example
let y=10;
y=20; //re assignment allowed 
//let y=30; //re declaration not allowed
console.log("let y:",y);
document.write("const y: " + y + "<br>");


//var example
var x=10;
var x=20;//re assignment allowed
x=30;//re declaration allowed
console.log("var x:",x);
document.write("const x: " + x + "<br>");


//Activity 02:Const ,let,var :use of block of scope

{
    var x=10;
}
console.log(x); //var is not block scoped
document.write("const x: " + x + "<br>");


{
    const y=40;
    console.log(y);//works
    document.write("const y: " + y + "<br>");

}
//console.log(y);//const is block scoped (it will not works outside the block)

{
    let z=50;
    console.log(z);//works
    document.write("const z: " + z + "<br>");

}
//console.log(z);//let is block scoped (it will not works outside the block)

//Activity 03:Display student information.
console.log("Student's information:");
document.write("Student's information: "+ "<br>");

let firstName=prompt("Enter First name of student:");
console.log(firstName);
document.write("Enter First name of student:"+firstName + "<br>");

let lastName=prompt("Enter last name of student:")
console.log(lastName);
document.write("Enter last name of student: " +lastName + "<br>");

console.log("Full name:",firstName+lastName);
document.write("Enter full name of student: "+ firstName+lastName + "<br>");

let age=Number(prompt("Student's age:"));
console.log(age);
document.write("Enter age of student: " +age + "<br>");

let rollNo=Number(prompt("Student's roll No.:"))
console.log(rollNo);
document.write("Enter roll no. of student: " +rollNo + "<br>");


//Activity 04:Check the number is even or odd;
let num=prompt("Enter number:");
console.log(num);
document.write("Enter number: " +num + "<br>");

if(num%2 == 0)
{
    console.log("Number is even.");
    document.write("Number is even "+ "<br>");

}
else{
    console.log("Number is odd.");
    document.write("Numbar is odd "+ "<br>");

}

//Activity 05:Check student is pass or fail.
let name=prompt("Enter student name:");
console.log(name);
document.write("Enter  name of student: " +name + "<br>");

let marks=Number(prompt("Enter marks of student:"));
console.log(marks);
document.write("Enter marks of student: " +marks + "<br>");

if(marks<35)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}

//Activity 06:Display numbers .
for(let i=1;i<=10;i++){
    console.log(i);
    document.write(+ i + "<br>");
}