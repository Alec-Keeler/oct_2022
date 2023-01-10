----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

    -- Your code here

-- Paste your results below (as a comment):
-- CREATE TABLE cat_toys (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   cat_id INTEGER NOT NULL,
--   toy_id INTEGER NOT NULL,
--   FOREIGN KEY (cat_id) REFERENCES cats(id),
--   FOREIGN KEY (toy_id) REFERENCES toys(id)
-- );
-- CREATE TABLE toys (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   name VARCHAR(255) NOT NULL,
--   color VARCHAR(255) NOT NULL,
--   price INTEGER NOT NULL
-- );
-- CREATE TABLE cats (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   name VARCHAR(255) NOT NULL,
--   color VARCHAR(255) NOT NULL,
--   breed VARCHAR(255) NOT NULL
-- );

SELECT * FROM cats
JOIN cat_toys ON (cat_id = cats.id)
WHERE toy_id = 5;



----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here
    EXPLAIN QUERY PLAN
    SELECT * FROM cats
    JOIN cat_toys ON (cat_toys.cat_id = cats.id)
    WHERE toy_id = 5;


-- Paste your results below (as a comment):
-- Run Time: real 0.003 

-- What do your results mean?

    -- Was this a SEARCH or SCAN?


    -- What does that mean?




----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

-- Paste your results below (as a comment):




----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here

    CREATE INDEX idx_cat_toys_toy_id ON cat_toys (toy_id);

-- Analyze Query:
    -- Your code here

-- Paste your results below (as a comment):


-- Analyze Results:

    -- Is the new index being applied in this query?




----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

-- Paste your results below (as a comment):


-- Analyze Results:
    -- Are you still getting the correct query results?


    -- Did the execution time improve (decrease)?


    -- Do you see any other opportunities for making this query more efficient?


---------------------------------
-- Notes From Further Exploration
---------------------------------