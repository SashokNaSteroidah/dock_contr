const express = require('express');
const app = express();
const port = 3000;

const head = require("./head.js");
const header = require("./header.js");
const footer = require("./footer.js");
const main = require("./main.js");
const about = require("./about.js");
const cabinet = require("./cabinet.js");
const create_choose = require("./create_choose.js");
const dev_blog = require("./about.js");
const document_change = require("./document_change.js");
const news = require("./news.js");
const no_auto = require("./no_auto.js");
const signin = require("./signin.js");
const signup = require("./signup.js");



app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(head + header + main + footer);
});

app.listen(port, () => {
    console.log(`Server working localhost:${port}`);
});