CREATE DATABASE cows;

USE cows;

CREATE TABLE herd (
  id int NOT NULL AUTO_INCREMENT,
  cowname varchar(20) NOT NULL,
  descript varchar(200),
  PRIMARY KEY (ID)
);