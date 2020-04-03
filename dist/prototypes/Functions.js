'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function twoDigits(digit) {
    if (0 <= digit && digit < 10)
        return "0" + digit.toString();
    return digit.toString();
}
exports.twoDigits = twoDigits;
function threeDigits(digit) {
    if (0 <= digit && digit < 10)
        return "00" + digit.toString();
    else if (10 <= digit && digit < 100)
        return "0" + digit.toString();
    else
        return digit.toString();
}
exports.threeDigits = threeDigits;
