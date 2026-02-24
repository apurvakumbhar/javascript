//object literals-key-value pair
let my_obj = {
  name: "Apurva",
  age: 21,
  location: "India",
  email_id: "apurva@gmail.com",
  is_login: true,
  last_login_day: "Tuesday",
};
//there are few types of object,1 object literals, 2 constructor, 3 singleton
//vimp--
//when you create constructor it create singleton object,it means itself object
//when we create object singleton will not creates.
console.log(my_obj.email_id);
console.log(my_obj);
//symbol eg
const mySymbol=Symbol("JS");
const my_obj2 ={
  [mySymbol]:"Ak"
}
console.log(my_obj2);
console.log(typeof(my_obj2));
my_obj.email_id="abc@gmail.com";
console.log(my_obj.email_id);
//Object.freeze(my_obj);//used when we don't want to change object property.
my_obj.email_id="xyz@mail.com";

my_obj.greeting = function () {
  console.log("Hello JS!");
};
console.log(my_obj.greeting());


console.log();