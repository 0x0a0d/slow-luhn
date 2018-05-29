# slow-luhn

Calculate or validate Luhn algorithm

#Usage

```javascript
const luhn = require('slow-luhn');
luhn('4564456445644564'); // true
luhn('4564456445644563'); // false
luhn('456445644564456', true); // 4
```

#Method

    Luhn(checkString, [getChecksumDigit = false]);
    + If getChecksumDigit is true, return (Number) checksum
    + Else return result Luhn test checkString 