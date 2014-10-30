var mimes = require('mimes.json');

var extensions = [
  '.html', '.htm', '.stm', '.css', '.js', '.gtar', '.gz',
  '.pdf', '.tar', '.tgz', '.z', '.zip', '.gif', '.ico',
  '.jpe', '.jpeg', '.jpg', '.svg', '.tif', '.tiff',
  '.png', '.mid', '.rmi', '.mp3', '.wav', '.mov',
  '.mp2', '.mpa', '.mpe', '.mpeg', '.mpg', '.qt'
];

function getType ( extension ) {
  return mimes[extension];
}

function getExt ( type ) {
  for (var i = 0; i < extensions.length; i++)
  {
    if (mimes[extensions[i]] === type)
    {
      return extensions[i];
    }
  }
}

function addType ( type, extension ) {
  mimes[extension] = type;
}

function addExt ( type, extension ) {

}

function removeType ( type ) {
  delete mimes[getExt(type)];
}

function removeExt ( extension ) {

}
