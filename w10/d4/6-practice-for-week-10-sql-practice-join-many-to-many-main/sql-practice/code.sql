-- Q1
SELECT musicians.first_name, musicians.last_name, instruments.type
  FROM musician_instruments
  JOIN instruments ON (instruments.id = musician_instruments.instrument_id)
  JOIN musicians ON (musicians.id = musician_instruments.musician_id)
  WHERE instruments.type = 'piano'
  ORDER BY musicians.first_name;