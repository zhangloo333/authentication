//main start of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//Create instance of express named app
const app = express();

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on:', port);

//addasd
