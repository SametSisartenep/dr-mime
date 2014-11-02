var mimes = require('./mimes.json');

module.exports = exports = {
  getType: function ( extension ) {
    var type;

    mimes.map(function ( mime ) {
      for (var i = 0; i < mime.extension.length; i++)
      {
        if (mime.extension[i] === extension)
        {
          type = mime.type;
        }
      }
    });
    return type || 'text/plain';
  },
  getExt: function ( type ) {
    var extension;

    mimes.map(function ( mime ) {
      if (mime.type === type)
      {
        extension = mime.extension[0];
      }
    });
    return extension || false;
  },
  getHeader: function ( typext ) {
    if (typext.indexOf('/') !== -1)
    {
      return {'Content-Type' : typext};
    }
    else
    {
      return {'Content-Type' : this.getType(typext)};
    }
  },
  add: function ( type, extension ) {
    if (!this.getExt(type))
    {
      mimes.push({'type' : type, 'extension' : [extension]});
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
