-- Q1
SELECT bands.name, albums.title
FROM albums
JOIN bands ON (albums.band_id = bands.id);

-- Q2
SELECT bands.name
FROM bands
JOIN albums ON (albums.band_id = bands.id)
WHERE albums.num_sold < 20000;