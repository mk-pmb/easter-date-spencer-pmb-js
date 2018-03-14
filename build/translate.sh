#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-


function translate () {
  export LANG{,UAGE}=en_US.UTF-8  # make error messages search engine-friendly
  local SELFPATH="$(readlink -m "$BASH_SOURCE"/..)"
  cd "$SELFPATH" || return $?

  local SRCFN='de-166077920-raw.txt'
  local SRCURL='https://de.wikipedia.org/wiki/?oldid=166077920&action=raw'
  if [ ! -s "$SRCFN" ]; then
    wget --output-document="$SRCFN".part --continue "$SRCURL" || return $?
    mv --no-clobber --no-target-directory -- "$SRCFN"{.part,} || return $?
  fi

  LANG=C sed -nre '
    /^<math>/{
      s~<br ?/?>$~~
      s! = Jahr~! = y~!
      s~\s+~ ~g
      s!^<math>([a-z] = )\(?([^~()]+)\)?~(div|mod)~([0-9]+|$\
        )</math>$!\1\3\a(\2, \4),!
      s!([0-9]+) ?([a-z])!(\1 * \2)!g
      s~\a~~p
    }' -- "$SRCFN" || return $?

  return 0
}










[ "$1" == --lib ] && return 0; translate "$@"; exit $?
