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
  toFormat(format: string,): string;
  toFormat(format: string, language: 'en'): string;
  toFormat(format: string, language: 'es'): string;
  /**
   * Function to Format date like you want.
   *
   * To day formate have 4 variations on date 01/07/2020:
   *  - d -> 1
   *  - dd -> 01
   *  - ddd -> Wed
   *  - dddd -> Wednesday
   *
   * To month formate have 4 variations on date 01/07/2020:
   *  - m -> 7
   *  - mm -> 07
   *  - mmm -> July
   *  - mmmm -> July
   *
   * To year formate have 2 variations on date 01/07/2020:
   *  - yy -> 20
   *  - yyyy -> 2020
   *
   * To hours, minutes and second formate have 1 variations on date 01/07/2020 00:18:35
   *  - HH -> 00
   *  - MM -> 18
   *  - SS -> 35
   */
  toFormat(format: string, language: 'pt-br'): string;
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
  if (arg && arg === "yyyy-mm-dd") return `${year}-${month.twoDigits()}-${day.twoDigits()}`;
  if (arg && arg === "dd-mm-yyyy") return `${day.twoDigits()}-${month.twoDigits()}-${year}`;
  if (arg && arg === "yyyy/mm/dd") return `${year}/${month.twoDigits()}/${day.twoDigits()}`;
  if (arg && arg === "dd/mm/yyyy") return `${day.twoDigits()}/${month.twoDigits()}/${year}`;
  if (arg && arg === "dd/mm/yyyy - hh:mm:ss") return `${day.twoDigits()}/${month.twoDigits()}/${year} - ${hour}:${minute}:${second}`;
  return `${year}-${month.twoDigits()}-${day.twoDigits()}`;
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

Date.prototype.log = function () {
  /* istanbul ignore next */
  let arg = arguments[0];
  console.log("[ " + (new Date()).format('dd/mm/yyyy - hh:mm:ss') + " ] " + (arg ? ("(" + arg + ") ") : "") + "> ", this);
  return this;
}

Date.prototype.toFormat = function (format: string, language: string = 'en'): string {

  let monthRed: string[] = [],
    weekRed: string[] = [],
    month: string[] = [],
    week: string[] = [];

  if ('en' === language) {
    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthRed = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    weekRed = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }

  if ('es' === language) {
    month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    monthRed = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"];
    week = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    weekRed = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  }

  if ('pt-br' === language) {
    month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    monthRed = ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    weekRed = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  }

  var objParts: any = {
    "d": this.getDate(),
    "dd": this.getDate().twoDigits(),
    "ddd": weekRed[this.getDay()],
    "dddd": week[this.getDay()],
    "m": this.getMonth() + 1,
    "mm": `${this.getMonth() + 1}`.twoDigits(),
    "mmm": monthRed[this.getMonth()],
    "mmmm": month[this.getMonth()],
    "yy": this.getFullYear().toString().substring(2),
    "yyyy": this.getFullYear(),
    "HH": this.getHours().twoDigits(),
    "MM": this.getMinutes().twoDigits(),
    "SS": this.getSeconds().twoDigits()
  }

  return (
    format.replace(
      new RegExp("(d{1,4}|m{1,4}|y{4}|y{2}|H{1,2}|M{1,2}|S{1,2})", "g"),
      function ($1: string) {
        return (objParts[$1]);
      })
  );
}
