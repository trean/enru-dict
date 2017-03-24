/**
 * Created by trean on 24.03.17.
 */

var assert = require('assert'),
  dict = require("../dict").dict,
  dict_ru = require("../dict").dict_ru,
  enru = require("../dict.js").enru,
  ruen = require("../dict.js").ruen;

describe('Dictionary test', function () {
  describe('en-ru dict tests', function () {
    it('should return a russian word', function () {
      var word = enru("alligator");
      assert.equal(word, "аллигатор");
    });
    it('should return a russian word from dict', function () {
      var word = dict["alkalinity"];
      assert.equal(word, "щелочность");
    });
    it('should return null', function () {
      var word = enru("ufx");
      assert.equal(word, null);
    });
  });

  describe('ru-en dict tests', function () {
    it('should return an english word', function () {
      var word = ruen("щелочность");
      assert.equal(word, "alkalinity");
    });
    it('should return an english word from dict_ru', function () {
      var word = dict_ru["щелочность"];
      assert.equal(word, "alkalinity");
    });
    it('should return null', function () {
      var word = ruen("алло");
      assert.equal(word, null);
    });
  });
});
