
<!--#echo json="package.json" key="name" underline="=" -->
easter-date-spencer-pmb
=======================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Calculate the date of roman-catholic easter sunday, using the Spencer
algorithm.
<!--/#echo -->

I had [a translation program](build/translate.sh)
adapt the algorithm from the description on
[its German wikipedia page](https://de.wikipedia.org/wiki/?oldid=166077920),
then tweaked the result for performance.

The page's footnotes list the original English language sources,
and also depicts one of them.
Unfortunately at time of writing this module,
the English wikipedia seemed to not have an article about the algorithm.


Usage
-----

This module exports one function:

```javascript
var spencer = require('easter-date-spencer-pmb');
console.log(spencer(2018));   // { month: 4, day: 1 }
```


<!--#toc stop="scan" -->


Why use the Spencer algorithm?
------------------------------

As far as I understand the various Easter date calculcation methods,
the advantage of the Spencer algorithm is that it takes moon orbit
into account, thus producing the correct result for
all years of the Gregorian calendar [starting from 325 AD][nicaea1]

Beware: Other algorithms seem to be valid for "most of the years",
requiring a table lookup in a list of exceptions to see whether
the formula applies.



Date ranges
-----------

Don't be fooled by the `31` (number of days in March) in the
formulae for `n` and `p`. The English wikipedia's
[List of dates for Easter](https://en.wikipedia.org/wiki/?oldid=827866027)
gives the possible date range as:

* earliest: March 22th (e.g. in 1818)
* latest: April 25 (e.g. in 1943)

The first 21 days of March are out of range, so there are 10 possible days
in March. April adds 25 candidates, so in total there are 35 possibilities.




&nbsp;

  [nicaea1]: https://en.wikipedia.org/wiki/First_Council_of_Nicaea

License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
