let emp =
{
    id: 101,
    name: "Roman",
    email: "roman757@gmai.com"

}
let details =
{
    email: "roman123info@gmail.com",
    sal: 450000,
    location: "paris",
}
let emp_details = { ...emp, ...details }
console.log(emp_details)