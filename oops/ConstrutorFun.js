//capital word ka matlab hai ki humm ise object/construtor bana rahe hai

function BankAccount(customername,balance=0){
    this.customerName = customername;
    this.AccountNumber = Date.now() ;
    this.Balance = balance;
    //methods
    this.deposit = function(amt){
        this.Balance += amt
    }
    this.withdraw =(amt)=>{
        this.Balance -= amt
    }
}
//new create construtor and intizine memory
const niteshAcc = new BankAccount('nitesh paswan',5000);
const Abhishek = new BankAccount('Abhishek paswan',1000)
Abhishek.Balance = 2000
niteshAcc.deposit(10000)
niteshAcc.withdraw(3000)
console.log(niteshAcc);
console.log(Abhishek);