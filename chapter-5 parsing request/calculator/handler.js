const {sumRequestHandler} = require('./sum')
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
  <html>
  <head><title>Practise set</title></head>
  <body>
  <h1>Welcome to calculator </h1>
  <a href = "/calculator">Go to calculator</a>
  </body>
  </html>
  `);
    return res.end();
  }else if (req.url.toLowerCase() === '/calculator') {
    res.setHeader('content-type', 'text/html');
    res.write(`
    <html>
    <head><title>Calculator</title></head>
    <body>
    <form action = '/calculator-result' method = "POST">
    <h1>Welcome to calculator</h1>
    <input type="text" placeholder=" first "name="first"/>
    <input type="text" placeholder=" second " name="second"/>
    <input type="submit" value=" Sum ">
    </body>
    </html>
    `);
    return res.end();
    }
    else if(req.url.toLowerCase() === '/calculator-result' && req.method === 'POST') {
    return sumRequestHandler(req, res);
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
  <html>
  <head><title>Practise set</title></head>
  <body>
  <h1>404 does not exits </h1>
  <a href = "/">Go to home </a>
  </body>
  </html>
  `);
  return res.end();

    }

exports.requestHandler = requestHandler;

    