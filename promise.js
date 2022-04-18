


function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           // return reject("thier is connecton error");
            console.log('register');
            resolve();
            
        },2000);
    })
    
    
}
function sendemail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('send email');
            resolve();
        },2000);
    })
    
    
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('login');
            resolve();
        },2000);
    })
    
    
}
function getuserdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('get user data');
            resolve();
        },2000);
    })
    
    
}
function display(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('display user data');
             resolve();
        },2000);
    })
    
    
}

console.log('other prosses');

/*register()
.then(sendemail)
.then(login)
.then(getuserdata)
.then(display)
.catch((err)=>{
    console.log('Error:',err);
}); */

//async and await

async function authenticate(){
    await register();
    await sendemail();
    await login();
    await getuserdata();
    await display();
}
authenticate().then(()=>{
    console.log('all set');
}).catch((err)=>{
    console.log('error:',err);
});


/* async function authenticate(){
    try{
        const message = await register();//this is resolve message
        await sendemail();
        await login();
        await getuserdata();
        await display();
        console.log(message);
    } catch(err) {
        console.log(err);
        throw new Error();
    }
    
}
authenticate().then(()=>{
    console.log('all set');
}).catch((err)=>{
    console.log('error:',err);
}); */