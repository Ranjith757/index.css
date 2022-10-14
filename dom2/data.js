let employees = [
    { id: 10001, name:"Roman", salary: 100000,Designation:"wwe superstar" },
    { id: 10002, name:"Jagan", salary: 150000,Designation:"cm " },
    { id: 10003, name:"Bharathi", salary: 165000,Designation: "cm wife" },
    { id: 10004, name: "Rajashekar", salary: 105000,Designation:"former cm" },
    { id: 10005, name: "vijayamma", salary: 100000,Designation:"former cm wife" }
]

function display_Data() {
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>
                            <td>${employee.Designation}</td>

                        <tr>`
    }

    document.getElementById('good').innerHTML = rows
}