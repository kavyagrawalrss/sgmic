/*FB_PKG_DELIM*/

__d(
  "EventEmitterWithValidation",
  ["BaseEventEmitter"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this) || this;
        d.$EventEmitterWithValidation1 = Object.keys(b);
        d.$EventEmitterWithValidation2 = Boolean(c);
        return d;
      }
      var c = b.prototype;
      c.emit = function (b) {
        if (this.$EventEmitterWithValidation1.indexOf(b) === -1) {
          if (this.$EventEmitterWithValidation2) return;
          throw new TypeError(g(b, this.$EventEmitterWithValidation1));
        }
        return a.prototype.emit.apply(this, arguments);
      };
      return b;
    })(b("BaseEventEmitter"));
    function g(a, b) {
      a = 'Unknown event type "' + a + '". ';
      a += "Known event types: " + b.join(", ") + ".";
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  "mixInEventEmitter",
  [
    "invariant",
    "EventEmitterWithHolding",
    "EventEmitterWithValidation",
    "EventHolder",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b, c) {
      b || h(0, 3159);
      var d = a.prototype || a;
      d.__eventEmitter && h(0, 3160);
      a = a.constructor;
      a && (a === Object || a === Function || h(0, 3161));
      d.__types = babelHelpers["extends"]({}, d.__types, b);
      d.__ignoreUnknownEvents = Boolean(c);
      Object.assign(d, i);
    }
    var i = {
      emit: function (a, b, c, d, e, f, g) {
        return this.__getEventEmitter().emit(a, b, c, d, e, f, g);
      },
      emitAndHold: function (a, b, c, d, e, f, g) {
        return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g);
      },
      addListener: function (a, b, c) {
        return this.__getEventEmitter().addListener(a, b, c);
      },
      once: function (a, b, c) {
        return this.__getEventEmitter().once(a, b, c);
      },
      addRetroactiveListener: function (a, b, c) {
        return this.__getEventEmitter().addRetroactiveListener(a, b, c);
      },
      listeners: function (a) {
        return this.__getEventEmitter().listeners(a);
      },
      removeAllListeners: function () {
        this.__getEventEmitter().removeAllListeners();
      },
      removeCurrentListener: function () {
        this.__getEventEmitter().removeCurrentListener();
      },
      releaseHeldEventType: function (a) {
        this.__getEventEmitter().releaseHeldEventType(a);
      },
      __getEventEmitter: function () {
        if (!this.__eventEmitter) {
          var a = new (c("EventEmitterWithValidation"))(
              this.__types,
              this.__ignoreUnknownEvents
            ),
            b = new (c("EventHolder"))();
          this.__eventEmitter = new (c("EventEmitterWithHolding"))(a, b);
        }
        return this.__eventEmitter;
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "NavigationMetricsCore",
  ["mixInEventEmitter", "pageID"],
  function (a, b, c, d, e, f, g) {
    var h = {
        NAVIGATION_DONE: "NAVIGATION_DONE",
        EVENT_OCCURRED: "EVENT_OCCURRED",
      },
      i = {
        tti: "tti",
        e2e: "e2e",
        all_pagelets_loaded: "all_pagelets_loaded",
        all_pagelets_displayed: "all_pagelets_displayed",
      },
      j = 0,
      k = {},
      l = (function () {
        function a() {
          (this.eventTimings = {
            tti: null,
            e2e: null,
            all_pagelets_loaded: null,
            all_pagelets_displayed: null,
          }),
            (this.lid = c("pageID") + ":" + j++),
            (this.extras = {});
        }
        var b = a.prototype;
        b.getLID = function () {
          return this.lid;
        };
        b.setRequestStart = function (a) {
          this.start = a;
          return this;
        };
        b.setTTI = function (a) {
          this.eventTimings.tti = a;
          this.$1(i.tti, a);
          return this;
        };
        b.setE2E = function (a) {
          this.eventTimings.e2e = a;
          this.$1(i.e2e, a);
          return this;
        };
        b.setExtra = function (a, b) {
          this.extras[a] = b;
          return this;
        };
        b.setDisplayDone = function (a) {
          this.eventTimings.all_pagelets_displayed = a;
          this.setExtra("all_pagelets_displayed", a);
          this.$1(i.all_pagelets_displayed, a);
          return this;
        };
        b.setAllPageletsLoaded = function (a) {
          this.eventTimings.all_pagelets_loaded = a;
          this.setExtra("all_pagelets_loaded", a);
          this.$1(i.all_pagelets_loaded, a);
          return this;
        };
        b.setServerLID = function (a) {
          this.serverLID = a;
          return this;
        };
        b.$1 = function (a, b) {
          var c = {};
          k != null &&
            this.serverLID != null &&
            k[this.serverLID] != null &&
            (c = k[this.serverLID]);
          c = babelHelpers["extends"]({}, c, { event: a, timestamp: b });
          m.emitAndHold(h.EVENT_OCCURRED, this.serverLID, c);
          return this;
        };
        b.doneNavigation = function () {
          var a = babelHelpers["extends"](
            { start: this.start, extras: this.extras },
            this.eventTimings
          );
          if (this.serverLID && k[this.serverLID]) {
            var b = this.serverLID;
            Object.assign(a, k[b]);
            delete k[b];
          }
          m.emitAndHold(h.NAVIGATION_DONE, this.lid, a);
        };
        return a;
      })(),
      m = {
        Events: h,
        postPagelet: function (a, b, c) {},
        siteInit: function (a) {
          a(l);
        },
        setPage: function (a) {
          if (!a.serverLID) return;
          k[a.serverLID] = {
            page: a.page,
            pageType: a.page_type,
            pageURI: a.page_uri,
            serverLID: a.serverLID,
          };
        },
        getFullPageLoadLid: function () {
          throw new Error("getFullPageLoadLid is not implemented on this site");
        },
      };
    c("mixInEventEmitter")(m, h);
    a = m;
    g["default"] = a;
  },
  98
);
__d(
  "NavigationMetricsWWW",
  [
    "Arbiter",
    "BigPipeInstance",
    "NavigationMetricsCore",
    "PageEvents",
    "performance",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i = "0";
    c("NavigationMetricsCore").getFullPageLoadLid = function () {
      return i;
    };
    c("NavigationMetricsCore").siteInit(function (a) {
      var b = new a(),
        e = !0;
      c("Arbiter").subscribe(d("BigPipeInstance").Events.init, function (f, g) {
        var h = e ? b : new a();
        e && (i = g.lid);
        e = !1;
        h.setServerLID(g.lid);
        f = g.arbiter;
        f.subscribe(d("BigPipeInstance").Events.tti, function (a, b) {
          a = b.ts;
          h.setTTI(a);
        });
        f.subscribe(c("PageEvents").AJAXPIPE_SEND, function (a, b) {
          a = b.ts;
          h.setRequestStart(a);
        });
        f.subscribe(c("PageEvents").AJAXPIPE_ONLOAD, function (a, b) {
          a = b.ts;
          h.setE2E(a).doneNavigation();
        });
        f.subscribe(d("BigPipeInstance").Events.displayed, function (a, b) {
          a = b.ts;
          h.setDisplayDone(a);
        });
        f.subscribe(d("BigPipeInstance").Events.loaded, function (a, b) {
          a = b.ts;
          h.setAllPageletsLoaded(a);
        });
      });
      c("Arbiter").subscribe(c("PageEvents").BIGPIPE_ONLOAD, function (a, d) {
        a = d.ts;
        e = !1;
        b.setRequestStart(
          (h || (h = c("performance"))).timing &&
            (h || (h = c("performance"))).timing.navigationStart
        )
          .setE2E(a)
          .doneNavigation();
      });
    });
    g["default"] = c("NavigationMetricsCore");
  },
  98
);
__d(
  "PluginDefaultLink",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      register: function (a) {
        var b;
        (b = window) == null
          ? void 0
          : b.addEventListener("click", function (b) {
              b.srcElement.tagName !== "A" &&
                b.srcElement.tagName !== "BUTTON" &&
                b.srcElement.closest("a") == null &&
                a.click();
            });
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "NavigationMetrics",
  ["cr:6016"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:6016");
  },
  98
);
__d(
  "IdleCallbackImplementation",
  ["performanceNow", "requestAnimationFramePolyfill"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = [],
      j = 0,
      k = 0,
      l = -1,
      m = !1,
      n = 1e3 / 60,
      o = 2;
    function p(a) {
      return a;
    }
    function q(a) {
      return a;
    }
    function b(b, c) {
      var d = k++;
      i[d] = b;
      s();
      if (c != null && c.timeout > 0) {
        var e = p(d);
        a.setTimeout(function () {
          return y(e);
        }, c.timeout);
      }
      return p(d);
    }
    function r(a) {
      a = q(a);
      i[a] = null;
    }
    function s() {
      m ||
        ((m = !0),
        c("requestAnimationFramePolyfill")(function (a) {
          (m = !1), u((h || (h = c("performanceNow")))() - a);
        }));
    }
    function t(a) {
      var b = n - o;
      if (a < b) return b - a;
      a = a % n;
      if (a > b || a < o) return 0;
      else return b - a;
    }
    function u(a) {
      var b = (h || (h = c("performanceNow")))();
      if (b > l) {
        a = t(a);
        if (a > 0) {
          b = b + a;
          x(b);
          l = b;
        }
      }
      v() && s();
    }
    function v() {
      return j < i.length;
    }
    function w() {
      while (v()) {
        var a = i[j];
        j++;
        if (a) return a;
      }
      return null;
    }
    function x(a) {
      var b;
      while ((h || (h = c("performanceNow")))() < a && (b = w())) b(new z(a));
    }
    function y(a) {
      var b = q(a);
      b = i[b];
      b && (r(a), b(new z(null)));
    }
    var z = (function () {
      function a(a) {
        (this.didTimeout = a == null), (this.$1 = a);
      }
      var b = a.prototype;
      b.timeRemaining = function () {
        var a = this.$1;
        if (a != null) {
          var b = (h || (h = c("performanceNow")))();
          if (b < a) return a - b;
        }
        return 0;
      };
      return a;
    })();
    g.requestIdleCallback = b;
    g.cancelIdleCallback = r;
  },
  98
);
__d(
  "requestIdleCallbackAcrossTransitions",
  ["IdleCallbackImplementation", "TimeSlice"],
  function (a, b, c, d, e, f, g) {
    var h =
      a.requestIdleCallback ||
      d("IdleCallbackImplementation").requestIdleCallback;
    function b(b, d) {
      b = c("TimeSlice").guard(b, "requestIdleCallback", {
        propagationType: c("TimeSlice").PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      return h.call(a, b, d);
    }
    g["default"] = b;
  },
  98
);
