//register
//send emial
//login
//get user data
//display user data
 

function register(callback){
    setTimeout(()=>{
        console.log('register');
        callback();
    },2000);
    
}
function sendemail(callback){
    setTimeout(()=>{
        console.log('send email');
        callback();
    },2000);
    
}
function login(callback){
    setTimeout(()=>{
        console.log('login');
        callback();
    },2000);
    
}
function getuserdata(callback){
    setTimeout(()=>{
        console.log('get user data');
        callback();
    },2000);
    
}
function display(){
    setTimeout(()=>{
        console.log('display user data');

    },2000);
    
}

console.log('other prosses');
//this is callback hell
register((callback)=>{
    sendemail((callback)=>{
        login((callback)=>{
            getuserdata((callback)=>{
                display();
            });
           
        });
        
    });
    
});
