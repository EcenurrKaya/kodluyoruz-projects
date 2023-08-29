--1.madde
SELECT AVG(rental_rate) FROM film;

--2.madde
SELECT COUNT(title) FROM film WHERE title LIKE 'C%';

--3.madde
SELECT MAX(length) FROM film WHERE rental_rage=0.99;

--4.madde
SELECT COUNT(DISTINCT(replacement_cost)) FROM film WHERE length>150;
