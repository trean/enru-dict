# enru-dict
en-ru dictionary as object

# Usage

``` javascript
var dict = require("enru-dict").dict;

function translate(word) {
    return dict[word];
}

translate("alligators"); // 'аллигаторы'
```
