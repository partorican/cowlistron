const express = require('express');
const app = express();
const port = 3000;
var React = require('react')
var $ = require("jquery");

app.get('/', (req, res) => res.send('HELLO world!'));

app.listen(port, () => console.log(`Example app ${port}`));