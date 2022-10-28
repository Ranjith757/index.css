let employees = [{ id: 20015, name: "Roman", sal: 55000 },
{ id: 20016, name: "Sam", sal: 55000 }]

let createEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp),
            callback()
    }, 2000);
}

let getEmployees = () => {
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
    }, 2000)
}

createEmployee({ id: 20017, name: "Pollard", sal: 55000 }, getEmployees)