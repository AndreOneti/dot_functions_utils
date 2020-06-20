'use strict'

interface Object {
  log(): Object;
}

Object.prototype.log = function () {
  console.log(`[${(new Date()).format('dd/mm/yyyy - hh:mm:ss')}] > `, this);
  return this;
}
