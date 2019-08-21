// Let us load the HTTP module by typing in constant HTTP name and, we can set the constant HTTP name to a require HTTP value for example:
const http = require('http');

// We can define the function in this server.js module for creating  a web server. So, let us store our value results in a server object by creating a constant name.
const server = http.createServer();

// So, we can use the ‘ON’ method, in order to handle this event emitter, and before listening to the port 3000, we want to register our listener or handler by typing in, server dot (.) on and the name of the event emitter is ‘CONNECTION,’ as defined in the Net Module documentations
// This listener is a function with (1) argument in which, a socket is a type of socket class and the socket class returns a void; therefore, we add the arrow function (=>) syntax in ‘ES6.’ 
// ’ Let us add an arrow function for which, means, we are going to use the arrow function after, ‘SOCKET,’ as a first (1st) function that will take a socket to our code block.
server.on('connection', (socket) => {
    console.log('New connection… Hello World! I am learning how to use Node.js’ net.Socket listener.');

});

// Type in server dot (.) listen; in order to call the server then we will need to give the listen on an object name let us say, 3000 for local host port 3000. 
server.listen(3000);

// Create an output listener onto the console.
console.log('Listening on port 3000…Hello World! I am learning Node.js.');