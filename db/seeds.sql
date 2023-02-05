INSERT INTO departments (name)
VALUES
    ('Legal'),
    ('Engineering'),
    ('Sales'),
    ('Finance');

    INSERT INTO roles (title, salary, department_id)
VALUES
    
    ('Sale Manager', 80000, 3),
    ('Finance clerk', 35000, 4),

    ('Sales associate', 35000, 3),
    ('Software engineer', 27500, 2),
    ('Legal clerk', 27500, 4),
    ('Finance clerk', 25000, 4),

    ('Legal clerk', 50000, 4),
    ('Software engineer', 60000, 2),
    ('Finance clerk', 60000, 4),
    ('Software engineer', 70000, 2);

    INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES 
    ('Orlando', 'Nelson', 5, 7),
    ('Ashley', 'James', 6, 8),
    ('Marie', 'Wilis', 6, 7),

    ('Leah', 'McNair', 5, 9),
    ('James', 'Anthony', 5, 7),

    ('Chris', 'Cooper', 4, 9),
    ('Paul', 'Smith', 4, 7),

    ('Chad', 'Rodriguez', 1, 7),

    ('Lucille', 'Smith', 2, 7),

    ('Khadeeja', 'Simmons', 7, 7),

    ('Evelyn', 'Kelly', 8, 8),

    ('Jasmine', 'Willis', 9, 10),

    ('Chad', 'Simmons', 10, 8);
