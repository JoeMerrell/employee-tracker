USE employeesDB;

INSERT INTO department (name)
VALUES ("Paint");
INSERT INTO department (name)
VALUES ("Lingere");
INSERT INTO department (name)
VALUES ("Bakery");
INSERT INTO department (name)
VALUES ("Personal Care");

INSERT INTO role (title, salary, department_id)
VALUES ("Paint Master", 50000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Dresser", 65000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Baker", 55000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Hair Stylist", 75000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Manicurist", 65000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mary", "Smith", 1, 3);
