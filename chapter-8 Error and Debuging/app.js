const http = require('http');
const testingSyntax = require('./syntax');
const runtime = require('./runtime');
// create an HTTP server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // testingSyntax ();
  // runtime();
  
  
    // set response HTTP status code and content type
});
  // listen for requests on port 3000
const PORT = 3002;
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}/`)
});