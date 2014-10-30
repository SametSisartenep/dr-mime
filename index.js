var mimes = require('mimes.json');

function getType ( extension ) {
  mimes.map(function ( mime ) {
    for (var i = 0; i < mime.extension.length; i++)
    {
      if (mime.extension[i] === extension)
      {
        return mime.type;
      }
    }
  });
  return 'text/plain';
}

function getExt ( type ) {
  mimes.map(function ( mime ) {
    if (mime.type === type)
    {
      return mime.extension[0];
    }
  });
  return false;
}

function addType ( type, extension ) {
  if (!getExt(type))
  {
    mimes.push({"type" : type, "extension" : [extension]});
  }
  else
  {
    mimes.map(function ( mime ) {
      
    }); 
  }
}

function addExt ( type, extension ) {

}

function removeType ( type ) {
  delete mimes[getExt(type)];
}

function removeExt ( extension ) {

}
