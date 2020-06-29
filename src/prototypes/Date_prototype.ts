'use strict'

interface Date {
  getWeekDay(): string;
  getWeekDay(language: 'pt-br'): string;
  getWeekDay(language: 'en'): string;
  getWeekDay(language: 'es'): string;
  getWeekBegin(): Date;
  getFirstDay(): Date;
  getWeekEnd(): Date;
  getLastDay(): Date;
  nextDay(day: number): Date;
  backDay(day: number): Date;
  format(): string;
  format(type: "yyyy-mm-dd"): string;
  format(type: "dd-mm-yyyy"): string;
  format(type: "yyyy/mm/dd"): string;
  format(type: "dd/mm/yyyy"): string;
  format(type: "dd/mm/yyyy - hh:mm:ss"): string;
  nextMonth(month: number): Date;
  previousMonth(month: number): Date;
  nextYear(year: number): Date;
  previousYear(year: number): Date;
  getMonthName(): string;
  getMonthName(language: 'pt-br'): string;
  getMonthName(language: 'en'): string;
  getMonthName(language: 'es'): string;
  getDayOfYear(): number;
  log(): Date;
  log(msg: string): Date;
}

Date.prototype.getWeekDay = function () {
  let weekEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let weekEsp = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  let weekPtBr = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let arg = arguments[0];
  if (arg && arg === "pt-br") return weekPtBr[this.getDay()];
  if (arg && arg === "en") return weekEng[this.getDay()];
  if (arg && arg === "es") return weekEsp[this.getDay()];
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
  let month = this.getMonth() + 1;
  let year = this.getFullYear();
  let hour = this.getHours().toString().twoDigits();
  let minute = this.getMinutes().toString().twoDigits();
  let second = this.getSeconds().toString().twoDigits();
  let arg = arguments[0];
  if (arg && arg === "yyyy-mm-dd") return `${year}-${twoDigits(month)}-${twoDigits(day)}`;
  if (arg && arg === "dd-mm-yyyy") return `${twoDigits(day)}-${twoDigits(month)}-${year}`;
  if (arg && arg === "yyyy/mm/dd") return `${year}/${twoDigits(month)}/${twoDigits(day)}`;
  if (arg && arg === "dd/mm/yyyy") return `${twoDigits(day)}/${twoDigits(month)}/${year}`;
  if (arg && arg === "dd/mm/yyyy - hh:mm:ss") return `${twoDigits(day)}/${twoDigits(month)}/${year} - ${hour}:${minute}:${second}`;
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

Date.prototype.getMonthName = function () {
  let monthNameEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let monthNameEsp = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  let monthNamePtBr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  let arg = arguments[0];
  if (arg && arg === "pt-br") return monthNamePtBr[this.getMonth()];
  if (arg && arg === "en") return monthNameEng[this.getMonth()];
  if (arg && arg === "es") return monthNameEsp[this.getMonth()];
  return monthNameEng[this.getMonth()];
}

Date.prototype.getDayOfYear = function () {
  let now = this.getTime();
  let start = (new Date(this.getFullYear(), 0, 0)).getTime();
  let diff = now - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  return day;
}

function twoDigits(digit: string | number): string {
  if (0 <= digit && digit < 10) return "0" + digit.toString();
  return digit.toString();
}

Date.prototype.log = function () {
  /* istanbul ignore next */
  let arg = arguments[0];
  console.log("[ " + (new Date()).format('dd/mm/yyyy - hh:mm:ss') + " ] " + (arg ? ("(" + arg + ") ") : "") + "> ", this);
  return this;
}
