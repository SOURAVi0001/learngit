const http = require('http');
const requestListener = require('./user');
const server = http.createServer(requestListener);
server.listen(3011, () => {
  console.log('Server is running on http://localhost:3011');
});