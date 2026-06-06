const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('welcome on my first');
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});