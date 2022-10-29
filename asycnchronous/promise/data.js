let employees = [{ id: 1101, name: "Rebecca", sal: 103000 },
{ id: 1102, name: "Simron", sal: 125000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            flag ? resolve("Data Inserted Successfully") : reject("Data Failed");
            employees.push(emp)
        }, 2000)

    });
}
let get_Employees = () => {
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                            </tr>`
        }
        //document.getElementById('tbody_Data').innerHTML = "GM"
        document.getElementById('tbody_Data').innerHTML = rows
    }, 1000)
}
createEmployee({ id: 1103, name: "Pearson", sal: 105000 })
    .then((msg) => {
        console.log(msg)
        get_Employees();
    })
    .catch((err) => {
        console.log(err)
    })