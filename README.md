# enru-dict #
en-ru dictionary as object

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
