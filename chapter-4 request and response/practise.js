const http = require('http');

// create an HTTP server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/home') {
    res.write('<h1>welcome to Home page</h1>');
    return res.end();
  
  } else if (req.url === '/men') {
    res.write('<h1>Welcome to Men page</h1>');
    return res.end();
  
  } else if (req.url === '/women') {
    res.write('<h1>Welcome to Women page</h1>');
    return res.end();

  } else if (req.url === '/kids') {
    res.write('<h1>Welcome to Kids page</h1>');
    return res.end();
  
  } else if (req.url === '/cart') {
    res.write('<h1>Welcome to Cart page</h1>');
    return res.end();
  }
  
  res.write(`<html>
    <head>
      <title>My First Page</title>
    </head>
    <body>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">WOMEN</a></li>
          <li><a href="/kids">kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </body>
    </html>`);
    res.end();
  });
  const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}/`)
});
