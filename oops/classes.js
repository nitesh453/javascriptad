class BankAccount {
    //value = proppery
    //function  = methoad
    customername;
    accountNumber= Date.now();
    balance =0;

    constructor(customerName,Balance = 0){
        this.customername = customerName;
        this.accountNumber= Date.now();
        this.balance = Balance;
    }//construcor jo value dikhani hai aur space leti hai

    deposit(amt){
        this.balance += amt;
    }//ye sabi prototype hai methoads hai jo space nhi lete 

    withdraw(amt){
        this.balance -= amt;
    }
}

const Nitesh = new BankAccount('nitesh',1000)
const Nikhil = new BankAccount('Nkhil paswan',200)
Nitesh.deposit(3000)
Nitesh.withdraw(4000)

Nikhil.deposit(7000)
Nikhil.withdraw(3000)
console.log(Nitesh);
console.log(Nikhil);
//hosting not include

hello();//this is a js hoisting hai but ye class ke sath nhi hota
function hello(){
    console.log('hello');
}