const express = require('express');
var React = require('react');
var $ = require("jquery");
var Cors = require('cors');
var mysql = require('mysql');
var parser = require('body-parser');

//set  up database
const connection = mysql.createConnection( {
  user: 'root',
  password: 'rcabrera',
  database: 'cows'
});

connection.connect(function (err) {
  console.log('KEEP SEARCHING UNTIL THE COWS COME HOME');
});

//set up server
const app = express();
const port = 3000;

app.use('/', express.static(__dirname + '/../client/dist'))

app.use(parser.urlencoded( {
  extended: true
}));
app.use(parser.json())

app.get('/api/cows', (req, res) => {
  connection.query('select * from herd', function(err, result) {
    if (err) {
      console.log(`query error=${err}`);
      return;
    }
    res.send(result)
  })
});

app.post('/api/cows', (req, res) => {
  console.log(`POST request recieved ${req.body}`)
  var param = [req.body.cowname, req.body.descript];
  var queryString = 'INSERT INTO herd(cowname, descript) VALUES (?, ?)';
  connection.query(queryString , param,
    function (err, result) {
      res.json(req.body)
    })
  });

  app.listen(port, () =>
  console.log(`listening on port ${port}`));