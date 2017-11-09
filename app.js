'use strict';

const express = require('express')
const app = express()
const mysql = require('mysql');
const config = require('konfig')();

const connection = mysql.createConnection(config.db);

connection.connect();

//Define request response in root URL (/)
app.get('/', (req, res) => {
  res.send('Hello World !')
})

const port = process.argv[2] || 8000;
//Launch listening server on port 8081
app.listen(port , () => {
  console.log(`app listening on port ${port}!`)
})

connection.query('SELECT 1 + 1 AS solution',  (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
