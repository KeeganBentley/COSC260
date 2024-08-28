var http = require('http');
var fs = require('fs');

http.createServer( function(req,res) {
   const headers = {
      'Access-Control-Allow-Origin': 'http://turing.une.edu.au',
      'Access-Control-Allow-Methods' : 'POST,GET',
      'Content-type':'text/html',
   }
   if (req.method === 'GET'){
      
      fs.readFile('../data/tasks.json', function(err,jsonFile){
         res.writeHead(200,headers);
         res.end(jsonFile);
      });
      
   } else if (req.method === 'POST'){
      console.log('Incomming POST request!');
      
      let data = '';
      req.on('data', (chunk) => {
         data += chunk;
      });
      
      req.on('end', () => {
         
         fs.readFile('../data/tasks.json', function(err,jsonFile){
                 if(err) throw errr;
                 let tasks = JSON.parse(jsonFile);
                 res.writeHead(200,headers);
		 var split_message = data.split('^');
		 if(split_message[0] === '*del'){
		     delete tasks[split_message[1]];
		     fs.writeFile('../data/tasks.json', JSON.stringify(tasks), function(err) {
		        if(err) throw err;
		        console.log('Deleted Task: ' + split_message[1]);
		        res.end('Deleted Task: ' + split_message[1]);
		     });
		 } else {
		     tasks[split_message[0]] = split_message[1];
		     fs.writeFile('../data/tasks.json', JSON.stringify(tasks), function(err) {
		        if(err) throw err;
		        console.log('Added new task: ' + split_message[0]);
		        res.end('Added new task: ' + split_message[0]);
		     });
		 }
	      });
	 });
      
   } else {
      res.writeHead(200,headers);
      res.end('Only Accepting GET and POST!');
   }
   
}).listen(7080);
