class Bank{
    acc_id;
    acc_name;
    acc_amount;
    acc_address;
    acc_phone;
    constructor(id,name,amount,address,phone){
        this.acc_id=id;
        this.acc_name=name;
        this.acc_amount=amount;
        this.acc_address=address;
        this.acc_phone=phone;


    }
}
let a1=new Bank (001,"good",15250,"kuppam",9154460166)
console.log(a1);
let a2=new Bank (002,"excellence",17500,"kuppam",9618851354)
console.log(a2);
