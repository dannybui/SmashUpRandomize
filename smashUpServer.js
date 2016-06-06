// New NodeJs Server by Danny Bui

// Imports
var http = require('http'),
	fs = require('fs');

	fs. readFile('./index.html', function(err, html){
		if (err){
			throw err;
		}
		http.createServer(function(request, response){
			response.writeHeader(200, {"Content-Type": "text/html"});
			response.write(html);
			response.end();
		}).listen(8082);
		console.log('Successfully listening on port 8082');
	});

// Function to handle request and send response
