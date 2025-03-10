const http = require('http');
// External module
const express = require('express');
// local  module

const userRouter = require('./routes/user-router');
const hostRouter = require('./routes/hostRouter');
// local module

const app = express();

// middleware
app.use(express.urlencoded());

app.use( userRouter);

app.use("/host",hostRouter);

app.use((req,res,next)=>{
  res.status(404).send(`<h1>404 page not found on airBnb</h1>`);
});

// create an HTTP server

const PORT = 3002;
app.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}/`)
});