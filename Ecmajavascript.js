var product ='laptop';
// to var poplution create karta hai ise hum window.product se get kar skte hai
console.log(product);
let products = 'realme phone';
//using arrow function to sort the function
const additon = a=> console.log(a+a); 
  additon(7)

  //this hum object ke undar kate hai object ki propertie acquire karne ke liye



  //template literals aka backticks

    const fname = "nitesh";
    const lname = "paswan";
     console.log(`${fname} ${lname}`);

 //enhanced property shorthand
     const nitesh = "nitesh";
     const paswan = "paswan"
   const user={
       nitesh,
       paswan
   }
   //agar property aur value same hai to ak bar me likh skte ho
   console.log(user);

//Destructuring
  
//    const users ={
//        name:"nikhil",
//        age:89
//    };

//    const { name: fullname ,age } = users;
//      console.log(fullname);
//      console.log(age);

  const data = ['abhishek',83,'engineer'];
  
  const [ name, age ,profession] = data;
    console.log(age);

//spread
    //ye copy karta array ki ya object ki
    const laguages= ['c','c++','java','python'];

    const newLanguages = [...laguages,'javascript'];
      console.log(newLanguages);

  const settings = {
      volume:49,
      brights:48
  }    
//ye dono ak refrence ko point kate hai to iskiye update karne par dono me change ayega esa na ho isliye spread ka use krte hai
    //  const newsetting = settings;
    //  newsetting.volume = 38;
    const newsetting = {...settings}; //seloo copy
    newsetting.volume = 9
    console.log(settings);
     console.log(newsetting);

 //  Rest ... rest used with function but sperad with array
   //rest work as array inarr
 const additem= (a,b,c)=>{
   console.log(a+b+c);
 }
 additem(3,4,6);
 const addRest = (...item)=>{
     console.log(item);
 } //is array ko hum loop aur reduce
 addRest(4,56,26,7,3,73,3);

 //for of loop
 //array  string object set map

    const number =[3,5,6,4,2,15,5]
    const language = 'javascript';
    const person ={
      name:'nitesh',
      city:'rishikesh',
      age:30
    }
  //forin
   for(const num in number){
     console.log(num);
   }  
   for(const lang in language){
     console.log(lang);
   } 
   for(const entries in person){
     console.log(entries);
   }

 //forof
 for(const num of number){
  console.log(num);
}  
for(const lang of language){
  console.log(lang);
} 
for(const entries of Object.entries(person)){
  console.log(entries);
}  
for(const [key,value] of Object.entries(person)){
  console.log(key + '-' + value);
}

// promises its immportant
  
  function login() {
    return new Promise((resolve,reject)=> {
       setTimeout(()=>{
            console.log('login....');
            resolve();    //(data)
       },0)
    })
  }
  login().then(()=>{   //data
    console.log('register...');
  }).catch((err)=>{
    console.log(err);
  })


 // find array method
 
    const users = [{name:'nikhil'},{name:'nitesh'}];
      const userFind = users.find((user)=>{
          return user.name === 'nitesh'
       })
       console.log(userFind); // the findIndex mathed return index inthe object

// set
  //const uniqueNumber = new Set();
  // uniqueNumber.add(4);      //sets store always unique value
  // uniqueNumber.add(6);
  // uniqueNumber.add(4);
  // console.log(uniqueNumber);
     
    const numbers = [4,5,6,4,7,6];
    const uniqueNumber = new Set(numbers)
     console.log(Array.from(uniqueNumber)); //the array.from convet set into array

//map

   const urls = new Map();  //map use for lookup to see the data is faster than anoher methods
   urls.set('devlopment','dev.example.com')
   urls.set('product','pro.example.com')
   console.log(urls.get('product'));
   console.log(urls.size);

   
//Es6 Modules
       //export import

