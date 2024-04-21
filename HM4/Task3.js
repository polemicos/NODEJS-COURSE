const bankAccount = {
    balance: 1000,
    get formattedBalance(){
        return `\$${this.balance}`;
    },
    set setBalance(val){
        this.balance = val;
        //this.formattedBalance();
    },
    transfer: function(source, target, amount){
        source.balance += amount;
        target.balance -= amount;
    }
};

//test
const account1 = Object.create(bankAccount);
const account2 = Object.create(bankAccount);

console.log(account1.formattedBalance); 
console.log(account2.formattedBalance); 

account1.transfer(account1, account2, 500);

console.log(account1.formattedBalance); 
console.log(account2.formattedBalance);


