const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Server is alive");
});

app.get('/hello', (req, res) => {
    res.send("Hello, my friend!");
});

app.get('/goodbye/apple/fruit', (req, res) => {
    res.send("So long. Farewell. Have a great life!");
});

app.get('/goodbye/apple/:foodType', (req, res) => {
    res.send(`Goodbye. See you ${req.params.time}.`);
});

// /goodbye, /goodbye/anything 
app.get(['/goodbye', '/goodbye/*'], (req, res) => {
    res.send("Goodbye, my friend!");
});



const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));