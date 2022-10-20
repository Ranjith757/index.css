class Account{
get_Account_details(){
    console.log("Account class get Account_details method")
}
}
class Saving_Account extends Account{
    get_Account_details(){
        console.log("saving_account class get Account_details method")
    }
}
let a1=new Saving_Account()
a1.get_Account_details()