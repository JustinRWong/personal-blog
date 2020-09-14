const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bearerToken = require('express-bearer-token');
const events = require('./events');
const oktaAuth = require('./auth');
var connection = require('./middleware');

var pool = mysql.createPool({
    host     : 'us-cdbr-east-02.cleardb.com',
    user     : 'b89c191932b59c',
    password : '4dfe04e0',
    database : 'heroku_117dffa8bd2ae1a'
}
);

//connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bearerToken())
  .use(oktaAuth)
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
