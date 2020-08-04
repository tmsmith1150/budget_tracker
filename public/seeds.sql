use
INSERT INTO category (category_name,user_id) values("Income",1);
INSERT INTO category (category_name,user_id) values("Mortgage",1);
INSERT INTO category (category_name,user_id) values("Bills",1);
INSERT INTO expenses (expense_name, amount, category_id, date, user_id) values ("August payroll", "2000",1, "2020-08-01",1);

INSERT INTO expenses (expense_name, amount, category_id, date, user_id) values ("Mortage Payment", "-15000",2, "2020-08-03",1);

INSERT INTO expenses (expense_name, amount, category_id, date, user_id) values ("Water bill", "-25.50",3, "2020-08-02",1);



INSERT INTO users (email,password) values ("gfy613@gmail.com","password");

INSERT INTO bill_pay (bill_name, website, due_date, user_id) values("Water bill",,"2020-09-01",1);
