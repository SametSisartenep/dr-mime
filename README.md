dr-mime
=======

Node.js module for handling mime types.

#### Installation

`npm install dr-mime`

#### Use

Example: 

``` js
  var drMime = require('dr-mime'),
    path = require('path'),
    http = require('http');

  var file = 'example.html';
  var mime = drMime.getType(path.extname(file));

  http.createServer(function ( req, res ) {
    fs.readFile(file, function ( err, data ) {
      res.writeHead(200, {'Content-Type': mime});
      res.end(data);
    });
  }).listen(1377);
```
