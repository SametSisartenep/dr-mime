var assert = require('assert'),
  drMime = require('../');

describe('Core test', function () {
  describe('getType() function', function () {
    it('should return \'application/javascript\' on getType(\'.js\')', function () {
      assert.equal('application/javascript', drMime.getType('.js'));
    });
  });

  describe('getExt() function', function () {
    it('should return \'.png\' on getExt(\'image/png\')', function () {
      assert.equal('.png', drMime.getExt('image/png'));
    });
  });

  describe('add() function', function () {
    it('should add new type \'sublime/subl\' and extension \'.subl\' on add(\'sublime/subl\', \'.subl\')', function () {
      drMime.add('sublime/subl', '.subl');
      assert.equal('sublime/subl', drMime.getType('.subl'));
    });
  });

  describe('removeType() function', function () {
    it('should remove \'text/html\' and extensions from mimes on removeType(\'text/html\')', function () {
      drMime.removeType('text/html');
      assert.equal('text/plain', drMime.getType('.html'));
    });
  });

  describe('removeExt() function', function () {
    it('should remove extension \'.jpe\' from \'image/jpeg\' on removeExt(\'.jpe\')', function () {
      drMime.removeExt('.jpe');
      assert.equal('.jpeg', drMime.getExt('image/jpeg'));
    });
  });
});
