class Account{
    min_bal=1000
    open_account(){
    console.log("account opened succesfully")
    }
    deposit_amount(){
        console.log("deposited succesfully")
    }
    get_statement(){
        console.log("printed the statement")
    }
    get_balance(){
        console.log("server is too busy try again later")
    }
    withdraw_amount(){
        console.log("insufficient fund maintain minimum balance to withdraw")
    }
    close_account(){
        console.log("Thank you for opening account with our bank")
    }
}
let a1=new Account();
console.log(a1);
a1.open_account();
a1.deposit_amount();
a1.get_balance();
a1.get_statement();
a1.withdraw_amount();
a1.close_account();