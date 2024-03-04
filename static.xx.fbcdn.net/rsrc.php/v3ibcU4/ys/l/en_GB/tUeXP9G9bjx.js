/*FB_PKG_DELIM*/

__d(
  "ChannelConstants",
  [],
  function (a, b, c, d, e, f) {
    var g = "channel/";
    a = {
      CHANNEL_MANUAL_RECONNECT_DEFER_MSEC: 2e3,
      MUTE_WARNING_TIME_MSEC: 25e3,
      WARNING_COUNTDOWN_THRESHOLD_MSEC: 15e3,
      ON_SHUTDOWN: g + "shutdown",
      ON_INVALID_HISTORY: g + "invalid_history",
      ON_CONFIG: g + "config",
      ON_ENTER_STATE: g + "enter_state",
      ON_EXIT_STATE: g + "exit_state",
      ATTEMPT_RECONNECT: g + "attempt_reconnect",
      RTI_SESSION: g + "new_rti_address",
      CONSOLE_LOG: g + "message:console_log",
      GET_RTI_SESSION_REQUEST: g + "rti_session_request",
      SKYWALKER: g + "skywalker",
      CHANNEL_ESTABLISHED: g + "established",
      OK: "ok",
      ERROR: "error",
      ERROR_MAX: "error_max",
      ERROR_MISSING: "error_missing",
      ERROR_MSG_TYPE: "error_msg_type",
      ERROR_SHUTDOWN: "error_shutdown",
      ERROR_STALE: "error_stale",
      SYS_OWNER: "sys_owner",
      SYS_NONOWNER: "sys_nonowner",
      SYS_ONLINE: "sys_online",
      SYS_OFFLINE: "sys_offline",
      SYS_TIMETRAVEL: "sys_timetravel",
      HINT_AUTH: "shutdown auth",
      HINT_CONN: "shutdown conn",
      HINT_DISABLED: "shutdown disabled",
      HINT_INVALID_STATE: "shutdown invalid state",
      HINT_MAINT: "shutdown maint",
      HINT_UNSUPPORTED: "shutdown unsupported",
      reason_Unknown: 0,
      reason_AsyncError: 1,
      reason_TooLong: 2,
      reason_Refresh: 3,
      reason_RefreshDelay: 4,
      reason_UIRestart: 5,
      reason_NeedSeq: 6,
      reason_PrevFailed: 7,
      reason_IFrameLoadGiveUp: 8,
      reason_IFrameLoadRetry: 9,
      reason_IFrameLoadRetryWorked: 10,
      reason_PageTransitionRetry: 11,
      reason_IFrameLoadMaxSubdomain: 12,
      reason_NoChannelInfo: 13,
      reason_NoChannelHost: 14,
      CAPABILITY_VOIP_INTEROP: 8,
      CAPABILITY_ACTIVE_ON_DESKTOP_APP: 16384,
      CAPABILITY_PLAYING_INSTANT_GAME: 2097152,
      SUBSCRIBE: "subscribe",
      UNSUBSCRIBE: "unsubscribe",
      FAKE_DFF: "fake_dff",
      THROTTLED: g + "throttled",
      JUMPSTART: g + "jumpstart",
      ENTITY_PRESENCE_ACTIVE_PING: "entity_presence/active_ping",
      ENTITY_PRESENCE_SKIPPED_PING: "entity_presence/skipped_ping",
      SUBSCRIPTION_STATE: {
        SUBSCRIBE: "s",
        MUTATE_CONTEXT: "m",
        UNSUBSCRIBE: "u",
      },
      DEFAULT_MAX_SUBSCRIPTIONS: 300,
      DEFAULT_EVICTION_BATCH_SIZE: 20,
      DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE: 300,
      DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES: 3,
      getArbiterType: function (a) {
        return g + "message:" + a;
      },
      getRTISkywalkerArbiterType: function (a, b) {
        return g + "skywalker:" + a + ":" + b;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "AvailableListConstants",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ON_AVAILABILITY_CHANGED: "buddylist/availability-changed",
      ON_UPDATE_ERROR: "buddylist/update-error",
      ON_UPDATED: "buddylist/updated",
      ON_CHAT_NOTIFICATION_CHANGED: "chat-notification-changed",
      OFFLINE: 0,
      IDLE: 1,
      ACTIVE: 2,
      MOBILE: 3,
      WEB_STATUS: "webStatus",
      FB_APP_STATUS: "fbAppStatus",
      MESSENGER_STATUS: "messengerStatus",
      OTHER_STATUS: "otherStatus",
      STATUS_ACTIVE: "active",
      STATUS_IDLE: "idle",
      STATUS_OFFLINE: "offline",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PresenceUtil",
  ["CurrentUser", "randomInt"],
  function (a, b, c, d, e, f, g) {
    var h = c("randomInt")(0, 4294967295) + 1;
    function a() {
      return h;
    }
    function b() {
      return c("CurrentUser").isLoggedInNow();
    }
    g.getSessionID = a;
    g.hasUserCookie = b;
  },
  98
);
__d(
  "PresencePrivacy",
  [
    "Arbiter",
    "ArbiterMixin",
    "AsyncRequest",
    "Bootloader",
    "ChannelConstants",
    "CurrentUser",
    "PresencePrivacyInitialData",
    "PresenceUtil",
    "mixin",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "/ajax/chat/privacy/settings.php",
      i = "/ajax/chat/privacy/online_policy.php",
      j = "/ajax/chat/privacy/visibility.php",
      k = "friend_visibility",
      l = "visibility",
      m = "online_policy",
      n = babelHelpers["extends"](
        {},
        (b = d("PresencePrivacyInitialData")).privacyData
      ),
      o = b.visibility,
      p = babelHelpers["extends"]({}, b.privacyData),
      q = o,
      r = b.onlinePolicy,
      s = r,
      t = [],
      u = !1;
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.WHITELISTED = 1),
          (c.BLACKLISTED = -1),
          (c.UNLISTED = 0),
          (c.ONLINE = 1),
          (c.OFFLINE = 0),
          (c.ONLINE_TO_WHITELIST = 0),
          (c.ONLINE_TO_BLACKLIST = 1),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.init = function (a, b, c) {};
      c.setVisibility = function (a) {
        q = o;
        z(a);
        var b = { visibility: a },
          c = { type: l, visibility: a };
        b = H(j, b, c);
        C(b, c);
        return a;
      };
      c.getVisibility = function () {
        return o;
      };
      c.setOnlinePolicy = function (a) {
        s = r;
        A(a);
        var b = { online_policy: a },
          c = { type: m, online_policy: a };
        b = H(i, b, c);
        C(b, c);
        return a;
      };
      c.getOnlinePolicy = function () {
        return r;
      };
      c.getFriendVisibility = function (a) {
        return n[a] || v.UNLISTED;
      };
      c.getFriendsVisibility = function () {
        return n;
      };
      c.isUserOffline = function () {
        return this.getVisibility() === v.OFFLINE;
      };
      c.allows = function (a) {
        return this.isUserOffline() ? !1 : this.allowsIfViewerIsOnline(a);
      };
      c.allowsIfViewerIsOnline = function (a) {
        var b = this.getOnlinePolicy();
        return b === v.ONLINE_TO_WHITELIST
          ? n[a] == v.WHITELISTED
          : n[a] != v.BLACKLISTED;
      };
      c.getOnlinePolicyStr = function () {
        if (this.isUserOffline()) return "offline";
        var a = this.getOnlinePolicy();
        if (a === v.ONLINE_TO_WHITELIST) return "online_to_whitelist";
        return a === v.ONLINE_TO_BLACKLIST ? "online_to_blacklist" : "unknown";
      };
      c.setFriendsVisibility = function (a, b) {
        if (a.length > 0) {
          var c = {};
          for (var d = 0; d < a.length; d++) {
            var e = a[d];
            p[e] = n[e];
            c[e] = b;
          }
          w(c);
          e = b;
          e == v.UNLISTED && (e = p[a[0]]);
          d = { users: a, setting: b, setting_type: e };
          a = { type: k, settings: c };
          e = H(h, d, a);
          C(e, a);
        }
        return b;
      };
      c.setFriendVisibilityMap = function (a, b) {
        for (var c in a) p[c] = n[c];
        w(a);
        c = { type: k, settings: a };
        C(G(b, c), c);
      };
      c.allow = function (a) {
        if (this.allows(a))
          throw new Error(
            "allow() should only be called for users that are not already allowed"
          );
        if (this.getVisibility() === v.OFFLINE)
          throw new Error(
            "allow() should only be called when the user is already online"
          );
        var b =
          this.getOnlinePolicy() === v.ONLINE_TO_WHITELIST
            ? v.WHITELISTED
            : v.UNLISTED;
        return this.setFriendsVisibility([a], b);
      };
      c.disallow = function (a) {
        if (!this.allows(a))
          throw new Error(
            "disallow() should only be called for users that are not already disallowed"
          );
        if (this.getVisibility() === v.OFFLINE)
          throw new Error(
            "disallow() should only be called when the user is already online"
          );
        var b =
          this.getOnlinePolicy() === v.ONLINE_TO_BLACKLIST
            ? v.BLACKLISTED
            : v.UNLISTED;
        return this.setFriendsVisibility([a], b);
      };
      c.getBlacklist = function () {
        var a = [];
        for (var b in n) n[b] === v.BLACKLISTED && a.push(b);
        return a;
      };
      c.getWhitelist = function () {
        var a = [];
        for (var b in n) n[b] === v.WHITELISTED && a.push(b);
        return a;
      };
      c.getMapForTest = function () {
        return n;
      };
      c.setMapForTest = function (a) {
        n = a;
      };
      return b;
    })(c("mixin")(c("ArbiterMixin")));
    var v = new e();
    function w(a) {
      var b;
      for (b in a) {
        var d = a[b];
        if (b == c("CurrentUser").getID())
          throw new Error("Invalid to set current user's visibility");
        switch (d) {
          case v.WHITELISTED:
          case v.BLACKLISTED:
          case v.UNLISTED:
            break;
          default:
            throw new Error("Invalid state: " + d);
        }
      }
      for (b in a) n[b] = a[b];
      v.inform("privacy-changed");
    }
    function x(a, b) {
      var c = {};
      c[a] = b;
      w(c);
    }
    function y(a) {
      c("Bootloader").loadModules(
        ["MessengerMQTTPresenceReporting"],
        function (b) {
          b.reportChatVisibility(!!a);
        },
        "PresencePrivacy"
      );
    }
    function z(a) {
      switch (a) {
        case v.ONLINE:
        case v.OFFLINE:
          break;
        default:
          throw new Error("Invalid visibility: " + a);
      }
      o = a;
      y(a);
      v.inform("privacy-changed");
      v.inform("privacy-user-presence-changed");
    }
    function A(a) {
      switch (a) {
        case v.ONLINE_TO_WHITELIST:
        case v.ONLINE_TO_BLACKLIST:
          break;
        default:
          throw new Error("Invalid default online policy: " + a);
      }
      r = a;
      v.inform("privacy-user-presence-changed");
      v.inform("privacy-changed");
    }
    function B(a, b) {
      (u = !0), a.send();
    }
    function C(a, b) {
      t.push({ request: a, data: b });
      if (!u) {
        a = t.shift();
        B(a.request, a.data);
      }
    }
    function D(a, b) {
      b = a.type;
      if (b === k) {
        v.inform("privacy-availability-changed");
        for (var c in a.settings) p[c] = a.settings[c];
      } else
        b === l ? (q = a.visibility) : b === m && (s = a.online_policy),
          v.inform("privacy-user-presence-response");
    }
    function E(a, b) {
      o !== q && z(q),
        r !== s && A(s),
        Object.assign(n, p),
        v.inform("privacy-changed"),
        (t = []);
    }
    function F(a) {
      u = !1;
      if (t.length > 0) {
        a = t.shift();
        B(a.request, a.data);
      }
    }
    function G(a, b) {
      if (d("PresenceUtil") != null) {
        var c = a.getData();
        c.window_id = d("PresenceUtil").getSessionID();
        a.setData(c);
      }
      a.setHandler(function (a) {
        return D(b, a);
      })
        .setErrorHandler(function (a) {
          return E(b, a);
        })
        .setTransportErrorHandler(function (a) {
          return E(b, a);
        })
        .setFinallyHandler(function (a) {
          return F(a);
        })
        .setAllowCrossPageTransition(!0);
      return a;
    }
    function H(a, b, d) {
      return G(new (c("AsyncRequest"))(a).setData(b), d);
    }
    function a(a, b) {
      a = b.obj;
      if (a.viewer_id != c("CurrentUser").getID())
        throw new Error("Viewer got from the channel is not the real viewer");
      if (a.window_id === d("PresenceUtil").getSessionID()) return;
      var e = a.data;
      if (a.event == "access_control_entry")
        e.target_ids.forEach(function (a) {
          x(a, e.setting), (p[a] = e.setting);
        });
      else {
        if (a.event == "visibility_update") {
          b = e.visibility ? v.ONLINE : v.OFFLINE;
          z(b);
          q = b;
        } else
          a.event == "online_policy_update" &&
            (A(e.online_policy), (s = e.online_policy));
        v.inform("privacy-user-presence-response");
      }
    }
    v.inform("privacy-changed");
    v.inform("privacy-user-presence-changed", "state");
    c("Arbiter").subscribe(
      d("ChannelConstants").getArbiterType("privacy_changed"),
      a
    );
    c("Arbiter").subscribe(d("ChannelConstants").ON_CONFIG, function (a, b) {
      a = b.getConfig("visibility", null);
      if (a !== null && typeof a !== "undefined") {
        b = a ? v.ONLINE : v.OFFLINE;
        z(b);
      }
    });
    f = v;
    g["default"] = f;
  },
  98
);
__d(
  "ChatVisibility",
  ["Arbiter", "PresencePrivacy"],
  function (a, b, c, d, e, f) {
    var g = {
      isOnline: function () {
        return (
          b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE
        );
      },
      hasBlackbirdEnabled: function () {
        return this.isVisibleToMostFriends() || this.isVisibleToSomeFriends();
      },
      isVisibleToMostFriends: function () {
        return (
          b("PresencePrivacy").getOnlinePolicy() ===
            b("PresencePrivacy").ONLINE_TO_BLACKLIST &&
          b("PresencePrivacy").getBlacklist().length > 0
        );
      },
      isVisibleToSomeFriends: function () {
        return (
          b("PresencePrivacy").getOnlinePolicy() ===
            b("PresencePrivacy").ONLINE_TO_WHITELIST &&
          b("PresencePrivacy").getWhitelist().length > 0
        );
      },
      goOnline: function (a) {
        b("PresencePrivacy").getVisibility() === b("PresencePrivacy").OFFLINE &&
          (b("PresencePrivacy").setVisibility(b("PresencePrivacy").ONLINE),
          b("Arbiter").inform("chat-visibility/go-online")),
          a && a();
      },
      goOffline: function (a) {
        b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE &&
          (b("PresencePrivacy").setVisibility(b("PresencePrivacy").OFFLINE),
          b("Arbiter").inform("chat-visibility/go-offline")),
          a && a();
      },
      toggleVisibility: function () {
        g.isOnline() ? g.goOffline() : g.goOnline();
      },
    };
    e.exports = g;
  },
  null
);
__d(
  "LastActiveTimes",
  ["fbt", "ServerTime"],
  function (a, b, c, d, e, f, g, h) {
    var i = {};
    function j(a) {
      if (!a || a < 0) return null;
      a = d("ServerTime").get() / 1e3 - a;
      a = Math.floor(a / 60);
      var b = Math.floor(a / 60),
        c = Math.floor(b / 24);
      if (a <= 1)
        return h._({ "*": "{count} min" }, [h._param("count", 1, [0])]);
      else if (a < 60)
        return h._({ "*": "{count} min" }, [h._param("count", a, [0])]);
      else if (b < 24)
        return h._({ "*": "{count}h" }, [h._param("count", b, [0])]);
      else if (c < 3)
        return h._({ "*": "{count}d" }, [h._param("count", c, [0])]);
      else return null;
    }
    function k(a, b) {
      (!(a in i) || i[a] < b) && (i[a] = b);
    }
    function l(a) {
      if (a in i) return i[a];
      else return 0;
    }
    function a(a) {
      for (var b in a) k(b, a[b]);
    }
    function b(a) {
      return j(l(a));
    }
    function c(a) {
      return l(a);
    }
    function e() {
      return i;
    }
    g.update = a;
    g.getShortDisplay = b;
    g.get = c;
    g.getDebugData = e;
  },
  98
);
__d(
  "PresenceConfig",
  ["PresenceConfigInitialData"],
  function (a, b, c, d, e, f, g) {
    var h = babelHelpers["extends"]({}, c("PresenceConfigInitialData"));
    function a(a, b) {
      return a in h ? h[a] : b;
    }
    g.get = a;
  },
  98
);
__d(
  "FBIDCheck",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = /^[1-9]\d*$/;
    function a(a) {
      a = a;
      if (a == null || (typeof a === "string" && !g.test(a))) return !1;
      a = parseInt(a, 10);
      return !a
        ? !1
        : (a > 0 && a < 22e8) ||
            (a >= 1e14 && a <= 100099999989999) ||
            (a >= 89e12 && a <= 89999999999999) ||
            (a >= 6000001e7 && a <= 60000019999999);
    }
    f.isUser_deprecated = a;
  },
  66
);
__d(
  "debounceCore",
  ["TimeSlice"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d, e, f, g) {
      d === void 0 && (d = null);
      e === void 0 && (e = setTimeout);
      f === void 0 && (f = clearTimeout);
      g === void 0 && (g = !1);
      var h,
        i = !0;
      function j() {
        for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
          l[m] = arguments[m];
        var n;
        if (g) {
          n = c("TimeSlice").guard(function () {
            (i = !0), (h = null);
          }, "debounceCore");
          if (!i) {
            f(h);
            h = e(n, b);
            return;
          }
          i = !1;
          a.apply(d, l);
        } else
          j.reset(),
            (n = c("TimeSlice").guard(function () {
              (h = null), a.apply(d, l);
            }, "debounceCore"));
        n.__SMmeta = a.__SMmeta;
        h = e(n, b);
      }
      j.reset = function () {
        f(h), (h = null), (i = !0);
      };
      j.isPending = function () {
        return h != null;
      };
      return j;
    }
    g["default"] = a;
  },
  98
);
__d(
  "debounce",
  ["clearTimeout", "debounceCore", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d, e, f) {
      b === void 0 && (b = 100);
      var g = function (a, b, d) {
        return c("setTimeout")(a, b, d, !e);
      };
      return c("debounceCore")(a, b, d, g, c("clearTimeout"), f);
    }
    g["default"] = a;
  },
  98
);
__d(
  "debounceAcrossTransitions",
  ["debounce"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      return c("debounce")(a, b, d, !0);
    }
    g["default"] = a;
  },
  98
);
__d(
  "PresenceStatus",
  [
    "ArbiterMixin",
    "AvailableListConstants",
    "AvailableListInitialData",
    "Bootloader",
    "ChatVisibility",
    "CurrentUser",
    "FBIDCheck",
    "FBLogger",
    "LastActiveTimes",
    "ODS",
    "PresenceConfig",
    "PresencePrivacy",
    "ServerTime",
    "createObjectFrom",
    "debounceAcrossTransitions",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    var h;
    (h || (h = d("ODS"))).setEntitySample("presence", 1e-4);
    var i = {},
      j = {},
      k = {},
      l = {},
      m = babelHelpers["extends"]({}, c("ArbiterMixin")),
      n = c("debounceAcrossTransitions")(function () {
        return m.inform("change");
      }, 0);
    function o(a) {
      var b,
        e = parseInt(a.topic.match(/\d+$/), 10);
      a = parseInt(JSON.parse(a.payload).lat, 10);
      var f = Date.now() - a * 1e3;
      f = d("PresenceConfig").get("active_cutoff") * 1e3 - f;
      d("LastActiveTimes").update(((b = {}), (b[e] = a), b));
      m.checkPresence(e);
      m.get(e) === c("AvailableListConstants").ACTIVE &&
        (window.clearTimeout(l[e].timeout),
        (l[e].timeout = window.setTimeout(function () {
          m.checkPresence(e);
        }, f)));
    }
    function p(a) {
      return /^\d+$/.test(a);
    }
    Object.assign(m, {
      resetPresenceData: function () {
        (i = {}), (j = {});
      },
      reset: function () {
        m.resetPresenceData(), (k = {});
      },
      get: function (a) {
        !p(a) &&
          d("PresenceConfig").get("presence_throw_for_malformed_id") &&
          c("FBLogger")("presence").warn("received malformed id '%s'", a);
        if (a == c("CurrentUser").getID())
          return d("ChatVisibility").isOnline()
            ? c("AvailableListConstants").ACTIVE
            : c("AvailableListConstants").OFFLINE;
        p(a) &&
          !d("FBIDCheck").isUser_deprecated(a) &&
          !l[a] &&
          ((h || (h = d("ODS"))).bumpEntityKey(
            3303,
            "presence",
            "page_subscribe"
          ),
          (l[a] = {}),
          d("PresenceConfig").get("presence_page_green_dot_sub") &&
            c("Bootloader").loadModules(
              ["SkywalkerManager"],
              function (b) {
                return b.subscribe("presence_push/fb/" + a, o);
              },
              "PresenceStatus"
            ));
        var b = c("AvailableListConstants").OFFLINE;
        a in i && (b = i[a]);
        c("PresencePrivacy").allows(a) ||
          (b = c("AvailableListConstants").OFFLINE);
        return b;
      },
      getCapabilities: function (a) {
        a = j[a];
        return a ? a : 0;
      },
      isPlayingCanvasGameUser: function (a) {
        return !!k[a];
      },
      getGroup: function (a) {
        return a.some(function (a) {
          return a == c("CurrentUser").getID()
            ? !1
            : m.get(a) === c("AvailableListConstants").ACTIVE;
        })
          ? c("AvailableListConstants").ACTIVE
          : c("AvailableListConstants").OFFLINE;
      },
      set: function (a, b, e, f, g, h) {
        if (a == c("CurrentUser").getID()) return !1;
        var k;
        if (b != null) {
          b =
            b == c("AvailableListConstants").ACTIVE
              ? c("AvailableListConstants").ACTIVE
              : c("AvailableListConstants").OFFLINE;
          e = m.get(a);
          k = e != b;
          if (
            (k || b == c("AvailableListConstants").ACTIVE) &&
            d("FBIDCheck").isUser_deprecated(a)
          ) {
            d("LastActiveTimes").update(
              ((f = {}), (f[a] = d("ServerTime").get() / 1e3), f)
            );
          }
          i[a] = b;
        }
        e = !1;
        g != null && ((e = m.getCapabilities(a) != g), (j[a] = g));
        f = k || e;
        f && !h && n();
        return f;
      },
      setPlayingCanvasGameFriends: function (a) {
        if (!c("gkx")("22743")) return;
        k = c("createObjectFrom")(a);
      },
      getOnlineIDs: function () {
        var a,
          b = [];
        for (a in i)
          m.get(a) === c("AvailableListConstants").ACTIVE && b.push(a);
        return b;
      },
      getAllIDs: function () {
        return Object.keys(i);
      },
      getOnlineCount: function () {
        return m.getOnlineIDs().length;
      },
      getPresenceStats: function () {
        var a = 0,
          b = 0,
          d = 0;
        for (var e in i) {
          a += 1;
          switch (m.get(e)) {
            case c("AvailableListConstants").OFFLINE:
              b += 1;
              break;
            case c("AvailableListConstants").ACTIVE:
              d += 1;
              break;
            default:
              break;
          }
        }
        return { total: a, offline: b, active: d };
      },
      getAllDebugInfo: function () {
        var a = {};
        for (var b in i) a[b] = { p: i[b], vc: j[b] };
        return a;
      },
      setMultiFromMQTT: function (a) {
        var b = {};
        Array.isArray(a) &&
          a.forEach(function (a) {
            a.l && (b[a.u] = a.l), m.set(a.u, a.p, !1, "mqtt", a.c, !0);
          });
        d("LastActiveTimes").update(b);
        n();
      },
      setMultiChatproxy: function (a) {
        var b = {};
        for (var c in a) {
          a[c].lat && (b[c] = a[c].lat);
          var e = a[c].p;
          m.set(c, e, !1, "chatproxy", a[c].vc, !0);
        }
        d("LastActiveTimes").update(b);
        n();
      },
      setMultiActive: function (a, b) {
        var d = !1;
        a.forEach(function (a) {
          m.set(a, c("AvailableListConstants").ACTIVE, !1, b, null, !0) &&
            (d = !0);
        });
        d && n();
      },
      checkPresence: function (a) {
        var b = !1,
          e = Math.ceil(Date.now() / 1e3) - d("LastActiveTimes").get(a);
        m.set(
          a,
          e < d("PresenceConfig").get("active_cutoff")
            ? c("AvailableListConstants").ACTIVE
            : c("AvailableListConstants").OFFLINE,
          !1,
          "pylon",
          null,
          !0
        ) && (b = !0);
        b && n();
      },
    });
    c("AvailableListInitialData").activeList &&
      c("AvailableListInitialData").activeList.length > 0 &&
      m.setMultiActive(
        c("AvailableListInitialData").activeList,
        "available_list_active"
      );
    c("AvailableListInitialData").playingNow &&
      c("AvailableListInitialData").playingNow.length > 0 &&
      m.setPlayingCanvasGameFriends(c("AvailableListInitialData").playingNow);
    c("AvailableListInitialData").lastActiveTimes &&
      Object.keys(c("AvailableListInitialData").lastActiveTimes).length > 0 &&
      d("LastActiveTimes").update(
        c("AvailableListInitialData").lastActiveTimes
      );
    a = m;
    g["default"] = a;
  },
  98
);
__d(
  "FBStoriesLoggingConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "event";
    b = "followee";
    c = "friend";
    d = "group";
    e = "missingStoryData";
    var g = "page",
      h = "self",
      i = "promotion",
      j = "open_media",
      k = "delete_media_attempted",
      l = "attempt_to_send_reply",
      m = "reaction_sticker_interacted",
      n = "open_seen_summary",
      o = "open_story",
      p = "close_story",
      q = "story_tray_load",
      r = "send_story_failed",
      s = "send_story_succeed",
      t = "reply_attempt_completed",
      u = "story_navigation",
      v = "reshared_story_tap",
      w = "reshared_story_view_story_tap",
      x = {
        CLOSE_STORY: {
          CLICK_RIGHT: "click_right",
          CLICK_LEFT: "click_left",
          AUTO_JUMP: "auto_jump",
          AUTO_EXIT: "auto_exit",
          CLICK_EXIT: "click_exit",
          SWIPE_RIGHT: "swipe_right",
          SWIPE_LEFT: "swipe_left",
          SWIPE_EXIT: "swipe_exit",
          SWIPE_DOWN_EXIT: "swipe_down_exit",
          CLOSE_BUTTON_EXIT: "close_button_exit",
          BACK_BUTTON_EXIT: "back_button_exit",
        },
      },
      y = "closeFromClickingOnModal",
      z = "closeFromClickingOnModalCloseButton",
      A = "closeFromLastStoryFinishing",
      B = {
        ARCHIVE: "archive",
        POST_HEADER: "post_header_actor_photo",
        STORY_TRAY: "story_tray",
        IN_FEED: "in_feed",
        UNKNOWN: "unknown",
      };
    f.EVENT_STORY = a;
    f.FOLLOWEE_STORY = b;
    f.FRIEND_STORY = c;
    f.GROUP_STORY = d;
    f.MISSING_STORY_DATA = e;
    f.PAGE_STORY = g;
    f.SELF_STORY = h;
    f.STORY_PROMOTION = i;
    f.ACTION_OPEN_MEDIA = j;
    f.ACTION_DELETE_MEDIA = k;
    f.ACTION_SEND_REPLY_ATTEMPT = l;
    f.ACTION_SEND_REACTION_STICKER_INTERACTED = m;
    f.ACTION_OPEN_SEEN_SUMMARY = n;
    f.ACTION_OPEN_STORY = o;
    f.ACTION_CLOSE_STORY = p;
    f.ACTION_TRAY_LOAD = q;
    f.ACTION_SEND_STORY_FAILED = r;
    f.ACTION_SEND_STORY_SUCCEEDED = s;
    f.ACTION_REPLY_ATTEMPT_COMPLETED = t;
    f.ACTION_STORY_NAVIGATION = u;
    f.INTERACTION_TAP_RESHARED_STORY = v;
    f.INTERACTION_TAP_RESHARED_TOOLTIP = w;
    f.GESTURES = x;
    f.SOURCE_CLOSE_FROM_MODAL = y;
    f.SOURCE_CLOSE_FROM_MODAL_CLOSE_BUTTON = z;
    f.SOURCE_CLOSE_FROM_LAST_STORY_FINISHING = A;
    f.SOURCES = B;
  },
  66
);
__d(
  "XFBStoriesSingleStoryAsyncController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/stories/view/async/", {
      card_id: { type: "FBID" },
      story_id: { type: "FBID" },
      auto_open_viewersheet: { type: "Bool", defaultValue: !1 },
      story_action_source: { type: "String" },
    });
  },
  null
);
__d(
  "FBStoriesRing",
  [
    "csx",
    "cx",
    "Arbiter",
    "CSS",
    "DOM",
    "FBStoriesLoggingConstants",
    "XFBStoriesSingleStoryAsyncController",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a.element;
        this.$2 = a.profileId;
        this.$3 = a.storyId;
        this.$4 = !1;
        a = c("DOM").scry(this.$1, "._6_ut");
        a.length > 0 && (this.$4 = !0);
        this.$5();
      }
      var b = a.prototype;
      b.$5 = function () {
        var a = this;
        c("Arbiter").subscribe("has_story_bucket_been_seen", function (b, e) {
          if (a.$2 === e) {
            b = c("DOM").scry(a.$1, "._6_ut");
            b.length > 0 && (d("CSS").removeClass(b[0], "_6_ut"), (a.$4 = !1));
          }
        });
        c("Arbiter").subscribe("update_next_thread_to_view", function (b, e) {
          b = e.bucketOwnerId;
          e = e.threadId;
          if (a.$2 === b && a.$4) {
            b = c("XFBStoriesSingleStoryAsyncController")
              .getURIBuilder()
              .setFBID("story_id", a.$3)
              .setFBID("card_id", e)
              .setBool("auto_open_viewersheet", !1)
              .setString(
                "story_action_source",
                d("FBStoriesLoggingConstants").SOURCES.POST_HEADER
              )
              .getURI();
            a.$1.setAttribute("ajaxify", b);
          }
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "isLinkshimURI",
  [
    "LinkshimHandlerConfig",
    "isBulletinDotComURI",
    "isFacebookURI",
    "isMessengerDotComURI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = c("LinkshimHandlerConfig").linkshim_host.split(".");
    var h = b[b.length - 1];
    function a(a) {
      var b = a.getPath();
      if (
        (b === "/l.php" ||
          b.indexOf("/si/ajax/l/") === 0 ||
          b.indexOf("/l/") === 0 ||
          b.indexOf("l/") === 0) &&
        (c("isFacebookURI")(a) ||
          c("isMessengerDotComURI")(a) ||
          c("isBulletinDotComURI")(a))
      )
        return !0;
      if (
        b === c("LinkshimHandlerConfig").linkshim_path &&
        a.isSubdomainOfDomain(h)
      ) {
        b = a.getQueryData();
        if (
          b[c("LinkshimHandlerConfig").linkshim_enc_param] != null &&
          b[c("LinkshimHandlerConfig").linkshim_url_param] != null
        )
          return !0;
      }
      return !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "FBLynxBase",
  ["$", "LinkshimHandlerConfig", "URI", "cr:7736", "isLinkshimURI"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function h(a) {
      if (!b("isLinkshimURI")(a)) return null;
      a = a.getQueryData().u;
      return !a ? null : a;
    }
    var i = {
      logAsyncClick: function (a) {
        i.swapLinkWithUnshimmedLink(a);
        a = a.getAttribute("data-lynx-uri");
        if (!a) return;
        b("cr:7736").log(a);
      },
      originReferrerPolicyClick: function (a) {
        var c = b("$")("meta_referrer");
        c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
        i.logAsyncClick(a);
        setTimeout(function () {
          c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy;
        }, 100);
      },
      swapLinkWithUnshimmedLink: function (a) {
        var c = a.href,
          d = h(new (g || (g = b("URI")))(c));
        if (!d) return;
        a.setAttribute("data-lynx-uri", c);
        a.href = d;
      },
      revertSwapIfLynxURIPresent: function (a) {
        var b = a.getAttribute("data-lynx-uri");
        if (!b) return;
        a.removeAttribute("data-lynx-uri");
        a.href = b;
      },
    };
    e.exports = i;
  },
  null
);
__d(
  "FBLynx",
  ["Base64", "Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent", "URI"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = (g || (g = b("URI"))).goURIOnWindow,
      i = {
        alreadySetup: !1,
        setupDelegation: function (a) {
          a === void 0 && (a = !1);
          if (!document.documentElement) return;
          if (document.body == null) {
            if (a) return;
            window.setTimeout(function () {
              i.setupDelegation(!0);
            }, 100);
            return;
          }
          if (i.alreadySetup) return;
          i.alreadySetup = !0;
          var c = function (a) {
            var c = i.getMaybeLynxLink(a.target);
            if (!c) return;
            var d = c[0];
            c = c[1];
            var e = c,
              f = new (g || (g = b("URI")))(c.href),
              j;
            if (
              b("LinkshimHandlerConfig").ghl_param_link_shim &&
              d !== "hover" &&
              c.dataset &&
              c.dataset.attributes
            ) {
              j = b("Base64").decodeObject(c.dataset.attributes);
              if (j && j.open_link) {
                var k;
                for (k in j) k !== "open_link" && f.addQueryData(k, j[k]);
                k = c.cloneNode(!0);
                k.href = f.toString();
                e = k;
              }
            }
            switch (d) {
              case "async":
              case "asynclazy":
                b("FBLynxBase").logAsyncClick(e);
                break;
              case "origin":
                b("FBLynxBase").originReferrerPolicyClick(e);
                break;
              case "hover":
                i.hoverClick(e);
                break;
            }
            b("LinkshimHandlerConfig").ghl_param_link_shim &&
              d !== "hover" &&
              j &&
              j.open_link &&
              (a.preventDefault(), h(f, window.open("", e.target), !0));
          };
          b("Event").listen(document.body, "click", c);
          b("LinkshimHandlerConfig").middle_click_requires_event &&
            b("Event").listen(document.body, "mouseup", function (a) {
              a.button == 1 && c(a);
            });
          b("Event").listen(document.body, "mouseover", function (a) {
            a = i.getMaybeLynxLink(a.target);
            if (!a) return;
            var b = a[0];
            a = a[1];
            switch (b) {
              case "async":
              case "asynclazy":
              case "origin":
              case "hover":
                i.mouseover(a);
                break;
            }
          });
          b("Event").listen(document.body, "contextmenu", function (a) {
            a = i.getMaybeLynxLink(a.target);
            if (!a) return;
            var b = a[0];
            a = a[1];
            switch (b) {
              case "async":
              case "hover":
              case "origin":
                i.contextmenu(a);
                break;
              case "asynclazy":
                break;
            }
          });
        },
        getMaybeLynxLink: function (a) {
          a = b("Parent").byAttribute(a, "data-lynx-mode");
          if (a instanceof HTMLAnchorElement) {
            var c = a.getAttribute("data-lynx-mode");
            switch (c) {
              case "async":
              case "asynclazy":
              case "hover":
              case "origin":
                return [c, a];
              default:
                return null;
            }
          }
          return null;
        },
        hoverClick: function (a) {
          b("FBLynxBase").revertSwapIfLynxURIPresent(a);
        },
        mouseover: function (a) {
          b("FBLynxBase").swapLinkWithUnshimmedLink(a);
        },
        contextmenu: function (a) {
          b("FBLynxBase").revertSwapIfLynxURIPresent(a);
        },
      };
    e.exports = i;
  },
  null
);
__d(
  "routeBuilderUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.split("/");
      return a
        .filter(function (a) {
          return a !== "";
        })
        .map(function (a) {
          var b = a.split(/{|}/);
          if (b.length < 3) return { isToken: !1, part: a };
          else {
            a = b[0];
            var c = b[1];
            b = b[2];
            var d = c[0] === "?",
              e = c[d ? 1 : 0] === "*";
            c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
            return {
              isToken: !0,
              optional: d,
              catchAll: e,
              prefix: a,
              suffix: b,
              token: c,
            };
          }
        });
    }
    f.getPathParts = a;
  },
  66
);
__d(
  "jsRouteBuilder",
  ["ConstUriUtils", "FBLogger", "routeBuilderUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "#";
    function a(a, b, e, f, g) {
      g === void 0 && (g = !1);
      var i = d("routeBuilderUtils").getPathParts(a);
      function j(j) {
        try {
          var k =
              f != null
                ? babelHelpers["extends"]({}, f, j)
                : (j = j) != null
                ? j
                : {},
            l = {};
          j = "";
          var m = !1;
          j = i.reduce(function (a, c) {
            if (!c.isToken) return a + "/" + c.part;
            else {
              var d,
                e = c.optional,
                f = c.prefix,
                g = c.suffix;
              c = c.token;
              if (e && m) return a;
              d = (d = k[c]) != null ? d : b[c];
              if (d == null && e) {
                m = !0;
                return a;
              }
              if (d == null)
                throw new Error("Missing required template parameter: " + c);
              if (d === "")
                throw new Error(
                  "Required template parameter is an empty string: " + c
                );
              l[c] = !0;
              return a + "/" + f + d + g;
            }
          }, "");
          a.slice(-1) === "/" && (j += "/");
          j === "" && (j = "/");
          var n = d("ConstUriUtils").getUri(j);
          for (var o in k) {
            var p = k[o];
            !l[o] &&
              p != null &&
              n != null &&
              (e != null && e.has(o)
                ? p !== !1 && (n = n.addQueryParam(o, null))
                : (n = n.addQueryParam(o, p)));
          }
          return [n, j];
        } catch (b) {
          p = b == null ? void 0 : b.message;
          o = c("FBLogger")("JSRouteBuilder")
            .blameToPreviousFrame()
            .blameToPreviousFrame();
          g && (o = o.blameToPreviousFrame());
          o.mustfix("Failed building URI for base path: %s message: %s", a, p);
          return [null, h];
        }
      }
      return {
        buildUri: function (a) {
          a = (a = j(a)[0]) != null ? a : d("ConstUriUtils").getUri(h);
          if (a == null)
            throw new Error("Not even the fallback URL parsed validly!");
          return a;
        },
        buildUriNullable: function (a) {
          return j(a)[0];
        },
        buildURL: function (a) {
          a = j(a);
          var b = a[0];
          a = a[1];
          return (b = b == null ? void 0 : b.toString()) != null ? b : a;
        },
        buildURLStringDEPRECATED: function (a) {
          a = j(a);
          var b = a[0];
          a = a[1];
          return (b = b == null ? void 0 : b.toString()) != null ? b : a;
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "XLynxAsyncCallbackControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/si/linkclick/ajax_callback/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "FBLynxLogging",
  ["AsyncRequest", "ODS", "XLynxAsyncCallbackControllerRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var b = c("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});
      new (c("AsyncRequest"))(b)
        .setData({ lynx_uri: a })
        .setErrorHandler(function (a) {
          a = a.getError();
          (h || (h = d("ODS"))).bumpEntityKey(
            3861,
            "linkshim",
            "click_log.post.fail." + a
          );
        })
        .setTransportErrorHandler(function (a) {
          a = a.getError();
          (h || (h = d("ODS"))).bumpEntityKey(
            3861,
            "linkshim",
            "click_log.post.transport_fail." + a
          );
        })
        .send();
    }
    g.log = a;
  },
  98
);
__d(
  "FocusEvent",
  ["Event", "Run", "ge", "getOrCreateDOMID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = !1;
    function j(a, b) {
      if (h[a]) {
        b = h[a].indexOf(b);
        b >= 0 && h[a].splice(b, 1);
        h[a].length === 0 && delete h[a];
      }
    }
    function k(a) {
      var b = a.getTarget();
      if (h[b.id] && h[b.id].length > 0) {
        var c = a.type === "focusin" || a.type === "focus";
        h[b.id].forEach(function (a) {
          a(c);
        });
      }
    }
    function l() {
      if (i) return;
      c("Event").listen(document.documentElement, "focusout", k);
      c("Event").listen(document.documentElement, "focusin", k);
      i = !0;
    }
    function a(a, b, e) {
      e === void 0 && (e = { cleanupOnLeave: !0 });
      l();
      var f = c("getOrCreateDOMID")(a);
      h[f] || (h[f] = []);
      h[f].push(b);
      var g = !1;
      function i() {
        g || (j(f, b), k && (k.remove(), (k = null)), (g = !0));
      }
      var k =
        ((a = e) == null ? void 0 : a.cleanupOnLeave) === !0
          ? d("Run").onLeave(function () {
              c("ge")(f) || i();
            })
          : null;
      return {
        remove: function () {
          i();
        },
      };
    }
    g.listen = a;
  },
  98
);
__d(
  "isStringNullOrEmpty",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a == null || a === "";
    }
    f["default"] = a;
  },
  66
);
__d(
  "tooltipPropsFor",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      if (!a) return {};
      a = { "data-tooltip-content": a, "data-hover": "tooltip" };
      b && (a["data-tooltip-position"] = b);
      c && (a["data-tooltip-alignh"] = c);
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "TooltipData",
  [
    "DOM",
    "DataStore",
    "FBLogger",
    "URI",
    "getElementText",
    "ifRequired",
    "isStringNullOrEmpty",
    "isTextNode",
    "killswitch",
    "tooltipPropsFor",
  ],
  function (a, b, c, d, e, f) {
    var g;
    function h(a) {
      var c = a.getAttribute("data-tooltip-delay");
      c = c ? parseInt(c, 10) || 1e3 : 250;
      if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))
        return babelHelpers["extends"](
          {
            className: a.getAttribute("data-tooltip-root-class"),
            content: a.getAttribute("data-tooltip-content"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay:
              a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction"),
          },
          b("DataStore").get(a, "tooltip")
        );
      else {
        var d;
        d = (d = b("DataStore").get(a, "tooltip")) != null ? d : {};
        var e = d.content;
        d = babelHelpers.objectWithoutPropertiesLoose(d, ["content"]);
        var f = a.getAttribute("data-tooltip-content");
        !b("isStringNullOrEmpty")(e) &&
          !b("isStringNullOrEmpty")(f) &&
          b("FBLogger")("tooltip").warn(
            'Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore',
            a.getAttribute("data-tooltip-content")
          );
        return babelHelpers["extends"](
          {
            className: a.getAttribute("data-tooltip-root-class"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay:
              a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction"),
            content: (a = (c = f) != null ? c : e) != null ? a : null,
          },
          d
        );
      }
    }
    function i(a, c) {
      var d = h(a);
      if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))
        b("DataStore").set(a, "tooltip", {
          content: c.content || d.content,
          position: c.position || d.position,
          alignH: c.alignH || d.alignH,
          suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
          overflowDisplay: c.overflowDisplay || d.overflowDisplay,
          persistOnClick: c.persistOnClick || d.persistOnClick,
        });
      else {
        !b("isStringNullOrEmpty")(c.content) &&
          !b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content")) &&
          b("FBLogger")("tooltip").warn(
            'Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid',
            a.getAttribute("data-tooltip-content")
          );
        b("DataStore").set(a, "tooltip", {
          content:
            c.content ||
            ((a = b("DataStore").get(a, "tooltip")) != null ? a : {}).content,
          position: c.position || d.position,
          alignH: c.alignH || d.alignH,
          suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
          overflowDisplay: c.overflowDisplay || d.overflowDisplay,
          persistOnClick: c.persistOnClick || d.persistOnClick,
        });
      }
    }
    function j(a, b) {
      i(a, b), a.setAttribute("data-hover", "tooltip");
    }
    function k(a, b) {}
    var l = {
      remove: function (a, c) {
        c = c === void 0 ? {} : c;
        c = c.onlyCleanupDataStore;
        c = c === void 0 ? !1 : c;
        b("DataStore").remove(a, "tooltip");
        c ||
          (a.removeAttribute("data-hover"),
          a.removeAttribute("data-tooltip-position"),
          a.removeAttribute("data-tooltip-alignh"),
          b("ifRequired")("Tooltip", function (b) {
            b.isActive(a) && b.hide();
          }));
      },
      set: function (a, c, d, e) {
        k(a, c);
        if (c instanceof (g || (g = b("URI"))))
          a.setAttribute("data-tooltip-uri", c),
            b("ifRequired")("Tooltip", function (b) {
              b.isActive(a) && b.fetchIfNecessary(a);
            });
        else if (
          b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")
        ) {
          var f = l._store({ context: a, content: c, position: d, alignH: e });
          typeof f.content !== "string"
            ? a.setAttribute(
                "data-tooltip-content",
                b("getElementText")(f.content)
              )
            : a.setAttribute("data-tooltip-content", f.content);
          l.refreshIfActive(a);
        } else
          a.removeAttribute("data-tooltip-content"),
            l._store({ context: a, content: c, position: d, alignH: e }),
            l.refreshIfActive(a);
      },
      refreshIfActive: function (a) {
        b("ifRequired")("Tooltip", function (b) {
          b.isActive(a) && b.show(a);
        });
      },
      _store: function (a) {
        var c = a.context,
          d = a.content,
          e = a.position;
        a = a.alignH;
        k(c, d);
        b("isTextNode")(d) && (d = b("getElementText")(d));
        var f = !1;
        typeof d !== "string"
          ? (d = b("DOM").create("div", {}, d))
          : (f = d === "");
        a = { alignH: a, content: d, position: e, suppress: f };
        j(c, a);
        return a;
      },
      propsFor: b("tooltipPropsFor"),
      enableDisplayOnOverflow: function (a) {
        a.removeAttribute("data-tooltip-display"),
          j(a, { overflowDisplay: !0 });
      },
      enablePersistOnClick: function (a) {
        a.removeAttribute("data-pitloot-persistOnClick"),
          j(a, { persistOnClick: !0 });
      },
      suppress: function (a, b) {
        i(a, { suppress: b });
      },
      _get: h,
    };
    e.exports = l;
  },
  null
);
__d(
  "Focus",
  [
    "cx",
    "CSS",
    "Event",
    "FocusEvent",
    "KeyStatus",
    "TooltipData",
    "ifRequired",
  ],
  function (a, b, c, d, e, f, g, h) {
    function a(a, b) {
      b === void 0 && (b = !1);
      if (a) {
        var e = c("ifRequired")(
          "VirtualCursorStatus",
          function (a) {
            return a.isVirtualCursorTriggered();
          },
          function () {
            return !1;
          }
        );
        b || d("KeyStatus").isKeyDown() || e ? k(a) : i(a);
      }
    }
    function i(a) {
      if (a) {
        d("CSS").addClass(a, "_5f0v");
        var b = c("Event").listen(a, "blur", function () {
          a && d("CSS").removeClass(a, "_5f0v"), b.remove();
        });
        d("TooltipData").suppress(a, !0);
        k(a);
        d("TooltipData").suppress(a, !1);
      }
    }
    function b(a, b, c) {
      c === void 0 && (c = { cleanupOnLeave: !0 });
      d("CSS").addClass(a, "_5f0v");
      return d("FocusEvent").listen(
        a,
        function () {
          for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
            d[e] = arguments[e];
          return j.apply(void 0, [a, b].concat(d));
        },
        c
      );
    }
    function j(a, b, e) {
      d("CSS").addClass(a, "_5f0v");
      a = c("ifRequired")(
        "FocusRing",
        function (a) {
          return a.usingKeyboardNavigation();
        },
        function () {
          return !0;
        }
      );
      e = e && a;
      d("CSS").conditionClass(b, "_3oxt", e);
      d("CSS").conditionClass(b, "_16jm", e);
    }
    function k(a) {
      try {
        (a.tabIndex = a.tabIndex), a.focus();
      } catch (a) {}
    }
    g.set = a;
    g.setWithoutOutline = i;
    g.relocate = b;
    g.performRelocation = j;
  },
  98
);
__d(
  "EnvironmentTimezoneDecisionTree-tz2024a",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = {
      instant: 1132117200,
      0: {
        instant: 1531536300,
        0: { timezone: 0 },
        3600: {
          instant: 1191290400,
          0: {
            instant: 2019715200,
            3600: { timezone: 86 },
            0: { timezone: 189 },
          },
          3600: { timezone: 54 },
        },
        7200: { timezone: 300 },
      },
      10800: {
        instant: 1087737300,
        10800: {
          instant: 2019715200,
          10800: { timezone: 20 },
          7200: {
            instant: 1546329600,
            10800: { timezone: 168 },
            7200: { timezone: 170 },
          },
        },
        14400: {
          instant: 2019715200,
          10800: {
            instant: 1546329600,
            10800: {
              instant: 1309636800,
              10800: { timezone: 72 },
              14400: { timezone: 116 },
            },
            14400: { timezone: 423 },
          },
          14400: {
            instant: 1472363100,
            14400: { timezone: 402 },
            10800: { timezone: 416 },
          },
        },
      },
      3600: {
        instant: 1309636800,
        3600: {
          instant: 1191290400,
          3600: { timezone: 96 },
          7200: { timezone: 133 },
        },
        7200: { timezone: 12 },
      },
      7200: {
        instant: 1161703800,
        7200: {
          instant: 1250463600,
          7200: {
            instant: 1354016700,
            7200: { timezone: 141 },
            3600: { timezone: 190 },
          },
          10800: {
            instant: 1220877e3,
            7200: {
              instant: 1309636800,
              7200: { timezone: 53 },
              10800: {
                instant: 1317033450,
                7200: { timezone: 108 },
                10800: { timezone: 319 },
              },
            },
            10800: {
              instant: 2019715200,
              10800: { timezone: 315 },
              7200: { timezone: 70 },
            },
          },
          3600: { timezone: 191 },
        },
        10800: {
          instant: 1396141098,
          10800: {
            instant: 2019715200,
            10800: {
              instant: 1546329600,
              7200: { timezone: 76 },
              10800: { timezone: 411 },
            },
            7200: {
              instant: 1783022400,
              10800: {
                instant: 1099178844,
                7200: { timezone: 81 },
                10800: { timezone: 404 },
              },
              7200: { timezone: 115 },
            },
          },
          7200: {
            instant: 1487156400,
            10800: {
              instant: 2019715200,
              7200: { timezone: 318 },
              10800: { timezone: 134 },
            },
            7200: { timezone: 19 },
          },
          14400: { timezone: 417 },
        },
      },
      "-36000": {
        instant: 1309636800,
        "-32400": { timezone: 192 },
        "-36000": { timezone: 3 },
      },
      "-32400": {
        instant: 1309636800,
        "-28800": { timezone: 4 },
        "-32400": { timezone: 449 },
      },
      "-14400": {
        instant: 1331826750,
        "-14400": { timezone: 21 },
        "-16200": { timezone: 139 },
        "-10800": {
          instant: 1130643321,
          "-10800": { timezone: 37 },
          "-14400": {
            instant: 2019715200,
            "-14400": {
              instant: 1257050196,
              "-14400": { timezone: 227 },
              "-10800": { timezone: 257 },
            },
            "-10800": { timezone: 276 },
          },
        },
        "-18000": { timezone: 232 },
      },
      "-10800": {
        instant: 1205159083,
        "-10800": {
          instant: 1250463600,
          "-10800": {
            instant: 1324430100,
            "-10800": {
              instant: 1354016700,
              "-7200": { timezone: 195 },
              "-10800": { timezone: 24 },
            },
            "-7200": { timezone: 206 },
          },
          "-7200": { timezone: 478 },
          "-14400": {
            instant: 1309636800,
            "-14400": {
              instant: 1783022400,
              "-10800": { timezone: 271 },
              "-14400": { timezone: 41 },
            },
            "-10800": { timezone: 354 },
          },
        },
        "-7200": {
          instant: 1087274990,
          "-10800": {
            instant: 1235670300,
            "-7200": {
              instant: 1086812715,
              "-10800": { timezone: 10 },
              "-14400": { timezone: 203 },
            },
            "-10800": { timezone: 11 },
          },
          "-14400": {
            instant: 1086003636,
            "-10800": { timezone: 196 },
            "-14400": {
              instant: 1087737300,
              "-14400": {
                instant: 1095133950,
                "-14400": { timezone: 200 },
                "-10800": { timezone: 202 },
              },
              "-10800": { timezone: 204 },
            },
          },
          "-7200": { timezone: 256 },
        },
        "-14400": {
          instant: 2019715200,
          "-10800": {
            instant: 1309636800,
            "-10800": { timezone: 9 },
            "-14400": { timezone: 111 },
          },
          "-14400": {
            instant: 1076642325,
            "-10800": { timezone: 23 },
            "-14400": { timezone: 218 },
          },
        },
      },
      "-18000": {
        instant: 1191290400,
        "-18000": {
          instant: 1331449671,
          "-18000": { timezone: 33 },
          "-14400": {
            instant: 1783022400,
            "-18000": { timezone: 222 },
            "-14400": {
              instant: 1309636800,
              "-14400": { timezone: 236 },
              "-18000": { timezone: 269 },
            },
          },
          "-21600": { timezone: 234 },
        },
        "-14400": {
          instant: 1087737300,
          "-14400": {
            instant: 1487156400,
            "-18000": { timezone: 7 },
            "-14400": { timezone: 228 },
          },
          "-18000": {
            instant: 1161703800,
            "-14400": { timezone: 233 },
            "-18000": { timezone: 240 },
          },
        },
        "-21600": { timezone: 40 },
      },
      "-25200": {
        instant: 1333269930,
        "-18000": {
          instant: 1783022400,
          "-21600": { timezone: 207 },
          "-18000": { timezone: 263 },
        },
        "-21600": {
          instant: 1206083700,
          "-21600": { timezone: 2 },
          "-25200": {
            instant: 2019715200,
            "-25200": { timezone: 490 },
            "-21600": { timezone: 266 },
          },
        },
        "-25200": {
          instant: 1309636800,
          "-21600": {
            instant: 2019715200,
            "-21600": { timezone: 216 },
            "-25200": { timezone: 93 },
          },
          "-25200": { timezone: 5 },
        },
      },
      "-21600": {
        instant: 1309636800,
        "-21600": {
          instant: 1154307150,
          "-21600": { timezone: 32 },
          "-18000": {
            instant: 1117323900,
            "-21600": {
              instant: 1146910500,
              "-18000": { timezone: 61 },
              "-21600": { timezone: 63 },
            },
            "-18000": { timezone: 97 },
          },
        },
        "-18000": {
          instant: 1206083700,
          "-21600": {
            instant: 1783022400,
            "-18000": {
              instant: 2019715200,
              "-18000": { timezone: 213 },
              "-21600": { timezone: 252 },
            },
            "-21600": { timezone: 94 },
          },
          "-18000": {
            instant: 1169100450,
            "-21600": {
              instant: 1099207737,
              "-21600": { timezone: 6 },
              "-18000": { timezone: 142 },
            },
            "-18000": { timezone: 274 },
          },
        },
      },
      "-28800": {
        instant: 2019715200,
        "-25200": {
          instant: 1546329600,
          "-28800": { timezone: 27 },
          "-25200": { timezone: 223 },
        },
        "-28800": {
          instant: 1206083700,
          "-25200": { timezone: 1 },
          "-28800": {
            instant: 1309636800,
            "-25200": { timezone: 91 },
            "-28800": { timezone: 464 },
          },
        },
        "-32400": { timezone: 255 },
      },
      "-7200": {
        instant: 2019715200,
        "-10800": {
          instant: 1546329600,
          "-10800": { timezone: 138 },
          "-7200": { timezone: 25 },
        },
        "-7200": { timezone: 22 },
      },
      "-3600": {
        instant: 2019715200,
        "-7200": { timezone: 277 },
        "-3600": {
          instant: 1309636800,
          0: { timezone: 109 },
          "-3600": { timezone: 349 },
        },
      },
      "-12600": { timezone: 38 },
      28800: {
        instant: 1087737300,
        28800: {
          instant: 1546329600,
          39600: { timezone: 291 },
          28800: {
            instant: 1206083700,
            28800: { timezone: 42 },
            32400: { timezone: 13 },
          },
        },
        32400: {
          instant: 1309636800,
          32400: { timezone: 121 },
          28800: { timezone: 342 },
        },
      },
      25200: {
        instant: 1087737300,
        25200: {
          instant: 2019715200,
          25200: {
            instant: 1265256900,
            18e3: { timezone: 292 },
            25200: { timezone: 66 },
          },
          18e3: { timezone: 301 },
        },
        28800: {
          instant: 1309636800,
          25200: {
            instant: 1191290400,
            25200: { timezone: 320 },
            28800: { timezone: 326 },
          },
          28800: { timezone: 120 },
        },
      },
      36e3: {
        instant: 2019715200,
        36e3: {
          instant: 1309636800,
          36e3: { timezone: 293 },
          39600: { timezone: 123 },
        },
        32400: { timezone: 323 },
        39600: {
          instant: 1309636800,
          39600: { timezone: 334 },
          36e3: { timezone: 441 },
        },
      },
      39600: {
        instant: 1309636800,
        36e3: {
          instant: 1161703800,
          39600: {
            instant: 1280050200,
            39600: { timezone: 294 },
            36e3: { timezone: 360 },
          },
          36e3: { timezone: 15 },
        },
        43200: {
          instant: 2019715200,
          39600: {
            instant: 1427983200,
            36e3: { timezone: 124 },
            39600: { timezone: 336 },
          },
          36e3: { timezone: 344 },
        },
        37800: { timezone: 362 },
        39600: { timezone: 444 },
      },
      21600: {
        instant: 2019715200,
        18e3: {
          instant: 1546329600,
          18e3: {
            instant: 1309636800,
            18e3: { timezone: 295 },
            21600: { timezone: 333 },
          },
          21600: {
            instant: 1087737300,
            25200: { timezone: 304 },
            21600: { timezone: 332 },
          },
        },
        25200: {
          instant: 1464966450,
          25200: {
            instant: 1461268125,
            25200: { timezone: 310 },
            21600: { timezone: 341 },
          },
          21600: { timezone: 327 },
        },
        21600: {
          instant: 1250463600,
          21600: {
            instant: 1102530600,
            18e3: { timezone: 311 },
            21600: { timezone: 340 },
          },
          25200: {
            instant: 1309636800,
            21600: { timezone: 17 },
            25200: { timezone: 119 },
          },
        },
        19800: { timezone: 82 },
      },
      46800: {
        instant: 1309636800,
        43200: { timezone: 100 },
        46800: {
          instant: 1479759750,
          46800: { timezone: 564 },
          50400: { timezone: 471 },
        },
      },
      43200: {
        instant: 1294843500,
        39600: { timezone: 125 },
        46800: { timezone: 447 },
        43200: { timezone: 448 },
      },
      18e3: {
        instant: 1080340650,
        14400: { timezone: 306 },
        18e3: {
          instant: 1250463600,
          18e3: {
            instant: 1087737300,
            21600: { timezone: 307 },
            18e3: { timezone: 90 },
          },
          21600: {
            instant: 1309636800,
            18e3: { timezone: 105 },
            21600: { timezone: 118 },
          },
        },
      },
      14400: {
        instant: 1087737300,
        18e3: {
          instant: 1309636800,
          18e3: {
            instant: 1427983200,
            18e3: { timezone: 146 },
            14400: { timezone: 347 },
          },
          14400: {
            instant: 1191290400,
            14400: { timezone: 338 },
            18e3: { timezone: 117 },
          },
        },
        14400: {
          instant: 1235670300,
          14400: { timezone: 8 },
          18e3: { timezone: 89 },
        },
      },
      32400: {
        instant: 1309636800,
        36e3: {
          instant: 1427983200,
          28800: { timezone: 313 },
          32400: { timezone: 122 },
        },
        28800: { timezone: 314 },
        32400: {
          instant: 1487156400,
          32400: { timezone: 68 },
          30600: { timezone: 331 },
        },
      },
      16200: { timezone: 322 },
      20700: { timezone: 145 },
      19800: { timezone: 71 },
      12600: { timezone: 339 },
      23400: { timezone: 346 },
      37800: { timezone: 14 },
      34200: { timezone: 358 },
      31500: { timezone: 359 },
      "-39600": {
        instant: 2019715200,
        46800: {
          instant: 1546329600,
          50400: { timezone: 440 },
          46800: { timezone: 446 },
        },
        "-39600": { timezone: 457 },
      },
      49500: { timezone: 442 },
      50400: { timezone: 452 },
      "-34200": { timezone: 456 },
      41400: { timezone: 460 },
    };
  },
  null
);
__d(
  "TimezoneNamesData-tz2024a",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      version: "2024a",
      zoneNames: {
        0: "Etc/UTC",
        1: "America/Los_Angeles",
        2: "America/Denver",
        3: "Pacific/Honolulu",
        4: "America/Anchorage",
        5: "America/Phoenix",
        6: "America/Chicago",
        7: "America/New_York",
        8: "Asia/Dubai",
        9: "America/Argentina/San_Luis",
        10: "America/Argentina/Buenos_Aires",
        11: "America/Argentina/Salta",
        12: "Europe/Vienna",
        13: "Australia/Perth",
        14: "Australia/Broken_Hill",
        15: "Australia/Sydney",
        16: "Europe/Sarajevo",
        17: "Asia/Dhaka",
        18: "Europe/Brussels",
        19: "Europe/Sofia",
        20: "Asia/Bahrain",
        21: "America/La_Paz",
        22: "America/Noronha",
        23: "America/Campo_Grande",
        24: "America/Belem",
        25: "America/Sao_Paulo",
        26: "America/Nassau",
        27: "America/Dawson",
        28: "America/Vancouver",
        29: "America/Dawson_Creek",
        30: "America/Edmonton",
        31: "America/Rainy_River",
        32: "America/Regina",
        33: "America/Atikokan",
        34: "America/Iqaluit",
        35: "America/Toronto",
        36: "America/Blanc-Sablon",
        37: "America/Halifax",
        38: "America/St_Johns",
        39: "Europe/Zurich",
        40: "Pacific/Easter",
        41: "America/Santiago",
        42: "Asia/Shanghai",
        43: "America/Bogota",
        44: "America/Costa_Rica",
        45: "Asia/Nicosia",
        46: "Europe/Prague",
        47: "Europe/Berlin",
        48: "Europe/Copenhagen",
        49: "America/Santo_Domingo",
        50: "Pacific/Galapagos",
        51: "America/Guayaquil",
        52: "Europe/Tallinn",
        53: "Africa/Cairo",
        54: "Atlantic/Canary",
        55: "Europe/Madrid",
        56: "Europe/Helsinki",
        57: "Europe/Paris",
        58: "Europe/London",
        59: "Africa/Accra",
        60: "Europe/Athens",
        61: "America/Guatemala",
        62: "Asia/Hong_Kong",
        63: "America/Tegucigalpa",
        64: "Europe/Zagreb",
        65: "Europe/Budapest",
        66: "Asia/Jakarta",
        67: "Asia/Makassar",
        68: "Asia/Jayapura",
        69: "Europe/Dublin",
        70: "Asia/Jerusalem",
        71: "Asia/Kolkata",
        72: "Asia/Baghdad",
        73: "Atlantic/Reykjavik",
        74: "Europe/Rome",
        75: "America/Jamaica",
        76: "Asia/Amman",
        77: "Asia/Tokyo",
        78: "Africa/Nairobi",
        79: "Asia/Seoul",
        80: "Asia/Kuwait",
        81: "Asia/Beirut",
        82: "Asia/Colombo",
        83: "Europe/Vilnius",
        84: "Europe/Luxembourg",
        85: "Europe/Riga",
        86: "Africa/Casablanca",
        87: "Europe/Skopje",
        88: "Europe/Malta",
        89: "Indian/Mauritius",
        90: "Indian/Maldives",
        91: "America/Tijuana",
        92: "America/Hermosillo",
        93: "America/Mazatlan",
        94: "America/Mexico_City",
        95: "Asia/Kuala_Lumpur",
        96: "Africa/Lagos",
        97: "America/Managua",
        98: "Europe/Amsterdam",
        99: "Europe/Oslo",
        100: "Pacific/Auckland",
        101: "Asia/Muscat",
        102: "America/Panama",
        103: "America/Lima",
        104: "Asia/Manila",
        105: "Asia/Karachi",
        106: "Europe/Warsaw",
        107: "America/Puerto_Rico",
        108: "Asia/Gaza",
        109: "Atlantic/Azores",
        110: "Europe/Lisbon",
        111: "America/Asuncion",
        112: "Asia/Qatar",
        113: "Europe/Bucharest",
        114: "Europe/Belgrade",
        115: "Europe/Kaliningrad",
        116: "Europe/Moscow",
        117: "Europe/Samara",
        118: "Asia/Yekaterinburg",
        119: "Asia/Omsk",
        120: "Asia/Krasnoyarsk",
        121: "Asia/Irkutsk",
        122: "Asia/Yakutsk",
        123: "Asia/Vladivostok",
        124: "Asia/Magadan",
        125: "Asia/Kamchatka",
        126: "Asia/Riyadh",
        127: "Europe/Stockholm",
        128: "Asia/Singapore",
        129: "Europe/Ljubljana",
        130: "Europe/Bratislava",
        131: "America/El_Salvador",
        132: "Asia/Bangkok",
        133: "Africa/Tunis",
        134: "Europe/Istanbul",
        135: "America/Port_of_Spain",
        136: "Asia/Taipei",
        137: "Europe/Kiev",
        138: "America/Montevideo",
        139: "America/Caracas",
        140: "Asia/Ho_Chi_Minh",
        141: "Africa/Johannesburg",
        142: "America/Winnipeg",
        143: "America/Detroit",
        144: "Australia/Melbourne",
        145: "Asia/Kathmandu",
        146: "Asia/Baku",
        147: "Africa/Abidjan",
        148: "Africa/Addis_Ababa",
        149: "Africa/Algiers",
        150: "Africa/Asmara",
        151: "Africa/Bamako",
        152: "Africa/Bangui",
        153: "Africa/Banjul",
        154: "Africa/Bissau",
        155: "Africa/Blantyre",
        156: "Africa/Brazzaville",
        157: "Africa/Bujumbura",
        158: "Africa/Ceuta",
        159: "Africa/Conakry",
        160: "Africa/Dakar",
        161: "Africa/Dar_es_Salaam",
        162: "Africa/Djibouti",
        163: "Africa/Douala",
        164: "Africa/El_Aaiun",
        165: "Africa/Freetown",
        166: "Africa/Gaborone",
        167: "Africa/Harare",
        168: "Africa/Juba",
        169: "Africa/Kampala",
        170: "Africa/Khartoum",
        171: "Africa/Kigali",
        172: "Africa/Kinshasa",
        173: "Africa/Libreville",
        174: "Africa/Lome",
        175: "Africa/Luanda",
        176: "Africa/Lubumbashi",
        177: "Africa/Lusaka",
        178: "Africa/Malabo",
        179: "Africa/Maputo",
        180: "Africa/Maseru",
        181: "Africa/Mbabane",
        182: "Africa/Mogadishu",
        183: "Africa/Monrovia",
        184: "Africa/Ndjamena",
        185: "Africa/Niamey",
        186: "Africa/Nouakchott",
        187: "Africa/Ouagadougou",
        188: "Africa/Porto-Novo",
        189: "Africa/Sao_Tome",
        190: "Africa/Tripoli",
        191: "Africa/Windhoek",
        192: "America/Adak",
        193: "America/Anguilla",
        194: "America/Antigua",
        195: "America/Araguaina",
        196: "America/Argentina/Catamarca",
        197: "America/Argentina/Cordoba",
        198: "America/Argentina/Jujuy",
        199: "America/Argentina/La_Rioja",
        200: "America/Argentina/Mendoza",
        201: "America/Argentina/Rio_Gallegos",
        202: "America/Argentina/San_Juan",
        203: "America/Argentina/Tucuman",
        204: "America/Argentina/Ushuaia",
        205: "America/Aruba",
        206: "America/Bahia",
        207: "America/Bahia_Banderas",
        208: "America/Barbados",
        209: "America/Belize",
        210: "America/Boa_Vista",
        211: "America/Boise",
        212: "America/Cambridge_Bay",
        213: "America/Cancun",
        214: "America/Cayenne",
        215: "America/Cayman",
        216: "America/Chihuahua",
        217: "America/Creston",
        218: "America/Cuiaba",
        219: "America/Curacao",
        220: "America/Danmarkshavn",
        221: "America/Dominica",
        222: "America/Eirunepe",
        223: "America/Fort_Nelson",
        224: "America/Fortaleza",
        225: "America/Glace_Bay",
        226: "America/Godthab",
        227: "America/Goose_Bay",
        228: "America/Grand_Turk",
        229: "America/Grenada",
        230: "America/Guadeloupe",
        231: "America/Guyana",
        232: "America/Havana",
        233: "America/Indiana/Indianapolis",
        234: "America/Indiana/Knox",
        235: "America/Indiana/Marengo",
        236: "America/Indiana/Petersburg",
        237: "America/Indiana/Tell_City",
        238: "America/Indiana/Vevay",
        239: "America/Indiana/Vincennes",
        240: "America/Indiana/Winamac",
        241: "America/Indianapolis",
        242: "America/Inuvik",
        243: "America/Juneau",
        244: "America/Kentucky/Louisville",
        245: "America/Kentucky/Monticello",
        246: "America/Kralendijk",
        247: "America/Lower_Princes",
        248: "America/Maceio",
        249: "America/Manaus",
        250: "America/Marigot",
        251: "America/Martinique",
        252: "America/Matamoros",
        253: "America/Menominee",
        254: "America/Merida",
        255: "America/Metlakatla",
        256: "America/Miquelon",
        257: "America/Moncton",
        258: "America/Monterrey",
        259: "America/Montreal",
        260: "America/Montserrat",
        261: "America/Nipigon",
        262: "America/Nome",
        263: "America/North_Dakota/Beulah",
        264: "America/North_Dakota/Center",
        265: "America/North_Dakota/New_Salem",
        266: "America/Ojinaga",
        267: "America/Pangnirtung",
        268: "America/Paramaribo",
        269: "America/Port-au-Prince",
        270: "America/Porto_Velho",
        271: "America/Punta_Arenas",
        272: "America/Rankin_Inlet",
        273: "America/Recife",
        274: "America/Resolute",
        275: "America/Rio_Branco",
        276: "America/Santarem",
        277: "America/Scoresbysund",
        278: "America/Sitka",
        279: "America/St_Barthelemy",
        280: "America/St_Kitts",
        281: "America/St_Lucia",
        282: "America/St_Thomas",
        283: "America/St_Vincent",
        284: "America/Swift_Current",
        285: "America/Thule",
        286: "America/Thunder_Bay",
        287: "America/Tortola",
        288: "America/Whitehorse",
        289: "America/Yakutat",
        290: "America/Yellowknife",
        291: "Antarctica/Casey",
        292: "Antarctica/Davis",
        293: "Antarctica/DumontDUrville",
        294: "Antarctica/Macquarie",
        295: "Antarctica/Mawson",
        296: "Antarctica/McMurdo",
        297: "Antarctica/Palmer",
        298: "Antarctica/Rothera",
        299: "Antarctica/Syowa",
        300: "Antarctica/Troll",
        301: "Antarctica/Vostok",
        302: "Arctic/Longyearbyen",
        303: "Asia/Aden",
        304: "Asia/Almaty",
        305: "Asia/Anadyr",
        306: "Asia/Aqtau",
        307: "Asia/Aqtobe",
        308: "Asia/Ashgabat",
        309: "Asia/Atyrau",
        310: "Asia/Barnaul",
        311: "Asia/Bishkek",
        312: "Asia/Brunei",
        313: "Asia/Chita",
        314: "Asia/Choibalsan",
        315: "Asia/Damascus",
        316: "Asia/Dili",
        317: "Asia/Dushanbe",
        318: "Asia/Famagusta",
        319: "Asia/Hebron",
        320: "Asia/Hovd",
        321: "Asia/Istanbul",
        322: "Asia/Kabul",
        323: "Asia/Khandyga",
        324: "Asia/Kuching",
        325: "Asia/Macau",
        326: "Asia/Novokuznetsk",
        327: "Asia/Novosibirsk",
        328: "Asia/Oral",
        329: "Asia/Phnom_Penh",
        330: "Asia/Pontianak",
        331: "Asia/Pyongyang",
        332: "Asia/Qostanay",
        333: "Asia/Qyzylorda",
        334: "Asia/Sakhalin",
        335: "Asia/Samarkand",
        336: "Asia/Srednekolymsk",
        337: "Asia/Tashkent",
        338: "Asia/Tbilisi",
        339: "Asia/Tehran",
        340: "Asia/Thimphu",
        341: "Asia/Tomsk",
        342: "Asia/Ulaanbaatar",
        343: "Asia/Urumqi",
        344: "Asia/Ust-Nera",
        345: "Asia/Vientiane",
        346: "Asia/Yangon",
        347: "Asia/Yerevan",
        348: "Atlantic/Bermuda",
        349: "Atlantic/Cape_Verde",
        350: "Atlantic/Faroe",
        351: "Atlantic/Madeira",
        352: "Atlantic/South_Georgia",
        353: "Atlantic/St_Helena",
        354: "Atlantic/Stanley",
        355: "Australia/Adelaide",
        356: "Australia/Brisbane",
        357: "Australia/Currie",
        358: "Australia/Darwin",
        359: "Australia/Eucla",
        360: "Australia/Hobart",
        361: "Australia/Lindeman",
        362: "Australia/Lord_Howe",
        363: "CET",
        364: "CST6CDT",
        365: "EET",
        366: "EST",
        367: "EST5EDT",
        368: "Etc/GMT",
        369: "Etc/GMT+0",
        370: "Etc/GMT+1",
        371: "Etc/GMT+10",
        372: "Etc/GMT+11",
        373: "Etc/GMT+12",
        374: "Etc/GMT+2",
        375: "Etc/GMT+3",
        376: "Etc/GMT+4",
        377: "Etc/GMT+5",
        378: "Etc/GMT+6",
        379: "Etc/GMT+7",
        380: "Etc/GMT+8",
        381: "Etc/GMT+9",
        382: "Etc/GMT-0",
        383: "Etc/GMT-1",
        384: "Etc/GMT-10",
        385: "Etc/GMT-11",
        386: "Etc/GMT-12",
        387: "Etc/GMT-13",
        388: "Etc/GMT-14",
        389: "Etc/GMT-2",
        390: "Etc/GMT-3",
        391: "Etc/GMT-4",
        392: "Etc/GMT-5",
        393: "Etc/GMT-6",
        394: "Etc/GMT-7",
        395: "Etc/GMT-8",
        396: "Etc/GMT-9",
        397: "Etc/GMT0",
        398: "Etc/Greenwich",
        399: "Etc/Universal",
        400: "Etc/Zulu",
        401: "Europe/Andorra",
        402: "Europe/Astrakhan",
        403: "Europe/Busingen",
        404: "Europe/Chisinau",
        405: "Europe/Gibraltar",
        406: "Europe/Guernsey",
        407: "Europe/Isle_of_Man",
        408: "Europe/Jersey",
        409: "Europe/Kirov",
        410: "Europe/Mariehamn",
        411: "Europe/Minsk",
        412: "Europe/Monaco",
        413: "Europe/Nicosia",
        414: "Europe/Podgorica",
        415: "Europe/San_Marino",
        416: "Europe/Saratov",
        417: "Europe/Simferopol",
        418: "Europe/Tirane",
        419: "Europe/Ulyanovsk",
        420: "Europe/Uzhgorod",
        421: "Europe/Vaduz",
        422: "Europe/Vatican",
        423: "Europe/Volgograd",
        424: "Europe/Zaporozhye",
        425: "GMT",
        426: "HST",
        427: "Indian/Antananarivo",
        428: "Indian/Chagos",
        429: "Indian/Christmas",
        430: "Indian/Cocos",
        431: "Indian/Comoro",
        432: "Indian/Kerguelen",
        433: "Indian/Mahe",
        434: "Indian/Mayotte",
        435: "Indian/Reunion",
        436: "MET",
        437: "MST",
        438: "MST7MDT",
        439: "PST8PDT",
        440: "Pacific/Apia",
        441: "Pacific/Bougainville",
        442: "Pacific/Chatham",
        443: "Pacific/Chuuk",
        444: "Pacific/Efate",
        445: "Pacific/Enderbury",
        446: "Pacific/Fakaofo",
        447: "Pacific/Fiji",
        448: "Pacific/Funafuti",
        449: "Pacific/Gambier",
        450: "Pacific/Guadalcanal",
        451: "Pacific/Guam",
        452: "Pacific/Kiritimati",
        453: "Pacific/Kosrae",
        454: "Pacific/Kwajalein",
        455: "Pacific/Majuro",
        456: "Pacific/Marquesas",
        457: "Pacific/Midway",
        458: "Pacific/Nauru",
        459: "Pacific/Niue",
        460: "Pacific/Norfolk",
        461: "Pacific/Noumea",
        462: "Pacific/Pago_Pago",
        463: "Pacific/Palau",
        464: "Pacific/Pitcairn",
        465: "Pacific/Pohnpei",
        466: "Pacific/Port_Moresby",
        467: "Pacific/Rarotonga",
        468: "Pacific/Saipan",
        469: "Pacific/Tahiti",
        470: "Pacific/Tarawa",
        471: "Pacific/Tongatapu",
        472: "Pacific/Wake",
        473: "Pacific/Wallis",
        474: "UTC",
        475: "WET",
        476: "Asia/Calcutta",
        477: "Asia/Katmandu",
        478: "America/Nuuk",
        479: "America/Buenos_Aires",
        480: "Asia/Rangoon",
        481: "Asia/Saigon",
        482: "America/Catamarca",
        483: "America/Cordoba",
        484: "America/Louisville",
        485: "America/Mendoza",
        486: "Africa/Asmera",
        487: "Africa/Timbuktu",
        488: "America/Argentina/ComodRivadavia",
        489: "America/Atka",
        490: "America/Ciudad_Juarez",
        491: "America/Coral_Harbour",
        492: "America/Ensenada",
        493: "America/Fort_Wayne",
        494: "America/Jujuy",
        495: "America/Knox_IN",
        496: "America/Porto_Acre",
        497: "America/Rosario",
        498: "America/Santa_Isabel",
        499: "America/Shiprock",
        500: "Antarctica/South_Pole",
        501: "Asia/Ashkhabad",
        502: "Asia/Chongqing",
        503: "Asia/Chungking",
        504: "Asia/Dacca",
        505: "Asia/Harbin",
        506: "Asia/Kashgar",
        507: "Asia/Macao",
        508: "Asia/Tel_Aviv",
        509: "Asia/Thimbu",
        510: "Asia/Ujung_Pandang",
        511: "Asia/Ulan_Bator",
        512: "Atlantic/Faeroe",
        513: "Atlantic/Jan_Mayen",
        514: "Australia/Canberra",
        515: "Australia/LHI",
        516: "Australia/NSW",
        517: "Australia/North",
        518: "Australia/Queensland",
        519: "Australia/South",
        520: "Australia/Tasmania",
        521: "Australia/Victoria",
        522: "Australia/West",
        523: "Australia/Yancowinna",
        524: "Brazil/DeNoronha",
        525: "Brazil/East",
        526: "Brazil/West",
        527: "Canada/Atlantic",
        528: "Canada/Central",
        529: "Canada/Eastern",
        530: "Canada/Mountain",
        531: "Canada/Newfoundland",
        532: "Canada/Pacific",
        533: "Canada/Saskatchewan",
        534: "Canada/Yukon",
        535: "Chile/Continental",
        536: "Chile/EasterIsland",
        537: "Cuba",
        538: "Egypt",
        539: "Eire",
        540: "Etc/UCT",
        541: "Europe/Belfast",
        542: "Europe/Kyiv",
        543: "Europe/Tiraspol",
        544: "GB",
        545: "GB-Eire",
        546: "GMT+0",
        547: "GMT-0",
        548: "GMT0",
        549: "Greenwich",
        550: "Hongkong",
        551: "Iran",
        552: "Israel",
        553: "Jamaica",
        554: "Japan",
        555: "Kwajalein",
        556: "Libya",
        557: "Mexico/BajaNorte",
        558: "Mexico/BajaSur",
        559: "Mexico/General",
        560: "NZ",
        561: "NZ-CHAT",
        562: "PRC",
        563: "Pacific/Johnston",
        564: "Pacific/Kanton",
        565: "Pacific/Ponape",
        566: "Pacific/Samoa",
        567: "Pacific/Truk",
        568: "Pacific/Yap",
        569: "Poland",
        570: "Portugal",
        571: "ROC",
        572: "ROK",
        573: "Singapore",
        574: "Turkey",
        575: "UCT",
        576: "US/Alaska",
        577: "US/Aleutian",
        578: "US/Arizona",
        579: "US/Central",
        580: "US/East-Indiana",
        581: "US/Eastern",
        582: "US/Hawaii",
        583: "US/Indiana-Starke",
        584: "US/Michigan",
        585: "US/Mountain",
        586: "US/Pacific",
        587: "US/Samoa",
        588: "Universal",
        589: "W-SU",
        590: "Zulu",
      },
    };
  },
  null
);
__d(
  "TimezoneRulesFrom2009-tz2024a",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      version: "2024a",
      fromYear: 2009,
      ruleSets: [
        "1980 1 4 25 0 1 1980 1 10 31 2 0",
        "2008 3 4 lastFri 0s 1 2008 1 8 lastThu 24 0 2009 1 8 20 24 0 2010 1 8 10 24 0 2010 1 9 9 24 1 2010 1 9 lastThu 24 0 2014 1 5 15 24 1 2014 1 6 26 24 0 2014 1 7 31 24 1 2014 1 9 lastThu 24 0 2023 - 4 lastFri 0 1 2023 - 10 lastThu 24 0",
        "1997 1 4 4 0 1 1997 1 10 4 0 0 2013 1 3 lastFri 1 1 2013 1 10 lastFri 2 0",
        "2008 1 10 lastSun 2 1 2009 1 3 lastSun 2 0",
        "2008 1 6 1 0 1 2008 1 9 1 0 0 2009 1 6 1 0 1 2009 1 8 21 0 0 2010 1 5 2 0 1 2010 1 8 8 0 0 2011 1 4 3 0 1 2011 1 7 31 0 0 2012 2 4 lastSun 2 1 2012 1 7 20 3 0 2012 1 8 20 2 1 2012 1 9 30 3 0 2013 1 7 7 3 0 2013 1 8 10 2 1 2013 6 10 lastSun 3 0 2014 5 3 lastSun 2 1 2014 1 6 28 3 0 2014 1 8 2 2 1 2015 1 6 14 3 0 2015 1 7 19 2 1 2016 1 6 5 3 0 2016 1 7 10 2 1 2017 1 5 21 3 0 2017 1 7 2 2 1 2018 1 5 13 3 0 2018 1 6 17 2 1 2019 1 5 5 3 -1 2019 1 6 9 2 0 2020 1 4 19 3 -1 2020 1 5 31 2 0 2021 1 4 11 3 -1 2021 1 5 16 2 0 2022 1 3 27 3 -1 2022 1 5 8 2 0 2023 1 3 19 3 -1 2023 1 4 23 2 0 2024 1 3 10 3 -1 2024 1 4 14 2 0 2025 1 2 23 3 -1 2025 1 4 6 2 0 2026 1 2 15 3 -1 2026 1 3 22 2 0 2027 1 2 7 3 -1 2027 1 3 14 2 0 2028 1 1 23 3 -1 2028 1 3 5 2 0 2029 1 1 14 3 -1 2029 1 2 18 2 0 2029 1 12 30 3 -1 2030 1 2 10 2 0 2030 1 12 22 3 -1 2031 1 1 26 2 0 2031 1 12 14 3 -1 2032 1 1 18 2 0 2032 1 11 28 3 -1 2033 1 1 9 2 0 2033 1 11 20 3 -1 2033 1 12 25 2 0 2034 1 11 5 3 -1 2034 1 12 17 2 0 2035 1 10 28 3 -1 2035 1 12 9 2 0 2036 1 10 19 3 -1 2036 1 11 23 2 0 2037 1 10 4 3 -1 2037 1 11 15 2 0 2038 1 9 26 3 -1 2038 1 10 31 2 0 2039 1 9 18 3 -1 2039 1 10 23 2 0 2040 1 9 2 3 -1 2040 1 10 14 2 0 2041 1 8 25 3 -1 2041 1 9 29 2 0 2042 1 8 10 3 -1 2042 1 9 21 2 0 2043 1 8 2 3 -1 2043 1 9 13 2 0 2044 1 7 24 3 -1 2044 1 8 28 2 0 2045 1 7 9 3 -1 2045 1 8 20 2 0 2046 1 7 1 3 -1 2046 1 8 5 2 0 2047 1 6 23 3 -1 2047 1 7 28 2 0 2048 1 6 7 3 -1 2048 1 7 19 2 0 2049 1 5 30 3 -1 2049 1 7 4 2 0 2050 1 5 15 3 -1 2050 1 6 26 2 0 2051 1 5 7 3 -1 2051 1 6 18 2 0 2052 1 4 28 3 -1 2052 1 6 2 2 0 2053 1 4 13 3 -1 2053 1 5 25 2 0 2054 1 4 5 3 -1 2054 1 5 10 2 0 2055 1 3 28 3 -1 2055 1 5 2 2 0 2056 1 3 12 3 -1 2056 1 4 23 2 0 2057 1 3 4 3 -1 2057 1 4 8 2 0 2058 1 2 17 3 -1 2058 1 3 31 2 0 2059 1 2 9 3 -1 2059 1 3 23 2 0 2060 1 2 1 3 -1 2060 1 3 7 2 0 2061 1 1 16 3 -1 2061 1 2 27 2 0 2062 1 1 8 3 -1 2062 1 2 12 2 0 2062 1 12 31 3 -1 2063 1 2 4 2 0 2063 1 12 16 3 -1 2064 1 1 27 2 0 2064 1 12 7 3 -1 2065 1 1 11 2 0 2065 1 11 22 3 -1 2066 1 1 3 2 0 2066 1 11 14 3 -1 2066 1 12 26 2 0 2067 1 11 6 3 -1 2067 1 12 11 2 0 2068 1 10 21 3 -1 2068 1 12 2 2 0 2069 1 10 13 3 -1 2069 1 11 17 2 0 2070 1 10 5 3 -1 2070 1 11 9 2 0 2071 1 9 20 3 -1 2071 1 11 1 2 0 2072 1 9 11 3 -1 2072 1 10 16 2 0 2073 1 8 27 3 -1 2073 1 10 8 2 0 2074 1 8 19 3 -1 2074 1 9 30 2 0 2075 1 8 11 3 -1 2075 1 9 15 2 0 2076 1 7 26 3 -1 2076 1 9 6 2 0 2077 1 7 18 3 -1 2077 1 8 22 2 0 2078 1 7 10 3 -1 2078 1 8 14 2 0 2079 1 6 25 3 -1 2079 1 8 6 2 0 2080 1 6 16 3 -1 2080 1 7 21 2 0 2081 1 6 1 3 -1 2081 1 7 13 2 0 2082 1 5 24 3 -1 2082 1 6 28 2 0 2083 1 5 16 3 -1 2083 1 6 20 2 0 2084 1 4 30 3 -1 2084 1 6 11 2 0 2085 1 4 22 3 -1 2085 1 5 27 2 0 2086 1 4 14 3 -1 2086 1 5 19 2 0 2087 1 3 30 3 -1 2087 1 5 11 2 0",
        "2008 10 9 Sun>=1 2 0 2008 10 4 Sun>=1 2 -1",
        "1944 1 3 Sun>=15 2 0",
        "1985 1 10 15 0 0 1985 1 4 lastSun 0 1",
        "2008 1 3 lastSun 2s 1 2008 1 10 lastSun 2s 0",
        "2008 - 3 lastSun 1u 2 2008 - 10 lastSun 1u 0",
        "2008 - 3 lastSun 1u 1 2008 - 10 lastSun 1u 0",
        "2008 - 3 lastSun 0 1 2008 - 10 lastSun 0 0",
        "2008 3 3 lastSun 2s 1 2008 3 10 lastSun 2s 0",
        "2011 1 3 lastSun 2s 1 2011 1 10 lastSun 2s 0",
        "2008 8 3 lastSun 4 1 2008 8 10 lastSun 5 0",
        "2009 1 6 19 23 1 2009 1 12 31 24 0",
        "1949 1 5 1 0 1 1949 1 9 30 24 0",
        "1991 1 9 Sun>=11 2 0 1991 1 4 Sun>=11 2 1",
        "1979 1 5 13 3:30 1 1979 1 10 21 3:30 0",
        "1979 1 7 1 0 1 1979 1 10 1 0 0",
        "1979 1 5 13 3:30 1 1979 1 10 Sun>=16 3:30 0",
        "1998 1 3 lastSun 0 1",
        "2008 1 3 20 24 1 2008 1 9 20 24 0 2009 3 3 21 24 1 2009 3 9 21 24 0 2012 1 3 20 24 1 2012 1 9 20 24 0 2013 3 3 21 24 1 2013 3 9 21 24 0 2016 1 3 20 24 1 2016 1 9 20 24 0 2017 3 3 21 24 1 2017 3 9 21 24 0 2020 1 3 20 24 1 2020 1 9 20 24 0 2021 2 3 21 24 1 2021 2 9 21 24 0",
        "2007 1 4 1 3s 1 2007 1 10 1 3s 0",
        "2008 5 4 Fri<=1 2 1 2008 1 10 5 2 0 2009 1 9 27 2 0 2010 1 9 12 2 0 2011 1 10 2 2 0 2012 1 9 23 2 0 2013 - 3 Fri>=23 2 1 2013 - 10 lastSun 2 0",
        "1951 1 9 Sat>=8 25 0 1951 1 5 Sat>=1 24 1",
        "2008 5 3 lastThu 24 1 2008 4 10 lastFri 0s 0 2013 1 12 20 0 0 2014 8 3 lastThu 24 1 2014 9 10 lastFri 0s 0 2022 1 2 lastThu 24 1",
        "2005 1 3 lastSun 2:30 1",
        "1988 1 5 Sun>=8 2 1 1988 1 10 Sun>=8 3 0",
        "1941 1 9 14 0 0:20 1941 1 12 14 0 0",
        "2006 1 9 lastSat 2 0 2006 1 3 lastSat 2 1 2015 2 3 lastSat 2 1 2015 2 9 lastSat 0 0",
        "2008 1 6 1 0 1 2008 2 11 1 0 0 2009 1 4 15 0 1",
        "1967 1 5 1 1 1",
        "2008 2 3 lastFri 0 1 2008 1 9 1 0 0 2009 1 9 4 1 0 2010 1 3 26 0 1 2010 1 8 11 0 0 2011 1 4 1 0:1 1 2011 1 8 1 0 0 2011 1 8 30 0 1 2011 1 9 30 0 0 2012 3 3 lastThu 24 1 2012 1 9 21 1 0 2013 1 9 27 0 0 2014 1 10 24 0 0 2015 1 3 28 0 1 2015 1 10 23 1 0 2016 3 3 Sat<=30 1 1 2016 3 10 Sat<=30 1 0 2019 1 3 29 0 1 2019 1 10 Sat<=30 0 0 2020 2 3 Sat<=30 0 1 2020 1 10 24 1 0 2021 1 10 29 1 0 2022 1 3 27 0 1 2022 14 10 Sat<=30 2 0 2023 1 4 29 2 1 2024 1 4 20 2 1 2025 1 4 12 2 1 2026 29 3 Sat<=30 2 1 2036 1 10 18 2 0 2037 1 10 10 2 0 2038 1 9 25 2 0 2039 1 9 17 2 0 2040 1 9 1 2 0 2040 1 10 20 2 1 2040 28 10 Sat<=30 2 0 2041 1 8 24 2 0 2041 1 10 5 2 1 2042 1 8 16 2 0 2042 1 9 27 2 1 2043 1 8 1 2 0 2043 1 9 19 2 1 2044 1 7 23 2 0 2044 1 9 3 2 1 2045 1 7 15 2 0 2045 1 8 26 2 1 2046 1 6 30 2 0 2046 1 8 18 2 1 2047 1 6 22 2 0 2047 1 8 3 2 1 2048 1 6 6 2 0 2048 1 7 25 2 1 2049 1 5 29 2 0 2049 1 7 10 2 1 2050 1 5 21 2 0 2050 1 7 2 2 1 2051 1 5 6 2 0 2051 1 6 24 2 1 2052 1 4 27 2 0 2052 1 6 8 2 1 2053 1 4 12 2 0 2053 1 5 31 2 1 2054 1 4 4 2 0 2054 1 5 23 2 1 2055 1 5 8 2 1 2056 1 4 29 2 1 2057 1 4 14 2 1 2058 1 4 6 2 1 2059 - 3 Sat<=30 2 1 2068 1 10 20 2 0 2069 1 10 12 2 0 2070 1 10 4 2 0 2071 1 9 19 2 0 2072 1 9 10 2 0 2072 1 10 22 2 1 2072 - 10 Sat<=30 2 0 2073 1 9 2 2 0 2073 1 10 14 2 1 2074 1 8 18 2 0 2074 1 10 6 2 1 2075 1 8 10 2 0 2075 1 9 21 2 1 2076 1 7 25 2 0 2076 1 9 12 2 1 2077 1 7 17 2 0 2077 1 9 4 2 1 2078 1 7 9 2 0 2078 1 8 20 2 1 2079 1 6 24 2 0 2079 1 8 12 2 1 2080 1 6 15 2 0 2080 1 7 27 2 1 2081 1 6 7 2 0 2081 1 7 19 2 1 2082 1 5 23 2 0 2082 1 7 11 2 1 2083 1 5 15 2 0 2083 1 6 26 2 1 2084 1 4 29 2 0 2084 1 6 17 2 1 2085 1 4 21 2 0 2085 1 6 9 2 1 2086 1 4 13 2 0 2086 1 5 25 2 1",
        "1978 1 3 22 0 1 1978 1 9 21 0 0",
        "2008 1 4 Fri>=1 0 1 2008 1 11 1 0 0 2009 1 3 lastFri 0 1 2010 2 4 Fri>=1 0 1 2012 11 3 lastFri 0 1 2009 14 10 lastFri 0 0",
        "1944 1 3 lastSun 2s 0",
        "2008 2 3 lastSun 2s 0 2008 1 10 lastSun 2s 1",
        "1992 1 3 Sun>=1 2s 0",
        "1994 1 3 Sun>=1 2s 0",
        "2008 - 4 Sun>=1 2s 0 2008 - 10 Sun>=1 2s 1",
        "2008 - 10 Sun>=1 2s 1 2008 - 4 Sun>=1 2s 0",
        "2008 - 4 Sun>=1 2 0 2008 - 10 Sun>=1 2 0:30",
        "2000 1 2 lastSun 3 0 2009 1 11 29 2 1 2010 1 3 lastSun 3 0 2010 4 10 Sun>=21 2 1 2011 1 3 Sun>=1 3 0 2012 2 1 Sun>=18 3 0 2014 1 1 Sun>=18 2 0 2014 5 11 Sun>=1 2 1 2015 7 1 Sun>=12 3 0 2019 1 11 Sun>=8 2 1 2020 1 12 20 2 1",
        "1977 1 4 24 2 1 1977 1 8 28 2 0",
        "1997 1 3 2 2s 0",
        "2008 - 9 lastSun 2s 1 2008 - 4 Sun>=1 2s 0",
        "2008 - 9 lastSun 2:45s 1 2008 - 4 Sun>=1 2:45s 0",
        "1991 1 3 Sun>=1 0 0",
        "2010 1 9 lastSun 0 1 2011 1 4 Sat>=1 4 0 2011 1 9 lastSat 3 1 2012 10 4 Sun>=1 4 0 2012 9 9 lastSun 3 1",
        "2002 1 1 lastSun 2 0 2016 1 11 Sun>=1 2 1 2017 1 1 Sun>=15 3 0",
        "1993 1 1 Sat>=22 24 0",
        "1995 1 3 lastSun 1u 1 1995 1 10 Sun>=22 1u 0",
        "2008 - 3 lastSun 1u 0 2008 - 10 lastSun 1u -1",
        "2008 - 3 lastSun 1s 1 2008 - 10 lastSun 1s 0",
        "2008 - 3 lastSun 2s 1 2008 - 10 lastSun 2s 0",
        "1984 1 4 1 0 1",
        "1980 1 4 6 0 1 1980 1 9 28 0 0",
        "1946 1 5 19 2s 1 1946 1 10 7 2s 0",
        "1982 1 4 Sat>=1 23 1",
        "1949 1 10 Sun>=1 2s 0 1949 1 4 9 2s 1",
        "2008 - 3 Sun>=8 2 1 2008 - 11 Sun>=1 2 0",
        "1982 1 3 lastSun 2 1 1982 1 9 lastSun 3 0",
        "1976 1 3 28 1 1 1976 1 9 26 1 0",
        "1949 1 10 Sun>=1 2s 0 1949 1 4 10 2s 1",
        "1945 1 5 24 2 2 1945 1 9 24 3 1 1945 1 11 18 2s 0",
        "1980 1 4 1 0 1 1980 1 9 28 0 0",
        "1983 1 3 lastSun 0 1 1983 1 9 lastSun 1 0",
        "1979 1 5 Sun>=22 0s 1 1979 1 9 30 0s 0",
        "1996 1 3 lastSun 2s 1 1996 1 9 lastSun 2s 0",
        "1980 1 9 Sun>=15 2 0 1980 1 3 31 2 1",
        "2008 - 3 lastSun 2 1 2008 - 10 lastSun 3 0",
        "1964 1 5 lastSun 1s 1 1964 1 9 lastSun 1s 0",
        "1983 1 3 lastSun 2s 1",
        "1993 1 3 lastSun 0s 1 1993 1 9 lastSun 0s 0",
        "1978 1 4 2 2s 1 1978 1 10 1 2s 0",
        "1978 1 6 1 0 1 1978 1 8 4 0 0",
        "1942 1 5 Mon>=1 1 1 1942 1 10 Mon>=1 2 0",
        "2006 1 3 lastSun 1s 1 2006 1 10 lastSun 1s 0",
        "1966 1 4 lastSun 2 1 1966 1 10 lastSun 2 0",
        "1966 1 4 lastSun 1 1 1966 1 10 lastSun 2 0",
        "1954 1 9 lastSun 2 0 1954 1 4 lastSun 2 1",
        "1960 1 4 lastSun 2 1 1960 1 9 lastSun 2 0",
        "1963 1 4 lastSun 2 1 1963 1 10 lastSun 2 0",
        "1964 1 4 lastSun 2 1 1964 1 10 lastSun 2 0",
        "1961 1 4 lastSun 2 1 1961 1 10 lastSun 2 0",
        "1948 1 4 lastSun 2 1 1948 1 9 lastSun 2 0",
        "2008 4 3 Sun>=8 0:1 1 2008 3 11 Sun>=1 0:1 0",
        "1973 1 4 lastSun 2 1 1973 1 10 lastSun 2 0",
        "2006 1 4 Sun>=1 0:1 1 2006 1 10 lastSun 0:1 0",
        "2005 1 10 lastSun 2s 0 2005 1 4 Sun>=1 2s 1",
        "1959 1 4 lastSun 2 1 1959 1 10 lastSun 2 0",
        "1961 1 4 lastSun 2 1 1961 1 9 lastSun 2 0",
        "2006 1 10 lastSun 2 0",
        "2006 1 10 lastSun 2 0 2006 1 4 Sun>=1 2 1",
        "1965 1 4 lastSun 0 2 1965 1 10 lastSun 2 0",
        "2008 15 4 Sun>=1 2 1 2008 15 10 lastSun 2 0",
        "1980 1 4 Sun>=15 2 1 1980 1 9 25 2 0",
        "1983 1 2 12 0 0",
        "1956 1 5 Sun>=22 2 1 1956 1 10 lastSun 2 0",
        "1992 1 1 Sat>=15 0 1 1992 1 3 15 0 0",
        "2008 3 10 lastSun 0s 0 2008 1 3 Sun>=15 0s 1 2009 2 3 Sun>=8 0s 1 2011 1 3 Sun>=15 0s 1 2011 1 11 13 0s 0 2012 1 4 1 0s 1 2012 - 11 Sun>=1 0s 0 2013 - 3 Sun>=8 0s 1",
        "1974 1 1 21 0 0",
        "1988 1 5 Sun>=1 0 1 1988 1 9 lastSun 0 0",
        "2006 1 4 30 0 1 2006 1 10 1 0 0",
        "2006 1 4 Sun>=1 0 1 2006 1 10 lastSun 0 0 2012 4 3 Sun>=8 2 1 2012 4 11 Sun>=1 2 0 2017 - 3 Sun>=8 2 1 2017 - 11 Sun>=1 2 0",
        "2006 1 5 Sun>=1 0 1 2006 1 8 Mon>=1 0 0",
        "2006 1 4 30 2 1 2006 1 10 Sun>=1 1 0",
        "2008 2 3 Sun>=15 0 0 2008 1 10 Sun>=15 0 1",
        "2008 2 3 Sun>=8 0 0 2008 1 10 Sun>=8 0 1",
        "2008 10 10 Sun>=15 0 1 2008 4 2 Sun>=15 0 0 2012 1 2 Sun>=22 0 0 2013 2 2 Sun>=15 0 0 2015 1 2 Sun>=22 0 0 2016 4 2 Sun>=15 0 0 2018 1 11 Sun>=1 0 1",
        "2008 3 10 Sun>=9 4u 1 2008 1 3 30 3u 0 2009 1 3 Sun>=9 3u 0 2010 1 4 Sun>=1 3u 0 2011 1 5 Sun>=2 3u 0 2011 1 8 Sun>=16 4u 1 2012 3 4 Sun>=23 3u 0 2012 3 9 Sun>=2 4u 1 2016 3 5 Sun>=9 3u 0 2016 3 8 Sun>=9 4u 1 2019 - 4 Sun>=2 3u 0 2019 3 9 Sun>=2 4u 1 2022 1 9 Sun>=9 4u 1 2023 - 9 Sun>=2 4u 1",
        "1993 1 2 6 24 0",
        "1993 1 2 5 0 0",
        "2008 3 4 Sun>=15 2 0 2008 3 9 Sun>=1 2 1",
        "2008 2 10 Sun>=15 0 1 2008 2 3 Sun>=8 0 0 2010 - 10 Sun>=1 0 1 2010 3 4 Sun>=8 0 0 2013 - 3 Sun>=22 0 0",
        "1994 1 1 1 0 1 1994 1 4 1 0 0",
        "2008 8 3 Sun>=8 2 0 2008 7 10 Sun>=1 2 1",
      ],
      zones: [
        "0 - -",
        "-8 61 -",
        "-7 61 -",
        "-10 - -",
        "-9 61 -",
        "-7 - -",
        "-6 61 -",
        "-5 61 -",
        "4 - -",
        "-4 109 1255233600 -3 - -",
        "-3 108 -",
        "-3 - -",
        "1 10 -",
        "8 37 -",
        "9:30 40 -",
        "10 40 -",
        12,
        "6 15 -",
        12,
        "2 10 -",
        "3 - -",
        "-4 - -",
        "-2 - -",
        "-4 110 -",
        11,
        "-3 110 -",
        7,
        "-8 61 1604214000 -7 - -",
        1,
        5,
        2,
        6,
        "-6 - -",
        "-5 - -",
        7,
        7,
        21,
        "-4 61 -",
        "-3:30 87 1320114600 -3:30 61 -",
        12,
        "-6 111 -",
        "-4 111 -",
        "8 17 -",
        "-5 112 -",
        "-6 100 -",
        19,
        12,
        12,
        12,
        21,
        "-6 113 -",
        "-5 113 -",
        19,
        "2 1 -",
        "0 10 -",
        12,
        19,
        12,
        54,
        0,
        19,
        "-6 104 -",
        "8 18 -",
        "-6 106 -",
        12,
        12,
        "7 - -",
        "8 - -",
        "9 - -",
        "1 53 -",
        "2 24 -",
        "5:30 - -",
        "3 23 -",
        0,
        12,
        33,
        "2 26 1666908000 3 - -",
        "9 25 -",
        20,
        "9 28 -",
        20,
        "2 11 -",
        71,
        19,
        12,
        19,
        "0 4 1540692000 1 4 -",
        12,
        12,
        "4 3 -",
        "5 - -",
        "-8 96 1262332800 -8 61 -",
        5,
        "-7 96 -",
        "-6 96 -",
        67,
        "1 - -",
        "-6 107 -",
        12,
        12,
        "12 46 -",
        8,
        33,
        "-5 116 -",
        "8 34 -",
        "5 31 -",
        12,
        21,
        "2 33 1262296800 2 - 1269640860 2 33 1312146000 2 - 1325368800 2 33 -",
        "-1 10 -",
        54,
        "-4 115 -",
        20,
        19,
        12,
        "2 12 1301184000 3 - 1414278000 2 - -",
        "3 12 1301180400 4 - 1414274400 3 - -",
        "4 12 1269727200 3 12 1301180400 4 - -",
        "5 12 1301173200 6 - 1414267200 5 - -",
        "6 12 1301169600 7 - 1414263600 6 - -",
        "7 12 1301166000 8 - 1414260000 7 - -",
        "8 12 1301162400 9 - 1414256400 8 - -",
        "9 12 1301158800 10 - 1414252800 9 - -",
        "10 12 1301155200 11 - 1414249200 10 - -",
        "11 12 1301151600 12 - 1414245600 10 - 1461427200 11 - -",
        "12 12 1269698400 11 12 1301151600 12 - -",
        20,
        12,
        67,
        12,
        12,
        "-6 103 -",
        66,
        "1 8 -",
        "2 10 1301187600 2 - 1301274000 2 10 1396141200 2 - 1396227600 2 10 1445734800 2 dst:1 1446944400 2 10 1473195600 3 - -",
        21,
        "8 19 -",
        19,
        "-3 117 -",
        "-4:30 - 1462086000 -4 - -",
        66,
        "2 6 -",
        6,
        7,
        15,
        "5:45 - -",
        "4 14 -",
        0,
        20,
        96,
        20,
        0,
        96,
        0,
        0,
        "2 - -",
        96,
        155,
        12,
        0,
        0,
        20,
        20,
        96,
        86,
        0,
        155,
        155,
        "3 - 1612126800 2 - -",
        20,
        "3 - 1509483600 2 - -",
        155,
        96,
        96,
        0,
        96,
        155,
        155,
        96,
        155,
        141,
        141,
        20,
        0,
        96,
        96,
        0,
        0,
        96,
        "0 - 1514768400 1 - 1546304400 0 - -",
        "2 - 1352505600 1 2 1382659200 2 - -",
        "2 5 -",
        "-10 61 -",
        21,
        21,
        "-3 - 1350788400 -3 110 1378004400 -3 - -",
        11,
        10,
        11,
        11,
        11,
        11,
        11,
        10,
        11,
        21,
        "-3 - 1318734000 -3 110 1350788400 -3 - -",
        "-7 96 1270371600 -6 96 -",
        "-4 97 -",
        "-6 98 -",
        21,
        2,
        2,
        "-6 96 1422777600 -5 - -",
        11,
        33,
        "-7 96 1667116800 -6 - -",
        5,
        23,
        21,
        0,
        21,
        "-4 - 1384056000 -5 - -",
        "-8 61 1425808800 -7 - -",
        11,
        37,
        "-3 10 1679792400 -2 - 1698541200 -2 10 -",
        "-4 87 1320116400 -4 61 -",
        "-5 61 1425798000 -4 - 1520751600 -5 61 -",
        21,
        21,
        21,
        "-5 101 -",
        7,
        6,
        7,
        7,
        6,
        7,
        7,
        7,
        7,
        2,
        4,
        7,
        7,
        21,
        21,
        11,
        21,
        21,
        21,
        "-6 96 1262325600 -6 61 -",
        6,
        94,
        "-8 - 1446372000 -9 61 1541325600 -8 - 1547978400 -9 61 -",
        "-3 61 -",
        37,
        94,
        7,
        21,
        7,
        4,
        "-7 61 1289116800 -6 61 -",
        6,
        6,
        "-7 96 1262329200 -7 61 1667116800 -6 - 1669788000 -6 61 -",
        7,
        11,
        "-5 105 -",
        21,
        "-4 111 1480820400 -3 - -",
        6,
        11,
        6,
        222,
        11,
        "-1 10 1711846800 -2 10 -",
        4,
        21,
        21,
        21,
        21,
        21,
        32,
        37,
        7,
        21,
        27,
        4,
        2,
        "8 - 1255802400 11 - 1267714800 8 - 1319738400 11 - 1329843600 8 - 1477065600 11 - 1520701200 8 - 1538856000 11 - 1552752000 8 - 1570129200 11 - 1583596800 8 - 1601740860 11 - 1615640400 8 - 1633190460 11 - 1647090000 8 - 1664640060 11 - 1678291200 8 - -",
        "7 - 1255806000 5 - 1268251200 7 - 1319742000 5 - 1329854400 7 - -",
        "10 - -",
        "10 41 1262264400 10 dst:1 1293800400 10 41 -",
        "6 - 1255809600 5 - -",
        100,
        271,
        11,
        20,
        "0 9 -",
        "7 - 1702839600 5 - -",
        12,
        20,
        "6 - 1709229600 5 - -",
        125,
        90,
        90,
        90,
        90,
        "6 12 1301169600 7 - 1414263600 6 - 1459022400 7 - -",
        "6 - -",
        67,
        "9 12 1301158800 10 - 1414252800 8 - 1459015200 9 - -",
        "8 30 -",
        "2 35 1666904400 3 - -",
        68,
        90,
        "2 10 1473282000 3 - 1509238800 2 10 -",
        "2 33 -",
        "7 30 -",
        134,
        "4:30 - -",
        "10 12 1301155200 11 - 1315832400 10 - 1414252800 9 - -",
        67,
        "8 20 -",
        "7 12 1269716400 6 12 1301169600 7 - -",
        "6 12 1301169600 7 - 1414263600 6 - 1469304000 7 - -",
        90,
        66,
        66,
        "9 - 1439564400 8:30 - 1525446000 9 - -",
        304,
        "6 - 1545328800 5 - -",
        "10 12 1301155200 11 - 1414249200 10 - 1459008000 11 - -",
        90,
        "11 12 1301151600 12 - 1414245600 11 - -",
        90,
        8,
        "3:30 22 -",
        311,
        "6 12 1301169600 7 - 1414263600 6 - 1464465600 7 - -",
        314,
        311,
        "11 12 1301151600 12 - 1315828800 11 - 1414249200 10 - -",
        66,
        "6:30 - -",
        "4 12 1293825600 4 13 -",
        37,
        "-1 - -",
        54,
        54,
        22,
        0,
        "-4 114 1283666400 -3 - -",
        14,
        "10 38 -",
        "10 41 -",
        "9:30 36 -",
        "8:45 37 -",
        357,
        "10 39 -",
        "10:30 42 -",
        "1 55 -",
        6,
        19,
        33,
        7,
        0,
        0,
        349,
        3,
        "-11 - -",
        "-12 - -",
        22,
        11,
        21,
        33,
        32,
        5,
        "-8 - -",
        "-9 - -",
        0,
        96,
        293,
        "11 - -",
        "12 - -",
        "13 - -",
        "14 - -",
        155,
        20,
        8,
        90,
        311,
        66,
        67,
        68,
        0,
        0,
        0,
        0,
        12,
        "3 12 1301180400 4 - 1414274400 3 - 1459033200 4 - -",
        12,
        "2 71 -",
        12,
        54,
        54,
        54,
        116,
        19,
        "2 12 1301184000 3 - -",
        12,
        19,
        12,
        12,
        "3 12 1301180400 4 - 1414274400 3 - 1480806000 4 - -",
        "2 10 1396137600 4 - 1414274400 3 - -",
        12,
        402,
        19,
        12,
        12,
        "3 12 1301180400 4 - 1414274400 3 - 1540681200 4 - 1609020000 3 - -",
        19,
        0,
        3,
        20,
        311,
        66,
        346,
        20,
        90,
        8,
        20,
        8,
        363,
        5,
        2,
        1,
        "-11 49 1325239200 13 49 -",
        "10 - 1419696000 11 - -",
        "12:45 47 -",
        293,
        "11 51 -",
        387,
        "-11 - 1325242800 13 - -",
        "12 43 -",
        386,
        381,
        385,
        293,
        388,
        385,
        386,
        386,
        "-9:30 - -",
        372,
        386,
        372,
        "11:30 - 1443882600 11 - 1561899600 11 40 -",
        "11 45 -",
        372,
        68,
        380,
        385,
        293,
        "-10 48 -",
        293,
        3,
        386,
        "13 50 -",
        386,
        386,
        0,
        54,
        71,
        145,
        226,
        10,
        346,
        66,
        11,
        10,
        7,
        11,
        20,
        0,
        11,
        192,
        "-7 96 1262329200 -7 61 1667116800 -6 - 1669788000 -7 61 -",
        33,
        91,
        7,
        11,
        6,
        222,
        10,
        91,
        2,
        100,
        90,
        42,
        42,
        17,
        42,
        311,
        325,
        70,
        311,
        67,
        314,
        54,
        12,
        15,
        362,
        15,
        358,
        356,
        14,
        357,
        15,
        13,
        14,
        22,
        25,
        21,
        37,
        6,
        7,
        2,
        38,
        1,
        32,
        27,
        41,
        40,
        232,
        53,
        69,
        0,
        54,
        19,
        404,
        54,
        54,
        0,
        0,
        0,
        0,
        62,
        339,
        70,
        33,
        77,
        386,
        190,
        91,
        93,
        94,
        100,
        442,
        42,
        3,
        387,
        385,
        372,
        293,
        293,
        12,
        54,
        136,
        79,
        67,
        134,
        0,
        4,
        192,
        5,
        6,
        7,
        7,
        3,
        6,
        7,
        2,
        1,
        372,
        0,
        116,
        0,
      ],
    };
  },
  null
);
