'use strict'

interface Date {
  getWeekDay(): string;
  getWeekBegin(): Date;
  getFirstDay(): Date;
  getWeekEnd(): Date;
  getLastDay(): Date;
  nextDay(day: number): Date;
  backDay(day: number): Date;
}

Date.prototype.getWeekDay = function () {
  const weekEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekEng[this.getDay()];
};

Date.prototype.getWeekBegin = function () {
  var first = this.getDate() - this.getDay();
  return new Date(this.setDate(first));
};

Date.prototype.getWeekEnd = function () {
  var last = this.getDate() - this.getDay() + 6
  return new Date(this.setDate(last));
};

Date.prototype.getFirstDay = function () {
  return new Date(this.getFullYear(), this.getMonth(), 1);
};

Date.prototype.getLastDay = function () {
  return new Date(this.getFullYear(), this.getMonth() + 1, 0);
};

Date.prototype.nextDay = function (day: number) {
  let dateNow = new Date(this);
  return new Date(dateNow.setDate(dateNow.getDate() + day));
};

Date.prototype.backDay = function (day: number) {
  let dateNow = new Date(this);
  return new Date(dateNow.setDate(dateNow.getDate() - day));
};
