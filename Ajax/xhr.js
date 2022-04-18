const url = 'https://jsonplaceholder.typicode.com/users';

function myAxios(method,url,body = null){
    const xhr = new XMLHttpRequest();

    xhr.open(method,url);
    xhr.responseType ='json';
    //content ko bat rah ahai ki kis type ka deta lena hai isme default type/plain hota hai
     xhr.setRequestHeader('content-Type','application/json');
    xhr.onload=()=>{
        if(xhr.status >= 400){
            console.log('failed');
        }
        else {
            console.log(xhr.response);
        }
        
    }
    xhr.onerror=(err)=>{
        console.log(err);
    }
    //ye send data ko string me convert kar raha hai
    xhr.send(JSON.stringify(body));
}

//myAxios('GET',url)

myAxios('POST',url,{
    name:'nitesh',
    job:'web devlopment',
    salary: "$5565"
});