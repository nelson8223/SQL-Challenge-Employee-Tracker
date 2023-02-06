const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const consoleTables = require("console.table");

var managers = [];
var roles = [];
var employees = [];

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Online1989!',
      database: 'employee_db'
    },
    console.log(`Connected to the courses_db database.`)
  );

  const getManager = () => {
  connection.query(`SELECT manager, manager-is FROM manager`, (err, result) => {
  if (err) throw err;
  managers = [];
  for (let i = 0; i< result.length;i++) {
    const managers = res[i].manager;
    const manager_id = res[i].manager_id;
    name: managers
    value: manager_id
}
manager.push(newManager);

return managers;


})}

const getRole = () => {
  connection.query(`SELECT role, role_id FROM role`, (err, result) => {
  if (err) throw err;
  roles = [];
  for (let i = 0; i< result.length;i++) {
    const roles = res[i].roles;
    const roles_id = res[i].roles_id;
    name: roles
    value: roles_id
}
roles.push(newRoles);

return roles;


})}

const getEmployees = () => {
    connection.query(`SELECT first_name, last_name, id FROM employee`, (err, result) => {
    if (err) throw err;
    employees = [];
    for (let i = 0; i< result.length;i++) {
      const employees = res[i].employees;
      const employees_id = res[i].employees_id;
      name: employees
      value: employees_id
  }
  employees.push(newEmployees);
  
  return employees;
  
  
  })}

  const init = () => {
getEmployees();
getManager();
getRole();

inquirer
.prompt ([
    {
        type: 'input',
        name: 'question',
        message: 'Please pick an option',
        choices: [
          "View Employees",
          "View Managers",
          "View Roles",
          "View Salary",
          "View Departments"
]
      }
      .then((answer) => {
     switch (answer.init) {
        case "View Employees": allEmployee();
        break;

        case "View Manager": allManager();
        break;
        

        case "View Roles": allRoles();
        break;
        
        case "View Salary": allSalary();
        break;

        case "View Departments": allDepartments();
        break;

        case "End": connection.end();
        break;
     }
      
    

    const allEmployee = () => {

        inquirer
       .prompt ([
      {
        type: 'list',
        name: 'employee',
        message: 'Are you a manager',
        choices: managers
      },
    ])
    
  
      .then((answer) => {
   connection.query(`SELECT first_name, last_name, id FROM employee,
   WHERE employees_id = $(answer.employees)`, (err, result) => {
    if (err) throw err;
    console.table(res);
    init()

},
   )

const allRoles = () => {

  inquirer
 .prompt ([
{
  type: 'list',
  name: 'employee',
  message: 'What is your Role?',
  choices: [
      "Manager",
      "Software engineer",
      "Legal clerk",
      "Finance clerk",
  ]
},
])


.then((answer) => {
connection.query(`SELECT roles_id, id FROM employee,
WHERE roles_id = $(answer.Roles)`, (err, result) => {
if (err) throw err;
console.table(res);
init()

},
)

const allDepartments = () => {

  inquirer
 .prompt ([
{
  type: 'list',
  name: 'department',
  message: 'Pick a Department',
  choices: [
      "Legal",
      "Engineering",
      "Sales",
      "Finance",
  ]
},
])


.then((answer) => {
  if(answer.departments === "Legal") {
connection.query (`SELECT first_name, last_name, id FROM employee,
JOIN role ON roles_id = role.role_id
JOIN department ON role.department_id = department.department_id and department.role = "Legal " `, (err, result) => {
if (err) throw err;
console.table(res);
init()
},
)}
else if(answer.departments === "Engineering") {
  connection.query (`SELECT first_name, last_name, id FROM employee,
  JOIN role ON roles_id = role.role_id
  JOIN department ON role.department_id = department.department_id and department.role = "Engineering " `, (err, result) => {
  if (err) throw err;
  console.table(res);
  init()
  }
  )}

  else if(answer.departments === "Sales") {
    connection.query (`SELECT first_name, last_name, id FROM employee,
    JOIN role ON roles_id = role.role_id
    JOIN department ON role.department_id = department.department_id and department.role = "Sales " `, (err, result) => {
    if (err) throw err;
    console.table(res);
    init()
    
    
    

    addEmployee = () => {
      inquirer
 .prompt ([
    {
     type: "list",
     name: "fist_name",
     message: "What is your first name?"
    },
    {
    type: "list",
     name: "last_name",
     message: "What is your last name?"
    },
    {
      type: "list",
      name: "role",
      message: "What is your position",
      choices: roles
     }
    
  ])
  
    
  .then((answer) => {
    if(answer.employees === "none")
    connection.query(`INSERT into employee(first_name,last_name, role_id,manager_id)
    Values (${answer.first_name}, ${answer.last_name}, ${answer.roles}, null`,  (err, result) => {             
    if (err) throw err;
    console.table(res);

    init()
    



    


  








      
    })})}})}})}})}})}})])}
