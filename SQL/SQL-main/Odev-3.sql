--1.madde
SELECT counrt FROM country WHERE country LIKE 'A%a';

--2.madde
SELECT country FROM country WHERE country LIKE '_____%n';

--3.madde
SELECT * FROM film WHERE title ILIKE '%t%%t%%t%%t%';

--4.madde
SELECT * FROM film WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99
