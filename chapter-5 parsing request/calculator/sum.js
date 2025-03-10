const sumRequestHandler =  (req,res)=>{

  console.log('In sum request handler ', req.url);
  const Body = []; 
  req.on ('data', chunk => Body.push(chunk));
  req.on ('end', () =>{
    const bodyStr = Buffer.concat(Body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj  = Object.fromEntries(params);
    const result = Number(bodyObj.first ) + Number(bodyObj.second );
    console.log(result);
    res.setHeader('Content-Type', 'text/html');
    res.write(`
  <html>
  <head><title>Practise set</title></head>
  <body>
  <h1>Your sum is : ${result} </h1>
  </body>
  </html>
  `);
  return res.end();
    });
  }

exports.sumRequestHandler = sumRequestHandler;