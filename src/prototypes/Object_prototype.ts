'use strict'

interface Object {
  log(): Object;
  compare(object: Object): boolean;
}

Object.prototype.log = function () {
  console.log(`[${(new Date()).format('dd/mm/yyyy - hh:mm:ss')}] > `, this);
  return this;
}

Object.prototype.compare = function (object: Object) {
  let thisString = JSON.stringify(this);
  let objectString = JSON.stringify(object);
  return thisString == objectString;
}
