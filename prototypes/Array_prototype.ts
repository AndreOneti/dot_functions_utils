'use strict'

interface Array<T> {
  last(): string;
  first(): string;
  middle(): Array<T> | null;
}

Array.prototype.last = function () {
  if (this.length <= 0)
    return null;
  return this[this.length - 1];
};

Array.prototype.first = function () {
  if (this.length <= 0)
    return null;
  return this[0];
};

Array.prototype.middle = function () {
  if (this.length <= 0)
    return null;
  console.log(Math.floor(this.length / 2));
  let middle = [Math.floor(this.length / 2)];
  let elements: any[] = [];
  this.length % 2 == 0
    ? middle.push(Math.floor(this.length / 2) - 1)
    : null;
  middle.sort((a, b) => (a > b) ? 1 : -1);

  middle.forEach(el => {
    elements.push(this[el]);
  });
  return elements;
};
