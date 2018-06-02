/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
function easter2char(ea) {
  // Number ranges:
  // 0: reserved for lookup failures (accidential number conversions
  //    of empty string or undefined)
  // 1 … a (10): March 22th … March 31st
  // b (11) … z (35): April 1st … April 25th
  return (ea.day + (ea.month === 3 ? -21 : 10)).toString(36);
}
module.exports = easter2char;
