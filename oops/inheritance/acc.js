class Account{
min_bal=1000;
get account_details(){
    console.log("account details are displayed")
}
}
class saving_Account extends Account{
    deposit_amount(amount){
        console.log(this.min_bal+amount);

    }
}
let a1=new saving_Account();
console.log(a1);
a1.getaccount_details;
a1.deposit_amount(10000);
class Current_account extends Account{
min_bal=100000;
deposit_amount(amount){
    console.log(this.min_bal+amount);
}
}
let a2=new Current_account()
console.log(a2)
a2.getaccount_details;
a2.deposit_amount(25000);
