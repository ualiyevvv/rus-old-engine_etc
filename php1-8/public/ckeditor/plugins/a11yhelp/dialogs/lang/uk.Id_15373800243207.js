# -*- coding: iso-8859-1 -*-
# pysqlite2/dbapi2.py: the DB-API 2.0 interface
#
# Copyright (C) 2004-2005 Gerhard H?ring <gh@ghaering.de>
#
# This file is part of pysqlite.
#
# This software is provided 'as-is', without any express or implied
# warranty.  In no event will the authors be held liable for any damages
# arising from the use of this software.
#
# Permission is granted to anyone to use this software for any purpose,
# including commercial applications, and to alter it and redistribute it
# freely, subject to the following restrictions:
#
# 1. The origin of this software must not be misrepresented; you must not
#    claim that you wrote the original software. If you use this software
#    in a product, an acknowledgment in the product documentation would be
#    appreciated but is not required.
# 2. Altered source versions must be plainly marked as such, and must not be
#    misrepresented as being the original software.
# 3. This notice may not be removed or altered from any source distribution.

import collections
import datetime
import time

from _sqlite3 import *

paramstyle = "qmark"

threadsafety = 1

apilevel = "2.0"

Date = datetime.date

Time = datetime.time

Timestamp = datetime.datetime

def DateFromTicks(ticks):
    return Date(*time.localtime(ticks)[:3])

def TimeFromTicks(ticks):
    return Time(*time.localtime(ticks)[3:6])

def TimestampFromTicks(ticks):
    return Timestamp(*time.localtime(ticks)[:6])

version_info = tuple([int(x) for x in version.split(".")])
sqlite_version_info = tuple([int(x) for x in sqlite_version.split(".")])

Binary = buffer
collections.Sequence.register(Row)

def register_adapters_and_converters():
    def adapt_date(val):
        return val.isoformat()

    def adapt_datetime(val):
        return val.isoformat(" ")

    def convert_date(val):
        return datetime.date(*map(int, val.split("-")))

    def convert_timestamp(val):
        datepart, timepart = val.split(" ")
        year, month, day = map(int, datepart.split("-"))
        timepart_full = timepart.split(".")
        hours, minutes, seconds = map(int, timepart_full[0].split(":"))
        if len(timepart_full) == 2:
            microseconds = int('{:0<6.6}'.format(timepart_full[1].decode()))
        else:
            microseconds = 0

        val = datetime.datetime(year, month, day, hours, minutes, seconds, microseconds)
        return val


    register_adapter(datetime.date, adapt_date)
    register_adapter(datetime.datetime, adapt_datetime)
    register_converter("date", convert_date)
    register_converter("timestamp", convert_timestamp)

register_adapters_and_converters()

# Clean up namespace

del(register_adapters_and_converters)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "use strict";

var browserslist = require('browserslist');

var colorette = require('colorette');

var postcss = require('postcss');

var agents = require('caniuse-lite').agents;

var Browsers = require('./browsers');

var Prefixes = require('./prefixes');

var data = require('../data/prefixes');

var info = require('./info');

var WARNING = '\n' + '  Replace Autoprefixer `browsers` option to Browserslist config.\n' + '  Use `browserslist` key in `package.json` or `.browserslistrc` file.\n' + '\n' + '  Using `browsers` option can cause errors. Browserslist config \n' + '  can be used for Babel, Autoprefixer, postcss-normalize and other tools.\n' + '\n' + '  If you really need to use option, rename it to `overrideBrowserslist`.\n' + '\n' + '  Learn more at:\n' + '  https://github.com/browserslist/browserslist#readme\n' + '  https://twitter.com/browserslist\n' + '\n';

function isPlainObject(obj) {
  return Object.prototype.toString.apply(obj) === '[object Object]';
}

var cache = {};

function timeCapsule(result, prefixes) {
  if (prefixes.browsers.selected.length === 0) {
    return;
  }

  if (prefixes.add.selectors.length > 0) {
    return;
  }

  if (Object.keys(prefixes.add).length > 2) {
    return;
  }
  /* istanbul ignore next */


  result.warn('Greetings, time traveller. ' + 'We are in the golden age of prefix-less CSS, ' + 'where Autoprefixer is no longer needed for your stylesheet.');
}

module.exports = postcss.plugin('autoprefixer', function () {
  for (var _len = arguments.length, reqs = new Array(_len), _key = 0; _key < _len; _key++) {
    reqs[_key] = arguments[_key];
  }

  var options;

  if (reqs.length === 1 && isPlainObject(reqs[0])) {
    options = reqs[0];
    reqs = undefined;
  } else if (reqs.length === 0 || reqs.length === 1 && !reqs[0]) {
    reqs = undefined;
  } else if (reqs.length <= 2 && (Array.isArray(reqs[0]) || !reqs[0])) {
    options = reqs[1];
    reqs = reqs[0];
  } else if (typeof reqs[reqs.length - 1] === 'object') {
    options = reqs.pop();
  }

  if (!options) {
    options = {};
  }

  if (options.browser) {
    throw new Error('Change `browser` option to `overrideBrowserslist` in Autoprefixer');
  } else if (options.browserslist) {
    throw new Error('Change `browserslist` option to `overrideBrowserslist` in Autoprefixer');
  }

  if (options.overrideBrowserslist) {
    reqs = options.overrideBrowserslist;
  } else if (options.browsers) {
    if (typeof console !== 'undefined' && console.warn) {
      if (colorette.red) {
        console.warn(colorette.red(WARNING.replace(/`[^`]+`/g, function (i) {
          return colorette.yellow(i.slice(1, -1));
        })));
      } else {
        console.warn(WARNING);
      }
    }

    reqs = options.browsers;
  }

  var brwls