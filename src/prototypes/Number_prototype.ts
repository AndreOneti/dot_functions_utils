'use strict'

interface Number {
  log(): number;
}

Number.prototype.log = function () {
  console.log(`[${(new Date()).format('dd/mm/yyyy - hh:mm:ss')}] > `, + this);
  return + this;
}
