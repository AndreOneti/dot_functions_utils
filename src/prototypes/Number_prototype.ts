'use strict'

interface Number {
  log(): number;
  log(msg: string): number;
  twoDigits(): string;
  threeDigits(): string;
}

Number.prototype.log = function () {
  /* istanbul ignore next */
  let arg = arguments[0];
  console.log("[ " + (new Date()).format('dd/mm/yyyy - hh:mm:ss') + " ] " + (arg ? ("(" + arg + ") ") : "") + "> ", "" + this);
  return + this;
}

Number.prototype.twoDigits = function () {
  if (0 <= this && this < 10) return "0" + this.toString();
  return this.toString();
};

Number.prototype.threeDigits = function () {
  if (0 <= this && this < 10) return "00" + this.toString();
  else if (10 <= this && this < 100) return "0" + this.toString();
  else return this.toString();
};
