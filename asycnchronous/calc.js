let calc=(a,b,op) =>{
    if(op==="sum"){
    return a+b;
}

if (op==="multi"){
    return a*b;
}
}
let r1=calc(60,50,"sum");
console.log(r1)
let r2=calc(15,30,"multi");
console.log(r2)