# Dot Functins Utils

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Maintenance][maintenance-img]][maintenance-url]
[![GitHub issues][issues-open-image]][issues-open-url]
[![TravisCi Build][travis-report-image]][travis-report-url]


## How to use

installing using yarn

``` sh
yarn add dot_functions_utils
```

installing using npm

``` sh
npm i dot_functions_utils
```

``` javascript

const { threeDigits, twoDigits } = require('dot_functions_utils');

var dateNow = new Date;

// Work with Dates

console.log(dateNow.getWeekDay());    // Wednesday
console.log(dateNow.getFirstDay());   // 2020-04-01T03:00:00.000Z
console.log(dateNow.getLastDay());    // 2020-04-30T03:00:00.000Z
console.log(dateNow.getWeekEnd());    // 2020-04-05T02:36:03.999Z
console.log(dateNow.getWeekBegin());  // 2020-03-29T02:35:43.286Z

// Work with Arrays

let list = [1, 2, 3, 4];
let myList = [2, 3, 4];

list.getLastElement();                // 4
list.getFirstElement();               // 1
list.getMiddleElement();              // [2, 3]
myList.getMiddleElement();            // [3]

// Work with Strings or function (same functionalits)

let myFirstString = "1";

myFirstString.twoDigits();            // '01'
twoDigits(myFirstString);             // '01'
myFirstString.threeDigits();          // '001'
threeDigits(myFirstString);           // '001'

let mySecondSting = '11';

mySecondSting.twoDigits();            // '11'
twoDigits(mySecondSting);             // '11'
mySecondSting.threeDigits();          // '011'
threeDigits(mySecondSting);           // '011'

let myThirdSting = '123';

myThirdSting.twoDigits();             // '123'
twoDigits(myThirdSting);              // '123'
myThirdSting.threeDigits();           // '123'
threeDigits(myThirdSting);            // '123'
```

<br>
<hr>

[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/AndreOneti/dot_functins_utils/blob/master/LICENSE)

[travis-report-image]: https://travis-ci.org/AndreOneti/dot_functins_utils.svg?branch=master
[travis-report-url]: https://travis-ci.org/github/AndreOneti/dot_functins_utils
[downloads-image]: https://img.shields.io/npm/dm/dot_functions_utils.svg
[downloads-url]: https://npmjs.org/package/dot_functions_utils
[npm-image]: https://img.shields.io/npm/v/dot_functions_utils.svg
[npm-url]: https://npmjs.org/package/dot_functions_utils
[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://github.com/AndreOneti/dot_functins_utils
[issues-open-image]: https://img.shields.io/github/issues/AndreOneti/dot_functins_utils.svg
[issues-open-url]: https://github.com/AndreOneti/dot_functins_utils/issues?q=is%3Aopen+is%3Aissue
