USE cms;

INSERT into department (name) VALUES ("Customer Relations");
INSERT into department (name) VALUES ("IT");
INSERT into department (name) VALUES ("Security");
INSERT into department (name) VALUES ("HR");

INSERT into role (title, salary, department_id) VALUES ("Bank Manager", 5000000, 1);
INSERT into role (title, salary, department_id) VALUES ("Customer Service Manager", 150000, 1);
INSERT into role (title, salary, department_id) VALUES ("Banker", 50000, 1);
INSERT into role (title, salary, department_id) VALUES ("IT Manager", 100000, 2);
INSERT into role (title, salary, department_id) VALUES ("Engineer", 80000, 2);
INSERT into role (title, salary, department_id) VALUES ("HR Manger", 75000, 4);
INSERT into role (title, salary, department_id) VALUES ("HR Officer", 60000, 4);
INSERT into role (title, salary, department_id) VALUES ("Security Lead", 75000, 3);
INSERT into role (title, salary, department_id) VALUES ("Security Guard", 30000, 3);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Tom", "Kikaiaku", 1, null);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Misty", "Scott", 2, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Ash", "Ketchem", 3, 2);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Brock", "Carnegie", 3, 2);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Angus", "Beef", 4, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Rancher", "Frye", 5, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Hot", "Potato", 5, 5);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("KAREN", "The-Minion", 6, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Rick", "Roll", 7, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Pickle", "Rick", 7, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Hancock", 7, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Linda", "Ruinall", 7, 5);


INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Bruce", "Banner", 8, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Billy", "Maddison", 9, 13);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Linda", "Lazy", 9, 13);

