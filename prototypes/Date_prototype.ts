'use strict'

interface Date {
  getWeekDay(): string;
  weekBegin(): Date;
  firstDay(): Date;
  weekEnd(): Date;
  lastDay(): Date;
}

Date.prototype.getWeekDay = function () {
  const weekEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekEng[this.getDay()];
};

Date.prototype.weekBegin = function () {
  var first = this.getDate() - this.getDay();
  return new Date(this.setDate(first));
};

Date.prototype.weekEnd = function () {
  var last = this.getDate() - this.getDay() + 6
  return new Date(this.setDate(last));
};

Date.prototype.firstDay = function () {
  return new Date(this.getFullYear(), this.getMonth(), 1);
};

Date.prototype.lastDay = function () {
  return new Date(this.getFullYear(), this.getMonth() + 1, 0);
};
