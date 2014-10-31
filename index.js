var mimes = require('mimes.json');

module.exports = exports = {
  getType: function ( extension ) {
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
  },
  getExt: function ( type ) {
    mimes.map(function ( mime ) {
      if (mime.type === type)
      {
        return mime.extension[0];
      }
    });
    return false;
  },
  add: function ( type, extension ) {
    if (!getExt(type))
    {
      mimes.push({"type" : type, "extension" : [extension]});
    }
    else
    {
      mimes.map(function ( mime ) {
        if (mime.type === type)
        {
          mime.extension.push(extension);
        }
      }); 
    }
  },
  removeType: function ( type ) {
    for (var i = 0; i < mimes.length; i++)
    {
      if (mimes[i].type === type)
      {
        mimes.splice(i, 1);
      }
    }
  },
  removeExt: function ( extension ) {
    for (var i = 0; i < mimes.length; i++)
    {
      for (var j = 0; j < mimes[i].extension.length; j++)
      {
        if (mimes[i].extension[j] === extension)
        {
          mimes[i].extension.splice(j, 1);
        }
      }
    }
  }
};
