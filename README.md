# enru-dict #
en-ru and ru-en dictionaries as objects.

## Install ##

```
npm install enru-dict
```

## Usage ##

``` javascript
var dict = require("enru-dict").dict;

function translate(word) {
    return dict[word];
}

translate("alligators"); // 'аллигаторы'
```
