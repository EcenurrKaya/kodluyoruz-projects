--1.madde
SELECT rating, COUNT(*) FROM film GROUP BY rating;

--2.madde
SELECT replacement_cost, count(*) FROM film GROUP BY replacement_cost HAVING COUNT(replacement_cost) > 50; 

--3.madde
SELECT store_id, COUNT(*) FROM customer GROUP BY store_id; 

--4.madde
SELECT country_id, COUNT(city) FROM city GROUP BY country_id ORDER BY COUNT(city_id) DESC LİMİT 1; 
