"use strict";
String.prototype.twoDigits = function () {
    if (0 <= Number(this) && Number(this) < 10)
        return "0" + Number(this).toString();
    return Number(this).toString();
};
String.prototype.threeDigits = function () {
    if (0 <= Number(this) && Number(this) < 10)
        return "00" + Number(this).toString();
    else if (10 <= Number(this) && Number(this) < 100)
        return "0" + Number(this).toString();
    else
        return Number(this).toString();
};
String.prototype.capalize = function () {
    return this.substr(0, 1).toUpperCase() + this.substr(1).toLowerCase();
};
String.prototype.capalizeAll = function () {
    var array = this.split(' '), finalString = '';
    array.forEach(function (letter) {
        finalString += letter.substr(0, 1).toUpperCase() + letter.substr(1).toLowerCase() + " ";
    });
    return finalString.trim();
};
