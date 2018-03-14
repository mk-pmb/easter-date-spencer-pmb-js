/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var spencer = require('../'), year, easter,
  from = 325,   // 1st Council of Nicaea
  upto = from * 10;
for (year = from; year < upto; year += 1) {
  easter = spencer(year);
  console.log([ year, easter.month, easter.day ].join('\t'));
}
