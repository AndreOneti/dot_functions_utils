# Dot Functins Utils

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Maintenance][maintenance-img]][maintenance-url]
[![GitHub issues][issues-open-image]][issues-open-url]
[![TravisCi Build][travis-report-image]][travis-report-url]


## How to use

### Install

``` sh
npm i dot_functions_utils
or
yarn add dot_functions_utils
```

<hr>

### Dates

``` javascript
require('dot_functions_utils');

var dateNow = new Date;                           // 2020-04-13T14:09:02.649Z

dateNow.getWeekDay();                             // Monday
dateNow.getWeekDay('eng');                        // Monday
dateNow.getWeekDay('es');                         // Lunes
dateNow.getWeekDay('pt-br');                      // Segunda
dateNow.getFirstDay();                            // 2020-04-01T03:00:00.000Z
dateNow.getLastDay();                             // 2020-04-30T03:00:00.000Z
dateNow.getWeekEnd();                             // 2020-04-18T14:09:02.649Z
dateNow.getWeekBegin();                           // 2020-04-12T14:09:02.649Z
dateNow.nextDay(5);                               // 2020-04-18T14:09:02.649Z
dateNow.backDay(5);                               // 2020-04-08T14:09:02.649Z
dateNow.format();                                 // '2020-04-13'
dateNow.format('yyyy-mm-dd');                     // '2020-04-13'
dateNow.format('dd-mm-yyyy');                     // '13-04-2020'
dateNow.format('dd/mm/yyyy');                     // '13/04/2020'
dateNow.format('yyyy/mm/dd');                     // '2020/04/13'
dateNow.nextMonth(1);                             // 2020-05-13T14:09:02.649Z
dateNow.previousMonth(1);                         // 2020-03-13T14:09:02.649Z
dateNow.nextYear(1);                              // 2021-04-13T14:09:02.649Z
dateNow.previousYear(1);                          // 2019-04-13T14:09:02.649Z
dateNow.getMonthName();                           // April
dateNow.getMonthName('eng');                      // April
dateNow.getMonthName('es');                       // Abril
dateNow.getMonthName('pt-br');                    // Abril
dateNow.getDayOfYear();                           // 105

```

<hr>

### Arrays

``` javascript
require('dot_functions_utils');

let list = [1, 2, 3, 4];
let myList = [2, 3, 4];

list.getLastElement();                            // 4
list.getFirstElement();                           // 1
list.getMiddleElement();                          // [2, 3]
myList.getMiddleElement();                        // [3]

```

<hr>

### Strings

``` javascript
require('dot_functions_utils');

let myFirstString = '1';

myFirstString.twoDigits();                        // '01'
myFirstString.threeDigits();                      // '001'

let mySecondString = '11';

mySecondString.twoDigits();                       // '11'
mySecondString.threeDigits();                     // '011'

let myThirdString = '123';

myThirdString.twoDigits();                        // '123'
myThirdString.threeDigits();                      // '123'

let myFourthString = 'my string';

myFourthString.captalize();                       // 'My string'
myFourthString.captalizeAll();                    // 'My String'

let myString = 'my string';

myFourthString.splitToArray(3);                   // [ 'my ', 'str', 'ing' ]
myFourthString.splitToArray(2);                   // [ 'my', ' s', 'tr', 'in', 'g' ]

myString = '';

myString.splitToArray(2);                         // []

myString = 'Hello World!';

myString.toBase64();                              // 'SGVsbG8gV29ybGQh'

myString = 'SGVsbG8gV29ybGQh';

myString.fromBase64();                            // 'Hello World!'

myString = 'Hello World!';

myString.decapitalize();                          // 'hello World!'

myString.reverse();                               // '!dlrow olleh'

```

<hr>

### Functions

``` javascript
const { threeDigits, twoDigits, generateUniqueID  } = require('dot_functions_utils');

let firstString = '1';

twoDigits(firstString);                           // '01'
threeDigits(firstString);                         // '001'

let secondString = '11';

twoDigits(secondString);                          // '11'
threeDigits(secondString);                        // '011'

let thirdString = '123';

twoDigits(thirdString);                           // '123'
threeDigits(thirdString);                         // '123'

generateUniqueID ();                              // "3ace9a54-524e-c7df-9556-c97042413565"
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
