/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
function char2easter(c) {
  var n = (parseInt(c, 36) || 0);
  if (n < 1) { throw new RangeError('Invalid day code'); }
  return (n < 11 ? { month: 3, day: n + 21 } : { month: 4, day: n - 10 });
}
module.exports = char2easter;
