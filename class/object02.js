//singleton object
const user=new Object;
console.log(user);
const user1={};//non singleton object

user1.id=1234;
user1.name="Apurva";
user1.is_login=true;
console.log(user1);

//object inside the object
const user3={
    email:"apurva@",
    username:{
        fullname:{fname:"Apurva",sname:"Kumbhar"}
    }
};
console.log(user3.username.fullname.fname);
