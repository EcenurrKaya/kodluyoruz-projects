--1.madde
SELECT * FROM film WHERE title ILIKE '%N' ORDER BY length DESC LIMIT 5;

--2.madde
SELECT * FROM film WHERE title ILIKE '%N' ORDER BY length ASC OFFSET 5 LIMIT 5;

--3.madde
SELECT last_name,store_id FROM customer WHERE store_id = 1 ORDER BY last_name DESC LIMIT 4;
