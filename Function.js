const user = function emp(data){
    console.log('hello user',data);
}
user('nitesh paswan')

const arrow=(data)=>{
    console.log('this is arrow function',data);
}
arrow('arrow=>')

//default parameter
function student(name='unknown',roll){
    console.log(`the student name is ${name} and Rollno. ${roll}`);
}
//student('nitesh',4339)
//student()