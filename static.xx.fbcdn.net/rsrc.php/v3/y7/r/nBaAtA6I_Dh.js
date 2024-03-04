/*FB_PKG_DELIM*/

__d(
  "PluginLoggedOutUserTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:PluginLoggedOutUserLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:PluginLoggedOutUserLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:PluginLoggedOutUserLoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setHref = function (a) {
        this.$1.href = a;
        return this;
      };
      c.setIsSDK = function (a) {
        this.$1.is_sdk = a;
        return this;
      };
      c.setPluginAppID = function (a) {
        this.$1.plugin_app_id = a;
        return this;
      };
      c.setPluginName = function (a) {
        this.$1.plugin_name = a;
        return this;
      };
      c.setRefererURL = function (a) {
        this.$1.referer_url = a;
        return this;
      };
      c.updateExtraData = function (a) {
        a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
        b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.addToExtraData = function (a, b) {
        var c = {};
        c[a] = b;
        return this.updateExtraData(c);
      };
      return a;
    })();
    var g = {
      href: !0,
      is_sdk: !0,
      plugin_app_id: !0,
      plugin_name: !0,
      referer_url: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "BaseChameleonThemeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = { classNames: null };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "CometLinkTargetOverrideContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "CometInteractionVC",
  ["InteractionTracingMetrics"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a = c("InteractionTracingMetrics").get(a);
      a = a && a.vcTracker;
      a && a.addMutationRoot(b);
    }
    g.addMutationRootForTraceId = a;
  },
  98
);
__d(
  "FormSubmit",
  [
    "AsyncRequest",
    "AsyncResponse",
    "CSS",
    "DOMQuery",
    "Event",
    "Form",
    "Parent",
    "trackReferrer",
  ],
  function (a, b, c, d, e, f, g) {
    var h = {
      buildRequest: function (a, b) {
        var e = (d("Form").getAttribute(a, "method") || "GET").toUpperCase();
        b = (b && d("Parent").byTag(b, "button")) || b;
        var f = (b && d("Parent").byClass(b, "stat_elem")) || a;
        if (d("CSS").hasClass(f, "async_saving")) return null;
        if (
          b &&
          (b.form !== a ||
            (b.nodeName != "INPUT" && b.nodeName != "BUTTON") ||
            b.type != "submit")
        ) {
          var g = d("DOMQuery").scry(a, ".enter_submit_target")[0];
          g && (b = g);
        }
        g = d("Form").serialize(a, b);
        d("Form").setDisabled(a, !0);
        b =
          d("Form").getAttribute(a, "ajaxify") ||
          d("Form").getAttribute(a, "action");
        var h = !!d("Form").getAttribute(a, "data-cors");
        c("trackReferrer")(a, b);
        return new (c("AsyncRequest"))()
          .setAllowCrossOrigin(h)
          .setURI(b)
          .setData(g)
          .setNectarModuleDataSafe(a)
          .setReadOnly(e == "GET")
          .setMethod(e)
          .setRelativeTo(a)
          .setStatusElement(f)
          .setInitialHandler(d("Form").setDisabled.bind(null, a, !1))
          .setHandler(function (b) {
            c("Event").fire(a, "success", { response: b });
          })
          .setErrorHandler(function (b) {
            c("Event").fire(a, "error", { response: b }) !== !1 &&
              c("AsyncResponse").defaultErrorHandler(b);
          })
          .setFinallyHandler(d("Form").setDisabled.bind(null, a, !1));
      },
      send: function (a, b) {
        a = h.buildRequest(a, b);
        a && a.send();
        return a;
      },
    };
    a = h;
    g["default"] = a;
  },
  98
);
__d(
  "MessengerWebPluginAnonymousTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:MessengerWebPluginAnonymousLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:MessengerWebPluginAnonymousLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:MessengerWebPluginAnonymousLoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setAppID = function (a) {
        this.$1.app_id = a;
        return this;
      };
      c.setCallsite = function (a) {
        this.$1.callsite = a;
        return this;
      };
      c.setClientFbid = function (a) {
        this.$1.client_fbid = a;
        return this;
      };
      c.setDebugData = function (a) {
        this.$1.debug_data = a;
        return this;
      };
      c.setDeltaType = function (a) {
        this.$1.delta_type = a;
        return this;
      };
      c.setDeviceParam = function (a) {
        this.$1.device_param = a;
        return this;
      };
      c.setDomainSource = function (a) {
        this.$1.domain_source = a;
        return this;
      };
      c.setDuration = function (a) {
        this.$1.duration = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setEventTimestamp = function (a) {
        this.$1.event_timestamp = a;
        return this;
      };
      c.setExceptionMessage = function (a) {
        this.$1.exception_message = a;
        return this;
      };
      c.setExceptionStacktrace = function (a) {
        this.$1.exception_stacktrace = a;
        return this;
      };
      c.setExceptionType = function (a) {
        this.$1.exception_type = a;
        return this;
      };
      c.setGateway = function (a) {
        this.$1.gateway = a;
        return this;
      };
      c.setIsUserLoggedIn = function (a) {
        this.$1.is_user_logged_in = a;
        return this;
      };
      c.setNewEventName = function (a) {
        this.$1.new_event_name = a;
        return this;
      };
      c.setOtherFields = function (a) {
        this.$1.other_fields = b("GeneratedLoggerUtils").serializeMap(a);
        return this;
      };
      c.setPageID = function (a) {
        this.$1.page_id = a;
        return this;
      };
      c.setPluginExtra = function (a) {
        this.$1.plugin_extra = b("GeneratedLoggerUtils").serializeMap(a);
        return this;
      };
      c.setPluginInterface = function (a) {
        this.$1.plugin_interface = a;
        return this;
      };
      c.setPluginName = function (a) {
        this.$1.plugin_name = a;
        return this;
      };
      c.setRefererURI = function (a) {
        this.$1.referer_uri = a;
        return this;
      };
      c.setRequestHeaders = function (a) {
        this.$1.request_headers = a;
        return this;
      };
      c.setRequestID = function (a) {
        this.$1.request_id = a;
        return this;
      };
      c.setRequestParam = function (a) {
        this.$1.request_param = a;
        return this;
      };
      c.setTabName = function (a) {
        this.$1.tab_name = a;
        return this;
      };
      c.setUpgradeLoggedInUserID = function (a) {
        this.$1.upgrade_logged_in_user_id = a;
        return this;
      };
      c.setUpstreamEvent = function (a) {
        this.$1.upstream_event = a;
        return this;
      };
      c.setWhitelistedDomains = function (a) {
        this.$1.whitelisted_domains = a;
        return this;
      };
      return a;
    })();
    c = {
      app_id: !0,
      callsite: !0,
      client_fbid: !0,
      debug_data: !0,
      delta_type: !0,
      device_param: !0,
      domain_source: !0,
      duration: !0,
      event: !0,
      event_timestamp: !0,
      exception_message: !0,
      exception_stacktrace: !0,
      exception_type: !0,
      gateway: !0,
      is_user_logged_in: !0,
      new_event_name: !0,
      other_fields: !0,
      page_id: !0,
      plugin_extra: !0,
      plugin_interface: !0,
      plugin_name: !0,
      referer_uri: !0,
      request_headers: !0,
      request_id: !0,
      request_param: !0,
      tab_name: !0,
      upgrade_logged_in_user_id: !0,
      upstream_event: !0,
      whitelisted_domains: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "PluginOptin",
  [
    "DOMEvent",
    "DOMEventListener",
    "MessengerWebPluginAnonymousTypedLogger",
    "PlatformWidgetEndpoint",
    "PluginLoggedOutUserTypedLogger",
    "PluginMessage",
    "PopupWindow",
    "URI",
    "UserAgent_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i = {
        default: { width: 450, height: 410 },
        large: { width: 475, height: 605 },
      },
      j = (function () {
        function a(a, b) {
          (this.return_params = (h || (h = c("URI")))
            .getRequestURI()
            .getQueryData()),
            (this.login_params = {}),
            (this.optin_params = {}),
            (this.plugin = a),
            (this.api_key = b),
            (this.size = "default"),
            this.addReturnParams({ ret: "optin" }),
            delete this.return_params.hash;
        }
        var b = a.prototype;
        b.addReturnParams = function (a) {
          Object.assign(this.return_params, a);
          return this;
        };
        b.addLoginParams = function (a) {
          Object.assign(this.login_params, a);
          return this;
        };
        b.addOptinParams = function (a) {
          Object.assign(this.optin_params, a);
          return this;
        };
        b.setSize = function (a) {
          this.size = a ? a : "default";
          return this;
        };
        b.start = function () {
          var a = this.api_key || 127760087237610;
          (h || (h = c("URI"))).getRequestURI().getQueryData()
            .kid_directed_site && (this.login_params.kid_directed_site = !0);
          this.login_params.referrer = document.referrer;
          var b = new (h || (h = c("URI")))(
              c("PlatformWidgetEndpoint").dialog("plugin.optin")
            )
              .addQueryData(this.optin_params)
              .addQueryData({
                app_id: a,
                secure: h.getRequestURI().isSecure(),
                social_plugin: this.plugin,
                return_params: JSON.stringify(this.return_params),
                login_params: JSON.stringify(this.login_params),
              }),
            e = d("UserAgent_DEPRECATED").mobile() !== null;
          e ? b.setSubdomain("m") : b.addQueryData({ display: "popup" });
          this.return_params.act !== null &&
            this.return_params.act === "send" &&
            new (c("PluginLoggedOutUserTypedLogger"))()
              .setPluginAppID(a)
              .setPluginName(this.return_params.act)
              .setHref(this.return_params.href)
              .logVital();
          a = i[this.size];
          b = this.transformSocialPluginToFacebookDomainPopupURI(
            b,
            h.getRequestURI().getDomain(),
            e
          );
          this.popup = d("PopupWindow").open(
            b.toString(),
            a.height,
            a.width,
            "fbPluginAuthenticationPopupWindow"
          );
          this.plugin === "customer_chat" &&
            this.login_params.chat_plugin_upgrade != null &&
            this.login_params.chat_plugin_upgrade === !0 &&
            new (c("MessengerWebPluginAnonymousTypedLogger"))()
              .setPageID(this.login_params.page_id)
              .setClientFbid(this.login_params.guest_id)
              .setRequestID(this.login_params.request_id)
              .setNewEventName("upgrade_plugin_optin_popup_opened")
              .log();
          d("PluginMessage").listen();
          return this;
        };
        b.transformSocialPluginToFacebookDomainPopupURI = function (a, b, c) {
          b = b.split(".");
          if (b[0] !== "socialplugin") return a;
          b[b.length - 1] = "com";
          b[0] = c ? "m" : "www";
          return a.setDomain(b.join(".")).setProtocol("https");
        };
        return a;
      })();
    j.starter = function (a, b, c, d) {
      a = new j(a);
      a.addReturnParams(b || {});
      a.addLoginParams(c || {});
      a.addOptinParams(d || {});
      return a.start.bind(a);
    };
    j.listen = function (a, b, d, e, f) {
      c("DOMEventListener").add(a, "click", function (a) {
        new (c("DOMEvent"))(a).kill(), j.starter(b, d, e, f)();
      });
    };
    g["default"] = j;
  },
  98
);
__d(
  "PluginConnectButton",
  [
    "Arbiter",
    "CSS",
    "DOM",
    "DOMEvent",
    "DOMEventListener",
    "Focus",
    "FormSubmit",
    "PlatformWidgetEndpoint",
    "Plugin",
    "PluginOptin",
    "URI",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h = "new",
      i = b("Arbiter").subscribe,
      j = function (a, c) {
        return b("DOMEventListener").add(a, "click", c);
      };
    function a(a) {
      var c = this;
      this.config = a;
      this.busy = !1;
      var d = b("DOM").find(a.form, ".pluginConnectButton");
      this.buttons = d;
      this.node_connected = b("DOM").find(d, ".pluginConnectButtonConnected");
      this.node_disconnected = b("DOM").find(
        d,
        ".pluginConnectButtonDisconnected"
      );
      var e = function (a) {
        new (b("DOMEvent"))(a).kill(),
          c.busy || (c.submit(), (c.busy = c.canpersonalize));
      };
      j(this.node_disconnected, e);
      a.buttontype === 1
        ? j(b("DOM").find(d, ".pluginButtonX button"), e)
        : a.buttontype === 2 && j(this.node_connected, e);
      j(this.node_connected, function (a) {
        return b("Arbiter").inform(b("Plugin").DIALOG, a);
      });
      d = this.update.bind(this);
      i(b("Plugin").CONNECT, d, h);
      i(b("Plugin").DISCONNECT, d, h);
      i(b("Plugin").ERROR, this.error.bind(this), h);
    }
    Object.assign(a.prototype, {
      update: function (a, c) {
        this.busy = !1;
        var d = this.config;
        if (c.identifier !== d.identifier) return;
        c = a === b("Plugin").CONNECT;
        a = b("PlatformWidgetEndpoint").plugins(d.plugin);
        a += "/" + (c ? "disconnect" : "connect");
        b("CSS")[c ? "show" : "hide"](this.node_connected);
        b("CSS")[c ? "hide" : "show"](this.node_disconnected);
        try {
          if (document.activeElement.nodeName.toLowerCase() === "button") {
            var e = c ? this.node_connected : this.node_disconnected;
            e = b("DOM").find(e, "button");
            e.disabled = !1;
            b("Focus").set(e);
          }
        } catch (a) {}
        d.connected = c;
        d.form.setAttribute("action", a);
        d.form.setAttribute("ajaxify", a);
      },
      error: function (a, c) {
        this.busy = !1;
        if (c.action in { connect: 1, disconnect: 1 }) {
          b("DOM").setContent(this.buttons, c.content);
          a = b("DOM").scry(this.buttons, ".confirmButton");
          a.length === 1 && b("Focus").set(a[0]);
        }
      },
      submit: function () {
        if (!this.config.canpersonalize) return this.login();
        b("FormSubmit").send(this.config.form);
        this.fireStateToggle();
      },
      fireStateToggle: function () {
        var a = this.config;
        a.connected
          ? b("Plugin").disconnect(a.identifier)
          : b("Plugin").connect(a.identifier);
      },
      login: function () {
        var a = this.config.plugin;
        new (b("PluginOptin"))(
          a,
          (g || (g = b("URI"))).getRequestURI().getQueryData().api_key
        )
          .addReturnParams({ act: "connect" })
          .addLoginParams({
            social_plugin_action: this.config.pluginaction,
            kid_directed_site: this.config.kidDirectedSite,
          })
          .start();
      },
    });
    e.exports = a;
  },
  null
);
