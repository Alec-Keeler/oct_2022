-- S1
SELECT * FROM puppies;

-- S2
SELECT age_yrs, weight_lbs, name FROM puppies;

-- S3
SELECT * FROM puppies
WHERE id = 5;

-- S4
SELECT name, age_yrs, weight_lbs, microchipped
FROM puppies
WHERE microchipped = 1;

-- S5
SELECT name, age_yrs, weight_lbs
FROM puppies
WHERE weight_lbs > 25;

SELECT * FROM puppies
WHERE name IN ('Cooper', 'Indie');

SELECT * FROM puppies
WHERE age_yrs BETWEEN 0.5 AND 1;

SELECT * FROM puppies
WHERE age_yrs > 0.7 AND weight_lbs >= 25;