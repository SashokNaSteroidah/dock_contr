const express = require('express');
const routes = express.Router();

const head = require("./head.js");
const header = require("./header.js");
const footer = require("./footer.js");
const main = require("./main.js");
const about = require("./about.js");
const cabinet = require("./cabinet.js");
const create_choose = require("./create_choose.js");
const dev_blog = require("./dev_blog.js");
const document_change = require("./document_change.js");
const news = require("./news.js");
const no_auto = require("./no_auto.js");
const signin = require("./signin.js");
const signup = require("./signup.js");

routes.get('/', (req, res) => {
    res.send(head + header + main + footer);
});

routes.get('/about', (req, res) => {
    res.send(head + header + about + footer);
});

routes.get('/cabinet', (req, res) => {
    res.send(head + header + cabinet + footer);
});

routes.get('/create_choose', (req, res) => {
    res.send(head + header + create_choose + footer);
});

routes.get('/dev_blog', (req, res) => {
    res.send(head + header + dev_blog + footer);
});

routes.get('/document_change', (req, res) => {
    res.send(head + header + document_change + footer);
});

routes.get('/news', (req, res) => {
    res.send(head + header + news + footer);
});

routes.get('/no_auto', (req, res) => {
    res.send(head + no_auto);
});

routes.get('/signin', (req, res) => {
    res.send(head + header + signin + footer);
});

routes.get('/signup', (req, res) => {
    res.send(head + header + signup + footer);
});

module.exports = routes;