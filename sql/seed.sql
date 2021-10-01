USE employees_db;

INSERT INTO department (name)
VALUES ("Paint");
INSERT INTO department (name)
VALUES ("Lingere");
INSERT INTO department (name)
VALUES ("Bakery");
INSERT INTO department (name)
VALUES ("Personal Care");

INSERT INTO role (title, salary, department_id)
VALUES ("Paint Master", 50000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Dresser", 65000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Baker", 55000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Hair Stylist", 75000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ("Manicurist", 65000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mary", "Smith", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Susie", "Jones", 2, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Merrick", 4, 1);
