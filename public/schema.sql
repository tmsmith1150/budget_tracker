DROP DATABASE IF EXISTS budgettracker_db;

CREATE DATABASE budgettracker_db;

USE budgettracker_db;

CREATE TABLE expenses
(id int NOT NULL AUTO_INCREMENT,
expense_name varchar(255) NOT NULL,
amount int NOT NULL,
category_id int NOT NULL,
date date NOT NULL,
user_id int NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE category
(id int NOT NULL AUTO_INCREMENT,
category_name varchar(255) NOT NULL,
user_id int NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
PRIMARY KEY (id)
);

CREATE TABLE users
(id int NOT NULL AUTO_INCREMENT,
email varchar(255) NOT NULL,
password varchar(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE bill_pay
(id int NOT NULL AUTO_INCREMENT,
bill_name varchar(255) NOT NULL,
website varchar(255),
due_date date,
user_id int NOT NULL,
PRIMARY KEY (id)
);