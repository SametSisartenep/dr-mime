dr-mime
=======

Node.js module for handling mime types.

#### Installation

`npm install dr-mime`

_The [npm](http://npmjs.org) package isn't finished, 2 more coffees and it will be :P_

#### Use

**.getType ( _extension_ )**

``` js
  var DrMime = require('dr-mime');

  DrMime.getType('.jpg'); // returns 'image/jpeg'

```

**.getExt ( _mime-type_ )**

``` js
  DrMime.getExt('application/javascript'); // returns '.js'
```

**.addType ( _mime-type, extension_ )**

``` js
  DrMime.addType('.cc', 'text/plain');
```

**.addExt ( _mime-type, extension_ )**

``` js
  DrMime.addExt('image/jpeg', '.jpe');
```

**.removeType ( _mime-type_ )**

``` js
  DrMime.removeType('text/html'); // I recommend not to do this :)
```

**.removeExt ( _extension_ )**

``` js
  DrMime.removeExt('.html');
```

#### Finally...

**Dr. Mime** is distributed under MIT License, feel free to use and modify it. ¯\_(ツ)_/¯
