const language = ['java','python','c','c#']

// console.log(language.length); //4
// console.log(language[2]); //c
// language.push('javascript') //add javasrcipt
// language.unshift('c++') //add c++ in fisrt position
// language.pop() //remove item for last index
// console.log(language.pop());
// language.shift() //remove item for first index

// //for Loops
// for(let i = 0;i<10;i++){
//     console.log(i);
// }

const actor = [
    {
        name:'nitesh',
        pay: 230
    },
    {
        name:'nikhil',
        pay:342
    },
    {
        name:'abhishek',
        pay:1000
    }
]

// for(let i=0;i<actor.length;i++){
//     actor[i].pay = actor[i].pay - 10;
// }
// console.log(actor);

//forEach Loop
// actor.forEach((actors)=>{
//     actors.pay = actors.pay - 10;
// })
// console.log(actor);

//for of loops
// for(let actors of actor){
//     actors.pay = actors.pay - 10;
// }
// console.log(actor);

//filter in array

const students = [
    {
        name:'student1',
        mark:38
    },
    {
        name:'student2',
        mark:40
    },
    {
        name:'student3',
        mark:60
    }
]

// const fail = students.filter((student)=>{
//    // return true show all  item
//    //return false hide all item
//    return student.mark >= 40;
// //    if(student.mark>=40){
// //     return true
// //    }
// //    return false
// })
// const faild = students.filter((student)=> student.mark>=40)
// console.log(faild);

//Map method

const user = [
    {
        fname:'john',
        lname:'doe'
    },
    {
        fname:'jain',
        lname:'doe'
    }

]
//jo bhi aap yaha se return karte ho ssame wahi app ko mile gha like hello but length same hogi


// const finaluser = user.map((users)=>{
//    //return 'hello'
//    return {
//     fullname : `${users.fname} ${users.lname}`
//    };
// })
// console.log(finaluser);

//REDUCE METHOD

const movies = [
    {
        name:'Rone',
        pay:103
    },
    {
        name:'Roboat',
        pay:300
    },
    {
        name:'BGMI',
        pay:500
    }
]

//add money 
// var total = 0;
// movies.forEach((movie)=>{
//     total += movie.pay;
// })
// console.log(total);//this is very lenthy process

// const total = movies.reduce((acc,movie)=>{
// acc = acc + movie.pay
// return acc
// },0) //initizing value total is 0 it is accumulater
// console.log(total);

//Indexof method

const admin = [2,1,5];

const emp = [{
    name:'xyz',
    id:2
},
{
    name:'abc',
    id:8
},
{
    name:'fgh',
    id:9
}
]
// const isAdmin = admin.indexOf(emp.id) > -1;
// if(isAdmin == true){
//     console.log('this is admin')
// }
//console.log(admin.indexOf(emp.id));
//include
//console.log(admin.includes(emp.id));

//Find method
// const users = emp.find((user)=>{
//     if(user.id === 2){
//         return true
//     }
//     return false;
// })
// console.log(users);
//return user.id ===2       

//Destructuring object Extract data arrays and object

const [student1,student2,student3] = students;
console.log(student1);

const users = [
    {
        fname:'nitesh',
        lname:'paswan'
    },
    (user)=>{
        console.log('i am part of users/bject',user);
    }
]
const [newuser,setUser] = users;
console.log(newuser);
setUser({fname:'nikhil',lname:'paswan'})

//spread or rest method
// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest proper