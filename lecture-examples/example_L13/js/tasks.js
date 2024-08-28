var http = require('http');
var fs = require('fs');
  async = require('async');

http.createServer( function(req,res) {
   const headers = {
      'Access-Control-Allow-Origin': 'http://turing.une.edu.au',
      'Access-Control-Allow-Methods' : 'POST,GET',
      'Content-type':'text/html',
   }
   if (req.method === 'GET'){
      
      fs.readdir('../data/', function(err, filesPath) {
         if(err) throw err;
         filesPath = filesPath.map( function(filePath){
            return '../data/' + filePath;
         });
         
         async.map(filesPath, function(filePath, cb){
           fs.readFile(filePath, 'utf8', cb);
         }, function(err,results){
            res.writeHead(200,headers);
            for(i=0;i<results.length;i++) res.write(results[i]);
            res.end();
         });
      });
   } else if (req.method === 'POST'){
      console.log('Incomming POST request!');
      
      let data = '';
      req.on('data', (chunk) => {
         data += chunk;
      });
      
      req.on('end', () => {
         res.writeHead(200,headers);
         var split_message = data.split('^');
         if(split_message[0] === '*del'){
             fs.unlink('../data/'+split_message[1], (err) => {
                if(err) throw err;
                console.log('Deleted a new task');
                res.end('Deleted task!');
             });
         } else {
           fs.writeFile('../data/'+split_message[0], split_message[1], function(err) {
               if(err) throw err;
               console.log('Updated with new task');
               res.end('Written new task!');
           });
         }
      });
      
   } else {
      res.writeHead(200,headers);
      res.end('Only Accepting GET and POST!');
   }
   
}).listen(7080);
