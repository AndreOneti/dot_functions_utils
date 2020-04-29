interface String {
  captalize(): string;
  twoDigits(): string;
  threeDigits(): string;
  captalizeAll(): string;
  splitToArray(minLength: number): string[];
  toBase64(): string;
  fromBase64(): string;
  decapitalize(): string;
}

String.prototype.twoDigits = function () {
  if (0 <= Number(this) && Number(this) < 10) return "0" + Number(this).toString();
  return Number(this).toString();
};

String.prototype.threeDigits = function () {
  if (0 <= Number(this) && Number(this) < 10) return "00" + Number(this).toString();
  else if (10 <= Number(this) && Number(this) < 100) return "0" + Number(this).toString();
  else return Number(this).toString();
};

String.prototype.captalize = function () {
  return this.substr(0, 1).toUpperCase() + this.substr(1).toLowerCase();
}

String.prototype.captalizeAll = function () {
  let array = this.split(' '), finalString = '';
  array.forEach(letter => {
    finalString += `${letter.substr(0, 1).toUpperCase() + letter.substr(1).toLowerCase()} `;
  });
  return finalString.trim();
}

String.prototype.splitToArray = function (minLength: number) {
  let index = Math.floor((this.length / minLength));
  /* istanbul ignore next */
  if ((this.length % minLength) > 0) index = Number(index) + 1;
  let array: string[] = [];
  for (let i = 0; i < index; i++) {
    array.push(this.slice(minLength * i, minLength * (i + 1)));
  }
  return array;
}

String.prototype.toBase64 = function () {
  try {
    /* istanbul ignore next */
    return window.btoa(this.toString());
  } catch (error) {
    /* istanbul ignore next */
    return Buffer.from(this).toString('base64');
  }
}

String.prototype.fromBase64 = function () {
  try {
    /* istanbul ignore next */
    return window.atob(this.toString());
  } catch (error) {
    /* istanbul ignore next */
    return Buffer.from(this.toString(), 'base64').toString();
  }
}

String.prototype.decapitalize = function () {
  let [first, ...rest] = this.split('');
  return first.toLowerCase() + rest.join('');
}
