(function (sttc) {
  "use strict";
  var aa = {}; /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var p = this || self;
  function ba(a) {
    var b = ca("CLOSURE_FLAGS");
    a = b && b[a];
    return null != a ? a : !1;
  }
  function ca(a) {
    a = a.split(".");
    for (var b = p, c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function da(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function ea(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, fa) && a[fa]) || (a[fa] = ++ha)
    );
  }
  var fa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    ha = 0;
  function ia(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ja(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function ka(a, b, c) {
    ka =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? ia
        : ja;
    return ka.apply(null, arguments);
  }
  function la(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function ma(a, b, c) {
    a = a.split(".");
    c = c || p;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function na(a) {
    return a;
  }
  let oa = new Date().getTime();
  function pa(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function qa(a, b) {
    let c = 0;
    a = pa(String(a)).split(".");
    b = pa(String(b)).split(".");
    const d = Math.max(a.length, b.length);
    for (let g = 0; 0 == c && g < d; g++) {
      var e = a[g] || "",
        f = b[g] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f[0].length) break;
        c =
          ra(
            0 == e[1].length ? 0 : parseInt(e[1], 10),
            0 == f[1].length ? 0 : parseInt(f[1], 10)
          ) ||
          ra(0 == e[2].length, 0 == f[2].length) ||
          ra(e[2], f[2]);
        e = e[3];
        f = f[3];
      } while (0 == c);
    }
    return c;
  }
  function ra(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var ta = ba(610401301),
    ua = ba(188588736);
  function va() {
    var a = p.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var wa;
  const xa = p.navigator;
  wa = xa ? xa.userAgentData || null : null;
  function ya(a) {
    return ta
      ? wa
        ? wa.brands.some(({ brand: b }) => b && -1 != b.indexOf(a))
        : !1
      : !1;
  }
  function q(a) {
    return -1 != va().indexOf(a);
  }
  function za() {
    return ta ? !!wa && 0 < wa.brands.length : !1;
  }
  function Aa() {
    return za() ? !1 : q("Trident") || q("MSIE");
  }
  function Ba() {
    return za() ? ya("Microsoft Edge") : q("Edg/");
  }
  function Ca() {
    !q("Safari") ||
      Da() ||
      (za() ? 0 : q("Coast")) ||
      (za() ? 0 : q("Opera")) ||
      (za() ? 0 : q("Edge")) ||
      Ba() ||
      (za() && ya("Opera"));
  }
  function Da() {
    return za()
      ? ya("Chromium")
      : ((q("Chrome") || q("CriOS")) && !(za() ? 0 : q("Edge"))) || q("Silk");
  }
  function Ea(a) {
    const b = {};
    a.forEach((c) => {
      b[c[0]] = c[1];
    });
    return (c) => b[c.find((d) => d in b)] || "";
  }
  function Fa() {
    var a = va();
    if (Aa()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    let d;
    for (; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
    a = Ea(b);
    return (za() ? 0 : q("Opera"))
      ? a(["Version", "Opera"])
      : (za() ? 0 : q("Edge"))
      ? a(["Edge"])
      : Ba()
      ? a(["Edg"])
      : q("Silk")
      ? a(["Silk"])
      : Da()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = b[2]) && a[1]) || "";
  }
  function Ga(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Ha(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Ia(a, b) {
    const c = a.length,
      d = [];
    let e = 0;
    const f = "string" === typeof a ? a.split("") : a;
    for (let g = 0; g < c; g++)
      if (g in f) {
        const h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }
  function Ja(a, b) {
    const c = a.length,
      d = Array(c),
      e = "string" === typeof a ? a.split("") : a;
    for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }
  function Ka(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function La(a, b) {
    a: {
      var c = a.length;
      const d = "string" === typeof a ? a.split("") : a;
      for (--c; 0 <= c; c--)
        if (c in d && b.call(void 0, d[c], c, a)) {
          b = c;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Ma(a, b) {
    return 0 <= Ga(a, b);
  }
  function Na(a) {
    const b = a.length;
    if (0 < b) {
      const c = Array(b);
      for (let d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Oa(a) {
    Oa[" "](a);
    return a;
  }
  Oa[" "] = function () {};
  var Pa = Aa();
  !q("Android") || Da();
  Da();
  Ca();
  var Qa = null;
  function Ra(a) {
    var b = [];
    Ta(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function Ta(a, b) {
    function c(k) {
      for (; d < a.length; ) {
        var l = a.charAt(d++),
          m = Qa[l];
        if (null != m) return m;
        if (!/^[\s\xa0]*$/.test(l))
          throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
    }
    Ua();
    for (var d = 0; ; ) {
      var e = c(-1),
        f = c(0),
        g = c(64),
        h = c(64);
      if (64 === h && -1 === e) break;
      b((e << 2) | (f >> 4));
      64 != g &&
        (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
    }
  }
  function Ua() {
    if (!Qa) {
      Qa = {};
      for (
        var a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          b = ["+/=", "+/", "-_=", "-_.", "-_"],
          c = 0;
        5 > c;
        c++
      )
        for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === Qa[f] && (Qa[f] = e);
        }
    }
  }
  var Va = "undefined" != typeof structuredClone;
  let Wa = 0,
    Xa = 0;
  function Za(a) {
    var b = 0 > a;
    a = Math.abs(a);
    var c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    if (b) {
      b = c;
      c = ~a;
      b ? (b = ~b + 1) : (c += 1);
      const [d, e] = [b, c];
      a = e;
      c = d;
    }
    Wa = c >>> 0;
    Xa = a >>> 0;
  }
  function $a() {
    var a = Wa,
      b = Xa;
    if (b & 2147483648)
      var c = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0));
    else
      (b >>>= 0),
        (a >>>= 0),
        2097151 >= b
          ? (c = "" + (4294967296 * b + a))
          : (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)));
    return c;
  }
  function ab(a) {
    return Array.prototype.slice.call(a);
  }
  var r = Symbol(),
    bb = Symbol();
  function u(a, b, c) {
    return c ? a | b : a & ~b;
  }
  var x = (a, b) => {
    a[r] = b;
    return a;
  };
  function cb(a) {
    a[r] |= 32;
    return a;
  }
  function db(a, b) {
    x(b, (a | 0) & -14591);
  }
  function eb(a, b) {
    x(b, (a | 34) & -14557);
  }
  function fb(a) {
    a = (a >> 14) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var gb = {},
    hb = {};
  function ib(a) {
    return !(!a || "object" !== typeof a || a.g !== hb);
  }
  function jb(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  let kb;
  function lb(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    const d = a[r] | 0;
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    x(a, d | 1);
    return !0;
  }
  var mb;
  const nb = [];
  x(nb, 55);
  mb = Object.freeze(nb);
  function ob(a) {
    if (a & 2) throw Error();
  }
  class pb {}
  class qb {}
  Object.freeze(new pb());
  Object.freeze(new qb());
  let rb;
  function sb(a) {
    if (rb) throw Error("");
    rb = (b) => {
      p.setTimeout(() => {
        a(b);
      }, 0);
    };
  }
  function tb(a) {
    a = Error(a);
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = "warning";
    if (rb)
      try {
        rb(a);
      } catch (b) {
        throw ((b.cause = a), b);
      }
    return a;
  }
  function ub(a) {
    if (null != a && "boolean" !== typeof a) {
      var b = typeof a;
      throw Error(
        `Expected boolean but got ${
          "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null"
        }: ${a}`
      );
    }
    return a;
  }
  const vb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function wb(a) {
    const b = typeof a;
    return "number" === b
      ? Number.isFinite(a)
      : "string" !== b
      ? !1
      : vb.test(a);
  }
  function xb(a) {
    if (null != a) {
      if (!Number.isFinite(a)) throw tb("enum");
      a |= 0;
    }
    return a;
  }
  function yb(a) {
    return null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
  }
  function zb(a) {
    if ("number" !== typeof a) throw tb("int32");
    if (!Number.isFinite(a)) throw tb("int32");
    return a | 0;
  }
  function Ab(a) {
    return null == a ? a : zb(a);
  }
  function Bb(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0;
  }
  function Cb(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0;
  }
  function Db(a) {
    return "-" === a[0]
      ? 20 > a.length
        ? !0
        : 20 === a.length && -922337 < Number(a.substring(0, 7))
      : 19 > a.length
      ? !0
      : 19 === a.length && 922337 > Number(a.substring(0, 6));
  }
  function Eb(a) {
    a = Math.trunc(a);
    if (!Number.isSafeInteger(a)) {
      Za(a);
      var b = Wa,
        c = Xa;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), 0 == b && (c = (c + 1) >>> 0);
      b = 4294967296 * c + (b >>> 0);
      a = a ? -b : b;
    }
    return a;
  }
  function Fb(a) {
    var b = Math.trunc(Number(a));
    if (Number.isSafeInteger(b)) return String(b);
    b = a.indexOf(".");
    -1 !== b && (a = a.substring(0, b));
    Db(a) ||
      (16 > a.length
        ? Za(Number(a))
        : ((a = BigInt(a)),
          (Wa = Number(a & BigInt(4294967295)) >>> 0),
          (Xa = Number((a >> BigInt(32)) & BigInt(4294967295)))),
      (a = $a()));
    return a;
  }
  function Gb(a) {
    if ("string" !== typeof a) throw Error();
    return a;
  }
  function Hb(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a;
  }
  function Ib(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function Jb(a, b, c, d) {
    if (null != a && "object" === typeof a && a.ma === gb) return a;
    if (!Array.isArray(a))
      return (
        c
          ? d & 2
            ? (a = b[bb])
              ? (b = a)
              : ((a = new b()), (d = a.A), (d[r] |= 34), (b = b[bb] = a))
            : (b = new b())
          : (b = void 0),
        b
      );
    let e = (c = a[r] | 0);
    0 === e && (e |= d & 32);
    e |= d & 2;
    e !== c && x(a, e);
    return new b(a);
  }
  let Kb;
  function Lb(a, b) {
    Kb = b;
    a = new a(b);
    Kb = void 0;
    return a;
  }
  function Mb(a, b) {
    return Nb(b);
  }
  function Nb(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (lb(a, void 0, 0)) return;
          } else if (null != a && a instanceof Uint8Array) {
            let b = "",
              c = 0;
            const d = a.length - 10240;
            for (; c < d; )
              b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
            return btoa(b);
          }
    }
    return a;
  }
  function Ob(a, b, c) {
    a = ab(a);
    var d = a.length;
    const e = b & 256 ? a[d - 1] : void 0;
    d += e ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (e) {
      b = a[b] = {};
      for (const f in e)
        Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]));
    }
    return a;
  }
  function Pb(a, b, c, d, e) {
    if (null != a) {
      if (Array.isArray(a))
        a = lb(a, void 0, 0)
          ? void 0
          : e && (a[r] | 0) & 2
          ? a
          : Qb(a, b, c, void 0 !== d, e);
      else if (jb(a)) {
        const f = {};
        for (let g in a)
          Object.prototype.hasOwnProperty.call(a, g) &&
            (f[g] = Pb(a[g], b, c, d, e));
        a = f;
      } else a = b(a, d);
      return a;
    }
  }
  function Qb(a, b, c, d, e) {
    const f = d || c ? a[r] | 0 : 0;
    d = d ? !!(f & 32) : void 0;
    a = ab(a);
    for (let g = 0; g < a.length; g++) a[g] = Pb(a[g], b, c, d, e);
    c && c(f, a);
    return a;
  }
  function Rb(a) {
    return a.ma === gb
      ? Sb(a, Qb(a.A, Rb, void 0, void 0, !1), !0)
      : null != a && a instanceof Uint8Array
      ? new Uint8Array(a)
      : a;
  }
  function Tb(a) {
    return a.ma === gb ? a.toJSON() : Nb(a);
  }
  var Ub = Va ? structuredClone : (a) => Qb(a, Rb, void 0, void 0, !1);
  function Vb(a, b, c = eb) {
    if (null != a) {
      if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = a[r] | 0;
        if (d & 2) return a;
        b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b ? x(a, (d | 34) & -12293) : Qb(a, Vb, d & 4 ? eb : c, !0, !0);
      }
      a.ma === gb &&
        ((c = a.A),
        (d = c[r]),
        (a = d & 2 ? a : Lb(a.constructor, Wb(c, d, !0))));
      return a;
    }
  }
  function Wb(a, b, c) {
    const d = c || b & 2 ? eb : db,
      e = !!(b & 32);
    a = Ob(a, b, (f) => Vb(f, e, d));
    a[r] = a[r] | 32 | (c ? 2 : 0);
    return a;
  }
  function Xb(a) {
    const b = a.A,
      c = b[r];
    return c & 2 ? Lb(a.constructor, Wb(b, c, !1)) : a;
  }
  function Yb(a, b) {
    a = a.A;
    return Zb(a, a[r], b);
  }
  function Zb(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= fb(b)) {
      if (b & 256) return a[a.length - 1][c];
    } else {
      var e = a.length;
      if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
      b = c + (+!!(b & 512) - 1);
      if (b < e) return a[b];
    }
  }
  function y(a, b, c) {
    const d = a.A;
    let e = d[r];
    ob(e);
    B(d, e, b, c);
    return a;
  }
  function B(a, b, c, d, e) {
    const f = fb(b);
    if (c >= f || e) {
      let g = b;
      if (b & 256) e = a[a.length - 1];
      else {
        if (null == d) return g;
        e = a[f + (+!!(b & 512) - 1)] = {};
        g |= 256;
      }
      e[c] = d;
      c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
      g !== b && x(a, g);
      return g;
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    return b;
  }
  function $b(a, b, c) {
    return void 0 !== ac(a, b, c, !1);
  }
  function bc(a, b) {
    a = Yb(a, b);
    return null == a || "boolean" === typeof a
      ? a
      : "number" === typeof a
      ? !!a
      : void 0;
  }
  function cc(a, b, c) {
    a = a.A;
    let d = a[r];
    const e = 2 & d ? 1 : 2;
    let f = dc(a, d, b);
    var g = f[r] | 0;
    if (!(4 & g)) {
      if (4 & g || Object.isFrozen(f))
        (f = ab(f)), (g = ec(g, d, !1)), (d = B(a, d, b, f));
      var h = 0;
      let k = 0;
      for (; h < f.length; h++) {
        const l = c(f[h]);
        null != l && (f[k++] = l);
      }
      k < h && (f.length = k);
      g = fc(g, d);
      g = u(g, 20, !0);
      g = u(g, 4096, !1);
      g = u(g, 8192, !1);
      x(f, g);
      2 & g && Object.freeze(f);
    }
    gc(g) ||
      ((c = g),
      (h = 1 === e) ? (g = u(g, 2, !0)) : (g = u(g, 32, !1)),
      g !== c && x(f, g),
      h && Object.freeze(f));
    2 === e &&
      gc(g) &&
      ((f = ab(f)), (g = ec(g, d, !1)), x(f, g), B(a, d, b, f));
    return f;
  }
  function dc(a, b, c) {
    a = Zb(a, b, c);
    return Array.isArray(a) ? a : mb;
  }
  function fc(a, b) {
    var c = !1;
    0 === a && (a = ec(a, b, c));
    return (a = u(a, 1, !0));
  }
  function gc(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
  }
  function hc(a, b, c, d) {
    const e = a.A;
    let f = e[r];
    ob(f);
    if (null == c) return B(e, f, b), a;
    let g = c[r] | 0,
      h = g;
    var k = !!(2 & g) || Object.isFrozen(c);
    const l = !k && !1;
    if (!(4 & g))
      for (
        g = 21, k && ((c = ab(c)), (h = 0), (g = ec(g, f, !0))), k = 0;
        k < c.length;
        k++
      )
        c[k] = d(c[k]);
    l && ((c = ab(c)), (h = 0), (g = ec(g, f, !0)));
    g !== h && x(c, g);
    B(e, f, b, c);
    return a;
  }
  function C(a, b, c, d) {
    const e = a.A;
    let f = e[r];
    ob(f);
    B(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
    return a;
  }
  function ic(a, b, c, d) {
    const e = a.A;
    let f = e[r];
    ob(f);
    (c = jc(e, f, c)) && c !== b && null != d && (f = B(e, f, c));
    B(e, f, b, d);
    return a;
  }
  function kc(a, b, c) {
    a = a.A;
    return jc(a, a[r], b) === c ? c : -1;
  }
  function lc(a, b) {
    a = a.A;
    return jc(a, a[r], b);
  }
  function jc(a, b, c) {
    let d = 0;
    for (let e = 0; e < c.length; e++) {
      const f = c[e];
      null != Zb(a, b, f) && (0 !== d && (b = B(a, b, d)), (d = f));
    }
    return d;
  }
  function mc(a) {
    var b = nc;
    a = a.A;
    let c = a[r];
    ob(c);
    const d = Zb(a, c, 3);
    b = Xb(Jb(d, b, !0, c));
    d !== b && B(a, c, 3, b);
    return b;
  }
  function ac(a, b, c, d) {
    a = a.A;
    let e = a[r];
    const f = Zb(a, e, c, d);
    b = Jb(f, b, !1, e);
    b !== f && null != b && B(a, e, c, b, d);
    return b;
  }
  function D(a, b, c) {
    b = ac(a, b, c, !1);
    if (null == b) return b;
    a = a.A;
    let d = a[r];
    if (!(d & 2)) {
      const e = Xb(b);
      e !== b && ((b = e), B(a, d, c, b, !1));
    }
    return b;
  }
  function F(a, b, c) {
    a = a.A;
    var d = a[r],
      e = d,
      f = !(2 & d),
      g = !!(2 & e),
      h = g ? 1 : 2;
    d = 1 === h;
    h = 2 === h;
    f && (f = !g);
    g = dc(a, e, c);
    var k = g[r] | 0;
    const l = !!(4 & k);
    if (!l) {
      k = fc(k, e);
      var m = g,
        n = e;
      const t = !!(2 & k);
      t && (n = u(n, 2, !0));
      let v = !t,
        w = !0,
        A = 0,
        z = 0;
      for (; A < m.length; A++) {
        const E = Jb(m[A], b, !1, n);
        if (E instanceof b) {
          if (!t) {
            const J = !!((E.A[r] | 0) & 2);
            v && (v = !J);
            w && (w = J);
          }
          m[z++] = E;
        }
      }
      z < A && (m.length = z);
      k = u(k, 4, !0);
      k = u(k, 16, w);
      k = u(k, 8, v);
      x(m, k);
      t && Object.freeze(m);
    }
    b = !!(8 & k) || (d && !g.length);
    if (f && !b) {
      gc(k) && ((g = ab(g)), (k = ec(k, e, !1)), (e = B(a, e, c, g)));
      b = g;
      f = k;
      for (m = 0; m < b.length; m++)
        (k = b[m]), (n = Xb(k)), k !== n && (b[m] = n);
      f = u(f, 8, !0);
      f = u(f, 16, !b.length);
      x(b, f);
      k = f;
    }
    gc(k) ||
      ((b = k),
      d
        ? (k = u(k, !g.length || (16 & k && (!l || 32 & k)) ? 2 : 2048, !0))
        : (k = u(k, 32, !1)),
      k !== b && x(g, k),
      d && Object.freeze(g));
    h && gc(k) && ((g = ab(g)), (k = ec(k, e, !1)), x(g, k), B(a, e, c, g));
    return g;
  }
  function oc(a, b, c) {
    null == c && (c = void 0);
    return y(a, b, c);
  }
  function pc(a, b, c, d) {
    null == d && (d = void 0);
    return ic(a, b, c, d);
  }
  function qc(a, b, c) {
    const d = a.A;
    let e = d[r];
    ob(e);
    if (null == c) return B(d, e, b), a;
    let f = c[r] | 0,
      g = f;
    const h = !!(2 & f) || !!(2048 & f),
      k = h || Object.isFrozen(c);
    let l = !0,
      m = !0;
    for (let t = 0; t < c.length; t++) {
      var n = c[t];
      h || ((n = !!((n.A[r] | 0) & 2)), l && (l = !n), m && (m = n));
    }
    h || ((f = u(f, 5, !0)), (f = u(f, 8, l)), (f = u(f, 16, m)));
    k && f !== g && ((c = ab(c)), (g = 0), (f = ec(f, e, !0)));
    f !== g && x(c, f);
    B(d, e, b, c);
    return a;
  }
  function ec(a, b, c) {
    a = u(a, 2, !!(2 & b));
    a = u(a, 32, !!(32 & b) && c);
    return (a = u(a, 2048, !1));
  }
  function G(a, b) {
    return Bb(Yb(a, b));
  }
  function rc(a, b) {
    a = Yb(a, b);
    var c;
    null == a
      ? (c = a)
      : wb(a)
      ? "number" === typeof a
        ? (c = Eb(a))
        : (c = Fb(a))
      : (c = void 0);
    return c;
  }
  function H(a, b) {
    return Ib(Yb(a, b));
  }
  function I(a, b) {
    return yb(Yb(a, b));
  }
  function sc(a) {
    return a ?? 0;
  }
  function K(a, b, c = !1) {
    return bc(a, b) ?? c;
  }
  function tc(a, b) {
    return sc(rc(a, b));
  }
  function uc(a, b) {
    a = a.A;
    let c = a[r];
    const d = Zb(a, c, b);
    var e =
      null == d || "number" === typeof d
        ? d
        : "NaN" === d || "Infinity" === d || "-Infinity" === d
        ? Number(d)
        : void 0;
    null != e && e !== d && B(a, c, b, e);
    return e ?? 0;
  }
  function L(a, b) {
    return H(a, b) ?? "";
  }
  function M(a, b) {
    return sc(I(a, b));
  }
  function vc(a, b, c, d) {
    return D(a, b, kc(a, d, c));
  }
  function wc(a, b, c) {
    if (null != c) {
      var d = !!d;
      if (!wb(c)) throw tb("int64");
      "string" === typeof c
        ? (c = Fb(c))
        : d
        ? ((c = Math.trunc(c)),
          Number.isSafeInteger(c)
            ? (c = String(c))
            : ((d = String(c)), Db(d) ? (c = d) : (Za(c), (c = $a()))))
        : (c = Eb(c));
    }
    return C(a, b, c, "0");
  }
  function xc(a, b) {
    var c = performance.now();
    if (null != c && "number" !== typeof c)
      throw Error(
        `Value of float/double field must be a number, found ${typeof c}: ${c}`
      );
    C(a, b, c, 0);
  }
  function yc(a, b, c) {
    return C(a, b, Hb(c), "");
  }
  var N = class {
    constructor(a) {
      a: {
        null == a && (a = Kb);
        Kb = void 0;
        if (null == a) {
          var b = 96;
          a = [];
        } else {
          if (!Array.isArray(a)) throw Error();
          b = a[r] | 0;
          if (b & 64) break a;
          var c = a;
          b |= 64;
          var d = c.length;
          if (d && (--d, jb(c[d]))) {
            b |= 256;
            c = d - (+!!(b & 512) - 1);
            if (1024 <= c) throw Error();
            b = (b & -16760833) | ((c & 1023) << 14);
          }
        }
        x(a, b);
      }
      this.A = a;
    }
    toJSON() {
      return kb
        ? Sb(this, this.A, !1)
        : Sb(this, Qb(this.A, Tb, void 0, void 0, !1), !0);
    }
  };
  N.prototype.ma = gb;
  function Sb(a, b, c) {
    var d = ua ? void 0 : a.constructor.u;
    const e = (c ? a.A : b)[r];
    a = b.length;
    if (!a) return b;
    let f, g;
    if (jb((c = b[a - 1]))) {
      a: {
        var h = c;
        let m = {},
          n = !1;
        for (var k in h) {
          if (!Object.prototype.hasOwnProperty.call(h, k)) continue;
          let t = h[k];
          if (Array.isArray(t)) {
            let v = t;
            if (lb(t, d, +k) || (ib(t) && 0 === t.size)) t = null;
            t != v && (n = !0);
          }
          null != t ? (m[k] = t) : (n = !0);
        }
        if (n) {
          for (var l in m) {
            h = m;
            break a;
          }
          h = null;
        }
      }
      h != c && (f = !0);
      a--;
    }
    for (k = +!!(e & 512) - 1; 0 < a; a--) {
      l = a - 1;
      c = b[l];
      l -= k;
      if (!(null == c || lb(c, d, l) || (ib(c) && 0 === c.size))) break;
      g = !0;
    }
    if (!f && !g) return b;
    b = Array.prototype.slice.call(b, 0, a);
    h && b.push(h);
    return b;
  }
  function zc(a, b) {
    if (null == b) return new a();
    if (!Array.isArray(b)) throw Error("must be an array");
    if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
      throw Error("arrays passed to jspb constructors must be mutable");
    b[r] |= 128;
    return Lb(a, cb(b));
  }
  function Ac(a, b) {
    const c = Bc;
    Bc = void 0;
    if (!b(a)) throw ((b = c ? c() + "\n" : ""), Error(b + String(a)));
  }
  let Bc = void 0;
  const Cc = (a) => null !== a && void 0 !== a;
  function Ec(a) {
    return (b) => {
      if (null == b || "" == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        b = Lb(a, cb(b));
      }
      return b;
    };
  }
  var Fc = class extends N {};
  var Gc = class extends N {};
  Gc.u = [2, 3, 4];
  var O = class {
      constructor(a, b = !1) {
        this.g = a;
        this.defaultValue = b;
      }
    },
    Hc = class {
      constructor(a, b = 0) {
        this.g = a;
        this.defaultValue = b;
      }
    },
    Ic = class {
      constructor(a, b = "") {
        this.g = a;
        this.defaultValue = b;
      }
    },
    Jc = class {
      constructor(a, b = []) {
        this.g = a;
        this.defaultValue = b;
      }
    };
  var Kc = new O(203);
  function Lc(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function Mc(a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  function Nc(a) {
    let b = a;
    return function () {
      if (b) {
        const c = b;
        b = null;
        c();
      }
    };
  }
  function Oc(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function Pc(a, b, c) {
    return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1;
  }
  var P = (a) => {
    var b = "Aa";
    if (a.Aa && a.hasOwnProperty(b)) return a.Aa;
    b = new a();
    return (a.Aa = b);
  };
  var Qc = class {
    constructor() {
      const a = {};
      this.i = (b, c) => (null != a[b] ? a[b] : c);
      this.j = (b, c) => (null != a[b] ? a[b] : c);
      this.g = (b, c) => (null != a[b] ? a[b] : c);
      this.h = (b, c) => (null != a[b] ? a[b] : c);
      this.s = () => {};
    }
  };
  function Q(a) {
    return P(Qc).i(a.g, a.defaultValue);
  }
  function Rc(a) {
    return P(Qc).j(a.g, a.defaultValue);
  }
  function Sc(a, b) {
    const c = {};
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function Tc(a, b) {
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function Uc(a) {
    const b = [];
    let c = 0;
    for (const d in a) b[c++] = a[d];
    return b;
  }
  function Vc(a) {
    const b = {};
    for (const c in a) b[c] = a[c];
    return b;
  }
  var Wc;
  var Xc = class {
    constructor(a) {
      this.h = a;
    }
    toString() {
      return this.h + "";
    }
  };
  function Yc(a, b) {
    a = Zc.exec($c(a).toString());
    var c = a[3] || "";
    return ad(a[1] + bd("?", a[2] || "", b) + bd("#", c));
  }
  function $c(a) {
    return a instanceof Xc && a.constructor === Xc
      ? a.h
      : "type_error:TrustedResourceUrl";
  }
  var Zc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    cd = {};
  function ad(a) {
    if (void 0 === Wc) {
      var b = null;
      var c = p.trustedTypes;
      if (c && c.createPolicy) {
        try {
          b = c.createPolicy("goog#html", {
            createHTML: na,
            createScript: na,
            createScriptURL: na,
          });
        } catch (d) {
          p.console && p.console.error(d.message);
        }
        Wc = b;
      } else Wc = b;
    }
    a = (b = Wc) ? b.createScriptURL(a) : a;
    return new Xc(a, cd);
  }
  function bd(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b +=
              (b.length > a.length ? "&" : "") +
              encodeURIComponent(d) +
              "=" +
              encodeURIComponent(String(g))));
        }
      }
    return b;
  }
  var dd = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g.toString();
    }
  };
  function ed(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function fd(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }
  function gd(a) {
    this.g = a || p.document || document;
  }
  gd.prototype.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  function hd() {
    return ta && wa
      ? wa.mobile
      : !id() && (q("iPod") || q("iPhone") || q("Android") || q("IEMobile"));
  }
  function id() {
    return ta && wa
      ? !wa.mobile && (q("iPad") || q("Android") || q("Silk"))
      : q("iPad") || (q("Android") && !q("Mobile")) || q("Silk");
  }
  var jd = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    kd = /#|$/;
  function ld(a, b) {
    var c = a.search(kd);
    a: {
      var d = 0;
      for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (38 == f || 63 == f)
          if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f))
            break a;
        d += e + 1;
      }
      d = -1;
    }
    if (0 > d) return null;
    e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
  } /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
  var md = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
  function nd(a, b = `unexpected value ${a}!`) {
    throw Error(b);
  }
  const od =
    "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
      " "
    );
  function pd(a) {
    try {
      var b;
      if ((b = !!a && null != a.location.href))
        a: {
          try {
            Oa(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
      return b;
    } catch {
      return !1;
    }
  }
  function qd(a) {
    return pd(a.top) ? a.top : null;
  }
  function rd(a, b) {
    const c = sd("SCRIPT", a);
    c.src = $c(b);
    (void 0)?.sc ||
      ((b = (b = (
        (c.ownerDocument && c.ownerDocument.defaultView) ||
        window
      ).document.querySelector?.("script[nonce]"))
        ? b.nonce || b.getAttribute("nonce") || ""
        : "") &&
        c.setAttribute("nonce", b));
    return (a = a.getElementsByTagName("script")[0]) && a.parentNode
      ? (a.parentNode.insertBefore(c, a), c)
      : null;
  }
  function td(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function ud() {
    if (!globalThis.crypto) return Math.random();
    try {
      const a = new Uint32Array(1);
      globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch {
      return Math.random();
    }
  }
  function vd(a, b) {
    if (a)
      for (const c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function wd(a) {
    const b = a.length;
    if (0 == b) return 0;
    let c = 305419896;
    for (let d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  }
  var xd = /^([0-9.]+)px$/,
    yd = /^(-?[0-9.]{1,30})$/;
  function zd(a) {
    if (!yd.test(a)) return null;
    a = Number(a);
    return isNaN(a) ? null : a;
  }
  function R(a) {
    return (a = xd.exec(a)) ? +a[1] : null;
  }
  var Ad = (a, b) => {
      for (let e = 0; 50 > e; ++e) {
        try {
          var c = !(!a.frames || !a.frames[b]);
        } catch {
          c = !1;
        }
        if (c) return a;
        a: {
          try {
            const f = a.parent;
            if (f && f != a) {
              var d = f;
              break a;
            }
          } catch {}
          d = null;
        }
        if (!(a = d)) break;
      }
      return null;
    },
    Bd = Mc(() => (hd() ? 2 : id() ? 1 : 0)),
    Cd = (a) => {
      vd({ display: "none" }, (b, c) => {
        a.style.setProperty(c, b, "important");
      });
    };
  let Dd = [];
  const Ed = () => {
    const a = Dd;
    Dd = [];
    for (const b of a)
      try {
        b();
      } catch {}
  };
  function Fd() {
    var a = P(Qc).h(Gd.g, Gd.defaultValue),
      b = S.document;
    if (a.length && b.head)
      for (const c of a)
        c &&
          b.head &&
          ((a = sd("META")),
          b.head.appendChild(a),
          (a.httpEquiv = "origin-trial"),
          (a.content = c));
  }
  var Hd = () => {
      var a = Math.random;
      return Math.floor(a() * 2 ** 52);
    },
    Id = (a) => {
      if ("number" !== typeof a.goog_pvsid)
        try {
          Object.defineProperty(a, "goog_pvsid", {
            value: Hd(),
            configurable: !1,
          });
        } catch (b) {}
      return Number(a.goog_pvsid) || -1;
    },
    Kd = (a) => {
      var b = Jd;
      "complete" === b.readyState || "interactive" === b.readyState
        ? (Dd.push(a),
          1 == Dd.length &&
            (window.Promise
              ? Promise.resolve().then(Ed)
              : window.setImmediate
              ? setImmediate(Ed)
              : setTimeout(Ed, 0)))
        : b.addEventListener("DOMContentLoaded", a);
    };
  function sd(a, b = document) {
    return b.createElement(String(a).toLowerCase());
  }
  function Ld(a, b, c = null, d = !1, e = !1) {
    Md(a, b, c, d, e);
  }
  function Md(a, b, c, d, e = !1) {
    a.google_image_requests || (a.google_image_requests = []);
    const f = sd("IMG", a.document);
    if (c || d) {
      const g = (h) => {
        c && c(h);
        if (d) {
          h = a.google_image_requests;
          const k = Ga(h, f);
          0 <= k && Array.prototype.splice.call(h, k, 1);
        }
        Pc(f, "load", g);
        Pc(f, "error", g);
      };
      Oc(f, "load", g);
      Oc(f, "error", g);
    }
    e && (f.attributionSrc = "");
    f.src = b;
    a.google_image_requests.push(f);
  }
  var Pd = (a, b) => {
      let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
      vd(a, (d, e) => {
        if (d || 0 === d) c += `&${e}=${encodeURIComponent("" + d)}`;
      });
      Od(c);
    },
    Od = (a) => {
      var b = window;
      b.fetch
        ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : Ld(b, a, void 0, !1, !1);
    };
  let Qd = null;
  var Jd = document,
    S = window;
  function Rd(a) {
    this.g = a || { cookie: "" };
  }
  Rd.prototype.set = function (a, b, c) {
    let d,
      e,
      f,
      g = !1,
      h;
    "object" === typeof c &&
      ((h = c.tc),
      (g = c.vc || !1),
      (f = c.domain || void 0),
      (e = c.path || void 0),
      (d = c.zb));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.g.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (e ? ";path=" + e : "") +
      (0 > d
        ? ""
        : 0 == d
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * d).toUTCString()) +
      (g ? ";secure" : "") +
      (null != h ? ";samesite=" + h : "");
  };
  Rd.prototype.get = function (a, b) {
    const c = a + "=",
      d = (this.g.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
      f = pa(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  Rd.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  Rd.prototype.clear = function () {
    var a = (this.g.cookie || "").split(";");
    const b = [];
    var c = [];
    let d, e;
    for (let f = 0; f < a.length; f++)
      (e = pa(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (c = b.length - 1; 0 <= c; c--)
      (a = b[c]),
        this.get(a),
        this.set(a, "", { zb: 0, path: void 0, domain: void 0 });
  };
  function Sd(a, b = window) {
    if (K(a, 5))
      try {
        return b.localStorage;
      } catch {}
    return null;
  }
  function Td(a = window) {
    try {
      return a.localStorage;
    } catch {
      return null;
    }
  }
  function Ud(a, ...b) {
    if (0 === b.length) return ad(a[0]);
    let c = a[0];
    for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return ad(c);
  }
  let Vd = null;
  var Wd = (a, b = []) => {
    let c = !1;
    p.google_logging_queue || ((c = !0), (p.google_logging_queue = []));
    p.google_logging_queue.push([a, b]);
    if ((a = c)) {
      if (null == Vd) {
        Vd = !1;
        try {
          const d = qd(p);
          d && -1 !== d.location.hash.indexOf("google_logging") && (Vd = !0);
          Td(p)?.getItem("google_logging") && (Vd = !0);
        } catch (d) {}
      }
      a = Vd;
    }
    a &&
      rd(
        p.document,
        Ud`https://pagead2.googlesyndication.com/pagead/js/logging_library.js`
      );
  };
  function Xd(a = p) {
    let b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function Yd(a = Xd()) {
    return a ? (pd(a.master) ? a.master : null) : null;
  }
  var Zd = (a) => {
      a = Yd(Xd(a)) || a;
      a.google_unique_id = (a.google_unique_id || 0) + 1;
      return a.google_unique_id;
    },
    $d = (a) => {
      a = a.google_unique_id;
      return "number" === typeof a ? a : 0;
    },
    ae = () => {
      if (!S) return !1;
      try {
        return !(!S.navigator.standalone && !S.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    },
    be = (a) => {
      if (!a) return "";
      a = a.toLowerCase();
      "ca-" != a.substring(0, 3) && (a = "ca-" + a);
      return a;
    };
  class ce {
    constructor(a, b) {
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = {};
    }
  }
  var de = (a) => !!(a.error && a.meta && a.id);
  const ee = RegExp(
    "^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"
  );
  var fe = class {
      constructor(a, b) {
        this.g = a;
        this.h = b;
      }
    },
    ge = class {
      constructor(a, b, c) {
        this.url = a;
        this.l = b;
        this.Za = !!c;
        this.depth = null;
      }
    };
  let he = null;
  function ie() {
    if (null === he) {
      he = "";
      try {
        let a = "";
        try {
          a = p.top.location.hash;
        } catch (b) {
          a = p.location.hash;
        }
        if (a) {
          const b = a.match(/\bdeid=([\d,]+)/);
          he = b ? b[1] : "";
        }
      } catch (a) {}
    }
    return he;
  }
  function je() {
    const a = p.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function ke() {
    const a = p.performance;
    return a && a.now ? a.now() : null;
  }
  var le = class {
    constructor(a, b) {
      var c = ke() || je();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = void 0;
      this.uniqueId = Math.random();
    }
  };
  const me = p.performance,
    ne = !!(me && me.mark && me.measure && me.clearMarks),
    oe = Mc(() => {
      var a;
      if ((a = ne)) (a = ie()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    });
  function pe(a) {
    a &&
      me &&
      oe() &&
      (me.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      me.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function qe(a) {
    a.g = !1;
    a.h != a.i.google_js_reporting_queue &&
      (oe() && Ha(a.h, pe), (a.h.length = 0));
  }
  class re {
    constructor(a) {
      this.h = [];
      this.i = a || p;
      let b = null;
      a &&
        ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
        (this.h = a.google_js_reporting_queue),
        (b = a.google_measure_js_timing));
      this.g = oe() || (null != b ? b : 1 > Math.random());
    }
    start(a, b) {
      if (!this.g) return null;
      a = new le(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      me && oe() && me.mark(b);
      return a;
    }
    end(a) {
      if (this.g && "number" === typeof a.value) {
        a.duration = (ke() || je()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        me && oe() && me.mark(b);
        !this.g || 2048 < this.h.length || this.h.push(a);
      }
    }
  }
  function se(a, b) {
    const c = {};
    c[a] = b;
    return [c];
  }
  function te(a, b, c, d, e) {
    const f = [];
    vd(a, function (g, h) {
      (g = ue(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function ue(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        const f = [];
        for (let g = 0; g < a.length; g++) f.push(ue(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(te(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function ve(a) {
    let b = 1;
    for (const c in a.h) b = c.length > b ? c.length : b;
    return 3997 - b - a.i.length - 1;
  }
  function we(a, b) {
    let c = "https://pagead2.googlesyndication.com" + b,
      d = ve(a) - b.length;
    if (0 > d) return "";
    a.g.sort(function (f, g) {
      return f - g;
    });
    b = null;
    let e = "";
    for (let f = 0; f < a.g.length; f++) {
      const g = a.g[f],
        h = a.h[g];
      for (let k = 0; k < h.length; k++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        let l = te(h[k], a.i, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            e = a.i;
            break;
          }
          b = null == b ? g : b;
        }
      }
    }
    a = "";
    null != b && (a = e + "trn=" + b);
    return c + a;
  }
  class xe {
    constructor() {
      this.i = "&";
      this.h = {};
      this.j = 0;
      this.g = [];
    }
  }
  function ye(a) {
    let b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        let d;
        for (; a != d; )
          (d = a),
            (a = a.replace(
              RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
              "$1"
            ));
        b = a.replace(RegExp("\n *", "g"), "\n");
      } catch (d) {
        b = c;
      }
    }
    return b;
  }
  var Ae = class {
    constructor(a, b, c = null) {
      this.B = a;
      this.C = b;
      this.h = c;
      this.g = null;
      this.i = !1;
      this.s = this.J;
    }
    hb(a) {
      this.s = a;
    }
    Da(a) {
      this.g = a;
    }
    j(a) {
      this.i = a;
    }
    ea(a, b, c) {
      let d, e;
      try {
        this.h && this.h.g
          ? ((e = this.h.start(a.toString(), 3)), (d = b()), this.h.end(e))
          : (d = b());
      } catch (f) {
        b = this.C;
        try {
          pe(e), (b = this.s(a, new ce(f, { message: ye(f) }), void 0, c));
        } catch (g) {
          this.J(217, g);
        }
        if (b) window.console?.error?.(f);
        else throw f;
      }
      return d;
    }
    oa(a, b) {
      return (...c) => this.ea(a, () => b.apply(void 0, c));
    }
    J(a, b, c, d, e) {
      e = e || "jserror";
      let f;
      try {
        const Sa = new xe();
        var g = Sa;
        g.g.push(1);
        g.h[1] = se("context", a);
        de(b) || (b = new ce(b, { message: ye(b) }));
        if (b.msg) {
          g = Sa;
          var h = b.msg.substring(0, 512);
          g.g.push(2);
          g.h[2] = se("msg", h);
        }
        var k = b.meta || {};
        b = k;
        if (this.g)
          try {
            this.g(b);
          } catch (Ya) {}
        if (d)
          try {
            d(b);
          } catch (Ya) {}
        d = Sa;
        k = [k];
        d.g.push(3);
        d.h[3] = k;
        d = p;
        k = [];
        b = null;
        do {
          var l = d;
          if (pd(l)) {
            var m = l.location.href;
            b = (l.document && l.document.referrer) || null;
          } else (m = b), (b = null);
          k.push(new ge(m || "", l));
          try {
            d = l.parent;
          } catch (Ya) {
            d = null;
          }
        } while (d && l != d);
        for (let Ya = 0, Yf = k.length - 1; Ya <= Yf; ++Ya)
          k[Ya].depth = Yf - Ya;
        l = p;
        if (
          l.location &&
          l.location.ancestorOrigins &&
          l.location.ancestorOrigins.length == k.length - 1
        )
          for (m = 1; m < k.length; ++m) {
            var n = k[m];
            n.url ||
              ((n.url = l.location.ancestorOrigins[m - 1] || ""), (n.Za = !0));
          }
        var t = k;
        let Dc = new ge(p.location.href, p, !1);
        l = null;
        const Nd = t.length - 1;
        for (n = Nd; 0 <= n; --n) {
          var v = t[n];
          !l && ee.test(v.url) && (l = v);
          if (v.url && !v.Za) {
            Dc = v;
            break;
          }
        }
        v = null;
        const Xj = t.length && t[Nd].url;
        0 != Dc.depth && Xj && (v = t[Nd]);
        f = new fe(Dc, v);
        if (f.h) {
          t = Sa;
          var w = f.h.url || "";
          t.g.push(4);
          t.h[4] = se("top", w);
        }
        var A = { url: f.g.url || "" };
        if (f.g.url) {
          var z = f.g.url.match(jd),
            E = z[1],
            J = z[3],
            sa = z[4];
          w = "";
          E && (w += E + ":");
          J && ((w += "//"), (w += J), sa && (w += ":" + sa));
          var Zf = w;
        } else Zf = "";
        E = Sa;
        A = [A, { url: Zf }];
        E.g.push(5);
        E.h[5] = A;
        ze(this.B, e, Sa, this.i, c);
      } catch (Sa) {
        try {
          ze(
            this.B,
            e,
            { context: "ecmserr", rctx: a, msg: ye(Sa), url: f && f.g.url },
            this.i,
            c
          );
        } catch (Dc) {}
      }
      return this.C;
    }
    Y(a, b) {
      b.catch((c) => {
        c = c ? c : "unknown rejection";
        this.J(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0);
      });
    }
  };
  var Be = (a) => "string" === typeof a,
    Ce = (a) => void 0 === a;
  var De = class extends N {};
  De.u = [2, 8];
  var Ee = [3, 4, 5],
    Fe = [6, 7];
  function Ge(a) {
    return null != a ? !a : a;
  }
  function He(a, b) {
    let c = !1;
    for (let d = 0; d < a.length; d++) {
      const e = a[d]();
      if (e === b) return e;
      null == e && (c = !0);
    }
    if (!c) return !b;
  }
  function Ie(a, b) {
    var c = F(a, De, 2);
    if (!c.length) return Je(a, b);
    a = M(a, 1);
    if (1 === a) return Ge(Ie(c[0], b));
    c = Ja(c, (d) => () => Ie(d, b));
    switch (a) {
      case 2:
        return He(c, !1);
      case 3:
        return He(c, !0);
    }
  }
  function Je(a, b) {
    const c = lc(a, Ee);
    a: {
      switch (c) {
        case 3:
          var d = M(a, kc(a, Ee, 3));
          break a;
        case 4:
          d = M(a, kc(a, Ee, 4));
          break a;
        case 5:
          d = M(a, kc(a, Ee, 5));
          break a;
      }
      d = void 0;
    }
    if (d && (b = (b = b[c]) && b[d])) {
      try {
        var e = cc(a, 8, Ib);
        var f = b(...e);
      } catch (g) {
        return;
      }
      e = M(a, 1);
      if (4 === e) return !!f;
      if (5 === e) return null != f;
      if (12 === e) a = L(a, kc(a, Fe, 7));
      else
        a: {
          switch (c) {
            case 4:
              a = uc(a, kc(a, Fe, 6));
              break a;
            case 5:
              a = L(a, kc(a, Fe, 7));
              break a;
          }
          a = void 0;
        }
      if (null != a) {
        if (6 === e) return f === a;
        if (9 === e) return null != f && 0 === qa(String(f), a);
        if (null != f)
          switch (e) {
            case 7:
              return f < a;
            case 8:
              return f > a;
            case 12:
              return Be(a) && Be(f) && new RegExp(a).test(f);
            case 10:
              return null != f && -1 === qa(String(f), a);
            case 11:
              return null != f && 1 === qa(String(f), a);
          }
      }
    }
  }
  function Ke(a, b) {
    return !a || !(!b || !Ie(a, b));
  }
  var Le = class extends N {};
  Le.u = [4];
  var Me = class extends N {
    getValue() {
      return D(this, Le, 2);
    }
  };
  var Ne = class extends N {},
    Oe = Ec(Ne);
  Ne.u = [5];
  var Pe = [1, 2, 3, 6, 7];
  var Qe = class extends N {
    constructor() {
      super();
    }
  };
  function Re(a, b) {
    try {
      const c = (d) => [{ [d.Ea]: d.Ba }];
      return JSON.stringify([
        a.filter((d) => d.la).map(c),
        b.toJSON(),
        a.filter((d) => !d.la).map(c),
      ]);
    } catch (c) {
      return Se(c, b), "";
    }
  }
  function Se(a, b) {
    try {
      Pd(
        {
          m: ye(a instanceof Error ? a : Error(String(a))),
          b: M(b, 1) || null,
          v: L(b, 2) || null,
        },
        "rcs_internal"
      );
    } catch (c) {}
  }
  var Te = class {
    constructor(a, b) {
      var c = new Qe();
      a = C(c, 1, xb(a), 0);
      b = yc(a, 2, b);
      a = b.A;
      c = a[r];
      this.i = c & 2 ? b : Lb(b.constructor, Wb(a, c, !0));
    }
  };
  var Ue = class extends N {
    constructor() {
      super();
    }
  };
  Ue.u = [2];
  var Ve = class extends N {
    constructor() {
      super();
    }
    getValue() {
      return M(this, 1);
    }
  };
  var We = class extends N {
    constructor() {
      super();
    }
    getWidth() {
      return tc(this, 1);
    }
    getHeight() {
      return tc(this, 2);
    }
  };
  var Xe = class extends N {
    constructor() {
      super();
    }
    getContentUrl() {
      return L(this, 4);
    }
  };
  var nc = class extends N {};
  var Ye = class extends N {};
  var Ze = class extends N {
    constructor() {
      super();
    }
    getContentUrl() {
      return L(this, 1);
    }
  };
  var $e = class extends N {};
  function af(a) {
    var b = new bf();
    return C(b, 1, xb(a), 0);
  }
  var bf = class extends N {
    constructor() {
      super();
    }
  };
  var cf = class extends N {
      constructor() {
        super();
      }
    },
    df = [4, 5, 6, 8, 9, 10, 11, 12];
  var ef = class extends N {
    constructor() {
      super();
    }
  };
  function ff(a, b) {
    return C(a, 1, xb(b), 0);
  }
  function gf(a, b) {
    return C(a, 2, xb(b), 0);
  }
  var hf = class extends N {
    constructor() {
      super();
    }
  };
  var jf = class extends N {
      constructor() {
        super();
      }
    },
    kf = [1, 2];
  function lf(a, b) {
    return oc(a, 1, b);
  }
  function mf(a, b) {
    return qc(a, 2, b);
  }
  function nf(a, b) {
    return hc(a, 4, b, zb);
  }
  function of(a, b) {
    return qc(a, 5, b);
  }
  function pf(a, b) {
    return C(a, 6, xb(b), 0);
  }
  var qf = class extends N {
    constructor() {
      super();
    }
  };
  qf.u = [2, 4, 5];
  var rf = class extends N {
    constructor() {
      super();
    }
  };
  rf.u = [5];
  var sf = [1, 2, 3, 4];
  var tf = class extends N {
    constructor() {
      super();
    }
  };
  tf.u = [2, 3];
  function uf(a) {
    var b = new vf();
    return pc(b, 4, wf, a);
  }
  var vf = class extends N {
      constructor() {
        super();
      }
      getTagSessionCorrelator() {
        return tc(this, 2);
      }
    },
    wf = [4, 5, 7, 8];
  var xf = class extends N {
    constructor() {
      super();
    }
  };
  var yf = class extends N {
    constructor() {
      super();
    }
  };
  yf.u = [4, 5];
  var zf = class extends N {
    constructor() {
      super();
    }
    getTagSessionCorrelator() {
      return tc(this, 1);
    }
  };
  zf.u = [2];
  var Af = class extends N {
      constructor() {
        super();
      }
    },
    Bf = [4, 6];
  class Cf extends Te {
    constructor() {
      super(...arguments);
    }
  }
  function Df(a, ...b) {
    Ef(a, ...b.map((c) => ({ la: !0, Ea: 3, Ba: c.toJSON() })));
  }
  function Ff(a, ...b) {
    Ef(a, ...b.map((c) => ({ la: !0, Ea: 4, Ba: c.toJSON() })));
  }
  function Gf(a, ...b) {
    Ef(a, ...b.map((c) => ({ la: !0, Ea: 7, Ba: c.toJSON() })));
  }
  var Hf = class extends Cf {};
  var If = (a, b) => {
    globalThis
      .fetch(a, {
        method: "POST",
        body: b,
        keepalive: 65536 > b.length,
        credentials: "omit",
        mode: "no-cors",
        redirect: "follow",
      })
      .catch(() => {});
  };
  function Ef(a, ...b) {
    try {
      a.C && 65536 <= Re(a.g.concat(b), a.i).length && Jf(a),
        a.j &&
          !a.s &&
          ((a.s = !0),
          Kf(a.j, () => {
            Jf(a);
          })),
        a.g.push(...b),
        a.g.length >= a.B && Jf(a),
        a.g.length &&
          null === a.h &&
          (a.h = setTimeout(() => {
            Jf(a);
          }, a.H));
    } catch (c) {
      Se(c, a.i);
    }
  }
  function Jf(a) {
    null !== a.h && (clearTimeout(a.h), (a.h = null));
    if (a.g.length) {
      var b = Re(a.g, a.i);
      a.D("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.g = [];
    }
  }
  var Lf = class extends Hf {
      constructor(a, b, c, d, e, f) {
        super(a, b);
        this.D = If;
        this.H = c;
        this.B = d;
        this.C = e;
        this.j = f;
        this.g = [];
        this.h = null;
        this.s = !1;
      }
    },
    Mf = class extends Lf {
      constructor(a, b, c = 1e3, d = 100, e = !1, f) {
        super(a, b, c, d, e && !0, f);
      }
    };
  function Nf(a, b) {
    var c = Date.now();
    c = Number.isFinite(c) ? Math.round(c) : 0;
    b = wc(b, 1, c);
    c = Id(window);
    b = wc(b, 2, c);
    return wc(b, 6, a.s);
  }
  function Of(a, b, c, d, e, f) {
    if (a.i) {
      var g = gf(ff(new hf(), b), c);
      b = pf(mf(lf(of(nf(new qf(), d), e), g), a.g.slice()), f);
      b = uf(b);
      Ff(a.h, Nf(a, b));
      if (
        1 === f ||
        3 === f ||
        (4 === f && !a.g.some((h) => M(h, 1) === M(g, 1) && M(h, 2) === c))
      )
        a.g.push(g), 100 < a.g.length && a.g.shift();
    }
  }
  function Pf(a, b, c, d) {
    if (a.i && a.j) {
      var e = new tf();
      b = qc(e, 2, b);
      c = qc(b, 3, c);
      d && C(c, 1, Ab(d), 0);
      d = new vf();
      d = pc(d, 7, wf, c);
      Ff(a.h, Nf(a, d));
    }
  }
  function Qf(a, b, c, d) {
    if (a.i) {
      var e = new ef();
      b = y(e, 1, Ab(b));
      c = y(b, 2, Ab(c));
      d = y(c, 3, xb(d));
      c = new vf();
      d = pc(c, 8, wf, d);
      Ff(a.h, Nf(a, d));
    }
  }
  var Rf = class {
    constructor(a, b, c, d = new Mf(6, "unknown", b)) {
      this.s = a;
      this.j = c;
      this.h = d;
      this.g = [];
      this.i = 0 < a && ud() < 1 / a;
    }
  };
  var Sf = class {
    constructor() {
      this.I = { [3]: {}, [4]: {}, [5]: {} };
    }
  };
  var Tf = /^true$/.test("false");
  function Uf(a, b) {
    switch (b) {
      case 1:
        return M(a, kc(a, Pe, 1));
      case 2:
        return M(a, kc(a, Pe, 2));
      case 3:
        return M(a, kc(a, Pe, 3));
      case 6:
        return M(a, kc(a, Pe, 6));
      default:
        return null;
    }
  }
  function Vf(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return K(a, 1);
      case 7:
        return L(a, 3);
      case 2:
        return uc(a, 2);
      case 3:
        return L(a, 3);
      case 6:
        return cc(a, 4, Ib);
      default:
        return null;
    }
  }
  const Wf = Mc(() => {
    if (!Tf) return {};
    try {
      var a = window;
      try {
        var b = a.sessionStorage;
      } catch {
        b = null;
      }
      if ((b = b?.getItem("GGDFSSK"))) return JSON.parse(b);
    } catch {}
    return {};
  });
  function Xf(a, b, c, d = 0) {
    P($f).i[d] = P($f).i[d]?.add(b) ?? new Set().add(b);
    const e = Wf();
    if (null != e[b]) return e[b];
    b = ag(d)[b];
    if (!b) return c;
    b = Oe(JSON.stringify(b));
    b = bg(b);
    a = Vf(b, a);
    return null != a ? a : c;
  }
  function bg(a) {
    const b = P(Sf).I;
    if (b) {
      const c = La(F(a, Me, 5), (d) => Ke(D(d, De, 1), b));
      if (c) return c.getValue() ?? null;
    }
    return D(a, Le, 4) ?? null;
  }
  class $f {
    constructor() {
      this.h = {};
      this.j = [];
      this.i = {};
      this.g = new Map();
    }
  }
  function cg(a, b = !1, c) {
    return !!Xf(1, a, b, c);
  }
  function dg(a, b = 0, c) {
    a = Number(Xf(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function eg(a, b = "", c) {
    a = Xf(3, a, b, c);
    return "string" === typeof a ? a : b;
  }
  function fg(a, b = [], c) {
    a = Xf(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function ag(a) {
    return P($f).h[a] || (P($f).h[a] = {});
  }
  function gg(a, b) {
    const c = ag(b);
    vd(a, (d, e) => (c[e] = d));
  }
  function hg(a, b, c, d, e = !1) {
    const f = [],
      g = [];
    Ha(b, (h) => {
      const k = ag(h);
      Ha(a, (l) => {
        var m = lc(l, Pe);
        const n = Uf(l, m);
        if (n) {
          var t = P($f).g.get(h)?.get(n)?.slice(0) ?? [];
          a: {
            const v = new rf();
            switch (m) {
              case 1:
                ic(v, 1, sf, xb(n));
                break;
              case 2:
                ic(v, 2, sf, xb(n));
                break;
              case 3:
                ic(v, 3, sf, xb(n));
                break;
              case 6:
                ic(v, 4, sf, xb(n));
                break;
              default:
                m = void 0;
                break a;
            }
            hc(v, 5, t, zb);
            m = v;
          }
          if ((t = m)) t = !!P($f).i[h]?.has(n);
          t && f.push(m);
          if ((t = m)) t = !!P($f).g.get(h)?.has(n);
          t && g.push(m);
          e ||
            ((m = P($f)),
            m.g.has(h) || m.g.set(h, new Map()),
            m.g.get(h).has(n) || m.g.get(h).set(n, []),
            d && m.g.get(h).get(n).push(d));
          k[n] = l.toJSON();
        }
      });
    });
    (f.length || g.length) && Pf(c, f, g, d ?? void 0);
  }
  function ig(a, b) {
    const c = ag(b);
    Ha(a, (d) => {
      var e = Oe(JSON.stringify(d));
      const f = lc(e, Pe);
      (e = Uf(e, f)) && (c[e] || (c[e] = d));
    });
  }
  function jg() {
    return Ja(Object.keys(P($f).h), (a) => Number(a));
  }
  function kg(a) {
    Ma(P($f).j, a) || gg(ag(4), a);
  }
  function T(a, b, c) {
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b });
  }
  function lg(a, b, c) {
    return b[a] || c;
  }
  function mg(a) {
    T(5, cg, a);
    T(6, dg, a);
    T(7, eg, a);
    T(8, fg, a);
    T(13, ig, a);
    T(15, kg, a);
  }
  function ng(a) {
    T(
      4,
      (b) => {
        P(Sf).I = b;
      },
      a
    );
    T(
      9,
      (b, c) => {
        var d = P(Sf);
        null == d.I[3][b] && (d.I[3][b] = c);
      },
      a
    );
    T(
      10,
      (b, c) => {
        var d = P(Sf);
        null == d.I[4][b] && (d.I[4][b] = c);
      },
      a
    );
    T(
      11,
      (b, c) => {
        var d = P(Sf);
        null == d.I[5][b] && (d.I[5][b] = c);
      },
      a
    );
    T(
      14,
      (b) => {
        var c = P(Sf);
        for (const d of [3, 4, 5]) Object.assign(c.I[d], b[d]);
      },
      a
    );
  }
  function og(a) {
    a.hasOwnProperty("init-done") ||
      Object.defineProperty(a, "init-done", { value: !0 });
  }
  function pg(a, b, c) {
    a.i = lg(1, b, () => {});
    a.j = (d, e) => lg(2, b, () => [])(d, c, e);
    a.g = () => lg(3, b, () => [])(c);
    a.h = (d) => {
      lg(16, b, () => {})(d, c);
    };
  }
  class qg {
    i() {}
    h() {}
    j() {
      return [];
    }
    g() {
      return [];
    }
  }
  function ze(a, b, c, d = !1, e) {
    if ((d ? a.g : Math.random()) < (e || 0.01))
      try {
        let f;
        c instanceof xe
          ? (f = c)
          : ((f = new xe()),
            vd(c, (h, k) => {
              var l = f;
              const m = l.j++;
              h = se(k, h);
              l.g.push(m);
              l.h[m] = h;
            }));
        const g = we(f, "/pagead/gen_204?id=" + b + "&");
        g && Ld(p, g);
      } catch (f) {}
  }
  function rg(a, b) {
    0 <= b && 1 >= b && (a.g = b);
  }
  class sg {
    constructor() {
      this.g = Math.random();
    }
  }
  let tg, ug;
  const vg = new re(window);
  ((a) => {
    tg = a ?? new sg();
    "number" !== typeof window.google_srt &&
      (window.google_srt = Math.random());
    rg(tg, window.google_srt);
    ug = new Ae(tg, !0, vg);
    ug.Da(() => {});
    ug.j(!0);
    "complete" == window.document.readyState
      ? window.google_measure_js_timing || qe(vg)
      : vg.g &&
        Oc(window, "load", () => {
          window.google_measure_js_timing || qe(vg);
        });
  })();
  var wg = {
    Yb: 0,
    Xb: 1,
    Ub: 2,
    Pb: 3,
    Vb: 4,
    Qb: 5,
    Wb: 6,
    Sb: 7,
    Tb: 8,
    Ob: 9,
    Rb: 10,
    Zb: 11,
  };
  var xg = { bc: 0, dc: 1, ac: 2 };
  function yg(a) {
    if (0 != a.g) throw Error("Already resolved/rejected.");
  }
  var Bg = class {
    constructor() {
      this.h = new zg(this);
      this.g = 0;
    }
    resolve(a) {
      yg(this);
      this.g = 1;
      this.j = a;
      Ag(this.h);
    }
  };
  function Ag(a) {
    switch (a.g.g) {
      case 0:
        break;
      case 1:
        a.h && a.h(a.g.j);
        break;
      case 2:
        a.i && a.i(a.g.i);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  var zg = class {
    constructor(a) {
      this.g = a;
    }
    then(a, b) {
      if (this.h) throw Error("Then functions already set.");
      this.h = a;
      this.i = b;
      Ag(this);
    }
  };
  const Cg = class {
    constructor(a) {
      this.g = a.slice(0);
    }
    forEach(a) {
      this.g.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new Cg(Ia(this.g, a));
    }
    apply(a) {
      return new Cg(a(this.g.slice(0)));
    }
    get(a) {
      return this.g[a];
    }
    add(a) {
      const b = this.g.slice(0);
      b.push(a);
      return new Cg(b);
    }
  };
  function Dg(a, b) {
    for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
  }
  const Fg = class {
    constructor() {
      this.g = {};
      this.h = {};
    }
    set(a, b) {
      const c = Eg(a);
      this.g[c] = b;
      this.h[c] = a;
    }
    get(a, b) {
      a = Eg(a);
      return void 0 !== this.g[a] ? this.g[a] : b;
    }
    clear() {
      this.g = {};
      this.h = {};
    }
  };
  function Eg(a) {
    return a instanceof Object ? String(ea(a)) : a + "";
  }
  function Gg(a) {
    return new Hg({ value: a }, null);
  }
  function Ig(a) {
    return new Hg(null, a);
  }
  function Jg(a) {
    try {
      return Gg(a());
    } catch (b) {
      return Ig(b);
    }
  }
  function Kg(a) {
    return null != a.g ? a.getValue() : null;
  }
  function Lg(a, b) {
    null != a.g && b(a.getValue());
    return a;
  }
  function Mg(a, b) {
    null != a.g || b(a.h);
    return a;
  }
  class Hg {
    constructor(a, b) {
      this.g = a;
      this.h = b;
    }
    getValue() {
      return this.g.value;
    }
    map(a) {
      return null != this.g
        ? ((a = a(this.getValue())), a instanceof Hg ? a : Gg(a))
        : this;
    }
  }
  const Ng = class {
    constructor(a) {
      this.g = new Fg();
      if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.g.set(a, !0);
    }
    contains(a) {
      return void 0 !== this.g.g[Eg(a)];
    }
  };
  class Og {
    constructor() {
      this.g = new Fg();
    }
    set(a, b) {
      let c = this.g.get(a);
      c || ((c = new Ng()), this.g.set(a, c));
      c.add(b);
    }
  }
  var U = class extends N {
    getId() {
      return H(this, 3);
    }
  };
  U.u = [4];
  class Pg {
    constructor({ mb: a, ec: b, rc: c, Db: d }) {
      this.g = b;
      this.j = new Cg(a || []);
      this.i = d;
      this.h = c;
    }
  }
  const Rg = (a) => {
      const b = [],
        c = a.j;
      c && c.g.length && b.push({ V: "a", da: Qg(c) });
      null != a.g && b.push({ V: "as", da: a.g });
      null != a.h && b.push({ V: "i", da: String(a.h) });
      null != a.i && b.push({ V: "rp", da: String(a.i) });
      b.sort(function (d, e) {
        return d.V.localeCompare(e.V);
      });
      b.unshift({ V: "t", da: "aa" });
      return b;
    },
    Qg = (a) => {
      a = a.g.slice(0).map(Sg);
      a = JSON.stringify(a);
      return wd(a);
    },
    Sg = (a) => {
      const b = {};
      null != H(a, 7) && (b.q = H(a, 7));
      null != G(a, 2) && (b.o = G(a, 2));
      null != G(a, 5) && (b.p = G(a, 5));
      return b;
    };
  var Tg = class extends N {
    setLocation(a) {
      return y(this, 1, xb(a));
    }
  };
  function Ug(a) {
    const b = [].slice.call(arguments).filter(Lc((e) => null === e));
    if (!b.length) return null;
    let c = [],
      d = {};
    b.forEach((e) => {
      c = c.concat(e.Wa || []);
      d = Object.assign(d, e.gb);
    });
    return new Vg(c, d);
  }
  function Wg(a) {
    switch (a) {
      case 1:
        return new Vg(null, { google_ad_semantic_area: "mc" });
      case 2:
        return new Vg(null, { google_ad_semantic_area: "h" });
      case 3:
        return new Vg(null, { google_ad_semantic_area: "f" });
      case 4:
        return new Vg(null, { google_ad_semantic_area: "s" });
      default:
        return null;
    }
  }
  function Xg(a) {
    if (null == a) var b = null;
    else {
      var c = Rg(a);
      a = [];
      for (b of c)
        (c = String(b.da)),
          a.push(b.V + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
      b = new Vg(null, { google_placement_id: a.join("~") });
    }
    return b;
  }
  class Vg {
    constructor(a, b) {
      this.Wa = a;
      this.gb = b;
    }
  }
  const Yg = new Vg(["google-auto-placed"], {
    google_reactive_ad_format: 40,
    google_tag_origin: "qs",
  });
  var Zg = Ec(class extends N {});
  var $g = class extends N {};
  var ah = class extends N {};
  var bh = class extends N {};
  bh.u = [6, 7, 9, 10, 11];
  var ch = class extends N {};
  var dh = class extends N {
    constructor() {
      super();
    }
  };
  dh.u = [1];
  function eh(a) {
    if (1 != a.nodeType) var b = !1;
    else if ((b = "INS" == a.tagName))
      a: {
        b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
          if (!c[b[d]]) {
            b = !1;
            break a;
          }
        b = !0;
      }
    return b;
  }
  var fh = new O(1271),
    gh = new O(1322),
    hh = new Hc(1130, 100),
    ih = new Ic(14),
    jh = new O(1247, !0),
    kh = new O(1319, !0),
    lh = new O(1272),
    mh = new O(316),
    nh = new O(1207, !0),
    oh = new O(313),
    ph = new O(369),
    qh = new O(1289),
    rh = new O(1302),
    sh = new O(1318),
    th = new O(217),
    uh = new Ic(1307, "nohtml"),
    vh = new Hc(579884443),
    wh = new Jc(556791602, "1 2 4 6 8 9 10 11 12 13 14 15 16 17".split(" ")),
    xh = new O(579884441),
    yh = new Hc(579884442),
    zh = new O(506914611),
    Ah = new O(506852289),
    Bh = new O(1120),
    Ch = new O(567362967, !0),
    Dh = new O(45615403, !0),
    Eh = new Hc(1079, 5),
    Fh = new O(10009, !0),
    Gd = new Jc(1934, [
      "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
    ]),
    Gh = new O(84);
  function Hh(a, b, c) {
    switch (c) {
      case 0:
        b.parentNode && b.parentNode.insertBefore(a, b);
        break;
      case 3:
        if ((c = b.parentNode)) {
          var d = b.nextSibling;
          if (d && d.parentNode != c)
            for (; d && 8 == d.nodeType; ) d = d.nextSibling;
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    eh(b) &&
      (b.setAttribute("data-init-display", b.style.display),
      (b.style.display = "block"));
  }
  function Ih(a, b) {
    const c = (e) => {
        e = Jh(e);
        return null == e ? !1 : 0 < e;
      },
      d = (e) => {
        e = Jh(e);
        return null == e ? !1 : 0 > e;
      };
    switch (b) {
      case 0:
        return {
          init: Kh(a.previousSibling, c),
          ha: (e) => Kh(e.previousSibling, c),
          na: 0,
        };
      case 2:
        return {
          init: Kh(a.lastChild, c),
          ha: (e) => Kh(e.previousSibling, c),
          na: 0,
        };
      case 3:
        return {
          init: Kh(a.nextSibling, d),
          ha: (e) => Kh(e.nextSibling, d),
          na: 3,
        };
      case 1:
        return {
          init: Kh(a.firstChild, d),
          ha: (e) => Kh(e.nextSibling, d),
          na: 3,
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Jh(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
      ? a["google-ama-order-assurance"]
      : null;
  }
  function Kh(a, b) {
    return a && b(a) ? a : null;
  }
  var Lh = { rectangle: 1, horizontal: 2, vertical: 4 };
  var Mh = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5,
    full_page: 6,
    side_rails: 7,
  };
  function Nh(a) {
    a = a.document;
    let b = {};
    a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return b || {};
  }
  function Oh(a) {
    return Nh(a).clientWidth;
  }
  function Ph(a, b) {
    do {
      const c = td(a, b);
      if (c && "fixed" == c.position) return !1;
    } while ((a = a.parentElement));
    return !0;
  }
  function Qh(a, b) {
    var c = ["width", "height"];
    for (let e = 0; e < c.length; e++) {
      const f = "google_ad_" + c[e];
      if (!b.hasOwnProperty(f)) {
        var d = R(a[c[e]]);
        d = null === d ? null : Math.round(d);
        null != d && (b[f] = d);
      }
    }
  }
  function Rh(a, b) {
    return !(
      (yd.test(b.google_ad_width) || xd.test(a.style.width)) &&
      (yd.test(b.google_ad_height) || xd.test(a.style.height))
    );
  }
  function Sh(a, b) {
    return (a = Th(a, b)) ? a.y : 0;
  }
  function Th(a, b) {
    try {
      const c = b.document.documentElement.getBoundingClientRect(),
        d = a.getBoundingClientRect();
      return { x: d.left - c.left, y: d.top - c.top };
    } catch (c) {
      return null;
    }
  }
  function Uh(a, b, c, d, e) {
    if (a !== a.top) return qd(a) ? 3 : 16;
    if (!(488 > Oh(a))) return 4;
    if (!(a.innerHeight >= a.innerWidth)) return 5;
    const f = Oh(a);
    if (!f || (f - c) / f > d) a = 6;
    else {
      if ((c = "true" !== e.google_full_width_responsive))
        a: {
          c = b.parentElement;
          for (b = Oh(a); c; c = c.parentElement)
            if (
              (d = td(c, a)) &&
              (e = R(d.width)) &&
              !(e >= b) &&
              "visible" !== d.overflow
            ) {
              c = !0;
              break a;
            }
          c = !1;
        }
      a = c ? 7 : !0;
    }
    return a;
  }
  function Vh(a, b, c, d) {
    const e = Uh(b, c, a, 0.3, d);
    !0 !== e
      ? (a = e)
      : "true" === d.google_full_width_responsive || Ph(c, b)
      ? ((b = Oh(b)),
        (a = b - a),
        (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10))
      : (a = 9);
    return a;
  }
  function Wh(a, b, c) {
    a = a.style;
    "rtl" === b ? (a.marginRight = c) : (a.marginLeft = c);
  }
  function Xh(a, b) {
    if (3 == b.nodeType) return /\S/.test(b.data);
    if (1 == b.nodeType) {
      if (/^(script|style)$/i.test(b.nodeName)) return !1;
      let c;
      try {
        c = td(b, a);
      } catch (d) {}
      return (
        !c ||
        ("none" !== c.display &&
          !(
            "absolute" === c.position &&
            ("hidden" === c.visibility || "collapse" === c.visibility)
          ))
      );
    }
    return !1;
  }
  function Yh(a, b, c) {
    a = Th(b, a);
    return "rtl" === c ? -a.x : a.x;
  }
  function Zh(a, b) {
    var c;
    c = (c = b.parentElement) ? ((c = td(c, a)) ? c.direction : "") : "";
    if (c) {
      var d = b.style;
      d.border =
        d.borderStyle =
        d.outline =
        d.outlineStyle =
        d.transition =
          "none";
      d.borderSpacing = d.padding = "0";
      Wh(b, c, "0px");
      d.width = `${Oh(a)}px`;
      if (0 !== Yh(a, b, c)) {
        Wh(b, c, "0px");
        var e = Yh(a, b, c);
        Wh(b, c, `${-1 * e}px`);
        a = Yh(a, b, c);
        0 !== a && a !== e && Wh(b, c, `${(e / (a - e)) * e}px`);
      }
      d.zIndex = "30";
    }
  }
  var $h = class {
    constructor(a, b) {
      this.U = a;
      this.i = b;
    }
    height() {
      return this.i;
    }
    g(a) {
      return 300 < a && 300 < this.i ? this.U : Math.min(1200, Math.round(a));
    }
    h() {}
  };
  var ai = (a, b, c, d = (e) => e) => {
      let e;
      return (
        (a.style && a.style[c] && d(a.style[c])) ||
        ((e = td(a, b)) && e[c] && d(e[c])) ||
        null
      );
    },
    bi = (a) => (b) => b.U <= a,
    ei = (a, b, c, d) => {
      const e = a && ci(c, b),
        f = di(b, d);
      return (g) => !(e && g.height() >= f);
    },
    fi = (a) => (b) => b.height() <= a,
    ci = (a, b) => Sh(a, b) < Nh(b).clientHeight - 100,
    gi = (a, b) => {
      var c = ai(b, a, "height", R);
      if (c) return c;
      var d = b.style.height;
      b.style.height = "inherit";
      c = ai(b, a, "height", R);
      b.style.height = d;
      if (c) return c;
      c = Infinity;
      do
        (d = b.style && R(b.style.height)) && (c = Math.min(c, d)),
          (d = ai(b, a, "maxHeight", R)) && (c = Math.min(c, d));
      while ((b = b.parentElement) && "HTML" != b.tagName);
      return c;
    };
  const di = (a, b) => {
    const c = 0 == $d(a);
    return b && c ? Math.max(250, (2 * Nh(a).clientHeight) / 3) : 250;
  };
  var hi = {
    google_ad_channel: !0,
    google_ad_client: !0,
    google_ad_host: !0,
    google_ad_host_channel: !0,
    google_adtest: !0,
    google_tag_for_child_directed_treatment: !0,
    google_tag_for_under_age_of_consent: !0,
    google_tag_partner: !0,
    google_restrict_data_processing: !0,
    google_page_url: !0,
    google_debug_params: !0,
    google_shadow_mode: !0,
    google_adbreak_test: !0,
    google_ad_frequency_hint: !0,
    google_admob_interstitial_slot: !0,
    google_admob_rewarded_slot: !0,
    google_admob_ads_only: !0,
    google_ad_start_delay_hint: !0,
    google_max_ad_content_rating: !0,
    google_traffic_source: !0,
    google_overlays: !0,
    google_privacy_treatments: !0,
    google_xz: !0,
    google_ad_intent_query: !0,
  };
  const ii = RegExp("(^| )adsbygoogle($| )");
  function ji(a, b) {
    for (let c = 0; c < b.length; c++) {
      const d = b[c],
        e = ed(d.property);
      a[e] = d.value;
    }
  }
  var ki = class extends N {};
  var li = class extends N {};
  var mi = class extends N {
    g() {
      return bc(this, 23);
    }
  };
  var ni = class extends N {};
  var oi = class extends N {};
  var pi = class extends N {};
  var qi = class extends N {};
  var ri = class extends N {};
  var si = class extends N {
      getName() {
        return H(this, 4);
      }
    },
    ti = [1, 2, 3];
  var ui = class extends N {};
  ui.u = [2, 5, 6, 11];
  var vi = class extends N {};
  var xi = class extends N {
      g() {
        return vc(this, vi, 2, wi);
      }
    },
    wi = [1, 2];
  var yi = class extends N {
    g() {
      return D(this, xi, 3);
    }
  };
  yi.u = [1, 4];
  var zi = class extends N {},
    Ai = Ec(zi);
  zi.u = [1, 2, 5, 7];
  function Bi(a) {
    var b = [];
    Dg(a.getElementsByTagName("p"), function (c) {
      100 <= Ci(c) && b.push(c);
    });
    return b;
  }
  function Ci(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = 0;
    Dg(a.childNodes, function (c) {
      b += Ci(c);
    });
    return b;
  }
  function Di(a) {
    return 0 == a.length || isNaN(a[0])
      ? a
      : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Ei(a, b) {
    if (null == a.g) return b;
    switch (a.g) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.g);
    }
  }
  const Fi = class {
    constructor(a, b, c, d) {
      this.j = a;
      this.h = b;
      this.i = c;
      this.g = d;
    }
    query(a) {
      var b = [];
      try {
        b = a.querySelectorAll(this.j);
      } catch (f) {}
      if (!b.length) return [];
      a = Na(b);
      a = Ei(this, a);
      "number" === typeof this.h &&
        ((b = this.h),
        0 > b && (b += a.length),
        (a = 0 <= b && b < a.length ? [a[b]] : []));
      if ("number" === typeof this.i) {
        b = [];
        for (var c = 0; c < a.length; c++) {
          var d = Bi(a[c]),
            e = this.i;
          0 > e && (e += d.length);
          0 <= e && e < d.length && b.push(d[e]);
        }
        a = b;
      }
      return a;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: this.j,
        occurrenceIndex: this.h,
        paragraphIndex: this.i,
        ignoreMode: this.g,
      });
    }
  };
  class Gi {
    constructor() {
      var a = Ud`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
      this.g = null;
      this.i = !1;
      this.s = Math.random();
      this.h = this.J;
      this.B = a;
    }
    Da(a) {
      this.g = a;
    }
    j(a) {
      this.i = a;
    }
    hb(a) {
      this.h = a;
    }
    J(a, b, c = 0.01, d, e = "jserror") {
      if ((this.i ? this.s : Math.random()) > c) return !1;
      de(b) || (b = new ce(b, { context: a, id: e }));
      if (d || this.g) (b.meta = {}), this.g && this.g(b.meta), d && d(b.meta);
      p.google_js_errors = p.google_js_errors || [];
      p.google_js_errors.push(b);
      p.error_rep_loaded || (rd(p.document, this.B), (p.error_rep_loaded = !0));
      return !1;
    }
    ea(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.h(a, d, 0.01, c, "jserror")) throw d;
      }
    }
    oa(a, b) {
      return (...c) => this.ea(a, () => b.apply(void 0, c));
    }
    Y(a, b) {
      b.catch((c) => {
        c = c ? c : "unknown rejection";
        this.J(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0);
      });
    }
  }
  const Hi = (a, b) => {
    b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
    2048 > b.length && b.push(a);
  };
  var Ii = (a, b, c, d, e = !1) => {
      const f = d || window,
        g = "undefined" !== typeof queueMicrotask;
      return function () {
        e &&
          g &&
          queueMicrotask(() => {
            f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
            f.google_rum_task_id_counter += 1;
          });
        const h = ke();
        let k,
          l = 3;
        try {
          k = b.apply(this, arguments);
        } catch (m) {
          l = 13;
          if (!c) throw m;
          c(a, m);
        } finally {
          f.google_measure_js_timing &&
            h &&
            Hi(
              {
                label: a.toString(),
                value: h,
                duration: (ke() || 0) - h,
                type: l,
                ...(e &&
                  g && {
                    taskId: (f.google_rum_task_id_counter =
                      f.google_rum_task_id_counter || 1),
                  }),
              },
              f
            );
        }
        return k;
      };
    },
    Ji = (a, b) =>
      Ii(
        a,
        b,
        (c, d) => {
          new Gi().J(c, d);
        },
        void 0,
        !1
      );
  function Ki(a, b, c) {
    return Ii(a, b, void 0, c, !0).apply();
  }
  function Li(a) {
    if (!a) return null;
    var b = H(a, 7);
    if (H(a, 1) || a.getId() || 0 < cc(a, 4, Ib).length) {
      var c = H(a, 3),
        d = H(a, 1),
        e = cc(a, 4, Ib);
      b = G(a, 2);
      var f = G(a, 5);
      a = Mi(I(a, 6));
      var g = "";
      d && (g += d);
      c && (g += "#" + Di(c));
      if (e) for (c = 0; c < e.length; c++) g += "." + Di(e[c]);
      b = (e = g) ? new Fi(e, b, f, a) : null;
    } else b = b ? new Fi(b, G(a, 2), G(a, 5), Mi(I(a, 6))) : null;
    return b;
  }
  var Ni = { 1: 1, 2: 2, 3: 3, 0: 0 };
  function Mi(a) {
    return null == a ? a : Ni[a];
  }
  var Oi = { 1: 0, 2: 1, 3: 2, 4: 3 };
  function Pi(a) {
    return (a.google_ama_state = a.google_ama_state || {});
  }
  function Qi(a) {
    a = Pi(a);
    return (a.optimization = a.optimization || {});
  }
  var Ri = (a) => {
    switch (I(a, 8)) {
      case 1:
      case 2:
        if (null == a) var b = null;
        else
          (b = D(a, U, 1)),
            null == b
              ? (b = null)
              : ((a = I(a, 2)),
                (b = null == a ? null : new Pg({ mb: [b], Db: a })));
        return null != b
          ? Gg(b)
          : Ig(Error("Missing dimension when creating placement id"));
      case 3:
        return Ig(Error("Missing dimension when creating placement id"));
      default:
        return Ig(Error("Invalid type: " + I(a, 8)));
    }
  };
  var Si = (a, b) => {
    const c = [];
    let d = a;
    for (
      a = () => {
        c.push({ anchor: d.anchor, position: d.position });
        return d.anchor == b.anchor && d.position == b.position;
      };
      d;

    ) {
      switch (d.position) {
        case 1:
          if (a()) return c;
          d.position = 2;
        case 2:
          if (a()) return c;
          if (d.anchor.firstChild) {
            d = { anchor: d.anchor.firstChild, position: 1 };
            continue;
          } else d.position = 3;
        case 3:
          if (a()) return c;
          d.position = 4;
        case 4:
          if (a()) return c;
      }
      for (
        ;
        d &&
        !d.anchor.nextSibling &&
        d.anchor.parentNode != d.anchor.ownerDocument.body;

      ) {
        d = { anchor: d.anchor.parentNode, position: 3 };
        if (a()) return c;
        d.position = 4;
        if (a()) return c;
      }
      d && d.anchor.nextSibling
        ? (d = { anchor: d.anchor.nextSibling, position: 1 })
        : (d = null);
    }
    return c;
  };
  function Ti(a, b) {
    const c = new Og(),
      d = new Ng();
    b.forEach((e) => {
      if (vc(e, qi, 1, ti)) {
        e = vc(e, qi, 1, ti);
        if (
          D(e, $g, 1) &&
          D(D(e, $g, 1), U, 1) &&
          D(e, $g, 2) &&
          D(D(e, $g, 2), U, 1)
        ) {
          const g = Ui(a, D(D(e, $g, 1), U, 1)),
            h = Ui(a, D(D(e, $g, 2), U, 1));
          if (g && h)
            for (var f of Si(
              { anchor: g, position: I(D(e, $g, 1), 2) },
              { anchor: h, position: I(D(e, $g, 2), 2) }
            ))
              c.set(ea(f.anchor), f.position);
        }
        D(e, $g, 3) &&
          D(D(e, $g, 3), U, 1) &&
          (f = Ui(a, D(D(e, $g, 3), U, 1))) &&
          c.set(ea(f), I(D(e, $g, 3), 2));
      } else
        vc(e, ri, 2, ti)
          ? Vi(a, vc(e, ri, 2, ti), c)
          : vc(e, pi, 3, ti) && Wi(a, vc(e, pi, 3, ti), d);
    });
    return new Xi(c, d);
  }
  class Xi {
    constructor(a, b) {
      this.h = a;
      this.g = b;
    }
  }
  const Vi = (a, b, c) => {
      D(b, $g, 2)
        ? ((b = D(b, $g, 2)), (a = Ui(a, D(b, U, 1))) && c.set(ea(a), I(b, 2)))
        : D(b, U, 1) &&
          (a = Yi(a, D(b, U, 1))) &&
          a.forEach((d) => {
            d = ea(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3);
          });
    },
    Wi = (a, b, c) => {
      D(b, U, 1) &&
        (a = Yi(a, D(b, U, 1))) &&
        a.forEach((d) => {
          c.add(ea(d));
        });
    },
    Ui = (a, b) => ((a = Yi(a, b)) && 0 < a.length ? a[0] : null),
    Yi = (a, b) => ((b = Li(b)) ? b.query(a) : null);
  class V extends Error {
    constructor(a = "") {
      super();
      this.name = "TagError";
      this.message = a ? "adsbygoogle.push() error: " + a : "";
      Error.captureStackTrace
        ? Error.captureStackTrace(this, V)
        : (this.stack = Error().stack || "");
    }
  }
  let Zi, W;
  const $i = new re(p);
  var aj = (a) => {
    null != a && (p.google_measure_js_timing = a);
    p.google_measure_js_timing || qe($i);
  };
  ((a, b = !0) => {
    Zi = a || new sg();
    "number" !== typeof p.google_srt && (p.google_srt = Math.random());
    rg(Zi, p.google_srt);
    W = new Ae(Zi, b, $i);
    W.j(!0);
    "complete" == p.document.readyState
      ? aj()
      : $i.g &&
        Oc(p, "load", () => {
          aj();
        });
  })();
  var bj = (a, b, c) => W.ea(a, b, c),
    cj = (a, b, c) => {
      const d = P(qg).g();
      !b.eid && d.length && (b.eid = d.toString());
      ze(Zi, a, b, !0, c);
    },
    dj = (a, b) => {
      W.Y(a, b);
    },
    ej = (a, b, c, d) => {
      let e;
      de(b) ? (e = b.msg || ye(b.error)) : (e = ye(b));
      return 0 == e.indexOf("TagError")
        ? (((b instanceof ce ? b.error : b).pbr = !0), !1)
        : W.J(a, b, c, d);
    };
  var fj = class {
    constructor() {
      this.g = Hd();
      this.h = 0;
    }
  };
  function gj(a, b, c) {
    switch (c) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        b = b.parentElement;
        break;
      default:
        throw Error("Unknown RelativePosition: " + c);
    }
    for (c = []; b; ) {
      if (hj(b)) return !0;
      if (a.g.has(b)) break;
      c.push(b);
      b = b.parentElement;
    }
    c.forEach((d) => a.g.add(d));
    return !1;
  }
  function ij(a) {
    a = jj(a);
    return a.has("all") || a.has("after");
  }
  function kj(a) {
    a = jj(a);
    return a.has("all") || a.has("before");
  }
  function jj(a) {
    return (a = a && a.getAttribute("data-no-auto-ads"))
      ? new Set(a.split("|"))
      : new Set();
  }
  function hj(a) {
    const b = jj(a);
    return (
      a &&
      ("AUTO-ADS-EXCLUSION-AREA" === a.tagName ||
        b.has("inside") ||
        b.has("all"))
    );
  }
  var lj = class {
    constructor() {
      this.g = new Set();
      this.h = new fj();
    }
  };
  function mj(a, b) {
    if (!a) return !1;
    a = td(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return "left" == a || "right" == a;
  }
  function nj(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
    return a ? a : null;
  }
  function oj(a) {
    return !!a.nextSibling || (!!a.parentNode && oj(a.parentNode));
  }
  function pj(a = null) {
    ({ googletag: a } = a ?? window);
    return a?.apiReady ? a : void 0;
  }
  const qj = (a) => {
    const b = pj(a);
    return b
      ? Ia(
          Ja(b.pubads().getSlots(), (c) =>
            a.document.getElementById(c.getSlotElementId())
          ),
          (c) => null != c
        )
      : null;
  };
  var rj = (a) => {
    const b = [];
    for (const c of a) {
      a = !0;
      for (let d = 0; d < b.length; d++) {
        const e = b[d];
        if (e.contains(c)) {
          a = !1;
          break;
        }
        if (c.contains(e)) {
          a = !1;
          b[d] = c;
          break;
        }
      }
      a && b.push(c);
    }
    return b;
  };
  function sj(a, b) {
    if (a.j) return !0;
    a.j = !0;
    const c = F(a.i, bh, 1);
    a.h = 0;
    const d = tj(a.D);
    var e = a.g;
    var f;
    try {
      var g = (f = e.localStorage.getItem("google_ama_settings"))
        ? Zg(f)
        : null;
    } catch (n) {
      g = null;
    }
    f = null !== g && K(g, 2, !1);
    g = Pi(e);
    f && ((g.eatf = !0), Wd(7, [!0, 0, !1]));
    b: {
      var h = { ub: !1, vb: !1 },
        k = Na(e.document.querySelectorAll(".google-auto-placed"));
      const n = Na(
          e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")
        ),
        t = Na(
          e.document.querySelectorAll(
            "ins.adsbygoogle[data-ad-format=autorelaxed]"
          )
        );
      var l = (
        qj(e) || Na(e.document.querySelectorAll("div[id^=div-gpt-ad]"))
      ).concat(
        Na(e.document.querySelectorAll("iframe[id^=google_ads_iframe]"))
      );
      const v = Na(
          e.document.querySelectorAll(
            "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"
          )
        ),
        w = Na(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
        A = Na(e.document.querySelectorAll("div.googlepublisherpluginad")),
        z = Na(e.document.querySelectorAll("html > ins.adsbygoogle"));
      let E = [].concat(
        Na(
          e.document.querySelectorAll(
            "iframe[id^=aswift_],iframe[id^=google_ads_frame]"
          )
        ),
        Na(e.document.querySelectorAll("body ins.adsbygoogle"))
      );
      f = [];
      for (const [J, sa] of [
        [h.lc, k],
        [h.ub, n],
        [h.oc, t],
        [h.mc, l],
        [h.qc, v],
        [h.kc, w],
        [h.nc, A],
        [h.vb, z],
      ])
        !1 === J ? (f = f.concat(sa)) : (E = E.concat(sa));
      h = rj(E);
      f = rj(f);
      h = h.slice(0);
      for (m of f)
        for (f = 0; f < h.length; f++)
          (m.contains(h[f]) || h[f].contains(m)) && h.splice(f, 1);
      var m = h;
      e = Nh(e).clientHeight;
      for (f = 0; f < m.length; f++)
        if (!(m[f].getBoundingClientRect().top > e)) {
          e = !0;
          break b;
        }
      e = !1;
    }
    e = e ? (g.eatfAbg = !0) : !1;
    if (e) return !0;
    e = new Ng([2]);
    for (g = 0; g < c.length; g++) {
      m = a;
      h = c[g];
      f = g;
      l = b;
      if (
        D(h, Tg, 4) &&
        e.contains(I(D(h, Tg, 4), 1)) &&
        1 === I(h, 8) &&
        uj(h, d)
      ) {
        m.h++;
        if ((l = vj(m, h, l, d)))
          (k = Pi(m.g)),
            k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0),
            D(h, U, 1) &&
              null != G(D(h, U, 1), 5) &&
              (k.numPostPlacementsPlaced
                ? k.numPostPlacementsPlaced++
                : (k.numPostPlacementsPlaced = 1)),
            null == k.placed && (k.placed = []),
            k.numAutoAdsPlaced++,
            k.placed.push({ index: f, element: l.ga }),
            Wd(7, [!1, m.h, !0]);
        m = l;
      } else m = null;
      if (m) return !0;
    }
    Wd(7, [!1, a.h, !1]);
    return !1;
  }
  function vj(a, b, c, d) {
    if (!uj(b, d) || 1 != I(b, 8)) return null;
    d = D(b, U, 1);
    if (!d) return null;
    d = Li(d);
    if (!d) return null;
    d = d.query(a.g.document);
    if (0 == d.length) return null;
    d = d[0];
    var e = I(b, 2);
    e = Oi[e];
    e = void 0 === e ? null : e;
    var f;
    if (!(f = null == e)) {
      a: {
        f = a.g;
        switch (e) {
          case 0:
            f = mj(nj(d), f);
            break a;
          case 3:
            f = mj(d, f);
            break a;
          case 2:
            var g = d.lastChild;
            f = mj(g ? (1 == g.nodeType ? g : nj(g)) : null, f);
            break a;
        }
        f = !1;
      }
      if ((c = !f && !(!c && 2 == e && !oj(d))))
        (c = 1 == e || 2 == e ? d : d.parentNode),
          (c = !(c && !eh(c) && 0 >= c.offsetWidth));
      f = !c;
    }
    if (!(c = f)) {
      c = a.B;
      f = I(b, 2);
      g = c.h;
      var h = ea(d);
      g = g.g.get(h);
      if (!(g = g ? g.contains(f) : !1))
        a: {
          if (c.g.contains(ea(d)))
            switch (f) {
              case 2:
              case 3:
                g = !0;
                break a;
              default:
                g = !1;
                break a;
            }
          for (f = d.parentElement; f; ) {
            if (c.g.contains(ea(f))) {
              g = !0;
              break a;
            }
            f = f.parentElement;
          }
          g = !1;
        }
      c = g;
    }
    if (!c) {
      c = a.C;
      g = I(b, 2);
      a: switch (g) {
        case 1:
          f = ij(d.previousElementSibling) || kj(d);
          break a;
        case 4:
          f = ij(d) || kj(d.nextElementSibling);
          break a;
        case 2:
          f = kj(d.firstElementChild);
          break a;
        case 3:
          f = ij(d.lastElementChild);
          break a;
        default:
          throw Error("Unknown RelativePosition: " + g);
      }
      g = gj(c, d, g);
      c = c.h;
      cj(
        "ama_exclusion_zone",
        {
          typ: f ? (g ? "siuex" : "siex") : g ? "suex" : "noex",
          cor: c.g,
          num: c.h++,
          dvc: Bd(),
        },
        0.1
      );
      c = f || g;
    }
    if (c) return null;
    f = D(b, ah, 3);
    c = {};
    f && ((c.jb = H(f, 1)), (c.Ua = H(f, 2)), (c.pb = !!bc(f, 3)));
    f = D(b, Tg, 4) && I(D(b, Tg, 4), 2) ? I(D(b, Tg, 4), 2) : null;
    f = Wg(f);
    g = null != G(b, 12) ? G(b, 12) : null;
    g = null == g ? null : new Vg(null, { google_ml_rank: g });
    b = wj(a, b);
    b = Ug(a.s, f, g, b);
    f = a.g;
    a = a.H;
    h = f.document;
    var k = c.pb || !1;
    g = fd(new gd(h).g, "DIV");
    const l = g.style;
    l.width = "100%";
    l.height = "auto";
    l.clear = k ? "both" : "none";
    k = g.style;
    k.textAlign = "center";
    c.Cb && ji(k, c.Cb);
    h = fd(new gd(h).g, "INS");
    k = h.style;
    k.display = "block";
    k.margin = "auto";
    k.backgroundColor = "transparent";
    c.jb && (k.marginTop = c.jb);
    c.Ua && (k.marginBottom = c.Ua);
    c.lb && ji(k, c.lb);
    g.appendChild(h);
    c = { ya: g, ga: h };
    c.ga.setAttribute("data-ad-format", "auto");
    g = [];
    if ((h = b && b.Wa)) c.ya.className = h.join(" ");
    h = c.ga;
    h.className = "adsbygoogle";
    h.setAttribute("data-ad-client", a);
    g.length && h.setAttribute("data-ad-channel", g.join("+"));
    a: {
      try {
        var m = c.ya;
        if (Q(oh)) {
          {
            const A = Ih(d, e);
            if (A.init) {
              var n = A.init;
              for (d = n; (d = A.ha(d)); ) n = d;
              var t = { anchor: n, position: A.na };
            } else t = { anchor: d, position: e };
          }
          m["google-ama-order-assurance"] = 0;
          Hh(m, t.anchor, t.position);
        } else Hh(m, d, e);
        b: {
          var v = c.ga;
          v.dataset.adsbygoogleStatus = "reserved";
          v.className += " adsbygoogle-noablate";
          m = { element: v };
          var w = b && b.gb;
          if (v.hasAttribute("data-pub-vars")) {
            try {
              w = JSON.parse(v.getAttribute("data-pub-vars"));
            } catch (A) {
              break b;
            }
            v.removeAttribute("data-pub-vars");
          }
          w && (m.params = w);
          (f.adsbygoogle = f.adsbygoogle || []).push(m);
        }
      } catch (A) {
        (v = c.ya) &&
          v.parentNode &&
          ((w = v.parentNode),
          w.removeChild(v),
          eh(w) &&
            (w.style.display = w.getAttribute("data-init-display") || "none"));
        v = !1;
        break a;
      }
      v = !0;
    }
    return v ? c : null;
  }
  function wj(a, b) {
    return Kg(
      Mg(Ri(b).map(Xg), (c) => {
        Pi(a.g).exception = c;
      })
    );
  }
  const xj = class {
    constructor(a, b, c, d, e) {
      this.g = a;
      this.H = b;
      this.i = c;
      this.s = e || null;
      (this.D = d)
        ? ((a = a.document), (d = F(d, si, 5)), (d = Ti(a, d)))
        : (d = Ti(a.document, []));
      this.B = d;
      this.C = new lj();
      this.h = 0;
      this.j = !1;
    }
  };
  function tj(a) {
    const b = {};
    a &&
      cc(a, 6, yb).forEach((c) => {
        b[c] = !0;
      });
    return b;
  }
  function uj(a, b) {
    return a && $b(a, Tg, 4) && b[I(D(a, Tg, 4), 2)] ? !1 : !0;
  }
  var yj = Ec(class extends N {});
  function zj(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    const c = b;
    return c ? Jg(() => yj(c)) : Gg(null);
  }
  function Aj() {
    if (Bj) return Bj;
    var a = Yd() || window;
    const b = a.google_persistent_state_async;
    return null != b &&
      "object" == typeof b &&
      null != b.S &&
      "object" == typeof b.S
      ? (Bj = b)
      : (a.google_persistent_state_async = Bj = new Cj());
  }
  function Dj(a, b, c) {
    b = Ej[b] || `google_ps_${b}`;
    a = a.S;
    const d = a[b];
    return void 0 === d ? ((a[b] = c()), a[b]) : d;
  }
  function Fj(a, b, c) {
    return Dj(a, b, () => c);
  }
  function Gj(a, b, c) {
    a.S[Ej[b] || `google_ps_${b}`] = c;
  }
  function Hj(a, b) {
    Gj(a, 38, b);
  }
  var Cj = class {
      constructor() {
        this.S = {};
      }
    },
    Bj = null;
  const Ej = {
    [8]: "google_prev_ad_formats_by_region",
    [9]: "google_prev_ad_slotnames_by_region",
  };
  function Ij(a) {
    var b = new Jj();
    return y(b, 5, ub(a));
  }
  var Jj = class extends N {
    constructor() {
      super();
    }
  };
  Jj.u = [10];
  function Kj() {
    this.s = this.s;
    this.i = this.i;
  }
  Kj.prototype.s = !1;
  function Lj(a, b) {
    a.s ? b() : (a.i || (a.i = []), a.i.push(b));
  }
  const Mj = (a) => {
    void 0 !== a.addtlConsent &&
      "string" !== typeof a.addtlConsent &&
      (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies &&
      "boolean" !== typeof a.gdprApplies &&
      (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
      (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
      ? 2
      : a.cmpStatus && "error" !== a.cmpStatus
      ? 0
      : 3;
  };
  function Nj(a) {
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = Mj(a));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState
      ? a.internalBlockOnErrors
        ? (Pd({ e: String(a.internalErrorState) }, "tcfe"), !1)
        : !0
      : "loaded" !== a.cmpStatus ||
        ("tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus)
      ? !1
      : !0;
  }
  function Oj(a) {
    if (a.g) return a.g;
    a.g = Ad(a.h, "__tcfapiLocator");
    return a.g;
  }
  function Pj(a) {
    return "function" === typeof a.h.__tcfapi || null != Oj(a);
  }
  function Qj(a, b, c, d) {
    c || (c = () => {});
    if ("function" === typeof a.h.__tcfapi) (a = a.h.__tcfapi), a(b, 2, c, d);
    else if (Oj(a)) {
      Rj(a);
      const e = ++a.H;
      a.C[e] = c;
      a.g &&
        a.g.postMessage(
          { __tcfapiCall: { command: b, version: 2, callId: e, parameter: d } },
          "*"
        );
    } else c({}, !1);
  }
  function Rj(a) {
    a.j ||
      ((a.j = (b) => {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
            .__tcfapiReturn;
          a.C[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }),
      Oc(a.h, "message", a.j));
  }
  class Sj extends Kj {
    constructor(a) {
      var b = {};
      super();
      this.h = a;
      this.g = null;
      this.C = {};
      this.H = 0;
      this.D = b.timeoutMs ?? 500;
      this.B = b.hc ?? !1;
      this.j = null;
    }
    addEventListener(a) {
      let b = { internalBlockOnErrors: this.B };
      const c = Nc(() => a(b));
      let d = 0;
      -1 !== this.D &&
        (d = setTimeout(() => {
          b.tcString = "tcunavailable";
          b.internalErrorState = 1;
          c();
        }, this.D));
      const e = (f, g) => {
        clearTimeout(d);
        f
          ? ((b = f),
            (b.internalErrorState = Mj(b)),
            (b.internalBlockOnErrors = this.B),
            (g && 0 === b.internalErrorState) ||
              ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
          : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
        a(b);
      };
      try {
        Qj(this, "addEventListener", e);
      } catch (f) {
        (b.tcString = "tcunavailable"),
          (b.internalErrorState = 3),
          d && (clearTimeout(d), (d = 0)),
          c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && Qj(this, "removeEventListener", null, a.listenerId);
    }
  }
  var Yj = ({ l: a, R: b, timeoutMs: c, ca: d, ia: e = !1, ja: f = !1 }) => {
      b = Tj({ l: a, R: b, ia: e, ja: f });
      null != b.g || "tcunav" != b.h.message
        ? d(b)
        : Uj(a, c)
            .then((g) => g.map(Vj))
            .then((g) => g.map((h) => Wj(a, h)))
            .then(d);
    },
    Tj = ({ l: a, R: b, ia: c = !1, ja: d = !1 }) => {
      if (!Zj({ l: a, R: b, ia: c, ja: d })) return Wj(a, Ij(!0));
      b = Aj();
      return (b = Fj(b, 24)) ? Wj(a, Vj(b)) : Ig(Error("tcunav"));
    };
  function Zj({ l: a, R: b, ia: c, ja: d }) {
    if (!(d = !d && Pj(new Sj(a)))) {
      if ((c = !c)) {
        if (b) {
          a = zj(a);
          if (null != a.g)
            if ((a = a.getValue()) && null != I(a, 1))
              b: switch (((a = I(a, 1)), a)) {
                case 1:
                  a = !0;
                  break b;
                default:
                  throw Error("Unhandled AutoGdprFeatureStatus: " + a);
              }
            else a = !1;
          else W.J(806, a.h, void 0, void 0), (a = !1);
          b = !a;
        }
        c = b;
      }
      d = c;
    }
    return d ? !0 : !1;
  }
  function Uj(a, b) {
    return Promise.race([ak(), bk(a, b)]);
  }
  function ak() {
    return new Promise((a) => {
      var b = Aj();
      a = { resolve: a };
      const c = Fj(b, 25, []);
      c.push(a);
      Gj(b, 25, c);
    }).then(ck);
  }
  function bk(a, b) {
    return new Promise((c) => {
      a.setTimeout(c, b, Ig(Error("tcto")));
    });
  }
  function ck(a) {
    return a ? Gg(a) : Ig(Error("tcnull"));
  }
  function Vj(a) {
    var b = {};
    if (Nj(a))
      if (!1 === a.gdprApplies) a = !0;
      else if (
        "tcunavailable" === a.tcString ||
        (void 0 === a.gdprApplies && !b.ic) ||
        "string" !== typeof a.tcString ||
        !a.tcString.length
      )
        a = !b.jc;
      else {
        b: {
          if (
            a.publisher &&
            a.publisher.restrictions &&
            ((b = a.publisher.restrictions["1"]), void 0 !== b)
          ) {
            b = b["755"];
            break b;
          }
          b = void 0;
        }
        0 === b
          ? (a = !1)
          : a.purpose && a.vendor
          ? ((b = a.vendor.consents),
            (b = !(!b || !b["755"])) &&
            a.purposeOneTreatment &&
            "CH" === a.publisherCC
              ? (a = !0)
              : (b && ((a = a.purpose.consents), (b = !(!a || !a["1"]))),
                (a = b)))
          : (a = !0);
      }
    else a = !1;
    return Ij(a);
  }
  function Wj(a, b) {
    return (a = Sd(b, a)) ? Gg(a) : Ig(Error("unav"));
  }
  var dk = class extends N {};
  dk.u = [1, 2, 3];
  var ek = class extends N {};
  ek.u = [1, 2, 3];
  var fk = class extends N {
    g() {
      return D(this, dk, 2);
    }
    h() {
      return D(this, ek, 3);
    }
  };
  const gk = class {
    constructor(a) {
      this.exception = a;
    }
  };
  function hk(a, b) {
    try {
      var c = a.h,
        d = c.resolve,
        e = a.g;
      Pi(e.g);
      F(e.i, bh, 1);
      d.call(c, new gk(b));
    } catch (f) {
      (a = a.h), (b = f), yg(a), (a.g = 2), (a.i = b), Ag(a.h);
    }
  }
  var ik = class {
    constructor(a, b, c) {
      this.i = a;
      this.g = b;
      this.h = c;
    }
    start() {
      this.j();
    }
    j() {
      try {
        switch (this.i.document.readyState) {
          case "complete":
          case "interactive":
            sj(this.g, !0);
            hk(this);
            break;
          default:
            sj(this.g, !1)
              ? hk(this)
              : this.i.setTimeout(ka(this.j, this), 100);
        }
      } catch (a) {
        hk(this, a);
      }
    }
  };
  var jk = class extends N {
    constructor() {
      super();
    }
    getVersion() {
      return sc(G(this, 2));
    }
  };
  jk.u = [3];
  function kk(a) {
    return Ra(0 !== a.length % 4 ? a + "A" : a)
      .map((b) => b.toString(2).padStart(8, "0"))
      .join("");
  }
  function lk(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error(`Invalid input [${a}] not a bit string.`);
    return parseInt(a, 2);
  }
  function mk(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error(`Invalid input [${a}] not a bit string.`);
    const b = [1, 2, 3, 5];
    let c = 0;
    for (let d = 0; d < a.length - 1; d++)
      b.length <= d && b.push(b[d - 1] + b[d - 2]),
        (c += parseInt(a[d], 2) * b[d]);
    return c;
  }
  function nk(a) {
    var b = kk(a),
      c = lk(b.slice(0, 6));
    a = lk(b.slice(6, 12));
    var d = new jk();
    c = C(d, 1, Ab(c), 0);
    a = C(c, 2, Ab(a), 0);
    b = b.slice(12);
    c = lk(b.slice(0, 12));
    d = [];
    let e = b.slice(12).replace(/0+$/, "");
    for (let k = 0; k < c; k++) {
      if (0 === e.length)
        throw Error(
          `Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`
        );
      var f = 0 === lk(e[0]);
      e = e.slice(1);
      var g = ok(e, b),
        h = 0 === d.length ? 0 : d[d.length - 1];
      h = mk(g) + h;
      e = e.slice(g.length);
      if (f) d.push(h);
      else {
        f = ok(e, b);
        g = mk(f);
        for (let l = 0; l <= g; l++) d.push(h + l);
        e = e.slice(f.length);
      }
    }
    if (0 < e.length)
      throw Error(
        `Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`
      );
    return hc(a, 3, d, zb);
  }
  function ok(a, b) {
    const c = a.indexOf("11");
    if (-1 === c)
      throw Error(
        `Expected section bitstring but not found in [${a}] part of [${b}]`
      );
    return a.slice(0, c + 2);
  }
  var pk = "a".charCodeAt(),
    qk = Uc(wg),
    rk = Uc(xg);
  function sk() {
    var a = new tk();
    return wc(a, 1, 0);
  }
  function uk(a) {
    const b = tc(a, 1);
    a = sc(G(a, 2));
    return new Date(1e3 * b + a / 1e6);
  }
  var tk = class extends N {};
  function vk(a, b) {
    if (a.g + b > a.h.length)
      throw Error("Requested length " + b + " is past end of string.");
    const c = a.h.substring(a.g, a.g + b);
    a.g += b;
    return parseInt(c, 2);
  }
  function wk(a) {
    let b = vk(a, 12);
    const c = [];
    for (; b--; ) {
      var d = !0 === !!vk(a, 1),
        e = vk(a, 16);
      if (d) for (d = vk(a, 16); e <= d; e++) c.push(e);
      else c.push(e);
    }
    c.sort((f, g) => f - g);
    return c;
  }
  function xk(a, b, c) {
    const d = [];
    for (let e = 0; e < b; e++)
      if (vk(a, 1)) {
        const f = e + 1;
        if (c && -1 === c.indexOf(f))
          throw Error(`ID: ${f} is outside of allowed values!`);
        d.push(f);
      }
    return d;
  }
  function yk(a) {
    const b = vk(a, 16);
    return !0 === !!vk(a, 1)
      ? ((a = wk(a)),
        a.forEach((c) => {
          if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }),
        a)
      : xk(a, b);
  }
  class zk {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.h = a;
      this.g = 0;
    }
    skip(a) {
      this.g += a;
    }
  }
  var Bk = (a) => {
    try {
      var b = Ra(a.split(".")[0])
        .map((d) => d.toString(2).padStart(8, "0"))
        .join("");
      const c = new zk(b);
      b = {};
      b.tcString = a;
      b.gdprApplies = !0;
      c.skip(78);
      b.cmpId = vk(c, 12);
      b.cmpVersion = vk(c, 12);
      c.skip(30);
      b.tcfPolicyVersion = vk(c, 6);
      b.isServiceSpecific = !!vk(c, 1);
      b.useNonStandardStacks = !!vk(c, 1);
      b.specialFeatureOptins = Ak(xk(c, 12, rk), rk);
      b.purpose = {
        consents: Ak(xk(c, 24, qk), qk),
        legitimateInterests: Ak(xk(c, 24, qk), qk),
      };
      b.purposeOneTreatment = !!vk(c, 1);
      b.publisherCC =
        String.fromCharCode(pk + vk(c, 6)) + String.fromCharCode(pk + vk(c, 6));
      b.vendor = {
        consents: Ak(yk(c), null),
        legitimateInterests: Ak(yk(c), null),
      };
      return b;
    } catch (c) {
      return null;
    }
  };
  const Ak = (a, b) => {
    const c = {};
    if (Array.isArray(b) && 0 !== b.length)
      for (const d of b) c[d] = -1 !== a.indexOf(d);
    else for (const d of a) c[d] = !0;
    delete c[0];
    return c;
  };
  var Ck = class extends N {
    g() {
      return null != H(this, 2);
    }
  };
  var Dk = class extends N {
    g() {
      return null != H(this, 2);
    }
  };
  var Ek = class extends N {};
  var Fk = class extends N {},
    Gk = Ec(Fk);
  Fk.u = [7];
  function Hk(a) {
    a = Ik(a);
    try {
      var b = a ? Gk(a) : null;
    } catch (c) {
      b = null;
    }
    return b ? D(b, Ek, 4) || null : null;
  }
  function Ik(a) {
    a = new Rd(a).get("FCCDCF", "");
    if (a)
      if (a.startsWith("%"))
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          b = null;
        }
      else b = a;
    else b = null;
    return b;
  }
  function Jk(a) {
    a.__uspapiPostMessageReady || Kk(new Lk(a));
  }
  function Kk(a) {
    a.g = (b) => {
      const c = "string" === typeof b.data;
      let d;
      try {
        d = c ? JSON.parse(b.data) : b.data;
      } catch (f) {
        return;
      }
      const e = d.__uspapiCall;
      e &&
        "getUSPData" === e.command &&
        a.l.__uspapi(e.command, e.version, (f, g) => {
          const h = {};
          h.__uspapiReturn = { returnValue: f, success: g, callId: e.callId };
          f = c ? JSON.stringify(h) : h;
          b.source &&
            "function" === typeof b.source.postMessage &&
            b.source.postMessage(f, b.origin);
          return f;
        });
    };
    a.l.addEventListener("message", a.g);
    a.l.__uspapiPostMessageReady = !0;
  }
  var Lk = class {
    constructor(a) {
      this.l = a;
      this.g = null;
    }
  };
  Uc(wg).map((a) => Number(a));
  Uc(xg).map((a) => Number(a));
  function Mk(a) {
    a.__tcfapiPostMessageReady || Nk(new Ok(a));
  }
  function Nk(a) {
    a.h = (b) => {
      const c = "string" == typeof b.data;
      let d;
      try {
        d = c ? JSON.parse(b.data) : b.data;
      } catch (f) {
        return;
      }
      const e = d.__tcfapiCall;
      !e ||
        ("ping" !== e.command &&
          "addEventListener" !== e.command &&
          "removeEventListener" !== e.command) ||
        a.g.__tcfapi(
          e.command,
          e.version,
          (f, g) => {
            const h = {};
            h.__tcfapiReturn =
              "removeEventListener" === e.command
                ? { success: f, callId: e.callId }
                : { returnValue: f, success: g, callId: e.callId };
            f = c ? JSON.stringify(h) : h;
            b.source &&
              "function" === typeof b.source.postMessage &&
              b.source.postMessage(f, b.origin);
            return f;
          },
          e.parameter
        );
    };
    a.g.addEventListener("message", a.h);
    a.g.__tcfapiPostMessageReady = !0;
  }
  var Ok = class {
    constructor(a) {
      this.g = a;
      this.h = null;
    }
  };
  var Pk = class extends N {};
  var Qk = class extends N {
      g() {
        return null != H(this, 1);
      }
    },
    Rk = Ec(Qk);
  Qk.u = [2];
  function Sk(a, b) {
    function c(l) {
      if (10 > l.length) return null;
      var m = f(l.slice(0, 4));
      m = g(m);
      l = f(l.slice(6, 10));
      l = h(l);
      return "1" + m + l + "N";
    }
    function d(l) {
      if (10 > l.length) return null;
      var m = f(l.slice(0, 6));
      m = g(m);
      l = f(l.slice(6, 10));
      l = h(l);
      return "1" + m + l + "N";
    }
    function e(l) {
      if (12 > l.length) return null;
      var m = f(l.slice(0, 6));
      m = g(m);
      l = f(l.slice(8, 12));
      l = h(l);
      return "1" + m + l + "N";
    }
    function f(l) {
      const m = [];
      let n = 0;
      for (let t = 0; t < l.length / 2; t++)
        m.push(lk(l.slice(n, n + 2))), (n += 2);
      return m;
    }
    function g(l) {
      return l.every((m) => 1 === m) ? "Y" : "N";
    }
    function h(l) {
      return l.some((m) => 1 === m) ? "Y" : "N";
    }
    if (0 === a.length) return null;
    a = a.split(".");
    if (2 < a.length) return null;
    a = kk(a[0]);
    const k = lk(a.slice(0, 6));
    a = a.slice(6);
    if (1 !== k) return null;
    switch (b) {
      case 8:
        return c(a);
      case 10:
      case 12:
      case 9:
        return d(a);
      case 11:
        return e(a);
      default:
        return null;
    }
  }
  var Tk = (a, b) => {
    const c = a.document,
      d = () => {
        if (!a.frames[b])
          if (c.body) {
            const e = sd("IFRAME", c);
            e.style.display = "none";
            e.style.width = "0px";
            e.style.height = "0px";
            e.style.border = "none";
            e.style.zIndex = "-1000";
            e.style.left = "-1000px";
            e.style.top = "-1000px";
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  };
  function Uk() {
    if (S === S.top && !S.__uspapi && !S.frames.__uspapiLocator) {
      var a = new Vk();
      Wk(a);
      Xk(a);
    }
  }
  function Wk(a) {
    !a.j ||
      a.g.__uspapi ||
      a.g.frames.__uspapiLocator ||
      ((a.g.__uspapiManager = "fc"),
      Tk(a.g, "__uspapiLocator"),
      ma("__uspapi", (...b) => Yk(a, ...b), a.g),
      Jk(a.g));
  }
  function Xk(a) {
    !a.h ||
      a.g.__tcfapi ||
      a.g.frames.__tcfapiLocator ||
      ((a.g.__tcfapiManager = "fc"),
      Tk(a.g, "__tcfapiLocator"),
      (a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || []),
      ma("__tcfapi", (...b) => Zk(a, ...b), a.g),
      Mk(a.g));
  }
  function Yk(a, b, c, d) {
    "function" === typeof d &&
      "getUSPData" === b &&
      d({ version: 1, uspString: a.j }, !0);
  }
  function $k(a) {
    if (!a?.g() || 0 === L(a, 1).length || 0 == F(a, Pk, 2).length) return null;
    const b = L(a, 1);
    let c;
    try {
      var d = nk(b.split("~")[0]);
      c = b.includes("~") ? b.split("~").slice(1) : [];
    } catch (e) {
      return null;
    }
    a = F(a, Pk, 2).reduce((e, f) => (tc(al(e), 1) > tc(al(f), 1) ? e : f));
    d = cc(d, 3, Bb).indexOf(sc(G(a, 1)));
    return -1 === d || d >= c.length
      ? null
      : { uspString: Sk(c[d], sc(G(a, 1))), xa: uk(al(a)) };
  }
  function bl(a) {
    a = a.find((b) => 13 === M(b, 1));
    if (a?.g())
      try {
        return Rk(L(a, 2));
      } catch (b) {}
    return null;
  }
  function al(a) {
    return $b(a, tk, 2) ? D(a, tk, 2) : sk();
  }
  function Zk(a, b, c, d, e = null) {
    if ("function" === typeof d)
      if (c && (2.2 < c || 1 >= c)) d(null, !1);
      else
        switch (((c = a.g.__tcfapiEventListeners), b)) {
          case "ping":
            d({
              gdprApplies: !0,
              cmpLoaded: !0,
              cmpStatus: "loaded",
              displayStatus: "disabled",
              apiVersion: "2.2",
              cmpVersion: 2,
              cmpId: 300,
            });
            break;
          case "addEventListener":
            b = c.push(d) - 1;
            a.h
              ? ((e = Bk(a.h)),
                (e.addtlConsent = null != a.i ? a.i : void 0),
                (e.cmpStatus = "loaded"),
                (e.eventStatus = "tcloaded"),
                null != b && (e.listenerId = b),
                (a = e))
              : (a = null);
            d(a, !0);
            break;
          case "removeEventListener":
            c[e] ? ((c[e] = null), d(!0)) : d(!1);
            break;
          case "getInAppTCData":
          case "getVendorList":
            d(null, !1);
            break;
          case "getTCData":
            d(null, !1);
        }
  }
  class Vk {
    constructor() {
      var a = S;
      this.g = a;
      var b = Ik(this.g.document);
      try {
        var c = b ? Gk(b) : null;
      } catch (e) {
        c = null;
      }
      (b = c)
        ? ((c = D(b, Dk, 5) || null),
          (b = F(b, Ck, 7)),
          (b = bl(b ?? [])),
          (c = { Va: c, Ya: b }))
        : (c = { Va: null, Ya: null });
      b = c;
      c = $k(b.Ya);
      b = b.Va;
      if (b?.g() && 0 !== L(b, 2).length) {
        var d = $b(b, tk, 1) ? D(b, tk, 1) : sk();
        b = { uspString: L(b, 2), xa: uk(d) };
      } else b = null;
      this.j =
        b && c
          ? c.xa > b.xa
            ? c.uspString
            : b.uspString
          : b
          ? b.uspString
          : c
          ? c.uspString
          : null;
      this.h = (c = Hk(a.document)) && null != H(c, 1) ? L(c, 1) : null;
      this.i = (a = Hk(a.document)) && null != H(a, 2) ? L(a, 2) : null;
    }
  }
  const cl = { google_ad_channel: !0, google_ad_host: !0 };
  function dl(a, b) {
    a.location.href &&
      a.location.href.substring &&
      (b.url = a.location.href.substring(0, 200));
    cj("ama", b, 0.01);
  }
  function el(a) {
    const b = {};
    vd(cl, (c, d) => {
      d in a && (b[d] = a[d]);
    });
    return b;
  }
  function fl(a) {
    const b = /[a-zA-Z0-9._~-]/,
      c = /%[89a-zA-Z]./;
    return a.replace(/(%[a-zA-Z0-9]{2})/g, (d) => {
      if (!d.match(c)) {
        const e = decodeURIComponent(d);
        if (e.match(b)) return e;
      }
      return d.toUpperCase();
    });
  }
  function gl(a) {
    let b = "";
    const c = /[/%?&=]/;
    for (let d = 0; d < a.length; ++d) {
      const e = a[d];
      b = e.match(c) ? b + e : b + encodeURIComponent(e);
    }
    return b;
  }
  function hl(a) {
    a = cc(a, 2, yb);
    if (!a) return !1;
    for (let b = 0; b < a.length; b++) if (1 == a[b]) return !0;
    return !1;
  }
  function il(a, b) {
    a = gl(fl(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
    const c = wd(a),
      d = jl(a);
    return (
      b.find((e) => {
        if ($b(e, oi, 7)) {
          var f = D(e, oi, 7);
          f = Cb(Yb(f, 1));
        } else f = Cb(Yb(e, 1));
        e = $b(e, oi, 7) ? I(D(e, oi, 7), 2) : 2;
        if ("number" !== typeof f) return !1;
        switch (e) {
          case 1:
            return f == c;
          case 2:
            return d[f] || !1;
        }
        return !1;
      }) || null
    );
  }
  function jl(a) {
    const b = {};
    for (;;) {
      b[wd(a)] = !0;
      if (!a) return b;
      a = a.substring(0, a.lastIndexOf("/"));
    }
  }
  var kl = (a) => {
    a = D(a, ni, 3);
    return !a || rc(a, 1) <= Date.now() ? !1 : !0;
  };
  function ll(a) {
    if (Q(mh)) var b = null;
    else
      try {
        b = a.getItem("google_ama_config");
      } catch (d) {
        b = null;
      }
    try {
      var c = b ? Ai(b) : null;
    } catch (d) {
      c = null;
    }
    return c;
  }
  var ml = class extends N {
    g() {
      return D(this, fk, 2);
    }
    h() {
      return K(this, 3);
    }
  };
  var nl = class extends N {
    g() {
      return cc(this, 1, Ib);
    }
    h() {
      return D(this, ml, 2);
    }
  };
  nl.u = [1];
  var ol = class extends N {
    getId() {
      return sc(G(this, 1));
    }
  };
  ol.u = [2];
  var pl = class extends N {};
  pl.u = [2];
  var ql = class extends N {};
  ql.u = [2];
  var rl = class extends N {
    g() {
      return tc(this, 2);
    }
    h() {
      return tc(this, 4);
    }
    i() {
      return K(this, 3);
    }
  };
  var sl = class extends N {};
  sl.u = [1, 4, 2, 3];
  var ul = class extends N {
    h() {
      return vc(this, ml, 13, tl);
    }
    j() {
      return void 0 !== ac(this, ml, kc(this, tl, 13));
    }
    g() {
      return vc(this, nl, 14, tl);
    }
    i() {
      return void 0 !== ac(this, nl, kc(this, tl, 14));
    }
  };
  ul.u = [19];
  var tl = [13, 14];
  let vl = void 0;
  function wl(a) {
    Ac(vl, Ce);
    vl = a;
  }
  function X(a) {
    return (a.google_ad_modifications = a.google_ad_modifications || {});
  }
  function xl(a) {
    a = X(a);
    const b = a.space_collapsing || "none";
    return a.remove_ads_by_default
      ? { Sa: !0, Ib: b, ua: a.ablation_viewport_offset }
      : null;
  }
  function yl(a, b) {
    a = X(a);
    a.had_ads_ablation = !0;
    a.remove_ads_by_default = !0;
    a.space_collapsing = "slot";
    a.ablation_viewport_offset = b;
  }
  function zl(a) {
    X(S).allow_second_reactive_tag = a;
  }
  function Al() {
    const a = X(window);
    a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
    return a.afg_slotcar_vars;
  }
  function Bl(a) {
    return X(a)?.head_tag_slot_vars?.google_ad_host ?? Cl(a);
  }
  function Cl(a) {
    return (
      a.document
        ?.querySelector('meta[name="google-adsense-platform-account"]')
        ?.getAttribute("content") ?? null
    );
  }
  const Dl = [2, 7, 1];
  var Gl = (a, b, c = "", d = null) =>
      1 === b && El(c, d)
        ? !0
        : Fl(a, c, (e) => Ka(F(e, Fc, 2), (f) => I(f, 1) === b)),
    El = (a, b) =>
      b
        ? b.j()
          ? K(b.h(), 1)
          : b.i() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a
          ? K(b.g().h(), 1)
          : !1
        : !1,
    Hl = (a, b) => {
      b = sc(G(b, 18));
      -1 !== b && (a.tmod = b);
    },
    Jl = (a) => {
      const b = qd(S) || S;
      return Il(b, a) ? !0 : Fl(S, "", (c) => Ka(cc(c, 3, yb), (d) => d === a));
    };
  function Il(a, b) {
    a =
      (a =
        (a = a.location && a.location.hash) &&
        a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
    return !!a && Ma(a.split(","), b.toString());
  }
  function Fl(a, b, c) {
    a = qd(a) || a;
    const d = Kl(a);
    b && (b = be(String(b)));
    return Tc(
      d,
      (e, f) =>
        Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
    );
  }
  function Kl(a) {
    a = Ll(a);
    const b = {};
    vd(a, (c, d) => {
      try {
        const e = new Gc(c);
        b[d] = e;
      } catch (e) {}
    });
    return b;
  }
  var Ll = (a) => {
    Ac(vl, Cc);
    a = Tj({ l: a, R: vl });
    return null != a.g ? Ml(a.getValue()) : {};
  };
  function Ml(a) {
    try {
      const b = a.getItem("google_adsense_settings");
      if (!b) return {};
      const c = JSON.parse(b);
      return c !== Object(c)
        ? {}
        : Sc(
            c,
            (d, e) =>
              Object.prototype.hasOwnProperty.call(c, e) &&
              "string" === typeof e &&
              Array.isArray(d)
          );
    } catch (b) {
      return {};
    }
  }
  function Nl(a) {
    cj("atf_ad_settings_from_ppabg", { p_s: a }, 0.01);
  }
  const Ol = (a) => {
      cj("overlay_settings_from_ppabg", { p_s: a }, 0.01);
    },
    Pl = (a, b) => {
      if (Bl(p)) return Dl;
      if (b?.j()) {
        var c = L(b.h(), 9);
        b = b?.h()?.g()?.h();
        if (!a || c != a || !b) return Dl;
        Ol(!1);
        return cc(b, 3, yb);
      }
      if (b?.i()) {
        c = b?.g()?.g();
        if (
          !c ||
          1 !== c.length ||
          !a ||
          c[0] !== a ||
          L(b, 17) != p.location.host
        )
          return Dl;
        a = b?.g()?.h()?.g()?.h();
        if (!a) return Dl;
        Ol(!0);
        return cc(a, 3, yb);
      }
      return Dl;
    };
  var Ql = (a, b) => {
    const c = [];
    a = Pl(a, b);
    a.includes(1) || c.push(1);
    a.includes(2) || c.push(2);
    a.includes(7) || c.push(7);
    return c;
  };
  function Rl(a, b, c, d) {
    Sl(new Tl(a, b, c, d));
  }
  function Sl(a) {
    Mg(
      Lg(Tj({ l: a.l, R: K(a.g, 6) }), (b) => {
        Ul(a, b, !0);
      }),
      () => {
        Vl(a);
      }
    );
  }
  function Ul(a, b, c) {
    Mg(
      Lg(Wl(b), (d) => {
        Xl("ok");
        a.h(d, { fromLocalStorage: !0 });
      }),
      () => {
        var d = a.l;
        try {
          b.removeItem("google_ama_config");
        } catch (e) {
          dl(d, { lserr: 1 });
        }
        c ? Vl(a) : a.h(null, null);
      }
    );
  }
  function Vl(a) {
    Mg(
      Lg(Yl(a), (b) => {
        a.h(b, { fromPABGSettings: !0 });
      }),
      () => {
        Zl(a);
      }
    );
  }
  function Wl(a) {
    return (a = (a = ll(a)) ? (kl(a) ? a : null) : null)
      ? Gg(a)
      : Ig(Error("invlocst"));
  }
  function Yl(a) {
    if (Bl(a.l) && !K(a.g, 22)) return Ig(Error("invtag"));
    a: {
      var b = a.l;
      var c = a.i;
      a = a.g;
      if (a?.j())
        (b = a?.h()?.g()?.g()) &&
        (0 < F(b, bh, 1).length || (Q(nh) && 0 < F(b, ch, 3).length))
          ? Nl(!1)
          : (b = null);
      else {
        if (a?.i()) {
          const d = a?.g()?.g(),
            e = a?.g()?.h()?.g()?.g();
          if (
            d &&
            1 === d.length &&
            d[0] === c &&
            e &&
            (0 < F(e, bh, 1).length || (Q(nh) && 0 < F(e, ch, 3).length)) &&
            L(a, 17) === b.location.host
          ) {
            Nl(!0);
            b = e;
            break a;
          }
        }
        b = null;
      }
    }
    b
      ? ((c = new zi()),
        (a = F(b, bh, 1)),
        (c = qc(c, 1, a)),
        (a = F(b, ui, 2)),
        (c = qc(c, 7, a)),
        Q(nh) &&
          0 < F(b, ch, 3).length &&
          ((a = new dh()), (b = F(b, ch, 3)), (b = qc(a, 1, b)), oc(c, 6, b)),
        (b = Gg(c)))
      : (b = Ig(Error("invtag")));
    return b;
  }
  function Zl(a) {
    Yj({
      l: a.l,
      R: K(a.g, 6),
      timeoutMs: 50,
      ca: (b) => {
        $l(a, b);
      },
    });
  }
  function $l(a, b) {
    Mg(
      Lg(b, (c) => {
        Ul(a, c, !1);
      }),
      (c) => {
        Xl(c.message);
        a.h(null, null);
      }
    );
  }
  function Xl(a) {
    cj(
      "abg::amalserr",
      { status: a, guarding: "true", timeout: 50, rate: 0.01 },
      0.01
    );
  }
  class Tl {
    constructor(a, b, c, d) {
      this.l = a;
      this.g = b;
      this.i = c;
      this.h = d;
    }
  }
  var cm = (a, b, c, d) => {
    try {
      const e = il(a, F(c, ui, 7));
      if (e && hl(e)) {
        H(e, 4) && (d = Ug(d, new Vg(null, { google_package: H(e, 4) })));
        const f = new xj(a, b, c, e, d);
        Ki(
          1e3,
          () => {
            var g = new Bg();
            new ik(a, f, g).start();
            return g.h;
          },
          a
        ).then(la(am, a), la(bm, a));
      }
    } catch (e) {
      dl(a, { atf: -1 });
    }
  };
  const am = (a) => {
      dl(a, { atf: 1 });
    },
    bm = (a, b) => {
      (a.google_ama_state = a.google_ama_state || {}).exception = b;
      dl(a, { atf: 0 });
    };
  function dm(a) {
    a.easpi = Q(Bh);
    a.asro = Q(zh);
    Q(Ah) && (a.sugawps = !0);
    const b = P(Qc).h(wh.g, wh.defaultValue);
    b.length && (a.seiel = b.join("~"));
    Q(xh) && ((a.slmct = Rc(yh)), (a.samct = Rc(vh)));
  }
  function em(a, b) {
    if (!a) return !1;
    a = a.hash;
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = fm(b);
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function fm(a) {
    let b = "";
    vd(a.split("_"), (c) => {
      b += c.substr(0, 2);
    });
    return b;
  }
  Pa || Ca();
  class gm {
    constructor() {
      this.promise = new Promise((a) => {
        this.resolve = a;
      });
    }
  }
  function hm() {
    const { promise: a, resolve: b } = new gm();
    return { promise: a, resolve: b };
  }
  function im(a, b, c = () => {}) {
    b.google_llp || (b.google_llp = {});
    b = b.google_llp;
    let d = b[a];
    if (d) return d;
    d = hm();
    b[a] = d;
    c();
    return d;
  }
  function jm(a, b, c) {
    return im(a, b, () => {
      rd(b.document, c);
    }).promise;
  }
  function km() {
    const a = {};
    P(Qc).g(ih.g, ih.defaultValue) && (a.bust = P(Qc).g(ih.g, ih.defaultValue));
    var b = Aj();
    b = Fj(b, 38, "");
    "" !== b && (a.sbust = b);
    return a;
  }
  const lm = new Map([
    [2, 7],
    [3, 1],
    [4, 3],
    [5, 12],
  ]);
  function mm(a, b, c) {
    c = Yc(c, km());
    if (1 === a) return { uc: rd(b.document, c), Ta: new Promise(() => {}) };
    if (lm.has(a)) return { Ta: jm(lm.get(a), b, c) };
    throw Error(`Unexpected chunkId: ${a}`);
  }
  function nm(a) {
    a.google_reactive_ads_global_state
      ? (null ==
          a.google_reactive_ads_global_state.sideRailProcessedFixedElements &&
          (a.google_reactive_ads_global_state.sideRailProcessedFixedElements =
            new Set()),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace &&
          (a.google_reactive_ads_global_state.sideRailAvailableSpace =
            new Map()),
        null == a.google_reactive_ads_global_state.sideRailPlasParam &&
          (a.google_reactive_ads_global_state.sideRailPlasParam = new Map()))
      : (a.google_reactive_ads_global_state = new om());
    return a.google_reactive_ads_global_state;
  }
  class om {
    constructor() {
      this.wasPlaTagProcessed = !1;
      this.wasReactiveAdConfigReceived = {};
      this.adCount = {};
      this.wasReactiveAdVisible = {};
      this.stateForType = {};
      this.reactiveTypeEnabledInAsfe = {};
      this.wasReactiveTagRequestSent = !1;
      this.reactiveTypeDisabledByPublisher = {};
      this.tagSpecificState = {};
      this.messageValidationEnabled = !1;
      this.floatingAdsStacking = new pm();
      this.sideRailProcessedFixedElements = new Set();
      this.sideRailAvailableSpace = new Map();
      this.sideRailPlasParam = new Map();
    }
  }
  var pm = class {
    constructor() {
      this.maxZIndexRestrictions = {};
      this.nextRestrictionId = 0;
      this.maxZIndexListeners = [];
    }
  };
  var rm = (a) => {
    if (p.google_apltlad || a.google_ad_intent_query) return null;
    var b = qm(a) && 1 === (p.top == p ? 0 : pd(p.top) ? 1 : 2);
    if ((p !== p.top && !b) || !a.google_ad_client) return null;
    p.google_apltlad = !0;
    b = {
      enable_page_level_ads: { pltais: !0 },
      google_ad_client: a.google_ad_client,
    };
    const c = b.enable_page_level_ads;
    vd(a, (d, e) => {
      hi[e] && "google_ad_client" !== e && (c[e] = d);
    });
    c.google_pgb_reactive = 7;
    dm(c);
    if ("google_ad_section" in a || "google_ad_region" in a)
      c.google_ad_section = a.google_ad_section || a.google_ad_region;
    return b;
  };
  function qm(a) {
    let b = Q(rh);
    "sd" !== a.google_loader_used && (b || (b = Q(sh)));
    return b;
  }
  function sm(a, b) {
    X(S).ama_ran_on_page ||
      Ki(
        1001,
        () => {
          tm(new um(a, b));
        },
        p
      );
  }
  function tm(a) {
    Rl(a.l, a.h, a.g.google_ad_client || "", (b, c) => {
      var d = a.l,
        e = a.g;
      X(S).ama_ran_on_page || (b && vm(d, e, b, c));
    });
  }
  class um {
    constructor(a, b) {
      this.l = p;
      this.g = a;
      this.h = b;
    }
  }
  function vm(a, b, c, d) {
    d && (Pi(a).configSourceInAbg = d);
    $b(c, yi, 24) &&
      ((d = Qi(a)),
      (d.availableAbg = !0),
      (d.ablationFromStorage = !!D(c, yi, 24)?.g()?.g()));
    if (
      da(b.enable_page_level_ads) &&
      7 === b.enable_page_level_ads.google_pgb_reactive
    ) {
      if (!il(a, F(c, ui, 7))) {
        cj("amaait", { value: "true" });
        return;
      }
      cj("amaait", { value: "false" });
    }
    X(S).ama_ran_on_page = !0;
    D(c, mi, 15)?.g() && (X(a).enable_overlap_observer = !0);
    var e = D(c, li, 13);
    e && 1 === I(e, 1)
      ? ((d = 0), (e = D(e, ki, 6)) && G(e, 3) && (d = G(e, 3) || 0), yl(a, d))
      : D(c, yi, 24)?.g()?.g() && ((Qi(a).ablatingThisPageview = !0), yl(a, 1));
    Wd(3, [c.toJSON()]);
    const f = b.google_ad_client || "";
    b = el(da(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
    const g = Ug(Yg, new Vg(null, b));
    bj(782, () => {
      cm(a, f, c, g);
    });
  }
  function wm(a, b) {
    a = a.document;
    for (var c = void 0, d = 0; !c || a.getElementById(c + "_host"); )
      c = "aswift_" + d++;
    a = c;
    c = Number(b.google_ad_width || 0);
    b = Number(b.google_ad_height || 0);
    d = document.createElement("div");
    d.id = a + "_host";
    const e = d.style;
    e.border = "none";
    e.height = `${b}px`;
    e.width = `${c}px`;
    e.margin = "0px";
    e.padding = "0px";
    e.position = "relative";
    e.visibility = "visible";
    e.backgroundColor = "transparent";
    e.display = "inline-block";
    return { tb: a, Kb: d };
  }
  function xm({ va: a, Ca: b }) {
    return a || ("dev" === b ? "dev" : "");
  }
  var ym = {
      google_analytics_domain_name: !0,
      google_analytics_uacct: !0,
      google_pause_ad_requests: !0,
      google_user_agent_client_hint: !0,
    },
    zm = (a) =>
      (a = a.innerText || a.innerHTML) &&
      (a = a
        .replace(/^\s+/, "")
        .split(/\r?\n/, 1)[0]
        .match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
      RegExp("google_ad_client").test(a[1])
        ? a[1]
        : null,
    Am = (a) => {
      if ((a = a.innerText || a.innerHTML))
        if (
          ((a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";")),
          (a =
            a.match(/^\x3c!--+(.*?)(?:--+>)?$/) ||
            a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
            RegExp("google_ad_client").test(a[1]))
        )
          return a[1];
      return null;
    },
    Bm = (a) => {
      switch (a) {
        case "true":
          return !0;
        case "false":
          return !1;
        case "null":
          return null;
        case "undefined":
          break;
        default:
          try {
            const b = a.match(/^(?:'(.*)'|"(.*)")$/);
            if (b) return b[1] || b[2] || "";
            if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
              const c = parseFloat(a);
              return c === c ? c : void 0;
            }
          } catch (b) {}
      }
    };
  function Cm(a) {
    if (a.google_ad_client) var b = String(a.google_ad_client);
    else {
      if (
        null ==
        (b =
          X(a).head_tag_slot_vars?.google_ad_client ??
          a.document
            .querySelector(".adsbygoogle[data-ad-client]")
            ?.getAttribute("data-ad-client"))
      ) {
        b: {
          b = a.document.getElementsByTagName("script");
          a = (a.navigator && a.navigator.userAgent) || "";
          a =
            RegExp(
              "appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
              "i"
            ).test(a) ||
            (/i(phone|pad|pod)/i.test(a) &&
              /applewebkit/i.test(a) &&
              !/version|safari/i.test(a) &&
              !ae())
              ? zm
              : Am;
          for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c];
            if (
              !d.google_parsed_script_for_pub_code &&
              ((d.google_parsed_script_for_pub_code = !0), (d = a(d)))
            ) {
              b = d;
              break b;
            }
          }
          b = null;
        }
        if (b) {
          a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
          for (c = {}; (d = a.exec(b)); ) c[d[1]] = Bm(d[2]);
          b = c;
          b = b.google_ad_client ? b.google_ad_client : "";
        } else b = "";
      }
      b = b ?? "";
    }
    return b;
  }
  var Dm = {
    "120x90": !0,
    "160x90": !0,
    "180x90": !0,
    "200x90": !0,
    "468x15": !0,
    "728x15": !0,
  };
  function Em(a, b) {
    if (15 == b) {
      if (728 <= a) return 728;
      if (468 <= a) return 468;
    } else if (90 == b) {
      if (200 <= a) return 200;
      if (180 <= a) return 180;
      if (160 <= a) return 160;
      if (120 <= a) return 120;
    }
    return null;
  }
  var Fm = class extends N {
    constructor() {
      super();
    }
    getVersion() {
      return L(this, 2);
    }
  };
  function Gm(a, b) {
    return y(a, 2, Hb(b));
  }
  function Hm(a, b) {
    return y(a, 3, Hb(b));
  }
  function Im(a, b) {
    return y(a, 4, Hb(b));
  }
  function Jm(a, b) {
    return y(a, 5, Hb(b));
  }
  function Km(a, b) {
    return y(a, 9, Hb(b));
  }
  function Lm(a, b) {
    return qc(a, 10, b);
  }
  function Mm(a, b) {
    return y(a, 11, ub(b));
  }
  function Nm(a, b) {
    return y(a, 1, Hb(b));
  }
  function Om(a, b) {
    return y(a, 7, ub(b));
  }
  var Pm = class extends N {
    constructor() {
      super();
    }
  };
  Pm.u = [10, 6];
  const Qm =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Rm() {
    var a = S;
    if ("function" !== typeof a.navigator?.userAgentData?.getHighEntropyValues)
      return null;
    const b = a.google_tag_data ?? (a.google_tag_data = {});
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(Qm).then((c) => {
      b.uach ?? (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function Sm(a) {
    return Mm(
      Lm(
        Jm(
          Gm(
            Nm(
              Im(
                Om(
                  Km(Hm(new Pm(), a.architecture || ""), a.bitness || ""),
                  a.mobile || !1
                ),
                a.model || ""
              ),
              a.platform || ""
            ),
            a.platformVersion || ""
          ),
          a.uaFullVersion || ""
        ),
        a.fullVersionList?.map((b) => {
          var c = new Fm();
          c = y(c, 1, Hb(b.brand));
          return y(c, 2, Hb(b.version));
        }) || []
      ),
      a.wow64 || !1
    );
  }
  function Tm() {
    return Rm()?.then((a) => Sm(a)) ?? null;
  }
  function Um(a, b) {
    b.google_ad_host || ((a = Cl(a)) && (b.google_ad_host = a));
  }
  function Vm(a, b, c = "") {
    S.google_sa_queue ||
      ((S.google_sa_queue = []),
      (S.google_process_slots = W.oa(215, () => {
        Wm(S.google_sa_queue);
      })),
      (a = Xm(c, a, b)),
      mm(1, S, a));
  }
  function Wm(a) {
    const b = a.shift();
    "function" === typeof b && W.ea(216, b);
    a.length &&
      p.setTimeout(
        W.oa(215, () => {
          Wm(a);
        }),
        0
      );
  }
  function Ym(a, b) {
    a.google_sa_queue = a.google_sa_queue || [];
    a.google_sa_impl ? b() : a.google_sa_queue.push(b);
  }
  function Xm(a, b, c) {
    var d = S;
    b = K(c, 4) ? b.Eb : b.Fb;
    a: {
      if (K(c, 4)) {
        if ((a = a || Cm(d))) {
          a = Q(gh) ? be(a) : a;
          d = Q(Dh)
            ? { client: a, plah: d.location.host, aplac: Q(Dh).toString() }
            : { client: a, plah: d.location.host };
          break a;
        }
        throw Error("PublisherCodeNotFoundForAma");
      }
      d = {};
    }
    return Yc(b, d);
  }
  function Zm(a) {
    a: {
      var b = [p.top];
      var c = [];
      let e = 0,
        f;
      for (; (f = b[e++]); ) {
        c.push(f);
        try {
          if (f.frames)
            for (let g = 0; g < f.frames.length && 1024 > b.length; ++g)
              b.push(f.frames[g]);
        } catch {}
      }
      b = c;
      for (c = 0; c < b.length; c++)
        try {
          var d = b[c].frames.google_esf;
          if (d) {
            Qd = d;
            break a;
          }
        } catch (g) {}
      Qd = null;
    }
    if (Qd) return null;
    d = sd("IFRAME");
    d.id = "google_esf";
    d.name = "google_esf";
    b = a.Nb;
    c = P(Qc).g(uh.g, uh.defaultValue);
    "inhead" === c ? (b = a.Lb) : "nohtml" === c && (b = a.Mb);
    Q(qh) && (b = Yc(b, { hello: "world" }));
    d.src = $c(b).toString();
    d.style.display = "none";
    return d;
  }
  function $m(a, b, c, d) {
    const { tb: e, Kb: f } = wm(a, b);
    c.appendChild(f);
    an(a, c, b);
    c = b.google_start_time ?? oa;
    const g = new Date().getTime();
    b.google_lrv = xm({ va: "m202402270101", Ca: L(d, 2) });
    b.google_async_iframe_id = e;
    b.google_start_time = c;
    b.google_bpp = g > c ? g - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[e] = b;
    Ym(a, () => {
      var h = f;
      if (!h || !h.isConnected)
        if (
          ((h = a.document.getElementById(
            String(b.google_async_iframe_id) + "_host"
          )),
          null == h)
        )
          throw Error("no_div");
      (h = a.google_sa_impl({ pubWin: a, vars: b, innerInsElement: h })) &&
        W.Y(911, h);
    });
  }
  function an(a, b, c) {
    var d = c.google_ad_output,
      e = c.google_ad_format,
      f = c.google_ad_width || 0,
      g = c.google_ad_height || 0;
    e || ("html" !== d && null != d) || (e = f + "x" + g);
    d =
      !c.google_ad_slot ||
      c.google_override_format ||
      (!Dm[c.google_ad_width + "x" + c.google_ad_height] &&
        "aa" === c.google_loader_used);
    e && d ? (e = e.toLowerCase()) : (e = "");
    c.google_ad_format = e;
    if (
      "number" !== typeof c.google_reactive_sra_index ||
      !c.google_ad_unit_key
    ) {
      e = [
        c.google_ad_slot,
        c.google_orig_ad_format || c.google_ad_format,
        c.google_ad_type,
        c.google_orig_ad_width || c.google_ad_width,
        c.google_orig_ad_height || c.google_ad_height,
      ];
      d = [];
      f = 0;
      for (g = b; g && 25 > f; g = g.parentNode, ++f)
        9 === g.nodeType ? d.push("") : d.push(g.id);
      (d = d.join()) && e.push(d);
      c.google_ad_unit_key = wd(e.join(":")).toString();
      e = [];
      for (d = 0; b && 25 > d; ++d) {
        f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
        a: {
          if (b && b.nodeName && b.parentElement) {
            g = b.nodeName.toString().toLowerCase();
            const h = b.parentElement.childNodes;
            let k = 0;
            for (let l = 0; l < h.length; ++l) {
              const m = h[l];
              if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                if (b === m) {
                  g = "." + k;
                  break a;
                }
                ++k;
              }
            }
          }
          g = "";
        }
        e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
        b = b.parentElement;
      }
      b = e.join() + ":";
      e = [];
      if (a)
        try {
          let h = a.parent;
          for (d = 0; h && h !== a && 25 > d; ++d) {
            const k = h.frames;
            for (f = 0; f < k.length; ++f)
              if (a === k[f]) {
                e.push(f);
                break;
              }
            a = h;
            h = a.parent;
          }
        } catch (h) {}
      c.google_ad_dom_fingerprint = wd(b + e.join()).toString();
    }
  }
  function bn() {
    var a = qd(p);
    a &&
      ((a = nm(a)),
      a.tagSpecificState[1] ||
        (a.tagSpecificState[1] = { debugCard: null, debugCardRequested: !1 }));
  }
  function cn() {
    const a = Tm();
    null != a &&
      a.then((b) => {
        a: {
          kb = !0;
          try {
            var c = JSON.stringify(b.toJSON(), Mb);
            break a;
          } finally {
            kb = !1;
          }
          c = void 0;
        }
        S.google_user_agent_client_hint = c;
      });
    Fd();
  }
  function dn(a) {
    return (b) => !!(b.fa & a);
  }
  class Y extends $h {
    constructor(a, b, c, d = !1) {
      super(a, b);
      this.fa = c;
      this.j = d;
    }
    pa() {
      return this.fa;
    }
    h(a, b, c) {
      c.style.height = this.height() + "px";
      b.rpe = !0;
    }
  }
  const en = {
      image_stacked: 1 / 1.91,
      image_sidebyside: 1 / 3.82,
      mobile_banner_image_sidebyside: 1 / 3.82,
      pub_control_image_stacked: 1 / 1.91,
      pub_control_image_sidebyside: 1 / 3.82,
      pub_control_image_card_stacked: 1 / 1.91,
      pub_control_image_card_sidebyside: 1 / 3.74,
      pub_control_text: 0,
      pub_control_text_card: 0,
    },
    fn = {
      image_stacked: 80,
      image_sidebyside: 0,
      mobile_banner_image_sidebyside: 0,
      pub_control_image_stacked: 80,
      pub_control_image_sidebyside: 0,
      pub_control_image_card_stacked: 85,
      pub_control_image_card_sidebyside: 0,
      pub_control_text: 80,
      pub_control_text_card: 80,
    },
    gn = {
      pub_control_image_stacked: 100,
      pub_control_image_sidebyside: 200,
      pub_control_image_card_stacked: 150,
      pub_control_image_card_sidebyside: 250,
      pub_control_text: 100,
      pub_control_text_card: 150,
    };
  function hn(a) {
    var b = 0;
    a.P && b++;
    a.K && b++;
    a.L && b++;
    if (3 > b)
      return {
        N: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.",
      };
    b = a.P.split(",");
    const c = a.L.split(",");
    a = a.K.split(",");
    if (b.length !== c.length || b.length !== a.length)
      return {
        N: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"',
      };
    if (2 < b.length)
      return {
        N:
          "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " +
          `you are providing ${
            b.length
          } parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`,
      };
    const d = [],
      e = [];
    for (let g = 0; g < b.length; g++) {
      var f = Number(c[g]);
      if (Number.isNaN(f) || 0 === f)
        return {
          N: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`,
        };
      d.push(f);
      f = Number(a[g]);
      if (Number.isNaN(f) || 0 === f)
        return {
          N: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`,
        };
      e.push(f);
    }
    return { L: d, K: e, bb: b };
  }
  function jn(a) {
    return 1200 <= a
      ? { width: 1200, height: 600 }
      : 850 <= a
      ? { width: a, height: Math.floor(0.5 * a) }
      : 550 <= a
      ? { width: a, height: Math.floor(0.6 * a) }
      : 468 <= a
      ? { width: a, height: Math.floor(0.7 * a) }
      : { width: a, height: Math.floor(3.44 * a) };
  }
  const kn = Oa("script");
  class ln {
    constructor(
      a,
      b,
      c = null,
      d = null,
      e = null,
      f = null,
      g = null,
      h = null,
      k = null,
      l = null,
      m = null,
      n = null
    ) {
      this.B = a;
      this.ba = b;
      this.fa = c;
      this.g = d;
      this.X = e;
      this.h = f;
      this.i = g;
      this.C = h;
      this.D = k;
      this.j = l;
      this.s = m;
      this.H = n;
    }
    size() {
      return this.ba;
    }
  }
  const mn = [
    "google_content_recommendation_ui_type",
    "google_content_recommendation_columns_num",
    "google_content_recommendation_rows_num",
  ];
  var nn = class extends $h {
    g(a) {
      return Math.min(1200, Math.max(this.U, Math.round(a)));
    }
  };
  function on(a, b) {
    pn(a, b);
    if ("pedestal" === b.google_content_recommendation_ui_type)
      return new ln(9, new nn(a, Math.floor(a * b.google_phwr)));
    var c = hd();
    468 > a
      ? c
        ? ((c = a - 8 - 8),
          (c =
            Math.floor(c / 1.91 + 70) +
            Math.floor(
              11 *
                (c * en.mobile_banner_image_sidebyside +
                  fn.mobile_banner_image_sidebyside) +
                96
            )),
          (a = {
            aa: a,
            Z: c,
            K: 1,
            L: 12,
            P: "mobile_banner_image_sidebyside",
          }))
        : ((a = jn(a)),
          (a = {
            aa: a.width,
            Z: a.height,
            K: 1,
            L: 13,
            P: "image_sidebyside",
          }))
      : ((a = jn(a)),
        (a = { aa: a.width, Z: a.height, K: 4, L: 2, P: "image_stacked" }));
    qn(b, a);
    return new ln(9, new nn(a.aa, a.Z));
  }
  function rn(a, b) {
    pn(a, b);
    var c = hn({
      L: b.google_content_recommendation_rows_num,
      K: b.google_content_recommendation_columns_num,
      P: b.google_content_recommendation_ui_type,
    });
    if (c.N) a = { aa: 0, Z: 0, K: 0, L: 0, P: "image_stacked", N: c.N };
    else {
      var d = 2 === c.bb.length && 468 <= a ? 1 : 0;
      var e = c.bb[d];
      e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
      var f = gn[e];
      let g = c.K[d];
      for (; a / g < f && 1 < g; ) g--;
      f = g;
      d = c.L[d];
      c = Math.floor((((a - 8 * f - 8) / f) * en[e] + fn[e]) * d + 8 * d + 8);
      a =
        1500 < a
          ? {
              width: 0,
              height: 0,
              Gb: `Calculated slot width is too large: ${a}`,
            }
          : 1500 < c
          ? {
              width: 0,
              height: 0,
              Gb: `Calculated slot height is too large: ${c}`,
            }
          : { width: a, height: c };
      a = { aa: a.width, Z: a.height, K: f, L: d, P: e };
    }
    if (a.N) throw new V(a.N);
    qn(b, a);
    return new ln(9, new nn(a.aa, a.Z));
  }
  function pn(a, b) {
    if (0 >= a)
      throw new V(
        `Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`
      );
  }
  function qn(a, b) {
    a.google_content_recommendation_ui_type = b.P;
    a.google_content_recommendation_columns_num = b.K;
    a.google_content_recommendation_rows_num = b.L;
  }
  class sn extends $h {
    g() {
      return this.U;
    }
    h(a, b, c) {
      Zh(a, c);
      c.style.height = this.height() + "px";
      b.rpe = !0;
    }
  }
  const tn = {
    "image-top": (a) => (600 >= a ? 284 + 0.414 * (a - 250) : 429),
    "image-middle": (a) =>
      500 >= a ? 196 - 0.13 * (a - 250) : 164 + 0.2 * (a - 500),
    "image-side": (a) =>
      500 >= a ? 205 - 0.28 * (a - 250) : 134 + 0.21 * (a - 500),
    "text-only": (a) => (500 >= a ? 187 - 0.228 * (a - 250) : 130),
    "in-article": (a) =>
      420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200,
  };
  var un = class extends $h {
      g() {
        return Math.min(1200, this.U);
      }
    },
    vn = (a, b, c, d, e) => {
      var f = e.google_ad_layout || "image-top";
      if ("in-article" == f) {
        var g = a;
        if ("false" == e.google_full_width_responsive) a = g;
        else if (((a = Uh(b, c, g, 0.2, e)), !0 !== a))
          (e.gfwrnwer = a), (a = g);
        else if ((a = Oh(b)))
          if (
            ((e.google_full_width_responsive_allowed = !0), c.parentElement)
          ) {
            b: {
              g = c;
              for (let h = 0; 100 > h && g.parentElement; ++h) {
                const k = g.parentElement.childNodes;
                for (let l = 0; l < k.length; ++l) {
                  const m = k[l];
                  if (m !== g && Xh(b, m)) break b;
                }
                g = g.parentElement;
                g.style.width = "100%";
                g.style.height = "auto";
              }
            }
            Zh(b, c);
          } else a = g;
        else a = g;
      }
      if (250 > a)
        throw new V(
          "Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a
        );
      a = Math.min(1200, Math.floor(a));
      if (d && "in-article" != f) {
        f = Math.ceil(d);
        if (50 > f)
          throw new V(
            "Fluid responsive ads must be at least 50px tall: height=" + f
          );
        return new ln(11, new $h(a, f));
      }
      if ("in-article" != f && (d = e.google_ad_layout_key)) {
        f = "" + d;
        c = Math.pow(10, 3);
        if ((e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length))
          for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
        else b = null;
        if (!b) throw new V("Invalid data-ad-layout-key value: " + f);
        f = (a + -725) / 1e3;
        c = 0;
        d = 1;
        e = b.length;
        for (g = 0; g < e; g++) (c += b[g] * d), (d *= f);
        f = Math.ceil(1e3 * c - -725 + 10);
        if (isNaN(f)) throw new V("Invalid height: height=" + f);
        if (50 > f)
          throw new V(
            "Fluid responsive ads must be at least 50px tall: height=" + f
          );
        if (1200 < f)
          throw new V(
            "Fluid responsive ads must be at most 1200px tall: height=" + f
          );
        return new ln(11, new $h(a, f));
      }
      d = tn[f];
      if (!d) throw new V("Invalid data-ad-layout value: " + f);
      c = ci(c, b);
      b = Oh(b);
      b =
        "in-article" !== f || c || a !== b
          ? Math.ceil(d(a))
          : Math.ceil(1.25 * d(a));
      return new ln(11, "in-article" == f ? new un(a, b) : new $h(a, b));
    };
  function wn(a) {
    return (b) => {
      for (let c = a.length - 1; 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    };
  }
  function xn(a, b) {
    var c = yn.slice(0);
    const d = c.length;
    let e = null;
    for (let f = 0; f < d; ++f) {
      const g = c[f];
      if (a(g)) {
        if (null == b || b(g)) return g;
        null === e && (e = g);
      }
    }
    return e;
  }
  var Z = [
      new Y(970, 90, 2),
      new Y(728, 90, 2),
      new Y(468, 60, 2),
      new Y(336, 280, 1),
      new Y(320, 100, 2),
      new Y(320, 50, 2),
      new Y(300, 600, 4),
      new Y(300, 250, 1),
      new Y(250, 250, 1),
      new Y(234, 60, 2),
      new Y(200, 200, 1),
      new Y(180, 150, 1),
      new Y(160, 600, 4),
      new Y(125, 125, 1),
      new Y(120, 600, 4),
      new Y(120, 240, 4),
      new Y(120, 120, 1, !0),
    ],
    yn = [
      Z[6],
      Z[12],
      Z[3],
      Z[0],
      Z[7],
      Z[14],
      Z[1],
      Z[8],
      Z[10],
      Z[4],
      Z[15],
      Z[2],
      Z[11],
      Z[5],
      Z[13],
      Z[9],
      Z[16],
    ];
  function zn(a, b, c, d, e) {
    "false" == e.google_full_width_responsive
      ? (c = { F: a, G: 1 })
      : ("autorelaxed" === b && e.google_full_width_responsive) ||
        An(b) ||
        e.google_ad_resize
      ? ((b = Vh(a, c, d, e)),
        (c = !0 !== b ? { F: a, G: b } : { F: Oh(c) || a, G: !0 }))
      : (c = { F: a, G: 2 });
    const { F: f, G: g } = c;
    return !0 !== g
      ? { F: a, G: g }
      : d.parentElement
      ? { F: f, G: g }
      : { F: a, G: g };
  }
  function Bn(a, b, c, d, e) {
    const { F: f, G: g } = bj(247, () => zn(a, b, c, d, e));
    var h = !0 === g;
    const k = R(d.style.width),
      l = R(d.style.height),
      { W: m, T: n, pa: t, ab: v } = Cn(f, b, c, d, e, h);
    h = Dn(b, t);
    var w;
    const A = (w = ai(d, c, "marginLeft", R)) ? `${w}px` : "",
      z = (w = ai(d, c, "marginRight", R)) ? `${w}px` : "";
    w = ai(d, c, "zIndex") || "";
    return new ln(h, m, t, null, v, g, n, A, z, l, k, w);
  }
  function An(a) {
    return (
      "auto" === a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    );
  }
  function Cn(a, b, c, d, e, f) {
    b = En(c, a, b);
    let g;
    var h = !1;
    let k = !1;
    var l = 488 > Oh(c);
    if (l) {
      g = Ph(d, c);
      var m = ci(d, c);
      h = !m && g;
      k = m && g;
    }
    m = [bi(a), dn(b)];
    m.push(ei(l, c, d, k));
    null != e.google_max_responsive_height &&
      m.push(fi(e.google_max_responsive_height));
    l = [(w) => !w.j];
    if (h || k) (h = gi(c, d)), l.push(fi(h));
    const n = xn(wn(m), wn(l));
    if (!n) throw new V(`No slot size for availableWidth=${a}`);
    const { W: t, T: v } = bj(248, () => {
      var w;
      a: if (f) {
        if (e.gfwrnh && (w = R(e.gfwrnh))) {
          w = { W: new sn(a, w), T: !0 };
          break a;
        }
        w = a / 1.2;
        var A = Math;
        var z = A.min;
        if (
          e.google_resizing_allowed ||
          "true" == e.google_full_width_responsive
        )
          var E = Infinity;
        else {
          E = d;
          let sa = Infinity;
          do {
            var J = ai(E, c, "height", R);
            J && (sa = Math.min(sa, J));
            (J = ai(E, c, "maxHeight", R)) && (sa = Math.min(sa, J));
          } while ((E = E.parentElement) && "HTML" != E.tagName);
          E = sa;
        }
        A = z.call(A, w, E);
        if (A < 0.5 * w || 100 > A) A = w;
        w = { W: new sn(a, Math.floor(A)), T: A < w ? 102 : !0 };
      } else w = { W: n, T: 100 };
      return w;
    });
    return "in-article" === e.google_ad_layout &&
      c.location &&
      "#hffwroe2etoq" === c.location.hash
      ? { W: Fn(a, c, d, t, e), T: !1, pa: b, ab: g }
      : { W: t, T: v, pa: b, ab: g };
  }
  function Dn(a, b) {
    if ("auto" === a) return 1;
    switch (b) {
      case 2:
        return 2;
      case 1:
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      case 6:
        return 6;
      case 5:
        return 7;
      case 7:
        return 8;
      default:
        throw Error("bad mask");
    }
  }
  function En(a, b, c) {
    if ("auto" === c) (c = Math.min(1200, Oh(a))), (b = 0.25 >= b / c ? 4 : 3);
    else {
      b = 0;
      for (const d in Lh) -1 !== c.indexOf(d) && (b |= Lh[d]);
    }
    return b;
  }
  function Fn(a, b, c, d, e) {
    const f = e.google_ad_height || ai(c, b, "height", R);
    b = vn(a, b, c, f, e).size();
    return b.U * b.height() > a * d.height() ? new Y(b.U, b.height(), 1) : d;
  }
  var Gn = (a, b, c, d, e) => {
    var f;
    (f = Oh(b))
      ? 488 > Oh(b)
        ? b.innerHeight >= b.innerWidth
          ? ((e.google_full_width_responsive_allowed = !0),
            Zh(b, c),
            (f = { F: f, G: !0 }))
          : (f = { F: a, G: 5 })
        : (f = { F: a, G: 4 })
      : (f = { F: a, G: 10 });
    const { F: g, G: h } = f;
    if (!0 !== h || a == g)
      return new ln(12, new $h(a, d), null, null, !0, h, 100);
    const { W: k, T: l, pa: m } = Cn(g, "auto", b, c, e, !0);
    return new ln(1, k, m, 2, !0, h, l);
  };
  var In = (a, b) => {
      const c = b.google_ad_format;
      if ("autorelaxed" === c) {
        a: {
          if ("pedestal" !== b.google_content_recommendation_ui_type)
            for (const d of mn)
              if (null != b[d]) {
                a = !0;
                break a;
              }
          a = !1;
        }
        return a ? 9 : 5;
      }
      if (An(c)) return 1;
      if ("link" === c) return 4;
      if ("fluid" == c)
        return "in-article" !== b.google_ad_layout ||
          !a.location ||
          ("#hffwroe2etop" != a.location.hash &&
            "#hffwroe2etoq" != a.location.hash)
          ? 8
          : (Hn(b), 1);
      if (27 === b.google_reactive_ad_format) return Hn(b), 1;
    },
    Kn = (a, b, c, d, e = !1) => {
      var f =
        b.offsetWidth ||
        ((c.google_ad_resize || e) && ai(b, d, "width", R)) ||
        c.google_ad_width ||
        0;
      4 === a && ((c.google_ad_format = "auto"), (a = 1));
      e = (e = Jn(a, f, b, c, d)) ? e : Bn(f, c.google_ad_format, d, b, c);
      e.size().h(d, c, b);
      null != e.fa && (c.google_responsive_formats = e.fa);
      null != e.X && (c.google_safe_for_responsive_override = e.X);
      null != e.h &&
        (!0 === e.h
          ? (c.google_full_width_responsive_allowed = !0)
          : ((c.google_full_width_responsive_allowed = !1),
            (c.gfwrnwer = e.h)));
      null != e.i && !0 !== e.i && (c.gfwrnher = e.i);
      d = e.s || c.google_ad_width;
      null != d && (c.google_resizing_width = d);
      d = e.j || c.google_ad_height;
      null != d && (c.google_resizing_height = d);
      d = e.size().g(f);
      const g = e.size().height();
      c.google_ad_width = d;
      c.google_ad_height = g;
      var h = e.size();
      f = h.g(f) + "x" + h.height();
      c.google_ad_format = f;
      c.google_responsive_auto_format = e.B;
      null != e.g && (c.armr = e.g);
      c.google_ad_resizable = !0;
      c.google_override_format = 1;
      c.google_loader_features_used = 128;
      !0 === e.h && (c.gfwrnh = e.size().height() + "px");
      null != e.C && (c.gfwroml = e.C);
      null != e.D && (c.gfwromr = e.D);
      null != e.j && (c.gfwroh = e.j);
      null != e.s && (c.gfwrow = e.s);
      null != e.H && (c.gfwroz = e.H);
      f = qd(window) || window;
      em(f.location, "google_responsive_dummy_ad") &&
        (Ma([1, 2, 3, 4, 5, 6, 7, 8], e.B) || 1 === e.g) &&
        2 !== e.g &&
        ((f = JSON.stringify({
          googMsgType: "adpnt",
          key_value: [{ key: "qid", value: "DUMMY_AD" }],
        })),
        (c.dash = `<${kn}>window.top.postMessage('${f}', '*'); 
          </${kn}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`));
      1 != a && ((a = e.size().height()), (b.style.height = a + "px"));
    };
  const Jn = (a, b, c, d, e) => {
      const f = d.google_ad_height || ai(c, e, "height", R);
      switch (a) {
        case 5:
          const { F: g, G: h } = bj(247, () =>
            zn(b, d.google_ad_format, e, c, d)
          );
          !0 === h && b != g && Zh(e, c);
          !0 === h
            ? (d.google_full_width_responsive_allowed = !0)
            : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = h));
          return on(g, d);
        case 9:
          return rn(b, d);
        case 8:
          return vn(b, e, c, f, d);
        case 10:
          return Gn(b, e, c, f, d);
      }
    },
    Hn = (a) => {
      a.google_ad_format = "auto";
      a.armr = 3;
    };
  function Ln(a, b) {
    a.google_resizing_allowed = !0;
    a.ovlp = !0;
    a.google_ad_format = "auto";
    a.iaaso = !0;
    a.armr = b;
  }
  function Mn(a, b) {
    var c = qd(b);
    if (c) {
      c = Oh(c);
      const d = td(a, b) || {},
        e = d.direction;
      if ("0px" === d.width && "none" !== d.cssFloat) return -1;
      if ("ltr" === e && c)
        return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if ("rtl" === e && c)
        return (
          (a =
            b.document.body.getBoundingClientRect().right -
            a.getBoundingClientRect().right),
          Math.floor(
            Math.min(
              1200,
              c - a - Math.floor((c - b.document.body.clientWidth) / 2)
            )
          )
        );
    }
    return -1;
  }
  function Nn(a, b) {
    switch (a) {
      case "google_reactive_ad_format":
        return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
      default:
        return b;
    }
  }
  function On(a, b) {
    if (a.getAttribute("src")) {
      var c = a.getAttribute("src") || "",
        d = ld(c, "client");
      d && (b.google_ad_client = Nn("google_ad_client", d));
      (c = ld(c, "host")) && (b.google_ad_host = Nn("google_ad_host", c));
    }
    a = a.attributes;
    c = a.length;
    for (d = 0; d < c; d++) {
      var e = a[d];
      if (/data-/.test(e.name)) {
        const f = pa(
          e.name
            .replace("data-matched-content", "google_content_recommendation")
            .replace("data", "google")
            .replace(/-/g, "_")
        );
        b.hasOwnProperty(f) || ((e = Nn(f, e.value)), null !== e && (b[f] = e));
      }
    }
  }
  function Pn(a) {
    if ((a = Xd(a)))
      switch (a.data && a.data.autoFormat) {
        case "rspv":
          return 13;
        case "mcrspv":
          return 15;
        default:
          return 14;
      }
    else return 12;
  }
  function Qn(a, b, c, d) {
    On(a, b);
    if (
      c.document &&
      c.document.body &&
      !In(c, b) &&
      !b.google_reactive_ad_format
    ) {
      var e = parseInt(a.style.width, 10),
        f = Mn(a, c);
      if (0 < f && e > f) {
        var g = parseInt(a.style.height, 10);
        e = !!Dm[e + "x" + g];
        let h = f;
        if (e) {
          const k = Em(f, g);
          if (k) (h = k), (b.google_ad_format = k + "x" + g + "_0ads_al");
          else throw new V("No slot size for availableWidth=" + f);
        }
        b.google_ad_resize = !0;
        b.google_ad_width = h;
        e || ((b.google_ad_format = null), (b.google_override_format = !0));
        f = h;
        a.style.width = `${f}px`;
        Ln(b, 4);
      }
    }
    if (488 > Oh(c)) {
      f = qd(c) || c;
      (g = a.offsetWidth) || (g = ai(a, c, "width", R));
      g = g || b.google_ad_width || 0;
      e = b.google_ad_client;
      if (
        (d =
          em(f.location, "google_responsive_slot_preview") ||
          Q(th) ||
          Gl(f, 1, e, d))
      )
        b: if (
          b.google_reactive_ad_format ||
          b.google_ad_resize ||
          In(c, b) ||
          Rh(a, b)
        )
          d = !1;
        else {
          for (d = a; d; d = d.parentElement) {
            f = td(d, c);
            if (!f) {
              b.gfwrnwer = 18;
              d = !1;
              break b;
            }
            if (!Ma(["static", "relative"], f.position)) {
              b.gfwrnwer = 17;
              d = !1;
              break b;
            }
          }
          d = Uh(c, a, g, 0.3, b);
          !0 !== d ? ((b.gfwrnwer = d), (d = !1)) : (d = c === c.top ? !0 : !1);
        }
      d ? (Ln(b, 1), (d = !0)) : (d = !1);
    } else d = !1;
    if ((g = In(c, b))) Kn(g, a, b, c, d);
    else {
      if (Rh(a, b)) {
        if ((d = td(a, c)))
          (a.style.width = d.width), (a.style.height = d.height), Qh(d, b);
        b.google_ad_width || (b.google_ad_width = a.offsetWidth);
        b.google_ad_height || (b.google_ad_height = a.offsetHeight);
        b.google_loader_features_used = 256;
        b.google_responsive_auto_format = Pn(c);
      } else Qh(a.style, b);
      (c.location && "#gfwmrp" == c.location.hash) ||
      (12 == b.google_responsive_auto_format &&
        "true" == b.google_full_width_responsive)
        ? Kn(10, a, b, c, !1)
        : 0.01 > Math.random() &&
          12 === b.google_responsive_auto_format &&
          ((a = Vh(
            a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width,
            c,
            a,
            b
          )),
          !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
    }
  }
  function Rn(a) {
    if (a === a.top) return 0;
    for (let b = a; b && b !== b.top && pd(b); b = b.parent) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }
  function Kf(a, b, c = 0) {
    0 < a.g.size || Sn(a);
    c = Math.min(Math.max(0, c), 9);
    const d = a.g.get(c);
    d ? d.push(b) : a.g.set(c, [b]);
  }
  function Tn(a, b, c, d) {
    Oc(b, c, d);
    Lj(a, () => Pc(b, c, d));
  }
  function Un(a, b) {
    1 !== a.h && ((a.h = 1), 0 < a.g.size && Vn(a, b));
  }
  function Sn(a) {
    a.l.document.visibilityState
      ? Tn(a, a.l.document, "visibilitychange", (b) => {
          "hidden" === a.l.document.visibilityState && Un(a, b);
          "visible" === a.l.document.visibilityState && (a.h = 0);
        })
      : "onpagehide" in a.l
      ? (Tn(a, a.l, "pagehide", (b) => {
          Un(a, b);
        }),
        Tn(a, a.l, "pageshow", () => {
          a.h = 0;
        }))
      : Tn(a, a.l, "beforeunload", (b) => {
          Un(a, b);
        });
  }
  function Vn(a, b) {
    for (let c = 9; 0 <= c; c--)
      a.g.get(c)?.forEach((d) => {
        d(b);
      });
  }
  var Wn = class extends Kj {
    constructor(a) {
      super();
      this.l = a;
      this.h = 0;
      this.g = new Map();
    }
  };
  async function Xn(a, b) {
    var c = 10;
    return 0 >= c
      ? Promise.reject(Error(`wfc bad input ${c} ${200}`))
      : b()
      ? Promise.resolve()
      : new Promise((d, e) => {
          const f = a.setInterval(() => {
            --c
              ? b() && (a.clearInterval(f), d())
              : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)));
          }, 200);
        });
  }
  function Yn(a) {
    const b = a.g.pc;
    return null !== b && 0 !== b ? b : (a.g.pc = Id(a.l));
  }
  function Zn(a) {
    const b = a.g.wpc;
    return null !== b && "" !== b ? b : (a.g.wpc = Cm(a.l));
  }
  function $n(a, b) {
    var c = new cf();
    var d = Yn(a);
    c = wc(c, 1, d);
    d = Zn(a);
    c = yc(c, 2, d);
    c = wc(c, 3, a.g.sd);
    return wc(c, 7, Math.round(b || a.l.performance.now()));
  }
  async function ao(a) {
    await Xn(a.l, () => !(!Yn(a) || !Zn(a)));
  }
  function bo(a) {
    var b = P(co);
    if (b.i) {
      var c = b.B;
      a(c);
      b.g.psi = c.toJSON();
    }
  }
  function eo(a) {
    Q(kh) &&
      Kf(
        a.j,
        () => {
          var b = $n(a);
          b = pc(b, 12, df, a.C);
          a.i && !a.g.le.includes(3) && (a.g.le.push(3), Gf(a.h, b));
        },
        9
      );
  }
  function fo(a) {
    const b = new Ze();
    Q(jh) ? yc(b, 1, a.s) : yc(b, 1, a.l?.document?.URL);
    Kf(
      a.j,
      () => {
        oc(b, 2, a.B);
        wc(b, 3, a.g.tar);
        var c = a.h;
        var d = $n(a);
        d = pc(d, 8, df, b);
        Gf(c, d);
      },
      9
    );
  }
  async function go(a) {
    var b = P(co);
    if (b.i && !b.g.le.includes(1)) {
      b.g.le.push(1);
      var c = b.l.performance.now();
      await ao(b);
      var d = new Xe();
      a = C(d, 5, ub(a), !1);
      d = new We();
      d = wc(d, 1, Nh(b.l).scrollWidth);
      d = wc(d, 2, Nh(b.l).scrollHeight);
      a = oc(a, 2, d);
      d = new We();
      var e = Oh(b.l);
      d = wc(d, 1, e);
      d = wc(d, 2, Nh(b.l).clientHeight);
      a = oc(a, 1, d);
      Q(jh) ? yc(a, 4, b.s) : yc(a, 4, b.l?.document?.URL);
      d = Rn(b.l);
      0 !== d && ((e = new Ve()), (d = y(e, 1, xb(d))), oc(a, 3, d));
      d = b.h;
      c = $n(b, c);
      c = pc(c, 4, df, a);
      Gf(d, c);
      eo(b);
      fo(b);
    }
  }
  async function ho(a, b, c) {
    if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
      a.g.lgdp.push(Number(b));
      var d = a.l.performance.now();
      await ao(a);
      var e = a.h;
      a = $n(a, d);
      d = new Ue();
      b = C(d, 1, xb(b), 0);
      c = hc(b, 2, c, zb);
      c = pc(a, 9, df, c);
      Gf(e, c);
    }
  }
  async function io(a, b) {
    await ao(a);
    var c = a.h;
    a = $n(a);
    a = wc(a, 3, 1);
    b = pc(a, 10, df, b);
    Gf(c, b);
  }
  var co = class {
    constructor(a, b) {
      this.l = Yd() || window;
      this.j = b ?? new Wn(this.l);
      this.h = a ?? new Mf(2, "m202402270101", 100, 100, !0, this.j);
      this.g = Dj(Aj(), 33, () => {
        const c = Rc(hh);
        return {
          sd: c,
          ssp: 0 < c && ud() < 1 / c,
          pc: null,
          wpc: null,
          cu: null,
          le: [],
          lgdp: [],
          psi: null,
          tar: 0,
          cc: null,
        };
      });
    }
    get i() {
      return this.g.ssp;
    }
    get s() {
      return this.g.cu;
    }
    set s(a) {
      this.g.cu = a;
    }
    get B() {
      return bj(1178, () => zc(Ye, Ub(this.g.psi || []))) || new Ye();
    }
    get C() {
      return bj(1227, () => zc($e, Ub(this.g.cc || []))) || new $e();
    }
  };
  function jo() {
    var a = window;
    return "on" === p.google_adtest ||
      "on" === p.google_adbreak_test ||
      a.location.host.endsWith("h5games.usercontent.goog")
      ? a.document
          .querySelector('meta[name="h5-games-eids"]')
          ?.getAttribute("content")
          ?.split(",")
          .map((b) => Math.floor(Number(b)))
          .filter((b) => !isNaN(b) && 0 < b) || []
      : [];
  }
  function ko(a, b) {
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
  }
  function lo(a) {
    var b = S.document;
    if (b.currentScript) return ko(b.currentScript, a);
    for (const c of b.scripts) if (0 === ko(c, a)) return 0;
    return 1;
  }
  function mo(a, b) {
    return {
      [3]: {
        [55]: () => 0 === a,
        [23]: (c) => Gl(S, Number(c)),
        [24]: (c) => Jl(Number(c)),
        [61]: () => K(b, 6),
        [63]: () => K(b, 6) || ".google.ch" === L(b, 8),
      },
      [4]: {},
      [5]: { [6]: () => L(b, 15) },
    };
  }
  function no(a = p) {
    return a.ggeac || (a.ggeac = {});
  }
  function oo(a, b = document) {
    return !!b.featurePolicy?.features().includes(a);
  }
  function po(a, b = document) {
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  function qo(a, b) {
    try {
      const d = a.split(".");
      a = p;
      let e = 0,
        f;
      for (; null != a && e < d.length; e++)
        (f = a), (a = a[d[e]]), "function" === typeof a && (a = f[d[e]]());
      var c = a;
      if (typeof c === b) return c;
    } catch {}
  }
  var ro = {
    [3]: {
      [8]: (a) => {
        try {
          return null != ca(a);
        } catch {}
      },
      [9]: (a) => {
        try {
          var b = ca(a);
        } catch {
          return;
        }
        if ((a = "function" === typeof b))
          (b = b && b.toString && b.toString()),
            (a = "string" === typeof b && -1 != b.indexOf("[native code]"));
        return a;
      },
      [10]: () => window === window.top,
      [6]: (a) => Ma(P(qg).g(), Number(a)),
      [27]: (a) => {
        a = qo(a, "boolean");
        return void 0 !== a ? a : void 0;
      },
      [60]: (a) => {
        try {
          return !!p.document.querySelector(a);
        } catch {}
      },
      [69]: (a) => oo(a, p.document),
      [70]: (a) => po(a, p.document),
    },
    [4]: {
      [3]: () => Bd(),
      [6]: (a) => {
        a = qo(a, "number");
        return void 0 !== a ? a : void 0;
      },
    },
    [5]: {
      [2]: () => window.location.href,
      [3]: () => {
        try {
          return window.top.location.hash;
        } catch {
          return "";
        }
      },
      [4]: (a) => {
        a = qo(a, "string");
        return void 0 !== a ? a : void 0;
      },
    },
  };
  function so(a, b) {
    const c = new Map();
    for (const [f, g] of a[1].entries()) {
      var d = f,
        e = g;
      const { ib: h, eb: k, fb: l } = e[e.length - 1];
      c.set(d, h + k * l);
    }
    for (const f of b)
      for (const g of F(f, pl, 2))
        if (0 !== F(g, ol, 2).length) {
          b = sc(Cb(Yb(g, 8)));
          M(g, 4) &&
            !M(g, 13) &&
            ((b = c.get(M(g, 4)) ?? 0),
            (d = sc(Cb(Yb(g, 1))) * F(g, ol, 2).length),
            c.set(M(g, 4), b + d));
          d = [];
          for (e = 0; e < F(g, ol, 2).length; e++) {
            const h = {
              ib: b,
              eb: sc(Cb(Yb(g, 1))),
              fb: F(g, ol, 2).length,
              Ab: e,
              Xa: M(f, 1),
              qa: g,
              O: F(g, ol, 2)[e],
            };
            d.push(h);
          }
          to(a[2], M(g, 10), d) ||
            to(a[1], M(g, 4), d) ||
            to(a[0], F(g, ol, 2)[0].getId(), d);
        }
    return a;
  }
  function to(a, b, c) {
    if (!b) return !1;
    a.has(b) || a.set(b, []);
    a.get(b).push(...c);
    return !0;
  }
  function uo(a = ud()) {
    return (b) => wd(`${b} + ${a}`) % 1e3;
  }
  const vo = [12, 13, 20];
  function wo(a, b, c) {
    a.g[c] || (a.g[c] = []);
    a = a.g[c];
    a.includes(b) || a.push(b);
  }
  function xo(a, b, c, d) {
    const e = [];
    var f;
    if ((f = 9 !== b)) a.j[b] ? (f = !0) : ((a.j[b] = !0), (f = !1));
    if (f) return Of(a.M, b, c, e, [], 4), e;
    f = vo.includes(b);
    const g = [],
      h = P(Sf).I,
      k = [];
    for (const t of [0, 1, 2])
      for (const [v, w] of a.ka[t].entries()) {
        var l = v,
          m = w;
        const A = new jf();
        var n = m.filter(
          (z) =>
            z.Xa === b &&
            !!a.h[z.O.getId()] &&
            Ke(D(z.qa, De, 3), h) &&
            Ke(D(z.O, De, 3), h)
        );
        if (n.length) for (const z of n) k.push(z.O);
        else if (
          !a.za &&
          (2 === t ? ((n = d[1]), ic(A, 2, kf, xb(l))) : (n = d[0]),
          (l =
            n?.(String(l)) ??
            (2 === t && 1 === M(m[0].qa, 11) ? void 0 : d[0](String(l)))),
          void 0 !== l)
        ) {
          for (const z of m)
            if (z.Xa === b) {
              m = l - z.ib;
              n = z.eb;
              const E = z.fb,
                J = z.Ab;
              0 <= m &&
                m < n * E &&
                m % E === J &&
                Ke(D(z.qa, De, 3), h) &&
                Ke(D(z.O, De, 3), h) &&
                ((m = M(z.qa, 13)),
                0 !== m &&
                  void 0 !== m &&
                  ((n = a.i[String(m)]),
                  void 0 !== n && n !== z.O.getId()
                    ? Qf(a.M, a.i[String(m)], z.O.getId(), m)
                    : (a.i[String(m)] = z.O.getId())),
                k.push(z.O));
            }
          0 !== lc(A, kf) && (C(A, 3, Ab(l), 0), g.push(A));
        }
      }
    for (const t of k)
      (d = t.getId()),
        e.push(d),
        wo(a, d, f ? 4 : c),
        hg(F(t, Ne, 2), f ? jg() : [c], a.M, d);
    Of(a.M, b, c, e, g, 1);
    return e;
  }
  function yo(a, b) {
    b = b.map((c) => new ql(c)).filter((c) => !vo.includes(M(c, 1)));
    a.ka = so(a.ka, b);
  }
  function zo(a, b) {
    T(
      1,
      (c) => {
        a.h[c] = !0;
      },
      b
    );
    T(2, (c, d, e) => xo(a, c, d, e), b);
    T(3, (c) => (a.g[c] || []).concat(a.g[4]), b);
    T(12, (c) => void yo(a, c), b);
    T(16, (c, d) => void wo(a, c, d), b);
  }
  var Ao = class {
    constructor(a, b, c, { za: d = !1, wc: e = [] } = {}) {
      this.ka = a;
      this.M = c;
      this.j = {};
      this.za = d;
      this.g = { [b]: [], [4]: [] };
      this.h = {};
      this.i = {};
      if ((a = ie())) {
        a = a.split(",") || [];
        for (const f of a) (a = Number(f)) && (this.h[a] = !0);
      }
      for (const f of e) this.h[f] = !0;
    }
  };
  function Bo(a, b) {
    a.g = lg(14, b, () => {});
  }
  class Co {
    constructor() {
      this.g = () => {};
    }
  }
  function Do(a) {
    P(Co).g(a);
  }
  function Eo({
    sb: a,
    I: b,
    config: c,
    nb: d = no(),
    ob: e = 0,
    M: f = new Rf(
      D(a, rl, 5)?.g() ?? 0,
      D(a, rl, 5)?.h() ?? 0,
      D(a, rl, 5)?.i() ?? !1
    ),
    ka: g = so({ [0]: new Map(), [1]: new Map(), [2]: new Map() }, F(a, ql, 2)),
  }) {
    d.hasOwnProperty("init-done")
      ? (lg(12, d, () => {})(F(a, ql, 2).map((h) => h.toJSON())),
        lg(13, d, () => {})(
          F(a, Ne, 1).map((h) => h.toJSON()),
          e
        ),
        b && lg(14, d, () => {})(b),
        Fo(e, d))
      : (zo(new Ao(g, e, f, c), d),
        mg(d),
        ng(d),
        og(d),
        Fo(e, d),
        hg(F(a, Ne, 1), [e], f, void 0, !0),
        (Tf = Tf || !(!c || !c.wb)),
        Do(ro),
        b && Do(b));
  }
  function Fo(a, b = no()) {
    pg(P(qg), b, a);
    Go(b, a);
    Bo(P(Co), b);
    P(Qc).s();
  }
  function Go(a, b) {
    const c = P(Qc);
    c.i = (d, e) => lg(5, a, () => !1)(d, e, b);
    c.j = (d, e) => lg(6, a, () => 0)(d, e, b);
    c.g = (d, e) => lg(7, a, () => "")(d, e, b);
    c.h = (d, e) => lg(8, a, () => [])(d, e, b);
    c.s = () => {
      lg(15, a, () => {})(b);
    };
  }
  function Ho(a, b) {
    b = { [0]: uo(Id(b).toString()) };
    b = P(qg).j(a, b);
    ug.Y(1085, ho(P(co), a, b));
  }
  function Io(a, b, c) {
    var d = X(a);
    if (d.plle) Fo(1, no(a));
    else {
      d.plle = !0;
      d = D(b, sl, 12);
      var e = K(b, 9);
      Eo({
        sb: d,
        I: mo(c, b),
        config: { za: e && !!a.google_disable_experiments, wb: e },
        nb: no(a),
        ob: 1,
      });
      if ((c = L(b, 15))) (c = Number(c)), P(qg).i(c);
      for (const f of cc(b, 19, Bb)) P(qg).h(f);
      Ho(12, a);
      Ho(10, a);
      a = qd(a) || a;
      em(a.location, "google_mc_lab") && P(qg).h(44738307);
      em(a.location, "google_auto_storify_swipeable") && P(qg).h(44773747);
      em(a.location, "google_auto_storify_scrollable") && P(qg).h(44773746);
    }
  }
  function Jo(a) {
    W.Da((b) => {
      b.shv = String(a);
      b.mjsv = xm({ va: "m202402270101", Ca: a });
      const c = P(qg).g(),
        d = jo();
      b.eid = c.concat(d).join(",");
    });
  }
  function Ko(a) {
    var b = W;
    try {
      return Ac(a, Be), new ul(JSON.parse(a));
    } catch (c) {
      b.J(838, c instanceof Error ? c : Error(String(c)), void 0, (d) => {
        d.jspb = String(a);
      });
    }
    return new ul();
  }
  function Lo(a) {
    if (a.g) return a.g;
    a.B && a.B(a.h) ? (a.g = a.h) : (a.g = Ad(a.h, a.D));
    return a.g ?? null;
  }
  var Mo = class extends Kj {
    constructor(a, b, c) {
      super();
      this.D = b;
      this.B = c;
      this.C = new Map();
      this.j = new Map();
      this.h = a;
    }
  };
  const No = (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.ca({ wa: c ?? void 0, rb: d ? void 0 : 2 });
      });
    },
    Oo = {
      xb: (a) => a.ca,
      yb: (a, b) => ({
        __uspapiCall: { callId: b, command: "getUSPData", version: 1 },
      }),
      Bb: (a, b) => {
        b = b.__uspapiReturn;
        a({ wa: b.returnValue ?? void 0, rb: b.success ? void 0 : 2 });
      },
    };
  var Po = class extends Kj {
    constructor() {
      var a = S;
      super();
      this.timeoutMs = {}.timeoutMs ?? 500;
      this.caller = new Mo(
        a,
        "__uspapiLocator",
        (b) => "function" === typeof b.__uspapi
      );
      this.caller.C.set("getDataWithCallback", No);
      this.caller.j.set("getDataWithCallback", Oo);
    }
  };
  var Qo = Ec(class extends N {});
  const Ro = (a, b) => {
      const c = {
        cb: (d) => {
          d = Qo(d);
          b.ca({ wa: d });
        },
      };
      b.spsp && (c.spsp = b.spsp);
      a = a.googlefc || (a.googlefc = {});
      a.__fci = a.__fci || [];
      a.__fci.push(b.command, c);
    },
    So = {
      xb: (a) => a.ca,
      yb: (a, b) => ({
        __fciCall: { callId: b, command: a.command, spsp: a.spsp || void 0 },
      }),
      Bb: (a, b) => {
        a({ wa: b });
      },
    };
  var To = class extends Kj {
    constructor() {
      var a = S;
      super();
      this.g = this.h = !1;
      this.caller = new Mo(a, "googlefcPresent");
      this.caller.C.set("getDataWithCallback", Ro);
      this.caller.j.set("getDataWithCallback", So);
    }
  };
  var Uo = (a) => {
    Oc(window, "message", (b) => {
      let c;
      try {
        c = JSON.parse(b.data);
      } catch (d) {
        return;
      }
      !c || "sc-cnf" !== c.googMsgType || a(c, b);
    });
  };
  function Vo(a, b) {
    return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`;
  }
  function Wo(a, b) {
    return `&${a}=${b.toFixed(3)}`;
  }
  function Xo() {
    const a = new Set(),
      b = pj();
    try {
      if (!b) return a;
      const c = b.pubads();
      for (const d of c.getSlots()) a.add(d.getSlotId().getDomId());
    } catch {}
    return a;
  }
  function Yo(a) {
    a = a.id;
    return (
      null != a &&
      (Xo().has(a) ||
        a.startsWith("google_ads_iframe_") ||
        a.startsWith("aswift"))
    );
  }
  function Zo(a, b, c) {
    if (!a.sources) return !1;
    switch ($o(a)) {
      case 2:
        const d = ap(a);
        if (d) return c.some((f) => bp(d, f));
        break;
      case 1:
        const e = cp(a);
        if (e) return b.some((f) => bp(e, f));
    }
    return !1;
  }
  function $o(a) {
    if (!a.sources) return 0;
    a = a.sources.filter((b) => b.previousRect && b.currentRect);
    if (1 <= a.length) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function cp(a) {
    return dp(a, (b) => b.currentRect);
  }
  function ap(a) {
    return dp(a, (b) => b.previousRect);
  }
  function dp(a, b) {
    return a.sources.reduce((c, d) => {
      d = b(d);
      return c
        ? d && 0 !== d.width * d.height
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  function bp(a, b) {
    const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return 0 >= c || 0 >= a
      ? !1
      : 50 <= (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top));
  }
  function ep() {
    const a = Array.from(document.getElementsByTagName("iframe")).filter(Yo),
      b = [...Xo()]
        .map((c) => document.getElementById(c))
        .filter((c) => null !== c);
    fp = window.scrollX;
    gp = window.scrollY;
    return (hp = [...a, ...b].map((c) => c.getBoundingClientRect()));
  }
  function ip() {
    var a = new jp();
    if (Q(Kc)) {
      var b = window;
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = !0;
        b = [
          "layout-shift",
          "largest-contentful-paint",
          "first-input",
          "longtask",
        ];
        a.kb.qb && b.push("event");
        for (const c of b)
          (b = { type: c, buffered: !0 }),
            "event" === c && (b.durationThreshold = 40),
            kp(a).observe(b);
        lp(a);
      }
    }
  }
  function mp(a, b) {
    const c = fp !== window.scrollX || gp !== window.scrollY ? [] : hp,
      d = ep();
    for (const e of b.getEntries())
      switch (((b = e.entryType), b)) {
        case "layout-shift":
          np(a, e, c, d);
          break;
        case "largest-contentful-paint":
          b = e;
          a.Ka = Math.floor(b.renderTime || b.loadTime);
          a.Ja = b.size;
          break;
        case "first-input":
          b = e;
          a.Ga = Number((b.processingStart - b.startTime).toFixed(3));
          a.Ha = !0;
          a.g.some((f) =>
            f.entries.some(
              (g) => e.duration === g.duration && e.startTime === g.startTime
            )
          ) || op(a, e);
          break;
        case "longtask":
          b = Math.max(0, e.duration - 50);
          a.B += b;
          a.H = Math.max(a.H, b);
          a.sa += 1;
          break;
        case "event":
          op(a, e);
          break;
        default:
          nd(b, void 0);
      }
  }
  function kp(a) {
    a.M ||
      (a.M = new PerformanceObserver(
        Ji(640, (b) => {
          mp(a, b);
        })
      ));
    return a.M;
  }
  function lp(a) {
    const b = Ji(641, () => {
        var d = document;
        2 ===
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ""
              ] || 0) && pp(a);
      }),
      c = Ji(641, () => void pp(a));
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.Fa = () => {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      kp(a).disconnect();
    };
  }
  function pp(a) {
    if (!a.Na) {
      a.Na = !0;
      kp(a).takeRecords();
      var b =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
      window.LayoutShift &&
        ((b += Wo("cls", a.C)),
        (b += Wo("mls", a.X)),
        (b += Vo("nls", a.ra)),
        window.LayoutShiftAttribution &&
          ((b += Wo("cas", a.s)),
          (b += Vo("nas", a.Ma)),
          (b += Wo("was", a.Ra))),
        (b += Wo("wls", a.ta)),
        (b += Wo("tls", a.Qa)));
      window.LargestContentfulPaint &&
        ((b += Vo("lcp", a.Ka)), (b += Vo("lcps", a.Ja)));
      window.PerformanceEventTiming && a.Ha && (b += Vo("fid", a.Ga));
      window.PerformanceLongTaskTiming &&
        ((b += Vo("cbt", a.B)), (b += Vo("mbt", a.H)), (b += Vo("nlt", a.sa)));
      let d = 0;
      for (var c of document.getElementsByTagName("iframe")) Yo(c) && d++;
      b += Vo("nif", d);
      b += Vo("ifi", $d(window));
      c = P(qg).g();
      b += `&${"eid"}=${encodeURIComponent(c.join())}`;
      b += `&${"top"}=${p === p.top ? 1 : 0}`;
      b += a.Pa ? `&${"qqid"}=${encodeURIComponent(a.Pa)}` : Vo("pvsid", Id(p));
      window.googletag && (b += "&gpt=1");
      c = Math.min(
        a.g.length - 1,
        Math.floor((a.M ? a.Ia : performance.interactionCount || 0) / 50)
      );
      0 <= c && ((c = a.g[c].latency), 0 <= c && (b += Vo("inp", c)));
      window.fetch(b, {
        keepalive: !0,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors",
      });
      a.Fa();
    }
  }
  function np(a, b, c, d) {
    if (!b.hadRecentInput) {
      a.C += Number(b.value);
      Number(b.value) > a.X && (a.X = Number(b.value));
      a.ra += 1;
      if ((c = Zo(b, c, d))) (a.s += b.value), a.Ma++;
      if (5e3 < b.startTime - a.La || 1e3 < b.startTime - a.Oa)
        (a.La = b.startTime), (a.h = 0), (a.i = 0);
      a.Oa = b.startTime;
      a.h += b.value;
      c && (a.i += b.value);
      a.h > a.ta &&
        ((a.ta = a.h), (a.Ra = a.i), (a.Qa = b.startTime + b.duration));
    }
  }
  function op(a, b) {
    qp(a, b);
    const c = a.g[a.g.length - 1],
      d = a.D[b.interactionId];
    if (d || 10 > a.g.length || b.duration > c.latency)
      d
        ? (d.entries.push(b), (d.latency = Math.max(d.latency, b.duration)))
        : ((b = { id: b.interactionId, latency: b.duration, entries: [b] }),
          (a.D[b.id] = b),
          a.g.push(b)),
        a.g.sort((e, f) => f.latency - e.latency),
        a.g.splice(10).forEach((e) => {
          delete a.D[e.id];
        });
  }
  function qp(a, b) {
    b.interactionId &&
      ((a.ba = Math.min(a.ba, b.interactionId)),
      (a.j = Math.max(a.j, b.interactionId)),
      (a.Ia = a.j ? (a.j - a.ba) / 7 + 1 : 0));
  }
  var jp = class {
      constructor() {
        var a = { qb: Q(Ch) };
        this.i = this.h = this.ra = this.X = this.C = 0;
        this.Oa = this.La = Number.NEGATIVE_INFINITY;
        this.g = [];
        this.D = {};
        this.Ia = 0;
        this.ba = Infinity;
        this.Ga =
          this.Ja =
          this.Ka =
          this.Ma =
          this.Ra =
          this.s =
          this.Qa =
          this.ta =
          this.j =
            0;
        this.Ha = !1;
        this.sa = this.H = this.B = 0;
        this.M = null;
        this.Na = !1;
        this.Fa = () => {};
        const b = document.querySelector("[data-google-query-id]");
        this.Pa = b ? b.getAttribute("data-google-query-id") : null;
        this.kb = a;
      }
    },
    fp,
    gp,
    hp = [];
  let rp = null;
  const sp = [],
    tp = new Map();
  let up = -1;
  function vp(a) {
    return ii.test(a.className) && "done" !== a.dataset.adsbygoogleStatus;
  }
  function wp(a, b, c) {
    a.dataset.adsbygoogleStatus = "done";
    xp(a, b, c);
  }
  function xp(a, b, c) {
    var d = window;
    d.google_spfd || (d.google_spfd = Qn);
    var e = b.google_reactive_ads_config;
    e || Qn(a, b, d, c);
    Um(d, b);
    if (!yp(a, b, d)) {
      if (e) {
        e = e.page_level_pubvars || {};
        if (
          X(S).page_contains_reactive_tag &&
          !X(S).allow_second_reactive_tag
        ) {
          if (e.pltais) {
            zl(!1);
            return;
          }
          throw new V("Only one 'enable_page_level_ads' allowed per page.");
        }
        X(S).page_contains_reactive_tag = !0;
        zl(7 === e.google_pgb_reactive);
      }
      b.google_unique_id = Zd(d);
      vd(ym, (f, g) => {
        b[g] = b[g] || d[g];
      });
      "sd" !== b.google_loader_used && (b.google_loader_used = "aa");
      b.google_reactive_tag_first = 1 === (X(S).first_tag_on_page || 0);
      bj(164, () => {
        $m(d, b, a, c);
      });
    }
  }
  function yp(a, b, c) {
    var d = b.google_reactive_ads_config,
      e =
        "string" === typeof a.className &&
        RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
      f = xl(c);
    if (f && f.Sa && "on" !== b.google_adtest && !e) {
      e = Sh(a, c);
      const g = Nh(c).clientHeight;
      e = 0 == g ? null : e / g;
      if (!f.ua || (f.ua && (e || 0) >= f.ua))
        return (
          (a.className += " adsbygoogle-ablated-ad-slot"),
          (c = c.google_sv_map = c.google_sv_map || {}),
          (d = ea(a)),
          (b.google_element_uid = d),
          (c[b.google_element_uid] = b),
          a.setAttribute("google_element_uid", String(d)),
          "slot" === f.Ib &&
            (null !== zd(a.getAttribute("width")) &&
              a.setAttribute("width", "0"),
            null !== zd(a.getAttribute("height")) &&
              a.setAttribute("height", "0"),
            (a.style.width = "0px"),
            (a.style.height = "0px")),
          !0
        );
    }
    if (
      (f = td(a, c)) &&
      "none" === f.display &&
      !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)
    )
      return (
        c.document.createComment &&
          a.appendChild(
            c.document.createComment(
              "No ad requested because of display:none on the adsbygoogle tag"
            )
          ),
        !0
      );
    a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
    return (1 !== b.google_reactive_ad_format &&
      8 !== b.google_reactive_ad_format) ||
      !a
      ? !1
      : (p.console &&
          p.console.warn(
            "Adsbygoogle tag with data-reactive-ad-format=" +
              String(b.google_reactive_ad_format) +
              " is deprecated. Check out page-level ads at https://www.google.com/adsense"
          ),
        !0);
  }
  function zp(a) {
    var b = document.getElementsByTagName("INS");
    for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
      var c = e;
      if (
        vp(c) &&
        "reserved" !== c.dataset.adsbygoogleStatus &&
        (!a || e.id === a)
      )
        return e;
    }
    return null;
  }
  function Ap(a, b, c) {
    if (a && "shift" in a) {
      bo((e) => {
        uc(mc(e), 2) || ((e = mc(e)), xc(e, 2));
      });
      for (var d = 20; 0 < a.length && 0 < d; ) {
        try {
          Bp(a.shift(), b, c);
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
        --d;
      }
    }
  }
  function Cp() {
    const a = sd("INS");
    a.className = "adsbygoogle";
    a.className += " adsbygoogle-noablate";
    Cd(a);
    return a;
  }
  function Dp(a, b) {
    const c = {},
      d = Ql(a.google_ad_client, b);
    vd(Mh, (g, h) => {
      !1 === a.enable_page_level_ads
        ? (c[h] = !1)
        : a.hasOwnProperty(h)
        ? (c[h] = a[h])
        : d.includes(g) && (c[h] = !1);
    });
    da(a.enable_page_level_ads) &&
      (c.page_level_pubvars = a.enable_page_level_ads);
    const e = Cp();
    Jd.body.appendChild(e);
    const f = {
      google_reactive_ads_config: c,
      google_ad_client: a.google_ad_client,
    };
    f.google_pause_ad_requests = !!X(S).pause_ad_requests;
    wp(e, f, b);
    bo((g) => {
      uc(mc(g), 6) || ((g = mc(g)), xc(g, 6));
    });
  }
  function Ep(a, b) {
    nm(p).wasPlaTagProcessed = !0;
    const c = () => {
        Dp(a, b);
      },
      d = p.document;
    if (d.body || "complete" === d.readyState || "interactive" === d.readyState)
      Dp(a, b);
    else {
      const e = Nc(W.oa(191, c));
      Oc(d, "DOMContentLoaded", e);
      null != p.MutationObserver &&
        new p.MutationObserver((f, g) => {
          d.body && (e(), g.disconnect());
        }).observe(d, { childList: !0, subtree: !0 });
    }
  }
  function Bp(a, b, c) {
    const d = {};
    bj(
      165,
      () => {
        Fp(a, d, b, c);
      },
      (e) => {
        e.client = e.client || d.google_ad_client || a.google_ad_client;
        e.slotname = e.slotname || d.google_ad_slot;
        e.tag_origin = e.tag_origin || d.google_tag_origin;
      }
    );
  }
  function Gp(a) {
    delete a.google_checked_head;
    vd(a, (b, c) => {
      hi[c] ||
        (delete a[c],
        (b = c.replace("google", "data").replace(/_/g, "-")),
        p.console.warn(`AdSense head tag doesn't support ${b} attribute.`));
    });
  }
  function Hp(a, b) {
    var c =
      S.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])'
      ) ||
      S.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'
      );
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = X(window);
      if (d.head_tag_slot_vars) Ip(c);
      else {
        bo((g) => {
          g = mc(g);
          C(g, 7, ub(!0), !1);
        });
        var e = {};
        On(c, e);
        Gp(e);
        var f = Vc(e);
        d.head_tag_slot_vars = f;
        c = { google_ad_client: e.google_ad_client, enable_page_level_ads: e };
        e.google_ad_intent_query && (c.enable_ad_intent_display_ads = !0);
        "bottom" === e.google_overlays && (c.overlays = { bottom: !0 });
        delete e.google_overlays;
        S.adsbygoogle || (S.adsbygoogle = []);
        d = S.adsbygoogle;
        d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
        e.google_adbreak_test || b.h()?.h()
          ? Jp(f, a)
          : Uo(() => {
              Jp(f, a);
            });
      }
    }
  }
  function Ip(a) {
    const b = X(window).head_tag_slot_vars,
      c = a.getAttribute("src") || "";
    if (
      (a = ld(c, "client") || a.getAttribute("data-ad-client") || "") &&
      a !== b.google_ad_client
    )
      throw new V(
        "Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " +
          a +
          ", " +
          b.google_ad_client
      );
  }
  function Kp(a) {
    if ("object" === typeof a && null != a) {
      if ("string" === typeof a.type) return 2;
      if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks)
        return 3;
    }
    return 0;
  }
  function Fp(a, b, c, d) {
    if (null == a) throw new V("push() called with no parameters.");
    bo((f) => {
      uc(mc(f), 3) || ((f = mc(f)), xc(f, 3));
    });
    d.i() && Lp(a, d.g().g(), L(d, 2));
    var e = Kp(a);
    if (0 !== e)
      if (
        ((d = Al()),
        d.first_slotcar_request_processing_time ||
          ((d.first_slotcar_request_processing_time = Date.now()),
          (d.adsbygoogle_execution_start_time = oa)),
        null == rp)
      )
        Mp(a), sp.push(a);
      else if (3 === e) {
        const f = rp;
        bj(787, () => {
          f.handleAdConfig(a);
        });
      } else dj(730, rp.handleAdBreak(a));
    else {
      oa = new Date().getTime();
      Vm(c, d, Np(a));
      Op();
      a: {
        if (
          !a.enable_ad_intent_display_ads &&
          void 0 != a.enable_page_level_ads
        ) {
          if ("string" === typeof a.google_ad_client) {
            e = !0;
            break a;
          }
          throw new V("'google_ad_client' is missing from the tag config.");
        }
        e = !1;
      }
      if (e)
        bo((f) => {
          uc(mc(f), 4) || ((f = mc(f)), xc(f, 4));
        }),
          Pp(a, d);
      else if (
        ((e = a.params) &&
          vd(e, (f, g) => {
            b[g] = f;
          }),
        "js" === b.google_ad_output)
      )
        console.warn(
          "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
        );
      else {
        e = Qp(a.element);
        On(e, b);
        c = X(p).head_tag_slot_vars || {};
        vd(c, (f, g) => {
          b.hasOwnProperty(g) || (b[g] = f);
        });
        if (e.hasAttribute("data-require-head") && !X(p).head_tag_slot_vars)
          throw new V(
            "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
          );
        if (!b.google_ad_client)
          throw new V("Ad client is missing from the slot.");
        if ((c = 0 === (X(S).first_tag_on_page || 0) && rm(b)))
          bo((f) => {
            uc(mc(f), 5) || ((f = mc(f)), xc(f, 5));
          }),
            Rp(c);
        0 === (X(S).first_tag_on_page || 0) && (X(S).first_tag_on_page = 2);
        b.google_pause_ad_requests = !!X(S).pause_ad_requests;
        wp(e, b, d);
      }
    }
  }
  let Sp = !1;
  function Lp(a, b, c) {
    Sp ||
      ((Sp = !0),
      (a = Np(a) || Cm(S)),
      cj("predictive_abg", { a_c: a, p_c: b.join(), b_v: c }, 0.01));
  }
  function Np(a) {
    return a.google_ad_client
      ? a.google_ad_client
      : (a = a.params) && a.google_ad_client
      ? a.google_ad_client
      : "";
  }
  function Op() {
    if (Q(ph)) {
      var a = xl(S);
      if (!(a = a && a.Sa)) {
        a = S;
        try {
          var b = a.localStorage;
        } catch (c) {
          b = null;
        }
        b = b ? ll(b) : null;
        a = !(b && kl(b) && b);
      }
      a || yl(S, 1);
    }
  }
  function Rp(a) {
    Kd(() => {
      nm(p).wasPlaTagProcessed || (p.adsbygoogle && p.adsbygoogle.push(a));
    });
  }
  function Pp(a, b) {
    0 === (X(S).first_tag_on_page || 0) && (X(S).first_tag_on_page = 1);
    if (a.tag_partner) {
      var c = a.tag_partner;
      const d = X(p);
      d.tag_partners = d.tag_partners || [];
      d.tag_partners.push(c);
    }
    sm(a, b);
    Ep(a, b);
  }
  function Qp(a) {
    if (a) {
      if (!vp(a) && (a.id ? (a = zp(a.id)) : (a = null), !a))
        throw new V("'element' has already been filled.");
      if (!("innerHTML" in a))
        throw new V("'element' is not a good DOM element.");
    } else if (((a = zp()), !a))
      throw new V(
        "All 'ins' elements in the DOM with class=adsbygoogle already have ads in them."
      );
    return a;
  }
  function Tp() {
    var a = new Sj(S),
      b = new Po(),
      c = new To(),
      d = S.__cmp ? 1 : 0;
    a = Pj(a) ? 1 : 0;
    b = Lo(b.caller) ? 1 : 0;
    c.h || ((c.g = !!Lo(c.caller)), (c.h = !0));
    c = c.g;
    cj("cmpMet", { tcfv1: d, tcfv2: a, usp: b, fc: c ? 1 : 0, ptt: 9 }, 0.001);
  }
  function Up(a) {
    var b = Aj();
    Gj(b, 26, !!Number(a));
  }
  function Vp(a) {
    Number(a)
      ? (X(S).pause_ad_requests = !0)
      : ((X(S).pause_ad_requests = !1),
        (a = () => {
          if (!X(S).pause_ad_requests) {
            var b = {};
            let c;
            "function" === typeof window.CustomEvent
              ? (c = new CustomEvent(
                  "adsbygoogle-pub-unpause-ad-requests-event",
                  b
                ))
              : ((c = document.createEvent("CustomEvent")),
                c.initCustomEvent(
                  "adsbygoogle-pub-unpause-ad-requests-event",
                  !!b.bubbles,
                  !!b.cancelable,
                  b.detail
                ));
            S.dispatchEvent(c);
          }
        }),
        p.setTimeout(a, 0),
        p.setTimeout(a, 1e3));
  }
  function Wp(a) {
    a && a.call && "function" === typeof a && window.setTimeout(a, 0);
  }
  function Jp(a, b) {
    b = mm(2, p, b.Hb).Ta.then((c) => {
      null == rp && (c.init(a), (rp = c), Xp(c));
    });
    W.Y(723, b);
    b.finally(() => {
      sp.length = 0;
      cj("slotcar", {
        event: "api_ld",
        time: Date.now() - oa,
        time_pr: Date.now() - up,
      });
      Q(Fh) && io(P(co), af(23));
    });
  }
  function Xp(a) {
    for (const [c, d] of tp) {
      var b = c;
      const e = d;
      -1 !== e && (p.clearTimeout(e), tp.delete(b));
    }
    for (b = 0; b < sp.length; b++) {
      if (tp.has(b)) continue;
      const c = sp[b],
        d = Kp(c);
      bj(723, () => {
        if (3 === d) a.handleAdConfig(c);
        else if (2 === d) {
          var e = a.handleAdBreakBeforeReady(c);
          W.Y(730, e);
        }
      });
    }
  }
  function Mp(a) {
    var b = sp.length;
    if (2 === Kp(a) && "preroll" === a.type && null != a.adBreakDone) {
      var c = a.adBreakDone;
      -1 === up && (up = Date.now());
      var d = p.setTimeout(() => {
        try {
          c({
            breakType: "preroll",
            breakName: a.name,
            breakFormat: "preroll",
            breakStatus: "timeout",
          }),
            tp.set(b, -1),
            cj("slotcar", { event: "pr_to", source: "adsbygoogle" }),
            Q(Fh) && io(P(co), af(22));
        } catch (e) {
          console.error(
            "[Ad Placement API] adBreakDone callback threw an error:",
            e instanceof Error ? e : Error(String(e))
          );
        }
      }, 1e3 * Rc(Eh));
      tp.set(b, d);
    }
  }
  function Yp() {
    var a = S.document,
      b = Ud`https://googleads.g.doubleclick.net`;
    const c = a.createElement("LINK");
    c.crossOrigin = "";
    a: {
      if (b instanceof Xc) c.href = $c(b).toString();
      else {
        if (-1 === od.indexOf("preconnect"))
          throw Error(
            'TrustedResourceUrl href attribute required with rel="preconnect"'
          );
        b instanceof dd
          ? (b =
              b instanceof dd && b.constructor === dd
                ? b.g
                : "type_error:SafeUrl")
          : (b = md.test(b) ? b : void 0);
        if (void 0 === b) break a;
        c.href = b;
      }
      c.rel = "preconnect";
    }
    a.head.appendChild(c);
  }
  (function (a, b, c, d = () => {}) {
    W.hb(ej);
    bj(166, () => {
      const e = new Mf(2, a);
      try {
        sb((n) => {
          var t = new Af();
          var v = new zf();
          try {
            var w = Id(window);
            wc(v, 1, w);
          } catch (J) {}
          try {
            var A = P(qg).g();
            hc(v, 2, A, zb);
          } catch (J) {}
          try {
            yc(v, 3, window.document.URL);
          } catch (J) {}
          t = oc(t, 2, v);
          v = new yf();
          v = C(v, 1, xb(1191), 0);
          try {
            var z = Be(n?.name) ? n.name : "Unknown error";
            yc(v, 2, z);
          } catch (J) {}
          try {
            var E = Be(n?.message) ? n.message : `Caught ${n}`;
            yc(v, 3, E);
          } catch (J) {}
          try {
            const J = Be(n?.stack) ? n.stack : Error().stack;
            J && hc(v, 4, J.split(/\n\s*/), Gb);
          } catch (J) {}
          n = oc(t, 1, v);
          z = new xf();
          try {
            yc(z, 1, "m202402270101");
          } catch {}
          pc(n, 6, Bf, z);
          wc(n, 5, 1);
          Df(e, n);
        });
      } catch (n) {}
      const f = Ko(b);
      Jo(L(f, 2));
      wl(K(f, 6));
      Hj(Aj(), L(f, 24));
      d();
      Wd(16, [1, f.toJSON()]);
      var g = Yd(Xd(S)) || S;
      const h = c(xm({ va: a, Ca: L(f, 2) }), f);
      var k = null === S.document.currentScript ? 1 : lo(h.Jb);
      Hl(g, f);
      Io(g, f, k);
      Q(fh) && Yp();
      bo((n) => {
        var t = sc(G(n, 1)) + 1;
        C(n, 1, Ab(t), 0);
        S.top === S && ((t = sc(G(n, 2)) + 1), C(n, 2, Ab(t), 0));
        uc(mc(n), 1) || ((n = mc(n)), xc(n, 1));
      });
      dj(1086, go(0 === k));
      if (!Aa() || 0 <= qa(Fa(), 11)) {
        aj(Q(Gh));
        cn();
        Uk();
        try {
          ip();
        } catch {}
        bn();
        Hp(h, f);
        g = window;
        k = g.adsbygoogle;
        if (!k || !k.loaded) {
          cj(
            "new_abg_tag",
            { value: `${K(f, 16)}`, host_v: `${K(f, 22)}`, frequency: 0.01 },
            0.01
          );
          Tp();
          var l = {
            push: (n) => {
              Bp(n, h, f);
            },
            loaded: !0,
          };
          try {
            Object.defineProperty(l, "requestNonPersonalizedAds", { set: Up }),
              Object.defineProperty(l, "pauseAdRequests", { set: Vp }),
              Object.defineProperty(l, "onload", { set: Wp });
          } catch {}
          if (k)
            for (var m of ["requestNonPersonalizedAds", "pauseAdRequests"])
              void 0 !== k[m] && (l[m] = k[m]);
          Ap(k, h, f);
          g.adsbygoogle = l;
          k && (l.onload = k.onload);
          Q(lh) || ((m = Zm(h)) && document.documentElement.appendChild(m));
        }
      }
    });
  })(
    "m202402270101",
    "undefined" === typeof sttc ? void 0 : sttc,
    function (a, b) {
      const c = 2012 < sc(G(b, 1)) ? `_fy${sc(G(b, 1))}` : "",
        d = L(b, 3);
      b = L(b, 2);
      Ud`data:text/javascript,//show_ads_impl_preview.js`;
      return {
        Hb: Ud`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
        Fb: Ud`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl${c}.js`,
        Eb: Ud`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl_with_ama${c}.js`,
        Nb: Ud`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
        Lb: Ud`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_inhead${c}.html`,
        Mb: Ud`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_nohtml${c}.html`,
        Jb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/,
      };
    }
  );
}.call(
  this,
  '[2021,"r20240228","r20190131",null,null,null,null,".google.co.in",null,null,null,[[[1310,null,null,[1]],[1322,null,null,[1]],[1277,null,null,[1]],[1308,null,null,[1]],[1275,null,null,[1]],[1311,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[1]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[1247,null,null,[1]],[1319,null,null,[1]],[null,1224,null,[null,0.01]],[1312,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1323,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[1268,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1285,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,["en","de"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,["44786015","44786016"]],null,1261],[1282,null,null,[1]],[null,1072,null,[null,0.75]],[null,null,1307,[null,null,"nohtml"]],[null,609316998,null,[null,100001]],[null,566560958,null,[null,30000]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[null,null,null,[null,null,null,["1","2","4","6","8","9","10","11","12","13","14","15","16","17"]],null,556791602],[null,595645509,null,[null,0.3]],[null,561668774,null,[null,0.1]],[604916478,null,null,[1]],[null,469675170,null,[null,30000]],[160889229,null,null,[1]],[606179052,null,null,[1]],[586386407,null,null,[1]],[573506525,null,null,[1]],[573506524,null,null,[1]],[586643641,null,null,[1]],[567362967,null,null,[1]],[570863962,null,null,[1]],[null,null,570879859,[null,null,"control_1\\\\.\\\\d"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[45615403,null,null,[1]],[10012,null,null,[1]],[10013,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[10010,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[null,550718588,null,[null,250]],[597667424,null,null,[1]],[null,null,null,[null,null,null,["As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==","AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==","A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]],null,1934],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,["browsing-topics"]],[4,null,8,null,null,null,null,["document.browsingTopics"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,["browsing-topics"]],[1,[[4,null,70,null,null,null,null,["browsing-topics"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,["navigator.runAdAuction"]],[4,null,70,null,null,null,null,["run-ad-auction"]],[4,null,70,null,null,null,null,["join-ad-interest-group"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,["join-ad-interest-group"]],[1,[[4,null,70,null,null,null,null,["join-ad-interest-group"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,["run-ad-auction"]],[1,[[4,null,70,null,null,null,null,["run-ad-auction"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,["attribution-reporting"]],[1,[[4,null,70,null,null,null,null,["attribution-reporting"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,["shared-storage"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,["shared-storage"]],[1,[[4,null,70,null,null,null,null,["shared-storage"]]]]]]]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510],[44804781],[44806359]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[1,[[31078995],[31078996,[[45545710,null,null,[1]],[45459826,null,null,[1]],[531007060,null,null,[1]],[45545724,null,null,[1]],[45430975,null,null,[1]],[531582260,null,null,[1]]]]]],[null,[[31081080],[31081081,[[596652146,null,null,[1]]]],[31081082,[[596652146,null,null,[1]],[603378945,null,null,[1]]]]]],[1000,[[31081511,[[null,null,14,[null,null,"31081511"]]],[6,null,null,null,6,null,"31081511"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081512,[[null,null,14,[null,null,"31081512"]]],[6,null,null,null,6,null,"31081512"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081529,[[null,null,14,[null,null,"31081529"]]],[6,null,null,null,6,null,"31081529"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081530,[[null,null,14,[null,null,"31081530"]]],[6,null,null,null,6,null,"31081530"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31081563],[31081564]]],[100,[[31081586],[31081587,[[1324,null,null,[1]]]]]],[1000,[[31081602,[[null,null,14,[null,null,"31081602"]]],[6,null,null,null,6,null,"31081602"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31081603,[[null,null,14,[null,null,"31081603"]]],[6,null,null,null,6,null,"31081603"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31081612],[31081613,[[null,609316998,null,[null,2147483647]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[42532262],[42532263,[[null,1263,null,[null,16]]]],[42532264,[[null,1263,null,[null,4294967296]]]],[42532265,[[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532266,[[null,1263,null,[null,4294967296]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532267,[[null,1263,null,[null,16]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532268,[[1266,null,null,[1]]]]]],[1,[[42532360],[42532361,[[1260,null,null,[1]],[1291,null,null,[1]]]]],null,90],[1,[[42532362],[42532363]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[1,[[44795552],[44795553,[[1260,null,null,[1]]]]],null,90],[1,[[44795554],[44795555]]],[200,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[1000,[[44802674,[[506852289,null,null,[1]]],[12,null,null,null,2,null,"smitmehta\\\\.com/"]]],[4,null,55]],[50,[[95320376,[[1309,null,null,[1]]]],[95320377,[[null,null,null,[null,null,null,["en","de","fr"]],null,1273],[1309,null,null,[1]]]],[95320378,[[null,null,null,[null,null,null,["en","de","ja"]],null,1273],[1309,null,null,[1]]]]],null,75],[50,[[95321957,[[null,null,null,[null,null,null,["en","de","es"]],null,1273],[1309,null,null,[1]]]],[95321958,[[null,null,null,[null,null,null,["en","de","vi"]],null,1273],[1309,null,null,[1]]]],[95321963,[[1309,null,null,[1]]]]],null,75],[50,[[95322180,[[null,null,null,[null,null,null,["en","de","pt"]],null,1273],[1309,null,null,[1]]]],[95322181,[[null,null,null,[null,null,null,["en","de","ar"]],null,1273],[1309,null,null,[1]]]],[95322182,[[null,null,null,[null,null,null,["en","de","hi"]],null,1273],[1309,null,null,[1]]]],[95322183,[[null,null,null,[null,null,null,["en","de","it"]],null,1273],[1309,null,null,[1]]]],[95322184,[[null,null,null,[null,null,null,["en","de","pl"]],null,1273],[1309,null,null,[1]]]],[95322195,[[null,null,null,[null,null,null,["en","de","ko"]],null,1273],[1309,null,null,[1]]]],[95322329,[[1309,null,null,[1]]]]],null,75],[50,[[95322745],[95322746,[[1271,null,null,[1]]]],[95322747,[[1272,null,null,[1]]]],[95322748,[[1271,null,null,[1]],[1272,null,null,[1]]]]]],[50,[[95323760,[[1309,null,null,[1]]]],[95323761,[[null,null,null,[null,null,null,["en","de","nl"]],null,1273],[1309,null,null,[1]]]]],null,75],[1,[[95324297],[95324298]]],[1,[[95325421],[95325422,[[1321,null,null,[1]]]]]],[1,[[95325423],[95325424]]],[1,[[95325425],[95325426]]],[1,[[95325427],[95325428]]],[500,[[95325752],[95325753,[[607657092,null,null,[1]]]]],[4,null,55]],[50,[[95325974],[95325975,[[1302,null,null,[1]]]],[95325976,[[1318,null,null,[1]]]]]],[100,[[95326315],[95326316,[[597181299,null,null,[1]],[1120,null,null,[1]]]],[95326317,[[1120,null,null,[1]]]]],[4,null,55]]]],[17,[[50,[[31080990],[31080991,[[595827158,null,null,[1]]]]],null,null,null,null,null,null,null,149],[1,[[31081480],[31081481,[[45618987,null,null,[1]]]]],null,null,null,null,null,500,null,149],[50,[[95321865],[95321866,[[566279275,null,null,[1]]]],[95321867,[[566279276,null,null,[1]]]],[95321868,[[566279275,null,null,[1]],[566279276,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,145],[10,[[95322388,null,[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]],[95322389,null,[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]]],null,null,null,null,null,null,null,144],[1,[[95322397],[95322398,[[null,595645509,null,[null,0.2]]]],[95322399,[[null,595645509,null,[null,0.4]]]]],[4,null,55],null,null,null,null,null,null,140],[10,[[95322897],[95322898]],null,null,null,null,32,null,null,142,1],[500,[[95324160],[95324161,[[595118932,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,148],[100,[[95325784],[95325785,[[596859467,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,150],[100,[[95326430],[95326431,[[595989603,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,151],[250,[[95326436],[95326437,[[null,null,null,[null,null,null,["1","2","4","6","8","9","10","11","12","13","14","15","16","17","18","19","20"]],null,556791602]]]],[4,null,55],null,null,null,null,null,null,146]]],[11,[[1000,[[31081083,null,[4,null,6,null,null,null,null,["31081080"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31081084,null,[4,null,6,null,null,null,null,["31081081"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31081085,null,[4,null,6,null,null,null,null,["31081082"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18]]]],null,null,[null,1000,1,1000]],null,null,null,null,null,1815251928,[44759875,44759926,44759837]]'
));
