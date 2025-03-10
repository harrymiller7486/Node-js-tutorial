// core modules
const path = require('path')
const http = require('http')
// external modules
const express = require('express')

const rootDir = require('./utils/pathutils')

const homeRouter = require('./routes/homeRouter')
const contactRouter = require('./routes/contactRouter')

const app = express()

app.set('view engine', 'ejs');
app.use(contactRouter)

app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'))
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
