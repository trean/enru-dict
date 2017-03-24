# enru-dict #
en-ru and ru-en dictionaries as objects.

## Install ##

```
npm install enru-dict
```

## Usage ##

To use en-ru translate direction:
``` javascript
 var enru = require('../dict.js').enru,

 var word = enru('alligator');
 console.log(word); // 'аллигатор'
 ```

To use ru-en translate direction:
``` javascript
var ruen = require('../dict.js').ruen;

var word = ruen('щелочность');
console.log(word); // 'alkalinity'
```

Also you can directly call objects:

``` javascript
var dict = require('enru-dict').dict;    // en-ru direction object
var dict_ru = require('enru-dict').dict; // ru-en direction object

dict['alkalinity'];    // 'щелочность'
dict_ru['щелочность']; // 'alkalinity'
```
