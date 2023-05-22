const express = require('express');
const routes = express.Router();

const head = require("./public/templates/head.js");
const header = require("./public/templates/header.js");
const footer = require("./public/templates/footer.js");
const main = require("./public/templates/main.js");
const about = require("./public/templates/about.js");
const cabinet = require("./public/templates/cabinet.js");
const create_choose = require("./public/templates/create_choose.js");
const dev_blog = require("./public/templates/dev_blog.js");
const document_change = require("./public/templates/document_change.js");
const news = require("./public/templates/news.js");
const no_auto = require("./public/templates/no_auto.js");
const signin = require("./public/templates/signin.js");
const signup = require("./public/templates/signup.js");

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