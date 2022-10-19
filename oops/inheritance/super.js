class Account{
    constructor(name,email){
        this.acc_Name=name;
        this.acc_Email=email;
    }
}
class Saving_account extends Account{
    constructor(id,name,email,amount){
        super(name,email);
        this.acc_Id=id;
        this.acc_Amount=amount;
    }
}
let a1=new Saving_account(655220,"good man","mangoood@gmail.com",50000);
let a2=new Saving_account(655220,"good human","humangoood@gmail.com",50000);
console.log(a1)
console.log(a2)
