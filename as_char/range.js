/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
var easter2char = require('./ea2ch.js'), spencer = require('../'),
  args = process.argv.slice(2),
  startYear = +(args[0] || (new Date()).getFullYear()),
  endYear = (+args[1] || (startYear + 99)),
  year, chars = '';

for (year = startYear; year < endYear; year += 1) {
  chars += easter2char(spencer(year));
}
console.log(startYear + ' … ' + endYear + '\t' + chars);
