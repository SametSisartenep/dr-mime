dr-mime
=======

Node.js module for handling mime types.

#### Installation

`npm install dr-mime`

![](http://www.rbhk.org.hk/images/warning.png) _The [npm](http://npmjs.org) package isn't finished, 2 more coffees and it will be :P_

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

**.add ( _mime-type, extension_ )**

``` js
  DrMime.add('text/plain', '.cc');
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
