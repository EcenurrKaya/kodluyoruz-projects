--1.madde
SELECT DISTINCT replacement_cost FROM film;

--2.madde
SELECT COUNT(DISTINCT replacement_cost) FROM film;

--3.madde
SELECT * FROM film WHERE title ILIKE 'T%' AND rating == 'G'; 

--4,madde
SELECT * FROM country WHERE country LIKE '_____';

--5.madde
SELECT * FROM  city WHERE city INLIKE '%R';
