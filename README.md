Dr. Mime 
=======

![crazy doctor logo](logo-800x620.png)

Crazy doctor for mime types

#### Installation

`npm install dr-mime`

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

**.getHeader ( _mime-type_ OR _extension_ )**

``` js
  DrMime.getHeader('application/javascript'); // returns {'Content-Type' : 'application/javascript'}
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
