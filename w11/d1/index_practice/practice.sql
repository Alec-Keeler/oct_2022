DROP TABLE IF EXISTS things;

CREATE TABLE things (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    col_a INTEGER,
    col_b INTEGER,
    col_c INTEGER
);

INSERT INTO things (col_a, col_b, col_c)
VALUES
(1, 10, 100),
(1, 11, 101),
(2, 10, 100),
(2, 11, 102),
(3, 10, 100),
(3, 11, 103),
(4, 10, 100),
(4, 11, 104),
(5, 10, 100),
(5, 11, 105);

CREATE INDEX idx_things_col_a_col_b_col_c ON things (col_a, col_b, col_c);

SELECT "query plan - ";
EXPLAIN QUERY PLAN
SELECT * FROM things
WHERE col_a = 1 AND col_b = 10 AND col_c = 100;

SELECT "query result - ";
SELECT * FROM things
WHERE col_a = 1 AND col_b = 10 AND col_c = 100;