const sumRequestHandler =  (req,res)=>{

  console.log('1.In sum request handler ',req.url);
  const Body = []; 
  let result;  // variable to store sum
  req.on ('data', chunk => {
    Body.push(chunk)
  console.log('2.chunk came');
});
  req.on ('end', () =>{
    console.log('3. End event received, processing request');
    const bodyStr = Buffer.concat(Body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj  = Object.fromEntries(params);
    result = Number(bodyObj.first ) + Number(bodyObj.second );
    console.log(result);
    
  });
  console.log('4. Sending response');
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
    
  }

exports.sumRequestHandler = sumRequestHandler;