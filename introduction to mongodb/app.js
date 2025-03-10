const http = require('http');
// create an HTTP server
const server = http.createServer((req, res) => {
  console.log(req);
    // set response HTTP status code and content type
});
const mongoConnect = require('../util/databaseutils');
  // listen for requests on port 3000
const PORT = 3000;
mongoConnect ((client) =>{
  console.log(client);
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}/`);
});
});