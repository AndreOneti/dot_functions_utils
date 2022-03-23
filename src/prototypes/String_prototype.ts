interface String {
  captalize(): string;
  twoDigits(): string;
  threeDigits(): string;
  captalizeAll(): string;
  splitToArray(minLength: number): string[];
  encodeBase64(): string;
  decodeBase64(): string;
  decapitalize(): string;
  reverse(): string;
  toJson(): object | string;
  log(): string;
  log(msg: string): string;
  map(
    callbackfn: (value: string, index: number, array: string[]) => string
  ): string;
  format(...labes: string[]): string;
  count(rgx: string | number): number;
}

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
  else return Number(this).toString();
};

String.prototype.captalize = function () {
  return this.substr(0, 1).toUpperCase() + this.substr(1).toLowerCase();
};

String.prototype.captalizeAll = function () {
  let finalString = this.trim();
  return finalString.replace(/\b[a-z]/g, (char) => char.toUpperCase());
};

String.prototype.splitToArray = function (minLength: number) {
  let index = Math.floor(this.length / minLength);
  /* istanbul ignore next */
  if (this.length % minLength > 0) index = Number(index) + 1;
  let array: string[] = [];
  for (let i = 0; i < index; i++) {
    array.push(this.slice(minLength * i, minLength * (i + 1)));
  }
  return array;
};

String.prototype.encodeBase64 = function () {
  try {
    /* istanbul ignore next */
    return window.btoa(this.toString());
  } catch (error) {
    /* istanbul ignore next */
    return Buffer.from(this).toString("base64");
  }
};

String.prototype.decodeBase64 = function () {
  try {
    /* istanbul ignore next */
    return window.atob(this.toString());
  } catch (error) {
    /* istanbul ignore next */
    return Buffer.from(this.toString(), "base64").toString();
  }
};

String.prototype.decapitalize = function () {
  let [first, ...rest] = this.split("");
  return first.toLowerCase() + rest.join("");
};

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

String.prototype.toJson = function () {
  try {
    return JSON.parse("" + this);
  } catch (error) {
    return this;
  }
};

String.prototype.log = function () {
  /* istanbul ignore next */
  let arg = arguments[0];
  console.log(
    "[ " +
      new Date().format("dd/mm/yyyy - hh:mm:ss") +
      " ] " +
      (arg ? "(" + arg + ") " : "") +
      "> ",
    "" + this
  );
  return "" + this;
};

String.prototype.map = function (
  callbackfn: (value: string, index: number, array: string[]) => string
): string {
  return this.split("").map(callbackfn).join("");
};

String.prototype.format = function () {
  const args = arguments;
  return this.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != "undefined" ? args[number] : match;
  });
};

String.prototype.count = function count(rgx: string | number) {
  const rx = new RegExp(String(rgx), "ig");
  return (this.match(rx) || []).length;
};
