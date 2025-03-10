const http = require('http');

const requestHandler = require('./user');
const server = http.createServer(requestHandler);




// Listen for requests on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
});
