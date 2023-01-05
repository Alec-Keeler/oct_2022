INSERT INTO friends (first_name, last_name)
VALUES
('Amy', 'Pond');

INSERT INTO friends (last_name, first_name)
VALUES
('Tyler', 'Rose'),
('Jones', 'Martha'),
('Noble', 'Donna'),
('Song', 'River');

INSERT INTO friends (first_name, last_name)
VALUES 
('Jenny', 'Who'),
('Amy', 'null');

CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL DEFAULT 'Pond'
);