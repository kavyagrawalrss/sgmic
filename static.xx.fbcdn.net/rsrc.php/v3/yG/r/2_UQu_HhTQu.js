/*FB_PKG_DELIM*/

__d(
  "DesktopHscrollUnitEventConstants",
  [],
  function (a, b, c, d, e, f) {
    a = "DesktopHScrollUnit/itemInserted";
    b = "DesktopHScrollUnit/itemShown";
    c = "DesktopHScrollUnit/HideIndividualItem";
    d = "DesktopHScrollUnit/scrollItemBeforeXout";
    e = "DesktopHScrollUnit/unhideIndividualItem";
    var g = "logLastAdXout",
      h = "onXoutIndividualItem";
    f.HSCROLL_ITEM_INSERTED_EVENT = a;
    f.HSCROLL_ITEM_SHOWN_EVENT = b;
    f.HSCROLL_ITEM_HIDE_EVENT = c;
    f.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT = d;
    f.HSCROLL_ITEM_UNHIDE_EVENT = e;
    f.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN = g;
    f.HSCROLL_PAGER_ITEM_HIDE_EVENT = h;
  },
  66
);
__d(
  "EntstreamFeedObject",
  ["csx", "CSS", "Parent"],
  function (a, b, c, d, e, f, g) {
    var h = {
      getRoot: function (a) {
        return b("Parent").bySelector(a, "._5jmm");
      },
      getHscrollOuterRootIfAvailable: function (a) {
        a = a;
        b("CSS").matchesSelector(a, "._170y") && (a = h.getRoot(a.parentNode));
        return a;
      },
    };
    e.exports = h;
  },
  null
);
__d(
  "EntstreamFeedObjectTracking",
  ["csx", "CSS", "DOM", "EntstreamFeedObject", "Focus", "ge"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = new Map();
    function a(a) {
      var b = j(a.nodeID);
      if (!b) return;
      var d = c("DOM").scry(b, "._5v9_"),
        e = d && d.length ? d : [b];
      a.actorIDs.forEach(function (a) {
        var b = [].concat(i.get(a) || []);
        b.push.apply(b, e);
        i.set(a, b);
      });
    }
    function b(a) {
      var b = j(a.nodeID);
      (i.get(a.actorID) || []).forEach(function (a) {
        if (a === b) return;
        d("CSS").hide(a);
      });
    }
    function e(a) {
      var b = j(a.nodeID);
      (i.get(a.actorID) || []).forEach(function (a) {
        d("CSS").show(a);
      });
      b && d("Focus").setWithoutOutline(b);
    }
    function j(a) {
      a = c("ge")(a);
      return a ? d("EntstreamFeedObject").getRoot(a) : null;
    }
    g.register = a;
    g.hideAllFromActor = b;
    g.unhideAllFromActor = e;
    g.getRoot = j;
  },
  98
);
__d(
  "DataAttributeUtils",
  ["cr:6669"],
  function (a, b, c, d, e, f) {
    var g = [];
    function h(a, b) {
      a = a;
      while (a) {
        if (b(a)) return a;
        a = a.parentNode;
      }
      return null;
    }
    function i(a, b) {
      a = h(a, function (a) {
        return a instanceof Element && !!a.getAttribute(b);
      });
      return a instanceof Element ? a : null;
    }
    var j = {
        LEGACY_CLICK_TRACKING_ATTRIBUTE: "data-ft",
        CLICK_TRACKING_DATASTORE_KEY: "data-ft",
        ENABLE_STORE_CLICK_TRACKING: "data-fte",
        IMPRESSION_TRACKING_CONFIG_ATTRIBUTE: "data-xt-vimp",
        IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY: "data-xt-vimp",
        REMOVE_LEGACY_TRACKING: "data-ftr",
        getDataAttribute: function (a, b) {
          return k[b] ? k[b](a) : a.getAttribute(b);
        },
        setDataAttribute: function (a, b, c) {
          return l[b] ? l[b](a, c) : a.setAttribute(b, c);
        },
        getDataFt: function (a) {
          if (a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)) {
            var c = b("cr:6669").get(a, j.CLICK_TRACKING_DATASTORE_KEY);
            c ||
              (c = j.moveClickTrackingToDataStore(
                a,
                a.getAttribute(j.REMOVE_LEGACY_TRACKING)
              ));
            return c;
          }
          return a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE);
        },
        setDataFt: function (a, c) {
          if (a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)) {
            b("cr:6669").set(a, j.CLICK_TRACKING_DATASTORE_KEY, c);
            return;
          }
          a.setAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE, c);
        },
        moveXTVimp: function (a) {
          j.moveAttributeToDataStore(
            a,
            j.IMPRESSION_TRACKING_CONFIG_ATTRIBUTE,
            j.IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY
          ),
            g.push(a.id);
        },
        getXTrackableElements: function () {
          var a = g
              .map(function (a) {
                return document.getElementById(a);
              })
              .filter(function (a) {
                return !!a;
              }),
            b = document.querySelectorAll("[data-xt-vimp]");
          for (var c = 0; c < b.length; c++) a.push(b[c]);
          return a;
        },
        getDataAttributeGeneric: function (a, c, d) {
          d = b("cr:6669").get(a, d);
          return d !== void 0 ? d : a.getAttribute(c);
        },
        moveAttributeToDataStore: function (a, c, d) {
          var e = a.getAttribute(c);
          e && (b("cr:6669").set(a, d, e), a.removeAttribute(c));
        },
        moveClickTrackingToDataStore: function (a, c) {
          var d = a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE);
          d &&
            (b("cr:6669").set(a, j.CLICK_TRACKING_DATASTORE_KEY, d),
            c && a.removeAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE));
          return d;
        },
        getClickTrackingParent: function (a) {
          a =
            i(a, j.LEGACY_CLICK_TRACKING_ATTRIBUTE) ||
            i(a, j.ENABLE_STORE_CLICK_TRACKING);
          return a;
        },
        getClickTrackingElements: function (a) {
          return a.querySelectorAll(
            "[" +
              j.LEGACY_CLICK_TRACKING_ATTRIBUTE +
              "], [" +
              j.ENABLE_STORE_CLICK_TRACKING +
              "]"
          );
        },
        getParentByAttributeOrDataStoreKey: function (a, c, d) {
          while (
            a &&
            (!a.getAttribute || !a.getAttribute(c)) &&
            b("cr:6669").get(a, d) === void 0
          )
            a = a.parentNode;
          return a;
        },
      },
      k = {
        "data-ft": j.getDataFt,
        "data-xt-vimp": function (a) {
          return j.getDataAttributeGeneric(a, "data-xt-vimp", "data-xt-vimp");
        },
        "data-ad": function (a) {
          return j.getDataAttributeGeneric(a, "data-ad", "data-ad");
        },
        "data-xt": function (a) {
          return j.getDataAttributeGeneric(a, "data-xt", "data-xt");
        },
      },
      l = {
        "data-ft": j.setDataFt,
        "data-xt": function (a, c) {
          b("cr:6669").set(a, "data-xt", c);
        },
      };
    e.exports = j;
  },
  null
);
__d(
  "collectDataAttributes",
  ["DataAttributeUtils", "getContextualParent"],
  function (a, b, c, d, e, f) {
    var g = "normal";
    function a(a, c, d) {
      var e = {},
        f = [],
        h = c.length,
        i;
      for (i = 0; i < h; ++i) (e[c[i]] = {}), f.push("data-" + c[i]);
      if (d) {
        e[g] = {};
        for (i = 0; i < (d || []).length; ++i) f.push(d[i]);
      }
      d = { tn: "", "tn-debug": "," };
      a = a;
      while (a) {
        if (a.getAttribute)
          for (i = 0; i < f.length; ++i) {
            var j = f[i],
              k = b("DataAttributeUtils").getDataAttribute(a, j);
            if (k) {
              if (i >= h) {
                e[g][j] === void 0 && (e[g][j] = k);
                continue;
              }
              j = JSON.parse(k);
              for (k in j)
                d[k] !== void 0
                  ? (e[c[i]][k] === void 0 && (e[c[i]][k] = []),
                    e[c[i]][k].push(j[k]))
                  : e[c[i]][k] === void 0 && (e[c[i]][k] = j[k]);
            }
          }
        a = b("getContextualParent")(a);
      }
      for (k in e)
        for (j in d) e[k][j] !== void 0 && (e[k][j] = e[k][j].join(d[j]));
      return e;
    }
    e.exports = a;
  },
  null
);
__d(
  "FeedTrackingAsync",
  ["Arbiter", "Run", "collectDataAttributes"],
  function (a, b, c, d, e, f, g) {
    var h;
    function a() {
      if (h) return;
      h = c("Arbiter").subscribe("AsyncRequest/send", function (a, b) {
        a = b.request;
        b = a.getRelativeTo();
        if (b) {
          a = a.getData();
          b = c("collectDataAttributes")(b, ["ft"]);
          b.ft && Object.keys(b.ft).length && Object.assign(a, b);
        }
      });
      d("Run").onLeave(function () {
        h && (h.unsubscribe(), (h = null));
      });
    }
    g.init = a;
  },
  98
);
__d(
  "AsyncFormRequestUtils",
  ["Arbiter"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      c("Arbiter").subscribe("AsyncRequest/" + b, function (b, c) {
        b = c.request.relativeTo;
        b && b === a && d(c);
      });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "XPostPluginLoggingController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/post/logging/", {});
  },
  null
);
__d(
  "PluginFeedFooterActionLogger",
  ["AsyncRequest", "DOM", "Event", "XPostPluginLoggingController"],
  function (a, b, c, d, e, f, g) {
    a = {
      initializeClickLoggers: function (a, b, d, e, f, g, h, i, j, k) {
        var l = function (b, d) {
          try {
            b = c("DOM").find(a, "." + b);
            c("Event").listen(b, "click", function (a) {
              new (c("AsyncRequest"))()
                .setURI(
                  c("XPostPluginLoggingController").getURIBuilder().getURI()
                )
                .setData({
                  action: d,
                  action_type: "click",
                  source: g,
                  story_token: h,
                  referer_url: i,
                  is_sdk: j,
                  post_url: k,
                })
                .send();
            });
          } catch (a) {}
        };
        l(b, "embedded_post_like");
        l(d, "embedded_post_unlike");
        l(e, "embedded_post_comment");
        l(f, "embedded_post_share");
      },
    };
    f.exports = a;
  },
  34
);
__d(
  "PluginFeedLikeButton",
  [
    "Arbiter",
    "AsyncFormRequestUtils",
    "CSS",
    "ClientIDs",
    "DOM",
    "DOMEventListener",
    "FormSubmit",
    "Keys",
    "PluginOptin",
    "URI",
  ],
  function (a, b, c, d, e, f, g) {
    var h;
    window.resetConfirmStoryLike = function (a) {
      d("CSS").show(c("DOM").find(document, "#likeStory_" + a)),
        c("DOM").remove(c("DOM").find(document, "#confirmStory_" + a));
    };
    function a(a) {
      a.setAttribute("value", d("ClientIDs").getNewClientID());
    }
    function b(a, b, e) {
      var f = "";
      if (b === 23) f = "post";
      else if (b === 50) f = "page";
      else throw new Error("Invalid FBFeedLocation type.");
      var g = new (c("PluginOptin"))(f).addReturnParams({ act: "like_" + a });
      d("DOMEventListener").add(e, "click", function () {
        return g.start();
      });
    }
    function e(a, b, e, f, g) {
      var i,
        j = function (a) {
          if (a.type === "keypress")
            if (a.keyCode === c("Keys").RETURN || a.keyCode === c("Keys").SPACE)
              c("FormSubmit").send(g);
            else return;
          c("FormSubmit").send(g);
        };
      (i = d("DOMEventListener")).add(b, "click", j);
      i.add(e, "click", j);
      i.add(b, "keypress", j);
      i.add(e, "keypress", j);
      i = f.getAttribute("value") === "1";
      d("AsyncFormRequestUtils").subscribe(g, "send", function (g) {
        g = f.getAttribute("value") === "1";
        d("CSS").conditionShow(e, g);
        d("CSS").conditionShow(b, !g);
        c("Arbiter").inform("embeddedUfiToggle", { isLike: g, storyToken: a });
        f.setAttribute("value", g ? "" : "1");
      });
      d("AsyncFormRequestUtils").subscribe(g, "response", function (g) {
        g = g.response.payload;
        if (g && !g.success) {
          g = g.isLike;
          d("CSS").conditionShow(b, g);
          d("CSS").conditionShow(e, !g);
          c("Arbiter").inform("revertLike", { isLike: g, storyToken: a });
          f.setAttribute("value", g ? "1" : "");
        }
      });
      j = new (h || (h = c("URI")))(window.location.search).getQueryData();
      i && j.act === "like_" + a && c("FormSubmit").send(g);
    }
    g.addClientId = a;
    g.loggedOutLikeButton = b;
    g.init = e;
  },
  98
);
