/**
 * otplib-browser
 *
 * @author Gerald Yeo <contact@fusedthought.com>
 * @version: 10.0.1
 * @license: MIT
 **/
!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.otplib = e())
    : (t.otplib = e());
})(window, function() {
  return (function(t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var i in t)
            n.d(
              r,
              i,
              function(e) {
                return t[e];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 87))
    );
  })([
    function(t, e) {
      'function' == typeof Object.create
        ? (t.exports = function(t, e) {
            (t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (t.exports = function(t, e) {
            t.super_ = e;
            var n = function() {};
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          });
    },
    function(t, e, n) {
      var r = n(2),
        i = r.Buffer;
      function o(t, e) {
        for (var n in t) e[n] = t[n];
      }
      function s(t, e, n) {
        return i(t, e, n);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = r)
        : (o(r, e), (e.Buffer = s)),
        o(i, s),
        (s.from = function(t, e, n) {
          if ('number' == typeof t)
            throw new TypeError('Argument must not be a number');
          return i(t, e, n);
        }),
        (s.alloc = function(t, e, n) {
          if ('number' != typeof t)
            throw new TypeError('Argument must be a number');
          var r = i(t);
          return (
            void 0 !== e
              ? 'string' == typeof n
                ? r.fill(e, n)
                : r.fill(e)
              : r.fill(0),
            r
          );
        }),
        (s.allocUnsafe = function(t) {
          if ('number' != typeof t)
            throw new TypeError('Argument must be a number');
          return i(t);
        }),
        (s.allocUnsafeSlow = function(t) {
          if ('number' != typeof t)
            throw new TypeError('Argument must be a number');
          return r.SlowBuffer(t);
        });
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var r = n(79),
          i = n(78),
          o = n(37);
        function s() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(t, e) {
          if (s() < e) throw new RangeError('Invalid typed array length');
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = u.prototype)
              : (null === t && (t = new u(e)), (t.length = e)),
            t
          );
        }
        function u(t, e, n) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(t, e, n);
          if ('number' == typeof t) {
            if ('string' == typeof e)
              throw new Error(
                'If encoding is specified then the first argument must be a string'
              );
            return l(this, t);
          }
          return f(this, t, e, n);
        }
        function f(t, e, n, r) {
          if ('number' == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function(t, e, n, r) {
                if ((e.byteLength, n < 0 || e.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === n && void 0 === r
                    ? new Uint8Array(e)
                    : void 0 === r
                    ? new Uint8Array(e, n)
                    : new Uint8Array(e, n, r);
                u.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = u.prototype)
                  : (t = c(t, e));
                return t;
              })(t, e, n, r)
            : 'string' == typeof e
            ? (function(t, e, n) {
                ('string' == typeof n && '' !== n) || (n = 'utf8');
                if (!u.isEncoding(n))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | p(e, n),
                  i = (t = a(t, r)).write(e, n);
                i !== r && (t = t.slice(0, i));
                return t;
              })(t, e, n)
            : (function(t, e) {
                if (u.isBuffer(e)) {
                  var n = 0 | d(e.length);
                  return 0 === (t = a(t, n)).length
                    ? t
                    : (e.copy(t, 0, 0, n), t);
                }
                if (e) {
                  if (
                    ('undefined' != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    'length' in e
                  )
                    return 'number' != typeof e.length || (r = e.length) != r
                      ? a(t, 0)
                      : c(t, e);
                  if ('Buffer' === e.type && o(e.data)) return c(t, e.data);
                }
                var r;
                throw new TypeError(
                  'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                );
              })(t, e);
        }
        function h(t) {
          if ('number' != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function l(t, e) {
          if ((h(e), (t = a(t, e < 0 ? 0 : 0 | d(e))), !u.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < e; ++n) t[n] = 0;
          return t;
        }
        function c(t, e) {
          var n = e.length < 0 ? 0 : 0 | d(e.length);
          t = a(t, n);
          for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
          return t;
        }
        function d(t) {
          if (t >= s())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                s().toString(16) +
                ' bytes'
            );
          return 0 | t;
        }
        function p(t, e) {
          if (u.isBuffer(t)) return t.length;
          if (
            'undefined' != typeof ArrayBuffer &&
            'function' == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          'string' != typeof t && (t = '' + t);
          var n = t.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (e) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return n;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return Y(t).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * n;
              case 'hex':
                return n >>> 1;
              case 'base64':
                return W(t).length;
              default:
                if (r) return Y(t).length;
                (e = ('' + e).toLowerCase()), (r = !0);
            }
        }
        function _(t, e, n) {
          var r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function g(t, e, n, r, i) {
          if (0 === t.length) return -1;
          if (
            ('string' == typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (i) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (('string' == typeof e && (e = u.from(e, r)), u.isBuffer(e)))
            return 0 === e.length ? -1 : y(t, e, n, r, i);
          if ('number' == typeof e)
            return (
              (e &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              'function' == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : y(t, [e], n, r, i)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function y(t, e, n, r, i) {
          var o,
            s = 1,
            a = t.length,
            u = e.length;
          if (
            void 0 !== r &&
            ('ucs2' === (r = String(r).toLowerCase()) ||
              'ucs-2' === r ||
              'utf16le' === r ||
              'utf-16le' === r)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (s = 2), (a /= 2), (u /= 2), (n /= 2);
          }
          function f(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s);
          }
          if (i) {
            var h = -1;
            for (o = n; o < a; o++)
              if (f(t, o) === f(e, -1 === h ? 0 : o - h)) {
                if ((-1 === h && (h = o), o - h + 1 === u)) return h * s;
              } else -1 !== h && (o -= o - h), (h = -1);
          } else
            for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
              for (var l = !0, c = 0; c < u; c++)
                if (f(t, o + c) !== f(e, c)) {
                  l = !1;
                  break;
                }
              if (l) return o;
            }
          return -1;
        }
        function v(t, e, n, r) {
          n = Number(n) || 0;
          var i = t.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          var o = e.length;
          if (o % 2 != 0) throw new TypeError('Invalid hex string');
          r > o / 2 && (r = o / 2);
          for (var s = 0; s < r; ++s) {
            var a = parseInt(e.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            t[n + s] = a;
          }
          return s;
        }
        function b(t, e, n, r) {
          return q(Y(e, t.length - n), t, n, r);
        }
        function w(t, e, n, r) {
          return q(
            (function(t) {
              for (var e = [], n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            r
          );
        }
        function m(t, e, n, r) {
          return w(t, e, n, r);
        }
        function E(t, e, n, r) {
          return q(W(e), t, n, r);
        }
        function S(t, e, n, r) {
          return q(
            (function(t, e) {
              for (
                var n, r, i, o = [], s = 0;
                s < t.length && !((e -= 2) < 0);
                ++s
              )
                (n = t.charCodeAt(s)),
                  (r = n >> 8),
                  (i = n % 256),
                  o.push(i),
                  o.push(r);
              return o;
            })(e, t.length - n),
            t,
            n,
            r
          );
        }
        function k(t, e, n) {
          return 0 === e && n === t.length
            ? r.fromByteArray(t)
            : r.fromByteArray(t.slice(e, n));
        }
        function T(t, e, n) {
          n = Math.min(t.length, n);
          for (var r = [], i = e; i < n; ) {
            var o,
              s,
              a,
              u,
              f = t[i],
              h = null,
              l = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
            if (i + l <= n)
              switch (l) {
                case 1:
                  f < 128 && (h = f);
                  break;
                case 2:
                  128 == (192 & (o = t[i + 1])) &&
                    (u = ((31 & f) << 6) | (63 & o)) > 127 &&
                    (h = u);
                  break;
                case 3:
                  (o = t[i + 1]),
                    (s = t[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      (u = ((15 & f) << 12) | ((63 & o) << 6) | (63 & s)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (h = u);
                  break;
                case 4:
                  (o = t[i + 1]),
                    (s = t[i + 2]),
                    (a = t[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      128 == (192 & a) &&
                      (u =
                        ((15 & f) << 18) |
                        ((63 & o) << 12) |
                        ((63 & s) << 6) |
                        (63 & a)) > 65535 &&
                      u < 1114112 &&
                      (h = u);
              }
            null === h
              ? ((h = 65533), (l = 1))
              : h > 65535 &&
                ((h -= 65536),
                r.push(((h >>> 10) & 1023) | 55296),
                (h = 56320 | (1023 & h))),
              r.push(h),
              (i += l);
          }
          return (function(t) {
            var e = t.length;
            if (e <= M) return String.fromCharCode.apply(String, t);
            var n = '',
              r = 0;
            for (; r < e; )
              n += String.fromCharCode.apply(String, t.slice(r, (r += M)));
            return n;
          })(r);
        }
        (e.Buffer = u),
          (e.SlowBuffer = function(t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function() {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        'function' == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = s()),
          (u.poolSize = 8192),
          (u._augment = function(t) {
            return (t.__proto__ = u.prototype), t;
          }),
          (u.from = function(t, e, n) {
            return f(null, t, e, n);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            'undefined' != typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function(t, e, n) {
            return (function(t, e, n, r) {
              return (
                h(e),
                e <= 0
                  ? a(t, e)
                  : void 0 !== n
                  ? 'string' == typeof r
                    ? a(t, e).fill(n, r)
                    : a(t, e).fill(n)
                  : a(t, e)
              );
            })(null, t, e, n);
          }),
          (u.allocUnsafe = function(t) {
            return l(null, t);
          }),
          (u.allocUnsafeSlow = function(t) {
            return l(null, t);
          }),
          (u.isBuffer = function(t) {
            return !(null == t || !t._isBuffer);
          }),
          (u.compare = function(t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e))
              throw new TypeError('Arguments must be Buffers');
            if (t === e) return 0;
            for (
              var n = t.length, r = e.length, i = 0, o = Math.min(n, r);
              i < o;
              ++i
            )
              if (t[i] !== e[i]) {
                (n = t[i]), (r = e[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (u.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function(t, e) {
            if (!o(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return u.alloc(0);
            var n;
            if (void 0 === e)
              for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = u.allocUnsafe(e),
              i = 0;
            for (n = 0; n < t.length; ++n) {
              var s = t[n];
              if (!u.isBuffer(s))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              s.copy(r, i), (i += s.length);
            }
            return r;
          }),
          (u.byteLength = p),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (var e = 0; e < t; e += 2) _(this, e, e + 1);
            return this;
          }),
          (u.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var e = 0; e < t; e += 4)
              _(this, e, e + 3), _(this, e + 1, e + 2);
            return this;
          }),
          (u.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var e = 0; e < t; e += 8)
              _(this, e, e + 7),
                _(this, e + 1, e + 6),
                _(this, e + 2, e + 5),
                _(this, e + 3, e + 4);
            return this;
          }),
          (u.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t
              ? ''
              : 0 === arguments.length
              ? T(this, 0, t)
              : function(t, e, n) {
                  var r = !1;
                  if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                    return '';
                  if (
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                  )
                    return '';
                  if ((n >>>= 0) <= (e >>>= 0)) return '';
                  for (t || (t = 'utf8'); ; )
                    switch (t) {
                      case 'hex':
                        return A(this, e, n);
                      case 'utf8':
                      case 'utf-8':
                        return T(this, e, n);
                      case 'ascii':
                        return O(this, e, n);
                      case 'latin1':
                      case 'binary':
                        return x(this, e, n);
                      case 'base64':
                        return k(this, e, n);
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return B(this, e, n);
                      default:
                        if (r) throw new TypeError('Unknown encoding: ' + t);
                        (t = (t + '').toLowerCase()), (r = !0);
                    }
                }.apply(this, arguments);
          }),
          (u.prototype.equals = function(t) {
            if (!u.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            return this === t || 0 === u.compare(this, t);
          }),
          (u.prototype.inspect = function() {
            var t = '',
              n = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString('hex', 0, n)
                  .match(/.{2}/g)
                  .join(' ')),
                this.length > n && (t += ' ... ')),
              '<Buffer ' + t + '>'
            );
          }),
          (u.prototype.compare = function(t, e, n, r, i) {
            if (!u.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              e < 0 || n > t.length || r < 0 || i > this.length)
            )
              throw new RangeError('out of range index');
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (((e >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === t))
              return 0;
            for (
              var o = i - r,
                s = n - e,
                a = Math.min(o, s),
                f = this.slice(r, i),
                h = t.slice(e, n),
                l = 0;
              l < a;
              ++l
            )
              if (f[l] !== h[l]) {
                (o = f[l]), (s = h[l]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }),
          (u.prototype.includes = function(t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (u.prototype.indexOf = function(t, e, n) {
            return g(this, t, e, n, !0);
          }),
          (u.prototype.lastIndexOf = function(t, e, n) {
            return g(this, t, e, n, !1);
          }),
          (u.prototype.write = function(t, e, n, r) {
            if (void 0 === e) (r = 'utf8'), (n = this.length), (e = 0);
            else if (void 0 === n && 'string' == typeof e)
              (r = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                );
              (e |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = 'utf8'))
                  : ((r = n), (n = void 0));
            }
            var i = this.length - e;
            if (
              ((void 0 === n || n > i) && (n = i),
              (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError('Attempt to write outside buffer bounds');
            r || (r = 'utf8');
            for (var o = !1; ; )
              switch (r) {
                case 'hex':
                  return v(this, t, e, n);
                case 'utf8':
                case 'utf-8':
                  return b(this, t, e, n);
                case 'ascii':
                  return w(this, t, e, n);
                case 'latin1':
                case 'binary':
                  return m(this, t, e, n);
                case 'base64':
                  return E(this, t, e, n);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return S(this, t, e, n);
                default:
                  if (o) throw new TypeError('Unknown encoding: ' + r);
                  (r = ('' + r).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function() {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var M = 4096;
        function O(t, e, n) {
          var r = '';
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
          return r;
        }
        function x(t, e, n) {
          var r = '';
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
          return r;
        }
        function A(t, e, n) {
          var r = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
          for (var i = '', o = e; o < n; ++o) i += N(t[o]);
          return i;
        }
        function B(t, e, n) {
          for (var r = t.slice(e, n), i = '', o = 0; o < r.length; o += 2)
            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          return i;
        }
        function R(t, e, n) {
          if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
          if (t + e > n)
            throw new RangeError('Trying to access beyond buffer length');
        }
        function P(t, e, n, r, i, o) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length) throw new RangeError('Index out of range');
        }
        function j(t, e, n, r) {
          e < 0 && (e = 65535 + e + 1);
          for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i)
            t[n + i] =
              (e & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
        function I(t, e, n, r) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i)
            t[n + i] = (e >>> (8 * (r ? i : 3 - i))) & 255;
        }
        function L(t, e, n, r, i, o) {
          if (n + r > t.length) throw new RangeError('Index out of range');
          if (n < 0) throw new RangeError('Index out of range');
        }
        function C(t, e, n, r, o) {
          return o || L(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
        }
        function U(t, e, n, r, o) {
          return o || L(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
        }
        (u.prototype.slice = function(t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t),
            u.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = u.prototype;
          else {
            var i = e - t;
            n = new u(i, void 0);
            for (var o = 0; o < i; ++o) n[o] = this[o + t];
          }
          return n;
        }),
          (u.prototype.readUIntLE = function(t, e, n) {
            (t |= 0), (e |= 0), n || R(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              r += this[t + o] * i;
            return r;
          }),
          (u.prototype.readUIntBE = function(t, e, n) {
            (t |= 0), (e |= 0), n || R(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); )
              r += this[t + --e] * i;
            return r;
          }),
          (u.prototype.readUInt8 = function(t, e) {
            return e || R(t, 1, this.length), this[t];
          }),
          (u.prototype.readUInt16LE = function(t, e) {
            return e || R(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function(t, e) {
            return e || R(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (u.prototype.readUInt32LE = function(t, e) {
            return (
              e || R(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (u.prototype.readUInt32BE = function(t, e) {
            return (
              e || R(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (u.prototype.readIntLE = function(t, e, n) {
            (t |= 0), (e |= 0), n || R(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              r += this[t + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
          }),
          (u.prototype.readIntBE = function(t, e, n) {
            (t |= 0), (e |= 0), n || R(t, e, this.length);
            for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256); )
              o += this[t + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
          }),
          (u.prototype.readInt8 = function(t, e) {
            return (
              e || R(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (u.prototype.readInt16LE = function(t, e) {
            e || R(t, 2, this.length);
            var n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt16BE = function(t, e) {
            e || R(t, 2, this.length);
            var n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt32LE = function(t, e) {
            return (
              e || R(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function(t, e) {
            return (
              e || R(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (u.prototype.readFloatLE = function(t, e) {
            return e || R(t, 4, this.length), i.read(this, t, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function(t, e) {
            return e || R(t, 4, this.length), i.read(this, t, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function(t, e) {
            return e || R(t, 8, this.length), i.read(this, t, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function(t, e) {
            return e || R(t, 8, this.length), i.read(this, t, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function(t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              P(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < n && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + n;
          }),
          (u.prototype.writeUIntBE = function(t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              P(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + n;
          }),
          (u.prototype.writeUInt8 = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeUInt16LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : j(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeUInt16BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : j(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeUInt32LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : I(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeUInt32BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : I(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeIntLE = function(t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              P(this, t, e, n, i - 1, -i);
            }
            var o = 0,
              s = 1,
              a = 0;
            for (this[e] = 255 & t; ++o < n && (s *= 256); )
              t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                (this[e + o] = (((t / s) >> 0) - a) & 255);
            return e + n;
          }),
          (u.prototype.writeIntBE = function(t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              P(this, t, e, n, i - 1, -i);
            }
            var o = n - 1,
              s = 1,
              a = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
              t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                (this[e + o] = (((t / s) >> 0) - a) & 255);
            return e + n;
          }),
          (u.prototype.writeInt8 = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeInt16LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : j(this, t, e, !0),
              e + 2
            );
          }),
          (u.prototype.writeInt16BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : j(this, t, e, !1),
              e + 2
            );
          }),
          (u.prototype.writeInt32LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : I(this, t, e, !0),
              e + 4
            );
          }),
          (u.prototype.writeInt32BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || P(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : I(this, t, e, !1),
              e + 4
            );
          }),
          (u.prototype.writeFloatLE = function(t, e, n) {
            return C(this, t, e, !0, n);
          }),
          (u.prototype.writeFloatBE = function(t, e, n) {
            return C(this, t, e, !1, n);
          }),
          (u.prototype.writeDoubleLE = function(t, e, n) {
            return U(this, t, e, !0, n);
          }),
          (u.prototype.writeDoubleBE = function(t, e, n) {
            return U(this, t, e, !1, n);
          }),
          (u.prototype.copy = function(t, e, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError('targetStart out of bounds');
            if (n < 0 || n >= this.length)
              throw new RangeError('sourceStart out of bounds');
            if (r < 0) throw new RangeError('sourceEnd out of bounds');
            r > this.length && (r = this.length),
              t.length - e < r - n && (r = t.length - e + n);
            var i,
              o = r - n;
            if (this === t && n < e && e < r)
              for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) t[i + e] = this[i + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
            return o;
          }),
          (u.prototype.fill = function(t, e, n, r) {
            if ('string' == typeof t) {
              if (
                ('string' == typeof e
                  ? ((r = e), (e = 0), (n = this.length))
                  : 'string' == typeof n && ((r = n), (n = this.length)),
                1 === t.length)
              ) {
                var i = t.charCodeAt(0);
                i < 256 && (t = i);
              }
              if (void 0 !== r && 'string' != typeof r)
                throw new TypeError('encoding must be a string');
              if ('string' == typeof r && !u.isEncoding(r))
                throw new TypeError('Unknown encoding: ' + r);
            } else 'number' == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError('Out of range index');
            if (n <= e) return this;
            var o;
            if (
              ((e >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              t || (t = 0),
              'number' == typeof t)
            )
              for (o = e; o < n; ++o) this[o] = t;
            else {
              var s = u.isBuffer(t) ? t : Y(new u(t, r).toString()),
                a = s.length;
              for (o = 0; o < n - e; ++o) this[o + e] = s[o % a];
            }
            return this;
          });
        var D = /[^+\/0-9A-Za-z-_]/g;
        function N(t) {
          return t < 16 ? '0' + t.toString(16) : t.toString(16);
        }
        function Y(t, e) {
          var n;
          e = e || 1 / 0;
          for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
            if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === r) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((e -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              o.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error('Invalid code point');
              if ((e -= 4) < 0) break;
              o.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return o;
        }
        function W(t) {
          return r.toByteArray(
            (function(t) {
              if (
                (t = (function(t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
                })(t).replace(D, '')).length < 2
              )
                return '';
              for (; t.length % 4 != 0; ) t += '=';
              return t;
            })(t)
          );
        }
        function q(t, e, n, r) {
          for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
            e[i + n] = t[i];
          return i;
        }
      }.call(this, n(5)));
    },
    function(t, e, n) {
      'use strict';
      var r = n(8).nextTick,
        i =
          Object.keys ||
          function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e;
          };
      t.exports = l;
      var o = n(7);
      o.inherits = n(0);
      var s = n(22),
        a = n(12);
      o.inherits(l, s);
      for (var u = i(a.prototype), f = 0; f < u.length; f++) {
        var h = u[f];
        l.prototype[h] || (l.prototype[h] = a.prototype[h]);
      }
      function l(t) {
        if (!(this instanceof l)) return new l(t);
        s.call(this, t),
          a.call(this, t),
          t && !1 === t.readable && (this.readable = !1),
          t && !1 === t.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once('end', c);
      }
      function c() {
        this.allowHalfOpen || this._writableState.ended || r(d, this);
      }
      function d(t) {
        t.end();
      }
      Object.defineProperty(l.prototype, 'destroyed', {
        get: function() {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            (this._readableState.destroyed && this._writableState.destroyed)
          );
        },
        set: function(t) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = t),
            (this._writableState.destroyed = t));
        },
      }),
        (l.prototype._destroy = function(t, e) {
          this.push(null), this.end(), r(e, t);
        });
    },
    function(t, e, n) {
      var r = n(1).Buffer;
      function i(t, e) {
        (this._block = r.alloc(t)),
          (this._finalSize = e),
          (this._blockSize = t),
          (this._len = 0);
      }
      (i.prototype.update = function(t, e) {
        'string' == typeof t && ((e = e || 'utf8'), (t = r.from(t, e)));
        for (
          var n = this._block,
            i = this._blockSize,
            o = t.length,
            s = this._len,
            a = 0;
          a < o;

        ) {
          for (var u = s % i, f = Math.min(o - a, i - u), h = 0; h < f; h++)
            n[u + h] = t[a + h];
          (a += f), (s += f) % i == 0 && this._update(n);
        }
        return (this._len += o), this;
      }),
        (i.prototype.digest = function(t) {
          var e = this._len % this._blockSize;
          (this._block[e] = 128),
            this._block.fill(0, e + 1),
            e >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var n = 8 * this._len;
          if (n <= 4294967295)
            this._block.writeUInt32BE(n, this._blockSize - 4);
          else {
            var r = (4294967295 & n) >>> 0,
              i = (n - r) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8),
              this._block.writeUInt32BE(r, this._blockSize - 4);
          }
          this._update(this._block);
          var o = this._hash();
          return t ? o.toString(t) : o;
        }),
        (i.prototype._update = function() {
          throw new Error('_update must be implemented by subclass');
        }),
        (t.exports = i);
    },
    function(t, e) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || Function('return this')() || (0, eval)('this');
      } catch (t) {
        'object' == typeof window && (n = window);
      }
      t.exports = n;
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.stringToHex = e.setsOf = e.secretKey = e.removeSpaces = e.padSecret = e.leftPad = e.isSameToken = e.intToHex = e.hexToInt = void 0);
      var r = c(n(84)),
        i = c(n(83)),
        o = c(n(82)),
        s = c(n(81)),
        a = c(n(80)),
        u = c(n(77)),
        f = c(n(76)),
        h = c(n(75)),
        l = c(n(74));
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.hexToInt = r.default),
        (e.intToHex = i.default),
        (e.isSameToken = o.default),
        (e.leftPad = s.default),
        (e.padSecret = a.default),
        (e.removeSpaces = u.default),
        (e.secretKey = f.default),
        (e.setsOf = h.default),
        (e.stringToHex = l.default);
    },
    function(t, e, n) {
      (function(t) {
        function n(t) {
          return Object.prototype.toString.call(t);
        }
        (e.isArray = function(t) {
          return Array.isArray ? Array.isArray(t) : '[object Array]' === n(t);
        }),
          (e.isBoolean = function(t) {
            return 'boolean' == typeof t;
          }),
          (e.isNull = function(t) {
            return null === t;
          }),
          (e.isNullOrUndefined = function(t) {
            return null == t;
          }),
          (e.isNumber = function(t) {
            return 'number' == typeof t;
          }),
          (e.isString = function(t) {
            return 'string' == typeof t;
          }),
          (e.isSymbol = function(t) {
            return 'symbol' == typeof t;
          }),
          (e.isUndefined = function(t) {
            return void 0 === t;
          }),
          (e.isRegExp = function(t) {
            return '[object RegExp]' === n(t);
          }),
          (e.isObject = function(t) {
            return 'object' == typeof t && null !== t;
          }),
          (e.isDate = function(t) {
            return '[object Date]' === n(t);
          }),
          (e.isError = function(t) {
            return '[object Error]' === n(t) || t instanceof Error;
          }),
          (e.isFunction = function(t) {
            return 'function' == typeof t;
          }),
          (e.isPrimitive = function(t) {
            return (
              null === t ||
              'boolean' == typeof t ||
              'number' == typeof t ||
              'string' == typeof t ||
              'symbol' == typeof t ||
              void 0 === t
            );
          }),
          (e.isBuffer = t.isBuffer);
      }.call(this, n(2).Buffer));
    },
    function(t, e, n) {
      'use strict';
      (function(e) {
        !e.version ||
        0 === e.version.indexOf('v0.') ||
        (0 === e.version.indexOf('v1.') && 0 !== e.version.indexOf('v1.8.'))
          ? (t.exports = {
              nextTick: function(t, n, r, i) {
                if ('function' != typeof t)
                  throw new TypeError('"callback" argument must be a function');
                var o,
                  s,
                  a = arguments.length;
                switch (a) {
                  case 0:
                  case 1:
                    return e.nextTick(t);
                  case 2:
                    return e.nextTick(function() {
                      t.call(null, n);
                    });
                  case 3:
                    return e.nextTick(function() {
                      t.call(null, n, r);
                    });
                  case 4:
                    return e.nextTick(function() {
                      t.call(null, n, r, i);
                    });
                  default:
                    for (o = new Array(a - 1), s = 0; s < o.length; )
                      o[s++] = arguments[s];
                    return e.nextTick(function() {
                      t.apply(null, o);
                    });
                }
              },
            })
          : (t.exports = e);
      }.call(this, n(9)));
    },
    function(t, e) {
      var n,
        r,
        i = (t.exports = {});
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function s() {
        throw new Error('clearTimeout has not been defined');
      }
      function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function() {
        try {
          n = 'function' == typeof setTimeout ? setTimeout : o;
        } catch (t) {
          n = o;
        }
        try {
          r = 'function' == typeof clearTimeout ? clearTimeout : s;
        } catch (t) {
          r = s;
        }
      })();
      var u,
        f = [],
        h = !1,
        l = -1;
      function c() {
        h &&
          u &&
          ((h = !1), u.length ? (f = u.concat(f)) : (l = -1), f.length && d());
      }
      function d() {
        if (!h) {
          var t = a(c);
          h = !0;
          for (var e = f.length; e; ) {
            for (u = f, f = []; ++l < e; ) u && u[l].run();
            (l = -1), (e = f.length);
          }
          (u = null),
            (h = !1),
            (function(t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === s || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function _() {}
      (i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        f.push(new p(t, e)), 1 !== f.length || h || a(d);
      }),
        (p.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (i.title = 'browser'),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ''),
        (i.versions = {}),
        (i.on = _),
        (i.addListener = _),
        (i.once = _),
        (i.off = _),
        (i.removeListener = _),
        (i.removeAllListeners = _),
        (i.emit = _),
        (i.prependListener = _),
        (i.prependOnceListener = _),
        (i.listeners = function(t) {
          return [];
        }),
        (i.binding = function(t) {
          throw new Error('process.binding is not supported');
        }),
        (i.cwd = function() {
          return '/';
        }),
        (i.chdir = function(t) {
          throw new Error('process.chdir is not supported');
        }),
        (i.umask = function() {
          return 0;
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.totpToken = e.totpTimeUsed = e.totpTimeRemaining = e.totpSecret = e.totpOptions = e.totpCounter = e.totpCheckWithWindow = e.totpCheck = e.hotpToken = e.hotpSecret = e.hotpOptions = e.hotpDigest = e.hotpCounter = e.hotpCheck = void 0);
      var r = y(n(85)),
        i = y(n(35)),
        o = y(n(36)),
        s = y(n(34)),
        a = y(n(33)),
        u = y(n(16)),
        f = y(n(32)),
        h = y(n(73)),
        l = y(n(30)),
        c = y(n(72)),
        d = y(n(29)),
        p = y(n(71)),
        _ = y(n(28)),
        g = y(n(31));
      function y(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.hotpCheck = r.default),
        (e.hotpCounter = i.default),
        (e.hotpDigest = o.default),
        (e.hotpOptions = s.default),
        (e.hotpSecret = a.default),
        (e.hotpToken = u.default),
        (e.totpCheck = f.default),
        (e.totpCheckWithWindow = h.default),
        (e.totpCounter = l.default),
        (e.totpOptions = c.default),
        (e.totpSecret = d.default),
        (e.totpTimeRemaining = p.default),
        (e.totpTimeUsed = _.default),
        (e.totpToken = g.default);
    },
    function(t, e, n) {
      'use strict';
      var r = n(1).Buffer,
        i =
          r.isEncoding ||
          function(t) {
            switch ((t = '' + t) && t.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0;
              default:
                return !1;
            }
          };
      function o(t) {
        var e;
        switch (
          ((this.encoding = (function(t) {
            var e = (function(t) {
              if (!t) return 'utf8';
              for (var e; ; )
                switch (t) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8';
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le';
                  case 'latin1':
                  case 'binary':
                    return 'latin1';
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return t;
                  default:
                    if (e) return;
                    (t = ('' + t).toLowerCase()), (e = !0);
                }
            })(t);
            if ('string' != typeof e && (r.isEncoding === i || !i(t)))
              throw new Error('Unknown encoding: ' + t);
            return e || t;
          })(t)),
          this.encoding)
        ) {
          case 'utf16le':
            (this.text = u), (this.end = f), (e = 4);
            break;
          case 'utf8':
            (this.fillLast = a), (e = 4);
            break;
          case 'base64':
            (this.text = h), (this.end = l), (e = 3);
            break;
          default:
            return (this.write = c), void (this.end = d);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = r.allocUnsafe(e));
      }
      function s(t) {
        return t <= 127
          ? 0
          : t >> 5 == 6
          ? 2
          : t >> 4 == 14
          ? 3
          : t >> 3 == 30
          ? 4
          : -1;
      }
      function a(t) {
        var e = this.lastTotal - this.lastNeed,
          n = (function(t, e, n) {
            if (128 != (192 & e[0])) return (t.lastNeed = 0), '�'.repeat(n);
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 != (192 & e[1]))
                return (t.lastNeed = 1), '�'.repeat(n + 1);
              if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                return (t.lastNeed = 2), '�'.repeat(n + 2);
            }
          })(this, t, e);
        return void 0 !== n
          ? n
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length));
      }
      function u(t, e) {
        if ((t.length - e) % 2 == 0) {
          var n = t.toString('utf16le', e);
          if (n) {
            var r = n.charCodeAt(n.length - 1);
            if (r >= 55296 && r <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                n.slice(0, -1)
              );
          }
          return n;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString('utf16le', e, t.length - 1)
        );
      }
      function f(t) {
        var e = t && t.length ? this.write(t) : '';
        if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString('utf16le', 0, n);
        }
        return e;
      }
      function h(t, e) {
        var n = (t.length - e) % 3;
        return 0 === n
          ? t.toString('base64', e)
          : ((this.lastNeed = 3 - n),
            (this.lastTotal = 3),
            1 === n
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString('base64', e, t.length - n));
      }
      function l(t) {
        var e = t && t.length ? this.write(t) : '';
        return this.lastNeed
          ? e + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : e;
      }
      function c(t) {
        return t.toString(this.encoding);
      }
      function d(t) {
        return t && t.length ? this.write(t) : '';
      }
      (e.StringDecoder = o),
        (o.prototype.write = function(t) {
          if (0 === t.length) return '';
          var e, n;
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return '';
            (n = this.lastNeed), (this.lastNeed = 0);
          } else n = 0;
          return n < t.length
            ? e
              ? e + this.text(t, n)
              : this.text(t, n)
            : e || '';
        }),
        (o.prototype.end = function(t) {
          var e = t && t.length ? this.write(t) : '';
          return this.lastNeed
            ? e + '�'.repeat(this.lastTotal - this.lastNeed)
            : e;
        }),
        (o.prototype.text = function(t, e) {
          var n = (function(t, e, n) {
            var r = e.length - 1;
            if (r < n) return 0;
            var i = s(e[r]);
            if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
            if (--r < n) return 0;
            if ((i = s(e[r])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
            if (--r < n) return 0;
            if ((i = s(e[r])) >= 0)
              return i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i;
            return 0;
          })(this, t, e);
          if (!this.lastNeed) return t.toString('utf8', e);
          this.lastTotal = n;
          var r = t.length - (n - this.lastNeed);
          return t.copy(this.lastChar, 0, r), t.toString('utf8', e, r);
        }),
        (o.prototype.fillLast = function(t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    function(t, e, n) {
      'use strict';
      (function(e, r, i) {
        var o = n(8).nextTick;
        function s(t) {
          var e = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function() {
              !(function(t, e, n) {
                var r = t.entry;
                t.entry = null;
                for (; r; ) {
                  var i = r.callback;
                  e.pendingcb--, i(n), (r = r.next);
                }
                e.corkedRequestsFree
                  ? (e.corkedRequestsFree.next = t)
                  : (e.corkedRequestsFree = t);
              })(e, t);
            });
        }
        t.exports = v;
        var a,
          u =
            !e.browser && ['v0.10', 'v0.9.'].indexOf(e.version.slice(0, 5)) > -1
              ? r
              : o;
        v.WritableState = y;
        var f = n(7);
        f.inherits = n(0);
        var h = { deprecate: n(54) },
          l = n(21),
          c = n(1).Buffer,
          d = i.Uint8Array || function() {};
        var p,
          _ = n(20);
        function g() {}
        function y(t, e) {
          (a = a || n(3)), (t = t || {});
          var r = e instanceof a;
          (this.objectMode = !!t.objectMode),
            r && (this.objectMode = this.objectMode || !!t.writableObjectMode);
          var i = t.highWaterMark,
            f = t.writableHighWaterMark,
            h = this.objectMode ? 16 : 16384;
          (this.highWaterMark = i || 0 === i ? i : r && (f || 0 === f) ? f : h),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var l = !1 === t.decodeStrings;
          (this.decodeStrings = !l),
            (this.defaultEncoding = t.defaultEncoding || 'utf8'),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function(t) {
              !(function(t, e) {
                var n = t._writableState,
                  r = n.sync,
                  i = n.writecb;
                if (
                  ((function(t) {
                    (t.writing = !1),
                      (t.writecb = null),
                      (t.length -= t.writelen),
                      (t.writelen = 0);
                  })(n),
                  e)
                )
                  !(function(t, e, n, r, i) {
                    --e.pendingcb,
                      n
                        ? (o(i, r),
                          o(k, t, e),
                          (t._writableState.errorEmitted = !0),
                          t.emit('error', r))
                        : (i(r),
                          (t._writableState.errorEmitted = !0),
                          t.emit('error', r),
                          k(t, e));
                  })(t, n, r, e, i);
                else {
                  var s = E(n);
                  s ||
                    n.corked ||
                    n.bufferProcessing ||
                    !n.bufferedRequest ||
                    m(t, n),
                    r ? u(w, t, n, s, i) : w(t, n, s, i);
                }
              })(e, t);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new s(this));
        }
        function v(t) {
          if (((a = a || n(3)), !(p.call(v, this) || this instanceof a)))
            return new v(t);
          (this._writableState = new y(t, this)),
            (this.writable = !0),
            t &&
              ('function' == typeof t.write && (this._write = t.write),
              'function' == typeof t.writev && (this._writev = t.writev),
              'function' == typeof t.destroy && (this._destroy = t.destroy),
              'function' == typeof t.final && (this._final = t.final)),
            l.call(this);
        }
        function b(t, e, n, r, i, o, s) {
          (e.writelen = r),
            (e.writecb = s),
            (e.writing = !0),
            (e.sync = !0),
            n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite),
            (e.sync = !1);
        }
        function w(t, e, n, r) {
          n ||
            (function(t, e) {
              0 === e.length &&
                e.needDrain &&
                ((e.needDrain = !1), t.emit('drain'));
            })(t, e),
            e.pendingcb--,
            r(),
            k(t, e);
        }
        function m(t, e) {
          e.bufferProcessing = !0;
          var n = e.bufferedRequest;
          if (t._writev && n && n.next) {
            var r = e.bufferedRequestCount,
              i = new Array(r),
              o = e.corkedRequestsFree;
            o.entry = n;
            for (var a = 0, u = !0; n; )
              (i[a] = n), n.isBuf || (u = !1), (n = n.next), (a += 1);
            (i.allBuffers = u),
              b(t, e, !0, e.length, i, '', o.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              o.next
                ? ((e.corkedRequestsFree = o.next), (o.next = null))
                : (e.corkedRequestsFree = new s(e)),
              (e.bufferedRequestCount = 0);
          } else {
            for (; n; ) {
              var f = n.chunk,
                h = n.encoding,
                l = n.callback;
              if (
                (b(t, e, !1, e.objectMode ? 1 : f.length, f, h, l),
                (n = n.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break;
            }
            null === n && (e.lastBufferedRequest = null);
          }
          (e.bufferedRequest = n), (e.bufferProcessing = !1);
        }
        function E(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          );
        }
        function S(t, e) {
          t._final(function(n) {
            e.pendingcb--,
              n && t.emit('error', n),
              (e.prefinished = !0),
              t.emit('prefinish'),
              k(t, e);
          });
        }
        function k(t, e) {
          var n = E(e);
          return (
            n &&
              (!(function(t, e) {
                e.prefinished ||
                  e.finalCalled ||
                  ('function' == typeof t._final
                    ? (e.pendingcb++, (e.finalCalled = !0), o(S, t, e))
                    : ((e.prefinished = !0), t.emit('prefinish')));
              })(t, e),
              0 === e.pendingcb && ((e.finished = !0), t.emit('finish'))),
            n
          );
        }
        f.inherits(v, l),
          (y.prototype.getBuffer = function() {
            for (var t = this.bufferedRequest, e = []; t; )
              e.push(t), (t = t.next);
            return e;
          }),
          (function() {
            try {
              Object.defineProperty(y.prototype, 'buffer', {
                get: h.deprecate(
                  function() {
                    return this.getBuffer();
                  },
                  '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                  'DEP0003'
                ),
              });
            } catch (t) {}
          })(),
          'function' == typeof Symbol &&
          Symbol.hasInstance &&
          'function' == typeof Function.prototype[Symbol.hasInstance]
            ? ((p = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(v, Symbol.hasInstance, {
                value: function(t) {
                  return (
                    !!p.call(this, t) ||
                    (this === v && (t && t._writableState instanceof y))
                  );
                },
              }))
            : (p = function(t) {
                return t instanceof this;
              }),
          (v.prototype.pipe = function() {
            this.emit('error', new Error('Cannot pipe, not readable'));
          }),
          (v.prototype.write = function(t, e, n) {
            var r,
              i = this._writableState,
              s = !1,
              a = !i.objectMode && ((r = t), c.isBuffer(r) || r instanceof d);
            return (
              a &&
                !c.isBuffer(t) &&
                (t = (function(t) {
                  return c.from(t);
                })(t)),
              'function' == typeof e && ((n = e), (e = null)),
              a ? (e = 'buffer') : e || (e = i.defaultEncoding),
              'function' != typeof n && (n = g),
              i.ended
                ? (function(t, e) {
                    var n = new Error('write after end');
                    t.emit('error', n), o(e, n);
                  })(this, n)
                : (a ||
                    (function(t, e, n, r) {
                      var i = !0,
                        s = !1;
                      return (
                        null === n
                          ? (s = new TypeError(
                              'May not write null values to stream'
                            ))
                          : 'string' == typeof n ||
                            void 0 === n ||
                            e.objectMode ||
                            (s = new TypeError(
                              'Invalid non-string/buffer chunk'
                            )),
                        s && (t.emit('error', s), o(r, s), (i = !1)),
                        i
                      );
                    })(this, i, t, n)) &&
                  (i.pendingcb++,
                  (s = (function(t, e, n, r, i, o) {
                    if (!n) {
                      var s = (function(t, e, n) {
                        t.objectMode ||
                          !1 === t.decodeStrings ||
                          'string' != typeof e ||
                          (e = c.from(e, n));
                        return e;
                      })(e, r, i);
                      r !== s && ((n = !0), (i = 'buffer'), (r = s));
                    }
                    var a = e.objectMode ? 1 : r.length;
                    e.length += a;
                    var u = e.length < e.highWaterMark;
                    u || (e.needDrain = !0);
                    if (e.writing || e.corked) {
                      var f = e.lastBufferedRequest;
                      (e.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null,
                      }),
                        f
                          ? (f.next = e.lastBufferedRequest)
                          : (e.bufferedRequest = e.lastBufferedRequest),
                        (e.bufferedRequestCount += 1);
                    } else b(t, e, !1, a, r, i, o);
                    return u;
                  })(this, i, a, t, e, n))),
              s
            );
          }),
          (v.prototype.cork = function() {
            this._writableState.corked++;
          }),
          (v.prototype.uncork = function() {
            var t = this._writableState;
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.finished ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                m(this, t));
          }),
          (v.prototype.setDefaultEncoding = function(t) {
            if (
              ('string' == typeof t && (t = t.toLowerCase()),
              !(
                [
                  'hex',
                  'utf8',
                  'utf-8',
                  'ascii',
                  'binary',
                  'base64',
                  'ucs2',
                  'ucs-2',
                  'utf16le',
                  'utf-16le',
                  'raw',
                ].indexOf((t + '').toLowerCase()) > -1
              ))
            )
              throw new TypeError('Unknown encoding: ' + t);
            return (this._writableState.defaultEncoding = t), this;
          }),
          (v.prototype._write = function(t, e, n) {
            n(new Error('_write() is not implemented'));
          }),
          (v.prototype._writev = null),
          (v.prototype.end = function(t, e, n) {
            var r = this._writableState;
            'function' == typeof t
              ? ((n = t), (t = null), (e = null))
              : 'function' == typeof e && ((n = e), (e = null)),
              null !== t && void 0 !== t && this.write(t, e),
              r.corked && ((r.corked = 1), this.uncork()),
              r.ending ||
                r.finished ||
                (function(t, e, n) {
                  (e.ending = !0),
                    k(t, e),
                    n && (e.finished ? o(n) : t.once('finish', n));
                  (e.ended = !0), (t.writable = !1);
                })(this, r, n);
          }),
          Object.defineProperty(v.prototype, 'destroyed', {
            get: function() {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function(t) {
              this._writableState && (this._writableState.destroyed = t);
            },
          }),
          (v.prototype.destroy = _.destroy),
          (v.prototype._undestroy = _.undestroy),
          (v.prototype._destroy = function(t, e) {
            this.end(), e(t);
          });
      }.call(this, n(9), n(56).setImmediate, n(5)));
    },
    function(t, e, n) {
      ((e = t.exports = n(22)).Stream = e),
        (e.Readable = e),
        (e.Writable = n(12)),
        (e.Duplex = n(3)),
        (e.Transform = n(19)),
        (e.PassThrough = n(53));
    },
    function(t, e) {
      function n() {
        (this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0);
      }
      function r(t) {
        return 'function' == typeof t;
      }
      function i(t) {
        return 'object' == typeof t && null !== t;
      }
      function o(t) {
        return void 0 === t;
      }
      (t.exports = n),
        (n.EventEmitter = n),
        (n.prototype._events = void 0),
        (n.prototype._maxListeners = void 0),
        (n.defaultMaxListeners = 10),
        (n.prototype.setMaxListeners = function(t) {
          if ('number' != typeof t || t < 0 || isNaN(t))
            throw TypeError('n must be a positive number');
          return (this._maxListeners = t), this;
        }),
        (n.prototype.emit = function(t) {
          var e, n, s, a, u, f;
          if (
            (this._events || (this._events = {}),
            'error' === t &&
              (!this._events.error ||
                (i(this._events.error) && !this._events.error.length)))
          ) {
            if ((e = arguments[1]) instanceof Error) throw e;
            var h = new Error(
              'Uncaught, unspecified "error" event. (' + e + ')'
            );
            throw ((h.context = e), h);
          }
          if (o((n = this._events[t]))) return !1;
          if (r(n))
            switch (arguments.length) {
              case 1:
                n.call(this);
                break;
              case 2:
                n.call(this, arguments[1]);
                break;
              case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
              default:
                (a = Array.prototype.slice.call(arguments, 1)),
                  n.apply(this, a);
            }
          else if (i(n))
            for (
              a = Array.prototype.slice.call(arguments, 1),
                s = (f = n.slice()).length,
                u = 0;
              u < s;
              u++
            )
              f[u].apply(this, a);
          return !0;
        }),
        (n.prototype.addListener = function(t, e) {
          var s;
          if (!r(e)) throw TypeError('listener must be a function');
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit('newListener', t, r(e.listener) ? e.listener : e),
            this._events[t]
              ? i(this._events[t])
                ? this._events[t].push(e)
                : (this._events[t] = [this._events[t], e])
              : (this._events[t] = e),
            i(this._events[t]) &&
              !this._events[t].warned &&
              (s = o(this._maxListeners)
                ? n.defaultMaxListeners
                : this._maxListeners) &&
              s > 0 &&
              this._events[t].length > s &&
              ((this._events[t].warned = !0),
              console.error(
                '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                this._events[t].length
              ),
              'function' == typeof console.trace && console.trace()),
            this
          );
        }),
        (n.prototype.on = n.prototype.addListener),
        (n.prototype.once = function(t, e) {
          if (!r(e)) throw TypeError('listener must be a function');
          var n = !1;
          function i() {
            this.removeListener(t, i),
              n || ((n = !0), e.apply(this, arguments));
          }
          return (i.listener = e), this.on(t, i), this;
        }),
        (n.prototype.removeListener = function(t, e) {
          var n, o, s, a;
          if (!r(e)) throw TypeError('listener must be a function');
          if (!this._events || !this._events[t]) return this;
          if (
            ((s = (n = this._events[t]).length),
            (o = -1),
            n === e || (r(n.listener) && n.listener === e))
          )
            delete this._events[t],
              this._events.removeListener && this.emit('removeListener', t, e);
          else if (i(n)) {
            for (a = s; a-- > 0; )
              if (n[a] === e || (n[a].listener && n[a].listener === e)) {
                o = a;
                break;
              }
            if (o < 0) return this;
            1 === n.length
              ? ((n.length = 0), delete this._events[t])
              : n.splice(o, 1),
              this._events.removeListener && this.emit('removeListener', t, e);
          }
          return this;
        }),
        (n.prototype.removeAllListeners = function(t) {
          var e, n;
          if (!this._events) return this;
          if (!this._events.removeListener)
            return (
              0 === arguments.length
                ? (this._events = {})
                : this._events[t] && delete this._events[t],
              this
            );
          if (0 === arguments.length) {
            for (e in this._events)
              'removeListener' !== e && this.removeAllListeners(e);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = {}),
              this
            );
          }
          if (r((n = this._events[t]))) this.removeListener(t, n);
          else if (n)
            for (; n.length; ) this.removeListener(t, n[n.length - 1]);
          return delete this._events[t], this;
        }),
        (n.prototype.listeners = function(t) {
          return this._events && this._events[t]
            ? r(this._events[t])
              ? [this._events[t]]
              : this._events[t].slice()
            : [];
        }),
        (n.prototype.listenerCount = function(t) {
          if (this._events) {
            var e = this._events[t];
            if (r(e)) return 1;
            if (e) return e.length;
          }
          return 0;
        }),
        (n.listenerCount = function(t, e) {
          return t.listenerCount(e);
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(25),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = function(t) {
        return o.default.decode(t).toString('hex');
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(6),
        o = n(36),
        s = (r = o) && r.__esModule ? r : { default: r };
      e.default = function(t, e, n) {
        if (null == e) return '';
        if ('number' != typeof n.digits)
          throw new Error('Expecting options.digits to be a number');
        var r = (0, s.default)(t, e, n),
          o = 15 & r[r.length - 1],
          a =
            (((127 & r[o]) << 24) |
              ((255 & r[o + 1]) << 16) |
              ((255 & r[o + 2]) << 8) |
              (255 & r[o + 3])) %
            Math.pow(10, n.digits);
        return (a = (0, i.leftPad)(a, n.digits));
      };
    },
    function(t, e, n) {
      var r = n(0),
        i = n(4),
        o = n(1).Buffer,
        s = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591,
        ],
        a = new Array(160);
      function u() {
        this.init(), (this._w = a), i.call(this, 128, 112);
      }
      function f(t, e, n) {
        return n ^ (t & (e ^ n));
      }
      function h(t, e, n) {
        return (t & e) | (n & (t | e));
      }
      function l(t, e) {
        return (
          ((t >>> 28) | (e << 4)) ^
          ((e >>> 2) | (t << 30)) ^
          ((e >>> 7) | (t << 25))
        );
      }
      function c(t, e) {
        return (
          ((t >>> 14) | (e << 18)) ^
          ((t >>> 18) | (e << 14)) ^
          ((e >>> 9) | (t << 23))
        );
      }
      function d(t, e) {
        return ((t >>> 1) | (e << 31)) ^ ((t >>> 8) | (e << 24)) ^ (t >>> 7);
      }
      function p(t, e) {
        return (
          ((t >>> 1) | (e << 31)) ^
          ((t >>> 8) | (e << 24)) ^
          ((t >>> 7) | (e << 25))
        );
      }
      function _(t, e) {
        return ((t >>> 19) | (e << 13)) ^ ((e >>> 29) | (t << 3)) ^ (t >>> 6);
      }
      function g(t, e) {
        return (
          ((t >>> 19) | (e << 13)) ^
          ((e >>> 29) | (t << 3)) ^
          ((t >>> 6) | (e << 26))
        );
      }
      function y(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0;
      }
      r(u, i),
        (u.prototype.init = function() {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (u.prototype._update = function(t) {
          for (
            var e = this._w,
              n = 0 | this._ah,
              r = 0 | this._bh,
              i = 0 | this._ch,
              o = 0 | this._dh,
              a = 0 | this._eh,
              u = 0 | this._fh,
              v = 0 | this._gh,
              b = 0 | this._hh,
              w = 0 | this._al,
              m = 0 | this._bl,
              E = 0 | this._cl,
              S = 0 | this._dl,
              k = 0 | this._el,
              T = 0 | this._fl,
              M = 0 | this._gl,
              O = 0 | this._hl,
              x = 0;
            x < 32;
            x += 2
          )
            (e[x] = t.readInt32BE(4 * x)),
              (e[x + 1] = t.readInt32BE(4 * x + 4));
          for (; x < 160; x += 2) {
            var A = e[x - 30],
              B = e[x - 30 + 1],
              R = d(A, B),
              P = p(B, A),
              j = _((A = e[x - 4]), (B = e[x - 4 + 1])),
              I = g(B, A),
              L = e[x - 14],
              C = e[x - 14 + 1],
              U = e[x - 32],
              D = e[x - 32 + 1],
              N = (P + C) | 0,
              Y = (R + L + y(N, P)) | 0;
            (Y =
              ((Y = (Y + j + y((N = (N + I) | 0), I)) | 0) +
                U +
                y((N = (N + D) | 0), D)) |
              0),
              (e[x] = Y),
              (e[x + 1] = N);
          }
          for (var W = 0; W < 160; W += 2) {
            (Y = e[W]), (N = e[W + 1]);
            var q = h(n, r, i),
              z = h(w, m, E),
              F = l(n, w),
              H = l(w, n),
              K = c(a, k),
              V = c(k, a),
              X = s[W],
              $ = s[W + 1],
              J = f(a, u, v),
              Z = f(k, T, M),
              G = (O + V) | 0,
              Q = (b + K + y(G, O)) | 0;
            Q =
              ((Q =
                ((Q = (Q + J + y((G = (G + Z) | 0), Z)) | 0) +
                  X +
                  y((G = (G + $) | 0), $)) |
                0) +
                Y +
                y((G = (G + N) | 0), N)) |
              0;
            var tt = (H + z) | 0,
              et = (F + q + y(tt, H)) | 0;
            (b = v),
              (O = M),
              (v = u),
              (M = T),
              (u = a),
              (T = k),
              (a = (o + Q + y((k = (S + G) | 0), S)) | 0),
              (o = i),
              (S = E),
              (i = r),
              (E = m),
              (r = n),
              (m = w),
              (n = (Q + et + y((w = (G + tt) | 0), G)) | 0);
          }
          (this._al = (this._al + w) | 0),
            (this._bl = (this._bl + m) | 0),
            (this._cl = (this._cl + E) | 0),
            (this._dl = (this._dl + S) | 0),
            (this._el = (this._el + k) | 0),
            (this._fl = (this._fl + T) | 0),
            (this._gl = (this._gl + M) | 0),
            (this._hl = (this._hl + O) | 0),
            (this._ah = (this._ah + n + y(this._al, w)) | 0),
            (this._bh = (this._bh + r + y(this._bl, m)) | 0),
            (this._ch = (this._ch + i + y(this._cl, E)) | 0),
            (this._dh = (this._dh + o + y(this._dl, S)) | 0),
            (this._eh = (this._eh + a + y(this._el, k)) | 0),
            (this._fh = (this._fh + u + y(this._fl, T)) | 0),
            (this._gh = (this._gh + v + y(this._gl, M)) | 0),
            (this._hh = (this._hh + b + y(this._hl, O)) | 0);
        }),
        (u.prototype._hash = function() {
          var t = o.allocUnsafe(64);
          function e(e, n, r) {
            t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            e(this._gh, this._gl, 48),
            e(this._hh, this._hl, 56),
            t
          );
        }),
        (t.exports = u);
    },
    function(t, e, n) {
      var r = n(0),
        i = n(4),
        o = n(1).Buffer,
        s = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298,
        ],
        a = new Array(64);
      function u() {
        this.init(), (this._w = a), i.call(this, 64, 56);
      }
      function f(t, e, n) {
        return n ^ (t & (e ^ n));
      }
      function h(t, e, n) {
        return (t & e) | (n & (t | e));
      }
      function l(t) {
        return (
          ((t >>> 2) | (t << 30)) ^
          ((t >>> 13) | (t << 19)) ^
          ((t >>> 22) | (t << 10))
        );
      }
      function c(t) {
        return (
          ((t >>> 6) | (t << 26)) ^
          ((t >>> 11) | (t << 21)) ^
          ((t >>> 25) | (t << 7))
        );
      }
      function d(t) {
        return ((t >>> 7) | (t << 25)) ^ ((t >>> 18) | (t << 14)) ^ (t >>> 3);
      }
      r(u, i),
        (u.prototype.init = function() {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (u.prototype._update = function(t) {
          for (
            var e,
              n = this._w,
              r = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              a = 0 | this._d,
              u = 0 | this._e,
              p = 0 | this._f,
              _ = 0 | this._g,
              g = 0 | this._h,
              y = 0;
            y < 16;
            ++y
          )
            n[y] = t.readInt32BE(4 * y);
          for (; y < 64; ++y)
            n[y] =
              0 |
              (((((e = n[y - 2]) >>> 17) | (e << 15)) ^
                ((e >>> 19) | (e << 13)) ^
                (e >>> 10)) +
                n[y - 7] +
                d(n[y - 15]) +
                n[y - 16]);
          for (var v = 0; v < 64; ++v) {
            var b = (g + c(u) + f(u, p, _) + s[v] + n[v]) | 0,
              w = (l(r) + h(r, i, o)) | 0;
            (g = _),
              (_ = p),
              (p = u),
              (u = (a + b) | 0),
              (a = o),
              (o = i),
              (i = r),
              (r = (b + w) | 0);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (a + this._d) | 0),
            (this._e = (u + this._e) | 0),
            (this._f = (p + this._f) | 0),
            (this._g = (_ + this._g) | 0),
            (this._h = (g + this._h) | 0);
        }),
        (u.prototype._hash = function() {
          var t = o.allocUnsafe(32);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
          );
        }),
        (t.exports = u);
    },
    function(t, e, n) {
      'use strict';
      t.exports = o;
      var r = n(3),
        i = n(7);
      function o(t) {
        if (!(this instanceof o)) return new o(t);
        r.call(this, t),
          (this._transformState = {
            afterTransform: function(t, e) {
              var n = this._transformState;
              n.transforming = !1;
              var r = n.writecb;
              if (!r)
                return this.emit(
                  'error',
                  new Error('write callback called multiple times')
                );
              (n.writechunk = null),
                (n.writecb = null),
                null != e && this.push(e),
                r(t);
              var i = this._readableState;
              (i.reading = !1),
                (i.needReadable || i.length < i.highWaterMark) &&
                  this._read(i.highWaterMark);
            }.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ('function' == typeof t.transform &&
              (this._transform = t.transform),
            'function' == typeof t.flush && (this._flush = t.flush)),
          this.on('prefinish', s);
      }
      function s() {
        var t = this;
        'function' == typeof this._flush
          ? this._flush(function(e, n) {
              a(t, e, n);
            })
          : a(this, null, null);
      }
      function a(t, e, n) {
        if (e) return t.emit('error', e);
        if ((null != n && t.push(n), t._writableState.length))
          throw new Error('Calling transform done when ws.length != 0');
        if (t._transformState.transforming)
          throw new Error('Calling transform done when still transforming');
        return t.push(null);
      }
      (i.inherits = n(0)),
        i.inherits(o, r),
        (o.prototype.push = function(t, e) {
          return (
            (this._transformState.needTransform = !1),
            r.prototype.push.call(this, t, e)
          );
        }),
        (o.prototype._transform = function(t, e, n) {
          throw new Error('_transform() is not implemented');
        }),
        (o.prototype._write = function(t, e, n) {
          var r = this._transformState;
          if (
            ((r.writecb = n),
            (r.writechunk = t),
            (r.writeencoding = e),
            !r.transforming)
          ) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (o.prototype._read = function(t) {
          var e = this._transformState;
          null !== e.writechunk && e.writecb && !e.transforming
            ? ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform))
            : (e.needTransform = !0);
        }),
        (o.prototype._destroy = function(t, e) {
          var n = this;
          r.prototype._destroy.call(this, t, function(t) {
            e(t), n.emit('close');
          });
        });
    },
    function(t, e, n) {
      'use strict';
      var r = n(8).nextTick;
      function i(t, e) {
        t.emit('error', e);
      }
      t.exports = {
        destroy: function(t, e) {
          var n = this,
            o = this._readableState && this._readableState.destroyed,
            s = this._writableState && this._writableState.destroyed;
          return o || s
            ? (e
                ? e(t)
                : !t ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  r(i, this, t),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function(t) {
                !e && t
                  ? (r(i, n, t),
                    n._writableState && (n._writableState.errorEmitted = !0))
                  : e && e(t);
              }),
              this);
        },
        undestroy: function() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
      };
    },
    function(t, e, n) {
      t.exports = n(14).EventEmitter;
    },
    function(t, e, n) {
      'use strict';
      (function(e, r) {
        var i = n(8).nextTick;
        t.exports = b;
        var o,
          s = n(37);
        b.ReadableState = v;
        n(14).EventEmitter;
        var a = function(t, e) {
            return t.listeners(e).length;
          },
          u = n(21),
          f = n(1).Buffer,
          h = e.Uint8Array || function() {};
        var l = n(7);
        l.inherits = n(0);
        var c = n(59),
          d = void 0;
        d = c && c.debuglog ? c.debuglog('stream') : function() {};
        var p,
          _ = n(58),
          g = n(20);
        l.inherits(b, u);
        var y = ['error', 'close', 'destroy', 'pause', 'resume'];
        function v(t, e) {
          (o = o || n(3)), (t = t || {});
          var r = e instanceof o;
          (this.objectMode = !!t.objectMode),
            r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
          var i = t.highWaterMark,
            s = t.readableHighWaterMark,
            a = this.objectMode ? 16 : 16384;
          (this.highWaterMark = i || 0 === i ? i : r && (s || 0 === s) ? s : a),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.buffer = new _()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.destroyed = !1),
            (this.defaultEncoding = t.defaultEncoding || 'utf8'),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (p || (p = n(11).StringDecoder),
              (this.decoder = new p(t.encoding)),
              (this.encoding = t.encoding));
        }
        function b(t) {
          if (((o = o || n(3)), !(this instanceof b))) return new b(t);
          (this._readableState = new v(t, this)),
            (this.readable = !0),
            t &&
              ('function' == typeof t.read && (this._read = t.read),
              'function' == typeof t.destroy && (this._destroy = t.destroy)),
            u.call(this);
        }
        function w(t, e, n, r, i) {
          var o,
            s = t._readableState;
          null === e
            ? ((s.reading = !1),
              (function(t, e) {
                if (e.ended) return;
                if (e.decoder) {
                  var n = e.decoder.end();
                  n &&
                    n.length &&
                    (e.buffer.push(n),
                    (e.length += e.objectMode ? 1 : n.length));
                }
                (e.ended = !0), k(t);
              })(t, s))
            : (i ||
                (o = (function(t, e) {
                  var n;
                  (r = e),
                    f.isBuffer(r) ||
                      r instanceof h ||
                      'string' == typeof e ||
                      void 0 === e ||
                      t.objectMode ||
                      (n = new TypeError('Invalid non-string/buffer chunk'));
                  var r;
                  return n;
                })(s, e)),
              o
                ? t.emit('error', o)
                : s.objectMode || (e && e.length > 0)
                ? ('string' == typeof e ||
                    s.objectMode ||
                    Object.getPrototypeOf(e) === f.prototype ||
                    (e = (function(t) {
                      return f.from(t);
                    })(e)),
                  r
                    ? s.endEmitted
                      ? t.emit(
                          'error',
                          new Error('stream.unshift() after end event')
                        )
                      : m(t, s, e, !0)
                    : s.ended
                    ? t.emit('error', new Error('stream.push() after EOF'))
                    : ((s.reading = !1),
                      s.decoder && !n
                        ? ((e = s.decoder.write(e)),
                          s.objectMode || 0 !== e.length
                            ? m(t, s, e, !1)
                            : M(t, s))
                        : m(t, s, e, !1)))
                : r || (s.reading = !1));
          return (function(t) {
            return (
              !t.ended &&
              (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
            );
          })(s);
        }
        function m(t, e, n, r) {
          e.flowing && 0 === e.length && !e.sync
            ? (t.emit('data', n), t.read(0))
            : ((e.length += e.objectMode ? 1 : n.length),
              r ? e.buffer.unshift(n) : e.buffer.push(n),
              e.needReadable && k(t)),
            M(t, e);
        }
        Object.defineProperty(b.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function(t) {
            this._readableState && (this._readableState.destroyed = t);
          },
        }),
          (b.prototype.destroy = g.destroy),
          (b.prototype._undestroy = g.undestroy),
          (b.prototype._destroy = function(t, e) {
            this.push(null), e(t);
          }),
          (b.prototype.push = function(t, e) {
            var n,
              r = this._readableState;
            return (
              r.objectMode
                ? (n = !0)
                : 'string' == typeof t &&
                  ((e = e || r.defaultEncoding) !== r.encoding &&
                    ((t = f.from(t, e)), (e = '')),
                  (n = !0)),
              w(this, t, e, !1, n)
            );
          }),
          (b.prototype.unshift = function(t) {
            return w(this, t, null, !0, !1);
          }),
          (b.prototype.isPaused = function() {
            return !1 === this._readableState.flowing;
          }),
          (b.prototype.setEncoding = function(t) {
            return (
              p || (p = n(11).StringDecoder),
              (this._readableState.decoder = new p(t)),
              (this._readableState.encoding = t),
              this
            );
          });
        var E = 8388608;
        function S(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
            ? 1
            : t != t
            ? e.flowing && e.length
              ? e.buffer.head.data.length
              : e.length
            : (t > e.highWaterMark &&
                (e.highWaterMark = (function(t) {
                  return (
                    t >= E
                      ? (t = E)
                      : (t--,
                        (t |= t >>> 1),
                        (t |= t >>> 2),
                        (t |= t >>> 4),
                        (t |= t >>> 8),
                        (t |= t >>> 16),
                        t++),
                    t
                  );
                })(t)),
              t <= e.length
                ? t
                : e.ended
                ? e.length
                : ((e.needReadable = !0), 0));
        }
        function k(t) {
          var e = t._readableState;
          (e.needReadable = !1),
            e.emittedReadable ||
              (d('emitReadable', e.flowing),
              (e.emittedReadable = !0),
              e.sync ? i(T, t) : T(t));
        }
        function T(t) {
          d('emit readable'), t.emit('readable'), B(t);
        }
        function M(t, e) {
          e.readingMore || ((e.readingMore = !0), i(O, t, e));
        }
        function O(t, e) {
          for (
            var n = e.length;
            !e.reading &&
            !e.flowing &&
            !e.ended &&
            e.length < e.highWaterMark &&
            (d('maybeReadMore read 0'), t.read(0), n !== e.length);

          )
            n = e.length;
          e.readingMore = !1;
        }
        function x(t) {
          d('readable nexttick read 0'), t.read(0);
        }
        function A(t, e) {
          e.reading || (d('resume read 0'), t.read(0)),
            (e.resumeScheduled = !1),
            (e.awaitDrain = 0),
            t.emit('resume'),
            B(t),
            e.flowing && !e.reading && t.read(0);
        }
        function B(t) {
          var e = t._readableState;
          for (d('flow', e.flowing); e.flowing && null !== t.read(); );
        }
        function R(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (n = e.buffer.shift())
                : !t || t >= e.length
                ? ((n = e.decoder
                    ? e.buffer.join('')
                    : 1 === e.buffer.length
                    ? e.buffer.head.data
                    : e.buffer.concat(e.length)),
                  e.buffer.clear())
                : (n = (function(t, e, n) {
                    var r;
                    t < e.head.data.length
                      ? ((r = e.head.data.slice(0, t)),
                        (e.head.data = e.head.data.slice(t)))
                      : (r =
                          t === e.head.data.length
                            ? e.shift()
                            : n
                            ? (function(t, e) {
                                var n = e.head,
                                  r = 1,
                                  i = n.data;
                                t -= i.length;
                                for (; (n = n.next); ) {
                                  var o = n.data,
                                    s = t > o.length ? o.length : t;
                                  if (
                                    (s === o.length
                                      ? (i += o)
                                      : (i += o.slice(0, t)),
                                    0 === (t -= s))
                                  ) {
                                    s === o.length
                                      ? (++r,
                                        n.next
                                          ? (e.head = n.next)
                                          : (e.head = e.tail = null))
                                      : ((e.head = n), (n.data = o.slice(s)));
                                    break;
                                  }
                                  ++r;
                                }
                                return (e.length -= r), i;
                              })(t, e)
                            : (function(t, e) {
                                var n = f.allocUnsafe(t),
                                  r = e.head,
                                  i = 1;
                                r.data.copy(n), (t -= r.data.length);
                                for (; (r = r.next); ) {
                                  var o = r.data,
                                    s = t > o.length ? o.length : t;
                                  if (
                                    (o.copy(n, n.length - t, 0, s),
                                    0 === (t -= s))
                                  ) {
                                    s === o.length
                                      ? (++i,
                                        r.next
                                          ? (e.head = r.next)
                                          : (e.head = e.tail = null))
                                      : ((e.head = r), (r.data = o.slice(s)));
                                    break;
                                  }
                                  ++i;
                                }
                                return (e.length -= i), n;
                              })(t, e));
                    return r;
                  })(t, e.buffer, e.decoder)),
              n);
          var n;
        }
        function P(t) {
          var e = t._readableState;
          if (e.length > 0)
            throw new Error('"endReadable()" called on non-empty stream');
          e.endEmitted || ((e.ended = !0), i(j, e, t));
        }
        function j(t, e) {
          t.endEmitted ||
            0 !== t.length ||
            ((t.endEmitted = !0), (e.readable = !1), e.emit('end'));
        }
        function I(t, e) {
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        }
        (b.prototype.read = function(t) {
          d('read', t), (t = parseInt(t, 10));
          var e = this._readableState,
            n = t;
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              (e.length >= e.highWaterMark || e.ended))
          )
            return (
              d('read: emitReadable', e.length, e.ended),
              0 === e.length && e.ended ? P(this) : k(this),
              null
            );
          if (0 === (t = S(t, e)) && e.ended)
            return 0 === e.length && P(this), null;
          var r,
            i = e.needReadable;
          return (
            d('need readable', i),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              d('length less than watermark', (i = !0)),
            e.ended || e.reading
              ? d('reading or ended', (i = !1))
              : i &&
                (d('do read'),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = S(n, e))),
            null === (r = t > 0 ? R(t, e) : null)
              ? ((e.needReadable = !0), (t = 0))
              : (e.length -= t),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), n !== t && e.ended && P(this)),
            null !== r && this.emit('data', r),
            r
          );
        }),
          (b.prototype._read = function(t) {
            this.emit('error', new Error('_read() is not implemented'));
          }),
          (b.prototype.pipe = function(t, e) {
            var n = this,
              o = this._readableState;
            switch (o.pipesCount) {
              case 0:
                o.pipes = t;
                break;
              case 1:
                o.pipes = [o.pipes, t];
                break;
              default:
                o.pipes.push(t);
            }
            (o.pipesCount += 1), d('pipe count=%d opts=%j', o.pipesCount, e);
            var u =
              (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? h : b;
            function f(e, r) {
              d('onunpipe'),
                e === n &&
                  r &&
                  !1 === r.hasUnpiped &&
                  ((r.hasUnpiped = !0),
                  d('cleanup'),
                  t.removeListener('close', y),
                  t.removeListener('finish', v),
                  t.removeListener('drain', l),
                  t.removeListener('error', g),
                  t.removeListener('unpipe', f),
                  n.removeListener('end', h),
                  n.removeListener('end', b),
                  n.removeListener('data', _),
                  (c = !0),
                  !o.awaitDrain ||
                    (t._writableState && !t._writableState.needDrain) ||
                    l());
            }
            function h() {
              d('onend'), t.end();
            }
            o.endEmitted ? i(u) : n.once('end', u), t.on('unpipe', f);
            var l = (function(t) {
              return function() {
                var e = t._readableState;
                d('pipeOnDrain', e.awaitDrain),
                  e.awaitDrain && e.awaitDrain--,
                  0 === e.awaitDrain &&
                    a(t, 'data') &&
                    ((e.flowing = !0), B(t));
              };
            })(n);
            t.on('drain', l);
            var c = !1;
            var p = !1;
            function _(e) {
              d('ondata'),
                (p = !1),
                !1 !== t.write(e) ||
                  p ||
                  (((1 === o.pipesCount && o.pipes === t) ||
                    (o.pipesCount > 1 && -1 !== I(o.pipes, t))) &&
                    !c &&
                    (d(
                      'false write response, pause',
                      n._readableState.awaitDrain
                    ),
                    n._readableState.awaitDrain++,
                    (p = !0)),
                  n.pause());
            }
            function g(e) {
              d('onerror', e),
                b(),
                t.removeListener('error', g),
                0 === a(t, 'error') && t.emit('error', e);
            }
            function y() {
              t.removeListener('finish', v), b();
            }
            function v() {
              d('onfinish'), t.removeListener('close', y), b();
            }
            function b() {
              d('unpipe'), n.unpipe(t);
            }
            return (
              n.on('data', _),
              (function(t, e, n) {
                if ('function' == typeof t.prependListener)
                  return t.prependListener(e, n);
                t._events && t._events[e]
                  ? s(t._events[e])
                    ? t._events[e].unshift(n)
                    : (t._events[e] = [n, t._events[e]])
                  : t.on(e, n);
              })(t, 'error', g),
              t.once('close', y),
              t.once('finish', v),
              t.emit('pipe', n),
              o.flowing || (d('pipe resume'), n.resume()),
              t
            );
          }),
          (b.prototype.unpipe = function(t) {
            var e = this._readableState,
              n = { hasUnpiped: !1 };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount)
              return t && t !== e.pipes
                ? this
                : (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit('unpipe', this, n),
                  this);
            if (!t) {
              var r = e.pipes,
                i = e.pipesCount;
              (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
              for (var o = 0; o < i; o++) r[o].emit('unpipe', this, n);
              return this;
            }
            var s = I(e.pipes, t);
            return -1 === s
              ? this
              : (e.pipes.splice(s, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit('unpipe', this, n),
                this);
          }),
          (b.prototype.on = function(t, e) {
            var n = u.prototype.on.call(this, t, e);
            if ('data' === t)
              !1 !== this._readableState.flowing && this.resume();
            else if ('readable' === t) {
              var r = this._readableState;
              r.endEmitted ||
                r.readableListening ||
                ((r.readableListening = r.needReadable = !0),
                (r.emittedReadable = !1),
                r.reading ? r.length && k(this) : i(x, this));
            }
            return n;
          }),
          (b.prototype.addListener = b.prototype.on),
          (b.prototype.resume = function() {
            var t = this._readableState;
            return (
              t.flowing ||
                (d('resume'),
                (t.flowing = !0),
                (function(t, e) {
                  e.resumeScheduled || ((e.resumeScheduled = !0), i(A, t, e));
                })(this, t)),
              this
            );
          }),
          (b.prototype.pause = function() {
            return (
              d('call pause flowing=%j', this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (d('pause'),
                (this._readableState.flowing = !1),
                this.emit('pause')),
              this
            );
          }),
          (b.prototype.wrap = function(t) {
            var e = this,
              n = this._readableState,
              r = !1;
            for (var i in (t.on('end', function() {
              if ((d('wrapped end'), n.decoder && !n.ended)) {
                var t = n.decoder.end();
                t && t.length && e.push(t);
              }
              e.push(null);
            }),
            t.on('data', function(i) {
              (d('wrapped data'),
              n.decoder && (i = n.decoder.write(i)),
              !n.objectMode || (null !== i && void 0 !== i)) &&
                ((n.objectMode || (i && i.length)) &&
                  (e.push(i) || ((r = !0), t.pause())));
            }),
            t))
              void 0 === this[i] &&
                'function' == typeof t[i] &&
                (this[i] = (function(e) {
                  return function() {
                    return t[e].apply(t, arguments);
                  };
                })(i));
            for (var o = 0; o < y.length; o++)
              t.on(y[o], this.emit.bind(this, y[o]));
            return (
              (this._read = function(e) {
                d('wrapped _read', e), r && ((r = !1), t.resume());
              }),
              this
            );
          }),
          (b._fromList = R);
      }.call(this, n(5), n(9)));
    },
    function(t, e, n) {
      t.exports = i;
      var r = n(14).EventEmitter;
      function i() {
        r.call(this);
      }
      n(0)(i, r),
        (i.Readable = n(13)),
        (i.Writable = n(52)),
        (i.Duplex = n(51)),
        (i.Transform = n(50)),
        (i.PassThrough = n(49)),
        (i.Stream = i),
        (i.prototype.pipe = function(t, e) {
          var n = this;
          function i(e) {
            t.writable && !1 === t.write(e) && n.pause && n.pause();
          }
          function o() {
            n.readable && n.resume && n.resume();
          }
          n.on('data', i),
            t.on('drain', o),
            t._isStdio ||
              (e && !1 === e.end) ||
              (n.on('end', a), n.on('close', u));
          var s = !1;
          function a() {
            s || ((s = !0), t.end());
          }
          function u() {
            s || ((s = !0), 'function' == typeof t.destroy && t.destroy());
          }
          function f(t) {
            if ((h(), 0 === r.listenerCount(this, 'error'))) throw t;
          }
          function h() {
            n.removeListener('data', i),
              t.removeListener('drain', o),
              n.removeListener('end', a),
              n.removeListener('close', u),
              n.removeListener('error', f),
              t.removeListener('error', f),
              n.removeListener('end', h),
              n.removeListener('close', h),
              t.removeListener('close', h);
          }
          return (
            n.on('error', f),
            t.on('error', f),
            n.on('end', h),
            n.on('close', h),
            t.on('close', h),
            t.emit('pipe', n),
            t
          );
        });
    },
    function(t, e, n) {
      var r = n(1).Buffer,
        i = n(23).Transform,
        o = n(11).StringDecoder;
      function s(t) {
        i.call(this),
          (this.hashMode = 'string' == typeof t),
          this.hashMode
            ? (this[t] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null);
      }
      n(0)(s, i),
        (s.prototype.update = function(t, e, n) {
          'string' == typeof t && (t = r.from(t, e));
          var i = this._update(t);
          return this.hashMode ? this : (n && (i = this._toString(i, n)), i);
        }),
        (s.prototype.setAutoPadding = function() {}),
        (s.prototype.getAuthTag = function() {
          throw new Error('trying to get auth tag in unsupported state');
        }),
        (s.prototype.setAuthTag = function() {
          throw new Error('trying to set auth tag in unsupported state');
        }),
        (s.prototype.setAAD = function() {
          throw new Error('trying to set aad in unsupported state');
        }),
        (s.prototype._transform = function(t, e, n) {
          var r;
          try {
            this.hashMode ? this._update(t) : this.push(this._update(t));
          } catch (t) {
            r = t;
          } finally {
            n(r);
          }
        }),
        (s.prototype._flush = function(t) {
          var e;
          try {
            this.push(this.__final());
          } catch (t) {
            e = t;
          }
          t(e);
        }),
        (s.prototype._finalOrDigest = function(t) {
          var e = this.__final() || r.alloc(0);
          return t && (e = this._toString(e, t, !0)), e;
        }),
        (s.prototype._toString = function(t, e, n) {
          if (
            (this._decoder ||
              ((this._decoder = new o(e)), (this._encoding = e)),
            this._encoding !== e)
          )
            throw new Error("can't switch encodings");
          var r = this._decoder.write(t);
          return n && (r += this._decoder.end()), r;
        }),
        (t.exports = s);
    },
    function(t, e, n) {
      var r = n(66);
      (e.encode = r.encode), (e.decode = r.decode);
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(10),
        o = n(15),
        s = (r = o) && r.__esModule ? r : { default: r };
      e.default = function(t, e, n) {
        return (0, i.totpCheckWithWindow)(t, (0, s.default)(e), n);
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(70),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = new o.default();
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function(t, e) {
          return Math.floor(t / 1e3) % e;
        });
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        Object.defineProperty(e, '__esModule', { value: !0 });
        var r = n(6);
        e.default = function(e, n) {
          if ('string' != typeof n.algorithm)
            throw new Error('Expecting options.algorithm to be a string');
          if ('string' != typeof n.encoding)
            throw new Error('Expecting options.encoding to be a string');
          var i = new t(e, n.encoding),
            o = n.algorithm.toLowerCase();
          switch (o) {
            case 'sha1':
              return (0, r.padSecret)(i, 20, n.encoding);
            case 'sha256':
              return (0, r.padSecret)(i, 32, n.encoding);
            case 'sha512':
              return (0, r.padSecret)(i, 64, n.encoding);
            default:
              throw new Error(
                'Unsupported algorithm ' + o + '. Accepts: sha1, sha256, sha512'
              );
          }
        };
      }.call(this, n(2).Buffer));
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function(t, e) {
          return Math.floor(t / e / 1e3);
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = o(n(16)),
        i = o(n(30));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default = function(t, e) {
        if ('number' != typeof e.epoch)
          throw new Error('Expecting options.epoch to be a number');
        if ('number' != typeof e.step)
          throw new Error('Expecting options.step to be a number');
        var n = (0, i.default)(e.epoch, e.step);
        return (0, r.default)(t, n, e);
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(6),
        o = n(31),
        s = (r = o) && r.__esModule ? r : { default: r };
      e.default = function(t, e, n) {
        var r = (0, s.default)(e, n || {});
        return !(r.length < 1) && (0, i.isSameToken)(t, r);
      };
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = function(e, n) {
            if ('string' != typeof n.encoding)
              throw new Error('Expecting options.encoding to be a string');
            return new t(e, n.encoding);
          });
      }.call(this, n(2).Buffer));
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(33),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = function() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.assign(
          {
            algorithm: 'sha1',
            createHmacSecret: o.default,
            crypto: null,
            digits: 6,
            encoding: 'ascii',
          },
          t
        );
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(6);
      e.default = function(t) {
        var e = (0, r.intToHex)(t);
        return (0, r.leftPad)(e, 16);
      };
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        Object.defineProperty(e, '__esModule', { value: !0 });
        var r,
          i = n(35),
          o = (r = i) && r.__esModule ? r : { default: r };
        e.default = function(e, n, r) {
          if (!r.crypto || 'function' != typeof r.crypto.createHmac)
            throw new Error(
              'Expecting options.crypto to have a createHmac function'
            );
          if ('function' != typeof r.createHmacSecret)
            throw new Error(
              'Expecting options.createHmacSecret to be a function'
            );
          if ('string' != typeof r.algorithm)
            throw new Error('Expecting options.algorithm to be a string');
          var i = r.createHmacSecret(e, {
              algorithm: r.algorithm,
              encoding: r.encoding,
            }),
            s = (0, o.default)(n);
          return r.crypto
            .createHmac(r.algorithm, i)
            .update(new t(s, 'hex'))
            .digest();
        };
      }.call(this, n(2).Buffer));
    },
    function(t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function(t) {
          return '[object Array]' == n.call(t);
        };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(86),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = new o.default();
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = function(e) {
            var n = window.crypto || window.msCrypto;
            if (!n || 'function' != typeof n.getRandomValues)
              throw new Error(
                'Unable to load crypto module. You may be on an older browser'
              );
            if (e > 65536)
              throw new Error('Requested size of random bytes is too large');
            if (e < 1) throw new Error('Requested size must be more than 0');
            var r = new Uint8Array(e);
            return n.getRandomValues(r), new t(r.buffer);
          });
      }.call(this, n(2).Buffer));
    },
    function(t, e, n) {
      var r = n(0),
        i = n(17),
        o = n(4),
        s = n(1).Buffer,
        a = new Array(160);
      function u() {
        this.init(), (this._w = a), o.call(this, 128, 112);
      }
      r(u, i),
        (u.prototype.init = function() {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (u.prototype._hash = function() {
          var t = s.allocUnsafe(48);
          function e(e, n, r) {
            t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            t
          );
        }),
        (t.exports = u);
    },
    function(t, e, n) {
      var r = n(0),
        i = n(18),
        o = n(4),
        s = n(1).Buffer,
        a = new Array(64);
      function u() {
        this.init(), (this._w = a), o.call(this, 64, 56);
      }
      r(u, i),
        (u.prototype.init = function() {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (u.prototype._hash = function() {
          var t = s.allocUnsafe(28);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
          );
        }),
        (t.exports = u);
    },
    function(t, e, n) {
      var r = n(0),
        i = n(4),
        o = n(1).Buffer,
        s = [1518500249, 1859775393, -1894007588, -899497514],
        a = new Array(80);
      function u() {
        this.init(), (this._w = a), i.call(this, 64, 56);
      }
      function f(t) {
        return (t << 5) | (t >>> 27);
      }
      function h(t) {
        return (t << 30) | (t >>> 2);
      }
      function l(t, e, n, r) {
        return 0 === t
          ? (e & n) | (~e & r)
          : 2 === t
          ? (e & n) | (e & r) | (n & r)
          : e ^ n ^ r;
      }
      r(u, i),
        (u.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (u.prototype._update = function(t) {
          for (
            var e,
              n = this._w,
              r = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              a = 0 | this._d,
              u = 0 | this._e,
              c = 0;
            c < 16;
            ++c
          )
            n[c] = t.readInt32BE(4 * c);
          for (; c < 80; ++c)
            n[c] =
              ((e = n[c - 3] ^ n[c - 8] ^ n[c - 14] ^ n[c - 16]) << 1) |
              (e >>> 31);
          for (var d = 0; d < 80; ++d) {
            var p = ~~(d / 20),
              _ = (f(r) + l(p, i, o, a) + u + n[d] + s[p]) | 0;
            (u = a), (a = o), (o = h(i)), (i = r), (r = _);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (a + this._d) | 0),
            (this._e = (u + this._e) | 0);
        }),
        (u.prototype._hash = function() {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = u);
    },
    function(t, e, n) {
      var r = n(0),
        i = n(4),
        o = n(1).Buffer,
        s = [1518500249, 1859775393, -1894007588, -899497514],
        a = new Array(80);
      function u() {
        this.init(), (this._w = a), i.call(this, 64, 56);
      }
      function f(t) {
        return (t << 30) | (t >>> 2);
      }
      function h(t, e, n, r) {
        return 0 === t
          ? (e & n) | (~e & r)
          : 2 === t
          ? (e & n) | (e & r) | (n & r)
          : e ^ n ^ r;
      }
      r(u, i),
        (u.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (u.prototype._update = function(t) {
          for (
            var e,
              n = this._w,
              r = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              a = 0 | this._d,
              u = 0 | this._e,
              l = 0;
            l < 16;
            ++l
          )
            n[l] = t.readInt32BE(4 * l);
          for (; l < 80; ++l)
            n[l] = n[l - 3] ^ n[l - 8] ^ n[l - 14] ^ n[l - 16];
          for (var c = 0; c < 80; ++c) {
            var d = ~~(c / 20),
              p =
                0 |
                ((((e = r) << 5) | (e >>> 27)) +
                  h(d, i, o, a) +
                  u +
                  n[c] +
                  s[d]);
            (u = a), (a = o), (o = f(i)), (i = r), (r = p);
          }
          (this._a = (r + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (a + this._d) | 0),
            (this._e = (u + this._e) | 0);
        }),
        (u.prototype._hash = function() {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = u);
    },
    function(t, e, n) {
      ((e = t.exports = function(t) {
        t = t.toLowerCase();
        var n = e[t];
        if (!n)
          throw new Error(t + ' is not supported (we accept pull requests)');
        return new n();
      }).sha = n(43)),
        (e.sha1 = n(42)),
        (e.sha224 = n(41)),
        (e.sha256 = n(18)),
        (e.sha384 = n(40)),
        (e.sha512 = n(17));
    },
    function(t, e, n) {
      'use strict';
      (function(e) {
        var r = n(23).Transform;
        function i(t) {
          r.call(this),
            (this._block = new e(t)),
            (this._blockSize = t),
            (this._blockOffset = 0),
            (this._length = [0, 0, 0, 0]),
            (this._finalized = !1);
        }
        n(0)(i, r),
          (i.prototype._transform = function(t, n, r) {
            var i = null;
            try {
              'buffer' !== n && (t = new e(t, n)), this.update(t);
            } catch (t) {
              i = t;
            }
            r(i);
          }),
          (i.prototype._flush = function(t) {
            var e = null;
            try {
              this.push(this._digest());
            } catch (t) {
              e = t;
            }
            t(e);
          }),
          (i.prototype.update = function(t, n) {
            if (!e.isBuffer(t) && 'string' != typeof t)
              throw new TypeError('Data must be a string or a buffer');
            if (this._finalized) throw new Error('Digest already called');
            e.isBuffer(t) || (t = new e(t, n || 'binary'));
            for (
              var r = this._block, i = 0;
              this._blockOffset + t.length - i >= this._blockSize;

            ) {
              for (var o = this._blockOffset; o < this._blockSize; )
                r[o++] = t[i++];
              this._update(), (this._blockOffset = 0);
            }
            for (; i < t.length; ) r[this._blockOffset++] = t[i++];
            for (var s = 0, a = 8 * t.length; a > 0; ++s)
              (this._length[s] += a),
                (a = (this._length[s] / 4294967296) | 0) > 0 &&
                  (this._length[s] -= 4294967296 * a);
            return this;
          }),
          (i.prototype._update = function(t) {
            throw new Error('_update is not implemented');
          }),
          (i.prototype.digest = function(t) {
            if (this._finalized) throw new Error('Digest already called');
            this._finalized = !0;
            var e = this._digest();
            return void 0 !== t && (e = e.toString(t)), e;
          }),
          (i.prototype._digest = function() {
            throw new Error('_digest is not implemented');
          }),
          (t.exports = i);
      }.call(this, n(2).Buffer));
    },
    function(t, e, n) {
      'use strict';
      (function(e) {
        var r = n(0),
          i = n(45);
        function o() {
          i.call(this, 64),
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520);
        }
        function s(t, e) {
          return (t << e) | (t >>> (32 - e));
        }
        function a(t, e, n, r, i, o, a, u) {
          return (s((t + (e ^ n ^ r) + o + a) | 0, u) + i) | 0;
        }
        function u(t, e, n, r, i, o, a, u) {
          return (s((t + ((e & n) | (~e & r)) + o + a) | 0, u) + i) | 0;
        }
        function f(t, e, n, r, i, o, a, u) {
          return (s((t + ((e | ~n) ^ r) + o + a) | 0, u) + i) | 0;
        }
        function h(t, e, n, r, i, o, a, u) {
          return (s((t + ((e & r) | (n & ~r)) + o + a) | 0, u) + i) | 0;
        }
        function l(t, e, n, r, i, o, a, u) {
          return (s((t + (e ^ (n | ~r)) + o + a) | 0, u) + i) | 0;
        }
        r(o, i),
          (o.prototype._update = function() {
            for (var t = new Array(16), e = 0; e < 16; ++e)
              t[e] = this._block.readInt32LE(4 * e);
            var n = this._a,
              r = this._b,
              i = this._c,
              o = this._d,
              c = this._e;
            (c = a(
              c,
              (n = a(n, r, i, o, c, t[0], 0, 11)),
              r,
              (i = s(i, 10)),
              o,
              t[1],
              0,
              14
            )),
              (r = a(
                (r = s(r, 10)),
                (i = a(
                  i,
                  (o = a(o, c, n, r, i, t[2], 0, 15)),
                  c,
                  (n = s(n, 10)),
                  r,
                  t[3],
                  0,
                  12
                )),
                o,
                (c = s(c, 10)),
                n,
                t[4],
                0,
                5
              )),
              (o = a(
                (o = s(o, 10)),
                (c = a(
                  c,
                  (n = a(n, r, i, o, c, t[5], 0, 8)),
                  r,
                  (i = s(i, 10)),
                  o,
                  t[6],
                  0,
                  7
                )),
                n,
                (r = s(r, 10)),
                i,
                t[7],
                0,
                9
              )),
              (n = a(
                (n = s(n, 10)),
                (r = a(
                  r,
                  (i = a(i, o, c, n, r, t[8], 0, 11)),
                  o,
                  (c = s(c, 10)),
                  n,
                  t[9],
                  0,
                  13
                )),
                i,
                (o = s(o, 10)),
                c,
                t[10],
                0,
                14
              )),
              (i = a(
                (i = s(i, 10)),
                (o = a(
                  o,
                  (c = a(c, n, r, i, o, t[11], 0, 15)),
                  n,
                  (r = s(r, 10)),
                  i,
                  t[12],
                  0,
                  6
                )),
                c,
                (n = s(n, 10)),
                r,
                t[13],
                0,
                7
              )),
              (c = u(
                (c = s(c, 10)),
                (n = a(
                  n,
                  (r = a(r, i, o, c, n, t[14], 0, 9)),
                  i,
                  (o = s(o, 10)),
                  c,
                  t[15],
                  0,
                  8
                )),
                r,
                (i = s(i, 10)),
                o,
                t[7],
                1518500249,
                7
              )),
              (r = u(
                (r = s(r, 10)),
                (i = u(
                  i,
                  (o = u(o, c, n, r, i, t[4], 1518500249, 6)),
                  c,
                  (n = s(n, 10)),
                  r,
                  t[13],
                  1518500249,
                  8
                )),
                o,
                (c = s(c, 10)),
                n,
                t[1],
                1518500249,
                13
              )),
              (o = u(
                (o = s(o, 10)),
                (c = u(
                  c,
                  (n = u(n, r, i, o, c, t[10], 1518500249, 11)),
                  r,
                  (i = s(i, 10)),
                  o,
                  t[6],
                  1518500249,
                  9
                )),
                n,
                (r = s(r, 10)),
                i,
                t[15],
                1518500249,
                7
              )),
              (n = u(
                (n = s(n, 10)),
                (r = u(
                  r,
                  (i = u(i, o, c, n, r, t[3], 1518500249, 15)),
                  o,
                  (c = s(c, 10)),
                  n,
                  t[12],
                  1518500249,
                  7
                )),
                i,
                (o = s(o, 10)),
                c,
                t[0],
                1518500249,
                12
              )),
              (i = u(
                (i = s(i, 10)),
                (o = u(
                  o,
                  (c = u(c, n, r, i, o, t[9], 1518500249, 15)),
                  n,
                  (r = s(r, 10)),
                  i,
                  t[5],
                  1518500249,
                  9
                )),
                c,
                (n = s(n, 10)),
                r,
                t[2],
                1518500249,
                11
              )),
              (c = u(
                (c = s(c, 10)),
                (n = u(
                  n,
                  (r = u(r, i, o, c, n, t[14], 1518500249, 7)),
                  i,
                  (o = s(o, 10)),
                  c,
                  t[11],
                  1518500249,
                  13
                )),
                r,
                (i = s(i, 10)),
                o,
                t[8],
                1518500249,
                12
              )),
              (r = f(
                (r = s(r, 10)),
                (i = f(
                  i,
                  (o = f(o, c, n, r, i, t[3], 1859775393, 11)),
                  c,
                  (n = s(n, 10)),
                  r,
                  t[10],
                  1859775393,
                  13
                )),
                o,
                (c = s(c, 10)),
                n,
                t[14],
                1859775393,
                6
              )),
              (o = f(
                (o = s(o, 10)),
                (c = f(
                  c,
                  (n = f(n, r, i, o, c, t[4], 1859775393, 7)),
                  r,
                  (i = s(i, 10)),
                  o,
                  t[9],
                  1859775393,
                  14
                )),
                n,
                (r = s(r, 10)),
                i,
                t[15],
                1859775393,
                9
              )),
              (n = f(
                (n = s(n, 10)),
                (r = f(
                  r,
                  (i = f(i, o, c, n, r, t[8], 1859775393, 13)),
                  o,
                  (c = s(c, 10)),
                  n,
                  t[1],
                  1859775393,
                  15
                )),
                i,
                (o = s(o, 10)),
                c,
                t[2],
                1859775393,
                14
              )),
              (i = f(
                (i = s(i, 10)),
                (o = f(
                  o,
                  (c = f(c, n, r, i, o, t[7], 1859775393, 8)),
                  n,
                  (r = s(r, 10)),
                  i,
                  t[0],
                  1859775393,
                  13
                )),
                c,
                (n = s(n, 10)),
                r,
                t[6],
                1859775393,
                6
              )),
              (c = f(
                (c = s(c, 10)),
                (n = f(
                  n,
                  (r = f(r, i, o, c, n, t[13], 1859775393, 5)),
                  i,
                  (o = s(o, 10)),
                  c,
                  t[11],
                  1859775393,
                  12
                )),
                r,
                (i = s(i, 10)),
                o,
                t[5],
                1859775393,
                7
              )),
              (r = h(
                (r = s(r, 10)),
                (i = h(
                  i,
                  (o = f(o, c, n, r, i, t[12], 1859775393, 5)),
                  c,
                  (n = s(n, 10)),
                  r,
                  t[1],
                  2400959708,
                  11
                )),
                o,
                (c = s(c, 10)),
                n,
                t[9],
                2400959708,
                12
              )),
              (o = h(
                (o = s(o, 10)),
                (c = h(
                  c,
                  (n = h(n, r, i, o, c, t[11], 2400959708, 14)),
                  r,
                  (i = s(i, 10)),
                  o,
                  t[10],
                  2400959708,
                  15
                )),
                n,
                (r = s(r, 10)),
                i,
                t[0],
                2400959708,
                14
              )),
              (n = h(
                (n = s(n, 10)),
                (r = h(
                  r,
                  (i = h(i, o, c, n, r, t[8], 2400959708, 15)),
                  o,
                  (c = s(c, 10)),
                  n,
                  t[12],
                  2400959708,
                  9
                )),
                i,
                (o = s(o, 10)),
                c,
                t[4],
                2400959708,
                8
              )),
              (i = h(
                (i = s(i, 10)),
                (o = h(
                  o,
                  (c = h(c, n, r, i, o, t[13], 2400959708, 9)),
                  n,
                  (r = s(r, 10)),
                  i,
                  t[3],
                  2400959708,
                  14
                )),
                c,
                (n = s(n, 10)),
                r,
                t[7],
                2400959708,
                5
              )),
              (c = h(
                (c = s(c, 10)),
                (n = h(
                  n,
                  (r = h(r, i, o, c, n, t[15], 2400959708, 6)),
                  i,
                  (o = s(o, 10)),
                  c,
                  t[14],
                  2400959708,
                  8
                )),
                r,
                (i = s(i, 10)),
                o,
                t[5],
                2400959708,
                6
              )),
              (r = l(
                (r = s(r, 10)),
                (i = h(
                  i,
                  (o = h(o, c, n, r, i, t[6], 2400959708, 5)),
                  c,
                  (n = s(n, 10)),
                  r,
                  t[2],
                  2400959708,
                  12
                )),
                o,
                (c = s(c, 10)),
                n,
                t[4],
                2840853838,
                9
              )),
              (o = l(
                (o = s(o, 10)),
                (c = l(
                  c,
                  (n = l(n, r, i, o, c, t[0], 2840853838, 15)),
                  r,
                  (i = s(i, 10)),
                  o,
                  t[5],
                  2840853838,
                  5
                )),
                n,
                (r = s(r, 10)),
                i,
                t[9],
                2840853838,
                11
              )),
              (n = l(
                (n = s(n, 10)),
                (r = l(
                  r,
                  (i = l(i, o, c, n, r, t[7], 2840853838, 6)),
                  o,
                  (c = s(c, 10)),
                  n,
                  t[12],
                  2840853838,
                  8
                )),
                i,
                (o = s(o, 10)),
                c,
                t[2],
                2840853838,
                13
              )),
              (i = l(
                (i = s(i, 10)),
                (o = l(
                  o,
                  (c = l(c, n, r, i, o, t[10], 2840853838, 12)),
                  n,
                  (r = s(r, 10)),
                  i,
                  t[14],
                  2840853838,
                  5
                )),
                c,
                (n = s(n, 10)),
                r,
                t[1],
                2840853838,
                12
              )),
              (c = l(
                (c = s(c, 10)),
                (n = l(
                  n,
                  (r = l(r, i, o, c, n, t[3], 2840853838, 13)),
                  i,
                  (o = s(o, 10)),
                  c,
                  t[8],
                  2840853838,
                  14
                )),
                r,
                (i = s(i, 10)),
                o,
                t[11],
                2840853838,
                11
              )),
              (r = l(
                (r = s(r, 10)),
                (i = l(
                  i,
                  (o = l(o, c, n, r, i, t[6], 2840853838, 8)),
                  c,
                  (n = s(n, 10)),
                  r,
                  t[15],
                  2840853838,
                  5
                )),
                o,
                (c = s(c, 10)),
                n,
                t[13],
                2840853838,
                6
              )),
              (o = s(o, 10));
            var d = this._a,
              p = this._b,
              _ = this._c,
              g = this._d,
              y = this._e;
            (y = l(
              y,
              (d = l(d, p, _, g, y, t[5], 1352829926, 8)),
              p,
              (_ = s(_, 10)),
              g,
              t[14],
              1352829926,
              9
            )),
              (p = l(
                (p = s(p, 10)),
                (_ = l(
                  _,
                  (g = l(g, y, d, p, _, t[7], 1352829926, 9)),
                  y,
                  (d = s(d, 10)),
                  p,
                  t[0],
                  1352829926,
                  11
                )),
                g,
                (y = s(y, 10)),
                d,
                t[9],
                1352829926,
                13
              )),
              (g = l(
                (g = s(g, 10)),
                (y = l(
                  y,
                  (d = l(d, p, _, g, y, t[2], 1352829926, 15)),
                  p,
                  (_ = s(_, 10)),
                  g,
                  t[11],
                  1352829926,
                  15
                )),
                d,
                (p = s(p, 10)),
                _,
                t[4],
                1352829926,
                5
              )),
              (d = l(
                (d = s(d, 10)),
                (p = l(
                  p,
                  (_ = l(_, g, y, d, p, t[13], 1352829926, 7)),
                  g,
                  (y = s(y, 10)),
                  d,
                  t[6],
                  1352829926,
                  7
                )),
                _,
                (g = s(g, 10)),
                y,
                t[15],
                1352829926,
                8
              )),
              (_ = l(
                (_ = s(_, 10)),
                (g = l(
                  g,
                  (y = l(y, d, p, _, g, t[8], 1352829926, 11)),
                  d,
                  (p = s(p, 10)),
                  _,
                  t[1],
                  1352829926,
                  14
                )),
                y,
                (d = s(d, 10)),
                p,
                t[10],
                1352829926,
                14
              )),
              (y = h(
                (y = s(y, 10)),
                (d = l(
                  d,
                  (p = l(p, _, g, y, d, t[3], 1352829926, 12)),
                  _,
                  (g = s(g, 10)),
                  y,
                  t[12],
                  1352829926,
                  6
                )),
                p,
                (_ = s(_, 10)),
                g,
                t[6],
                1548603684,
                9
              )),
              (p = h(
                (p = s(p, 10)),
                (_ = h(
                  _,
                  (g = h(g, y, d, p, _, t[11], 1548603684, 13)),
                  y,
                  (d = s(d, 10)),
                  p,
                  t[3],
                  1548603684,
                  15
                )),
                g,
                (y = s(y, 10)),
                d,
                t[7],
                1548603684,
                7
              )),
              (g = h(
                (g = s(g, 10)),
                (y = h(
                  y,
                  (d = h(d, p, _, g, y, t[0], 1548603684, 12)),
                  p,
                  (_ = s(_, 10)),
                  g,
                  t[13],
                  1548603684,
                  8
                )),
                d,
                (p = s(p, 10)),
                _,
                t[5],
                1548603684,
                9
              )),
              (d = h(
                (d = s(d, 10)),
                (p = h(
                  p,
                  (_ = h(_, g, y, d, p, t[10], 1548603684, 11)),
                  g,
                  (y = s(y, 10)),
                  d,
                  t[14],
                  1548603684,
                  7
                )),
                _,
                (g = s(g, 10)),
                y,
                t[15],
                1548603684,
                7
              )),
              (_ = h(
                (_ = s(_, 10)),
                (g = h(
                  g,
                  (y = h(y, d, p, _, g, t[8], 1548603684, 12)),
                  d,
                  (p = s(p, 10)),
                  _,
                  t[12],
                  1548603684,
                  7
                )),
                y,
                (d = s(d, 10)),
                p,
                t[4],
                1548603684,
                6
              )),
              (y = h(
                (y = s(y, 10)),
                (d = h(
                  d,
                  (p = h(p, _, g, y, d, t[9], 1548603684, 15)),
                  _,
                  (g = s(g, 10)),
                  y,
                  t[1],
                  1548603684,
                  13
                )),
                p,
                (_ = s(_, 10)),
                g,
                t[2],
                1548603684,
                11
              )),
              (p = f(
                (p = s(p, 10)),
                (_ = f(
                  _,
                  (g = f(g, y, d, p, _, t[15], 1836072691, 9)),
                  y,
                  (d = s(d, 10)),
                  p,
                  t[5],
                  1836072691,
                  7
                )),
                g,
                (y = s(y, 10)),
                d,
                t[1],
                1836072691,
                15
              )),
              (g = f(
                (g = s(g, 10)),
                (y = f(
                  y,
                  (d = f(d, p, _, g, y, t[3], 1836072691, 11)),
                  p,
                  (_ = s(_, 10)),
                  g,
                  t[7],
                  1836072691,
                  8
                )),
                d,
                (p = s(p, 10)),
                _,
                t[14],
                1836072691,
                6
              )),
              (d = f(
                (d = s(d, 10)),
                (p = f(
                  p,
                  (_ = f(_, g, y, d, p, t[6], 1836072691, 6)),
                  g,
                  (y = s(y, 10)),
                  d,
                  t[9],
                  1836072691,
                  14
                )),
                _,
                (g = s(g, 10)),
                y,
                t[11],
                1836072691,
                12
              )),
              (_ = f(
                (_ = s(_, 10)),
                (g = f(
                  g,
                  (y = f(y, d, p, _, g, t[8], 1836072691, 13)),
                  d,
                  (p = s(p, 10)),
                  _,
                  t[12],
                  1836072691,
                  5
                )),
                y,
                (d = s(d, 10)),
                p,
                t[2],
                1836072691,
                14
              )),
              (y = f(
                (y = s(y, 10)),
                (d = f(
                  d,
                  (p = f(p, _, g, y, d, t[10], 1836072691, 13)),
                  _,
                  (g = s(g, 10)),
                  y,
                  t[0],
                  1836072691,
                  13
                )),
                p,
                (_ = s(_, 10)),
                g,
                t[4],
                1836072691,
                7
              )),
              (p = u(
                (p = s(p, 10)),
                (_ = u(
                  _,
                  (g = f(g, y, d, p, _, t[13], 1836072691, 5)),
                  y,
                  (d = s(d, 10)),
                  p,
                  t[8],
                  2053994217,
                  15
                )),
                g,
                (y = s(y, 10)),
                d,
                t[6],
                2053994217,
                5
              )),
              (g = u(
                (g = s(g, 10)),
                (y = u(
                  y,
                  (d = u(d, p, _, g, y, t[4], 2053994217, 8)),
                  p,
                  (_ = s(_, 10)),
                  g,
                  t[1],
                  2053994217,
                  11
                )),
                d,
                (p = s(p, 10)),
                _,
                t[3],
                2053994217,
                14
              )),
              (d = u(
                (d = s(d, 10)),
                (p = u(
                  p,
                  (_ = u(_, g, y, d, p, t[11], 2053994217, 14)),
                  g,
                  (y = s(y, 10)),
                  d,
                  t[15],
                  2053994217,
                  6
                )),
                _,
                (g = s(g, 10)),
                y,
                t[0],
                2053994217,
                14
              )),
              (_ = u(
                (_ = s(_, 10)),
                (g = u(
                  g,
                  (y = u(y, d, p, _, g, t[5], 2053994217, 6)),
                  d,
                  (p = s(p, 10)),
                  _,
                  t[12],
                  2053994217,
                  9
                )),
                y,
                (d = s(d, 10)),
                p,
                t[2],
                2053994217,
                12
              )),
              (y = u(
                (y = s(y, 10)),
                (d = u(
                  d,
                  (p = u(p, _, g, y, d, t[13], 2053994217, 9)),
                  _,
                  (g = s(g, 10)),
                  y,
                  t[9],
                  2053994217,
                  12
                )),
                p,
                (_ = s(_, 10)),
                g,
                t[7],
                2053994217,
                5
              )),
              (p = a(
                (p = s(p, 10)),
                (_ = u(
                  _,
                  (g = u(g, y, d, p, _, t[10], 2053994217, 15)),
                  y,
                  (d = s(d, 10)),
                  p,
                  t[14],
                  2053994217,
                  8
                )),
                g,
                (y = s(y, 10)),
                d,
                t[12],
                0,
                8
              )),
              (g = a(
                (g = s(g, 10)),
                (y = a(
                  y,
                  (d = a(d, p, _, g, y, t[15], 0, 5)),
                  p,
                  (_ = s(_, 10)),
                  g,
                  t[10],
                  0,
                  12
                )),
                d,
                (p = s(p, 10)),
                _,
                t[4],
                0,
                9
              )),
              (d = a(
                (d = s(d, 10)),
                (p = a(
                  p,
                  (_ = a(_, g, y, d, p, t[1], 0, 12)),
                  g,
                  (y = s(y, 10)),
                  d,
                  t[5],
                  0,
                  5
                )),
                _,
                (g = s(g, 10)),
                y,
                t[8],
                0,
                14
              )),
              (_ = a(
                (_ = s(_, 10)),
                (g = a(
                  g,
                  (y = a(y, d, p, _, g, t[7], 0, 6)),
                  d,
                  (p = s(p, 10)),
                  _,
                  t[6],
                  0,
                  8
                )),
                y,
                (d = s(d, 10)),
                p,
                t[2],
                0,
                13
              )),
              (y = a(
                (y = s(y, 10)),
                (d = a(
                  d,
                  (p = a(p, _, g, y, d, t[13], 0, 6)),
                  _,
                  (g = s(g, 10)),
                  y,
                  t[14],
                  0,
                  5
                )),
                p,
                (_ = s(_, 10)),
                g,
                t[0],
                0,
                15
              )),
              (p = a(
                (p = s(p, 10)),
                (_ = a(
                  _,
                  (g = a(g, y, d, p, _, t[3], 0, 13)),
                  y,
                  (d = s(d, 10)),
                  p,
                  t[9],
                  0,
                  11
                )),
                g,
                (y = s(y, 10)),
                d,
                t[11],
                0,
                11
              )),
              (g = s(g, 10));
            var v = (this._b + i + g) | 0;
            (this._b = (this._c + o + y) | 0),
              (this._c = (this._d + c + d) | 0),
              (this._d = (this._e + n + p) | 0),
              (this._e = (this._a + r + _) | 0),
              (this._a = v);
          }),
          (o.prototype._digest = function() {
            (this._block[this._blockOffset++] = 128),
              this._blockOffset > 56 &&
                (this._block.fill(0, this._blockOffset, 64),
                this._update(),
                (this._blockOffset = 0)),
              this._block.fill(0, this._blockOffset, 56),
              this._block.writeUInt32LE(this._length[0], 56),
              this._block.writeUInt32LE(this._length[1], 60),
              this._update();
            var t = new e(20);
            return (
              t.writeInt32LE(this._a, 0),
              t.writeInt32LE(this._b, 4),
              t.writeInt32LE(this._c, 8),
              t.writeInt32LE(this._d, 12),
              t.writeInt32LE(this._e, 16),
              t
            );
          }),
          (t.exports = o);
      }.call(this, n(2).Buffer));
    },
    function(t, e, n) {
      'use strict';
      (function(e) {
        var n = 4,
          r = new e(n);
        r.fill(0);
        t.exports = function(t, i) {
          var o = i(
            (function(t) {
              if (t.length % n != 0) {
                var i = t.length + (n - (t.length % n));
                t = e.concat([t, r], i);
              }
              for (
                var o = new Array(t.length >>> 2), s = 0, a = 0;
                s < t.length;
                s += n, a++
              )
                o[a] = t.readInt32LE(s);
              return o;
            })(t),
            8 * t.length
          );
          t = new e(16);
          for (var s = 0; s < o.length; s++) t.writeInt32LE(o[s], s << 2, !0);
          return t;
        };
      }.call(this, n(2).Buffer));
    },
    function(t, e, n) {
      'use strict';
      var r = n(47);
      function i(t, e) {
        (t[e >> 5] |= 128 << e % 32), (t[14 + (((e + 64) >>> 9) << 4)] = e);
        for (
          var n = 1732584193,
            r = -271733879,
            i = -1732584194,
            o = 271733878,
            l = 0;
          l < t.length;
          l += 16
        ) {
          var c = n,
            d = r,
            p = i,
            _ = o;
          (r = f(
            (r = f(
              (r = f(
                (r = f(
                  (r = u(
                    (r = u(
                      (r = u(
                        (r = u(
                          (r = a(
                            (r = a(
                              (r = a(
                                (r = a(
                                  (r = s(
                                    (r = s(
                                      (r = s(
                                        (r = s(
                                          r,
                                          (i = s(
                                            i,
                                            (o = s(
                                              o,
                                              (n = s(
                                                n,
                                                r,
                                                i,
                                                o,
                                                t[l + 0],
                                                7,
                                                -680876936
                                              )),
                                              r,
                                              i,
                                              t[l + 1],
                                              12,
                                              -389564586
                                            )),
                                            n,
                                            r,
                                            t[l + 2],
                                            17,
                                            606105819
                                          )),
                                          o,
                                          n,
                                          t[l + 3],
                                          22,
                                          -1044525330
                                        )),
                                        (i = s(
                                          i,
                                          (o = s(
                                            o,
                                            (n = s(
                                              n,
                                              r,
                                              i,
                                              o,
                                              t[l + 4],
                                              7,
                                              -176418897
                                            )),
                                            r,
                                            i,
                                            t[l + 5],
                                            12,
                                            1200080426
                                          )),
                                          n,
                                          r,
                                          t[l + 6],
                                          17,
                                          -1473231341
                                        )),
                                        o,
                                        n,
                                        t[l + 7],
                                        22,
                                        -45705983
                                      )),
                                      (i = s(
                                        i,
                                        (o = s(
                                          o,
                                          (n = s(
                                            n,
                                            r,
                                            i,
                                            o,
                                            t[l + 8],
                                            7,
                                            1770035416
                                          )),
                                          r,
                                          i,
                                          t[l + 9],
                                          12,
                                          -1958414417
                                        )),
                                        n,
                                        r,
                                        t[l + 10],
                                        17,
                                        -42063
                                      )),
                                      o,
                                      n,
                                      t[l + 11],
                                      22,
                                      -1990404162
                                    )),
                                    (i = s(
                                      i,
                                      (o = s(
                                        o,
                                        (n = s(
                                          n,
                                          r,
                                          i,
                                          o,
                                          t[l + 12],
                                          7,
                                          1804603682
                                        )),
                                        r,
                                        i,
                                        t[l + 13],
                                        12,
                                        -40341101
                                      )),
                                      n,
                                      r,
                                      t[l + 14],
                                      17,
                                      -1502002290
                                    )),
                                    o,
                                    n,
                                    t[l + 15],
                                    22,
                                    1236535329
                                  )),
                                  (i = a(
                                    i,
                                    (o = a(
                                      o,
                                      (n = a(
                                        n,
                                        r,
                                        i,
                                        o,
                                        t[l + 1],
                                        5,
                                        -165796510
                                      )),
                                      r,
                                      i,
                                      t[l + 6],
                                      9,
                                      -1069501632
                                    )),
                                    n,
                                    r,
                                    t[l + 11],
                                    14,
                                    643717713
                                  )),
                                  o,
                                  n,
                                  t[l + 0],
                                  20,
                                  -373897302
                                )),
                                (i = a(
                                  i,
                                  (o = a(
                                    o,
                                    (n = a(
                                      n,
                                      r,
                                      i,
                                      o,
                                      t[l + 5],
                                      5,
                                      -701558691
                                    )),
                                    r,
                                    i,
                                    t[l + 10],
                                    9,
                                    38016083
                                  )),
                                  n,
                                  r,
                                  t[l + 15],
                                  14,
                                  -660478335
                                )),
                                o,
                                n,
                                t[l + 4],
                                20,
                                -405537848
                              )),
                              (i = a(
                                i,
                                (o = a(
                                  o,
                                  (n = a(n, r, i, o, t[l + 9], 5, 568446438)),
                                  r,
                                  i,
                                  t[l + 14],
                                  9,
                                  -1019803690
                                )),
                                n,
                                r,
                                t[l + 3],
                                14,
                                -187363961
                              )),
                              o,
                              n,
                              t[l + 8],
                              20,
                              1163531501
                            )),
                            (i = a(
                              i,
                              (o = a(
                                o,
                                (n = a(n, r, i, o, t[l + 13], 5, -1444681467)),
                                r,
                                i,
                                t[l + 2],
                                9,
                                -51403784
                              )),
                              n,
                              r,
                              t[l + 7],
                              14,
                              1735328473
                            )),
                            o,
                            n,
                            t[l + 12],
                            20,
                            -1926607734
                          )),
                          (i = u(
                            i,
                            (o = u(
                              o,
                              (n = u(n, r, i, o, t[l + 5], 4, -378558)),
                              r,
                              i,
                              t[l + 8],
                              11,
                              -2022574463
                            )),
                            n,
                            r,
                            t[l + 11],
                            16,
                            1839030562
                          )),
                          o,
                          n,
                          t[l + 14],
                          23,
                          -35309556
                        )),
                        (i = u(
                          i,
                          (o = u(
                            o,
                            (n = u(n, r, i, o, t[l + 1], 4, -1530992060)),
                            r,
                            i,
                            t[l + 4],
                            11,
                            1272893353
                          )),
                          n,
                          r,
                          t[l + 7],
                          16,
                          -155497632
                        )),
                        o,
                        n,
                        t[l + 10],
                        23,
                        -1094730640
                      )),
                      (i = u(
                        i,
                        (o = u(
                          o,
                          (n = u(n, r, i, o, t[l + 13], 4, 681279174)),
                          r,
                          i,
                          t[l + 0],
                          11,
                          -358537222
                        )),
                        n,
                        r,
                        t[l + 3],
                        16,
                        -722521979
                      )),
                      o,
                      n,
                      t[l + 6],
                      23,
                      76029189
                    )),
                    (i = u(
                      i,
                      (o = u(
                        o,
                        (n = u(n, r, i, o, t[l + 9], 4, -640364487)),
                        r,
                        i,
                        t[l + 12],
                        11,
                        -421815835
                      )),
                      n,
                      r,
                      t[l + 15],
                      16,
                      530742520
                    )),
                    o,
                    n,
                    t[l + 2],
                    23,
                    -995338651
                  )),
                  (i = f(
                    i,
                    (o = f(
                      o,
                      (n = f(n, r, i, o, t[l + 0], 6, -198630844)),
                      r,
                      i,
                      t[l + 7],
                      10,
                      1126891415
                    )),
                    n,
                    r,
                    t[l + 14],
                    15,
                    -1416354905
                  )),
                  o,
                  n,
                  t[l + 5],
                  21,
                  -57434055
                )),
                (i = f(
                  i,
                  (o = f(
                    o,
                    (n = f(n, r, i, o, t[l + 12], 6, 1700485571)),
                    r,
                    i,
                    t[l + 3],
                    10,
                    -1894986606
                  )),
                  n,
                  r,
                  t[l + 10],
                  15,
                  -1051523
                )),
                o,
                n,
                t[l + 1],
                21,
                -2054922799
              )),
              (i = f(
                i,
                (o = f(
                  o,
                  (n = f(n, r, i, o, t[l + 8], 6, 1873313359)),
                  r,
                  i,
                  t[l + 15],
                  10,
                  -30611744
                )),
                n,
                r,
                t[l + 6],
                15,
                -1560198380
              )),
              o,
              n,
              t[l + 13],
              21,
              1309151649
            )),
            (i = f(
              i,
              (o = f(
                o,
                (n = f(n, r, i, o, t[l + 4], 6, -145523070)),
                r,
                i,
                t[l + 11],
                10,
                -1120210379
              )),
              n,
              r,
              t[l + 2],
              15,
              718787259
            )),
            o,
            n,
            t[l + 9],
            21,
            -343485551
          )),
            (n = h(n, c)),
            (r = h(r, d)),
            (i = h(i, p)),
            (o = h(o, _));
        }
        return [n, r, i, o];
      }
      function o(t, e, n, r, i, o) {
        return h(((s = h(h(e, t), h(r, o))) << (a = i)) | (s >>> (32 - a)), n);
        var s, a;
      }
      function s(t, e, n, r, i, s, a) {
        return o((e & n) | (~e & r), t, e, i, s, a);
      }
      function a(t, e, n, r, i, s, a) {
        return o((e & r) | (n & ~r), t, e, i, s, a);
      }
      function u(t, e, n, r, i, s, a) {
        return o(e ^ n ^ r, t, e, i, s, a);
      }
      function f(t, e, n, r, i, s, a) {
        return o(n ^ (e | ~r), t, e, i, s, a);
      }
      function h(t, e) {
        var n = (65535 & t) + (65535 & e);
        return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
      }
      t.exports = function(t) {
        return r(t, i);
      };
    },
    function(t, e, n) {
      t.exports = n(13).PassThrough;
    },
    function(t, e, n) {
      t.exports = n(13).Transform;
    },
    function(t, e, n) {
      t.exports = n(3);
    },
    function(t, e, n) {
      t.exports = n(12);
    },
    function(t, e, n) {
      'use strict';
      t.exports = o;
      var r = n(19),
        i = n(7);
      function o(t) {
        if (!(this instanceof o)) return new o(t);
        r.call(this, t);
      }
      (i.inherits = n(0)),
        i.inherits(o, r),
        (o.prototype._transform = function(t, e, n) {
          n(null, t);
        });
    },
    function(t, e, n) {
      (function(e) {
        function n(t) {
          try {
            if (!e.localStorage) return !1;
          } catch (t) {
            return !1;
          }
          var n = e.localStorage[t];
          return null != n && 'true' === String(n).toLowerCase();
        }
        t.exports = function(t, e) {
          if (n('noDeprecation')) return t;
          var r = !1;
          return function() {
            if (!r) {
              if (n('throwDeprecation')) throw new Error(e);
              n('traceDeprecation') ? console.trace(e) : console.warn(e),
                (r = !0);
            }
            return t.apply(this, arguments);
          };
        };
      }.call(this, n(5)));
    },
    function(t, e, n) {
      (function(t, e) {
        !(function(t, n) {
          'use strict';
          if (!t.setImmediate) {
            var r,
              i,
              o,
              s,
              a,
              u = 1,
              f = {},
              h = !1,
              l = t.document,
              c = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (c = c && c.setTimeout ? c : t),
              '[object process]' === {}.toString.call(t.process)
                ? (r = function(t) {
                    e.nextTick(function() {
                      p(t);
                    });
                  })
                : !(function() {
                    if (t.postMessage && !t.importScripts) {
                      var e = !0,
                        n = t.onmessage;
                      return (
                        (t.onmessage = function() {
                          e = !1;
                        }),
                        t.postMessage('', '*'),
                        (t.onmessage = n),
                        e
                      );
                    }
                  })()
                ? t.MessageChannel
                  ? (((o = new MessageChannel()).port1.onmessage = function(t) {
                      p(t.data);
                    }),
                    (r = function(t) {
                      o.port2.postMessage(t);
                    }))
                  : l && 'onreadystatechange' in l.createElement('script')
                  ? ((i = l.documentElement),
                    (r = function(t) {
                      var e = l.createElement('script');
                      (e.onreadystatechange = function() {
                        p(t),
                          (e.onreadystatechange = null),
                          i.removeChild(e),
                          (e = null);
                      }),
                        i.appendChild(e);
                    }))
                  : (r = function(t) {
                      setTimeout(p, 0, t);
                    })
                : ((s = 'setImmediate$' + Math.random() + '$'),
                  (a = function(e) {
                    e.source === t &&
                      'string' == typeof e.data &&
                      0 === e.data.indexOf(s) &&
                      p(+e.data.slice(s.length));
                  }),
                  t.addEventListener
                    ? t.addEventListener('message', a, !1)
                    : t.attachEvent('onmessage', a),
                  (r = function(e) {
                    t.postMessage(s + e, '*');
                  })),
              (c.setImmediate = function(t) {
                'function' != typeof t && (t = new Function('' + t));
                for (
                  var e = new Array(arguments.length - 1), n = 0;
                  n < e.length;
                  n++
                )
                  e[n] = arguments[n + 1];
                var i = { callback: t, args: e };
                return (f[u] = i), r(u), u++;
              }),
              (c.clearImmediate = d);
          }
          function d(t) {
            delete f[t];
          }
          function p(t) {
            if (h) setTimeout(p, 0, t);
            else {
              var e = f[t];
              if (e) {
                h = !0;
                try {
                  !(function(t) {
                    var e = t.callback,
                      r = t.args;
                    switch (r.length) {
                      case 0:
                        e();
                        break;
                      case 1:
                        e(r[0]);
                        break;
                      case 2:
                        e(r[0], r[1]);
                        break;
                      case 3:
                        e(r[0], r[1], r[2]);
                        break;
                      default:
                        e.apply(n, r);
                    }
                  })(e);
                } finally {
                  d(t), (h = !1);
                }
              }
            }
          }
        })('undefined' == typeof self ? (void 0 === t ? this : t) : self);
      }.call(this, n(5), n(9)));
    },
    function(t, e, n) {
      (function(t) {
        var r =
            (void 0 !== t && t) ||
            ('undefined' != typeof self && self) ||
            window,
          i = Function.prototype.apply;
        function o(t, e) {
          (this._id = t), (this._clearFn = e);
        }
        (e.setTimeout = function() {
          return new o(i.call(setTimeout, r, arguments), clearTimeout);
        }),
          (e.setInterval = function() {
            return new o(i.call(setInterval, r, arguments), clearInterval);
          }),
          (e.clearTimeout = e.clearInterval = function(t) {
            t && t.close();
          }),
          (o.prototype.unref = o.prototype.ref = function() {}),
          (o.prototype.close = function() {
            this._clearFn.call(r, this._id);
          }),
          (e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
          }),
          (e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
          }),
          (e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 &&
              (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout();
              }, e));
          }),
          n(55),
          (e.setImmediate =
            ('undefined' != typeof self && self.setImmediate) ||
            (void 0 !== t && t.setImmediate) ||
            (this && this.setImmediate)),
          (e.clearImmediate =
            ('undefined' != typeof self && self.clearImmediate) ||
            (void 0 !== t && t.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, n(5)));
    },
    function(t, e) {},
    function(t, e, n) {
      'use strict';
      var r = n(1).Buffer,
        i = n(57);
      (t.exports = (function() {
        function t() {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (t.prototype.push = function(t) {
            var e = { data: t, next: null };
            this.length > 0 ? (this.tail.next = e) : (this.head = e),
              (this.tail = e),
              ++this.length;
          }),
          (t.prototype.unshift = function(t) {
            var e = { data: t, next: this.head };
            0 === this.length && (this.tail = e),
              (this.head = e),
              ++this.length;
          }),
          (t.prototype.shift = function() {
            if (0 !== this.length) {
              var t = this.head.data;
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                t
              );
            }
          }),
          (t.prototype.clear = function() {
            (this.head = this.tail = null), (this.length = 0);
          }),
          (t.prototype.join = function(t) {
            if (0 === this.length) return '';
            for (var e = this.head, n = '' + e.data; (e = e.next); )
              n += t + e.data;
            return n;
          }),
          (t.prototype.concat = function(t) {
            if (0 === this.length) return r.alloc(0);
            if (1 === this.length) return this.head.data;
            for (
              var e, n, i, o = r.allocUnsafe(t >>> 0), s = this.head, a = 0;
              s;

            )
              (e = s.data),
                (n = o),
                (i = a),
                e.copy(n, i),
                (a += s.data.length),
                (s = s.next);
            return o;
          }),
          t
        );
      })()),
        i &&
          i.inspect &&
          i.inspect.custom &&
          (t.exports.prototype[i.inspect.custom] = function() {
            var t = i.inspect({ length: this.length });
            return this.constructor.name + ' ' + t;
          });
    },
    function(t, e) {},
    function(t, e, n) {
      'use strict';
      var r = n(0),
        i = n(1).Buffer,
        o = n(24),
        s = i.alloc(128),
        a = 64;
      function u(t, e) {
        o.call(this, 'digest'),
          'string' == typeof e && (e = i.from(e)),
          (this._alg = t),
          (this._key = e),
          e.length > a ? (e = t(e)) : e.length < a && (e = i.concat([e, s], a));
        for (
          var n = (this._ipad = i.allocUnsafe(a)),
            r = (this._opad = i.allocUnsafe(a)),
            u = 0;
          u < a;
          u++
        )
          (n[u] = 54 ^ e[u]), (r[u] = 92 ^ e[u]);
        this._hash = [n];
      }
      r(u, o),
        (u.prototype._update = function(t) {
          this._hash.push(t);
        }),
        (u.prototype._final = function() {
          var t = this._alg(i.concat(this._hash));
          return this._alg(i.concat([this._opad, t]));
        }),
        (t.exports = u);
    },
    function(t, e, n) {
      'use strict';
      var r = n(0),
        i = n(60),
        o = n(24),
        s = n(1).Buffer,
        a = n(48),
        u = n(46),
        f = n(44),
        h = s.alloc(128);
      function l(t, e) {
        o.call(this, 'digest'), 'string' == typeof e && (e = s.from(e));
        var n = 'sha512' === t || 'sha384' === t ? 128 : 64;
        ((this._alg = t), (this._key = e), e.length > n)
          ? (e = ('rmd160' === t ? new u() : f(t)).update(e).digest())
          : e.length < n && (e = s.concat([e, h], n));
        for (
          var r = (this._ipad = s.allocUnsafe(n)),
            i = (this._opad = s.allocUnsafe(n)),
            a = 0;
          a < n;
          a++
        )
          (r[a] = 54 ^ e[a]), (i[a] = 92 ^ e[a]);
        (this._hash = 'rmd160' === t ? new u() : f(t)), this._hash.update(r);
      }
      r(l, o),
        (l.prototype._update = function(t) {
          this._hash.update(t);
        }),
        (l.prototype._final = function() {
          var t = this._hash.digest();
          return ('rmd160' === this._alg ? new u() : f(this._alg))
            .update(this._opad)
            .update(t)
            .digest();
        }),
        (t.exports = function(t, e) {
          return 'rmd160' === (t = t.toLowerCase()) || 'ripemd160' === t
            ? new l('rmd160', e)
            : 'md5' === t
            ? new i(a, e)
            : new l(t, e);
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = o(n(61)),
        i = o(n(39));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default = { createHmac: r.default, randomBytes: i.default };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(10),
        o = n(15),
        s = (r = o) && r.__esModule ? r : { default: r };
      e.default = function(t, e) {
        return (0, i.totpToken)((0, s.default)(t), e);
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = '{service}:{user}?secret={secret}&issuer={service}';
      e.default = function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'user',
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'service',
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
        return (
          'otpauth://totp/' +
          r
            .replace('{user}', t)
            .replace('{secret}', n)
            .replace(/{service}/g, e)
        );
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(25),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = function(t) {
        return o.default
          .encode(t)
          .toString()
          .replace(/=/g, '');
      };
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        var n = [
          255,
          255,
          26,
          27,
          28,
          29,
          30,
          31,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          255,
          255,
          255,
          255,
          255,
          255,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          255,
          255,
          255,
          255,
          255,
        ];
        (e.encode = function(e) {
          t.isBuffer(e) || (e = new t(e));
          for (
            var n,
              r,
              i = 0,
              o = 0,
              s = 0,
              a = 0,
              u = new t(
                8 *
                  ((n = e),
                  (r = Math.floor(n.length / 5)),
                  n.length % 5 == 0 ? r : r + 1)
              );
            i < e.length;

          ) {
            var f = e[i];
            s > 3
              ? ((a =
                  ((a = f & (255 >> s)) << (s = (s + 5) % 8)) |
                  ((i + 1 < e.length ? e[i + 1] : 0) >> (8 - s))),
                i++)
              : ((a = (f >> (8 - (s + 5))) & 31),
                0 === (s = (s + 5) % 8) && i++),
              (u[o] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.charCodeAt(a)),
              o++;
          }
          for (i = o; i < u.length; i++) u[i] = 61;
          return u;
        }),
          (e.decode = function(e) {
            var r,
              i = 0,
              o = 0,
              s = 0;
            t.isBuffer(e) || (e = new t(e));
            for (
              var a = new t(Math.ceil((5 * e.length) / 8)), u = 0;
              u < e.length && 61 !== e[u];
              u++
            ) {
              var f = e[u] - 48;
              if (!(f < n.length))
                throw new Error(
                  'Invalid input - it is not base32 encoded string'
                );
              (o = n[f]),
                i <= 3
                  ? 0 === (i = (i + 5) % 8)
                    ? ((r |= o), (a[s] = r), s++, (r = 0))
                    : (r |= 255 & (o << (8 - i)))
                  : ((r |= 255 & (o >>> (i = (i + 5) % 8))),
                    (a[s] = r),
                    s++,
                    (r = 255 & (o << (8 - i))));
            }
            return a.slice(0, s);
          });
      }.call(this, n(2).Buffer));
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(26),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = function(t, e, n) {
        var r = (0, o.default)(t, e, n);
        return Number.isInteger(r);
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = c(n(27)),
        o = n(6),
        s = c(n(67)),
        a = c(n(26)),
        u = c(n(15)),
        f = c(n(65)),
        h = c(n(64)),
        l = c(n(63));
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var d = i.default.TOTP,
        p = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ('object' != typeof e && 'function' != typeof e)
                  ? t
                  : e;
              })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
            );
          }
          return (
            (function(t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, d),
            r(e, [
              {
                key: 'getClass',
                value: function() {
                  return e;
                },
              },
              {
                key: 'encode',
                value: function() {
                  return f.default.apply(void 0, arguments);
                },
              },
              {
                key: 'decode',
                value: function() {
                  return u.default.apply(void 0, arguments);
                },
              },
              {
                key: 'keyuri',
                value: function() {
                  return h.default.apply(void 0, arguments);
                },
              },
              {
                key: 'generateSecret',
                value: function() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 20;
                  if (!t) return '';
                  var e = (0, o.secretKey)(t, this.optionsAll);
                  return (0, f.default)(e);
                },
              },
              {
                key: 'generate',
                value: function(t) {
                  var e = this.optionsAll;
                  return (0, l.default)(t || e.secret, e);
                },
              },
              {
                key: 'check',
                value: function(t, e) {
                  var n = this.optionsAll;
                  return (0, s.default)(t, e || n.secret, n);
                },
              },
              {
                key: 'checkDelta',
                value: function(t, e) {
                  var n = this.optionsAll;
                  return (0, a.default)(t, e || n.secret, n);
                },
              },
              {
                key: 'defaultOptions',
                get: function() {
                  return { encoding: 'hex', epoch: null, step: 30, window: 0 };
                },
              },
            ]),
            e
          );
        })();
      (p.prototype.Authenticator = p),
        (p.prototype.utils = {
          check: s.default,
          checkDelta: a.default,
          decodeKey: u.default,
          encodeKey: f.default,
          keyuri: h.default,
          token: l.default,
        }),
        (e.default = p);
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(68),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = new o.default();
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        o = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        s = n(10),
        a = n(38);
      var u = ((r = a) && r.__esModule ? r : { default: r }).default.HOTP,
        f = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ('object' != typeof e && 'function' != typeof e)
                  ? t
                  : e;
              })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
            );
          }
          return (
            (function(t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, u),
            o(e, [
              {
                key: 'getClass',
                value: function() {
                  return e;
                },
              },
              {
                key: 'generate',
                value: function(t) {
                  var e = this.optionsAll;
                  return (0, s.totpToken)(t || e.secret, e);
                },
              },
              {
                key: 'check',
                value: function(t, e) {
                  var n = this.checkDelta(t, e);
                  return Number.isInteger(n);
                },
              },
              {
                key: 'checkDelta',
                value: function(t, e) {
                  var n = this.optionsAll;
                  return (0, s.totpCheckWithWindow)(t, e || n.secret, n);
                },
              },
              {
                key: 'verify',
                value: function(t) {
                  return (
                    'object' === (void 0 === t ? 'undefined' : i(t)) &&
                    null != t &&
                    this.check(t.token, t.secret)
                  );
                },
              },
              {
                key: 'timeRemaining',
                value: function() {
                  var t = this.optionsAll;
                  return (0, s.totpTimeRemaining)(t.epoch, t.step);
                },
              },
              {
                key: 'timeUsed',
                value: function() {
                  var t = this.optionsAll;
                  return (0, s.totpTimeUsed)(t.epoch, t.step);
                },
              },
              {
                key: 'defaultOptions',
                get: function() {
                  return { epoch: null, step: 30, window: 0 };
                },
              },
              {
                key: 'optionsAll',
                get: function() {
                  return (0, s.totpOptions)(this._options);
                },
              },
            ]),
            e
          );
        })();
      (f.prototype.TOTP = f), (e.default = f);
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(28),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = function(t, e) {
        return e - (0, o.default)(t, e);
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = i(n(34));
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = {
        createHmacSecret: i(n(29)).default,
        epoch: null,
        step: 30,
        window: 0,
      };
      e.default = function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = Object.assign((0, r.default)(), o, t);
        return (
          (e.epoch = 'number' == typeof e.epoch ? 1e3 * e.epoch : Date.now()), e
        );
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(32),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = function(t, e, n) {
        var r = Object.assign({}, n),
          i = (function(t) {
            var e = Array.isArray(t.window)
              ? t.window
              : [parseInt(t.window, 10), parseInt(t.window, 10)];
            if (!Number.isInteger(e[0]) || !Number.isInteger(e[1]))
              throw new Error(
                'Expecting options.window to be an integer or an array of integers'
              );
            return e;
          })(r),
          s = (function(t, e, n) {
            var r = 1e3 * n.step,
              i = n.epoch;
            return function(s, a, u) {
              for (var f = a; f <= u; f++)
                if (((n.epoch = i + s * f * r), (0, o.default)(t, e, n)))
                  return 0 === f ? 0 : s * f;
              return null;
            };
          })(t, e, r),
          a = s(-1, 0, i[0]);
        return null !== a ? a : s(1, 1, i[1]);
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function(t) {
          for (var e = null == t ? '' : t, n = '', r = 0; r < e.length; r++)
            n += '' + ('0000' + e.charCodeAt(r).toString(16)).slice(-2);
          return n;
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 4,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : ' ',
            r = parseInt(e, 10);
          if (Number.isNaN(r) || 'string' != typeof t) return '';
          var i = new RegExp('.{1,' + e + '}', 'g');
          return t.match(i).join(n);
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!t || t < 1) return '';
          if (!e.crypto || 'function' != typeof e.crypto.randomBytes)
            throw new Error(
              'Expecting options.crypto to have a randomBytes function'
            );
          return e.crypto
            .randomBytes(t)
            .toString('base64')
            .slice(0, t);
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
          return null == t ? '' : t.replace(/\s+/g, '');
        });
    },
    function(t, e) {
      (e.read = function(t, e, n, r, i) {
        var o,
          s,
          a = 8 * i - r - 1,
          u = (1 << a) - 1,
          f = u >> 1,
          h = -7,
          l = n ? i - 1 : 0,
          c = n ? -1 : 1,
          d = t[e + l];
        for (
          l += c, o = d & ((1 << -h) - 1), d >>= -h, h += a;
          h > 0;
          o = 256 * o + t[e + l], l += c, h -= 8
        );
        for (
          s = o & ((1 << -h) - 1), o >>= -h, h += r;
          h > 0;
          s = 256 * s + t[e + l], l += c, h -= 8
        );
        if (0 === o) o = 1 - f;
        else {
          if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
          (s += Math.pow(2, r)), (o -= f);
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - r);
      }),
        (e.write = function(t, e, n, r, i, o) {
          var s,
            a,
            u,
            f = 8 * o - i - 1,
            h = (1 << f) - 1,
            l = h >> 1,
            c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : o - 1,
            p = r ? 1 : -1,
            _ = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (s = h))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                  (e += s + l >= 1 ? c / u : c * Math.pow(2, 1 - l)) * u >= 2 &&
                    (s++, (u /= 2)),
                  s + l >= h
                    ? ((a = 0), (s = h))
                    : s + l >= 1
                    ? ((a = (e * u - 1) * Math.pow(2, i)), (s += l))
                    : ((a = e * Math.pow(2, l - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            t[n + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, f += i;
            f > 0;
            t[n + d] = 255 & s, d += p, s /= 256, f -= 8
          );
          t[n + d - p] |= 128 * _;
        });
    },
    function(t, e, n) {
      'use strict';
      (e.byteLength = function(t) {
        var e = f(t),
          n = e[0],
          r = e[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (e.toByteArray = function(t) {
          for (
            var e,
              n = f(t),
              r = n[0],
              s = n[1],
              a = new o(
                (function(t, e, n) {
                  return (3 * (e + n)) / 4 - n;
                })(0, r, s)
              ),
              u = 0,
              h = s > 0 ? r - 4 : r,
              l = 0;
            l < h;
            l += 4
          )
            (e =
              (i[t.charCodeAt(l)] << 18) |
              (i[t.charCodeAt(l + 1)] << 12) |
              (i[t.charCodeAt(l + 2)] << 6) |
              i[t.charCodeAt(l + 3)]),
              (a[u++] = (e >> 16) & 255),
              (a[u++] = (e >> 8) & 255),
              (a[u++] = 255 & e);
          2 === s &&
            ((e = (i[t.charCodeAt(l)] << 2) | (i[t.charCodeAt(l + 1)] >> 4)),
            (a[u++] = 255 & e));
          1 === s &&
            ((e =
              (i[t.charCodeAt(l)] << 10) |
              (i[t.charCodeAt(l + 1)] << 4) |
              (i[t.charCodeAt(l + 2)] >> 2)),
            (a[u++] = (e >> 8) & 255),
            (a[u++] = 255 & e));
          return a;
        }),
        (e.fromByteArray = function(t) {
          for (
            var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i;
            s < a;
            s += 16383
          )
            o.push(h(t, s, s + 16383 > a ? a : s + 16383));
          1 === i
            ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + '=='))
            : 2 === i &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + '='));
          return o.join('');
        });
      for (
        var r = [],
          i = [],
          o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          s =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          a = 0,
          u = s.length;
        a < u;
        ++a
      )
        (r[a] = s[a]), (i[s.charCodeAt(a)] = a);
      function f(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4');
        var n = t.indexOf('=');
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function h(t, e, n) {
        for (var i, o, s = [], a = e; a < n; a += 3)
          (i =
            ((t[a] << 16) & 16711680) +
            ((t[a + 1] << 8) & 65280) +
            (255 & t[a + 2])),
            s.push(
              r[((o = i) >> 18) & 63] +
                r[(o >> 12) & 63] +
                r[(o >> 6) & 63] +
                r[63 & o]
            );
        return s.join('');
      }
      (i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = function(e, n, r) {
            var i = e.toString(r).length;
            if (n && i < n) {
              var o = new Array(n - i + 1).join(e.toString('hex'));
              return new t(o, 'hex').slice(0, n);
            }
            return e;
          });
      }.call(this, n(2).Buffer));
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function(t, e) {
          for (var n = e || 0, r = t + ''; r.length < n; ) r = '0' + r;
          return r;
        });
    },
    function(t, e, n) {
      'use strict';
      function r(t) {
        return /^(\d+)(\.\d+)?$/.test(t);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function(t, e) {
          return !(!r(t) || !r(e)) && String(t) === String(e);
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function(t) {
          return parseInt(t, 10).toString(16);
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function(t) {
          return parseInt(t, 16);
        });
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(6),
        o = n(16),
        s = (r = o) && r.__esModule ? r : { default: r };
      e.default = function(t, e, n, r) {
        var o = (0, s.default)(e, n, r);
        return !(o.length < 1) && (0, i.isSameToken)(t, o);
      };
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        i = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        o = n(10);
      var s = (function() {
        function t() {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this._options = this.defaultOptions);
        }
        return (
          i(t, [
            {
              key: 'getClass',
              value: function() {
                return t;
              },
            },
            {
              key: 'resetOptions',
              value: function() {
                return (this._options = this.defaultOptions), this;
              },
            },
            {
              key: 'generate',
              value: function(t, e) {
                var n = this.optionsAll;
                return (0, o.hotpToken)(t || n.secret, e, n);
              },
            },
            {
              key: 'check',
              value: function(t, e, n) {
                var r = this.optionsAll;
                return (0, o.hotpCheck)(t, e || r.secret, n, r);
              },
            },
            {
              key: 'verify',
              value: function(t) {
                return (
                  'object' === (void 0 === t ? 'undefined' : r(t)) &&
                  null != t &&
                  this.check(t.token, t.secret, t.counter)
                );
              },
            },
            {
              key: 'defaultOptions',
              get: function() {
                return {};
              },
            },
            {
              key: 'options',
              set: function() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                t && (this._options = Object.assign({}, this._options, t));
              },
              get: function() {
                return Object.assign({}, this._options);
              },
            },
            {
              key: 'optionsAll',
              get: function() {
                return (0, o.hotpOptions)(this._options);
              },
            },
          ]),
          t
        );
      })();
      (s.prototype.HOTP = s), (e.default = s);
    },
    function(t, e, n) {
      'use strict';
      var r = a(n(38)),
        i = a(n(27)),
        o = a(n(69)),
        s = a(n(62));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (o.default.options = { crypto: s.default }),
        (r.default.options = { crypto: s.default }),
        (i.default.options = { crypto: s.default }),
        (t.exports = {
          authenticator: o.default,
          hotp: r.default,
          totp: i.default,
        });
    },
  ]);
});
//# sourceMappingURL=otplib-browser.js.map
