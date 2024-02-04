const express = require('express');
const frame = require('./frame');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Farcaster Frame Server!');
});

app.get('/frame', (req, res) => {
    res.json(frame);
});

app.listen(port, () => {
    console.log(`Frame server listening at http://localhost:${port}`);
});