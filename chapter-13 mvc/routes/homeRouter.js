const path = require('path')

const express = require('express')

const rootDir = require('../utils/pathutils')

const homeRouter = express.Router()

// middleware
homeRouter.get('/', (req, res, next) => {
  console.log('handling / for GET', req.url, req.method)
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = homeRouter
