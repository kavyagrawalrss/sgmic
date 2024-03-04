/*FB_PKG_DELIM*/

__d(
  "BanzaiLogger",
  ["Banzai"],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      return {
        log: function (b, d) {
          c("Banzai").post("logger:" + b, d, a);
        },
        create: h,
      };
    }
    a = h();
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "MNCommerceLogger",
  ["BanzaiLogger", "ODS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = c("BanzaiLogger").create({ signal: !0 });
    function j(a) {
      switch (a) {
        case "devx_upsell_learn_more_clicked":
          return "devx.upsell.learn_more.clicked";
        default:
          return a;
      }
    }
    function a(a, b, c) {
      (h || (h = d("ODS"))).bumpEntityKey(2966, "messenger_commerce", j(a)),
        i.log("MessengerCommerceLoggerConfig", {
          brand_app_id: b,
          user_fbid: c,
          event: a,
        });
    }
    function b(a, b, c, e) {
      i.log("MessengerCommerceLoggerConfig", {
        brand_app_id: a,
        page_id: b,
        user_fbid: c,
        event: e,
      }),
        (h || (h = d("ODS"))).bumpEntityKey(
          2966,
          "messenger_commerce",
          "auth." + e + ".all"
        );
    }
    g.logClick = a;
    g.logAuthEvent = b;
  },
  98
);
__d(
  "ReactImplementation",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    var h = null,
      i = !1;
    function a() {
      i = !0;
      return h;
    }
    function b(a) {
      if (i)
        throw c("unrecoverableViolation")(
          "React implementation cannot be injected after it was requested.",
          "react_flight"
        );
      if (h != null)
        throw c("unrecoverableViolation")(
          "React implementation has already been injected.",
          "react_flight"
        );
      h = a;
    }
    g.get = a;
    g.inject = b;
  },
  98
);
__d(
  "react-forget-runtime",
  ["fb-error", "gkx"],
  function (a, b, c, d, e, f, g) {
    d = null;
    e = null;
    f = [];
    e = {};
    f = c("gkx")("21075");
    e = f ? "Jest-Only Fatal: " : "";
    function a(a) {}
    function b(a) {
      d =
        a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          .ReactCurrentDispatcher;
    }
    g.$dispatcherGuard = a;
    g.initReactForgetRuntime = b;
  },
  98
);
__d(
  "React",
  [
    "FBLogger",
    "ReactImplementation",
    "cr:1108857",
    "cr:1294158",
    "react-forget-runtime",
  ],
  function (a, b, c, d, e, f) {
    a = b("cr:1294158");
    c = b("ReactImplementation").get();
    if (c != null) a = c;
    else {
      var g = a.createFactory;
      a.createFactory = function () {
        b("FBLogger")("react", "createfactory").mustfix(
          "React.createFactory is not supported anymore"
        );
        return g.apply(void 0, arguments);
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "BootloadedReact",
  ["Bootloader", "react"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || (h = d("react")),
      j = h.useLayoutEffect,
      k = function (a) {
        c("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact");
      };
    function a(a, b, c) {
      k(function (d) {
        if (c != null)
          return d.render(
            i.jsx(l, { onRender: c, children: a }),
            b,
            "BootloadedReact.js"
          );
        else d.render(a, b, "BootloadedReact.js");
      });
    }
    function b(a) {
      k(function (b) {
        b.unmountComponentAtNode(a, f.id);
      });
    }
    function l(a) {
      var b = a.onRender;
      j(
        function () {
          b();
        },
        [b]
      );
      return a.children;
    }
    g.render = a;
    g.unmountComponentAtNode = b;
  },
  98
);
__d(
  "getOrCreateDOMID",
  ["uniqueID"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      a.id || (a.id = c("uniqueID")());
      return a.id;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ContextualThing",
  ["CSS", "containsNode", "ge", "getOrCreateDOMID"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      a.setAttribute("data-ownerid", c("getOrCreateDOMID")(b));
    }
    function b(a, b) {
      b = b;
      while (b) {
        if (c("containsNode")(a, b)) return !0;
        b = h(b);
      }
      return !1;
    }
    function h(a) {
      a = a;
      var b;
      while (a) {
        if (a.getAttribute && (b = a.getAttribute("data-ownerid")))
          return c("ge")(b);
        a = a.parentNode;
      }
      return null;
    }
    function e(a, b) {
      a = a;
      var e;
      while (a && !d("CSS").hasClass(a, b))
        a.getAttribute && (e = a.getAttribute("data-ownerid"))
          ? (a = c("ge")(e))
          : (a = a.parentNode);
      return a;
    }
    g.register = a;
    g.containsIncludingLayers = b;
    g.getContext = h;
    g.parentByClass = e;
  },
  98
);
__d(
  "getElementText",
  ["isElementNode", "isTextNode"],
  function (a, b, c, d, e, f, g) {
    var h = null;
    function a(a) {
      if (c("isTextNode")(a)) return a.data;
      else if (c("isElementNode")(a)) {
        if (h === null) {
          var b = document.createElement("div");
          h = b.textContent != null ? "textContent" : "innerText";
        }
        return a[h];
      } else return "";
    }
    g["default"] = a;
  },
  98
);
__d(
  "isContentEditable",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a;
      while (a instanceof HTMLElement) {
        if (
          a.contentEditable === "true" ||
          a.contentEditable === "plaintext-only"
        )
          return !0;
        a = a.parentElement;
      }
      return !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "isElementInteractive",
  ["isContentEditable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
      i = new Set(["button", "checkbox", "radio", "submit"]);
    function a(a) {
      if (!a instanceof HTMLElement) return !1;
      var b = c("isContentEditable")(a),
        d = h.has(a.nodeName);
      a = a instanceof HTMLInputElement && i.has(a.type);
      return (b || d) && !a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "KeyEventController",
  [
    "Bootloader",
    "DOMQuery",
    "Event",
    "Run",
    "emptyFunction",
    "getElementText",
    "isContentEditable",
    "isElementInteractive",
    "isEmpty",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i = null,
      j = {
        BACKSPACE: [8],
        TAB: [9],
        RETURN: [13],
        ALT: [18],
        ESCAPE: [27],
        LEFT: [37, 63234],
        UP: [38, 63232],
        RIGHT: [39, 63235],
        DOWN: [40, 63233],
        NUMPAD_ADD: [43],
        NUMPAD_SUBSTRACT: [45],
        DELETE: [46],
        COMMA: [188],
        PERIOD: [190],
        SLASH: [191],
        "`": [192],
        "[": [219],
        "]": [221],
        PAGE_UP: [33],
        PAGE_DOWN: [34],
        END: [35],
        HOME: [36],
        SPACE: [32],
        KP_DOT: [46, 110],
        "-": [189],
        "=": [187],
        FORWARD_SLASH: [191],
      },
      k =
        ((a = {}),
        (a[8] = 1),
        (a[9] = 1),
        (a[13] = 1),
        (a[27] = 1),
        (a[32] = 1),
        (a[37] = 1),
        (a[63234] = 1),
        (a[38] = 1),
        (a[63232] = 1),
        (a[39] = 1),
        (a[63235] = 1),
        (a[40] = 1),
        (a[63233] = 1),
        (a[46] = 1),
        a);
    b = (function () {
      function a() {
        var a = this;
        this.handlers = {};
        ["keyup", "keydown", "keypress"].forEach(function (b) {
          return document.addEventListener(b, a.onkeyevent.bind(a, "on" + b));
        });
      }
      var b = a.prototype;
      b.mapKey = function (a) {
        a = a;
        if (/^[0-9]$/.test(a + "")) {
          typeof a !== "number" && (a = a.charCodeAt(0) - 48);
          return [48 + a, 96 + a];
        }
        a += "";
        var b = j[a.toUpperCase()];
        return b ? b : [a.toUpperCase().charCodeAt(0)];
      };
      b.onkeyevent = function (a, b) {
        var d = b;
        d = c("Event").$E(d);
        b = this.handlers[d.keyCode] || this.handlers[d.which];
        if (b)
          for (var e = 0; e < b.length; e++) {
            var f = b[e].callback,
              g = b[e].filter;
            try {
              if (!g || g(d, a)) {
                g = (function () {
                  var b = f(d, a),
                    e = d.which || d.keyCode;
                  c("Bootloader").loadModules(
                    ["KeyEventTypedLogger"],
                    function (a) {
                      new a()
                        .setAction("key_shortcut")
                        .setKey(d.key || "")
                        .setKeyChar(String.fromCharCode(e))
                        .setKeyCode(e)
                        .addToExtraData("is_trusted", d.isTrusted)
                        .log();
                    },
                    "KeyEventController"
                  );
                  if (b === !1) return { v: c("Event").kill(d) };
                })();
                if (typeof g === "object") return g.v;
              }
            } catch (a) {}
          }
        return !0;
      };
      b.resetHandlers = function () {
        for (var a in this.handlers)
          if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
            var b = this.handlers[a].filter(function (a) {
              return a.preserve();
            });
            b.length ? (this.handlers[a] = b) : delete this.handlers[a];
          }
      };
      a.getInstance = function () {
        return i || (i = new a());
      };
      a.defaultFilter = function (b, d) {
        b = c("Event").$E(b);
        return (
          a.filterEventTypes(b, d) &&
          a.filterEventTargets(b, d) &&
          a.filterEventModifiers(b, d)
        );
      };
      a.filterEventTypes = function (a, b) {
        return b === "onkeydown" ? !0 : !1;
      };
      a.filterEventTargets = function (a, b) {
        b = a.getTarget();
        return (
          !c("isElementInteractive")(b) ||
          (a.keyCode in k &&
            ((d("DOMQuery").isNodeOfType(b, ["input", "textarea"]) &&
              b.value.length === 0) ||
              (c("isContentEditable")(b) &&
                c("getElementText")(b).length === 0)))
        );
      };
      a.filterEventModifiers = function (a, b) {
        return a.ctrlKey || a.altKey || a.metaKey || a.repeat ? !1 : !0;
      };
      a.registerKeyAcrossTransitions = function (b, d, e, f) {
        e === void 0 && (e = a.defaultFilter);
        f === void 0 && (f = !1);
        return a.registerKey(b, d, e, f, c("emptyFunction").thatReturnsTrue);
      };
      a.registerKey = function (b, e, f, g, i) {
        f === void 0 && (f = a.defaultFilter);
        g === void 0 && (g = !1);
        i === void 0 && (i = c("emptyFunction").thatReturnsFalse);
        b = b;
        var j = a.getInstance(),
          k = b == null ? [] : j.mapKey(b);
        (h || (h = c("isEmpty")))(j.handlers) &&
          d("Run").onLeave(j.resetHandlers.bind(j));
        var l = {};
        for (var m = 0; m < k.length; m++) {
          b = "" + k[m];
          (!j.handlers[b] || g) && (j.handlers[b] = []);
          var n = { callback: e, filter: f, preserve: i };
          l[b] = n;
          j.handlers[b].push(n);
        }
        return {
          remove: function () {
            for (var a in l) {
              if (j.handlers[a] && j.handlers[a].length) {
                var b = j.handlers[a].indexOf(l[a]);
                b >= 0 && j.handlers[a].splice(b, 1);
              }
              delete l[a];
            }
          },
        };
      };
      a.registerKeyForButtonCallback = function (b, c) {
        return a.registerKey(b, function () {
          c.click();
          return !1;
        });
      };
      return a;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "KeyStatus",
  ["Event", "ExecutionEnvironment"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = null,
      j = null;
    function k() {
      j ||
        (j = c("Event").listen(window, "blur", function () {
          (i = null), l();
        }));
    }
    function l() {
      j && (j.remove(), (j = null));
    }
    function a(a) {
      (i = c("Event").getKeyCode(a)), k();
    }
    function b() {
      (i = null), l();
    }
    if ((h || c("ExecutionEnvironment")).canUseDOM) {
      f = document.documentElement;
      if (f)
        if (f.addEventListener)
          f.addEventListener("keydown", a, !0),
            f.addEventListener("keyup", b, !0);
        else if (f.attachEvent) {
          f = f.attachEvent;
          f("onkeydown", a);
          f("onkeyup", b);
        }
    }
    function d() {
      return !!i;
    }
    function e() {
      return i;
    }
    g.isKeyDown = d;
    g.getKeyDownCode = e;
  },
  98
);
__d(
  "BehaviorsMixin",
  [],
  function (a, b, c, d, e, f) {
    var g = (function () {
        function a(a) {
          (this.$1 = a), (this.$2 = !1);
        }
        var b = a.prototype;
        b.enable = function () {
          this.$2 || ((this.$2 = !0), this.$1.enable());
        };
        b.disable = function () {
          this.$2 && ((this.$2 = !1), this.$1.disable());
        };
        return a;
      })(),
      h = 1;
    function i(a) {
      a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
      return a.__BEHAVIOR_ID;
    }
    a = {
      enableBehavior: function (a) {
        this._behaviors || (this._behaviors = {});
        var b = i(a);
        this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
        this._behaviors[b].enable();
        return this;
      },
      disableBehavior: function (a) {
        if (this._behaviors) {
          a = i(a);
          this._behaviors[a] && this._behaviors[a].disable();
        }
        return this;
      },
      enableBehaviors: function (a) {
        a.forEach(this.enableBehavior, this);
        return this;
      },
      destroyBehaviors: function () {
        if (this._behaviors) {
          for (var a in this._behaviors) this._behaviors[a].disable();
          this._behaviors = {};
        }
      },
      hasBehavior: function (a) {
        return this._behaviors && i(a) in this._behaviors;
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "isValidReactElement",
  [],
  function (a, b, c, d, e, f) {
    var g =
      (typeof Symbol === "function" &&
        Symbol["for"] &&
        Symbol["for"]("react.element")) ||
      60103;
    function a(a) {
      return !!(typeof a === "object" && a !== null && a.$$typeof === g);
    }
    f["default"] = a;
  },
  66
);
__d(
  "setImmediate",
  ["TimeSlice", "TimerStorage", "setImmediateAcrossTransitions"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b,
        d = function () {
          c("TimerStorage").unset(c("TimerStorage").IMMEDIATE, b);
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          Function.prototype.apply.call(a, this, e);
        };
      c("TimeSlice").copyGuardForWrapper(a, d);
      for (
        var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1;
        g < e;
        g++
      )
        f[g - 1] = arguments[g];
      b = c("setImmediateAcrossTransitions").apply(void 0, [d].concat(f));
      c("TimerStorage").set(c("TimerStorage").IMMEDIATE, b);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "Layer",
  [
    "invariant",
    "ArbiterMixin",
    "BehaviorsMixin",
    "BootloadedReact",
    "CSS",
    "ContextualThing",
    "DOM",
    "DataStore",
    "Event",
    "FBLogger",
    "HTML",
    "KeyEventController",
    "KeyStatus",
    "Parent",
    "Style",
    "ge",
    "isNode",
    "isValidReactElement",
    "mixin",
    "removeFromArray",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g, h) {
    b("KeyStatus");
    var i = [],
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, d) {
          var e;
          e = b.call(this) || this;
          e._config = a || {};
          if (d) {
            e._configure(e._config, d);
            a = e._config.addedBehaviors || [];
            e.enableBehaviors(e._getDefaultBehaviors().concat(a));
          } else
            c("FBLogger")("layer").warn(
              "The markup param wasn't provided to the Layer constructor"
            );
          return e;
        }
        var e = a.prototype;
        e.init = function (a) {
          this._configure(this._config, a);
          a = this._config.addedBehaviors || [];
          this.enableBehaviors(this._getDefaultBehaviors().concat(a));
          this._initialized = !0;
          return this;
        };
        e._configure = function (a, b) {
          var e = this;
          if (b) {
            var f = c("isNode")(b),
              g = typeof b === "string" || c("HTML").isHTML(b);
            this.containsReactComponent = c("isValidReactElement")(b);
            !f &&
              !g &&
              !this.containsReactComponent &&
              c("FBLogger")("layer").warn(
                "Layer must be init with HTML, DOM node or React instance"
              );
            if (g) b = c("HTML")(b).getRootNode();
            else if (this.containsReactComponent) {
              f = document.createElement("div");
              var h = !0;
              d("BootloadedReact").render(b, f, function () {
                e.inform("reactshow"), h || e.updatePosition();
              });
              h = !1;
              b = this._reactContainer = f;
            }
          }
          this._root = this._buildWrapper(a, b);
          a.attributes && c("DOM").setAttributes(this._root, a.attributes);
          a.classNames &&
            a.classNames.forEach(d("CSS").addClass.bind(null, this._root));
          d("CSS").addClass(this._root, "uiLayer");
          a.causalElement && (this._causalElement = c("ge")(a.causalElement));
          a.permanent && (this._permanent = a.permanent);
          a.isStrictlyControlled &&
            (this._isStrictlyControlled = a.isStrictlyControlled);
          d("DataStore").set(this._root, "layer", this);
        };
        e._getDefaultBehaviors = function () {
          return [];
        };
        e.getCausalElement = function () {
          return this._causalElement;
        };
        e.setCausalElement = function (a) {
          this._causalElement = a;
          return this;
        };
        e.getInsertParent = function () {
          return this._insertParent || document.body;
        };
        e.getRoot = function () {
          this._root ||
            (this._destroyed
              ? c("FBLogger")("layer").warn(
                  "No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed."
                )
              : c("FBLogger")("layer").warn(
                  "No root node for this Layer. It has probably not been set."
                ));
          return this._root;
        };
        e.getContentRoot = function () {
          return this.getRoot();
        };
        e._buildWrapper = function (a, b) {
          return b;
        };
        e.setInsertParent = function (a) {
          a &&
            (this._shown &&
              a !== this.getInsertParent() &&
              (c("DOM").appendContent(a, this.getRoot()),
              this.updatePosition()),
            (this._insertParent = a));
          return this;
        };
        e.showAfterDelay = function (a) {
          window.setTimeout(this.show.bind(this), a);
        };
        e.show = function () {
          var b = this;
          if (this._shown) return this;
          var e = this.getRoot();
          e != null || h(0, 5142);
          this.inform("beforeshow");
          c("Style").set(e, "visibility", "hidden");
          c("Style").set(e, "overflow", "hidden");
          d("CSS").show(e);
          c("DOM").appendContent(this.getInsertParent(), e);
          this.updatePosition() !== !1
            ? ((this._shown = !0),
              this.inform("show"),
              a.inform("show", this),
              this._permanent ||
                window.setTimeout(function () {
                  b._shown && i.push(b);
                }, 0))
            : d("CSS").hide(e);
          c("Style").set(e, "visibility", "");
          c("Style").set(e, "overflow", "");
          c("Style").set(e, "opacity", "1");
          this.inform("aftershow");
          return this;
        };
        e.hide = function (a) {
          if (this._isStrictlyControlled) {
            this._shown && this.inform("runhide", a);
            return this;
          }
          return this._hide();
        };
        e._hide = function () {
          if (this._hiding || !this._shown || this.inform("beforehide") === !1)
            return this;
          this._hiding = !0;
          this.inform("starthide") !== !1 && this.finishHide();
          return this;
        };
        e.conditionShow = function (a) {
          return a ? this.show() : this._hide();
        };
        e.finishHide = function () {
          if (this._shown) {
            this._permanent || c("removeFromArray")(i, this);
            this._hiding = !1;
            this._shown = !1;
            var b = this.getRoot();
            b != null || h(0, 5143);
            d("CSS").hide(b);
            this.inform("hide");
            a.inform("hide", this);
          }
        };
        e.isShown = function () {
          return this._shown;
        };
        e.updatePosition = function () {
          return !0;
        };
        e.destroy = function () {
          this.containsReactComponent &&
            d("BootloadedReact").unmountComponentAtNode(this._reactContainer);
          this.finishHide();
          var b = this.getRoot();
          c("DOM").remove(b);
          this.destroyBehaviors();
          this.inform("destroy");
          a.inform("destroy", this);
          d("DataStore").remove(b, "layer");
          this._root = this._causalElement = null;
          this._destroyed = !0;
        };
        a.init = function (a, b) {
          a.init(b);
        };
        a.initAndShow = function (a, b) {
          a.init(b).show();
        };
        a.show = function (a) {
          a.show();
        };
        a.showAfterDelay = function (a, b) {
          a.showAfterDelay(b);
        };
        a.getTopmostLayer = function () {
          return i[i.length - 1];
        };
        a.informBlur = function (a) {
          k = null;
          l = null;
          var b = i.length;
          if (!b) return;
          while (b--) {
            var c = i[b],
              e = c.getContentRoot();
            e != null || h(0, 5144);
            if (d("ContextualThing").containsIncludingLayers(e, a)) return;
            if (c.inform("blur", { target: a }) === !1 || c.isShown()) return;
          }
        };
        return a;
      })(c("mixin")(c("ArbiterMixin"), c("BehaviorsMixin")));
    Object.assign(j, c("ArbiterMixin"));
    Object.assign(j.prototype, {
      _destroyed: !1,
      _initialized: !1,
      _root: null,
      _shown: !1,
      _hiding: !1,
      _causalElement: null,
      _reactContainer: null,
    });
    (a = c("Event")).listen(
      document.documentElement,
      "keydown",
      function (a) {
        if (c("KeyEventController").filterEventTargets(a, "keydown"))
          for (var b = i.length - 1; b >= 0; b--)
            if (i[b].inform("key", a) === !1) return !1;
        return !0;
      },
      a.Priority.URGENT
    );
    var k;
    a.listen(document.documentElement, "mousedown", function (a) {
      k = a.getTarget();
    });
    var l;
    a.listen(document.documentElement, "mouseup", function (a) {
      (l = a.getTarget()),
        c("setImmediate")(function () {
          (k = null), (l = null);
        });
    });
    a.listen(document.documentElement, "click", function (a) {
      var b = k,
        e = l;
      k = null;
      l = null;
      var f = i.length;
      if (!f) return;
      f = a.getTarget();
      if (f !== e || f !== b) return;
      if (!c("DOM").contains(document.documentElement, f)) return;
      if (f.offsetWidth != null && !f.offsetWidth) return;
      if (d("Parent").byClass(f, "generic_dialog")) return;
      j.informBlur(f);
    });
    g["default"] = j;
  },
  98
);
__d(
  "getViewportDimensions",
  ["UserAgent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      var a = null;
      return function () {
        var b = document.body;
        if (b == null) return null;
        (a == null || !b.contains(a)) &&
          ((a = document.createElement("div")),
          (a.style.left = Number.MAX_SAFE_INTEGER + "px"),
          (a.style.width = "100%"),
          (a.style.height = "100%"),
          (a.style.position = "fixed"),
          b.appendChild(a));
        return a;
      };
    })();
    function i() {
      var a;
      document.documentElement && (a = document.documentElement.clientWidth);
      a == null && document.body && (a = document.body.clientWidth);
      return a || 0;
    }
    function j() {
      var a;
      document.documentElement && (a = document.documentElement.clientHeight);
      a == null && document.body && (a = document.body.clientHeight);
      return a || 0;
    }
    function k() {
      return {
        width: window.innerWidth || i(),
        height: window.innerHeight || j(),
      };
    }
    k.withoutScrollbars = function () {
      return c("UserAgent").isPlatform("Android")
        ? k()
        : { width: i(), height: j() };
    };
    k.layout = function () {
      var a,
        b = h();
      return {
        width: (a = b == null ? void 0 : b.clientWidth) != null ? a : i(),
        height: (a = b == null ? void 0 : b.clientHeight) != null ? a : j(),
      };
    };
    g["default"] = k;
  },
  98
);
__d(
  "isFalsey",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a == null || !Boolean(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "PopupWindow",
  [
    "DOMDimensions",
    "DOMQuery",
    "FlowMigrationUtilsForLegacyFiles",
    "Layer",
    "Popup",
    "getViewportDimensions",
    "isFalsey",
  ],
  function (a, b, c, d, e, f, g) {
    var h = {
      allowShrink: !0,
      strategy: "vector",
      timeout: 100,
      widthElement: null,
    };
    function b(a) {
      Object.assign(h, a), window.setInterval(i, h.timeout);
    }
    function i() {
      var a = c("getViewportDimensions")(),
        b = j(),
        e = c("Layer").getTopmostLayer();
      if (e) {
        e = (e = e.getRoot()) == null ? void 0 : e.firstChild;
        e ||
          d("FlowMigrationUtilsForLegacyFiles").invariantViolation(
            "topMostLayer.getRoot().firstChild is null."
          );
        var f = d("DOMDimensions").getElementDimensions(e);
        f.height += d("DOMDimensions").measureElementBox(
          e,
          "height",
          !0,
          !0,
          !0
        );
        f.width += d("DOMDimensions").measureElementBox(e, "width", !0, !0, !0);
        b.height = Math.max(b.height, f.height);
        b.width = Math.max(b.width, f.width);
      }
      e = b.height - a.height;
      f = b.width - a.width;
      f < 0 && c("isFalsey")(h.widthElement) && (f = 0);
      f = f > 1 ? f : 0;
      c("isFalsey")(h.allowShrink) && e < 0 && (e = 0);
      if (e || f)
        try {
          window.console && window.console.firebug,
            window.resizeBy(f, e),
            f && window.moveBy(f / -2, 0);
        } catch (a) {}
    }
    function j() {
      var b = d("DOMDimensions").getDocumentDimensions();
      if (h.strategy === "offsetHeight") {
        var e = document.body;
        if (!e)
          d("FlowMigrationUtilsForLegacyFiles").invariantViolation(
            "document.body is null."
          );
        else {
          b.height = (e = e.offsetHeight) != null ? e : 0;
        }
      }
      if (c("isFalsey")(h.widthElement) && typeof h.widthElement === "string") {
        e = d("DOMQuery").scry(document.body, h.widthElement)[0];
        e && (b.width = d("DOMDimensions").getElementDimensions(e).width);
      }
      e = a.Dialog;
      e && e.max_bottom && e.max_bottom > b.height && (b.height = e.max_bottom);
      return b;
    }
    function e(a, b, c, e) {
      return d("Popup").open(a, c, b, e);
    }
    g._opts = h;
    g.init = b;
    g._resizeCheck = i;
    g._getDocumentSize = j;
    g.open = e;
  },
  98
);
__d(
  "PluginCSSReflowHack",
  ["Style"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      setTimeout(function () {
        var b = "border-bottom-width",
          d = c("Style").get(a, b);
        c("Style").set(a, b, parseInt(d, 10) + 1 + "px");
        c("Style").set(a, b, d);
      }, 1e3);
    }
    g.trigger = a;
  },
  98
);
__d(
  "PluginMessage",
  [
    "Arbiter",
    "CSS",
    "DOM",
    "DOMEventListener",
    "MNCommerceLogger",
    "UnverifiedXD",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "platform/plugins/checkbox_connect/access_token";
    function a() {
      d("DOMEventListener").add(window, "message", function (a) {
        if (/\.facebook\.com$/.test(a.origin) && i().test(a.data)) {
          a = JSON.parse(a.data.substring(24));
          "type" in a &&
            (a.type === "send_to_messenger"
              ? j(a)
              : a.type === "messenger_checkbox"
              ? k(a)
              : a.type === "customer_chat" && m(a));
        }
      });
    }
    function i() {
      return new RegExp("^SOCIALPLUGIN_AUTH_POPUP:");
    }
    function j(a) {
      var b = document.getElementById("send-to-messenger-connect-button"),
        e = document.getElementById("send-to-messenger-disconnect-button"),
        f = document.getElementById("send-to-messenger-identity"),
        g = document.getElementById("send-to-messenger-profile-photo"),
        h = document.getElementById("send-to-messenger-profile-name");
      b != null &&
        e != null &&
        f != null &&
        g != null &&
        h != null &&
        (a.can_personalize === !0 && a.connected === !0
          ? (d("CSS").show(b),
            d("CSS").hide(e),
            l(g, a.profile_photo),
            l(h, a.profile_name),
            d("CSS").show(f),
            d("MNCommerceLogger").logAuthEvent(
              String(a.app_id),
              String(a.page_id),
              String(a.user_id),
              "send_to_messenger_opt_in_client_event"
            ),
            c("UnverifiedXD").send({
              type: "sdk_event",
              event: "send_to_messenger",
              data: JSON.stringify({ event: "opt_in", ref: String(a.ref) }),
            }))
          : (d("CSS").hide(b), d("CSS").show(e), d("CSS").hide(f)));
    }
    function k(a) {
      var b = document.getElementById("plugin-MN-commerce-identity"),
        e = document.getElementById(
          "plugin-MN-commerce-identity-profile-picture"
        ),
        f = document.getElementById("plugin-MN-commerce-identity-profile-name"),
        g = document.getElementById("web-plugin-checkbox-form");
      b != null &&
        e != null &&
        f != null &&
        g != null &&
        (a.can_personalize === !0
          ? (l(e, a.profile_photo),
            l(f, a.profile_name),
            d("CSS").show(b),
            l(g, a.checkbox),
            a.access_token != null && c("Arbiter").inform(h, a.access_token))
          : d("CSS").hide(b));
    }
    function l(a, b) {
      var d = document.createElement("div");
      c("DOM").setContent(d, b);
      b = d.firstChild;
      b != null && a.replaceWith(b);
    }
    function m(a) {
      var b = window.require("Arbiter");
      "ArbiterData" in a
        ? b.inform(a.ArbiterEvent, a.ArbiterData)
        : b.inform(a.ArbiterEvent);
    }
    g.MESSENGER_CHECKBOX_ACCESS_TOKEN_LOGIN_ARBITER = h;
    g.listen = a;
  },
  98
);
__d(
  "PluginConfirm",
  [
    "DOMEvent",
    "DOMEventListener",
    "PlatformVersioning",
    "PluginMessage",
    "PopupWindow",
    "URI",
  ],
  function (a, b, c, d, e, f) {
    var g;
    function h(a) {
      Object.assign(this, {
        plugin: a,
        confirm_params: {},
        return_params: (g || (g = b("URI"))).getRequestURI().getQueryData(),
      }),
        this.addReturnParams({ ret: "sentry" }),
        delete this.return_params.hash;
    }
    Object.assign(h.prototype, {
      addConfirmParams: function (a) {
        Object.assign(this.confirm_params, a);
      },
      addReturnParams: function (a) {
        Object.assign(this.return_params, a);
        return this;
      },
      start: function () {
        var a = b("PlatformVersioning")
          .versionAwareURI(
            new (g || (g = b("URI")))("/plugins/error/confirm/" + this.plugin)
          )
          .addQueryData(this.confirm_params)
          .addQueryData({
            secure: g.getRequestURI().isSecure(),
            plugin: this.plugin,
            return_params: JSON.stringify(this.return_params),
          });
        this.popup = b("PopupWindow").open(a.toString(), 320, 486);
        b("PluginMessage").listen();
        return this;
      },
    });
    h.starter = function (a, b, c) {
      a = new h(a);
      a.addConfirmParams(b || {});
      a.addReturnParams(c || {});
      return a.start.bind(a);
    };
    h.listen = function (a, c, d, e) {
      b("DOMEventListener").add(a, "click", function (a) {
        new (b("DOMEvent"))(a).kill(), h.starter(c, d, e)();
      });
    };
    e.exports = h;
  },
  null
);
__d(
  "PluginPageActionLogger",
  ["BanzaiLogger", "DOMEventListener", "DOMQuery", "ODS"],
  function (a, b, c, d, e, f, g) {
    var h;
    function a(a, b, e, f, g, i, j, k, l, m) {
      function n(g, i) {
        g = d("DOMQuery").scry(f, "." + g)[0];
        if (!g) return;
        d("DOMEventListener").add(g, "click", function (f) {
          (h || (h = d("ODS"))).bumpEntityKey(
            2966,
            "platform_www",
            "platform.plugin.page.action"
          ),
            c("BanzaiLogger").log("PagePluginActionsLoggerConfig", {
              page_id: b,
              page_plugin_action: i,
              page_plugin_action_type: "click",
              referer_url: e,
              is_sdk: a,
            });
        });
      }
      n(g, "page_like");
      n(i, "page_unlike");
      n(j, "page_avatar");
      n(k, "page_permalink");
      n(l, "page_share");
      n(m, "page_cta");
    }
    g.initializeClickLoggers = a;
  },
  98
);
__d(
  "getVendorPrefixedName",
  ["invariant", "ExecutionEnvironment", "UserAgent", "camelize"],
  function (a, b, c, d, e, f, g, h) {
    var i,
      j = {},
      k = ["Webkit", "ms", "Moz", "O"],
      l = new RegExp("^(" + k.join("|") + ")"),
      m = (i || (i = c("ExecutionEnvironment"))).canUseDOM
        ? document.createElement("div").style
        : {};
    function n(a) {
      for (var b = 0; b < k.length; b++) {
        var c = k[b] + a;
        if (c in m) return c;
      }
      return null;
    }
    function o(a) {
      switch (a) {
        case "lineClamp":
          return c("UserAgent").isEngine("WebKit >= 315.14.2") ||
            c("UserAgent").isEngine("Blink")
            ? "WebkitLineClamp"
            : null;
        default:
          return null;
      }
    }
    function a(a) {
      var b = c("camelize")(a);
      if (j[b] === void 0) {
        var d = b.charAt(0).toUpperCase() + b.slice(1);
        l.test(d) && h(0, 957, a);
        (i || (i = c("ExecutionEnvironment"))).canUseDOM
          ? (j[b] = b in m ? b : n(d))
          : (j[b] = o(b));
      }
      return j[b];
    }
    g["default"] = a;
  },
  98
);
__d(
  "BrowserSupportCore",
  ["getVendorPrefixedName"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      hasCSSAnimations: function () {
        return !!b("getVendorPrefixedName")("animationName");
      },
      hasCSSTransforms: function () {
        return !!b("getVendorPrefixedName")("transform");
      },
      hasCSS3DTransforms: function () {
        return !!b("getVendorPrefixedName")("perspective");
      },
      hasCSSTransitions: function () {
        return !!b("getVendorPrefixedName")("transition");
      },
    };
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "BrowserSupport",
  [
    "BrowserSupportCore",
    "ExecutionEnvironment",
    "UserAgent_DEPRECATED",
    "getVendorPrefixedName",
    "memoize",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j,
      k = null;
    function l() {
      if ((j || (j = c("ExecutionEnvironment"))).canUseDOM) {
        k || (k = document.createElement("div"));
        return k;
      }
      return null;
    }
    b = function (a) {
      return c("memoize")(function () {
        var b = l();
        return !b ? !1 : a(b);
      });
    };
    e = b(function (a) {
      a.style.cssText =
        "position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";
      return /sticky/.test(a.style.position);
    });
    f = b(function (a) {
      return (
        "scrollSnapType" in a.style ||
        "webkitScrollSnapType" in a.style ||
        "msScrollSnapType" in a.style
      );
    });
    var m = b(function (a) {
      return "scrollBehavior" in a.style;
    });
    b = b(function (a) {
      if (!("pointerEvents" in a.style)) return !1;
      a.style.cssText = "pointer-events:auto";
      return a.style.pointerEvents === "auto";
    });
    var n = (h = c("memoize"))(function () {
        return (
          !(
            d("UserAgent_DEPRECATED").webkit() &&
            !d("UserAgent_DEPRECATED").chrome() &&
            d("UserAgent_DEPRECATED").windows()
          ) &&
          "FileList" in window &&
          "FormData" in window
        );
      }),
      o = h(function () {
        return !!a.blob;
      }),
      p = h(function () {
        return (
          (j || (j = c("ExecutionEnvironment"))).canUseDOM &&
          document.createElementNS &&
          document
            .createElementNS("http://www.w3.org/2000/svg", "foreignObject")
            .toString()
            .includes("SVGForeignObject")
        );
      }),
      q = h(function () {
        return !!window.MutationObserver;
      });
    h = h(function () {
      var a = {
          transition: "transitionend",
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "mozTransitionEnd",
          OTransition: "oTransitionEnd",
        },
        b = c("getVendorPrefixedName")("transition");
      return a[b] || null;
    });
    var r = function () {
      return !!window.CanvasRenderingContext2D;
    };
    g.hasCSSAnimations = (i = c("BrowserSupportCore")).hasCSSAnimations;
    g.hasCSSTransforms = i.hasCSSTransforms;
    g.hasCSS3DTransforms = i.hasCSS3DTransforms;
    g.hasCSSTransitions = i.hasCSSTransitions;
    g.hasPositionSticky = e;
    g.hasScrollSnapPoints = f;
    g.hasScrollBehavior = m;
    g.hasPointerEvents = b;
    g.hasFileAPI = n;
    g.hasBlobFactory = o;
    g.hasSVGForeignObject = p;
    g.hasMutationObserver = q;
    g.getTransitionEndEvent = h;
    g.hasCanvasRenderingContext2D = r;
  },
  98
);
__d(
  "randomInt",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    function a(a, b) {
      a = b === void 0 ? [0, a] : [a, b];
      b = a[0];
      a = a[1];
      a > b || h(0, 1180, a, b);
      return Math.floor(b + Math.random() * (a - b));
    }
    g["default"] = a;
  },
  98
);
__d(
  "React.classic",
  ["cr:1292365"],
  function (a, b, c, d, e, f) {
    e.exports = b("cr:1292365");
  },
  null
);
__d(
  "ReactDOM",
  ["cr:4865", "err"],
  function (a, b, c, d, e, f, g) {
    var h, i, j, k, l;
    function m() {
      var a = c("err")(
        "This React API is not implemented in this environment. Use ReactDOMComet instead."
      );
      throw a;
    }
    function n() {
      var a = c("err")(
        "This React API is not implemented in this environment. Use ReactDOMLegacy_DEPRECATED instead."
      );
      throw a;
    }
    d =
      (a = b("cr:4865").createRoot) != null
        ? a
        : function () {
            return m();
          };
    f =
      (e = b("cr:4865").hydrateRoot) != null
        ? e
        : function () {
            return m();
          };
    e =
      (a = b("cr:4865").unstable_createEventHandleInternal) != null
        ? a
        : function () {
            return m();
          };
    a =
      (a = b("cr:4865").findDOMNode) != null
        ? a
        : function () {
            return n();
          };
    h =
      (h = b("cr:4865").render) != null
        ? h
        : function () {
            return n();
          };
    i =
      (i = b("cr:4865").legacyRender_DEPRECATED) != null
        ? i
        : function () {
            return n();
          };
    j =
      (j = b("cr:4865").renderForAds) != null
        ? j
        : function () {
            return n();
          };
    k =
      (k = b("cr:4865").unmountComponentAtNode) != null
        ? k
        : function () {
            return n();
          };
    l =
      (l = b("cr:4865").unstable_renderSubtreeIntoContainer) != null
        ? l
        : function () {
            return n();
          };
    g.createRoot = d;
    g.hydrateRoot = f;
    g.unstable_createEventHandle = e;
    g.findDOMNode = a;
    g.render = h;
    g.legacyRender_DEPRECATED = i;
    g.renderForAds = j;
    g.unmountComponentAtNode = k;
    g.unstable_renderSubtreeIntoContainer = l;
    g.createPortal = b("cr:4865").createPortal;
    g.flushSync = b("cr:4865").flushSync;
    g.unstable_batchedUpdates = b("cr:4865").unstable_batchedUpdates;
    g.version = b("cr:4865").version;
    g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
      b("cr:4865").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  },
  98
);
__d(
  "ReactFeatureFlags",
  ["gkx", "qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    a = !1;
    b = !1;
    d = !0;
    e = !1;
    var k = (f = c("gkx"))("21062"),
      l = f("21063"),
      m = f("21064"),
      n = f("21065"),
      o = f("21066"),
      p = f("9861"),
      q = !f("21068"),
      r = f("6255"),
      s = f("7329"),
      t = f("33056"),
      u = c("qex")._("644") === !0,
      v = f("21069"),
      w = f("21070"),
      x = !1,
      y = !1;
    f = f("21071");
    h = c("gkx")("21072") || ((h = c("qex")._("104")) != null ? h : !1);
    i = (i = c("qex")._("128")) != null ? i : 250;
    j = (j = c("qex")._("344")) != null ? j : 5e3;
    c = (c = c("qex")._("388")) != null ? c : 5e3;
    g.disableInputAttributeSyncing = a;
    g.alwaysThrottleRetries = b;
    g.enableDO_NOT_USE_disableStrictPassiveEffect = d;
    g.enableUseRefAccessWarning = e;
    g.enableDeferRootSchedulingToMicrotask = k;
    g.enableTrustedTypesIntegration = l;
    g.enableLegacyFBSupport = m;
    g.enableUnifiedSyncLane = n;
    g.disableIEWorkarounds = o;
    g.enableRenderableContext = p;
    g.diffInCommitPhase = q;
    g.useModernStrictMode = r;
    g.enableRefAsProp = s;
    g.enableClientRenderFallbackOnTextMismatch = t;
    g.enableLazyContextPropagation = u;
    g.enableSchedulingProfiler = v;
    g.enableProfilerNestedUpdateScheduledHook = w;
    g.enableTransitionTracing = x;
    g.disableSchedulerTimeoutInWorkLoop = y;
    g.enableInfiniteRenderLoopDetection = f;
    g.enableRetryLaneExpiration = h;
    g.syncLaneExpirationMs = i;
    g.transitionLaneExpirationMs = j;
    g.retryLaneExpirationMs = c;
  },
  98
);
__d(
  "React-prod.classic",
  ["ReactFeatureFlags"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Symbol["for"]("react.element"),
      h = Symbol["for"]("react.portal"),
      i = Symbol["for"]("react.fragment"),
      j = Symbol["for"]("react.strict_mode"),
      k = Symbol["for"]("react.profiler"),
      l = Symbol["for"]("react.provider"),
      m = Symbol["for"]("react.consumer"),
      n = Symbol["for"]("react.context"),
      o = Symbol["for"]("react.forward_ref"),
      p = Symbol["for"]("react.suspense"),
      q = Symbol["for"]("react.suspense_list"),
      r = Symbol["for"]("react.memo"),
      s = Symbol["for"]("react.lazy"),
      t = Symbol["for"]("react.scope"),
      u = Symbol["for"]("react.debug_trace_mode"),
      v = Symbol["for"]("react.offscreen"),
      w = Symbol["for"]("react.legacy_hidden"),
      x = Symbol["for"]("react.cache"),
      y = Symbol["for"]("react.tracing_marker"),
      z = typeof Symbol === "function" ? Symbol.iterator : "@@iterator";
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = (z && a[z]) || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      C = Object.assign,
      D = {};
    function a(a, b, c) {
      (this.props = a),
        (this.context = b),
        (this.refs = D),
        (this.updater = c || B);
    }
    a.prototype.isReactComponent = {};
    a.prototype.setState = function (a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    a.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function c() {}
    c.prototype = a.prototype;
    function d(a, b, c) {
      (this.props = a),
        (this.context = b),
        (this.refs = D),
        (this.updater = c || B);
    }
    c = d.prototype = new c();
    c.constructor = d;
    C(c, a.prototype);
    c.isPureReactComponent = !0;
    var E = Array.isArray,
      F = b("ReactFeatureFlags").enableTransitionTracing,
      G = b("ReactFeatureFlags").enableRenderableContext,
      H = b("ReactFeatureFlags").enableRefAsProp,
      I = { current: null },
      J = { current: null },
      K = { transition: null };
    c = {
      ReactCurrentDispatcher: I,
      ReactCurrentCache: J,
      ReactCurrentBatchConfig: K,
      ReactCurrentOwner: { current: null },
    };
    var L = Object.prototype.hasOwnProperty,
      M = c.ReactCurrentOwner;
    function N(a, b, c, d, e, f, h) {
      H && ((c = h.ref), (c = void 0 !== c ? c : null));
      return { $$typeof: g, type: a, key: b, ref: c, props: h, _owner: f };
    }
    function e(a, b, c) {
      var d = {},
        e = null,
        f = null;
      void 0 !== c && (e = "" + c);
      void 0 !== b.key && (e = "" + b.key);
      void 0 === b.ref || H || (f = b.ref);
      for (c in b)
        L.call(b, c) && "key" !== c && (H || "ref" !== c) && (d[c] = b[c]);
      if (a && a.defaultProps)
        for (c in ((b = a.defaultProps), b)) void 0 === d[c] && (d[c] = b[c]);
      return N(a, e, f, void 0, void 0, M.current, d);
    }
    function O(a, b, c) {
      var d,
        e = {},
        f = null,
        g = null;
      if (null != b)
        for (d in (void 0 === b.ref || H || (g = b.ref),
        void 0 !== b.key && (f = "" + b.key),
        b))
          L.call(b, d) &&
            "key" !== d &&
            (H || "ref" !== d) &&
            "__self" !== d &&
            "__source" !== d &&
            (e[d] = b[d]);
      var h = arguments.length - 2;
      if (1 === h) e.children = c;
      else if (1 < h) {
        for (var i = Array(h), j = 0; j < h; j++) i[j] = arguments[j + 2];
        e.children = i;
      }
      if (a && a.defaultProps)
        for (d in ((h = a.defaultProps), h)) void 0 === e[d] && (e[d] = h[d]);
      return N(a, f, g, void 0, void 0, M.current, e);
    }
    function P(a, b) {
      return N(a.type, b, H ? null : a.ref, void 0, void 0, a._owner, a.props);
    }
    function Q(a) {
      return "object" === typeof a && null !== a && a.$$typeof === g;
    }
    function R(a) {
      var b = { "=": "=0", ":": "=2" };
      return (
        "$" +
        a.replace(/[=:]/g, function (a) {
          return b[a];
        })
      );
    }
    var S = /\/+/g;
    function T(a, b) {
      return "object" === typeof a && null !== a && null != a.key
        ? R("" + a.key)
        : b.toString(36);
    }
    function U() {}
    function V(a) {
      switch (a.status) {
        case "fulfilled":
          return a.value;
        case "rejected":
          throw a.reason;
        default:
          switch (
            ("string" === typeof a.status
              ? a.then(U, U)
              : ((a.status = "pending"),
                a.then(
                  function (b) {
                    "pending" === a.status &&
                      ((a.status = "fulfilled"), (a.value = b));
                  },
                  function (b) {
                    "pending" === a.status &&
                      ((a.status = "rejected"), (a.reason = b));
                  }
                )),
            a.status)
          ) {
            case "fulfilled":
              return a.value;
            case "rejected":
              throw a.reason;
          }
      }
      throw a;
    }
    function W(a, b, c, d, e) {
      var f = typeof a;
      ("undefined" === f || "boolean" === f) && (a = null);
      var i = !1;
      if (null === a) i = !0;
      else
        switch (f) {
          case "string":
          case "number":
            i = !0;
            break;
          case "object":
            switch (a.$$typeof) {
              case g:
              case h:
                i = !0;
                break;
              case s:
                return (i = a._init), W(i(a._payload), b, c, d, e);
            }
        }
      if (i)
        return (
          (e = e(a)),
          (i = "" === d ? "." + T(a, 0) : d),
          E(e)
            ? ((c = ""),
              null != i && (c = i.replace(S, "$&/") + "/"),
              W(e, b, c, "", function (a) {
                return a;
              }))
            : null != e &&
              (Q(e) &&
                (e = P(
                  e,
                  c +
                    (!e.key || (a && a.key === e.key)
                      ? ""
                      : ("" + e.key).replace(S, "$&/") + "/") +
                    i
                )),
              b.push(e)),
          1
        );
      i = 0;
      var j = "" === d ? "." : d + ":";
      if (E(a))
        for (var k = 0; k < a.length; k++)
          (d = a[k]), (f = j + T(d, k)), (i += W(d, b, c, f, e));
      else if (((k = A(a)), "function" === typeof k))
        for (a = k.call(a), k = 0; !(d = a.next()).done; )
          (d = d.value), (f = j + T(d, k++)), (i += W(d, b, c, f, e));
      else if ("object" === f) {
        if ("function" === typeof a.then) return W(V(a), b, c, d, e);
        b = String(a);
        throw Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === b
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : b) +
            "). If you meant to render a collection of children, use an array instead."
        );
      }
      return i;
    }
    function X(a, b, c) {
      if (null == a) return a;
      var d = [],
        e = 0;
      W(a, d, "", "", function (a) {
        return b.call(c, a, e++);
      });
      return d;
    }
    function Y(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(
          function (b) {
            (0 === a._status || -1 === a._status) &&
              ((a._status = 1), (a._result = b));
          },
          function (b) {
            (0 === a._status || -1 === a._status) &&
              ((a._status = 2), (a._result = b));
          }
        );
        -1 === a._status && ((a._status = 0), (a._result = b));
      }
      if (1 === a._status) return a._result["default"];
      throw a._result;
    }
    function Z() {}
    var $ = "function" === typeof reportError ? reportError : function (a) {};
    f.Children = {
      map: X,
      forEach: function (a, b, c) {
        X(
          a,
          function () {
            b.apply(this, arguments);
          },
          c
        );
      },
      count: function (a) {
        var b = 0;
        X(a, function () {
          b++;
        });
        return b;
      },
      toArray: function (a) {
        return (
          X(a, function (a) {
            return a;
          }) || []
        );
      },
      only: function (a) {
        if (!Q(a))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return a;
      },
    };
    f.Component = a;
    f.Fragment = i;
    f.Profiler = k;
    f.PureComponent = d;
    f.StrictMode = j;
    f.Suspense = p;
    f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c;
    f.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    f.cache = function (a) {
      return function () {
        return a.apply(null, arguments);
      };
    };
    f.cloneElement = function (a, b, c) {
      if (null === a || void 0 === a)
        throw Error(
          "The argument must be a React element, but you passed " + a + "."
        );
      var d = C({}, a.props),
        e = a.key,
        f = H ? null : a.ref,
        g = a._owner;
      if (null != b) {
        void 0 !== b.ref && (H || (f = b.ref), (g = M.current));
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var h = a.type.defaultProps;
        for (i in b)
          !L.call(b, i) ||
            "key" === i ||
            (!H && "ref" === i) ||
            "__self" === i ||
            "__source" === i ||
            (H && "ref" === i && void 0 === b.ref) ||
            (d[i] = void 0 === b[i] && void 0 !== h ? h[i] : b[i]);
      }
      var i = arguments.length - 2;
      if (1 === i) d.children = c;
      else if (1 < i) {
        h = Array(i);
        for (var j = 0; j < i; j++) h[j] = arguments[j + 2];
        d.children = h;
      }
      return N(a.type, e, f, void 0, void 0, g, d);
    };
    f.createContext = function (a) {
      a = {
        $$typeof: n,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      };
      G
        ? ((a.Provider = a), (a.Consumer = { $$typeof: m, _context: a }))
        : ((a.Provider = { $$typeof: l, _context: a }), (a.Consumer = a));
      return a;
    };
    f.createElement = O;
    f.createFactory = function (a) {
      var b = O.bind(null, a);
      b.type = a;
      return b;
    };
    f.createRef = function () {
      return { current: null };
    };
    f.experimental_useEffectEvent = function (a) {
      return I.current.useEffectEvent(a);
    };
    f.forwardRef = function (a) {
      return { $$typeof: o, render: a };
    };
    f.isValidElement = Q;
    f.jsx = e;
    f.jsxDEV = void 0;
    f.jsxs = e;
    f.lazy = function (a) {
      return { $$typeof: s, _payload: { _status: -1, _result: a }, _init: Y };
    };
    f.memo = function (a, b) {
      return { $$typeof: r, type: a, compare: void 0 === b ? null : b };
    };
    f.startTransition = function (a, b) {
      var c = K.transition,
        d = new Set();
      K.transition = { _callbacks: d };
      var e = K.transition;
      F &&
        void 0 !== b &&
        void 0 !== b.name &&
        ((K.transition.name = b.name), (K.transition.startTime = -1));
      try {
        var f = a();
        "object" === typeof f &&
          null !== f &&
          "function" === typeof f.then &&
          (d.forEach(function (a) {
            return a(e, f);
          }),
          f.then(Z, $));
      } catch (a) {
        $(a);
      } finally {
        K.transition = c;
      }
    };
    f.unstable_Activity = v;
    f.unstable_Cache = x;
    f.unstable_DebugTracingMode = u;
    f.unstable_LegacyHidden = w;
    f.unstable_Scope = t;
    f.unstable_SuspenseList = q;
    f.unstable_TracingMarker = y;
    f.unstable_getCacheForType = function (a) {
      var b = J.current;
      return b ? b.getCacheForType(a) : a();
    };
    f.unstable_getCacheSignal = function () {
      var a = J.current;
      return a
        ? a.getCacheSignal()
        : ((a = new AbortController()),
          a.abort(
            Error(
              "This CacheSignal was requested outside React which means that it is immediately aborted."
            )
          ),
          a.signal);
    };
    f.unstable_useCacheRefresh = function () {
      return I.current.useCacheRefresh();
    };
    f.unstable_useMemoCache = function (a) {
      return I.current.useMemoCache(a);
    };
    f.use = function (a) {
      return I.current.use(a);
    };
    f.useCallback = function (a, b) {
      return I.current.useCallback(a, b);
    };
    f.useContext = function (a) {
      return I.current.useContext(a);
    };
    f.useDebugValue = function () {};
    f.useDeferredValue = function (a, b) {
      return I.current.useDeferredValue(a, b);
    };
    f.useEffect = function (a, b) {
      return I.current.useEffect(a, b);
    };
    f.useId = function () {
      return I.current.useId();
    };
    f.useImperativeHandle = function (a, b, c) {
      return I.current.useImperativeHandle(a, b, c);
    };
    f.useInsertionEffect = function (a, b) {
      return I.current.useInsertionEffect(a, b);
    };
    f.useLayoutEffect = function (a, b) {
      return I.current.useLayoutEffect(a, b);
    };
    f.useMemo = function (a, b) {
      return I.current.useMemo(a, b);
    };
    f.useOptimistic = function (a, b) {
      return I.current.useOptimistic(a, b);
    };
    f.useReducer = function (a, b, c) {
      return I.current.useReducer(a, b, c);
    };
    f.useRef = function (a) {
      return I.current.useRef(a);
    };
    f.useState = function (a) {
      return I.current.useState(a);
    };
    f.useSyncExternalStore = function (a, b, c) {
      return I.current.useSyncExternalStore(a, b, c);
    };
    f.useTransition = function () {
      return I.current.useTransition();
    };
    f.version = "18.3.0-www-classic-d4b2bc87";
  },
  null
);
__d(
  "SubscriptionsHandler",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      return a.remove || a.reset || a.unsubscribe || a.cancel || a.dispose;
    }
    function j(a) {
      i(a).call(a);
    }
    a = (function () {
      function a() {
        this.$1 = [];
      }
      var b = a.prototype;
      b.addSubscriptions = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        b.every(i) || h(0, 3659);
        this.$1 != null ? (this.$1 = this.$1.concat(b)) : b.forEach(j);
      };
      b.engage = function () {
        this.$1 == null && (this.$1 = []);
      };
      b.release = function () {
        this.$1 != null && (this.$1.forEach(j), (this.$1 = null));
      };
      b.releaseOne = function (a) {
        var b = this.$1;
        if (b == null) return;
        var c = b.indexOf(a);
        c !== -1 && (j(a), b.splice(c, 1), b.length === 0 && (this.$1 = null));
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "Base64",
  [],
  function (a, b, c, d, e, f) {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function h(a) {
      a = (a.charCodeAt(0) << 16) | (a.charCodeAt(1) << 8) | a.charCodeAt(2);
      return String.fromCharCode(
        g.charCodeAt(a >>> 18),
        g.charCodeAt((a >>> 12) & 63),
        g.charCodeAt((a >>> 6) & 63),
        g.charCodeAt(a & 63)
      );
    }
    var i =
      ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";
    function j(a) {
      a =
        (i.charCodeAt(a.charCodeAt(0) - 43) << 18) |
        (i.charCodeAt(a.charCodeAt(1) - 43) << 12) |
        (i.charCodeAt(a.charCodeAt(2) - 43) << 6) |
        i.charCodeAt(a.charCodeAt(3) - 43);
      return String.fromCharCode(a >>> 16, (a >>> 8) & 255, a & 255);
    }
    var k = {
      encode: function (a) {
        a = unescape(encodeURI(a));
        var b = (a.length + 2) % 3;
        a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
        return a.slice(0, a.length + b - 2) + "==".slice(b);
      },
      decode: function (a) {
        a = a.replace(/[^A-Za-z0-9+\/]/g, "");
        var b = (a.length + 3) & 3;
        a = (a + "AAA".slice(b)).replace(/..../g, j);
        a = a.slice(0, a.length + b - 3);
        try {
          return decodeURIComponent(escape(a));
        } catch (a) {
          throw new Error("Not valid UTF-8");
        }
      },
      encodeObject: function (a) {
        return k.encode(JSON.stringify(a));
      },
      decodeObject: function (a) {
        return JSON.parse(k.decode(a));
      },
      encodeNums: function (a) {
        return String.fromCharCode.apply(
          String,
          a.map(function (a) {
            return g.charCodeAt(
              (a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63
            );
          })
        );
      },
    };
    a = k;
    f["default"] = a;
  },
  66
);
__d(
  "CometLruCache",
  ["recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      function a(a) {
        (this.$1 = a),
          a <= 0 &&
            c("recoverableViolation")(
              "CometLruCache: Unable to create instance of cache with zero or negative capacity.",
              "CometLruCache"
            ),
          (this.$2 = new Map());
      }
      var b = a.prototype;
      b.set = function (a, b) {
        this.$2["delete"](a);
        this.$2.set(a, b);
        if (this.$2.size > this.$1) {
          a = this.$2.keys().next();
          a.done || this.$2["delete"](a.value);
        }
      };
      b.get = function (a) {
        var b = this.$2.get(a);
        b != null && (this.$2["delete"](a), this.$2.set(a, b));
        return b;
      };
      b.has = function (a) {
        return this.$2.has(a);
      };
      b["delete"] = function (a) {
        this.$2["delete"](a);
      };
      b.size = function () {
        return this.$2.size;
      };
      b.capacity = function () {
        return this.$1 - this.$2.size;
      };
      b.clear = function () {
        this.$2.clear();
      };
      return a;
    })();
    function a(a) {
      return new h(a);
    }
    g.create = a;
  },
  98
);
__d(
  "structuredClone",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = (a = window) == null ? void 0 : a.structuredClone;
    f["default"] = b;
  },
  66
);
__d(
  "ConstUriUtils",
  [
    "CometLruCache",
    "ExecutionEnvironment",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "URIRFC3986",
    "URISchemes",
    "UriNeedRawQuerySVConfig",
    "isSameOrigin",
    "recoverableViolation",
    "structuredClone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k,
      l = d("CometLruCache").create(5e3),
      m = new RegExp("(^|\\.)facebook\\.com$", "i"),
      n = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
      o = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
      ),
      p = c("UriNeedRawQuerySVConfig").uris.map(function (a) {
        return { domain: a, valid: w(a) };
      }),
      q = [],
      r = [];
    function s(a, b) {
      var d = {};
      if (a != null)
        for (
          var a = a.entries(),
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          d[g[0]] = g[1];
        }
      else
        c("FBLogger")("ConstUriUtils").warn(
          "Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue."
        );
      return b.serialize(d);
    }
    function t(a, b, d) {
      var e = k || (k = c("PHPQuerySerializer"));
      if (["http", "https"].includes(b) && u(a)) {
        if (a.includes("doubleclick.net") && d != null && !d.startsWith("http"))
          return e;
        e = c("PHPQuerySerializerNoEncoding");
      }
      return e;
    }
    function u(a) {
      return (
        a != null &&
        p.some(function (b) {
          return b.valid && v(a, b.domain);
        })
      );
    }
    function v(a, b) {
      if (b === "" || a === "") return !1;
      if (a.endsWith(b)) {
        b = a.length - b.length - 1;
        if (b === -1 || a[b] === ".") return !0;
      }
      return !1;
    }
    function w(a) {
      return !o.test(a);
    }
    function x(a, b) {
      var c =
        b.protocol != null && b.protocol !== "" ? b.protocol : a.getProtocol();
      c = b.domain != null ? t(b.domain, c) : a.getSerializer();
      c = {
        domain: a.getDomain(),
        fragment: a.getFragment(),
        fragmentSeparator: a.hasFragmentSeparator(),
        isGeneric: a.isGeneric(),
        originalRawQuery: a.getOriginalRawQuery(),
        path: a.getPath(),
        port: a.getPort(),
        protocol: a.getProtocol(),
        queryParams: a.getQueryParams(),
        serializer: c,
        subdomain: a.getSubdomain(),
      };
      a = babelHelpers["extends"]({}, c, b);
      c = b.queryParams != null && b.queryParams.size !== 0;
      return C.getUribyObject(a, c);
    }
    function y(a, b, c, d) {
      c === void 0 && (c = !1);
      var e =
          a.protocol !== "" ? a.protocol + ":" + (a.isGeneric ? "" : "//") : "",
        f = a.domain !== "" ? a.domain : "",
        g = a.port !== "" ? ":" + a.port : "",
        h =
          a.path !== ""
            ? a.path
            : (e !== "" && e !== "mailto:") || f !== "" || g !== ""
            ? "/"
            : "";
      c = z(
        f,
        a.originalRawQuery,
        a.queryParams,
        b,
        c,
        (b = d) != null ? b : a.serializer
      );
      d = c.length > 0 ? "?" : "";
      b = a.fragment !== "" ? "#" + a.fragment : "";
      a = a.fragment === "" && a.fragmentSeparator ? "#" : "";
      return "" + e + f + g + h + d + c + a + b;
    }
    function z(a, b, c, d, e, f) {
      e === void 0 && (e = !1);
      if (!d && (e || u(a))) {
        return (d = b) != null ? d : "";
      }
      return s(c, f);
    }
    function A(a) {
      var b = a.trim();
      b = (h || (h = d("URIRFC3986"))).parse(b) || {
        fragment: null,
        host: null,
        isGenericURI: !1,
        query: null,
        scheme: null,
        userinfo: null,
      };
      var c = b.host || "",
        e = c.split(".");
      e = e.length >= 3 ? e[0] : "";
      var f = t(c, b.scheme || "", b.query),
        g = f.deserialize(b.query || "") || {};
      g = new Map(Object.entries(g));
      g = B(
        {
          domain: c,
          fragment: b.fragment || "",
          fragmentSeparator: b.fragment === "",
          isGeneric: b.isGenericURI,
          originalRawQuery: b.query,
          path: b.path || "",
          port: b.port != null ? String(b.port) : "",
          protocol: (b.scheme || "").toLowerCase(),
          queryParams: g,
          serializer: f,
          subdomain: e,
          userInfo: (c = b == null ? void 0 : b.userinfo) != null ? c : "",
        },
        a
      );
      return g;
    }
    function B(a, b, c, e) {
      c === void 0 &&
        (c = (j || (j = d("URISchemes"))).Options.INCLUDE_DEFAULTS);
      var f = {
          components: babelHelpers["extends"]({}, a),
          error: "",
          valid: !0,
        },
        g = f.components;
      if (!(j || (j = d("URISchemes"))).isAllowed(a.protocol, c, e)) {
        f.valid = !1;
        f.error =
          'The URI protocol "' + String(a.protocol) + '" is not allowed.';
        return f;
      }
      if (!w(a.domain || "")) {
        f.valid = !1;
        f.error = "This is an unsafe domain " + String(a.domain);
        return f;
      }
      g.port = (a.port != null && String(a.port)) || "";
      if (Boolean(a.userInfo)) {
        f.valid = !1;
        f.error =
          "Invalid URI: (userinfo is not allowed in a URI " +
          String(a.userInfo) +
          ")";
        return f;
      }
      c = b != null && b !== "" ? b : y(g, !1);
      if (g.domain === "" && g.path.indexOf("\\") !== -1) {
        f.valid = !1;
        f.error =
          "Invalid URI: (no domain but multiple back-slashes " + c + ")";
        return f;
      }
      if (!g.protocol && n.test(c)) {
        f.valid = !1;
        f.error = "Invalid URI: (unsafe protocol-relative URI " + c + ")";
        return f;
      }
      if (g.domain !== "" && g.path !== "" && !g.path.startsWith("/")) {
        f.valid = !1;
        f.error =
          "Invalid URI: (domain and pathwhere path lacks leading slash " +
          c +
          ")";
        return f;
      }
      return f;
    }
    var C = (function () {
      function a(a) {
        (this.queryParams = new Map()),
          (this.domain = a.domain),
          (this.fragment = a.fragment),
          (this.fragmentSeparator = Boolean(a.fragmentSeparator)),
          (this.isGenericProtocol = Boolean(a.isGeneric)),
          (this.path = a.path),
          (this.originalRawQuery = a.originalRawQuery),
          (this.port = a.port),
          (this.protocol = a.protocol),
          (this.queryParams = a.queryParams),
          (this.serializer = a.serializer),
          (this.subdomain = a.subdomain);
      }
      var b = a.prototype;
      b.addQueryParam = function (a, b) {
        if (Boolean(a)) {
          var c = this.getQueryParams();
          c.set(a, b);
          return x(this, { queryParams: c });
        }
        return this;
      };
      b.addQueryParams = function (a) {
        if (a.size > 0) {
          var b = this.getQueryParams();
          a.forEach(function (a, c) {
            b.set(c, a);
          });
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.addQueryParamString = function (a) {
        if (Boolean(a)) {
          a = a.startsWith("?") ? a.slice(1) : a;
          var b = this.getQueryParams();
          a.split("&").map(function (a) {
            a = a.split("=");
            var c = a[0];
            a = a[1];
            b.set(c, a);
          });
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.addTrailingSlash = function () {
        var a = this.getPath();
        return a.length > 0 && a[a.length - 1] !== "/"
          ? this.setPath(a + "/")
          : this;
      };
      b.getDomain = function () {
        return this.domain;
      };
      b.getFragment = function () {
        return this.fragment;
      };
      b.getOrigin = function () {
        var a = this.getPort();
        return (
          this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        );
      };
      b.getOriginalRawQuery = function () {
        return this.originalRawQuery;
      };
      b.getPath = function () {
        return this.path;
      };
      b.getPort = function () {
        return this.port;
      };
      b.getProtocol = function () {
        return this.protocol.toLowerCase();
      };
      b.getQualifiedUri = function () {
        if (!this.getDomain()) {
          var b;
          b =
            (b = typeof window !== "undefined" ? window : self) == null
              ? void 0
              : (b = b.location) == null
              ? void 0
              : b.href;
          if (b == null) {
            c("FBLogger")("ConstUriUtils")
              .blameToPreviousFile()
              .warn(
                "Cannot get qualified URI for current URI as there is no current location"
              );
            return null;
          }
          (i || (i = c("ExecutionEnvironment"))).isInWorker &&
            b.startsWith("blob:") &&
            (b = b.substring(5, b.length));
          b = b.slice(0, b.indexOf("/", b.indexOf(":") + 3));
          return a.getUri(b + this.toString());
        }
        return this;
      };
      b.getQueryParam = function (a) {
        a = this.queryParams.get(a);
        if (typeof a === "string") return a;
        else {
          a = JSON.stringify(a);
          return a == null ? a : JSON.parse(a);
        }
      };
      b.getQueryData = function () {
        return Object.fromEntries(this.getQueryParams());
      };
      b.getQueryParams = function () {
        if (c("structuredClone") != null)
          return c("structuredClone")(this.queryParams);
        var a = JSON.stringify(Array.from(this.queryParams), function (a, b) {
          return Array.isArray(b)
            ? { __CUUArr: !0, value: babelHelpers["extends"]({}, b) }
            : b;
        });
        a = JSON.parse(a, function (a, b) {
          return b != null && typeof b === "object" && b.__CUUArr
            ? Object.keys(b.value).reduce(function (a, c) {
                a[c] = b.value[c];
                return a;
              }, [])
            : b;
        });
        return new Map(a);
      };
      b.getQueryString = function (a) {
        a === void 0 && (a = !1);
        return z(
          this.domain,
          this.originalRawQuery,
          this.queryParams,
          !1,
          a,
          this.serializer
        );
      };
      b.getRegisteredDomain = function () {
        if (!this.getDomain()) return "";
        if (!this.isFacebookUri()) return null;
        var a = this.getDomain().split("."),
          b = a.indexOf("facebook");
        b === -1 && (b = a.indexOf("workplace"));
        return a.slice(b).join(".");
      };
      b.getSerializer = function () {
        return this.serializer;
      };
      b.getSubdomain = function () {
        return this.subdomain;
      };
      b.getUnqualifiedUri = function () {
        if (this.getDomain()) {
          var b = this.toString();
          return a.getUri(b.slice(b.indexOf("/", b.indexOf(":") + 3)));
        }
        return this;
      };
      a.getUri = function (b) {
        b = b.trim();
        var d = l.get(b);
        if (d == null) {
          var e = A(b);
          if (e.valid) (d = new a(e.components)), l.set(b, d);
          else {
            c("FBLogger")("ConstUriUtils").blameToPreviousFrame().warn(e.error);
            return null;
          }
        }
        return d;
      };
      a.getUribyObject = function (b, d) {
        var e = y(b, d),
          f = l.get(e);
        if (f == null) {
          d && (b.originalRawQuery = s(b.queryParams, b.serializer));
          d = B(b);
          if (d.valid) (f = new a(d.components)), l.set(e, f);
          else {
            c("recoverableViolation")(d.error, "ConstUri");
            return null;
          }
        }
        return f;
      };
      b.hasFragmentSeparator = function () {
        return this.fragmentSeparator;
      };
      b.isEmpty = function () {
        return !(
          this.getPath() ||
          this.getProtocol() ||
          this.getDomain() ||
          this.getPort() ||
          this.queryParams.size > 0 ||
          this.getFragment()
        );
      };
      b.isFacebookUri = function () {
        var a = this.toString();
        if (a === "") return !1;
        return !this.getDomain() && !this.getProtocol()
          ? !0
          : ["https", "http"].indexOf(this.getProtocol()) !== -1 &&
              m.test(this.getDomain());
      };
      b.isGeneric = function () {
        return this.isGenericProtocol;
      };
      b.isSameOrigin = function (a) {
        return c("isSameOrigin")(this, a);
      };
      b.isSubdomainOfDomain = function (b) {
        var c = a.getUri(b);
        return c != null && v(this.domain, b);
      };
      b.isSecure = function () {
        return this.getProtocol() === "https";
      };
      b.removeQueryParams = function (a) {
        if (Array.isArray(a) && a.length > 0) {
          var b = this.getQueryParams();
          a.map(function (a) {
            return b["delete"](a);
          });
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.removeQueryParam = function (a) {
        if (Boolean(a)) {
          var b = this.getQueryParams();
          b["delete"](a);
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.replaceQueryParam = function (a, b) {
        if (Boolean(a)) {
          var c = this.getQueryParams();
          c.set(a, b);
          return x(this, { queryParams: c });
        }
        return this;
      };
      b.replaceQueryParams = function (a) {
        return x(this, { queryParams: a });
      };
      b.replaceQueryParamString = function (a) {
        if (a != null) {
          a = a.startsWith("?") ? a.slice(1) : a;
          var b = this.getQueryParams();
          a.split("&").map(function (a) {
            a = a.split("=");
            var c = a[0];
            a = a[1];
            b.set(c, a);
          });
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.setDomain = function (a) {
        if (Boolean(a)) {
          var b = a.split(".");
          b = b.length >= 3 ? b[0] : "";
          return x(this, { domain: a, subdomain: b });
        }
        return this;
      };
      b.setFragment = function (a) {
        return a === "#"
          ? x(this, { fragment: "", fragmentSeparator: !0 })
          : x(this, { fragment: a, fragmentSeparator: a !== "" });
      };
      b.setPath = function (a) {
        return a != null ? x(this, { path: a }) : this;
      };
      b.setPort = function (a) {
        return Boolean(a) ? x(this, { port: a }) : this;
      };
      b.setProtocol = function (a) {
        return Boolean(a) ? x(this, { protocol: a }) : this;
      };
      b.setSecure = function (a) {
        return this.setProtocol(a ? "https" : "http");
      };
      b.setSubDomain = function (a) {
        if (Boolean(a)) {
          var b = this.getQualifiedUri();
          if (b == null) return null;
          var c = b.getDomain();
          c = c.split(".");
          c.length >= 3 ? (c[0] = a) : c.unshift(a);
          return x(b, { domain: c.join("."), subdomain: a });
        }
        return this;
      };
      b.stripTrailingSlash = function () {
        return this.setPath(this.getPath().replace(/\/$/, ""));
      };
      a.$1 = function (a) {
        a = a;
        for (var b = 0; b < q.length; b++) {
          var c = q[b];
          a = c(a);
        }
        return a;
      };
      a.$2 = function (a, b) {
        b = b;
        for (var c = 0; c < r.length; c++) {
          var d = r[c];
          b = d(a, b);
        }
        return b;
      };
      b.$3 = function (b, c) {
        c === void 0 && (c = !1);
        return y(
          {
            domain: a.$1(this.domain),
            fragment: this.fragment,
            fragmentSeparator: this.fragmentSeparator,
            isGeneric: this.isGenericProtocol,
            originalRawQuery: this.originalRawQuery,
            path: this.path,
            port: this.port,
            protocol: this.protocol,
            queryParams: a.$2(this.domain, this.queryParams),
            serializer: b,
            subdomain: this.subdomain,
            userInfo: "",
          },
          !1,
          c
        );
      };
      b.toStringRawQuery = function () {
        this.rawStringValue == null &&
          (this.rawStringValue = this.$3(c("PHPQuerySerializerNoEncoding")));
        return this.rawStringValue;
      };
      b.toString = function () {
        this.stringValue == null &&
          (this.stringValue = this.$3(this.serializer));
        return this.stringValue;
      };
      b.toStringPreserveQuery = function () {
        return this.$3(this.serializer, !0);
      };
      a.isValidUri = function (b) {
        var c = l.get(b);
        if (c != null) return !0;
        c = A(b);
        if (c.valid) {
          l.set(b, new a(c.components));
          return !0;
        }
        return !1;
      };
      return a;
    })();
    function a(a) {
      if (a instanceof C) return a;
      else return null;
    }
    function b(a) {
      q.push(a);
    }
    function e(a) {
      r.push(a);
    }
    f = C.getUri;
    var D = C.isValidUri;
    g.isSubdomainOfDomain = v;
    g.isConstUri = a;
    g.registerDomainFilter = b;
    g.registerQueryParamsFilter = e;
    g.getUri = f;
    g.isValidUri = D;
  },
  98
);
__d(
  "LogHistory",
  [],
  function (a, b, c, d, e, f) {
    var g = 500,
      h = {},
      i = [];
    function j(a, b, c, d) {
      var e = d[0];
      if (typeof e !== "string" || d.length !== 1) return;
      i.push({ date: Date.now(), level: a, category: b, event: c, args: e });
      i.length > g && i.shift();
    }
    var k = (function () {
      function a(a) {
        this.category = a;
      }
      var b = a.prototype;
      b.debug = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("debug", this.category, a, c);
        return this;
      };
      b.log = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("log", this.category, a, c);
        return this;
      };
      b.warn = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("warn", this.category, a, c);
        return this;
      };
      b.error = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        j("error", this.category, a, c);
        return this;
      };
      return a;
    })();
    function a(a) {
      h[a] || (h[a] = new k(a));
      return h[a];
    }
    function b() {
      return i;
    }
    function c() {
      i.length = 0;
    }
    function d(a) {
      return a
        .map(function (a) {
          var b = new Date(a.date).toISOString();
          return [b, a.level, a.category, a.event, a.args].join(" | ");
        })
        .join("\n");
    }
    f.getInstance = a;
    f.getEntries = b;
    f.clearEntries = c;
    f.formatEntries = d;
  },
  66
);
