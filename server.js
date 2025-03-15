const jsonServer = require('json-server');
const jsonServerAuth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db/db.json'); // Your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Setup json-server-auth middleware for authentication
server.use(jsonServerAuth);

// Use the router
server.use(router);

// Start the server
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
