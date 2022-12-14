// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};                                                                                 INDX( 	 VU
%#           (     ?      	 ?                    ?   ( h X     ]    ????V? ?8?m?????V? F???V?H       D               . t r a v i s . y m l ?    h V     ]    ^h???V? ?8?m??????V?.1???V?H      G              
b r o w s e r . j s o ?    h R     ]    ?I???V? ?8?m?????V?@:???V?(      (              i n d e x . j s j s o     ` P     ]    ?H???V? ?8?m??E???V??????V?       "              L I C E N S E <    ` N     ]    ?????V? ?8?m	 6??V??????V??      ?              m g f . j s e ?    p Z     ]    #?/?V? ,0?V? ,0?V??`?B0c?                       n o d e _ m o d u l e s       ?    h R     ]    #?/?V? ,0?V? ,0?V??`?B0c?                       N O D E _ M ~ 1 j s o ??    p Z     ]    oy?V??B{?V?s???V??B{?V?                     p a c k a g e . j s o n p t . ??    p Z     ]    oy?V??B{?V?s???V??B{?V?                     P A C K A G ~ 1 . J S O p t . q    x d   	 ]    ?????V? ?8?m?????V??"??V?       |	              p r i v a t e D e c r y p t . j s     q    h X     ]    ?????V? ?8?m?????V??"??V?       |	              P R I V A T ~ 1 . J S ?    x b     ]    6??V? ?8?m?????V????V?       	              p u b l i c E n c r y p t . j s       ?    h X     ]    6??V? ?8?m?????V????V?       	              P U B L I C ~ 1 . J S ?    h T     ]    C??V? ?8?m?%??V?P???V?`      Z            	 	r e a d m e . m d Y M ?    ` J     ]    ????V????V????V????B0c?                       t e s t I S ~ ?   ( p Z     ]    ????V? ?8?m?????V? F???V?H       D               T R A V I S ~ 1 . Y M L       ;    p \     ]    ????V? ?8?m?&p??V?0???V?                    w i t h P u b l i c . j s     ;    h X     ]    ????V? ?8?m?&p??V?0???V?                    W I T H P U ~ 1 . J S ?    ` N     ]    ????V? ?8?m?H???V?????V??     	 ?               x o r . j s                               ?    ` N     ]    ????V? ?8?m?H???V?????V??       ?               x o r . j s                 ?    ` N     ]    ????V? ?8?m?H???V?????V??       ?               x o r 