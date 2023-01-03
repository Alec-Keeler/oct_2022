const express = require('express');
const app = express();
//post, put, patch, delete, all, use
app.get('/status', (res, req) => {
    res.send('hello')
})

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`))