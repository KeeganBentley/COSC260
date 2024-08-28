var http = require('http');
const fs = require('fs');
  async = require('async');



http.createServer( function(req,res) {
  console.log('Accessed');
  const headers = {
	    'Access-Control-Allow-Origin': 'http://turing.une.edu.au',
	    'Access-Control-Allow-Methods': 'POST,GET',
	    'Access-Control-Max-Age': 2592000, //setting max days to 30 days
	    'Content-type': 'text/html',
  };
  if (req.method === 'GET') {
          
	  fs.readdir('../data/', function(err,filesPath) {
	     if(err) throw err;
	     
	     filesPath = filesPath.map(function(filePath){
	        return '../data/' + filePath;
	     });
	     async.map(filesPath, function(filePath,cb){
	        fs.readFile(filePath, 'utf8', cb);
	     }, function(err, results) {
	        res.writeHead(200,headers);
	        for(i=0;i<results.length;i++) res.write(results[i]);
	        res.end();
	     });
	  });
  }else if (req.method === 'POST') {
          let data = '';

	  req.on('data', (chunk) => {
	       data += chunk;
	  });
	  
	  req.on('end', () => {
	       // Process the POST data
	       console.log('Received POST data:', data);
	       var two = data.toString().split('^');
	       if(two[0]==='*del'){
	          fs.unlink('../data/'+two[1], (err) => {
	             if(err){ 
                        console.log("unable to delete");
                        //return;
	             }
	          });
	       } else {
	          fs.writeFile('../data/'+two[0], two[1], function (err) {
		      if (err){ 
		          console.log("error writing file");
		          //return;
		      }
		      console.log('Updated!');
	          });
	       }
	       res.writeHead(200, headers);
	       res.end('Received successfully');
	 }); 
	 
  } else {
    res.writeHead(200,headers);
    res.end('Only accepting GET or POST');
  }

}).listen(8090);
