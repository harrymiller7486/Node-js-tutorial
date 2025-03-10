const fs = require('fs');

// Create an HTTP server

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Form</title></head>');
  res.write('<body><h1>Enter your detail </h1></body>');

  res.write('<form action ="/submit-details" method = "POST" >');
  res.write(
    '<input type="text" id ="name" name="username" placeholder="Enter your name"> <br><br>'
  );
  res.write('<label for="gender">Gender:</label>')
  res.write('<input type="radio" id="male" name="gender" value="male">');
  res.write('<label for="male">male</label>');
  res.write('<input type="radio" id="female" name="gender" value="female">');
  res.write('<label for="female">female</label>')
  res.write('<br><br>');
  res.write('<input type="submit" value="Submit">');
  res.write('</form>');
  res.write('</html>');
  return res.end();

  }
else if(req.url.toLowerCase() ==='/ submit-details'&& req.method ==='POST');{

  // request parsing
  req.on ('data',(chunk)=>{
    console.log(chunk);

  const body = [];
  req.on ('end',()=>{
    body.push(chunk);
  const fullBody = Buffer.concat(body).toString();
  console.log( fullBody);
  const params = new URLSearchParams(fullBody);
  const bodyObject = Object.fromEntries(params);
  console.log(bodyObject);
  fs.writeFileSync('user.txt',JSON.stringify(bodyObject));

  });
  });
  res.statusCode = 302;
  res.setHeader('Location','/');
  return res.end();
}
res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Form</title></head>')
  res.write('<body><h1>Enter your detail </h1></body>')
  res.write('</html>');
  return res.end();

}
exports.requestHandler = requestHandler;

