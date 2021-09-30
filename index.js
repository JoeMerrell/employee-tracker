
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employees_db"
});



 // start terminal questions
inquirer
  .prompt({
    type: "list",
    message: "Select an action:",
    name: "option",
    choices: ["add", "view", "remove"]
  })
  .then(function(answer) {
    console.log(answer);
    if (answer.option === "add") {
      inquirer
        .prompt({
          type: "list",
          message: "Add what?",
          name: "option",
          choices: ["department", "role", "employee"]
        })
        .then(function(answer) {
            console.log(answer);

            // Adding department option
             if (answer.option === "department") {
              inquirer
                .prompt({
                  type: "input",
                  message: "Name of the department?",
                  name: "option"
                })
                .then(function(answer) {
                  console.log(answer);
                  connection.connect();
    
                  connection.query(
                    "Add to department set?",
                    { name: answer.option },
                    function(error, results, fields) {
                      if (error) throw error;
                      console.log(results);
                    }
                  );
                });
            }

          // adding role option
          else if (answer.option === "role") {
            inquirer
              .prompt([{
                type: "input",
                message: "What role would you like to add?",
                name: "option"
              },{
                  type: "input",
                  message: "Salary for this position?",
                  name: "amount"
              },{
                type: "input",
                message: "What department does this role belong to?",
                name: "departmentId"
              }])
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "Add to role set?",
                  { title: answer.option, salary: answer.amount, department_id: answer.departmentId },
                  function(error, results, fields) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
   
          }
          
          // Adding employee option
          else if (answer.option === "employee") {
            inquirer
              .prompt([
                  {
                type: "input",
                message: "What is the employee's first name?",
                name: "first"
              },
                  {
                type: "input",
                message: "What is the employee's last name?",
                name: "last"
              },
                  {
                type: "input",
                message: "What is this employee's role?",
                name: "role"
              },
                  {
                type: "input",
                message: "Who is this employee's manager?",
                name: "boss"
              }
            ])
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "Add to employee set?",
                  { first: answer.first, last: answer.last, role: answer.role, boss: answer.boss },
                  function(error, results, fields) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
          }
        });
        // beginning of view option
    } else if (answer.option === "view") {
      inquirer
        .prompt({
          type: "list",
          message: "What would you like to view?",
          name: "option",
          choices: ["department", "role", "employee"]
        })
        .then(function(answer) {
          console.log(answer);
        //   view departments
          if (answer.option === "department") {
            connection.query(
              "SELECT * FROM department",
              { name: answer.option },
              function(error, results, fields) {
                if (error) throw error;
                console.log(results);
              }
            );
          }
          // view roles
          else if (answer.option === "role") {
            connection.query(
              "SELECT * FROM role",
              { name: answer.option },
              function(error, results, fields) {
                if (error) throw error;
                console.log(results);
              }
            );
          }
          // view employees
          else if (answer.option === "employee") {
            connection.query(
              "SELECT * FROM employee",
              { name: answer.option },
              function(error, results, fields) {
                if (error) throw error;
                console.log(results);
              }
            );
          }

        });
        // beginning of remove option 
    } else if (answer.option === "remove") {
      inquirer
        .prompt({
          type: "list",
          message: "What category do you want to remove from?",
          name: "option",
          choices: ["department", "role", "employee"]
        })
        .then(function(answer) {
          console.log(answer);
          // beginning of remove department
          if (answer.option === "department") {
            inquirer
              .prompt({
                type: "input",
                message: "Department you'd like to remove?",
                name: "option"
              })
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "DELETE FROM department WHERE ?",
                  { name: answer.option },
                  function(error, results, fields) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
          }
          // beginning of remove role
          else if (answer.option === "role") {
            inquirer
              .prompt({
                type: "input",
                message:
                  "Which role would you like to remove?",
                name: "option"
              })
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "DELETE FROM role WHERE ?",
                  { title: answer.option },
                  function(error, results, fields) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
          }
          // beginning of remove employee
          else if (answer.option === "employee") {
            inquirer
              .prompt({
                type: "input",
                message:"What is the id of the employee you'd like to remove?",
                name: "option"
              })
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "DELETE FROM employee WHERE ?",
                  { id: answer.option },
                  function(error, results, fields) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
          }
        });
    }
  });
