create table product (
id serial primary key,
name varchar(100) not null unique,
value real not null
);

create table customer (
id serial primary key,
name varchar(50) not null,
email varchar(50) not null
);

create table ordered (
id serial primary key,
customer_id int not null,
product_id int not null,
order_date timestamp not null,
foreign key (customer_id) references customer(id),
foreign key (product_id) references product(id)
);

-- insert some values
insert into product (name, value) values ('product 1', 10.0);
insert into product (name, value) values ('product 2', 20.0);
insert into product (name, value) values ('product 3', 30.0);
insert into product (name, value) values ('product 4', 40.0);
insert into product (name, value) values ('product 5', 50.0);

-- insert some customers
insert into customer (name, email) values ('customer 1', 'cust1@email');
insert into customer (name, email) values ('customer 2', 'cust2@email');
insert into customer (name, email) values ('customer 3', 'cust3@email');
insert into customer (name, email) values ('customer 4', 'cust4@email');
insert into customer (name, email) values ('customer 5', 'cust5@email');

-- insert some orders with timestamp
insert into ordered (customer_id, product_id, order_date) values (1, 1, '2018-01-01 10:00:00');
insert into ordered (customer_id, product_id, order_date) values (1, 2, '2018-01-01 10:00:00');