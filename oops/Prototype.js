//prototype yaha karta hai ki jo methad memory space leta hai kiski jarurat nhi hai to usee vo prototype me le leta hai jese hum deposit ko kar rahe ahai

const username = document.querySelector('#username')
const balance = document.querySelector('#balance')
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')
const from = document.querySelector('form')
const form1 = document.querySelector('#form1')
function BankAccount(customername,balance=0){
    this.customerName = customername;
    this.AccountNumber = Date.now() ;
    this.Balance = balance;
    //methods
    // this.deposit = function(amt){
    //     this.Balance += amt
    // }
    // this.withdraw =(amt)=>{
    //     this.Balance -= amt
    // }
}

const niteshacc = new BankAccount('nitesh',5000)

BankAccount.prototype.deposit= function(amt){
   this.Balance += amt
}
//yaha per hum arrow function use nhi kar skte kyuki this function arrow ke sath windows se balance function dudhe ga aur use nhi mile ga isliye fun(use)
//niteshacc.deposit(3000);

console.log(niteshacc);
BankAccount.prototype.witdraw = function(amt){
    this.Balance -= amt
}
from.addEventListener('submit',(e)=>{
    e.preventDefault();
   var data =  new BankAccount(username.value,balance.value)
   
   console.log(data);
  
})

