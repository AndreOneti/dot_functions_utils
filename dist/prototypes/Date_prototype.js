'use strict';
Date.prototype.getWeekDay = function () {
    var weekEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekEng[this.getDay()];
};
Date.prototype.getWeekBegin = function () {
    var first = this.getDate() - this.getDay();
    return new Date(this.setDate(first));
};
Date.prototype.getWeekEnd = function () {
    var last = this.getDate() - this.getDay() + 6;
    return new Date(this.setDate(last));
};
Date.prototype.getFirstDay = function () {
    return new Date(this.getFullYear(), this.getMonth(), 1);
};
Date.prototype.getLastDay = function () {
    return new Date(this.getFullYear(), this.getMonth() + 1, 0);
};
