CREATE DATABASE IF NOT EXISTS db_mundial;

use db_mundial;


CREATE TABLE `db_mundial`.`teams` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `logo` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`));


