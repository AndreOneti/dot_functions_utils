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

var dateNow = new Date;               // 2020-04-13T14:09:02.649Z

// Work with Dates

console.log(dateNow.getWeekDay());      // Monday
console.log(dateNow.getFirstDay());     // 2020-04-01T03:00:00.000Z
console.log(dateNow.getLastDay());      // 2020-04-30T03:00:00.000Z
console.log(dateNow.getWeekEnd());      // 2020-04-18T14:09:02.649Z
console.log(dateNow.getWeekBegin());    // 2020-04-12T14:09:02.649Z
console.log(dateNow.nextDay(5));        // 2020-04-18T14:09:02.649Z
console.log(dateNow.backDay(5));        // 2020-04-08T14:09:02.649Z
console.log(dateNow.format());          // '2020-04-13'
console.log(dateNow.nextMonth(1));      // 2020-05-13T14:09:02.649Z
console.log(dateNow.previousMonth(1));  // 2020-03-13T14:09:02.649Z
console.log(dateNow.nextYear(1));       // 2021-04-13T14:09:02.649Z
console.log(dateNow.previousYear(1));   // 2019-04-13T14:09:02.649Z

// Work with Arrays

let list = [1, 2, 3, 4];
let myList = [2, 3, 4];

list.getLastElement();                  // 4
list.getFirstElement();                 // 1
list.getMiddleElement();                // [2, 3]
myList.getMiddleElement();              // [3]

// Work with Strings

let myFirstString = '1';

myFirstString.twoDigits();              // '01'
myFirstString.threeDigits();            // '001'

let mySecondSting = '11';

mySecondSting.twoDigits();              // '11'
mySecondSting.threeDigits();            // '011'

let myThirdSting = '123';

myThirdSting.twoDigits();               // '123'
myThirdSting.threeDigits();             // '123'

let myFourthString = 'my string';

myFourthString.captalize();             // 'My string'
myFourthString.captalizeAll();          // 'My String'

let myString = 'my string';

myFourthString.splitToArray(3);         // [ 'my ', 'str', 'ing' ]
myFourthString.splitToArray(2);         // [ 'my', ' s', 'tr', 'in', 'g' ]

myString = '';

myString.splitToArray(2);               // []

// Work with functions

let firstString = '1';

twoDigits(firstString);                 // '01'
threeDigits(firstString);               // '001'

let secondSting = '11';

twoDigits(secondSting);                 // '11'
threeDigits(secondSting);               // '011'

let thirdSting = '123';

twoDigits(thirdSting);                  // '123'
threeDigits(thirdSting);                // '123'
```

<br>
<hr>

[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/AndreOneti/dot_functions_utils/blob/master/LICENSE)

[travis-report-image]: https://travis-ci.org/AndreOneti/dot_functions_utils.svg?branch=master
[travis-report-url]: https://travis-ci.org/github/AndreOneti/dot_functions_utils
[downloads-image]: https://img.shields.io/npm/dm/dot_functions_utils.svg
[downloads-url]: https://npmjs.org/package/dot_functions_utils
[npm-image]: https://img.shields.io/npm/v/dot_functions_utils.svg
[npm-url]: https://npmjs.org/package/dot_functions_utils
[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://github.com/AndreOneti/dot_functions_utils
[issues-open-image]: https://img.shields.io/github/issues/AndreOneti/dot_functions_utils.svg
[issues-open-url]: https://github.com/AndreOneti/dot_functions_utils/issues?q=is%3Aopen+is%3Aissue
