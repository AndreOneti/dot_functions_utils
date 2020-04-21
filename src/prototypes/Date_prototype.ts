'use strict'

interface Date {
  getWeekDay(): string;
  getWeekBegin(): Date;
  getFirstDay(): Date;
  getWeekEnd(): Date;
  getLastDay(): Date;
  nextDay(day: number): Date;
  backDay(day: number): Date;
  format(): string;
  nextMonth(month: number): Date;
  previousMonth(month: number): Date;
  nextYear(year: number): Date;
  previousYear(year: number): Date;
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

Date.prototype.format = function () {
  let day = this.getDate();
  let month = this.getMonth();
  let year = this.getFullYear();
  return `${year}-${twoDigits(month)}-${twoDigits(day)}`;
};

Date.prototype.nextMonth = function (month: number) {
  let dateNow = new Date(this);
  return new Date(dateNow.setMonth(dateNow.getMonth() + month));
}

Date.prototype.previousMonth = function (month: number) {
  let dateNow = new Date(this);
  return new Date(dateNow.setMonth(dateNow.getMonth() - month));
}

Date.prototype.nextYear = function (year: number) {
  let dateNow = new Date(this);
  return new Date(dateNow.setFullYear(dateNow.getFullYear() + year));
}

Date.prototype.previousYear = function (year: number) {
  let dateNow = new Date(this);
  return new Date(dateNow.setFullYear(dateNow.getFullYear() - year));
}

function twoDigits(digit: string | number): string {
  if (0 <= digit && digit < 10) return "0" + digit.toString();
  return digit.toString();
}
