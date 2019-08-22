// Let us load the HTTP module by typing in constant HTTP name and, we can set the constant HTTP name to a require HTTP value for example:
const http = require('http');

// We can define the function in this server.js module for creating  a web server. So, let us store our value results in a server object by creating a constant name.
const server = http.createServer(function(request, response){
    
    if (request.url === '/api/courses') {
        response.write(JSON.stringify([1, 2, 3]));
        response.end();
    }

});

// Type in server dot (.) listen; in order to call the server then we will need to give the listen on an object name let us say, 3000 for local host port 3000. 
server.listen(3000);

// Create an output message onto the console.
console.log('Listening on port 3000…Hello World! I am learning Node.js.');
