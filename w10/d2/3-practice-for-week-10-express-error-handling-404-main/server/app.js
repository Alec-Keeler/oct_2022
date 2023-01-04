const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.use((req, res, next) => {
  const banana = new Error("Sorry, the requested resource couldn't be found")
  banana.statusCode = 404
  next(banana)
})

app.use((err, req, res, next) => {
  console.log(err)
  const status = err.statusCode || 500
  res.status(status)
  res.json({
    statusCode: status,
    message: err.message || 'Something went wrong :('
  })
})
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));