let myPromises = new Promise((resolve,rejected) =>{
    let success=false;
    if(success){
        resolve("Data fetch success");
    }else{
        rejected("Error while fetching data");
    }
});
myPromises.then((result)=>{
    console.log(result) ;
}).catch((error)=>{
    console.log(error);
});

const myPromises1=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        console.log("Asynchronous Task complete")
        resolve()
    },3000);
})
myPromises1.then(()=>{
    console.log("Promise consume");
});

const myPromises3=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve({username:'JS',id:21})
    },2000);
})
myPromises3.then((user)=>{
    console.log(user);
})

// fetch('URL')--returns promises (syntax)
fetch("https://jsonplaceholder.typicode.com/users/3") 
.then((Response)=>{
    return Response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})