(function (sttc) {
  "use strict";
  var aa,
    ba =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          };
  function ca(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var da = ca(this),
    fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
    ha = {},
    ia = {};
  function ka(a, b, c) {
    if (!c || null != a) {
      c = ia[b];
      if (null == c) return a[b];
      c = a[c];
      return void 0 !== c ? c : a[b];
    }
  }
  function la(a, b, c) {
    if (b)
      a: {
        var d = a.split(".");
        a = 1 === d.length;
        var e = d[0],
          f;
        !a && e in ha ? (f = ha) : (f = da);
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e];
          if (!(g in f)) break a;
          f = f[g];
        }
        d = d[d.length - 1];
        c = fa && "es6" === c ? f[d] : null;
        b = b(c);
        null != b &&
          (a
            ? ba(ha, d, { configurable: !0, writable: !0, value: b })
            : b !== c &&
              (void 0 === ia[d] &&
                ((a = (1e9 * Math.random()) >>> 0),
                (ia[d] = fa ? da.Symbol(d) : "$jscp$" + a + "$" + d)),
              ba(f, ia[d], { configurable: !0, writable: !0, value: b })));
      }
  }
  la(
    "String.prototype.replaceAll",
    function (a) {
      return a
        ? a
        : function (b, c) {
            if (b instanceof RegExp && !b.global)
              throw new TypeError(
                "String.prototype.replaceAll called with a non-global RegExp argument."
              );
            return b instanceof RegExp
              ? this.replace(b, c)
              : this.replace(
                  new RegExp(
                    String(b)
                      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
                      .replace(/\x08/g, "\\x08"),
                    "g"
                  ),
                  c
                );
          };
    },
    "es_2021"
  );
  var na =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    oa;
  if (fa && "function" == typeof Object.setPrototypeOf)
    oa = Object.setPrototypeOf;
  else {
    var pa;
    a: {
      var qa = { a: !0 },
        ra = {};
      try {
        ra.__proto__ = qa;
        pa = ra.a;
        break a;
      } catch (a) {}
      pa = !1;
    }
    oa = pa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var sa = oa;
  function ta(a, b) {
    a.prototype = na(b.prototype);
    a.prototype.constructor = a;
    if (sa) sa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.Cj = b.prototype;
  }
  la(
    "AggregateError",
    function (a) {
      function b(c, d) {
        d = Error(d);
        "stack" in d && (this.stack = d.stack);
        this.errors = c;
        this.message = d.message;
      }
      if (a) return a;
      ta(b, Error);
      b.prototype.name = "AggregateError";
      return b;
    },
    "es_2021"
  );
  la(
    "Promise.any",
    function (a) {
      return a
        ? a
        : function (b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(
              b.map(function (c) {
                return Promise.resolve(c).then(
                  function (d) {
                    throw d;
                  },
                  function (d) {
                    return d;
                  }
                );
              })
            ).then(
              function (c) {
                throw new ha.AggregateError(c, "All promises were rejected");
              },
              function (c) {
                return c;
              }
            );
          };
    },
    "es_2021"
  ); /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var r = this || self;
  function va(a) {
    a: {
      var b = ["CLOSURE_FLAGS"];
      for (var c = r, d = 0; d < b.length; d++)
        if (((c = c[b[d]]), null == c)) {
          b = null;
          break a;
        }
      b = c;
    }
    a = b && b[a];
    return null != a ? a : !1;
  }
  function wa(a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  }
  function xa(a) {
    var b = wa(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function za(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function Aa(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, Ca) && a[Ca]) || (a[Ca] = ++Da)
    );
  }
  var Ca = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    Da = 0;
  function Fa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function Ga(a, b, c) {
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
  function Ha(a, b, c) {
    Ha =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? Fa
        : Ga;
    return Ha.apply(null, arguments);
  }
  function Ia(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function Ka(a, b, c) {
    a = a.split(".");
    c = c || r;
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
  function La(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Cj = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Un = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  function Ma(a) {
    return a;
  }
  var Na = { Sm: 0, Rm: 1, Qm: 2 };
  function Oa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Oa);
    else {
      const c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  La(Oa, Error);
  Oa.prototype.name = "CustomError";
  var Pa;
  function Qa(a, b) {
    a = a.split("%s");
    let c = "";
    const d = a.length - 1;
    for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    Oa.call(this, c + a[d]);
  }
  La(Qa, Oa);
  Qa.prototype.name = "AssertionError";
  function Ra(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Ua(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Va(a, b) {
    var c = a.length;
    const d = "string" === typeof a ? a.split("") : a;
    for (--c; 0 <= c; --c) c in d && b.call(void 0, d[c], c, a);
  }
  function Wa(a, b) {
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
  function Xa(a, b) {
    const c = a.length,
      d = Array(c),
      e = "string" === typeof a ? a.split("") : a;
    for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }
  function Za(a, b, c) {
    let d = c;
    Ua(a, function (e, f) {
      d = b.call(void 0, d, e, f, a);
    });
    return d;
  }
  function $a(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function ab(a, b) {
    return 0 <= Ra(a, b);
  }
  function bb(a, b) {
    b = Ra(a, b);
    let c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function db(a, b) {
    let c = 0;
    Va(a, function (d, e) {
      b.call(void 0, d, e, a) &&
        1 == Array.prototype.splice.call(a, e, 1).length &&
        c++;
    });
  }
  function eb(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function fb(a) {
    const b = a.length;
    if (0 < b) {
      const c = Array(b);
      for (let d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function gb(a, b) {
    for (let c = 1; c < arguments.length; c++) {
      const d = arguments[c];
      if (xa(d)) {
        const e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (let g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  function hb(a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  }
  function ib(a, b, c) {
    c = c || jb;
    let d = 0,
      e = a.length,
      f;
    for (; d < e; ) {
      const g = d + ((e - d) >>> 1);
      let h;
      h = c(b, a[g]);
      0 < h ? (d = g + 1) : ((e = g), (f = !h));
    }
    return f ? d : -d - 1;
  }
  function kb(a, b) {
    if (!xa(a) || !xa(b) || a.length != b.length) return !1;
    const c = a.length,
      d = mb;
    for (let e = 0; e < c; e++) if (!d(a[e], b[e])) return !1;
    return !0;
  }
  function jb(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function mb(a, b) {
    return a === b;
  }
  function nb(a) {
    const b = [];
    for (let c = 0; c < arguments.length; c++) {
      const d = arguments[c];
      if (Array.isArray(d))
        for (let e = 0; e < d.length; e += 8192) {
          const f = nb.apply(null, hb(d, e, e + 8192));
          for (let g = 0; g < f.length; g++) b.push(f[g]);
        }
      else b.push(d);
    }
    return b;
  }
  function sb(a, b) {
    b = b || Math.random;
    for (let c = a.length - 1; 0 < c; c--) {
      const d = Math.floor(b() * (c + 1)),
        e = a[c];
      a[c] = a[d];
      a[d] = e;
    }
  }
  var tb = {
    Qj: "google_adtest",
    Uj: "google_ad_client",
    bk: "google_ad_intent_query",
    Vj: "google_ad_format",
    Xj: "google_ad_height",
    mk: "google_ad_width",
    ck: "google_ad_layout",
    dk: "google_ad_layout_key",
    ek: "google_ad_output",
    fk: "google_ad_region",
    ik: "google_ad_slot",
    kk: "google_ad_type",
    lk: "google_ad_url",
    Hk: "google_analytics_domain_name",
    Ik: "google_analytics_uacct",
    Wk: "google_container_id",
    il: "google_gl",
    Hl: "google_enable_ose",
    Rl: "google_full_width_responsive",
    Vm: "google_rl_filtering",
    Um: "google_rl_mode",
    Wm: "google_rt",
    Tm: "google_rl_dest_url",
    ym: "google_max_radlink_len",
    Em: "google_num_radlinks",
    Fm: "google_num_radlinks_per_unit",
    Tj: "google_ad_channel",
    xm: "google_max_num_ads",
    zm: "google_max_responsive_height",
    Rk: "google_color_border",
    Gl: "google_enable_content_recommendations",
    el: "google_content_recommendation_ui_type",
    dl: "google_source_type",
    bl: "google_content_recommendation_rows_num",
    al: "google_content_recommendation_columns_num",
    Zk: "google_content_recommendation_ad_positions",
    fl: "google_content_recommendation_use_square_imgs",
    Tk: "google_color_link",
    Sk: "google_color_line",
    Vk: "google_color_url",
    Rj: "google_ad_block",
    hk: "google_ad_section",
    Sj: "google_ad_callback",
    Ok: "google_captcha_token",
    Uk: "google_color_text",
    zk: "google_alternate_ad_url",
    ak: "google_ad_host_tier_id",
    Pk: "google_city",
    Yj: "google_ad_host",
    Zj: "google_ad_host_channel",
    Ak: "google_alternate_color",
    Qk: "google_color_bg",
    Il: "google_encoding",
    Pl: "google_font_face",
    ll: "google_cust_ch",
    rl: "google_cust_job",
    ql: "google_cust_interests",
    ml: "google_cust_id",
    ul: "google_cust_u_url",
    Tl: "google_hints",
    jm: "google_image_size",
    Am: "google_mtl",
    Bn: "google_cpm",
    Yk: "google_contents",
    Cm: "google_native_settings_key",
    gl: "google_country",
    sn: "google_targeting",
    Ql: "google_font_size",
    xl: "google_disable_video_autoplay",
    Pn: "google_video_product_type",
    On: "google_video_doc_id",
    Nn: "google_cust_gender",
    mn: "google_cust_lh",
    ln: "google_cust_l",
    An: "google_tfs",
    Bm: "google_native_ad_template",
    pm: "google_kw",
    pn: "google_tag_for_child_directed_treatment",
    qn: "google_tag_for_under_age_of_consent",
    Ym: "google_region",
    kl: "google_cust_criteria",
    gk: "google_safe",
    jl: "google_ctr_threshold",
    Zm: "google_resizing_allowed",
    bn: "google_resizing_width",
    an: "google_resizing_height",
    Mn: "google_cust_age",
    sm: "google_language",
    qm: "google_kw_type",
    Nm: "google_pucrd",
    Lm: "google_page_url",
    rn: "google_tag_partner",
    fn: "google_restrict_data_processing",
    Mj: "google_adbreak_test",
    Wj: "google_ad_frequency_hint",
    Oj: "google_admob_interstitial_slot",
    Pj: "google_admob_rewarded_slot",
    Nj: "google_admob_ads_only",
    jk: "google_ad_start_delay_hint",
    wm: "google_max_ad_content_rating",
    Pm: "google_ad_public_floor",
    Om: "google_ad_private_floor",
    Ln: "google_traffic_source",
    jn: "google_shadow_mode",
    Im: "google_overlays",
    Mm: "google_privacy_treatments",
    nn: "google_xz",
  };
  function ub(a, b) {
    this.g = (a === vb && b) || "";
    this.i = wb;
  }
  ub.prototype.toString = function () {
    return this.g;
  };
  function xb(a) {
    return a instanceof ub && a.constructor === ub && a.i === wb
      ? a.g
      : "type_error:Const";
  }
  var wb = {},
    vb = {};
  var t = class {
      constructor(a, b = !1) {
        this.g = a;
        this.defaultValue = b;
      }
    },
    yb = class {
      constructor(a, b = 0) {
        this.g = a;
        this.defaultValue = b;
      }
    },
    zb = class {
      constructor(a, b = "") {
        this.g = a;
        this.defaultValue = b;
      }
    },
    u = class {
      constructor(a, b = []) {
        this.g = a;
        this.defaultValue = b;
      }
    };
  var Bb = new t(590317302),
    Cb = new t(380025941);
  function Db() {
    return !1;
  }
  function Eb() {
    return !0;
  }
  function Fb(a) {
    const b = arguments,
      c = b.length;
    return function () {
      for (let d = 0; d < c; d++) if (!b[d].apply(this, arguments)) return !1;
      return !0;
    };
  }
  function Gb(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function Hb(a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  function Jb(a) {
    let b = a;
    return function () {
      if (b) {
        const c = b;
        b = null;
        c();
      }
    };
  }
  function Kb(a, b) {
    let c = 0;
    return function (d) {
      r.clearTimeout(c);
      const e = arguments;
      c = r.setTimeout(function () {
        a.apply(b, e);
      }, 63);
    };
  }
  function Lb(a, b) {
    function c() {
      e = r.setTimeout(d, 63);
      let h = g;
      g = [];
      a.apply(b, h);
    }
    function d() {
      e = 0;
      f && ((f = !1), c());
    }
    let e = 0,
      f = !1,
      g = [];
    return function (h) {
      g = arguments;
      e ? (f = !0) : c();
    };
  }
  var Mb = { passive: !0 },
    Nb = Hb(function () {
      let a = !1;
      try {
        const b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        r.addEventListener("test", null, b);
      } catch (b) {}
      return a;
    });
  function Ob(a) {
    return a ? (a.passive && Nb() ? a : a.capture || !1) : !1;
  }
  function Rb(a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, Ob(d)), !0) : !1;
  }
  function Sb(a, b, c, d) {
    return a.removeEventListener
      ? (a.removeEventListener(b, c, Ob(d)), !0)
      : !1;
  }
  function Tb(a) {
    Tb[" "](a);
    return a;
  }
  Tb[" "] = function () {};
  function Ub(a, b) {
    try {
      return Tb(a[b]), !0;
    } catch (c) {}
    return !1;
  }
  var w = (a) => {
    var b = "Re";
    if (a.Re && a.hasOwnProperty(b)) return a.Re;
    b = new a();
    return (a.Re = b);
  };
  var Vb = class {
    constructor() {
      const a = {};
      this.i = (b, c) => (null != a[b] ? a[b] : c);
      this.j = (b, c) => (null != a[b] ? a[b] : c);
      this.l = (b, c) => (null != a[b] ? a[b] : c);
      this.A = (b, c) => (null != a[b] ? a[b] : c);
      this.g = () => {};
    }
  };
  function x(a) {
    return w(Vb).i(a.g, a.defaultValue);
  }
  function Wb(a) {
    return w(Vb).j(a.g, a.defaultValue);
  }
  function Xb(a) {
    return w(Vb).l(a.g, a.defaultValue);
  }
  function Yb(a) {
    return w(Vb).A(a.g, a.defaultValue);
  }
  var Zb = va(610401301),
    $b = va(188588736);
  function ac(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function bc(a) {
    if (!cc.test(a)) return a;
    -1 != a.indexOf("&") && (a = a.replace(dc, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(ec, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(fc, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(hc, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(ic, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(jc, "&#0;"));
    return a;
  }
  var dc = /&/g,
    ec = /</g,
    fc = />/g,
    hc = /"/g,
    ic = /'/g,
    jc = /\x00/g,
    cc = /[\x00&<>"']/;
  function kc(a, b) {
    return -1 != a.indexOf(b);
  }
  function lc() {
    var a = r.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var mc;
  const nc = r.navigator;
  mc = nc ? nc.userAgentData || null : null;
  function oc(a) {
    return Zb
      ? mc
        ? mc.brands.some(({ brand: b }) => b && kc(b, a))
        : !1
      : !1;
  }
  function y(a) {
    return kc(lc(), a);
  }
  function pc() {
    return Zb ? !!mc && 0 < mc.brands.length : !1;
  }
  function qc() {
    return pc() ? !1 : y("Opera");
  }
  function rc() {
    return pc() ? !1 : y("Trident") || y("MSIE");
  }
  function uc() {
    return y("Firefox") || y("FxiOS");
  }
  function vc() {
    return (
      y("Safari") &&
      !(
        wc() ||
        (pc() ? 0 : y("Coast")) ||
        qc() ||
        (pc() ? 0 : y("Edge")) ||
        (pc() ? oc("Microsoft Edge") : y("Edg/")) ||
        (pc() ? oc("Opera") : y("OPR")) ||
        uc() ||
        y("Silk") ||
        y("Android")
      )
    );
  }
  function wc() {
    return pc()
      ? oc("Chromium")
      : ((y("Chrome") || y("CriOS")) && !(pc() ? 0 : y("Edge"))) || y("Silk");
  }
  function xc() {
    return y("Android") && !(wc() || uc() || qc() || y("Silk"));
  }
  var yc = qc(),
    zc = rc(),
    Ac = y("Edge"),
    Bc = Ac || zc,
    Cc =
      y("Gecko") &&
      !(kc(lc().toLowerCase(), "webkit") && !y("Edge")) &&
      !(y("Trident") || y("MSIE")) &&
      !y("Edge"),
    Dc = kc(lc().toLowerCase(), "webkit") && !y("Edge");
  function Ec() {
    var a = r.document;
    return a ? a.documentMode : void 0;
  }
  var Fc;
  a: {
    var Gc = "",
      Hc = (function () {
        var a = lc();
        if (Cc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ac) return /Edge\/([\d\.]+)/.exec(a);
        if (zc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Dc) return /WebKit\/(\S+)/.exec(a);
        if (yc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Hc && (Gc = Hc ? Hc[1] : "");
    if (zc) {
      var Ic = Ec();
      if (null != Ic && Ic > parseFloat(Gc)) {
        Fc = String(Ic);
        break a;
      }
    }
    Fc = Gc;
  }
  var Jc = Fc,
    Mc;
  if (r.document && zc) {
    var Nc = Ec();
    Mc = Nc ? Nc : parseInt(Jc, 10) || void 0;
  } else Mc = void 0;
  var Oc = Mc;
  var Pc = zc || Dc;
  function Qc(a, b) {
    const c = {};
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function Rc(a) {
    var b = Sc;
    a: {
      for (const c in b)
        if (b[c] == a) {
          a = !0;
          break a;
        }
      a = !1;
    }
    return a;
  }
  function Tc(a) {
    const b = [];
    let c = 0;
    for (const d in a) b[c++] = a[d];
    return b;
  }
  function Uc(a) {
    const b = {};
    for (const c in a) b[c] = a[c];
    return b;
  }
  const Vc =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function Wc(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (let f = 0; f < Vc.length; f++)
        (c = Vc[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var Xc = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  var Yc;
  function Zc() {
    if (void 0 === Yc) {
      var a = null,
        b = r.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: Ma,
            createScript: Ma,
            createScriptURL: Ma,
          });
        } catch (c) {
          r.console && r.console.error(c.message);
        }
        Yc = a;
      } else Yc = a;
    }
    return Yc;
  }
  var $c = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g + "";
    }
  };
  function ad(a, b) {
    a = bd.exec(cd(a).toString());
    var c = a[3] || "";
    return dd(a[1] + ed("?", a[2] || "", b) + ed("#", c));
  }
  function cd(a) {
    return a instanceof $c && a.constructor === $c
      ? a.g
      : "type_error:TrustedResourceUrl";
  }
  function fd(a, b) {
    var c = xb(a);
    if (!gd.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(hd, function (d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e))
        throw Error(
          'Found marker, "' +
            e +
            '", in format string, "' +
            c +
            '", but no valid label mapping found in args: ' +
            JSON.stringify(b)
        );
      d = b[e];
      return d instanceof ub ? xb(d) : encodeURIComponent(String(d));
    });
    return dd(a);
  }
  var hd = /%{(\w+)}/g,
    gd = RegExp(
      "^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)",
      "i"
    ),
    bd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    id = {};
  function dd(a) {
    const b = Zc();
    a = b ? b.createScriptURL(a) : a;
    return new $c(a, id);
  }
  function ed(a, b, c) {
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
  var jd = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g.toString();
    }
  };
  function kd(a) {
    return a instanceof jd && a.constructor === jd ? a.g : "type_error:SafeUrl";
  }
  var ld = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    nd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function od(a) {
    if (a instanceof jd) return a;
    a = String(a);
    nd.test(a)
      ? (a = pd(a))
      : ((a = String(a).replace(/(%0A|%0D)/g, "")),
        (a = a.match(ld) ? pd(a) : null));
    return a;
  }
  var qd = {};
  function pd(a) {
    return new jd(a, qd);
  }
  var rd = pd("about:invalid#zClosurez");
  const sd = {};
  function td(a) {
    return a instanceof ud && a.constructor === ud
      ? a.g
      : "type_error:SafeStyle";
  }
  class ud {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g.toString();
    }
  }
  var vd = new ud("", sd);
  function wd(a) {
    if (a instanceof jd)
      return (
        'url("' + kd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'
      );
    if (a instanceof ub) a = xb(a);
    else {
      a = String(a);
      var b = a.replace(xd, "$1").replace(xd, "$1").replace(yd, "url");
      if (zd.test(b)) {
        if ((b = !Ad.test(a))) {
          let c = (b = !0);
          for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
          }
          b = b && c && Bd(a);
        }
        a = b ? Cd(a) : "zClosurez";
      } else a = "zClosurez";
    }
    if (/[{;}]/.test(a))
      throw new Qa("Value does not allow [{;}], got: %s.", [a]);
    return a;
  }
  function Bd(a) {
    let b = !0;
    const c = /^[-_a-zA-Z0-9]$/;
    for (let d = 0; d < a.length; d++) {
      const e = a.charAt(d);
      if ("]" == e) {
        if (b) return !1;
        b = !0;
      } else if ("[" == e) {
        if (!b) return !1;
        b = !1;
      } else if (!b && !c.test(e)) return !1;
    }
    return b;
  }
  const zd = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    yd = RegExp(
      "\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))",
      "g"
    ),
    xd = RegExp(
      "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
      "g"
    ),
    Ad = /\/\*/;
  function Cd(a) {
    return a.replace(yd, (b, c, d, e) => {
      let f = "";
      d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
        f = h;
        return k;
      });
      b = (od(d) || rd).toString();
      return c + f + b + f + e;
    });
  }
  class Dd {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g.toString();
    }
  }
  const Ed = {};
  function Fd(a) {
    return a instanceof Gd && a.constructor === Gd
      ? a.g
      : "type_error:SafeHtml";
  }
  function Hd(a) {
    const b = Zc();
    a = b ? b.createHTML(a) : a;
    return new Gd(a, Ed);
  }
  function Id(a) {
    if (!Jd.test(a)) throw Error("");
    if (a.toUpperCase() in Kd) throw Error("");
  }
  function Ld(a, b, c) {
    var d = "";
    if (b)
      for (let g in b)
        if (Object.prototype.hasOwnProperty.call(b, g)) {
          if (!Jd.test(g)) throw Error("");
          var e = b[g];
          if (null != e) {
            var f = g;
            if (e instanceof ub) e = xb(e);
            else if ("style" == f.toLowerCase()) {
              if (!za(e)) throw Error("");
              if (!(e instanceof ud)) {
                let h = "";
                for (let k in e)
                  if (Object.prototype.hasOwnProperty.call(e, k)) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(k))
                      throw Error(`Name allows only [-_a-zA-Z0-9], got: ${k}`);
                    let l = e[k];
                    null != l &&
                      ((l = Array.isArray(l) ? l.map(wd).join(" ") : wd(l)),
                      (h += `${k}:${l};`));
                  }
                e = h ? new ud(h, sd) : vd;
              }
              e = td(e);
            } else {
              if (/^on/i.test(f)) throw Error("");
              if (f.toLowerCase() in Md)
                if (e instanceof $c) e = cd(e).toString();
                else if (e instanceof jd) e = kd(e);
                else if ("string" === typeof e) e = (od(e) || rd).toString();
                else throw Error("");
            }
            f = `${f}="` + bc(String(e)) + '"';
            d += " " + f;
          }
        }
    b = `<${a}` + d;
    null == c ? (c = []) : Array.isArray(c) || (c = [c]);
    !0 === Xc[a.toLowerCase()]
      ? (b += ">")
      : ((c = Nd(c)), (b += ">" + Fd(c).toString() + "</" + a + ">"));
    return Hd(b);
  }
  function Od(a) {
    var b = Pd;
    b = b instanceof Gd ? b : Hd(bc(String(b)));
    const c = [],
      d = (e) => {
        Array.isArray(e)
          ? e.forEach(d)
          : ((e = e instanceof Gd ? e : Hd(bc(String(e)))),
            c.push(Fd(e).toString()));
      };
    a.forEach(d);
    return Hd(c.join(Fd(b).toString()));
  }
  function Nd(a) {
    return Od(Array.prototype.slice.call(arguments));
  }
  class Gd {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g.toString();
    }
  }
  const Jd = /^[a-zA-Z0-9-]+$/,
    Md = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    },
    Kd = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    };
  var Pd = new Gd((r.trustedTypes && r.trustedTypes.emptyHTML) || "", Ed),
    Qd = Hd("<br>"); /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
  var Rd = pd("about:invalid#zClosurez");
  var Sd = Hb(function () {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = Fd(Pd);
    return !b.parentElement;
  });
  function Ud(a, b) {
    if (Sd()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = Fd(b);
  }
  var Vd = /^[\w+/_-]+[=]{0,2}$/;
  function Wd(a, b, c) {
    return Math.min(Math.max(a, b), c);
  }
  function Xd(a) {
    return Array.prototype.reduce.call(
      arguments,
      function (b, c) {
        return b + c;
      },
      0
    );
  }
  function Yd(a) {
    return Xd.apply(null, arguments) / arguments.length;
  }
  function Zd(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  }
  Zd.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  Zd.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  Zd.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  function $d(a, b) {
    this.width = a;
    this.height = b;
  }
  function ae(a, b) {
    return a == b
      ? !0
      : a && b
      ? a.width == b.width && a.height == b.height
      : !1;
  }
  aa = $d.prototype;
  aa.aspectRatio = function () {
    return this.width / this.height;
  };
  aa.isEmpty = function () {
    return !(this.width * this.height);
  };
  aa.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  aa.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  aa.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function be(a, b) {
    const c = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
    let d;
    d = b ? b.createElement("div") : r.document.createElement("div");
    return a.replace(ce, function (e, f) {
      var g = c[e];
      if (g) return g;
      "#" == f.charAt(0) &&
        ((f = Number("0" + f.slice(1))),
        isNaN(f) || (g = String.fromCharCode(f)));
      g ||
        ((g = Hd(e + " ")),
        Ud(d, g),
        (g = d.firstChild.nodeValue.slice(0, -1)));
      return (c[e] = g);
    });
  }
  var ce = /&([^;\s<&]+);?/g;
  function de(a) {
    let b = 0;
    for (let c = 0; c < a.length; ++c) b = (31 * b + a.charCodeAt(c)) >>> 0;
    return b;
  }
  function ee(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function fe(a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  function ge(a) {
    return a ? new he(ie(a)) : Pa || (Pa = new he());
  }
  function je(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new $d(a.clientWidth, a.clientHeight);
  }
  function ke(a) {
    var b = a.scrollingElement
      ? a.scrollingElement
      : Dc || "CSS1Compat" != a.compatMode
      ? a.body || a.documentElement
      : a.documentElement;
    a = le(a);
    return zc && a.pageYOffset != b.scrollTop
      ? new Zd(b.scrollLeft, b.scrollTop)
      : new Zd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
  }
  function le(a) {
    return a.parentWindow || a.defaultView;
  }
  function me(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }
  function ie(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  var ne = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    oe = { IMG: " ", BR: "\n" };
  function pe(a) {
    var b = [];
    qe(a, b, !0);
    a = b.join("");
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    a = a.replace(/ +/g, " ");
    " " != a && (a = a.replace(/^\s*/, ""));
    return a;
  }
  function qe(a, b, c) {
    if (!(a.nodeName in ne))
      if (3 == a.nodeType)
        c
          ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
          : b.push(a.nodeValue);
      else if (a.nodeName in oe) b.push(oe[a.nodeName]);
      else for (a = a.firstChild; a; ) qe(a, b, c), (a = a.nextSibling);
  }
  function re(a, b, c) {
    if (!b && !c) return null;
    var d = b ? String(b).toUpperCase() : null;
    return se(a, function (e) {
      return (
        (!d || e.nodeName == d) &&
        (!c ||
          ("string" === typeof e.className && ab(e.className.split(/\s+/), c)))
      );
    });
  }
  function se(a, b) {
    for (var c = 0; a; ) {
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  }
  function he(a) {
    this.g = a || r.document || document;
  }
  aa = he.prototype;
  aa.xh = function (a) {
    var b = this.g;
    return "string" === typeof a ? b.getElementById(a) : a;
  };
  aa.Lj = he.prototype.xh;
  function te(a, b) {
    return me(a.g, b);
  }
  function ue(a, b) {
    var c = a.g;
    a = me(c, "DIV");
    zc ? ((b = Nd(Qd, b)), Ud(a, b), a.removeChild(a.firstChild)) : Ud(a, b);
    if (1 == a.childNodes.length) a = a.removeChild(a.firstChild);
    else {
      for (b = c.createDocumentFragment(); a.firstChild; )
        b.appendChild(a.firstChild);
      a = b;
    }
    return a;
  }
  aa.da = function () {
    return le(this.g);
  };
  aa.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  aa.xi = function (a) {
    var b,
      c = arguments.length;
    if (!c) return null;
    if (1 == c) return arguments[0];
    var d = [],
      e = Infinity;
    for (b = 0; b < c; b++) {
      for (var f = [], g = arguments[b]; g; ) f.unshift(g), (g = g.parentNode);
      d.push(f);
      e = Math.min(e, f.length);
    }
    f = null;
    for (b = 0; b < e; b++) {
      g = d[0][b];
      for (var h = 1; h < c; h++) if (g != d[h][b]) return f;
      f = g;
    }
    return f;
  };
  function ve() {
    return Zb && mc
      ? mc.mobile
      : !we() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"));
  }
  function we() {
    return Zb && mc
      ? !mc.mobile && (y("iPad") || y("Android") || y("Silk"))
      : y("iPad") || (y("Android") && !y("Mobile")) || y("Silk");
  }
  var xe = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function ye(a, b) {
    if (!b) return a;
    var c = a.indexOf("#");
    0 > c && (c = a.length);
    var d = a.indexOf("?");
    if (0 > d || d > c) {
      d = c;
      var e = "";
    } else e = a.substring(d + 1, c);
    a = [a.slice(0, d), e, a.slice(c)];
    c = a[1];
    a[1] = b ? (c ? c + "&" + b : b) : c;
    return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
  }
  function ze(a, b, c) {
    if (Array.isArray(b))
      for (var d = 0; d < b.length; d++) ze(a, String(b[d]), c);
    else
      null != b &&
        c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
  }
  class Ae {
    constructor(a) {
      this.Ri = a;
    }
  }
  function Be(a) {
    return new Ae((b) => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const Ce = [
    Be("data"),
    Be("http"),
    Be("https"),
    Be("mailto"),
    Be("ftp"),
    new Ae((a) => /^[^:]*([/?#]|$)/.test(a)),
  ];
  function De(a, b = Ce) {
    if (a instanceof jd) return a;
    for (let c = 0; c < b.length; ++c) {
      const d = b[c];
      if (d instanceof Ae && d.Ri(a)) return pd(a);
    }
  }
  var Ee = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
  function Ke(a) {
    if (Ee.test(a)) return a;
  }
  function Le(a) {
    var b = De("#", Ce) || Rd;
    b = b instanceof jd ? kd(b) : Ke(b);
    void 0 !== b && (a.href = b);
  }
  var Me = class {};
  class Ne extends Me {
    constructor(a) {
      super();
      this.g = a;
    }
    toString() {
      return this.g;
    }
  }
  function Oe(a, b, c) {
    var d = [Pe`width`, Pe`height`];
    if (0 === d.length) throw Error("");
    d = d.map((f) => {
      if (f instanceof Ne) f = f.g;
      else throw Error("");
      return f;
    });
    const e = b.toLowerCase();
    if (d.every((f) => 0 !== e.indexOf(f)))
      throw Error(
        `Attribute "${b}" does not match any of the allowed prefixes.`
      );
    a.setAttribute(b, c);
  }
  function Qe(a, b = `unexpected value ${a}!`) {
    throw Error(b);
  }
  function Re(a, b) {
    a.src = cd(b);
    (void 0)?.ao ||
      ((b = (b = (
        (a.ownerDocument && a.ownerDocument.defaultView) ||
        window
      ).document.querySelector?.("script[nonce]"))
        ? b.nonce || b.getAttribute("nonce") || ""
        : "") &&
        a.setAttribute("nonce", b));
  }
  function Se(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  }
  function Te(a) {
    try {
      return !!a && null != a.location.href && Ub(a, "foo");
    } catch {
      return !1;
    }
  }
  function Ue(a, b = r) {
    b = Ve(b);
    let c = 0;
    for (; b && 40 > c++ && !a(b); ) b = Ve(b);
  }
  function Ve(a) {
    try {
      const b = a.parent;
      if (b && b != a) return b;
    } catch {}
    return null;
  }
  function We(a) {
    return Te(a.top) ? a.top : null;
  }
  function Xe(a, b) {
    const c = Ye("SCRIPT", a);
    Re(c, b);
    return (a = a.getElementsByTagName("script")[0]) && a.parentNode
      ? (a.parentNode.insertBefore(c, a), c)
      : null;
  }
  function Ze(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function $e() {
    if (!globalThis.crypto) return Math.random();
    try {
      const a = new Uint32Array(1);
      globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch {
      return Math.random();
    }
  }
  function af(a, b) {
    if (a)
      for (const c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function bf(a) {
    const b = [];
    af(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function cf(a) {
    const b = a.length;
    if (0 == b) return 0;
    let c = 305419896;
    for (let d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  }
  var ef = Hb(
    () =>
      $a(
        [
          "Google Web Preview",
          "Mediapartners-Google",
          "Google-Read-Aloud",
          "Google-Adwords",
        ],
        df
      ) || 1e-4 > Math.random()
  );
  const df = (a) => kc(lc(), a);
  var ff = /^([0-9.]+)px$/,
    gf = /^(-?[0-9.]{1,30})$/;
  function hf(a) {
    if (!gf.test(a)) return null;
    a = Number(a);
    return isNaN(a) ? null : a;
  }
  function jf(a) {
    return (a = ff.exec(a)) ? +a[1] : null;
  }
  var kf = {
    nk: "allow-forms",
    pk: "allow-modals",
    qk: "allow-orientation-lock",
    rk: "allow-pointer-lock",
    sk: "allow-popups",
    tk: "allow-popups-to-escape-sandbox",
    uk: "allow-presentation",
    vk: "allow-same-origin",
    wk: "allow-scripts",
    xk: "allow-top-navigation",
    yk: "allow-top-navigation-by-user-activation",
  };
  const lf = Hb(() => bf(kf));
  function mf() {
    var a = [
      "allow-top-navigation",
      "allow-modals",
      "allow-orientation-lock",
      "allow-presentation",
      "allow-pointer-lock",
    ];
    const b = lf();
    return a.length ? Wa(b, (c) => !ab(a, c)) : b;
  }
  function nf() {
    const a = Ye("IFRAME"),
      b = {};
    Ua(lf(), (c) => {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
    });
    return b;
  }
  var of = (a, b) => {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch {
        return !1;
      }
    },
    pf = (a, b) => {
      for (let c = 0; 50 > c; ++c) {
        if (of(a, b)) return a;
        if (!(a = Ve(a))) break;
      }
      return null;
    },
    qf = Hb(() => (ve() ? 2 : we() ? 1 : 0)),
    z = (a, b) => {
      af(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    };
  const rf = {
      ["http://googleads.g.doubleclick.net"]: !0,
      ["http://pagead2.googlesyndication.com"]: !0,
      ["https://googleads.g.doubleclick.net"]: !0,
      ["https://pagead2.googlesyndication.com"]: !0,
    },
    sf = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
    tf = /.*domain\.test$/,
    uf = /\.prod\.google\.com(:\d+)?$/;
  var vf = (a) => rf[a] || sf.test(a) || tf.test(a) || uf.test(a);
  let wf = [];
  const xf = () => {
    const a = wf;
    wf = [];
    for (const b of a)
      try {
        b();
      } catch {}
  };
  var yf = () => {
      var a = Math.random;
      return Math.floor(a() * 2 ** 52);
    },
    zf = (a, b) => {
      if ("number" !== typeof a.goog_pvsid)
        try {
          Object.defineProperty(a, "goog_pvsid", {
            value: yf(),
            configurable: !1,
          });
        } catch (c) {
          b && b.va(784, c);
        }
      a = Number(a.goog_pvsid);
      b && (!a || 0 >= a) && b.va(784, Error(`Invalid correlator, ${a}`));
      return a || -1;
    },
    Af = (a, b) => {
      "complete" === a.document.readyState
        ? (wf.push(b),
          1 == wf.length &&
            (window.Promise
              ? Promise.resolve().then(xf)
              : window.setImmediate
              ? setImmediate(xf)
              : setTimeout(xf, 0)))
        : a.addEventListener("load", b);
    },
    Bf = (a, b) =>
      new Promise((c) => {
        setTimeout(() => void c(b), a);
      });
  function Ye(a, b = document) {
    return b.createElement(String(a).toLowerCase());
  }
  var Cf = (a) => {
      let b = a;
      for (; a && a != a.parent; ) (a = a.parent), Te(a) && (b = a);
      return b;
    },
    Ef = (a) => (x(Bb) || (wc() && ve()) ? Df(a) : 1),
    Df = (a) => {
      var b = We(a);
      if (!b) return 1;
      a = 0 === qf();
      const c = !!b.document.querySelector(
          'meta[name=viewport][content*="width=device-width"]'
        ),
        d = b.innerWidth;
      b = b.outerWidth;
      if (0 === d) return 1;
      const e = Math.round(100 * (b / d + Number.EPSILON)) / 100;
      return 1 === e
        ? 1
        : a || c
        ? e
        : Math.round(100 * (b / d / 0.4 + Number.EPSILON)) / 100;
    };
  function Ff(a) {
    r.setTimeout(() => {
      throw a;
    }, 0);
  }
  xc();
  wc();
  vc();
  var Gf = {},
    Hf = null;
  function If(a) {
    var b = 3;
    void 0 === b && (b = 0);
    Jf();
    b = Gf[b];
    const c = Array(Math.floor(a.length / 3)),
      d = b[64] || "";
    let e = 0,
      f = 0;
    for (; e < a.length - 2; e += 3) {
      var g = a[e],
        h = a[e + 1],
        k = a[e + 2],
        l = b[g >> 2];
      g = b[((g & 3) << 4) | (h >> 4)];
      h = b[((h & 15) << 2) | (k >> 6)];
      k = b[k & 63];
      c[f++] = l + g + h + k;
    }
    l = 0;
    k = d;
    switch (a.length - e) {
      case 2:
        (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
      case 1:
        (a = a[e]), (c[f] = b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
    }
    return c.join("");
  }
  function Kf(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      255 < e && ((b[c++] = e & 255), (e >>= 8));
      b[c++] = e;
    }
    return If(b);
  }
  function Lf(a) {
    var b = [];
    Mf(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function Mf(a, b) {
    function c(k) {
      for (; d < a.length; ) {
        var l = a.charAt(d++),
          m = Hf[l];
        if (null != m) return m;
        if (!/^[\s\xa0]*$/.test(l))
          throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
    }
    Jf();
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
  function Jf() {
    if (!Hf) {
      Hf = {};
      for (
        var a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          b = ["+/=", "+/", "-_=", "-_.", "-_"],
          c = 0;
        5 > c;
        c++
      ) {
        var d = a.concat(b[c].split(""));
        Gf[c] = d;
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === Hf[f] && (Hf[f] = e);
        }
      }
    }
  }
  function Nf(a) {
    let b = "",
      c = 0;
    const d = a.length - 10240;
    for (; c < d; )
      b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b);
  }
  const Of = /[-_.]/g,
    Pf = { "-": "+", _: "/", ".": "=" };
  function Qf(a) {
    return Pf[a] || "";
  }
  function Rf(a) {
    return null != a && a instanceof Uint8Array;
  }
  let Sf;
  var Tf = {},
    Uf = "undefined" != typeof structuredClone;
  let Vf;
  function Wf(a) {
    if (a !== Tf) throw Error("illegal external caller");
  }
  function Xf() {
    return Vf || (Vf = new Yf(null, Tf));
  }
  var Yf = class {
    constructor(a, b) {
      Wf(b);
      this.g = a;
      if (null != a && 0 === a.length)
        throw Error("ByteString should be constructed with non-empty values");
    }
    isEmpty() {
      return null == this.g;
    }
  };
  let Zf = 0,
    $f = 0;
  function ag(a) {
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
    Zf = c >>> 0;
    $f = a >>> 0;
  }
  function bg(a, b) {
    b >>>= 0;
    a >>>= 0;
    var c;
    2097151 >= b
      ? (c = "" + (4294967296 * b + a))
      : (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)));
    return c;
  }
  function cg() {
    var a = Zf,
      b = $f,
      c;
    b & 2147483648
      ? (c = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
      : (c = bg(a, b));
    return c;
  }
  function dg(a) {
    16 > a.length
      ? ag(Number(a))
      : ((a = BigInt(a)),
        (Zf = Number(a & BigInt(4294967295)) >>> 0),
        ($f = Number((a >> BigInt(32)) & BigInt(4294967295))));
  }
  function tg(a) {
    return Array.prototype.slice.call(a);
  }
  var C = Symbol(),
    ug = Symbol(),
    vg = Symbol();
  function wg(a, b, c) {
    return c ? a | b : a & ~b;
  }
  var xg = (a, b) => {
    a[C] = b;
    return a;
  };
  function yg(a) {
    a[C] |= 34;
    return a;
  }
  function zg(a) {
    a[C] |= 32;
    return a;
  }
  function Ag(a, b) {
    xg(b, (a | 0) & -14591);
  }
  function Bg(a, b) {
    xg(b, (a | 34) & -14557);
  }
  function Cg(a) {
    a = (a >> 14) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var Dg = {},
    Eg = {};
  function Fg(a) {
    return !(!a || "object" !== typeof a || a.Wi !== Eg);
  }
  function Gg(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  let Hg;
  function Ig(a, b, c) {
    if (null != a)
      if ("string" === typeof a) a = a ? new Yf(a, Tf) : Xf();
      else if (a.constructor !== Yf)
        if (Rf(a)) a = a.length ? new Yf(c ? a : new Uint8Array(a), Tf) : Xf();
        else {
          if (!b) throw Error();
          a = void 0;
        }
    return a;
  }
  function Jg(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    const d = a[C] | 0;
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    xg(a, d | 1);
    return !0;
  }
  var Kg;
  const Lg = [];
  xg(Lg, 55);
  Kg = Object.freeze(Lg);
  function Mg(a) {
    if (a & 2) throw Error();
  }
  class Ng {
    constructor(a, b, c) {
      this.j = 0;
      this.g = a;
      this.i = b;
      this.l = c;
    }
    next() {
      if (this.j < this.g.length) {
        const a = this.g[this.j++];
        return { done: !1, value: this.i ? this.i.call(this.l, a) : a };
      }
      return { done: !0, value: void 0 };
    }
    [Symbol.iterator]() {
      return new Ng(this.g, this.i, this.l);
    }
  }
  class Og {}
  class Pg {}
  Object.freeze(new Og());
  Object.freeze(new Pg());
  let Qg;
  function Rg(a) {
    if (Qg) throw Error("");
    Qg = (b) => {
      r.setTimeout(() => {
        a(b);
      }, 0);
    };
  }
  function Sg(a) {
    if (Qg)
      try {
        Qg(a);
      } catch (b) {
        throw ((b.cause = a), b);
      }
  }
  function Tg(a) {
    a = Error(a);
    Se(a, "warning");
    Sg(a);
    return a;
  }
  function Ug(a) {
    if (null != a && "number" !== typeof a)
      throw Error(
        `Value of float/double field must be a number, found ${typeof a}: ${a}`
      );
    return a;
  }
  function Vg(a) {
    if ("boolean" !== typeof a)
      throw Error(`Expected boolean but got ${wa(a)}: ${a}`);
    return a;
  }
  const Wg = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Xg(a) {
    const b = typeof a;
    return "number" === b
      ? Number.isFinite(a)
      : "string" !== b
      ? !1
      : Wg.test(a);
  }
  function Yg(a) {
    if (null != a) {
      if (!Number.isFinite(a)) throw Tg("enum");
      a |= 0;
    }
    return a;
  }
  function Zg(a) {
    return null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
  }
  function $g(a) {
    if ("number" !== typeof a) throw Tg("int32");
    if (!Number.isFinite(a)) throw Tg("int32");
    return a | 0;
  }
  function ah(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0;
  }
  function bh(a) {
    if ("number" !== typeof a) throw Tg("uint32");
    if (!Number.isFinite(a)) throw Tg("uint32");
    return a >>> 0;
  }
  function ch(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0;
  }
  function dh(a, b) {
    b = !!b;
    if (!Xg(a)) throw Tg("int64");
    "string" === typeof a
      ? (a = eh(a))
      : b
      ? ((a = Math.trunc(a)),
        Number.isSafeInteger(a)
          ? (a = String(a))
          : ((b = String(a)), fh(b) ? (a = b) : (ag(a), (a = cg()))))
      : (a = gh(a));
    return a;
  }
  function hh(a) {
    return "-" === a[0]
      ? !1
      : 20 > a.length
      ? !0
      : 20 === a.length && 184467 > Number(a.substring(0, 6));
  }
  function fh(a) {
    return "-" === a[0]
      ? 20 > a.length
        ? !0
        : 20 === a.length && -922337 < Number(a.substring(0, 7))
      : 19 > a.length
      ? !0
      : 19 === a.length && 922337 > Number(a.substring(0, 6));
  }
  function ih(a) {
    if (0 > a) {
      ag(a);
      const b = bg(Zf, $f);
      a = Number(b);
      return Number.isSafeInteger(a) ? a : b;
    }
    if (hh(String(a))) return a;
    ag(a);
    return 4294967296 * $f + (Zf >>> 0);
  }
  function gh(a) {
    a = Math.trunc(a);
    if (!Number.isSafeInteger(a)) {
      ag(a);
      var b = Zf,
        c = $f;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), 0 == b && (c = (c + 1) >>> 0);
      b = 4294967296 * c + (b >>> 0);
      a = a ? -b : b;
    }
    return a;
  }
  function eh(a) {
    var b = Math.trunc(Number(a));
    if (Number.isSafeInteger(b)) return String(b);
    b = a.indexOf(".");
    -1 !== b && (a = a.substring(0, b));
    fh(a) || (dg(a), (a = cg()));
    return a;
  }
  function jh(a) {
    if (null == a) return a;
    if (Xg(a)) {
      var b;
      "number" === typeof a ? (b = gh(a)) : (b = eh(a));
      return b;
    }
  }
  function kh(a, b) {
    b = !!b;
    if (!Xg(a)) throw Tg("uint64");
    "string" === typeof a
      ? ((b = Math.trunc(Number(a))),
        Number.isSafeInteger(b) && 0 <= b
          ? (a = String(b))
          : ((b = a.indexOf(".")),
            -1 !== b && (a = a.substring(0, b)),
            hh(a) || (dg(a), (a = bg(Zf, $f)))))
      : b
      ? ((a = Math.trunc(a)),
        0 <= a && Number.isSafeInteger(a)
          ? (a = String(a))
          : ((b = String(a)), hh(b) ? (a = b) : (ag(a), (a = bg(Zf, $f)))))
      : ((a = Math.trunc(a)),
        (a = 0 <= a && Number.isSafeInteger(a) ? a : ih(a)));
    return a;
  }
  function lh(a) {
    return null == a ? a : kh(a);
  }
  function mh(a) {
    if ("string" !== typeof a) throw Error();
    return a;
  }
  function nh(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a;
  }
  function oh(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function ph(a, b, c, d) {
    if (null != a && "object" === typeof a && a.Ld === Dg) return a;
    if (!Array.isArray(a)) return c ? (d & 2 ? qh(b) : new b()) : void 0;
    let e = (c = a[C] | 0);
    0 === e && (e |= d & 32);
    e |= d & 2;
    e !== c && xg(a, e);
    return new b(a);
  }
  function qh(a) {
    var b = a[ug];
    if (b) return b;
    b = new a();
    yg(b.V);
    return (a[ug] = b);
  }
  function rh(a, b, c) {
    return b ? mh(a) : oh(a) ?? (c ? "" : void 0);
  }
  const sh = {},
    th = (() =>
      class extends Map {
        constructor() {
          super();
        }
      })();
  function uh(a) {
    return a;
  }
  function vh(a) {
    if (a.qc & 2) throw Error("Cannot mutate an immutable Map");
  }
  var zh = class extends th {
    constructor(a, b, c = uh, d = uh) {
      super();
      let e = a[C] | 0;
      e |= 64;
      xg(a, e);
      this.qc = e;
      this.ae = b;
      this.Jc = c;
      this.Bf = this.ae ? wh : d;
      for (let f = 0; f < a.length; f++) {
        const g = a[f],
          h = c(g[0], !1, !0);
        let k = g[1];
        b
          ? void 0 === k && (k = null)
          : (k = d(g[1], !1, !0, void 0, void 0, e));
        super.set(h, k);
      }
    }
    vf(a = xh) {
      if (0 !== this.size) return this.uf(a);
    }
    uf(a = xh) {
      const b = [],
        c = super.entries();
      for (var d; !(d = c.next()).done; )
        (d = d.value), (d[0] = a(d[0])), (d[1] = a(d[1])), b.push(d);
      return b;
    }
    Fc() {
      return this.size;
    }
    clear() {
      vh(this);
      super.clear();
    }
    delete(a) {
      vh(this);
      return super.delete(this.Jc(a, !0, !1));
    }
    entries() {
      var a = this.Bg();
      return new Ng(a, yh, this);
    }
    keys() {
      return this.Si();
    }
    values() {
      var a = this.Bg();
      return new Ng(a, zh.prototype.get, this);
    }
    forEach(a, b) {
      super.forEach((c, d) => {
        a.call(b, this.get(d), d, this);
      });
    }
    set(a, b) {
      vh(this);
      a = this.Jc(a, !0, !1);
      return null == a
        ? this
        : null == b
        ? (super.delete(a), this)
        : super.set(a, this.Bf(b, !0, !0, this.ae, !1, this.qc));
    }
    has(a) {
      return super.has(this.Jc(a, !1, !1));
    }
    get(a) {
      a = this.Jc(a, !1, !1);
      const b = super.get(a);
      if (void 0 !== b) {
        var c = this.ae;
        return c
          ? ((c = this.Bf(b, !1, !0, c, this.Uh, this.qc)),
            c !== b && super.set(a, c),
            c)
          : b;
      }
    }
    Bg() {
      return Array.from(super.keys());
    }
    Si() {
      return super.keys();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  zh.prototype.toJSON = void 0;
  zh.prototype.Wi = Eg;
  function wh(a, b, c, d, e, f) {
    a = ph(a, d, c, f);
    e && (a = Ah(a));
    return a;
  }
  function xh(a) {
    return a;
  }
  function yh(a) {
    return [a, this.get(a)];
  }
  let Bh;
  function Ch() {
    return Bh || (Bh = new zh(yg([]), void 0, void 0, void 0, sh));
  }
  let Dh;
  function Eh(a, b) {
    Dh = b;
    a = new a(b);
    Dh = void 0;
    return a;
  }
  function Fh(a, b) {
    return Gh(b);
  }
  function Gh(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (Jg(a, void 0, 0)) return;
          } else {
            if (Rf(a)) return Nf(a);
            if (a instanceof Yf) {
              const b = a.g;
              return null == b ? "" : "string" === typeof b ? b : (a.g = Nf(b));
            }
            if (a instanceof zh) return a.vf();
          }
    }
    return a;
  }
  function Hh(a, b, c) {
    a = tg(a);
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
  function Ih(a, b, c, d, e) {
    if (null != a) {
      if (Array.isArray(a))
        a = Jg(a, void 0, 0)
          ? void 0
          : e && (a[C] | 0) & 2
          ? a
          : Jh(a, b, c, void 0 !== d, e);
      else if (Gg(a)) {
        const f = {};
        for (let g in a)
          Object.prototype.hasOwnProperty.call(a, g) &&
            (f[g] = Ih(a[g], b, c, d, e));
        a = f;
      } else a = b(a, d);
      return a;
    }
  }
  function Jh(a, b, c, d, e) {
    const f = d || c ? a[C] | 0 : 0;
    d = d ? !!(f & 32) : void 0;
    a = tg(a);
    for (let g = 0; g < a.length; g++) a[g] = Ih(a[g], b, c, d, e);
    c && c(f, a);
    return a;
  }
  function Kh(a) {
    return Ih(a, Lh, void 0, void 0, !1);
  }
  function Lh(a) {
    a.Ld === Dg
      ? (a = Mh(a, Jh(a.V, Lh, void 0, void 0, !1), !0))
      : a instanceof Yf
      ? ((a = a.g || ""), (a = "string" === typeof a ? a : new Uint8Array(a)))
      : (a = Rf(a) ? new Uint8Array(a) : a instanceof zh ? a.vf(Kh) : a);
    return a;
  }
  function Nh(a) {
    return Ih(a, Oh, void 0, void 0, !1);
  }
  function Oh(a) {
    return a.Ld === Dg ? a.toJSON() : a instanceof zh ? a.vf(Nh) : Gh(a);
  }
  var Ph = Uf ? structuredClone : (a) => Jh(a, Lh, void 0, void 0, !1);
  function Qh(a, b, c = Bg) {
    if (null != a) {
      if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = a[C] | 0;
        if (d & 2) return a;
        b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b ? xg(a, (d | 34) & -12293) : Jh(a, Qh, d & 4 ? Bg : c, !0, !0);
      }
      a.Ld === Dg
        ? ((c = a.V),
          (d = c[C]),
          (a = d & 2 ? a : Eh(a.constructor, Rh(c, d, !0))))
        : a instanceof zh &&
          !(a.qc & 2) &&
          ((c = yg(a.uf(Qh))), (a = new zh(c, a.ae, a.Jc, a.Bf)));
      return a;
    }
  }
  function Sh(a) {
    const b = a.V;
    return Eh(a.constructor, Rh(b, b[C], !1));
  }
  function Rh(a, b, c) {
    const d = c || b & 2 ? Bg : Ag,
      e = !!(b & 32);
    a = Hh(a, b, (f) => Qh(f, e, d));
    a[C] = a[C] | 32 | (c ? 2 : 0);
    return a;
  }
  function Ah(a) {
    const b = a.V,
      c = b[C];
    return c & 2 ? Eh(a.constructor, Rh(b, c, !1)) : a;
  }
  function Th(a, b, c) {
    if (!(4 & b)) return !0;
    if (null == c) return !1;
    0 === c &&
      (4096 & b || 8192 & b) &&
      5 > (a.constructor[vg] = (a.constructor[vg] | 0) + 1) &&
      ((a = Error()), Se(a, "incident"), Qg ? Sg(a) : Ff(a));
    return 0 === c ? !1 : !(c & b);
  }
  function Uh(a, b) {
    a = a.V;
    return Vh(a, a[C], b);
  }
  function Vh(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= Cg(b)) {
      if (b & 256) return a[a.length - 1][c];
    } else {
      var e = a.length;
      if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
      b = c + (+!!(b & 512) - 1);
      if (b < e) return a[b];
    }
  }
  function Wh(a, b, c) {
    const d = a.V;
    let e = d[C];
    Mg(e);
    Xh(d, e, b, c);
    return a;
  }
  function Xh(a, b, c, d, e) {
    const f = Cg(b);
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
      g !== b && xg(a, g);
      return g;
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    return b;
  }
  function Yh(a, b, c) {
    return void 0 !== Zh(a, b, c, !1);
  }
  function $h(a, b) {
    a = a.V;
    let c = a[C];
    const d = Vh(a, c, b);
    var e =
      null == d || "number" === typeof d
        ? d
        : "NaN" === d || "Infinity" === d || "-Infinity" === d
        ? Number(d)
        : void 0;
    null != e && e !== d && Xh(a, c, b, e);
    return e;
  }
  function ai(a, b) {
    a = Uh(a, b);
    return null == a || "boolean" === typeof a
      ? a
      : "number" === typeof a
      ? !!a
      : void 0;
  }
  function bi(a, b, c, d) {
    const e = a.V;
    let f = e[C];
    const g = 2 & f ? 1 : 2;
    let h = ci(e, f, b);
    var k = h[C] | 0;
    if (Th(a, k, d)) {
      if (4 & k || Object.isFrozen(h))
        (h = tg(h)), (k = di(k, f, !1)), (f = Xh(e, f, b, h));
      let l = (a = 0);
      for (; a < h.length; a++) {
        const m = c(h[a]);
        null != m && (h[l++] = m);
      }
      l < a && (h.length = l);
      k = ei(k, f, !1);
      k = wg(k, 20, !0);
      k = wg(k, 4096, !1);
      k = wg(k, 8192, !1);
      d && (k = wg(k, d, !0));
      xg(h, k);
      2 & k && Object.freeze(h);
    }
    fi(k) ||
      ((d = k),
      (c = 1 === g) ? (k = wg(k, 2, !0)) : (k = wg(k, 32, !1)),
      k !== d && xg(h, k),
      c && Object.freeze(h));
    2 === g &&
      fi(k) &&
      ((h = tg(h)), (k = di(k, f, !1)), xg(h, k), Xh(e, f, b, h));
    return h;
  }
  function ci(a, b, c, d) {
    a = Vh(a, b, c, d);
    return Array.isArray(a) ? a : Kg;
  }
  function ei(a, b, c) {
    0 === a && (a = di(a, b, c));
    return (a = wg(a, 1, !0));
  }
  function fi(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
  }
  function gi(a, b, c) {
    var d = hi,
      e = b & 2;
    let f = !1;
    if (null == c) {
      if (e) return Ch();
      c = [];
    } else if (c.constructor === zh) {
      if (0 == (c.qc & 2) || e) return c;
      c = c.uf();
    } else Array.isArray(c) ? (f = !!((c[C] | 0) & 2)) : (c = []);
    if (e) {
      if (!c.length) return Ch();
      f || ((f = !0), yg(c));
    } else if (f) {
      f = !1;
      e = tg(c);
      for (c = 0; c < e.length; c++) {
        const g = (e[c] = tg(e[c]));
        Array.isArray(g[1]) && (g[1] = yg(g[1]));
      }
      c = e;
    }
    f || ((c[C] | 0) & 64 ? (c[C] &= -33) : 32 & b && zg(c));
    d = new zh(c, d, rh, void 0);
    Xh(a, b, 14, d, !1);
    return d;
  }
  function ii(a, b, c, d) {
    const e = a.V;
    let f = e[C];
    Mg(f);
    if (null == c) return Xh(e, f, b), a;
    let g = c[C] | 0,
      h = g;
    var k = !!(2 & g) || Object.isFrozen(c);
    const l = !k && !1;
    if (Th(a, g))
      for (
        g = 21, k && ((c = tg(c)), (h = 0), (g = di(g, f, !0))), k = 0;
        k < c.length;
        k++
      )
        c[k] = d(c[k]);
    l && ((c = tg(c)), (h = 0), (g = di(g, f, !0)));
    g !== h && xg(c, g);
    Xh(e, f, b, c);
    return a;
  }
  function ji(a, b, c, d) {
    const e = a.V;
    let f = e[C];
    Mg(f);
    Xh(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
    return a;
  }
  function ki(a, b, c, d) {
    const e = a.V;
    let f = e[C];
    Mg(f);
    (c = li(e, f, c)) && c !== b && null != d && (f = Xh(e, f, c));
    Xh(e, f, b, d);
    return a;
  }
  function mi(a, b, c) {
    a = a.V;
    return li(a, a[C], b) === c ? c : -1;
  }
  function li(a, b, c) {
    let d = 0;
    for (let e = 0; e < c.length; e++) {
      const f = c[e];
      null != Vh(a, b, f) && (0 !== d && (b = Xh(a, b, d)), (d = f));
    }
    return d;
  }
  function Zh(a, b, c, d) {
    a = a.V;
    let e = a[C];
    const f = Vh(a, e, c, d);
    b = ph(f, b, !1, e);
    b !== f && null != b && Xh(a, e, c, b, d);
    return b;
  }
  function ni(a) {
    var b = oi;
    return (a = Zh(a, b, 1, !1)) ? a : qh(b);
  }
  function D(a, b, c) {
    b = Zh(a, b, c, !1);
    if (null == b) return b;
    a = a.V;
    let d = a[C];
    if (!(d & 2)) {
      const e = Ah(b);
      e !== b && ((b = e), Xh(a, d, c, b, !1));
    }
    return b;
  }
  function pi(a, b, c, d, e, f, g, h) {
    var k = !!(2 & b),
      l = k ? 1 : e;
    e = 1 === l;
    l = 2 === l;
    g = !!g;
    h && (h = !k);
    k = ci(a, b, d, f);
    var m = k[C] | 0;
    const n = !!(4 & m);
    if (!n) {
      m = ei(m, b, g);
      var p = k,
        q = b;
      const v = !!(2 & m);
      v && (q = wg(q, 2, !0));
      let A = !v,
        B = !0,
        E = 0,
        J = 0;
      for (; E < p.length; E++) {
        const G = ph(p[E], c, !1, q);
        if (G instanceof c) {
          if (!v) {
            const K = !!((G.V[C] | 0) & 2);
            A && (A = !K);
            B && (B = K);
          }
          p[J++] = G;
        }
      }
      J < E && (p.length = J);
      m = wg(m, 4, !0);
      m = wg(m, 16, B);
      m = wg(m, 8, A);
      xg(p, m);
      v && Object.freeze(p);
    }
    c = !!(8 & m) || (e && !k.length);
    if (h && !c) {
      fi(m) && ((k = tg(k)), (m = di(m, b, g)), (b = Xh(a, b, d, k, f)));
      h = k;
      c = m;
      for (p = 0; p < h.length; p++)
        (m = h[p]), (q = Ah(m)), m !== q && (h[p] = q);
      c = wg(c, 8, !0);
      c = wg(c, 16, !h.length);
      xg(h, c);
      m = c;
    }
    fi(m) ||
      ((h = m),
      e
        ? (m = wg(m, !k.length || (16 & m && (!n || 32 & m)) ? 2 : 2048, !0))
        : g || (m = wg(m, 32, !1)),
      m !== h && xg(k, m),
      e && Object.freeze(k));
    l && fi(m) && ((k = tg(k)), (m = di(m, b, g)), xg(k, m), Xh(a, b, d, k, f));
    return k;
  }
  function F(a, b, c) {
    a = a.V;
    const d = a[C];
    return pi(a, d, b, c, 2, void 0, !1, !(2 & d));
  }
  function H(a, b, c) {
    null == c && (c = void 0);
    return Wh(a, b, c);
  }
  function qi(a, b, c, d) {
    null == d && (d = void 0);
    return ki(a, b, c, d);
  }
  function ri(a, b, c) {
    const d = a.V;
    let e = d[C];
    Mg(e);
    if (null == c) return Xh(d, e, b), a;
    let f = c[C] | 0,
      g = f;
    const h = !!(2 & f) || !!(2048 & f),
      k = h || Object.isFrozen(c);
    let l = !0,
      m = !0;
    for (let p = 0; p < c.length; p++) {
      var n = c[p];
      h || ((n = !!((n.V[C] | 0) & 2)), l && (l = !n), m && (m = n));
    }
    h || ((f = wg(f, 5, !0)), (f = wg(f, 8, l)), (f = wg(f, 16, m)));
    k && f !== g && ((c = tg(c)), (g = 0), (f = di(f, e, !0)));
    f !== g && xg(c, f);
    Xh(d, e, b, c);
    return a;
  }
  function di(a, b, c) {
    a = wg(a, 2, !!(2 & b));
    a = wg(a, 32, !!(32 & b) && c);
    return (a = wg(a, 2048, !1));
  }
  function si(a, b, c, d, e, f, g) {
    a = a.V;
    const h = a[C];
    Mg(h);
    b = pi(a, h, c, b, 2, f, !0);
    c = null != d ? d : new c();
    if (g && ("number" !== typeof e || 0 > e || e > b.length)) throw Error();
    void 0 != e ? b.splice(e, g, c) : b.push(c);
    b[C] = (c.V[C] | 0) & 2 ? b[C] & -9 : b[C] & -17;
  }
  function ti(a, b) {
    return ah(Uh(a, b));
  }
  function ui(a, b) {
    return jh(Uh(a, b));
  }
  function I(a, b) {
    return oh(Uh(a, b));
  }
  function L(a, b) {
    return Zg(Uh(a, b));
  }
  function vi(a, b) {
    return a ?? b;
  }
  function N(a, b, c = !1) {
    return ai(a, b) ?? c;
  }
  function wi(a, b) {
    return vi(ti(a, b), 0);
  }
  function xi(a, b) {
    return vi(ui(a, b), 0);
  }
  function yi(a, b, c = 0) {
    return vi($h(a, b), c);
  }
  function O(a, b) {
    return I(a, b) ?? "";
  }
  function zi(a, b) {
    return vi(L(a, b), 0);
  }
  function Ai(a, b, c, d) {
    return D(a, b, mi(a, d, c));
  }
  function Bi(a, b) {
    a = ti(a, b);
    return null == a ? void 0 : a;
  }
  function Ci(a) {
    a = $h(a, 4);
    return null == a ? void 0 : a;
  }
  function Di(a, b, c) {
    return Wh(a, b, null == c ? c : Vg(c));
  }
  function Ei(a, b, c) {
    return ji(a, b, null == c ? c : Vg(c), !1);
  }
  function Fi(a, b, c) {
    return Wh(a, b, null == c ? c : $g(c));
  }
  function Gi(a, b, c) {
    return ji(a, b, null == c ? c : $g(c), 0);
  }
  function Hi(a, b, c) {
    return Wh(a, b, null == c ? c : dh(c));
  }
  function P(a, b, c) {
    return ji(a, b, null == c ? c : dh(c), "0");
  }
  function Ii(a, b, c) {
    return Wh(a, b, nh(c));
  }
  function Ji(a, b, c) {
    return ji(a, b, nh(c), "");
  }
  function Q(a, b, c) {
    return ji(a, b, Yg(c), 0);
  }
  function $i(a) {
    Hg = !0;
    try {
      return JSON.stringify(a.toJSON(), Fh);
    } finally {
      Hg = !1;
    }
  }
  var R = class {
    constructor(a) {
      a: {
        null == a && (a = Dh);
        Dh = void 0;
        if (null == a) {
          var b = 96;
          a = [];
        } else {
          if (!Array.isArray(a)) throw Error();
          b = a[C] | 0;
          if (b & 64) break a;
          var c = a;
          b |= 64;
          var d = c.length;
          if (d && (--d, Gg(c[d]))) {
            b |= 256;
            c = d - (+!!(b & 512) - 1);
            if (1024 <= c) throw Error();
            b = (b & -16760833) | ((c & 1023) << 14);
          }
        }
        xg(a, b);
      }
      this.V = a;
    }
    toJSON() {
      return Hg
        ? Mh(this, this.V, !1)
        : Mh(this, Jh(this.V, Oh, void 0, void 0, !1), !0);
    }
    i() {
      const a = this.V,
        b = a[C];
      return b & 2 ? this : Eh(this.constructor, Rh(a, b, !0));
    }
  };
  R.prototype.Ld = Dg;
  function Mh(a, b, c) {
    var d = $b ? void 0 : a.constructor.O;
    const e = (c ? a.V : b)[C];
    a = b.length;
    if (!a) return b;
    let f, g;
    if (Gg((c = b[a - 1]))) {
      a: {
        var h = c;
        let m = {},
          n = !1;
        for (var k in h) {
          if (!Object.prototype.hasOwnProperty.call(h, k)) continue;
          let p = h[k];
          if (Array.isArray(p)) {
            let q = p;
            if (Jg(p, d, +k) || (Fg(p) && 0 === p.size)) p = null;
            p != q && (n = !0);
          }
          null != p ? (m[k] = p) : (n = !0);
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
      if (!(null == c || Jg(c, d, l) || (Fg(c) && 0 === c.size))) break;
      g = !0;
    }
    if (!f && !g) return b;
    b = Array.prototype.slice.call(b, 0, a);
    h && b.push(h);
    return b;
  }
  function aj(a, b) {
    if (null == b) return new a();
    if (!Array.isArray(b)) throw Error("must be an array");
    if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
      throw Error("arrays passed to jspb constructors must be mutable");
    b[C] |= 128;
    return Eh(a, zg(b));
  }
  function bj(a, b) {
    const c = cj;
    cj = void 0;
    if (!b(a)) throw ((b = c ? c() + "\n" : ""), Error(b + String(a)));
  }
  let cj = void 0;
  const dj = (a) => null !== a && void 0 !== a;
  function ej(a) {
    return (b) => {
      if (null == b || "" == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        b = Eh(a, zg(b));
      }
      return b;
    };
  }
  function Pe(a) {
    return new Ne(a[0].toLowerCase());
  }
  function fj(a) {
    a = document.createRange().createContextualFragment(Fd(a));
    return 1 === a.childNodes.length ? a.childNodes[0] : a;
  }
  function gj(a) {
    var b = {};
    if (a instanceof Gd) return a;
    a = hj(String(a));
    b.co && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
    b.bo && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
    b.eo &&
      (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
    return Hd(a);
  }
  function hj(a) {
    return a
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }
  function ij(a) {
    const b = gj("");
    return Hd(a.map((c) => Fd(gj(c))).join(Fd(b).toString()));
  }
  const jj = /^[a-z][a-z\d-]*$/i,
    kj =
      "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(
        " "
      );
  var lj =
    "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
  const mj = ["action", "formaction", "href"];
  function nj(a, b) {
    if (!jj.test("body")) throw Error("");
    if (-1 !== kj.indexOf("BODY")) throw Error("");
    let c = "<body";
    a && (c += oj(a));
    Array.isArray(b) || (b = void 0 === b ? [] : [b]);
    -1 !== lj.indexOf("BODY")
      ? (c += ">")
      : ((a = ij(b.map((d) => (d instanceof Gd ? d : gj(String(d)))))),
        (c += ">" + a.toString() + "</body>"));
    return Hd(c);
  }
  function oj(a) {
    var b = "";
    const c = Object.keys(a);
    for (let f = 0; f < c.length; f++) {
      var d = c[f],
        e = a[d];
      if (!jj.test(d)) throw Error("");
      if (void 0 !== e && null !== e) {
        if (/^on/i.test(d)) throw Error("");
        -1 !== mj.indexOf(d.toLowerCase()) &&
          (e =
            e instanceof jd
              ? e.toString()
              : Ke(String(e)) || "about:invalid#zClosurez");
        e = `${d}="${gj(String(e))}"`;
        b += " " + e;
      }
    }
    return b;
  }
  function pj(a) {
    const b = a.split(/\?|#/),
      c = /\?/.test(a) ? "?" + b[1] : "";
    return {
      path: b[0],
      params: c,
      hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : "",
    };
  }
  function qj(a, ...b) {
    if (0 === b.length) return dd(a[0]);
    let c = a[0];
    for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return dd(c);
  }
  function rj(a) {
    var b = qj`https://cse.google.com/cse.js`;
    b = pj(cd(b).toString());
    let c = b.params,
      d = c.length ? "&" : "?";
    a.forEach((e, f) => {
      e = e instanceof Array ? e : [e];
      for (let g = 0; g < e.length; g++) {
        const h = e[g];
        null !== h &&
          void 0 !== h &&
          ((c +=
            d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h))),
          (d = "&"));
      }
    });
    return dd(b.path + c + b.hash);
  }
  function sj(a, ...b) {
    let c = a[0];
    for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
    if (/[<>]/.test(c))
      throw Error("Forbidden characters in style string: " + c);
    return new ud(c, sd);
  }
  qj`https://www.google.com/recaptcha/api2/aframe`;
  function tj(a) {
    var b = window;
    new Promise((c, d) => {
      function e() {
        f.onload = null;
        f.onerror = null;
        f.parentElement?.removeChild(f);
      }
      const f = b.document.createElement("script");
      f.onload = () => {
        e();
        c();
      };
      f.onerror = () => {
        e();
        d(void 0);
      };
      f.type = "text/javascript";
      Re(f, a);
      "complete" !== b.document.readyState
        ? Rb(b, "load", () => {
            b.document.body.appendChild(f);
          })
        : b.document.body.appendChild(f);
    });
  }
  async function uj(a) {
    var b =
      "https://pagead2.googlesyndication.com/getconfig/sodar" +
      `?sv=${200}&tid=${a.g}` +
      `&tv=${a.i}&st=` +
      `${a.lc}`;
    let c = void 0;
    try {
      c = await vj(b);
    } catch (g) {}
    if (c) {
      b = a.Ic || c.sodar_query_id;
      var d = void 0 !== c.rc_enable && a.j ? c.rc_enable : "n",
        e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
        f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
      if (b && c.bg_hash_basename && c.bg_binary)
        return {
          context: a.l,
          Ph: c.bg_hash_basename,
          Oh: c.bg_binary,
          Ui: a.g + "_" + a.i,
          Ic: b,
          lc: a.lc,
          Gd: d,
          Yd: e,
          Ed: f,
        };
    }
  }
  let vj = (a) =>
    new Promise((b, c) => {
      const d = new XMLHttpRequest();
      d.onreadystatechange = () => {
        d.readyState === d.DONE &&
          (200 <= d.status && 300 > d.status
            ? b(JSON.parse(d.responseText))
            : c());
      };
      d.open("GET", a, !0);
      d.send();
    });
  async function wj(a) {
    var b = await uj(a);
    if (b) {
      a = window;
      let c = a.GoogleGcLKhOms;
      (c && "function" === typeof c.push) || (c = a.GoogleGcLKhOms = []);
      c.push({
        _ctx_: b.context,
        _bgv_: b.Ph,
        _bgp_: b.Oh,
        _li_: b.Ui,
        _jk_: b.Ic,
        _st_: b.lc,
        _rc_: b.Gd,
        _dl_: b.Yd,
        _g2_: b.Ed,
      });
      if ((b = a.GoogleDX5YKUSk)) (a.GoogleDX5YKUSk = void 0), b[1]();
      a = qj`https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
      tj(a);
    }
  }
  function xj(a, b) {
    return Ji(a, 1, b);
  }
  var yj = class extends R {
    g() {
      return O(this, 1);
    }
  };
  function zj(a, b) {
    return H(a, 5, b);
  }
  function Aj(a, b) {
    return Ji(a, 3, b);
  }
  function Bj(a, b) {
    return Ei(a, 6, b);
  }
  var Cj = class extends R {
    constructor() {
      super();
    }
  };
  function Dj(a) {
    switch (a) {
      case 1:
        return "gda";
      case 2:
        return "gpt";
      case 3:
        return "ima";
      case 4:
        return "pal";
      case 5:
        return "xfad";
      case 6:
        return "dv3n";
      case 7:
        return "spa";
      default:
        return "unk";
    }
  }
  var Ej = class {
      constructor(a) {
        this.g = a.i;
        this.i = a.j;
        this.l = a.l;
        this.Ic = a.Ic;
        this.win = a.da();
        this.lc = a.lc;
        this.Gd = a.Gd;
        this.Yd = a.Yd;
        this.Ed = a.Ed;
        this.j = a.g;
      }
    },
    Fj = class {
      constructor(a, b, c) {
        this.i = a;
        this.j = b;
        this.l = c;
        this.win = window;
        this.lc = "env";
        this.Gd = "n";
        this.Yd = "0";
        this.Ed = "1";
        this.g = !0;
      }
      da() {
        return this.win;
      }
      build() {
        return new Ej(this);
      }
    };
  function Gj(a) {
    var b = new Hj();
    return Ii(b, 1, a);
  }
  function Ij(a, b) {
    return Hi(a, 2, b);
  }
  function Jj(a, b) {
    return Ii(a, 3, b);
  }
  function Kj(a, b) {
    return Ii(a, 4, b);
  }
  var Hj = class extends R {
    getValue() {
      return O(this, 1);
    }
    getVersion() {
      return zi(this, 5);
    }
  };
  var Lj = class extends R {};
  Lj.O = [2, 3, 4];
  var Mj = class extends R {};
  function Nj(a, b, c = null, d = !1, e = !1) {
    Oj(a, b, c, d, e);
  }
  function Oj(a, b, c, d, e = !1) {
    a.google_image_requests || (a.google_image_requests = []);
    const f = Ye("IMG", a.document);
    if (c || d) {
      const g = (h) => {
        c && c(h);
        d && bb(a.google_image_requests, f);
        Sb(f, "load", g);
        Sb(f, "error", g);
      };
      Rb(f, "load", g);
      Rb(f, "error", g);
    }
    e && (f.attributionSrc = "");
    f.src = b;
    a.google_image_requests.push(f);
  }
  var Qj = (a, b) => {
      let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
      af(a, (d, e) => {
        if (d || 0 === d) c += `&${e}=${encodeURIComponent("" + d)}`;
      });
      Pj(c);
    },
    Pj = (a) => {
      var b = window;
      b.fetch
        ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : Nj(b, a, void 0, !1, !1);
    };
  var Rj = window;
  var Sj = class extends R {
    constructor() {
      super();
    }
  };
  Sj.O = [15];
  var Tj = class extends R {
    constructor() {
      super();
    }
    getCorrelator() {
      return xi(this, 1);
    }
    setCorrelator(a) {
      return P(this, 1, a);
    }
  };
  var Uj = class extends R {
    constructor() {
      super();
    }
  };
  function Vj(a) {
    this.g = a || { cookie: "" };
  }
  aa = Vj.prototype;
  aa.set = function (a, b, c) {
    let d,
      e,
      f,
      g = !1,
      h;
    "object" === typeof c &&
      ((h = c.fo),
      (g = c.gh || !1),
      (f = c.domain || void 0),
      (e = c.path || void 0),
      (d = c.Id));
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
  aa.get = function (a, b) {
    const c = a + "=",
      d = (this.g.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
      f = ac(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  aa.isEmpty = function () {
    return !this.g.cookie;
  };
  aa.Ec = function () {
    return this.g.cookie ? (this.g.cookie || "").split(";").length : 0;
  };
  aa.clear = function () {
    var a = (this.g.cookie || "").split(";");
    const b = [];
    var c = [];
    let d, e;
    for (let f = 0; f < a.length; f++)
      (e = ac(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (c = b.length - 1; 0 <= c; c--)
      (a = b[c]),
        this.get(a),
        this.set(a, "", { Id: 0, path: void 0, domain: void 0 });
  };
  function Wj(a, b = window) {
    if (a.g())
      try {
        return b.localStorage;
      } catch {}
    return null;
  }
  function Xj(a = window) {
    try {
      return a.localStorage;
    } catch {
      return null;
    }
  }
  function Yj(a) {
    return "null" !== a.origin;
  }
  function Zj(a, b, c) {
    b = b.g() && Yj(c) ? c.document.cookie : null;
    return null === b ? null : new Vj({ cookie: b }).get(a) || "";
  }
  function ak(a, b, c, d, e) {
    b.g() &&
      Yj(c) &&
      ((b = new Vj(c.document)),
      b.get(a),
      b.set(a, "", { Id: 0, path: d, domain: e }));
  }
  let bk = null,
    ck = null;
  function dk() {
    if (null != bk) return bk;
    bk = !1;
    try {
      const a = We(r);
      a && -1 !== a.location.hash.indexOf("google_logging") && (bk = !0);
      Xj(r)?.getItem("google_logging") && (bk = !0);
    } catch (a) {}
    return bk;
  }
  function ek() {
    if (null != ck) return ck;
    ck = !1;
    try {
      const a = We(r),
        b = Xj(r);
      if (
        (a && -1 !== a.location.hash.indexOf("auto_ads_logging")) ||
        (b && b.getItem("auto_ads_logging"))
      )
        ck = !0;
    } catch (a) {}
    return ck;
  }
  var fk = (a, b = []) => {
    let c = !1;
    r.google_logging_queue || ((c = !0), (r.google_logging_queue = []));
    r.google_logging_queue.push([a, b]);
    c &&
      dk() &&
      Xe(
        r.document,
        qj`https://pagead2.googlesyndication.com/pagead/js/logging_library.js`
      );
  };
  function gk(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  }
  aa = gk.prototype;
  aa.getWidth = function () {
    return this.right - this.left;
  };
  aa.getHeight = function () {
    return this.bottom - this.top;
  };
  function hk(a) {
    return new gk(a.top, a.right, a.bottom, a.left);
  }
  aa.contains = function (a) {
    return this && a
      ? a instanceof gk
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };
  function ik(a, b) {
    return (
      a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
    );
  }
  aa.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  aa.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  aa.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  function jk(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  }
  function kk(a, b) {
    var c = Math.max(a.left, b.left),
      d = Math.min(a.left + a.width, b.left + b.width);
    if (c <= d) {
      var e = Math.max(a.top, b.top);
      a = Math.min(a.top + a.height, b.top + b.height);
      if (e <= a) return new jk(c, e, d - c, a - e);
    }
    return null;
  }
  function lk(a, b) {
    var c = kk(a, b);
    if (!c || !c.height || !c.width)
      return [new jk(a.left, a.top, a.width, a.height)];
    c = [];
    var d = a.top,
      e = a.height,
      f = a.left + a.width,
      g = a.top + a.height,
      h = b.left + b.width,
      k = b.top + b.height;
    b.top > a.top &&
      (c.push(new jk(a.left, a.top, a.width, b.top - a.top)),
      (d = b.top),
      (e -= b.top - a.top));
    k < g && (c.push(new jk(a.left, k, a.width, g - k)), (e = k - d));
    b.left > a.left && c.push(new jk(a.left, d, b.left - a.left, e));
    h < f && c.push(new jk(h, d, f - h, e));
    return c;
  }
  jk.prototype.contains = function (a) {
    return a instanceof Zd
      ? a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  jk.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  jk.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  jk.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  const mk = {
    "AMP-CAROUSEL": "ac",
    "AMP-FX-FLYING-CARPET": "fc",
    "AMP-LIGHTBOX": "lb",
    "AMP-STICKY-AD": "sa",
  };
  function nk(a = r) {
    let b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function ok(a = nk()) {
    return a && a.mode ? +a.mode.version || null : null;
  }
  function pk(a = nk()) {
    if (a && a.container) {
      a = a.container.split(",");
      const b = [];
      for (let c = 0; c < a.length; c++) b.push(mk[a[c]] || "x");
      return b.join();
    }
    return null;
  }
  function qk() {
    var a = nk();
    return a && a.initialIntersection;
  }
  function rk() {
    const a = qk();
    return a && za(a.rootBounds)
      ? new $d(a.rootBounds.width, a.rootBounds.height)
      : null;
  }
  function sk(a = nk()) {
    return a ? (Te(a.master) ? a.master : null) : null;
  }
  function tk(a, b) {
    const c = (a.ampInaboxIframes = a.ampInaboxIframes || []);
    let d = () => {},
      e = () => {};
    b &&
      (c.push(b),
      (e = () => {
        a.AMP &&
          a.AMP.inaboxUnregisterIframe &&
          a.AMP.inaboxUnregisterIframe(b);
        bb(c, b);
        d();
      }));
    if (a.ampInaboxInitialized) return e;
    a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
    const f = (g) => {
      if (a.ampInaboxInitialized) g = !0;
      else {
        var h,
          k = "amp-ini-load" === g.data;
        a.ampInaboxPendingMessages &&
          !k &&
          (h = /^amp-(\d{15,20})?/.exec(g.data)) &&
          (a.ampInaboxPendingMessages.push(g),
          (g = h[1]),
          a.ampInaboxInitialized ||
            (g && !/^\d{15,20}$/.test(g)) ||
            a.document.querySelector('script[src$="amp4ads-host-v0.js"]') ||
            Xe(
              a.document,
              g
                ? qj`https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js`
                : qj`https://cdn.ampproject.org/amp4ads-host-v0.js`
            ));
        g = !1;
      }
      g && d();
    };
    c.google_amp_listener_added ||
      ((c.google_amp_listener_added = !0),
      Rb(a, "message", f),
      (d = () => {
        Sb(a, "message", f);
      }));
    return e;
  }
  var uk = () => (a) => {
    a = { id: "unsafeurl", ctx: 638, url: a };
    var b = [];
    for (c in a) ze(c, a[c], b);
    var c = ye(
      "https://pagead2.googlesyndication.com/pagead/gen_204",
      b.join("&")
    );
    navigator.sendBeacon && navigator.sendBeacon(c, "");
  };
  function vk(a, b, c) {
    if ("string" === typeof b) (b = wk(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = wk(c, d);
        f && (c.style[f] = e);
      }
  }
  var xk = {};
  function wk(a, b) {
    var c = xk[b];
    if (!c) {
      var d = ee(b);
      c = d;
      void 0 === a.style[d] &&
        ((d = (Dc ? "Webkit" : Cc ? "Moz" : zc ? "ms" : null) + fe(d)),
        void 0 !== a.style[d] && (c = d));
      xk[b] = c;
    }
    return c;
  }
  function yk(a, b) {
    var c = ie(a);
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (a = c.defaultView.getComputedStyle(a, null))
      ? a[b] || a.getPropertyValue(b) || ""
      : "";
  }
  function zk(a, b) {
    return (
      yk(a, b) ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  }
  function Ak(a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  }
  function Bk(a) {
    var b = ie(a),
      c = new Zd(0, 0);
    var d = b ? ie(b) : document;
    d =
      !zc || 9 <= Number(Oc) || "CSS1Compat" == ge(d).g.compatMode
        ? d.documentElement
        : d.body;
    if (a == d) return c;
    a = Ak(a);
    b = ke(ge(b).g);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  }
  function Ck(a) {
    var b = Dk;
    if ("none" != zk(a, "display")) return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  }
  function Dk(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = Dc && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect
      ? ((a = Ak(a)), new $d(a.right - a.left, a.bottom - a.top))
      : new $d(b, c);
  }
  function Ek(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left,
      d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    b = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return +b;
  }
  function Fk(a, b) {
    return (b = a.currentStyle ? a.currentStyle[b] : null) ? Ek(a, b) : 0;
  }
  var Gk = { thin: 2, medium: 4, thick: 6 };
  function Hk(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
      return 0;
    b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return b in Gk ? Gk[b] : Ek(a, b);
  }
  var Ik = (a) => "number" === typeof a && 0 < a,
    Kk = (a, b) => {
      a = Jk(a);
      if (!a) return b;
      const c = b.slice(-1);
      return b + ("?" === c || "#" === c ? "" : "&") + a;
    },
    Jk = (a) =>
      Object.entries(Lk(a))
        .map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`)
        .join("&"),
    Lk = (a) => {
      const b = {};
      af(a, (c, d) => {
        if (c || 0 === c || !1 === c)
          "boolean" === typeof c && (c = c ? 1 : 0), (b[d] = c);
      });
      return b;
    },
    Mk = () => {
      try {
        return Rj.history.length;
      } catch (a) {
        return 0;
      }
    },
    Nk = (a) => {
      a = sk(nk(a)) || a;
      a.google_unique_id = (a.google_unique_id || 0) + 1;
    },
    Ok = (a) => {
      a = a.google_unique_id;
      return "number" === typeof a ? a : 0;
    },
    Pk = (a) => {
      let b;
      b = 9 !== a.nodeType && a.id;
      a: {
        if (a && a.nodeName && a.parentElement) {
          var c = a.nodeName.toString().toLowerCase();
          const d = a.parentElement.childNodes;
          let e = 0;
          for (let f = 0; f < d.length; ++f) {
            const g = d[f];
            if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
              if (a === g) {
                c = "." + e;
                break a;
              }
              ++e;
            }
          }
        }
        c = "";
      }
      return (
        (a.nodeName && a.nodeName.toString().toLowerCase()) +
        (b ? "/" + b : "") +
        c
      );
    },
    Qk = () => {
      if (!Rj) return !1;
      try {
        return !(!Rj.navigator.standalone && !Rj.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    },
    Rk = (a) => ((a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1),
    Sk = (a) => {
      let b = Number(a.google_ad_width),
        c = Number(a.google_ad_height);
      if (!(0 < b && 0 < c)) {
        a: {
          try {
            const e = String(a.google_ad_format);
            if (e && e.match) {
              const f = e.match(/(\d+)x(\d+)/i);
              if (f) {
                const g = parseInt(f[1], 10),
                  h = parseInt(f[2], 10);
                if (0 < g && 0 < h) {
                  var d = { width: g, height: h };
                  break a;
                }
              }
            }
          } catch (e) {}
          d = null;
        }
        a = d;
        if (!a) return null;
        b = 0 < b ? b : a.width;
        c = 0 < c ? c : a.height;
      }
      return { width: b, height: c };
    };
  class Tk {
    constructor(a, b) {
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = {};
    }
  }
  const Uk = RegExp(
    "^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"
  );
  var Vk = class {
      constructor(a, b) {
        this.g = a;
        this.i = b;
      }
    },
    Wk = class {
      constructor(a, b, c) {
        this.url = a;
        this.win = b;
        this.yg = !!c;
        this.depth = null;
      }
    };
  let Xk = null;
  function Yk() {
    if (null === Xk) {
      Xk = "";
      try {
        let a = "";
        try {
          a = r.top.location.hash;
        } catch (b) {
          a = r.location.hash;
        }
        if (a) {
          const b = a.match(/\bdeid=([\d,]+)/);
          Xk = b ? b[1] : "";
        }
      } catch (a) {}
    }
    return Xk;
  }
  function Zk() {
    const a = r.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function $k() {
    const a = r.performance;
    return a && a.now ? a.now() : null;
  }
  var al = class {
    constructor(a, b) {
      var c = $k() || Zk();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = void 0;
      this.uniqueId = Math.random();
    }
  };
  const bl = r.performance,
    cl = !!(bl && bl.mark && bl.measure && bl.clearMarks),
    dl = Hb(() => {
      var a;
      if ((a = cl)) (a = Yk()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    });
  function el(a) {
    a &&
      bl &&
      dl() &&
      (bl.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      bl.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function fl(a) {
    a.g = !1;
    a.i != a.j.google_js_reporting_queue &&
      (dl() && Ua(a.i, el), (a.i.length = 0));
  }
  function gl(a, b) {
    if (!a.g) return b();
    const c = a.start("491", 3);
    let d;
    try {
      d = b();
    } catch (e) {
      throw (el(c), e);
    }
    a.end(c);
    return d;
  }
  class hl {
    constructor(a) {
      this.i = [];
      this.j = a || r;
      let b = null;
      a &&
        ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
        (this.i = a.google_js_reporting_queue),
        (b = a.google_measure_js_timing));
      this.g = dl() || (null != b ? b : 1 > Math.random());
    }
    start(a, b) {
      if (!this.g) return null;
      a = new al(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      bl && dl() && bl.mark(b);
      return a;
    }
    end(a) {
      if (this.g && "number" === typeof a.value) {
        a.duration = ($k() || Zk()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        bl && dl() && bl.mark(b);
        !this.g || 2048 < this.i.length || this.i.push(a);
      }
    }
  }
  function il(a, b) {
    const c = {};
    c[a] = b;
    return [c];
  }
  function jl(a, b, c, d, e) {
    const f = [];
    af(a, function (g, h) {
      (g = kl(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function kl(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        const f = [];
        for (let g = 0; g < a.length; g++) f.push(kl(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(jl(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function ll(a) {
    let b = 1;
    for (const c in a.i) b = c.length > b ? c.length : b;
    return 3997 - b - a.j.length - 1;
  }
  function ml(a, b) {
    let c = "https://pagead2.googlesyndication.com" + b,
      d = ll(a) - b.length;
    if (0 > d) return "";
    a.g.sort(function (f, g) {
      return f - g;
    });
    b = null;
    let e = "";
    for (let f = 0; f < a.g.length; f++) {
      const g = a.g[f],
        h = a.i[g];
      for (let k = 0; k < h.length; k++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        let l = jl(h[k], a.j, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            e = a.j;
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
  class nl {
    constructor() {
      this.j = "&";
      this.i = {};
      this.l = 0;
      this.g = [];
    }
  }
  function ol(a) {
    let b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    a.stack && (b = pl(a.stack, b));
    return b;
  }
  function pl(a, b) {
    try {
      -1 == a.indexOf(b) && (a = b + "\n" + a);
      let c;
      for (; a != c; )
        (c = a),
          (a = a.replace(
            RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
            "$1"
          ));
      return a.replace(RegExp("\n *", "g"), "\n");
    } catch (c) {
      return b;
    }
  }
  var rl = class {
    constructor(a, b, c = null) {
      this.wa = a;
      this.A = b;
      this.i = c;
      this.g = null;
      this.j = !1;
      this.B = this.va;
    }
    nf(a) {
      this.g = a;
    }
    l(a) {
      this.j = a;
    }
    ic(a, b, c) {
      let d, e;
      try {
        this.i && this.i.g
          ? ((e = this.i.start(a.toString(), 3)), (d = b()), this.i.end(e))
          : (d = b());
      } catch (f) {
        b = this.A;
        try {
          el(e), (b = this.B(a, new Tk(f, { message: ol(f) }), void 0, c));
        } catch (g) {
          this.va(217, g);
        }
        if (b) window.console?.error?.(f);
        else throw f;
      }
      return d;
    }
    Ma(a, b, c, d) {
      return (...e) => this.ic(a, () => b.apply(c, e), d);
    }
    va(a, b, c, d, e) {
      e = e || "jserror";
      let f;
      try {
        const M = new nl();
        var g = M;
        g.g.push(1);
        g.i[1] = il("context", a);
        (b.error && b.meta && b.id) || (b = new Tk(b, { message: ol(b) }));
        if (b.msg) {
          g = M;
          var h = b.msg.substring(0, 512);
          g.g.push(2);
          g.i[2] = il("msg", h);
        }
        var k = b.meta || {};
        b = k;
        if (this.g)
          try {
            this.g(b);
          } catch (ea) {}
        if (d)
          try {
            d(b);
          } catch (ea) {}
        d = M;
        k = [k];
        d.g.push(3);
        d.i[3] = k;
        d = r;
        k = [];
        b = null;
        do {
          var l = d;
          if (Te(l)) {
            var m = l.location.href;
            b = (l.document && l.document.referrer) || null;
          } else (m = b), (b = null);
          k.push(new Wk(m || "", l));
          try {
            d = l.parent;
          } catch (ea) {
            d = null;
          }
        } while (d && l != d);
        for (let ea = 0, lb = k.length - 1; ea <= lb; ++ea)
          k[ea].depth = lb - ea;
        l = r;
        if (
          l.location &&
          l.location.ancestorOrigins &&
          l.location.ancestorOrigins.length == k.length - 1
        )
          for (m = 1; m < k.length; ++m) {
            var n = k[m];
            n.url ||
              ((n.url = l.location.ancestorOrigins[m - 1] || ""), (n.yg = !0));
          }
        var p = k;
        let Ba = new Wk(r.location.href, r, !1);
        l = null;
        const Ya = p.length - 1;
        for (n = Ya; 0 <= n; --n) {
          var q = p[n];
          !l && Uk.test(q.url) && (l = q);
          if (q.url && !q.yg) {
            Ba = q;
            break;
          }
        }
        q = null;
        const Ib = p.length && p[Ya].url;
        0 != Ba.depth && Ib && (q = p[Ya]);
        f = new Vk(Ba, q);
        if (f.i) {
          p = M;
          var v = f.i.url || "";
          p.g.push(4);
          p.i[4] = il("top", v);
        }
        var A = { url: f.g.url || "" };
        if (f.g.url) {
          var B = f.g.url.match(xe),
            E = B[1],
            J = B[3],
            G = B[4];
          v = "";
          E && (v += E + ":");
          J && ((v += "//"), (v += J), G && (v += ":" + G));
          var K = v;
        } else K = "";
        E = M;
        A = [A, { url: K }];
        E.g.push(5);
        E.i[5] = A;
        ql(this.wa, e, M, this.j, c);
      } catch (M) {
        try {
          ql(
            this.wa,
            e,
            { context: "ecmserr", rctx: a, msg: ol(M), url: f && f.g.url },
            this.j,
            c
          );
        } catch (Ba) {}
      }
      return this.A;
    }
    Da(a, b, c) {
      b.catch((d) => {
        d = d ? d : "unknown rejection";
        this.va(
          a,
          d instanceof Error ? d : Error(d),
          void 0,
          c || this.g || void 0
        );
      });
    }
  };
  var sl = (a) => "string" === typeof a,
    tl = (a) => void 0 === a;
  function ul() {
    var a = vl;
    return (b) => {
      for (const c in a) if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
      return !1;
    };
  }
  var wl = class extends R {
    constructor() {
      super();
    }
  };
  function xl(a, b) {
    try {
      const c = (d) => [{ [d.lh]: d.Fg }];
      return JSON.stringify([
        a.filter((d) => d.Ve).map(c),
        b.toJSON(),
        a.filter((d) => !d.Ve).map(c),
      ]);
    } catch (c) {
      return yl(c, b), "";
    }
  }
  function yl(a, b) {
    try {
      Qj(
        {
          m: ol(a instanceof Error ? a : Error(String(a))),
          b: zi(b, 1) || null,
          v: O(b, 2) || null,
        },
        "rcs_internal"
      );
    } catch (c) {}
  }
  var zl = class {
    constructor(a, b) {
      var c = new wl();
      a = Q(c, 1, a);
      this.j = Ji(a, 2, b).i();
    }
  };
  var Al = class extends R {
    getValue() {
      return zi(this, 1);
    }
  };
  function Bl(a) {
    var b = new Cl();
    return Wh(b, 1, Yg(a));
  }
  var Cl = class extends R {
    getValue() {
      return zi(this, 1);
    }
  };
  var Dl = class extends R {
    constructor() {
      super();
    }
    getValue() {
      return zi(this, 1);
    }
  };
  function El(a, b) {
    return P(a, 1, b);
  }
  function Fl(a, b) {
    return P(a, 2, b);
  }
  function Gl(a, b) {
    return P(a, 3, b);
  }
  function Hl(a, b) {
    return P(a, 4, b);
  }
  function Il(a, b) {
    return P(a, 5, b);
  }
  function Jl(a, b) {
    return ji(a, 8, Ug(b), 0);
  }
  function Kl(a, b) {
    return ji(a, 9, Ug(b), 0);
  }
  var Ll = class extends R {
    constructor() {
      super();
    }
  };
  function Ml(a, b) {
    return P(a, 1, b);
  }
  function Nl(a, b) {
    return P(a, 2, b);
  }
  var Ol = class extends R {};
  function Pl(a, b) {
    si(a, 1, Ol, b);
  }
  var hi = class extends R {
    ih(a) {
      si(this, 1, Ol, void 0, a, !1, 1);
      return this;
    }
  };
  hi.O = [1];
  var Ql = class extends R {
    constructor() {
      super();
    }
  };
  function Rl(a, b) {
    return ii(a, 1, b, mh);
  }
  function Sl(a, b) {
    return ii(a, 12, b, kh);
  }
  function Tl() {
    var a = new Ul(),
      b = a.V,
      c = "irr",
      d = b[C];
    Mg(d);
    var e = d & 2;
    let f = Vh(b, d, 2);
    Array.isArray(f) || (f = Kg);
    const g = !!(d & 32);
    let h = f[C] | 0;
    0 === h && g && !e ? ((h |= 33), xg(f, h)) : h & 1 || ((h |= 1), xg(f, h));
    if (e) h & 2 || yg(f), Object.freeze(f);
    else if (2 & h || 2048 & h)
      (f = tg(f)), (e = 1), g && (e |= 32), xg(f, e), Xh(b, d, 2, f);
    b = f;
    d = b[C] | 0;
    c = mh(c, !!(4 & d) && !!(4096 & d));
    b.push(c);
    return a;
  }
  function Vl(a, b) {
    return Ei(a, 3, b);
  }
  function Wl(a, b) {
    return Ei(a, 4, b);
  }
  function Xl(a, b) {
    return Ei(a, 5, b);
  }
  function Yl(a, b) {
    return Ei(a, 7, b);
  }
  function Zl(a, b) {
    return Ei(a, 8, b);
  }
  function $l(a, b) {
    return P(a, 9, b);
  }
  function am(a, b) {
    return ri(a, 10, b);
  }
  function bm(a, b) {
    return ii(a, 11, b, dh);
  }
  var Ul = class extends R {
    constructor() {
      super();
    }
  };
  Ul.O = [1, 12, 2, 10, 11];
  function cm(a) {
    var b = dm();
    H(a, 1, b);
  }
  function em(a, b) {
    return P(a, 2, b);
  }
  function fm(a, b) {
    return ri(a, 3, b);
  }
  function gm(a, b) {
    return ri(a, 4, b);
  }
  function hm(a, b) {
    si(a, 4, Cl, b);
    return a;
  }
  function im(a, b) {
    return ri(a, 5, b);
  }
  function jm(a, b) {
    return ii(a, 6, b, mh);
  }
  function km(a, b) {
    return P(a, 7, b);
  }
  function lm(a, b) {
    H(a, 9, b);
  }
  function mm(a, b) {
    return Ei(a, 10, b);
  }
  function nm(a, b) {
    return Ei(a, 11, b);
  }
  function om(a, b) {
    return Ei(a, 12, b);
  }
  function pm(a) {
    var b = a.V;
    const c = b[C];
    a = c & 2;
    b = gi(b, c, Vh(b, c, 14));
    null == b ? (a = b) : (!a && hi && (b.Uh = !0), (a = b));
    return a;
  }
  var qm = class extends R {
    constructor() {
      super();
    }
    H(a) {
      si(this, 3, Al, void 0, a, !1, 1);
      return this;
    }
    G(a) {
      return P(this, 8, a);
    }
  };
  qm.O = [3, 4, 5, 15, 6];
  var rm = class extends R {
    constructor() {
      super();
    }
  };
  rm.O = [2];
  var sm = class extends R {};
  var tm = class extends R {
    constructor() {
      super();
    }
  };
  var um = class extends R {
      constructor() {
        super();
      }
    },
    vm = [1];
  function wm(a) {
    var b = new xm();
    return Q(b, 1, a);
  }
  var xm = class extends R {
    constructor() {
      super();
    }
  };
  var ym = class extends R {
    constructor() {
      super();
    }
  };
  var zm = class extends R {
    constructor() {
      super();
    }
  };
  var Am = class extends R {
    constructor() {
      super();
    }
  };
  var Bm = class extends R {
    constructor() {
      super();
    }
  };
  var Cm = class extends R {
    constructor() {
      super();
    }
    getContentUrl() {
      return O(this, 1);
    }
  };
  var Dm = class extends R {
    constructor() {
      super();
    }
  };
  Dm.O = [1];
  var Em = class extends R {
    constructor() {
      super();
    }
  };
  function Fm() {
    var a = new Gm(),
      b = new Em();
    return qi(a, 1, Hm, b);
  }
  var Gm = class extends R {
      constructor() {
        super();
      }
    },
    Hm = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  var Im = class extends R {
    constructor() {
      super();
    }
  };
  Im.O = [1];
  var Jm = class extends R {
    constructor() {
      super();
    }
  };
  Jm.O = [2];
  var Km = class extends R {
    constructor() {
      super();
    }
  };
  var Lm = class extends R {
    constructor() {
      super();
    }
  };
  function Mm(a) {
    var b = new Nm();
    return Q(b, 1, a);
  }
  var Nm = class extends R {
    constructor() {
      super();
    }
  };
  Nm.O = [9];
  var Om = class extends R {
    constructor() {
      super();
    }
  };
  var qn = class extends R {
    constructor() {
      super();
    }
  };
  qn.O = [2];
  var rn = class extends R {
    constructor() {
      super();
    }
  };
  var sn = class extends R {
      constructor() {
        super();
      }
    },
    tn = [4, 5];
  var un = class extends R {
    constructor() {
      super();
    }
  };
  function vn(a) {
    var b = new wn();
    return Gi(b, 2, a);
  }
  var wn = class extends R {
    constructor() {
      super();
    }
  };
  wn.O = [3];
  var xn = class extends R {
    constructor() {
      super();
    }
  };
  var yn = class extends R {
    constructor() {
      super();
    }
  };
  var zn = class extends R {
    constructor() {
      super();
    }
  };
  var An = class extends R {
    constructor() {
      super();
    }
  };
  var Bn = class extends R {
      constructor() {
        super();
      }
    },
    Cn = [2, 3];
  var Dn = class extends R {
      constructor() {
        super();
      }
    },
    En = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14];
  var Fn = class extends R {
      constructor() {
        super();
      }
      kc(a) {
        return Ji(this, 2, a);
      }
    },
    Gn = [4, 5, 6, 8, 9, 10, 11, 12];
  var Hn = class extends R {
    constructor() {
      super();
    }
  };
  var In = class extends R {
    constructor() {
      super();
    }
  };
  In.O = [4, 5];
  var Jn = class extends R {
    constructor() {
      super();
    }
    getTagSessionCorrelator() {
      return xi(this, 1);
    }
  };
  Jn.O = [2];
  var Kn = class extends R {
      constructor() {
        super();
      }
    },
    Ln = [4, 6];
  class Mn extends zl {
    constructor() {
      super(...arguments);
    }
  }
  function Nn(a, ...b) {
    On(a, ...b.map((c) => ({ Ve: !0, lh: 3, Fg: c.toJSON() })));
  }
  function Pn(a, ...b) {
    On(a, ...b.map((c) => ({ Ve: !0, lh: 7, Fg: c.toJSON() })));
  }
  var Qn = class extends Mn {};
  var Rn = (a, b) => {
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
  function On(a, ...b) {
    try {
      a.C && 65536 <= xl(a.g.concat(b), a.j).length && Sn(a),
        a.l &&
          !a.A &&
          ((a.A = !0),
          Tn(a.l, () => {
            Sn(a);
          })),
        a.g.push(...b),
        a.g.length >= a.B && Sn(a),
        a.g.length &&
          null === a.i &&
          (a.i = setTimeout(() => {
            Sn(a);
          }, a.F));
    } catch (c) {
      yl(c, a.j);
    }
  }
  function Sn(a) {
    null !== a.i && (clearTimeout(a.i), (a.i = null));
    if (a.g.length) {
      var b = xl(a.g, a.j);
      a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.g = [];
    }
  }
  var Un = class extends Qn {
      constructor(a, b, c, d, e) {
        super(2, a);
        this.G = Rn;
        this.F = b;
        this.B = c;
        this.C = d;
        this.l = e;
        this.g = [];
        this.i = null;
        this.A = !1;
      }
    },
    Vn = class extends Un {
      constructor(a, b = 1e3, c = 100, d = !1, e) {
        super(a, b, c, d && !0, e);
      }
    };
  function Wn(a, b, c) {
    return b[a] || c;
  }
  function Xn(a, b) {
    a.i = (c, d) => Wn(2, b, () => [])(c, 1, d);
    a.g = () => Wn(3, b, () => [])(1);
  }
  class Yn {
    i() {
      return [];
    }
    g() {
      return [];
    }
  }
  function Zn(a, b) {
    return w(Yn).i(a, b);
  }
  function ql(a, b, c, d = !1, e) {
    if ((d ? a.g : Math.random()) < (e || 0.01))
      try {
        let f;
        c instanceof nl
          ? (f = c)
          : ((f = new nl()),
            af(c, (h, k) => {
              var l = f;
              const m = l.l++;
              h = il(k, h);
              l.g.push(m);
              l.i[m] = h;
            }));
        const g = ml(f, "/pagead/gen_204?id=" + b + "&");
        g && Nj(r, g);
      } catch (f) {}
  }
  function $n(a, b) {
    0 <= b && 1 >= b && (a.g = b);
  }
  class ao {
    constructor() {
      this.g = Math.random();
    }
  }
  let bo, co;
  const eo = new hl(window);
  ((a) => {
    bo = a ?? new ao();
    "number" !== typeof window.google_srt &&
      (window.google_srt = Math.random());
    $n(bo, window.google_srt);
    co = new rl(bo, !0, eo);
    co.nf(() => {});
    co.l(!0);
    "complete" == window.document.readyState
      ? window.google_measure_js_timing || fl(eo)
      : eo.g &&
        Rb(window, "load", () => {
          window.google_measure_js_timing || fl(eo);
        });
  })();
  let fo = new Date().getTime();
  var go = {
    em: 0,
    dm: 1,
    am: 2,
    Vl: 3,
    bm: 4,
    Wl: 5,
    cm: 6,
    Yl: 7,
    Zl: 8,
    Ul: 9,
    Xl: 10,
    fm: 11,
  };
  var ho = { hm: 0, im: 1, gm: 2 };
  function io(a, b) {
    return (
      a.left < b.right &&
      b.left < a.right &&
      a.top < b.bottom &&
      b.top < a.bottom
    );
  }
  function jo(a) {
    a = Xa(a, (b) => new gk(b.top, b.right, b.bottom, b.left));
    a = ko(a);
    return { top: a.top, right: a.right, bottom: a.bottom, left: a.left };
  }
  function ko(a) {
    if (!a.length) throw Error("pso:box:m:nb");
    return Za(
      a.slice(1),
      (b, c) => {
        b.left = Math.min(b.left, c.left);
        b.top = Math.min(b.top, c.top);
        b.right = Math.max(b.right, c.right);
        b.bottom = Math.max(b.bottom, c.bottom);
        return b;
      },
      hk(a[0])
    );
  }
  var Sc = {
    Xm: 0,
    Jl: 1,
    Ml: 2,
    Kl: 3,
    Ll: 4,
    Sl: 8,
    hn: 9,
    um: 10,
    vm: 11,
    en: 16,
    wl: 17,
    vl: 24,
    rm: 25,
    Kk: 26,
    Jk: 27,
    yh: 30,
    lm: 32,
    om: 40,
    on: 41,
    kn: 42,
  };
  var lo = {
      overlays: 1,
      interstitials: 2,
      vignettes: 2,
      inserts: 3,
      immersives: 4,
      list_view: 5,
      full_page: 6,
      side_rails: 7,
    },
    mo = { [1]: 1, [2]: 1, [3]: 7, [4]: 7, [8]: 2, [27]: 3, [9]: 4, [30]: 5 };
  var no = 728 * 1.38;
  function oo(a) {
    return a !== a.top ? 512 : 0;
  }
  function po(a, b = 420, c = !1) {
    return (a = qo(a, c)) ? (a > b ? 32768 : 320 > a ? 65536 : 0) : 16384;
  }
  function ro(a) {
    var b = qo(a);
    a = a.innerWidth;
    return (b = b && a ? b / a : 0)
      ? 1.05 < b
        ? 262144
        : 0.95 > b
        ? 524288
        : 0
      : 131072;
  }
  function so(a) {
    return Math.max(0, to(a, !0) - S(a));
  }
  function uo(a) {
    a = a.document;
    let b = {};
    a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return b || {};
  }
  function S(a) {
    return uo(a).clientHeight;
  }
  function qo(a, b = !1) {
    const c = uo(a).clientWidth;
    return b ? c * Ef(a) : c;
  }
  function to(a, b) {
    const c = uo(a);
    return b
      ? ((a = S(a)), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight)
      : c.offsetHeight;
  }
  function vo(a, b) {
    return wo(b) || 10 === b || !a.adCount
      ? !1
      : 1 == b || 2 == b
      ? !(!a.adCount[1] && !a.adCount[2])
      : (a = a.adCount[b])
      ? 1 <= a
      : !1;
  }
  function xo(a, b) {
    return a && a.source ? a.source === b || a.source.parent === b : !1;
  }
  function yo(a) {
    return void 0 === a.pageYOffset
      ? (
          a.document.documentElement ||
          a.document.body.parentNode ||
          a.document.body
        ).scrollTop
      : a.pageYOffset;
  }
  function zo(a) {
    return void 0 === a.pageXOffset
      ? (
          a.document.documentElement ||
          a.document.body.parentNode ||
          a.document.body
        ).scrollLeft
      : a.pageXOffset;
  }
  function Ao(a) {
    const b = {};
    let c;
    Array.isArray(a) ? (c = a) : a && a.key_value && (c = a.key_value);
    if (c)
      for (a = 0; a < c.length; a++) {
        const d = c[a];
        if ("key" in d && "value" in d) {
          const e = d.value;
          b[d.key] = null == e ? null : String(e);
        }
      }
    return b;
  }
  function Bo(a, b, c, d) {
    ql(
      c,
      b,
      { c: d.data.substring(0, 500), u: a.location.href.substring(0, 500) },
      !0,
      0.1
    );
    return !0;
  }
  function wo(a) {
    return 26 === a || 27 === a || 40 === a || 41 === a;
  }
  function Co(a, b) {
    Do(a).forEach(b, void 0);
  }
  function Do(a) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b;
  }
  function Eo(a, b) {
    return void 0 !== a.g[Fo(b)];
  }
  function Go(a) {
    const b = [];
    for (const c in a.g)
      void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.i[c]);
    return b;
  }
  function Ho(a) {
    const b = [];
    for (const c in a.g)
      void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.g[c]);
    return b;
  }
  const Io = class {
    constructor() {
      this.g = {};
      this.i = {};
    }
    set(a, b) {
      const c = Fo(a);
      this.g[c] = b;
      this.i[c] = a;
    }
    get(a, b) {
      a = Fo(a);
      return void 0 !== this.g[a] ? this.g[a] : b;
    }
    Ec() {
      return Go(this).length;
    }
    clear() {
      this.g = {};
      this.i = {};
    }
  };
  function Fo(a) {
    return a instanceof Object ? String(Aa(a)) : a + "";
  }
  const Jo = class {
    constructor(a) {
      this.g = new Io();
      if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.g.set(a, !0);
    }
    contains(a) {
      return Eo(this.g, a);
    }
  };
  const Ko = new Jo(
    "IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(
      " "
    )
  );
  function Lo(a, { hb: b, bb: c, Fb: d }) {
    return d && c(b)
      ? b
      : (b = b.parentElement)
      ? Mo(a, { hb: b, bb: c, Fb: !0 })
      : null;
  }
  function Mo(a, { hb: b, bb: c, Fb: d = !1 }) {
    const e = No({ hb: b, bb: c, Fb: d }),
      f = a.g.get(e);
    if (f) return f.element;
    b = Lo(a, { hb: b, bb: c, Fb: d });
    a.g.set(e, { element: b });
    return b;
  }
  var Oo = class {
    constructor() {
      this.g = new Map();
    }
  };
  function No({ hb: a, bb: b, Fb: c }) {
    a = Aa(a);
    b = Aa(b);
    return `${a}:${b}:${c}`;
  }
  function Po(a) {
    Tb(a.document.body.offsetHeight);
  }
  function Qo(a) {
    a && "function" == typeof a.ka && a.ka();
  }
  function T() {
    this.B = this.B;
    this.G = this.G;
  }
  T.prototype.B = !1;
  T.prototype.ka = function () {
    this.B || ((this.B = !0), this.i());
  };
  function Ro(a, b) {
    So(a, Ia(Qo, b));
  }
  function So(a, b) {
    a.B ? b() : (a.G || (a.G = []), a.G.push(b));
  }
  T.prototype.i = function () {
    if (this.G) for (; this.G.length; ) this.G.shift()();
  };
  function To(a) {
    a.g.forEach((b, c) => {
      if (b.overrides.delete(a)) {
        b = Array.from(b.overrides.values()).pop() || b.originalValue;
        var d = a.element;
        b
          ? d.style.setProperty(c, b.value, b.priority)
          : d.style.removeProperty(c);
      }
    });
  }
  function Uo(a, b, c) {
    c = { value: c, priority: "important" };
    var d = a.g.get(b);
    if (!d) {
      d = a.element;
      var e = d.style.getPropertyValue(b);
      d = {
        originalValue: e
          ? { value: e, priority: d.style.getPropertyPriority(b) }
          : null,
        overrides: new Map(),
      };
      a.g.set(b, d);
    }
    d.overrides.delete(a);
    d.overrides.set(a, c);
    a = a.element;
    c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b);
  }
  var Vo = class extends T {
    constructor(a, b) {
      super();
      this.element = b;
      a = a.googTempStyleOverrideInfo =
        a.googTempStyleOverrideInfo || new Map();
      var c = a.get(b);
      c ? (b = c) : ((c = new Map()), a.set(b, c), (b = c));
      this.g = b;
    }
    i() {
      To(this);
      super.i();
    }
  };
  function Wo(a) {
    const b = new U(a.getValue());
    a.listen((c) => b.g(c));
    return b;
  }
  function Xo(a, b) {
    const c = new U({ first: a.P, second: b.P });
    a.listen(() => c.g({ first: a.P, second: b.P }));
    b.listen(() => c.g({ first: a.P, second: b.P }));
    return c;
  }
  function Yo(...a) {
    const b = [...a],
      c = () => b.every((f) => f.P),
      d = new U(c()),
      e = () => {
        d.g(c());
      };
    b.forEach((f) => f.listen(e));
    return Zo(d);
  }
  function $o(...a) {
    const b = [...a],
      c = () => -1 !== b.findIndex((f) => f.P),
      d = new U(c()),
      e = () => {
        d.g(c());
      };
    b.forEach((f) => f.listen(e));
    return Zo(d);
  }
  function Zo(a, b = ap) {
    var c = a.P;
    const d = new U(a.P);
    a.listen((e) => {
      b(e, c) || ((c = e), d.g(e));
    });
    return d;
  }
  function bp(a, b, c) {
    return a.i((d) => {
      d === b && c();
    });
  }
  function cp(a, b, c) {
    if (a.P === b) c();
    else {
      var d = { gd: null };
      d.gd = bp(a, b, () => {
        d.gd && (d.gd(), (d.gd = null));
        c();
      });
    }
  }
  function dp(a, b, c) {
    Zo(a).listen((d) => {
      d === b && c();
    });
  }
  function ep(a, b) {
    a.l && a.l();
    a.l = b.listen((c) => a.g(c), !0);
  }
  function fp(a, b, c, d) {
    const e = new U(!1);
    var f = null;
    a = a.map(d);
    bp(a, !0, () => {
      null === f &&
        (f = b.setTimeout(() => {
          e.g(!0);
        }, c));
    });
    bp(a, !1, () => {
      e.g(!1);
      null !== f && (b.clearTimeout(f), (f = null));
    });
    return Zo(e);
  }
  function gp(a) {
    return { listen: (b) => a.listen(b), getValue: () => a.P };
  }
  class U {
    constructor(a) {
      this.P = a;
      this.j = new Map();
      this.B = 1;
      this.l = null;
    }
    listen(a, b = !1) {
      const c = this.B++;
      this.j.set(c, a);
      b && a(this.P);
      return () => {
        this.j.delete(c);
      };
    }
    i(a) {
      return this.listen(a, !0);
    }
    A() {
      return this.P;
    }
    g(a) {
      this.P = a;
      this.j.forEach((b) => {
        b(this.P);
      });
    }
    map(a) {
      const b = new U(a(this.P));
      this.listen((c) => b.g(a(c)));
      return b;
    }
  }
  function ap(a, b) {
    return a == b;
  }
  function hp(a) {
    return new ip(a);
  }
  function jp(a, b) {
    Ua(a.g, (c) => {
      c(b);
    });
  }
  var kp = class {
    constructor() {
      this.g = [];
    }
  };
  class ip {
    constructor(a) {
      this.g = a;
    }
    listen(a) {
      this.g.g.push(a);
    }
    map(a) {
      const b = new kp();
      this.listen((c) => jp(b, a(c)));
      return hp(b);
    }
    delay(a, b) {
      const c = new kp();
      this.listen((d) => {
        a.setTimeout(() => {
          jp(c, d);
        }, b);
      });
      return hp(c);
    }
  }
  function lp(...a) {
    const b = new kp();
    a.forEach((c) => {
      c.listen((d) => {
        jp(b, d);
      });
    });
    return hp(b);
  }
  function mp(a) {
    return Zo(
      Xo(a.g, a.j).map((b) => {
        var c = b.first;
        b = b.second;
        return null == c || null == b ? null : np(c, b);
      })
    );
  }
  var pp = class {
    constructor(a) {
      this.i = a;
      this.g = new U(null);
      this.j = new U(null);
      this.l = new kp();
      this.C = (b) => {
        null == this.g.P && 1 == b.touches.length && this.g.g(b.touches[0]);
      };
      this.A = (b) => {
        const c = this.g.P;
        null != c &&
          ((b = op(c, b.changedTouches)),
          null != b && (this.g.g(null), this.j.g(null), jp(this.l, np(c, b))));
      };
      this.B = (b) => {
        var c = this.g.P;
        null != c &&
          ((c = op(c, b.changedTouches)),
          null != c && (this.j.g(c), b.preventDefault()));
      };
    }
  };
  function np(a, b) {
    return { uh: b.pageX - a.pageX, wh: b.pageY - a.pageY };
  }
  function op(a, b) {
    if (null == b) return null;
    for (let c = 0; c < b.length; ++c)
      if (b[c].identifier == a.identifier) return b[c];
    return null;
  }
  function qp(a) {
    return Zo(
      Xo(a.g, a.i).map((b) => {
        var c = b.first;
        b = b.second;
        return null == c || null == b ? null : rp(c, b);
      })
    );
  }
  var sp = class {
    constructor(a, b) {
      this.l = a;
      this.A = b;
      this.g = new U(null);
      this.i = new U(null);
      this.j = new kp();
      this.G = (c) => {
        this.g.g(c);
      };
      this.B = (c) => {
        const d = this.g.P;
        null != d && (this.g.g(null), this.i.g(null), jp(this.j, rp(d, c)));
      };
      this.C = (c) => {
        null != this.g.P && (this.i.g(c), c.preventDefault());
      };
    }
  };
  function rp(a, b) {
    return { uh: b.screenX - a.screenX, wh: b.screenY - a.screenY };
  }
  var vp = (a, b, c) => {
    const d = new tp(a, b, c);
    return () => up(d);
  };
  function up(a) {
    if (a.g) return !1;
    if (null == a.i) return wp(a), !0;
    const b = a.i + a.A - new Date().getTime();
    if (1 > b) return wp(a), !0;
    xp(a, b);
    return !0;
  }
  function wp(a) {
    a.i = new Date().getTime();
    a.l();
  }
  function xp(a, b) {
    a.g = !0;
    a.j.setTimeout(() => {
      a.g = !1;
      wp(a);
    }, b);
  }
  class tp {
    constructor(a, b, c) {
      this.j = a;
      this.A = b;
      this.l = c;
      this.i = null;
      this.g = !1;
    }
  }
  function yp(a) {
    return zp(qp(a.g), mp(a.i));
  }
  function Ap(a) {
    return lp(hp(a.g.j), hp(a.i.l));
  }
  var Bp = class {
    constructor(a, b) {
      this.g = a;
      this.i = b;
    }
  };
  function zp(a, b) {
    return Xo(a, b).map(({ first: c, second: d }) => c || d || null);
  }
  var Cp = class {
    constructor() {
      this.cache = new Map();
    }
    getBoundingClientRect(a) {
      var b = this.cache.get(a);
      if (b) return b;
      b = a.getBoundingClientRect();
      this.cache.set(a, b);
      return b;
    }
  };
  function Dp(a) {
    null == a.A && (a.A = new U(a.C.getBoundingClientRect()));
    return a.A;
  }
  class Ep extends T {
    constructor(a, b) {
      super();
      this.j = a;
      this.C = b;
      this.F = !1;
      this.A = null;
      this.l = () => {
        Dp(this).g(this.C.getBoundingClientRect());
      };
    }
    g() {
      this.F ||
        ((this.F = !0),
        this.j.addEventListener("resize", this.l),
        this.j.addEventListener("scroll", this.l));
      return Dp(this);
    }
    i() {
      this.j.removeEventListener("resize", this.l);
      this.j.removeEventListener("scroll", this.l);
      super.i();
    }
  }
  function Fp(a, b) {
    return new Gp(a, b);
  }
  function Hp(a) {
    a.win.requestAnimationFrame(() => {
      a.B || a.j.g(new $d(a.element.offsetWidth, a.element.offsetHeight));
    });
  }
  function Ip(a) {
    a.g || ((a.g = !0), a.l.observe(a.element));
    return Zo(a.j, ae);
  }
  var Gp = class extends T {
    constructor(a, b) {
      super();
      this.win = a;
      this.element = b;
      this.g = !1;
      this.j = new U(
        new $d(this.element.offsetWidth, this.element.offsetHeight)
      );
      this.l = new ResizeObserver(() => {
        Hp(this);
      });
    }
    i() {
      this.l.disconnect();
      super.i();
    }
  };
  function Jp(a, b) {
    return { top: a.g - b, right: a.j + a.i, bottom: a.g + b, left: a.j };
  }
  class Kp {
    constructor(a, b, c) {
      this.j = a;
      this.g = b;
      this.i = c;
    }
    Fc() {
      return this.i;
    }
  }
  function Lp(a, b) {
    a = a.getBoundingClientRect();
    return new Mp(a.top + yo(b), a.bottom - a.top);
  }
  function Np(a) {
    return new Mp(Math.round(a.g), Math.round(a.i));
  }
  class Mp {
    constructor(a, b) {
      this.g = a;
      this.i = b;
    }
    getHeight() {
      return this.i;
    }
  }
  var Pp = (a, b) => {
    const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
      d = new Jo(c);
    b = b.filter((e) => !d.contains(e));
    b.length && (Op(a, b), gb(c, b));
  };
  function Op(a, b) {
    for (const f of b) {
      b = Ye("LINK", a.document);
      b.type = "text/css";
      var c = qj`//fonts.googleapis.com/css`,
        d = uk(),
        e = b;
      c = ad(c, { family: f });
      if (c instanceof $c) d = c;
      else
        a: {
          if (c instanceof jd) {
            d = c;
            break a;
          }
          const g = De(c, Ce) || Rd;
          g === Rd && d(c);
          d = g;
        }
      e.rel = "stylesheet";
      if (kc("stylesheet", "stylesheet")) {
        e.href = cd(d).toString();
        a: if (
          ((d = ((e.ownerDocument && e.ownerDocument.defaultView) || r)
            .document),
          d.querySelector)
        ) {
          if (
            (d = d.querySelector(
              'style[nonce],link[rel="stylesheet"][nonce]'
            )) &&
            (d = d.nonce || d.getAttribute("nonce")) &&
            Vd.test(d)
          )
            break a;
          d = "";
        } else d = "";
        d && e.setAttribute("nonce", d);
      } else {
        if (d instanceof $c) d = cd(d).toString();
        else if (d instanceof jd) d = kd(d);
        else {
          if (!(d instanceof jd)) {
            d = String(d);
            b: {
              c = void 0;
              try {
                c = new URL(d);
              } catch (g) {
                c = "https:";
                break b;
              }
              c = c.protocol;
            }
            "javascript:" === c && (d = "about:invalid#zClosurez");
            d = pd(d);
          }
          d = kd(d);
        }
        e.href = d;
      }
      a.document.head.appendChild(b);
    }
  }
  function Qp(a, b) {
    a.F ? b(a.l) : a.j.push(b);
  }
  function Rp(a, b) {
    a.F = !0;
    a.l = b;
    a.j.forEach((c) => {
      c(a.l);
    });
    a.j = [];
  }
  class Sp extends T {
    constructor(a) {
      super();
      this.g = a;
      this.j = [];
      this.F = !1;
      this.C = this.l = null;
      this.H = vp(a, 1e3, () => {
        if (null != this.C) {
          var b = to(this.g, !0) - this.C;
          1e3 < b && Rp(this, b);
        }
      });
      this.A = null;
    }
    K(a, b) {
      null == a
        ? ((this.C = a = to(this.g, !0)),
          this.g.addEventListener("scroll", this.H),
          null != b && b(a))
        : (this.A = this.g.setTimeout(() => {
            this.K(void 0, b);
          }, a));
    }
    i() {
      null != this.A && this.g.clearTimeout(this.A);
      this.g.removeEventListener("scroll", this.H);
      this.j = [];
      this.l = null;
      super.i();
    }
  }
  var Tp = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
  class Up {
    constructor(a = 1) {
      this.g = a;
    }
    next() {
      var a = (48271 * this.g) % 2147483647;
      this.g = 0 > 2147483647 * a ? a + 2147483647 : a;
      return this.g / 2147483647;
    }
  }
  function Vp(a, b, c) {
    const d = [];
    for (const e of a.g) b(e) ? d.push(e) : c(e);
    return new Wp(d);
  }
  function Xp(a) {
    return a.g.slice(0);
  }
  function Yp(a, b = 1) {
    a = Xp(a);
    const c = new Up(b);
    sb(a, () => c.next());
    return new Wp(a);
  }
  const Wp = class {
    constructor(a) {
      this.g = a.slice(0);
    }
    forEach(a) {
      this.g.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new Wp(Wa(this.g, a));
    }
    apply(a) {
      return new Wp(a(Xp(this)));
    }
    sort(a) {
      return new Wp(Xp(this).sort(a));
    }
    get(a) {
      return this.g[a];
    }
    add(a) {
      const b = Xp(this);
      b.push(a);
      return new Wp(b);
    }
  };
  class Zp {
    constructor(a) {
      this.g = new Jo(a);
    }
    contains(a) {
      return this.g.contains(a);
    }
  }
  function $p(a) {
    return new aq({ value: a }, null);
  }
  function bq(a) {
    return new aq(null, a);
  }
  function cq(a) {
    try {
      return $p(a());
    } catch (b) {
      return bq(b);
    }
  }
  function dq(a) {
    return null != a.g ? a.getValue() : null;
  }
  function eq(a, b) {
    null != a.g && b(a.getValue());
    return a;
  }
  function fq(a, b) {
    null != a.g || b(a.i);
    return a;
  }
  class aq {
    constructor(a, b) {
      this.g = a;
      this.i = b;
    }
    getValue() {
      return this.g.value;
    }
    map(a) {
      return null != this.g
        ? ((a = a(this.getValue())), a instanceof aq ? a : $p(a))
        : this;
    }
  }
  class gq {
    constructor() {
      this.g = new Io();
    }
    set(a, b) {
      let c = this.g.get(a);
      c || ((c = new Jo()), this.g.set(a, c));
      c.add(b);
    }
  }
  function hq(a) {
    return !a;
  }
  function iq(a) {
    return (b) => {
      for (const c of a) c(b);
    };
  }
  function jq(a) {
    return null !== a;
  }
  var kq = class extends R {
    getId() {
      return I(this, 3);
    }
  };
  kq.O = [4];
  class lq {
    constructor(a, { Of: b, Ah: c, Mi: d, bh: e }) {
      this.A = a;
      this.j = c;
      this.l = new Wp(b || []);
      this.i = e;
      this.g = d;
    }
  }
  var mq = (a) => {
      var b = a.split("~").filter((c) => 0 < c.length);
      a = new Io();
      for (const c of b)
        (b = c.indexOf(".")),
          -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
      return a;
    },
    oq = (a) => {
      var b = nq(a);
      a = [];
      for (let c of b)
        (b = String(c.vc)),
          a.push(c.zb + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
      return a.join("~");
    };
  const nq = (a) => {
      const b = [],
        c = a.l;
      c && c.g.length && b.push({ zb: "a", vc: pq(c) });
      null != a.j && b.push({ zb: "as", vc: a.j });
      null != a.g && b.push({ zb: "i", vc: String(a.g) });
      null != a.i && b.push({ zb: "rp", vc: String(a.i) });
      b.sort(function (d, e) {
        return d.zb.localeCompare(e.zb);
      });
      b.unshift({ zb: "t", vc: qq(a.A) });
      return b;
    },
    qq = (a) => {
      switch (a) {
        case 0:
          return "aa";
        case 1:
          return "ma";
        default:
          throw Error("Invalid slot type" + a);
      }
    },
    pq = (a) => {
      a = Xp(a).map(rq);
      a = JSON.stringify(a);
      return cf(a);
    },
    rq = (a) => {
      const b = {};
      null != I(a, 7) && (b.q = I(a, 7));
      null != ti(a, 2) && (b.o = ti(a, 2));
      null != ti(a, 5) && (b.p = ti(a, 5));
      return b;
    };
  function sq() {
    var a = new tq();
    return Wh(a, 2, Yg(1));
  }
  var tq = class extends R {
    g() {
      return L(this, 1);
    }
    setLocation(a) {
      return Wh(this, 1, Yg(a));
    }
  };
  function uq(a) {
    const b = [].slice.call(arguments).filter(Gb((e) => null === e));
    if (!b.length) return null;
    let c = [],
      d = {};
    b.forEach((e) => {
      c = c.concat(e.Wf || []);
      d = Object.assign(d, e.Gc());
    });
    return new vq(c, d);
  }
  function wq(a) {
    switch (a) {
      case 1:
        return new vq(null, { google_ad_semantic_area: "mc" });
      case 2:
        return new vq(null, { google_ad_semantic_area: "h" });
      case 3:
        return new vq(null, { google_ad_semantic_area: "f" });
      case 4:
        return new vq(null, { google_ad_semantic_area: "s" });
      default:
        return null;
    }
  }
  function xq(a) {
    return null == a ? null : new vq(null, { google_ml_rank: a });
  }
  function yq(a) {
    return null == a ? null : new vq(null, { google_placement_id: oq(a) });
  }
  function zq({ fi: a, ui: b = null }) {
    if (null == a) return null;
    a = { google_daaos_ts: a };
    null != b && (a.google_erank = b + 1);
    return new vq(null, a);
  }
  class vq {
    constructor(a, b) {
      this.Wf = a;
      this.g = b;
    }
    Gc() {
      return this.g;
    }
  }
  var Aq = class extends R {};
  var Bq = class extends R {};
  var Cq = class extends R {};
  var Dq = class extends R {};
  var Eq = class extends R {
    A() {
      return I(this, 2);
    }
    l() {
      return I(this, 5);
    }
    g() {
      return F(this, Dq, 3);
    }
    Nb() {
      return ti(this, 4);
    }
    j() {
      return $h(this, 6);
    }
    B() {
      return Yh(this, Cq, 7);
    }
  };
  Eq.O = [3];
  var Fq = class extends R {};
  var Gq = class extends R {};
  var Hq = class extends R {
    constructor() {
      super();
    }
  };
  var Iq = class extends R {
    g() {
      return L(this, 3);
    }
    Nb() {
      return ui(this, 4);
    }
    j() {
      return ai(this, 6);
    }
  };
  var Jq = class extends R {};
  var Kq = class extends R {};
  var Lq = class extends R {
    ia() {
      return D(this, kq, 1);
    }
    g() {
      return L(this, 2);
    }
  };
  var Mq = class extends R {};
  var Nq = class extends R {};
  var Oq = class extends R {
      getName() {
        return I(this, 4);
      }
    },
    Pq = [1, 2, 3];
  var Qq = class extends R {
    g() {
      return D(this, Iq, 10);
    }
  };
  Qq.O = [2, 5, 6, 11];
  var Rq = class extends R {
    g() {
      return ai(this, 2);
    }
    j() {
      return ai(this, 3);
    }
  };
  var Sq = class extends R {
    g() {
      return ui(this, 1);
    }
  };
  var Tq = class extends R {};
  var Uq = class extends R {
    g() {
      return zi(this, 1);
    }
    j() {
      return O(this, 3);
    }
    l() {
      return O(this, 4);
    }
  };
  var Vq = class extends R {
    g() {
      return xi(this, 1);
    }
  };
  var Wq = class extends R {
    g() {
      return O(this, 1);
    }
    j() {
      return O(this, 2);
    }
    A() {
      return O(this, 3);
    }
    l() {
      return O(this, 4);
    }
  };
  var Xq = class extends R {
    j() {
      return D(this, Uq, 8);
    }
    l() {
      return D(this, Uq, 9);
    }
    B() {
      return D(this, Wq, 4);
    }
    g() {
      return D(this, Vq, 5);
    }
    A() {
      return O(this, 10);
    }
    C() {
      return N(this, 12);
    }
    G() {
      return N(this, 14);
    }
  };
  var Yq = class extends R {
    l() {
      return N(this, 1);
    }
    A() {
      return N(this, 3);
    }
    g() {
      return N(this, 4);
    }
    j() {
      return N(this, 5);
    }
  };
  var Zq = class extends R {
    j() {
      return D(this, Wq, 5);
    }
    g() {
      return D(this, Vq, 6);
    }
    A() {
      return O(this, 8);
    }
    B() {
      return N(this, 9);
    }
    C() {
      return N(this, 11);
    }
    l() {
      return D(this, Yq, 12);
    }
  };
  function $q() {
    var a = new ar();
    a = Ii(a, 1, "Toggle toolbar expansion");
    a = Ii(a, 2, "Toggle privacy and legal settings display");
    return Ii(a, 3, "Dismiss privacy and legal settings display");
  }
  var ar = class extends R {};
  var br = class extends R {
    g() {
      return D(this, ar, 1);
    }
  };
  var cr = class extends R {};
  cr.O = [2];
  var dr = class extends R {};
  var er = class extends R {
    g() {
      return F(this, dr, 1);
    }
  };
  er.O = [1];
  var fr = class extends R {
    setProperty(a) {
      return Ii(this, 1, a);
    }
    getValue() {
      return I(this, 2);
    }
  };
  var gr = class extends R {};
  gr.O = [3, 4];
  var hr = class extends R {};
  var ir = class extends R {
    ia() {
      return D(this, kq, 1);
    }
    g() {
      return L(this, 2);
    }
  };
  ir.O = [6, 7, 9, 10, 11];
  var jr = class extends R {};
  jr.O = [4];
  var kr = class extends R {};
  var lr = class extends R {
    g() {
      return bi(this, 6, oh);
    }
  };
  lr.O = [6];
  var mr = class extends R {
    Pe() {
      return Yh(this, kr, 2);
    }
  };
  var nr = class extends R {
    g() {
      return xi(this, 1);
    }
  };
  var or = class extends R {};
  var qr = class extends R {
      g() {
        return Ai(this, or, 2, pr);
      }
    },
    pr = [1, 2];
  var rr = class extends R {
    g() {
      return D(this, qr, 3);
    }
  };
  var sr = class extends R {};
  var tr = class extends R {
    g() {
      return F(this, sr, 1);
    }
  };
  tr.O = [1];
  var ur = class extends R {
    g() {
      return bi(this, 1, oh);
    }
    j() {
      return D(this, rr, 3);
    }
  };
  ur.O = [1, 4];
  function vr(a) {
    return D(a, Bq, 13);
  }
  function wr(a) {
    return D(a, Gq, 15);
  }
  var xr = class extends R {},
    yr = ej(xr);
  xr.O = [1, 2, 5, 7];
  var zr = class extends R {},
    Ar = ej(zr);
  function Br(a) {
    try {
      const b = a.localStorage.getItem("google_ama_settings");
      return b ? Ar(b) : null;
    } catch (b) {
      return null;
    }
  }
  function Cr(a, b) {
    if (void 0 !== a.Ee) {
      var c = Br(b);
      c || (c = new zr());
      void 0 !== a.Ee && Di(c, 2, a.Ee);
      a = Date.now() + 864e5;
      Number.isFinite(a) && Hi(c, 1, Math.round(a));
      c = $i(c);
      try {
        b.localStorage.setItem("google_ama_settings", c);
      } catch (d) {}
    } else if ((c = Br(b)) && ui(c, 1) < Date.now())
      try {
        b.localStorage.removeItem("google_ama_settings");
      } catch (d) {}
  }
  var Dr = { Wa: "ama_success", Oa: 0.1, Sa: !0, Xa: !0 },
    Er = { Wa: "ama_failure", Oa: 0.1, Sa: !0, Xa: !0 },
    Fr = { Wa: "ama_coverage", Oa: 0.1, Sa: !0, Xa: !0 },
    Gr = { Wa: "ama_opt", Oa: 0.1, Sa: !0, Xa: !1 },
    Hr = { Wa: "ama_auto_rs", Oa: 1, Sa: !0, Xa: !1 },
    Ir = { Wa: "ama_auto_prose", Oa: 1, Sa: !0, Xa: !1 },
    Jr = { Wa: "ama_improv", Oa: 0.1, Sa: !0, Xa: !1 },
    Kr = { Wa: "ama_constraints", Oa: 0, Sa: !0, Xa: !0 };
  function Lr(a, b, c) {
    var d = 0 === a.i ? a.g.j() : a.g.l(),
      e = a.j,
      f = S(a.win),
      g = a.g.g()?.g() || 0;
    a: switch (d?.g()) {
      case 1:
        d = "AUTO_PROSE_TOP_ANCHOR";
        break a;
      case 2:
        d = "AUTO_PROSE_BOTTOM_ANCHOR";
        break a;
      default:
        d = "UNKNOWN_POSITION";
    }
    a: switch (a.i) {
      case 0:
        a = "DESKTOP";
        break a;
      case 2:
        a = "MOBILE";
        break a;
      default:
        a = "OTHER_VIEWPORT";
    }
    Mr(e, Ir, { ...c, evt: b, vh: f, eid: g, pos: d, vpt: a });
  }
  function Nr(a, b) {
    Lr(a, "place", { sts: b });
  }
  var Or = class {
    constructor(a, b, c) {
      this.win = a;
      this.j = b;
      this.g = c;
      this.i = qf();
    }
  };
  var Pr = {},
    Qr = {},
    Rr = {},
    Sr = {},
    Tr = {};
  function Ur() {
    throw Error("Do not instantiate directly");
  }
  Ur.prototype.Yf = null;
  Ur.prototype.Ka = function () {
    return this.content;
  };
  Ur.prototype.toString = function () {
    return this.content;
  };
  function Vr(a) {
    if (a.Zf !== Pr) throw Error("Sanitized content was not of kind HTML.");
    return Hd(a.toString());
  }
  function Wr() {
    Ur.call(this);
  }
  La(Wr, Ur);
  Wr.prototype.Zf = Pr;
  function Xr(a, b) {
    return null != a && a.Zf === b;
  }
  function Yr(a) {
    if (null != a)
      switch (a.Yf) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  }
  function Zr(a) {
    return Xr(a, Pr)
      ? a
      : a instanceof Gd
      ? $r(Fd(a).toString())
      : $r(String(String(a)).replace(as, bs), Yr(a));
  }
  var $r = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.Yf = d);
      return c;
    };
  })(Wr);
  function cs(a) {
    return String(a).replace(ds, "").replace(es, "&lt;");
  }
  function fs(a) {
    return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
  }
  function V(a) {
    return Xr(a, Pr)
      ? String(cs(a.Ka())).replace(gs, bs)
      : String(a).replace(as, bs);
  }
  function hs(a) {
    a = String(a);
    const b = (d, e, f) => {
      const g = Math.min(e.length - f, d.length);
      for (let k = 0; k < g; k++) {
        var h = e[f + k];
        if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1;
      }
      return !0;
    };
    for (var c = 0; -1 != (c = a.indexOf("<", c)); ) {
      if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
      c += 1;
    }
    return a;
  }
  function is(a) {
    if (null == a) return " null ";
    if (Xr(a, Qr)) return a.Ka();
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(js, ks) + "'";
    }
  }
  const ls = /['()]/g;
  function ms(a) {
    return "%" + a.charCodeAt(0).toString(16);
  }
  function W(a) {
    Xr(a, Tr)
      ? (a = fs(a.Ka()))
      : null == a
      ? (a = "")
      : a instanceof ud
      ? (a = fs(td(a)))
      : a instanceof Dd
      ? (a = fs(
          a instanceof Dd && a.constructor === Dd
            ? a.g
            : "type_error:SafeStyleSheet"
        ))
      : ((a = String(a)), (a = ns.test(a) ? a : "zSoyz"));
    return a;
  }
  const os = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\v": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };
  function bs(a) {
    return os[a];
  }
  const ps = {
    "\x00": "\\x00",
    "\b": "\\x08",
    "\t": "\\t",
    "\n": "\\n",
    "\v": "\\x0b",
    "\f": "\\f",
    "\r": "\\r",
    '"': "\\x22",
    $: "\\x24",
    "&": "\\x26",
    "'": "\\x27",
    "(": "\\x28",
    ")": "\\x29",
    "*": "\\x2a",
    "+": "\\x2b",
    ",": "\\x2c",
    "-": "\\x2d",
    ".": "\\x2e",
    "/": "\\/",
    ":": "\\x3a",
    "<": "\\x3c",
    "=": "\\x3d",
    ">": "\\x3e",
    "?": "\\x3f",
    "[": "\\x5b",
    "\\": "\\\\",
    "]": "\\x5d",
    "^": "\\x5e",
    "{": "\\x7b",
    "|": "\\x7c",
    "}": "\\x7d",
    "\u0085": "\\x85",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  };
  function ks(a) {
    return ps[a];
  }
  const qs = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\v": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD",
  };
  function rs(a) {
    return qs[a];
  }
  const as = /[\x00\x22\x26\x27\x3c\x3e]/g,
    gs = /[\x00\x22\x27\x3c\x3e]/g,
    ss = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
    ts = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
    js =
      /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
    us =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    ns =
      /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i,
    vs =
      /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
    ds = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    es = /</g;
  function ws(a) {
    a = void 0 === a ? "white" : a;
    return $r(
      '<svg width="' +
        V(18) +
        '" height="' +
        V(18) +
        '" viewBox="0 0 ' +
        V(18) +
        " " +
        V(18) +
        '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' +
        (Xr(a, Pr)
          ? String(cs(a.Ka())).replace(ts, bs)
          : String(a).replace(ss, bs)) +
        " /></svg>"
    );
  } /* 
 
 
 Copyright Mathias Bynens <http://mathiasbynens.be/> 
 
 Permission is hereby granted, free of charge, to any person obtaining 
 a copy of this software and associated documentation files (the 
 "Software"), to deal in the Software without restriction, including 
 without limitation the rights to use, copy, modify, merge, publish, 
 distribute, sublicense, and/or sell copies of the Software, and to 
 permit persons to whom the Software is furnished to do so, subject to 
 the following conditions: 
 
 The above copyright notice and this permission notice shall be 
 included in all copies or substantial portions of the Software. 
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/
  const xs = Math.floor;
  var ys = /^xn--/,
    zs = /[\x2E\u3002\uFF0E\uFF61]/g;
  const As = {
    Hm: "Overflow: input needs wider integers to process",
    Dm: "Illegal input >= 0x80 (not a basic code point)",
    nm: "Invalid input",
  };
  function Bs(a) {
    throw RangeError(As[a]);
  }
  function Cs(a, b) {
    const c = a.split("@");
    let d = "";
    1 < c.length && ((d = c[0] + "@"), (a = c[1]));
    a = a.replace(zs, ".");
    a = a.split(".").map(b).join(".");
    return d + a;
  }
  function Ds(a) {
    return Cs(a, (b) => {
      if (ys.test(b) && 4 < b.length) {
        b = b.slice(4).toLowerCase();
        const h = [],
          k = b.length;
        let l = 0,
          m = 128;
        var c = 72,
          d = b.lastIndexOf("-");
        0 > d && (d = 0);
        for (var e = 0; e < d; ++e)
          128 <= b.charCodeAt(e) &&
            Bs("Illegal input >= 0x80 (not a basic code point)"),
            h.push(b.charCodeAt(e));
        for (d = 0 < d ? d + 1 : 0; d < k; ) {
          e = l;
          for (let n = 1, p = 36; ; p += 36) {
            d >= k && Bs("Invalid input");
            var f = b.charCodeAt(d++);
            f =
              10 > f - 48
                ? f - 22
                : 26 > f - 65
                ? f - 65
                : 26 > f - 97
                ? f - 97
                : 36;
            (36 <= f || f > xs((2147483647 - l) / n)) &&
              Bs("Overflow: input needs wider integers to process");
            l += f * n;
            var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
            if (f < g) break;
            f = 36 - g;
            n > xs(2147483647 / f) &&
              Bs("Overflow: input needs wider integers to process");
            n *= f;
          }
          f = h.length + 1;
          c = l - e;
          g = 0;
          c = 0 == e ? xs(c / 700) : c >> 1;
          for (c += xs(c / f); 455 < c; g += 36) c = xs(c / 35);
          c = xs(g + (36 * c) / (c + 38));
          xs(l / f) > 2147483647 - m &&
            Bs("Overflow: input needs wider integers to process");
          m += xs(l / f);
          l %= f;
          h.splice(l++, 0, m);
        }
        b = String.fromCodePoint.apply(null, h);
      }
      return b;
    });
  }
  const Es = new ub(vb, "558153351");
  function Fs(a, b, c) {
    var d = a.Na.contentWindow;
    const e = !a.B && "number" === typeof a.g;
    a.C
      ? ((b = { action: "search", searchTerm: b, rsToken: c }),
        e && (b.experimentId = a.g),
        0 < a.i.length && (b.adfiliateWp = a.i),
        d.postMessage(b, "https://www.gstatic.com"))
      : ((d = d.google.search.cse.element.getElement(a.G)),
        (c = { rsToken: c, hostName: a.host }),
        e && (c.afsExperimentId = a.g),
        0 < a.i.length && (c.adfiliateWp = a.i),
        d.execute(b, void 0, c));
  }
  function Gs(a, b) {
    if (a.H) {
      const c = a.Na.contentDocument?.getElementById(
        "prose-empty-serp-container"
      );
      b &&
        c &&
        Rb(b, "input", () => {
          c.style.display = "none";
        });
    }
  }
  var Hs = class {
    constructor(a, b, c, d, e, f, g, h, k, l, m = !1, n = !1, p = !1, q = "") {
      this.Na = a;
      this.l = b;
      this.G = c;
      this.j = d;
      this.M = e;
      this.host = f.host;
      this.origin = f.origin;
      this.A = g;
      this.F = h;
      this.g = k;
      this.I = m;
      this.C = l;
      this.H = n;
      this.B = p;
      this.i = q;
    }
    K() {
      this.Na.setAttribute("id", "prose-iframe");
      this.Na.setAttribute("width", "100%");
      this.Na.setAttribute("height", "100%");
      var a = sj`box-sizing:border-box;border:unset;`;
      this.Na.style.cssText = td(a);
      a =
        "https://www.google.com/s2/favicons?sz=64&domain_url=" +
        encodeURIComponent(this.host);
      var b = De(a, Ce) || Rd;
      var c = Ds(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
      a = this.G;
      var d = this.j,
        e = this.M;
      const f = this.host;
      c = this.F.replace("${website}", c);
      const g = this.H;
      var h = $r,
        k =
          "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
          (this.I
            ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' +
              String(e).replace(js, ks) +
              '"},top.location.origin);}};\x3c/script>'
            : "") +
          '<div class="prose-container"><img class="cse-favicon" src="';
      Xr(b, Rr) || Xr(b, Sr)
        ? (b = String(b).replace(us, rs))
        : b instanceof jd
        ? (b = String(kd(b)).replace(us, rs))
        : b instanceof $c
        ? (b = String(cd(b).toString()).replace(us, rs))
        : ((b = String(b)),
          (b = vs.test(b) ? b.replace(us, rs) : "about:invalid#zSoyz"));
      a = h(
        k +
          V(b) +
          '" alt="' +
          V(f) +
          ' icon"><p class="cse-header"><strong>' +
          Zr(c) +
          '</strong></p><div class="gcse-search" data-gname="' +
          V(a) +
          '" data-adclient="' +
          V(d) +
          '" data-adchannel="' +
          V(e) +
          '" data-as_sitesearch="' +
          V(f) +
          '" data-personalizedAds="false"></div></div>' +
          (g
            ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>"
            : "")
      );
      a = Vr(a);
      this.C
        ? ((a = this.Na),
          (d = fd(
            new ub(
              vb,
              "https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"
            ),
            {
              version: Es,
              cxId: this.l,
              host: this.host,
              lang: this.A,
              lrh: this.F,
              client: this.j,
              origin: this.origin,
            }
          )),
          (a.src = cd(d).toString()))
        : ((d = new Map([
            ["cx", this.l],
            ["language", this.A],
          ])),
          this.B &&
            ((e = Array.isArray(this.g) ? this.g : [this.g]),
            e.length && d.set("fexp", e.join())),
          (e = rj(d)),
          (d = {}),
          (e = `<script src="${hj(cd(e).toString())}"`),
          d.async && (e += " async"),
          d.di && (e += ` custom-element="${hj(d.di)}"`),
          d.defer && (e += " defer"),
          d.id && (e += ` id="${hj(d.id)}"`),
          d.nonce && (e += ` nonce="${hj(d.nonce)}"`),
          d.type && (e += ` type="${hj(d.type)}"`),
          (d = Hd(e + ">\x3c/script>")),
          (a = nj({ style: sj`margin:${0};` }, [a, d])),
          (this.Na.srcdoc = Fd(a)));
    }
  };
  function Is(a) {
    var b = [];
    Co(a.getElementsByTagName("p"), function (c) {
      100 <= Js(c) && b.push(c);
    });
    return b;
  }
  function Js(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = 0;
    Co(a.childNodes, function (c) {
      b += Js(c);
    });
    return b;
  }
  function Ks(a) {
    return 0 == a.length || isNaN(a[0])
      ? a
      : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Ls(a, b) {
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
  const Ms = class {
    constructor(a, b, c, d) {
      this.l = a;
      this.i = b;
      this.j = c;
      this.g = d;
    }
    query(a) {
      var b = [];
      try {
        b = a.querySelectorAll(this.l);
      } catch (f) {}
      if (!b.length) return [];
      a = fb(b);
      a = Ls(this, a);
      "number" === typeof this.i &&
        ((b = this.i),
        0 > b && (b += a.length),
        (a = 0 <= b && b < a.length ? [a[b]] : []));
      if ("number" === typeof this.j) {
        b = [];
        for (var c = 0; c < a.length; c++) {
          var d = Is(a[c]),
            e = this.j;
          0 > e && (e += d.length);
          0 <= e && e < d.length && b.push(d[e]);
        }
        a = b;
      }
      return a;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: this.l,
        occurrenceIndex: this.i,
        paragraphIndex: this.j,
        ignoreMode: this.g,
      });
    }
  };
  function Ns(a) {
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
  function Os(a) {
    return Do(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
  }
  var Ps = new t(1321),
    Qs = new t(1310, !0),
    Rs = new t(1277, !0),
    Ss = new t(1275, !0),
    Ts = new t(1324),
    Us = new t(1311, !0),
    Vs = new yb(1130, 100),
    Ws = new t(1270, !0),
    Xs = new yb(1032, 200),
    Ys = new zb(14),
    Zs = new t(1319, !0),
    $s = new yb(1224, 0.01),
    at = new t(1320),
    bt = new t(1260),
    ct = new t(1239),
    dt = new t(1196),
    et = new t(1160),
    ft = new t(316),
    gt = new t(1290),
    ht = new t(1312, !0),
    it = new t(334),
    jt = new yb(1263, -1),
    kt = new yb(54),
    lt = new yb(1265, -1),
    mt = new yb(1264, -1),
    nt = new t(1291),
    ot = new t(1267, !0),
    pt = new t(1268, !0),
    qt = new t(1266),
    rt = new t(313),
    st = new yb(66, -1),
    tt = new yb(65, -1),
    ut = new t(1256),
    vt = new t(369),
    wt = new t(1241, !0),
    xt = new t(368),
    yt = new t(1300, !0),
    zt = new u(1273, ["en", "de"]),
    At = new t(1223, !0),
    Bt = new u(1261, ["44786015", "44786016"]),
    Ct = new t(1309),
    Dt = new t(1289),
    Et = new t(1282),
    Ft = new t(1250),
    Gt = new t(1151),
    Ht = new yb(1072, 0.75),
    It = new t(290),
    Jt = new t(1222),
    Kt = new t(1238),
    Lt = new t(1237),
    Mt = new zb(1307, "nohtml"),
    Nt = new yb(609316998, 100001),
    Ot = new yb(579884443),
    Pt = new t(609036725),
    Qt = new yb(566560958, 3e4),
    Rt = new yb(508040914, 100),
    St = new yb(547455356, 49),
    Tt = new t(595118933),
    Ut = new t(566279275),
    Vt = new t(566279276),
    Wt = new t(595118932),
    Xt = new u(556791602, "1 2 4 6 8 9 10 11 12 13 14 15 16 17".split(" ")),
    Yt = new t(566560957),
    Zt = new zb(589752731),
    $t = new zb(589752730),
    au = new t(596859467),
    bu = new t(579884441),
    cu = new yb(571329679),
    du = new t(556739145),
    eu = new yb(579884442),
    fu = new yb(595645509, 0.3),
    gu = new yb(561668774, 0.1),
    hu = new t(550910941),
    iu = new t(607657092),
    ju = new t(506914611),
    ku = new t(604916478, !0),
    lu = new t(597181299),
    mu = new t(595989603),
    nu = new yb(469675170, 3e4),
    ou = new t(160889229, !0),
    pu = new t(506852289),
    qu = new t(1120),
    ru = new u(606178001),
    su = new u(606178002),
    tu = new u(606178003),
    uu = new u(606178004),
    vu = new u(606178005),
    wu = new u(606178006),
    xu = new u(606178007),
    yu = new u(606178008),
    zu = new u(606178009),
    Au = new u(606178010),
    Bu = new u(606178011),
    Cu = new u(606178012),
    Du = new u(606178013),
    Eu = new u(606178014),
    Fu = new u(606178015),
    Gu = new u(606178016),
    Hu = new u(606178017),
    Iu = new u(606178018),
    Ju = new u(606178019),
    Ku = new u(1766812824),
    Lu = new u(1766812825),
    Mu = new u(1766812826),
    Nu = new u(1766812827),
    Ou = new u(1766812828),
    Pu = new u(1766812829),
    Qu = new u(1766812830),
    Ru = new u(1766812831),
    Su = new u(1766812832),
    Tu = new u(1766812833),
    Uu = new u(1766812834),
    Vu = new t(586386407, !0),
    Wu = new t(573506525, !0),
    Xu = new t(573506524, !0),
    Yu = new t(562896595),
    Zu = new t(586643641, !0),
    $u = new t(596652146),
    av = new t(603378945),
    bv = new t(570863962, !0),
    cv = new zb(570879859, "control_1\\.\\d"),
    dv = new yb(570863961, 50),
    ev = new t(570879858, !0),
    fv = new t(45615403, !0),
    gv = new t(570804360),
    hv = new t(562874197),
    iv = new t(562874196),
    jv = new t(555237685, !0),
    kv = new t(45460956),
    lv = new t(45414947, !0),
    mv = new yb(472785970, 500),
    nv = new t(45545710),
    ov = new t(439828594),
    pv = new t(483962503),
    qv = new t(506738118),
    rv = new t(77),
    sv = new t(78),
    tv = new t(83),
    uv = new t(80),
    vv = new t(76),
    wv = new t(84),
    xv = new t(1973),
    yv = new t(188),
    zv = new t(485990406);
  function Av(a, b) {
    a = te(new he(a), "DIV");
    const c = a.style;
    c.width = "100%";
    c.height = "auto";
    c.clear = b ? "both" : "none";
    return a;
  }
  function Bv(a, b, c) {
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
    Ns(b) &&
      (b.setAttribute("data-init-display", b.style.display),
      (b.style.display = "block"));
  }
  function Cv(a) {
    if (a && a.parentNode) {
      const b = a.parentNode;
      b.removeChild(a);
      Ns(b) &&
        (b.style.display = b.getAttribute("data-init-display") || "none");
    }
  }
  var Ev = (a, b, c, d = 0) => {
      var e = Dv(b, c, d);
      if (e.K) {
        for (c = b = e.K; (c = e.wd(c)); ) b = c;
        e = { anchor: b, position: e.Pd };
      } else e = { anchor: b, position: c };
      a["google-ama-order-assurance"] = d;
      Bv(a, e.anchor, e.position);
    },
    Fv = (a, b, c, d = 0) => {
      x(rt) ? Ev(a, b, c, d) : Bv(a, b, c);
    };
  function Dv(a, b, c) {
    const d = (f) => {
        f = Gv(f);
        return null == f ? !1 : c < f;
      },
      e = (f) => {
        f = Gv(f);
        return null == f ? !1 : c > f;
      };
    switch (b) {
      case 0:
        return {
          K: Hv(a.previousSibling, d),
          wd: (f) => Hv(f.previousSibling, d),
          Pd: 0,
        };
      case 2:
        return {
          K: Hv(a.lastChild, d),
          wd: (f) => Hv(f.previousSibling, d),
          Pd: 0,
        };
      case 3:
        return {
          K: Hv(a.nextSibling, e),
          wd: (f) => Hv(f.nextSibling, e),
          Pd: 3,
        };
      case 1:
        return {
          K: Hv(a.firstChild, e),
          wd: (f) => Hv(f.nextSibling, e),
          Pd: 3,
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Gv(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
      ? a["google-ama-order-assurance"]
      : null;
  }
  function Hv(a, b) {
    return a && b(a) ? a : null;
  }
  function Iv(a, b) {
    try {
      const c = b.document.documentElement.getBoundingClientRect(),
        d = a.getBoundingClientRect();
      return { x: d.left - c.left, y: d.top - c.top };
    } catch (c) {
      return null;
    }
  }
  function Jv(a, b) {
    const c = 40 === a.google_reactive_ad_format,
      d = 16 === a.google_reactive_ad_format;
    return (
      !!a.google_ad_resizable &&
      (!a.google_reactive_ad_format || c) &&
      !d &&
      !!b.navigator &&
      /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) &&
      b === b.top
    );
  }
  function Kv(a, b, c) {
    a = a.style;
    "rtl" === b ? (a.marginRight = c) : (a.marginLeft = c);
  }
  function Lv(a, b, c) {
    a = Iv(b, a);
    return "rtl" === c ? -a.x : a.x;
  }
  function Mv(a, b) {
    b = b.parentElement;
    return b ? ((a = Ze(b, a)) ? a.direction : "") : "";
  }
  function Nv(a, b, c) {
    if (0 !== Lv(a, b, c)) {
      Kv(b, c, "0px");
      var d = Lv(a, b, c);
      Kv(b, c, `${-1 * d}px`);
      a = Lv(a, b, c);
      0 !== a && a !== d && Kv(b, c, `${(d / (a - d)) * d}px`);
    }
  }
  const Ov = RegExp("(^| )adsbygoogle($| )");
  function Pv(a, b) {
    for (let c = 0; c < b.length; c++) {
      const d = b[c],
        e = ee(d.property);
      a[e] = d.value;
    }
  }
  function Qv(a, b, c, d, e, f) {
    a = Rv(a, e);
    a.ya.setAttribute("data-ad-format", d ? d : "auto");
    Sv(a, b, c, f);
    return a;
  }
  function Tv(a, b, c = null) {
    a = Rv(a, {});
    Sv(a, b, null, c);
    return a;
  }
  function Sv(a, b, c, d) {
    var e = [];
    if ((d = d && d.Wf)) a.ob.className = d.join(" ");
    a = a.ya;
    a.className = "adsbygoogle";
    a.setAttribute("data-ad-client", b);
    c && a.setAttribute("data-ad-slot", c);
    e.length && a.setAttribute("data-ad-channel", e.join("+"));
  }
  function Rv(a, b) {
    const c = Av(a, b.clearBoth || !1);
    var d = c.style;
    d.textAlign = "center";
    b.Od && Pv(d, b.Od);
    a = te(new he(a), "INS");
    d = a.style;
    d.display = "block";
    d.margin = "auto";
    d.backgroundColor = "transparent";
    b.wf && (d.marginTop = b.wf);
    b.re && (d.marginBottom = b.re);
    b.oc && Pv(d, b.oc);
    c.appendChild(a);
    return { ob: c, ya: a };
  }
  function Uv(a, b, c) {
    b.dataset.adsbygoogleStatus = "reserved";
    b.className += " adsbygoogle-noablate";
    const d = { element: b };
    c = c && c.Gc();
    if (b.hasAttribute("data-pub-vars")) {
      try {
        c = JSON.parse(b.getAttribute("data-pub-vars"));
      } catch (e) {
        return;
      }
      b.removeAttribute("data-pub-vars");
    }
    c && (d.params = c);
    (a.adsbygoogle = a.adsbygoogle || []).push(d);
  }
  function Vv(a) {
    const b = Os(a.document);
    Ua(b, function (c) {
      const d = Wv(a, c);
      var e;
      if ((e = d)) {
        e = (e = Iv(c, a)) ? e.y : 0;
        const f = S(a);
        e = !(e < f);
      }
      e &&
        (c.setAttribute("data-pub-vars", JSON.stringify(d)),
        c.removeAttribute("height"),
        c.style.removeProperty("height"),
        c.removeAttribute("width"),
        c.style.removeProperty("width"),
        Uv(a, c));
    });
  }
  function Wv(a, b) {
    b = b.getAttribute("google_element_uid");
    a = a.google_sv_map;
    if (!b || !a || !a[b]) return null;
    a = a[b];
    b = {};
    for (let c in tb) a[tb[c]] && (b[tb[c]] = a[tb[c]]);
    return b;
  }
  class Xv {
    constructor() {
      var a = qj`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
      this.g = null;
      this.i = !1;
      this.A = Math.random();
      this.j = this.va;
      this.B = a;
    }
    nf(a) {
      this.g = a;
    }
    l(a) {
      this.i = a;
    }
    va(a, b, c = 0.01, d, e = "jserror") {
      if ((this.i ? this.A : Math.random()) > c) return !1;
      (b.error && b.meta && b.id) || (b = new Tk(b, { context: a, id: e }));
      if (d || this.g) (b.meta = {}), this.g && this.g(b.meta), d && d(b.meta);
      r.google_js_errors = r.google_js_errors || [];
      r.google_js_errors.push(b);
      r.error_rep_loaded || (Xe(r.document, this.B), (r.error_rep_loaded = !0));
      return !1;
    }
    ic(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.j(a, d, 0.01, c, "jserror")) throw d;
      }
    }
    Ma(a, b, c, d) {
      return (...e) => this.ic(a, () => b.apply(c, e), d);
    }
    Da(a, b, c) {
      b.catch((d) => {
        d = d ? d : "unknown rejection";
        this.va(
          a,
          d instanceof Error ? d : Error(d),
          void 0,
          c || this.g || void 0
        );
      });
    }
  }
  const Yv = (a, b) => {
    b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
    2048 > b.length && b.push(a);
  };
  var Zv = (a, b, c, d, e = !1) => {
      const f = d || window,
        g = "undefined" !== typeof queueMicrotask;
      return function () {
        e &&
          g &&
          queueMicrotask(() => {
            f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
            f.google_rum_task_id_counter += 1;
          });
        const h = $k();
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
            Yv(
              {
                label: a.toString(),
                value: h,
                duration: ($k() || 0) - h,
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
    $v = (a, b, c, d = !1) =>
      Zv(
        a,
        b,
        (e, f) => {
          new Xv().va(e, f);
        },
        c,
        d
      );
  function aw(a, b, c) {
    return Zv(a, b, void 0, c, !0).apply();
  }
  function bw(a, b) {
    return $v(754, a, b, !0).apply();
  }
  function cw(a) {
    if (!a) return null;
    var b = I(a, 7);
    if (I(a, 1) || a.getId() || 0 < bi(a, 4, oh).length) {
      var c = I(a, 3),
        d = I(a, 1),
        e = bi(a, 4, oh);
      b = ti(a, 2);
      var f = ti(a, 5);
      a = dw(L(a, 6));
      var g = "";
      d && (g += d);
      c && (g += "#" + Ks(c));
      if (e) for (c = 0; c < e.length; c++) g += "." + Ks(e[c]);
      b = (e = g) ? new Ms(e, b, f, a) : null;
    } else b = b ? new Ms(b, ti(a, 2), ti(a, 5), dw(L(a, 6))) : null;
    return b;
  }
  var ew = { 1: 1, 2: 2, 3: 3, 0: 0 };
  function dw(a) {
    return null == a ? a : ew[a];
  }
  function fw(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      var d = I(a[c], 1),
        e = I(a[c], 2);
      if (d && null != e) {
        var f = {};
        f.property = d;
        f.value = e;
        b.push(f);
      }
    }
    return b;
  }
  function gw(a, b) {
    var c = {};
    a && ((c.wf = I(a, 1)), (c.re = I(a, 2)), (c.clearBoth = !!ai(a, 3)));
    b && ((c.Od = fw(F(b, fr, 3))), (a = F(b, fr, 4)), (c.oc = fw(a)));
    return c;
  }
  var hw = { 1: 0, 2: 1, 3: 2, 4: 3 },
    iw = { 0: 1, 1: 2, 2: 3, 3: 4 };
  const jw = ["-webkit-text-fill-color"];
  function kw(a) {
    if (Bc) {
      {
        const c = Ze(a.document.body, a);
        if (c) {
          a = {};
          var b = c.length;
          for (let d = 0; d < b; ++d) a[c[d]] = "initial";
          a = lw(a);
        } else a = mw();
      }
    } else a = mw();
    return a;
  }
  var mw = () => {
    const a = { all: "initial" };
    Ua(jw, (b) => {
      a[b] = "unset";
    });
    return a;
  };
  function lw(a) {
    Ua(jw, (b) => {
      delete a[b];
    });
    return a;
  }
  function nw(a, b) {
    const c = a.document.createElement("div");
    z(c, kw(a));
    a = c.attachShadow({ mode: "open" });
    b && c.classList.add(b);
    return { Ta: c, shadowRoot: a };
  }
  function ow({ mc: a, Jb: b, Yb: c, nc: d, Kb: e, Zb: f }) {
    const g = [];
    for (let n = 0; n < f; n++)
      for (let p = 0; p < c; p++) {
        var h = p,
          k = c - 1,
          l = n,
          m = f - 1;
        g.push({
          x: a + (0 === k ? 0 : h / k) * (b - a),
          y: d + (0 === m ? 0 : l / m) * (e - d),
        });
      }
    return g;
  }
  function pw(a, b) {
    a.hasOwnProperty("_goog_efp_called_") ||
      (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
    return a.elementFromPoint(b.x, b.y);
  }
  function qw(a, b) {
    for (const c of b) if ((b = rw(a, c))) return b;
    return null;
  }
  function sw(a, { Ti: b, Ej: c, width: d, height: e }) {
    b = ow({ mc: b, Jb: b + d, Yb: 10, nc: c, Kb: c + e, Zb: 10 });
    return qw(a, b);
  }
  function fx(a, b, c = 10, d = 10) {
    c = ow({ mc: b.left, Jb: b.right, Yb: c, nc: b.top, Kb: b.bottom, Zb: d });
    b = new Set();
    for (const e of c) (c = rw(a, e)) && b.add(c);
    return b;
  }
  function gx(a, b, c) {
    if ("fixed" !== zk(b, "position")) return null;
    var d =
      "GoogleActiveViewInnerContainer" === b.getAttribute("class") ||
      (1 >= Ck(b).width && 1 >= Ck(b).height) ||
      (a.g.oi && !a.g.oi(b))
        ? !0
        : !1;
    a.g.kg && a.g.kg(b, c, d);
    return d ? null : b;
  }
  function rw(a, b) {
    var c = pw(a.J.document, b);
    if (c) {
      var d;
      if (!(d = gx(a, c, b)))
        a: {
          d = a.J.document;
          for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
            const e = gx(a, c, b);
            if (e) {
              d = e;
              break a;
            }
          }
          d = null;
        }
      a = d || null;
    } else a = null;
    return a;
  }
  var hx = class {
    constructor(a, b = {}) {
      this.J = a;
      this.g = b;
    }
  };
  function ix(a) {
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
      : (a.google_reactive_ads_global_state = new jx());
    return a.google_reactive_ads_global_state;
  }
  class jx {
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
      this.floatingAdsStacking = new kx();
      this.sideRailProcessedFixedElements = new Set();
      this.sideRailAvailableSpace = new Map();
      this.sideRailPlasParam = new Map();
      this.i = [];
      this.g = null;
    }
  }
  var kx = class {
    constructor() {
      this.maxZIndexRestrictions = {};
      this.nextRestrictionId = 0;
      this.maxZIndexListeners = [];
    }
  };
  function lx(a, b) {
    return new mx(a, b);
  }
  function nx(a) {
    const b = ox(a);
    Ua(a.g.maxZIndexListeners, (c) => c(b));
  }
  function ox(a) {
    a = bf(a.g.maxZIndexRestrictions);
    return a.length ? Math.min.apply(null, a) : null;
  }
  function px(a, b) {
    db(a.g.maxZIndexListeners, (c) => c === b);
  }
  class qx {
    constructor(a) {
      this.g = ix(a).floatingAdsStacking;
    }
  }
  function rx(a) {
    if (null == a.g) {
      var b = a.i,
        c = a.j;
      const d = b.g.nextRestrictionId++;
      b.g.maxZIndexRestrictions[d] = c;
      nx(b);
      a.g = d;
    }
  }
  function sx(a) {
    if (null != a.g) {
      var b = a.i;
      delete b.g.maxZIndexRestrictions[a.g];
      nx(b);
      a.g = null;
    }
  }
  class mx {
    constructor(a, b) {
      this.i = a;
      this.j = b;
      this.g = null;
    }
  }
  function tx(a) {
    a = a.activeElement;
    const b = a?.shadowRoot;
    return b ? tx(b) || a : a;
  }
  function ux(a, b) {
    return vx(b, a.document.body).flatMap((c) => wx(c));
  }
  function vx(a, b) {
    var c = a;
    for (a = []; c && c !== b; ) {
      a.push(c);
      let e;
      var d;
      (d = c.parentElement) ||
        ((c = c.getRootNode()),
        (d =
          (null == (e = c.mode && c.host ? c : null) ? void 0 : e.host) ||
          null));
      c = d;
    }
    return c !== b ? [] : a;
  }
  function wx(a) {
    const b = a.parentElement;
    return b ? Array.from(b.children).filter((c) => c !== a) : [];
  }
  function xx(a) {
    null !== a.g &&
      (a.g.si.forEach((b) => {
        b.inert = !1;
      }),
      a.g.nj?.focus(),
      (a.g = null));
  }
  function yx(a, b) {
    xx(a);
    const c = tx(a.win.document);
    b = ux(a.win, b).filter((d) => !d.inert);
    b.forEach((d) => {
      d.inert = !0;
    });
    a.g = { nj: c, si: b };
  }
  var zx = class {
    constructor(a) {
      this.win = a;
      this.g = null;
    }
    Zd() {
      xx(this);
    }
  };
  function Ax(a) {
    return new Bx(
      a,
      new Vo(a, a.document.body),
      new Vo(a, a.document.documentElement),
      new Vo(a, a.document.documentElement)
    );
  }
  function Cx(a) {
    Uo(a.j, "scroll-behavior", "auto");
    const b = Dx(a.win);
    b.activePageScrollPreventers.add(a);
    null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
    Uo(a.g, "position", "fixed");
    Uo(a.g, "top", `${-b.previousWindowScroll}px`);
    Uo(a.g, "width", "100%");
    Uo(a.g, "overflow-x", "hidden");
    Uo(a.g, "overflow-y", "hidden");
    Uo(a.i, "overflow-x", "hidden");
    Uo(a.i, "overflow-y", "hidden");
  }
  function Ex(a) {
    To(a.g);
    To(a.i);
    const b = Dx(a.win);
    b.activePageScrollPreventers.delete(a);
    0 === b.activePageScrollPreventers.size &&
      (a.win.scrollTo(0, b.previousWindowScroll || 0),
      (b.previousWindowScroll = null));
    To(a.j);
  }
  var Bx = class {
    constructor(a, b, c, d) {
      this.win = a;
      this.g = b;
      this.i = c;
      this.j = d;
    }
  };
  function Dx(a) {
    return (a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
      previousWindowScroll: null,
      activePageScrollPreventers: new Set(),
    });
  }
  function Fx(a) {
    return a.googPageScrollPreventerInfo &&
      0 < a.googPageScrollPreventerInfo.activePageScrollPreventers.size
      ? !0
      : !1;
  }
  function Gx(a, b) {
    return Hx(`#${a}`, b);
  }
  function Ix(a, b) {
    return Hx(`.${a}`, b);
  }
  function Hx(a, b) {
    b = b.querySelector(a);
    if (!b) throw Error(`Element (${a}) does not exist`);
    return b;
  }
  function Jx(a, b) {
    b = nw(a, b);
    a.document.body.appendChild(b.Ta);
    return b;
  }
  function Kx(a, b) {
    const c = new U(b.P);
    dp(b, !0, () => void c.g(!0));
    dp(b, !1, () => {
      a.setTimeout(() => {
        b.P || c.g(!1);
      }, 700);
    });
    return Zo(c);
  }
  function Lx(a) {
    const b = a.Cc;
    var c = a.Vd,
      d = a.Bc;
    const e = a.sc,
      f = a.Sf,
      g = a.me,
      h = a.Ia;
    a =
      "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " +
      W(a.zIndex) +
      "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
      W(b) +
      "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
    c = c ? (h ? 20 : 16) : 0;
    a +=
      W(c) +
      "px; transition: transform " +
      W(g) +
      "s ease-in-out;" +
      (d
        ? "left: 0; border-top-right-radius: " +
          W(c) +
          "px; border-bottom-right-radius: " +
          W(c) +
          "px; transform: translateX(-100%);"
        : "right: 0; border-top-left-radius: " +
          W(c) +
          "px; border-bottom-left-radius: " +
          W(c) +
          "px; transform: translateX(100%);") +
      "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" +
      (h ? "height: 24px;" : "padding: 5px;") +
      "}.hd-control-button {border: none; background: none; cursor: pointer;" +
      (h ? "" : "padding: 5px;") +
      "}#hd-back-arrow-button {" +
      (d ? "float: right;" : "float: left;") +
      "}#hd-close-button {" +
      (d ? "float: left;" : "float: right;") +
      '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
      V(f) +
      '">';
    d = h ? "#5F6368" : "#444746";
    a +=
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' +
      V(d) +
      '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' +
      V(e) +
      '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' +
      V(d) +
      '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
    return $r(a);
  }
  function Mx(a) {
    a = a.top;
    if (!a) return null;
    try {
      var b = a.history;
    } catch (c) {
      b = null;
    }
    b = b && b.pushState && "function" === typeof b.pushState ? b : null;
    if (!b) return null;
    if (a.googNavStack) return a.googNavStack;
    b = new Nx(a, b);
    b.K();
    return b ? (a.googNavStack = b) : null;
  }
  function Ox(a, b) {
    return b ? (b.googNavStackId === a.j ? b : null) : null;
  }
  function Px(a, b) {
    for (let c = b.length - 1; 0 <= c; --c) {
      const d = 0 === c;
      a.J.requestAnimationFrame(() => void b[c].wj({ isFinal: d }));
    }
  }
  function Qx(a, b) {
    b = ib(a.stack, b, (c, d) => c - d.rg.googNavStackStateId);
    if (0 <= b) return a.stack.splice(b, a.stack.length - b);
    b = -b - 1;
    return a.stack.splice(b, a.stack.length - b);
  }
  class Nx extends T {
    constructor(a, b) {
      super();
      this.J = a;
      this.g = b;
      this.stack = [];
      this.j = (1e9 * Math.random()) >>> 0;
      this.A = 0;
      this.l = (c) => {
        (c = Ox(this, c.state))
          ? Px(this, Qx(this, c.googNavStackStateId + 0.5))
          : Px(this, this.stack.splice(0, this.stack.length));
      };
    }
    pushEvent() {
      const a = { googNavStackId: this.j, googNavStackStateId: this.A++ },
        b = new Promise((c) => {
          this.stack.push({ wj: c, rg: a });
        });
      this.g.pushState(a, "");
      return {
        navigatedBack: b,
        triggerNavigateBack: () => {
          const c = Qx(this, a.googNavStackStateId);
          var d;
          if ((d = 0 < c.length)) {
            d = c[0].rg;
            const e = Ox(this, this.g.state);
            d =
              e &&
              e.googNavStackId === d.googNavStackId &&
              e.googNavStackStateId === d.googNavStackStateId;
          }
          d && this.g.go(-c.length);
          Px(this, c);
        },
      };
    }
    K() {
      this.J.addEventListener("popstate", this.l);
    }
    i() {
      this.J.removeEventListener("popstate", this.l);
      super.i();
    }
  }
  function Rx(a) {
    return (a = Mx(a)) ? new Sx(a) : null;
  }
  function Tx(a) {
    if (!a.g) {
      var { navigatedBack: b, triggerNavigateBack: c } = a.l.pushEvent();
      a.g = c;
      b.then(() => {
        a.g && !a.B && ((a.g = null), jp(a.j));
      });
    }
  }
  var Sx = class extends T {
    constructor(a) {
      super();
      this.l = a;
      this.j = new kp();
      this.g = null;
    }
  };
  function Ux(a, b, c) {
    var d = c.Ce ? null : new zx(a);
    const e = lx(new qx(a), c.zIndex - 1);
    b = Vx(a, b, c);
    d = new Wx(a, b, d, c.tb, Ax(a), e);
    d.K();
    (c.nd || void 0 === c.nd) && Xx(d);
    c.qb &&
      ((a = Rx(a))
        ? Yx(d, a, c.cf)
        : c.cf?.(Error("Unable to create closeNavigator")));
    return d;
  }
  function Xx(a) {
    a.A = (b) => {
      "Escape" === b.key && a.g.P && a.collapse();
    };
    a.win.document.body.addEventListener("keydown", a.A);
  }
  function Yx(a, b, c) {
    dp(a.g, !0, () => {
      try {
        Tx(b);
      } catch (d) {
        c?.(d);
      }
    });
    dp(a.g, !1, () => {
      try {
        b.g && (b.g(), (b.g = null));
      } catch (d) {
        c?.(d);
      }
    });
    hp(b.j).listen(() => void a.collapse());
    Ro(a, b);
  }
  function Zx(a) {
    if (a.B) throw Error("Accessing domItems after disposal");
    return a.C;
  }
  function $x(a) {
    a.win.setTimeout(() => {
      a.g.P && Zx(a).Ja.focus();
    }, 500);
  }
  function ay(a) {
    const { bf: b, Wh: c } = Zx(a);
    b.addEventListener("click", () => void a.collapse());
    c.addEventListener("click", () => void a.collapse());
  }
  function by(a) {
    dp(a.j, !1, () => {
      Zx(a).Ja.classList.add("hd-hidden");
    });
  }
  var Wx = class extends T {
    constructor(a, b, c, d = !0, e, f) {
      super();
      this.win = a;
      this.C = b;
      this.l = c;
      this.tb = d;
      this.g = new U(!1);
      this.j = Kx(a, this.g);
      dp(this.j, !0, () => {
        Cx(e);
        rx(f);
      });
      dp(this.j, !1, () => {
        Ex(e);
        sx(f);
      });
    }
    show({ gg: a = !1 } = {}) {
      if (this.B) throw Error("Cannot show drawer after disposal");
      Zx(this).Ja.classList.remove("hd-hidden");
      Po(this.win);
      Zx(this).Ja.classList.add("hd-revealed");
      this.g.g(!0);
      this.l && (yx(this.l, Zx(this).gb.Ta), this.tb && $x(this));
      a &&
        dp(this.j, !1, () => {
          this.ka();
        });
    }
    collapse() {
      Zx(this).Ja.classList.remove("hd-revealed");
      this.g.g(!1);
      this.l?.Zd();
    }
    isVisible() {
      return this.j;
    }
    K() {
      ay(this);
      by(this);
    }
    i() {
      this.A && this.win.document.body.removeEventListener("keydown", this.A);
      const a = this.C.gb.Ta,
        b = a.parentNode;
      b && b.removeChild(a);
      this.l?.Zd();
      super.i();
    }
  };
  function Vx(a, b, c) {
    const d = Jx(a, c.De),
      e = d.shadowRoot;
    e.appendChild(
      ue(
        new he(a.document),
        Vr(
          Lx({
            Cc: c.Cc,
            Vd: c.Vd ?? !0,
            Bc: c.Bc || !1,
            sc: c.sc,
            Sf: c.Sf || "",
            zIndex: c.zIndex,
            me: 0.5,
            Ia: c.Ia || !1,
          })
        )
      )
    );
    const f = Gx("hd-drawer-container", e);
    c.Ie?.i((g) => {
      f.setAttribute("aria-label", g);
    });
    c = Gx("hd-content-container", e);
    c.appendChild(b);
    Po(a);
    return {
      Ja: f,
      bf: Gx("hd-modal-background", e),
      xe: c,
      Wh: Gx("hd-close-button", e),
      Tn: Gx("hd-back-arrow-button", e),
      gb: d,
    };
  }
  function cy(a) {
    const b = a.hj,
      c = a.Ai;
    var d = a.me;
    const e = a.Ia;
    a =
      "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " +
      W(a.zIndex) +
      "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
      W(c) +
      "%; transition: transform " +
      W(d) +
      "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
    d = e ? 20 : 28;
    a +=
      W(d) +
      "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
      W((b / c) * 100) +
      "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " +
      W(((c - b) / c) * 100) +
      "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
      W((b / c) * 100) +
      "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " +
      W((b / c) * 100) +
      "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " +
      W(80) +
      "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
      W(d) +
      "px " +
      W(d) +
      "px 0 0; background: white; display: flex; height: " +
      W(30) +
      "px; justify-content: center; cursor: grab;}.ved-handle-icon {" +
      (e
        ? "background: #dadce0; width: 50px;"
        : "background: #747775; opacity: 0.4; width: 32px;") +
      'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
      dy("ved-moving-handle") +
      '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' +
      dy("ved-fixed-handle") +
      "</div></div></div>";
    return $r(a);
  }
  function dy(a) {
    return $r(
      '<div class="ved-handle" id="' +
        V(a) +
        '"><div class="ved-handle-icon"></div></div>'
    );
  }
  function ey(a) {
    return yp(a.g).map((b) => (b ? fy(a, b) : 0));
  }
  function fy(a, b) {
    switch (a.direction) {
      case 0:
        return gy(-b.wh);
      case 1:
        return gy(-b.uh);
      default:
        throw Error(`Unhandled direction: ${a.direction}`);
    }
  }
  function hy(a) {
    return Ap(a.g).map((b) => fy(a, b));
  }
  var iy = class {
    constructor(a) {
      this.g = a;
      this.direction = 0;
    }
  };
  function gy(a) {
    return 0 === a ? 0 : a;
  }
  function X(a) {
    if (a.B) throw Error("Accessing domItems after disposal");
    return a.C;
  }
  function jy(a) {
    a.win.setTimeout(() => {
      a.g.P && X(a).Ja.focus();
    }, 500);
  }
  function ky(a) {
    X(a).Ja.classList.remove("ved-hidden");
    Po(a.win);
    const { ra: b, eb: c } = X(a);
    c.getBoundingClientRect().top <= b.getBoundingClientRect().top || ly(a);
    X(a).Ja.classList.add("ved-revealed");
    a.g.g(!0);
    a.j && (yx(a.j, X(a).gb.Ta), a.tb && jy(a));
  }
  function my(a) {
    return Kx(a.win, a.g);
  }
  function ny(a, b) {
    const c = new U(b());
    hp(a.H).listen(() => void c.g(b()));
    return Zo(c);
  }
  function oy(a) {
    const { ra: b, Nd: c } = X(a);
    return ny(
      a,
      () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top
    );
  }
  function py(a) {
    const { ra: b, Nd: c } = X(a);
    return ny(
      a,
      () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1
    );
  }
  function qy(a) {
    const { ra: b } = X(a);
    return ny(a, () => b.scrollTop === b.scrollHeight - b.clientHeight);
  }
  function ry(a) {
    return $o(oy(a), qy(a));
  }
  function sy(a) {
    const { ra: b, eb: c } = X(a);
    return ny(
      a,
      () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1
    );
  }
  function ly(a) {
    X(a).eb.classList.add("ved-snap-point-top");
    var b = ty(a, X(a).eb);
    X(a).ra.scrollTop = b;
    uy(a);
  }
  function vy(a) {
    bp(oy(a), !0, () => {
      const { lg: b, Tc: c } = X(a);
      b.classList.remove("ved-hidden");
      c.classList.add("ved-with-background");
    });
    bp(oy(a), !1, () => {
      const { lg: b, Tc: c } = X(a);
      b.classList.add("ved-hidden");
      c.classList.remove("ved-with-background");
    });
  }
  function wy(a) {
    const b = Fp(a.win, X(a).xe);
    Ip(b).i(() => void xy(a));
    Ro(a, b);
  }
  function yy(a) {
    bp(zy(a), !0, () => {
      X(a).Rg.classList.remove("ved-hidden");
    });
    bp(zy(a), !1, () => {
      X(a).Rg.classList.add("ved-hidden");
    });
  }
  function Ay(a) {
    const b = () => void jp(a.F),
      { bf: c, eb: d, zi: e } = X(a);
    c.addEventListener("click", b);
    d.addEventListener("click", b);
    e.addEventListener("click", b);
    dp(By(a), !0, b);
  }
  function Cy(a) {
    dp(my(a), !1, () => {
      ly(a);
      X(a).Ja.classList.add("ved-hidden");
    });
  }
  function uy(a) {
    cp(a.l, !1, () => void jp(a.H));
  }
  function xy(a) {
    if (!a.l.P) {
      var { ag: b, xe: c } = X(a),
        d = c.getBoundingClientRect().height;
      d = Math.max(Dy(a), d);
      a.l.g(!0);
      var e = Ey(a);
      b.style.setProperty("height", `${d}px`);
      e();
      a.win.requestAnimationFrame(() => {
        a.win.requestAnimationFrame(() => {
          a.l.g(!1);
        });
      });
    }
  }
  function zy(a) {
    const { ra: b, eb: c } = X(a);
    return ny(
      a,
      () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top
    );
  }
  function By(a) {
    return Yo(a.A.map(hq), Fy(a));
  }
  function Fy(a) {
    return ny(a, () => 0 === X(a).ra.scrollTop);
  }
  function ty(a, b) {
    ({ Tc: a } = X(a));
    a = a.getBoundingClientRect().top;
    return b.getBoundingClientRect().top - a;
  }
  function Gy(a, b) {
    a.A.g(!0);
    const { Tc: c, ra: d } = X(a);
    d.scrollTop = 0;
    d.classList.add("ved-scrolling-paused");
    c.style.setProperty("margin-top", `-${b}px`);
    return () => void Hy(a, b);
  }
  function Hy(a, b) {
    const { Tc: c, ra: d } = X(a);
    c.style.removeProperty("margin-top");
    d.classList.remove("ved-scrolling-paused");
    X(a).ra.scrollTop = b;
    uy(a);
    a.A.g(!1);
  }
  function Ey(a) {
    const b = X(a).ra.scrollTop;
    Gy(a, b);
    return () => void Hy(a, b);
  }
  function Dy(a) {
    const { ra: b, Nd: c, ag: d, eb: e } = X(a);
    a = b.getBoundingClientRect();
    const f = c.getBoundingClientRect();
    var g = d.getBoundingClientRect();
    const h = e.getBoundingClientRect();
    g = g.top - f.top;
    return Math.max(
      a.height - h.height - g,
      Math.min(a.height, a.bottom - f.top) - g
    );
  }
  var Iy = class extends T {
    constructor(a, b, c, d, e = !0) {
      super();
      this.win = a;
      this.C = b;
      this.I = c;
      this.j = d;
      this.tb = e;
      this.F = new kp();
      this.H = new kp();
      this.g = new U(!1);
      this.A = new U(!1);
      this.l = new U(!1);
    }
    K() {
      ly(this);
      vy(this);
      wy(this);
      yy(this);
      Ay(this);
      Cy(this);
      X(this).ra.addEventListener("scroll", () => void uy(this));
    }
    i() {
      const a = this.C.gb.Ta,
        b = a.parentNode;
      b && b.removeChild(a);
      this.j?.Zd();
      super.i();
    }
  };
  function Jy(a, b, c) {
    const d = Jx(a, c.De),
      e = d.shadowRoot;
    e.appendChild(
      ue(
        new he(a.document),
        Vr(
          cy({
            hj: 100 * c.ef,
            Ai: 100 * c.Me,
            zIndex: c.zIndex,
            me: 0.5,
            Ia: c.Ia || !1,
          })
        )
      )
    );
    const f = Gx("ved-drawer-container", e);
    c.Ie?.i((g) => {
      f.setAttribute("aria-label", g);
    });
    c = Gx("ved-content-container", e);
    c.appendChild(b);
    Po(a);
    return {
      Ja: f,
      bf: Gx("ved-modal-background", e),
      mh: Gx("ved-ui-revealer", e),
      ra: Gx("ved-scroller", e),
      Tc: Gx("ved-scrolled-stack", e),
      zi: Gx("ved-fully-closed-anchor", e),
      eb: Gx("ved-partially-extended-anchor", e),
      ag: Gx("ved-content-sizer", e),
      xe: c,
      Zn: Gx("ved-moving-handle", e),
      Nd: Gx("ved-moving-handle-holder", e),
      yi: Gx("ved-fixed-handle", e),
      lg: Gx("ved-fixed-handle-holder", e),
      Rg: Gx("ved-over-scroll-block", e),
      gb: d,
    };
  }
  function Ky(a, b, c) {
    var d = lx(new qx(a), c.zIndex - 1);
    b = Jy(a, b, c);
    const e = c.Ce ? null : new zx(a);
    var f = b.yi;
    f = new Bp(new sp(a, f), new pp(f));
    var g = f.g;
    g.A.addEventListener("mousedown", g.G);
    g.l.addEventListener("mouseup", g.B);
    g.l.addEventListener("mousemove", g.C, { passive: !1 });
    g = f.i;
    g.i.addEventListener("touchstart", g.C);
    g.i.addEventListener("touchend", g.A);
    g.i.addEventListener("touchmove", g.B, { passive: !1 });
    b = new Iy(a, b, new iy(f), e, c.tb);
    b.K();
    d = new Ly(a, b, Ax(a), d);
    Ro(d, b);
    d.K();
    c.qb &&
      ((a = Rx(a))
        ? My(d, a, c.cf)
        : c.cf?.(Error("Unable to create closeNavigator")));
    return d;
  }
  function My(a, b, c) {
    dp(a.g.g, !0, () => {
      try {
        Tx(b);
      } catch (d) {
        c?.(d);
      }
    });
    dp(a.g.g, !1, () => {
      try {
        b.g && (b.g(), (b.g = null));
      } catch (d) {
        c?.(d);
      }
    });
    hp(b.j).listen(() => void a.collapse());
    Ro(a, b);
  }
  function Ny(a) {
    dp(Yo(ry(a.g), sy(a.g)), !0, () => {
      X(a.g).eb.classList.remove("ved-snap-point-top");
    });
    bp(py(a.g), !0, () => {
      X(a.g).ra.classList.add("ved-no-snap");
    });
    bp(py(a.g), !1, () => {
      X(a.g).ra.classList.remove("ved-no-snap");
    });
    dp(py(a.g), !1, () => {
      var b = a.g;
      var c = X(b).Nd;
      c = Gy(b, ty(b, c));
      b.win.setTimeout(c, 100);
    });
  }
  function Oy(a) {
    const b = a.g.I;
    ey(b).listen((c) => {
      c = -c;
      if (0 < c) {
        const { mh: d } = X(a.g);
        d.classList.add("ved-no-animation");
        d.style.setProperty("transform", `translateY(${c}px)`);
      } else
        ({ mh: c } = X(a.g)),
          c.classList.remove("ved-no-animation"),
          c.style.removeProperty("transform");
    });
    hy(b).listen((c) => {
      30 < -c && a.collapse();
    });
  }
  var Ly = class extends T {
    constructor(a, b, c, d) {
      super();
      this.win = a;
      this.g = b;
      dp(my(b), !0, () => {
        Cx(c);
        rx(d);
      });
      dp(my(b), !1, () => {
        Ex(c);
        sx(d);
      });
    }
    show({ gg: a = !1 } = {}) {
      if (this.B) throw Error("Cannot show drawer after disposal");
      ky(this.g);
      a &&
        dp(my(this.g), !1, () => {
          this.ka();
        });
    }
    collapse() {
      var a = this.g;
      X(a).Ja.classList.remove("ved-revealed");
      a.g.g(!1);
      a.j?.Zd();
    }
    isVisible() {
      return my(this.g);
    }
    K() {
      hp(this.g.F).listen(() => {
        this.collapse();
      });
      Ny(this);
      Oy(this);
      Po(this.win);
    }
  };
  var Py = class {
    constructor(a, b, c) {
      this.position = a;
      this.Bb = b;
      this.Qe = c;
    }
  };
  function Qy(a, b) {
    this.start = a < b ? a : b;
    this.end = a < b ? b : a;
  }
  Qy.prototype.Fc = function () {
    return this.end - this.start;
  };
  function Ry(a, b, c) {
    var d = S(a);
    d = new Py(
      b.hc.Kg(b.mb),
      b.Bb + 2 * b.mb,
      Math.min(d, b.Jd) - b.hc.vd() + 2 * b.mb
    );
    d = d.position.bg(a, d.Bb, d.Qe);
    var e = qo(a),
      f = S(a);
    c = Sy(
      a,
      new gk(
        Wd(d.top, 0, f - 1),
        Wd(d.right, 0, e - 1),
        Wd(d.bottom, 0, f - 1),
        Wd(d.left, 0, e - 1)
      ),
      c
    );
    f = Ty(c);
    let g = d.top;
    e = [];
    for (let h = 0; h < f.length; h++)
      f[h].start > g && e.push(new Qy(g, f[h].start)), (g = f[h].end);
    g < d.bottom && e.push(new Qy(g, d.bottom));
    a = S(a);
    d = [];
    for (f = e.length - 1; 0 <= f; f--)
      d.push(new Qy(a - e[f].end, a - e[f].start));
    a: {
      for (const h of d)
        if (
          ((a = h.start + b.mb),
          a > b.hc.vd() + b.We
            ? (a = null)
            : ((d = Math.min(h.end - b.mb, b.Jd) - a),
              (a = d < b.Ye ? null : { position: b.hc.th(a), Oc: d })),
          a)
        ) {
          b = a;
          break a;
        }
      b = null;
    }
    return { qe: b, Sn: c };
  }
  function Sy(a, b, c) {
    const d = fx(new hx(a), b);
    c.forEach((e) => void d.delete(e));
    return d;
  }
  function Ty(a) {
    return Array.from(a)
      .map(Uy)
      .sort((b, c) => b.start - c.start);
  }
  function Uy(a) {
    a = a.getBoundingClientRect();
    return new Qy(a.top, a.bottom);
  }
  function Vy({ ca: a, ua: b }) {
    return new Wy(a, b);
  }
  var Wy = class {
    constructor(a, b) {
      this.ca = a;
      this.ua = b;
    }
    Kg(a) {
      return new Wy(this.ca - a, this.ua - a);
    }
    bg(a, b, c) {
      a = S(a) - this.ca - c;
      return new gk(a, this.ua + b, a + c, this.ua);
    }
    Pf(a) {
      a.bottom = `${this.ca}px`;
      a.left = `${this.ua}px`;
      a.right = "";
    }
    ng() {
      return 0;
    }
    vd() {
      return this.ca;
    }
    th(a) {
      return new Wy(a, this.ua);
    }
  };
  function Xy({ ca: a, Fa: b }) {
    return new Yy(a, b);
  }
  var Yy = class {
    constructor(a, b) {
      this.ca = a;
      this.Fa = b;
    }
    Kg(a) {
      return new Yy(this.ca - a, this.Fa - a);
    }
    bg(a, b, c) {
      var d = qo(a);
      a = S(a) - this.ca - c;
      d = d - this.Fa - b;
      return new gk(a, d + b, a + c, d);
    }
    Pf(a) {
      a.bottom = `${this.ca}px`;
      a.right = `${this.Fa}px`;
      a.left = "";
    }
    ng() {
      return 1;
    }
    vd() {
      return this.ca;
    }
    th(a) {
      return new Yy(a, this.Fa);
    }
  };
  function Zy(a) {
    const b = a.ti,
      c = a.Yh,
      d = a.Rh,
      e = a.Bj,
      f = a.Sh;
    a = a.Qh;
    return $r(
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' +
        W(16) +
        "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
        W(d) +
        "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " +
        W(a) +
        "px; border-radius: " +
        W(16) +
        "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " +
        W(a) +
        "px; margin: 0; border-radius: " +
        W(16 + a) +
        "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
        W(d) +
        "px; height: " +
        W(d) +
        "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " +
        W(d) +
        "px; margin-bottom: " +
        W(f) +
        "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " +
        W(d) +
        "px; width: " +
        W(d) +
        "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
        W(d - 6) +
        "px; width: " +
        W(d - 6) +
        "px; border-radius: " +
        W(d / 2) +
        "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
        W(e) +
        "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " +
        W(d) +
        "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
        W(16) +
        "px; max-width: calc(90vw - " +
        W(2 * d) +
        "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " +
        W(d + 10 + a) +
        "px;}.ft-right-pos .ft-reg-bubble {right: " +
        W(d + 10 + a) +
        "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
        W(2 * d) +
        'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
        V(b) +
        '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' +
        V(c) +
        '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>'
    );
  }
  function $y(a) {
    const b = a.googleIconName,
      c = a.backgroundColorCss,
      d = a.iconColorCss;
    return $r(
      '<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' +
        V(a.ariaLabel) +
        '" style="background-color: ' +
        V(W(c)) +
        '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' +
        V(W(d)) +
        '" aria-hidden="true">' +
        Zr(b) +
        '</span></button><span class="ft-button-corner-info"></span></div>'
    );
  }
  const az = [
    "Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    "Google Sans Text:400,500,700",
  ];
  function bz(a, b) {
    a = new cz(a, b, dz(a, b));
    a.K();
    return a;
  }
  function ez() {
    var { uc: a } = { uc: 2 };
    return 1 < a ? 50 : 120;
  }
  function fz(a, b, c) {
    0 === gz(a) && b.classList.remove("ft-collapsed");
    hz(b, c);
    Po(a.win);
    b.classList.remove("ft-collapsed");
    iz(a);
    return () => void jz(a, b, c);
  }
  function kz(a) {
    0 === lz(a.g.na.Kd).length
      ? (a.l.P?.qj(),
        a.l.g(null),
        a.g.na.Pe.g(!1),
        a.g.na.xg.g(!1),
        a.g.na.Se.g(!1))
      : (a.g.na.Pe.g(!0), mz(a));
  }
  function nz(a, { Bh: b = 0, Rn: c = 0 }) {
    b = Math.max(lz(a.g.Gb).length + b, 0);
    c = Math.max(lz(a.g.lb).length + c, 0);
    const d = b + c;
    let e = 50 * d;
    0 < b && 0 < c && (e += 11);
    e += 10 * Math.max(0, d - 1);
    d >= a.j.uc && (e += 60);
    1 < d && (e += 10);
    return e;
  }
  function gz(a) {
    const b = a.g.lb;
    return lz(a.g.Gb).length + lz(b).length;
  }
  function iz(a) {
    const b = a.g.lb,
      c = a.g.separator;
    0 < lz(a.g.Gb).length && 0 < lz(b).length
      ? c.classList.remove("ft-collapsed")
      : c.classList.add("ft-collapsed");
    gz(a) >= a.j.uc ? a.g.wg.g(!0) : a.g.wg.g(!1);
    1 < gz(a) ? a.g.qg.g(!0) : a.g.qg.g(!1);
    0 < gz(a) ? a.g.isVisible.g(!0) : a.g.isVisible.g(!1);
    oz(a);
    pz(a);
  }
  function jz(a, b, c) {
    b.classList.contains("ft-removing") ||
      (b.classList.add("ft-removing"),
      b.classList.add("ft-collapsed"),
      iz(a),
      a.win.setTimeout(() => {
        c.removeChild(b);
      }, 750));
  }
  function oz(a) {
    const b = lz(a.g.Gb).concat(lz(a.g.lb));
    b.forEach((c) => {
      c.classList.remove("ft-last-button");
    });
    gz(a) >= a.j.uc || b[b.length - 1]?.classList.add("ft-last-button");
  }
  function pz(a) {
    const b = lz(a.g.Gb)
      .concat(lz(a.g.lb))
      .filter((c) => !c.classList.contains("ft-reg-button"));
    a.F.g(0 < b.length);
  }
  function qz(a) {
    Co(a.g.na.Kd.children, (b) => {
      const c = a.g.na.Td;
      jz(a, b, a.g.na.Kd);
      const d = c.get(b);
      c.delete(b);
      d?.isDismissed.g(!0);
    });
    kz(a);
  }
  function mz(a) {
    if (!a.l.P) {
      var b = rz(a.win, {
        googleIconName: "verified_user",
        ariaLabel: O(a.j.La, 2),
        orderingIndex: 0,
        onClick: () => {
          a.g.na.xg.g(!a.g.na.isVisible.P);
          for (const [, c] of a.g.na.Td) c.Ag = !0;
          a.g.na.Se.g(!1);
        },
        backgroundColorCss: "#fff",
      });
      b.cd.classList.add("ft-reg-button");
      fz(a, b.cd, a.g.lb);
      ep(b.Qi, a.g.na.isVisible);
      a.l.g({ Vn: b, qj: () => void jz(a, b.cd, a.g.lb) });
    }
  }
  function sz(a) {
    var b = a.g.na.Se,
      c = b.g;
    a: {
      for ([, d] of a.g.na.Td)
        if (((a = d), a.showUnlessUserInControl && !a.Ag)) {
          var d = !0;
          break a;
        }
      d = !1;
    }
    c.call(b, d);
  }
  function tz(a) {
    a.g.na.Xh.listen(() => {
      qz(a);
    });
  }
  var cz = class extends T {
    constructor(a, b, c) {
      super();
      this.win = a;
      this.j = b;
      this.g = c;
      this.l = new U(null);
      this.F = new U(!1);
    }
    addButton(a) {
      a = rz(this.win, a);
      return fz(this, a.cd, this.g.Gb);
    }
    addRegulatoryMessage(a) {
      const b = this.g.na.Kd,
        c = uz(this.win, a);
      hz(c.Eg, b);
      this.g.na.Td.set(c.Eg, c);
      kz(this);
      return {
        showUnlessUserInControl: () => {
          c.showUnlessUserInControl = !0;
          sz(this);
        },
        hideUnlessUserInControl: () => {
          c.showUnlessUserInControl = !1;
          sz(this);
        },
        isDismissed: gp(c.isDismissed),
      };
    }
    H() {
      return Zo(this.l.map((a) => null != a));
    }
    C() {
      return Zo(this.F);
    }
    A() {
      return [this.g.container];
    }
    i() {
      const a = this.g.gb.Ta;
      a.parentNode?.removeChild(a);
      super.i();
    }
    K() {
      Pp(this.win, az);
      ep(this.g.Hj, this.j.Pc);
      this.win.document.body.appendChild(this.g.gb.Ta);
      tz(this);
    }
  };
  function dz(a, b) {
    const c = nw(a),
      d = c.shadowRoot;
    d.appendChild(
      ue(
        new he(a.document),
        Vr(
          Zy({ ti: O(b.La, 1), Yh: O(b.La, 3), Rh: 50, Bj: 11, Sh: 10, Qh: 5 })
        )
      )
    );
    const e = Ix("ft-container", d),
      f = Ix("ft-expand-toggle", d),
      g = Ix("ft-expand-toggle-container", d),
      h = new U(null);
    h.i((p) => {
      e.style.zIndex = String(p ?? 2147483647);
    });
    const k = new U(!0);
    bp(k, !0, () => {
      e.classList.remove("ft-collapsed");
      f.setAttribute("aria-expanded", "true");
    });
    bp(k, !1, () => {
      e.classList.add("ft-collapsed");
      f.setAttribute("aria-expanded", "false");
    });
    f.addEventListener("click", () => {
      k.g(!k.P);
    });
    const l = new U(!1);
    bp(l, !0, () => {
      g.classList.remove("ft-collapsed");
      e.classList.add("ft-toolbar-collapsible");
    });
    bp(l, !1, () => {
      g.classList.add("ft-collapsed");
      e.classList.remove("ft-toolbar-collapsible");
      k.g(!0);
    });
    const m = new U(!1);
    bp(m, !0, () => {
      e.classList.add("ft-multiple-buttons");
    });
    bp(m, !1, () => {
      e.classList.remove("ft-multiple-buttons");
    });
    b.position.i((p) => {
      if (p) {
        p.Pf(e.style);
        p = p.ng();
        switch (p) {
          case 0:
            e.classList.add("ft-left-pos");
            e.classList.remove("ft-right-pos");
            break;
          case 1:
            e.classList.add("ft-right-pos");
            e.classList.remove("ft-left-pos");
            break;
          default:
            throw Error(`Unknown HorizontalAnchoring: ${p}`);
        }
        Po(a);
      }
    });
    const n = new U(!1);
    b = Yo(
      vz(a, d),
      n,
      b.position.map((p) => null !== p)
    );
    bp(b, !0, () => {
      e.classList.remove("ft-hidden");
    });
    bp(b, !1, () => {
      e.classList.add("ft-hidden");
    });
    b = wz(a, Ix("ft-reg-bubble", d));
    return {
      container: e,
      Gb: Ix("ft-button-holder", d),
      lb: Ix("ft-bottom-button-holder", d),
      separator: Ix("ft-separator", d),
      gb: c,
      Hj: h,
      Yn: k,
      wg: l,
      qg: m,
      isVisible: n,
      na: b,
    };
  }
  function wz(a, b) {
    const c = new U(!1),
      d = new U(!1),
      e = $o(c, d);
    bp(e, !0, () => {
      b.classList.remove("ft-collapsed");
    });
    bp(e, !1, () => {
      b.classList.add("ft-collapsed");
    });
    const f = new U(!1);
    bp(f, !0, () => {
      b.classList.remove("ft-no-messages");
    });
    bp(f, !1, () => {
      b.classList.add("ft-no-messages");
    });
    const g = Ix("ft-reg-bubble-close", b),
      h = new kp();
    g.addEventListener("click", () => {
      jp(h);
    });
    const k = Ix("ft-reg-message-holder", b);
    Ip(Fp(a, k)).i(() => {
      b.style.height = `${k.offsetHeight}px`;
    });
    return {
      Kd: k,
      xg: c,
      Se: d,
      isVisible: e,
      Pe: f,
      Td: new Map(),
      Xh: hp(h),
    };
  }
  function rz(a, b) {
    const c = ue(
      new he(a.document),
      Vr(
        $y({
          googleIconName: b.googleIconName,
          ariaLabel: b.ariaLabel,
          backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
          iconColorCss: b.iconColorCss || "#3c4043",
        })
      )
    );
    if (void 0 !== b.cornerNumber) {
      const d = Wd(Math.round(b.cornerNumber), 0, 99);
      Ix("ft-button-corner-info", c).appendChild(
        a.document.createTextNode(String(d))
      );
      c.classList.add("ft-show-corner-info");
    }
    c.orderingIndex = b.orderingIndex;
    b.onClick && Hx("BUTTON", c).addEventListener("click", b.onClick);
    a = new U(!1);
    bp(a, !0, () => {
      c.classList.add("ft-highlighted");
    });
    bp(a, !1, () => {
      c.classList.remove("ft-highlighted");
    });
    return { cd: c, Qi: a };
  }
  function uz(a, b) {
    a = new he(a.document);
    var c = $r(
      '<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>'
    );
    a = ue(a, Vr(c));
    c = Ix("ft-reg-message-button", a);
    b.regulatoryMessage.actionButton
      ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText),
        c.addEventListener("click", b.regulatoryMessage.actionButton.onClick))
      : c.classList.add("ft-display-none");
    c = Ix("ft-reg-message-info", a);
    b.regulatoryMessage.informationText
      ? c.appendChild(b.regulatoryMessage.informationText)
      : c.classList.add("ft-display-none");
    a.orderingIndex = b.orderingIndex;
    return {
      Eg: a,
      showUnlessUserInControl: !1,
      Ag: !1,
      isDismissed: new U(!1),
    };
  }
  function hz(a, b) {
    a: {
      var c = Array.from(b.children);
      for (let d = 0; d < c.length; ++d)
        if (c[d].orderingIndex >= a.orderingIndex) {
          c = d;
          break a;
        }
      c = c.length;
    }
    b.insertBefore(a, b.childNodes[c] || null);
  }
  function lz(a) {
    return Array.from(a.children).filter(
      (b) => !b.classList.contains("ft-removing")
    );
  }
  function vz(a, b) {
    const c = new U(!1),
      d = Ix("ft-symbol-font-load-test", b);
    b = Ix("ft-symbol-reference", d);
    const e = Ix("ft-text-reference", d),
      f = Fp(a, b);
    cp(
      Ip(f).map((g) => 0 < g.width && g.width < e.offsetWidth / 2),
      !0,
      () => {
        c.g(!0);
        d.parentNode?.removeChild(d);
        f.ka();
      }
    );
    return c;
  }
  function xz(a) {
    const b = new kp(),
      c = vp(a, 2500, () => void jp(b));
    return new yz(a, () => void zz(a, () => void c()), hp(b));
  }
  function Az(a) {
    const b = new MutationObserver(() => {
      a.g();
    });
    b.observe(a.win.document.documentElement, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["class", "style"],
    });
    So(a, () => void b.disconnect());
  }
  function Bz(a) {
    a.win.addEventListener("resize", a.g);
    So(a, () => void a.win.removeEventListener("resize", a.g));
  }
  var yz = class extends T {
    constructor(a, b, c) {
      super();
      this.win = a;
      this.g = b;
      this.l = c;
      this.j = !1;
    }
  };
  function zz(a, b) {
    b();
    a.setTimeout(b, 1500);
  }
  function Cz(a) {
    return a.g[a.g.length - 1];
  }
  var Ez = class {
    constructor() {
      this.j = Dz;
      this.g = [];
      this.i = new Set();
    }
    add(a) {
      if (this.i.has(a)) return !1;
      const b = ib(this.g, a, this.j);
      this.g.splice(0 <= b ? b : -b - 1, 0, a);
      this.i.add(a);
      return !0;
    }
    first() {
      return this.g[0];
    }
    has(a) {
      return this.i.has(a);
    }
    delete(a) {
      db(this.g, (b) => b === a);
      return this.i.delete(a);
    }
    clear() {
      this.i.clear();
      return this.g.splice(0, this.g.length);
    }
    size() {
      return this.g.length;
    }
  };
  function Fz(a) {
    var b = a.Oc.P;
    let c;
    for (; a.j.ci() > b && (c = a.i.first()); ) {
      var d = a,
        e = c;
      Gz(d, e);
      d.g.add(e);
    }
    for (; (d = Cz(a.g)) && a.j.Fi() <= b; ) Hz(a, d);
    for (; (d = Cz(a.g)) && (c = a.i.first()) && d.priority > c.priority; )
      (b = a), (e = c), Gz(b, e), b.g.add(e), Hz(a, d);
  }
  function Hz(a, b) {
    a.g.delete(b);
    a.i.add(b) && (b.yf = a.j.addButton(b.buttonSpec));
    b.isInToolbar.g(!0);
  }
  function Gz(a, b) {
    b.yf && b.yf();
    b.yf = void 0;
    a.i.delete(b);
    b.isInToolbar.g(!1);
  }
  var Iz = class {
    constructor(a, b) {
      this.Oc = a;
      this.j = b;
      this.g = new Ez();
      this.i = new Ez();
      this.l = 0;
      this.Oc.listen(() => void Fz(this));
    }
    addButton(a) {
      const b = {
        buttonSpec: a.buttonSpec,
        priority: a.priority,
        Gf: this.l++,
        isInToolbar: new U(!1),
      };
      this.g.add(b);
      Fz(this);
      return {
        isInToolbar: gp(Zo(b.isInToolbar)),
        removeCallback: () => {
          Gz(this, b);
          this.g.delete(b);
          Fz(this);
        },
      };
    }
  };
  function Dz(a, b) {
    return a.priority === b.priority ? b.Gf - a.Gf : a.priority - b.priority;
  }
  function Jz(a) {
    a = new Kz(a);
    a.K();
    return a;
  }
  function Lz(a) {
    if (!Fx(a.win)) {
      if (a.j.P) {
        const b = yo(a.win);
        if (b > a.g + 100 || b < a.g - 100) a.j.g(!1), (a.g = so(a.win));
      }
      a.l && a.win.clearTimeout(a.l);
      a.l = a.win.setTimeout(() => void Mz(a), 200);
    }
  }
  function Mz(a) {
    if (!Fx(a.win)) {
      var b = so(a.win);
      a.g && a.g > b && (a.g = b);
      b = yo(a.win);
      b >= a.g - 100 && ((a.g = Math.max(a.g, b)), a.j.g(!0));
    }
  }
  var Kz = class extends T {
    constructor(a) {
      super();
      this.win = a;
      this.j = new U(!1);
      this.g = 0;
      this.l = null;
      this.A = () => void Lz(this);
    }
    K() {
      this.win.addEventListener("scroll", this.A);
      this.g = so(this.win);
      Mz(this);
    }
    i() {
      this.win.removeEventListener("scroll", this.A);
      this.j.g(!1);
      super.i();
    }
  };
  function Nz(a) {
    if (!a.g) {
      const b = Jz(a.win);
      a.g = Zo(b.j);
      Ro(a, b);
    }
    return a.g;
  }
  function Oz(a, b) {
    const c = Nz(a),
      d = a.j.addRegulatoryMessage(b.messageSpec),
      e = bp(c, !0, () => void d.showUnlessUserInControl()),
      f = bp(c, !1, () => void d.hideUnlessUserInControl());
    bp(Wo(d.isDismissed), !0, () => {
      e();
      f();
    });
  }
  var Pz = class extends T {
    constructor(a, b) {
      super();
      this.win = a;
      this.j = b;
      this.g = null;
    }
    addRegulatoryMessage(a) {
      cp(Nz(this), !0, () => void Oz(this, a));
    }
  };
  function Qz(a, b) {
    a.googFloatingToolbarManager ||
      (a.googFloatingToolbarManager = new Rz(a, b));
    return a.googFloatingToolbarManager;
  }
  function Sz(a) {
    a.g ||
      ((a.g = Tz(a.win, a.Lb, a.Pc)),
      Ro(a, a.g.Mb),
      Ro(a, a.g.Zg),
      Uz(a),
      Vz(a, a.g.Mb));
    return a.g;
  }
  function Wz(a) {
    var b = [];
    a.g?.Mb?.C().A()
      ? (b.push(() => Xz(a)), b.push(() => Yz(a)))
      : (b.push(() => Yz(a)), b.push(() => Xz(a)));
    a.g?.Mb?.H()?.A() &&
      b.push(() => {
        const c = S(a.win);
        return { position: Vy({ ca: Math.floor(c / 3), ua: 10 }), Oc: 0 };
      });
    for (const c of b) if ((b = c())) return b;
    return null;
  }
  function Uz(a) {
    null === a.Pc.P && a.g?.position.g(Wz(a));
  }
  function Vz(a, b) {
    const c = xz(a.win);
    c.j || (Az(c), Bz(c), (c.j = !0));
    c.l.listen(() => void Uz(a));
    Ro(a, c);
    b.H().listen(() => void Uz(a));
    b.C().listen(() => void Uz(a));
    a.Pc.listen(() => void Uz(a));
  }
  function Xz(a) {
    var b = a.win;
    const c = S(a.win);
    return Ry(
      b,
      {
        hc: Xy({ ca: 50, Fa: 10 }),
        We: Math.floor(c / 3),
        Bb: 60,
        Ye: ez(),
        Jd: Math.floor(c / 2),
        mb: 20,
      },
      [...(a.g?.Mb.A() ?? []), a.win.document.body]
    ).qe;
  }
  function Yz(a) {
    var b = a.win;
    const c = S(a.win);
    return Ry(
      b,
      {
        hc: Vy({ ca: 50, ua: 10 }),
        We: Math.floor(c / 3),
        Bb: 60,
        Ye: ez(),
        Jd: Math.floor(c / 2),
        mb: 40,
      },
      [...(a.g?.Mb.A() ?? []), a.win.document.body]
    ).qe;
  }
  class Rz extends T {
    constructor(a, b) {
      super();
      this.win = a;
      this.Lb = b;
      this.g = null;
      this.Pc = Zz(this.win, this);
    }
    addButton(a) {
      return Sz(this).cj.addButton(a);
    }
    addRegulatoryMessage(a) {
      Sz(this).Zg.addRegulatoryMessage(a);
    }
  }
  function Tz(a, b, c) {
    const d = new U(null),
      e = bz(a, {
        uc: 2,
        position: d.map((f) => f?.position ?? null),
        La: b,
        Pc: c,
      });
    b = new Iz(
      d.map((f) => f?.Oc || 0),
      {
        addButton: (f) => e.addButton(f),
        ci: () => nz(e, {}),
        Fi: () => nz(e, { Bh: 1 }),
      }
    );
    a = new Pz(a, { addRegulatoryMessage: (f) => e.addRegulatoryMessage(f) });
    return { Mb: e, position: d, cj: b, Zg: a };
  }
  function Zz(a, b) {
    const c = new qx(a),
      d = new U(null),
      e = (f) => void d.g(f);
    So(b, () => {
      px(c, e);
    });
    c.g.maxZIndexListeners.push(e);
    d.g(ox(c));
    return d;
  }
  function $z(a) {
    return Qz(a.win, a.La);
  }
  var aA = class {
    constructor(a, b) {
      this.win = a;
      this.La = b;
    }
  };
  function bA(a) {
    if (a.H) {
      var b = $z(new aA(a.g, a.H)).addButton({
        buttonSpec: {
          googleIconName: "search",
          ariaLabel: a.Ga,
          orderingIndex: 0,
          onClick: () => {
            cA(a);
          },
        },
        priority: 0,
      });
      cp(Wo(b.isInToolbar), !0, () => {
        dA(a);
      });
      a.g.setTimeout(() => {
        b.isInToolbar.getValue() || Nr(a.j, "pfmsb");
      }, 5e3);
      eA(a);
    } else fA(a);
  }
  function fA(a) {
    var b = gA(a);
    b = sw(new hx(a.g), b);
    b?.className.startsWith("adsbygoogle")
      ? Nr(a.j, "pfeaa")
      : b
      ? Nr(a.j, "pfeofe")
      : (a.Z.appendChild(a.B.Ta),
        a.B.shadowRoot.appendChild(
          fj(
            (() => {
              if (a.l) {
                var c = hA(a),
                  d = {
                    backgroundColor: c.backgroundColor,
                    Qb: c.Qb,
                    offsetTop: c.Ng,
                    df: c.Mg,
                    zIndex: 2147483643,
                  };
                c = d.zIndex;
                var e = d.dj,
                  f = d.offsetTop,
                  g = d.df,
                  h = d.backgroundColor;
                d = d.Qb;
                e = void 0 === e ? 16 : e;
                g = void 0 === g ? 2 : g;
                d = void 0 === d ? "white" : d;
                h =
                  "<style>.autoprose-search-button {background: " +
                  W(void 0 === h ? "#000" : h) +
                  "; border-radius: ";
                h +=
                  W(24) +
                  "px;" +
                  (f ? "top: " + W(f) + "%;" : "bottom: " + W(g) + "%;") +
                  "border-width: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " +
                  W(48) +
                  "px; position: fixed; right: " +
                  W(e) +
                  "px; width: 48px; z-index: " +
                  W(c) +
                  ';}.autoprose-search-icon {position: relative;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' +
                  ws(d) +
                  "</div></button>";
                c = $r(h);
                return Vr(c);
              }
              c = hA(a);
              var k = {
                Aj: c.zj,
                backgroundColor: c.backgroundColor,
                Qb: c.Qb,
                offsetTop: c.Ng,
                df: c.Mg,
                zIndex: 2147483643,
              };
              c = k.Aj;
              f = k.zIndex;
              g = k.dj;
              h = k.offsetTop;
              d = k.df;
              e = k.backgroundColor;
              k = k.Qb;
              g = void 0 === g ? 16 : g;
              d = void 0 === d ? 2 : d;
              k = void 0 === k ? "white" : k;
              e =
                "<style>.autoprose-search-button {align-items: center; background: " +
                W(void 0 === e ? "#000" : e) +
                "; border-radius: ";
              e +=
                W(24) +
                "px; border-width: 0;" +
                (h ? "top: " + W(h) + "%;" : "bottom: " + W(d) + "%;") +
                "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " +
                W(48) +
                "px; line-height: 1; padding: 0 20px; position: fixed; right: " +
                W(g) +
                "px; z-index: " +
                W(f) +
                ";}.autoprose-search-text {color: " +
                W(k) +
                '; font-family: Google Sans, Roboto, sans-serif; font-size: 16px; margin: 10px; user-select: none;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' +
                ws(k) +
                '</div><div class="autoprose-search-text">' +
                Zr(c) +
                "</div></button>";
              c = $r(e);
              return Vr(c);
            })()
          )
        ),
        (b = iA(a))
          ? (dA(a),
            Rb(b, "click", () => {
              cA(a);
            }))
          : Nr(a.j, "pfmsb"),
        eA(a));
  }
  function cA(a) {
    a.I || (aw(1139, () => a.G.K(), a.g), (a.I = !0));
    Lr(a.j, "click", {});
    jA(a);
  }
  function dA(a) {
    Lr(a.j, "place", { sts: "ok" });
    kA(a);
  }
  function eA(a) {
    a.l &&
      dp(a.C.isVisible(), !1, () => {
        a.i.contentDocument.activeElement.blur();
      });
  }
  function gA(a) {
    let b;
    b = a.l ? 50 : 150;
    var c = a.g.innerHeight;
    const d = a.F ? 20 : 2;
    c = 2 === a.A?.g() ? ((100 - d) / 100) * c : 0.2 * c;
    return { Ti: a.g.innerWidth - 16 - b, Ej: c, width: b, height: 50 };
  }
  function hA(a) {
    const b = a.A?.j() || void 0,
      c = a.A?.l() || void 0;
    let d, e;
    2 === a.A?.g() ? (e = a.F ? 20 : 2) : (d = 20);
    return { backgroundColor: b, Qb: c, Ng: d, Mg: e, zj: a.xa };
  }
  function iA(a) {
    const b = a.B.shadowRoot.querySelectorAll(".autoprose-search-button")[0];
    return b ? b : a.B.shadowRoot.querySelectorAll(".autoprose-searchbox")[0];
  }
  function kA(a) {
    Rb(a.g.top, "message", (b) => {
      b.data &&
        "init" === b.data.action &&
        "AutoProseVariant" === b.data.adChannel &&
        ((b = lA(a)), Gs(a.G, b), mA(a), nA(a));
    });
  }
  function jA(a) {
    mA(a);
    a.C.show();
    nA(a);
  }
  function lA(a) {
    if ((a = a.i.contentDocument?.getElementsByTagName("input")[0])) return a;
    console.warn("searchbox missing");
    return null;
  }
  function mA(a) {
    const b = new ResizeObserver(async (d) => {
        a.i.height = 0;
        await new Promise((e) => a.g.requestAnimationFrame(e));
        a.i.height = d[0].target.scrollHeight;
      }),
      c = () => {
        const d = a.i.contentDocument?.documentElement;
        d
          ? b.observe(d)
          : (console.warn("iframe body missing"), setTimeout(c, 1e3));
      };
    c();
  }
  function nA(a) {
    a.C.isVisible() && lA(a)?.focus({ preventScroll: !0 });
  }
  var oA = class {
    constructor(a, b, c, d, e, f, g, h) {
      this.g = a;
      this.l = (this.ea = h) ? 500 > this.g.innerWidth : 2 === qf();
      this.F = !!e?.C();
      this.Qa = !!e?.G();
      this.I = !1;
      this.Z = c;
      this.B = nw(this.g);
      this.j = d;
      c = e?.B();
      this.pa = c?.g() || "en";
      this.Pa = c?.j() || "Search results from ${website}";
      this.xa = c?.A() || "Search";
      this.Ga = c?.l() || "Open AutoSearch";
      this.T = b.replace("ca", "partner");
      this.M = new he(window.document);
      this.i = te(this.M, "IFRAME");
      this.G = new Hs(
        this.i,
        e?.A() || "",
        "auto-prose",
        this.T,
        "AutoProseVariant",
        a.location,
        this.pa,
        this.Pa,
        f,
        !1,
        !0,
        !0
      );
      a = this.i;
      this.C = this.l
        ? Ky(this.g, a, {
            ef: 0.95,
            Me: 0.95,
            zIndex: 2147483645,
            qb: !0,
            nd: !0,
            tb: !1,
            Ia: !0,
          })
        : Ux(this.g, a, {
            Cc: "min(65vw, 768px)",
            sc: "",
            Bc: !1,
            zIndex: 2147483645,
            qb: !0,
            nd: !0,
            tb: !1,
            Vd: !1,
            Ia: !0,
          });
      this.A = this.l ? e?.l() : e?.j();
      this.H = g;
    }
    K() {
      this.Qa ? bA(this) : fA(this);
    }
  };
  function pA(a, b) {
    for (var c = 0; c < b.length; c++) a.za(b[c]);
    return a;
  }
  function qA(a, b) {
    a.j = a.j ? a.j : b;
    return a;
  }
  class rA {
    constructor(a) {
      this.C = {};
      this.C.c = a;
      this.A = [];
      this.j = null;
      this.B = [];
      this.F = 0;
    }
    kc(a) {
      this.C.wpc = a;
      return this;
    }
    za(a) {
      for (var b = 0; b < this.A.length; b++) if (this.A[b] == a) return this;
      this.A.push(a);
      return this;
    }
    l(a) {
      var b = Uc(this.C);
      0 < this.F && (b.t = this.F);
      b.err = this.A.join();
      b.warn = this.B.join();
      this.j &&
        ((b.excp_n = this.j.name),
        (b.excp_m = this.j.message && this.j.message.substring(0, 512)),
        (b.excp_s = this.j.stack && pl(this.j.stack, "")));
      b.w = 0 < a.innerWidth ? a.innerWidth : null;
      b.h = 0 < a.innerHeight ? a.innerHeight : null;
      return b;
    }
  }
  let sA, tA;
  const uA = new hl(r);
  ((a, b = !0) => {
    sA = a || new ao();
    "number" !== typeof r.google_srt && (r.google_srt = Math.random());
    $n(sA, r.google_srt);
    tA = new rl(sA, b, uA);
    tA.l(!0);
    "complete" == r.document.readyState
      ? r.google_measure_js_timing || fl(uA)
      : uA.g &&
        Rb(r, "load", () => {
          r.google_measure_js_timing || fl(uA);
        });
  })();
  var vA = (a, b) => tA.ic(a, b),
    wA = (a, b) => tA.Ma(a, b),
    xA = (a, b, c) => {
      const d = w(Yn).g();
      !b.eid && d.length && (b.eid = d.toString());
      ql(sA, a, b, !0, c);
    },
    yA = (a, b) => tA.va(a, b, void 0, void 0),
    zA = (a, b, c) => {
      tA.Da(a, b, c);
    };
  function Mr(a, b, c) {
    let d = b.Oa;
    b.Xa && x(ut) && ((d = 1), "r" in c && (c.r += "F"));
    0 >= d || (!b.Sa || "pvc" in c || (c.pvc = zf(a.g)), xA(b.Wa, c, d));
  }
  function AA(a, b, c) {
    c = c.l(a.g);
    b.Sa && (c.pvc = zf(a.g));
    0 <= b.Oa && ((c.r = b.Oa), Mr(a, b, c));
  }
  var BA = class {
    constructor(a) {
      this.g = a;
    }
  };
  function CA(a) {
    const b = a.i?.g()?.g() || 0,
      c = a.j.document,
      d = c.createElement("div");
    d.classList.add("auto-prose-wrapper");
    c.body.appendChild(d);
    aw(
      1138,
      () =>
        new oA(
          a.j,
          a.A,
          d,
          a.l,
          a.i,
          b,
          D(a.g, br, 33)?.g()?.i() ?? null,
          D(a.g, Rq, 25)?.g() || !1
        ).K(),
      a.j
    );
  }
  async function DA(a) {
    await new Promise((b) => {
      setTimeout(() => {
        b(CA(a));
      });
    });
  }
  var EA = class {
    constructor(a, b, c, d) {
      this.j = a;
      this.g = c;
      this.i = D(this.g, Xq, 31);
      this.l = new Or(a, b, this.i || new Xq());
      this.A = d;
    }
  };
  function FA(a, b) {
    Mr(a.i, Hr, {
      ...b,
      evt: "place",
      vh: S(a.win),
      eid: a.g.g()?.g() || 0,
      hl: a.g.j()?.g() || "",
    });
  }
  function GA(a, b, c) {
    b = { sts: b };
    c &&
      ((b.excp_n = c.name),
      (b.excp_m = c.message && c.message.substring(0, 512)),
      (b.excp_s = (c.stack && pl(c.stack, "")) || ""));
    FA(a, b);
  }
  var HA = class {
    constructor(a, b, c) {
      this.win = a;
      this.i = b;
      this.g = c;
    }
  };
  var IA = class {
    constructor(a) {
      this.g = a;
    }
    Ka(a) {
      const b = a.document.createElement("div");
      z(b, kw(a));
      z(b, { width: "100%", "max-width": "1000px", margin: "auto" });
      b.appendChild(this.g);
      const c = a.document.createElement("div");
      z(c, kw(a));
      z(c, {
        width: "100%",
        "text-align": "center",
        display: "block",
        padding: "5px 5px 2px",
        "box-sizing": "border-box",
        "background-color": "#FFF",
      });
      c.appendChild(b);
      return c;
    }
  };
  var KA = (a, b, c) => {
    if (!b || !c) return !1;
    var d = b.parentElement;
    const e = c.parentElement;
    if (!d || !e || d != e) return !1;
    d = 0;
    for (b = b.nextSibling; 10 > d && b; ) {
      if (b == c) return !0;
      if (JA(a, b)) break;
      b = b.nextSibling;
      d++;
    }
    return !1;
  };
  const JA = (a, b) => {
    if (3 == b.nodeType)
      return (
        3 == b.nodeType
          ? ((b = b.data),
            (a = kc(b, "&") ? be(b, a.document) : b),
            (a = /\S/.test(a)))
          : (a = !1),
        a
      );
    if (1 == b.nodeType) {
      var c = a.getComputedStyle(b);
      if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility)
        return !1;
      if ((c = b.tagName) && Ko.contains(c.toUpperCase())) return !0;
      b = b.childNodes;
      for (c = 0; c < b.length; c++) if (JA(a, b[c])) return !0;
    }
    return !1;
  };
  var LA = (a) => {
    if (460 <= a)
      return (a = Math.min(a, 1200)), Math.ceil(800 > a ? a / 4 : 200);
    a = Math.min(a, 600);
    return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130;
  };
  const MA = class {
    constructor() {
      this.g = { clearBoth: !0 };
    }
    i(a, b, c, d) {
      return Qv(d.document, a, null, null, this.g, b);
    }
    j(a) {
      return LA(Math.min(a.screen.width || 0, a.screen.height || 0));
    }
  };
  const NA = class {
    constructor(a) {
      this.g = a;
    }
    i(a, b, c, d) {
      return Qv(d.document, a, null, null, this.g, b);
    }
    j() {
      return null;
    }
  };
  class OA {
    constructor(a) {
      this.i = a;
    }
    g(a) {
      a = Math.floor(a.Fc());
      const b = LA(a);
      return new vq(["ap_container"], {
        google_reactive_ad_format: 27,
        google_responsive_auto_format: 16,
        google_max_num_ads: 1,
        google_ad_type: this.i,
        google_ad_format: a + "x" + b,
        google_ad_width: a,
        google_ad_height: b,
      });
    }
  }
  const PA = class {
    constructor(a, b) {
      this.l = a;
      this.j = b;
    }
    i() {
      return this.l;
    }
    g() {
      return this.j;
    }
  };
  const QA = class {
    constructor(a) {
      this.g = a;
    }
    i(a, b, c, d) {
      var e = 0 < F(this.g, gr, 9).length ? F(this.g, gr, 9)[0] : null,
        f = gw(D(this.g, hr, 3), e);
      if (!e) return null;
      if ((e = I(e, 1))) {
        d = d.document;
        var g = c.tagName;
        c = te(new he(d), g);
        c.style.clear = f.clearBoth ? "both" : "none";
        "A" == g && (c.style.display = "block");
        c.style.padding = "0px";
        c.style.margin = "0px";
        f.Od && Pv(c.style, f.Od);
        d = te(new he(d), "INS");
        f.oc && Pv(d.style, f.oc);
        c.appendChild(d);
        f = { ob: c, ya: d };
        f.ya.setAttribute("data-ad-type", "text");
        f.ya.setAttribute("data-native-settings-key", e);
        Sv(f, a, null, b);
        a = f;
      } else a = null;
      return a;
    }
    j() {
      var a = 0 < F(this.g, gr, 9).length ? F(this.g, gr, 9)[0] : null;
      if (!a) return null;
      a = F(a, fr, 3);
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if ("height" == I(c, 1) && 0 < parseInt(I(c, 2), 10))
          return parseInt(I(c, 2), 10);
      }
      return null;
    }
  };
  const RA = class {
    constructor(a) {
      this.g = a;
    }
    i(a, b, c, d) {
      if (!this.g) return null;
      const e = this.g.google_ad_format || null,
        f = this.g.google_ad_slot || null;
      if ((c = c.style)) {
        var g = [];
        for (let h = 0; h < c.length; h++) {
          const k = c.item(h);
          "width" !== k &&
            "height" !== k &&
            g.push({ property: k, value: c.getPropertyValue(k) });
        }
        c = { oc: g };
      } else c = {};
      a = Qv(d.document, a, f, e, c, b);
      a.ya.setAttribute("data-pub-vars", JSON.stringify(this.g));
      return a;
    }
    j() {
      return this.g ? parseInt(this.g.google_ad_height, 10) || null : null;
    }
    Gc() {
      return this.g;
    }
  };
  class SA {
    constructor(a) {
      this.i = a;
    }
    g() {
      return new vq([], {
        google_ad_type: this.i,
        google_reactive_ad_format: 26,
        google_ad_format: "fluid",
      });
    }
  }
  const TA = class {
    constructor(a, b) {
      this.l = a;
      this.j = b;
    }
    g() {
      return this.j;
    }
    i(a) {
      a = this.l.query(a.document);
      return 0 < a.length ? a[0] : null;
    }
  };
  function UA(a, b, c) {
    const d = [];
    for (let q = 0; q < a.length; q++) {
      var e = a[q];
      var f = q,
        g = b,
        h = c,
        k = e.ia();
      if (k) {
        var l = cw(k);
        if (l) {
          var m = L(e, 2);
          m = hw[m];
          var n = void 0 === m ? null : m;
          if (null === n) e = null;
          else {
            m = (m = D(e, hr, 3)) ? ai(m, 3) : null;
            l = new TA(l, n);
            n = bi(e, 10, Zg).slice(0);
            null != ti(k, 5) && n.push(1);
            var p = h ? h : {};
            h = ti(e, 12);
            k = Yh(e, tq, 4) ? D(e, tq, 4) : null;
            1 == L(e, 8)
              ? ((p = p.Mh || null),
                (e = new VA(
                  l,
                  new NA(gw(D(e, hr, 3), null)),
                  p,
                  m,
                  0,
                  n,
                  k,
                  g,
                  f,
                  h,
                  e
                )))
              : (e =
                  2 == L(e, 8)
                    ? new VA(
                        l,
                        new QA(e),
                        p.Ni || new SA("text"),
                        m,
                        1,
                        n,
                        k,
                        g,
                        f,
                        h,
                        e
                      )
                    : null);
          }
        } else e = null;
      } else e = null;
      null !== e && d.push(e);
    }
    return d;
  }
  function WA(a) {
    return a.A;
  }
  function XA(a) {
    return a.xa;
  }
  function YA(a) {
    return x(dt) ? (a.M || (a.M = a.F.i(a.j)), a.M) : a.F.i(a.j);
  }
  function ZA(a) {
    var b = a.H;
    a = a.j.document.createElement("div");
    x(dt)
      ? (a.className = "google-auto-placed-ad-placeholder")
      : (a.className = "google-auto-placed");
    var c = a.style;
    c.textAlign = "center";
    c.width = "100%";
    c.height = "0px";
    c.clear = b ? "both" : "none";
    return a;
  }
  function $A(a) {
    return a.C instanceof RA ? a.C.Gc() : null;
  }
  function aB(a, b, c) {
    Eo(a.I, b) || a.I.set(b, []);
    a.I.get(b).push(c);
  }
  function bB(a, b) {
    a.A = !0;
    x(dt) && (a.i && Cv(a.i), (a.i = null));
    null != b && a.Z.push(b);
  }
  function cB(a) {
    return Av(a.j.document, a.H || !1);
  }
  function dB(a) {
    return a.C.j(a.j);
  }
  function eB(a, b = null, c = null) {
    return new VA(
      a.F,
      b || a.C,
      c || a.T,
      a.H,
      a.Sb,
      a.Kc,
      a.Xd,
      a.j,
      a.pa,
      a.G,
      a.l,
      a.B,
      a.ea
    );
  }
  class VA {
    constructor(
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      l = null,
      m = null,
      n = null,
      p = null
    ) {
      this.F = a;
      this.C = b;
      this.T = c;
      this.H = d;
      this.Sb = e;
      this.Kc = f;
      this.Xd = g ? g : new tq();
      this.j = h;
      this.pa = k;
      this.G = l;
      this.l = m;
      (a = !m) || (a = !(m.ia() && null != ti(m.ia(), 5)));
      this.xa = !a;
      this.B = n;
      this.ea = p;
      this.Z = [];
      this.A = !1;
      this.I = new Io();
      this.M = this.i = null;
    }
    da() {
      return this.j;
    }
    g() {
      return this.F.g();
    }
  }
  function fB(a, b, c, d, e, f) {
    const g = sq();
    return new VA(
      new PA(c, e),
      new MA(),
      new OA(a),
      !0,
      2,
      [],
      g,
      d,
      null,
      null,
      null,
      b,
      f
    );
  }
  function gB(a, b, c, d, e) {
    const f = sq();
    return new VA(
      new PA(b, d),
      new NA({ clearBoth: !0 }),
      null,
      !0,
      2,
      [],
      f,
      c,
      null,
      null,
      null,
      a,
      e
    );
  }
  var hB = class {
    constructor(a, b, c) {
      this.articleStructure = a;
      this.element = b;
      this.win = c;
    }
    da() {
      return this.win;
    }
    A(a) {
      return fB(a, this.articleStructure, this.element, this.win, 3, null);
    }
    j() {
      return gB(this.articleStructure, this.element, this.win, 3, null);
    }
  };
  const iB = {
    TABLE: { yc: new Zp([1, 2]) },
    THEAD: { yc: new Zp([0, 3, 1, 2]) },
    TBODY: { yc: new Zp([0, 3, 1, 2]) },
    TR: { yc: new Zp([0, 3, 1, 2]) },
    TD: { yc: new Zp([0, 3]) },
  };
  function jB(a, b, c, d) {
    const e = c.childNodes;
    c = c.querySelectorAll(b);
    b = [];
    for (const f of c)
      (c = Ra(e, f)), 0 > c || b.push(new kB(a, [f], c, f, 3, pe(f).trim(), d));
    return b;
  }
  function lB(a, b, c) {
    let d = [];
    const e = [],
      f = b.childNodes,
      g = f.length;
    let h = 0,
      k = "";
    for (let n = 0; n < g; n++) {
      var l = f[n];
      if (1 == l.nodeType || 3 == l.nodeType) {
        if (1 != l.nodeType) var m = null;
        else
          "BR" == l.tagName
            ? (m = l)
            : ((m = c.getComputedStyle(l).getPropertyValue("display")),
              (m = "inline" == m || "inline-block" == m ? null : l));
        m
          ? (d.length && k && e.push(new kB(a, d, n - 1, m, 0, k, c)),
            (d = []),
            (h = n + 1),
            (k = ""))
          : (d.push(l), (l = pe(l).trim()), (k += l && k ? " " + l : l));
      }
    }
    d.length && k && e.push(new kB(a, d, h, b, 2, k, c));
    return e;
  }
  function mB(a, b) {
    return a.g - b.g;
  }
  class kB {
    constructor(a, b, c, d, e, f, g) {
      this.l = a;
      this.jd = b.slice(0);
      this.g = c;
      this.be = d;
      this.ce = e;
      this.B = f;
      this.i = g;
    }
    da() {
      return this.i;
    }
    A(a) {
      return fB(a, this.l, this.be, this.i, this.ce, this.g);
    }
    j() {
      return gB(this.l, this.be, this.i, this.ce, this.g);
    }
  }
  function nB(a) {
    return eb(
      a.B ? lB(a.i, a.g, a.j) : [],
      a.A ? jB(a.i, a.A, a.g, a.j) : []
    ).filter((b) => {
      var c = b.be.tagName;
      c
        ? ((c = iB[c.toUpperCase()]), (b = null != c && c.yc.contains(b.ce)))
        : (b = !1);
      return !b;
    });
  }
  class oB {
    constructor(a, b, c) {
      this.g = a;
      this.A = b.hd;
      this.B = b.jg;
      this.i = b.articleStructure;
      this.j = c;
      this.l = b.Nf;
    }
  }
  function pB(a, b) {
    if (!b) return !1;
    const c = Aa(b),
      d = a.g.get(c);
    if (null != d) return d;
    if (
      1 == b.nodeType &&
      ("UL" == b.tagName || "OL" == b.tagName) &&
      "none" != a.i.getComputedStyle(b).getPropertyValue("list-style-type")
    )
      return a.g.set(c, !0), !0;
    b = pB(a, b.parentNode);
    a.g.set(c, b);
    return b;
  }
  function qB(a, b) {
    return $a(b.jd, (c) => pB(a, c));
  }
  class rB {
    constructor(a) {
      this.g = new Io();
      this.i = a;
    }
  }
  class sB {
    constructor(a, b) {
      this.l = a;
      this.g = [];
      this.i = [];
      this.j = b;
    }
  }
  var uB = (
      a,
      { vg: b = !1, pf: c = !1, Ig: d = c || x(ct) ? 2 : 3, mf: e = null } = {}
    ) => {
      a = nB(a);
      return tB(a, { vg: b, pf: c, Ig: d, mf: e });
    },
    tB = (
      a,
      { vg: b = !1, pf: c = !1, Ig: d = c || x(ct) ? 2 : 3, mf: e = null } = {}
    ) => {
      if (2 > d) throw Error("minGroupSize should be at least 2, found " + d);
      var f = a.slice(0);
      f.sort(mB);
      a = [];
      b = new sB(b, e);
      for (const g of f) {
        e = {
          Qd: g,
          Cd: 51 > g.B.length ? !1 : null != b.j ? !qB(b.j, g) : !0,
        };
        if (b.l || e.Cd)
          b.g.length
            ? ((f = b.g[b.g.length - 1].Qd),
              (f = KA(f.da(), f.jd[f.jd.length - 1], e.Qd.jd[0])))
            : (f = !0),
            f
              ? (b.g.push(e), e.Cd && b.i.push(e.Qd))
              : ((b.g = [e]), (b.i = e.Cd ? [e.Qd] : []));
        if (b.i.length >= d) {
          e = b;
          f = c || x(ct) ? 0 : 1;
          if (0 > f || f >= e.i.length) e = null;
          else {
            for (f = e.i[f]; e.g.length && !e.g[0].Cd; ) e.g.shift();
            e.g.shift();
            e.i.shift();
            e = f;
          }
          e && a.push(e);
        }
      }
      return a;
    };
  var wB = (a, b, c = !1) => {
      a = vB(a, b);
      const d = new rB(b);
      return Tp(a, (e) => uB(e, { pf: c, mf: d }));
    },
    xB = (a, b) => {
      a = vB(a, b);
      const c = new rB(b);
      return Tp(a, (d) => {
        if (d.l) {
          var e = d.i;
          var f = d.j;
          d = d.g.querySelectorAll(d.l);
          var g = [];
          for (var h of d) g.push(new hB(e, h, f));
          e = g;
        } else e = [];
        d = e.slice(0);
        if (d.length) {
          e = [];
          f = d[0];
          for (g = 1; g < d.length; g++) {
            const m = d[g];
            h = f;
            b: {
              if (h.element.hasAttributes())
                for (l of h.element.attributes)
                  if (
                    "style" === l.name.toLowerCase() &&
                    l.value.toLowerCase().includes("background-image")
                  ) {
                    var k = !0;
                    break b;
                  }
              k = h.element.tagName;
              k = "IMG" === k || "SVG" === k;
            }
            (k || 1 < h.element.textContent.length) &&
              !pB(c, f.element) &&
              KA(m.da(), f.element, m.element) &&
              e.push(f);
            f = m;
          }
          var l = e;
        } else l = [];
        return l;
      });
    },
    vB = (a, b) => {
      const c = new Io();
      a.forEach((d) => {
        var e = cw(D(d, kq, 1));
        if (e) {
          var f = e.toString();
          Eo(c, f) ||
            c.set(f, {
              articleStructure: d,
              Fh: e,
              hd: null,
              jg: !1,
              Nf: null,
            });
          e = c.get(f);
          (f = (f = D(d, kq, 2)) ? I(f, 7) : null)
            ? (e.hd = e.hd ? e.hd + "," + f : f)
            : (e.jg = !0);
          d = D(d, kq, 4);
          e.Nf = d ? I(d, 7) : null;
        }
      });
      return Ho(c)
        .map((d) => {
          const e = d.Fh.query(b.document);
          return e.length ? new oB(e[0], d, b) : null;
        })
        .filter((d) => null != d);
    };
  var yB = (a) =>
      a?.google_ad_slot
        ? $p(new lq(1, { Ah: a.google_ad_slot }))
        : bq(Error("Missing dimension when creating placement id")),
    AB = (a) => {
      switch (a.Sb) {
        case 0:
        case 1:
          var b = a.l;
          null == b
            ? (a = null)
            : ((a = b.ia()),
              null == a
                ? (a = null)
                : ((b = L(b, 2)),
                  (a = null == b ? null : new lq(0, { Of: [a], bh: b }))));
          return null != a
            ? $p(a)
            : bq(Error("Missing dimension when creating placement id"));
        case 2:
          return (
            (a = zB(a)),
            null != a
              ? $p(a)
              : bq(Error("Missing dimension when creating placement id"))
          );
        default:
          return bq(Error("Invalid type: " + a.Sb));
      }
    };
  const zB = (a) => {
    if (null == a || null == a.B) return null;
    const b = D(a.B, kq, 1),
      c = D(a.B, kq, 2);
    if (null == b || null == c) return null;
    const d = a.ea;
    if (null == d) return null;
    a = a.g();
    return null == a ? null : new lq(0, { Of: [b, c], Mi: d, bh: iw[a] });
  };
  function BB(a) {
    const b = $A(a.ga);
    return (b ? yB(b) : AB(a.ga)).map((c) => oq(c));
  }
  function CB(a) {
    a.g = a.g || BB(a);
    return a.g;
  }
  function DB(a, b) {
    if (a.ga.A) throw Error("AMA:AP:AP");
    Fv(b, a.ia(), a.ga.g());
    bB(a.ga, b);
  }
  const EB = class {
    constructor(a, b, c) {
      this.ga = a;
      this.i = b;
      this.ja = c;
      this.g = null;
    }
    ia() {
      return this.i;
    }
    fill(a, b) {
      var c = this.ga;
      (a = c.C.i(a, b, this.i, c.j)) && DB(this, a.ob);
      return a;
    }
  };
  function FB(a, b) {
    return bw(() => {
      if (x(dt)) {
        var c = [],
          d = [];
        for (var e = 0; e < a.length; e++) {
          var f = a[e],
            g = YA(f);
          if (g) {
            if (!f.i && !f.A) {
              var h = null;
              try {
                var k = YA(f);
                if (k) {
                  h = ZA(f);
                  Fv(h, k, f.g());
                  var l = h;
                } else l = null;
              } catch (q) {
                throw (Cv(h), q);
              }
              f.i = l;
            }
            (h = f.i) && d.push({ lj: f, anchorElement: g, wi: h });
          }
        }
        if (0 < d.length)
          for (l = yo(b), k = zo(b), e = 0; e < d.length; e++) {
            const { lj: q, anchorElement: v, wi: A } = d[e];
            f = GB(A, k, l);
            c.push(new EB(q, v, f));
          }
        l = c;
      } else {
        l = [];
        k = [];
        try {
          const q = [];
          for (let v = 0; v < a.length; v++) {
            var m = a[v],
              n = YA(m);
            n && q.push({ Ug: m, anchorElement: n });
          }
          for (n = 0; n < q.length; n++) {
            m = k;
            g = m.push;
            {
              var p = q[n];
              const v = p.anchorElement,
                A = p.Ug,
                B = ZA(A);
              try {
                Fv(B, v, A.g()), (h = B);
              } catch (E) {
                throw (Cv(B), E);
              }
            }
            g.call(m, h);
          }
          c = yo(b);
          d = zo(b);
          for (g = 0; g < k.length; g++)
            (e = GB(k[g], d, c)),
              (f = q[g]),
              l.push(new EB(f.Ug, f.anchorElement, e));
        } finally {
          for (c = 0; c < k.length; c++) Cv(k[c]);
        }
      }
      return l;
    }, b);
  }
  function GB(a, b, c) {
    a = a.getBoundingClientRect();
    return new Kp(a.left + b, a.top + c, a.right - a.left);
  }
  const HB = { 1: "0.5vp", 2: "300px" },
    IB = { 1: 700, 2: 1200 },
    JB = {
      [1]: { kh: "3vp", rf: "1vp", jh: "0.3vp" },
      [2]: { kh: "900px", rf: "300px", jh: "90px" },
    };
  function KB(a, b, c) {
    var d = LB(a),
      e = S(a) || IB[d],
      f = void 0;
    c &&
      (f = (c = (c = MB(F(c, Eq, 2), d)) ? D(c, Cq, 7) : void 0)
        ? NB(c, e)
        : void 0);
    c = f;
    f = LB(a);
    a = S(a) || IB[f];
    const g = OB(JB[f].rf, a);
    a = null === g ? PB(f, a) : new QB(g, g, RB(g, 8), 8, 0.3, c);
    c = OB(JB[d].kh, e);
    f = OB(JB[d].rf, e);
    d = OB(JB[d].jh, e);
    e = a.j;
    c &&
      d &&
      f &&
      void 0 !== b &&
      (e = 0.5 >= b ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
    return new QB(e, e, RB(e, a.i), a.i, a.l, a.g);
  }
  function SB(a, b) {
    const c = a.Nb();
    a = $h(a, 5);
    return null == c || null == a ? b : new QB(a, 0, [], c, 1);
  }
  function TB(a, b) {
    const c = LB(a);
    a = S(a) || IB[c];
    if (!b) return PB(c, a);
    if ((b = MB(F(b, Eq, 2), c))) if ((b = UB(b, a))) return b;
    return PB(c, a);
  }
  function VB(a) {
    const b = LB(a);
    a = S(a) || IB[b];
    return PB(b, a);
  }
  function WB(a, b) {
    let c = { Qc: a.j, vb: a.B };
    for (let d of a.A) d.adCount <= b && (c = d.Uc);
    return c;
  }
  function XB(a, b, c) {
    var d = ai(b, 2);
    b = D(b, Eq, 1);
    var e = LB(c);
    var f = S(c) || IB[e];
    c = OB(b?.A(), f) ?? a.j;
    e = OB(b?.l(), f) ?? a.B;
    d = d ? [] : YB(b?.g(), f) ?? a.A;
    const g = b?.Nb() ?? a.i,
      h = b?.j() ?? a.l;
    a = (b?.B() ? NB(D(b, Cq, 7), f) : null) ?? a.g;
    return new QB(c, e, d, g, h, a);
  }
  function ZB(a, b) {
    var c = LB(b);
    const d = new Fq(),
      e = new Eq();
    let f = !1;
    var g = Wb(jt);
    0 <= g && (Fi(e, 4, g), (f = !0));
    g = null;
    1 === c
      ? ((c = Wb(mt)), 0 <= c && (g = c + "vp"))
      : ((c = Wb(lt)), 0 <= c && (g = c + "px"));
    null !== g && (Ii(e, 2, g), (f = !0));
    c = x(ot) ? "0px" : null;
    null !== c && (Ii(e, 5, c), (f = !0));
    if (x(qt)) Di(d, 2, !0), (f = !0);
    else if (null !== c || null !== g) {
      const m = [];
      for (const n of a.A) {
        var h = m,
          k = h.push;
        var l = new Dq();
        l = Fi(l, 1, n.adCount);
        l = Ii(l, 3, c ?? n.Uc.vb + "px");
        l = Ii(l, 2, g ?? n.Uc.Qc + "px");
        k.call(h, l);
      }
      ri(e, 3, m);
    }
    return f ? (H(d, 1, e), XB(a, d, b)) : a;
  }
  class QB {
    constructor(a, b, c, d, e, f) {
      this.j = a;
      this.B = b;
      this.A = c.sort((g, h) => g.adCount - h.adCount);
      this.i = d;
      this.l = e;
      this.g = f;
    }
    Nb() {
      return this.i;
    }
  }
  function MB(a, b) {
    for (let c of a) if (L(c, 1) == b) return c;
    return null;
  }
  function YB(a, b) {
    if (void 0 === a) return null;
    const c = [];
    for (let d of a) {
      a = ti(d, 1);
      const e = OB(I(d, 2), b);
      if ("number" !== typeof a || null === e) return null;
      c.push({ adCount: a, Uc: { Qc: e, vb: OB(I(d, 3), b) } });
    }
    return c;
  }
  function UB(a, b) {
    const c = OB(I(a, 2), b),
      d = OB(I(a, 5), b);
    if (null === c) return null;
    const e = ti(a, 4);
    if (null == e) return null;
    var f = a.g();
    f = YB(f, b);
    if (null === f) return null;
    const g = D(a, Cq, 7);
    b = g ? NB(g, b) : void 0;
    return new QB(c, d, f, e, $h(a, 6), b);
  }
  function PB(a, b) {
    a = OB(HB[a], b);
    return x(gt)
      ? new QB(null === a ? Infinity : a, null, [], 8, 0.3)
      : new QB(null === a ? Infinity : a, null, [], 3, null);
  }
  function OB(a, b) {
    if (!a) return null;
    const c = parseFloat(a);
    return isNaN(c)
      ? null
      : a.endsWith("px")
      ? c
      : a.endsWith("vp")
      ? c * b
      : null;
  }
  function LB(a) {
    a = 900 <= qo(a);
    return ve() && !a ? 1 : 2;
  }
  function RB(a, b) {
    if (4 > b) return [];
    const c = Math.ceil(b / 2);
    return [
      { adCount: c, Uc: { Qc: 2 * a, vb: 2 * a } },
      { adCount: c + Math.ceil((b - c) / 2), Uc: { Qc: 3 * a, vb: 3 * a } },
    ];
  }
  function NB(a, b) {
    const c = OB(I(a, 2), b) || 0,
      d = ti(a, 3) || 1;
    return { Jg: c, Dg: d, tc: OB(I(a, 1), b) || 0 };
  }
  function $B(a, b, c) {
    return io(
      {
        top: a.g.top - (c + 1),
        right: a.g.right + (c + 1),
        bottom: a.g.bottom + (c + 1),
        left: a.g.left - (c + 1),
      },
      b.g
    );
  }
  function aC(a) {
    if (!a.length) return null;
    const b = jo(a.map((c) => c.g));
    a = a.reduce((c, d) => c + d.i, 0);
    return new bC(b, a);
  }
  class bC {
    constructor(a, b) {
      this.g = a;
      this.i = b;
    }
  }
  function cC(a = null) {
    ({ googletag: a } = a ?? window);
    return a?.apiReady ? a : void 0;
  }
  var hC = (a, b) => {
    var c = fb(b.document.querySelectorAll(".google-auto-placed"));
    const d = fb(
        b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")
      ),
      e = dC(b),
      f = eC(b),
      g = fC(b),
      h = fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
      k = fb(b.document.querySelectorAll("div.googlepublisherpluginad")),
      l = fb(b.document.querySelectorAll("html > ins.adsbygoogle"));
    let m = [].concat(
      fb(
        b.document.querySelectorAll(
          "iframe[id^=aswift_],iframe[id^=google_ads_frame]"
        )
      ),
      fb(b.document.querySelectorAll("body ins.adsbygoogle"))
    );
    b = [];
    for (const [n, p] of [
      [a.zd, c],
      [a.Rb, d],
      [a.Ki, e],
      [a.Ad, f],
      [a.Bd, g],
      [a.Ii, h],
      [a.Ji, k],
      [a.Li, l],
    ])
      !1 === n ? (b = b.concat(p)) : (m = m.concat(p));
    a = gC(m);
    c = gC(b);
    a = a.slice(0);
    for (const n of c)
      for (c = 0; c < a.length; c++)
        (n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
    return a;
  };
  const iC = (a) => {
      const b = cC(a);
      return b
        ? Wa(
            Xa(b.pubads().getSlots(), (c) =>
              a.document.getElementById(c.getSlotElementId())
            ),
            (c) => null != c
          )
        : null;
    },
    dC = (a) =>
      fb(
        a.document.querySelectorAll(
          "ins.adsbygoogle[data-ad-format=autorelaxed]"
        )
      ),
    eC = (a) =>
      (iC(a) || fb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(
        fb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))
      ),
    fC = (a) =>
      fb(
        a.document.querySelectorAll(
          "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"
        )
      );
  var gC = (a) => {
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
  var jC = tA.Ma(453, hC),
    kC;
  kC = tA.Ma(454, (a, b) => {
    const c = fb(b.document.querySelectorAll(".google-auto-placed")),
      d = fb(
        b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")
      ),
      e = dC(b),
      f = eC(b),
      g = fC(b),
      h = fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
      k = fb(b.document.querySelectorAll("div.googlepublisherpluginad"));
    b = fb(b.document.querySelectorAll("html > ins.adsbygoogle"));
    return gC(
      [].concat(
        !0 === a.zd ? c : [],
        !0 === a.Rb ? d : [],
        !0 === a.Ki ? e : [],
        !0 === a.Ad ? f : [],
        !0 === a.Bd ? g : [],
        !0 === a.Ii ? h : [],
        !0 === a.Ji ? k : [],
        !0 === a.Li ? b : []
      )
    );
  });
  function lC(a, b, c) {
    const d = mC(a);
    b = nC(d, b, c);
    return new oC(a, d, b);
  }
  function pC(a) {
    return 1 < (a.bottom - a.top) * (a.right - a.left);
  }
  function qC(a) {
    return a.g.map((b) => b.box);
  }
  function rC(a) {
    return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0);
  }
  class oC {
    constructor(a, b, c) {
      this.j = a;
      this.g = b.slice(0);
      this.l = c.slice(0);
      this.i = null;
    }
  }
  function mC(a) {
    const b = jC({ Rb: !1 }, a),
      c = zo(a),
      d = yo(a);
    return b
      .map((e) => {
        const f = e.getBoundingClientRect();
        return (e = !!e.className && kc(e.className, "google-auto-placed")) ||
          pC(f)
          ? {
              box: {
                top: f.top + d,
                right: f.right + c,
                bottom: f.bottom + d,
                left: f.left + c,
              },
              Qn: e ? 1 : 0,
            }
          : null;
      })
      .filter(Gb((e) => null === e));
  }
  function nC(a, b, c) {
    return void 0 != b && a.length <= (void 0 != c ? c : 8)
      ? sC(a, b)
      : Xa(a, (d) => new bC(d.box, 1));
  }
  function sC(a, b) {
    a = Xa(a, (d) => new bC(d.box, 1));
    const c = [];
    for (; 0 < a.length; ) {
      let d = a.pop(),
        e = !0;
      for (; e; ) {
        e = !1;
        for (let f = 0; f < a.length; f++)
          if ($B(d, a[f], b)) {
            d = aC([d, a[f]]);
            Array.prototype.splice.call(a, f, 1);
            e = !0;
            break;
          }
      }
      c.push(d);
    }
    return c;
  }
  function tC(a, b, c) {
    const d = Jp(c, b);
    return !$a(a, (e) => io(e, d));
  }
  function uC(a, b, c, d, e) {
    e = e.ja;
    const f = Jp(e, b),
      g = Jp(e, c),
      h = Jp(e, d);
    return !$a(a, (k) => io(k, g) || (io(k, f) && !io(k, h)));
  }
  function vC(a, b, c, d) {
    const e = qC(a);
    if (tC(e, b, d.ja)) return !0;
    if (!uC(e, b, c.Jg, c.tc, d)) return !1;
    const f = new bC(Jp(d.ja, 0), 1);
    a = Wa(a.l, (g) => $B(g, f, c.tc));
    b = Za(a, (g, h) => g + h.i, 1);
    return 0 === a.length || b > c.Dg ? !1 : !0;
  }
  var wC = (a, b) => {
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
  function xC(a, b) {
    const c = new gq(),
      d = new Jo();
    b.forEach((e) => {
      if (Ai(e, Mq, 1, Pq)) {
        e = Ai(e, Mq, 1, Pq);
        if (
          D(e, Lq, 1) &&
          D(e, Lq, 1).ia() &&
          D(e, Lq, 2) &&
          D(e, Lq, 2).ia()
        ) {
          const g = yC(a, D(e, Lq, 1).ia()),
            h = yC(a, D(e, Lq, 2).ia());
          if (g && h)
            for (var f of wC(
              { anchor: g, position: L(D(e, Lq, 1), 2) },
              { anchor: h, position: L(D(e, Lq, 2), 2) }
            ))
              c.set(Aa(f.anchor), f.position);
        }
        D(e, Lq, 3) &&
          D(e, Lq, 3).ia() &&
          (f = yC(a, D(e, Lq, 3).ia())) &&
          c.set(Aa(f), L(D(e, Lq, 3), 2));
      } else
        Ai(e, Nq, 2, Pq)
          ? zC(a, Ai(e, Nq, 2, Pq), c)
          : Ai(e, Kq, 3, Pq) && AC(a, Ai(e, Kq, 3, Pq), d);
    });
    return new BC(c, d);
  }
  class BC {
    constructor(a, b) {
      this.i = a;
      this.g = b;
    }
  }
  const zC = (a, b, c) => {
      D(b, Lq, 2)
        ? ((b = D(b, Lq, 2)), (a = yC(a, b.ia())) && c.set(Aa(a), L(b, 2)))
        : D(b, kq, 1) &&
          (a = CC(a, D(b, kq, 1))) &&
          a.forEach((d) => {
            d = Aa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3);
          });
    },
    AC = (a, b, c) => {
      D(b, kq, 1) &&
        (a = CC(a, D(b, kq, 1))) &&
        a.forEach((d) => {
          c.add(Aa(d));
        });
    },
    yC = (a, b) => ((a = CC(a, b)) && 0 < a.length ? a[0] : null),
    CC = (a, b) => ((b = cw(b)) ? b.query(a) : null);
  var DC = class {
    constructor() {
      this.g = yf();
      this.i = 0;
    }
  };
  function EC(a, b, c) {
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
      if (FC(b)) return !0;
      if (a.g.has(b)) break;
      c.push(b);
      b = b.parentElement;
    }
    c.forEach((d) => a.g.add(d));
    return !1;
  }
  function GC(a) {
    a = HC(a);
    return a.has("all") || a.has("after");
  }
  function IC(a) {
    a = HC(a);
    return a.has("all") || a.has("before");
  }
  function HC(a) {
    return (a = a && a.getAttribute("data-no-auto-ads"))
      ? new Set(a.split("|"))
      : new Set();
  }
  function FC(a) {
    const b = HC(a);
    return (
      a &&
      ("AUTO-ADS-EXCLUSION-AREA" === a.tagName ||
        b.has("inside") ||
        b.has("all"))
    );
  }
  var JC = class {
    constructor() {
      this.g = new Set();
      this.i = new DC();
    }
  };
  function KC(a) {
    return function (b) {
      return FB(b, a);
    };
  }
  function LC(a) {
    const b = S(a);
    return b ? Ia(MC, b + yo(a)) : Db;
  }
  function NC(a, b, c) {
    if (0 > a) throw Error("ama::ead:nd");
    if (Infinity === a) return Db;
    const d = qC(c || lC(b));
    return (e) => tC(d, a, e.ja);
  }
  function OC(a, b, c, d) {
    if (0 > a || 0 > b.Jg || 0 > b.Dg || 0 > b.tc) throw Error("ama::ead:nd");
    return Infinity === a ? Db : (e) => vC(d || lC(c, b.tc), a, b, e);
  }
  function PC(a) {
    if (!a.length) return Db;
    const b = new Zp(a);
    return (c) => b.contains(c.Sb);
  }
  function QC(a) {
    return function (b) {
      for (let c of b.Kc) if (-1 < a.indexOf(c)) return !1;
      return !0;
    };
  }
  function RC(a) {
    return a.length
      ? function (b) {
          const c = b.Kc;
          return a.some((d) => -1 < c.indexOf(d));
        }
      : Eb;
  }
  function SC(a, b) {
    if (0 >= a) return Eb;
    const c = uo(b).scrollHeight - a;
    return function (d) {
      return d.ja.g <= c;
    };
  }
  function TC(a) {
    const b = {};
    a &&
      a.forEach((c) => {
        b[c] = !0;
      });
    return function (c) {
      return !b[L(c.Xd, 2) || 0];
    };
  }
  function UC(a) {
    return a.length ? (b) => a.includes(L(b.Xd, 1) || 0) : Eb;
  }
  function VC(a, b) {
    const c = xC(a, b);
    return function (d) {
      var e = d.ia();
      d = iw[d.ga.g()];
      var f = c.i,
        g = Aa(e);
      f = f.g.get(g);
      if (!(f = f ? f.contains(d) : !1))
        a: {
          if (c.g.contains(Aa(e)))
            switch (d) {
              case 2:
              case 3:
                f = !0;
                break a;
              default:
                f = !1;
                break a;
            }
          for (e = e.parentElement; e; ) {
            if (c.g.contains(Aa(e))) {
              f = !0;
              break a;
            }
            e = e.parentElement;
          }
          f = !1;
        }
      return !f;
    };
  }
  function WC() {
    const a = new JC();
    return function (b) {
      var c = b.ia(),
        d = iw[b.ga.g()];
      a: switch (d) {
        case 1:
          b = GC(c.previousElementSibling) || IC(c);
          break a;
        case 4:
          b = GC(c) || IC(c.nextElementSibling);
          break a;
        case 2:
          b = IC(c.firstElementChild);
          break a;
        case 3:
          b = GC(c.lastElementChild);
          break a;
        default:
          throw Error("Unknown RelativePosition: " + d);
      }
      c = EC(a, c, d);
      d = a.i;
      xA(
        "ama_exclusion_zone",
        {
          typ: b ? (c ? "siuex" : "siex") : c ? "suex" : "noex",
          cor: d.g,
          num: d.i++,
          dvc: qf(),
        },
        0.1
      );
      return !(b || c);
    };
  }
  const MC = (a, b) => b.ja.g >= a,
    XC = (a, b, c) => {
      c = c.ja.Fc();
      return a <= c && c <= b;
    };
  function YC(a, b, c, d, e) {
    var f = ZC({ oh: e.rh || e.bj }, $C(a, b), a);
    if (0 === f.length) {
      var g = !!D(b, er, 6)?.g()?.length;
      f = D(b, Zq, 28)?.l()?.j() && g ? ZC({ oh: !0 }, aD(a, b), a) : f;
    }
    if (0 === f.length) return GA(d, "pfno"), [];
    b = f;
    a = e.pd ? bD(a, b, c) : { kb: b, qd: null };
    const { kb: h, qd: k } = a;
    f = h;
    return 0 === f.length && k
      ? (GA(d, k), [])
      : [f[e.rh ? 0 : Math.floor(f.length / 2)]];
  }
  function bD(a, b, c) {
    c = c ? F(c, Oq, 5) : [];
    const d = VC(a.document, c),
      e = WC();
    b = b.filter((f) => d(f));
    if (0 === b.length) return { kb: [], qd: "pfaz" };
    b = b.filter((f) => e(f));
    return 0 === b.length ? { kb: [], qd: "pfet" } : { kb: b, qd: null };
  }
  function cD(a, b) {
    return a.ja.g - b.ja.g;
  }
  function $C(a, b) {
    const c = D(b, er, 6);
    if (!c) return [];
    b = D(b, Zq, 28)?.l();
    return (b?.g() ? xB(c.g(), a) : wB(c.g(), a, !!b?.l())).map((d) => d.j());
  }
  function aD(a, b) {
    b = F(b, ir, 1) || [];
    return UA(b, a, {}).filter((c) => !c.Kc.includes(6));
  }
  function ZC(a, b, c) {
    b = FB(b, c);
    if (a.oh) {
      const d = LC(c);
      b = b.filter((e) => d(e));
    }
    return b.sort(cD);
  }
  function dD(a, b) {
    return 2 === qf()
      ? Ky(a.win, b, { ef: 0.95, Me: 0.95, zIndex: 2147483645, qb: !0, Ia: !0 })
      : Ux(a.win, b, {
          Cc: "min(65vw, 768px)",
          sc: "",
          Bc: !1,
          zIndex: 2147483645,
          qb: !0,
          Vd: !1,
          Ia: !0,
        });
  }
  function eD(a) {
    ((d, e) => {
      d[e] =
        d[e] ||
        function () {
          (d[e].q = d[e].q || []).push(arguments);
        };
      d[e].t = new Date().getTime();
    })(a.win, "_googCsa");
    const b = a.pa.map((d) => ({ container: d, relatedSearches: 5 })),
      c = {
        pubId: a.H,
        styleId: "5134551505",
        hl: a.ea,
        fexp: a.F,
        channel: "AutoRsVariant",
        resultsPageBaseUrl: "http://google.com",
        resultsPageQueryParam: "q",
        relatedSearchTargeting: "content",
        relatedSearchResultClickedCallback: a.Cb.bind(a),
        relatedSearchUseResultCallback: !0,
        cx: a.I,
      };
    a.xa && (c.adLoadedCallback = a.Ga.bind(a));
    a.l && a.C instanceof Array && (c.fexp = a.C.join(","));
    a.win._googCsa("relatedsearch", c, b);
  }
  function fD(a) {
    a.win.addEventListener("message", (b) => {
      "https://www.gstatic.com" === b.origin &&
        "resize" === b.data.action &&
        (a.g.style.height = `${Math.ceil(b.data.height) + 1}px`);
    });
  }
  var gD = class extends T {
    constructor(a, b, c, d, e, f, g, h, k = () => {}) {
      super();
      this.win = a;
      this.pa = b;
      this.Z = e;
      this.F = f;
      this.A = h;
      this.Qa = k;
      this.ea = d?.g() || "en";
      this.Pa = d?.j() || "Search results from ${website}";
      this.xa = x(wt);
      this.H = c.replace("ca", "partner");
      this.M = new he(a.document);
      this.g = te(this.M, "IFRAME");
      this.I = g.i ? g.g : "9d449ff4a772956c6";
      this.C = (this.l = x(Ct)) ? w(Yn).g().concat(this.F) : this.F;
      this.j = new Hs(
        this.g,
        this.I,
        "auto-rs-prose",
        this.H,
        "AutoRsVariant",
        a.location,
        this.ea,
        this.Pa,
        this.C,
        this.A,
        this.l
      );
      this.T = dD(this, this.g);
      Ro(this, this.T);
    }
    K() {
      0 !== this.pa.length &&
        (this.xa ||
          aw(
            1075,
            () => {
              this.j.K();
            },
            this.win
          ),
        aw(
          1076,
          () => {
            const a = te(this.M, "SCRIPT");
            Re(a, qj`https://www.google.com/adsense/search/async-ads.js`);
            this.win.document.head.appendChild(a);
          },
          this.win
        ),
        eD(this),
        FA(this.Z, { sts: "ok" }),
        this.A && fD(this));
    }
    Ga(a, b) {
      b
        ? aw(
            1075,
            () => {
              this.j.K();
            },
            this.win
          )
        : (this.Qa(), GA(this.Z, "pfns"));
    }
    Cb(a, b) {
      Fs(this.j, a, b);
      (() => {
        if (!this.A) {
          const c = new ResizeObserver(async (e) => {
              this.g.height = "0";
              await new Promise((f) => {
                this.win.requestAnimationFrame(f);
              });
              this.g.height = e[0].target.scrollHeight.toString();
            }),
            d = () => {
              const e = this.g.contentDocument?.documentElement;
              e
                ? c.observe(e)
                : (console.warn("iframe body missing"), setTimeout(d, 1e3));
            };
          d();
        }
        this.T.show();
      })();
    }
  };
  var hD = class {
    constructor(a, b) {
      this.i = a;
      this.g = b;
    }
  };
  function iD(a) {
    const b = cB(a.l.ga),
      c = a.B.Ka(a.G, () => a.i());
    b.appendChild(c);
    a.A && (b.className = a.A);
    return { ni: b, bi: c };
  }
  class jD {
    constructor(a, b, c, d) {
      this.G = a;
      this.l = b;
      this.B = c;
      this.A = d || null;
      this.g = null;
      this.j = new U(null);
    }
    K() {
      const a = iD(this);
      this.g = a.ni;
      DB(this.l, this.g);
      this.j.g(a.bi);
    }
    i() {
      this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
      this.g = null;
      this.j.g(null);
    }
    C() {
      return this.j;
    }
  }
  async function kD(a) {
    await new Promise((b) => {
      setTimeout(() => {
        try {
          lD(a);
        } catch (c) {
          GA(a.i, "pfere", c);
        }
        b();
      });
    });
  }
  function lD(a) {
    if ((!a.pd || !mD(a.config, a.aa, a.i)) && nD(a.g?.j(), a.i)) {
      var b = a.g?.l();
      b = YC(a.win, a.config, a.aa, a.i, {
        rh: !!b?.A(),
        pd: a.pd,
        bj: !!b?.g(),
      });
      b = oD(b, a.win);
      var c = Object.keys(b),
        d = Object.values(b),
        e = a.g?.g()?.g() || 0,
        f = pD(a.g),
        g = !!a.g?.B();
      if (!D(a.config, Rq, 25)?.g()) {
        var h = () => {
          d.forEach((k) => {
            k.i();
          });
        };
        aw(
          1074,
          () => {
            new gD(a.win, c, a.webPropertyCode, a.g?.j(), a.i, e, f, g, h).K();
          },
          a.win
        );
      }
    }
  }
  var qD = class {
    constructor(a, b, c, d, e, f) {
      this.win = a;
      this.config = c;
      this.webPropertyCode = d;
      this.aa = e;
      this.pd = f;
      this.i = new HA(a, b, D(this.config, Zq, 28) || new Zq());
      this.g = D(this.config, Zq, 28);
    }
  };
  function mD(a, b, c) {
    a = D(a, Zq, 28)?.g()?.g() || 0;
    const d = Yb(Bt);
    return d && d.includes(a.toString())
      ? !1
      : 0 === (b ? bi(b, 2, Zg) : []).length
      ? (GA(c, "pfeu"), !0)
      : !1;
  }
  function nD(a, b) {
    const c = Yb(zt);
    return c && 0 !== c.length && !c.includes((a?.g() || "").toString())
      ? (GA(b, "pflna"), !1)
      : !0;
  }
  function oD(a, b) {
    const c = {};
    for (let e = 0; e < a.length; e++) {
      var d = a[e];
      const f = "autors-container-" + e.toString(),
        g = b.document.createElement("div");
      g.setAttribute("id", f);
      d = new jD(b, d, new IA(g), "autors-widget");
      d.K();
      c[f] = d;
    }
    return c;
  }
  function pD(a) {
    return new hD(a?.C() || !1, a?.A() || "");
  }
  var rD = (a, b) => {
    const c = [];
    D(a, jr, 18) && c.push(2);
    b.aa && c.push(0);
    D(a, Zq, 28) && 1 == zi(D(a, Zq, 28), 1) && c.push(1);
    D(a, Xq, 31) && 1 == zi(D(a, Xq, 31), 1) && c.push(5);
    D(a, Tq, 32) && c.push(6);
    D(a, mr, 34) && N(D(a, mr, 34), 3) && c.push(7);
    return c;
  };
  function sD(a, b) {
    const c = te(ge(a), "IMG");
    tD(a, c);
    c.src =
      "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
    z(c, {
      margin: "0px 12px 0px 8px",
      width: "24px",
      height: "24px",
      cursor: null == b ? "auto" : "pointer",
    });
    b &&
      c.addEventListener("click", (d) => {
        b();
        d.stopPropagation();
      });
    return c;
  }
  function uD(a, b) {
    const c = b.document.createElement("button");
    tD(b, c);
    z(c, { display: "inline", "line-height": "24px", cursor: "pointer" });
    c.appendChild(b.document.createTextNode(a.i));
    c.addEventListener("click", (d) => {
      a.j();
      d.stopPropagation();
    });
    return c;
  }
  function vD(a, b, c) {
    const d = te(ge(b), "IMG");
    d.src =
      "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
    d.setAttribute("aria-label", a.l);
    tD(b, d);
    z(d, {
      margin: "0px 12px 0px 8px",
      width: "24px",
      height: "24px",
      cursor: "pointer",
    });
    d.addEventListener("click", (e) => {
      c();
      e.stopPropagation();
    });
    return d;
  }
  function wD(a) {
    const b = a.document.createElement("ins");
    tD(a, b);
    z(b, {
      float: "left",
      display: "inline-flex",
      padding: "8px 0px",
      "background-color": "#FFF",
      "border-radius": "0px 20px 20px 0px",
      "box-shadow":
        "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)",
    });
    return b;
  }
  class xD {
    constructor(a, b, c) {
      this.i = a;
      this.l = b;
      this.j = c;
      this.g = new U(!1);
    }
    Ka(a, b, c, d) {
      const e = sD(a, d),
        f = sD(a),
        g = uD(this, a),
        h = vD(this, a, c);
      a = wD(a);
      a.appendChild(e);
      a.appendChild(f);
      a.appendChild(g);
      a.appendChild(h);
      this.g.listen((k) => {
        z(e, { display: k ? "none" : "inline" });
        z(f, { display: k ? "inline" : "none" });
        k
          ? (z(g, {
              "line-height": "24px",
              "max-width": "100vw",
              opacity: "1",
              transition:
                "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms",
            }),
            z(h, {
              margin: "0px 12px 0px 8px",
              opacity: 1,
              width: "24px",
              transition:
                "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms",
            }))
          : (z(g, {
              "line-height": "0px",
              "max-width": "0vw",
              opacity: "0",
              transition:
                "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms",
            }),
            z(h, {
              margin: "0",
              opacity: "0",
              width: "0",
              transition: "margin 100ms, opacity 50ms, width 100ms",
            }));
      }, !0);
      return a;
    }
    mg() {
      return 40;
    }
    Pg() {
      this.g.g(!1);
      return 0;
    }
    Qg() {
      this.g.g(!0);
    }
  }
  function tD(a, b) {
    z(b, kw(a));
    z(b, {
      "font-family": "Arial,sans-serif",
      "font-weight": "bold",
      "font-size": "14px",
      "letter-spacing": "0.2px",
      color: "#3C4043",
      "user-select": "none",
    });
  }
  function yD(a, b) {
    const c = b.document.createElement("button");
    zD(a, b, c);
    b = {
      width: "100%",
      "text-align": "center",
      display: "block",
      padding: "8px 0px",
      "background-color": a.i,
    };
    a.g && ((b["border-top"] = a.g), (b["border-bottom"] = a.g));
    z(c, b);
    c.addEventListener("click", (d) => {
      a.B();
      d.stopPropagation();
    });
    return c;
  }
  function AD(a, b, c, d) {
    const e = b.document.createElement("div");
    z(e, kw(b));
    z(e, {
      "align-items": "center",
      "background-color": a.i,
      display: "flex",
      "justify-content": "center",
    });
    const f = b.document.createElement("span");
    f.appendChild(b.document.createTextNode(d));
    z(f, kw(b));
    z(f, {
      "font-family": "Arial,sans-serif",
      "font-size": "12px",
      padding: "8px 0px",
    });
    b = b.matchMedia("(min-width: 768px)");
    d = (g) => {
      g.matches
        ? (z(e, { "flex-direction": "row" }),
          a.g && z(e, { "border-top": a.g, "border-bottom": a.g }),
          z(f, { "margin-left": "8px", "text-align": "start" }),
          z(c, { border: "0", "margin-right": "8px", width: "auto" }))
        : (z(e, { border: "0", "flex-direction": "column" }),
          z(f, { "margin-left": "0", "text-align": "center" }),
          z(c, { "margin-right": "0", width: "100%" }),
          a.g && z(c, { "border-top": a.g, "border-bottom": a.g }));
    };
    d(b);
    b.addEventListener("change", d);
    e.appendChild(c);
    e.appendChild(f);
    return e;
  }
  function zD(a, b, c) {
    z(c, kw(b));
    z(c, {
      "font-family": "Arial,sans-serif",
      "font-weight": a.C,
      "font-size": "14px",
      "letter-spacing": "0.2px",
      color: a.G,
      "user-select": "none",
      cursor: "pointer",
    });
  }
  class BD {
    constructor(a, b, c, d, e, f = null, g = null, h = null) {
      this.A = a;
      this.B = b;
      this.G = c;
      this.i = d;
      this.C = e;
      this.l = f;
      this.g = g;
      this.j = h;
    }
    Ka(a) {
      const b = a.document.createElement("div");
      zD(this, a, b);
      z(b, {
        display: "inline-flex",
        padding: "8px 0px",
        "background-color": this.i,
      });
      if (this.l) {
        var c = te(ge(a), "IMG");
        c.src = this.l;
        zD(this, a, c);
        z(c, { margin: "0px 8px 0px 0px", width: "24px", height: "24px" });
      } else c = null;
      c && b.appendChild(c);
      c = a.document.createElement("span");
      zD(this, a, c);
      z(c, { "line-height": "24px" });
      c.appendChild(a.document.createTextNode(this.A));
      b.appendChild(c);
      c = yD(this, a);
      c.appendChild(b);
      return this.j ? AD(this, a, c, this.j) : c;
    }
  }
  function CD(a, b) {
    b = b.filter((c) => 5 === D(c, tq, 4)?.g() && 1 === L(c, 8));
    b = UA(b, a);
    a = FB(b, a);
    a.sort((c, d) => d.ja.g - c.ja.g);
    return a[0] || null;
  }
  function DD({ J: a, Ze: b, Xe: c, Vf: d, wa: e, Vh: f, Fj: g }) {
    let h = 0;
    try {
      h |= oo(a);
      const k = Math.min(a.screen.width || 0, a.screen.height || 0);
      h |= k ? (320 > k ? 8192 : 0) : 2048;
      h |= a.navigator && ED(a.navigator.userAgent) ? 1048576 : 0;
      h = b ? h | FD(a, b, g) : h | (a.innerHeight >= a.innerWidth ? 0 : 8);
      h |= po(a, c, g);
      g || (h |= ro(a));
    } catch {
      h |= 32;
    }
    switch (d) {
      case 2:
        GD(a, e) && (h |= 16777216);
        break;
      case 1:
        HD(a, e) && (h |= 16777216);
    }
    f && ID(a, e) && (h |= 16777216);
    return h;
  }
  function ED(a) {
    return (
      /Android 2/.test(a) ||
      /iPhone OS [34]_/.test(a) ||
      /Windows Phone (?:OS )?[67]/.test(a) ||
      /MSIE.*Windows NT/.test(a) ||
      /Windows NT.*Trident/.test(a)
    );
  }
  var GD = (a, b = null) => {
      const c = ow({
        mc: 0,
        Jb: a.innerWidth,
        Yb: 3,
        nc: 0,
        Kb: Math.min(Math.round((a.innerWidth / 320) * 50), JD) + 15,
        Zb: 3,
      });
      return null != qw(KD(a, b), c);
    },
    HD = (a, b = null) => {
      const c = a.innerWidth,
        d = a.innerHeight,
        e = Math.min(Math.round((a.innerWidth / 320) * 50), JD) + 15,
        f = ow({ mc: 0, Jb: c, Yb: 3, nc: d - e, Kb: d, Zb: 3 });
      25 < e && f.push({ x: c - 25, y: d - 25 });
      return null != qw(KD(a, b), f);
    };
  function ID(a, b = null) {
    return null != LD(a, b);
  }
  function LD(a, b = null) {
    var c = a.innerHeight;
    c = ow({ mc: 0, Jb: a.innerWidth, Yb: 10, nc: c - 66, Kb: c, Zb: 10 });
    return qw(KD(a, b), c);
  }
  function MD(a, b) {
    var c = x(Qs);
    a: {
      const e = a.innerWidth,
        f = a.innerHeight;
      let g = f;
      for (; g > b; ) {
        var d = ow({ mc: 0, Jb: e, Yb: 9, nc: g - b, Kb: g, Zb: 9 });
        d = qw(KD(a), d);
        if (!d) {
          a = f - g;
          break a;
        }
        g = c
          ? Math.min(d.getBoundingClientRect().top - 1, g - 1)
          : d.getBoundingClientRect().top - 1;
      }
      a = null;
    }
    return a;
  }
  function KD(a, b = null) {
    return new hx(a, { kg: ND(a, b) });
  }
  function ND(a, b = null) {
    if (b)
      return (c, d, e) => {
        ql(
          b,
          "ach_evt",
          {
            tn: c.tagName,
            id: c.getAttribute("id") ?? "",
            cls: c.getAttribute("class") ?? "",
            ign: String(e),
            pw: a.innerWidth,
            ph: a.innerHeight,
            x: d.x,
            y: d.y,
          },
          !0,
          1
        );
      };
  }
  function FD(a, b, c = !1) {
    const d = a.innerHeight;
    return (c ? Ef(a) * d : d) >= b ? 0 : 1024;
  }
  const JD = 90 * 1.38;
  function OD(a) {
    a.g || (a.g = PD(a));
    z(a.g, { display: "block" });
    a.A.Qg();
    a.j.g(a.B);
  }
  function QD(a) {
    const b = a.A.Pg();
    switch (b) {
      case 0:
        a.j.g(a.B);
        break;
      case 1:
        a.g && (z(a.g, { display: "none" }), a.j.g(null));
        break;
      default:
        throw Error("Unhandled OnHideOutcome: " + b);
    }
  }
  function PD(a) {
    var b = MD(a.l, a.A.mg() + 60);
    b = null == b ? 30 : b + 30;
    const c = a.l.document.createElement("div");
    z(c, kw(a.l));
    z(c, {
      position: "fixed",
      left: "0px",
      bottom: b + "px",
      width: "100vw",
      "text-align": "center",
      "z-index": 2147483642,
      display: "none",
      "pointer-events": "none",
    });
    a.B = a.A.Ka(
      a.l,
      () => a.i(),
      () => {
        a.G.ka();
        QD(a);
      },
      () => {
        a.G.ka();
        OD(a);
      }
    );
    c.appendChild(a.B);
    a.F && (c.className = a.F);
    a.l.document.body.appendChild(c);
    return c;
  }
  class RD {
    constructor(a, b, c) {
      this.l = a;
      this.A = b;
      this.B = null;
      this.j = new U(null);
      this.F = c || null;
      this.G = Jz(a);
      this.g = null;
    }
    K() {
      const a = Zo(this.G.j);
      bp(a, !0, () => void OD(this));
      dp(a, !1, () => void QD(this));
    }
    i() {
      this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
      this.g = null;
      this.G.ka();
      this.j.g(null);
    }
    C() {
      return this.j;
    }
  }
  function SD(a) {
    a.G.g(0);
    null != a.l && (a.l.i(), (a.l = null));
    null != a.j && (a.j.i(), (a.j = null));
  }
  function TD(a) {
    a.j = new RD(a.B, a.I, a.F);
    a.j.K();
    ep(a.A, a.j.C());
    a.G.g(2);
  }
  class UD {
    constructor(a, b, c, d, e) {
      this.B = a;
      this.H = b;
      this.M = c;
      this.I = d;
      this.F = e;
      this.G = new U(0);
      this.A = new U(null);
      this.j = this.l = this.g = null;
    }
    K() {
      this.H
        ? ((this.l = new jD(this.B, this.H, this.M, this.F)),
          this.l.K(),
          ep(this.A, this.l.C()),
          this.G.g(1),
          null == this.g && ((this.g = new Sp(this.B)), this.g.K(2e3)),
          Qp(this.g, () => {
            SD(this);
            TD(this);
          }))
        : TD(this);
    }
    i() {
      SD(this);
      this.g && (this.g.ka(), (this.g = null));
    }
    C() {
      return this.A;
    }
  }
  var VD = (a, b, c, d, e) => {
    a = new UD(
      a,
      CD(a, e),
      new BD(b, d, "#FFF", "#4A4A4A", "normal"),
      new xD(b, c, d),
      "google-dns-link-placeholder"
    );
    a.K();
    return a;
  };
  var WD = (a) => (a.googlefc = a.googlefc || {}),
    XD = (a) => {
      a = a.googlefc = a.googlefc || {};
      return (a.ccpa = a.ccpa || {});
    },
    YD = (a) => {
      a = a.googlefc = a.googlefc || {};
      return (a.__fcusi = a.__fcusi || {});
    };
  function ZD(a, b) {
    b &&
      (a.i = VD(
        a.g,
        b.localizedDnsText,
        b.localizedDnsCollapseText,
        () => $D(a, b),
        a.l
      ));
  }
  function aE(a) {
    var b = XD(a.g);
    if (bE(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
      var c = b.getLocalizedDnsText();
      b = b.getLocalizedDnsCollapseText();
      null != c && null != b && (a.i = VD(a.g, c, b, () => cE(a), a.l));
    }
  }
  function dE(a) {
    const b = WD(a.g);
    b.callbackQueue = b.callbackQueue || [];
    x(at)
      ? ((YD(a.g).overrideDnsLink = !0),
        b.callbackQueue.push({ INITIAL_US_STATES_DATA_READY: (c) => ZD(a, c) }))
      : ((XD(a.g).overrideDnsLink = !0),
        b.callbackQueue.push({ INITIAL_CCPA_DATA_READY: () => aE(a) }));
  }
  function cE(a) {
    rx(a.j);
    XD(a.g).openConfirmationDialog((b) => eE(a, b));
  }
  function $D(a, b) {
    rx(a.j);
    b.openConfirmationDialog((c) => eE(a, c));
  }
  function eE(a, b) {
    b && a.i && (a.i.i(), (a.i = null));
    sx(a.j);
  }
  class fE {
    constructor(a, b, c) {
      this.g = a;
      this.j = lx(b, 2147483643);
      this.l = c;
      this.i = null;
    }
  }
  function bE(a, b) {
    switch (a) {
      case b.CCPA_DOES_NOT_APPLY:
      case b.OPTED_OUT:
        return !1;
      case b.NOT_OPTED_OUT:
        return !0;
      default:
        return !0;
    }
  }
  function gE(a) {
    const b = a.document.createElement("ins");
    hE(a, b);
    z(b, { display: "flex", padding: "8px 0px", width: "100%" });
    return b;
  }
  function iE(a, b, c, d) {
    const e = te(ge(a), "IMG");
    e.src = b;
    d && e.setAttribute("aria-label", d);
    hE(a, e);
    z(e, {
      margin: "0px 12px 0px 8px",
      width: "24px",
      height: "24px",
      cursor: "pointer",
    });
    e.addEventListener("click", (f) => {
      c();
      f.stopPropagation();
    });
    return e;
  }
  function jE(a, b) {
    const c = b.document.createElement("span");
    hE(b, c);
    z(c, { "line-height": "24px", cursor: "pointer" });
    c.appendChild(b.document.createTextNode(a.l));
    c.addEventListener("click", (d) => {
      a.i();
      d.stopPropagation();
    });
    return c;
  }
  function kE(a, b) {
    const c = b.document.createElement("span");
    c.appendChild(b.document.createTextNode(a.j));
    z(c, kw(b));
    z(c, {
      "border-top": "11px solid #ECEDED",
      "font-family": "Arial,sans-serif",
      "font-size": "12px",
      "line-height": "1414px",
      padding: "8px 32px",
      "text-align": "center",
    });
    return c;
  }
  function lE(a) {
    const b = a.document.createElement("div");
    z(b, kw(a));
    z(b, {
      "align-items": "flex-start",
      "background-color": "#FFF",
      "border-radius": "0px 20px 20px 0px",
      "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
      display: "inline-flex",
      "flex-direction": "column",
      float: "left",
    });
    return b;
  }
  class mE {
    constructor(a, b, c, d) {
      this.l = a;
      this.A = b;
      this.j = c;
      this.i = d;
      this.g = new U(!1);
    }
    Ka(a, b, c, d) {
      c = gE(a);
      const e = iE(
          a,
          "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg",
          d
        ),
        f = iE(
          a,
          "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg",
          this.i
        ),
        g = jE(this, a),
        h = iE(
          a,
          "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg",
          b,
          this.A
        );
      z(h, { "margin-left": "auto" });
      c.appendChild(e);
      c.appendChild(f);
      c.appendChild(g);
      c.appendChild(h);
      const k = kE(this, a);
      a = lE(a);
      a.appendChild(c);
      a.appendChild(k);
      this.g.listen((l) => {
        z(e, { display: l ? "none" : "inline" });
        z(f, { display: l ? "inline" : "none" });
        l
          ? (z(g, {
              "line-height": "24px",
              "max-width": "100vw",
              opacity: "1",
              transition:
                "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms",
            }),
            z(h, {
              "margin-right": "12px",
              opacity: 1,
              width: "24px",
              transition: "margin 50ms, opacity 50ms 50ms, width 50ms",
            }),
            z(k, {
              "border-width": "1px",
              "line-height": "14px",
              "max-width": "100vw",
              opacity: "1",
              padding: "8px 32px",
              transition:
                "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms",
            }))
          : (z(g, {
              "line-height": "0px",
              "max-width": "0vw",
              opacity: "0",
              transition:
                "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms",
            }),
            z(h, {
              "margin-right": "0",
              opacity: "0",
              width: "0",
              transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms",
            }),
            z(k, {
              "border-width": "0px",
              "line-height": "0px",
              "max-width": "0vw",
              opacity: "0",
              padding: "0",
              transition:
                "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms",
            }));
      }, !0);
      return a;
    }
    mg() {
      return 71;
    }
    Pg() {
      this.g.g(!1);
      return 0;
    }
    Qg() {
      this.g.g(!0);
    }
  }
  function hE(a, b) {
    z(b, kw(a));
    z(b, {
      "font-family": "Arial,sans-serif",
      "font-weight": "bold",
      "font-size": "14px",
      "letter-spacing": "0.2px",
      color: "#1A73E8",
      "user-select": "none",
    });
  }
  var nE = class extends R {
    constructor() {
      super();
    }
  };
  function oE(a) {
    pE(
      a.i,
      (b) => {
        var c = a.l,
          d = b.xj,
          e = b.Zh,
          f = b.Hh;
        b = b.showRevocationMessage;
        new UD(
          c,
          CD(c, a.j),
          new BD(
            d,
            b,
            "#1A73E8",
            "#FFF",
            "bold",
            "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg",
            "2px solid #ECEDED",
            f
          ),
          new mE(d, e, f, b),
          "google-revocation-link-placeholder"
        ).K();
      },
      () => {
        sx(a.g);
      }
    );
  }
  class qE {
    constructor(a, b, c, d) {
      this.l = a;
      this.g = lx(b, 2147483643);
      this.j = c;
      this.i = d;
    }
  }
  var rE = (a) => {
    if (!a || null == L(a, 1)) return !1;
    a = L(a, 1);
    switch (a) {
      case 1:
        return !0;
      case 2:
        return !1;
      default:
        throw Error("Unhandled AutoConsentUiStatus: " + a);
    }
  };
  function sE(a) {
    if (!0 !== a.i.adsbygoogle_ama_fc_has_run) {
      var b = !1;
      rE(a.g) &&
        ((b = new qE(a.i, a.A, a.l || F(a.g, ir, 4), a.j)),
        rx(b.g),
        oE(b),
        (b = !0));
      var c;
      a: if ((c = a.g) && null != L(c, 3))
        switch (((c = L(c, 3)), c)) {
          case 1:
            c = !0;
            break a;
          case 2:
            c = !1;
            break a;
          default:
            throw Error("Unhandled AutoCcpaUiStatus: " + c);
        }
      else c = !1;
      c && (dE(new fE(a.i, a.A, a.l || F(a.g, ir, 4))), (b = !0));
      c = (c = a.g) ? !0 === ai(c, 5) : !1;
      var d = a.g;
      d = (d ? !0 === ai(d, 6) : !1) || x(Gt);
      c && (b = !0);
      b &&
        ((b = new nE()),
        (b = Di(b, 1, c && d)),
        a.j.start(b),
        (a.i.adsbygoogle_ama_fc_has_run = !0));
    }
  }
  class tE {
    constructor(a, b, c, d, e) {
      this.i = a;
      this.j = b;
      this.g = c;
      this.A = d;
      this.l = e || null;
    }
  }
  function uE(a, b, c, d, e, f) {
    try {
      const g = a.g,
        h = Ye("SCRIPT", g);
      h.async = !0;
      Re(h, b);
      g.head.appendChild(h);
      h.addEventListener("load", () => {
        e();
        d && g.head.removeChild(h);
      });
      h.addEventListener("error", () => {
        0 < c ? uE(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
      });
    } catch (g) {
      f();
    }
  }
  function vE(a, b, c = () => {}, d = () => {}) {
    uE(ge(a), b, 0, !1, c, d);
  }
  function wE(a = null) {
    a = a || r;
    return a.googlefc || (a.googlefc = {});
  }
  Tc(go).map((a) => Number(a));
  Tc(ho).map((a) => Number(a));
  const xE = r.URL;
  function yE(a) {
    var b = new xE(a.location.href).searchParams;
    a = b.get("fcconsent");
    b = b.get("fc");
    return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null;
  }
  function zE(a) {
    const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
    return (a = new xE(a.location.href).searchParams.get("fctype")) &&
      -1 !== b.indexOf(a)
      ? a
      : null;
  }
  var AE = (a, b) => {
    const c = a.document,
      d = () => {
        if (!a.frames[b])
          if (c.body) {
            const e = Ye("IFRAME", c);
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
  var BE = ej(class extends R {});
  function CE(a) {
    if (a.g) return a.g;
    a.I && a.I(a.l) ? (a.g = a.l) : (a.g = pf(a.l, a.M));
    return a.g ?? null;
  }
  function DE(a) {
    a.C ||
      ((a.C = (b) => {
        try {
          var c = a.H ? a.H(b) : void 0;
          if (c) {
            var d = c.ff,
              e = a.F.get(d);
            e && (e.kj || a.F.delete(d), e.wb?.(e.hi, c.payload));
          }
        } catch (f) {}
      }),
      Rb(a.l, "message", a.C));
  }
  function EE(a, b, c) {
    if (CE(a))
      if (a.g === a.l) (b = a.A.get(b)) && b(a.g, c);
      else {
        var d = a.j.get(b);
        if (d && d.Tb) {
          DE(a);
          var e = ++a.T;
          a.F.set(e, { wb: d.wb, hi: d.Lc(c), kj: "addEventListener" === b });
          a.g.postMessage(d.Tb(c, e), "*");
        }
      }
  }
  var FE = class extends T {
    constructor(a, b, c, d) {
      super();
      this.M = b;
      this.I = c;
      this.H = d;
      this.A = new Map();
      this.T = 0;
      this.j = new Map();
      this.F = new Map();
      this.C = void 0;
      this.l = a;
    }
    i() {
      delete this.g;
      this.A.clear();
      this.j.clear();
      this.F.clear();
      this.C && (Sb(this.l, "message", this.C), delete this.C);
      delete this.l;
      delete this.H;
      super.i();
    }
  };
  const GE = (a, b) => {
      const c = {
        cb: (d) => {
          d = BE(d);
          b.callback({ nb: d });
        },
      };
      b.spsp && (c.spsp = b.spsp);
      a = a.googlefc || (a.googlefc = {});
      a.__fci = a.__fci || [];
      a.__fci.push(b.command, c);
    },
    HE = {
      Lc: (a) => a.callback,
      Tb: (a, b) => ({
        __fciCall: { callId: b, command: a.command, spsp: a.spsp || void 0 },
      }),
      wb: (a, b) => {
        a({ nb: b });
      },
    };
  function IE(a) {
    a = BE(a.data.__fciReturn);
    return { payload: a, ff: xi(a, 1) };
  }
  function JE(a, b = !1) {
    if (b) return !1;
    a.j || ((a.g = !!CE(a.caller)), (a.j = !0));
    return a.g;
  }
  function KE(a) {
    return new Promise((b) => {
      JE(a) &&
        EE(a.caller, "getDataWithCallback", {
          command: "loaded",
          callback: (c) => {
            b(c.nb);
          },
        });
    });
  }
  function LE(a, b) {
    JE(a) &&
      EE(a.caller, "getDataWithCallback", {
        command: "prov",
        spsp: $i(b),
        callback: () => {},
      });
  }
  var ME = class extends T {
    constructor(a) {
      super();
      this.g = this.j = !1;
      this.caller = new FE(a, "googlefcPresent", void 0, IE);
      this.caller.A.set("getDataWithCallback", GE);
      this.caller.j.set("getDataWithCallback", HE);
    }
    i() {
      this.caller.ka();
      super.i();
    }
  };
  const NE = (a) => {
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
  function OE(a) {
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = NE(a));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState
      ? a.internalBlockOnErrors
        ? (Qj({ e: String(a.internalErrorState) }, "tcfe"), !1)
        : !0
      : "loaded" !== a.cmpStatus ||
        ("tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus)
      ? !1
      : !0;
  }
  function PE(a, b = {}) {
    return OE(a)
      ? !1 === a.gdprApplies
        ? !0
        : "tcunavailable" === a.tcString ||
          (void 0 === a.gdprApplies && !b.Xn) ||
          "string" !== typeof a.tcString ||
          !a.tcString.length
        ? !b.Gi
        : QE(a, "1")
      : !1;
  }
  function QE(a, b) {
    a: {
      if (a.publisher && a.publisher.restrictions) {
        var c = a.publisher.restrictions[b];
        if (void 0 !== c) {
          c = c["755"];
          break a;
        }
      }
      c = void 0;
    }
    if (0 === c) return !1;
    a.purpose && a.vendor
      ? ((c = a.vendor.consents),
        (c = !(!c || !c["755"])) &&
        "1" === b &&
        a.purposeOneTreatment &&
        "CH" === a.publisherCC
          ? (b = !0)
          : (c && ((a = a.purpose.consents), (c = !(!a || !a[b]))), (b = c)))
      : (b = !0);
    return b;
  }
  function RE(a) {
    var b = ["3", "4"];
    return !1 === a.gdprApplies ? !0 : b.every((c) => QE(a, c));
  }
  function SE(a) {
    if (a.g) return a.g;
    a.g = pf(a.j, "__tcfapiLocator");
    return a.g;
  }
  function TE(a) {
    return "function" === typeof a.j.__tcfapi || null != SE(a);
  }
  function UE(a, b, c, d) {
    c || (c = () => {});
    if ("function" === typeof a.j.__tcfapi) (a = a.j.__tcfapi), a(b, 2, c, d);
    else if (SE(a)) {
      VE(a);
      const e = ++a.H;
      a.C[e] = c;
      a.g &&
        a.g.postMessage(
          { __tcfapiCall: { command: b, version: 2, callId: e, parameter: d } },
          "*"
        );
    } else c({}, !1);
  }
  function WE(a, b) {
    let c = { internalErrorState: 0, internalBlockOnErrors: a.A };
    const d = Jb(() => b(c));
    let e = 0;
    -1 !== a.F &&
      (e = setTimeout(() => {
        e = 0;
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, a.F));
    UE(a, "addEventListener", (f) => {
      f &&
        ((c = f),
        (c.internalErrorState = NE(c)),
        (c.internalBlockOnErrors = a.A),
        OE(c)
          ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"),
            UE(a, "removeEventListener", null, c.listenerId),
            (f = e) && clearTimeout(f),
            d())
          : ("error" === c.cmpStatus || 0 !== c.internalErrorState) &&
            (f = e) &&
            clearTimeout(f));
    });
  }
  function VE(a) {
    a.l ||
      ((a.l = (b) => {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
            .__tcfapiReturn;
          a.C[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }),
      Rb(a.j, "message", a.l));
  }
  class XE extends T {
    constructor(a, b = {}) {
      super();
      this.j = a;
      this.g = null;
      this.C = {};
      this.H = 0;
      this.F = b.timeoutMs ?? 500;
      this.A = b.Nh ?? !1;
      this.l = null;
    }
    i() {
      this.C = {};
      this.l && (Sb(this.j, "message", this.l), delete this.l);
      delete this.C;
      delete this.j;
      delete this.g;
      super.i();
    }
    addEventListener(a) {
      let b = { internalBlockOnErrors: this.A };
      const c = Jb(() => a(b));
      let d = 0;
      -1 !== this.F &&
        (d = setTimeout(() => {
          b.tcString = "tcunavailable";
          b.internalErrorState = 1;
          c();
        }, this.F));
      const e = (f, g) => {
        clearTimeout(d);
        f
          ? ((b = f),
            (b.internalErrorState = NE(b)),
            (b.internalBlockOnErrors = this.A),
            (g && 0 === b.internalErrorState) ||
              ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
          : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
        a(b);
      };
      try {
        UE(this, "addEventListener", e);
      } catch (f) {
        (b.tcString = "tcunavailable"),
          (b.internalErrorState = 3),
          d && (clearTimeout(d), (d = 0)),
          c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && UE(this, "removeEventListener", null, a.listenerId);
    }
  }
  function pE(a, b, c) {
    const d = wE(a.g);
    d.callbackQueue = d.callbackQueue || [];
    d.callbackQueue.push({
      CONSENT_DATA_READY: () => {
        const e = wE(a.g),
          f = new XE(a.g);
        TE(f) &&
          WE(f, (g) => {
            300 === g.cmpId &&
              g.tcString &&
              "tcunavailable" !== g.tcString &&
              b({
                xj: e.getDefaultConsentRevocationText(),
                Zh: e.getDefaultConsentRevocationCloseText(),
                Hh: e.getDefaultConsentRevocationAttestationText(),
                showRevocationMessage: () => e.showRevocationMessage(),
              });
          });
        c();
      },
    });
  }
  function YE(a, b) {
    var c = yE(a.g);
    const d = zE(a.g);
    c = ZE(a.i, { fc: c, fctype: d });
    vE(
      a.g,
      c,
      () => {},
      () => {}
    );
    b && LE(new ME(a.g), b);
  }
  function ZE(a, b) {
    b = { ...b, ers: 2 };
    return ad(
      fd(new ub(vb, "https://fundingchoicesmessages.google.com/i/%{id}"), {
        id: a,
      }),
      b
    );
  }
  class $E {
    constructor(a, b) {
      this.g = a;
      this.i = b;
    }
    start(a) {
      if (this.g === this.g.top)
        try {
          AE(this.g, "googlefcPresent"), YE(this, a);
        } catch (b) {}
    }
  }
  const aF = new Set(["ARTICLE", "SECTION"]);
  var bF = class {
    constructor(a) {
      this.g = a;
    }
  };
  function cF(a, b) {
    return Array.from(b.classList).map((c) => `${a}=${c}`);
  }
  function dF(a) {
    return 0 < a.classList.length;
  }
  function eF(a) {
    return aF.has(a.tagName);
  }
  var fF = class {
    constructor(a, b) {
      this.g = a;
      this.i = b;
    }
  };
  function gF(a) {
    return za(a) && 1 == a.nodeType && "FIGURE" == a.tagName
      ? a
      : (a = a.parentNode)
      ? gF(a)
      : null;
  }
  var hF = (a) => {
    var b = a.src;
    const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
    (b && b.startsWith("data:") && c ? c : b || c)
      ? (a.getAttribute("srcset"),
        (b = (b = gF(a))
          ? (b = b.getElementsByTagName("figcaption")[0])
            ? b.textContent
            : null
          : null),
        (a = new fF(a, b || a.getAttribute("alt") || null)))
      : (a = null);
    return a;
  };
  var iF = class {
    constructor() {
      this.map = new Map();
    }
    clear() {
      this.map.clear();
    }
    delete(a, b) {
      const c = this.map.get(a);
      return c
        ? ((b = c.delete(b)), 0 === c.size && this.map.delete(a), b)
        : !1;
    }
    get(a) {
      return [...(this.map.get(a) ?? [])];
    }
    keys() {
      return this.map.keys();
    }
    add(a, b) {
      let c = this.map.get(a);
      c || this.map.set(a, (c = new Set()));
      c.add(b);
    }
    get size() {
      let a = 0;
      for (const b of this.map.values()) a += b.size;
      return a;
    }
    values() {
      const a = this.map;
      return (function* () {
        for (const b of a.values()) yield* b;
      })();
    }
    [Symbol.iterator]() {
      const a = this.map;
      return (function* () {
        for (const [b, c] of a) {
          const d = b,
            e = c;
          for (const f of e) yield [d, f];
        }
      })();
    }
  };
  function jF(a) {
    return [a[0], [...a[1]]];
  }
  function kF(a) {
    return Array.from(lF(a).map.values())
      .filter((b) => 3 <= b.size)
      .map((b) => [...b]);
  }
  function mF(a, b) {
    return b.every((c) => {
      var d = a.g.getBoundingClientRect(c.g);
      if ((d = 50 <= d.height && d.width >= a.A)) {
        var e = a.g.getBoundingClientRect(c.g);
        d = a.l;
        e = new Qy(e.left, e.right);
        d = Math.max(d.start, e.start) <= Math.min(d.end, e.end);
      }
      return d && null === Mo(a.j, { hb: c.g, bb: nF, Fb: !0 });
    });
  }
  function oF(a) {
    return (
      kF(a)
        .sort(pF)
        .find((b) => mF(a, b)) || []
    );
  }
  function lF(a) {
    return qF(
      Array.from(a.win.document.getElementsByTagName("IMG")).map(hF).filter(jq),
      (b) => {
        var c = [...cF("CLASS_NAME", b.g)],
          d = b.g.parentElement;
        d = [...(d ? cF("PARENT_CLASS_NAME", d) : [])];
        var e = b.g.parentElement?.parentElement;
        e = [...(e ? cF("GRANDPARENT_CLASS_NAME", e) : [])];
        var f = (f = Mo(a.i.g, { hb: b.g, bb: dF }))
          ? cF("NEAREST_ANCESTOR_CLASS_NAME", f)
          : [];
        return [
          ...c,
          ...d,
          ...e,
          ...f,
          ...(b.i ? ["HAS_CAPTION=true"] : []),
          ...(Mo(a.i.g, { hb: b.g, bb: eF })
            ? ["ARTICLE_LIKE_ANCESTOR=true"]
            : []),
        ];
      }
    );
  }
  var rF = class {
    constructor(a, b, c, d, e) {
      var f = new Cp();
      this.win = a;
      this.l = b;
      this.A = c;
      this.g = f;
      this.j = d;
      this.i = e;
    }
  };
  function qF(a, b) {
    const c = new iF();
    for (const d of a) for (const e of b(d)) c.add(e, d);
    return c;
  }
  function nF(a) {
    return "A" === a.tagName && a.hasAttribute("href");
  }
  function pF(a, b) {
    return b.length - a.length;
  }
  function sF(a) {
    const b = a.l.parentNode;
    if (!b) throw Error("Image not in the DOM");
    const c = tF(a.j),
      d = uF(a.j);
    c.appendChild(d);
    b.insertBefore(c, a.l.nextSibling);
    a.A.g().i((e) => {
      var f = a.j;
      const g = d.getBoundingClientRect(),
        h = g.top - e.top,
        k = g.left - e.left,
        l = g.width - e.width;
      e = g.height - e.height;
      (1 > Math.abs(h) &&
        1 > Math.abs(k) &&
        1 > Math.abs(l) &&
        1 > Math.abs(e)) ||
        ((f = f.getComputedStyle(d)),
        z(d, {
          top: parseInt(f.top, 10) - h + "px",
          left: parseInt(f.left, 10) - k + "px",
          width: parseInt(f.width, 10) - l + "px",
          height: parseInt(f.height, 10) - e + "px",
        }));
    });
    return d;
  }
  function vF(a) {
    a.g || (a.g = sF(a));
    return a.g;
  }
  var wF = class extends T {
    constructor(a, b, c) {
      super();
      this.j = a;
      this.l = b;
      this.A = c;
      this.g = null;
    }
    i() {
      if (this.g) {
        var a = this.g;
        const b = a.parentNode;
        b && b.removeChild(a);
        this.g = null;
      }
      super.i();
    }
  };
  function uF(a) {
    const b = a.document.createElement("div");
    z(b, kw(a));
    z(b, {
      position: "absolute",
      left: "0",
      top: "0",
      width: "0",
      height: "0",
      "pointer-events": "none",
    });
    return b;
  }
  function tF(a) {
    const b = a.document.createElement("div");
    z(b, kw(a));
    z(b, { position: "relative", width: "0", height: "0" });
    return b;
  }
  function xF(a) {
    const b = new U(a.dataset.adStatus || null);
    new MutationObserver(() => {
      b.g(a.dataset.adStatus || null);
    }).observe(a, { attributes: !0 });
    return Zo(b);
  }
  const yF = ["Google Material Icons", "Roboto"];
  function zF({ win: a, Ca: b, Hi: c, webPropertyCode: d, La: e, ba: f }) {
    const g = new Ep(a, c);
    c = new wF(a, c, g);
    Ro(c, g);
    a = new AF(a, d, e, b, c, f);
    Ro(a, c);
    a.K();
  }
  var AF = class extends T {
    constructor(a, b, c, d, e, f) {
      super();
      this.win = a;
      this.webPropertyCode = b;
      this.La = c;
      this.Ca = d;
      this.j = e;
      this.ba = f;
      this.g = new U(!1);
    }
    K() {
      const a = BF(this.win, this.webPropertyCode, this.La);
      vF(this.j).appendChild(a.ri);
      Uv(this.win, a.ya);
      xF(a.ya).i((b) => {
        if (null !== b) {
          switch (b) {
            case "unfilled":
              this.ka();
              break;
            case "filled":
              this.g.g(!0);
              break;
            default:
              this.ba?.reportError("Unhandled AdStatus: " + String(b)),
                this.ka();
          }
          this.ba?.tj(this.Ca, b);
        }
      });
      cp(this.g, !0, () => void a.Pi.g(!0));
      a.ki.listen(() => void this.ka());
      a.ji.listen(() => void this.ba?.rj(this.Ca));
    }
  };
  function BF(a, b, c) {
    const d = new U(!1),
      e = a.document.createElement("div");
    z(e, kw(a));
    z(e, {
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translateY(-50%)",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "background-color": "rgba(0, 0, 0, 0.75)",
      opacity: "0",
      transition: "opacity 0.25s ease-in-out",
      "box-sizing": "border-box",
      padding: "40px 5px 5px 5px",
    });
    bp(d, !0, () => void z(e, { opacity: "1" }));
    bp(d, !1, () => void z(e, { opacity: "0" }));
    const f = a.document.createElement("div");
    z(f, kw(a));
    z(f, { display: "block", width: "100%", height: "100%" });
    e.appendChild(f);
    const { zh: g, Oi: h } = CF(a, b);
    f.appendChild(g);
    e.appendChild(DF(a, O(c, 1)));
    b = EF(a, O(c, 2));
    e.appendChild(b.Th);
    b.ue.listen(() => void d.g(!1));
    return { Pi: d, ri: e, ya: h, ji: b.ue, ki: b.ue.delay(a, 450) };
  }
  function DF(a, b) {
    const c = a.document.createElement("div");
    z(c, kw(a));
    z(c, {
      position: "absolute",
      top: "10px",
      width: "100%",
      color: "white",
      "font-family": "Roboto",
      "font-size": "12px",
      "line-height": "16px",
      "text-align": "center",
    });
    c.appendChild(a.document.createTextNode(b));
    return c;
  }
  function EF(a, b) {
    const c = a.document.createElement("button");
    c.setAttribute("aria-label", b);
    z(c, kw(a));
    z(c, {
      position: "absolute",
      top: "10px",
      right: "10px",
      display: "block",
      cursor: "pointer",
      width: "24px",
      height: "24px",
      "font-size": "24px",
      "user-select": "none",
      color: "white",
    });
    b = a.document.createElement("gm-icon");
    b.className = "google-material-icons";
    b.appendChild(a.document.createTextNode("close"));
    c.appendChild(b);
    const d = new kp();
    c.addEventListener("click", () => void jp(d));
    return { Th: c, ue: hp(d) };
  }
  function CF(a, b) {
    a = Qv(a.document, b, null, null, {});
    return { zh: a.ob, Oi: a.ya };
  }
  function FF({ target: a, threshold: b = 0 }) {
    const c = new GF();
    c.K(a, b);
    return c;
  }
  var GF = class extends T {
    constructor() {
      super();
      this.g = new U(!1);
    }
    K(a, b) {
      const c = new IntersectionObserver(
        (d) => {
          for (const e of d)
            if (e.target === a) {
              this.g.g(e.isIntersecting);
              break;
            }
        },
        { threshold: b }
      );
      c.observe(a);
      So(this, () => void c.disconnect());
    }
  };
  function HF(a) {
    const b = IF(a.win, Bi(a.g, 2) ?? 250, Bi(a.g, 3) ?? 300);
    let c = 1;
    return oF(a.l).map((d) => ({ Ca: c++, image: d, ib: b(d) }));
  }
  function JF(a, b) {
    const c = FF({ target: b.image.g, threshold: Ci(a.g) ?? 0.8 });
    a.j.push(c);
    cp(
      fp(c.g, a.win, Bi(a.g, 5) ?? 3e3, (d) => d),
      !0,
      () => {
        if (a.i < (Bi(a.g, 1) ?? 1)) {
          zF({
            win: a.win,
            Ca: b.Ca,
            Hi: b.image.g,
            webPropertyCode: a.webPropertyCode,
            La: a.La,
            ba: a.ba,
          });
          a.i++;
          if (!(a.i < (Bi(a.g, 1) ?? 1))) for (; a.j.length; ) a.j.pop()?.ka();
          a.ba?.sj(b.Ca);
        }
      }
    );
  }
  function KF(a) {
    const b = HF(a);
    b.filter(LF).forEach((c) => void JF(a, c));
    a.ba?.uj(b.map((c) => ({ Ca: c.Ca, ib: c.ib })));
  }
  var MF = class {
    constructor(a, b, c, d, e, f) {
      this.win = a;
      this.webPropertyCode = b;
      this.g = c;
      this.La = d;
      this.l = e;
      this.ba = f;
      this.j = [];
      this.i = 0;
    }
  };
  function LF(a) {
    return 0 === a.ib.rejectionReasons.length;
  }
  function IF(a, b, c) {
    const d = S(a);
    return (e) => {
      e = e.g.getBoundingClientRect();
      const f = [];
      e.width < b && f.push(1);
      e.height < c && f.push(2);
      e.top <= d && f.push(3);
      return { Bb: e.width, Qe: e.height, li: e.top - d, rejectionReasons: f };
    };
  }
  function NF(a, b) {
    a.Ca = b;
    return a;
  }
  var OF = class {
    constructor(a, b, c, d, e) {
      this.A = a;
      this.webPropertyCode = b;
      this.hostname = c;
      this.j = d;
      this.l = e;
      this.errorMessage = this.i = this.Ca = this.g = null;
    }
  };
  function PF(a, b) {
    return new OF(b, a.webPropertyCode, a.hostname, a.i, a.l);
  }
  function QF(a, b, c) {
    var d = a.j++;
    null === a.g ? ((a.g = Zk()), (a = 0)) : (a = Zk() - a.g);
    var e = b.A,
      f = b.webPropertyCode,
      g = b.hostname,
      h = b.j,
      k = b.l.map(encodeURIComponent).join(",");
    if (b.g) {
      var l = { imcnt: b.g.length };
      var m = Math.min(b.g.length, 10);
      for (let n = 0; n < m; n++) {
        const p = `im${n}`;
        l[`${p}_id`] = b.g[n].Ca;
        l[`${p}_s_w`] = b.g[n].ib.Bb;
        l[`${p}_s_h`] = b.g[n].ib.Qe;
        l[`${p}_s_dbf`] = b.g[n].ib.li;
        0 < b.g[n].ib.rejectionReasons.length &&
          (l[`${p}_s_rej`] = b.g[n].ib.rejectionReasons.join(","));
      }
    } else l = null;
    xA(
      "abg::imovad",
      {
        typ: e,
        wpc: f,
        hst: g,
        pvsid: h,
        peid: k,
        rate: c,
        num: d,
        tim: a,
        ...(null === b.Ca ? {} : { imid: b.Ca }),
        ...(null === b.i ? {} : { astat: b.i }),
        ...(null === b.errorMessage ? {} : { errm: b.errorMessage }),
        ...l,
      },
      c
    );
  }
  var RF = class {
    constructor(a, b, c, d) {
      this.webPropertyCode = a;
      this.hostname = b;
      this.i = c;
      this.l = d;
      this.j = 0;
      this.g = null;
    }
    uj(a) {
      var b = PF(this, "fndi");
      b.g = a;
      QF(this, b, 0 < a.length ? 1 : 0.1);
    }
    sj(a) {
      a = NF(PF(this, "adpl"), a);
      QF(this, a, 1);
    }
    tj(a, b) {
      a = NF(PF(this, "adst"), a);
      a.i = b;
      QF(this, a, 1);
    }
    rj(a) {
      a = NF(PF(this, "adis"), a);
      QF(this, a, 1);
    }
    reportError(a) {
      var b = PF(this, "err");
      b.errorMessage = a;
      QF(this, b, 0.1);
    }
  };
  function SF(a, b, c) {
    return (a = wr(a)) && ai(a, 11)
      ? c.map((d) => d.j())
      : c.map((d) => d.A(b));
  }
  var TF = class extends R {
    getHeight() {
      return wi(this, 2);
    }
  };
  function UF(a, b) {
    return Fi(a, 1, b);
  }
  function VF(a, b) {
    return ri(a, 2, b);
  }
  var WF = class extends R {};
  WF.O = [2];
  var XF = class extends R {
    constructor() {
      super();
    }
  };
  XF.O = [5];
  var YF = class extends R {
      constructor() {
        super();
      }
    },
    ZF = [1, 2];
  const $F = new Set([7, 1]);
  var aG = class {
    constructor() {
      this.j = new iF();
      this.l = [];
    }
    g(a, b) {
      $F.has(b) ||
        fq(
          eq(CB(a), (c) => void this.j.add(c, b)),
          (c) => void this.l.push(c)
        );
    }
    i(a, b) {
      for (const c of a) this.g(c, b);
    }
  };
  function bG(a) {
    return new vq(["pedestal_container"], {
      google_reactive_ad_format: 30,
      google_phwr: 2.189,
      google_ad_width: Math.floor(a),
      google_ad_format: "autorelaxed",
      google_full_width_responsive: !0,
      google_enable_content_recommendations: !0,
      google_content_recommendation_ui_type: "pedestal",
    });
  }
  class cG {
    g(a) {
      return bG(Math.floor(a.Fc()));
    }
  }
  var dG = class extends R {
    constructor() {
      super();
    }
  };
  function eG(a, b) {
    var c = b.adClient;
    if ("string" !== typeof c || !c) return !1;
    a.de = c;
    a.j = !!b.adTest;
    c = b.pubVars;
    za(c) && (a.D = c);
    if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
      a.B = {};
      for (const d of b.fillMessage) a.B[d.key] = d.value;
    }
    a.l = b.adWidth;
    a.i = b.adHeight;
    (Ik(a.l) && Ik(a.i)) || xA("rctnosize", b);
    return !0;
  }
  var fG = class {
    constructor() {
      this.B = this.D = this.j = this.de = null;
      this.i = this.l = 0;
    }
    C() {
      return !0;
    }
  };
  function gG(a) {
    try {
      a.setItem("__storage_test__", "__storage_test__");
      const b = a.getItem("__storage_test__");
      a.removeItem("__storage_test__");
      return "__storage_test__" === b;
    } catch (b) {
      return !1;
    }
  }
  function hG(a, b = []) {
    const c = Date.now();
    return Wa(b, (d) => c - d < 1e3 * a);
  }
  function iG(a, b) {
    try {
      const c = a.getItem("__lsv__");
      if (!c) return [];
      let d;
      try {
        d = JSON.parse(c);
      } catch (e) {}
      if (!Array.isArray(d) || $a(d, (e) => !Number.isInteger(e)))
        return a.removeItem("__lsv__"), [];
      d = hG(b, d);
      d.length || a?.removeItem("__lsv__");
      return d;
    } catch (c) {
      return null;
    }
  }
  function jG(a, b) {
    return 0 >= b || null == a || !gG(a) ? null : iG(a, b);
  }
  var kG = (a, b, c) => {
    let d = 0;
    try {
      d |= oo(a);
      d |= ro(a);
      d |= po(a);
      d |= a.innerHeight >= a.innerWidth ? 0 : 8;
      d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
      var e;
      if ((e = b)) {
        var f = jG(c, 3600);
        e = !(f && 1 > f.length);
      }
      e && (d |= 134217728);
      x(Cb) && (d |= 128);
    } catch (g) {
      d |= 32;
    }
    return d;
  };
  var lG = class extends fG {
    constructor() {
      super(...arguments);
      this.A = !1;
      this.g = null;
    }
    C(a) {
      this.A = !!a.enableAma;
      if ((a = a.amaConfig))
        try {
          var b = yr(a);
        } catch (c) {
          b = null;
        }
      else b = null;
      this.g = b;
      return !0;
    }
  };
  const mG = {};
  function nG(a, b, c) {
    let d = oG(a, c, b);
    if (!d) return !0;
    let e = -1;
    const f = c.C.Nb();
    for (; d.dc && d.dc.length; ) {
      const h = d.dc.shift();
      var g = dB(h.ga);
      const k = h.ja.g,
        l = !!c.j.qf || !!c.j.Af || c.Ya() || !!c.j.cg || x(pt) || k > e;
      g = !g || g <= d.bd;
      if (!l) c.B?.g(h, 20);
      else if (!g) c.B?.g(h, 18);
      else if (pG(c, h, { Hd: d.bd })) {
        e = k;
        if (d.Xc.g.length + 1 >= f) return c.B?.i(d.dc, 19), !0;
        d = oG(a, c, b);
        if (!d) return !0;
      }
    }
    return c.l;
  }
  const oG = (a, b, c) => {
    var d = b.C.Nb(),
      e = b.C.l,
      f = b.C;
    f = lC(b.da(), f.g ? f.g.tc : void 0, d);
    if (f.g.length >= d) return b.B?.i(qG(b, f, { types: a }, c), 19), null;
    e
      ? ((d = f.i || (f.i = uo(f.j).scrollHeight || null)),
        (e = !d || 0 > d ? -1 : f.i * e - rC(f)))
      : (e = void 0);
    const g = (d = null == e || 50 <= e) ? qG(b, f, { types: a }, c) : null;
    d || b.B?.i(qG(b, f, { types: a }, c), 18);
    return { Xc: f, bd: e, dc: g };
  };
  mG[2] = Ia(
    function (a, b) {
      a = qG(b, lC(b.da()), { types: a, Db: VB(b.da()) }, 2);
      if (0 == a.length) return !0;
      for (var c = 0; c < a.length; c++) if (pG(b, a[c])) return !0;
      return b.l ? (b.A.push(11), !0) : !1;
    },
    [0]
  );
  mG[5] = Ia(nG, [0], 5);
  mG[10] = Ia(function (a, b) {
    a = [];
    const c = b.Ga;
    c.includes(3) && a.push(2);
    c.includes(1) && a.push(0);
    c.includes(2) && !x(et) && a.push(1);
    return nG(a, 10, b);
  }, 10);
  mG[3] = function (a) {
    if (!a.l) return !1;
    var b = qG(a, lC(a.da()), { types: [0], Db: VB(a.da()) }, 3);
    if (0 == b.length) return !0;
    for (var c = b.length - 1; 0 <= c; c--) if (pG(a, b[c])) return !0;
    a.A.push(11);
    return !0;
  };
  const rG = (a) => {
      var b;
      a.j.qh
        ? (b = x(gt)
            ? new QB(0, null, [], 8, 0.3)
            : new QB(0, null, [], 3, null))
        : (b = VB(a.da()));
      return { types: [0], Db: b };
    },
    tG = (a) => {
      const b = a.da().document.body.getBoundingClientRect().width;
      sG(a, bG(b));
    },
    vG = (a, b) => {
      var c = rG(a);
      c.vj = [5];
      c = qG(a, lC(a.da()), c, 8);
      uG(a, c.reverse(), b);
    },
    uG = (a, b, c) => {
      for (const d of b) if (((b = c.g(d.ja)), pG(a, d, { ee: b }))) return !0;
      return !1;
    };
  mG[8] = function (a) {
    var b = a.da().document;
    if ("complete" != b.readyState)
      return (
        b.addEventListener("readystatechange", () => mG[8](a), { once: !0 }), !0
      );
    if (!a.l) return !1;
    if (!a.Fd()) return !0;
    b = rG(a);
    b.jf = [2, 4, 5];
    b = qG(a, lC(a.da()), b, 8);
    const c = new cG();
    if (uG(a, b, c)) return !0;
    if (a.j.ig)
      switch (a.j.Tg || 0) {
        case 1:
          vG(a, c);
          break;
        default:
          tG(a);
      }
    return !0;
  };
  mG[6] = Ia(nG, [2], 6);
  mG[7] = Ia(nG, [1], 7);
  mG[9] = function (a) {
    const b = oG([0, 2], a, 9);
    if (!b || !b.dc) return a.A.push(17), a.l;
    for (const d of b.dc) {
      var c = a.j.Le || null;
      null == c
        ? (c = null)
        : ((c = eB(d.ga, new wG(), new xG(c, a.da()))),
          (c = new EB(c, d.ia(), d.ja)));
      if (c && !(dB(c.ga) > b.bd) && pG(a, c, { Hd: b.bd, te: !0 }))
        return (a = c.ga.Z), bB(d.ga, 0 < a.length ? a[0] : null), !0;
    }
    a.A.push(17);
    return a.l;
  };
  class wG {
    i(a, b, c, d) {
      return Tv(d.document, a, b);
    }
    j(a) {
      return S(a) || 0;
    }
  }
  var yG = class {
    constructor(a, b, c) {
      this.i = a;
      this.g = b;
      this.Xc = c;
    }
    Ea(a) {
      return this.g ? OC(this.i, this.g, a, this.Xc) : NC(this.i, a, this.Xc);
    }
    Aa() {
      return this.g ? 16 : 9;
    }
  };
  var zG = class {
    constructor(a) {
      this.fe = a;
    }
    Ea(a) {
      return VC(a.document, this.fe);
    }
    Aa() {
      return 11;
    }
  };
  var AG = class {
    constructor(a) {
      this.vb = a;
    }
    Ea(a) {
      return SC(this.vb, a);
    }
    Aa() {
      return 13;
    }
  };
  var BG = class {
    Ea(a) {
      return LC(a);
    }
    Aa() {
      return 12;
    }
  };
  var CG = class {
    constructor(a) {
      this.Ac = a;
    }
    Ea() {
      return QC(this.Ac);
    }
    Aa() {
      return 2;
    }
  };
  var DG = class {
    constructor(a) {
      this.g = a;
    }
    Ea() {
      return TC(this.g);
    }
    Aa() {
      return 3;
    }
  };
  var EG = class {
    Ea() {
      return WC();
    }
    Aa() {
      return 17;
    }
  };
  var FG = class {
    constructor(a) {
      this.g = a;
    }
    Ea() {
      return PC(this.g);
    }
    Aa() {
      return 1;
    }
  };
  var GG = class {
    Ea() {
      return Gb(WA);
    }
    Aa() {
      return 7;
    }
  };
  var HG = class {
    constructor(a) {
      this.jf = a;
    }
    Ea() {
      return RC(this.jf);
    }
    Aa() {
      return 6;
    }
  };
  var IG = class {
    constructor(a) {
      this.g = a;
    }
    Ea() {
      return UC(this.g);
    }
    Aa() {
      return 5;
    }
  };
  var JG = class {
    constructor(a, b) {
      this.minWidth = a;
      this.maxWidth = b;
    }
    Ea() {
      return Ia(XC, this.minWidth, this.maxWidth);
    }
    Aa() {
      return 10;
    }
  };
  var KG = class {
    constructor(a) {
      this.l = a.i.slice(0);
      this.i = a.g.slice(0);
      this.j = a.j;
      this.A = a.l;
      this.g = a.A;
    }
  };
  function LG(a) {
    var b = new MG();
    b.A = a;
    b.i.push(new FG(a));
    return b;
  }
  function NG(a, b) {
    a.i.push(new HG(b));
    return a;
  }
  function OG(a, b) {
    a.i.push(new CG(b));
    return a;
  }
  function PG(a, b) {
    a.i.push(new IG(b));
    return a;
  }
  function QG(a, b) {
    a.i.push(new DG(b));
    return a;
  }
  function RG(a) {
    a.i.push(new GG());
    return a;
  }
  function SG(a) {
    a.g.push(new BG());
    return a;
  }
  function TG(a, b = 0, c, d) {
    a.g.push(new yG(b, c, d));
    return a;
  }
  function UG(a, b = 0, c = Infinity) {
    a.g.push(new JG(b, c));
    return a;
  }
  function VG(a) {
    a.g.push(new EG());
    return a;
  }
  function WG(a, b = 0) {
    a.g.push(new AG(b));
    return a;
  }
  function XG(a, b) {
    a.j = b;
    return a;
  }
  var MG = class {
    constructor() {
      this.j = 0;
      this.l = !1;
      this.i = [].slice(0);
      this.g = [].slice(0);
    }
    build() {
      return new KG(this);
    }
  };
  class xG {
    constructor(a, b) {
      this.i = a;
      this.j = b;
    }
    g() {
      var a = this.i,
        b = this.j;
      const c = a.D || {};
      c.google_ad_client = a.de;
      c.google_ad_height = S(b) || 0;
      c.google_ad_width = qo(b) || 0;
      c.google_reactive_ad_format = 9;
      b = new dG();
      b = Di(b, 1, a.A);
      a.g && H(b, 2, a.g);
      c.google_rasc = $i(b);
      a.j && (c.google_adtest = "on");
      return new vq(["fsi_container"], c);
    }
  }
  var YG = oq(new lq(0, {})),
    ZG = oq(new lq(1, {})),
    $G = (a) => a === YG || a === ZG;
  function aH(a, b, c) {
    Eo(a.g, b) || a.g.set(b, []);
    a.g.get(b).push(c);
  }
  class bH {
    constructor() {
      this.g = new Io();
    }
  }
  function cH(a, b) {
    b &&
      ((a.g.apv = I(b, 4)),
      Yh(b, Sq, 23) && (a.g.sat = "" + ui(D(b, Sq, 23), 1)));
    return a;
  }
  function dH(a, b) {
    a.g.afm = b.join(",");
    return a;
  }
  var eH = class extends rA {
    constructor(a) {
      super(a);
      this.g = {};
    }
    H(a) {
      this.g.a = a.join(",");
      return this;
    }
    G(a) {
      null != a && (this.g.allp = a);
      return this;
    }
    ih(a) {
      if (a) {
        const b = [];
        for (const c of Go(a))
          if (0 < a.get(c).length) {
            const d = a.get(c)[0];
            b.push("(" + [c, d.kb, d.sh].join() + ")");
          }
        this.g.fd = b.join(",");
      }
      return this;
    }
    l(a) {
      try {
        this.g.su = a.location.hostname;
      } catch (b) {
        this.g.su = "_ex";
      }
      a = super.l(a);
      Wc(a, this.g);
      return a;
    }
  };
  function fH(a) {
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }
  function gH(a, b, c, d = 30) {
    c.length <= d
      ? (a[b] = hH(c))
      : ((a[b] = hH(c.slice(0, d))), (a[b + "_c"] = c.length.toString()));
  }
  function hH(a) {
    const b = 0 < a.length && "string" === typeof a[0];
    a = a.map((c) => c?.toString() ?? "null");
    b && (a = a.map((c) => ka(c, "replaceAll").call(c, "~", "")));
    return a.join("~");
  }
  function iH(a) {
    return null == a
      ? "null"
      : "string" === typeof a
      ? a
      : "boolean" === typeof a
      ? a
        ? "1"
        : "0"
      : Number.isInteger(a)
      ? a.toString()
      : a.toFixed(3);
  }
  function jH(a, b) {
    a.i.op = iH(b);
  }
  function kH(a, b, c) {
    gH(a.i, "fap", b);
    a.i.fad = iH(c);
  }
  function lH(a, b, c) {
    gH(a.i, "fmp", b);
    a.i.fmd = iH(c);
  }
  function mH(a, b, c) {
    gH(a.i, "vap", b);
    a.i.vad = iH(c);
  }
  function nH(a, b, c) {
    gH(a.i, "vmp", b);
    a.i.vmd = iH(c);
  }
  function oH(a, b, c) {
    gH(a.i, "pap", b);
    a.i.pad = iH(c);
  }
  function pH(a, b, c) {
    gH(a.i, "pmp", b);
    a.i.pmd = iH(c);
  }
  function qH(a, b) {
    gH(a.i, "psq", b);
  }
  var rH = class extends eH {
    constructor(a) {
      super(0);
      Object.assign(this, a);
      this.i = {};
      this.errors = [];
    }
    l(a) {
      a = super.l(a);
      Object.assign(a, this.i);
      0 < this.errors.length && (a.e = hH(this.errors));
      return a;
    }
  };
  function sH(a, b, c) {
    const d = b.ga;
    Eo(a.g, d) || a.g.set(d, new tH(dq(CB(b)) ?? ""));
    c(a.g.get(d));
  }
  function uH(a, b) {
    sH(a, b, (c) => {
      c.g = !0;
    });
  }
  function vH(a, b) {
    sH(a, b, (c) => {
      c.i = !0;
    });
  }
  function wH(a, b) {
    sH(a, b, (c) => {
      c.j = !0;
    });
    a.I.push(b.ga);
  }
  function xH(a, b, c) {
    sH(a, b, (d) => {
      d.Ub = c;
    });
  }
  function yH(a, b, c) {
    const d = [];
    let e = 0;
    for (const f of c.filter(b))
      $G(f.Ub ?? "") ? ++e : ((b = a.i.get(f.Ub ?? "", null)), d.push(b));
    return { list: d.sort((f, g) => (f ?? -1) - (g ?? -1)), Vb: e };
  }
  function zH(a, b) {
    jH(b, a.i.Ec());
    var c = Ho(a.g).filter((f) => 0 === (f.yb.startsWith(YG) ? 0 : 1)),
      d = Ho(a.g).filter((f) => 1 === (f.yb.startsWith(YG) ? 0 : 1)),
      e = yH(a, (f) => f.g, c);
    kH(b, e.list, e.Vb);
    e = yH(a, (f) => f.g, d);
    lH(b, e.list, e.Vb);
    e = yH(a, (f) => f.i, c);
    mH(b, e.list, e.Vb);
    e = yH(a, (f) => f.i, d);
    nH(b, e.list, e.Vb);
    c = yH(a, (f) => f.j, c);
    oH(b, c.list, c.Vb);
    d = yH(a, (f) => f.j, d);
    pH(b, d.list, d.Vb);
    qH(
      b,
      a.I.map((f) => a.g.get(f)?.Ub).map((f) => a.i.get(f) ?? null)
    );
  }
  function dm() {
    var a = w(AH);
    if (!a.A) return Tl();
    const b = bm(
      am(
        $l(
          Zl(
            Yl(
              Xl(Wl(Vl(Sl(Rl(new Ul(), a.A ?? []), a.H ?? []), a.B), a.G), a.F),
              a.M
            ),
            a.T
          ),
          a.C ?? 0
        ),
        Ho(a.g).map((c) => {
          var d = new Ql();
          d = Ji(d, 1, c.yb);
          var e = a.i.get(c.Ub ?? "", -1);
          d = P(d, 2, e);
          d = Ei(d, 3, c.g);
          return Ei(d, 4, c.i);
        })
      ),
      a.I.map((c) => a.g.get(c)?.Ub).map((c) => a.i.get(c) ?? -1)
    );
    null != a.j && Ei(b, 6, a.j);
    null != a.l && ji(b, 13, lh(a.l), "0");
    return b;
  }
  var AH = class {
    constructor() {
      this.l = this.H = this.A = null;
      this.F = this.G = !1;
      this.j = null;
      this.T = this.B = this.M = !1;
      this.C = null;
      this.i = new Io();
      this.g = new Io();
      this.I = [];
    }
  };
  class tH {
    constructor(a) {
      this.j = this.i = this.g = !1;
      this.Ub = null;
      this.yb = a;
    }
  }
  class BH {
    constructor(a = 0) {
      this.g = a;
    }
  }
  class CH {
    constructor(a) {
      this.i = a;
      this.g = -1;
    }
  }
  function DH(a) {
    let b = 0;
    for (; a; )
      (!b || a.previousElementSibling || a.nextElementSibling) && b++,
        (a = a.parentElement);
    return b;
  }
  function EH(a, b) {
    const c = a.H.filter((d) =>
      Go(d.ld).every((e) => d.ld.get(e) === b.get(e))
    );
    return 0 === c.length
      ? (a.i.push(19), null)
      : c.reduce((d, e) => (d.ld.Ec() > e.ld.Ec() ? d : e), c[0]);
  }
  function FH(a, b) {
    b = CB(b);
    if (null == b.g) return a.i.push(18), null;
    b = b.getValue();
    if (Eo(a.j, b)) return a.j.get(b);
    var c = mq(b);
    c = EH(a, c);
    a.j.set(b, c);
    return c;
  }
  var GH = class {
    constructor(a) {
      this.g = a;
      this.j = new Io();
      this.H = (D(a, tr, 2)?.g() || []).map((b) => {
        const c = mq(O(b, 1)),
          d = xi(b, 2);
        return { ld: c, Xg: d, yb: O(b, 1) };
      });
      this.i = [];
    }
    F() {
      const a = w(AH);
      var b = this.l();
      a.A = b;
      b = this.B();
      a.H = b;
      b = this.A();
      null != b && (a.l = b);
      b = !!this.g.j()?.g()?.g();
      a.F = b;
      b = new Io();
      for (const c of D(this.g, tr, 2)?.g() ?? []) b.set(O(c, 1), xi(c, 2));
      a.i = b;
    }
    C() {
      return [...this.i];
    }
    l() {
      return [...this.g.g()];
    }
    B() {
      return [...bi(this.g, 4, jh, 0)];
    }
    A() {
      return D(this.g, nr, 5)?.g() ?? null;
    }
    G(a) {
      const b = FH(this, a);
      null != b?.yb && xH(w(AH), a, b.yb);
    }
    I(a) {
      const b = Wb(Ht) || 0;
      if (0 == a.length || 0 == b) return !0;
      const c = new Wp(a).filter((d) => {
        d = FH(this, d)?.yb || "";
        return "" != d && !(d === YG || d === ZG);
      });
      return b <= c.g.length / a.length;
    }
  };
  function HH(a, b) {
    return 0 == b.g.length
      ? b
      : b.sort(
          (c, d) =>
            (FH(a.g, c)?.Xg ?? Number.MAX_VALUE) -
            (FH(a.g, d)?.Xg ?? Number.MAX_VALUE)
        );
  }
  function IH(a, b) {
    var c = b.ja.g,
      d = Math,
      e = d.min;
    const f = b.ia(),
      g = b.ga.g();
    c += 200 * e.call(d, 20, 0 == g || 3 == g ? DH(f.parentElement) : DH(f));
    d = a.j;
    0 > d.g && (d.g = uo(d.i).scrollHeight || 0);
    d = d.g - b.ja.g;
    c += 1e3 < d ? 0 : 2 * (1e3 - d);
    a = a.i;
    b = b.ia();
    return (
      c +
      ("string" === typeof b.className &&
      0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot")
        ? a.g
        : 0)
    );
  }
  function JH(a, b) {
    return 0 == b.g.length ? b : b.sort((c, d) => IH(a, c) - IH(a, d));
  }
  function KH(a, b) {
    return b.sort((c, d) => {
      const e = c.ga.G,
        f = d.ga.G;
      var g;
      null == e || null == f
        ? (g =
            null == e && null == f ? IH(a, c) - IH(a, d) : null == e ? 1 : -1)
        : (g = e - f);
      return g;
    });
  }
  class LH {
    constructor(a, b = 0, c = null) {
      this.j = new CH(a);
      this.i = new BH(b);
      this.g = c && new GH(c);
    }
  }
  function MH(a, b, c = 0, d) {
    var e = a.i;
    for (var f of b.l) e = Vp(e, f.Ea(a.j), NH(f.Aa(), c));
    f = e = e.apply(KC(a.j));
    for (const g of b.i)
      f = Vp(
        f,
        g.Ea(a.j),
        iq([
          OH(g.Aa(), c),
          (h) => {
            d?.g(h, g.Aa());
          },
        ])
      );
    switch (b.j) {
      case 1:
        f = JH(a.g, f);
        break;
      case 2:
        f = KH(a.g, f);
        break;
      case 3:
        const g = w(AH);
        f = HH(a.g, f);
        e.forEach((h) => {
          uH(g, h);
          a.g.g?.G(h);
        });
        f.forEach((h) => vH(g, h));
    }
    b.A &&
      (f = Yp(
        f,
        de(a.j.location.href + a.j.localStorage.google_experiment_mod)
      ));
    1 === b.g?.length && aH(a.l, b.g[0], { kb: e.g.length, sh: f.g.length });
    return Xp(f);
  }
  class PH {
    constructor(a, b, c = 0, d = null) {
      this.i = new Wp(a);
      this.g = new LH(b, c, d);
      this.j = b;
      this.l = new bH();
    }
    A() {
      this.i.forEach((a) => {
        a.i && Cv(a.i);
        a.i = null;
      });
    }
  }
  const NH = (a, b) => (c) => aB(c, b, a),
    OH = (a, b) => (c) => aB(c.ga, b, a);
  function QH(a, b, c, d) {
    a: {
      switch (b) {
        case 0:
          a = RH(SH(c), a);
          break a;
        case 3:
          a = RH(c, a);
          break a;
        case 2:
          var e = c.lastChild;
          a = RH(e ? (1 == e.nodeType ? e : SH(e)) : null, a);
          break a;
      }
      a = !1;
    }
    if ((d = !a && !(!d && 2 == b && !TH(c))))
      (b = 1 == b || 2 == b ? c : c.parentNode),
        (d = !(b && !Ns(b) && 0 >= b.offsetWidth));
    return d;
  }
  function RH(a, b) {
    if (!a) return !1;
    a = Ze(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return "left" == a || "right" == a;
  }
  function SH(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
    return a ? a : null;
  }
  function TH(a) {
    return !!a.nextSibling || (!!a.parentNode && TH(a.parentNode));
  }
  var UH = !zc && !vc();
  function VH(a) {
    if (/-[a-z]/.test("adFormat")) return null;
    if (UH && a.dataset) {
      if (xc() && !("adFormat" in a.dataset)) return null;
      a = a.dataset.adFormat;
      return void 0 === a ? null : a;
    }
    return a.getAttribute(
      "data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase()
    );
  }
  var WH = (a, b, c) => {
      if (!b) return null;
      const d = me(document, "INS");
      d.id = "google_pedestal_container";
      d.style.width = "100%";
      d.style.zIndex = "-1";
      if (c) {
        var e = a.getComputedStyle(c),
          f = "";
        if (e && "static" != e.position) {
          var g = c.parentNode.lastElementChild;
          for (f = e.position; g && g != c; ) {
            if ("none" != a.getComputedStyle(g).display) {
              f = a.getComputedStyle(g).position;
              break;
            }
            g = g.previousElementSibling;
          }
        }
        if ((c = f)) d.style.position = c;
      }
      b.appendChild(d);
      if (d) {
        var h = a.document;
        f = h.createElement("div");
        f.style.width = "100%";
        f.style.height = "2000px";
        c = S(a);
        e = h.body.scrollHeight;
        a = a.innerHeight;
        g = h.body.getBoundingClientRect().bottom;
        d.appendChild(f);
        var k = f.getBoundingClientRect().top;
        h = h.body.getBoundingClientRect().top;
        d.removeChild(f);
        f = e;
        e <= a && 0 < c && 0 < g && (f = g - h);
        a = k - h >= 0.8 * f;
      } else a = !1;
      return a ? d : (b.removeChild(d), null);
    },
    XH = (a) => {
      const b = a.document.body;
      var c = WH(a, b, null);
      if (c) return c;
      if (a.document.body) {
        c = Math.floor(a.document.body.getBoundingClientRect().width);
        for (
          var d = [{ element: a.document.body, depth: 0, height: 0 }],
            e = -1,
            f = null;
          0 < d.length;

        ) {
          const h = d.pop(),
            k = h.element;
          var g = h.height;
          0 < h.depth && g > e && ((e = g), (f = k));
          if (5 > h.depth)
            for (g = 0; g < k.children.length; g++) {
              const l = k.children[g],
                m = l.getBoundingClientRect().width;
              (null == m || null == c ? 0 : m >= 0.9 * c && m <= 1.01 * c) &&
                d.push({
                  element: l,
                  depth: h.depth + 1,
                  height: l.getBoundingClientRect().height,
                });
            }
        }
        c = f;
      } else c = null;
      return c ? WH(a, c.parentNode || b, c) : null;
    },
    ZH = (a) => {
      let b = 0;
      try {
        (b |= oo(a)),
          ve() || (b |= 1048576),
          1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
            (b |= 32768),
          YH(a) && (b |= 33554432);
      } catch (c) {
        b |= 32;
      }
      return b;
    },
    YH = (a) => {
      a = a.document.getElementsByClassName("adsbygoogle");
      for (let b = 0; b < a.length; b++)
        if ("autorelaxed" == VH(a[b])) return !0;
      return !1;
    };
  function $H(a) {
    const b = to(a, !0),
      c = uo(a).scrollWidth,
      d = uo(a).scrollHeight;
    let e = "unknown";
    a && a.document && a.document.readyState && (e = a.document.readyState);
    var f = yo(a);
    const g = [];
    var h = [];
    const k = [],
      l = [];
    var m = [],
      n = [],
      p = [];
    let q = 0,
      v = 0,
      A = Infinity,
      B = Infinity,
      E = null;
    var J = hC({ Rb: !1 }, a);
    for (var G of J) {
      J = G.getBoundingClientRect();
      const Ba = b - (J.bottom + f);
      var K = void 0,
        M = void 0;
      if (G.className && kc(G.className, "adsbygoogle-ablated-ad-slot")) {
        K = G.getAttribute("google_element_uid");
        M = a.google_sv_map;
        if (!K || !M || !M[K]) continue;
        K = (M = Sk(M[K])) ? M.height : 0;
        M = M ? M.width : 0;
      } else if (
        ((K = J.bottom - J.top), (M = J.right - J.left), 1 >= K || 1 >= M)
      )
        continue;
      g.push(K);
      k.push(M);
      l.push(K * M);
      G.className && kc(G.className, "google-auto-placed")
        ? ((v += 1),
          G.className && kc(G.className, "pedestal_container") && (E = K))
        : ((A = Math.min(A, Ba)),
          n.push(J),
          (q += 1),
          h.push(K),
          m.push(K * M));
      B = Math.min(B, Ba);
      p.push(J);
    }
    A = Infinity === A ? null : A;
    B = Infinity === B ? null : B;
    f = aI(n);
    p = aI(p);
    h = bI(b, h);
    n = bI(b, g);
    m = bI(b * c, m);
    G = bI(b * c, l);
    return new cI(a, {
      mi: e,
      Rc: b,
      gj: c,
      fj: d,
      Vi: q,
      Ih: v,
      Kh: dI(g),
      Lh: dI(k),
      Jh: dI(l),
      aj: f,
      Zi: p,
      Yi: A,
      Xi: B,
      Be: h,
      Ae: n,
      Dh: m,
      Ch: G,
      ij: E,
    });
  }
  function eI(a, b, c, d) {
    const e = ve() && !(900 <= qo(a.i));
    d = Wa(d, (f) => ab(a.j, f)).join(",");
    return {
      wpc: b,
      su: c,
      eid: d,
      doc: a.g.mi,
      pg_h: fI(a.g.Rc),
      pg_w: fI(a.g.gj),
      pg_hs: fI(a.g.fj),
      c: fI(a.g.Vi),
      aa_c: fI(a.g.Ih),
      av_h: fI(a.g.Kh),
      av_w: fI(a.g.Lh),
      av_a: fI(a.g.Jh),
      s: fI(a.g.aj),
      all_s: fI(a.g.Zi),
      b: fI(a.g.Yi),
      all_b: fI(a.g.Xi),
      d: fI(a.g.Be),
      all_d: fI(a.g.Ae),
      ard: fI(a.g.Dh),
      all_ard: fI(a.g.Ch),
      pd_h: fI(a.g.ij),
      dt: e ? "m" : "d",
    };
  }
  class cI {
    constructor(a, b) {
      this.i = a;
      this.g = b;
      this.j =
        "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(
          " "
        );
    }
  }
  function dI(a) {
    return (
      Yd.apply(
        null,
        Wa(a, (b) => 0 < b)
      ) || null
    );
  }
  function bI(a, b) {
    return 0 >= a ? null : Xd.apply(null, b) / a;
  }
  function aI(a) {
    let b = Infinity;
    for (let e = 0; e < a.length - 1; e++)
      for (let f = e + 1; f < a.length; f++) {
        var c = a[e],
          d = a[f];
        c = Math.max(
          Math.max(0, c.left - d.right, d.left - c.right),
          Math.max(0, c.top - d.bottom, d.top - c.bottom)
        );
        0 < c && (b = Math.min(c, b));
      }
    return Infinity !== b ? b : null;
  }
  function fI(a) {
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }
  function gI(a, b) {
    b = (S(b) || 0) - yo(b);
    let c = 0;
    for (let d = 0; d < a.length; d++) {
      const e = a[d].getBoundingClientRect();
      pC(e) && e.top <= b && (c += 1);
    }
    return c;
  }
  function hI(a) {
    const b = {};
    var c = jC({ Rb: !1, zd: !1, Ad: !1, Bd: !1 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(pC);
    b.Hf = c.length;
    c = kC({ Ad: !0 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(pC);
    b.hg = c.length;
    c = kC({ Bd: !0 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(pC);
    b.Lg = c.length;
    c = kC({ zd: !0 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(pC);
    b.Mf = c.length;
    c = (S(a) || 0) - yo(a);
    c = jC({ Rb: !1 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(pC)
      .filter(Ha(iI, null, c));
    b.If = c.length;
    a = $H(a);
    c = null != a.g.Be ? a.g.Be : null;
    null != c && (b.Cg = c);
    a = null != a.g.Ae ? a.g.Ae : null;
    null != a && (b.Jf = a);
    return b;
  }
  function pG(a, b, { Hd: c, ee: d, te: e } = {}) {
    return aw(997, () => jI(a, b, { Hd: c, ee: d, te: e }), a.g);
  }
  function qG(a, b, c, d) {
    var e = c.Db ? c.Db : a.C;
    const f = WB(e, b.g.length);
    e = a.j.Kf ? e.g : void 0;
    const g = VG(
      WG(
        SG(
          UG(
            TG(
              RG(
                PG(QG(NG(OG(LG(c.types), a.ea), c.jf || []), a.Z), c.vj || [])
              ),
              f.Qc || void 0,
              e,
              b
            ),
            c.minWidth,
            c.maxWidth
          )
        ),
        f.vb || void 0
      )
    );
    a.T && g.g.push(new zG(a.T));
    b = 1;
    a.j.Af ? (b = 2) : a.Ya() && (b = 3);
    XG(g, b);
    a.j.qf && (g.l = !0);
    return aw(995, () => MH(a.i, g.build(), d, a.B || void 0), a.g);
  }
  function sG(a, b) {
    const c = XH(a.g);
    if (c) {
      const d = uq(a.I, b),
        e = Qv(a.g.document, a.G, null, null, {}, d);
      e && (Fv(e.ob, c, 2, 256), aw(996, () => kI(a, e, d), a.g));
    }
  }
  function lI(a) {
    return a.F ? a.F : (a.F = a.g.google_ama_state);
  }
  function jI(a, b, { Hd: c, ee: d, te: e } = {}) {
    const f = b.ga;
    if (f.A) return !1;
    var g = b.ia(),
      h = f.g();
    if (!QH(a.g, h, g, a.l)) return !1;
    h = null;
    f.Kc?.includes(6)
      ? ((h = Math.round(g.getBoundingClientRect().height)),
        (h = new vq(null, {
          google_max_responsive_height: null == c ? h : Math.min(c, h),
          google_full_width_responsive: "false",
        })))
      : (h =
          null == c ? null : new vq(null, { google_max_responsive_height: c }));
    c = wq(L(f.Xd, 2) || 0);
    g = xq(f.G);
    const k = mI(a, f),
      l = nI(a),
      m = uq(a.I, f.T ? f.T.g(b.ja) : null, h, d || null, c, g, k, l),
      n = b.fill(a.G, m);
    if ((e && !oI(a, n, m)) || !aw(996, () => kI(a, n, m), a.g)) return !1;
    fk(9, [f.G, f.Sb]);
    a.Ya() && wH(w(AH), b);
    return !0;
  }
  function mI(a, b) {
    return dq(
      fq(AB(b).map(yq), () => {
        a.A.push(18);
      })
    );
  }
  function nI(a) {
    if (!a.Ya()) return null;
    var b = a.i.g.g?.B();
    if (null == b) return null;
    b = b.join("~");
    a = a.i.g.g?.A() ?? null;
    return zq({ fi: b, ui: a });
  }
  function oI(a, b, c) {
    if (!b) return !1;
    var d = b.ya,
      e = d.style.width;
    d.style.width = "100%";
    var f = d.offsetWidth;
    d.style.width = e;
    d = a.g;
    e = b.ya;
    c = (c && c.Gc()) || {};
    if (d !== d.top) var g = We(d) ? 3 : 16;
    else if (488 > qo(d))
      if (d.innerHeight >= d.innerWidth)
        if (((g = qo(d)), !g || 0.3 < (g - f) / g)) g = 6;
        else {
          if ((g = "true" !== c.google_full_width_responsive))
            b: {
              var h = e.parentElement;
              for (g = qo(d); h; h = h.parentElement) {
                const k = Ze(h, d);
                if (!k) continue;
                const l = jf(k.width);
                if (l && !(l >= g) && "visible" !== k.overflow) {
                  g = !0;
                  break b;
                }
              }
              g = !1;
            }
          g = g ? 7 : !0;
        }
      else g = 5;
    else g = 4;
    if (!0 !== g) f = g;
    else {
      if (!(c = "true" === c.google_full_width_responsive))
        a: {
          do
            if ((c = Ze(e, d)) && "fixed" == c.position) {
              c = !1;
              break a;
            }
          while ((e = e.parentElement));
          c = !0;
        }
      c
        ? ((d = qo(d)),
          (f = d - f),
          (f = d && 0 <= f ? !0 : d ? (-10 > f ? 11 : 0 > f ? 14 : 12) : 10))
        : (f = 9);
    }
    if (f) {
      a = a.g;
      b = b.ya;
      if ((d = Mv(a, b)))
        (f = b.style),
          (f.border =
            f.borderStyle =
            f.outline =
            f.outlineStyle =
            f.transition =
              "none"),
          (f.borderSpacing = f.padding = "0"),
          Kv(b, d, "0px"),
          (f.width = `${qo(a)}px`),
          Nv(a, b, d),
          (f.zIndex = "30");
      return !0;
    }
    Cv(b.ob);
    return !1;
  }
  function kI(a, b, c) {
    if (!b) return !1;
    try {
      Uv(a.g, b.ya, c);
    } catch (d) {
      return Cv(b.ob), a.A.push(6), !1;
    }
    return !0;
  }
  class pI {
    constructor(a, b, c, d, e = {}, f = [], g = !1) {
      this.i = a;
      this.G = b;
      this.g = c;
      this.C = d.Db;
      this.ea = d.Ac || [];
      this.I = d.vi || null;
      this.Z = d.ii || [];
      this.T = d.fe || [];
      this.j = e;
      this.l = !1;
      this.M = [];
      this.A = [];
      this.H = this.F = void 0;
      this.Ga = f;
      this.B = g ? new aG() : null;
    }
    xa() {
      return this.i;
    }
    da() {
      return this.g;
    }
    za(a) {
      this.M.push(a);
    }
    Ya() {
      if (0 == (this.i.g.g?.l().length ?? 0)) return !1;
      if (0 == (Wb(Ht) || 0)) return !0;
      if (void 0 === this.H) {
        const a = XG(SG(RG(LG([0, 1, 2]))), 1).build(),
          b = aw(995, () => MH(this.i, a), this.g);
        this.H = this.i.g.g?.I(b) || !1;
      }
      return this.H;
    }
    Te() {
      return !!this.j.eh;
    }
    Fd() {
      return !YH(this.g);
    }
    pa() {
      return this.B;
    }
  }
  const iI = (a, b) => b.top <= a;
  function qI(a, b, c, d, e, f = 0, g = 0) {
    this.Ra = a;
    this.Sd = f;
    this.Rd = g;
    this.errors = b;
    this.Ab = c;
    this.g = d;
    this.i = e;
  }
  var rI = (a, { Fd: b = !1, Te: c = !1, yj: d = !1, Ya: e = !1 } = {}) => {
    const f = [];
    d && f.push(9);
    if (e) {
      a.includes(4) && !c && b && f.push(8);
      a.includes(1) && f.push(1);
      d = a.includes(3);
      e = a.includes(2) && !x(et);
      const g = a.includes(1);
      (d || e || g) && f.push(10);
    } else
      a.includes(3) && f.push(6),
        a.includes(4) && !c && b && f.push(8),
        a.includes(1) && f.push(1, 5),
        a.includes(2) && !x(et) && f.push(7);
    a.includes(4) && c && b && f.push(8);
    return f;
  };
  function sI(a, b, c) {
    a = rI(a, { Fd: b.Fd(), Te: b.Te(), yj: !!b.j.Le, Ya: b.Ya() });
    return new tI(a, b, c);
  }
  function uI(a, b) {
    const c = mG[b];
    return c ? aw(998, () => c(a.g), a.A) : (a.g.za(12), !0);
  }
  function vI(a, b) {
    return new Promise((c) => {
      setTimeout(() => {
        c(uI(a, b));
      });
    });
  }
  function wI(a) {
    a.g.l = !0;
    return Promise.all(a.i.map((b) => vI(a, b))).then((b) => {
      b.includes(!1) && a.g.za(5);
      a.i.splice(0, a.i.length);
    });
  }
  class tI {
    constructor(a, b, c) {
      this.l = a.slice(0);
      this.i = a.slice(0);
      this.j = bb(this.i, 1);
      this.g = b;
      this.A = c;
    }
  }
  const xI = class {
    constructor(a) {
      this.g = a;
      this.exception = void 0;
    }
  };
  function yI(a) {
    return wI(a).then(() => {
      var b = a.g.i.i.filter(WA).g.length;
      var c = a.g.M.slice(0);
      var d = a.g;
      d = [...d.A, ...(d.i.g.g?.C() || [])];
      b = new qI(
        b,
        c,
        d,
        a.g.i.i.g.length,
        a.g.i.l.g,
        a.g.i.i.filter(WA).filter(XA).g.length,
        a.g.i.i.filter(XA).g.length
      );
      return new xI(b);
    });
  }
  var zI = (a) => {
      let b = 0;
      a.forEach((c) => (b = Math.max(b, c.getBoundingClientRect().width)));
      return (c) => c.getBoundingClientRect().width > 0.5 * b;
    },
    AI = (a) => {
      const b = S(a) || 0;
      return (c) => c.getBoundingClientRect().height >= 0.75 * b;
    };
  var BI = (a, b) => {
    b = vB(b, a);
    const c = b.map((d) => d.g);
    b = b
      .filter((d) => {
        d = d.g.getBoundingClientRect();
        return 0 < d.width && 0 < d.height;
      })
      .filter((d) => zI(c)(d.g))
      .filter((d) => AI(a)(d.g));
    b.sort((d, e) => {
      e = e.g;
      return d.g.getBoundingClientRect().top - e.getBoundingClientRect().top;
    });
    return b;
  };
  function CI(a) {
    return a.reduce((b, c) =>
      b.g.getBoundingClientRect().bottom < c.g.getBoundingClientRect().bottom
        ? c
        : b
    );
  }
  function DI(a, b, c, d) {
    let e = !1;
    const f = new IntersectionObserver(
      (g) => {
        for (const h of g)
          if (h.isIntersecting) e = !0;
          else {
            if ((g = e))
              (g = a), (g = b.getBoundingClientRect().bottom <= S(g.win) / 2);
            g && (EI(a.ba, { typ: "cee", cet: c }), (e = !1));
          }
      },
      { rootMargin: d }
    );
    f.observe(b);
    So(a, () => {
      f.disconnect();
    });
  }
  var FI = class extends T {
    constructor(a, b, c) {
      super();
      this.win = a;
      this.g = b;
      this.ba = c;
    }
  };
  function GI(a, b) {
    EI(a, {
      typ: "cdr",
      af: b.pe,
      ...(0 < b.pe ? { vh: b.U, ph: b.Rc, ah: b.Eh, at: b.Gh } : {}),
    });
  }
  function EI(a, b) {
    a = {
      ...b,
      wpc: a.webPropertyCode,
      cor: a.g,
      tim: Math.round($k() ?? -1),
      num: a.i++,
    };
    xA("ama_vignette", a, 1);
  }
  var HI = class {
    constructor(a) {
      var b = yf();
      this.webPropertyCode = a;
      this.g = b;
      this.i = 0;
    }
  };
  class II {
    g() {
      return new vq([], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs",
      });
    }
  }
  class JI {
    g() {
      return new vq(["adsbygoogle-resurrected-ad-slot"], {});
    }
  }
  function KI(a) {
    return Os(a.g.document).map((b) => {
      const c = new PA(b, 3);
      b = new RA(Wv(a.g, b));
      return new VA(c, b, a.i, !1, 0, [], null, a.g, null);
    });
  }
  class LI {
    constructor(a) {
      var b = new JI();
      this.g = a;
      this.i = b || null;
    }
  }
  const MI = { wf: "10px", re: "10px" };
  function NI(a) {
    return Do(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(
      (b) => new VA(new PA(b, 1), new NA(MI), a.i, !1, 0, [], null, a.g, null)
    );
  }
  class OI {
    constructor(a, b) {
      this.g = a;
      this.i = b || null;
    }
  }
  function PI(a, b) {
    const c = [];
    b.forEach((d, e) => {
      c.push(
        ka(e, "replaceAll").call(e, "~", "_") +
          "--" +
          d.map((f) => Number(f)).join("_")
      );
    });
    gH(a.i, "cnstr", c, 80);
  }
  var QI = class extends rA {
    constructor() {
      super(-1);
      this.i = {};
    }
    l(a) {
      a = super.l(a);
      Object.assign(a, this.i);
      return a;
    }
  };
  function RI(a, b) {
    return null == a
      ? b + "ShouldNotBeNull"
      : 0 == a
      ? b + "ShouldNotBeZero"
      : -1 > a
      ? b + "ShouldNotBeLessMinusOne"
      : null;
  }
  function SI(a, b, c) {
    const d =
      RI(c.ud, "gapsMeasurementWindow") ||
      RI(c.Dc, "gapsPerMeasurementWindow") ||
      RI(c.Nc, "maxGapsToReport");
    return null != d
      ? bq(Error(d))
      : c.Lf || -1 != c.Dc || -1 != c.Nc
      ? $p(new TI(a, b, c))
      : bq(Error("ShouldHaveLimits"));
  }
  function UI(a) {
    return (lI(a.j) && lI(a.j).placed) || [];
  }
  function VI(a) {
    return UI(a).map((b) => Np(Lp(b.element, a.g)));
  }
  function WI(a) {
    return UI(a).map((b) => b.index);
  }
  function XI(a, b) {
    const c = b.ga;
    return !a.B && c.l && null != L(c.l, 8) && 1 == L(c.l, 8)
      ? []
      : c.A
      ? (c.Z || []).map((d) => Np(Lp(d, a.g)))
      : [Np(new Mp(b.ja.g, 0))];
  }
  function YI(a) {
    a.sort((e, f) => e.g - f.g);
    const b = [];
    let c = 0;
    for (let e = 0; e < a.length; ++e) {
      var d = a[e];
      let f = d.g;
      d = d.g + d.i;
      f <= c ? (c = Math.max(c, d)) : (b.push(new Mp(c, f - c)), (c = d));
    }
    return b;
  }
  function ZI(a, b) {
    b = b.map((c) => {
      var d = new TF();
      d = Fi(d, 1, c.g);
      c = c.getHeight();
      return Fi(d, 2, c);
    });
    return VF(UF(new WF(), a), b);
  }
  function $I(a) {
    const b = F(a, TF, 2).map((c) => `G${wi(c, 1)}~${c.getHeight()}`);
    return `W${wi(a, 1)}${b.join("")}`;
  }
  function aJ(a, b) {
    const c = [];
    let d = 0;
    for (const e of Go(b)) {
      const f = b.get(e);
      f.sort((g, h) => h.getHeight() - g.getHeight());
      a.F || f.splice(a.A, f.length);
      !a.C && d + f.length > a.i && f.splice(a.i - d, f.length);
      c.push(ZI(e, f));
      d += f.length;
      if (!a.C && d >= a.i) break;
    }
    return c;
  }
  function bJ(a) {
    const b = F(a, WF, 5).map((c) => $I(c));
    return `M${wi(a, 1)}H${wi(a, 2)}C${wi(a, 3)}B${Number(!!N(a, 4))}${b.join(
      ""
    )}`;
  }
  function cJ(a) {
    var b = FB(Xp(a.j.i.i), a.g),
      c = VI(a),
      d = new Jo(WI(a));
    for (var e = 0; e < b.length; ++e)
      if (!d.contains(e)) {
        var f = XI(a, b[e]);
        c.push(...f);
      }
    c.push(new Mp(0, 0));
    c.push(Np(new Mp(uo(a.g).scrollHeight, 0)));
    b = YI(c);
    c = new Io();
    for (d = 0; d < b.length; ++d)
      (e = b[d]),
        (f = a.G ? 0 : Math.floor(e.g / a.l)),
        Eo(c, f) || c.set(f, []),
        c.get(f).push(e);
    b = aJ(a, c);
    c = new XF();
    c = Fi(c, 1, a.i);
    c = Fi(c, 2, a.l);
    c = Fi(c, 3, a.A);
    a = Di(c, 4, a.B);
    return ri(a, 5, b);
  }
  function dJ(a) {
    a = cJ(a);
    return bJ(a);
  }
  var TI = class {
    constructor(a, b, c) {
      this.G = -1 == c.ud;
      this.l = c.ud;
      this.F = -1 == c.Dc;
      this.A = c.Dc;
      this.C = -1 == c.Nc;
      this.i = c.Nc;
      this.B = c.ug;
      this.j = b;
      this.g = a;
    }
  };
  const eJ = { google_ad_channel: !0, google_ad_host: !0 };
  function fJ(a, b) {
    a.location.href &&
      a.location.href.substring &&
      (b.url = a.location.href.substring(0, 200));
    xA("ama", b, 0.01);
  }
  function gJ(a) {
    const b = {};
    af(eJ, (c, d) => {
      d in a && (b[d] = a[d]);
    });
    return b;
  }
  function hJ(a) {
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
  function iJ(a) {
    let b = "";
    const c = /[/%?&=]/;
    for (let d = 0; d < a.length; ++d) {
      const e = a[d];
      b = e.match(c) ? b + e : b + encodeURIComponent(e);
    }
    return b;
  }
  function jJ(a, b) {
    a = bi(a, 2, Zg);
    if (!a) return !1;
    for (let c = 0; c < a.length; c++) if (a[c] == b) return !0;
    return !1;
  }
  function kJ(a, b) {
    a = iJ(hJ(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
    const c = cf(a),
      d = lJ(a);
    return (
      b.find((e) => {
        const f = Yh(e, Jq, 7) ? ch(Uh(D(e, Jq, 7), 1)) : ch(Uh(e, 1));
        e = Yh(e, Jq, 7) ? L(D(e, Jq, 7), 2) : 2;
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
  function lJ(a) {
    const b = {};
    for (;;) {
      b[cf(a)] = !0;
      if (!a) return b;
      a = a.substring(0, a.lastIndexOf("/"));
    }
  }
  var nJ = (a) => {
      try {
        mJ(a, a.localStorage);
      } catch (b) {
        fJ(a, { lserr: 1 });
      }
    },
    mJ = (a, b) => {
      try {
        b.removeItem("google_ama_config");
      } catch (c) {
        fJ(a, { lserr: 1 });
      }
    };
  function oJ(a) {
    if (x(ft)) var b = null;
    else
      try {
        b = a.getItem("google_ama_config");
      } catch (d) {
        b = null;
      }
    try {
      var c = b ? yr(b) : null;
    } catch (d) {
      c = null;
    }
    return c;
  }
  function pJ(a) {
    return (a.google_ad_modifications = a.google_ad_modifications || {});
  }
  function qJ(a, b) {
    a = pJ(a);
    a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
    const c = !a.processed_sra_frame_pingbacks[b];
    a.processed_sra_frame_pingbacks[b] = !0;
    return c;
  }
  function rJ(a) {
    let b = a.location.href;
    if (a === a.top) return { url: b, Ue: !0 };
    let c = !1;
    const d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    (a = a.location.ancestorOrigins) &&
      (a = a[a.length - 1]) &&
      -1 === b.indexOf(a) &&
      ((c = !1), (b = a));
    return { url: b, Ue: c };
  }
  function sJ(a, b) {
    af(a, (c, d) => {
      b[d] = c;
    });
  }
  function tJ(a) {
    if (a === a.top) return 0;
    for (let b = a; b && b !== b.top && Te(b); b = b.parent) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }
  function uJ() {
    if (vJ) return vJ;
    const a = sk() || window,
      b = a.google_persistent_state_async;
    return null != b &&
      "object" == typeof b &&
      null != b.S &&
      "object" == typeof b.S
      ? (vJ = b)
      : (a.google_persistent_state_async = vJ = new wJ());
  }
  function xJ(a, b, c) {
    b = yJ[b] || `google_ps_${b}`;
    a = a.S;
    const d = a[b];
    return void 0 === d ? ((a[b] = c()), a[b]) : d;
  }
  function Y(a, b, c) {
    return xJ(a, b, () => c);
  }
  function zJ(a, b, c) {
    return (a.S[yJ[b] || `google_ps_${b}`] = c);
  }
  function AJ(a, b) {
    return zJ(a, b, Y(a, b, 0) + 1);
  }
  function BJ() {
    var a = uJ();
    return Y(a, 20, {});
  }
  function CJ() {
    var a = uJ();
    const b = Y(a, 31, !1);
    b || zJ(a, 31, !0);
    return !b;
  }
  function DJ() {
    var a = uJ();
    return Y(a, 26);
  }
  function EJ() {
    var a = uJ();
    return Y(a, 28, []);
  }
  function FJ() {
    var a = uJ();
    return xJ(a, 39, GJ);
  }
  var wJ = class {
      constructor() {
        this.S = {};
      }
    },
    vJ = null;
  const yJ = {
    [8]: "google_prev_ad_formats_by_region",
    [9]: "google_prev_ad_slotnames_by_region",
  };
  var HJ = {
      google_ad_block: "ad_block",
      google_ad_client: "client",
      google_ad_intent_query: "ait_q",
      google_ad_output: "output",
      google_ad_callback: "callback",
      google_ad_height: "h",
      google_ad_resize: "twa",
      google_ad_slot: "slotname",
      google_ad_unit_key: "adk",
      google_ad_dom_fingerprint: "adf",
      google_placement_id: "pi",
      google_daaos_ts: "daaos",
      google_erank: "epr",
      google_ad_width: "w",
      google_captcha_token: "captok",
      google_content_recommendation_columns_num: "cr_col",
      google_content_recommendation_rows_num: "cr_row",
      google_ctr_threshold: "ctr_t",
      google_cust_criteria: "cust_params",
      gfwrnwer: "fwrn",
      gfwrnher: "fwrnh",
      google_image_size: "image_size",
      google_last_modified_time: "lmt",
      google_loeid: "loeid",
      google_max_num_ads: "num_ads",
      google_max_radlink_len: "max_radlink_len",
      google_mtl: "mtl",
      google_native_settings_key: "nsk",
      google_enable_content_recommendations: "ecr",
      google_num_radlinks: "num_radlinks",
      google_num_radlinks_per_unit: "num_radlinks_per_unit",
      google_pucrd: "pucrd",
      google_reactive_plaf: "plaf",
      google_reactive_plat: "plat",
      google_reactive_fba: "fba",
      google_reactive_sra_channels: "plach",
      google_responsive_auto_format: "rafmt",
      armr: "armr",
      google_plas: "plas",
      google_rl_dest_url: "rl_dest_url",
      google_rl_filtering: "rl_filtering",
      google_rl_mode: "rl_mode",
      google_rt: "rt",
      google_video_play_muted: "vpmute",
      google_source_type: "src_type",
      google_restrict_data_processing: "rdp",
      google_tag_for_child_directed_treatment: "tfcd",
      google_tag_for_under_age_of_consent: "tfua",
      google_tag_origin: "to",
      google_ad_semantic_area: "sem",
      google_tfs: "tfs",
      google_package: "pwprc",
      google_tag_partner: "tp",
      fra: "fpla",
      google_ml_rank: "mlr",
      google_apsail: "psa",
      google_ad_channel: "channel",
      google_ad_type: "ad_type",
      google_ad_format: "format",
      google_color_bg: "color_bg",
      google_color_border: "color_border",
      google_color_link: "color_link",
      google_color_text: "color_text",
      google_color_url: "color_url",
      google_page_url: "url",
      google_ad_section: "region",
      google_cpm: "cpm",
      google_encoding: "oe",
      google_safe: "adsafe",
      google_font_face: "f",
      google_font_size: "fs",
      google_hints: "hints",
      google_ad_host: "host",
      google_ad_host_channel: "h_ch",
      google_ad_host_tier_id: "ht_id",
      google_kw_type: "kw_type",
      google_kw: "kw",
      google_contents: "contents",
      google_targeting: "targeting",
      google_adtest: "adtest",
      google_alternate_color: "alt_color",
      google_alternate_ad_url: "alternate_ad_url",
      google_cust_age: "cust_age",
      google_cust_ch: "cust_ch",
      google_cust_gender: "cust_gender",
      google_cust_interests: "cust_interests",
      google_cust_job: "cust_job",
      google_cust_l: "cust_l",
      google_cust_lh: "cust_lh",
      google_cust_u_url: "cust_u_url",
      google_cust_id: "cust_id",
      google_language: "hl",
      google_city: "gcs",
      google_country: "gl",
      google_region: "gr",
      google_content_recommendation_ad_positions: "ad_pos",
      google_content_recommendation_columns_num: "cr_col",
      google_content_recommendation_rows_num: "cr_row",
      google_content_recommendation_ui_type: "crui",
      google_content_recommendation_use_square_imgs: "cr_sq_img",
      google_color_line: "color_line",
      google_disable_video_autoplay: "disable_video_autoplay",
      google_full_width_responsive_allowed: "fwr",
      google_full_width_responsive: "fwrattr",
      efwr: "efwr",
      google_pgb_reactive: "pra",
      rc: "rc",
      google_resizing_allowed: "rs",
      google_resizing_height: "rh",
      google_resizing_width: "rw",
      rpe: "rpe",
      google_responsive_formats: "resp_fmts",
      google_safe_for_responsive_override: "sfro",
      google_video_doc_id: "video_doc_id",
      google_video_product_type: "video_product_type",
      google_webgl_support: "wgl",
      easpi: "easpi",
      asro: "asro",
      sugawps: "aseaascu",
      seiel: "aseiel",
      slmct: "aslmct",
      samct: "asamct",
      vmsli: "itsi",
    },
    IJ = (a) =>
      (a = a.innerText || a.innerHTML) &&
      (a = a
        .replace(/^\s+/, "")
        .split(/\r?\n/, 1)[0]
        .match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
      RegExp("google_ad_client").test(a[1])
        ? a[1]
        : null,
    JJ = (a) => {
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
    KJ = (a) => {
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
  function Tn(a, b) {
    0 < a.g.size || LJ(a);
    const c = a.g.get(0);
    c ? c.push(b) : a.g.set(0, [b]);
  }
  function MJ(a, b, c, d) {
    Rb(b, c, d);
    So(a, () => Sb(b, c, d));
  }
  function NJ(a, b) {
    1 !== a.j && ((a.j = 1), 0 < a.g.size && OJ(a, b));
  }
  function LJ(a) {
    a.win.document.visibilityState
      ? MJ(a, a.win.document, "visibilitychange", (b) => {
          "hidden" === a.win.document.visibilityState && NJ(a, b);
          "visible" === a.win.document.visibilityState && (a.j = 0);
        })
      : "onpagehide" in a.win
      ? (MJ(a, a.win, "pagehide", (b) => {
          NJ(a, b);
        }),
        MJ(a, a.win, "pageshow", () => {
          a.j = 0;
        }))
      : MJ(a, a.win, "beforeunload", (b) => {
          NJ(a, b);
        });
  }
  function OJ(a, b) {
    for (let c = 9; 0 <= c; c--)
      a.g.get(c)?.forEach((d) => {
        d(b);
      });
  }
  var PJ = class extends T {
    constructor(a) {
      super();
      this.win = a;
      this.j = 0;
      this.g = new Map();
    }
  };
  async function QJ(a, b) {
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
  function RJ(a) {
    const b = a.g.pc;
    return null !== b && 0 !== b ? b : (a.g.pc = zf(a.win));
  }
  function SJ(a) {
    var b = a.g.wpc;
    if (null === b || "" === b) {
      b = a.g;
      var c = a.win;
      if (c.google_ad_client) a = String(c.google_ad_client);
      else {
        if (
          null ==
          (a =
            pJ(c).head_tag_slot_vars?.google_ad_client ??
            c.document
              .querySelector(".adsbygoogle[data-ad-client]")
              ?.getAttribute("data-ad-client"))
        ) {
          b: {
            a = c.document.getElementsByTagName("script");
            c = (c.navigator && c.navigator.userAgent) || "";
            c =
              RegExp(
                "appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                "i"
              ).test(c) ||
              (/i(phone|pad|pod)/i.test(c) &&
                /applewebkit/i.test(c) &&
                !/version|safari/i.test(c) &&
                !Qk())
                ? IJ
                : JJ;
            for (var d = a.length - 1; 0 <= d; d--) {
              var e = a[d];
              if (
                !e.google_parsed_script_for_pub_code &&
                ((e.google_parsed_script_for_pub_code = !0), (e = c(e)))
              ) {
                a = e;
                break b;
              }
            }
            a = null;
          }
          if (a) {
            c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            for (d = {}; (e = c.exec(a)); ) d[e[1]] = KJ(e[2]);
            a = d;
            a = a.google_ad_client ? a.google_ad_client : "";
          } else a = "";
        }
        a = a ?? "";
      }
      b = b.wpc = a;
    }
    return b;
  }
  function TJ(a, b) {
    var c = new Fn(),
      d = RJ(a);
    c = P(c, 1, d).kc(SJ(a));
    c = P(c, 3, a.g.sd);
    return P(c, 7, Math.round(b || a.win.performance.now()));
  }
  async function UJ(a) {
    await QJ(a.win, () => !(!RJ(a) || !SJ(a)));
  }
  function VJ() {
    var a = w(WJ);
    a.i && (a.g.tar += 1);
  }
  function XJ(a) {
    var b = w(WJ);
    if (b.i) {
      var c = b.l;
      a(c);
      b.g.cc = c.toJSON();
    }
  }
  async function YJ(a, b, c) {
    if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
      a.g.lgdp.push(Number(b));
      var d = a.win.performance.now();
      await UJ(a);
      var e = a.wa;
      a = TJ(a, d);
      d = new rm();
      b = Q(d, 1, b);
      c = ii(b, 2, c, $g);
      c = qi(a, 9, Gn, c);
      Pn(e, c);
    }
  }
  async function ZJ(a, b) {
    await UJ(a);
    var c = TJ(a);
    b = qi(c, 5, Gn, b);
    a.i && !a.g.le.includes(2) && (a.g.le.push(2), Pn(a.wa, b));
  }
  async function $J(a, b, c) {
    await UJ(a);
    var d = a.wa;
    a = TJ(a, c);
    a = P(a, 3, 1);
    b = qi(a, 6, Gn, b);
    Pn(d, b);
  }
  async function aK(a, b) {
    if (a.i) {
      await UJ(a);
      var c = a.wa;
      a = TJ(a);
      b = qi(a, 11, Gn, b);
      Pn(c, b);
    }
  }
  var WJ = class {
    constructor(a, b) {
      this.win = sk() || window;
      this.j = b ?? new PJ(this.win);
      this.wa = a ?? new Vn("m202402270101", 100, 100, !0, this.j);
      this.g = xJ(uJ(), 33, () => {
        const c = Wb(Vs);
        return {
          sd: c,
          ssp: 0 < c && $e() < 1 / c,
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
    get kd() {
      return this.g.cu;
    }
    set kd(a) {
      this.g.cu = a;
    }
    get l() {
      return vA(1227, () => aj(sm, Ph(this.g.cc || []))) || new sm();
    }
  };
  var cK = (a, b, c, d, e, f = null, g = null) => {
      bK(a, new BA(a), b, c, d, e, f, g);
    },
    bK = (a, b, c, d, e, f, g = null, h = null) => {
      if (c)
        if (d) {
          var k = rD(d, e);
          try {
            const l = new dK(a, b, c, d, e, k, f, g, h);
            aw(990, () => eK(l), a);
          } catch (l) {
            ek() && fk(15, [l]),
              AA(b, Er, qA(dH(cH(new eH(0).kc(c), d), k).za(1), l)),
              ZJ(w(WJ), hm(new qm(), Bl(1)));
          }
        } else AA(b, Er, new eH(0).kc(c).za(8)), ZJ(w(WJ), hm(new qm(), Bl(8)));
      else AA(b, Er, new eH(0).za(9)), ZJ(w(WJ), hm(new qm(), Bl(9)));
    };
  function eK(a) {
    a.F.forEach((b) => {
      switch (b) {
        case 0:
          aw(991, () => fK(a), a.g);
          break;
        case 1:
          aw(
            1073,
            () => {
              const c = x(At);
              kD(new qD(a.g, a.B, a.i, a.A, a.j.aa, c));
            },
            a.g
          );
          break;
        case 5:
          aw(
            1137,
            () => {
              DA(new EA(a.g, a.B, a.i, a.A));
            },
            a.g
          );
          break;
        case 2:
          gK(a);
          break;
        case 6:
          a.runAutoGames();
          break;
        case 7:
          aw(
            1203,
            () => {
              var c = D(a.i, mr, 34);
              if (c) {
                var d = a.g,
                  e = a.A,
                  f = c.i();
                c = d.location.hostname;
                var g = D(f, lr, 1)?.g() ?? [];
                c = new RF(e, c, zf(r), g);
                if ((g = D(f, lr, 1)))
                  if ((f = D(f, kr, 2))) {
                    Pp(d, yF);
                    const l = new Oo();
                    var h = d.innerWidth;
                    var k = 0.375 * h;
                    h = new Qy(k, h - k);
                    k = d.innerWidth;
                    k = 900 <= qo(d) ? 0.2 * k : 0.5 * k;
                    KF(new MF(d, e, g, f, new rF(d, h, k, l, new bF(l)), c));
                  } else c.reportError("No messages");
                else c.reportError("No settings");
              }
            },
            a.g
          );
      }
    });
  }
  function fK(a) {
    if (vr(a.i) && 1 === L(vr(a.i), 1)) {
      var b = D(vr(a.i), Aq, 6);
      b && 2 === L(b, 1) && (Vv(a.g), (a.C = "b"));
    }
    var c = x(gt) ? void 0 : a.j.mj;
    b = null;
    b = x(gt) ? VB(a.g) : TB(a.g, c);
    if (a.j.aa && Yh(a.j.aa, Iq, 10)) {
      var d = $h(a.j.aa.g(), 1);
      null !== d && void 0 !== d && (b = KB(a.g, d, c));
      x(yt) && 2 === a.j.aa.g()?.g() && (b = SB(a.j.aa.g(), b));
    }
    Yh(a.i, Fq, 26) && (b = XB(b, D(a.i, Fq, 26), a.g));
    b = ZB(b, a.g);
    c = a.j.aa ? bi(a.j.aa, 6, Zg) : [];
    d = a.j.aa ? F(a.j.aa, Oq, 5) : [];
    const e = a.j.aa ? bi(a.j.aa, 2, Zg) : [],
      f = aw(
        993,
        () => {
          var g = a.i,
            h = F(g, ir, 1),
            k = a.j.aa && jJ(a.j.aa, 1);
          k = x(Ft) ? "" : k ? "text_image" : "text";
          var l = new II(),
            m = UA(h, a.g, { Mh: l, Ni: new SA(k) });
          h.length != m.length && a.H.push(13);
          m = m.concat(NI(new OI(a.g, l)));
          h = 0;
          l = x(vt);
          var n = !1;
          if (vr(g) && 1 === L(vr(g), 1)) {
            var p = D(vr(g), Aq, 6);
            p && ((h = ti(p, 2) || 0), 1 === L(p, 1) && (n = !0));
          }
          p = D(g, ur, 24)?.j()?.g()?.g() || !1;
          if (l || n || p)
            (l = KI(new LI(a.g))),
              (n = w(AH)),
              (m = m.concat(l)),
              (n.M = !0),
              (n.C = l.length),
              "n" === a.C && (a.C = D(g, ur, 24)?.g()?.length ? "o" : "p");
          l = x(yt) && 2 === a.j.aa.g()?.g() && a.j.aa.g()?.j();
          l = x(bt) || l;
          a: {
            if ((n = D(g, er, 6)))
              for (q of n.g())
                if (Yh(q, kq, 4)) {
                  var q = !0;
                  break a;
                }
            q = !1;
          }
          l && q
            ? ((q = m.concat),
              (l = a.g),
              (n = D(g, er, 6))
                ? ((l = xB(n.g(), l)), (k = SF(g, k, l)))
                : (k = []),
              (k = q.call(m, k)))
            : ((q = m.concat),
              (l = a.g),
              (n = D(g, er, 6))
                ? ((l = wB(n.g(), l)), (k = SF(g, k, l)))
                : (k = []),
              (k = q.call(m, k)));
          m = k;
          g = D(g, ur, 24);
          return new PH(m, a.g, h, g);
        },
        a.g
      );
    a.l = new pI(
      f,
      a.A,
      a.g,
      { Db: b, vi: a.M, Ac: a.j.Ac, ii: c, fe: d },
      hK(a),
      e,
      x(ut)
    );
    lI(a.l)?.optimization?.ablatingThisPageview &&
      !a.l.Ya() &&
      (Vv(a.g), (w(AH).B = !0), (a.C = "f"));
    a.G = sI(e, a.l, a.g);
    aw(992, () => yI(a.G), a.g).then(
      aw(994, () => a.ea.bind(a), a.g),
      a.Z.bind(a)
    );
    iK(a);
  }
  function gK(a) {
    const b = D(a.i, jr, 18);
    b && sE(new tE(a.g, new $E(a.g, a.A), b, new qx(a.g), F(a.i, ir, 1)));
  }
  function hK(a) {
    const b = x(xt);
    if (!wr(a.i))
      return {
        qf: b,
        Af: !1,
        cg: !1,
        qh: !1,
        ig: !1,
        eh: !1,
        jj: 0,
        Tg: 0,
        Kf: jK(a),
        Le: a.I,
      };
    const c = wr(a.i);
    return {
      qf: b || N(c, 14, !1),
      Af: N(c, 2, !1),
      cg: N(c, 3, !1),
      qh: N(c, 4, !1),
      ig: N(c, 5, !1),
      eh: N(c, 6, !1),
      jj: yi(c, 8, 0),
      Tg: L(c, 10),
      Kf: jK(a),
      Le: a.I,
    };
  }
  function iK(a) {
    if (x(nv)) {
      var b = new HI(a.A);
      const e = D(a.i, er, 6)?.g(),
        f = 0 < e?.length;
      var c = b,
        d = !!ix(a.g).reactiveTypeEnabledInAsfe[8];
      EI(c, { typ: "pv", asp: Number(f), ve: Number(d) });
      f &&
        ((a = new FI(a.g, e, b)),
        (b = BI(a.win, a.g)),
        0 === b.length
          ? GI(a.ba, { pe: 0 })
          : ((c = CI(b)),
            (d = c.g.getBoundingClientRect()),
            GI(a.ba, {
              pe: b.length,
              U: S(a.win),
              Rc: uo(a.win).scrollHeight,
              Eh: d.height,
              Gh: a.win.scrollY + d.top,
            }),
            (c = c.g),
            DI(a, c, 0, "-50% 0px 0px 0px"),
            DI(a, c, 1, "0px 0px 0px 0px")));
    }
  }
  function jK(a) {
    return x(nt) || (x(yt) && 2 === a.j.aa?.g()?.g())
      ? !1
      : a.j.aa && Yh(a.j.aa, Iq, 10)
      ? 0.5 <= ($h(a.j.aa.g(), 1) || 0)
      : !0;
  }
  function kK(a, b) {
    for (
      var c = pA(pA(new eH(b.Ra), b.errors), a.H), d = b.Ab, e = 0;
      e < d.length;
      e++
    )
      a: {
        for (var f = c, g = d[e], h = 0; h < f.B.length; h++)
          if (f.B[h] == g) break a;
        f.B.push(g);
      }
    c.g.pp = b.Rd;
    c.g.ppp = b.Sd;
    c.g.ppos = b.placementPositionDiffs;
    c.g.eatf = b.wc;
    c.g.eatfAbg = b.xc;
    c.g.reatf = b.Ob;
    c = dH(cH(c.H(a.G.l.slice(0)), a.i), a.F).kc(a.A);
    if ((d = b.Ha))
      (c.g.as_count = d.Hf),
        (c.g.d_count = d.hg),
        (c.g.ng_count = d.Lg),
        (c.g.am_count = d.Mf),
        (c.g.atf_count = d.If),
        (c.g.mdns = fH(d.Cg)),
        (c.g.alldns = fH(d.Jf));
    c = c.G(b.ac).ih(b.rd);
    d = b.Rc;
    null != d && (c.g.pgh = d);
    c.g.abl = b.pg;
    c.g.rr = a.C;
    void 0 !== b.exception && qA(c, b.exception).za(1);
    return c;
  }
  function lK(a, b) {
    var c = kK(a, b);
    AA(
      a.B,
      0 < b.errors.length || 0 < a.H.length || void 0 !== b.exception ? Er : Dr,
      c
    );
    if (D(a.i, ur, 24)) {
      a.l.i.g.g?.F();
      b = lI(a.l);
      const d = w(AH);
      d.j = !!b?.optimization?.ablationFromStorage;
      b?.optimization?.ablatingThisPageview && (d.G = !0);
      d.T = !!b?.optimization?.availableAbg;
      b = w(AH);
      c = new rH(c);
      b.A
        ? ((c.i.sl = hH(b.A ?? [])),
          (c.i.daaos = hH(b.H ?? [])),
          (c.i.ab = iH(b.G)),
          (c.i.rr = iH(b.M)),
          (c.i.oab = iH(b.F)),
          null != b.j && (c.i.sab = iH(b.j)),
          b.B && (c.i.fb = iH(b.B)),
          (c.i.ls = iH(b.T)),
          jH(c, b.i.Ec()),
          null != b.C && (c.i.rp = iH(b.C)),
          null != b.l && (c.i.expl = iH(b.l)),
          zH(b, c))
        : c.errors.push("irr");
      AA(a.B, Gr, c);
    }
    c = a.l?.pa();
    x(ut) &&
      null != c &&
      ((c = new Map([...c.j.map.entries()].map(jF))),
      (b = new QI()),
      PI(b, c),
      AA(a.B, Kr, b));
  }
  function mK(a, b) {
    const c = w(WJ);
    if (c.i) {
      var d = new qm(),
        e = b.Ab.filter((g) => null !== g),
        f = a.H.concat(b.errors, b.exception ? [1] : []).filter(
          (g) => null !== g
        );
      lm(
        jm(
          om(
            nm(
              mm(
                km(
                  em(
                    gm(
                      im(
                        fm(
                          d,
                          a.G.l.slice(0).map((g) => {
                            var h = new Al();
                            return Wh(h, 1, Yg(g));
                          })
                        ),
                        e.map((g) => {
                          var h = new Dl();
                          return Wh(h, 1, Yg(g));
                        })
                      ),
                      f.map((g) => Bl(g))
                    ),
                    D(a.i, Sq, 23)?.g()
                  ),
                  b.Ra
                ).G(b.ac),
                b.Ob
              ),
              b.wc
            ),
            b.xc
          ),
          a.F.map((g) => g.toString())
        ),
        Kl(
          Jl(
            Il(
              Hl(Gl(Fl(El(new Ll(), b.Ha?.Hf), b.Ha?.hg), b.Ha?.Lg), b.Ha?.Mf),
              b.Ha?.If
            ),
            b.Ha?.Cg
          ),
          b.Ha?.Jf
        )
      );
      if (b.rd)
        for (let g of Go(b.rd)) {
          e = new hi();
          for (let h of b.rd.get(g)) Pl(e, Nl(Ml(new Ol(), h.kb), h.sh));
          pm(d).set(g.toString(), e);
        }
      D(a.i, ur, 24) && cm(d);
      ZJ(c, d);
    }
  }
  function nK(a) {
    return vr(a.i) && 1 === L(vr(a.i), 1)
      ? !(D(vr(a.i), Aq, 6) && 1 <= (ti(D(vr(a.i), Aq, 6), 3) || 0))
      : !1;
  }
  function oK(a) {
    if (nK(a)) {
      a = a.l;
      var b = kC({ Ad: !0, Bd: !0 }, a.g);
      a = 0 < gI(b, a.g);
    } else (a = a.l.g), (b = jC({ Rb: !1, zd: !1 }, a)), (a = 0 < gI(b, a));
    return a;
  }
  function pK(a, b) {
    try {
      x(dt) && a.l?.xa()?.A();
    } catch (c) {
      AA(a.B, Jr, qA(dH(cH(new eH(b).kc(a.A), a.i), a.F).za(14), c));
    }
  }
  function qK(a, b, c) {
    {
      var d = lI(a.l),
        e = b.g;
      const f = e.g,
        g = e.Rd;
      let h = e.Ra,
        k = e.Sd,
        l = e.errors.slice(),
        m = e.Ab.slice(),
        n = b.exception;
      const p = pJ(a.g).had_ads_ablation ?? !1;
      d
        ? (d.numAutoAdsPlaced ? (h += d.numAutoAdsPlaced) : a.G.j && m.push(13),
          void 0 !== d.exception && (n = d.exception),
          d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced),
          (c = {
            Ra: h,
            Rd: g,
            Sd: k,
            ac: f,
            errors: e.errors.slice(),
            Ab: m,
            exception: n,
            Ob: c,
            wc: !!d.eatf,
            xc: !!d.eatfAbg,
            pg: p,
          }))
        : (m.push(12),
          a.G.j && m.push(13),
          (c = {
            Ra: h,
            Rd: g,
            Sd: k,
            ac: f,
            errors: l,
            Ab: m,
            exception: n,
            Ob: c,
            wc: !1,
            xc: !1,
            pg: p,
          }));
    }
    c.Ha = hI(a.l.g);
    if ((b = b.g.i)) c.rd = b;
    c.Rc = uo(a.g).scrollHeight;
    if (ek() || D(a.i, Rq, 25)?.j()) {
      d = Xp(a.l.i.i);
      b = [];
      for (const f of d) {
        d = {};
        e = f.I;
        for (const g of Go(e)) d[g] = e.get(g);
        d = {
          anchorElement: YA(f),
          position: f.g(),
          clearBoth: f.H,
          locationType: f.Sb,
          placed: f.A,
          placementProto: f.l ? f.l.toJSON() : null,
          articleStructure: f.B ? f.B.toJSON() : null,
          rejectionReasons: d,
        };
        b.push(d);
      }
      fk(14, [{ placementIdentifiers: b }, a.l.G, c.Ha]);
    }
    return c;
  }
  function rK(a, b) {
    var c = a.l.g;
    c = c.googleSimulationState = c.googleSimulationState || {};
    c.amaConfigPlacementCount = b.ac;
    c.numAutoAdsPlaced = b.Ra;
    c.hasAtfAd = b.Ob;
    void 0 !== b.exception && (c.exception = b.exception);
    null != a.l &&
      ((a = SI(a.g, a.l, { ud: -1, Dc: -1, Nc: -1, ug: !0, Lf: !0 })),
      null != a.g
        ? ((c.placementPositionDiffs = dJ(a.getValue())),
          (b = cJ(a.getValue())),
          (a = new YF()),
          (a = qi(a, 2, ZF, b)),
          (c.placementPositionDiffsReport = $i(a)))
        : ((b = a.i.message),
          (c.placementPositionDiffs = "E" + b),
          (a = new YF()),
          (a = ki(a, 1, ZF, nh(b))),
          (c.placementPositionDiffsReport = $i(a))));
  }
  function sK(a, b) {
    lK(a, {
      Ra: 0,
      ac: void 0,
      errors: [],
      Ab: [],
      exception: b,
      Ob: void 0,
      wc: void 0,
      xc: void 0,
      Ha: void 0,
    });
    mK(a, {
      Ra: 0,
      ac: void 0,
      errors: [],
      Ab: [],
      exception: b,
      Ob: void 0,
      wc: void 0,
      xc: void 0,
      Ha: void 0,
    });
  }
  class dK {
    constructor(a, b, c, d, e, f, g, h, k) {
      this.g = a;
      this.B = b;
      this.A = c;
      this.i = d;
      this.j = e;
      this.F = f;
      this.M = h || null;
      this.H = [];
      this.I = k;
      this.T = g;
      this.C = "n";
    }
    runAutoGames() {
      const a = D(this.i, Tq, 32);
      a &&
        this.T.runAutoGames({
          win: this.g,
          webPropertyCode: this.A,
          Qf: a,
          Lb: (D(this.i, br, 33)?.g()?.i() ?? null) || $q().i(),
        });
    }
    ea(a) {
      try {
        pK(this, a.g.Ra);
        const b = oK(this) || nK(this) ? oK(this) : void 0;
        Cr({ Ee: b }, this.g);
        const c = qK(this, a, oK(this));
        Yh(this.i, Rq, 25) && ai(D(this.i, Rq, 25), 1) && rK(this, c);
        lK(this, c);
        mK(this, c);
        wA(753, () => {
          if (x(it) && null != this.l) {
            var d = SI(this.g, this.l, {
                ud: Wb(tt),
                Dc: Wb(st),
                Nc: Wb(kt),
                ug: !0,
                Lf: !1,
              }),
              e = Uc(c);
            null != d.g
              ? ((d = dJ(d.getValue())), (e.placementPositionDiffs = d))
              : (e.placementPositionDiffs = "E" + d.i.message);
            e = kK(this, e);
            AA(this.B, Fr, e);
          }
        })();
      } catch (b) {
        sK(this, b);
      }
    }
    Z(a) {
      pK(this, 0);
      sK(this, a);
    }
  }
  var tK = class extends R {},
    uK = ej(tK);
  function vK(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    const c = b;
    return c ? cq(() => uK(c)) : $p(null);
  }
  function wK(a, b) {
    return Di(a, 5, b);
  }
  var xK = class extends R {
    constructor() {
      super();
    }
    j() {
      return N(this, 3);
    }
    A() {
      return null != ai(this, 3);
    }
    g() {
      return N(this, 5);
    }
    l() {
      return N(this, 6);
    }
  };
  xK.O = [10];
  var AK = ({ win: a, Dd: b, sg: c = !1, tg: d = !1 }) =>
    yK({ win: a, Dd: b, sg: c, tg: d })
      ? (b = Y(uJ(), 24))
        ? zK(a, wK(new xK(), PE(b)))
        : bq(Error("tcunav"))
      : zK(a, wK(new xK(), !0));
  function yK({ win: a, Dd: b, sg: c, tg: d }) {
    if (!(d = !d && TE(new XE(a)))) {
      if ((c = !c)) {
        if (b) {
          a = vK(a);
          if (null != a.g)
            if ((a = a.getValue()) && null != L(a, 1))
              b: switch (((a = L(a, 1)), a)) {
                case 1:
                  a = !0;
                  break b;
                default:
                  throw Error("Unhandled AutoGdprFeatureStatus: " + a);
              }
            else a = !1;
          else yA(806, a.i), (a = !1);
          b = !a;
        }
        c = b;
      }
      d = c;
    }
    return d ? !0 : !1;
  }
  function zK(a, b) {
    return (a = Wj(b, a)) ? $p(a) : bq(Error("unav"));
  }
  var BK = class extends R {};
  class CK {
    constructor(a, b, c, d, e) {
      this.g = a;
      this.l = b;
      this.B = c;
      this.i = !1;
      this.j = d;
      this.A = e;
    }
  }
  class DK {
    constructor() {
      this.promise = new Promise((a, b) => {
        this.resolve = a;
        this.g = b;
      });
    }
  }
  function EK() {
    const { promise: a, resolve: b } = new DK();
    return { promise: a, resolve: b };
  }
  function FK(a, b, c = () => {}) {
    b.google_llp || (b.google_llp = {});
    b = b.google_llp;
    let d = b[a];
    if (d) return d;
    d = EK();
    b[a] = d;
    c();
    return d;
  }
  function GK(a, b, c) {
    return FK(a, b, () => {
      Xe(b.document, c);
    }).promise;
  }
  function HK() {
    const a = {};
    Xb(Ys) && (a.bust = Xb(Ys));
    var b = uJ();
    b = Y(b, 38, "");
    "" !== b && (a.sbust = b);
    return a;
  }
  const IK = new Map([
    [2, 7],
    [3, 1],
    [4, 3],
    [5, 12],
  ]);
  function JK(a, b, c) {
    c = ad(c, HK());
    if (1 === a) return { ho: Xe(b.document, c), Zc: new Promise(() => {}) };
    if (IK.has(a)) return { Zc: GK(IK.get(a), b, c) };
    throw Error(`Unexpected chunkId: ${a}`);
  }
  var KK = class {
    constructor(a) {
      this.jb = a;
    }
    runAutoGames({ win: a, webPropertyCode: b, Qf: c, Lb: d }) {
      zA(
        1116,
        JK(5, a, this.jb).Zc.then((e) => {
          e.runAutoGames({
            win: a,
            webPropertyCode: b,
            serializedAutoGamesConfig: $i(c),
            serializedFloatingToolbarMessages: $i(d),
          });
        })
      );
    }
  };
  var LK = {
      Lk: "google_ads_preview",
      yl: "google_mc_lab",
      Ol: "google_anchor_debug",
      Nl: "google_bottom_anchor_debug",
      INTERSTITIAL: "google_ia_debug",
      km: "google_scr_debug",
      mm: "google_ia_debug_allow_onclick",
      Km: "googleads",
      yh: "google_pedestal_debug",
      dn: "google_responsive_slot_preview",
      cn: "google_responsive_dummy_ad",
      Bk: "google_audio_sense",
      Ek: "google_auto_gallery",
      Gk: "google_auto_storify_swipeable",
      Fk: "google_auto_storify_scrollable",
      Dk: "google_games_single_game",
      Ck: "google_games_catalog",
    },
    MK = {
      google_bottom_anchor_debug: 1,
      google_anchor_debug: 2,
      google_ia_debug: 8,
      google_scr_debug: 9,
      googleads: 2,
      google_pedestal_debug: 30,
    };
  var NK = {
    INTERSTITIAL: 1,
    BOTTOM_ANCHOR: 2,
    TOP_ANCHOR: 3,
    1: "INTERSTITIAL",
    2: "BOTTOM_ANCHOR",
    3: "TOP_ANCHOR",
  };
  function OK(a, b) {
    if (!a) return !1;
    a = a.hash;
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = PK(b);
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function PK(a) {
    let b = "";
    af(a.split("_"), (c) => {
      b += c.substr(0, 2);
    });
    return b;
  }
  function QK() {
    var a = r.location;
    let b = !1;
    af(LK, (c) => {
      OK(a, c) && (b = !0);
    });
    return b;
  }
  function RK(a, b) {
    switch (a) {
      case 1:
        return OK(b, "google_ia_debug");
      case 2:
        return OK(b, "google_bottom_anchor_debug");
      case 3:
        return OK(b, "google_anchor_debug") || OK(b, "googleads");
    }
  }
  function SK({ win: a, webPropertyCode: b, jb: c }) {
    OK(a.location, "google_games_single_game")
      ? TK(a, b, 1, c)
      : OK(a.location, "google_games_catalog") && TK(a, b, 2, c);
  }
  function TK(a, b, c, d) {
    var e = new Tq();
    c = Wh(e, 1, Yg(c));
    new KK(d).runAutoGames({ win: a, webPropertyCode: b, Qf: c, Lb: $q().i() });
  }
  var UK = class extends R {
    constructor() {
      super();
    }
    Bi() {
      return zi(this, 3);
    }
  };
  const VK = { "-": 0, Y: 2, N: 1 };
  var WK = class extends R {
    constructor() {
      super();
    }
    getVersion() {
      return wi(this, 2);
    }
  };
  WK.O = [3];
  function XK(a) {
    return a.includes("~") ? a.split("~").slice(1) : [];
  }
  function YK(a) {
    return Lf(0 !== a.length % 4 ? a + "A" : a)
      .map((b) => b.toString(2).padStart(8, "0"))
      .join("");
  }
  function ZK(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error(`Invalid input [${a}] not a bit string.`);
    return parseInt(a, 2);
  }
  function $K(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error(`Invalid input [${a}] not a bit string.`);
    const b = [1, 2, 3, 5];
    let c = 0;
    for (let d = 0; d < a.length - 1; d++)
      b.length <= d && b.push(b[d - 1] + b[d - 2]),
        (c += parseInt(a[d], 2) * b[d]);
    return c;
  }
  function aL(a, b) {
    a = YK(a);
    return a.length < b ? a.padEnd(b, "0") : a;
  }
  function bL(a) {
    var b = YK(a),
      c = ZK(b.slice(0, 6));
    a = ZK(b.slice(6, 12));
    var d = new WK();
    c = Gi(d, 1, c);
    a = Gi(c, 2, a);
    b = b.slice(12);
    c = ZK(b.slice(0, 12));
    d = [];
    let e = b.slice(12).replace(/0+$/, "");
    for (let k = 0; k < c; k++) {
      if (0 === e.length)
        throw Error(
          `Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`
        );
      var f = 0 === ZK(e[0]);
      e = e.slice(1);
      var g = cL(e, b),
        h = 0 === d.length ? 0 : d[d.length - 1];
      h = $K(g) + h;
      e = e.slice(g.length);
      if (f) d.push(h);
      else {
        f = cL(e, b);
        g = $K(f);
        for (let l = 0; l <= g; l++) d.push(h + l);
        e = e.slice(f.length);
      }
    }
    if (0 < e.length)
      throw Error(
        `Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`
      );
    return ii(a, 3, d, $g);
  }
  function cL(a, b) {
    const c = a.indexOf("11");
    if (-1 === c)
      throw Error(
        `Expected section bitstring but not found in [${a}] part of [${b}]`
      );
    return a.slice(0, c + 2);
  }
  var dL = class extends R {
    constructor() {
      super();
    }
  };
  var eL = class extends R {
    constructor() {
      super();
    }
  };
  var fL = class extends R {
    getVersion() {
      return wi(this, 1);
    }
  };
  var gL = class extends R {
    constructor() {
      super();
    }
  };
  function hL(a) {
    var b = new iL();
    return H(b, 1, a);
  }
  var iL = class extends R {
    constructor() {
      super();
    }
  };
  const jL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    kL = 6 + jL.reduce((a, b) => a + b);
  var lL = class extends R {
    constructor() {
      super();
    }
  };
  var mL = class extends R {
    getVersion() {
      return wi(this, 1);
    }
  };
  var nL = class extends R {
    constructor() {
      super();
    }
  };
  function oL(a) {
    var b = new pL();
    return H(b, 1, a);
  }
  var pL = class extends R {
    constructor() {
      super();
    }
  };
  const qL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    rL = 6 + qL.reduce((a, b) => a + b);
  var sL = class extends R {
    constructor() {
      super();
    }
  };
  var tL = class extends R {
    constructor() {
      super();
    }
  };
  var uL = class extends R {
    getVersion() {
      return wi(this, 1);
    }
  };
  var vL = class extends R {
    constructor() {
      super();
    }
  };
  function wL(a) {
    var b = new xL();
    return H(b, 1, a);
  }
  var xL = class extends R {
    constructor() {
      super();
    }
  };
  const yL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    zL = 6 + yL.reduce((a, b) => a + b);
  var AL = class extends R {
    constructor() {
      super();
    }
  };
  var BL = class extends R {
    constructor() {
      super();
    }
    getVersion() {
      return wi(this, 1);
    }
  };
  const CL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    DL = 6 + CL.reduce((a, b) => a + b);
  var EL = "a".charCodeAt(),
    FL = Tc(go),
    GL = Tc(ho);
  function HL() {
    var a = new IL();
    return P(a, 1, 0);
  }
  function JL(a) {
    const b = xi(a, 1);
    a = wi(a, 2);
    return new Date(1e3 * b + a / 1e6);
  }
  var IL = class extends R {};
  function KL(a, b) {
    if (a.g + b > a.i.length)
      throw Error("Requested length " + b + " is past end of string.");
    const c = a.i.substring(a.g, a.g + b);
    a.g += b;
    return parseInt(c, 2);
  }
  function LL(a) {
    let b = KL(a, 12);
    const c = [];
    for (; b--; ) {
      var d = !0 === !!KL(a, 1),
        e = KL(a, 16);
      if (d) for (d = KL(a, 16); e <= d; e++) c.push(e);
      else c.push(e);
    }
    c.sort((f, g) => f - g);
    return c;
  }
  function ML(a, b, c) {
    const d = [];
    for (let e = 0; e < b; e++)
      if (KL(a, 1)) {
        const f = e + 1;
        if (c && -1 === c.indexOf(f))
          throw Error(`ID: ${f} is outside of allowed values!`);
        d.push(f);
      }
    return d;
  }
  function NL(a) {
    const b = KL(a, 16);
    return !0 === !!KL(a, 1)
      ? ((a = LL(a)),
        a.forEach((c) => {
          if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }),
        a)
      : ML(a, b);
  }
  class OL {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.i = a;
      this.g = 0;
    }
    skip(a) {
      this.g += a;
    }
  }
  var QL = (a) => {
    try {
      var b = Lf(a.split(".")[0])
        .map((d) => d.toString(2).padStart(8, "0"))
        .join("");
      const c = new OL(b);
      b = {};
      b.tcString = a;
      b.gdprApplies = !0;
      c.skip(78);
      b.cmpId = KL(c, 12);
      b.cmpVersion = KL(c, 12);
      c.skip(30);
      b.tcfPolicyVersion = KL(c, 6);
      b.isServiceSpecific = !!KL(c, 1);
      b.useNonStandardStacks = !!KL(c, 1);
      b.specialFeatureOptins = PL(ML(c, 12, GL), GL);
      b.purpose = {
        consents: PL(ML(c, 24, FL), FL),
        legitimateInterests: PL(ML(c, 24, FL), FL),
      };
      b.purposeOneTreatment = !!KL(c, 1);
      b.publisherCC =
        String.fromCharCode(EL + KL(c, 6)) + String.fromCharCode(EL + KL(c, 6));
      b.vendor = {
        consents: PL(NL(c), null),
        legitimateInterests: PL(NL(c), null),
      };
      return b;
    } catch (c) {
      return null;
    }
  };
  const PL = (a, b) => {
    const c = {};
    if (Array.isArray(b) && 0 !== b.length)
      for (const d of b) c[d] = -1 !== a.indexOf(d);
    else for (const d of a) c[d] = !0;
    delete c[0];
    return c;
  };
  var RL = class extends R {
    g() {
      return null != I(this, 2);
    }
  };
  var SL = class extends R {
    g() {
      return null != I(this, 2);
    }
  };
  var TL = class extends R {};
  var UL = class extends R {},
    VL = ej(UL);
  UL.O = [7];
  function WL(a) {
    a = XL(a);
    try {
      var b = a ? VL(a) : null;
    } catch (c) {
      b = null;
    }
    return b ? D(b, TL, 4) || null : null;
  }
  function XL(a) {
    a = new Vj(a).get("FCCDCF", "");
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
  function YL(a) {
    a.__uspapiPostMessageReady || ZL(new $L(a));
  }
  function ZL(a) {
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
        a.win.__uspapi(e.command, e.version, (f, g) => {
          const h = {};
          h.__uspapiReturn = { returnValue: f, success: g, callId: e.callId };
          f = c ? JSON.stringify(h) : h;
          b.source &&
            "function" === typeof b.source.postMessage &&
            b.source.postMessage(f, b.origin);
          return f;
        });
    };
    a.win.addEventListener("message", a.g);
    a.win.__uspapiPostMessageReady = !0;
  }
  var $L = class {
    constructor(a) {
      this.win = a;
      this.g = null;
    }
  };
  function aM(a) {
    a.__tcfapiPostMessageReady || bM(new cM(a));
  }
  function bM(a) {
    a.i = (b) => {
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
    a.g.addEventListener("message", a.i);
    a.g.__tcfapiPostMessageReady = !0;
  }
  var cM = class {
    constructor(a) {
      this.g = a;
      this.i = null;
    }
  };
  var dM = class extends R {};
  var eM = class extends R {
      g() {
        return null != I(this, 1);
      }
    },
    fM = ej(eM);
  eM.O = [2];
  function gM(a, b) {
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
      for (let p = 0; p < l.length / 2; p++)
        m.push(ZK(l.slice(n, n + 2))), (n += 2);
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
    a = YK(a[0]);
    const k = ZK(a.slice(0, 6));
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
  function hM(a) {
    a !== a.top ||
      a.__uspapi ||
      a.frames.__uspapiLocator ||
      ((a = new iM(a)), jM(a), kM(a));
  }
  function jM(a) {
    !a.l ||
      a.g.__uspapi ||
      a.g.frames.__uspapiLocator ||
      ((a.g.__uspapiManager = "fc"),
      AE(a.g, "__uspapiLocator"),
      Ka("__uspapi", (...b) => lM(a, ...b), a.g),
      YL(a.g));
  }
  function kM(a) {
    !a.i ||
      a.g.__tcfapi ||
      a.g.frames.__tcfapiLocator ||
      ((a.g.__tcfapiManager = "fc"),
      AE(a.g, "__tcfapiLocator"),
      (a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || []),
      Ka("__tcfapi", (...b) => mM(a, ...b), a.g),
      aM(a.g));
  }
  function lM(a, b, c, d) {
    "function" === typeof d &&
      "getUSPData" === b &&
      d({ version: 1, uspString: a.l }, !0);
  }
  function nM(a) {
    if (!a?.g() || 0 === O(a, 1).length || 0 == F(a, dM, 2).length) return null;
    const b = O(a, 1);
    let c;
    try {
      var d = bL(b.split("~")[0]);
      c = XK(b);
    } catch (e) {
      return null;
    }
    a = F(a, dM, 2).reduce((e, f) => (xi(oM(e), 1) > xi(oM(f), 1) ? e : f));
    d = bi(d, 3, ah).indexOf(wi(a, 1));
    return -1 === d || d >= c.length
      ? null
      : { uspString: gM(c[d], wi(a, 1)), ze: JL(oM(a)) };
  }
  function pM(a) {
    a = a.find((b) => 13 === zi(b, 1));
    if (a?.g())
      try {
        return fM(O(a, 2));
      } catch (b) {}
    return null;
  }
  function oM(a) {
    return Yh(a, IL, 2) ? D(a, IL, 2) : HL();
  }
  function mM(a, b, c, d, e = null) {
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
            a.i
              ? ((e = QL(a.i)),
                (e.addtlConsent = null != a.j ? a.j : void 0),
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
  class iM {
    constructor(a) {
      this.g = a;
      var b = XL(this.g.document);
      try {
        var c = b ? VL(b) : null;
      } catch (e) {
        c = null;
      }
      (b = c)
        ? ((c = D(b, SL, 5) || null),
          (b = F(b, RL, 7)),
          (b = pM(b ?? [])),
          (c = { Uf: c, og: b }))
        : (c = { Uf: null, og: null });
      b = c;
      c = nM(b.og);
      b = b.Uf;
      if (b?.g() && 0 !== O(b, 2).length) {
        var d = Yh(b, IL, 1) ? D(b, IL, 1) : HL();
        b = { uspString: O(b, 2), ze: JL(d) };
      } else b = null;
      this.l =
        b && c
          ? c.ze > b.ze
            ? c.uspString
            : b.uspString
          : b
          ? b.uspString
          : c
          ? c.uspString
          : null;
      this.i = (c = WL(a.document)) && null != I(c, 1) ? O(c, 1) : null;
      this.j = (a = WL(a.document)) && null != I(a, 2) ? O(a, 2) : null;
    }
  }
  const qM = (a) => {
    const b = a[0] / 255,
      c = a[1] / 255;
    a = a[2] / 255;
    return (
      0.2126 * (0.03928 >= b ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)) +
      0.7152 * (0.03928 >= c ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)) +
      0.0722 * (0.03928 >= a ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4))
    );
  };
  var rM = (a, b) => {
    a = qM(a);
    b = qM(b);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  };
  var sM = Promise;
  class tM {
    constructor(a) {
      this.j = a;
    }
    i(a, b, c) {
      this.j.then((d) => {
        d.i(a, b, c);
      });
    }
    g(a, b) {
      return this.j.then((c) => c.g(a, b));
    }
  }
  class uM {
    constructor(a) {
      this.data = a;
    }
  }
  function vM(a, b) {
    wM(a, b);
    return new xM(a);
  }
  class xM {
    constructor(a) {
      this.j = a;
    }
    i(a, b, c = []) {
      const d = new MessageChannel();
      wM(d.port1, b);
      this.j.postMessage(a, [d.port2].concat(c));
    }
    g(a, b) {
      return new sM((c) => {
        this.i(a, c, b);
      });
    }
  }
  function wM(a, b) {
    b &&
      (a.onmessage = (c) => {
        b(new uM(c.data, vM(c.ports[0])));
      });
  }
  var AM = ({
    destination: a,
    Na: b,
    origin: c,
    se: d = "ZNWN1d",
    onMessage: e,
    Og: f,
  }) =>
    yM({
      destination: a,
      Ci: () => b.contentWindow,
      ej: zM(c),
      se: d,
      onMessage: e,
      Og: f,
    });
  const yM = ({
      destination: a,
      Ci: b,
      ej: c,
      ko: d,
      se: e,
      onMessage: f,
      Og: g,
    }) => {
      const h = Object.create(null);
      c.forEach((k) => {
        h[k] = !0;
      });
      return new tM(
        new sM((k, l) => {
          const m = (n) => {
            n.source &&
              n.source === b() &&
              !0 === h[n.origin] &&
              (n.data.n || n.data) === e &&
              (a.removeEventListener("message", m, !1),
              d && n.data.t !== d
                ? l(
                    Error(
                      `Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`
                    )
                  )
                : (k(vM(n.ports[0], f)), g && g(n)));
          };
          a.addEventListener("message", m, !1);
        })
      );
    },
    zM = (a) => {
      a = "string" === typeof a ? [a] : a;
      const b = Object.create(null);
      a.forEach((c) => {
        if ("null" === c)
          throw Error(
            "Receiving from null origin not allowed without token verification. Please use NullOriginConnector."
          );
        b[c] = !0;
      });
      return a;
    };
  function BM(a, b, c, d, e, f, g = null) {
    if (x(ht)) var h = e ? oJ(e) : null;
    else {
      try {
        h = a.localStorage;
      } catch (m) {
        h = null;
      }
      h = h ? oJ(h) : null;
    }
    a: {
      if (d)
        try {
          var k = yr(d);
          break a;
        } catch (m) {
          fJ(a, { cfg: 1, inv: 1 });
        }
      k = null;
    }
    if ((d = k)) {
      if (e) {
        k = new Hq();
        H(d, 3, k);
        h = wr(d) && ui(wr(d), 13) ? ui(wr(d), 13) : 1;
        h = Date.now() + 864e5 * h;
        Number.isFinite(h) && Hi(k, 1, Math.round(h));
        k = Sh(d);
        if (wr(d)) {
          h = new Gq();
          var l = wr(d);
          l = ai(l, 23);
          h = Di(h, 23, null == l ? void 0 : l);
          l = N(wr(d), 12, !1);
          h = Di(h, 12, l);
          l = N(wr(d), 15, !1);
          h = Di(h, 15, l);
          H(k, 15, h);
        }
        h = F(k, ir, 1);
        for (l = 0; l < h.length; l++) Wh(h[l], 11);
        Wh(k, 22);
        if (x(ft)) nJ(a);
        else
          try {
            (e || a.localStorage).setItem("google_ama_config", $i(k));
          } catch (m) {
            fJ(a, { lserr: 1 });
          }
      }
      e = kJ(a, F(d, Qq, 7));
      k = {};
      x(gt) || (k.mj = D(d, cr, 8) || new cr());
      e && (k.aa = e);
      e && jJ(e, 3) && (k.Ac = [1]);
      e = k;
      if (!x(Ps) && 7 === c.google_pgb_reactive && !e.aa) return !1;
      qJ(a, 2) &&
        (fk(5, [d.toJSON()]),
        (c = gJ(c)),
        (f = new KK(f)),
        (k = e.aa),
        (c.google_package = (k && I(k, 4)) || ""),
        cK(a, b, d, e, f, new vq(["google-auto-placed"], c), g));
      return !0;
    }
    h && (fJ(a, { cfg: 1, cl: 1 }), x(ht) ? null != e && mJ(a, e) : nJ(a));
    return !1;
  }
  var DM = (a) => {
    const b = a.D;
    null == b.google_ad_output && (b.google_ad_output = "html");
    if (null != b.google_ad_client) {
      var c;
      (c = String(b.google_ad_client))
        ? ((c = c.toLowerCase()), "ca-" != c.substring(0, 3) && (c = "ca-" + c))
        : (c = "");
      b.google_ad_client = c;
    }
    null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
    b.google_webgl_support = !!Rj.WebGLRenderingContext;
    b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
    b.google_country = b.google_country || b.google_gl || "";
    c = new Date().getTime();
    Array.isArray(b.google_color_bg) &&
      (b.google_color_bg = CM(a, b.google_color_bg, c));
    Array.isArray(b.google_color_text) &&
      (b.google_color_text = CM(a, b.google_color_text, c));
    Array.isArray(b.google_color_link) &&
      (b.google_color_link = CM(a, b.google_color_link, c));
    Array.isArray(b.google_color_url) &&
      (b.google_color_url = CM(a, b.google_color_url, c));
    Array.isArray(b.google_color_border) &&
      (b.google_color_border = CM(a, b.google_color_border, c));
    Array.isArray(b.google_color_line) &&
      (b.google_color_line = CM(a, b.google_color_line, c));
  };
  function CM(a, b, c) {
    a.i |= 2;
    return b[c % b.length];
  }
  var EM = (a, b = !1) => {
    try {
      return b
        ? new $d(a.innerWidth, a.innerHeight).round()
        : je(a || window).round();
    } catch (c) {
      return new $d(-12245933, -12245933);
    }
  };
  function FM(a = r) {
    a = a.devicePixelRatio;
    return "number" === typeof a ? +a.toFixed(3) : null;
  }
  function GM(a, b = r) {
    a =
      a.scrollingElement ||
      ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return new Zd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
  }
  function HM(a) {
    try {
      return !(
        !a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
      );
    } catch (b) {
      return !1;
    }
  }
  function IM(a, b) {
    var c = tA,
      d;
    var e;
    d = (e =
      (e = nk()) &&
      (d = e.initialLayoutRect) &&
      "number" === typeof d.top &&
      "number" === typeof d.left &&
      "number" === typeof d.width &&
      "number" === typeof d.height
        ? new jk(d.left, d.top, d.width, d.height)
        : null)
      ? new Zd(e.left, e.top)
      : (d = qk()) && za(d.rootBounds)
      ? new Zd(
          d.rootBounds.left + d.boundingClientRect.left,
          d.rootBounds.top + d.boundingClientRect.top
        )
      : null;
    if (d) return d;
    try {
      var f = new Zd(0, 0),
        g = ie(b);
      var h = g ? le(g) : window;
      if (Ub(h, "parent")) {
        do {
          if (h == a) var k = Bk(b);
          else {
            var l = Ak(b);
            k = new Zd(l.left, l.top);
          }
          g = k;
          f.x += g.x;
          f.y += g.y;
        } while (
          h &&
          h != a &&
          h != h.parent &&
          (b = h.frameElement) &&
          (h = h.parent)
        );
      }
      return f;
    } catch (m) {
      return c.va(888, m), new Zd(-12245933, -12245933);
    }
  }
  function JM(a, b, c) {
    return c ? Zj(b, c, a.g) : null;
  }
  function KM(a, b, c, d) {
    if (d) {
      var e = xi(c, 2) - Date.now() / 1e3;
      e = { Id: Math.max(e, 0), path: O(c, 3), domain: O(c, 4), gh: !1 };
      c = c.getValue();
      a = a.g;
      d.g() && Yj(a) && new Vj(a.document).set(b, c, e);
    }
  }
  function LM(a, b, c) {
    if (c && Zj(b, c, a.g))
      for (const d of MM(a.g.location.hostname)) ak(b, c, a.g, "/", d);
  }
  var NM = class {
    constructor(a) {
      this.g = a;
      this.i = 0;
    }
  };
  function MM(a) {
    if ("localhost" === a) return ["localhost"];
    a = a.split(".");
    if (2 > a.length) return [];
    const b = [];
    for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
    return b;
  }
  function OM(a, b, c) {
    return wA(629, function (d) {
      delete a._gfp_s_;
      if (x(Ws) && Y(uJ(), 37, !1)) return Promise.resolve();
      if (!d) throw Error("Invalid JSONP response");
      d = d._cookies_;
      if (!d) return Promise.resolve();
      if (0 === d.length) throw Error("Invalid JSONP response");
      for (const f of d) {
        var e = f._domain_;
        const g = f._value_,
          h = f._expires_,
          k = f._path_;
        d = f._version_ || 1;
        if (
          "string" !== typeof e ||
          "string" !== typeof g ||
          "number" !== typeof h ||
          "string" !== typeof k ||
          "number" !== typeof d ||
          !g
        )
          throw Error("Invalid JSONP response");
        e = Kj(Jj(Ij(Gj(g), h), k), e);
        switch (d) {
          case 1:
            KM(c, "__gads", e, b);
            break;
          case 2:
            KM(c, "__gpi", e, b);
        }
      }
      return Promise.resolve();
    });
  }
  function PM(a, b, c) {
    let d;
    if (0 === a.i) {
      if (JM(a, "__gads", b)) var e = !0;
      else
        (e = a.g),
          b.g() &&
            Yj(e) &&
            new Vj(e.document).set("GoogleAdServingTest", "Good", void 0),
          (e = "Good" === Zj("GoogleAdServingTest", b, a.g)) &&
            ak("GoogleAdServingTest", b, a.g);
      a.i = e ? 2 : 1;
    }
    2 === a.i && (d = OM(c, b, a));
    c._gfp_p_ = !0;
    return d;
  }
  function QM(a, b, c, d) {
    d = { domain: c.location.hostname, callback: "_gfp_s_", client: d };
    var e = JM(b, "__gads", a);
    e && (d.cookie = e);
    (e = JM(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e);
    const f = ad(qj`https://partner.googleadservices.com/gampad/cookie.js`, d),
      g = PM(b, a, c);
    g
      ? new Promise((h) => {
          c._gfp_s_ = (k) => {
            g(k).then(h);
          };
          Xe(c.document, f);
        })
      : Promise.resolve();
  }
  function RM(a, b, c) {
    "_gfp_p_" in b || (b._gfp_p_ = !1);
    var d = new NM(b);
    c = b.google_ad_client || c;
    const e = b._gfp_p_;
    if ("boolean" !== typeof e)
      throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
    e ? Promise.resolve() : QM(a, d, b, c);
  }
  const SM = (a, b) => {
      b = b.listener;
      (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0);
    },
    TM = (a, b) => {
      (0, a.__gpp)("removeEventListener", b.listener, b.listenerId);
    },
    UM = (a, b) => {
      (0, a.__gpp)(
        "getSection",
        (c) => {
          b.callback({ nb: c ?? void 0, od: c ? void 0 : 4 });
        },
        b.apiPrefix
      );
    },
    VM = {
      Lc: (a) => a.listener,
      Tb: (a, b) => ({
        __gppCall: { callId: b, command: "addEventListener", version: "1.1" },
      }),
      wb: (a, b) => {
        b = b.__gppReturn;
        a(b.returnValue, b.success);
      },
    },
    WM = {
      Lc: (a) => a.listener,
      Tb: (a, b) => ({
        __gppCall: {
          callId: b,
          command: "removeEventListener",
          version: "1.1",
          parameter: a.listenerId,
        },
      }),
      wb: (a, b) => {
        b = b.__gppReturn;
        const c = b.returnValue.data;
        a?.(c, b.success);
      },
    },
    XM = {
      Lc: (a) => a.callback,
      Tb: (a, b) => ({
        __gppCall: {
          callId: b,
          command: "getSection",
          version: "1.1",
          parameter: a.apiPrefix,
        },
      }),
      wb: (a, b) => {
        b = b.__gppReturn;
        a({ nb: b.returnValue ?? void 0, od: b.success ? void 0 : 2 });
      },
    };
  function YM(a) {
    let b = {};
    "string" === typeof a.data ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, ff: b.__gppReturn.callId };
  }
  function ZM(a) {
    if (!a) return !1;
    const b = bL(a.split("~")[0]),
      c = XK(a);
    for (let Ki = 0; Ki < bi(b, 3, ah).length; ++Ki) {
      const wQ = bi(b, 3, ah)[Ki],
        gc = c[Ki];
      switch (wQ) {
        case 8:
          if (0 === gc.length)
            throw Error("Cannot decode empty USCA section string.");
          const eg = gc.split(".");
          if (2 < eg.length)
            throw Error(
              `Expected at most 1 sub-section but got ${
                eg.length - 1
              } when decoding ${gc}.`
            );
          var d = void 0,
            e = void 0,
            f = void 0,
            g = void 0,
            h = void 0,
            k = void 0,
            l = void 0,
            m = void 0,
            n = void 0,
            p = void 0,
            q = void 0,
            v = void 0,
            A = void 0,
            B = void 0,
            E = void 0,
            J = void 0,
            G = void 0,
            K = void 0,
            M = void 0,
            Ba = void 0,
            Ya = void 0,
            Ib = void 0,
            ea = void 0,
            lb = eg[0];
          if (0 === lb.length)
            throw Error("Cannot decode empty core segment string.");
          let Li = aL(lb, kL);
          const Pm = ZK(Li.slice(0, 6));
          Li = Li.slice(6);
          if (1 !== Pm)
            throw Error(
              `Unable to decode unsupported USCA Section specification version ${Pm} - only version 1 is supported.`
            );
          let Qm = 0;
          const ua = [];
          for (let ma = 0; ma < jL.length; ma++) {
            const ja = jL[ma];
            ua.push(ZK(Li.slice(Qm, Qm + ja)));
            Qm += ja;
          }
          var Kc = new fL();
          ea = Gi(Kc, 1, Pm);
          var sc = ua.shift();
          Ib = Q(ea, 2, sc);
          var Fe = ua.shift();
          Ya = Q(Ib, 3, Fe);
          var Z = ua.shift();
          Ba = Q(Ya, 4, Z);
          var md = ua.shift();
          M = Q(Ba, 5, md);
          var Rm = ua.shift();
          K = Q(M, 6, Rm);
          var Sm = new eL(),
            Tm = ua.shift();
          G = Q(Sm, 1, Tm);
          var Um = ua.shift();
          J = Q(G, 2, Um);
          var Vm = ua.shift();
          E = Q(J, 3, Vm);
          var Wm = ua.shift();
          B = Q(E, 4, Wm);
          var Xm = ua.shift();
          A = Q(B, 5, Xm);
          var Ym = ua.shift();
          v = Q(A, 6, Ym);
          var Zm = ua.shift();
          q = Q(v, 7, Zm);
          var $m = ua.shift();
          p = Q(q, 8, $m);
          var an = ua.shift();
          n = Q(p, 9, an);
          m = H(K, 7, n);
          var bn = new dL(),
            cn = ua.shift();
          l = Q(bn, 1, cn);
          var dn = ua.shift();
          k = Q(l, 2, dn);
          h = H(m, 8, k);
          var en = ua.shift();
          g = Q(h, 9, en);
          var fn = ua.shift();
          f = Q(g, 10, fn);
          var fg = ua.shift();
          e = Q(f, 11, fg);
          var gn = ua.shift();
          const tw = (d = Q(e, 12, gn));
          if (1 === eg.length) var gg = hL(tw);
          else {
            var hn = hL(tw),
              Ge = void 0,
              Mi = void 0,
              Ni = void 0,
              Oi = eg[1];
            if (0 === Oi.length)
              throw Error("Cannot decode empty GPC segment string.");
            const ma = aL(Oi, 3),
              ja = ZK(ma.slice(0, 2));
            if (0 > ja || 1 < ja)
              throw Error(
                `Attempting to decode unknown GPC segment subsection type ${ja}.`
              );
            Ni = ja + 1;
            const hg = ZK(ma.charAt(2));
            var He = new gL();
            Mi = Q(He, 2, Ni);
            Ge = Ei(Mi, 1, !!hg);
            gg = H(hn, 2, Ge);
          }
          const uw = D(gg, fL, 1);
          if (1 === zi(uw, 5) || 1 === zi(uw, 6)) return !0;
          break;
        case 10:
          if (0 === gc.length)
            throw Error("Cannot decode empty USCO section string.");
          const ig = gc.split(".");
          if (2 < ig.length)
            throw Error(
              `Expected at most 2 segments but got ${ig.length} when decoding ${gc}.`
            );
          var jg = void 0,
            Pi = void 0,
            ob = void 0,
            Qi = void 0,
            Ri = void 0,
            kg = void 0,
            lg = void 0,
            mg = void 0,
            ng = void 0,
            og = void 0,
            Pb = void 0,
            tc = void 0,
            Ab = void 0,
            pb = void 0,
            Si = void 0,
            Ie = void 0,
            Je = void 0,
            qb = void 0,
            Ea = ig[0];
          if (0 === Ea.length)
            throw Error("Cannot decode empty core segment string.");
          let Ti = aL(Ea, rL);
          const jn = ZK(Ti.slice(0, 6));
          Ti = Ti.slice(6);
          if (1 !== jn)
            throw Error(
              `Unable to decode unsupported USCO Section specification version ${jn} - only version 1 is supported.`
            );
          let kn = 0;
          const Sa = [];
          for (let ma = 0; ma < qL.length; ma++) {
            const ja = qL[ma];
            Sa.push(ZK(Ti.slice(kn, kn + ja)));
            kn += ja;
          }
          var cb = new mL();
          qb = Gi(cb, 1, jn);
          var rb = Sa.shift();
          Je = Q(qb, 2, rb);
          var Ta = Sa.shift();
          Ie = Q(Je, 3, Ta);
          var Qb = Sa.shift();
          Si = Q(Ie, 4, Qb);
          var Ui = Sa.shift();
          pb = Q(Si, 5, Ui);
          var Vi = Sa.shift();
          Ab = Q(pb, 6, Vi);
          var Lc = new lL(),
            Wi = Sa.shift();
          tc = Q(Lc, 1, Wi);
          var pg = Sa.shift();
          Pb = Q(tc, 2, pg);
          var qg = Sa.shift();
          og = Q(Pb, 3, qg);
          var Td = Sa.shift();
          ng = Q(og, 4, Td);
          var ln = Sa.shift();
          mg = Q(ng, 5, ln);
          var rg = Sa.shift();
          lg = Q(mg, 6, rg);
          var Xi = Sa.shift();
          kg = Q(lg, 7, Xi);
          Ri = H(Ab, 7, kg);
          var xQ = Sa.shift();
          Qi = Q(Ri, 8, xQ);
          var yQ = Sa.shift();
          ob = Q(Qi, 9, yQ);
          var zQ = Sa.shift();
          Pi = Q(ob, 10, zQ);
          var AQ = Sa.shift();
          const vw = (jg = Q(Pi, 11, AQ));
          if (1 === ig.length) var ww = oL(vw);
          else {
            var BQ = oL(vw),
              xw = void 0,
              yw = void 0,
              zw = void 0,
              Aw = ig[1];
            if (0 === Aw.length)
              throw Error("Cannot decode empty GPC segment string.");
            const ma = aL(Aw, 3),
              ja = ZK(ma.slice(0, 2));
            if (0 > ja || 1 < ja)
              throw Error(
                `Attempting to decode unknown GPC segment subsection type ${ja}.`
              );
            zw = ja + 1;
            const hg = ZK(ma.charAt(2));
            var CQ = new nL();
            yw = Q(CQ, 2, zw);
            xw = Ei(yw, 1, !!hg);
            ww = H(BQ, 2, xw);
          }
          const Bw = D(ww, mL, 1);
          if (1 === zi(Bw, 5) || 1 === zi(Bw, 6)) return !0;
          break;
        case 12:
          if (0 === gc.length)
            throw Error("Cannot decode empty usct section string.");
          const sg = gc.split(".");
          if (2 < sg.length)
            throw Error(
              `Expected at most 2 segments but got ${sg.length} when decoding ${gc}.`
            );
          var DQ = void 0,
            Cw = void 0,
            Dw = void 0,
            Ew = void 0,
            Fw = void 0,
            Gw = void 0,
            Hw = void 0,
            Iw = void 0,
            Jw = void 0,
            Kw = void 0,
            Lw = void 0,
            Mw = void 0,
            Nw = void 0,
            Ow = void 0,
            Pw = void 0,
            Qw = void 0,
            Rw = void 0,
            Sw = void 0,
            Tw = void 0,
            Uw = void 0,
            Vw = void 0,
            Ww = void 0,
            Xw = sg[0];
          if (0 === Xw.length)
            throw Error("Cannot decode empty core segment string.");
          let Yi = aL(Xw, zL);
          const mn = ZK(Yi.slice(0, 6));
          Yi = Yi.slice(6);
          if (1 !== mn)
            throw Error(
              `Unable to decode unsupported USCT Section specification version ${mn} - only version 1 is supported.`
            );
          let nn = 0;
          const ya = [];
          for (let ma = 0; ma < yL.length; ma++) {
            const ja = yL[ma];
            ya.push(ZK(Yi.slice(nn, nn + ja)));
            nn += ja;
          }
          var EQ = new uL();
          Ww = Gi(EQ, 1, mn);
          var FQ = ya.shift();
          Vw = Q(Ww, 2, FQ);
          var GQ = ya.shift();
          Uw = Q(Vw, 3, GQ);
          var HQ = ya.shift();
          Tw = Q(Uw, 4, HQ);
          var IQ = ya.shift();
          Sw = Q(Tw, 5, IQ);
          var JQ = ya.shift();
          Rw = Q(Sw, 6, JQ);
          var KQ = new tL(),
            LQ = ya.shift();
          Qw = Q(KQ, 1, LQ);
          var MQ = ya.shift();
          Pw = Q(Qw, 2, MQ);
          var NQ = ya.shift();
          Ow = Q(Pw, 3, NQ);
          var OQ = ya.shift();
          Nw = Q(Ow, 4, OQ);
          var PQ = ya.shift();
          Mw = Q(Nw, 5, PQ);
          var QQ = ya.shift();
          Lw = Q(Mw, 6, QQ);
          var RQ = ya.shift();
          Kw = Q(Lw, 7, RQ);
          var SQ = ya.shift();
          Jw = Q(Kw, 8, SQ);
          Iw = H(Rw, 7, Jw);
          var TQ = new sL(),
            UQ = ya.shift();
          Hw = Q(TQ, 1, UQ);
          var VQ = ya.shift();
          Gw = Q(Hw, 2, VQ);
          var WQ = ya.shift();
          Fw = Q(Gw, 3, WQ);
          Ew = H(Iw, 8, Fw);
          var XQ = ya.shift();
          Dw = Q(Ew, 9, XQ);
          var YQ = ya.shift();
          Cw = Q(Dw, 10, YQ);
          var ZQ = ya.shift();
          const Yw = (DQ = Q(Cw, 11, ZQ));
          if (1 === sg.length) var Zw = wL(Yw);
          else {
            var $Q = wL(Yw),
              $w = void 0,
              ax = void 0,
              bx = void 0,
              cx = sg[1];
            if (0 === cx.length)
              throw Error("Cannot decode empty GPC segment string.");
            const ma = aL(cx, 3),
              ja = ZK(ma.slice(0, 2));
            if (0 > ja || 1 < ja)
              throw Error(
                `Attempting to decode unknown GPC segment subsection type ${ja}.`
              );
            bx = ja + 1;
            const hg = ZK(ma.charAt(2));
            var aR = new vL();
            ax = Q(aR, 2, bx);
            $w = Ei(ax, 1, !!hg);
            Zw = H($Q, 2, $w);
          }
          const dx = D(Zw, uL, 1);
          if (1 === zi(dx, 5) || 1 === zi(dx, 6)) return !0;
          break;
        case 9:
          if (0 === gc.length)
            throw Error("Cannot decode empty USVA section string.");
          let Zi = aL(gc, DL);
          const on = ZK(Zi.slice(0, 6));
          Zi = Zi.slice(6);
          if (1 !== on)
            throw Error(
              `Unable to decode unsupported USVA Section specification version ${on} - only version 1 is supported.`
            );
          let pn = 0;
          const Ja = [];
          for (let ma = 0; ma < CL.length; ma++) {
            const ja = CL[ma];
            Ja.push(ZK(Zi.slice(pn, pn + ja)));
            pn += ja;
          }
          var bR = on,
            cR = new BL(),
            dR = Gi(cR, 1, bR),
            eR = Ja.shift(),
            fR = Q(dR, 2, eR),
            gR = Ja.shift(),
            hR = Q(fR, 3, gR),
            iR = Ja.shift(),
            jR = Q(hR, 4, iR),
            kR = Ja.shift(),
            lR = Q(jR, 5, kR),
            mR = Ja.shift();
          var nR = Q(lR, 6, mR);
          var oR = new AL(),
            pR = Ja.shift(),
            qR = Q(oR, 1, pR),
            rR = Ja.shift(),
            sR = Q(qR, 2, rR),
            tR = Ja.shift(),
            uR = Q(sR, 3, tR),
            vR = Ja.shift(),
            wR = Q(uR, 4, vR),
            xR = Ja.shift(),
            yR = Q(wR, 5, xR),
            zR = Ja.shift(),
            AR = Q(yR, 6, zR),
            BR = Ja.shift(),
            CR = Q(AR, 7, BR),
            DR = Ja.shift();
          var ER = Q(CR, 8, DR);
          var FR = H(nR, 7, ER),
            GR = Ja.shift(),
            HR = Q(FR, 8, GR),
            IR = Ja.shift(),
            JR = Q(HR, 9, IR),
            KR = Ja.shift(),
            LR = Q(JR, 10, KR),
            MR = Ja.shift(),
            ex = Q(LR, 11, MR);
          if (1 === zi(ex, 5) || 1 === zi(ex, 6)) return !0;
      }
    }
    return !1;
  }
  var cN = class extends T {
    constructor(a) {
      var { gppApiDetectionMode: b, timeoutMs: c } = {};
      super();
      this.caller = new FE(
        a,
        b && 1 !== b && 3 !== b ? "__gppLocator_non_existent" : "__gppLocator",
        b && 1 !== b && 2 !== b ? void 0 : (d) => "function" === typeof d.__gpp,
        YM
      );
      this.caller.A.set("addEventListener", SM);
      this.caller.j.set("addEventListener", VM);
      this.caller.A.set("removeEventListener", TM);
      this.caller.j.set("removeEventListener", WM);
      this.caller.A.set("getDataWithCallback", UM);
      this.caller.j.set("getDataWithCallback", XM);
      this.timeoutMs = c ?? 500;
    }
    i() {
      this.caller.ka();
      super.i();
    }
    addEventListener(a) {
      const b = Jb(() => {
          a($M, !0);
        }),
        c =
          -1 === this.timeoutMs
            ? void 0
            : setTimeout(() => {
                b();
              }, this.timeoutMs);
      EE(this.caller, "addEventListener", {
        listener: (d, e) => {
          clearTimeout(c);
          try {
            if (
              void 0 === d.pingData?.gppVersion ||
              "1" === d.pingData.gppVersion ||
              "1.0" === d.pingData.gppVersion
            ) {
              this.removeEventListener(d.listenerId);
              var f = {
                eventName: "signalStatus",
                data: "ready",
                pingData: {
                  internalErrorState: 1,
                  gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                  applicableSections: [-1],
                },
              };
            } else
              Array.isArray(d.pingData.applicableSections) &&
              0 !== d.pingData.applicableSections.length
                ? (f = d)
                : (this.removeEventListener(d.listenerId),
                  (f = {
                    eventName: "signalStatus",
                    data: "ready",
                    pingData: {
                      internalErrorState: 2,
                      gppString:
                        "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                      applicableSections: [-1],
                    },
                  }));
            a(f, e);
          } catch {
            if (d?.listenerId)
              try {
                this.removeEventListener(d.listenerId);
              } catch {
                a(aN, !0);
                return;
              }
            a(bN, !0);
          }
        },
      });
    }
    removeEventListener(a) {
      EE(this.caller, "removeEventListener", { listenerId: a });
    }
  };
  const bN = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        internalErrorState: 2,
        gppString: "GPP_ERROR_STRING_UNAVAILABLE",
        applicableSections: [-1],
      },
      listenerId: -1,
    },
    $M = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
        internalErrorState: 2,
        applicableSections: [-1],
      },
      listenerId: -1,
    },
    aN = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
        internalErrorState: 2,
        applicableSections: [-1],
      },
      listenerId: -1,
    };
  function dN(a) {
    return !a || (1 === a.length && -1 === a[0]);
  }
  function eN(a, b) {
    if (b.internalErrorState) Ii(a, 11, b.gppString);
    else if (dN(b.applicableSections)) {
      var c = ii(a, 10, b.applicableSections, dh);
      Di(c, 12, !1);
    } else {
      c = !1;
      try {
        c = ZM(b.gppString);
      } catch (d) {
        yA(1182, d);
      }
      a = ii(a, 10, b.applicableSections, dh);
      b = Ii(a, 11, b.gppString);
      Di(b, 12, c);
    }
  }
  function fN(a) {
    const b = new cN(a.pubWin);
    if (!CE(b.caller)) return Promise.resolve(null);
    const c = uJ(),
      d = Y(c, 35);
    if (d) return Promise.resolve(d);
    const e = new Promise((f) => {
      f = { resolve: f };
      const g = Y(c, 36, []);
      g.push(f);
      zJ(c, 36, g);
    });
    d ||
      null === d ||
      (zJ(c, 35, null),
      b.addEventListener((f) => {
        if (
          "ready" === f.pingData.signalStatus ||
          dN(f.pingData.applicableSections)
        ) {
          f = f.pingData;
          zJ(c, 35, f);
          eN(a.g, f);
          for (const g of Y(c, 36, [])) g.resolve(f);
          zJ(c, 36, []);
        }
      }));
    return e;
  }
  function gN(a) {
    a.easpi = x(qu);
    a.asro = x(ju);
    x(pu) && (a.sugawps = !0);
    const b = Yb(Xt);
    b.length && (a.seiel = b.join("~"));
    x(bu) && ((a.slmct = Wb(eu)), (a.samct = Wb(Ot)));
  }
  function hN(a, b) {
    return DD({
      J: a,
      Xe: 3e3,
      Ze: a.innerWidth > no ? 650 : 0,
      wa: sA,
      Vf: b,
      Fj: x(Wu),
    });
  }
  var iN = (a) => {
    let b = 0;
    try {
      b |= oo(a);
    } catch (c) {
      b |= 32;
    }
    return b;
  };
  var jN = (a) => {
    let b = 0;
    try {
      (b |= oo(a)), (b |= po(a, 1e4));
    } catch (c) {
      b |= 32;
    }
    return b;
  };
  function kN(a) {
    return a.prerendering
      ? 3
      : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
          a.visibilityState ||
            a.webkitVisibilityState ||
            a.mozVisibilityState ||
            ""
        ] || 0;
  }
  function lN(a) {
    let b;
    a.visibilityState
      ? (b = "visibilitychange")
      : a.mozVisibilityState
      ? (b = "mozvisibilitychange")
      : a.webkitVisibilityState && (b = "webkitvisibilitychange");
    return b;
  }
  function mN(a) {
    return null != a.hidden
      ? a.hidden
      : null != a.mozHidden
      ? a.mozHidden
      : null != a.webkitHidden
      ? a.webkitHidden
      : null;
  }
  function nN(a, b) {
    if (3 == kN(b)) var c = !1;
    else a(), (c = !0);
    if (!c) {
      const d = () => {
        Sb(b, "prerenderingchange", d);
        a();
      };
      Rb(b, "prerenderingchange", d);
    }
  }
  var oN = (a, b, c = !0, d = !1) => {
    let e = 0;
    try {
      e |= oo(a);
      var f;
      if (!(f = !a.navigator)) {
        var g = a.navigator;
        f = ("brave" in g && "isBrave" in g.brave) || !1;
      }
      e |= f || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
      e |= po(a, 2500, d);
      d || (e |= ro(a));
      !c || (b && gG(b)) || (e |= 4194304);
    } catch (h) {
      e |= 32;
    }
    return e;
  };
  function pN(a, b, c, d = null) {
    let e = oo(a);
    ED(a.navigator?.userAgent) && (e |= 1048576);
    const f = a.innerWidth;
    1200 > f && (e |= 65536);
    const g = a.innerHeight;
    650 > g && (e |= 2097152);
    d &&
      0 === e &&
      ((d = 3 === d ? "left" : "right"),
      (b = qN({
        J: a,
        zg: b,
        fh: 1,
        position: d,
        R: f,
        U: g,
        rb: new Set(),
        minWidth: 120,
        minHeight: 500,
        yd: !1,
      }))
        ? c &&
          ix(a).sideRailPlasParam.set(
            d,
            `${b.width}x${b.height}_${String(d).charAt(0)}`
          )
        : (e |= 16));
    return e;
  }
  function rN(a) {
    if (x(Kt)) return [...ix(a).sideRailPlasParam.values()].join("|");
    if (0 !== pN(a, !0, !1)) return "";
    const b = [],
      c = a.innerWidth,
      d = a.innerHeight;
    for (const e of ["left", "right"]) {
      const f = qN({
        J: a,
        zg: !0,
        fh: 1,
        position: e,
        R: c,
        U: d,
        rb: new Set(),
        minWidth: 120,
        minHeight: 500,
        yd: !1,
      });
      f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`);
    }
    return b.join("|");
  }
  function sN(a, b) {
    return null !== se(a, (c) => c.nodeType === Node.ELEMENT_NODE && b.has(c));
  }
  function tN(a, b) {
    return se(
      a,
      (c) =>
        c.nodeType === Node.ELEMENT_NODE &&
        "fixed" === b.getComputedStyle(c, null).position
    );
  }
  function uN(a) {
    const b = [];
    for (const c of a.document.querySelectorAll("*")) {
      const d = a.getComputedStyle(c, null);
      "fixed" === d.position &&
        "none" !== d.display &&
        "hidden" !== d.visibility &&
        b.push(c);
    }
    return b;
  }
  function vN(a, b) {
    const { top: c, left: d, bottom: e, right: f } = b.getBoundingClientRect();
    return 0 <= c && 0 <= d && e <= a.innerHeight && f <= a.innerWidth;
  }
  function wN(a) {
    return Math.round(10 * Math.round(a / 10));
  }
  function xN(a) {
    return `${a.position}-${wN(a.R)}x${wN(a.U)}-${wN(a.scrollY + a.ec)}Y`;
  }
  function yN(a) {
    return `f-${xN({
      position: a.position,
      ec: a.ec,
      scrollY: 0,
      R: a.R,
      U: a.U,
    })}`;
  }
  function zN(a, b) {
    a = Math.min(a ?? Infinity, b ?? Infinity);
    return Infinity !== a ? a : 0;
  }
  function AN(a, b, c) {
    const d = ix(c.J).sideRailProcessedFixedElements;
    if (!d.has(a)) {
      var e = a.getBoundingClientRect();
      if (e) {
        var f = Math.max(e.top - 10, 0),
          g = Math.min(e.bottom + 10, c.U),
          h = Math.max(e.left - 10, 0);
        e = Math.min(e.right + 10, c.R);
        for (var k = 0.3 * c.R; f <= g; f += 10) {
          if (0 < e && h < k) {
            var l = yN({ position: "left", ec: f, R: c.R, U: c.U });
            b.set(l, zN(b.get(l), h));
          }
          if (h < c.R && e > c.R - k) {
            l = yN({ position: "right", ec: f, R: c.R, U: c.U });
            const m = c.R - e;
            b.set(l, zN(b.get(l), m));
          }
        }
        d.add(a);
      }
    }
  }
  function BN(a, b) {
    const c = b.J,
      d = b.yd;
    var e = `f-${wN(b.R)}x${wN(b.U)}`;
    a.has(e) ||
      (a.set(e, 0),
      (e = uN(c)),
      d
        ? (CN(
            a,
            b,
            e.filter((f) => vN(c, f))
          ),
          DN(
            c,
            e.filter((f) => !vN(c, f))
          ))
        : CN(a, b, e));
  }
  function CN(a, b, c) {
    var d = b.rb;
    const e = b.J;
    ix(e).sideRailProcessedFixedElements.clear();
    d = new Set([
      ...Array.from(
        e.document.querySelectorAll(
          "[data-anchor-status],[data-side-rail-status]"
        )
      ),
      ...d,
    ]);
    for (const f of c) sN(f, d) || AN(f, a, b);
  }
  function EN(a) {
    if (1200 > a.R || 650 > a.U) return null;
    var b = ix(a.J).sideRailAvailableSpace;
    a.zg || BN(b, { J: a.J, R: a.R, U: a.U, rb: a.rb, yd: a.yd });
    const c = [];
    var d = 0.9 * a.U,
      e = yo(a.J),
      f = (a.U - d) / 2,
      g = f,
      h = d / 7;
    for (var k = 0; 8 > k; k++) {
      var l = c,
        m = l.push;
      a: {
        var n = g;
        var p = a.position,
          q = b,
          v = { J: a.J, R: a.R, U: a.U, rb: a.rb };
        const J = yN({ position: p, ec: n, R: v.R, U: v.U }),
          G = xN({ position: p, ec: n, scrollY: e, R: v.R, U: v.U });
        if (q.has(G)) {
          n = zN(q.get(J), q.get(G));
          break a;
        }
        const K = "left" === p ? 20 : v.R - 20;
        let M = K;
        p = ((0.3 * v.R) / 5) * ("left" === p ? 1 : -1);
        for (let Ba = 0; 6 > Ba; Ba++) {
          var A = pw(v.J.document, { x: Math.round(M), y: Math.round(n) }),
            B = sN(A, v.rb),
            E = tN(A, v.J);
          if (!B && null !== E) {
            AN(E, q, v);
            q.delete(G);
            break;
          }
          B ||
            ((B = v),
            "true" === A.getAttribute("google-side-rail-overlap")
              ? (B = !0)
              : "false" === A.getAttribute("google-side-rail-overlap")
              ? (B = !1)
              : ((E = A.offsetHeight >= 0.25 * B.U),
                (B = A.offsetWidth >= 0.9 * B.R && E)));
          if (B) q.set(G, Math.round(Math.abs(M - K) + 20));
          else if (M !== K) (M -= p), (p /= 2);
          else {
            q.set(G, 0);
            break;
          }
          M += p;
        }
        n = zN(q.get(J), q.get(G));
      }
      m.call(l, n);
      g += h;
    }
    b = a.fh;
    e = a.position;
    d = Math.round(d / 8);
    f = Math.round(f);
    g = a.minWidth;
    a = a.minHeight;
    m = [];
    h = Array(c.length).fill(0);
    for (l = 0; l < c.length; l++) {
      for (; 0 !== m.length && c[m[m.length - 1]] >= c[l]; ) m.pop();
      h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
      m.push(l);
    }
    m = [];
    k = c.length - 1;
    l = Array(c.length).fill(0);
    for (n = k; 0 <= n; n--) {
      for (; 0 !== m.length && c[m[m.length - 1]] >= c[n]; ) m.pop();
      l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
      m.push(n);
    }
    m = null;
    for (k = 0; k < c.length; k++)
      if (
        ((n = {
          position: e,
          width: Math.round(c[k]),
          height: Math.round((l[k] - h[k] + 1) * d),
          offsetY: f + h[k] * d,
        }),
        (q = n.width >= g && n.height >= a),
        0 === b && q)
      ) {
        m = n;
        break;
      } else
        1 === b &&
          q &&
          (!m || n.width * n.height > m.width * m.height) &&
          (m = n);
    return m;
  }
  function DN(a, b) {
    const c = ix(a);
    if (b.length && !c.g) {
      var d = new MutationObserver(() => {
        setTimeout(() => {
          FN(a);
          for (const e of c.i) e();
        }, 500);
      });
      for (const e of b) d.observe(e, { attributes: !0 });
      c.g = d;
    }
  }
  function FN(a) {
    ({ sideRailAvailableSpace: a } = ix(a));
    const b = Array.from(a.keys()).filter((c) => c.startsWith("f-"));
    for (const c of b) a.delete(c);
  }
  function qN(a) {
    if (a.Va) return a.Va.ic(1228, () => EN(a)) || null;
    try {
      return EN(a);
    } catch {}
    return null;
  }
  const GN = { [27]: 512, [26]: 128 };
  var HN = (a, b, c, d) => {
      switch (c) {
        case 1:
        case 2:
          return 0 === hN(a, c);
        case 3:
        case 4:
          return 0 === pN(a, !1, !1, c);
        case 8:
          return (
            0 ==
            oN(
              a,
              d,
              !("on" === b.google_adtest || OK(a.location, "google_ia_debug")),
              x(Xu)
            )
          );
        case 9:
          return (
            (b = !(
              "on" === b.google_adtest || OK(a.location, "google_scr_debug")
            )),
            !kG(a, b, d)
          );
        case 30:
          return 0 == ZH(a);
        case 26:
          return 0 == jN(a);
        case 27:
          return 0 === iN(a);
        case 40:
          return !0;
        default:
          return !1;
      }
    },
    IN = (a, b, c, d) => {
      switch (c) {
        case 0:
        case 40:
        case 10:
        case 11:
          return 0;
        case 1:
        case 2:
          return hN(a, c);
        case 3:
        case 4:
          return pN(a, x(Lt), x(Kt), c);
        case 8:
          return oN(
            a,
            d,
            !("on" === b.google_adtest || OK(a.location, "google_ia_debug")),
            x(Xu)
          );
        case 9:
          return kG(
            a,
            !("on" === b.google_adtest || OK(a.location, "google_scr_debug")),
            d
          );
        case 16:
          return Jv(b, a) ? 0 : 8388608;
        case 30:
          return ZH(a);
        case 26:
          return jN(a);
        case 27:
          return iN(a);
        default:
          return 32;
      }
    },
    JN = (a, b, c) => {
      const d = b.google_reactive_ad_format;
      if (!Rc(d)) return !1;
      a = We(a);
      if (!a || !HN(a, b, d, c)) return !1;
      b = ix(a);
      if (vo(b, d)) return !1;
      b.adCount[d] || (b.adCount[d] = 0);
      b.adCount[d]++;
      return !0;
    },
    LN = (a) => {
      const b = a.google_reactive_ad_format;
      return (
        !a.google_reactive_ads_config &&
        KN(a) &&
        16 !== b &&
        10 !== b &&
        11 !== b &&
        40 !== b &&
        41 !== b
      );
    },
    MN = (a) => {
      if (!a.hash) return null;
      let b = null;
      af(LK, (c) => {
        !b && OK(a, c) && (b = MK[c]);
      });
      return b;
    },
    ON = (a, b) => {
      const c = ix(a).tagSpecificState[1] || null;
      null != c &&
        null == c.debugCard &&
        af(NK, (d) => {
          !c.debugCardRequested &&
            "number" === typeof d &&
            RK(d, a.location) &&
            ((c.debugCardRequested = !0),
            NN(a, b, (e) => {
              c.debugCard = e.createDebugCard(d, a);
            }));
        });
    },
    QN = (a, b, c) => {
      if (!b) return null;
      const d = ix(b);
      let e = 0;
      af(Sc, (f) => {
        const g = GN[f];
        g && 0 === PN(a, b, f, c) && (e |= g);
      });
      d.wasPlaTagProcessed && (e |= 256);
      a.google_reactive_tag_first && (e |= 1024);
      return e ? "" + e : null;
    },
    RN = (a, b, c) => {
      const d = [];
      af(Sc, (e) => {
        const f = PN(b, a, e, c);
        0 !== f && d.push(e + ":" + f);
      });
      return d.join(",") || null;
    },
    SN = (a) => {
      const b = [],
        c = {};
      af(a, (d, e) => {
        if ((e = lo[e]) && !c[e]) {
          c[e] = !0;
          if (d) d = 1;
          else if (!1 === d) d = 2;
          else return;
          b.push(e + ":" + d);
        }
      });
      return b.join(",");
    },
    TN = (a) => {
      a = a.overlays;
      if (!a) return "";
      a = a.bottom;
      return "boolean" === typeof a ? (a ? "1" : "0") : "";
    },
    PN = (a, b, c, d) => {
      if (!b) return 256;
      let e = 0;
      const f = ix(b),
        g = vo(f, c);
      if (a.google_reactive_ad_format == c || g) e |= 64;
      let h = !1;
      af(f.reactiveTypeDisabledByPublisher, (k, l) => {
        String(c) === String(l) && (h = !0);
      });
      return h &&
        MN(b.location) !== c &&
        ((e |= 128), 2 == c || 1 == c || 3 == c || 4 == c || 8 == c)
        ? e
        : e | IN(b, a, c, d);
    },
    UN = (a, b) => {
      if (a) {
        var c = ix(a),
          d = {};
        af(b, (e, f) => {
          (f = lo[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0);
        });
        af(Sc, (e) => {
          d[mo[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0);
        });
      }
    },
    VN = (a, b, c) => {
      b = tA.Ma(b, c);
      return JK(3, window, a).Zc.then(b);
    },
    NN = (a, b, c) => {
      c = tA.Ma(212, c);
      JK(4, a, b).Zc.then(c);
    },
    WN = (a, b, c) => {
      a.dataset.adsbygoogleStatus = "reserved";
      a.className += " adsbygoogle-noablate";
      c.adsbygoogle ||
        ((c.adsbygoogle = []),
        Xe(
          c.document,
          qj`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`
        ));
      c.adsbygoogle.push({ element: a, params: b });
    },
    XN = (a) => {
      a = a.google_reactive_ad_format;
      return Rc(a) ? "" + a : null;
    },
    KN = (a) => !!XN(a) || null != a.google_pgb_reactive,
    YN = (a) => {
      a = XN(a);
      return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a;
    };
  var ZN = (a, b, c, d = null) => {
      const e = (g) => {
        let h;
        try {
          h = JSON.parse(g.data);
        } catch (k) {
          return;
        }
        !h ||
          h.googMsgType !== b ||
          (d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g)) ||
          c(h, g);
      };
      Rb(a, "message", e);
      let f = !1;
      return () => {
        let g = !1;
        f || ((f = !0), (g = Sb(a, "message", e)));
        return g;
      };
    },
    $N = (a, b, c, d = null) => {
      const e = ZN(
        a,
        b,
        Fb(c, () => e()),
        d
      );
      return e;
    },
    aO = (a, b, c, d, e) => {
      if (
        !(0 >= e) &&
        ((c.googMsgType = b),
        a.postMessage(JSON.stringify(c), d),
        (a = a.frames))
      )
        for (let f = 0; f < a.length; ++f) 1 < e && aO(a[f], b, c, d, --e);
    };
  function bO(a) {
    return "number" === typeof a.google_reactive_sra_index;
  }
  function cO(a, b, c) {
    const d = b.J || b.pubWin,
      e = b.D;
    var f = RN(d, e, c);
    e.google_reactive_plat = f;
    (f = SN(a)) && (e.google_reactive_plaf = f);
    (f = TN(a)) && (e.google_reactive_fba = f);
    (f = rN(d)) && (e.google_plas = f);
    dO(a, e);
    f = MN(b.pubWin.location);
    eO(a, f, e);
    f
      ? ((e.fra = f), (e.google_pgb_reactive = 6))
      : (e.google_pgb_reactive = 5);
    gN(e);
    e.fsapi = !0;
    8 !== f &&
      ((f = jG(c, 86400)),
      f?.length && (e.vmsli = Math.floor((Date.now() - Math.max(...f)) / 6e4)));
    rk() || EM(b.pubWin.top);
    f = $N(
      b.pubWin,
      "rsrai",
      wA(429, (g, h) => fO(b, d, e.google_ad_client, a, g, h, c)),
      wA(430, (g, h) => Bo(b.pubWin, "431", sA, h))
    );
    b.j.push(f);
    ix(d).wasReactiveTagRequestSent = !0;
    gO(b, a, c);
  }
  function gO(a, b, c) {
    const d = a.D,
      e = za(b.page_level_pubvars) ? b.page_level_pubvars : {};
    b = $N(
      a.pubWin,
      "apcnf",
      wA(353, (f, g) => {
        const h = ad(a.sa.jb, HK());
        var k = a.pubWin,
          l = d.google_ad_client;
        return vf(g.origin) ? BM(k, l, e, f.config, c, h, null) : !1;
      }),
      wA(353, (f, g) => Bo(a.pubWin, "353", sA, g))
    );
    a.j.push(b);
  }
  function fO(a, b, c, d, e, f, g) {
    if (!vf(f.origin)) return !1;
    f = e.data;
    if (!Array.isArray(f)) return !1;
    if (!qJ(b, 1)) return !0;
    f && fk(6, [f]);
    e = e.amaConfig;
    const h = [],
      k = [],
      l = ix(b);
    let m = null;
    for (let n = 0; n < f.length; n++) {
      if (!f[n]) continue;
      const p = f[n],
        q = p.adFormat;
      l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[q] = !0);
      if (!p.noCreative) {
        p.google_reactive_sra_index = n;
        if (9 === q && e) {
          p.pubVars = Object.assign(p.pubVars || {}, hO(d, p));
          const v = new lG();
          if (eG(v, p) && v.C(p)) {
            m = v;
            continue;
          }
        }
        h.push(p);
        k.push(q);
      }
    }
    h.length &&
      VN(a.sa.Yg, 522, (n) => {
        iO(h, b, n, d, g);
      });
    e && BM(b, c, d, e, g, a.sa.jb, m);
    return !0;
  }
  function hO(a, b) {
    const c = b.adFormat,
      d = b.adKey;
    delete b.adKey;
    const e = {};
    a = a.page_level_pubvars;
    za(a) && Object.assign(e, a);
    e.google_ad_unit_key = d;
    e.google_reactive_sra_index = b.google_reactive_sra_index;
    30 === c && (e.google_reactive_ad_format = 30);
    e.google_pgb_reactive = e.google_pgb_reactive || 5;
    return (b.pubVars = e);
  }
  function iO(a, b, c, d, e) {
    const f = [];
    for (let g = 0; g < a.length; g++) {
      const h = a[g],
        k = h.adFormat,
        l = h.adKey,
        m = c.configProcessorForAdFormat(k);
      k &&
        m &&
        l &&
        ((h.pubVars = hO(d, h)),
        delete h.google_reactive_sra_index,
        f.push(k),
        vA(466, () => m.verifyAndProcessConfig(b, h, e)));
    }
  }
  function dO(a, b) {
    const c = [];
    let d = !1;
    af(lo, (e, f) => {
      let g;
      a.hasOwnProperty(f) &&
        ((f = a[f]), f?.google_ad_channel && (g = String(f.google_ad_channel)));
      --e;
      (c[e] && "+" !== c[e]) ||
        ((c[e] = g ? g.replace(/,/g, "+") : "+"), d || (d = !!g));
    });
    d && (b.google_reactive_sra_channels = c.join(","));
  }
  function eO(a, b, c) {
    if (!c.google_adtest) {
      var d = a.page_level_pubvars;
      if ("on" === a.google_adtest || "on" === d?.google_adtest || b)
        c.google_adtest = "on";
    }
  }
  Tb("script");
  var jO = {
    "image-top": 0,
    "image-middle": 1,
    "image-side": 2,
    "text-only": 3,
    "in-article": 4,
  };
  function kO(a, b) {
    if (!Jv(b, a)) return () => {};
    a = lO(b, a);
    if (!a) return () => {};
    const c = EJ();
    b = Uc(b);
    const d = { xb: a, D: b, offsetWidth: a.offsetWidth };
    c.push(d);
    return () => bb(c, d);
  }
  function lO(a, b) {
    a = b.document.getElementById(a.google_async_iframe_id);
    if (!a) return null;
    for (a = a.parentElement; a && !Ov.test(a.className); ) a = a.parentElement;
    return a;
  }
  function mO(a, b) {
    for (let f = 0; f < a.childNodes.length; f++) {
      const g = {},
        h = a.childNodes[f];
      var c = h.style,
        d = ["width", "height"];
      for (let k = 0; k < d.length; k++) {
        const l = "google_ad_" + d[k];
        if (!g.hasOwnProperty(l)) {
          var e = jf(c[d[k]]);
          e = null === e ? null : Math.round(e);
          null != e && (g[l] = e);
        }
      }
      if (
        g.google_ad_width == b.google_ad_width &&
        g.google_ad_height == b.google_ad_height
      )
        return h;
    }
    return null;
  }
  function nO(a, b) {
    a.style.display = b ? "inline-block" : "none";
    const c = a.parentElement;
    b
      ? (c.dataset.adStatus = a.dataset.adStatus)
      : ((a.dataset.adStatus = c.dataset.adStatus), delete c.dataset.adStatus);
  }
  function oO(a, b) {
    const c = b.innerHeight >= b.innerWidth ? 1 : 2;
    if (a.g != c) {
      a.g = c;
      a = EJ();
      for (const d of a)
        if (
          d.xb.offsetWidth != d.offsetWidth ||
          d.D.google_full_width_responsive_allowed
        )
          (d.offsetWidth = d.xb.offsetWidth),
            vA(467, () => {
              var e = d.xb,
                f = d.D;
              const g = mO(e, f);
              f.google_full_width_responsive_allowed &&
                ((e.style.marginLeft = f.gfwroml || ""),
                (e.style.marginRight = f.gfwromr || ""),
                (e.style.height = f.gfwroh ? `${f.gfwroh}px` : ""),
                (e.style.width = f.gfwrow ? `${f.gfwrow}px` : ""),
                (e.style.zIndex = f.gfwroz || ""),
                delete f.google_full_width_responsive_allowed);
              delete f.google_ad_format;
              delete f.google_ad_width;
              delete f.google_ad_height;
              delete f.google_content_recommendation_ui_type;
              delete f.google_content_recommendation_rows_num;
              delete f.google_content_recommendation_columns_num;
              b.google_spfd(e, f, b);
              const h = mO(e, f);
              !h && g && 1 == e.childNodes.length
                ? (nO(g, !1),
                  (f.google_reactive_ad_format = 16),
                  (f.google_ad_section = "responsive_resize"),
                  WN(e, f, b))
                : h && g && h != g && (nO(g, !1), nO(h, !0));
            });
    }
  }
  var pO = class extends T {
    constructor() {
      super(...arguments);
      this.g = null;
    }
    K(a) {
      const b = uJ();
      if (!Y(b, 27, !1)) {
        zJ(b, 27, !0);
        this.g = a.innerHeight >= a.innerWidth ? 1 : 2;
        var c = () => {
          oO(this, a);
        };
        Rb(a, "resize", c);
        So(this, () => {
          Sb(a, "resize", c);
        });
      }
    }
  };
  var qO = class {
    constructor(a, b) {
      this.J = a;
      this.xb = b;
      this.g = null;
      this.j = 0;
    }
    i() {
      10 <= ++this.j && r.clearInterval(this.g);
      var a = Mv(this.J, this.xb);
      Nv(this.J, this.xb, a);
      a = Iv(this.xb, this.J);
      (null != a && 0 === a.x) || r.clearInterval(this.g);
    }
  };
  var rO = class {
    constructor(a) {
      this.i = 0;
      this.g = this.H = null;
      this.F = 0;
      this.j = [];
      this.zc = this.C = "";
      this.l = this.B = null;
      this.G = !1;
      this.J = a.J;
      this.pubWin = a.pubWin;
      this.D = a.D;
      this.ma = a.ma;
      this.sa = a.sa;
      this.ub = a.ub;
      this.ha = a.ha;
    }
  };
  function sO(a, b, c) {
    c = wK(a, PE(b, { Gi: x(av) && c }));
    c = Ii(c, 2, b.tcString);
    c = Ii(c, 4, b.addtlConsent || "");
    Wh(c, 7, Yg(b.internalErrorState));
    c = !RE(b);
    Di(a, 9, c);
    null != b.gdprApplies && Di(a, 3, b.gdprApplies);
  }
  function tO(a) {
    const b = new XE(a.pubWin, { timeoutMs: -1, Nh: !0 });
    if (!TE(b)) return Promise.resolve(null);
    const c = uJ(),
      d = Y(c, 24);
    if (d) return Promise.resolve(d);
    const e = new Promise((f) => {
      f = { resolve: f };
      const g = Y(c, 25, []);
      g.push(f);
      zJ(c, 25, g);
    });
    d ||
      null === d ||
      (zJ(c, 24, null),
      b.addEventListener((f) => {
        if (OE(f)) {
          zJ(c, 24, f);
          sO(a.g, f, a.ma.g());
          for (const g of Y(c, 25, [])) g.resolve(f);
          zJ(c, 25, []);
        } else zJ(c, 24, null);
      }));
    return e;
  }
  function uO(a, b, c = 1e5) {
    a -= b;
    return a >= c ? "M" : 0 <= a ? a : "-M";
  }
  var wO = (a, b, c) => {
    const d = b.parentElement?.classList.contains("adsbygoogle")
      ? b.parentElement
      : b;
    c.addEventListener("load", () => vO(d));
    return $N(a, "adpnt", (e, f) => {
      if (xo(f, c.contentWindow)) {
        e = Ao(e).qid;
        try {
          c.setAttribute("data-google-query-id", e),
            a.googletag ?? (a.googletag = { cmd: [] }),
            (a.googletag.queryIds = a.googletag.queryIds ?? []),
            a.googletag.queryIds.push(e),
            500 < a.googletag.queryIds.length && a.googletag.queryIds.shift();
        } catch {}
        d.dataset.adStatus = "filled";
        e = !0;
      } else e = !1;
      return e;
    });
  };
  function vO(a) {
    setTimeout(() => {
      "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled");
    }, 1e3);
  }
  var xO = class {
    constructor(a, b) {
      this.i = a;
      this.g = b;
    }
  };
  var yO = class extends R {
    g() {
      return N(this, 6);
    }
    j() {
      return N(this, 7);
    }
    l() {
      return N(this, 10);
    }
  };
  var zO = class extends R {
    g() {
      return bi(this, 1, oh);
    }
  };
  zO.O = [1];
  var AO = class extends R {
    g() {
      return N(this, 6);
    }
  };
  AO.O = [19];
  var BO = [13, 14];
  let CO = void 0;
  function DO() {
    bj(CO, dj);
    return CO;
  }
  function EO(a) {
    bj(CO, tl);
    CO = a;
  }
  function FO(a) {
    try {
      const b = a.getItem("google_adsense_settings");
      if (!b) return {};
      const c = JSON.parse(b);
      return c !== Object(c)
        ? {}
        : Qc(
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
  function GO(a, b, c) {
    try {
      if (!vf(c.origin) || !xo(c, a.g.contentWindow)) return;
    } catch (f) {
      return;
    }
    const d = b.msg_type;
    let e;
    "string" === typeof d &&
      (e = a.pa[d]) &&
      a.Va.ic(168, () => {
        e.call(a, b, c);
      });
  }
  class HO extends T {
    constructor(a, b) {
      var c = tA,
        d = sA;
      super();
      this.j = a;
      this.g = b;
      this.Va = c;
      this.wa = d;
      this.pa = {};
      this.xa = this.Va.Ma(168, (e, f) => void GO(this, e, f));
      this.Qa = this.Va.Ma(169, (e, f) => Bo(this.j, "ras::xsf", this.wa, f));
      this.T = [];
      this.Z(this.pa);
      this.T.push(ZN(this.j, "sth", this.xa, this.Qa));
    }
    i() {
      for (const a of this.T) a();
      this.T.length = 0;
      super.i();
    }
  }
  class IO extends HO {}
  function JO(a, b, c = null) {
    return new KO(a, b, c);
  }
  var KO = class extends IO {
    constructor(a, b, c) {
      super(a, b);
      this.A = c;
      this.C = w(WJ);
      this.l = () => {};
      Rb(this.g, "load", this.l);
    }
    i() {
      Sb(this.g, "load", this.l);
      super.i();
    }
    Z(a) {
      a["adsense-labs"] = (b) => {
        if ((b = Ao(b).settings))
          if (((b = aj(Lj, JSON.parse(b))), null != I(b, 1))) {
            var c;
            if ((c = x(Ws)))
              (c = b.V), (c = 0 < pi(c, c[C], Hj, 4, 3, !1, !0).length);
            if (c) {
              var d = (c = F(b, Hj, 4)),
                e = this.C;
              const h = new tm();
              for (var f of d)
                switch (f.getVersion()) {
                  case 1:
                    Di(h, 1, !0);
                    break;
                  case 2:
                    Di(h, 2, !0);
                }
              f = new um();
              f = qi(f, 1, vm, h);
              aK(e, f);
              f = this.j;
              e = this.A;
              if (!Y(uJ(), 37, !1)) {
                f = new NM(f);
                for (var g of c)
                  switch (g.getVersion()) {
                    case 1:
                      KM(f, "__gads", g, e);
                      break;
                    case 2:
                      KM(f, "__gpi", g, e);
                  }
                zJ(uJ(), 37, !0);
              }
              Wh(b, 4);
            }
            if (x(Us)) {
              if ((g = D(b, Hj, 5)))
                (f = this.j),
                  Y(uJ(), 40, !1) ||
                    ((f = new xO(f, { Vg: !1, Wg: !1 })),
                    (c = xi(g, 2) - Date.now() / 1e3),
                    (c = {
                      Id: Math.max(c, 0),
                      path: O(g, 3),
                      domain: O(g, 4),
                      gh: !1,
                    }),
                    new Vj(f.i.document).set("__eoi", g.getValue(), c),
                    zJ(uJ(), 40, !0));
              Wh(b, 5);
            }
            g = this.j;
            f = O(b, 1) || "";
            if (null != AK({ win: g, Dd: DO() }).g) {
              c = AK({ win: g, Dd: DO() });
              c = null != c.g ? FO(c.getValue()) : {};
              null !== b && (c[f] = b.toJSON());
              try {
                g.localStorage.setItem(
                  "google_adsense_settings",
                  JSON.stringify(c)
                );
              } catch (h) {}
            }
          }
      };
    }
  };
  function LO(a) {
    a.A = a.C;
    a.F.style.transition = "height 500ms";
    a.l.style.transition = "height 500ms";
    a.g.style.transition = "height 500ms";
    MO(a);
  }
  function NO(a, b) {
    a.g.contentWindow.postMessage(
      JSON.stringify({
        msg_type: "expand-on-scroll-result",
        eos_success: !0,
        eos_amount: b,
        googMsgType: "sth",
      }),
      "*"
    );
  }
  function MO(a) {
    const b = `rect(0px, ${a.g.width}px, ${a.A}px, 0px)`;
    a.g.style.clip = b;
    a.l.style.clip = b;
    a.g.setAttribute("height", a.A);
    a.g.style.height = a.A + "px";
    a.l.setAttribute("height", a.A);
    a.l.style.height = a.A + "px";
    a.F.style.height = a.A + "px";
  }
  function OO(a, b) {
    b = hf(b.r_nh);
    a.C = null == b ? 0 : b;
    if (0 >= a.C) return "1";
    a.I = Bk(a.F).y;
    a.H = yo(a.j);
    if (a.I + a.A < a.H) return "2";
    if (a.I > to(a.j) - a.j.innerHeight) return "3";
    b = a.H;
    a.g.setAttribute("height", a.C);
    a.g.style.height = a.C + "px";
    a.l.style.overflow = "hidden";
    a.F.style.position = "relative";
    a.F.style.transition = "height 100ms";
    a.l.style.transition = "height 100ms";
    a.g.style.transition = "height 100ms";
    b = Math.min(b + a.j.innerHeight - a.I, a.A);
    vk(a.l, { position: "relative", top: "auto", bottom: "auto" });
    b = `rect(0px, ${a.g.width}px, ${b}px, 0px)`;
    vk(a.g, { clip: b });
    vk(a.l, { clip: b });
    return "0";
  }
  class PO extends IO {
    constructor(a, b) {
      super(a.J, b);
      this.l = a.ha;
      this.F =
        this.l.parentElement &&
        this.l.parentElement.classList.contains("adsbygoogle")
          ? this.l.parentElement
          : this.l;
      this.A = parseInt(this.l.style.height, 10);
      this.Ga = this.Pa = !1;
      this.ea = this.H = this.C = 0;
      this.Wc = this.A / 5;
      this.I = Bk(this.F).y;
      this.Cb = Lb(
        wA(651, () => {
          this.I = Bk(this.F).y;
          var c = this.H;
          this.H = yo(this.j);
          this.A < this.C
            ? ((c = this.H - c),
              0 < c &&
                ((this.ea += c),
                this.ea >= this.Wc
                  ? (LO(this), NO(this, this.C))
                  : ((this.A = Math.min(this.C, this.A + c)),
                    NO(this, c),
                    MO(this))))
            : Sb(this.j, "scroll", this.M);
        }),
        this
      );
      this.M = () => {
        var c = this.Cb;
        Rj.requestAnimationFrame ? Rj.requestAnimationFrame(c) : c();
      };
    }
    Z(a) {
      a["expand-on-scroll"] = (b, c) => {
        b = Ao(b);
        this.Pa ||
          ((this.Pa = !0),
          (b = OO(this, b)),
          "0" === b && Rb(this.j, "scroll", this.M, Mb),
          c.source.postMessage(
            JSON.stringify({
              msg_type: "expand-on-scroll-result",
              eos_success: "0" === b,
              googMsgType: "sth",
            }),
            "*"
          ));
      };
      a["expand-on-scroll-force-expand"] = () => {
        this.Ga || ((this.Ga = !0), LO(this), Sb(this.j, "scroll", this.M));
      };
    }
    i() {
      this.M && Sb(this.j, "scroll", this.M, Mb);
      super.i();
    }
  }
  function QO(a) {
    const b = a.I.getBoundingClientRect(),
      c = 0 > b.top + b.height;
    return !(b.top > a.j.innerHeight) && !c;
  }
  class RO extends T {
    constructor(a, b, c) {
      super();
      this.j = a;
      this.A = b;
      this.I = c;
      this.C = 0;
      this.l = QO(this);
      this.H = Kb(this.F, this);
      this.g = wA(433, () => {
        var d = this.H;
        Rj.requestAnimationFrame ? Rj.requestAnimationFrame(d) : d();
      });
      Rb(this.j, "scroll", this.g, Mb);
    }
    F() {
      const a = QO(this);
      if (a && !this.l) {
        var b = { rr: "vis-bcr" };
        const c = this.A.contentWindow;
        c &&
          (aO(c, "ig", b, "*", 2),
          10 <= ++this.C && this.g && Sb(this.j, "scroll", this.g, Mb));
      }
      this.l = a;
    }
  }
  function SO(a, b) {
    Array.isArray(b) || (b = [b]);
    b = b.map(function (c) {
      return "string" === typeof c
        ? c
        : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
    });
    vk(a, "transition", b.join(","));
  }
  var TO = Hb(function () {
    if (zc) return !0;
    var a = me(document, "DIV"),
      b = Dc ? "-webkit" : Cc ? "-moz" : zc ? "-ms" : null,
      c = { transition: "opacity 1s linear" };
    b && (c[b + "-transition"] = "opacity 1s linear");
    b = { style: c };
    Id("div");
    b = Ld("div", b);
    Ud(a, b);
    a = a.firstChild;
    b = a.style[ee("transition")];
    return (
      "" != ("undefined" !== typeof b ? b : a.style[wk(a, "transition")] || "")
    );
  });
  function UO(a, b, c) {
    0 > a.i[b].indexOf(c) && (a.i[b] += c);
  }
  function VO(a, b) {
    0 <= a.g.indexOf(b) || (a.g = b + a.g);
  }
  function WO(a, b, c, d) {
    return "" != a.errors || b
      ? null
      : "" == a.g.replace(XO, "")
      ? (null != c && a.i[0]) || (null != d && a.i[1])
        ? !1
        : !0
      : !1;
  }
  function YO(a) {
    var b = WO(a, "", null, 0);
    if (null === b) return "XS";
    b = b ? "C" : "N";
    a = a.g;
    return 0 <= a.indexOf("a")
      ? b + "A"
      : 0 <= a.indexOf("f")
      ? b + "F"
      : b + "S";
  }
  var ZO = class {
    constructor(a, b) {
      this.i = ["", ""];
      this.g = a || "";
      this.errors = b || "";
    }
    za(a) {
      0 > this.errors.indexOf(a) && (this.errors = a + this.errors);
      return this;
    }
    toString() {
      return [this.i[0], this.i[1], this.g, this.errors].join("|");
    }
  };
  function $O(a) {
    let b = a.T;
    a.G = () => {};
    aP(a, a.B, b);
    let c = a.B.parentElement;
    if (!c) return a.g;
    let d = !0,
      e = null;
    for (; c; ) {
      try {
        e = /^head|html$/i.test(c.nodeName) ? null : Ze(c, b);
      } catch (g) {
        a.g.za("c");
      }
      const f = bP(a, b, c, e);
      c.classList.contains("adsbygoogle") &&
        e &&
        (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) &&
        (a.M = !0);
      if (d && !f && cP(e)) {
        VO(a.g, "l");
        a.F = c;
        break;
      }
      d = d && f;
      if (e && dP(a, e)) break;
      c = c.parentElement;
      if (!c) {
        if (b === a.pubWin) break;
        try {
          if (((c = b.frameElement), (b = b.parent), !Te(b))) {
            VO(a.g, "c");
            break;
          }
        } catch (g) {
          VO(a.g, "c");
          break;
        }
      }
    }
    a.C && a.A && eP(a);
    return a.g;
  }
  function fP(a) {
    function b(m) {
      for (let n = 0; n < m.length; n++) vk(k, m[n], "0px");
    }
    function c() {
      gP(d, g, h);
      !k || l || h || (b(hP), b(iP));
    }
    const d = a.B;
    d.style.overflow = a.Yc ? "visible" : "hidden";
    a.C &&
      (a.F
        ? (SO(d, jP()), SO(a.F, jP()))
        : SO(
            d,
            "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"
          ));
    null !== a.I && (d.style.opacity = String(a.I));
    const e =
        null != a.width && null != a.j && (a.Ud || a.j > a.width) ? a.j : null,
      f =
        null != a.height && null != a.i && (a.Ud || a.i > a.height)
          ? a.i
          : null;
    if (a.H) {
      const m = a.H.length;
      for (let n = 0; n < m; n++) gP(a.H[n], e, f);
    }
    const g = a.j,
      h = a.i,
      k = a.F,
      l = a.M;
    a.C ? r.setTimeout(c, 1e3) : c();
  }
  function kP(a) {
    if ((a.A && !a.Z) || (null == a.j && null == a.i && null == a.I && a.A))
      return a.g;
    var b = a.A;
    a.A = !1;
    $O(a);
    a.A = b;
    if (!b || (null != a.check && !WO(a.g, a.check, a.j, a.i))) return a.g;
    0 <= a.g.g.indexOf("n") && ((a.width = null), (a.height = null));
    if ((null == a.width && null !== a.j) || (null == a.height && null !== a.i))
      a.C = !1;
    (0 == a.j || 0 == a.i) && 0 <= a.g.g.indexOf("l") && ((a.j = 0), (a.i = 0));
    b = a.g;
    b.i[0] = "";
    b.i[1] = "";
    b.g = "";
    b.errors = "";
    fP(a);
    return $O(a);
  }
  function dP(a, b) {
    let c = !1;
    "none" == b.display && (VO(a.g, "n"), a.A && (c = !0));
    ("hidden" != b.visibility && "collapse" != b.visibility) || VO(a.g, "v");
    "hidden" == b.overflow && VO(a.g, "o");
    "absolute" == b.position
      ? (VO(a.g, "a"), (c = !0))
      : "fixed" == b.position && (VO(a.g, "f"), (c = !0));
    return c;
  }
  function aP(a, b, c) {
    let d = 0;
    if (!b || !b.parentElement) return !0;
    let e = !1,
      f = 0;
    const g = b.parentElement.childNodes;
    for (let k = 0; k < g.length; k++) {
      var h = g[k];
      h == b ? (e = !0) : ((h = lP(a, h, c)), (d |= h), e && (f |= h));
    }
    f & 1 && (d & 2 && UO(a.g, 0, "o"), d & 4 && UO(a.g, 1, "o"));
    return !(d & 1);
  }
  function bP(a, b, c, d) {
    let e = null;
    try {
      e = c.style;
    } catch (A) {
      a.g.za("s");
    }
    var f = c.getAttribute("width"),
      g = hf(f),
      h = c.getAttribute("height"),
      k = hf(h),
      l = (d && /^block$/.test(d.display)) || (e && /^block$/.test(e.display));
    b = aP(a, c, b);
    var m = d && d.width;
    const n = d && d.height;
    var p = e && e.width,
      q = e && e.height,
      v = jf(m) == a.width && jf(n) == a.height;
    m = v ? m : p;
    q = v ? n : q;
    p = jf(m);
    v = jf(q);
    g =
      null !== a.width &&
      ((null !== p && a.width >= p) || (null !== g && a.width >= g));
    v =
      null !== a.height &&
      ((null !== v && a.height >= v) || (null !== k && a.height >= k));
    k = !b && cP(d);
    v =
      b ||
      v ||
      k ||
      !(f || m || (d && (!mP(String(d.minWidth)) || !nP(String(d.maxWidth)))));
    l =
      b ||
      g ||
      k ||
      l ||
      !(
        h ||
        q ||
        (d && (!mP(String(d.minHeight)) || !nP(String(d.maxHeight))))
      );
    oP(a, 0, v, c, "width", f, a.width, a.j);
    pP(a, 0, "d", v, e, d, "width", m, a.width, a.j);
    pP(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.width, a.j);
    pP(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
    a.kf
      ? ((c = /^html|body$/i.test(c.nodeName)),
        (f = jf(n)),
        (h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1),
        (h =
          null != a.i &&
          d &&
          f &&
          Math.round(f) !== a.i &&
          !h &&
          "100%" !== d.minHeight),
        a.A &&
          !c &&
          h &&
          (e.setProperty("height", "auto", "important"),
          d &&
            !mP(String(d.minHeight)) &&
            e.setProperty("min-height", "0px", "important"),
          d &&
            !nP(String(d.maxHeight)) &&
            a.i &&
            Math.round(f) < a.i &&
            e.setProperty("max-height", "none", "important")))
      : (oP(a, 1, l, c, "height", h, a.height, a.i),
        pP(a, 1, "d", l, e, d, "height", q, a.height, a.i),
        pP(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.i),
        pP(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
    return b;
  }
  function eP(a) {
    function b() {
      if (0 < c) {
        var l = Ze(e, d) || { width: 0, height: 0 };
        const m = jf(l.width);
        l = jf(l.height);
        null !== m && null !== f && h && h(0, f - m);
        null !== l && null !== g && h && h(1, g - l);
        --c;
      } else r.clearInterval(k), h && (h(0, 0), h(1, 0));
    }
    let c = 31.25;
    const d = a.T,
      e = a.B,
      f = a.j,
      g = a.i,
      h = a.G;
    let k;
    r.setTimeout(() => {
      k = r.setInterval(b, 16);
    }, 990);
  }
  function lP(a, b, c) {
    if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
    if (1 == b.nodeType) {
      if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
      let d = null;
      try {
        d = Ze(b, c);
      } catch (e) {}
      if (d) {
        if ("none" == d.display || "fixed" == d.position) return 0;
        if ("absolute" == d.position) {
          if (
            !a.l.boundingClientRect ||
            "hidden" == d.visibility ||
            "collapse" == d.visibility
          )
            return 0;
          c = null;
          try {
            c = b.getBoundingClientRect();
          } catch (e) {
            return 0;
          }
          return (
            (c.right > a.l.boundingClientRect.left ? 2 : 0) |
            (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
          );
        }
      }
      return 1;
    }
    return 0;
  }
  function oP(a, b, c, d, e, f, g, h) {
    if (null != h) {
      if ("string" == typeof f) {
        if ("100%" == f || !f) return;
        f = hf(f);
        null == f && (a.g.za("n"), UO(a.g, b, "d"));
      }
      if (null != f)
        if (c) {
          if (a.A)
            if (a.C) {
              const k = Math.max(f + h - (g || 0), 0),
                l = a.G;
              a.G = (m, n) => {
                m == b && Oe(d, e, String(k - n));
                l && l(m, n);
              };
            } else Oe(d, e, String(h));
        } else UO(a.g, b, "d");
    }
  }
  function pP(a, b, c, d, e, f, g, h, k, l) {
    if (null != l) {
      f = f && f[g];
      "string" != typeof f ||
        ("m" == c ? mP(f) : nP(f)) ||
        ((f = jf(f)),
        null == f ? VO(a.g, "p") : null != k && VO(a.g, f == k ? "E" : "e"));
      if ("string" == typeof h) {
        if ("m" == c ? mP(h) : nP(h)) return;
        h = jf(h);
        null == h && (a.g.za("p"), UO(a.g, b, c));
      }
      if (null != h)
        if (d && e) {
          if (a.A)
            if (a.C) {
              const m = Math.max(h + l - (k || 0), 0),
                n = a.G;
              a.G = (p, q) => {
                p == b && (e[g] = m - q + "px");
                n && n(p, q);
              };
            } else e[g] = l + "px";
        } else UO(a.g, b, c);
    }
  }
  var uP = class {
    constructor(a, b, c, d, e, f, g) {
      this.pubWin = a;
      this.B = b;
      this.H = c;
      this.l = new qP(this.B);
      this.F = this.G = null;
      this.M = !1;
      this.T = (a = this.B.ownerDocument) && (a.defaultView || a.parentWindow);
      this.l = new qP(this.B);
      this.A = g;
      this.Z = rP(this.l, d.sf, d.height, d.Sc);
      this.width = this.A
        ? this.l.boundingClientRect
          ? this.l.boundingClientRect.right - this.l.boundingClientRect.left
          : null
        : e;
      this.height = this.A
        ? this.l.boundingClientRect
          ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top
          : null
        : f;
      this.j = sP(d.width);
      this.i = sP(d.height);
      this.I = this.A ? sP(d.opacity) : null;
      this.check = d.check;
      this.Sc = !!d.Sc;
      this.C = "animate" == d.sf && !tP(this.l, this.i, this.Sc) && TO();
      this.Yc = !!d.Yc;
      this.g = new ZO();
      tP(this.l, this.i, this.Sc) && VO(this.g, "r");
      e = this.l;
      e.g && e.i >= e.U && VO(this.g, "b");
      this.Ud = !!d.Ud;
      this.kf = !!d.kf;
    }
  };
  function tP(a, b, c) {
    var d;
    (d = a.g) &&
      !(d = !a.visible) &&
      (c
        ? ((b = a.i + Math.min(b, sP(a.getHeight()))), (a = a.g && b >= a.U))
        : (a = a.g && a.i >= a.U),
      (d = a));
    return d;
  }
  var qP = class {
    constructor(a) {
      this.boundingClientRect = null;
      var b = a && a.ownerDocument,
        c = b && (b.defaultView || b.parentWindow);
      c = c && We(c);
      this.g = !!c;
      if (a)
        try {
          this.boundingClientRect = a.getBoundingClientRect();
        } catch (g) {}
      var d = a;
      let e = 0,
        f = this.boundingClientRect;
      for (; d; )
        try {
          f && (e += f.top);
          const g = d.ownerDocument,
            h = g && (g.defaultView || g.parentWindow);
          (d = h && h.frameElement) && (f = d.getBoundingClientRect());
        } catch (g) {
          break;
        }
      this.i = e;
      c = c || r;
      this.U = (
        "CSS1Compat" == c.document.compatMode
          ? c.document.documentElement
          : c.document.body
      ).clientHeight;
      b = b && kN(b);
      this.visible =
        !!a &&
        !(2 == b || 3 == b) &&
        !(
          this.boundingClientRect &&
          this.boundingClientRect.top >= this.boundingClientRect.bottom &&
          this.boundingClientRect.left >= this.boundingClientRect.right
        );
    }
    isVisible() {
      return this.visible;
    }
    getWidth() {
      return this.boundingClientRect
        ? this.boundingClientRect.right - this.boundingClientRect.left
        : null;
    }
    getHeight() {
      return this.boundingClientRect
        ? this.boundingClientRect.bottom - this.boundingClientRect.top
        : null;
    }
  };
  function rP(a, b, c, d) {
    switch (b) {
      case "no_rsz":
        return !1;
      case "force":
      case "animate":
        return !0;
      default:
        return tP(a, c, d);
    }
  }
  function cP(a) {
    return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat);
  }
  function vP(a, b, c, d) {
    return kP(new uP(a, b, d, c, null, null, !0));
  }
  var wP = new ZO("s", ""),
    XO = RegExp("[lonvafrbpEe]", "g");
  function nP(a) {
    return !a || /^(auto|none|100%)$/.test(a);
  }
  function mP(a) {
    return !a || /^(0px|auto|none|0%)$/.test(a);
  }
  function gP(a, b, c) {
    null !== b &&
      null !== hf(a.getAttribute("width")) &&
      a.setAttribute("width", String(b));
    null !== c &&
      null !== hf(a.getAttribute("height")) &&
      a.setAttribute("height", String(c));
    null !== b && (a.style.width = b + "px");
    null !== c && (a.style.height = c + "px");
  }
  var hP =
      "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(
        " "
      ),
    iP =
      "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(
        " "
      );
  function jP() {
    let a =
        "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
      b = hP;
    for (var c = 0; c < b.length; c++)
      a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
    b = iP;
    for (c = 0; c < b.length; c++)
      a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    return a;
  }
  function sP(a) {
    return "string" === typeof a
      ? hf(a)
      : "number" === typeof a && isFinite(a)
      ? a
      : null;
  }
  var xP = class extends IO {
    constructor(a, b, c) {
      super(a, b);
      this.l = c;
    }
    Z(a) {
      a["resize-me"] = (b, c) => {
        b = Ao(b);
        var d = b.r_chk;
        if (null == d || "" === d) {
          var e = hf(b.r_nw),
            f = hf(b.r_nh),
            g = hf(b.r_no);
          null != g || (0 !== e && 0 !== f) || (g = 0);
          var h = b.r_str;
          h = h ? h : null;
          {
            var k = /^true$/.test(b.r_ao),
              l = /^true$/.test(b.r_ifr),
              m = /^true$/.test(b.r_cab);
            const q = window;
            if (q)
              if ("no_rsz" === h) (b.err = "7"), (e = !0);
              else {
                var n = new qP(this.g);
                if (n.g) {
                  var p = n.getWidth();
                  null != p && (b.w = p);
                  p = n.getHeight();
                  null != p && (b.h = p);
                  rP(n, h, f, m)
                    ? ((n = this.l),
                      (d = vP(
                        q,
                        n,
                        {
                          width: e,
                          height: f,
                          opacity: g,
                          check: d,
                          sf: h,
                          Yc: k,
                          Ud: l,
                          Sc: m,
                        },
                        [this.g]
                      )),
                      b.r_cui &&
                        /^true$/.test(b.r_cui.toString()) &&
                        z(n, {
                          height: (null === f ? 0 : f - 48) + "px",
                          top: "24px",
                        }),
                      null != e && (b.nw = e),
                      null != f && (b.nh = f),
                      (b.rsz = d.toString()),
                      (b.abl = YO(d)),
                      (b.frsz = ("force" === h).toString()),
                      (b.err = "0"),
                      (e = !0))
                    : ((b.err = "1"), (e = !1));
                } else (b.err = "3"), (e = !1);
              }
            else (b.err = "2"), (e = !1);
          }
          c.source.postMessage(
            JSON.stringify({
              msg_type: "resize-result",
              r_str: h,
              r_status: e,
              googMsgType: "sth",
            }),
            "*"
          );
          this.g.dataset.googleQueryId ||
            this.g.setAttribute("data-google-query-id", b.qid);
        }
      };
    }
  };
  function yP(a, b, c) {
    return new IntersectionObserver(c, b);
  }
  function zP(a, b, c) {
    Rb(a, b, c);
    return () => Sb(a, b, c);
  }
  let AP = null;
  function BP() {
    AP = Zk();
  }
  function CP(a, b) {
    return b
      ? null === AP
        ? (Rb(a, "mousemove", BP, { passive: !0 }),
          Rb(a, "scroll", BP, { passive: !0 }),
          BP(),
          !1)
        : Zk() - AP >= 1e3 * b
      : !1;
  }
  function DP({
    win: a,
    element: b,
    C: c,
    B: d,
    A: e = 0,
    callback: f,
    i: g,
    g: h = {},
    l: k = !0,
    j: l = yP,
  }) {
    let m,
      n = !1,
      p = !1;
    const q = [],
      v = l(a, h, (A, B) => {
        try {
          const E = () => {
            q.length ||
              (d &&
                (q.push(
                  zP(b, "mouseenter", () => {
                    n = !0;
                    E();
                  })
                ),
                q.push(
                  zP(b, "mouseleave", () => {
                    n = !1;
                    E();
                  })
                )),
              q.push(zP(a.document, "visibilitychange", () => E())));
            const J = CP(a, e),
              G = mN(a.document);
            if (p && !n && !J && !G)
              m =
                m ||
                a.setTimeout(() => {
                  CP(a, e) ? E() : (f(), B.disconnect());
                }, 1e3 * c);
            else if (k || n || J || G) a.clearTimeout(m), (m = void 0);
          };
          ({ isIntersecting: p } = A[A.length - 1]);
          E();
        } catch (E) {
          g && g(E);
        }
      });
    v.observe(b);
    return () => {
      v.disconnect();
      for (const A of q) A();
      null != m && a.clearTimeout(m);
    };
  }
  function EP(a, b, c, d, e) {
    return new FP(a, b, c, d, e);
  }
  function GP(a, b, c) {
    const d = a.g,
      e = a.F;
    if (
      null != e &&
      null != d &&
      xo(c, d.contentWindow) &&
      ((b = b.config), "string" === typeof b)
    ) {
      try {
        var f = JSON.parse(b);
        if (!Array.isArray(f)) return;
        a.l = new Mj(f);
      } catch (g) {
        return;
      }
      a.ka();
      f = wi(a.l, 1);
      0 >= f ||
        (a.A = DP({
          win: a.j,
          element: e,
          C: f - 0.2,
          B: !ve(),
          A: wi(a.l, 3),
          callback: () => void HP(a, e),
          i: (g) => co.va(1223, g, void 0, void 0),
          g: { threshold: yi(a.l, 2, 1) },
          l: !0,
          j: void 0,
        }));
    }
  }
  function HP(a, b) {
    a.H();
    setTimeout(
      co.Ma(1224, () => {
        a.C.rc = (parseInt(a.C.rc, 10) || 0) + 1;
        var c;
        a: {
          if (Pc && (c = b.parentElement)) break a;
          c = b.parentNode;
          c = za(c) && 1 == c.nodeType ? c : null;
        }
        (c && Ov.test(c.className)) ||
          ((c = me(document, "INS")),
          (c.className = "adsbygoogle"),
          b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
        b && b.parentNode && b.parentNode.removeChild(b);
        WN(c, a.C, a.j);
      }),
      200
    );
  }
  var FP = class extends IO {
    constructor(a, b, c, d, e) {
      super(a, b);
      this.F = d;
      this.C = c;
      this.H = e;
      this.l = this.A = null;
      (b = (b = b.contentWindow) && b.parent) &&
        a != b &&
        this.T.push(ZN(b, "sth", this.xa, this.Qa));
    }
    Z(a) {
      a.av_ref = (b, c) => GP(this, b, c);
    }
    i() {
      super.i();
      this.F = null;
      this.A && this.A();
    }
  };
  const IP = {
    google: 1,
    googlegroups: 1,
    gmail: 1,
    googlemail: 1,
    googleimages: 1,
    googleprint: 1,
  };
  const JP = /^blogger$/,
    KP = /^wordpress(.|\s|$)/i,
    LP = /^joomla!/i,
    MP = /^drupal/i,
    NP = /\/wp-content\//,
    OP = /\/wp-content\/plugins\/advanced-ads/,
    PP = /\/wp-content\/themes\/genesis/,
    QP = /\/wp-content\/plugins\/genesis/;
  function RP(a) {
    var b = a.getElementsByTagName("script"),
      c = b.length;
    for (var d = 0; d < c; ++d) {
      var e = b[d];
      if (e.hasAttribute("src")) {
        e = e.getAttribute("src") || "";
        if (OP.test(e)) return 5;
        if (QP.test(e)) return 6;
      }
    }
    b = a.getElementsByTagName("link");
    c = b.length;
    for (d = 0; d < c; ++d)
      if (
        ((e = b[d]),
        e.hasAttribute("href") &&
          ((e = e.getAttribute("href") || ""), PP.test(e) || QP.test(e)))
      )
        return 6;
    a = a.getElementsByTagName("meta");
    d = a.length;
    for (e = 0; e < d; ++e) {
      var f = a[e];
      if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
        f = f.getAttribute("content") || "";
        if (JP.test(f)) return 1;
        if (KP.test(f)) return 2;
        if (LP.test(f)) return 3;
        if (MP.test(f)) return 4;
      }
    }
    for (a = 0; a < c; ++a)
      if (
        ((d = b[a]),
        "stylesheet" == d.getAttribute("rel") &&
          d.hasAttribute("href") &&
          ((d = d.getAttribute("href") || ""), NP.test(d)))
      )
        return 2;
    return 0;
  }
  let SP = navigator;
  var TP = (a) => {
      let b = 1;
      let c;
      if (void 0 != a && "" != a)
        for (b = 0, c = a.length - 1; 0 <= c; c--) {
          var d = a.charCodeAt(c);
          b = ((b << 6) & 268435455) + d + (d << 14);
          d = b & 266338304;
          b = 0 != d ? b ^ (d >> 21) : b;
        }
      return b;
    },
    UP = (a, b) => {
      if (!a || "none" == a) return 1;
      a = String(a);
      "auto" == a &&
        ((a = b),
        "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
      return TP(a.toLowerCase());
    };
  const VP = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
    WP = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
    XP = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
  function YP(a) {
    var b = window;
    return "on" === a.google_adtest ||
      "on" === a.google_adbreak_test ||
      b.location.host.endsWith("h5games.usercontent.goog")
      ? b.document
          .querySelector('meta[name="h5-games-eids"]')
          ?.getAttribute("content")
          ?.split(",")
          .map((c) => Math.floor(Number(c)))
          .filter((c) => !isNaN(c) && 0 < c) || []
      : [];
  }
  function ZP(a, b) {
    b &&
      !a.g &&
      ((b = b.split(":")),
      (a.g = b.find((c) => 0 === c.indexOf("ID=")) || null),
      (a.j = b.find((c) => 0 === c.indexOf("T="))?.substring(2) || null));
  }
  var $P = class {
      constructor() {
        this.l = new Date(Date.now());
        this.j = this.g = null;
        this.i = { [3]: {}, [4]: {}, [5]: {} };
        this.i[3] = {
          [71]: (...a) => {
            var b = this.g;
            var c = this.l,
              d = Number(a[0]);
            a = Number(a[1]);
            b =
              null !== b
                ? cf(`${"w5uHecUBa2S"}:${d}:${b}`) % a ===
                  Math.floor(c.valueOf() / 864e5) % a
                : void 0;
            return b;
          },
        };
        this.i[4] = {
          [15]: () => {
            var a = Number(this.j || void 0);
            isNaN(a)
              ? (a = void 0)
              : ((a = new Date(1e3 * a)),
                (a =
                  1e4 * a.getFullYear() +
                  100 * (a.getMonth() + 1) +
                  a.getDate()));
            return a;
          },
        };
      }
    },
    aQ;
  function bQ(a = r) {
    return a.ggeac || (a.ggeac = {});
  }
  function cQ(a, b = document) {
    return !!b.featurePolicy?.features().includes(a);
  }
  function dQ(a, b = document) {
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  function eQ(a = $e()) {
    return (b) => cf(`${b} + ${a}`) % 1e3;
  }
  function fQ(a, b) {
    a.g = Wn(14, b, () => {});
  }
  class gQ {
    constructor() {
      this.g = () => {};
    }
  }
  function hQ(a) {
    w(gQ).g(a);
  }
  function iQ(a = bQ()) {
    Xn(w(Yn), a);
    jQ(a);
    fQ(w(gQ), a);
    w(Vb).g();
  }
  function jQ(a) {
    const b = w(Vb);
    b.i = (c, d) => Wn(5, a, () => !1)(c, d, 1);
    b.j = (c, d) => Wn(6, a, () => 0)(c, d, 1);
    b.l = (c, d) => Wn(7, a, () => "")(c, d, 1);
    b.A = (c, d) => Wn(8, a, () => [])(c, d, 1);
    b.g = () => {
      Wn(15, a, () => {})(1);
    };
  }
  function kQ(a, b, c) {
    var d = { [0]: eQ(zf(b).toString()) };
    if (c) {
      c = JM(new NM(b), "__gads", c) || "";
      aQ || (aQ = new $P());
      b = aQ;
      ZP(b, c);
      hQ(b.i);
      const e = new RegExp(/(?:^|:)(ID=[^\s:]+)/).exec(c)?.[1];
      d[1] = (f) => (e ? eQ(e)(f) : void 0);
    }
    d = Zn(a, d);
    co.Da(1085, YJ(w(WJ), a, d));
  }
  function lQ(a, b) {
    kQ(20, a, b);
    kQ(17, a, b);
  }
  function mQ(a) {
    const b = w(Yn).g();
    a = YP(a);
    return b.concat(a).join(",");
  }
  function nQ(a) {
    const b = Yk();
    b && (a.debug_experiment_id = b);
  }
  function oQ(a) {
    -1 === a.g && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
    return a.g;
  }
  var pQ = class {
    constructor() {
      this.data = [];
      this.g = -1;
    }
    set(a, b = !0) {
      0 <= a &&
        52 > a &&
        Number.isInteger(a) &&
        this.data[a] !== b &&
        ((this.data[a] = b), (this.g = -1));
    }
    get(a) {
      return !!this.data[a];
    }
  };
  function qQ() {
    const a = new pQ();
    "SVGElement" in r && "createElementNS" in r.document && a.set(0);
    const b = nf();
    b["allow-top-navigation-by-user-activation"] && a.set(1);
    b["allow-popups-to-escape-sandbox"] && a.set(2);
    r.crypto && r.crypto.subtle && a.set(3);
    "TextDecoder" in r && "TextEncoder" in r && a.set(4);
    return oQ(a);
  }
  const rQ = new Map([
      ["navigate", 1],
      ["reload", 2],
      ["back_forward", 3],
      ["prerender", 4],
    ]),
    sQ = new Map([
      [0, 1],
      [1, 2],
      [2, 3],
    ]);
  function tQ(a) {
    try {
      const b = a.performance?.getEntriesByType("navigation")?.[0];
      if (b?.type) return rQ.get(b.type) ?? null;
    } catch {}
    return sQ.get(a.performance?.navigation?.type) ?? null;
  }
  var uQ = class extends R {
    constructor() {
      super();
    }
  };
  function vQ(a, b) {
    if (wc()) {
      var c = a.document.documentElement.lang;
      NR(a)
        ? OR(b, zf(a), !0, "", c)
        : new MutationObserver((d, e) => {
            NR(a) &&
              (OR(b, zf(a), !1, c, a.document.documentElement.lang),
              e.disconnect());
          }).observe(a.document.documentElement, {
            attributeFilter: ["class"],
          });
    }
  }
  function NR(a) {
    a = a.document?.documentElement?.classList;
    return !(!a?.contains("translated-rtl") && !a?.contains("translated-ltr"));
  }
  function OR(a, b, c, d, e) {
    Qj(
      { ptt: `${a}`, pvsid: `${b}`, ibatl: String(c), pl: d, nl: e },
      "translate-event"
    );
  }
  function PR(a) {
    if ((a = a.navigator?.userActivation)) {
      var b = 0;
      a?.hasBeenActive && (b |= 1);
      a?.isActive && (b |= 2);
      return b;
    }
  }
  const QR = /[+, ]/;
  function RR(a, b) {
    const c = a.D;
    var d = a.pubWin,
      e = {},
      f = d.document,
      g = Cf(d),
      h = !1,
      k = "",
      l = 1;
    a: {
      l = c.google_ad_width || d.google_ad_width;
      var m = c.google_ad_height || d.google_ad_height;
      if (d && d.top === d) h = !1;
      else {
        h = d.document;
        k = h.documentElement;
        if (l && m) {
          var n = 1;
          let q = 1;
          d.innerHeight
            ? ((n = d.innerWidth), (q = d.innerHeight))
            : k && k.clientHeight
            ? ((n = k.clientWidth), (q = k.clientHeight))
            : h.body && ((n = h.body.clientWidth), (q = h.body.clientHeight));
          if (q > 2 * m || n > 2 * l) {
            h = !1;
            break a;
          }
        }
        h = !0;
      }
    }
    k = h;
    l = rJ(g).Ue;
    m = d.top == d ? 0 : Te(d.top) ? 1 : 2;
    n = 4;
    k || 1 !== m
      ? k || 2 !== m
        ? k && 1 === m
          ? (n = 7)
          : k && 2 === m && (n = 8)
        : (n = 6)
      : (n = 5);
    l && (n |= 16);
    k = String(n);
    l = tJ(d);
    m = !!c.google_page_url;
    e.google_iframing = k;
    0 !== l && (e.google_iframing_environment = l);
    if (!m && "ad.yieldmanager.com" === f.domain) {
      for (
        k = f.URL.substring(f.URL.lastIndexOf("http"));
        -1 < k.indexOf("%");

      )
        try {
          k = decodeURIComponent(k);
        } catch (q) {
          break;
        }
      c.google_page_url = k;
      m = !!k;
    }
    m
      ? ((e.google_page_url = c.google_page_url),
        (e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY"))
      : (h && Te(d.top) && f.referrer && d.top.document.referrer === f.referrer
          ? (e.google_page_url = d.top.document.URL)
          : (e.google_page_url = h ? f.referrer : f.URL),
        (e.google_page_location = null));
    if (f.URL === e.google_page_url)
      try {
        var p = Math.round(Date.parse(f.lastModified) / 1e3) || null;
      } catch {
        p = null;
      }
    else p = null;
    e.google_last_modified_time = p;
    d = g === g.top ? g.document.referrer : ((d = nk()) && d.referrer) || "";
    e.google_referrer_url = d;
    sJ(e, c);
    x(fv) && !b.g()
      ? (e = "pagead2.googlesyndication.com")
      : ((e = c.google_page_location || c.google_page_url),
        "EMPTY" === e && (e = c.google_page_url),
        e
          ? ((e = e.toString()),
            0 == e.indexOf("http://")
              ? (e = e.substring(7, e.length))
              : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)),
            (d = e.indexOf("/")),
            -1 == d && (d = e.length),
            (e = e.substring(0, d).split(".")),
            (d = !1),
            3 <= e.length && (d = e[e.length - 3] in IP),
            2 <= e.length && (d = d || e[e.length - 2] in IP),
            (e = d))
          : (e = !1),
        (e = e
          ? "pagead2.googlesyndication.com"
          : "googleads.g.doubleclick.net"));
    b = SR(a, b);
    d = a.D;
    f = d.google_ad_channel;
    g = "/pagead/ads?";
    "ca-pub-6219811747049371" === d.google_ad_client &&
      TR.test(f) &&
      (g = "/pagead/lopri?");
    a = Kk(
      b,
      `https://${e}${g}` +
        (N(a.ma, 9) && c.google_debug_params ? c.google_debug_params : "")
    );
    return (c.google_ad_url = a);
  }
  function UR(a) {
    try {
      if (a.parentNode) return a.parentNode;
    } catch {
      return null;
    }
    if (9 === a.nodeType)
      a: {
        try {
          const c = a ? le(a) : window;
          if (c) {
            const d = c.frameElement;
            if (d && Te(c.parent)) {
              var b = d;
              break a;
            }
          }
        } catch {}
        b = null;
      }
    else b = null;
    return b;
  }
  function VR(a, b) {
    var c = mQ(a.pubWin);
    a.D.saaei && (c += ("" === c ? "" : ",") + a.D.saaei);
    b.eid = c;
    c = a.D.google_loeid;
    "string" === typeof c && ((a.i |= 4096), (b.loeid = c));
  }
  function WR(a, b) {
    a =
      (a = We(a.pubWin)) && a.document
        ? GM(a.document, a)
        : new Zd(-12245933, -12245933);
    b.scr_x = Math.round(a.x);
    b.scr_y = Math.round(a.y);
  }
  function YR(a) {
    try {
      const b = r.top.location.hash;
      if (b) {
        const c = b.match(a);
        return (c && c[1]) || "";
      }
    } catch {}
    return "";
  }
  function ZR(a, b, c) {
    const d = a.D;
    var e = a.pubWin,
      f = a.J,
      g = Cf(window);
    d.fsapi && (b.fsapi = !0);
    b.ref = d.google_referrer_url;
    b.loc = d.google_page_location;
    var h;
    (h = nk(e)) && za(h.data) && "string" === typeof h.data.type
      ? ((h = h.data.type.toLowerCase()),
        (h = "doubleclick" == h || "adsense" == h ? null : h))
      : (h = null);
    h && (b.apn = h.substr(0, 10));
    g = rJ(g);
    b.url || b.loc || !g.url || ((b.url = g.url), g.Ue || (b.usrc = 1));
    g.url != (b.loc || b.url) && (b.top = g.url);
    a.zc && (b.etu = a.zc);
    (c = QN(d, f, f ? Wj(c, f) : null)) && (b.fc = c);
    if (!Rk(d)) {
      c = a.pubWin.document;
      g = "";
      if (
        c.documentMode &&
        ((h = te(new he(c), "IFRAME")),
        (h.frameBorder = "0"),
        (h.style.height = 0),
        (h.style.width = 0),
        (h.style.position = "absolute"),
        c.body)
      ) {
        c.body.appendChild(h);
        try {
          const Z = h.contentWindow.document;
          Z.open();
          var k = Hd("<!DOCTYPE html>");
          Z.write(Fd(k));
          Z.close();
          g += Z.documentMode;
        } catch (Z) {}
        c.body.removeChild(h);
      }
      b.docm = g;
    }
    let l, m, n, p, q, v, A, B, E, J;
    try {
      (l = e.screenX), (m = e.screenY);
    } catch (Z) {}
    try {
      (n = e.outerWidth), (p = e.outerHeight);
    } catch (Z) {}
    try {
      (q = e.innerWidth), (v = e.innerHeight);
    } catch (Z) {}
    try {
      (A = e.screenLeft), (B = e.screenTop);
    } catch (Z) {}
    try {
      (q = e.innerWidth), (v = e.innerHeight);
    } catch (Z) {}
    try {
      (E = e.screen.availWidth), (J = e.screen.availTop);
    } catch (Z) {}
    b.brdim = [A, B, l, m, E, J, n, p, q, v].join();
    k = 0;
    void 0 === r.postMessage && (k |= 1);
    0 < k && (b.osd = k);
    b.vis = kN(e.document);
    k = a.ha;
    e = KN(d)
      ? wP
      : kP(
          new uP(
            e,
            k,
            null,
            { width: 0, height: 0 },
            d.google_ad_width,
            d.google_ad_height,
            !1
          )
        );
    b.rsz = e.toString();
    b.abl = YO(e);
    if (!KN(d) && ((e = Sk(d)), null != e)) {
      k = 0;
      a: {
        try {
          {
            var G = d.google_async_iframe_id;
            const Z = window.document;
            if (G) var K = Z.getElementById(G);
            else {
              var M = Z.getElementsByTagName("script"),
                Ba = M[M.length - 1];
              K = (Ba && Ba.parentNode) || null;
            }
          }
          if ((G = K)) {
            K = [];
            M = 0;
            for (
              var Ya = Date.now();
              100 >= ++M && 50 > Date.now() - Ya && (G = UR(G));

            )
              1 === G.nodeType && K.push(G);
            var Ib = K;
            b: {
              for (Ya = 0; Ya < Ib.length; Ya++) {
                c: {
                  var ea = Ib[Ya];
                  try {
                    if (
                      ea.parentNode &&
                      0 < ea.offsetWidth &&
                      0 < ea.offsetHeight &&
                      ea.style &&
                      "none" !== ea.style.display &&
                      "hidden" !== ea.style.visibility &&
                      (!ea.style.opacity || 0 !== Number(ea.style.opacity))
                    ) {
                      const Z = ea.getBoundingClientRect();
                      var lb = 0 < Z.right && 0 < Z.bottom;
                      break c;
                    }
                  } catch (Z) {}
                  lb = !1;
                }
                if (!lb) {
                  var Kc = !1;
                  break b;
                }
              }
              Kc = !0;
            }
            if (Kc) {
              b: {
                const Z = Date.now();
                Kc = /^html|body$/i;
                lb = /^fixed/i;
                for (ea = 0; ea < Ib.length && 50 > Date.now() - Z; ea++) {
                  const md = Ib[ea];
                  if (
                    !Kc.test(md.tagName) &&
                    lb.test(md.style.position || zk(md, "position"))
                  ) {
                    var sc = md;
                    break b;
                  }
                }
                sc = null;
              }
              break a;
            }
          }
        } catch {}
        sc = null;
      }
      sc &&
        sc.offsetWidth * sc.offsetHeight <= 4 * e.width * e.height &&
        (k = 1);
      b.pfx = k;
    }
    a: {
      if (0.05 > Math.random() && f)
        try {
          const Z = f.document.getElementsByTagName("head")[0];
          var Fe = Z ? RP(Z) : 0;
          break a;
        } catch (Z) {}
      Fe = 0;
    }
    f = Fe;
    0 !== f && (b.cms = f);
    d.google_lrv !== a.ub && (b.alvm = d.google_lrv || "none");
  }
  function $R(a, b) {
    let c = 0;
    a.location && a.location.ancestorOrigins
      ? (c = a.location.ancestorOrigins.length)
      : Ue(() => {
          c++;
          return !1;
        }, a);
    c && (b.nhd = c);
  }
  function aS(a, b) {
    const c = Y(b, 8, {});
    b = Y(b, 9, {});
    const d = a.google_ad_section,
      e = a.google_ad_format;
    a = a.google_ad_slot;
    e
      ? (c[d] = c[d] ? c[d] + `,${e}` : e)
      : a && (b[d] = b[d] ? b[d] + `,${a}` : a);
  }
  function bS(a, b, c) {
    const d = a.D;
    var e = a.D;
    b.dt = fo;
    e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
    a: {
      try {
        var f = r.performance;
        if (f && f.timing && f.now) {
          var g =
            f.timing.navigationStart +
            Math.round(f.now()) -
            f.timing.domLoading;
          break a;
        }
      } catch (M) {}
      g = null;
    }
    (e = (e = g) ? uO(e, r.Date.now() - fo, 1e6) : null) && (b.bdt = e);
    b.idt = uO(a.F, fo);
    e = a.D;
    b.shv = O(a.ma, 2);
    a.ub && (b.mjsv = a.ub);
    "sd" == e.google_loader_used
      ? (b.ptt = 5)
      : "aa" == e.google_loader_used && (b.ptt = 9);
    /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
    if ((e = nk(a.pubWin)))
      (b.is_amp = 1), (b.amp_v = ok(e)), (e = pk(e)) && (b.act = e);
    e = a.pubWin;
    e == e.top && (b.abxe = 1);
    e = new NM(a.pubWin);
    (g = JM(e, "__gads", c)) && (b.cookie = g);
    (g = JM(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
    "1" === JM(e, "__gpi_opt_out", c) && (b.pdopt = "1");
    x(Us) &&
      ((e = new xO(a.pubWin, { Vg: !1, Wg: !a.G })),
      (e =
        N(c, 8) || ((e.g.Vg || !c.g()) && e.g.Wg)
          ? void 0
          : new Vj(e.i.document).get("__eoi") || ""),
      e && (b.eo_id_str = e));
    e = uJ();
    f = Y(e, 8, {});
    g = d.google_ad_section;
    f[g] && (b.prev_fmts = f[g]);
    f = Y(e, 9, {});
    f[g] && (b.prev_slotnames = f[g].toLowerCase());
    aS(d, e);
    g = Y(e, 15, 0);
    0 < g && (b.nras = String(g));
    (f = nk(window))
      ? (f
          ? ((g = f.pageViewId),
            (f = f.clientId),
            "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6)))
          : (g = null),
        (g = +g))
      : ((g = Cf(window)),
        (f = g.google_global_correlator),
        f ||
          (g.google_global_correlator = f =
            1 + Math.floor(Math.random() * Math.pow(2, 43))),
        (g = f));
    b.correlator = Y(e, 7, g);
    x(tv) && (b.rume = 1);
    if (d.google_ad_channel) {
      g = Y(e, 10, {});
      f = "";
      var h = d.google_ad_channel.split(QR);
      for (var k = 0; k < h.length; k++) {
        var l = h[k];
        g[l] ? (f += l + "+") : (g[l] = !0);
      }
      b.pv_ch = f;
    }
    if (d.google_ad_host_channel) {
      g = d.google_ad_host_channel;
      f = Y(e, 11, []);
      h = g.split("|");
      e = -1;
      g = [];
      for (k = 0; k < h.length; k++) {
        l = h[k].split(QR);
        f[k] || (f[k] = {});
        var m = "";
        for (var n = 0; n < l.length; n++) {
          var p = l[n];
          "" !== p && (f[k][p] ? (m += "+" + p) : (f[k][p] = !0));
        }
        m = m.slice(1);
        g[k] = m;
        "" !== m && (e = k);
      }
      f = "";
      if (-1 < e) {
        for (h = 0; h < e; h++) f += g[h] + "|";
        f += g[e];
      }
      b.pv_h_ch = f;
    }
    b.frm = d.google_iframing;
    b.ife = d.google_iframing_environment;
    e = d.google_ad_client;
    try {
      var q = Cf(window),
        v = q.google_prev_clients;
      v || (v = q.google_prev_clients = {});
      if (e in v) var A = 1;
      else (v[e] = !0), (A = 2);
    } catch {
      A = 0;
    }
    b.pv = A;
    a.J &&
      x(Jt) &&
      ((A = a.J),
      (A = wc() && NR(A) ? A.document.documentElement.lang : void 0),
      A && (b.tl = A));
    v = a.pubWin.document;
    A = a.D;
    e = a.pubWin;
    q = v.domain;
    e = (c.g() && Yj(e) ? e.document.cookie : null) || "";
    h = a.pubWin.screen;
    k = v.referrer;
    m = Mk();
    if (nk()) var B = window.gaGlobal || {};
    else {
      g = Math.round(new Date().getTime() / 1e3);
      f = A.google_analytics_domain_name;
      c = "undefined" == typeof f ? UP("auto", q) : UP(f, q);
      n = -1 < e.indexOf("__utma=" + c + ".");
      l = -1 < e.indexOf("__utmb=" + c);
      (q = (sk() || window).gaGlobal) ||
        ((q = {}), ((sk() || window).gaGlobal = q));
      v = !1;
      if (n) {
        var E = e
          .split("__utma=" + c + ".")[1]
          .split(";")[0]
          .split(".");
        l ? (q.sid = E[3]) : q.sid || (q.sid = g + "");
        q.vid = E[0] + "." + E[1];
        q.from_cookie = !0;
      } else {
        q.sid || (q.sid = g + "");
        if (!q.vid) {
          v = !0;
          l = Math.round(2147483647 * Math.random());
          n = SP.appName;
          p = SP.version;
          var J = SP.language ? SP.language : SP.browserLanguage,
            G = SP.platform,
            K = SP.userAgent;
          try {
            E = SP.javaEnabled();
          } catch (M) {
            E = !1;
          }
          E = [n, p, J, G, K, E ? 1 : 0].join("");
          h
            ? (E += h.width + "x" + h.height + h.colorDepth)
            : r.java &&
              r.java.awt &&
              ((h = r.java.awt.Toolkit.getDefaultToolkit().getScreenSize()),
              (E += h.screen.width + "x" + h.screen.height));
          E = E + e + (k || "");
          for (h = E.length; 0 < m; ) E += m-- ^ h++;
          q.vid = (l ^ (TP(E) & 2147483647)) + "." + g;
        }
        q.from_cookie || (q.from_cookie = !1);
      }
      if (!q.cid) {
        b: for (
          g = f,
            E = 999,
            g &&
              ((g = 0 == g.indexOf(".") ? g.substr(1) : g),
              (E = g.split(".").length)),
            g = 999,
            e = e.split(";"),
            f = 0;
          f < e.length;
          f++
        )
          if ((h = VP.exec(e[f]) || WP.exec(e[f]) || XP.exec(e[f]))) {
            k = h[1] || 0;
            if (k == E) {
              B = h[2];
              break b;
            }
            k < g && ((g = k), (B = h[2]));
          }
        v && B && -1 != B.search(/^\d+\.\d+$/)
          ? ((q.vid = B), (q.from_cookie = !0))
          : B != q.vid && (q.cid = B);
      }
      q.dh = c;
      q.hid || (q.hid = Math.round(2147483647 * Math.random()));
      B = q;
    }
    b.ga_vid = B.vid;
    b.ga_sid = B.sid;
    b.ga_hid = B.hid;
    b.ga_fc = B.from_cookie;
    b.ga_cid = B.cid;
    b.ga_wpids = A.google_analytics_uacct;
    $R(a.pubWin, b);
    (a = d.google_ad_layout) && 0 <= jO[a] && (b.rplot = jO[a]);
  }
  function cS(a, b) {
    var c = a.g;
    a = a.ma;
    if (c?.l() || DJ()) b.npa = 1;
    x($u) && a.g() && !c?.A() && (b.ltd_cs = 1);
    c &&
      (c.A() && (b.gdpr = c.j() ? "1" : "0"),
      (a = I(c, 1)) && (b.us_privacy = a),
      (a = I(c, 2)) && (b.gdpr_consent = a),
      (a = I(c, 4)) && (b.addtl_consent = a),
      (a = L(c, 7)) && (b.tcfe = a),
      x(Ss) &&
        ((a = O(c, 11)) && (b.gpp = a),
        (c = bi(c, 10, jh, 0)) && 0 < c.length && (b.gpp_sid = c.join(","))));
  }
  function dS(a, b) {
    const c = a.D;
    cS(a, b);
    af(HJ, (d, e) => {
      b[d] = c[e];
    });
    KN(c) && ((a = XN(c)), (b.fa = a));
    b.pi ||
      null == c.google_ad_slot ||
      ((a = yB(c)), null != a.g && ((a = oq(a.getValue())), (b.pi = a)));
  }
  function eS(a, b) {
    var c = rk() || EM(a.pubWin.top);
    c && ((b.biw = c.width), (b.bih = c.height));
    c = a.pubWin;
    c !== c.top &&
      (a = EM(a.pubWin)) &&
      ((b.isw = a.width), (b.ish = a.height));
  }
  function fS(a, b) {
    var c = a.pubWin;
    null !== c && c != c.top
      ? ((a = [c.document.URL]),
        c.name && a.push(c.name),
        (c = EM(c, !1)),
        a.push(c.width.toString()),
        a.push(c.height.toString()),
        (a = cf(a.join(""))))
      : (a = 0);
    0 !== a && (b.ifk = a);
  }
  function gS(a, b) {
    (a = BJ()[a.D.google_ad_client]) && (b.psts = a.join());
  }
  function hS(a, b) {
    (a = a.pubWin.tmod) && (b.tmod = a);
  }
  function iS(a, b) {
    (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Kf(a));
  }
  function jS(a, b) {
    try {
      const e =
        a.pubWin &&
        a.pubWin.external &&
        a.pubWin.external.getHostEnvironmentValue &&
        a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
      if (e) {
        var c = JSON.parse(e("os-mode")),
          d = parseInt(c["os-mode"], 10);
        0 <= d && (b.wsm = d + 1);
      }
    } catch {}
  }
  function kS(a, b) {
    0 <= a.D.google_ad_public_floor && (b.pubf = a.D.google_ad_public_floor);
    0 <= a.D.google_ad_private_floor && (b.pvtf = a.D.google_ad_private_floor);
  }
  function lS(a, b) {
    const c = Number(a.D.google_traffic_source);
    c && Object.values(Na).includes(c) && (b.trt = a.D.google_traffic_source);
  }
  function mS(a, b) {
    var c;
    (c = x(zv)) ||
      ((c = a.A?.label), (c = x(ev) && c ? !!c.match(Xb(cv)) : !1));
    c ||
      ("runAdAuction" in a.pubWin.navigator &&
        "joinAdInterestGroup" in a.pubWin.navigator &&
        (b.td = 1));
  }
  function nS(a, b) {
    if (null != a.A && wc()) {
      var c = new uQ(),
        d = Ji(c, 3, a.A.label);
      Q(d, 4, a.A.status);
      b.psd = Kf($i(c));
    }
  }
  function oS(a, b) {
    x(qv) || (dQ("attribution-reporting", a.pubWin.document) && (b.nt = 1));
  }
  function pS(a, b) {
    if ("string" === typeof a.D.google_privacy_treatments) {
      var c = new Map([["disablePersonalization", 1]]);
      a = a.D.google_privacy_treatments.split(",");
      var d = [];
      for (const [e, f] of c.entries()) (c = f), a.includes(e) && d.push(c);
      d.length && (b.ppt = d.join("~"));
    }
  }
  function qS(a, b) {
    x(Vu) && (b.bz = Df(a.pubWin));
  }
  function SR(a, b) {
    const c = {};
    dS(a, c);
    iS(a, c);
    bS(a, c, b);
    c.u_tz = -new Date().getTimezoneOffset();
    c.u_his = Mk();
    c.u_h = Rj.screen?.height;
    c.u_w = Rj.screen?.width;
    c.u_ah = Rj.screen?.availHeight;
    c.u_aw = Rj.screen?.availWidth;
    c.u_cd = Rj.screen?.colorDepth;
    c.u_sd = FM(a.pubWin);
    c.dmc = a.pubWin.navigator?.deviceMemory;
    vA(889, () => {
      if (null == a.J) (c.adx = -12245933), (c.ady = -12245933);
      else {
        var e = IM(a.J, a.ha);
        (c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady) ||
          ((c.adx = Math.round(e.x)), (c.ady = Math.round(e.y)));
        HM(a.ha) || ((c.adx = -12245933), (c.ady = -12245933), (a.i |= 32768));
      }
    });
    eS(a, c);
    fS(a, c);
    WR(a, c);
    VR(a, c);
    c.oid = 2;
    gS(a, c);
    c.pvsid = zf(a.pubWin, tA);
    hS(a, c);
    jS(a, c);
    c.uas = PR(a.pubWin);
    const d = tQ(a.pubWin);
    d && (c.nvt = d);
    a.C && (c.scar = a.C);
    a.l instanceof Uint8Array
      ? (c.topics = If(a.l))
      : a.l && ((c.topics = a.l), (c.tps = a.l));
    ZR(a, c, b);
    c.fu = a.i;
    c.bc = qQ();
    N(a.ma, 9) &&
      (nQ(c),
      (c.creatives = YR(/\b(?:creatives)=([\d,]+)/)),
      (c.adgroups = YR(/\b(?:adgroups)=([\d,]+)/)),
      c.adgroups &&
        ((c.adtest = "on"),
        (c.disable_budget_throttling = !0),
        (c.use_budget_filtering = !1),
        (c.retrieve_only = !0),
        (c.disable_fcap = !0)));
    dk() && (c.atl = !0);
    qS(a, c);
    kS(a, c);
    lS(a, c);
    mS(a, c);
    nS(a, c);
    oS(a, c);
    pS(a, c);
    x(gv) && "true" === String(a.D.google_xz) && (c.scd = 1);
    return c;
  }
  const TR = /YtLoPri/;
  var rS = class extends R {};
  var oi = class extends R {
      Ne() {
        return O(this, 18);
      }
      xd() {
        return O(this, 19);
      }
      Oe() {
        return O(this, 20);
      }
    },
    sS = ej(oi);
  oi.O = [15];
  var tS = class extends R {},
    uS = ej(tS);
  tS.O = [3];
  var vS = class {
    constructor(a) {
      this.Xb = a.Xb ?? [];
      this.zf = a.zf ?? !1;
      this.Sg = a.Sg ?? 0.1;
      this.gf = a.gf ?? !1;
      this.Fe = a.Fe ?? !1;
      this.Ge = a.Ge ?? !1;
      this.Ke = !!a.Ke;
      this.ke = a.ke ?? 3e4;
      this.ie = a.ie ?? "";
      this.Ua = a.Ua ?? "";
      this.Vc = !!a.Vc;
      this.we = !!a.we;
      this.hf = !!a.hf;
      this.W = !!a.W;
      this.Mc = a.Mc ?? 0.3;
      this.jc = !!a.jc;
      this.Hc = !!a.Hc;
      this.je = !!a.je;
      this.md = a.md ?? 100001;
    }
  };
  function wS(a, b) {
    a = FB(UA(b, a), a);
    if (0 !== a.length) return a.reduce((c, d) => (c.ja.g > d.ja.g ? c : d));
  }
  function xS(a, b) {
    a.entries.push(Sh(b));
    return a.entries.length - 1;
  }
  function yS(a, b, c, d, e, f, g, h, k) {
    var l = new sn(),
      m = new Cm();
    c = Ji(m, 1, c);
    d = Ji(c, 2, d);
    b = Ei(d, 3, b);
    l = H(l, 1, b);
    b = new Dm();
    b = Ji(b, 2, a.i);
    e = Ji(b, 3, e);
    e = H(l, 2, e);
    g = P(e, 3, Math.round(g));
    c = F(f, rS, 15);
    e = l = b = d = 0;
    for (var n of c)
      (d += (N(n, 3) ? 1 : 0) + (N(n, 4) ? 1 : 0)),
        (b += (N(n, 3) ? 1 : 0) + (N(n, 4) ? 1 : 0)),
        (l += N(n, 3) ? 1 : 0),
        k && (e += N(n, 4) ? 1 : 0);
    n = new rn();
    n = Fi(n, 1, c.length);
    n = Fi(n, 2, d);
    n = Wh(n, 3, null == b ? b : bh(b));
    n = Wh(n, 4, null == l ? l : bh(l));
    k && Wh(n, 5, null == e ? e : bh(e));
    k = H(g, 6, n);
    h.length
      ? ((a = new Im()), (a = ri(a, 1, h)), qi(k, 5, tn, a))
      : ((h = new qn()),
        (h = ri(h, 2, a.entries)),
        (f = F(f, rS, 15).length),
        (f = P(h, 3, f)),
        (a = H(f, 4, a.g)),
        qi(k, 4, tn, a));
    return k;
  }
  var zS = class {
    constructor() {
      this.entries = [];
      this.g = this.i = null;
    }
  };
  async function AS(a, b) {
    await new Promise((c) => {
      0 < a.j && a.win.requestIdleCallback
        ? a.win.requestIdleCallback(() => void c(), { timeout: a.j })
        : a.win.setTimeout(c, 0);
    });
    a.i = a.g.Ba(b) + a.l;
  }
  var BS = class {
    constructor(a, b) {
      var c = Wb(St),
        d = Wb(cu);
      this.win = a;
      this.g = b;
      this.l = c;
      this.j = d;
      this.i = b.Ba(2) + c;
    }
  };
  var CS = class {
      constructor(a) {
        this.performance = a;
      }
      Ba() {
        return this.performance.now();
      }
    },
    DS = class {
      Ba() {
        return Date.now();
      }
    };
  const ES = [255, 255, 255];
  function FS(a) {
    function b(d) {
      return [
        Number(d[1]),
        Number(d[2]),
        Number(d[3]),
        4 < d.length ? Number(d[4]) : 1,
      ];
    }
    var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
    if (
      c ||
      (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))
    )
      return b(c);
    if ("transparent" === a || "" === a) return [0, 0, 0, 0];
    throw Error(`Invalid color: ${a}`);
  }
  function GS(a) {
    var b = getComputedStyle(a);
    if ("none" !== b.backgroundImage) return null;
    b = FS(b.backgroundColor);
    var c = HS(b);
    if (c) return c;
    a = (a = a.parentElement) ? GS(a) : ES;
    if (!a) return null;
    c = b[3];
    return [
      Math.round(c * b[0] + (1 - c) * a[0]),
      Math.round(c * b[1] + (1 - c) * a[1]),
      Math.round(c * b[2] + (1 - c) * a[2]),
    ];
  }
  function HS(a) {
    return 1 === a[3] ? [a[0], a[1], a[2]] : null;
  }
  var JS = class {
    constructor(a, b, c, d) {
      this.lf = b;
      this.ne = c;
      this.Wb = d;
      this.i = 0;
      this.g = new IS(a);
    }
  };
  function KS(a, b) {
    b -= a.l;
    for (const c of a.g.keys()) {
      const d = a.g.get(c);
      let e = 0;
      for (; e < d.length && d[e] < b; ) e++;
      a.i -= e;
      0 < e && a.g.set(c, d.slice(e));
    }
  }
  class IS {
    constructor(a) {
      this.l = a;
      this.g = new Map();
      this.i = 0;
    }
    get j() {
      return this.i;
    }
  }
  function LS(a) {
    z(a, {
      border: "0",
      "box-shadow": "none",
      display: "inline",
      float: "none",
      margin: "0",
      outline: "0",
      padding: "0",
    });
  }
  function MS(a, b) {
    return NS(
      a,
      "100 -1000 840 840",
      `calc(${b} - 2px)`,
      b,
      "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z"
    );
  }
  function OS(a, b, c) {
    switch (c) {
      case 1:
        b = NS(
          a,
          "0 -960 960 960",
          "20px",
          "20px",
          "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z"
        );
        z(b, { fill: "#FFFFFF" });
        break;
      case 2:
        a = NS(
          a,
          "0 -960 960 960",
          "20px",
          "20px",
          "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
        );
        b && z(a, { fill: b });
        b = a;
        break;
      default:
        (a = NS(
          a,
          "0 -960 960 960",
          "20px",
          "20px",
          "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z"
        )),
          b && z(a, { fill: b }),
          (b = a);
    }
    b.classList.add("google-anno-sa-intent-icon");
    return b;
  }
  function PS(a, b, c, d) {
    a = NS(
      a,
      "0 -960 960 960",
      "20px",
      "20px",
      "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
    );
    z(a, {
      left: "13px",
      right: "",
      "pointer-events": "initial",
      position: "absolute",
      top: b.W ? "11px" : "15px",
      transform: "none",
    });
    d && z(a, { fill: "#1A73E8" });
    a.role = "button";
    a.ariaLabel = c;
    a.tabIndex = 0;
    return a;
  }
  function NS(a, b, c, d, e) {
    const f = a.createElementNS("http://www.w3.org/2000/svg", "path");
    f.setAttribute("d", e);
    a = a.createElementNS("http://www.w3.org/2000/svg", "svg");
    a.setAttribute("viewBox", b);
    a.setAttribute("width", c);
    a.setAttribute("height", d);
    LS(a);
    a.appendChild(f);
    return a;
  }
  const QS = [
    "Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    "Google Sans Text:400,500",
  ];
  function RS(a, b, c, d, e) {
    a = new SS(a, b, c, d, e);
    if (a.l) {
      Pp(a.win, QS);
      var f = a.win;
      b = a.message;
      c = nw(f);
      e = c.shadowRoot;
      d = e.appendChild;
      f = new he(f.document);
      var g = $r(
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>'
      );
      d.call(e, ue(f, Vr(g)));
      d = Ix("ipr-container", e);
      e = Ix("ipr-button", d);
      b.actionButton
        ? (e.appendChild(b.actionButton.buttonText),
          e.addEventListener("click", b.actionButton.onClick))
        : e.classList.add("ipr-display-none");
      d = Ix("ipr-info", d);
      b.informationText
        ? d.appendChild(b.informationText)
        : d.classList.add("ipr-display-none");
      a.g = c.Ta;
      DB(a.l, a.g);
      a.j && a.j(wm(1));
      TS(a);
    } else US(a);
  }
  function TS(a) {
    const b = new Sp(a.win);
    b.K(2e3);
    Ro(a, b);
    Qp(b, () => {
      VS(a);
      US(a);
      b.ka();
    });
  }
  function US(a) {
    Qz(a.win, a.Lb).addRegulatoryMessage({
      messageSpec: { regulatoryMessage: a.message, orderingIndex: 0 },
    });
    a.j && a.j(wm(2));
  }
  function VS(a) {
    a.g && (a.g.parentNode?.removeChild(a.g), (a.g = null));
  }
  var SS = class extends T {
    constructor(a, b, c, d, e) {
      super();
      this.win = a;
      this.l = b;
      this.message = c;
      this.Lb = d;
      this.j = e;
      this.g = null;
    }
    i() {
      VS(this);
      super.i();
    }
  };
  function WS(a, b, c, d, e, f) {
    if (!a.g) {
      var g = b.document.createElement("span");
      g.appendChild(MS(b.document, "12px"));
      g.appendChild(b.document.createTextNode(d));
      RS(
        b,
        c || null,
        { informationText: g },
        e,
        f
          ? (h) => {
              var k = f.handle,
                l = XS(f, 16);
              h = qi(l, 11, En, h);
              k.call(f, h);
            }
          : f
      );
      a.g = !0;
    }
  }
  var YS = class {
    constructor() {
      this.g = !1;
    }
  };
  const ZS = [
    { Wd: "1907259590", Md: 480, Eb: 220 },
    { Wd: "2837189651", Md: 400, Eb: 180 },
    { Wd: "9211025045", Md: 360, Eb: 160 },
    { Wd: "6584860439", Md: -Infinity, Eb: 150 },
  ];
  function $S(a) {
    return ZS.find((b) => b.Md <= a);
  }
  function aT(a, b) {
    return b ? a.replace("ca", "partner") : "pub-adfiliates-query-origin";
  }
  function bT(a) {
    cT.g.push(a);
  }
  const cT = new (class {
    constructor() {
      this.g = [];
    }
  })();
  let dT = !1;
  function eT(a) {
    fT(
      a.config,
      1065,
      a.win,
      () => {
        if (!a.g) {
          var b = new Bn();
          b = P(b, 1, a.i);
          var c = new An();
          b = qi(b, 2, Cn, c);
          gT(a.config.ba, b);
        }
      },
      1e4
    );
  }
  class hT {
    constructor(a, b, c) {
      this.win = a;
      this.config = b;
      this.i = c;
      this.g = !1;
    }
    cancel(a) {
      this.win.clearTimeout(a);
    }
  }
  function iT(a, b, c, d, e, f) {
    const g = $S(a.document.body.clientWidth);
    d = b.qa ? jT(a, b, d, g, e, f) : kT(a, b, d, g, e, f);
    dp(d.isVisible(), !1, () => {
      dT = !1;
      var k = cT;
      for (const l of k.g) l();
      k.g.length = 0;
    });
    d.show({ gg: !0 });
    dT = !0;
    const h = new hT(a, b, c);
    eT(h);
    bT(() => {
      var k = b.ba;
      var l = new Bn();
      l = P(l, 1, c);
      var m = new zn();
      l = qi(l, 3, Cn, m);
      gT(k, l);
      h.g = !0;
    });
  }
  function jT(a, b, c, d, e, f) {
    d = lT(a, b, c, e, f, {
      ye: d,
      Je: a.innerWidth,
      fg: "100%",
      Gg: "15px",
      eg: "13px",
      Hg: "center",
      xf: 0,
    });
    return Ky(a, d, {
      ef: 0.95,
      Me: 0.95,
      zIndex: b.L.md,
      qb: !0,
      De: "adpub-drawer-root",
      Ce: !1,
      Ia: !0,
      Ie: new U(O(b.X, 10).replace("TERM", c)),
    });
  }
  function kT(a, b, c, d, e, f) {
    a: {
      var g = a.document.body.clientWidth;
      var h = 0.9 * g;
      for (g = 768 >= g ? 3 : 4; 1 <= g; g--) {
        const k = d.Eb * g + 42;
        if (k <= h) {
          h = k;
          break a;
        }
      }
    }
    d = lT(a, b, c, e, f, {
      ye: d,
      Je: h,
      fg: "600px",
      Gg: "24px",
      eg: "24px",
      Hg: "start",
      xf: 0,
    });
    return Ux(a, d, {
      Cc: `${h}px`,
      Bc: b.la(),
      sc: O(b.X, 14),
      zIndex: b.L.md,
      qb: !0,
      nd: !0,
      De: "adpub-drawer-root",
      Ce: !1,
      Ia: !0,
      Ie: new U(O(b.X, 10).replace("TERM", c)),
    });
  }
  function lT(a, b, c, d, e, f) {
    if (N(b.X, 23)) {
      e = b.qa ? 0.95 * a.innerHeight - 30 : a.innerHeight;
      var g = b.g;
      d = f.Je;
      var h = e,
        k = !!N(b.X, 13),
        l = $r;
      if (k) var m = "";
      else {
        m =
          "<script data-ad-intent-query=" +
          (Xr(c, Pr)
            ? String(cs(c.Ka())).replace(ts, bs)
            : String(c).replace(ss, bs)) +
          ' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=';
        var n = encodeURIComponent(String(g));
        ls.lastIndex = 0;
        n = ls.test(n) ? n.replace(ls, ms) : n;
        m = m + n + '" crossorigin="anonymous">\x3c/script>';
      }
      c = l(
        m +
          '<ins class="adsbygoogle" style="display:inline-block;width:' +
          V(W(d)) +
          "px;height:" +
          V(W(h)) +
          'px" data-ad-client="' +
          V(g) +
          '"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});\x3c/script>' +
          (k
            ? "<script>const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " +
              String(c).replace(js, ks) +
              ' and " + "property code = ' +
              String(g).replace(js, ks) +
              '";\x3c/script>'
            : "")
      );
      g = b.la() ? "rtl" : "ltr";
      b = nj(
        {
          dir: g,
          lang: O(b.X, 7),
          style: sj`margin:0px;height:100%;padding-top: ${f.xf}px;overflow: hidden;`,
        },
        Vr(c)
      );
      a = a.document.createElement("IFRAME");
      z(a, { border: "0", width: "100%", height: e + "px" });
      a.srcdoc = Fd(b);
    } else if (b.L.zf)
      (f = a.document.createElement("iframe")),
        (g = b.X),
        (g = new Hs(
          f,
          O(g, 16),
          "anno-cse",
          aT(b.g, N(g, 22)),
          "ShoppingVariant",
          a.location,
          O(g, 7),
          O(g, 10).replace("TERM", c),
          b.L.Xb,
          !1,
          !0,
          void 0,
          !0,
          b.g
        )),
        g.K(),
        mT(a, b, f, c, g, e),
        (a = f);
    else {
      g = b.X;
      var p = O(g, 10),
        q = p.indexOf("TERM");
      h = f.Je;
      k = f.ye;
      h = Math.max(Math.floor((h - Math.floor(h / k.Eb) * k.Eb) / 2), 5);
      k = f.fg;
      l = O(g, 3);
      m = f.Gg;
      n = f.eg;
      var v = f.Hg,
        A = O(g, 6),
        B = p.substring(0, q);
      p = p.substring(q + 4);
      q = !!N(g, 13);
      d = $r(
        '<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
          V(W(m)) +
          " " +
          V(W(n)) +
          "; text-align: " +
          V(W(v)) +
          ';">' +
          (d
            ? '<div style="max-width: ' +
              V(W(k)) +
              '">' +
              Zr(l) +
              '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' +
              Zr(A) +
              "</a></div>"
            : "") +
          "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " +
          V(W(m)) +
          "; text-align: " +
          V(W(v)) +
          '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">search</span><span style="color:#80868b"> ' +
          Zr(B) +
          "</span>" +
          Zr(c) +
          '<span style="color:#80868b">' +
          Zr(p) +
          '</span></div></div><div id="anno-csa" style="margin:5px ' +
          V(W(h)) +
          "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');parent.postMessage({query:" +
          hs(is(c)) +
          "},parent.location.origin);\x3c/script>" +
          (q
            ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>"
            : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') +
          "</div>"
      );
      g = {
        dir: b.la() ? "rtl" : "ltr",
        lang: O(g, 7),
        style: sj`margin:0;height:100%;padding-top: ${f.xf}px;overflow: hidden;`,
      };
      d = Vr(d);
      Id("body");
      g = Ld("body", g, d);
      d = a.document.createElement("IFRAME");
      z(d, { border: "0", width: "100%" });
      nT(a, b, d, c, f.ye, e);
      d.srcdoc = Fd(g);
      a = d;
    }
    return a;
  }
  function nT(a, b, c, d, e, f) {
    const g = oT(b, a, function (h) {
      h.data.query === d && pT(a, b, c, d, e, f);
    });
    bT(() => {
      a.removeEventListener("message", g);
    });
  }
  function mT(a, b, c, d, e, f) {
    const g = oT(b, a.top, function (h) {
      "init" === h.data.action &&
        "ShoppingVariant" === h.data.adChannel &&
        qT(a, b, c, e, d, f);
    });
    bT(() => {
      a.top.removeEventListener("message", g);
    });
  }
  function pT(a, b, c, d, e, f) {
    const g = c.contentDocument?.documentElement;
    g &&
      (new ResizeObserver(() => {
        c.height = `${g.offsetHeight}px`;
      }).observe(g),
      rT(b, a, () => {
        const h = g.offsetHeight;
        h && (c.height = `${h}px`);
      }),
      sT(b, c, d, e, f));
  }
  function qT(a, b, c, d, e, f) {
    N(b.X, 13) || Fs(d, e, f);
    const g = c.contentDocument.documentElement,
      h = new ResizeObserver(() => {
        c.height = `${Math.ceil(g.offsetHeight + 22)}px`;
      });
    h.observe(g);
    const k = rT(b, a, () => {
      const l = g.offsetHeight;
      l && (c.height = `${l + 22}px`);
    });
    bT(() => {
      h.disconnect();
      a.clearInterval(k);
    });
  }
  function sT(a, b, c, d, e) {
    const f = a.X,
      g = b.contentWindow;
    b = b?.contentDocument || b.contentWindow?.document;
    if (g) {
      if (void 0 === g._googCsa) throw Error("No _googCsa");
      if (!b) throw Error("No contentDocument");
    } else throw Error("No googCsa window");
    a = {
      pubId: aT(a.g, N(f, 22)),
      styleId: d.Wd,
      disableCarousel: !0,
      query: c,
      hl: O(f, 7),
      personalizedAds: "false",
      fexp: a.L.Xb.join(","),
      adfiliateWp: a.g,
      adtest: a.ge ? "on" : "",
    };
    e && (a.afdToken = e);
    g._googCsa("ads", a, {
      container: "anno-csa",
      linkTarget: "_blank",
      number: 8,
      width: b.body.offsetWidth - 30,
    });
    N(f, 13) &&
      ((e = b.getElementById("anno-csa")),
      (e.dir = "ltr"),
      (e.style.height = "800px"),
      (e.style.width = "75vw"),
      (e.style.overflow = "hidden"),
      (e.style.g = "break-word"),
      (e.textContent = JSON.stringify(g._googCsa.q)));
  }
  function tT(a) {
    a = FS(a);
    var b = new Km();
    b = Gi(b, 1, a[0]);
    b = Gi(b, 2, a[1]);
    b = Gi(b, 3, a[2]);
    return ji(b, 4, Ug(a[3]), 0);
  }
  function uT(a, b, c) {
    return c.Vc ? vT(a, b, c) ?? wT(a, b, c) : wT(a, b, c) ?? vT(a, b, c);
  }
  function wT(a, b, c) {
    const d = c.qa === c.la;
    var e = xT(a, b, c, d);
    if (!e) return null;
    e = e.position.vd();
    const f = b.W ? 7 : 16;
    a = yT(a, b, e, c, function (g) {
      g = g.getBoundingClientRect();
      return d ? c.R - g.right : g.left;
    });
    if (!a || 200 > a - f) return null;
    b = c.R;
    return { ua: d ? b - a : f, Fa: d ? f : b - a, ca: e };
  }
  function zT(a, b, c) {
    const d = qo(a),
      e = S(a);
    return (
      0 <
      fx(
        new hx(a),
        new gk(e - c.ca - (b.W ? 40 : 50), d - c.Fa, e - c.ca, c.ua)
      ).size
    );
  }
  function xT(a, b, c, d) {
    c = Math.floor(c.U * (c.Mc ?? 0.3));
    const e = b.W ? 40 : 66;
    return c < e
      ? null
      : Ry(
          a,
          {
            hc: d
              ? Xy({ ca: b.W ? 0 : 16, Fa: b.W ? 7 : 16 })
              : Vy({ ca: b.W ? 0 : 16, ua: b.W ? 7 : 16 }),
            We: c - e,
            Bb: 50,
            Ye: b.W ? 40 : 50,
            Jd: c,
            mb: b.W ? 7 : 16,
          },
          [a.document.body]
        ).qe;
  }
  function yT(a, b, c, d, e) {
    a = d.qa ? AT(a, b, c, d) : BT(a, b, c, d);
    c = d.R;
    let f = d.qa ? c : 0.35 * c;
    a.forEach((g) => {
      f = Math.min(f, e(g));
    });
    b = b.W ? 7 : 16;
    return f < b ? null : f - b;
  }
  function AT(a, b, c, d) {
    const e = d.U,
      f = b.W ? 7 : 16;
    return fx(
      new hx(a),
      new gk(e - c - (b.W ? 40 : 50), d.R - f, e - c, f),
      b.jc ? 3 : void 0,
      b.jc ? 3 : void 0
    );
  }
  function BT(a, b, c, d) {
    const e = d.U,
      f = d.R;
    d = d.la;
    const g = b.W ? 7 : 16;
    return fx(
      new hx(a),
      new gk(
        e - c - (b.W ? 40 : 50),
        (d ? 0.35 * f : f) - g,
        e - c,
        (d ? g : 0.65 * f) + g
      ),
      b.jc ? 3 : void 0,
      b.jc ? 3 : void 0
    );
  }
  function vT(a, b, c) {
    const d = c.R;
    var e = CT(a, b, c);
    let f = (a = b.W ? 7 : 16);
    for (const g of e) {
      e = g.start;
      const h = g.end;
      if (e > f) {
        if (200 <= e - f - a) return DT(c, b, e, f);
        f = h + a;
      } else h >= f && (f = h + a);
    }
    return 200 <= d - f - a ? DT(c, b, d, f) : null;
  }
  function DT(a, b, c, d) {
    const e = a.la;
    return {
      ua: e ? ET(a, b, c, d) : d,
      Fa: e ? d : ET(a, b, c, d),
      ca: b.W ? 0 : 16,
    };
  }
  function ET(a, b, c, d) {
    const e = a.R;
    b = b.W ? 7 : 16;
    return a.qa ? e - c + b : Math.max(e - d - 0.35 * e, e - c + b);
  }
  function CT(a, b, c) {
    const d = c.la,
      e = c.R;
    a = c.qa ? AT(a, b, b.W ? 0 : 16, c) : BT(a, b, b.W ? 0 : 16, c);
    return Array.from(a)
      .map(
        (f) =>
          new Qy(
            d
              ? e - f.getBoundingClientRect().right
              : f.getBoundingClientRect().left,
            d
              ? e - f.getBoundingClientRect().left
              : f.getBoundingClientRect().right
          )
      )
      .sort((f, g) => f.start - g.start);
  }
  function FT(a, b, c, d, e, f, g, h, k) {
    z(c, {
      width: "50px",
      bottom: g ? g.ca + "px" : "16px",
      left: b.la() === b.qa ? "" : g ? g.ua + "px" : "16px",
      right: b.la() === b.qa ? (g ? g.Fa + "px" : "16px") : "",
    });
    c.role = "button";
    c.ariaLabel = b.Oe();
    z(e, { display: "none" });
    z(d, { display: "none" });
    const l = OS(a.document, b.L.Ua, b.Pb.get(k.ta) || 0);
    a = a.document.createElement("SPAN");
    z(a, {
      display: "inline-block",
      position: "absolute",
      top: b.L.W ? "12px" : "14px",
      left: "15px",
    });
    c.appendChild(a);
    a.appendChild(l);
    GT(b, 1064, c, (m) => {
      h?.();
      l.remove();
      z(c, {
        bottom: g ? g.ca + "px" : "16px",
        left: g ? g.ua + "px" : b.qa ? "16px" : b.la() ? "16px" : "65%",
        right: g ? g.Fa + "px" : HT(b),
        width: "",
      });
      c.role = "";
      c.ariaLabel = "";
      z(e, { display: "" });
      z(d, { display: "flex" });
      f.focus();
      m.preventDefault();
      return !1;
    });
    c.focus();
  }
  function HT(a) {
    return a.la() ? (a.qa ? "16px" : "65%") : "16px";
  }
  function IT(a, b, c, d, e, f, g, h, k) {
    const l = document.createElement("SPAN");
    l.id = "gda";
    l.appendChild(PS(a.document, b.L, b.Ne(), b.L.Ua));
    GT(b, 1064, l, (m) => {
      g?.();
      FT(a, b, c, d, l, e, f, h, k);
      m.preventDefault();
      m.stopImmediatePropagation();
      return !1;
    });
    return l;
  }
  function JT(a, b) {
    new MutationObserver((c) => {
      c.forEach((d) => {
        "attributes" === d.type &&
          "0px" === a.document.body.style.paddingBottom &&
          z(a.document.body, { "padding-bottom": (b.W ? 40 : 66) + "px" });
      });
    }).observe(a.document.body, { attributes: !0 });
  }
  function KT(a, b, c, d, e, f, g) {
    var h = b.L,
      k = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
    z(a.document.body, {
      "padding-bottom":
        (k && k.length ? Number(k[0]) : 0) + (h.W ? 40 : 66) + "px",
    });
    JT(a, b.L);
    h = document.createElement("div");
    h.id = "google-anno-sa";
    h.dir = b.la() ? "rtl" : "ltr";
    h.tabIndex = 0;
    k = {
      background: b.L.ie || "#1A73E8",
      "border-style": "solid",
      bottom: e ? e.ca + "px" : "16px",
      "border-radius": b.L.W ? (e?.ca ? "12px" : "12px 12px 0 0") : "16px",
      height: (b.L.W ? 40 : 50) + "px",
      position: "fixed",
      "text-align": "center",
      border: "0px",
      left: e ? e.ua + "px" : b.qa ? "16px" : b.la() ? "16px" : "65%",
      right: e ? e.Fa + "px" : HT(b),
      "box-shadow":
        "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
      "z-index": "1000",
    };
    z(h, k);
    z(h, { fill: "white" });
    k = document.createElement("SPAN");
    var l = d.ta;
    const m = document.createElement("SPAN");
    LS(m);
    var n = {
      position: "absolute",
      top: "2.5px",
      bottom: "2.5px",
      left: (b.la(), "50px"),
      right: b.la() ? "24px" : "12px",
      display: "flex",
      "flex-direction": "row",
      color: b.L.Ua || "#FFFFFF",
      cursor: "pointer",
      transition: "width 5s",
    };
    z(m, n);
    b.qa || z(m, { "justify-content": "" });
    n = OS(a.document, b.L.Ua, b.Pb.get(l) || 0);
    const p = document.createElement("SPAN");
    z(p, { display: "inline-block" });
    var q = b.L,
      v = b.la();
    z(p, {
      "margin-left": v ? "6px" : "4px",
      "margin-right": v ? "4px" : "6px",
      "margin-top": q.W ? "8px" : "12px",
    });
    m.appendChild(p);
    p.appendChild(n);
    k.classList?.add("google-anno-sa-qtx", "google-anno-skip");
    n = b.xd();
    k.tabIndex = 0;
    k.role = "link";
    k.ariaLive = "polite";
    k.ariaLabel = n.replace("TERM", l);
    z(k, {
      height: b.L.W ? "" : "40px",
      "align-items": "center",
      "line-height": b.L.W ? "35px" : "44px",
      "font-size": "16px",
      "font-weight": "400",
      "font-style": "normal",
      "font-family": "Roboto",
      "text-overflow": "ellipsis",
      "white-space": "nowrap",
      overflow: "hidden",
      "-webkit-tap-highlight-color": "transparent",
      color: b.L.Ua,
    });
    GT(b, 999, m, c);
    m.appendChild(k);
    c = IT(a, b, h, m, k, e, f, g, d);
    b.L.we && !b.la()
      ? (h.appendChild(m), h.appendChild(c), FT(a, b, h, m, c, k, e, g, d))
      : (h.appendChild(m), h.appendChild(c));
    return h;
  }
  function LT(a, b, c, d, e) {
    var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
    f instanceof HTMLElement && (f.innerText = a.ta);
    if ((d.Pb.get(e) || 0) !== (d.Pb.get(a.ta) || 0)) {
      b = OS(b.document, d.L.Ua, d.Pb.get(a.ta) || 0);
      for (const g of c.getElementsByClassName("google-anno-sa-intent-icon"))
        g.replaceWith(b);
    }
    f.ariaLabel = d.X.xd().replace("TERM", a.ta);
    c = d.ba;
    d = new Bm();
    d = Hi(d, 1, a.g);
    d = Ji(d, 4, a.ta);
    a = c.handle;
    f = XS(c, 13);
    d = qi(f, 6, En, d);
    return a.call(c, d);
  }
  function MT(a, b, c, d) {
    if (zT(b, c.L, d)) return null;
    const e = c.Ba(20);
    d = KT(
      b,
      c,
      (g) => {
        if (e + 800 <= c.Ba(21)) {
          var h = c.ba;
          var k = new un();
          k = Ji(k, 4, a.ta);
          k = Hi(k, 1, a.g);
          k = Hi(k, 3, a.i);
          h = NT(h, k);
          iT(b, c, h, a.ta, !1, c.j.get(a.ta) || "");
        }
        g.preventDefault();
        return !1;
      },
      a,
      d,
      () => {
        var g = c.ba;
        var h = new ym();
        h = P(h, 1, a.g);
        var k = Ji(h, 2, a.ta);
        h = g.handle;
        var l = XS(g, 18);
        k = qi(l, 12, En, k);
        return h.call(g, k);
      },
      () => {
        var g = c.ba,
          h = new zm(),
          k = g.handle,
          l = XS(g, 19);
        h = qi(l, 13, En, h);
        return k.call(g, h);
      }
    );
    const f = LT(a, b, d, c, a.ta);
    b.document.body.appendChild(d);
    return f;
  }
  function OT(a, b, c, d, e, f) {
    if (a.ta !== d || null !== a.g || a.j !== e) {
      if (null !== a.i) {
        var g = a.i,
          h = c.ba;
        var k = new Am();
        k = P(k, 1, g);
        g = h.handle;
        var l = XS(h, 14);
        k = qi(l, 7, En, k);
        g.call(h, k);
      }
      h = a.ta;
      a.ta = d;
      a.g = null;
      a.j = e;
      N(c.X, 17) ||
        ((d = b.document.getElementById("google-anno-sa")),
        (a.i = d ? LT(a, b, d, c, h) : MT(a, b, c, f)));
    }
  }
  var PT = class {
    constructor() {
      this.ta = "";
      this.g = null;
      this.j = "";
      this.i = null;
    }
  };
  function QT(a, b) {
    a.g >= a.i.length && (a.g = 0);
    if (dT) bT(() => void QT(a, b));
    else {
      var c = a.i[a.g++];
      a.j = !1;
      OT(a.A, a.win, a.config, c.g, c.i, a.l);
      fT(a.config, 898, a.win, () => void QT(a, b), a.tf);
    }
  }
  var RT = class {
    constructor(a, b, c) {
      var d = new PT();
      this.win = a;
      this.config = b;
      this.A = d;
      this.l = c;
      this.i = [];
      this.j = !0;
      this.g = 0;
      this.tf = b.he.tf;
    }
  };
  class ST {
    constructor(a, b) {
      this.g = a;
      this.i = b;
    }
  }
  function TT(a, b, c, d) {
    b.forEach((e) => {
      var f = Mm(1);
      f = Ji(f, 4, e);
      xS(c, f);
      d.i.push(new ST(e, e));
      d.j && QT(d, a);
    });
  }
  const UT =
    /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;
  function VT(a, b) {
    switch (b) {
      case 1:
        return !0;
      default:
        return "" === a || UT.test(a);
    }
  }
  var WT = class {
    constructor(a) {
      this.g = a;
    }
    isEmpty() {
      return this.g.isEmpty();
    }
    match(a) {
      return this.g.match(a);
    }
  };
  class XT {
    constructor(a) {
      this.B = a;
      this.size = 1;
      this.g = [new YT()];
      this.j = [];
      this.i = new Map();
      this.A = new Map();
      this.l = 0;
    }
    isEmpty() {
      return 0 === this.l;
    }
    match(a) {
      let b = 0;
      const c = [];
      for (let g = 0; g < a.length; g++) {
        for (;;) {
          var d = a.charCodeAt(g),
            e = this.g[b];
          if (e.contains(d)) {
            b = e.j.get(d);
            break;
          }
          if (0 === b) break;
          b = e.g;
        }
        let h = b;
        for (;;) {
          h = this.g[h].i;
          if (0 === h) break;
          const k = g + 1 - this.j[this.g[h].G],
            l = g;
          d = a;
          e = l;
          var f = this.B;
          VT(d.charAt(k - 1), f) &&
            VT(d.charAt(e + 1), f) &&
            c.push(new ZT(k, l, this.A.get(this.g[h].B)));
          h = this.g[h].g;
        }
      }
      return c;
    }
  }
  class YT {
    constructor() {
      this.j = new Map();
      this.I = !1;
      this.ea = this.H = this.F = this.Z = this.M = this.T = -1;
    }
    contains(a) {
      return this.j.has(a);
    }
    set A(a) {
      this.T = a;
    }
    get A() {
      return this.T;
    }
    set C(a) {
      this.M = a;
    }
    get C() {
      return this.M;
    }
    set l(a) {
      this.I = a;
    }
    get l() {
      return this.I;
    }
    set B(a) {
      this.H = a;
    }
    get B() {
      return this.H;
    }
    set g(a) {
      this.Z = a;
    }
    get g() {
      return this.Z;
    }
    set i(a) {
      this.F = a;
    }
    get i() {
      return this.F;
    }
    set G(a) {
      this.ea = a;
    }
    get G() {
      return this.ea;
    }
    get pa() {
      return this.j.values();
    }
  }
  var ZT = class {
    constructor(a, b, c) {
      this.j = a;
      this.i = b;
      this.B = c;
    }
    get l() {
      return this.j;
    }
    get A() {
      return this.i;
    }
    get g() {
      return this.B;
    }
    get length() {
      return this.i - this.j;
    }
  };
  const $T = ["block", "inline", "inline-block", "list-item", "table-cell"];
  async function aU(a, b, c, d, e) {
    d.g.Ba(5) >= d.i && (await AS(d, 6));
    if (!c.L.Fe) {
      const f = F(c.X, rS, 15);
      f.length && bU(a, b, c, e, f);
    }
    c.L.Ge || (await cU(a, c, d, e));
  }
  function bU(a, b, c, d, e) {
    c.L.Ke && !uT(a, c.L, dU(a, c))
      ? fT(
          c,
          898,
          a,
          () => {
            eU(a, b, c, d, e);
          },
          c.L.ke
        )
      : c.L.je
      ? fU(a, b, c, d, e)
      : eU(a, b, c, d, e);
  }
  function gU(a, b, c, d) {
    var e = !0;
    const f = b.wa;
    let g = DD({ J: a, Xe: 3e3, Ze: 400, wa: f, Vh: !1 });
    c || (g |= 16777216);
    if ((c = g)) (e = d.g = d.g ?? new Om()), P(e, 2, c), (e = !1);
    0 !== b.He ||
      0 !== hU(a, 1, f) ||
      (b.qa && 0 === hU(a, 2, f)) ||
      (Ei((d.g = d.g ?? new Om()), 3, !0), (e = !1));
    return e;
  }
  function hU(a, b, c) {
    return DD({ J: a, Xe: 3e3, Ze: a.innerWidth > no ? 650 : 0, wa: c, Vf: b });
  }
  async function cU(a, b, c, d) {
    var e = F(b.X, rS, 15);
    var f = new XT(b.i);
    for (var g of e)
      if (N(g, 3)) {
        e = O(g, 1);
        var h = f.i.has(e) ? f.i.get(e) : f.l++;
        f.i.set(e, h);
        f.A.set(h, e);
        var k = 0;
        for (var l = 0; l < e.length; l++) {
          const m = e.charCodeAt(l);
          f.g[k].contains(m) ||
            (f.g.push(new YT()),
            (f.g[f.size].A = k),
            (f.g[f.size].C = m),
            f.g[k].j.set(m, f.size),
            f.size++);
          k = f.g[k].j.get(m);
        }
        f.g[k].l = !0;
        f.g[k].B = h;
        f.g[k].G = f.j.length;
        f.j.push(e.length);
      }
    g = [];
    for (g.push(0); 0 < g.length; ) {
      h = g.shift();
      e = f;
      k = e.g[h];
      if (0 === h) (k.g = 0), (k.i = 0);
      else if (0 === k.A) (k.g = 0), (k.i = k.l ? h : e.g[e.g[h].g].i);
      else {
        k = e.g[e.g[h].A].g;
        for (l = e.g[h].C; ; ) {
          if (e.g[k].contains(l)) {
            e.g[h].g = e.g[k].j.get(l);
            break;
          }
          if (0 === k) {
            e.g[h].g = 0;
            break;
          }
          k = e.g[k].g;
        }
        e.g[h].i = e.g[h].l ? h : e.g[e.g[h].g].i;
      }
      for (const m of f.g[h].pa) g.push(m);
    }
    f = new WT(f);
    f.isEmpty() ||
      (await b.Da(
        898,
        iU(a, b, c, d, f, new JS(b.Za.Gj, b.Za.lf, b.Za.ne, b.Za.Wb))
      ));
  }
  async function iU(a, b, c, d, e, f) {
    var g = new YS();
    let h = a.document.body;
    if (N(b.X, 17) || D(b.X, ar, 21))
      for (; h; ) {
        c.g.Ba(7) >= c.i && (await AS(c, 8));
        if (
          h.nodeType === Node.TEXT_NODE &&
          "" !== h.textContent &&
          h.parentElement
        ) {
          const Pb = h.parentElement;
          a: {
            var k = a,
              l = b,
              m = Pb,
              n = h.textContent,
              p = d,
              q = e,
              v = f;
            const Ab = [];
            b: {
              var A = n;
              switch (l.i) {
                case 1:
                  var B = A;
                  const qb = Array(B.length);
                  let Ea = 0;
                  for (let Qb = 0; Qb < B.length; Qb++)
                    UT.test(B[Qb]) || Ea++, (qb[Qb] = Ea);
                  var E = qb;
                  break b;
                default:
                  var J = A;
                  const cb = Array(J.length);
                  let rb = 0,
                    Ta = 0;
                  for (; Ta < J.length; ) {
                    for (; /\s/.test(J[Ta]); ) (cb[Ta] = rb), Ta++;
                    let Qb = !1;
                    for (; Ta < J.length && !/\s/.test(J[Ta]); )
                      (Qb = !0), (cb[Ta] = rb), Ta++;
                    Qb && (rb++, (cb[Ta - 1] = rb));
                  }
                  E = cb;
              }
            }
            const pb = E;
            if (n.includes("\u00bb")) var G = [];
            else {
              const qb = q.match(n),
                Ea = new Map();
              for (const cb of qb) {
                const rb = cb.l;
                if (Ea.has(rb)) {
                  const Ta = Ea.get(rb);
                  cb.length > Ta.length && Ea.set(rb, cb);
                } else Ea.set(rb, cb);
              }
              G = Array.from(Ea.values());
            }
            const Si = G;
            let Ie = -1;
            for (const qb of Si) {
              const Ea = qb.l,
                cb = qb.A;
              var K = v,
                M = qb.g;
              KS(K.g, K.i + pb[Ea]);
              var Ba = K,
                Ya = Ba.g,
                Ib = M;
              if (
                !(
                  (Ya.g.has(Ib) ? Ya.g.get(Ib).length : 0) < Ba.lf &&
                  K.g.j < K.ne
                )
              )
                continue;
              const rb = k.getComputedStyle(m),
                Ta = rb.fontSize.match(/\d+/);
              if (
                !(
                  Ta &&
                  12 <= Number(Ta[0]) &&
                  22 >= Number(Ta[0]) &&
                  ab($T, rb.display)
                )
              ) {
                v.i += pb[pb.length - 1];
                var ea = [];
                break a;
              }
              const Qb = Ie + 1;
              Qb < Ea &&
                Ab.push(k.document.createTextNode(n.substring(Qb, Ea)));
              const Ui = n.substring(Ea, cb + 1);
              var lb = n,
                Kc = Ea,
                sc = cb + 1,
                Fe = k,
                Z = m,
                md = Ui,
                Rm =
                  lb.substring(Math.max(Kc - 30, 0), Kc) +
                  "~~" +
                  lb.substring(sc, Math.min(sc + 30, lb.length)),
                Sm = qb.g,
                Tm = pb[Ea];
              const Vi = Z.getBoundingClientRect();
              var Um = Mm(2);
              var Vm = Ji(Um, 2, md);
              var Wm = Ji(Vm, 3, Rm);
              var Xm = Ji(Wm, 4, Sm);
              var Ym = Gi(Xm, 5, Tm);
              var Zm = Gi(Ym, 6, Math.round(Vi.x));
              var $m = Gi(Zm, 7, Math.round(Vi.y));
              const Lc = Fe.getComputedStyle(Z);
              var an = new Lm();
              var bn = Ji(an, 1, Lc.fontFamily);
              var cn = tT(Lc.color);
              var dn = H(bn, 7, cn);
              var en = tT(Lc.backgroundColor);
              var fn = H(dn, 8, en);
              const Wi = Lc.fontSize.match(/^(\d+(\.\d+)?)px$/);
              var fg = Gi(fn, 4, Wi ? Math.round(Number(Wi[1])) : 0);
              const pg = Math.round(Number(Lc.fontWeight));
              isNaN(pg) || 400 === pg || Gi(fg, 5, pg);
              "none" !== Lc.textDecorationLine &&
                Ji(fg, 6, Lc.textDecorationLine);
              var gn = H($m, 8, fg);
              const qg = [];
              let Td = Z;
              for (; Td && 20 > qg.length; ) {
                var gg = qg,
                  hn = gg.push,
                  Ge = Td,
                  Mi = new Jm();
                const Xi = Ji(Mi, 1, Ge.tagName);
                "" !== Ge.className && ii(Xi, 2, Ge.className.split(" "), mh);
                hn.call(gg, Xi);
                if ("BODY" === Td.tagName) break;
                Td = Td.parentElement;
              }
              var Ni = qg.reverse();
              var Oi = ri(gn, 9, Ni);
              const ln = xS(p, Oi);
              Ab.push(jU(k, l, ln, qb.g, Ui, m));
              var He = v.g,
                jg = qb.g,
                Pi = v.i + pb[Ea];
              let rg = [];
              He.g.has(jg) && (rg = He.g.get(jg));
              rg.push(Pi);
              He.i++;
              He.g.set(jg, rg);
              Ie = cb;
              if (0 < v.Wb && v.g.j >= v.Wb) break;
            }
            const Je = Ie + 1;
            0 !== Je &&
              Je < n.length &&
              Ab.push(k.document.createTextNode(n.substring(Je)));
            v.i += pb[pb.length - 1];
            ea = Ab;
          }
          const tc = ea;
          if (0 < tc.length && !N(b.X, 17)) {
            WS(
              g,
              a,
              b.Za.dg ? wS(a, b.Za.dg) : void 0,
              O(b.X, 3),
              D(b.X, ar, 21).i(),
              b.ba
            );
            for (const Ab of tc) Pb.insertBefore(Ab, h), kU(Ab);
            Pb.removeChild(h);
            for (h = tc[tc.length - 1]; h.lastChild; ) h = h.lastChild;
            if (0 < f.Wb && f.g.j >= f.Wb) break;
          }
        }
        a: {
          var ob = h,
            Qi = f,
            Ri = b.i;
          if (
            ob.firstChild &&
            (ob.nodeType !== Node.ELEMENT_NODE
              ? 0
              : !ob.classList?.contains("google-anno-skip") && ob.offsetHeight)
          ) {
            b: {
              switch (ob.tagName?.toUpperCase?.()) {
                case "IFRAME":
                case "A":
                case "AUDIO":
                case "BUTTON":
                case "CANVAS":
                case "CITE":
                case "CODE":
                case "EMBED":
                case "FOOTER":
                case "FORM":
                case "KBD":
                case "LABEL":
                case "OBJECT":
                case "PRE":
                case "SAMP":
                case "SCRIPT":
                case "SELECT":
                case "STYLE":
                case "SUB":
                case "SUPER":
                case "SVG":
                case "TEXTAREA":
                case "TIME":
                case "VAR":
                case "VIDEO":
                case null:
                  var kg = !1;
                  break b;
              }
              kg = !(
                ob.className.toUpperCase?.()?.includes("CRUMB") ||
                ob.id.toUpperCase?.()?.includes("CRUMB")
              );
            }
            if (kg) {
              h = ob.firstChild;
              break a;
            }
            if (ob.textContent?.length) {
              var lg = Qi;
              b: {
                var mg = ob.textContent;
                switch (Ri) {
                  case 1:
                    var ng = mg;
                    let tc = 0;
                    for (let pb = ng.length - 1; 0 <= pb; pb--)
                      UT.test(ng[pb]) || tc++;
                    var og = tc;
                    break b;
                  default:
                    const Ab = mg.trim();
                    og = "" === Ab ? 0 : Ab.split(/\s+/).length;
                }
              }
              KS(lg.g, lg.i + og);
            }
          }
          let Pb = ob;
          for (;;) {
            if (Pb.nextSibling) {
              h = Pb.nextSibling;
              break a;
            }
            if (!Pb.parentNode) {
              h = null;
              break a;
            }
            Pb = Pb.parentNode;
          }
        }
      }
  }
  function dU(a, b) {
    return { la: b.la(), qa: b.qa, R: qo(a), U: S(a), Vc: b.L.Vc, Mc: b.L.Mc };
  }
  function fU(a, b, c, d, e) {
    let f = !1;
    const g = lU(c, a, () => {
      window.scrollY &&
        !f &&
        ((f = !0), a.removeEventListener("scroll", g), eU(a, b, c, d, e));
    });
  }
  function eU(a, b, c, d, e) {
    e = e.filter((g) => N(g, 4)).map((g) => O(g, 1));
    if (0 !== e.length) {
      var f = uT(a, c.L, dU(a, c));
      gU(a, c, f, d) && (c.L.gf && sb(e), TT(b, e, d, new RT(a, c, f)));
    }
  }
  function kU(a) {
    if (a.nodeType === Node.ELEMENT_NODE) {
      if ("A" === a.tagName) {
        var b = HS(FS(getComputedStyle(a.parentElement).color)),
          c = HS(FS(getComputedStyle(a).color));
        var d = GS(a);
        if (
          (d =
            b && c && d ? (rM(c, d) < Math.min(rM(b, d), 2.5) ? b : null) : b)
        ) {
          b = d[0];
          c = d[1];
          d = d[2];
          b = Number(b);
          c = Number(c);
          d = Number(d);
          if (b != (b & 255) || c != (c & 255) || d != (d & 255))
            throw Error(
              '"(' + b + "," + c + "," + d + '") is not a valid RGB color'
            );
          c = (b << 16) | (c << 8) | d;
          b =
            16 > b
              ? "#" + (16777216 | c).toString(16).slice(1)
              : "#" + c.toString(16);
          z(a, { color: b });
        }
      }
      for (b = 0; b < a.childElementCount; b++) kU(a.children[b]);
    }
  }
  class mU {
    constructor() {
      this.g = null;
    }
    get i() {
      return this.g;
    }
  }
  function jU(a, b, c, d, e, f) {
    const g = a.document.createElement("SPAN");
    nU(g, b);
    g.appendChild(a.document.createTextNode(e));
    e = a.document.createElement("A");
    LS(e);
    z(e, { "text-decoration": "none", fill: "currentColor" });
    Le(e);
    e.className = "google-anno";
    e.appendChild(oU(a, b, f));
    e.appendChild(a.document.createTextNode("\u00a0"));
    e.appendChild(g);
    b.L.Hc &&
      z(e, {
        background: "#D3E3FD",
        "padding-left": "3px",
        "padding-right": "3px",
        "border-bottom": "1.6px",
        "border-bottom-style": "dotted",
        "border-bottom-color": "rgba(4, 12, 40, 2)",
        "border-bottom-left-radius": "1px",
        "border-bottom-right-radius": "1px",
      });
    const h = pU(b, c, e);
    GT(b, 999, e, (k) => {
      try {
        var l = b.ba,
          m = new un();
        var n = Ji(m, 4, d);
        var p = Hi(n, 1, c);
        var q = Hi(p, 2, h.i);
        const v = NT(l, q);
        iT(a, b, v, d, !0, b.l.get(d) || "");
        return !1;
      } finally {
        k.preventDefault(), k.stopImmediatePropagation();
      }
    });
    return e;
  }
  function oU(a, b, c) {
    a = MS(a.document, a.getComputedStyle(c).fontSize);
    b.L.Hc &&
      z(a, { fill: "#041E49", "stroke-width": "50px", stroke: "#041E49" });
    return a;
  }
  function pU(a, b, c) {
    const d = new mU();
    qU(a, (e) => {
      for (const k of e)
        if (k.isIntersecting) {
          var f = b;
          e = a.ba;
          var g = new yn();
          g = f = P(g, 1, f);
          f = e.handle;
          var h = XS(e, 11);
          g = qi(h, 4, En, g);
          e = f.call(e, g);
          d.g = e;
        } else
          d.g &&
            ((e = a.ba),
            (f = new xn()),
            (g = f = P(f, 1, d.g)),
            (f = e.handle),
            (h = XS(e, 12)),
            (g = qi(h, 5, En, g)),
            f.call(e, g),
            (d.g = null));
    }).observe(c);
    return d;
  }
  function nU(a, b) {
    LS(a);
    b.L.Hc
      ? z(a, { border: "", color: "#041E49", "font-weight": "bolder" })
      : (z(a, { "text-decoration": "underline" }),
        z(a, { "text-decoration-style": "dotted" }),
        z(a, {
          "-webkit-text-decoration-line": "underline",
          "-webkit-text-decoration-style": "dotted",
        }));
  }
  function gT(a, b) {
    var c = a.handle,
      d = XS(a, 15);
    b = qi(d, 9, En, b);
    c.call(a, b);
  }
  function NT(a, b) {
    var c = a.handle,
      d = XS(a, 10);
    b = qi(d, 8, En, b);
    return c.call(a, b);
  }
  function XS(a, b) {
    var c = new Dn();
    var d = a.A++;
    c = P(c, 1, d);
    b = P(c, 2, Math.round(a.g.Ba(b) - a.i));
    return H(b, 10, a.j);
  }
  var rU = class {
    constructor(a, b, c, d) {
      this.g = a;
      this.i = b;
      this.j = c;
      this.A = 1;
      this.l = [...d];
    }
    handle(a) {
      for (const b of this.l) b(a);
      return xi(a, 1);
    }
  };
  function fT(a, b, c, d, e) {
    c.setTimeout(sU(a, b, d), e);
  }
  function oT(a, b, c) {
    a = sU(a, 999, c);
    b.addEventListener("message", a);
    return a;
  }
  function rT(a, b, c) {
    return b.setInterval(sU(a, 1066, c), 1e3);
  }
  function GT(a, b, c, d) {
    c.addEventListener("click", sU(a, b, d));
  }
  function lU(a, b, c) {
    a = sU(a, 898, c);
    b.addEventListener("scroll", a, { passive: !0 });
    return a;
  }
  function qU(a, b) {
    return new IntersectionObserver(sU(a, 1065, b), { threshold: 0.98 });
  }
  function sU(a, b, c) {
    return a.Va.Ma(b, c, void 0, (d) => void tU(a, d));
  }
  function tU(a, b) {
    b.es = a.L.Xb.join(",");
    b.c = `${a.B}`;
  }
  var vU = class {
    constructor(a, b, c, d, e, f, g, h, k, l, m, n, p = !1) {
      this.g = a;
      this.qa = b;
      this.He = c;
      this.X = d;
      this.B = e;
      this.Va = f;
      this.ba = g;
      this.wa = h;
      this.A = k;
      this.Za = l;
      this.he = m;
      this.ge = p;
      this.L = new vS(n);
      this.i = ab(uU, O(d, 7)) ? 1 : 0;
      this.l = new Map();
      this.j = new Map();
      this.Pb = new Map();
      for (const q of F(this.X, rS, 15))
        null != I(q, 6) && this.l.set(O(q, 1), O(q, 6)),
          null != I(q, 7) && this.j.set(O(q, 1), O(q, 7)),
          null != L(q, 10) && this.Pb.set(O(q, 1), zi(q, 10));
    }
    Da(a, b) {
      this.Va.Da(a, b, (c) => void tU(this, c));
      return b;
    }
    Ba(a) {
      return this.A.Ba(a);
    }
    la() {
      return 2 === zi(this.X, 12);
    }
    Ne() {
      return this.X.Ne();
    }
    Oe() {
      return this.X.Oe();
    }
    xd() {
      return this.X.xd();
    }
  };
  const uU = ["ja", "zh_CN", "zh_TW"];
  function wU(a, b) {
    return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`;
  }
  function xU(a, b) {
    return `&${a}=${b.toFixed(3)}`;
  }
  function yU() {
    const a = new Set(),
      b = cC();
    try {
      if (!b) return a;
      const c = b.pubads();
      for (const d of c.getSlots()) a.add(d.getSlotId().getDomId());
    } catch {}
    return a;
  }
  function zU(a) {
    a = a.id;
    return (
      null != a &&
      (yU().has(a) ||
        a.startsWith("google_ads_iframe_") ||
        a.startsWith("aswift"))
    );
  }
  function AU(a, b, c) {
    if (!a.sources) return !1;
    switch (BU(a)) {
      case 2:
        const d = CU(a);
        if (d) return c.some((f) => DU(d, f));
        break;
      case 1:
        const e = EU(a);
        if (e) return b.some((f) => DU(e, f));
    }
    return !1;
  }
  function BU(a) {
    if (!a.sources) return 0;
    a = a.sources.filter((b) => b.previousRect && b.currentRect);
    if (1 <= a.length) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function EU(a) {
    return FU(a, (b) => b.currentRect);
  }
  function CU(a) {
    return FU(a, (b) => b.previousRect);
  }
  function FU(a, b) {
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
  function DU(a, b) {
    const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return 0 >= c || 0 >= a
      ? !1
      : 50 <= (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top));
  }
  function GU() {
    const a = Array.from(document.getElementsByTagName("iframe")).filter(zU),
      b = [...yU()]
        .map((c) => document.getElementById(c))
        .filter((c) => null !== c);
    HU = window.scrollX;
    IU = window.scrollY;
    return (JU = [...a, ...b].map((c) => c.getBoundingClientRect()));
  }
  function KU(a, b) {
    const c = HU !== window.scrollX || IU !== window.scrollY ? [] : JU,
      d = GU();
    for (const e of b.getEntries())
      switch (((b = e.entryType), b)) {
        case "layout-shift":
          LU(a, e, c, d);
          break;
        case "largest-contentful-paint":
          b = e;
          a.Cb = Math.floor(b.renderTime || b.loadTime);
          a.Qa = b.size;
          break;
        case "first-input":
          b = e;
          a.xa = Number((b.processingStart - b.startTime).toFixed(3));
          a.Ga = !0;
          a.g.some((f) =>
            f.entries.some(
              (g) => e.duration === g.duration && e.startTime === g.startTime
            )
          ) || MU(a, e);
          break;
        case "longtask":
          b = Math.max(0, e.duration - 50);
          a.C += b;
          a.H = Math.max(a.H, b);
          a.Z += 1;
          break;
        case "event":
          MU(a, e);
          break;
        default:
          Qe(b, void 0);
      }
  }
  function NU(a) {
    a.A ||
      (a.A = new PerformanceObserver(
        $v(640, (b) => {
          KU(a, b);
        })
      ));
    return a.A;
  }
  function OU(a) {
    const b = $v(641, () => {
        2 === kN(document) && PU(a);
      }),
      c = $v(641, () => void PU(a));
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.pa = () => {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      NU(a).disconnect();
    };
  }
  function PU(a) {
    if (!a.Df) {
      a.Df = !0;
      NU(a).takeRecords();
      var b =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
      window.LayoutShift &&
        ((b += xU("cls", a.G)),
        (b += xU("mls", a.I)),
        (b += wU("nls", a.T)),
        window.LayoutShiftAttribution &&
          ((b += xU("cas", a.B)),
          (b += wU("nas", a.Cf)),
          (b += xU("was", a.Tf))),
        (b += xU("wls", a.ea)),
        (b += xU("tls", a.Rf)));
      window.LargestContentfulPaint &&
        ((b += wU("lcp", a.Cb)), (b += wU("lcps", a.Qa)));
      window.PerformanceEventTiming && a.Ga && (b += wU("fid", a.xa));
      window.PerformanceLongTaskTiming &&
        ((b += wU("cbt", a.C)), (b += wU("mbt", a.H)), (b += wU("nlt", a.Z)));
      let d = 0;
      for (var c of document.getElementsByTagName("iframe")) zU(c) && d++;
      b += wU("nif", d);
      b += wU("ifi", Ok(window));
      c = w(Yn).g();
      b += `&${"eid"}=${encodeURIComponent(c.join())}`;
      b += `&${"top"}=${r === r.top ? 1 : 0}`;
      b += a.Ff ? `&${"qqid"}=${encodeURIComponent(a.Ff)}` : wU("pvsid", zf(r));
      window.googletag && (b += "&gpt=1");
      c = Math.min(
        a.g.length - 1,
        Math.floor((a.A ? a.Pa : performance.interactionCount || 0) / 50)
      );
      0 <= c && ((c = a.g[c].latency), 0 <= c && (b += wU("inp", c)));
      window.fetch(b, {
        keepalive: !0,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors",
      });
      a.pa();
    }
  }
  function LU(a, b, c, d) {
    if (!b.hadRecentInput) {
      a.G += Number(b.value);
      Number(b.value) > a.I && (a.I = Number(b.value));
      a.T += 1;
      if ((c = AU(b, c, d))) (a.B += b.value), a.Cf++;
      if (5e3 < b.startTime - a.Wc || 1e3 < b.startTime - a.Ef)
        (a.Wc = b.startTime), (a.i = 0), (a.j = 0);
      a.Ef = b.startTime;
      a.i += b.value;
      c && (a.j += b.value);
      a.i > a.ea &&
        ((a.ea = a.i), (a.Tf = a.j), (a.Rf = b.startTime + b.duration));
    }
  }
  function MU(a, b) {
    QU(a, b);
    const c = a.g[a.g.length - 1],
      d = a.F[b.interactionId];
    if (d || 10 > a.g.length || b.duration > c.latency)
      d
        ? (d.entries.push(b), (d.latency = Math.max(d.latency, b.duration)))
        : ((b = { id: b.interactionId, latency: b.duration, entries: [b] }),
          (a.F[b.id] = b),
          a.g.push(b)),
        a.g.sort((e, f) => f.latency - e.latency),
        a.g.splice(10).forEach((e) => {
          delete a.F[e.id];
        });
  }
  function QU(a, b) {
    b.interactionId &&
      ((a.M = Math.min(a.M, b.interactionId)),
      (a.l = Math.max(a.l, b.interactionId)),
      (a.Pa = a.l ? (a.l - a.M) / 7 + 1 : 0));
  }
  var RU = class {
      constructor() {
        this.j = this.i = this.T = this.I = this.G = 0;
        this.Ef = this.Wc = Number.NEGATIVE_INFINITY;
        this.g = [];
        this.F = {};
        this.Pa = 0;
        this.M = Infinity;
        this.xa =
          this.Qa =
          this.Cb =
          this.Cf =
          this.Tf =
          this.B =
          this.Rf =
          this.ea =
          this.l =
            0;
        this.Ga = !1;
        this.Z = this.H = this.C = 0;
        this.A = null;
        this.Df = !1;
        this.pa = () => {};
        const a = document.querySelector("[data-google-query-id]");
        this.Ff = a ? a.getAttribute("data-google-query-id") : null;
        this.ei = { ai: !1 };
      }
      observe() {
        var a = window;
        if (!a.google_plmetrics && window.PerformanceObserver) {
          a.google_plmetrics = !0;
          a = [
            "layout-shift",
            "largest-contentful-paint",
            "first-input",
            "longtask",
          ];
          this.ei.ai && a.push("event");
          for (const b of a)
            (a = { type: b, buffered: !0 }),
              "event" === b && (a.durationThreshold = 40),
              NU(this).observe(a);
          OU(this);
        }
      }
    },
    HU,
    IU,
    JU = [];
  async function SU(a, b, c, d, e, f, g, h) {
    var k = tA,
      l = sA;
    const m =
      ((h = JM(new NM(a), "__gads", h)) ? cf(h + "t2Z7mVic") % 20 : null) ??
      Math.floor(20 * $e());
    h = f.Ba(0);
    const n = 488 > qo(a),
      p = c.X;
    var q = c.L,
      v = vn(m);
    q = ii(v, 3, q.Xb, dh);
    e = new rU(f, h, q, e);
    k = new vU(d, n, c.He, p, m, k, e, l, f, c.Za, c.he, c.L, c.ge);
    d = new zS();
    b = await TU(a, a.document, b, k, g, d);
    c = yS(d, n, c.kd, a.location.hostname, c.Di, p, f.Ba(9) - h, b, c.L.hf);
    a = e.handle;
    f = XS(e, 9);
    c = qi(f, 3, En, c);
    a.call(e, c);
  }
  async function TU(a, b, c, d, e, f) {
    b = b.body;
    if (!b || !UU(b)) return [Fm()];
    e.g.Ba(3) >= e.i && (await AS(e, 4));
    b = (b = O(d.X, 7))
      ? (b = b.match(/^[a-z]{2,3}/i))
        ? b[0].toLowerCase()
        : ""
      : "";
    f.i = b;
    b = [];
    if (
      a.document.querySelector(
        'script[src*="www.google.com/adsense/search/ads.js"]'
      )
    ) {
      var g = b.push;
      var h = new Gm();
      var k = new Em();
      h = qi(h, 3, Hm, k);
      g.call(b, h);
    }
    b.length || (await aU(a, c, d, e, f));
    return b;
  }
  function UU(a) {
    try {
      Tb(new ResizeObserver(() => {})), Tb(new MutationObserver(() => {}));
    } catch {
      return !1;
    }
    return (
      a.classList &&
      void 0 !== a.classList.contains &&
      void 0 !== a.attachShadow
    );
  }
  function VU() {
    var a = Wb(gu),
      b = tA;
    if (Math.random() < a)
      try {
        new RU().observe();
      } catch (c) {
        b.va(1161, c instanceof Error ? c : Error("Unknown error."));
      }
  }
  const WU = [
    ru,
    su,
    tu,
    uu,
    vu,
    wu,
    xu,
    yu,
    zu,
    Au,
    Bu,
    Cu,
    Du,
    Eu,
    Fu,
    Gu,
    Hu,
    Iu,
    Ju,
    Ku,
    Lu,
    Mu,
    Nu,
    Ou,
    Pu,
    Qu,
    Ru,
    Su,
    Tu,
    Uu,
  ];
  async function XU(a, b, c, d, e, f, g) {
    uc() ||
      (VU(),
      d.push(async () => {
        delete window.google_plmetrics;
      }));
    x(lu) ||
      ((a = await YU(a, b, c, d, e, f, g)), a.sb.length && ZU(b, c, g, a));
  }
  async function YU(a, b, c, d, e, f, g) {
    const h = a.performance?.now ? new CS(a.performance) : new DS();
    a = new BS(a, h);
    if ("string" !== typeof e)
      return (
        (e = new Gm()), (b = new Em()), { Ib: null, sb: [qi(e, 12, Hm, b)] }
      );
    var k = uS(e);
    e = ni(k);
    if (!b)
      return (
        (b = new Gm()),
        (d = new Em()),
        (b = qi(b, 9, Hm, d)),
        { Ib: e, sb: [b] }
      );
    const l = c.google_ad_client;
    if ("string" !== typeof l)
      return (
        (b = new Gm()),
        (d = new Em()),
        (b = qi(b, 11, Hm, d)),
        { Ib: e, sb: [b] }
      );
    if (rc()) return { Ib: e, sb: [Fm()] };
    if (ef())
      return (
        (b = new Gm()),
        (d = new Em()),
        (b = qi(b, 13, Hm, d)),
        { Ib: e, sb: [b] }
      );
    var m = w(WJ),
      n = $U(c),
      p = aV();
    c = "on" === c.google_adtest;
    const q = D(k, yO, 2);
    try {
      const B = b?.location?.hash?.match(/\bgoog_cpmi=([^&]*)/);
      if (B) {
        var v = decodeURIComponent(B[1]);
        var A = sS(v);
      } else A = null;
    } catch (B) {
      A = null;
    }
    A = A || ni(k);
    v = q?.g() && (488 > qo(b) || !q?.j()) ? 0 : 1;
    k = F(k, ir, 3);
    k = { Gj: Wb(Rt), lf: 2, ne: 5, Wb: 300, dg: k };
    g = {
      X: A,
      kd: n,
      He: v,
      Di: g,
      Za: k,
      he: { tf: Wb(nu) },
      L: new vS({
        Xb: p,
        Sg: Wb(gu),
        zf: x(ou),
        gf: x(hu),
        Fe: x(Ut),
        Ge: x(Vt),
        Ke: x(Yt),
        ke: Wb(Qt),
        ie: Xb(Zt),
        Ua: Xb($t),
        Vc: x(Wt),
        we: x(Tt),
        W: x(mu),
        je: x(Pt),
        Mc: Wb(fu),
        Hc: x(au),
        jc: x(iu),
        hf: x(ku),
        md: Wb(Nt),
      }),
      ge: c,
    };
    await bV(b, d, m, g, l, h, a, f);
    return { Ib: e, sb: [] };
  }
  function aV() {
    const a = w(Yn).g();
    for (const b of WU) a.push(...Yb(b).map(Number));
    a.sort((b, c) => b - c);
    return a;
  }
  function ZU(a, b, c, d) {
    a = yS(
      new zS(),
      !!a && 488 > qo(a),
      $U(b),
      a?.location?.hostname ?? "",
      c,
      d.Ib ?? new oi(),
      0,
      d.sb,
      x(ku)
    );
    c = Math.floor(20 * $e());
    b = new Dn();
    b = P(b, 1, 1);
    b = P(b, 2, 0);
    c = vn(c);
    d = aV();
    c = ii(c, 3, d, dh);
    b = H(b, 10, c);
    a = qi(b, 3, En, a);
    b = w(WJ);
    tA.Da(1214, $J(b, a, Date.now()), cV);
  }
  async function bV(a, b, c, d, e, f, g, h) {
    const k = ix(a);
    k.wasReactiveAdConfigReceived[42] ||
      ((k.wasReactiveAdConfigReceived[42] = !0),
      await SU(
        a,
        b,
        d,
        e,
        [
          (l) => {
            tA.Da(1214, $J(c, l, f.Ba(17)), cV);
          },
        ],
        f,
        g,
        h
      ));
  }
  function cV(a) {
    a.es = aV().join(",");
  }
  function $U(a) {
    a = a.google_page_url;
    return "string" === typeof a ? a : "";
  }
  function dV({ Xf: a, hh: b }) {
    return a || ("dev" === b ? "dev" : "");
  }
  function eV(a) {
    tA.nf((b) => {
      b.shv = String(a);
      b.mjsv = dV({ Xf: "m202402270101", hh: a });
      b.eid = mQ(r);
    });
  }
  var fV = "undefined" === typeof sttc ? void 0 : sttc;
  function gV(a) {
    var b = tA;
    try {
      return bj(a, sl), new AO(JSON.parse(a));
    } catch (c) {
      b.va(838, c instanceof Error ? c : Error(String(c)), void 0, (d) => {
        d.jspb = String(a);
      });
    }
    return new AO();
  }
  const hV = (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.callback({ nb: c ?? void 0, od: d ? void 0 : 2 });
      });
    },
    iV = {
      Lc: (a) => a.callback,
      Tb: (a, b) => ({
        __uspapiCall: { callId: b, command: "getUSPData", version: 1 },
      }),
      wb: (a, b) => {
        b = b.__uspapiReturn;
        a({ nb: b.returnValue ?? void 0, od: b.success ? void 0 : 2 });
      },
    };
  function jV(a) {
    let b = {};
    "string" === typeof a.data ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, ff: b.__uspapiReturn.callId };
  }
  function kV(a, b) {
    let c = {};
    if (CE(a.caller)) {
      var d = Jb(() => {
        b(c);
      });
      EE(a.caller, "getDataWithCallback", {
        callback: (e) => {
          e.od || (c = e.nb);
          d();
        },
      });
      setTimeout(d, a.timeoutMs);
    } else b(c);
  }
  var lV = class extends T {
    constructor(a) {
      super();
      this.timeoutMs = {}.timeoutMs ?? 500;
      this.caller = new FE(
        a,
        "__uspapiLocator",
        (b) => "function" === typeof b.__uspapi,
        jV
      );
      this.caller.A.set("getDataWithCallback", hV);
      this.caller.j.set("getDataWithCallback", iV);
    }
    i() {
      this.caller.ka();
      super.i();
    }
  };
  function mV(a, b) {
    b = b && b[0];
    if (!b) return null;
    b = b.target;
    const c = b.getBoundingClientRect(),
      d = je(a.g.da() || window);
    if (
      0 >= c.bottom ||
      c.bottom > d.height ||
      0 >= c.right ||
      c.left >= d.width
    )
      return null;
    var e = nV(
        a,
        b,
        c,
        a.g.g.elementsFromPoint(
          Wd(c.left + c.width / 2, c.left, c.right - 1),
          Wd(c.bottom - 1 - 2, c.top, c.bottom - 1)
        ),
        1,
        []
      ),
      f = nV(
        a,
        b,
        c,
        a.g.g.elementsFromPoint(
          Wd(c.left + c.width / 2, c.left, c.right - 1),
          Wd(c.top + 2, c.top, c.bottom - 1)
        ),
        2,
        e.pb
      ),
      g = nV(
        a,
        b,
        c,
        a.g.g.elementsFromPoint(
          Wd(c.left + 2, c.left, c.right - 1),
          Wd(c.top + c.height / 2, c.top, c.bottom - 1)
        ),
        3,
        [...e.pb, ...f.pb]
      );
    const h = nV(
      a,
      b,
      c,
      a.g.g.elementsFromPoint(
        Wd(c.right - 1 - 2, c.left, c.right - 1),
        Wd(c.top + c.height / 2, c.top, c.bottom - 1)
      ),
      4,
      [...e.pb, ...f.pb, ...g.pb]
    );
    var k = oV(a, b, c),
      l = (n) =>
        ab(a.j, n.overlapType) &&
        ab(a.l, n.overlapDepth) &&
        ab(a.i, n.overlapDetectionPoint);
    e = Wa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
    l = Wa(k, l);
    k = [...e, ...l];
    f = -2 > c.left || c.right > d.width + 2;
    f = 0 < k.length || f;
    g = ke(a.g.g);
    const m = new jk(c.left, c.top, c.width, c.height);
    e = [
      ...Xa(
        e,
        (n) =>
          new jk(
            n.elementRect.left,
            n.elementRect.top,
            n.elementRect.width,
            n.elementRect.height
          )
      ),
      ...nb(Xa(l, (n) => lk(m, n.elementRect))),
      ...Wa(
        lk(m, new jk(0, 0, d.width, d.height)),
        (n) => 0 <= n.top && n.top + n.height <= d.height
      ),
    ];
    return {
      entries: k,
      isOverlappingOrOutsideViewport: f,
      scrollPosition: { scrollX: g.x, scrollY: g.y },
      target: b,
      targetRect: c,
      viewportSize: { width: d.width, height: d.height },
      overlappedArea: 20 > e.length ? pV(m, e) : qV(c, e),
    };
  }
  function rV(a, b) {
    const c = a.g.da(),
      d = a.g.g;
    return new Promise((e, f) => {
      const g = c.IntersectionObserver;
      if (g)
        if (d.elementsFromPoint)
          if (d.createNodeIterator)
            if (d.createRange)
              if (c.Range.prototype.getBoundingClientRect) {
                var h = new g((k) => {
                  const l = new hl(),
                    m = gl(l, () => mV(a, k));
                  m &&
                    (l.i.length &&
                      (m.executionTime = Math.round(Number(l.i[0].duration))),
                    h.disconnect(),
                    e(m));
                }, sV);
                h.observe(b);
              } else f(Error("5"));
            else f(Error("4"));
          else f(Error("3"));
        else f(Error("2"));
      else f(Error("1"));
    });
  }
  function nV(a, b, c, d, e, f) {
    if (0 === c.width || 0 === c.height) return { entries: [], pb: [] };
    const g = [],
      h = [];
    for (let m = 0; m < d.length; m++) {
      const n = d[m];
      if (n === b) continue;
      if (ab(f, n)) continue;
      h.push(n);
      const p = n.getBoundingClientRect();
      if (a.g.contains(n, b)) {
        g.push(tV(a, c, n, p, 1, e));
        continue;
      }
      if (a.g.contains(b, n)) {
        g.push(tV(a, c, n, p, 2, e));
        continue;
      }
      a: {
        var k = a;
        var l = b;
        const A = k.g.xi(l, n);
        if (!A) {
          k = null;
          break a;
        }
        const { suspectAncestor: B, Hb: E } = uV(k, l, A, n) || {},
          { suspectAncestor: J, Hb: G } = uV(k, n, A, l) || {};
        k =
          B && E && J && G
            ? E <= G
              ? { suspectAncestor: B, overlapType: vV[E] }
              : { suspectAncestor: J, overlapType: wV[G] }
            : B && E
            ? { suspectAncestor: B, overlapType: vV[E] }
            : J && G
            ? { suspectAncestor: J, overlapType: wV[G] }
            : null;
      }
      const { suspectAncestor: q, overlapType: v } = k || {};
      q && v ? g.push(tV(a, c, n, p, v, e, q)) : g.push(tV(a, c, n, p, 9, e));
    }
    return { entries: g, pb: h };
  }
  function oV(a, b, c) {
    const d = [];
    for (b = b.parentElement; b; b = b.parentElement) {
      const f = b.getBoundingClientRect();
      if (f) {
        var e = Ze(b, a.g.da());
        e &&
          "visible" !== e.overflow &&
          ("auto" !== e.overflowY &&
          "scroll" !== e.overflowY &&
          c.bottom > f.bottom + 2
            ? d.push(tV(a, c, b, f, 5, 1))
            : ((e = "auto" === e.overflowX || "scroll" === e.overflowX),
              !e && c.left < f.left - 2
                ? d.push(tV(a, c, b, f, 5, 3))
                : !e && c.right > f.right + 2 && d.push(tV(a, c, b, f, 5, 4))));
      }
    }
    return d;
  }
  function pV(a, b) {
    if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
    let c = 0;
    for (let d = 1; d < 1 << b.length; d++) {
      let e = a,
        f = 0;
      for (
        let g = 0;
        g < b.length && (!(d & (1 << g)) || (f++, (e = kk(e, b[g])), e));
        g++
      );
      e &&
        (c =
          1 === f % 2
            ? c + (e.width + 1) * (e.height + 1)
            : c - (e.width + 1) * (e.height + 1));
    }
    return c / ((a.width + 1) * (a.height + 1));
  }
  function qV(a, b) {
    if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
    let c = 0;
    for (let d = a.left; d <= a.right; d++)
      for (let e = a.top; e <= a.bottom; e++)
        for (let f = 0; f < b.length; f++)
          if (
            d >= b[f].left &&
            d <= b[f].left + b[f].width &&
            e >= b[f].top &&
            e <= b[f].top + b[f].height
          ) {
            c++;
            break;
          }
    return c / ((a.width + 1) * (a.height + 1));
  }
  function tV(a, b, c, d, e, f, g) {
    const h = {
      element: c,
      elementRect: d,
      overlapType: e,
      overlapDetectionPoint: f,
    };
    if (ab(a.j, e) && ab(a.i, f)) {
      b = new gk(b.top, b.right - 1, b.bottom - 1, b.left);
      if ((a = xV(a, c)) && ik(b, a)) c = 4;
      else {
        a = yV(c, d);
        if (zc) {
          e = Fk(c, "paddingLeft");
          f = Fk(c, "paddingRight");
          var k = Fk(c, "paddingTop"),
            l = Fk(c, "paddingBottom");
          e = new gk(k, f, l, e);
        } else
          (e = yk(c, "paddingLeft")),
            (f = yk(c, "paddingRight")),
            (k = yk(c, "paddingTop")),
            (l = yk(c, "paddingBottom")),
            (e = new gk(
              parseFloat(k),
              parseFloat(f),
              parseFloat(l),
              parseFloat(e)
            ));
        ik(
          b,
          new gk(
            a.top + e.top,
            a.right - e.right,
            a.bottom - e.bottom,
            a.left + e.left
          )
        )
          ? (c = 3)
          : ((c = yV(c, d)), (c = ik(b, c) ? 2 : 1));
      }
      h.overlapDepth = c;
    }
    g && (h.suspectAncestor = g);
    return h;
  }
  function uV(a, b, c, d) {
    const e = [];
    for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
    c = a.g.da();
    for (f = 0; f < e.length; f++) {
      const h = e[f];
      var g = Ze(h, c);
      if (g) {
        if ("fixed" === g.position) return { suspectAncestor: h, Hb: 1 };
        if ("sticky" === g.position && a.g.contains(h.parentElement, d))
          return { suspectAncestor: h, Hb: 2 };
        if ("absolute" === g.position) return { suspectAncestor: h, Hb: 3 };
        if ("none" !== g.cssFloat) {
          g = h === e[0];
          const k = zV(a, e.slice(0, f), h);
          if (g || k) return { suspectAncestor: h, Hb: 4 };
        }
      }
    }
    return (a = zV(a, e, b)) ? { suspectAncestor: a, Hb: 5 } : null;
  }
  function zV(a, b, c) {
    const d = c.getBoundingClientRect();
    if (!d) return null;
    for (let e = 0; e < b.length; e++) {
      const f = b[e];
      if (!a.g.contains(f, c)) continue;
      const g = f.getBoundingClientRect();
      if (!g) continue;
      const h = Ze(f, a.g.da());
      if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f;
    }
    return null;
  }
  function xV(a, b) {
    var c = a.g.g;
    a = c.createRange();
    if (!a) return null;
    c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
      acceptNode: (d) =>
        /^[\s\xa0]*$/.test(d.nodeValue)
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT,
    });
    for (b = c.nextNode(); c.nextNode(); );
    c = c.previousNode();
    if (!b || !c) return null;
    a.setStartBefore(b);
    a.setEndAfter(c);
    a = a.getBoundingClientRect();
    return 0 === a.width || 0 === a.height
      ? null
      : new gk(a.top, a.right, a.bottom, a.left);
  }
  function yV(a, b) {
    if (!zc || 9 <= Number(Oc)) {
      var c = yk(a, "borderLeftWidth");
      d = yk(a, "borderRightWidth");
      e = yk(a, "borderTopWidth");
      a = yk(a, "borderBottomWidth");
      c = new gk(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
    } else {
      c = Hk(a, "borderLeft");
      var d = Hk(a, "borderRight"),
        e = Hk(a, "borderTop");
      a = Hk(a, "borderBottom");
      c = new gk(e, d, a, c);
    }
    return new gk(
      b.top + c.top,
      b.right - 1 - c.right,
      b.bottom - 1 - c.bottom,
      b.left + c.left
    );
  }
  class AV {
    constructor(a) {
      var b = BV;
      this.g = ge(a);
      this.j = [5, 8, 9];
      this.l = [3, 4];
      this.i = b;
    }
  }
  const vV = { [1]: 3, [4]: 10, [3]: 12, [2]: 4, [5]: 5 },
    wV = { [1]: 6, [4]: 11, [3]: 13, [2]: 7, [5]: 8 };
  Wa(
    bf({
      El: 1,
      Fl: 2,
      vn: 3,
      wn: 4,
      yn: 5,
      Al: 6,
      Bl: 7,
      Dl: 8,
      Gm: 9,
      xn: 10,
      Cl: 11,
      un: 12,
      zl: 13,
    }),
    (a) => !ab([1, 2], a)
  );
  bf({ Mk: 1, Jm: 2, Xk: 3, zn: 4 });
  const BV = bf({ Nk: 1, Cn: 2, tm: 3, gn: 4 }),
    sV = { threshold: [0, 0.25, 0.5, 0.75, 0.95, 0.96, 0.97, 0.98, 0.99, 1] };
  function CV(a, b, c, d) {
    const e = new DK();
    let f = "";
    const g = (k) => {
      try {
        const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
        f === l.paw_id &&
          (Sb(a, "message", g),
          l.error ? e.g(Error(l.error)) : e.resolve(d(l)));
      } catch (l) {}
    };
    var h = "function" === typeof a.gmaSdk?.getQueryInfo ? a.gmaSdk : void 0;
    if (h) return Rb(a, "message", g), (f = c(h)), e.promise;
    c =
      "function" ===
        typeof a.webkit?.messageHandlers?.getGmaQueryInfo?.postMessage ||
      "function" === typeof a.webkit?.messageHandlers?.getGmaSig?.postMessage
        ? a.webkit.messageHandlers
        : void 0;
    return c
      ? ((f = String(Math.floor(2147483647 * $e()))),
        Rb(a, "message", g),
        b(c, f),
        e.promise)
      : null;
  }
  function DV(a) {
    return CV(
      a,
      (b, c) => void (b.getGmaQueryInfo ?? b.getGmaSig)?.postMessage(c),
      (b) => b.getQueryInfo(),
      (b) => b.signal
    );
  }
  const EV = (a, b) => {
    try {
      const k = void 0 === N(b, 6) ? !0 : N(b, 6);
      var c = Dj(zi(b, 2)),
        d = O(b, 3);
      a: switch (zi(b, 4)) {
        case 1:
          var e = "pt";
          break a;
        case 2:
          e = "cr";
          break a;
        default:
          e = "";
      }
      var f = new Fj(c, d, e),
        g = D(b, yj, 5)?.g() ?? "";
      f.Ic = g;
      f.g = k;
      f.win = a;
      var h = f.build();
      wj(h);
    } catch {}
  };
  function FV(a, b) {
    a.goog_sdr_l ||
      (Object.defineProperty(a, "goog_sdr_l", { value: !0 }),
      "complete" === a.document.readyState
        ? EV(a, b)
        : Rb(a, "load", () => void EV(a, b)));
  }
  function GV(a) {
    const b = RegExp("^https?://[^/#?]+/?$");
    return !!a && !b.test(a);
  }
  function HV(a) {
    if (a === a.top || Te(a.top)) return Promise.resolve({ status: 4 });
    a: {
      try {
        var b = (a.top?.frames ?? {}).google_ads_top_frame;
        break a;
      } catch (d) {}
      b = null;
    }
    if (!b) return Promise.resolve({ status: 2 });
    if (a.parent === a.top && GV(a.document.referrer))
      return Promise.resolve({ status: 3 });
    const c = new DK();
    a = new MessageChannel();
    a.port1.onmessage = (d) => {
      "__goog_top_url_resp" === d.data.msgType &&
        c.resolve({ zc: d.data.topUrl, status: d.data.topUrl ? 0 : 1 });
    };
    b.postMessage({ msgType: "__goog_top_url_req" }, "*", [a.port2]);
    return c.promise;
  }
  var vl = { Kn: 0, Gn: 1, Hn: 9, Dn: 2, En: 3, Jn: 5, In: 7, Fn: 10 };
  var IV = class extends R {},
    JV = ej(IV),
    KV = [1, 3];
  const LV = qj`https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;
  function MV(a) {
    const b = a.google_tag_topics_state ?? (a.google_tag_topics_state = {});
    return b.messageChannelSendRequestFn
      ? Promise.resolve(b.messageChannelSendRequestFn)
      : new Promise((c) => {
          function d(h) {
            return g.g(h).then(({ data: k }) => k);
          }
          const e = Ye("IFRAME");
          e.style.display = "none";
          e.name = "goog_topics_frame";
          e.src = cd(LV).toString();
          const f = new URL(LV.toString()).origin,
            g = AM({
              destination: a,
              Na: e,
              origin: f,
              se: "goog:gRpYw:doubleclick",
            });
          g.g("goog:topics:frame:handshake:ack").then(({ data: h }) => {
            "goog:topics:frame:handshake:ack" === h && c(d);
          });
          b.messageChannelSendRequestFn = d;
          a.document.documentElement.appendChild(e);
        });
  }
  function NV(a, b, c) {
    var d = tA,
      e = { skipTopicsObservation: x(lv) };
    const { ed: f, dd: g } = OV(c);
    b = b.google_tag_topics_state ?? (b.google_tag_topics_state = {});
    b.getTopicsPromise ||
      ((a = a({
        message: "goog:topics:frame:get:topics",
        skipTopicsObservation: e.skipTopicsObservation,
        includeBuyerTopics: e.includeBuyerTopics,
      }).then((h) => {
        let k = g;
        if (h instanceof Uint8Array)
          k || (k = !(f instanceof Uint8Array && kb(h, f)));
        else if (ul()(h)) k || (k = h !== f);
        else return d.va(989, Error(JSON.stringify(h))), 7;
        if (k && c)
          try {
            var l = new IV();
            var m = Hi(l, 2, Zk());
            h instanceof Uint8Array
              ? ki(m, 1, KV, Ig(h, !1, !1))
              : ki(m, 3, KV, Yg(h));
            c.setItem("goog:cached:topics", $i(m));
          } catch {}
        return h;
      })),
      (b.getTopicsPromise = a));
    return f && !g ? Promise.resolve(f) : b.getTopicsPromise;
  }
  function OV(a) {
    if (!a) return { ed: null, dd: !0 };
    try {
      const m = a.getItem("goog:cached:topics");
      if (!m) return { ed: null, dd: !0 };
      const n = JV(m);
      let p;
      const q = n.V;
      var b = li(q, q[C], KV);
      switch (b) {
        case 0:
          p = null;
          break;
        case 1:
          var c;
          a = n;
          var d = mi(n, KV, 1);
          const A = a.V;
          let B = A[C];
          const E = Vh(A, B, d),
            J = Ig(E, !0, !!(B & 34));
          null != J && J !== E && Xh(A, B, d, J);
          var e = J;
          var f = null == e ? Xf() : e;
          Wf(Tf);
          var g = f.g;
          if (null == g || Rf(g)) var h = g;
          else {
            if ("string" === typeof g) {
              d = g;
              Of.test(d) && (d = d.replace(Of, Qf));
              let G;
              G = atob(d);
              const K = new Uint8Array(G.length);
              for (d = 0; d < G.length; d++) K[d] = G.charCodeAt(d);
              var k = K;
            } else k = null;
            h = k;
          }
          var l = h;
          p = (c = null == l ? l : (f.g = l))
            ? new Uint8Array(c)
            : Sf || (Sf = new Uint8Array(0));
          break;
        case 3:
          p = zi(n, mi(n, KV, 3));
          break;
        default:
          Qe(b, void 0);
      }
      const v = xi(n, 2) + 6048e5 < Zk();
      return { ed: p, dd: v };
    } catch {
      return { ed: null, dd: !0 };
    }
  }
  function GJ() {
    return navigator.cookieDeprecationLabel
      ? Promise.race([
          navigator.cookieDeprecationLabel
            .getValue()
            .then((a) => ({ status: 1, label: a }))
            .catch(() => ({ status: 2 })),
          Bf(Wb(dv), { status: 5 }),
        ])
      : Promise.resolve({ status: 3 });
  }
  function PV(a) {
    return x(ev) && a ? !!a.match(Xb(cv)) : !1;
  }
  function QV(a) {
    a = a.innerInsElement;
    if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
    return a;
  }
  async function RV({ ma: a, sa: b, ub: c, slot: d }) {
    const e = d.vars,
      f = We(d.pubWin),
      g = QV(d),
      h = new rO({ J: f, pubWin: d.pubWin, D: e, ma: a, sa: b, ub: c, ha: g });
    h.F = Date.now();
    fk(1, [h.D]);
    vA(1032, () => {
      if (f && x(xv)) {
        var k = h.D;
        Y(uJ(), 32, !1) ||
          (zJ(uJ(), 32, !0), vQ(f, "sd" === k.google_loader_used ? 5 : 9));
      }
    });
    try {
      await SV(h);
    } catch (k) {
      if (!yA(159, k)) throw k;
    }
    vA(639, () => {
      var k;
      var l = h.D;
      (k = h.J) &&
      1 === l.google_responsive_auto_format &&
      !0 === l.google_full_width_responsive_allowed
        ? (l = (l = k.document.getElementById(l.google_async_iframe_id))
            ? re(l, "INS", "adsbygoogle")
            : null)
          ? ((k = new qO(k, l)),
            (k.g = r.setInterval(Ha(k.i, k), 500)),
            k.i(),
            (k = !0))
          : (k = !1)
        : (k = !1);
      return k;
    });
    f?.location?.hash?.match(/\bgoog_cpmi=([^&]*)/)
      ? zA(1008, TV(d.pubWin, f, e, h.j, $i(UV()), h.g, O(a, 8)), cV)
      : $N(h.pubWin, "affa", (k) => {
          k = TV(d.pubWin, f, e, h.j, k.config, h.g, O(a, 8));
          tA.Da(1008, k, cV);
          return !0;
        });
    return h;
  }
  async function TV(a, b, c, d, e, f, g) {
    await XU(a, b, c, d, e, f, g);
  }
  function UV() {
    const a = new tS();
    if (!x(ju)) {
      var b = new yO();
      b = Ei(b, 5, !0);
      H(a, 2, b);
    }
    if (!x(du)) {
      b = new ir();
      b = Wh(b, 2, Yg(4));
      b = Wh(b, 8, Yg(1));
      var c = new kq();
      c = Ii(c, 7, "#dpId");
      b = H(b, 1, c);
      si(a, 3, ir, b);
    }
    return a;
  }
  function SV(a) {
    if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
    var b = a.pubWin;
    kQ(13, b);
    kQ(11, b);
    a.G = !!Ai(a.ma, yO, 13, BO)?.l();
    b = uJ();
    var c = Y(b, 23, !1);
    c || zJ(b, 23, !0);
    if (!c) {
      b = a.D.google_ad_client;
      c = a.ma;
      b =
        void 0 !== Zh(c, yO, mi(c, BO, 13))
          ? D(Ai(c, yO, 13, BO), BK, 2)
          : kb(Ai(c, zO, 14, BO)?.g() ?? [], [b])
          ? D(D(Ai(c, zO, 14, BO), yO, 2), BK, 2)
          : new BK();
      b = new CK(a.pubWin, a.D.google_ad_client, b, a.ma.g(), N(a.ma, 20));
      b.i = !0;
      c = D(b.B, jr, 1);
      if (b.i) {
        var d = b.g;
        if (b.j && !rE(c)) {
          var e = new tK();
          e = Wh(e, 1, Yg(1));
        } else e = null;
        if (e) {
          e = $i(e);
          try {
            d.localStorage.setItem("google_auto_fc_cmp_setting", e);
          } catch (f) {}
        }
      }
      d = rE(c) && (b.j || b.A);
      c && d && sE(new tE(b.g, new $E(b.g, b.l), c, new qx(b.g)));
    }
    b = !nk() && !qc();
    return !b || (b && !VV(a)) ? WV(a) : Promise.resolve();
  }
  function XV(a, b, c = !1) {
    b = IM(a.J, b);
    const d = rk() || EM(a.pubWin.top);
    if (
      !b ||
      -12245933 === b.y ||
      -12245933 === d.width ||
      -12245933 === d.height ||
      !d.height
    )
      return 0;
    let e = 0;
    try {
      const f = a.pubWin.top;
      e = GM(f.document, f).y;
    } catch (f) {
      return 0;
    }
    a = e + d.height;
    return b.y < e
      ? c
        ? 0
        : (e - b.y) / d.height
      : b.y > a
      ? (b.y - a) / d.height
      : 0;
  }
  function VV(a) {
    return YV(a) || ZV(a);
  }
  function YV(a) {
    const b = a.D;
    if (!b.google_pause_ad_requests) return !1;
    const c = r.setTimeout(() => {
        xA("abg:cmppar", {
          client: a.D.google_ad_client,
          url: a.D.google_page_url,
        });
      }, 1e4),
      d = wA(450, () => {
        b.google_pause_ad_requests = !1;
        r.clearTimeout(c);
        a.pubWin.removeEventListener(
          "adsbygoogle-pub-unpause-ad-requests-event",
          d
        );
        if (!VV(a)) {
          const e = WV(a);
          tA.Da(1222, e);
        }
      });
    a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
    return !0;
  }
  function ZV(a) {
    const b = a.pubWin.document,
      c = a.ha;
    if (3 === kN(b))
      return (
        nN(
          wA(332, () => {
            if (!$V(a, aW().visible, c)) {
              const g = WV(a);
              tA.Da(1222, g);
            }
          }),
          b
        ),
        !0
      );
    const d = aW();
    if (0 > d.hidden && 0 > d.visible) return !1;
    const e = lN(b);
    if (!e) return !1;
    if (!mN(b)) return $V(a, d.visible, c);
    if (XV(a, c) <= d.hidden) return !1;
    let f = wA(332, () => {
      if (!mN(b) && f) {
        Sb(b, e, f);
        if (!$V(a, d.visible, c)) {
          const g = WV(a);
          tA.Da(1222, g);
        }
        f = null;
      }
    });
    return Rb(b, e, f);
  }
  function aW() {
    const a = { hidden: 0, visible: 3 };
    r.IntersectionObserver || (a.visible = -1);
    ve() && (a.visible *= 2);
    return a;
  }
  function $V(a, b, c) {
    if (!c || 0 > b) return !1;
    var d = a.D;
    if (
      (!wo(d.google_reactive_ad_format) &&
        (KN(d) || d.google_reactive_ads_config)) ||
      !HM(c) ||
      XV(a, c) <= b
    )
      return !1;
    var e = uJ(),
      f = Y(e, 8, {});
    e = Y(e, 9, {});
    d = d.google_ad_section || d.google_ad_region || "";
    const g = !!a.pubWin.google_apltlad;
    if (!f[d] && !e[d] && !g) return !1;
    f = new Promise((h) => {
      const k = new r.IntersectionObserver(
        (l, m) => {
          Ua(l, (n) => {
            0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0));
          });
        },
        { rootMargin: `${100 * b}%` }
      );
      a.H = k;
      k.observe(c);
    });
    e = new Promise((h) => {
      c.addEventListener("adsbygoogle-close-to-visible-event", () => {
        h(void 0);
      });
    });
    ka(Promise, "any")
      .call(Promise, [f, e])
      .then(() => {
        vA(294, () => {
          const h = WV(a);
          tA.Da(1222, h);
        });
      });
    return !0;
  }
  function WV(a) {
    vA(326, () => {
      if (1 === Ok(a.D)) {
        var c = x(yv),
          d = c || x(wv),
          e = a.pubWin;
        if (d && e === a.J) {
          var f = new Tj();
          d = new Uj();
          var g = f.setCorrelator(zf(a.pubWin));
          var h = mQ(a.pubWin);
          g = Ji(g, 5, h);
          Q(g, 2, 1);
          f = H(d, 1, f);
          g = new Sj();
          g = Ei(g, 10, !0);
          h = x(rv);
          g = Ei(g, 8, h);
          h = x(sv);
          g = Ei(g, 12, h);
          h = x(vv);
          g = Ei(g, 7, h);
          h = x(uv);
          g = Ei(g, 13, h);
          H(f, 2, g);
          e.google_rum_config = d.toJSON();
          Xe(e.document, N(a.ma, 9) && c ? a.sa.oj : a.sa.pj);
        } else fl(uA);
      }
    });
    a.D.google_ad_channel = bW(a, a.D.google_ad_channel);
    a.D.google_tag_partner = cW(a, a.D.google_tag_partner);
    dW(a);
    const b = a.D.google_start_time;
    "number" === typeof b && ((fo = b), (a.D.google_start_time = null));
    DM(a);
    a.J && ON(a.J, ad(a.sa.gi, HK()));
    CJ() &&
      SK({
        win: a.pubWin,
        webPropertyCode: a.D.google_ad_client,
        jb: ad(a.sa.jb, HK()),
      });
    KN(a.D) &&
      (QK() && (a.D.google_adtest = a.D.google_adtest || "on"),
      (a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3));
    return eW(a);
  }
  function bW(a, b) {
    return (b ? [b] : []).concat(pJ(a.pubWin).ad_channels || []).join("+");
  }
  function cW(a, b) {
    return (b ? [b] : []).concat(pJ(a.pubWin).tag_partners || []).join("+");
  }
  function fW(a) {
    const b = Ye("IFRAME");
    af(a, (c, d) => {
      null != c && b.setAttribute(d, c);
    });
    return b;
  }
  function gW(a, b, c) {
    return 9 === a.D.google_reactive_ad_format &&
      re(a.ha, null, "fsi_container")
      ? (a.ha.appendChild(b), Promise.resolve(b))
      : VN(a.sa.Yg, 525, (d) => {
          a.ha.appendChild(b);
          d.createAdSlot(a.J, a.D, b, a.ha.parentElement, Wj(c, a.pubWin));
          return b;
        });
  }
  function hW(a, b, c, d) {
    VJ();
    w(WJ).kd = a.D.google_page_url;
    FV(
      a.pubWin,
      Bj(
        Aj(
          Q(Q(zj(new Cj(), xj(new yj(), String(zf(a.pubWin)))), 4, 1), 2, 1),
          O(a.ma, 2)
        ),
        d.g()
      )
    );
    const e = a.J;
    a.D.google_acr && a.D.google_acr(b);
    Rb(b, "load", () => {
      b && b.setAttribute("data-load-complete", !0);
      const g = e ? pJ(e).enable_overlap_observer || !1 : !1;
      (a.D.ovlp || g) && e && e === a.pubWin && iW(e, a, a.ha, b);
    });
    d = (g) => {
      g &&
        a.j.push(() => {
          g.ka();
        });
    };
    const f = jW(a, b);
    kW(a, b);
    !e ||
      (KN(a.D) && !YN(a.D)) ||
      (d(new xP(e, b, a.ha)),
      d(new PO(a, b)),
      d(e.IntersectionObserver ? null : new RO(e, b, a.ha)),
      d(
        EP(
          e,
          b,
          a.D,
          a.ha,
          wA(1225, () => {
            f();
            for (const g of a.j) g();
            a.j.length = 0;
          })
        )
      ));
    e &&
      (d(JO(e, b, a.g)),
      a.j.push(kO(e, a.D)),
      w(pO).K(e),
      a.j.push(wO(e, a.ha, b)));
    b && b.setAttribute("data-google-container-id", c);
    c = a.D.iaaso;
    if (null != c) {
      d = a.ha;
      const g = d.parentElement;
      (g && Ov.test(g.className) ? g : d).setAttribute("data-auto-ad-size", c);
    }
    c = a.ha;
    c.setAttribute("tabindex", "0");
    c.setAttribute("title", "Advertisement");
    c.setAttribute("aria-label", "Advertisement");
    lW(a);
  }
  function jW(a, b) {
    const c = a.pubWin,
      d = a.D.google_ad_client,
      e = BJ();
    let f = null;
    const g = ZN(c, "pvt", (h, k) => {
      "string" === typeof h.token &&
        k.source === b.contentWindow &&
        ((f = h.token),
        g(),
        (e[d] = e[d] || []),
        e[d].push(f),
        100 < e[d].length && e[d].shift());
    });
    a.j.push(g);
    return () => {
      f &&
        Array.isArray(e[d]) &&
        (bb(e[d], f), e[d].length || delete e[d], (f = null));
    };
  }
  function mW(a, b) {
    var c = JM(a, "__gpi_opt_out", b.g);
    c &&
      ((c = Kj(Jj(Ij(Gj(c), 2147483647), "/"), b.pubWin.location.hostname)),
      KM(a, "__gpi_opt_out", c, b.g));
  }
  function kW(a, b) {
    const c = ZN(a.pubWin, "gpi-uoo", (d, e) => {
      if (e.source === b.contentWindow) {
        e = Kj(
          Jj(Ij(Gj(d.userOptOut ? "1" : "0"), 2147483647), "/"),
          a.pubWin.location.hostname
        );
        var f = new NM(a.pubWin);
        KM(f, "__gpi_opt_out", e, a.g);
        if (d.userOptOut || d.clearAdsData)
          LM(f, "__gads", a.g), LM(f, "__gpi", a.g);
      }
    });
    a.j.push(c);
  }
  function lW(a) {
    const b = nk(a.pubWin);
    if (b)
      if ("AMP-STICKY-AD" === b.container) {
        const c = (d) => {
          "fill_sticky" === d.data && b.renderStart && b.renderStart();
        };
        Rb(a.pubWin, "message", tA.Ma(616, c));
        a.j.push(() => {
          Sb(a.pubWin, "message", c);
        });
      } else b.renderStart && b.renderStart();
  }
  function iW(a, b, c, d) {
    rV(new AV(a), c)
      .then((e) => {
        fk(8, [e]);
        return e;
      })
      .then((e) => {
        const f = c.parentElement;
        (f && Ov.test(f.className) ? f : c).setAttribute(
          "data-overlap-observer-io",
          e.isOverlappingOrOutsideViewport
        );
        return e;
      })
      .then((e) => {
        const f = b.D.armr || "",
          g = e.executionTime || "",
          h = null == b.D.iaaso ? "" : Number(b.D.iaaso),
          k = Number(e.isOverlappingOrOutsideViewport),
          l = Xa(
            e.entries,
            (B) =>
              `${B.overlapType}:${B.overlapDepth}:${B.overlapDetectionPoint}`
          ),
          m = Number(e.overlappedArea.toFixed(2)),
          n = d.dataset.googleQueryId || "",
          p = m * e.targetRect.width * e.targetRect.height,
          q = `${e.scrollPosition.scrollX},${e.scrollPosition.scrollY}`,
          v = Pk(e.target),
          A = [
            e.targetRect.left,
            e.targetRect.top,
            e.targetRect.right,
            e.targetRect.bottom,
          ].join();
        e = `${e.viewportSize.width}x${e.viewportSize.height}`;
        xA(
          "ovlp",
          {
            adf: b.D.google_ad_dom_fingerprint,
            armr: f,
            client: b.D.google_ad_client,
            eid: mQ(b.D),
            et: g,
            fwrattr: b.D.google_full_width_responsive,
            iaaso: h,
            io: k,
            saldr: b.D.google_loader_used,
            oa: m,
            oe: l.join(","),
            qid: n,
            rafmt: b.D.google_responsive_auto_format,
            roa: p,
            slot: b.D.google_ad_slot,
            sp: q,
            tgt: v,
            tr: A,
            url: b.D.google_page_url,
            vp: e,
            pvc: zf(a),
          },
          1
        );
      })
      .catch((e) => {
        fk(8, ["Error:", e.message, c]);
        xA("ovlp-err", { err: e.message }, 1);
      });
  }
  function nW(a, b) {
    b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a;
  }
  function oW(a, b, c) {
    var d = a.D,
      e = d.google_async_iframe_id;
    const f = d.google_ad_width,
      g = d.google_ad_height,
      h = bO(d);
    e = { id: e, name: e };
    dQ("browsing-topics", a.pubWin.document) &&
      pW(a) &&
      !x(hv) &&
      !PV(a.A?.label) &&
      (e.browsingTopics = "true");
    e.style = h
      ? [`width:${f}px !IMPORTANT`, `height:${g}px !IMPORTANT`].join(";")
      : "left:0;position:absolute;top:0;border:0;" +
        `width:${f}px;` +
        `height:${g}px;`;
    var k = nf();
    k["allow-top-navigation-by-user-activation"] &&
      k["allow-popups-to-escape-sandbox"] &&
      ((x(Et) && h) ||
        ((k = "=" + encodeURIComponent("1")), (b = ye(b, "fsb" + k))),
      (e.sandbox = mf().join(" ")));
    !1 === d.google_video_play_muted && nW("autoplay", e);
    k = b;
    61440 < k.length &&
      ((k = k.substring(0, 61432)),
      (k = k.replace(/%\w?$/, "")),
      (k = k.replace(/&[^=]*=?$/, "")),
      (k += "&trunc=1"));
    if (k !== b) {
      let l = b.lastIndexOf("&", 61432);
      -1 === l && (l = b.lastIndexOf("?", 61432));
      xA(
        "trn",
        { ol: b.length, tr: -1 === l ? "" : b.substring(l + 1), url: b },
        0.01
      );
    }
    b = k;
    null != f && (e.width = String(f));
    null != g && (e.height = String(g));
    e.frameborder = "0";
    e.marginwidth = "0";
    e.marginheight = "0";
    e.vspace = "0";
    e.hspace = "0";
    e.allowtransparency = "true";
    e.scrolling = "no";
    d.dash && (e.srcdoc = d.dash);
    cQ("attribution-reporting", a.pubWin.document) &&
      nW("attribution-reporting", e);
    x(Ts) && cQ("run-ad-auction", a.pubWin.document) && nW("run-ad-auction", e);
    x(ov) &&
      ((d = a.pubWin),
      void 0 !== d.credentialless &&
        (x(pv) || d.crossOriginIsolated) &&
        (e.credentialless = "true"));
    if (h) (e.src = b), (e = fW(e)), (a = gW(a, e, c));
    else {
      c = {};
      c.dtd = uO(new Date().getTime(), fo);
      c = Kk(c, b);
      e.src = c;
      c = a.pubWin;
      c = c == c.top;
      e = fW(e);
      c && a.j.push(tk(a.pubWin, e));
      a.ha.style.visibility = "visible";
      for (a = a.ha; (c = a.firstChild); ) a.removeChild(c);
      a.appendChild(e);
      a = Promise.resolve(e);
    }
    return a;
  }
  async function qW(a) {
    var b = a.D,
      c = a.pubWin;
    const d = a.g;
    d.g() && mW(new NM(a.pubWin), a);
    var e = Wj(d, a.pubWin);
    if (!(d.g() || (x(fv) && a.G)))
      return (
        xA(
          "afc_noc_req",
          { client: a.D.google_ad_client, isGdprCountry: a.ma.g().toString() },
          Wb($s)
        ),
        Promise.resolve()
      );
    !x(bv) || (x(fv) && !d.g()) || (a.A = await FJ());
    if (!x(jv) && (!x(fv) || d.g())) {
      var f = dQ("shared-storage", a.pubWin.document),
        g = dQ("browsing-topics", a.pubWin.document);
      if (f || g)
        try {
          a.B = MV(a.pubWin);
        } catch (h) {
          yA(984, h);
        }
    }
    x(Rs) || RM(d, a.pubWin, a.D.google_ad_client);
    lQ(a.pubWin, d);
    if ((f = a.D.google_reactive_ads_config))
      UN(a.J, f),
        cO(f, a, Wj(d)),
        (f = f.page_level_pubvars),
        za(f) && Wc(a.D, f);
    f = dQ("shared-storage", a.pubWin.document);
    a.B &&
      d.g() &&
      f &&
      !x(Yu) &&
      !Y(uJ(), 34, !1) &&
      (zJ(uJ(), 34, !0),
      (f = a.B.then((h) => {
        h({
          message: "goog:spam:client_age",
          pvsid: zf(a.pubWin),
          useObfuscatedKey: x(Zu),
        });
      })),
      tA.Da(1069, f));
    if (
      dQ("browsing-topics", a.pubWin.document) &&
      a.B &&
      !x(iv) &&
      !PV(a.A?.label)
    )
      if (pW(a)) {
        a.l = 1;
        const h = Wj(a.g, a.pubWin);
        f = a.B.then(async (k) => {
          await NV(k, a.pubWin, h).then((l) => {
            a.l = l;
          });
        });
        x(kv) &&
          ((g = Wb(mv)), 0 < g ? await Promise.race([f, Bf(g)]) : await f);
      } else a.l = 5;
    f = "";
    bO(b)
      ? ((e = a.sa.Kj),
        (f = Xb(Mt)),
        "inhead" === f ? (e = a.sa.Ij) : "nohtml" === f && (e = a.sa.Jj),
        x(Dt) && (e = ad(e, { hello: "world" })),
        (f =
          e.toString() +
          "#" +
          (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") +
            "&" +
            Jk({
              adk: b.google_ad_unit_key,
              client: b.google_ad_client,
              fa: b.google_reactive_ad_format,
            }))),
        aS(b, uJ()),
        rW(b))
      : ((5 === b.google_pgb_reactive && b.google_reactive_ads_config) ||
          !LN(b) ||
          JN(c, b, e)) &&
        rW(b) &&
        (f = RR(a, d));
    fk(2, [b, f]);
    if (!f) return Promise.resolve();
    b.google_async_iframe_id || Nk(c);
    e = Ok(b);
    b =
      a.pubWin === a.J
        ? "a!" + e.toString(36)
        : `${e.toString(36)}.${
            Math.floor(2147483648 * Math.random()).toString(36) +
            Math.abs(
              Math.floor(2147483648 * Math.random()) ^ Date.now()
            ).toString(36)
          }`;
    c = 0 < XV(a, a.ha, !0);
    e = { ifi: e, uci: b };
    c && ((c = uJ()), (e.btvi = Y(c, 21, 1)), AJ(c, 21));
    f = Kk(e, f);
    c = oW(a, f, d);
    a.D.rpe &&
      vP(a.pubWin, a.ha, {
        height: a.D.google_ad_height,
        sf: "force",
        Yc: !0,
        kf: !0,
        de: a.D.google_ad_client,
      });
    c = await c;
    try {
      hW(a, c, b, d);
    } catch (h) {
      yA(223, h);
    }
  }
  function sW(a) {
    const b = new lV(a);
    return new Promise((c) => {
      kV(b, (d) => {
        d && "string" === typeof d.uspString ? c(d.uspString) : c(null);
      });
    });
  }
  function tW(a) {
    var b = of(r.top, "googlefcPresent");
    r.googlefc &&
      !b &&
      xA("adsense_fc_has_namespace_but_no_iframes", { publisherId: a }, 1);
  }
  function uW(a, b, c) {
    var d = c.Dj,
      e = c.uspString;
    c = c.Ei;
    d ? sO(a, d, b) : x($u) || wK(a, !0);
    e &&
      ((b = Ii(a, 1, e)),
      (e = e.toUpperCase()),
      4 == e.length &&
      (-1 == e.indexOf("-") || "---" === e.substring(1)) &&
      "1" <= e[0] &&
      "9" >= e[0] &&
      VK.hasOwnProperty(e[1]) &&
      VK.hasOwnProperty(e[2]) &&
      VK.hasOwnProperty(e[3])
        ? ((d = new UK()),
          (d = Gi(d, 1, parseInt(e[0], 10))),
          (d = Q(d, 2, VK[e[1]])),
          (d = Q(d, 3, VK[e[2]])),
          (e = Q(d, 4, VK[e[3]])))
        : (e = null),
      (e = 2 === e?.Bi()),
      Di(b, 13, e));
    c && eN(a, c);
  }
  function vW(a) {
    const b = Wb(Xs);
    if (0 >= b) return null;
    const c = Zk(),
      d = DV(a.pubWin);
    if (!d) return null;
    a.C = "0";
    return Promise.race([d, Bf(b, "0")])
      .then((e) => {
        xA("adsense_paw", { time: Zk() - c });
        1e4 < e?.length ? yA(809, Error(`ML:${e.length}`)) : (a.C = e);
      })
      .catch((e) => {
        yA(809, e);
      });
  }
  function wW(a) {
    const b = Zk();
    return Promise.race([vA(832, () => HV(a)), Bf(200)]).then((c) => {
      xA("afc_etu", { etus: c?.status ?? 100, sig: Zk() - b, tms: 200 });
      return c?.zc;
    });
  }
  async function xW(a) {
    const b = Zk();
    x(Zs) &&
      XJ((e) => {
        e = Ei(e, 2, !!a.ma?.g());
        Q(e, 1, 1);
      });
    hM(a.pubWin);
    tW(a.D.google_ad_client);
    x(Zs) &&
      XJ((e) => {
        Q(e, 1, 2);
      });
    var c = new ME(a.pubWin);
    await (JE(c, ".google.cn" === O(a.ma, 8)) ? KE(c) : Promise.resolve(null));
    x(Zs) &&
      XJ((e) => {
        e = Ei(e, 3, !0);
        Q(e, 1, 3);
      });
    let d;
    a.g = new xK();
    x($u) && ((d = a.ma.g()), wK(a.g, !d));
    c = [tO(a), sW(a.pubWin), x(Ss) ? fN(a) : null];
    c = await Promise.all(c);
    uW(a.g, d, { Dj: c[0], uspString: c[1], Ei: c[2] });
    if (x(Zs)) {
      const e = Zk();
      XJ((f) => {
        f = Ei(f, 3, 500 < e - b);
        f = Ei(f, 4, !!a.g?.j());
        f = Ei(f, 5, !!a.g?.g());
        Q(f, 1, 4);
      });
    }
  }
  async function yW(a) {
    const b = vW(a),
      c = vA(868, () => wW(a.pubWin));
    await xW(a);
    await b;
    a.zc = (await c) || "";
    await qW(a);
  }
  function pW(a) {
    const b = a.g;
    a = a.D;
    return (
      !a.google_restrict_data_processing &&
      1 !== a.google_tag_for_under_age_of_consent &&
      1 !== a.google_tag_for_child_directed_treatment &&
      !!b.g() &&
      !b.l() &&
      !DJ() &&
      !N(b, 9) &&
      !N(b, 13) &&
      (!x(Ss) || !N(b, 12)) &&
      ("string" !== typeof a.google_privacy_treatments ||
        !a.google_privacy_treatments
          .split(",")
          .includes("disablePersonalization"))
    );
  }
  function eW(a) {
    Cf(a.pubWin) !== a.pubWin && (a.i |= 4);
    3 === kN(a.pubWin.document) && (a.i |= 32);
    var b;
    if ((b = a.J)) {
      b = a.J;
      const c = qo(b);
      b = !(uo(b).scrollWidth <= c);
    }
    b && (a.i |= 1024);
    a.pubWin.Prototype?.Version && (a.i |= 16384);
    a.D.google_loader_features_used && (a.i |= a.D.google_loader_features_used);
    return yW(a);
  }
  function rW(a) {
    const b = uJ(),
      c = a.google_ad_section;
    KN(a) && AJ(b, 15);
    if (Rk(a)) {
      if (100 < AJ(b, 5)) return !1;
    } else if (100 < AJ(b, 6) - Y(b, 15, 0) && "" === c) return !1;
    return !0;
  }
  function dW(a) {
    const b = a.J;
    if (
      b &&
      !pJ(b).ads_density_stats_processed &&
      !nk(b) &&
      ((pJ(b).ads_density_stats_processed = !0), x(It) || 0.01 > $e())
    ) {
      const c = () => {
        if (b) {
          var d = eI(
            $H(b),
            a.D.google_ad_client,
            b.location.hostname,
            mQ(a.D).split(",")
          );
          xA("ama_stats", d, 1);
        }
      };
      Af(b, () => {
        r.setTimeout(c, 1e3);
      });
    }
  }
  (function (a, b, c) {
    vA(843, () => {
      if (!r.google_sa_impl) {
        var d = new Vn(b);
        try {
          Rg((k) => {
            var l = new Kn();
            var m = new Jn();
            try {
              var n = zf(window);
              P(m, 1, n);
            } catch (A) {}
            try {
              var p = w(Yn).g();
              ii(m, 2, p, $g);
            } catch (A) {}
            try {
              Ji(m, 3, window.document.URL);
            } catch (A) {}
            l = H(l, 2, m);
            m = new In();
            m = Q(m, 1, 1192);
            try {
              var q = sl(k?.name) ? k.name : "Unknown error";
              Ji(m, 2, q);
            } catch (A) {}
            try {
              var v = sl(k?.message) ? k.message : `Caught ${k}`;
              Ji(m, 3, v);
            } catch (A) {}
            try {
              const A = sl(k?.stack) ? k.stack : Error().stack;
              A && ii(m, 4, A.split(/\n\s*/), mh);
            } catch (A) {}
            k = H(l, 1, m);
            q = new Hn();
            try {
              Ji(q, 1, "m202402270101");
            } catch {}
            qi(k, 6, Ln, q);
            P(k, 5, 1);
            Nn(d, k);
          });
        } catch (k) {}
        var e = gV(a);
        eV(O(e, 2));
        EO(e.g());
        fk(16, [3, e.toJSON()]);
        var f = dV({ Xf: b, hh: O(e, 2) }),
          g = c(f, e);
        r.google_sa_impl = (k) => RV({ ma: e, sa: g, ub: f, slot: k });
        iQ(bQ(r));
        r.google_process_slots?.();
        var h = (r.Prototype || {}).Version;
        null != h && xA("prtpjs", { version: h });
      }
    });
  })(fV, "m202402270101", function (a, b) {
    const c = 2012 < wi(b, 1) ? `_fy${wi(b, 1)}` : "",
      d = O(b, 3);
    b = O(b, 2);
    return {
      pj: qj`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
      oj: qj`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
      Yg: qj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}reactive_library${c}.js`,
      gi: qj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}debug_card_library${c}.js`,
      Kj: qj`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
      Ij: qj`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_inhead${c}.html`,
      Jj: qj`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_nohtml${c}.html`,
      jo: qj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
      Wn: qj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
      jb: qj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}autogames${c}.js`,
    };
  });
}.call(
  this,
  '[2021,"r20240228","r20110914",null,null,null,null,".google.co.in",null,null,null,null,null,null,null,null,null,-1,[44759876,44759927,44759842]]'
));
