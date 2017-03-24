/**
 * Created by trean on 19.03.17.
 */

var fs = require('fs'),

  dict = JSON.parse(fs.readFileSync(__dirname + '/data/enru.dict.json', 'utf8')),
  dict_ru = JSON.parse(fs.readFileSync(__dirname + '/data/ruen.dict.json', 'utf8'));

exports.dict = dict;
exports.dict_ru = dict_ru;

exports.enru = function (word) {
  var translate = dict[word] || dict[word.toLowerCase()] || null;
  if (translate) {
    return translate.toLowerCase();
  }
};

exports.ruen = function (word) {
  var translate = dict_ru[word] || dict_ru[word.toLowerCase()] || null;
  if (translate) {
    return translate.toLowerCase();
  }
};
