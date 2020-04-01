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
