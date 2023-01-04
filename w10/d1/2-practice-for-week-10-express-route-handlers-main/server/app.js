// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());

// app.use((req, res, next) => {
//   console.log('Body:', req.body);
//   next();
// });

//regex
app.get(['/artists', '/musicians'], (req, res) => {
  const data = getAllArtists()
  res.status(200).json(data)
})

app.post('/artists', (req, res) => {
  const data = req.body
  const result = addArtist(data)
  res.status(201).json(result)
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));