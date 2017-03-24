/**
 * Created by trean on 19.03.17.
 */

var fs = require('fs'),

  dict = JSON.parse(fs.readFileSync('data/enru.dict.json', 'utf8')),
  dict_ru = JSON.parse(fs.readFileSync('data/ruen.dict.json', 'utf8'));

exports.dict = dict;
exports.dict_ru = dict_ru;

exports.enru = function (word) {
  return dict[word].toLowerCase() || dict[word.toLowerCase()].toLowerCase();
};

exports.ruen = function (word) {
  return dict_ru[word].toLowerCase() || dict_ru[word.toLowerCase()].toLowerCase();
}
