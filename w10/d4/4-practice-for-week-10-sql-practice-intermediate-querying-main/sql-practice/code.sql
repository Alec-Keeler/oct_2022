-- Q1
SELECT * FROM albums
WHERE num_sold >= 100000;

-- Q2
SELECT * FROM albums
WHERE year BETWEEN 2018 AND 2020;

-- Q3
SELECT * FROM albums
WHERE band_id IN (1, 3, 4);

-- IQ1
SELECT * FROM albums
WHERE title LIKE 'the%';

-- IQ2
SELECT id, title, num_sold 
  FROM albums
  ORDER BY num_sold DESC
  LIMIT 2;

-- AQ1
SELECT id, title, num_sold 
  FROM albums
  ORDER BY num_sold DESC
  LIMIT 2
  OFFSET 2;
