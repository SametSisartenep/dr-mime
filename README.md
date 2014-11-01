Dr. Mime 
=======

<<<<<<< HEAD
![Crazy Doctor logo](crazy-doc.png)
=======
![Crazy Doctor logo](crazy-doc.svg)
>>>>>>> a50753f5265bf04c4190535699b9044312bf7d9c

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
