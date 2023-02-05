DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS departments;

USE departments;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER,
   FOREIGN KEY (department_id) REFERENCES departments(id) 
);

CREATE TABLE employees (
    id INTEGER  AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY (roles_id) 
    REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) 
    REFERENCES roles(id) ON DELETE SET NULL
);