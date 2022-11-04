function BankAccount(name,balance=0){
    this.cutomername = name;
    this.account = Date.now();
    this.Balance = balance;
}

BankAccount.prototype.deposit = function(amt){
    this.Balance += amt
}
BankAccount.prototype.withdraw = function(amt){
    this.Balance -= amt
}

const Nitesh = new BankAccount('nitesh',1000);
console.log(Nitesh);

//saving Account

function savingAccount(name,balance=0){
    BankAccount.call(this,name,balance)
    this.DailyLimit = 20000
}

savingAccount.prototype = Object.create(BankAccount.prototype);

savingAccount.prototype.loan = function(amt){
    this.Loan = amt;
}
const Nikhil = new savingAccount('Nikhil',1000)
Nikhil.loan(30000)
Nikhil.deposit(2000)
console.log(Nikhil);

//current account

function CurrntAccount(name,balance=0){
    BankAccount.call(this,name,balance)  
    this.DailyLimit = 50000

}

CurrntAccount.prototype = Object.create(BankAccount.prototype)

CurrntAccount.prototype.TakeLoan = function(amt){
    console.log('take loan amt'+amt); //isko niche rakhna hai
}

const Abhishek = new CurrntAccount('Abhishek',200)
Abhishek.deposit(10000);

console.log(Abhishek);

class car{
    carColor;
    carmodelNumber = Date.now();

    constructor(color){
        this.carColor = color
    }

    price(amt){
        this.Price =amt
    }
}

const tata = new car('Red');
tata.price(500000)
console.log(tata);

class newCar extends car{
    tyre;

    constructor(wheels,color='Black'){
        super(color)
    this.tyre = wheels
        
    }

    Engine(en){
        console.log('this Engine is: '+en);
    }
}

const Honda = new newCar(5,'Blue');
Honda.Engine('Es-60')
Honda.price(1000000)
console.log(Honda);