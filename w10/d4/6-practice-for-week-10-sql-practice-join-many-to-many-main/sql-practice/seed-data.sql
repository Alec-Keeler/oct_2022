-- Tells SQLite to enforce foreign key restrictions
PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS musician_instruments;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);

CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER REFERENCES bands(id)
);

CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE musician_instruments (
  musician_id INTEGER NOT NULL,
  instrument_id INTEGER NOT NULL,
  FOREIGN KEY (musician_id) REFERENCES musicians(id),
  FOREIGN KEY (instrument_id) REFERENCES instruments(id)
);



INSERT INTO bands
VALUES (1, 'The Falling Box'),
  (2, 'America The Piano'),
  (3, 'Loved Autumn'),
  (4, 'Playin Sound'),
  (5, 'The King River');

INSERT INTO musicians
VALUES (1, 'Adam', 'Appleby', 1),
  (2, 'Anton', 'Martinovic', 1),
  (3, 'Wilson', 'Holt', 1),
  (4, 'Marine', 'Sweet', 2),
  (5, 'Georgette', 'Kubo', 2),
  (6, 'Aurora', 'Hase', 3),
  (7, 'Trenton', 'Lesley', 4),
  (8, 'Camila', 'Nenci', 4),
  (9, 'Rosemarie', 'Affini', 5),
  (10, 'Victoria', 'Cremonesi', 5);

INSERT INTO instruments
VALUES (1, 'piano'),
  (2, 'guitar'),
  (3, 'drums'),
  (4, 'bass'),
  (5, 'violin'),
  (6, 'cello'),
  (7, 'trumpet'),
  (8, 'saxophone');

INSERT INTO musician_instruments (musician_id, instrument_id)
VALUES (1, 1),
  (1, 2),
  (2, 1),
  (2, 4),
  (3, 6),
  (4, 8),
  (5, 3),
  (5, 7),
  (5, 8),
  (6, 5),
  (6, 6),
  (7, 1),
  (8, 1),
  (9, 1),
  (9, 5),
  (10, 5);
  
