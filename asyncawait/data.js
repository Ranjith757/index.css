let employees = [{ id: 1021, name: "Rajan", sal: 465000 },
{ id: 1022, name: "Bheeman", sal: 565000 }]

let createEmployee = (emp) => {
    setTimeout(() => {
        employees.push(emp)
        get_Employees()
    }, 500)

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
    }, 600)
}

let Employee = async () => {
    await createEmployee({ id: 1033, name: "Paalan", sal: 655000 })

}
Employee()