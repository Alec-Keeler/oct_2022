DROP TABLE IF EXISTS puppies;

CREATE TABLE puppies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    age_yrs NUMERIC(3, 1), -- 100 10.5
    breed VARCHAR(100),
    weight_lbs INTEGER,
    microchipped BOOLEAN
);

INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
VALUES
('spot', 100.1, 'bassethound', 10, true);

SELECT * FROM puppies;