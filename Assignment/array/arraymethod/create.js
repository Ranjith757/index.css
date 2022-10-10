let employee=[{id:101,name:"roman",sal:25000},
{id:102,name:"reigns",sal:45000}]
function createemployee(emp){
employee.push(emp)
}
createemployee({id:103,name:"ravan",sal:45000})
console.log(employee)