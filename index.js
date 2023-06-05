const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.static('public'));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server working localhost:${port}`);
});