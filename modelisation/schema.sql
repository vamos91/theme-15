CREATE TABLE `chief` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`firstname` VARCHAR(50) UNIQUE,
	`speciality` VARCHAR(50),
	PRIMARY KEY(`id`)
);

CREATE TABLE `recipes` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`name` VARCHAR(50),
	`steps` TEXT(65535),
	`nb_persons` INT,
	`preparation_time` INT,
	`cooking_time` INT,
	`created_at` DATETIME,
	`updated_at` DATETIME,
	`chief_id` INT,
	PRIMARY KEY(`id`)
);

CREATE TABLE `ingredients` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`name` VARCHAR(50) UNIQUE,
	`created_at` DATETIME,
	`updated_at` DATETIME,
	PRIMARY KEY(`id`)
);

CREATE TABLE `recipes_has_ingredients` (
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`quantity` INT NOT NULL,
	`recipes_id` INT,
	`ingredients_id` INT,
	PRIMARY KEY(`id`)
);

ALTER TABLE `recipes_has_ingredients`
ADD FOREIGN KEY(`recipes_id`) REFERENCES `recipes`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE `recipes_has_ingredients`
ADD FOREIGN KEY(`ingredients_id`) REFERENCES `ingredients`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE `recipes`
ADD FOREIGN KEY(`chief_id`) REFERENCES `chief`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;
