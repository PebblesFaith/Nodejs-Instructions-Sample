// Let us load the HTTP module by typing in constant HTTP name and, we can set the constant HTTP name to a require HTTP value for example:
const http = require('http');

// We can define the function in this server.js module for creating  a web server. So, let us store our value results in a server object by creating a constant name.
const server = http.createServer();

// Type in server dot (.) listen; in order to call the server then we will need to give the listen on an object name let us say, 3000 for local host port 3000. 
server.listen(3000);


