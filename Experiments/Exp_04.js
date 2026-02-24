function submitButtonClick(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
//get values using DOM
function funName(){
    //clear old msg
    document.getElementById('nameError').innerHTML="";
    document.getElementById('emailError').innerHTML="";
    document.getElementById('passwordError').innerHTML="";

    let isValid =true;
    if (name == empty){
        document.getElementById(nameError.innerHTML="Name field is required")
        isValid=false;
    }
    if (email == empty){
        document.getElementById(emailError.innerHTML="email field is required")
        isValid=false;
    }
    //act: @
    if (password == empty){
        document.getElementById(passwordError.innerHTML="password field is required")
        isValid=false;
    }

}
}