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

function getHeader ( extension ) {
  return (mimes[extension] + '; charset=utf-8');
}

function getExt ( type ) {
  var mimeType;

  for (var i = 0; i < extensions.length; i++)
  {
    mimeType = mimes[extensions[i]];

    if (mimeType === type)
    {
      return mimeType;
    }
  }
}

// type: e.g 'text/html'
// extensions: e.g '.html', '.htm'
function addType ( type, extension ) {
  mimes[extension] = type;
}

// typext: type or extension, you chose :P
function removeType ( typext ) {

}

// Apache-like '.types' file
// E.g: https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
function loadTypesFile ( file ) {

}