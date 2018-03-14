/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function romanCatholicEaster_SpencerAlgo(gregorianYear) {
  function mod(a, b) { return (a % b); }
  function div(a, b) {
    var q = (a / b);
    if (q < 0) { throw new Error('Unexpected negative q'); }
    return Math.floor(q);
  }
  var y = gregorianYear, skipMarchDays = 21,
    a = mod(y, 19),
    b = div(y, 100),
    c = mod(y, 100),
    d = div(b, 4),
    e = mod(b, 4),
    f = div(b + 8, 25),
    g = div(b - f + 1, 3),
    h = mod((19 * a) + b - d - g + 15, 30),
    i = div(c, 4),
    k = mod(c, 4),
    l = mod(32 + (2 * e) + (2 * i) - h - k, 7),
    m = div(a + (11 * h) + (22 * l), 451),
    t = h + l - (7 * m) + skipMarchDays,
    n = div(t, 31) + 3,
    p = mod(t, 31);
  return { month: n, day: p + 1 };
}

module.exports = romanCatholicEaster_SpencerAlgo;
