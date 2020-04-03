'use strict';
Array.prototype.getLastElement = function () {
    if (this.length <= 0)
        return null;
    return this[this.length - 1];
};
Array.prototype.getFirstElement = function () {
    if (this.length <= 0)
        return null;
    return this[0];
};
Array.prototype.getMiddleElement = function () {
    var _this = this;
    if (this.length <= 0)
        return null;
    var middle = [Math.floor(this.length / 2)];
    var elements = [];
    this.length % 2 == 0
        ? middle.push(Math.floor(this.length / 2) - 1)
        : null;
    middle.sort(function (a, b) { return (a > b) ? 1 : -1; });
    middle.forEach(function (el) {
        elements.push(_this[el]);
    });
    return elements;
};
