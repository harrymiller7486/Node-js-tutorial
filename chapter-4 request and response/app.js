 
const http = require('http');

// create an HTTP server
const server = http.createServer((req, res) => {
  console.log(req);
    // set response HTTP status code and content type
});
  // listen for requests on port 3000
const PORT = 3000
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}/`)
});
const http = require('http');

// create an HTTP server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === '/') {
    
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>welcome to node-js server! </h1></body>')
  res.write('<i><h2>This is a simple node-js.</h2></i>')  // add some content to the page
  res.write('</html>') // end the html document
  return res.end(); // end the response
  }
  else if (req.url.toLowerCase() === '/products') {
    
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>change the products </h1></body>')
  res.write('<i><h2>This is a simple node-js server.</h2></i>')  // add some content to the page
  res.write('</html>') // end the html document
  return res.end(); // end the response
  }
  else if (req.url === '/about'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hi, am  arman khan</h1></body>')
  res.write('<i><h2>This is a simple node-js server.</h2></i>')  // add some content to the page
  res.write('</html>') // end the html document
  res.end(); // end the response
  }


});
  // listen for requests on port 3000
const PORT = 3000
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}/`)
});

