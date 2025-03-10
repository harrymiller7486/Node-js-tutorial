// core module 

const http = require('http');
// External module
const express = require('express');

// local module
const requestHandler = require('./user');

const app = express();

// middleware

app.use("./",(req,res,next) => {
  console.log("came in first middleware", req.url, req.method);
});
app.use("./submit-detail",(req, res, next) => {
  console.log("came in second middleware", req.url, req.method);
  res.send('<p>welcome to Complete Coding Node-js</p>');
});

// create an HTTP server
const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}/`)
});