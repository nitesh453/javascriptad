const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url).then((res)=>{
   console.log(res.json()); 
});