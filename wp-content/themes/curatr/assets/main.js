/*! For license information please see main.js.LICENSE.txt */
(() => {
  var t = {
      862: function (t, e, r) {
        var n, i;
        "undefined" != typeof window && window,
          void 0 ===
            (i =
              "function" ==
              typeof (n = function () {
                "use strict";
                function t() {}
                var e = t.prototype;
                return (
                  (e.on = function (t, e) {
                    if (t && e) {
                      var r = (this._events = this._events || {}),
                        n = (r[t] = r[t] || []);
                      return -1 == n.indexOf(e) && n.push(e), this;
                    }
                  }),
                  (e.once = function (t, e) {
                    if (t && e) {
                      this.on(t, e);
                      var r = (this._onceEvents = this._onceEvents || {});
                      return ((r[t] = r[t] || {})[e] = !0), this;
                    }
                  }),
                  (e.off = function (t, e) {
                    var r = this._events && this._events[t];
                    if (r && r.length) {
                      var n = r.indexOf(e);
                      return -1 != n && r.splice(n, 1), this;
                    }
                  }),
                  (e.emitEvent = function (t, e) {
                    var r = this._events && this._events[t];
                    if (r && r.length) {
                      (r = r.slice(0)), (e = e || []);
                      for (
                        var n = this._onceEvents && this._onceEvents[t], i = 0;
                        i < r.length;
                        i++
                      ) {
                        var s = r[i];
                        n && n[s] && (this.off(t, s), delete n[s]),
                          s.apply(this, e);
                      }
                      return this;
                    }
                  }),
                  (e.allOff = function () {
                    delete this._events, delete this._onceEvents;
                  }),
                  t
                );
              })
                ? n.call(e, r, e, t)
                : n) || (t.exports = i);
      },
      769: function (t, e) {
        !(function (t) {
          "use strict";
          function e(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          function r(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          }
          var n,
            i,
            s,
            o,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            g,
            m,
            v,
            _ = function () {
              return "undefined" != typeof window;
            },
            y = function () {
              return n || (_() && (n = window.gsap) && n.registerPlugin && n);
            },
            b = function (t) {
              return Math.round(1e5 * t) / 1e5 || 0;
            },
            w = function (t, e) {
              var r,
                n,
                i = t.parentNode || a,
                o = t.getBoundingClientRect(),
                u = i.getBoundingClientRect(),
                c = u.top - o.top,
                l = u.bottom - o.bottom,
                h = (Math.abs(c) > Math.abs(l) ? c : l) / (1 - e),
                f = -h * e;
              return (
                h > 0 &&
                  ((n =
                    0.5 == (r = u.height / (s.innerHeight + u.height))
                      ? 2 * u.height
                      : 2 *
                        Math.min(u.height, (-h * r) / (2 * r - 1)) *
                        (e || 1)),
                  (f += e ? -n * e : -n / 2),
                  (h += n)),
                { change: h, offset: f }
              );
            },
            x = function (t) {
              var e = o.querySelector(".ScrollSmoother-wrapper");
              return (
                e ||
                  ((e = o.createElement("div")).classList.add(
                    "ScrollSmoother-wrapper"
                  ),
                  t.parentNode.insertBefore(e, t),
                  e.appendChild(t)),
                e
              );
            },
            T = (function () {
              function t(e) {
                var r = this;
                i ||
                  t.register(n) ||
                  console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
                  (e = this.vars = e || {}),
                  f && f.kill(),
                  (f = this),
                  m(this);
                var _,
                  y,
                  T,
                  S,
                  k,
                  E,
                  M,
                  O,
                  C,
                  P,
                  A,
                  j,
                  D,
                  L,
                  I,
                  R = e,
                  z = R.smoothTouch,
                  B = R.onUpdate,
                  q = R.onStop,
                  F = R.smooth,
                  Y = R.onFocusIn,
                  W = R.normalizeScroll,
                  X = this,
                  N =
                    "undefined" != typeof ResizeObserver &&
                    !1 !== e.autoResize &&
                    new ResizeObserver(function () {
                      return h.isRefreshing || v.restart(!0);
                    }),
                  H = e.effectsPrefix || "",
                  U = h.getScrollFunc(s),
                  V =
                    1 === h.isTouch
                      ? !0 === z
                        ? 0.8
                        : parseFloat(z) || 0
                      : 0 === F || !1 === F
                      ? 0
                      : parseFloat(F) || 0.8,
                  G = 0,
                  $ = 0,
                  Q = 1,
                  Z = p(0),
                  K = function () {
                    return Z.update(-G);
                  },
                  J = { y: 0 },
                  tt = function () {
                    return (_.style.overflow = "visible");
                  },
                  et = function (t) {
                    t.update();
                    var e = t.getTween();
                    e && (e.pause(), (e._time = e._dur), (e._tTime = e._tDur)),
                      (L = !1),
                      t.animation.progress(t.progress, !0);
                  },
                  rt = function (t, e) {
                    ((t !== G && !P) || e) &&
                      (V &&
                        ((_.style.transform =
                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                          t +
                          ", 0, 1)"),
                        (_._gsap.y = t + "px")),
                      ($ = t - G),
                      (G = t),
                      h.isUpdating || h.update());
                  },
                  nt = function (t) {
                    return arguments.length
                      ? (t < 0 && (t = 0),
                        (J.y = -t),
                        (L = !0),
                        P ? (G = -t) : rt(-t),
                        h.isRefreshing ? S.update() : U(t),
                        this)
                      : -G;
                  },
                  it = function (t) {
                    (y.scrollTop = 0),
                      (t.target.contains && t.target.contains(y)) ||
                        (Y && !1 === Y(r, t)) ||
                        (h.isInViewport(t.target) ||
                          t.target === I ||
                          r.scrollTo(t.target, !1, "center center"),
                        (I = t.target));
                  },
                  st = function (t, e) {
                    var r, i, s, o;
                    k.forEach(function (e) {
                      (r = e.pins),
                        (o = e.markers),
                        t.forEach(function (t) {
                          e.trigger &&
                            t.trigger &&
                            e !== t &&
                            (t.trigger === e.trigger ||
                              t.pinnedContainer === e.trigger ||
                              e.trigger.contains(t.trigger)) &&
                            ((i = t.start),
                            (s =
                              (i - e.start - e.offset) / e.ratio -
                              (i - e.start)),
                            r.forEach(function (t) {
                              return (s -= t.distance / e.ratio - t.distance);
                            }),
                            t.setPositions(i + s, t.end + s),
                            t.markerStart &&
                              o.push(
                                n.quickSetter(
                                  [t.markerStart, t.markerEnd],
                                  "y",
                                  "px"
                                )
                              ),
                            t.pin &&
                              t.end > 0 &&
                              ((s = t.end - t.start),
                              r.push({
                                start: t.start,
                                end: t.end,
                                distance: s,
                                trig: t,
                              }),
                              e.setPositions(e.start, e.end + s),
                              e.vars.onRefresh(e)));
                        });
                    });
                  },
                  ot = function () {
                    tt(),
                      requestAnimationFrame(tt),
                      k &&
                        (k.forEach(function (t) {
                          var e = t.start,
                            r = t.auto
                              ? Math.min(h.maxScroll(t.scroller), t.end)
                              : e + (t.end - e) / t.ratio,
                            n = (r - t.end) / 2;
                          (e -= n),
                            (r -= n),
                            (t.offset = n || 1e-4),
                            (t.pins.length = 0),
                            t.setPositions(Math.min(e, r), Math.max(e, r)),
                            t.vars.onRefresh(t);
                        }),
                        st(h.sort())),
                      Z.reset();
                  },
                  at = function () {
                    return h.addEventListener("refresh", ot);
                  },
                  ut = function () {
                    return (
                      k &&
                      k.forEach(function (t) {
                        return t.vars.onRefresh(t);
                      })
                    );
                  },
                  ct = function () {
                    return (
                      k &&
                        k.forEach(function (t) {
                          return t.vars.onRefreshInit(t);
                        }),
                      ut
                    );
                  },
                  lt = function (t, e, r, n) {
                    return function () {
                      var i = "function" == typeof e ? e(r, n) : e;
                      return (
                        i ||
                          0 === i ||
                          (i =
                            n.getAttribute("data-" + H + t) ||
                            ("speed" === t ? 1 : 0)),
                        n.setAttribute("data-" + H + t, i),
                        "auto" === i ? i : parseFloat(i)
                      );
                    };
                  },
                  ht = function (t, e, r, i) {
                    var s,
                      o,
                      a,
                      u,
                      c,
                      f,
                      p = lt("speed", e, i, t),
                      g = lt("lag", r, i, t),
                      m = n.getProperty(t, "y"),
                      v = t._gsap,
                      _ = function () {
                        (e = p()),
                          (r = g()),
                          (s = parseFloat(e) || 1),
                          (c = (a = "auto" === e) ? 0 : 0.5),
                          u && u.kill(),
                          (u =
                            r &&
                            n.to(t, {
                              ease: d,
                              overwrite: !1,
                              y: "+=0",
                              duration: r,
                            })),
                          o && ((o.ratio = s), (o.autoSpeed = a));
                      },
                      x = function () {
                        (v.y = m + "px"), v.renderTransform(1), _();
                      },
                      T = [],
                      S = [],
                      E = 0,
                      M = function (e) {
                        if (a) {
                          x();
                          var r = w(t, l(0, 1, -e.start / (e.end - e.start)));
                          (E = r.change), (f = r.offset);
                        } else (E = (e.end - e.start) * (1 - s)), (f = 0);
                        T.forEach(function (t) {
                          return (E -= t.distance * (1 - s));
                        }),
                          e.vars.onUpdate(e),
                          u && u.progress(1);
                      };
                    return (
                      _(),
                      (1 !== s || a || u) &&
                        ((o = h.create({
                          trigger: a ? t.parentNode : t,
                          scroller: y,
                          scrub: !0,
                          refreshPriority: -999,
                          onRefreshInit: x,
                          onRefresh: M,
                          onKill: function (t) {
                            var e = k.indexOf(t);
                            e >= 0 && k.splice(e, 1), x();
                          },
                          onUpdate: function (t) {
                            var e,
                              r,
                              i,
                              s = m + E * (t.progress - c),
                              o = T.length,
                              l = 0;
                            if (t.offset) {
                              if (o) {
                                for (r = -G, i = t.end; o--; ) {
                                  if (
                                    (e = T[o]).trig.isActive ||
                                    (r >= e.start && r <= e.end)
                                  )
                                    return void (
                                      u &&
                                      ((e.trig.progress +=
                                        e.trig.direction < 0 ? 0.001 : -0.001),
                                      e.trig.update(0, 0, 1),
                                      u.resetTo("y", parseFloat(v.y), -$, !0),
                                      Q && u.progress(1))
                                    );
                                  r > e.end && (l += e.distance),
                                    (i -= e.distance);
                                }
                                s =
                                  m +
                                  l +
                                  E *
                                    ((n.utils.clamp(t.start, t.end, r) -
                                      t.start -
                                      l) /
                                      (i - t.start) -
                                      c);
                              }
                              (s = b(s + f)),
                                S.length &&
                                  !a &&
                                  S.forEach(function (t) {
                                    return t(s - l);
                                  }),
                                u
                                  ? (u.resetTo("y", s, -$, !0),
                                    Q && u.progress(1))
                                  : ((v.y = s + "px"), v.renderTransform(1));
                            }
                          },
                        })),
                        M(o),
                        (n.core.getCache(o.trigger).stRevert = ct),
                        (o.startY = m),
                        (o.pins = T),
                        (o.markers = S),
                        (o.ratio = s),
                        (o.autoSpeed = a),
                        (t.style.willChange = "transform")),
                      o
                    );
                  };
                function ft() {
                  return (
                    (T = _.clientHeight),
                    (_.style.overflow = "visible"),
                    (u.style.height = T + "px"),
                    T - s.innerHeight
                  );
                }
                at(),
                  h.addEventListener("killAll", at),
                  n.delayedCall(0.5, function () {
                    return (Q = 0);
                  }),
                  (this.scrollTop = nt),
                  (this.scrollTo = function (t, e, i) {
                    var o = n.utils.clamp(
                      0,
                      h.maxScroll(s),
                      isNaN(t) ? r.offset(t, i) : +t
                    );
                    e
                      ? P
                        ? n.to(r, {
                            duration: V,
                            scrollTop: o,
                            overwrite: "auto",
                            ease: d,
                          })
                        : U(o)
                      : nt(o);
                  }),
                  (this.offset = function (t, e) {
                    var r,
                      i = (t = c(t)[0]).style.cssText,
                      s = h.create({ trigger: t, start: e || "top top" });
                    return (
                      k && st([s]),
                      (r = s.start),
                      s.kill(!1),
                      (t.style.cssText = i),
                      (n.core.getCache(t).uncache = 1),
                      r
                    );
                  }),
                  (this.content = function (t) {
                    if (arguments.length) {
                      var e =
                        c(t || "#smooth-content")[0] ||
                        console.warn(
                          "ScrollSmoother needs a valid content element."
                        ) ||
                        u.children[0];
                      return (
                        e !== _ &&
                          ((C = (_ = e).getAttribute("style") || ""),
                          N && N.observe(_),
                          n.set(_, {
                            overflow: "visible",
                            width: "100%",
                            boxSizing: "border-box",
                            y: "+=0",
                          }),
                          V || n.set(_, { clearProps: "transform" })),
                        this
                      );
                    }
                    return _;
                  }),
                  (this.wrapper = function (t) {
                    return arguments.length
                      ? ((y = c(t || "#smooth-wrapper")[0] || x(_)),
                        (O = y.getAttribute("style") || ""),
                        ft(),
                        n.set(
                          y,
                          V
                            ? {
                                overflow: "hidden",
                                position: "fixed",
                                height: "100%",
                                width: "100%",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                              }
                            : {
                                overflow: "visible",
                                position: "relative",
                                width: "100%",
                                height: "auto",
                                top: "auto",
                                bottom: "auto",
                                left: "auto",
                                right: "auto",
                              }
                        ),
                        this)
                      : y;
                  }),
                  (this.effects = function (t, e) {
                    var r;
                    if ((k || (k = []), !t)) return k.slice(0);
                    (t = c(t)).forEach(function (t) {
                      for (var e = k.length; e--; )
                        k[e].trigger === t && k[e].kill();
                    });
                    var n,
                      i,
                      s = (e = e || {}),
                      o = s.speed,
                      a = s.lag,
                      u = [];
                    for (n = 0; n < t.length; n++)
                      (i = ht(t[n], o, a, n)) && u.push(i);
                    return (r = k).push.apply(r, u), u;
                  }),
                  (this.sections = function (t, e) {
                    var r;
                    if ((E || (E = []), !t)) return E.slice(0);
                    var n = c(t).map(function (t) {
                      return h.create({
                        trigger: t,
                        start: "top 120%",
                        end: "bottom -20%",
                        onToggle: function (e) {
                          (t.style.opacity = e.isActive ? "1" : "0"),
                            (t.style.pointerEvents = e.isActive
                              ? "all"
                              : "none");
                        },
                      });
                    });
                    return (
                      e && e.add ? (r = E).push.apply(r, n) : (E = n.slice(0)),
                      n
                    );
                  }),
                  this.content(e.content),
                  this.wrapper(e.wrapper),
                  (this.render = function (t) {
                    return rt(t || 0 === t ? t : G);
                  }),
                  (this.getVelocity = function () {
                    return Z.getVelocity(-G);
                  }),
                  h.scrollerProxy(y, {
                    scrollTop: nt,
                    scrollHeight: function () {
                      return ft() && u.scrollHeight;
                    },
                    fixedMarkers: !1 !== e.fixedMarkers && !!V,
                    content: _,
                    getBoundingClientRect: function () {
                      return {
                        top: 0,
                        left: 0,
                        width: s.innerWidth,
                        height: s.innerHeight,
                      };
                    },
                  }),
                  h.defaults({ scroller: y });
                var dt = h.getAll().filter(function (t) {
                  return t.scroller === s || t.scroller === y;
                });
                dt.forEach(function (t) {
                  return t.revert(!0);
                }),
                  (S = h.create({
                    animation: n.fromTo(
                      J,
                      { y: 0 },
                      {
                        y: function () {
                          return -ft();
                        },
                        immediateRender: !1,
                        ease: "none",
                        data: "ScrollSmoother",
                        duration: 100,
                        onUpdate: function () {
                          if (this._dur) {
                            var t = L;
                            t && (et(S), (J.y = G)),
                              rt(J.y, t),
                              K(),
                              B && !P && B(X);
                          }
                        },
                      }
                    ),
                    onRefreshInit: function (t) {
                      if (k) {
                        var e = h.getAll().filter(function (t) {
                          return !!t.pin;
                        });
                        k.forEach(function (t) {
                          t.vars.pinnedContainer ||
                            e.forEach(function (e) {
                              if (e.pin.contains(t.trigger)) {
                                var r = t.vars;
                                (r.pinnedContainer = e.pin),
                                  (t.vars = null),
                                  t.init(r, t.animation);
                              }
                            });
                        });
                      }
                      var r = t.getTween();
                      (D = r && r._end > r._dp._time),
                        (j = G),
                        (J.y = 0),
                        V &&
                          ((y.style.pointerEvents = "none"),
                          (y.scrollTop = 0),
                          setTimeout(function () {
                            return y.style.removeProperty("pointer-events");
                          }, 50));
                    },
                    onRefresh: function (t) {
                      t.animation.invalidate(),
                        t.setPositions(t.start, ft()),
                        D || et(t),
                        (J.y = -U()),
                        rt(J.y),
                        Q ||
                          t.animation.progress(n.utils.clamp(0, 1, j / -t.end)),
                        D && ((t.progress -= 0.001), t.update());
                    },
                    id: "ScrollSmoother",
                    scroller: s,
                    invalidateOnRefresh: !0,
                    start: 0,
                    refreshPriority: -9999,
                    end: ft,
                    onScrubComplete: function () {
                      Z.reset(), q && q(r);
                    },
                    scrub: V || !0,
                  })),
                  (this.smooth = function (t) {
                    return (
                      arguments.length && (V = t || 0),
                      arguments.length
                        ? S.scrubDuration(t)
                        : S.getTween()
                        ? S.getTween().duration()
                        : 0
                    );
                  }),
                  S.getTween() && (S.getTween().vars.ease = e.ease || d),
                  (this.scrollTrigger = S),
                  e.effects &&
                    this.effects(
                      !0 === e.effects
                        ? "[data-" + H + "speed], [data-" + H + "lag]"
                        : e.effects,
                      {}
                    ),
                  e.sections &&
                    this.sections(
                      !0 === e.sections ? "[data-section]" : e.sections
                    ),
                  dt.forEach(function (t) {
                    (t.vars.scroller = y), t.init(t.vars, t.animation);
                  }),
                  (this.paused = function (t, e) {
                    return arguments.length
                      ? (!!P !== t &&
                          (t
                            ? (S.getTween() && S.getTween().pause(),
                              U(-G),
                              Z.reset(),
                              (A = h.normalizeScroll()) && A.disable(),
                              ((P = h.observe({
                                preventDefault: !0,
                                type: "wheel,touch,scroll",
                                debounce: !1,
                                allowClicks: !0,
                                onChangeY: function () {
                                  return nt(-G);
                                },
                              })).nested = g(
                                a,
                                "wheel,touch,scroll",
                                !0,
                                !1 !== e
                              )))
                            : (P.nested.kill(),
                              P.kill(),
                              (P = 0),
                              A && A.enable(),
                              (S.progress = (-G - S.start) / (S.end - S.start)),
                              et(S))),
                        this)
                      : !!P;
                  }),
                  (this.kill = this.revert =
                    function () {
                      r.paused(!1), et(S), S.kill();
                      for (
                        var t = (k || []).concat(E || []), e = t.length;
                        e--;

                      )
                        t[e].kill();
                      h.scrollerProxy(y),
                        h.removeEventListener("killAll", at),
                        h.removeEventListener("refresh", ot),
                        (y.style.cssText = O),
                        (_.style.cssText = C);
                      var n = h.defaults({});
                      n && n.scroller === y && h.defaults({ scroller: s }),
                        r.normalizer && h.normalizeScroll(!1),
                        clearInterval(M),
                        (f = null),
                        N && N.disconnect(),
                        u.style.removeProperty("height"),
                        s.removeEventListener("focusin", it);
                    }),
                  (this.refresh = function (t, e) {
                    return S.refresh(t, e);
                  }),
                  W &&
                    (this.normalizer = h.normalizeScroll(
                      !0 === W ? { debounce: !0, content: !V && _ } : W
                    )),
                  h.config(e),
                  "overscrollBehavior" in s.getComputedStyle(u) &&
                    n.set([u, a], { overscrollBehavior: "none" }),
                  "scrollBehavior" in s.getComputedStyle(u) &&
                    n.set([u, a], { scrollBehavior: "auto" }),
                  s.addEventListener("focusin", it),
                  (M = setInterval(K, 250)),
                  "loading" === o.readyState ||
                    requestAnimationFrame(function () {
                      return h.refresh();
                    });
              }
              return (
                (t.register = function (e) {
                  return (
                    i ||
                      ((n = e || y()),
                      _() &&
                        window.document &&
                        ((s = window),
                        (o = document),
                        (a = o.documentElement),
                        (u = o.body)),
                      n &&
                        ((c = n.utils.toArray),
                        (l = n.utils.clamp),
                        (d = n.parseEase("expo")),
                        (m = n.core.context || function () {}),
                        (v = n
                          .delayedCall(0.2, function () {
                            return h.isRefreshing || (f && f.refresh());
                          })
                          .pause()),
                        (h = n.core.globals().ScrollTrigger),
                        n.core.globals("ScrollSmoother", t),
                        u &&
                          h &&
                          ((p = h.core._getVelocityProp),
                          (g = h.core._inputObserver),
                          (t.refresh = h.refresh),
                          (i = 1)))),
                    i
                  );
                }),
                r(t, [
                  {
                    key: "progress",
                    get: function () {
                      return this.scrollTrigger
                        ? this.scrollTrigger.animation._time / 100
                        : 0;
                    },
                  },
                ]),
                t
              );
            })();
          (T.version = "3.11.3"),
            (T.create = function (t) {
              return f && t && f.content() === c(t.content)[0] ? f : new T(t);
            }),
            (T.get = function () {
              return f;
            }),
            y() && n.registerPlugin(T),
            (t.ScrollSmoother = T),
            (t.default = T),
            "undefined" == typeof window || window !== t
              ? Object.defineProperty(t, "__esModule", { value: !0 })
              : delete window.default;
        })(e);
      },
      752: function (t, e) {
        !(function (t) {
          "use strict";
          function e(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          function r(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          }
          var n,
            i,
            s,
            o,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            g = function () {
              return (
                n ||
                ("undefined" != typeof window &&
                  (n = window.gsap) &&
                  n.registerPlugin &&
                  n)
              );
            },
            m = 1,
            v = [],
            _ = [],
            y = [],
            b = Date.now,
            w = function (t, e) {
              return e;
            },
            x = function () {
              var t = h.core,
                e = t.bridge || {},
                r = t._scrollers,
                n = t._proxies;
              r.push.apply(r, _),
                n.push.apply(n, y),
                (_ = r),
                (y = n),
                (w = function (t, r) {
                  return e[t](r);
                });
            },
            T = function (t, e) {
              return ~y.indexOf(t) && y[y.indexOf(t) + 1][e];
            },
            S = function (t) {
              return !!~f.indexOf(t);
            },
            k = function (t, e, r, n, i) {
              return t.addEventListener(e, r, { passive: !n, capture: !!i });
            },
            E = function (t, e, r, n) {
              return t.removeEventListener(e, r, !!n);
            },
            M = "scrollLeft",
            O = "scrollTop",
            C = function () {
              return (d && d.isPressed) || _.cache++;
            },
            P = function (t, e) {
              var r = function r(n) {
                if (n || 0 === n) {
                  m && (s.history.scrollRestoration = "manual");
                  var i = d && d.isPressed;
                  (n = r.v = Math.round(n) || (d && d.iOS ? 1 : 0)),
                    t(n),
                    (r.cacheID = _.cache),
                    i && w("ss", n);
                } else
                  (e || _.cache !== r.cacheID || w("ref")) &&
                    ((r.cacheID = _.cache), (r.v = t()));
                return r.v + r.offset;
              };
              return (r.offset = 0), t && r;
            },
            A = {
              s: M,
              p: "left",
              p2: "Left",
              os: "right",
              os2: "Right",
              d: "width",
              d2: "Width",
              a: "x",
              sc: P(function (t) {
                return arguments.length
                  ? s.scrollTo(t, j.sc())
                  : s.pageXOffset || o[M] || a[M] || u[M] || 0;
              }),
            },
            j = {
              s: O,
              p: "top",
              p2: "Top",
              os: "bottom",
              os2: "Bottom",
              d: "height",
              d2: "Height",
              a: "y",
              op: A,
              sc: P(function (t) {
                return arguments.length
                  ? s.scrollTo(A.sc(), t)
                  : s.pageYOffset || o[O] || a[O] || u[O] || 0;
              }),
            },
            D = function (t) {
              return (
                n.utils.toArray(t)[0] ||
                ("string" == typeof t && !1 !== n.config().nullTargetWarn
                  ? console.warn("Element not found:", t)
                  : null)
              );
            },
            L = function (t, e) {
              var r = e.s,
                i = e.sc;
              S(t) && (t = o.scrollingElement || a);
              var s = _.indexOf(t),
                u = i === j.sc ? 1 : 2;
              !~s && (s = _.push(t) - 1),
                _[s + u] || t.addEventListener("scroll", C);
              var c = _[s + u],
                l =
                  c ||
                  (_[s + u] =
                    P(T(t, r), !0) ||
                    (S(t)
                      ? i
                      : P(function (e) {
                          return arguments.length ? (t[r] = e) : t[r];
                        })));
              return (
                (l.target = t),
                c ||
                  (l.smooth = "smooth" === n.getProperty(t, "scrollBehavior")),
                l
              );
            },
            I = function (t, e, r) {
              var n = t,
                i = t,
                s = b(),
                o = s,
                a = e || 50,
                u = Math.max(500, 3 * a),
                c = function (t, e) {
                  var u = b();
                  e || u - s > a
                    ? ((i = n), (n = t), (o = s), (s = u))
                    : r
                    ? (n += t)
                    : (n = i + ((t - i) / (u - o)) * (s - o));
                },
                l = function (t) {
                  var e = o,
                    a = i,
                    l = b();
                  return (
                    (t || 0 === t) && t !== n && c(t),
                    s === o || l - o > u
                      ? 0
                      : ((n + (r ? a : -a)) / ((r ? l : s) - e)) * 1e3
                  );
                };
              return {
                update: c,
                reset: function () {
                  (i = n = r ? 0 : n), (o = s = 0);
                },
                getVelocity: l,
              };
            },
            R = function (t, e) {
              return (
                e && !t._gsapAllow && t.preventDefault(),
                t.changedTouches ? t.changedTouches[0] : t
              );
            },
            z = function (t) {
              var e = Math.max.apply(Math, t),
                r = Math.min.apply(Math, t);
              return Math.abs(e) >= Math.abs(r) ? e : r;
            },
            B = function () {
              (h = n.core.globals().ScrollTrigger) && h.core && x();
            },
            q = function (t) {
              return (
                (n = t || g()) &&
                  "undefined" != typeof document &&
                  document.body &&
                  ((s = window),
                  (o = document),
                  (a = o.documentElement),
                  (u = o.body),
                  (f = [s, o, a, u]),
                  n.utils.clamp,
                  (l = "onpointerenter" in u ? "pointer" : "mouse"),
                  (c = F.isTouch =
                    s.matchMedia &&
                    s.matchMedia("(hover: none), (pointer: coarse)").matches
                      ? 1
                      : "ontouchstart" in s ||
                        navigator.maxTouchPoints > 0 ||
                        navigator.msMaxTouchPoints > 0
                      ? 2
                      : 0),
                  (p = F.eventTypes =
                    (
                      "ontouchstart" in a
                        ? "touchstart,touchmove,touchcancel,touchend"
                        : "onpointerdown" in a
                        ? "pointerdown,pointermove,pointercancel,pointerup"
                        : "mousedown,mousemove,mouseup,mouseup"
                    ).split(",")),
                  setTimeout(function () {
                    return (m = 0);
                  }, 500),
                  B(),
                  (i = 1)),
                i
              );
            };
          (A.op = j), (_.cache = 0);
          var F = (function () {
            function t(t) {
              this.init(t);
            }
            return (
              (t.prototype.init = function (t) {
                i ||
                  q(n) ||
                  console.warn("Please gsap.registerPlugin(Observer)"),
                  h || B();
                var e = t.tolerance,
                  r = t.dragMinimum,
                  f = t.type,
                  g = t.target,
                  m = t.lineHeight,
                  _ = t.debounce,
                  y = t.preventDefault,
                  w = t.onStop,
                  x = t.onStopDelay,
                  T = t.ignore,
                  M = t.wheelSpeed,
                  O = t.event,
                  P = t.onDragStart,
                  F = t.onDragEnd,
                  Y = t.onDrag,
                  W = t.onPress,
                  X = t.onRelease,
                  N = t.onRight,
                  H = t.onLeft,
                  U = t.onUp,
                  V = t.onDown,
                  G = t.onChangeX,
                  $ = t.onChangeY,
                  Q = t.onChange,
                  Z = t.onToggleX,
                  K = t.onToggleY,
                  J = t.onHover,
                  tt = t.onHoverEnd,
                  et = t.onMove,
                  rt = t.ignoreCheck,
                  nt = t.isNormalizer,
                  it = t.onGestureStart,
                  st = t.onGestureEnd,
                  ot = t.onWheel,
                  at = t.onEnable,
                  ut = t.onDisable,
                  ct = t.onClick,
                  lt = t.scrollSpeed,
                  ht = t.capture,
                  ft = t.allowClicks,
                  dt = t.lockAxis,
                  pt = t.onLockAxis;
                (this.target = g = D(g) || a),
                  (this.vars = t),
                  T && (T = n.utils.toArray(T)),
                  (e = e || 1e-9),
                  (r = r || 0),
                  (M = M || 1),
                  (lt = lt || 1),
                  (f = f || "wheel,touch,pointer"),
                  (_ = !1 !== _),
                  m || (m = parseFloat(s.getComputedStyle(u).lineHeight) || 22);
                var gt,
                  mt,
                  vt,
                  _t,
                  yt,
                  bt,
                  wt,
                  xt = this,
                  Tt = 0,
                  St = 0,
                  kt = L(g, A),
                  Et = L(g, j),
                  Mt = kt(),
                  Ot = Et(),
                  Ct =
                    ~f.indexOf("touch") &&
                    !~f.indexOf("pointer") &&
                    "pointerdown" === p[0],
                  Pt = S(g),
                  At = g.ownerDocument || o,
                  jt = [0, 0, 0],
                  Dt = [0, 0, 0],
                  Lt = 0,
                  It = function () {
                    return (Lt = b());
                  },
                  Rt = function (t, e) {
                    return (
                      ((xt.event = t) && T && ~T.indexOf(t.target)) ||
                      (e && Ct && "touch" !== t.pointerType) ||
                      (rt && rt(t, e))
                    );
                  },
                  zt = function () {
                    xt._vx.reset(), xt._vy.reset(), mt.pause(), w && w(xt);
                  },
                  Bt = function () {
                    var t = (xt.deltaX = z(jt)),
                      r = (xt.deltaY = z(Dt)),
                      n = Math.abs(t) >= e,
                      i = Math.abs(r) >= e;
                    Q && (n || i) && Q(xt, t, r, jt, Dt),
                      n &&
                        (N && xt.deltaX > 0 && N(xt),
                        H && xt.deltaX < 0 && H(xt),
                        G && G(xt),
                        Z && xt.deltaX < 0 != Tt < 0 && Z(xt),
                        (Tt = xt.deltaX),
                        (jt[0] = jt[1] = jt[2] = 0)),
                      i &&
                        (V && xt.deltaY > 0 && V(xt),
                        U && xt.deltaY < 0 && U(xt),
                        $ && $(xt),
                        K && xt.deltaY < 0 != St < 0 && K(xt),
                        (St = xt.deltaY),
                        (Dt[0] = Dt[1] = Dt[2] = 0)),
                      (_t || vt) &&
                        (et && et(xt), vt && (Y(xt), (vt = !1)), (_t = !1)),
                      bt && !(bt = !1) && pt && pt(xt),
                      yt && (ot(xt), (yt = !1)),
                      (gt = 0);
                  },
                  qt = function (t, e, r) {
                    (jt[r] += t),
                      (Dt[r] += e),
                      xt._vx.update(t),
                      xt._vy.update(e),
                      _ ? gt || (gt = requestAnimationFrame(Bt)) : Bt();
                  },
                  Ft = function (t, e) {
                    dt &&
                      !wt &&
                      ((xt.axis = wt = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                      (bt = !0)),
                      "y" !== wt && ((jt[2] += t), xt._vx.update(t, !0)),
                      "x" !== wt && ((Dt[2] += e), xt._vy.update(e, !0)),
                      _ ? gt || (gt = requestAnimationFrame(Bt)) : Bt();
                  },
                  Yt = function (t) {
                    if (!Rt(t, 1)) {
                      var e = (t = R(t, y)).clientX,
                        n = t.clientY,
                        i = e - xt.x,
                        s = n - xt.y,
                        o = xt.isDragging;
                      (xt.x = e),
                        (xt.y = n),
                        (o ||
                          Math.abs(xt.startX - e) >= r ||
                          Math.abs(xt.startY - n) >= r) &&
                          (Y && (vt = !0),
                          o || (xt.isDragging = !0),
                          Ft(i, s),
                          o || (P && P(xt)));
                    }
                  },
                  Wt = (xt.onPress = function (t) {
                    Rt(t, 1) ||
                      ((xt.axis = wt = null),
                      mt.pause(),
                      (xt.isPressed = !0),
                      (t = R(t)),
                      (Tt = St = 0),
                      (xt.startX = xt.x = t.clientX),
                      (xt.startY = xt.y = t.clientY),
                      xt._vx.reset(),
                      xt._vy.reset(),
                      k(nt ? g : At, p[1], Yt, y, !0),
                      (xt.deltaX = xt.deltaY = 0),
                      W && W(xt));
                  }),
                  Xt = function (t) {
                    if (!Rt(t, 1)) {
                      E(nt ? g : At, p[1], Yt, !0);
                      var e =
                          xt.isDragging &&
                          (Math.abs(xt.x - xt.startX) > 3 ||
                            Math.abs(xt.y - xt.startY) > 3),
                        r = R(t);
                      e ||
                        (xt._vx.reset(),
                        xt._vy.reset(),
                        y &&
                          ft &&
                          n.delayedCall(0.08, function () {
                            if (b() - Lt > 300 && !t.defaultPrevented)
                              if (t.target.click) t.target.click();
                              else if (At.createEvent) {
                                var e = At.createEvent("MouseEvents");
                                e.initMouseEvent(
                                  "click",
                                  !0,
                                  !0,
                                  s,
                                  1,
                                  r.screenX,
                                  r.screenY,
                                  r.clientX,
                                  r.clientY,
                                  !1,
                                  !1,
                                  !1,
                                  !1,
                                  0,
                                  null
                                ),
                                  t.target.dispatchEvent(e);
                              }
                          })),
                        (xt.isDragging = xt.isGesturing = xt.isPressed = !1),
                        w && !nt && mt.restart(!0),
                        F && e && F(xt),
                        X && X(xt, e);
                    }
                  },
                  Nt = function (t) {
                    return (
                      t.touches &&
                      t.touches.length > 1 &&
                      (xt.isGesturing = !0) &&
                      it(t, xt.isDragging)
                    );
                  },
                  Ht = function () {
                    return (xt.isGesturing = !1) || st(xt);
                  },
                  Ut = function (t) {
                    if (!Rt(t)) {
                      var e = kt(),
                        r = Et();
                      qt((e - Mt) * lt, (r - Ot) * lt, 1),
                        (Mt = e),
                        (Ot = r),
                        w && mt.restart(!0);
                    }
                  },
                  Vt = function (t) {
                    if (!Rt(t)) {
                      (t = R(t, y)), ot && (yt = !0);
                      var e =
                        (1 === t.deltaMode
                          ? m
                          : 2 === t.deltaMode
                          ? s.innerHeight
                          : 1) * M;
                      qt(t.deltaX * e, t.deltaY * e, 0),
                        w && !nt && mt.restart(!0);
                    }
                  },
                  Gt = function (t) {
                    if (!Rt(t)) {
                      var e = t.clientX,
                        r = t.clientY,
                        n = e - xt.x,
                        i = r - xt.y;
                      (xt.x = e), (xt.y = r), (_t = !0), (n || i) && Ft(n, i);
                    }
                  },
                  $t = function (t) {
                    (xt.event = t), J(xt);
                  },
                  Qt = function (t) {
                    (xt.event = t), tt(xt);
                  },
                  Zt = function (t) {
                    return Rt(t) || (R(t, y) && ct(xt));
                  };
                (mt = xt._dc = n.delayedCall(x || 0.25, zt).pause()),
                  (xt.deltaX = xt.deltaY = 0),
                  (xt._vx = I(0, 50, !0)),
                  (xt._vy = I(0, 50, !0)),
                  (xt.scrollX = kt),
                  (xt.scrollY = Et),
                  (xt.isDragging = xt.isGesturing = xt.isPressed = !1),
                  (xt.enable = function (t) {
                    return (
                      xt.isEnabled ||
                        (k(Pt ? At : g, "scroll", C),
                        f.indexOf("scroll") >= 0 &&
                          k(Pt ? At : g, "scroll", Ut, y, ht),
                        f.indexOf("wheel") >= 0 && k(g, "wheel", Vt, y, ht),
                        ((f.indexOf("touch") >= 0 && c) ||
                          f.indexOf("pointer") >= 0) &&
                          (k(g, p[0], Wt, y, ht),
                          k(At, p[2], Xt),
                          k(At, p[3], Xt),
                          ft && k(g, "click", It, !1, !0),
                          ct && k(g, "click", Zt),
                          it && k(At, "gesturestart", Nt),
                          st && k(At, "gestureend", Ht),
                          J && k(g, l + "enter", $t),
                          tt && k(g, l + "leave", Qt),
                          et && k(g, l + "move", Gt)),
                        (xt.isEnabled = !0),
                        t && t.type && Wt(t),
                        at && at(xt)),
                      xt
                    );
                  }),
                  (xt.disable = function () {
                    xt.isEnabled &&
                      (v.filter(function (t) {
                        return t !== xt && S(t.target);
                      }).length || E(Pt ? At : g, "scroll", C),
                      xt.isPressed &&
                        (xt._vx.reset(),
                        xt._vy.reset(),
                        E(nt ? g : At, p[1], Yt, !0)),
                      E(Pt ? At : g, "scroll", Ut, ht),
                      E(g, "wheel", Vt, ht),
                      E(g, p[0], Wt, ht),
                      E(At, p[2], Xt),
                      E(At, p[3], Xt),
                      E(g, "click", It, !0),
                      E(g, "click", Zt),
                      E(At, "gesturestart", Nt),
                      E(At, "gestureend", Ht),
                      E(g, l + "enter", $t),
                      E(g, l + "leave", Qt),
                      E(g, l + "move", Gt),
                      (xt.isEnabled = xt.isPressed = xt.isDragging = !1),
                      ut && ut(xt));
                  }),
                  (xt.kill = function () {
                    xt.disable();
                    var t = v.indexOf(xt);
                    t >= 0 && v.splice(t, 1), d === xt && (d = 0);
                  }),
                  v.push(xt),
                  nt && S(g) && (d = xt),
                  xt.enable(O);
              }),
              r(t, [
                {
                  key: "velocityX",
                  get: function () {
                    return this._vx.getVelocity();
                  },
                },
                {
                  key: "velocityY",
                  get: function () {
                    return this._vy.getVelocity();
                  },
                },
              ]),
              t
            );
          })();
          (F.version = "3.11.3"),
            (F.create = function (t) {
              return new F(t);
            }),
            (F.register = q),
            (F.getAll = function () {
              return v.slice();
            }),
            (F.getById = function (t) {
              return v.filter(function (e) {
                return e.vars.id === t;
              })[0];
            }),
            g() && n.registerPlugin(F);
          var Y,
            W,
            X,
            N,
            H,
            U,
            V,
            G,
            $,
            Q,
            Z,
            K,
            J,
            tt,
            et,
            rt,
            nt,
            it,
            st,
            ot,
            at,
            ut,
            ct,
            lt,
            ht,
            ft,
            dt,
            pt,
            gt,
            mt,
            vt,
            _t,
            yt,
            bt,
            wt = 1,
            xt = Date.now,
            Tt = xt(),
            St = 0,
            kt = 0,
            Et = function () {
              return (tt = 1);
            },
            Mt = function () {
              return (tt = 0);
            },
            Ot = function (t) {
              return t;
            },
            Ct = function (t) {
              return Math.round(1e5 * t) / 1e5 || 0;
            },
            Pt = function () {
              return "undefined" != typeof window;
            },
            At = function () {
              return Y || (Pt() && (Y = window.gsap) && Y.registerPlugin && Y);
            },
            jt = function (t) {
              return !!~V.indexOf(t);
            },
            Dt = function (t) {
              return (
                T(t, "getBoundingClientRect") ||
                (jt(t)
                  ? function () {
                      return (
                        (Je.width = X.innerWidth),
                        (Je.height = X.innerHeight),
                        Je
                      );
                    }
                  : function () {
                      return ce(t);
                    })
              );
            },
            Lt = function (t, e, r) {
              var n = r.d,
                i = r.d2,
                s = r.a;
              return (s = T(t, "getBoundingClientRect"))
                ? function () {
                    return s()[n];
                  }
                : function () {
                    return (e ? X["inner" + i] : t["client" + i]) || 0;
                  };
            },
            It = function (t, e) {
              return !e || ~y.indexOf(t)
                ? Dt(t)
                : function () {
                    return Je;
                  };
            },
            Rt = function (t, e) {
              var r = e.s,
                n = e.d2,
                i = e.d,
                s = e.a;
              return (r = "scroll" + n) && (s = T(t, r))
                ? s() - Dt(t)()[i]
                : jt(t)
                ? (H[r] || U[r]) -
                  (X["inner" + n] || H["client" + n] || U["client" + n])
                : t[r] - t["offset" + n];
            },
            zt = function (t, e) {
              for (var r = 0; r < st.length; r += 3)
                (!e || ~e.indexOf(st[r + 1])) && t(st[r], st[r + 1], st[r + 2]);
            },
            Bt = function (t) {
              return "string" == typeof t;
            },
            qt = function (t) {
              return "function" == typeof t;
            },
            Ft = function (t) {
              return "number" == typeof t;
            },
            Yt = function (t) {
              return "object" == typeof t;
            },
            Wt = function (t, e, r) {
              return t && t.progress(e ? 0 : 1) && r && t.pause();
            },
            Xt = function (t, e) {
              if (t.enabled) {
                var r = e(t);
                r && r.totalTime && (t.callbackAnimation = r);
              }
            },
            Nt = Math.abs,
            Ht = "left",
            Ut = "top",
            Vt = "right",
            Gt = "bottom",
            $t = "width",
            Qt = "height",
            Zt = "Right",
            Kt = "Left",
            Jt = "Top",
            te = "Bottom",
            ee = "padding",
            re = "margin",
            ne = "Width",
            ie = "Height",
            se = "px",
            oe = function (t) {
              return X.getComputedStyle(t);
            },
            ae = function (t) {
              var e = oe(t).position;
              t.style.position =
                "absolute" === e || "fixed" === e ? e : "relative";
            },
            ue = function (t, e) {
              for (var r in e) r in t || (t[r] = e[r]);
              return t;
            },
            ce = function (t, e) {
              var r =
                  e &&
                  "matrix(1, 0, 0, 1, 0, 0)" !== oe(t)[et] &&
                  Y.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  }).progress(1),
                n = t.getBoundingClientRect();
              return r && r.progress(0).kill(), n;
            },
            le = function (t, e) {
              var r = e.d2;
              return t["offset" + r] || t["client" + r] || 0;
            },
            he = function (t) {
              var e,
                r = [],
                n = t.labels,
                i = t.duration();
              for (e in n) r.push(n[e] / i);
              return r;
            },
            fe = function (t) {
              return function (e) {
                return Y.utils.snap(he(t), e);
              };
            },
            de = function (t) {
              var e = Y.utils.snap(t),
                r =
                  Array.isArray(t) &&
                  t.slice(0).sort(function (t, e) {
                    return t - e;
                  });
              return r
                ? function (t, n, i) {
                    var s;
                    if ((void 0 === i && (i = 0.001), !n)) return e(t);
                    if (n > 0) {
                      for (t -= i, s = 0; s < r.length; s++)
                        if (r[s] >= t) return r[s];
                      return r[s - 1];
                    }
                    for (s = r.length, t += i; s--; )
                      if (r[s] <= t) return r[s];
                    return r[0];
                  }
                : function (r, n, i) {
                    void 0 === i && (i = 0.001);
                    var s = e(r);
                    return !n || Math.abs(s - r) < i || s - r < 0 == n < 0
                      ? s
                      : e(n < 0 ? r - t : r + t);
                  };
            },
            pe = function (t) {
              return function (e, r) {
                return de(he(t))(e, r.direction);
              };
            },
            ge = function (t, e, r, n) {
              return r.split(",").forEach(function (r) {
                return t(e, r, n);
              });
            },
            me = function (t, e, r, n, i) {
              return t.addEventListener(e, r, { passive: !n, capture: !!i });
            },
            ve = function (t, e, r, n) {
              return t.removeEventListener(e, r, !!n);
            },
            _e = function (t, e, r) {
              return r && r.wheelHandler && t(e, "wheel", r);
            },
            ye = {
              startColor: "green",
              endColor: "red",
              indent: 0,
              fontSize: "16px",
              fontWeight: "normal",
            },
            be = { toggleActions: "play", anticipatePin: 0 },
            we = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
            xe = function (t, e) {
              if (Bt(t)) {
                var r = t.indexOf("="),
                  n = ~r
                    ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1))
                    : 0;
                ~r &&
                  (t.indexOf("%") > r && (n *= e / 100),
                  (t = t.substr(0, r - 1))),
                  (t =
                    n +
                    (t in we
                      ? we[t] * e
                      : ~t.indexOf("%")
                      ? (parseFloat(t) * e) / 100
                      : parseFloat(t) || 0));
              }
              return t;
            },
            Te = function (t, e, r, n, i, s, o, a) {
              var u = i.startColor,
                c = i.endColor,
                l = i.fontSize,
                h = i.indent,
                f = i.fontWeight,
                d = N.createElement("div"),
                p = jt(r) || "fixed" === T(r, "pinType"),
                g = -1 !== t.indexOf("scroller"),
                m = p ? U : r,
                v = -1 !== t.indexOf("start"),
                _ = v ? u : c,
                y =
                  "border-color:" +
                  _ +
                  ";font-size:" +
                  l +
                  ";color:" +
                  _ +
                  ";font-weight:" +
                  f +
                  ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
              return (
                (y += "position:" + ((g || a) && p ? "fixed;" : "absolute;")),
                (g || a || !p) &&
                  (y +=
                    (n === j ? Vt : Gt) + ":" + (s + parseFloat(h)) + "px;"),
                o &&
                  (y +=
                    "box-sizing:border-box;text-align:left;width:" +
                    o.offsetWidth +
                    "px;"),
                (d._isStart = v),
                d.setAttribute(
                  "class",
                  "gsap-marker-" + t + (e ? " marker-" + e : "")
                ),
                (d.style.cssText = y),
                (d.innerText = e || 0 === e ? t + "-" + e : t),
                m.children[0]
                  ? m.insertBefore(d, m.children[0])
                  : m.appendChild(d),
                (d._offset = d["offset" + n.op.d2]),
                Se(d, 0, n, v),
                d
              );
            },
            Se = function (t, e, r, n) {
              var i = { display: "block" },
                s = r[n ? "os2" : "p2"],
                o = r[n ? "p2" : "os2"];
              (t._isFlipped = n),
                (i[r.a + "Percent"] = n ? -100 : 0),
                (i[r.a] = n ? "1px" : 0),
                (i["border" + s + ne] = 1),
                (i["border" + o + ne] = 0),
                (i[r.p] = e + "px"),
                Y.set(t, i);
            },
            ke = [],
            Ee = {},
            Me = function () {
              return xt() - St > 34 && (vt || (vt = requestAnimationFrame(Ne)));
            },
            Oe = function () {
              (!ct || !ct.isPressed || ct.startX > U.clientWidth) &&
                (_.cache++,
                ct ? vt || (vt = requestAnimationFrame(Ne)) : Ne(),
                St || Le("scrollStart"),
                (St = xt()));
            },
            Ce = function () {
              (ft = X.innerWidth), (ht = X.innerHeight);
            },
            Pe = function () {
              _.cache++,
                !J &&
                  !ut &&
                  !N.fullscreenElement &&
                  !N.webkitFullscreenElement &&
                  (!lt ||
                    ft !== X.innerWidth ||
                    Math.abs(X.innerHeight - ht) > 0.25 * X.innerHeight) &&
                  G.restart(!0);
            },
            Ae = {},
            je = [],
            De = function t() {
              return ve(ir, "scrollEnd", t) || Ye(!0);
            },
            Le = function (t) {
              return (
                (Ae[t] &&
                  Ae[t].map(function (t) {
                    return t();
                  })) ||
                je
              );
            },
            Ie = [],
            Re = function (t) {
              for (var e = 0; e < Ie.length; e += 5)
                (!t || (Ie[e + 4] && Ie[e + 4].query === t)) &&
                  ((Ie[e].style.cssText = Ie[e + 1]),
                  Ie[e].getBBox &&
                    Ie[e].setAttribute("transform", Ie[e + 2] || ""),
                  (Ie[e + 3].uncache = 1));
            },
            ze = function (t, e) {
              var r;
              for (rt = 0; rt < ke.length; rt++)
                !(r = ke[rt]) ||
                  (e && r._ctx !== e) ||
                  (t ? r.kill(1) : r.revert(!0, !0));
              e && Re(e), e || Le("revert");
            },
            Be = function (t, e) {
              _.cache++,
                (e || !_t) &&
                  _.forEach(function (t) {
                    return qt(t) && t.cacheID++ && (t.rec = 0);
                  }),
                Bt(t) && (X.history.scrollRestoration = gt = t);
            },
            qe = 0,
            Fe = function () {
              if (yt !== qe) {
                var t = (yt = qe);
                requestAnimationFrame(function () {
                  return t === qe && Ye(!0);
                });
              }
            },
            Ye = function (t, e) {
              if (!St || t) {
                (_t = ir.isRefreshing = !0),
                  _.forEach(function (t) {
                    return qt(t) && t.cacheID++ && (t.rec = t());
                  });
                var r = Le("refreshInit");
                ot && ir.sort(),
                  e || ze(),
                  _.forEach(function (t) {
                    qt(t) &&
                      (t.smooth && (t.target.style.scrollBehavior = "auto"),
                      t(0));
                  }),
                  ke.slice(0).forEach(function (t) {
                    return t.refresh();
                  }),
                  ke.forEach(function (t, e) {
                    if (t._subPinOffset && t.pin) {
                      var r = t.vars.horizontal
                          ? "offsetWidth"
                          : "offsetHeight",
                        n = t.pin[r];
                      t.revert(!0, 1),
                        t.adjustPinSpacing(t.pin[r] - n),
                        t.revert(!1, 1);
                    }
                  }),
                  ke.forEach(function (t) {
                    return (
                      "max" === t.vars.end &&
                      t.setPositions(
                        t.start,
                        Math.max(t.start + 1, Rt(t.scroller, t._dir))
                      )
                    );
                  }),
                  r.forEach(function (t) {
                    return t && t.render && t.render(-1);
                  }),
                  _.forEach(function (t) {
                    qt(t) &&
                      (t.smooth &&
                        requestAnimationFrame(function () {
                          return (t.target.style.scrollBehavior = "smooth");
                        }),
                      t.rec && t(t.rec));
                  }),
                  Be(gt, 1),
                  G.pause(),
                  qe++,
                  Ne(2),
                  ke.forEach(function (t) {
                    return qt(t.vars.onRefresh) && t.vars.onRefresh(t);
                  }),
                  (_t = ir.isRefreshing = !1),
                  Le("refresh");
              } else me(ir, "scrollEnd", De);
            },
            We = 0,
            Xe = 1,
            Ne = function (t) {
              if (!_t || 2 === t) {
                (ir.isUpdating = !0), bt && bt.update(0);
                var e = ke.length,
                  r = xt(),
                  n = r - Tt >= 50,
                  i = e && ke[0].scroll();
                if (
                  ((Xe = We > i ? -1 : 1),
                  (We = i),
                  n &&
                    (St && !tt && r - St > 200 && ((St = 0), Le("scrollEnd")),
                    (Z = Tt),
                    (Tt = r)),
                  Xe < 0)
                ) {
                  for (rt = e; rt-- > 0; ) ke[rt] && ke[rt].update(0, n);
                  Xe = 1;
                } else for (rt = 0; rt < e; rt++) ke[rt] && ke[rt].update(0, n);
                ir.isUpdating = !1;
              }
              vt = 0;
            },
            He = [
              Ht,
              Ut,
              Gt,
              Vt,
              re + te,
              re + Zt,
              re + Jt,
              re + Kt,
              "display",
              "flexShrink",
              "float",
              "zIndex",
              "gridColumnStart",
              "gridColumnEnd",
              "gridRowStart",
              "gridRowEnd",
              "gridArea",
              "justifySelf",
              "alignSelf",
              "placeSelf",
              "order",
            ],
            Ue = He.concat([
              $t,
              Qt,
              "boxSizing",
              "max" + ne,
              "max" + ie,
              "position",
              re,
              ee,
              ee + Jt,
              ee + Zt,
              ee + te,
              ee + Kt,
            ]),
            Ve = function (t, e, r) {
              Qe(r);
              var n = t._gsap;
              if (n.spacerIsNative) Qe(n.spacerState);
              else if (t._gsap.swappedIn) {
                var i = e.parentNode;
                i && (i.insertBefore(t, e), i.removeChild(e));
              }
              t._gsap.swappedIn = !1;
            },
            Ge = function (t, e, r, n) {
              if (!t._gsap.swappedIn) {
                for (var i, s = He.length, o = e.style, a = t.style; s--; )
                  o[(i = He[s])] = r[i];
                (o.position =
                  "absolute" === r.position ? "absolute" : "relative"),
                  "inline" === r.display && (o.display = "inline-block"),
                  (a[Gt] = a[Vt] = "auto"),
                  (o.flexBasis = r.flexBasis || "auto"),
                  (o.overflow = "visible"),
                  (o.boxSizing = "border-box"),
                  (o[$t] = le(t, A) + se),
                  (o[Qt] = le(t, j) + se),
                  (o[ee] = a[re] = a[Ut] = a[Ht] = "0"),
                  Qe(n),
                  (a[$t] = a["max" + ne] = r[$t]),
                  (a[Qt] = a["max" + ie] = r[Qt]),
                  (a[ee] = r[ee]),
                  t.parentNode !== e &&
                    (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                  (t._gsap.swappedIn = !0);
              }
            },
            $e = /([A-Z])/g,
            Qe = function (t) {
              if (t) {
                var e,
                  r,
                  n = t.t.style,
                  i = t.length,
                  s = 0;
                for (
                  (t.t._gsap || Y.core.getCache(t.t)).uncache = 1;
                  s < i;
                  s += 2
                )
                  (r = t[s + 1]),
                    (e = t[s]),
                    r
                      ? (n[e] = r)
                      : n[e] &&
                        n.removeProperty(e.replace($e, "-$1").toLowerCase());
              }
            },
            Ze = function (t) {
              for (var e = Ue.length, r = t.style, n = [], i = 0; i < e; i++)
                n.push(Ue[i], r[Ue[i]]);
              return (n.t = t), n;
            },
            Ke = function (t, e, r) {
              for (var n, i = [], s = t.length, o = r ? 8 : 0; o < s; o += 2)
                (n = t[o]), i.push(n, n in e ? e[n] : t[o + 1]);
              return (i.t = t.t), i;
            },
            Je = { left: 0, top: 0 },
            tr = function (t, e, r, n, i, s, o, a, u, c, l, h, f) {
              qt(t) && (t = t(a)),
                Bt(t) &&
                  "max" === t.substr(0, 3) &&
                  (t =
                    h + ("=" === t.charAt(4) ? xe("0" + t.substr(3), r) : 0));
              var d,
                p,
                g,
                m = f ? f.time() : 0;
              if ((f && f.seek(0), Ft(t))) o && Se(o, r, n, !0);
              else {
                qt(e) && (e = e(a));
                var v,
                  _,
                  y,
                  b,
                  w = (t || "0").split(" ");
                (g = D(e) || U),
                  ((v = ce(g) || {}) && (v.left || v.top)) ||
                    "none" !== oe(g).display ||
                    ((b = g.style.display),
                    (g.style.display = "block"),
                    (v = ce(g)),
                    b
                      ? (g.style.display = b)
                      : g.style.removeProperty("display")),
                  (_ = xe(w[0], v[n.d])),
                  (y = xe(w[1] || "0", r)),
                  (t = v[n.p] - u[n.p] - c + _ + i - y),
                  o && Se(o, y, n, r - y < 20 || (o._isStart && y > 20)),
                  (r -= r - y);
              }
              if (s) {
                var x = t + r,
                  T = s._isStart;
                (d = "scroll" + n.d2),
                  Se(
                    s,
                    x,
                    n,
                    (T && x > 20) ||
                      (!T &&
                        (l ? Math.max(U[d], H[d]) : s.parentNode[d]) <= x + 1)
                  ),
                  l &&
                    ((u = ce(o)),
                    l &&
                      (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + se));
              }
              return (
                f &&
                  g &&
                  ((d = ce(g)),
                  f.seek(h),
                  (p = ce(g)),
                  (f._caScrollDist = d[n.p] - p[n.p]),
                  (t = (t / f._caScrollDist) * h)),
                f && f.seek(m),
                f ? t : Math.round(t)
              );
            },
            er = /(webkit|moz|length|cssText|inset)/i,
            rr = function (t, e, r, n) {
              if (t.parentNode !== e) {
                var i,
                  s,
                  o = t.style;
                if (e === U) {
                  for (i in ((t._stOrig = o.cssText), (s = oe(t))))
                    +i ||
                      er.test(i) ||
                      !s[i] ||
                      "string" != typeof o[i] ||
                      "0" === i ||
                      (o[i] = s[i]);
                  (o.top = r), (o.left = n);
                } else o.cssText = t._stOrig;
                (Y.core.getCache(t).uncache = 1), e.appendChild(t);
              }
            },
            nr = function (t, e) {
              var r,
                n,
                i = L(t, e),
                s = "_scroll" + e.p2,
                o = function e(o, a, u, c, l) {
                  var h = e.tween,
                    f = a.onComplete,
                    d = {};
                  return (
                    (u = u || i()),
                    (l = (c && l) || 0),
                    (c = c || o - u),
                    h && h.kill(),
                    (r = Math.round(u)),
                    (a[s] = o),
                    (a.modifiers = d),
                    (d[s] = function (t) {
                      return (
                        (t = Math.round(i())) !== r &&
                        t !== n &&
                        Math.abs(t - r) > 3 &&
                        Math.abs(t - n) > 3
                          ? (h.kill(), (e.tween = 0))
                          : (t = u + c * h.ratio + l * h.ratio * h.ratio),
                        (n = r),
                        (r = Math.round(t))
                      );
                    }),
                    (a.onComplete = function () {
                      (e.tween = 0), f && f.call(h);
                    }),
                    (h = e.tween = Y.to(t, a))
                  );
                };
              return (
                (t[s] = i),
                (i.wheelHandler = function () {
                  return o.tween && o.tween.kill() && (o.tween = 0);
                }),
                me(t, "wheel", i.wheelHandler),
                o
              );
            },
            ir = (function () {
              function t(e, r) {
                W ||
                  t.register(Y) ||
                  console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                  this.init(e, r);
              }
              return (
                (t.prototype.init = function (e, r) {
                  if (
                    ((this.progress = this.start = 0),
                    this.vars && this.kill(!0, !0),
                    kt)
                  ) {
                    var n,
                      i,
                      s,
                      o,
                      a,
                      u,
                      c,
                      l,
                      h,
                      f,
                      d,
                      p,
                      g,
                      m,
                      v,
                      b,
                      w,
                      x,
                      S,
                      k,
                      E,
                      M,
                      O,
                      C,
                      P,
                      I,
                      R,
                      z,
                      B,
                      q,
                      F,
                      W,
                      V,
                      G,
                      K,
                      et,
                      nt,
                      it,
                      st = (e = ue(
                        Bt(e) || Ft(e) || e.nodeType ? { trigger: e } : e,
                        be
                      )),
                      ut = st.onUpdate,
                      ct = st.toggleClass,
                      lt = st.id,
                      ht = st.onToggle,
                      ft = st.onRefresh,
                      dt = st.scrub,
                      gt = st.trigger,
                      vt = st.pin,
                      yt = st.pinSpacing,
                      Tt = st.invalidateOnRefresh,
                      Et = st.anticipatePin,
                      Mt = st.onScrubComplete,
                      Pt = st.onSnapComplete,
                      At = st.once,
                      Dt = st.snap,
                      zt = st.pinReparent,
                      Ht = st.pinSpacer,
                      Ut = st.containerAnimation,
                      Vt = st.fastScrollEnd,
                      Gt = st.preventOverlaps,
                      he =
                        e.horizontal ||
                        (e.containerAnimation && !1 !== e.horizontal)
                          ? A
                          : j,
                      ge = !dt && 0 !== dt,
                      _e = D(e.scroller || X),
                      we = Y.core.getCache(_e),
                      Se = jt(_e),
                      Me =
                        "fixed" ===
                        ("pinType" in e
                          ? e.pinType
                          : T(_e, "pinType") || (Se && "fixed")),
                      Ce = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                      Ae = ge && e.toggleActions.split(" "),
                      je = "markers" in e ? e.markers : be.markers,
                      Le = Se
                        ? 0
                        : parseFloat(oe(_e)["border" + he.p2 + ne]) || 0,
                      Ie = this,
                      Re =
                        e.onRefreshInit &&
                        function () {
                          return e.onRefreshInit(Ie);
                        },
                      ze = Lt(_e, Se, he),
                      Be = It(_e, Se),
                      qe = 0,
                      Ye = 0,
                      We = L(_e, he);
                    if (
                      (pt(Ie),
                      (Ie._dir = he),
                      (Et *= 45),
                      (Ie.scroller = _e),
                      (Ie.scroll = Ut ? Ut.time.bind(Ut) : We),
                      (o = We()),
                      (Ie.vars = e),
                      (r = r || e.animation),
                      "refreshPriority" in e &&
                        ((ot = 1), -9999 === e.refreshPriority && (bt = Ie)),
                      (we.tweenScroll = we.tweenScroll || {
                        top: nr(_e, j),
                        left: nr(_e, A),
                      }),
                      (Ie.tweenTo = n = we.tweenScroll[he.p]),
                      (Ie.scrubDuration = function (t) {
                        (F = Ft(t) && t)
                          ? q
                            ? q.duration(t)
                            : (q = Y.to(r, {
                                ease: "expo",
                                totalProgress: "+=0.001",
                                duration: F,
                                paused: !0,
                                onComplete: function () {
                                  return Mt && Mt(Ie);
                                },
                              }))
                          : (q && q.progress(1).kill(), (q = 0));
                      }),
                      r &&
                        ((r.vars.lazy = !1),
                        r._initted ||
                          (!1 !== r.vars.immediateRender &&
                            !1 !== e.immediateRender &&
                            r.duration() &&
                            r.render(0, !0, !0)),
                        (Ie.animation = r.pause()),
                        (r.scrollTrigger = Ie),
                        Ie.scrubDuration(dt),
                        (z = 0),
                        lt || (lt = r.vars.id)),
                      ke.push(Ie),
                      Dt &&
                        ((Yt(Dt) && !Dt.push) || (Dt = { snapTo: Dt }),
                        "scrollBehavior" in U.style &&
                          Y.set(Se ? [U, H] : _e, { scrollBehavior: "auto" }),
                        _.forEach(function (t) {
                          return (
                            qt(t) &&
                            t.target === (Se ? N.scrollingElement || H : _e) &&
                            (t.smooth = !1)
                          );
                        }),
                        (s = qt(Dt.snapTo)
                          ? Dt.snapTo
                          : "labels" === Dt.snapTo
                          ? fe(r)
                          : "labelsDirectional" === Dt.snapTo
                          ? pe(r)
                          : !1 !== Dt.directional
                          ? function (t, e) {
                              return de(Dt.snapTo)(
                                t,
                                xt() - Ye < 500 ? 0 : e.direction
                              );
                            }
                          : Y.utils.snap(Dt.snapTo)),
                        (W = Dt.duration || { min: 0.1, max: 2 }),
                        (W = Yt(W) ? Q(W.min, W.max) : Q(W, W)),
                        (V = Y.delayedCall(
                          Dt.delay || F / 2 || 0.1,
                          function () {
                            var t = We(),
                              e = xt() - Ye < 500,
                              i = n.tween;
                            if (
                              !(e || Math.abs(Ie.getVelocity()) < 10) ||
                              i ||
                              tt ||
                              qe === t
                            )
                              Ie.isActive && qe !== t && V.restart(!0);
                            else {
                              var o = (t - u) / g,
                                a = r && !ge ? r.totalProgress() : o,
                                l = e ? 0 : ((a - B) / (xt() - Z)) * 1e3 || 0,
                                h = Y.utils.clamp(
                                  -o,
                                  1 - o,
                                  (Nt(l / 2) * l) / 0.185
                                ),
                                f = o + (!1 === Dt.inertia ? 0 : h),
                                d = Q(0, 1, s(f, Ie)),
                                p = Math.round(u + d * g),
                                m = Dt,
                                v = m.onStart,
                                _ = m.onInterrupt,
                                y = m.onComplete;
                              if (t <= c && t >= u && p !== t) {
                                if (i && !i._initted && i.data <= Nt(p - t))
                                  return;
                                !1 === Dt.inertia && (h = d - o),
                                  n(
                                    p,
                                    {
                                      duration: W(
                                        Nt(
                                          (0.185 *
                                            Math.max(Nt(f - a), Nt(d - a))) /
                                            l /
                                            0.05 || 0
                                        )
                                      ),
                                      ease: Dt.ease || "power3",
                                      data: Nt(p - t),
                                      onInterrupt: function () {
                                        return V.restart(!0) && _ && _(Ie);
                                      },
                                      onComplete: function () {
                                        Ie.update(),
                                          (qe = We()),
                                          (z = B =
                                            r && !ge
                                              ? r.totalProgress()
                                              : Ie.progress),
                                          Pt && Pt(Ie),
                                          y && y(Ie);
                                      },
                                    },
                                    t,
                                    h * g,
                                    p - t - h * g
                                  ),
                                  v && v(Ie, n.tween);
                              }
                            }
                          }
                        ).pause())),
                      lt && (Ee[lt] = Ie),
                      (it =
                        (gt = Ie.trigger = D(gt || vt)) &&
                        gt._gsap &&
                        gt._gsap.stRevert) && (it = it(Ie)),
                      (vt = !0 === vt ? gt : D(vt)),
                      Bt(ct) && (ct = { targets: gt, className: ct }),
                      vt &&
                        (!1 === yt ||
                          yt === re ||
                          (yt =
                            !(
                              !yt &&
                              vt.parentNode &&
                              vt.parentNode.style &&
                              "flex" === oe(vt.parentNode).display
                            ) && ee),
                        (Ie.pin = vt),
                        (i = Y.core.getCache(vt)).spacer
                          ? (m = i.pinState)
                          : (Ht &&
                              ((Ht = D(Ht)) &&
                                !Ht.nodeType &&
                                (Ht = Ht.current || Ht.nativeElement),
                              (i.spacerIsNative = !!Ht),
                              Ht && (i.spacerState = Ze(Ht))),
                            (i.spacer = w = Ht || N.createElement("div")),
                            w.classList.add("pin-spacer"),
                            lt && w.classList.add("pin-spacer-" + lt),
                            (i.pinState = m = Ze(vt))),
                        !1 !== e.force3D && Y.set(vt, { force3D: !0 }),
                        (Ie.spacer = w = i.spacer),
                        (R = oe(vt)),
                        (O = R[yt + he.os2]),
                        (S = Y.getProperty(vt)),
                        (k = Y.quickSetter(vt, he.a, se)),
                        Ge(vt, w, R),
                        (b = Ze(vt))),
                      je)
                    ) {
                      (p = Yt(je) ? ue(je, ye) : ye),
                        (f = Te("scroller-start", lt, _e, he, p, 0)),
                        (d = Te("scroller-end", lt, _e, he, p, 0, f)),
                        (x = f["offset" + he.op.d2]);
                      var Ne = D(T(_e, "content") || _e);
                      (l = this.markerStart =
                        Te("start", lt, Ne, he, p, x, 0, Ut)),
                        (h = this.markerEnd =
                          Te("end", lt, Ne, he, p, x, 0, Ut)),
                        Ut && (nt = Y.quickSetter([l, h], he.a, se)),
                        Me ||
                          (y.length && !0 === T(_e, "fixedMarkers")) ||
                          (ae(Se ? U : _e),
                          Y.set([f, d], { force3D: !0 }),
                          (P = Y.quickSetter(f, he.a, se)),
                          (I = Y.quickSetter(d, he.a, se)));
                    }
                    if (Ut) {
                      var He = Ut.vars.onUpdate,
                        Ue = Ut.vars.onUpdateParams;
                      Ut.eventCallback("onUpdate", function () {
                        Ie.update(0, 0, 1), He && He.apply(Ue || []);
                      });
                    }
                    (Ie.previous = function () {
                      return ke[ke.indexOf(Ie) - 1];
                    }),
                      (Ie.next = function () {
                        return ke[ke.indexOf(Ie) + 1];
                      }),
                      (Ie.revert = function (t, e) {
                        if (!e) return Ie.kill(!0);
                        var n = !1 !== t || !Ie.enabled,
                          i = J;
                        n !== Ie.isReverted &&
                          (n &&
                            ((K = Math.max(We(), Ie.scroll.rec || 0)),
                            (G = Ie.progress),
                            (et = r && r.progress())),
                          l &&
                            [l, h, f, d].forEach(function (t) {
                              return (t.style.display = n ? "none" : "block");
                            }),
                          n && ((J = 1), Ie.update(n)),
                          vt &&
                            (n
                              ? Ve(vt, w, m)
                              : (!zt || !Ie.isActive) && Ge(vt, w, oe(vt), C)),
                          n || Ie.update(n),
                          (J = i),
                          (Ie.isReverted = n));
                      }),
                      (Ie.refresh = function (i, s) {
                        if ((!J && Ie.enabled) || s)
                          if (vt && i && St) me(t, "scrollEnd", De);
                          else {
                            !_t && Re && Re(Ie),
                              (J = 1),
                              (Ye = xt()),
                              n.tween && (n.tween.kill(), (n.tween = 0)),
                              q && q.pause(),
                              Tt && r && r.revert({ kill: !1 }).invalidate(),
                              Ie.isReverted || Ie.revert(!0, !0),
                              (Ie._subPinOffset = !1);
                            for (
                              var p,
                                _,
                                y,
                                x,
                                T,
                                k,
                                O,
                                P,
                                I,
                                R,
                                z = ze(),
                                B = Be(),
                                F = Ut ? Ut.duration() : Rt(_e, he),
                                W = 0,
                                X = 0,
                                N = e.end,
                                H = e.endTrigger || gt,
                                $ =
                                  e.start ||
                                  (0 !== e.start && gt
                                    ? vt
                                      ? "0 0"
                                      : "0 100%"
                                    : 0),
                                Q = (Ie.pinnedContainer =
                                  e.pinnedContainer && D(e.pinnedContainer)),
                                Z = (gt && Math.max(0, ke.indexOf(Ie))) || 0,
                                tt = Z;
                              tt--;

                            )
                              (k = ke[tt]).end || k.refresh(0, 1) || (J = 1),
                                !(O = k.pin) ||
                                  (O !== gt && O !== vt) ||
                                  k.isReverted ||
                                  (R || (R = []),
                                  R.unshift(k),
                                  k.revert(!0, !0)),
                                k !== ke[tt] && (Z--, tt--);
                            for (
                              qt($) && ($ = $(Ie)),
                                u =
                                  tr(
                                    $,
                                    gt,
                                    z,
                                    he,
                                    We(),
                                    l,
                                    f,
                                    Ie,
                                    B,
                                    Le,
                                    Me,
                                    F,
                                    Ut
                                  ) || (vt ? -0.001 : 0),
                                qt(N) && (N = N(Ie)),
                                Bt(N) &&
                                  !N.indexOf("+=") &&
                                  (~N.indexOf(" ")
                                    ? (N = (Bt($) ? $.split(" ")[0] : "") + N)
                                    : ((W = xe(N.substr(2), z)),
                                      (N = Bt($) ? $ : u + W),
                                      (H = gt))),
                                c =
                                  Math.max(
                                    u,
                                    tr(
                                      N || (H ? "100% 0" : F),
                                      H,
                                      z,
                                      he,
                                      We() + W,
                                      h,
                                      d,
                                      Ie,
                                      B,
                                      Le,
                                      Me,
                                      F,
                                      Ut
                                    )
                                  ) || -0.001,
                                g = c - u || ((u -= 0.01) && 0.001),
                                W = 0,
                                tt = Z;
                              tt--;

                            )
                              (O = (k = ke[tt]).pin) &&
                                k.start - k._pinPush <= u &&
                                !Ut &&
                                k.end > 0 &&
                                ((p = k.end - k.start),
                                ((O === gt && k.start - k._pinPush < u) ||
                                  O === Q) &&
                                  !Ft($) &&
                                  (W += p * (1 - k.progress)),
                                O === vt && (X += p));
                            if (
                              ((u += W),
                              (c += W),
                              (Ie._pinPush = X),
                              l &&
                                W &&
                                (((p = {})[he.a] = "+=" + W),
                                Q && (p[he.p] = "-=" + We()),
                                Y.set([l, h], p)),
                              vt)
                            )
                              (p = oe(vt)),
                                (x = he === j),
                                (y = We()),
                                (E = parseFloat(S(he.a)) + X),
                                !F &&
                                  c > 1 &&
                                  ((Se ? U : _e).style["overflow-" + he.a] =
                                    "scroll"),
                                Ge(vt, w, p),
                                (b = Ze(vt)),
                                (_ = ce(vt, !0)),
                                (P = Me && L(_e, x ? A : j)()),
                                yt &&
                                  (((C = [yt + he.os2, g + X + se]).t = w),
                                  (tt = yt === ee ? le(vt, he) + g + X : 0) &&
                                    C.push(he.d, tt + se),
                                  Qe(C),
                                  Q &&
                                    ke.forEach(function (t) {
                                      t.pin === Q &&
                                        !1 !== t.vars.pinSpacing &&
                                        (t._subPinOffset = !0);
                                    }),
                                  Me && We(K)),
                                Me &&
                                  (((T = {
                                    top: _.top + (x ? y - u : P) + se,
                                    left: _.left + (x ? P : y - u) + se,
                                    boxSizing: "border-box",
                                    position: "fixed",
                                  })[$t] = T["max" + ne] =
                                    Math.ceil(_.width) + se),
                                  (T[Qt] = T["max" + ie] =
                                    Math.ceil(_.height) + se),
                                  (T[re] =
                                    T[re + Jt] =
                                    T[re + Zt] =
                                    T[re + te] =
                                    T[re + Kt] =
                                      "0"),
                                  (T[ee] = p[ee]),
                                  (T[ee + Jt] = p[ee + Jt]),
                                  (T[ee + Zt] = p[ee + Zt]),
                                  (T[ee + te] = p[ee + te]),
                                  (T[ee + Kt] = p[ee + Kt]),
                                  (v = Ke(m, T, zt)),
                                  _t && We(0)),
                                r
                                  ? ((I = r._initted),
                                    at(1),
                                    r.render(r.duration(), !0, !0),
                                    (M = S(he.a) - E + g + X),
                                    g !== M && Me && v.splice(v.length - 2, 2),
                                    r.render(0, !0, !0),
                                    I || r.invalidate(!0),
                                    r.parent || r.totalTime(r.totalTime()),
                                    at(0))
                                  : (M = g);
                            else if (gt && We() && !Ut)
                              for (_ = gt.parentNode; _ && _ !== U; )
                                _._pinOffset &&
                                  ((u -= _._pinOffset), (c -= _._pinOffset)),
                                  (_ = _.parentNode);
                            R &&
                              R.forEach(function (t) {
                                return t.revert(!1, !0);
                              }),
                              (Ie.start = u),
                              (Ie.end = c),
                              (o = a = _t ? K : We()),
                              Ut || _t || (o < K && We(K), (Ie.scroll.rec = 0)),
                              Ie.revert(!1, !0),
                              V &&
                                ((qe = -1),
                                Ie.isActive && We(u + g * G),
                                V.restart(!0)),
                              (J = 0),
                              r &&
                                ge &&
                                (r._initted || et) &&
                                r.progress() !== et &&
                                r.progress(et, !0).render(r.time(), !0, !0),
                              (G !== Ie.progress || Ut) &&
                                (r && !ge && r.totalProgress(G, !0),
                                (Ie.progress = (o - u) / g === G ? 0 : G)),
                              vt &&
                                yt &&
                                (w._pinOffset = Math.round(Ie.progress * M)),
                              ft && !_t && ft(Ie);
                          }
                      }),
                      (Ie.getVelocity = function () {
                        return ((We() - a) / (xt() - Z)) * 1e3 || 0;
                      }),
                      (Ie.endAnimation = function () {
                        Wt(Ie.callbackAnimation),
                          r &&
                            (q
                              ? q.progress(1)
                              : r.paused()
                              ? ge || Wt(r, Ie.direction < 0, 1)
                              : Wt(r, r.reversed()));
                      }),
                      (Ie.labelToScroll = function (t) {
                        return (
                          (r &&
                            r.labels &&
                            (u || Ie.refresh() || u) +
                              (r.labels[t] / r.duration()) * g) ||
                          0
                        );
                      }),
                      (Ie.getTrailing = function (t) {
                        var e = ke.indexOf(Ie),
                          r =
                            Ie.direction > 0
                              ? ke.slice(0, e).reverse()
                              : ke.slice(e + 1);
                        return (
                          Bt(t)
                            ? r.filter(function (e) {
                                return e.vars.preventOverlaps === t;
                              })
                            : r
                        ).filter(function (t) {
                          return Ie.direction > 0 ? t.end <= u : t.start >= c;
                        });
                      }),
                      (Ie.update = function (t, e, i) {
                        if (!Ut || i || t) {
                          var s,
                            l,
                            h,
                            d,
                            p,
                            m,
                            _,
                            y = _t ? K : Ie.scroll(),
                            x = t ? 0 : (y - u) / g,
                            T = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                            S = Ie.progress;
                          if (
                            (e &&
                              ((a = o),
                              (o = Ut ? We() : y),
                              Dt &&
                                ((B = z),
                                (z = r && !ge ? r.totalProgress() : T))),
                            Et &&
                              !T &&
                              vt &&
                              !J &&
                              !wt &&
                              St &&
                              u < y + ((y - a) / (xt() - Z)) * Et &&
                              (T = 1e-4),
                            T !== S && Ie.enabled)
                          ) {
                            if (
                              ((d =
                                (p =
                                  (s = Ie.isActive = !!T && T < 1) !=
                                  (!!S && S < 1)) || !!T != !!S),
                              (Ie.direction = T > S ? 1 : -1),
                              (Ie.progress = T),
                              d &&
                                !J &&
                                ((l =
                                  T && !S ? 0 : 1 === T ? 1 : 1 === S ? 2 : 3),
                                ge &&
                                  ((h =
                                    (!p && "none" !== Ae[l + 1] && Ae[l + 1]) ||
                                    Ae[l]),
                                  (_ =
                                    r &&
                                    ("complete" === h ||
                                      "reset" === h ||
                                      h in r)))),
                              Gt &&
                                (p || _) &&
                                (_ || dt || !r) &&
                                (qt(Gt)
                                  ? Gt(Ie)
                                  : Ie.getTrailing(Gt).forEach(function (t) {
                                      return t.endAnimation();
                                    })),
                              ge ||
                                (!q || J || wt
                                  ? r && r.totalProgress(T, !!J)
                                  : ((Ut || (bt && bt !== Ie)) &&
                                      q.render(q._dp._time - q._start),
                                    q.resetTo
                                      ? q.resetTo(
                                          "totalProgress",
                                          T,
                                          r._tTime / r._tDur
                                        )
                                      : ((q.vars.totalProgress = T),
                                        q.invalidate().restart()))),
                              vt)
                            )
                              if ((t && yt && (w.style[yt + he.os2] = O), Me)) {
                                if (d) {
                                  if (
                                    ((m =
                                      !t &&
                                      T > S &&
                                      c + 1 > y &&
                                      y + 1 >= Rt(_e, he)),
                                    zt)
                                  )
                                    if (t || (!s && !m)) rr(vt, w);
                                    else {
                                      var C = ce(vt, !0),
                                        A = y - u;
                                      rr(
                                        vt,
                                        U,
                                        C.top + (he === j ? A : 0) + se,
                                        C.left + (he === j ? 0 : A) + se
                                      );
                                    }
                                  Qe(s || m ? v : b),
                                    (M !== g && T < 1 && s) ||
                                      k(E + (1 !== T || m ? 0 : M));
                                }
                              } else k(Ct(E + M * T));
                            Dt && !n.tween && !J && !wt && V.restart(!0),
                              ct &&
                                (p || (At && T && (T < 1 || !mt))) &&
                                $(ct.targets).forEach(function (t) {
                                  return t.classList[
                                    s || At ? "add" : "remove"
                                  ](ct.className);
                                }),
                              ut && !ge && !t && ut(Ie),
                              d && !J
                                ? (ge &&
                                    (_ &&
                                      ("complete" === h
                                        ? r.pause().totalProgress(1)
                                        : "reset" === h
                                        ? r.restart(!0).pause()
                                        : "restart" === h
                                        ? r.restart(!0)
                                        : r[h]()),
                                    ut && ut(Ie)),
                                  (!p && mt) ||
                                    (ht && p && Xt(Ie, ht),
                                    Ce[l] && Xt(Ie, Ce[l]),
                                    At &&
                                      (1 === T ? Ie.kill(!1, 1) : (Ce[l] = 0)),
                                    p ||
                                      (Ce[(l = 1 === T ? 1 : 3)] &&
                                        Xt(Ie, Ce[l]))),
                                  Vt &&
                                    !s &&
                                    Math.abs(Ie.getVelocity()) >
                                      (Ft(Vt) ? Vt : 2500) &&
                                    (Wt(Ie.callbackAnimation),
                                    q
                                      ? q.progress(1)
                                      : Wt(r, "reverse" === h ? 1 : !T, 1)))
                                : ge && ut && !J && ut(Ie);
                          }
                          if (I) {
                            var D = Ut
                              ? (y / Ut.duration()) * (Ut._caScrollDist || 0)
                              : y;
                            P(D + (f._isFlipped ? 1 : 0)), I(D);
                          }
                          nt &&
                            nt((-y / Ut.duration()) * (Ut._caScrollDist || 0));
                        }
                      }),
                      (Ie.enable = function (e, r) {
                        Ie.enabled ||
                          ((Ie.enabled = !0),
                          me(_e, "resize", Pe),
                          me(Se ? N : _e, "scroll", Oe),
                          Re && me(t, "refreshInit", Re),
                          !1 !== e &&
                            ((Ie.progress = G = 0), (o = a = qe = We())),
                          !1 !== r && Ie.refresh());
                      }),
                      (Ie.getTween = function (t) {
                        return t && n ? n.tween : q;
                      }),
                      (Ie.setPositions = function (t, e) {
                        vt &&
                          ((E += t - u),
                          (M += e - t - g),
                          yt === ee && Ie.adjustPinSpacing(e - t - g)),
                          (Ie.start = u = t),
                          (Ie.end = c = e),
                          (g = e - t),
                          Ie.update();
                      }),
                      (Ie.adjustPinSpacing = function (t) {
                        if (C) {
                          var e = C.indexOf(he.d) + 1;
                          (C[e] = parseFloat(C[e]) + t + se),
                            (C[1] = parseFloat(C[1]) + t + se),
                            Qe(C);
                        }
                      }),
                      (Ie.disable = function (e, r) {
                        if (
                          Ie.enabled &&
                          (!1 !== e && Ie.revert(!0, !0),
                          (Ie.enabled = Ie.isActive = !1),
                          r || (q && q.pause()),
                          (K = 0),
                          i && (i.uncache = 1),
                          Re && ve(t, "refreshInit", Re),
                          V &&
                            (V.pause(),
                            n.tween && n.tween.kill() && (n.tween = 0)),
                          !Se)
                        ) {
                          for (var s = ke.length; s--; )
                            if (ke[s].scroller === _e && ke[s] !== Ie) return;
                          ve(_e, "resize", Pe), ve(_e, "scroll", Oe);
                        }
                      }),
                      (Ie.kill = function (t, n) {
                        Ie.disable(t, n),
                          q && !n && q.kill(),
                          lt && delete Ee[lt];
                        var s = ke.indexOf(Ie);
                        s >= 0 && ke.splice(s, 1),
                          s === rt && Xe > 0 && rt--,
                          (s = 0),
                          ke.forEach(function (t) {
                            return t.scroller === Ie.scroller && (s = 1);
                          }),
                          s || _t || (Ie.scroll.rec = 0),
                          r &&
                            ((r.scrollTrigger = null),
                            t && r.revert({ kill: !1 }),
                            n || r.kill()),
                          l &&
                            [l, h, f, d].forEach(function (t) {
                              return (
                                t.parentNode && t.parentNode.removeChild(t)
                              );
                            }),
                          bt === Ie && (bt = 0),
                          vt &&
                            (i && (i.uncache = 1),
                            (s = 0),
                            ke.forEach(function (t) {
                              return t.pin === vt && s++;
                            }),
                            s || (i.spacer = 0)),
                          e.onKill && e.onKill(Ie);
                      }),
                      Ie.enable(!1, !1),
                      it && it(Ie),
                      r && r.add && !g
                        ? Y.delayedCall(0.01, function () {
                            return u || c || Ie.refresh();
                          }) &&
                          (g = 0.01) &&
                          (u = c = 0)
                        : Ie.refresh(),
                      vt && Fe();
                  } else this.update = this.refresh = this.kill = Ot;
                }),
                (t.register = function (e) {
                  return (
                    W ||
                      ((Y = e || At()),
                      Pt() && window.document && t.enable(),
                      (W = kt)),
                    W
                  );
                }),
                (t.defaults = function (t) {
                  if (t) for (var e in t) be[e] = t[e];
                  return be;
                }),
                (t.disable = function (t, e) {
                  (kt = 0),
                    ke.forEach(function (r) {
                      return r[e ? "kill" : "disable"](t);
                    }),
                    ve(X, "wheel", Oe),
                    ve(N, "scroll", Oe),
                    clearInterval(K),
                    ve(N, "touchcancel", Ot),
                    ve(U, "touchstart", Ot),
                    ge(ve, N, "pointerdown,touchstart,mousedown", Et),
                    ge(ve, N, "pointerup,touchend,mouseup", Mt),
                    G.kill(),
                    zt(ve);
                  for (var r = 0; r < _.length; r += 3)
                    _e(ve, _[r], _[r + 1]), _e(ve, _[r], _[r + 2]);
                }),
                (t.enable = function () {
                  if (
                    ((X = window),
                    (N = document),
                    (H = N.documentElement),
                    (U = N.body),
                    Y &&
                      (($ = Y.utils.toArray),
                      (Q = Y.utils.clamp),
                      (pt = Y.core.context || Ot),
                      (at = Y.core.suppressOverwrites || Ot),
                      (gt = X.history.scrollRestoration || "auto"),
                      Y.core.globals("ScrollTrigger", t),
                      U))
                  ) {
                    (kt = 1),
                      F.register(Y),
                      (t.isTouch = F.isTouch),
                      (dt =
                        F.isTouch &&
                        /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                      me(X, "wheel", Oe),
                      (V = [X, N, H, U]),
                      Y.matchMedia
                        ? ((t.matchMedia = function (t) {
                            var e,
                              r = Y.matchMedia();
                            for (e in t) r.add(e, t[e]);
                            return r;
                          }),
                          Y.addEventListener("matchMediaInit", function () {
                            return ze();
                          }),
                          Y.addEventListener("matchMediaRevert", function () {
                            return Re();
                          }),
                          Y.addEventListener("matchMedia", function () {
                            Ye(0, 1), Le("matchMedia");
                          }),
                          Y.matchMedia("(orientation: portrait)", function () {
                            return Ce(), Ce;
                          }))
                        : console.warn("Requires GSAP 3.11.0 or later"),
                      Ce(),
                      me(N, "scroll", Oe);
                    var e,
                      r,
                      n = U.style,
                      i = n.borderTopStyle,
                      s = Y.core.Animation.prototype;
                    for (
                      s.revert ||
                        Object.defineProperty(s, "revert", {
                          value: function () {
                            return this.time(-0.01, !0);
                          },
                        }),
                        n.borderTopStyle = "solid",
                        e = ce(U),
                        j.m = Math.round(e.top + j.sc()) || 0,
                        A.m = Math.round(e.left + A.sc()) || 0,
                        i
                          ? (n.borderTopStyle = i)
                          : n.removeProperty("border-top-style"),
                        K = setInterval(Me, 250),
                        Y.delayedCall(0.5, function () {
                          return (wt = 0);
                        }),
                        me(N, "touchcancel", Ot),
                        me(U, "touchstart", Ot),
                        ge(me, N, "pointerdown,touchstart,mousedown", Et),
                        ge(me, N, "pointerup,touchend,mouseup", Mt),
                        et = Y.utils.checkPrefix("transform"),
                        Ue.push(et),
                        W = xt(),
                        G = Y.delayedCall(0.2, Ye).pause(),
                        st = [
                          N,
                          "visibilitychange",
                          function () {
                            var t = X.innerWidth,
                              e = X.innerHeight;
                            N.hidden
                              ? ((nt = t), (it = e))
                              : (nt === t && it === e) || Pe();
                          },
                          N,
                          "DOMContentLoaded",
                          Ye,
                          X,
                          "load",
                          Ye,
                          X,
                          "resize",
                          Pe,
                        ],
                        zt(me),
                        ke.forEach(function (t) {
                          return t.enable(0, 1);
                        }),
                        r = 0;
                      r < _.length;
                      r += 3
                    )
                      _e(ve, _[r], _[r + 1]), _e(ve, _[r], _[r + 2]);
                  }
                }),
                (t.config = function (e) {
                  "limitCallbacks" in e && (mt = !!e.limitCallbacks);
                  var r = e.syncInterval;
                  (r && clearInterval(K)) || ((K = r) && setInterval(Me, r)),
                    "ignoreMobileResize" in e &&
                      (lt = 1 === t.isTouch && e.ignoreMobileResize),
                    "autoRefreshEvents" in e &&
                      (zt(ve) || zt(me, e.autoRefreshEvents || "none"),
                      (ut =
                        -1 === (e.autoRefreshEvents + "").indexOf("resize")));
                }),
                (t.scrollerProxy = function (t, e) {
                  var r = D(t),
                    n = _.indexOf(r),
                    i = jt(r);
                  ~n && _.splice(n, i ? 6 : 2),
                    e && (i ? y.unshift(X, e, U, e, H, e) : y.unshift(r, e));
                }),
                (t.clearMatchMedia = function (t) {
                  ke.forEach(function (e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                  });
                }),
                (t.isInViewport = function (t, e, r) {
                  var n = (Bt(t) ? D(t) : t).getBoundingClientRect(),
                    i = n[r ? $t : Qt] * e || 0;
                  return r
                    ? n.right - i > 0 && n.left + i < X.innerWidth
                    : n.bottom - i > 0 && n.top + i < X.innerHeight;
                }),
                (t.positionInViewport = function (t, e, r) {
                  Bt(t) && (t = D(t));
                  var n = t.getBoundingClientRect(),
                    i = n[r ? $t : Qt],
                    s =
                      null == e
                        ? i / 2
                        : e in we
                        ? we[e] * i
                        : ~e.indexOf("%")
                        ? (parseFloat(e) * i) / 100
                        : parseFloat(e) || 0;
                  return r
                    ? (n.left + s) / X.innerWidth
                    : (n.top + s) / X.innerHeight;
                }),
                (t.killAll = function (t) {
                  if (
                    (ke.forEach(function (t) {
                      return "ScrollSmoother" !== t.vars.id && t.kill();
                    }),
                    !0 !== t)
                  ) {
                    var e = Ae.killAll || [];
                    (Ae = {}),
                      e.forEach(function (t) {
                        return t();
                      });
                  }
                }),
                t
              );
            })();
          (ir.version = "3.11.3"),
            (ir.saveStyles = function (t) {
              return t
                ? $(t).forEach(function (t) {
                    if (t && t.style) {
                      var e = Ie.indexOf(t);
                      e >= 0 && Ie.splice(e, 5),
                        Ie.push(
                          t,
                          t.style.cssText,
                          t.getBBox && t.getAttribute("transform"),
                          Y.core.getCache(t),
                          pt()
                        );
                    }
                  })
                : Ie;
            }),
            (ir.revert = function (t, e) {
              return ze(!t, e);
            }),
            (ir.create = function (t, e) {
              return new ir(t, e);
            }),
            (ir.refresh = function (t) {
              return t ? Pe() : (W || ir.register()) && Ye(!0);
            }),
            (ir.update = Ne),
            (ir.clearScrollMemory = Be),
            (ir.maxScroll = function (t, e) {
              return Rt(t, e ? A : j);
            }),
            (ir.getScrollFunc = function (t, e) {
              return L(D(t), e ? A : j);
            }),
            (ir.getById = function (t) {
              return Ee[t];
            }),
            (ir.getAll = function () {
              return ke.filter(function (t) {
                return "ScrollSmoother" !== t.vars.id;
              });
            }),
            (ir.isScrolling = function () {
              return !!St;
            }),
            (ir.snapDirectional = de),
            (ir.addEventListener = function (t, e) {
              var r = Ae[t] || (Ae[t] = []);
              ~r.indexOf(e) || r.push(e);
            }),
            (ir.removeEventListener = function (t, e) {
              var r = Ae[t],
                n = r && r.indexOf(e);
              n >= 0 && r.splice(n, 1);
            }),
            (ir.batch = function (t, e) {
              var r,
                n = [],
                i = {},
                s = e.interval || 0.016,
                o = e.batchMax || 1e9,
                a = function (t, e) {
                  var r = [],
                    n = [],
                    i = Y.delayedCall(s, function () {
                      e(r, n), (r = []), (n = []);
                    }).pause();
                  return function (t) {
                    r.length || i.restart(!0),
                      r.push(t.trigger),
                      n.push(t),
                      o <= r.length && i.progress(1);
                  };
                };
              for (r in e)
                i[r] =
                  "on" === r.substr(0, 2) && qt(e[r]) && "onRefreshInit" !== r
                    ? a(r, e[r])
                    : e[r];
              return (
                qt(o) &&
                  ((o = o()),
                  me(ir, "refresh", function () {
                    return (o = e.batchMax());
                  })),
                $(t).forEach(function (t) {
                  var e = {};
                  for (r in i) e[r] = i[r];
                  (e.trigger = t), n.push(ir.create(e));
                }),
                n
              );
            });
          var sr,
            or = function (t, e, r, n) {
              return (
                e > n ? t(n) : e < 0 && t(0),
                r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
              );
            },
            ar = function t(e, r) {
              !0 === r
                ? e.style.removeProperty("touch-action")
                : (e.style.touchAction =
                    !0 === r
                      ? "auto"
                      : r
                      ? "pan-" + r + (F.isTouch ? " pinch-zoom" : "")
                      : "none"),
                e === H && t(U, r);
            },
            ur = { auto: 1, scroll: 1 },
            cr = function (t) {
              var e,
                r = t.event,
                n = t.target,
                i = t.axis,
                s = (r.changedTouches ? r.changedTouches[0] : r).target,
                o = s._gsap || Y.core.getCache(s),
                a = xt();
              if (!o._isScrollT || a - o._isScrollT > 2e3) {
                for (; s && s.scrollHeight <= s.clientHeight; )
                  s = s.parentNode;
                (o._isScroll =
                  s &&
                  !jt(s) &&
                  s !== n &&
                  (ur[(e = oe(s)).overflowY] || ur[e.overflowX])),
                  (o._isScrollT = a);
              }
              (o._isScroll || "x" === i) &&
                (r.stopPropagation(), (r._gsapAllow = !0));
            },
            lr = function (t, e, r, n) {
              return F.create({
                target: t,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: e,
                onWheel: (n = n && cr),
                onPress: n,
                onDrag: n,
                onScroll: n,
                onEnable: function () {
                  return r && me(N, F.eventTypes[0], fr, !1, !0);
                },
                onDisable: function () {
                  return ve(N, F.eventTypes[0], fr, !0);
                },
              });
            },
            hr = /(input|label|select|textarea)/i,
            fr = function (t) {
              var e = hr.test(t.target.tagName);
              (e || sr) && ((t._gsapAllow = !0), (sr = e));
            },
            dr = function (t) {
              Yt(t) || (t = {}),
                (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
                t.type || (t.type = "wheel,touch"),
                (t.debounce = !!t.debounce),
                (t.id = t.id || "normalizer");
              var e,
                r,
                n,
                i,
                s,
                o,
                a,
                u,
                c = t,
                l = c.normalizeScrollX,
                h = c.momentum,
                f = c.allowNestedScroll,
                d = D(t.target) || H,
                p = Y.core.globals().ScrollSmoother,
                g = p && p.get(),
                m =
                  dt &&
                  ((t.content && D(t.content)) ||
                    (g && !1 !== t.content && !g.smooth() && g.content())),
                v = L(d, j),
                y = L(d, A),
                b = 1,
                w =
                  (F.isTouch && X.visualViewport
                    ? X.visualViewport.scale * X.visualViewport.width
                    : X.outerWidth) / X.innerWidth,
                x = 0,
                T = qt(h)
                  ? function () {
                      return h(e);
                    }
                  : function () {
                      return h || 2.8;
                    },
                S = lr(d, t.type, !0, f),
                k = function () {
                  return (i = !1);
                },
                E = Ot,
                M = Ot,
                O = function () {
                  (r = Rt(d, j)),
                    (M = Q(dt ? 1 : 0, r)),
                    l && (E = Q(0, Rt(d, A))),
                    (n = qe);
                },
                C = function () {
                  (m._gsap.y = Ct(parseFloat(m._gsap.y) + v.offset) + "px"),
                    (m.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      parseFloat(m._gsap.y) +
                      ", 0, 1)"),
                    (v.offset = v.cacheID = 0);
                },
                P = function () {
                  if (i) {
                    requestAnimationFrame(k);
                    var t = Ct(e.deltaY / 2),
                      r = M(v.v - t);
                    if (m && r !== v.v + v.offset) {
                      v.offset = r - v.v;
                      var n = Ct((parseFloat(m && m._gsap.y) || 0) - v.offset);
                      (m.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        n +
                        ", 0, 1)"),
                        (m._gsap.y = n + "px"),
                        (v.cacheID = _.cache),
                        Ne();
                    }
                    return !0;
                  }
                  v.offset && C(), (i = !0);
                },
                I = function () {
                  O(),
                    s.isActive() &&
                      s.vars.scrollY > r &&
                      (v() > r
                        ? s.progress(1) && v(r)
                        : s.resetTo("scrollY", r));
                };
              return (
                m && Y.set(m, { y: "+=0" }),
                (t.ignoreCheck = function (t) {
                  return (
                    (dt && "touchmove" === t.type && P()) ||
                    (b > 1.05 && "touchstart" !== t.type) ||
                    e.isGesturing ||
                    (t.touches && t.touches.length > 1)
                  );
                }),
                (t.onPress = function () {
                  var t = b;
                  (b = Ct(
                    ((X.visualViewport && X.visualViewport.scale) || 1) / w
                  )),
                    s.pause(),
                    t !== b && ar(d, b > 1.01 || (!l && "x")),
                    (o = y()),
                    (a = v()),
                    O(),
                    (n = qe);
                }),
                (t.onRelease = t.onGestureStart =
                  function (t, e) {
                    if ((v.offset && C(), e)) {
                      _.cache++;
                      var n,
                        i,
                        o = T();
                      l &&
                        ((i = (n = y()) + (0.05 * o * -t.velocityX) / 0.227),
                        (o *= or(y, n, i, Rt(d, A))),
                        (s.vars.scrollX = E(i))),
                        (i = (n = v()) + (0.05 * o * -t.velocityY) / 0.227),
                        (o *= or(v, n, i, Rt(d, j))),
                        (s.vars.scrollY = M(i)),
                        s.invalidate().duration(o).play(0.01),
                        ((dt && s.vars.scrollY >= r) || n >= r - 1) &&
                          Y.to({}, { onUpdate: I, duration: o });
                    } else u.restart(!0);
                  }),
                (t.onWheel = function () {
                  s._ts && s.pause(), xt() - x > 1e3 && ((n = 0), (x = xt()));
                }),
                (t.onChange = function (t, e, r, i, s) {
                  if (
                    (qe !== n && O(),
                    e &&
                      l &&
                      y(E(i[2] === e ? o + (t.startX - t.x) : y() + e - i[1])),
                    r)
                  ) {
                    v.offset && C();
                    var u = s[2] === r,
                      c = u ? a + t.startY - t.y : v() + r - s[1],
                      h = M(c);
                    u && c !== h && (a += h - c), v(h);
                  }
                  (r || e) && Ne();
                }),
                (t.onEnable = function () {
                  ar(d, !l && "x"),
                    ir.addEventListener("refresh", I),
                    me(X, "resize", I),
                    v.smooth &&
                      ((v.target.style.scrollBehavior = "auto"),
                      (v.smooth = y.smooth = !1)),
                    S.enable();
                }),
                (t.onDisable = function () {
                  ar(d, !0),
                    ve(X, "resize", I),
                    ir.removeEventListener("refresh", I),
                    S.kill();
                }),
                (t.lockAxis = !1 !== t.lockAxis),
                ((e = new F(t)).iOS = dt),
                dt && !v() && v(1),
                dt && Y.ticker.add(Ot),
                (u = e._dc),
                (s = Y.to(e, {
                  ease: "power4",
                  paused: !0,
                  scrollX: l ? "+=0.1" : "+=0",
                  scrollY: "+=0.1",
                  onComplete: u.vars.onComplete,
                })),
                e
              );
            };
          (ir.sort = function (t) {
            return ke.sort(
              t ||
                function (t, e) {
                  return (
                    -1e6 * (t.vars.refreshPriority || 0) +
                    t.start -
                    (e.start + -1e6 * (e.vars.refreshPriority || 0))
                  );
                }
            );
          }),
            (ir.observe = function (t) {
              return new F(t);
            }),
            (ir.normalizeScroll = function (t) {
              if (void 0 === t) return ct;
              if (!0 === t && ct) return ct.enable();
              if (!1 === t) return ct && ct.kill();
              var e = t instanceof F ? t : dr(t);
              return (
                ct && ct.target === e.target && ct.kill(),
                jt(e.target) && (ct = e),
                e
              );
            }),
            (ir.core = {
              _getVelocityProp: I,
              _inputObserver: lr,
              _scrollers: _,
              _proxies: y,
              bridge: {
                ss: function () {
                  St || Le("scrollStart"), (St = xt());
                },
                ref: function () {
                  return J;
                },
              },
            }),
            At() && Y.registerPlugin(ir),
            (t.ScrollTrigger = ir),
            (t.default = ir),
            "undefined" == typeof window || window !== t
              ? Object.defineProperty(t, "__esModule", { value: !0 })
              : delete window.default;
        })(e);
      },
      70: function (t, e, r) {
        var n, i;
        !(function (s, o) {
          "use strict";
          (n = [r(862)]),
            (i = function (t) {
              return (function (t, e) {
                var r = t.jQuery,
                  n = t.console;
                function i(t, e) {
                  for (var r in e) t[r] = e[r];
                  return t;
                }
                var s = Array.prototype.slice;
                function o(t) {
                  return Array.isArray(t)
                    ? t
                    : "object" == typeof t && "number" == typeof t.length
                    ? s.call(t)
                    : [t];
                }
                function a(t, e, s) {
                  if (!(this instanceof a)) return new a(t, e, s);
                  var u = t;
                  "string" == typeof t && (u = document.querySelectorAll(t)),
                    u
                      ? ((this.elements = o(u)),
                        (this.options = i({}, this.options)),
                        "function" == typeof e ? (s = e) : i(this.options, e),
                        s && this.on("always", s),
                        this.getImages(),
                        r && (this.jqDeferred = new r.Deferred()),
                        setTimeout(this.check.bind(this)))
                      : n.error("Bad element for imagesLoaded " + (u || t));
                }
                (a.prototype = Object.create(e.prototype)),
                  (a.prototype.options = {}),
                  (a.prototype.getImages = function () {
                    (this.images = []),
                      this.elements.forEach(this.addElementImages, this);
                  }),
                  (a.prototype.addElementImages = function (t) {
                    "IMG" == t.nodeName && this.addImage(t),
                      !0 === this.options.background &&
                        this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && u[e]) {
                      for (
                        var r = t.querySelectorAll("img"), n = 0;
                        n < r.length;
                        n++
                      ) {
                        var i = r[n];
                        this.addImage(i);
                      }
                      if ("string" == typeof this.options.background) {
                        var s = t.querySelectorAll(this.options.background);
                        for (n = 0; n < s.length; n++) {
                          var o = s[n];
                          this.addElementBackgroundImages(o);
                        }
                      }
                    }
                  });
                var u = { 1: !0, 9: !0, 11: !0 };
                function c(t) {
                  this.img = t;
                }
                function l(t, e) {
                  (this.url = t), (this.element = e), (this.img = new Image());
                }
                return (
                  (a.prototype.addElementBackgroundImages = function (t) {
                    var e = getComputedStyle(t);
                    if (e)
                      for (
                        var r = /url\((['"])?(.*?)\1\)/gi,
                          n = r.exec(e.backgroundImage);
                        null !== n;

                      ) {
                        var i = n && n[2];
                        i && this.addBackground(i, t),
                          (n = r.exec(e.backgroundImage));
                      }
                  }),
                  (a.prototype.addImage = function (t) {
                    var e = new c(t);
                    this.images.push(e);
                  }),
                  (a.prototype.addBackground = function (t, e) {
                    var r = new l(t, e);
                    this.images.push(r);
                  }),
                  (a.prototype.check = function () {
                    var t = this;
                    function e(e, r, n) {
                      setTimeout(function () {
                        t.progress(e, r, n);
                      });
                    }
                    (this.progressedCount = 0),
                      (this.hasAnyBroken = !1),
                      this.images.length
                        ? this.images.forEach(function (t) {
                            t.once("progress", e), t.check();
                          })
                        : this.complete();
                  }),
                  (a.prototype.progress = function (t, e, r) {
                    this.progressedCount++,
                      (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                      this.emitEvent("progress", [this, t, e]),
                      this.jqDeferred &&
                        this.jqDeferred.notify &&
                        this.jqDeferred.notify(this, t),
                      this.progressedCount == this.images.length &&
                        this.complete(),
                      this.options.debug && n && n.log("progress: " + r, t, e);
                  }),
                  (a.prototype.complete = function () {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (
                      ((this.isComplete = !0),
                      this.emitEvent(t, [this]),
                      this.emitEvent("always", [this]),
                      this.jqDeferred)
                    ) {
                      var e = this.hasAnyBroken ? "reject" : "resolve";
                      this.jqDeferred[e](this);
                    }
                  }),
                  (c.prototype = Object.create(e.prototype)),
                  (c.prototype.check = function () {
                    this.getIsImageComplete()
                      ? this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        )
                      : ((this.proxyImage = new Image()),
                        this.proxyImage.addEventListener("load", this),
                        this.proxyImage.addEventListener("error", this),
                        this.img.addEventListener("load", this),
                        this.img.addEventListener("error", this),
                        (this.proxyImage.src = this.img.src));
                  }),
                  (c.prototype.getIsImageComplete = function () {
                    return this.img.complete && this.img.naturalWidth;
                  }),
                  (c.prototype.confirm = function (t, e) {
                    (this.isLoaded = t),
                      this.emitEvent("progress", [this, this.img, e]);
                  }),
                  (c.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                  }),
                  (c.prototype.onload = function () {
                    this.confirm(!0, "onload"), this.unbindEvents();
                  }),
                  (c.prototype.onerror = function () {
                    this.confirm(!1, "onerror"), this.unbindEvents();
                  }),
                  (c.prototype.unbindEvents = function () {
                    this.proxyImage.removeEventListener("load", this),
                      this.proxyImage.removeEventListener("error", this),
                      this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (l.prototype = Object.create(c.prototype)),
                  (l.prototype.check = function () {
                    this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      (this.img.src = this.url),
                      this.getIsImageComplete() &&
                        (this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        ),
                        this.unbindEvents());
                  }),
                  (l.prototype.unbindEvents = function () {
                    this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (l.prototype.confirm = function (t, e) {
                    (this.isLoaded = t),
                      this.emitEvent("progress", [this, this.element, e]);
                  }),
                  (a.makeJQueryPlugin = function (e) {
                    (e = e || t.jQuery) &&
                      ((r = e).fn.imagesLoaded = function (t, e) {
                        return new a(this, t, e).jqDeferred.promise(r(this));
                      });
                  }),
                  a.makeJQueryPlugin(),
                  a
                );
              })(s, t);
            }.apply(e, n)),
            void 0 === i || (t.exports = i);
        })("undefined" != typeof window ? window : this);
      },
      138: function (t) {
        t.exports = (function (t) {
          function e(n) {
            if (r[n]) return r[n].exports;
            var i = (r[n] = { exports: {}, id: n, loaded: !1 });
            return (
              t[n].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports
            );
          }
          var r = {};
          return (e.m = t), (e.c = r), (e.p = ""), e(0);
        })([
          function (t, e, r) {
            "use strict";
            function n(t) {
              return t && t.__esModule ? t : { default: t };
            }
            var i = n(r(2));
            t.exports = i.default;
          },
          function (t, e) {
            function r(t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e);
            }
            t.exports = r;
          },
          function (t, e, r) {
            "use strict";
            function n(t) {
              return t && t.__esModule ? t : { default: t };
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(r(9)),
              s = n(r(3)),
              o = r(4),
              a = function () {
                if ("undefined" != typeof window) {
                  var t = 100,
                    e = ["scroll", "resize", "load"],
                    r = { history: [] },
                    n = { offset: {}, threshold: 0, test: o.inViewport },
                    a = (0, i.default)(function () {
                      r.history.forEach(function (t) {
                        r[t].check();
                      });
                    }, t);
                  e.forEach(function (t) {
                    return addEventListener(t, a);
                  }),
                    window.MutationObserver &&
                      addEventListener("DOMContentLoaded", function () {
                        new MutationObserver(a).observe(document.body, {
                          attributes: !0,
                          childList: !0,
                          subtree: !0,
                        });
                      });
                  var u = function (t) {
                    if ("string" == typeof t) {
                      var e = [].slice.call(document.querySelectorAll(t));
                      return (
                        r.history.indexOf(t) > -1
                          ? (r[t].elements = e)
                          : ((r[t] = (0, s.default)(e, n)), r.history.push(t)),
                        r[t]
                      );
                    }
                  };
                  return (
                    (u.offset = function (t) {
                      if (void 0 === t) return n.offset;
                      var e = function (t) {
                        return "number" == typeof t;
                      };
                      return (
                        ["top", "right", "bottom", "left"].forEach(
                          e(t)
                            ? function (e) {
                                return (n.offset[e] = t);
                              }
                            : function (r) {
                                return e(t[r]) ? (n.offset[r] = t[r]) : null;
                              }
                        ),
                        n.offset
                      );
                    }),
                    (u.threshold = function (t) {
                      return "number" == typeof t && t >= 0 && t <= 1
                        ? (n.threshold = t)
                        : n.threshold;
                    }),
                    (u.test = function (t) {
                      return "function" == typeof t ? (n.test = t) : n.test;
                    }),
                    (u.is = function (t) {
                      return n.test(t, n);
                    }),
                    u.offset(0),
                    u
                  );
                }
              };
            e.default = a();
          },
          function (t, e) {
            "use strict";
            function r(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = (function () {
                function t(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n);
                  }
                }
                return function (e, r, n) {
                  return r && t(e.prototype, r), n && t(e, n), e;
                };
              })(),
              i = (function () {
                function t(e, n) {
                  r(this, t),
                    (this.options = n),
                    (this.elements = e),
                    (this.current = []),
                    (this.handlers = { enter: [], exit: [] }),
                    (this.singles = { enter: [], exit: [] });
                }
                return (
                  n(t, [
                    {
                      key: "check",
                      value: function () {
                        var t = this;
                        return (
                          this.elements.forEach(function (e) {
                            var r = t.options.test(e, t.options),
                              n = t.current.indexOf(e),
                              i = n > -1,
                              s = !r && i;
                            r && !i && (t.current.push(e), t.emit("enter", e)),
                              s && (t.current.splice(n, 1), t.emit("exit", e));
                          }),
                          this
                        );
                      },
                    },
                    {
                      key: "on",
                      value: function (t, e) {
                        return this.handlers[t].push(e), this;
                      },
                    },
                    {
                      key: "once",
                      value: function (t, e) {
                        return this.singles[t].unshift(e), this;
                      },
                    },
                    {
                      key: "emit",
                      value: function (t, e) {
                        for (; this.singles[t].length; )
                          this.singles[t].pop()(e);
                        for (var r = this.handlers[t].length; --r > -1; )
                          this.handlers[t][r](e);
                        return this;
                      },
                    },
                  ]),
                  t
                );
              })();
            e.default = function (t, e) {
              return new i(t, e);
            };
          },
          function (t, e) {
            "use strict";
            function r(t, e) {
              var r = t.getBoundingClientRect(),
                n = r.top,
                i = r.right,
                s = r.bottom,
                o = r.left,
                a = r.width,
                u = r.height,
                c = {
                  t: s,
                  r: window.innerWidth - o,
                  b: window.innerHeight - n,
                  l: i,
                },
                l = { x: e.threshold * a, y: e.threshold * u };
              return (
                c.t > e.offset.top + l.y &&
                c.r > e.offset.right + l.x &&
                c.b > e.offset.bottom + l.y &&
                c.l > e.offset.left + l.x
              );
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.inViewport = r);
          },
          function (t, e) {
            (function (e) {
              var r = "object" == typeof e && e && e.Object === Object && e;
              t.exports = r;
            }).call(
              e,
              (function () {
                return this;
              })()
            );
          },
          function (t, e, r) {
            var n = r(5),
              i =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              s = n || i || Function("return this")();
            t.exports = s;
          },
          function (t, e, r) {
            function n(t, e, r) {
              function n(e) {
                var r = _,
                  n = y;
                return (_ = y = void 0), (S = e), (w = t.apply(n, r));
              }
              function l(t) {
                return (S = t), (x = setTimeout(d, e)), k ? n(t) : w;
              }
              function h(t) {
                var r = e - (t - T);
                return E ? c(r, b - (t - S)) : r;
              }
              function f(t) {
                var r = t - T;
                return void 0 === T || r >= e || r < 0 || (E && t - S >= b);
              }
              function d() {
                var t = s();
                return f(t) ? p(t) : void (x = setTimeout(d, h(t)));
              }
              function p(t) {
                return (x = void 0), M && _ ? n(t) : ((_ = y = void 0), w);
              }
              function g() {
                void 0 !== x && clearTimeout(x),
                  (S = 0),
                  (_ = T = y = x = void 0);
              }
              function m() {
                return void 0 === x ? w : p(s());
              }
              function v() {
                var t = s(),
                  r = f(t);
                if (((_ = arguments), (y = this), (T = t), r)) {
                  if (void 0 === x) return l(T);
                  if (E) return (x = setTimeout(d, e)), n(T);
                }
                return void 0 === x && (x = setTimeout(d, e)), w;
              }
              var _,
                y,
                b,
                w,
                x,
                T,
                S = 0,
                k = !1,
                E = !1,
                M = !0;
              if ("function" != typeof t) throw new TypeError(a);
              return (
                (e = o(e) || 0),
                i(r) &&
                  ((k = !!r.leading),
                  (b = (E = "maxWait" in r) ? u(o(r.maxWait) || 0, e) : b),
                  (M = "trailing" in r ? !!r.trailing : M)),
                (v.cancel = g),
                (v.flush = m),
                v
              );
            }
            var i = r(1),
              s = r(8),
              o = r(10),
              a = "Expected a function",
              u = Math.max,
              c = Math.min;
            t.exports = n;
          },
          function (t, e, r) {
            var n = r(6),
              i = function () {
                return n.Date.now();
              };
            t.exports = i;
          },
          function (t, e, r) {
            function n(t, e, r) {
              var n = !0,
                a = !0;
              if ("function" != typeof t) throw new TypeError(o);
              return (
                s(r) &&
                  ((n = "leading" in r ? !!r.leading : n),
                  (a = "trailing" in r ? !!r.trailing : a)),
                i(t, e, { leading: n, maxWait: e, trailing: a })
              );
            }
            var i = r(7),
              s = r(1),
              o = "Expected a function";
            t.exports = n;
          },
          function (t, e) {
            function r(t) {
              return t;
            }
            t.exports = r;
          },
        ]);
      },
    },
    e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var s = (e[n] = { exports: {} });
    return t[n].call(s.exports, s, s.exports, r), s.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      var t = r(138),
        e = r.n(t),
        n = r(70),
        i = r.n(n);
      function s(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function o(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var a,
        u,
        c,
        l,
        h,
        f,
        d,
        p,
        g,
        m,
        v,
        _,
        y,
        b,
        w,
        x = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        T = { duration: 0.5, overwrite: !1, delay: 0 },
        S = 1e8,
        k = 1e-8,
        E = 2 * Math.PI,
        M = E / 4,
        O = 0,
        C = Math.sqrt,
        P = Math.cos,
        A = Math.sin,
        j = function (t) {
          return "string" == typeof t;
        },
        D = function (t) {
          return "function" == typeof t;
        },
        L = function (t) {
          return "number" == typeof t;
        },
        I = function (t) {
          return void 0 === t;
        },
        R = function (t) {
          return "object" == typeof t;
        },
        z = function (t) {
          return !1 !== t;
        },
        B = function () {
          return "undefined" != typeof window;
        },
        q = function (t) {
          return D(t) || j(t);
        },
        F =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        Y = Array.isArray,
        W = /(?:-?\.?\d|\.)+/gi,
        X = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        N = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        H = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        U = /[+-]=-?[.\d]+/,
        V = /[^,'"\[\]\s]+/gi,
        G = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        $ = {},
        Q = {},
        Z = function (t) {
          return (Q = Et(t, $)) && Er;
        },
        K = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        J = function (t, e) {
          return !e && console.warn(t);
        },
        tt = function (t, e) {
          return (t && ($[t] = e) && Q && (Q[t] = e)) || $;
        },
        et = function () {
          return 0;
        },
        rt = { suppressEvents: !0, isStart: !0, kill: !1 },
        nt = { suppressEvents: !0, kill: !1 },
        it = { suppressEvents: !0 },
        st = {},
        ot = [],
        at = {},
        ut = {},
        ct = {},
        lt = 30,
        ht = [],
        ft = "",
        dt = function (t) {
          var e,
            r,
            n = t[0];
          if ((R(n) || D(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (r = ht.length; r-- && !ht[r].targetTest(n); );
            e = ht[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new Ye(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        pt = function (t) {
          return t._gsap || dt(se(t))[0]._gsap;
        },
        gt = function (t, e, r) {
          return (r = t[e]) && D(r)
            ? t[e]()
            : (I(r) && t.getAttribute && t.getAttribute(e)) || r;
        },
        mt = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        vt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        _t = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        yt = function (t, e) {
          var r = e.charAt(0),
            n = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
          );
        },
        bt = function (t, e) {
          for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
          return n < r;
        },
        wt = function () {
          var t,
            e,
            r = ot.length,
            n = ot.slice(0);
          for (at = {}, ot.length = 0, t = 0; t < r; t++)
            (e = n[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        xt = function (t, e, r, n) {
          ot.length && wt(),
            t.render(e, r, n || (u && e < 0 && (t._initted || t._startAt))),
            ot.length && wt();
        },
        Tt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(V).length < 2
            ? e
            : j(t)
            ? t.trim()
            : t;
        },
        St = function (t) {
          return t;
        },
        kt = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        Et = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        Mt = function t(e, r) {
          for (var n in r)
            "__proto__" !== n &&
              "constructor" !== n &&
              "prototype" !== n &&
              (e[n] = R(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
          return e;
        },
        Ot = function (t, e) {
          var r,
            n = {};
          for (r in t) r in e || (n[r] = t[r]);
          return n;
        },
        Ct = function (t) {
          var e,
            r = t.parent || l,
            n = t.keyframes
              ? ((e = Y(t.keyframes)),
                function (t, r) {
                  for (var n in r)
                    n in t ||
                      ("duration" === n && e) ||
                      "ease" === n ||
                      (t[n] = r[n]);
                })
              : kt;
          if (z(t.inherit))
            for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
          return t;
        },
        Pt = function (t, e, r, n, i) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var s,
            o = t[n];
          if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev;
          return (
            o
              ? ((e._next = o._next), (o._next = e))
              : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[n] = e),
            (e._prev = o),
            (e.parent = e._dp = t),
            e
          );
        },
        At = function (t, e, r, n) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var i = e._prev,
            s = e._next;
          i ? (i._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = i) : t[n] === e && (t[n] = i),
            (e._next = e._prev = e.parent = null);
        },
        jt = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            (t._act = 0);
        },
        Dt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
          return t;
        },
        Lt = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        It = function (t, e, r, n) {
          return (
            t._startAt &&
            (u
              ? t._startAt.revert(nt)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, n))
          );
        },
        Rt = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        zt = function (t) {
          return t._repeat
            ? Bt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        Bt = function (t, e) {
          var r = Math.floor((t /= e));
          return t && r === t ? r - 1 : r;
        },
        qt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        Ft = function (t) {
          return (t._end = _t(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || k) || 0)
          ));
        },
        Yt = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = _t(
                r._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              Ft(t),
              r._dirty || Dt(r, t)),
            t
          );
        },
        Wt = function (t, e) {
          var r;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((r = qt(t.rawTime(), e)),
              (!e._dur || te(0, e.totalDuration(), r) - e._tTime > k) &&
                e.render(r, !0)),
            Dt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -1e-8;
          }
        },
        Xt = function (t, e, r, n) {
          return (
            e.parent && jt(e),
            (e._start = _t(
              (L(r) ? r : r || t !== l ? Zt(t, r, e) : t._time) + e._delay
            )),
            (e._end = _t(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            Pt(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Vt(e) || (t._recent = e),
            n || Wt(t, e),
            t._ts < 0 && Yt(t, t._tTime),
            t
          );
        },
        Nt = function (t, e) {
          return (
            ($.ScrollTrigger || K("scrollTrigger", e)) &&
            $.ScrollTrigger.create(e, t)
          );
        },
        Ht = function (t, e, r, n, i) {
          return (
            $e(t, e, i),
            t._initted
              ? !r &&
                t._pt &&
                !u &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                g !== Oe.frame
                ? (ot.push(t), (t._lazy = [i, n]), 1)
                : void 0
              : 1
          );
        },
        Ut = function t(e) {
          var r = e.parent;
          return (
            r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
          );
        },
        Vt = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        Gt = function (t, e, r, n) {
          var i = t._repeat,
            s = _t(e) || 0,
            o = t._tTime / t._tDur;
          return (
            o && !n && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : _t(s * (i + 1) + t._rDelay * i)
              : s),
            o > 0 && !n && Yt(t, (t._tTime = t._tDur * o)),
            t.parent && Ft(t),
            r || Dt(t.parent, t),
            t
          );
        },
        $t = function (t) {
          return t instanceof Xe ? Dt(t) : Gt(t, t._dur);
        },
        Qt = { _start: 0, endTime: et, totalDuration: et },
        Zt = function t(e, r, n) {
          var i,
            s,
            o,
            a = e.labels,
            u = e._recent || Qt,
            c = e.duration() >= S ? u.endTime(!1) : e._dur;
          return j(r) && (isNaN(r) || r in a)
            ? ((s = r.charAt(0)),
              (o = "%" === r.substr(-1)),
              (i = r.indexOf("=")),
              "<" === s || ">" === s
                ? (i >= 0 && (r = r.replace(/=/, "")),
                  ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(r.substr(1)) || 0) *
                      (o ? (i < 0 ? u : n).totalDuration() / 100 : 1))
                : i < 0
                ? (r in a || (a[r] = c), a[r])
                : ((s = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                  o && n && (s = (s / 100) * (Y(n) ? n[0] : n).totalDuration()),
                  i > 1 ? t(e, r.substr(0, i - 1), n) + s : c + s))
            : null == r
            ? c
            : +r;
        },
        Kt = function (t, e, r) {
          var n,
            i,
            s = L(e[1]),
            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o];
          if ((s && (a.duration = e[1]), (a.parent = r), t)) {
            for (n = a, i = r; i && !("immediateRender" in n); )
              (n = i.vars.defaults || {}), (i = z(i.vars.inherit) && i.parent);
            (a.immediateRender = z(n.immediateRender)),
              t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
          }
          return new tr(e[0], a, e[o + 1]);
        },
        Jt = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        te = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        ee = function (t, e) {
          return j(t) && (e = G.exec(t)) ? e[1] : "";
        },
        re = [].slice,
        ne = function (t, e) {
          return (
            t &&
            R(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && R(t[0]))) &&
            !t.nodeType &&
            t !== h
          );
        },
        ie = function (t, e, r) {
          return (
            void 0 === r && (r = []),
            t.forEach(function (t) {
              var n;
              return (j(t) && !e) || ne(t, 1)
                ? (n = r).push.apply(n, se(t))
                : r.push(t);
            }) || r
          );
        },
        se = function (t, e, r) {
          return c && !e && c.selector
            ? c.selector(t)
            : !j(t) || r || (!f && Ce())
            ? Y(t)
              ? ie(t, r)
              : ne(t)
              ? re.call(t, 0)
              : t
              ? [t]
              : []
            : re.call((e || d).querySelectorAll(t), 0);
        },
        oe = function (t) {
          return (
            (t = se(t)[0] || J("Invalid scope") || {}),
            function (e) {
              var r = t.current || t.nativeElement || t;
              return se(
                e,
                r.querySelectorAll
                  ? r
                  : r === t
                  ? J("Invalid scope") || d.createElement("div")
                  : t
              );
            }
          );
        },
        ae = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        ue = function (t) {
          if (D(t)) return t;
          var e = R(t) ? t : { each: t },
            r = Re(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            s = {},
            o = n > 0 && n < 1,
            a = isNaN(n) || o,
            u = e.axis,
            c = n,
            l = n;
          return (
            j(n)
              ? (c = l = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
              : !o && a && ((c = n[0]), (l = n[1])),
            function (t, o, h) {
              var f,
                d,
                p,
                g,
                m,
                v,
                _,
                y,
                b,
                w = (h || e).length,
                x = s[w];
              if (!x) {
                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, S])[1])) {
                  for (
                    _ = -S;
                    _ < (_ = h[b++].getBoundingClientRect().left) && b < w;

                  );
                  b--;
                }
                for (
                  x = s[w] = [],
                    f = a ? Math.min(b, w) * c - 0.5 : n % b,
                    d = b === S ? 0 : a ? (w * l) / b - 0.5 : (n / b) | 0,
                    _ = 0,
                    y = S,
                    v = 0;
                  v < w;
                  v++
                )
                  (p = (v % b) - f),
                    (g = d - ((v / b) | 0)),
                    (x[v] = m =
                      u ? Math.abs("y" === u ? g : p) : C(p * p + g * g)),
                    m > _ && (_ = m),
                    m < y && (y = m);
                "random" === n && ae(x),
                  (x.max = _ - y),
                  (x.min = y),
                  (x.v = w =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (b > w
                          ? w - 1
                          : u
                          ? "y" === u
                            ? w / b
                            : b
                          : Math.max(b, w / b)) ||
                      0) * ("edges" === n ? -1 : 1)),
                  (x.b = w < 0 ? i - w : i),
                  (x.u = ee(e.amount || e.each) || 0),
                  (r = r && w < 0 ? Le(r) : r);
              }
              return (
                (w = (x[t] - x.min) / x.max || 0),
                _t(x.b + (r ? r(w) : w) * x.v) + x.u
              );
            }
          );
        },
        ce = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (r) {
            var n = _t(Math.round(parseFloat(r) / t) * t * e);
            return (n - (n % 1)) / e + (L(r) ? 0 : ee(r));
          };
        },
        le = function (t, e) {
          var r,
            n,
            i = Y(t);
          return (
            !i &&
              R(t) &&
              ((r = i = t.radius || S),
              t.values
                ? ((t = se(t.values)), (n = !L(t[0])) && (r *= r))
                : (t = ce(t.increment))),
            Jt(
              e,
              i
                ? D(t)
                  ? function (e) {
                      return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          s,
                          o = parseFloat(n ? e.x : e),
                          a = parseFloat(n ? e.y : 0),
                          u = S,
                          c = 0,
                          l = t.length;
                        l--;

                      )
                        (i = n
                          ? (i = t[l].x - o) * i + (s = t[l].y - a) * s
                          : Math.abs(t[l] - o)) < u && ((u = i), (c = l));
                      return (
                        (c = !r || u <= r ? t[c] : e),
                        n || c === e || L(e) ? c : c + ee(e)
                      );
                    }
                : ce(t)
            )
          );
        },
        he = function (t, e, r, n) {
          return Jt(Y(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
            return Y(t)
              ? t[~~(Math.random() * t.length)]
              : (r = r || 1e-5) &&
                  (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                    ) *
                      r *
                      n
                  ) / n;
          });
        },
        fe = function (t, e, r) {
          return Jt(r, function (r) {
            return t[~~e(r)];
          });
        },
        de = function (t) {
          for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
            (n = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, n - e - 7).match(i ? V : W)),
              (o +=
                t.substr(s, e - s) +
                he(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
              (s = n + 1);
          return o + t.substr(s, t.length - s);
        },
        pe = function (t, e, r, n, i) {
          var s = e - t,
            o = n - r;
          return Jt(i, function (e) {
            return r + (((e - t) / s) * o || 0);
          });
        },
        ge = function (t, e, r) {
          var n,
            i,
            s,
            o = t.labels,
            a = S;
          for (n in o)
            (i = o[n] - e) < 0 == !!r &&
              i &&
              a > (i = Math.abs(i)) &&
              ((s = n), (a = i));
          return s;
        },
        me = function (t, e, r) {
          var n,
            i,
            s,
            o = t.vars,
            a = o[e],
            u = c,
            l = t._ctx;
          if (a)
            return (
              (n = o[e + "Params"]),
              (i = o.callbackScope || t),
              r && ot.length && wt(),
              l && (c = l),
              (s = n ? a.apply(i, n) : a.call(i)),
              (c = u),
              s
            );
        },
        ve = function (t) {
          return (
            jt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!u),
            t.progress() < 1 && me(t, "onInterrupt"),
            t
          );
        },
        _e = function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = D(t),
            n =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            i = {
              init: et,
              render: cr,
              add: Ve,
              kill: hr,
              modifier: lr,
              rawVars: 0,
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: sr,
              aliases: {},
              register: 0,
            };
          if ((Ce(), t !== n)) {
            if (ut[e]) return;
            kt(n, kt(Ot(t, i), s)),
              Et(n.prototype, Et(i, Ot(t, s))),
              (ut[(n.prop = e)] = n),
              t.targetTest && (ht.push(n), (st[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          tt(e, n), t.register && t.register(Er, n, pr);
        },
        ye = 255,
        be = {
          aqua: [0, ye, ye],
          lime: [0, ye, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ye],
          navy: [0, 0, 128],
          white: [ye, ye, ye],
          olive: [128, 128, 0],
          yellow: [ye, ye, 0],
          orange: [ye, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ye, 0, 0],
          pink: [ye, 192, 203],
          cyan: [0, ye, ye],
          transparent: [ye, ye, ye, 0],
        },
        we = function (t, e, r) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) *
              ye +
              0.5) |
            0
          );
        },
        xe = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            u,
            c,
            l,
            h,
            f,
            d = t ? (L(t) ? [t >> 16, (t >> 8) & ye, t & ye] : 0) : be.black;
          if (!d) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), be[t])
            )
              d = be[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((n = t.charAt(1)),
                  (i = t.charAt(2)),
                  (s = t.charAt(3)),
                  (t =
                    "#" +
                    n +
                    n +
                    i +
                    i +
                    s +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (d = parseInt(t.substr(1, 6), 16)) >> 16,
                  (d >> 8) & ye,
                  d & ye,
                  parseInt(t.substr(7), 16) / 255,
                ];
              d = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & ye,
                t & ye,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((d = f = t.match(W)), e)) {
                if (~t.indexOf("="))
                  return (d = t.match(X)), r && d.length < 4 && (d[3] = 1), d;
              } else
                (o = (+d[0] % 360) / 360),
                  (a = +d[1] / 100),
                  (n =
                    2 * (u = +d[2] / 100) -
                    (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                  d.length > 3 && (d[3] *= 1),
                  (d[0] = we(o + 1 / 3, n, i)),
                  (d[1] = we(o, n, i)),
                  (d[2] = we(o - 1 / 3, n, i));
            else d = t.match(W) || be.transparent;
            d = d.map(Number);
          }
          return (
            e &&
              !f &&
              ((n = d[0] / ye),
              (i = d[1] / ye),
              (s = d[2] / ye),
              (u = ((c = Math.max(n, i, s)) + (l = Math.min(n, i, s))) / 2),
              c === l
                ? (o = a = 0)
                : ((h = c - l),
                  (a = u > 0.5 ? h / (2 - c - l) : h / (c + l)),
                  (o =
                    c === n
                      ? (i - s) / h + (i < s ? 6 : 0)
                      : c === i
                      ? (s - n) / h + 2
                      : (n - i) / h + 4),
                  (o *= 60)),
              (d[0] = ~~(o + 0.5)),
              (d[1] = ~~(100 * a + 0.5)),
              (d[2] = ~~(100 * u + 0.5))),
            r && d.length < 4 && (d[3] = 1),
            d
          );
        },
        Te = function (t) {
          var e = [],
            r = [],
            n = -1;
          return (
            t.split(ke).forEach(function (t) {
              var i = t.match(N) || [];
              e.push.apply(e, i), r.push((n += i.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        Se = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a = "",
            u = (t + a).match(ke),
            c = e ? "hsla(" : "rgba(",
            l = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = xe(t, e, 1)) &&
                c +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((s = Te(t)), (n = r.c).join(a) !== s.c.join(a)))
          )
            for (o = (i = t.replace(ke, "1").split(N)).length - 1; l < o; l++)
              a +=
                i[l] +
                (~n.indexOf(l)
                  ? u.shift() || c + "0,0,0,0)"
                  : (s.length ? s : u.length ? u : r).shift());
          if (!i)
            for (o = (i = t.split(ke)).length - 1; l < o; l++) a += i[l] + u[l];
          return a + i[o];
        },
        ke = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in be) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        Ee = /hsl[a]?\(/,
        Me = function (t) {
          var e,
            r = t.join(" ");
          if (((ke.lastIndex = 0), ke.test(r)))
            return (
              (e = Ee.test(r)),
              (t[1] = Se(t[1], e)),
              (t[0] = Se(t[0], e, Te(t[1]))),
              !0
            );
        },
        Oe = (function () {
          var t,
            e,
            r,
            n,
            i,
            s,
            o = Date.now,
            a = 500,
            u = 33,
            c = o(),
            l = c,
            g = 1e3 / 240,
            m = g,
            _ = [],
            y = function r(h) {
              var f,
                d,
                p,
                v,
                y = o() - l,
                b = !0 === h;
              if (
                (y > a && (c += y - u),
                ((f = (p = (l += y) - c) - m) > 0 || b) &&
                  ((v = ++n.frame),
                  (i = p - 1e3 * n.time),
                  (n.time = p /= 1e3),
                  (m += f + (f >= g ? 4 : g - f)),
                  (d = 1)),
                b || (t = e(r)),
                d)
              )
                for (s = 0; s < _.length; s++) _[s](p, i, v, h);
            };
          return (n = {
            time: 0,
            frame: 0,
            tick: function () {
              y(!0);
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60));
            },
            wake: function () {
              p &&
                (!f &&
                  B() &&
                  ((h = f = window),
                  (d = h.document || {}),
                  ($.gsap = Er),
                  (h.gsapVersions || (h.gsapVersions = [])).push(Er.version),
                  Z(Q || h.GreenSockGlobals || (!h.gsap && h) || {}),
                  (r = h.requestAnimationFrame)),
                t && n.sleep(),
                (e =
                  r ||
                  function (t) {
                    return setTimeout(t, (m - 1e3 * n.time + 1) | 0);
                  }),
                (v = 1),
                y(2));
            },
            sleep: function () {
              (r ? h.cancelAnimationFrame : clearTimeout)(t), (v = 0), (e = et);
            },
            lagSmoothing: function (t, e) {
              (a = t || 1e8), (u = Math.min(e, a, 0));
            },
            fps: function (t) {
              (g = 1e3 / (t || 240)), (m = 1e3 * n.time + g);
            },
            add: function (t, e, r) {
              var i = e
                ? function (e, r, s, o) {
                    t(e, r, s, o), n.remove(i);
                  }
                : t;
              return n.remove(t), _[r ? "unshift" : "push"](i), Ce(), i;
            },
            remove: function (t, e) {
              ~(e = _.indexOf(t)) && _.splice(e, 1) && s >= e && s--;
            },
            _listeners: _,
          });
        })(),
        Ce = function () {
          return !v && Oe.wake();
        },
        Pe = {},
        Ae = /^[\d.\-M][\d.\-,\s]/,
        je = /["']/g,
        De = function (t) {
          for (
            var e,
              r,
              n,
              i = {},
              s = t.substr(1, t.length - 3).split(":"),
              o = s[0],
              a = 1,
              u = s.length;
            a < u;
            a++
          )
            (r = s[a]),
              (e = a !== u - 1 ? r.lastIndexOf(",") : r.length),
              (n = r.substr(0, e)),
              (i[o] = isNaN(n) ? n.replace(je, "").trim() : +n),
              (o = r.substr(e + 1).trim());
          return i;
        },
        Le = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Ie = function t(e, r) {
          for (var n, i = e._first; i; )
            i instanceof Xe
              ? t(i, r)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === r ||
                (i.timeline
                  ? t(i.timeline, r)
                  : ((n = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = n),
                    (i._yoyo = r))),
              (i = i._next);
        },
        Re = function (t, e) {
          return (
            (t &&
              (D(t)
                ? t
                : Pe[t] ||
                  (function (t) {
                    var e,
                      r,
                      n,
                      i,
                      s = (t + "").split("("),
                      o = Pe[s[0]];
                    return o && s.length > 1 && o.config
                      ? o.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [De(s[1])]
                            : ((e = t),
                              (r = e.indexOf("(") + 1),
                              (n = e.indexOf(")")),
                              (i = e.indexOf("(", r)),
                              e.substring(
                                r,
                                ~i && i < n ? e.indexOf(")", n + 1) : n
                              ))
                                .split(",")
                                .map(Tt)
                        )
                      : Pe._CE && Ae.test(t)
                      ? Pe._CE("", t)
                      : o;
                  })(t))) ||
            e
          );
        },
        ze = function (t, e, r, n) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === n &&
              (n = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var i,
            s = { easeIn: e, easeOut: r, easeInOut: n };
          return (
            mt(t, function (t) {
              for (var e in ((Pe[t] = $[t] = s),
              (Pe[(i = t.toLowerCase())] = r),
              s))
                Pe[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = Pe[t + "." + e] = s[e];
            }),
            s
          );
        },
        Be = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        qe = function t(e, r, n) {
          var i = r >= 1 ? r : 1,
            s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            o = (s / E) * (Math.asin(1 / i) || 0),
            a = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * A((t - o) * s) + 1;
            },
            u =
              "out" === e
                ? a
                : "in" === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : Be(a);
          return (
            (s = E / s),
            (u.config = function (r, n) {
              return t(e, r, n);
            }),
            u
          );
        },
        Fe = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var n = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            i =
              "out" === e
                ? n
                : "in" === e
                ? function (t) {
                    return 1 - n(1 - t);
                  }
                : Be(n);
          return (
            (i.config = function (r) {
              return t(e, r);
            }),
            i
          );
        };
      mt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        ze(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow(2 * (1 - t), r) / 2;
          }
        );
      }),
        (Pe.Linear.easeNone = Pe.none = Pe.Linear.easeIn),
        ze("Elastic", qe("in"), qe("out"), qe()),
        (_ = 7.5625),
        (b = 1 / (y = 2.75)),
        ze(
          "Bounce",
          function (t) {
            return 1 - w(1 - t);
          },
          (w = function (t) {
            return t < b
              ? _ * t * t
              : t < 0.7272727272727273
              ? _ * Math.pow(t - 1.5 / y, 2) + 0.75
              : t < 0.9090909090909092
              ? _ * (t -= 2.25 / y) * t + 0.9375
              : _ * Math.pow(t - 2.625 / y, 2) + 0.984375;
          })
        ),
        ze("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        ze("Circ", function (t) {
          return -(C(1 - t * t) - 1);
        }),
        ze("Sine", function (t) {
          return 1 === t ? 1 : 1 - P(t * M);
        }),
        ze("Back", Fe("in"), Fe("out"), Fe()),
        (Pe.SteppedEase =
          Pe.steps =
          $.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  n = t + (e ? 0 : 1),
                  i = e ? 1 : 0;
                return function (t) {
                  return (((n * te(0, 0.99999999, t)) | 0) + i) * r;
                };
              },
            }),
        (T.ease = Pe["quad.out"]),
        mt(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (ft += t + "," + t + "Params,");
          }
        );
      var Ye = function (t, e) {
          (this.id = O++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : gt),
            (this.set = e ? e.getSetter : sr);
        },
        We = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Gt(this, +t.duration, 1, 1),
              (this.data = t.data),
              c && ((this._ctx = c), c.data.push(this)),
              v || Oe.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Gt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((Ce(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (
                  Yt(this, t), !r._dp || r.parent || Wt(r, this);
                  r && r.parent;

                )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Xt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === k) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), xt(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + zt(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      zt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? Bt(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? qt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(te(-this._delay, this._tDur, e), !0),
                Ft(this),
                Lt(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Ce(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== k &&
                            (this._tTime -= k)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Xt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (z(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? qt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = it);
              var e = u;
              return (
                (u = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (u = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (e._ts || 1)), (e = e._dp);
              return !this.parent && this.vars.immediateRender ? -1 : r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), $t(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), $t(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Zt(this, t), z(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, z(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - k
                )
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var n = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((n[t] = e),
                      r && (n[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete n[t],
                  this)
                : n[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var n = D(t) ? t : St,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      D(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                      r(n),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              ve(this);
            }),
            t
          );
        })();
      kt(We.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Xe = (function (t) {
        function e(e, r) {
          var n;
          return (
            void 0 === e && (e = {}),
            ((n = t.call(this, e) || this).labels = {}),
            (n.smoothChildTiming = !!e.smoothChildTiming),
            (n.autoRemoveChildren = !!e.autoRemoveChildren),
            (n._sort = z(e.sortChildren)),
            l && Xt(e.parent || l, s(n), r),
            e.reversed && n.reverse(),
            e.paused && n.paused(!0),
            e.scrollTrigger && Nt(s(n), e.scrollTrigger),
            n
          );
        }
        o(e, t);
        var r = e.prototype;
        return (
          (r.to = function (t, e, r) {
            return Kt(0, arguments, this), this;
          }),
          (r.from = function (t, e, r) {
            return Kt(1, arguments, this), this;
          }),
          (r.fromTo = function (t, e, r, n) {
            return Kt(2, arguments, this), this;
          }),
          (r.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              Ct(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new tr(t, e, Zt(this, r), 1),
              this
            );
          }),
          (r.call = function (t, e, r) {
            return Xt(this, tr.delayedCall(0, t, e), r);
          }),
          (r.staggerTo = function (t, e, r, n, i, s, o) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || n),
              (r.onComplete = s),
              (r.onCompleteParams = o),
              (r.parent = this),
              new tr(t, r, Zt(this, i)),
              this
            );
          }),
          (r.staggerFrom = function (t, e, r, n, i, s, o) {
            return (
              (r.runBackwards = 1),
              (Ct(r).immediateRender = z(r.immediateRender)),
              this.staggerTo(t, e, r, n, i, s, o)
            );
          }),
          (r.staggerFromTo = function (t, e, r, n, i, s, o, a) {
            return (
              (n.startAt = r),
              (Ct(n).immediateRender = z(n.immediateRender)),
              this.staggerTo(t, e, n, i, s, o, a)
            );
          }),
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              o,
              a,
              c,
              h,
              f,
              d,
              p,
              g,
              m,
              v = this._time,
              _ = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              b = t <= 0 ? 0 : _t(t),
              w = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (
              (this !== l && b > _ && t >= 0 && (b = _),
              b !== this._tTime || r || w)
            ) {
              if (
                (v !== this._time &&
                  y &&
                  ((b += this._time - v), (t += this._time - v)),
                (n = b),
                (d = this._start),
                (c = !(f = this._ts)),
                w && (y || (v = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((g = this._yoyo),
                  (a = y + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * a + t, e, r);
                if (
                  ((n = _t(b % a)),
                  b === _
                    ? ((o = this._repeat), (n = y))
                    : ((o = ~~(b / a)) && o === b / a && ((n = y), o--),
                      n > y && (n = y)),
                  (p = Bt(this._tTime, a)),
                  !v && this._tTime && p !== o && (p = o),
                  g && 1 & o && ((n = y - n), (m = 1)),
                  o !== p && !this._lock)
                ) {
                  var x = g && 1 & p,
                    T = x === (g && 1 & o);
                  if (
                    (o < p && (x = !x),
                    (v = x ? 0 : y),
                    (this._lock = 1),
                    (this.render(v || (m ? 0 : _t(o * a)), e, !y)._lock = 0),
                    (this._tTime = b),
                    !e && this.parent && me(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !m &&
                      (this.invalidate()._lock = 1),
                    (v && v !== this._time) ||
                      c !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((y = this._dur),
                    (_ = this._tDur),
                    T &&
                      ((this._lock = 2),
                      (v = x ? y : -1e-4),
                      this.render(v, !0),
                      this.vars.repeatRefresh && !m && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !c)
                  )
                    return this;
                  Ie(this, m);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((h = (function (t, e, r) {
                    var n;
                    if (r > e)
                      for (n = t._first; n && n._start <= r; ) {
                        if ("isPause" === n.data && n._start > e) return n;
                        n = n._next;
                      }
                    else
                      for (n = t._last; n && n._start >= r; ) {
                        if ("isPause" === n.data && n._start < e) return n;
                        n = n._prev;
                      }
                  })(this, _t(v), _t(n))),
                  h && (b -= n - (n = h._start))),
                (this._tTime = b),
                (this._time = n),
                (this._act = !f),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (v = 0)),
                !v && n && !e && (me(this, "onStart"), this._tTime !== b))
              )
                return this;
              if (n >= v && t >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((s = i._next),
                    (i._act || n >= i._start) && i._ts && h !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (n - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (n - i._start) * i._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !c))
                    ) {
                      (h = 0), s && (b += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = s;
                }
              else {
                i = this._last;
                for (var S = t < 0 ? t : n; i; ) {
                  if (
                    ((s = i._prev), (i._act || S <= i._end) && i._ts && h !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (S - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (S - i._start) * i._ts,
                        e,
                        r || (u && (i._initted || i._startAt))
                      ),
                      n !== this._time || (!this._ts && !c))
                    ) {
                      (h = 0), s && (b += this._zTime = S ? -1e-8 : k);
                      break;
                    }
                  }
                  i = s;
                }
              }
              if (
                h &&
                !e &&
                (this.pause(),
                (h.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1),
                this._ts)
              )
                return (this._start = d), Ft(this), this.render(t, e, r);
              this._onUpdate && !e && me(this, "onUpdate", !0),
                ((b === _ && this._tTime >= this.totalDuration()) ||
                  (!b && v)) &&
                  ((d !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !y) &&
                      ((b === _ && this._ts > 0) || (!b && this._ts < 0)) &&
                      jt(this, 1),
                    e ||
                      (t < 0 && !v) ||
                      (!b && !v && _) ||
                      (me(
                        this,
                        b === _ && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(b < _ && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (r.add = function (t, e) {
            var r = this;
            if ((L(e) || (e = Zt(this, e, t)), !(t instanceof We))) {
              if (Y(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  this
                );
              if (j(t)) return this.addLabel(t, e);
              if (!D(t)) return this;
              t = tr.delayedCall(0, t);
            }
            return this !== t ? Xt(this, t, e) : this;
          }),
          (r.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === n && (n = -S);
            for (var i = [], s = this._first; s; )
              s._start >= n &&
                (s instanceof tr
                  ? e && i.push(s)
                  : (r && i.push(s),
                    t && i.push.apply(i, s.getChildren(!0, e, r)))),
                (s = s._next);
            return i;
          }),
          (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (r.remove = function (t) {
            return j(t)
              ? this.removeLabel(t)
              : D(t)
              ? this.killTweensOf(t)
              : (At(this, t),
                t === this._recent && (this._recent = this._last),
                Dt(this));
          }),
          (r.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = _t(
                    Oe.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (r.addLabel = function (t, e) {
            return (this.labels[t] = Zt(this, e)), this;
          }),
          (r.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (r.addPause = function (t, e, r) {
            var n = tr.delayedCall(0, e || et, r);
            return (
              (n.data = "isPause"),
              (this._hasPause = 1),
              Xt(this, n, Zt(this, t))
            );
          }),
          (r.removePause = function (t) {
            var e = this._first;
            for (t = Zt(this, t); e; )
              e._start === t && "isPause" === e.data && jt(e), (e = e._next);
          }),
          (r.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
              Ne !== n[i] && n[i].kill(t, e);
            return this;
          }),
          (r.getTweensOf = function (t, e) {
            for (var r, n = [], i = se(t), s = this._first, o = L(e); s; )
              s instanceof tr
                ? bt(s._targets, i) &&
                  (o
                    ? (!Ne || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  n.push(s)
                : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
                (s = s._next);
            return n;
          }),
          (r.tweenTo = function (t, e) {
            e = e || {};
            var r,
              n = this,
              i = Zt(n, t),
              s = e,
              o = s.startAt,
              a = s.onStart,
              u = s.onStartParams,
              c = s.immediateRender,
              l = tr.to(
                n,
                kt(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : n._time)) /
                          n.timeScale()
                      ) ||
                      k,
                    onStart: function () {
                      if ((n.pause(), !r)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (o && "time" in o ? o.time : n._time)) /
                              n.timeScale()
                          );
                        l._dur !== t && Gt(l, t, 0, 1).render(l._time, !0, !0),
                          (r = 1);
                      }
                      a && a.apply(l, u || []);
                    },
                  },
                  e
                )
              );
            return c ? l.render(0) : l;
          }),
          (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, kt({ startAt: { time: Zt(this, t) } }, r));
          }),
          (r.recent = function () {
            return this._recent;
          }),
          (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ge(this, Zt(this, t));
          }),
          (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ge(this, Zt(this, t), 1);
          }),
          (r.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + k);
          }),
          (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, s = this.labels; i; )
              i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (n in s) s[n] >= r && (s[n] += t);
            return Dt(this);
          }),
          (r.invalidate = function (e) {
            var r = this._first;
            for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Dt(this)
            );
          }),
          (r.totalDuration = function (t) {
            var e,
              r,
              n,
              i = 0,
              s = this,
              o = s._last,
              a = S;
            if (arguments.length)
              return s.timeScale(
                (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                  (s.reversed() ? -t : t)
              );
            if (s._dirty) {
              for (n = s.parent; o; )
                (e = o._prev),
                  o._dirty && o.totalDuration(),
                  (r = o._start) > a && s._sort && o._ts && !s._lock
                    ? ((s._lock = 1), (Xt(s, o, r - o._delay, 1)._lock = 0))
                    : (a = r),
                  r < 0 &&
                    o._ts &&
                    ((i -= r),
                    ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                      ((s._start += r / s._ts),
                      (s._time -= r),
                      (s._tTime -= r)),
                    s.shiftChildren(-r, !1, -Infinity),
                    (a = 0)),
                  o._end > i && o._ts && (i = o._end),
                  (o = e);
              Gt(s, s === l && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
            }
            return s._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((l._ts && (xt(l, qt(t, l)), (g = Oe.frame)), Oe.frame >= lt)) {
              lt += x.autoSleep || 120;
              var e = l._first;
              if ((!e || !e._ts) && x.autoSleep && Oe._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || Oe.sleep();
              }
            }
          }),
          e
        );
      })(We);
      kt(Xe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Ne,
        He,
        Ue = function (t, e, r, n, i, s, o) {
          var a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            g = new pr(this._pt, t, e, 0, 1, ur, null, i),
            m = 0,
            v = 0;
          for (
            g.b = r,
              g.e = n,
              r += "",
              (d = ~(n += "").indexOf("random(")) && (n = de(n)),
              s && (s((p = [r, n]), t, e), (r = p[0]), (n = p[1])),
              u = r.match(H) || [];
            (a = H.exec(n));

          )
            (l = a[0]),
              (h = n.substring(m, a.index)),
              c ? (c = (c + 1) % 5) : "rgba(" === h.substr(-5) && (c = 1),
              l !== u[v++] &&
                ((f = parseFloat(u[v - 1]) || 0),
                (g._pt = {
                  _next: g._pt,
                  p: h || 1 === v ? h : ",",
                  s: f,
                  c: "=" === l.charAt(1) ? yt(f, l) - f : parseFloat(l) - f,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (m = H.lastIndex));
          return (
            (g.c = m < n.length ? n.substring(m, n.length) : ""),
            (g.fp = o),
            (U.test(n) || d) && (g.e = 0),
            (this._pt = g),
            g
          );
        },
        Ve = function (t, e, r, n, i, s, o, a, u, c) {
          D(n) && (n = n(i || 0, t, s));
          var l,
            h = t[e],
            f =
              "get" !== r
                ? r
                : D(h)
                ? u
                  ? t[
                      e.indexOf("set") || !D(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : h,
            d = D(h) ? (u ? nr : rr) : er;
          if (
            (j(n) &&
              (~n.indexOf("random(") && (n = de(n)),
              "=" === n.charAt(1) &&
                ((l = yt(f, n) + (ee(f) || 0)) || 0 === l) &&
                (n = l)),
            !c || f !== n || He)
          )
            return isNaN(f * n) || "" === n
              ? (!h && !(e in t) && K(e, n),
                Ue.call(this, t, e, f, n, d, a || x.stringFilter, u))
              : ((l = new pr(
                  this._pt,
                  t,
                  e,
                  +f || 0,
                  n - (f || 0),
                  "boolean" == typeof h ? ar : or,
                  0,
                  d
                )),
                u && (l.fp = u),
                o && l.modifier(o, this, t),
                (this._pt = l));
        },
        Ge = function (t, e, r, n, i, s) {
          var o, a, u, c;
          if (
            ut[t] &&
            !1 !==
              (o = new ut[t]()).init(
                i,
                o.rawVars
                  ? e[t]
                  : (function (t, e, r, n, i) {
                      if (
                        (D(t) && (t = Ze(t, i, e, r, n)),
                        !R(t) || (t.style && t.nodeType) || Y(t) || F(t))
                      )
                        return j(t) ? Ze(t, i, e, r, n) : t;
                      var s,
                        o = {};
                      for (s in t) o[s] = Ze(t[s], i, e, r, n);
                      return o;
                    })(e[t], n, i, s, r),
                r,
                n,
                s
              ) &&
            ((r._pt = a =
              new pr(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
            r !== m)
          )
            for (
              u = r._ptLookup[r._targets.indexOf(i)], c = o._props.length;
              c--;

            )
              u[o._props[c]] = a;
          return o;
        },
        $e = function t(e, r, n) {
          var i,
            s,
            o,
            c,
            h,
            f,
            d,
            p,
            g,
            m,
            v,
            _,
            y,
            b = e.vars,
            w = b.ease,
            x = b.startAt,
            E = b.immediateRender,
            M = b.lazy,
            O = b.onUpdate,
            C = b.onUpdateParams,
            P = b.callbackScope,
            A = b.runBackwards,
            j = b.yoyoEase,
            D = b.keyframes,
            L = b.autoRevert,
            I = e._dur,
            R = e._startAt,
            B = e._targets,
            q = e.parent,
            F = q && "nested" === q.data ? q.vars.targets : B,
            Y = "auto" === e._overwrite && !a,
            W = e.timeline;
          if (
            (W && (!D || !w) && (w = "none"),
            (e._ease = Re(w, T.ease)),
            (e._yEase = j ? Le(Re(!0 === j ? w : j, T.ease)) : 0),
            j &&
              e._yoyo &&
              !e._repeat &&
              ((j = e._yEase), (e._yEase = e._ease), (e._ease = j)),
            (e._from = !W && !!b.runBackwards),
            !W || (D && !b.stagger))
          ) {
            if (
              ((_ = (p = B[0] ? pt(B[0]).harness : 0) && b[p.prop]),
              (i = Ot(b, st)),
              R &&
                (R._zTime < 0 && R.progress(1),
                r < 0 && A && E && !L
                  ? R.render(-1, !0)
                  : R.revert(A && I ? nt : rt),
                (R._lazy = 0)),
              x)
            ) {
              if (
                (jt(
                  (e._startAt = tr.set(
                    B,
                    kt(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: q,
                        immediateRender: !0,
                        lazy: z(M),
                        startAt: null,
                        delay: 0,
                        onUpdate: O,
                        onUpdateParams: C,
                        callbackScope: P,
                        stagger: 0,
                      },
                      x
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                r < 0 && (u || (!E && !L)) && e._startAt.revert(nt),
                E && I && r <= 0 && n <= 0)
              )
                return void (r && (e._zTime = r));
            } else if (A && I && !R)
              if (
                (r && (E = !1),
                (o = kt(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: E && z(M),
                    immediateRender: E,
                    stagger: 0,
                    parent: q,
                  },
                  i
                )),
                _ && (o[p.prop] = _),
                jt((e._startAt = tr.set(B, o))),
                (e._startAt._dp = 0),
                r < 0 &&
                  (u ? e._startAt.revert(nt) : e._startAt.render(-1, !0)),
                (e._zTime = r),
                E)
              ) {
                if (!r) return;
              } else t(e._startAt, k, k);
            for (
              e._pt = e._ptCache = 0, M = (I && z(M)) || (M && !I), s = 0;
              s < B.length;
              s++
            ) {
              if (
                ((d = (h = B[s])._gsap || dt(B)[s]._gsap),
                (e._ptLookup[s] = m = {}),
                at[d.id] && ot.length && wt(),
                (v = F === B ? s : F.indexOf(h)),
                p &&
                  !1 !== (g = new p()).init(h, _ || i, e, v, F) &&
                  ((e._pt = c =
                    new pr(e._pt, h, g.name, 0, 1, g.render, g, 0, g.priority)),
                  g._props.forEach(function (t) {
                    m[t] = c;
                  }),
                  g.priority && (f = 1)),
                !p || _)
              )
                for (o in i)
                  ut[o] && (g = Ge(o, i, e, v, h, F))
                    ? g.priority && (f = 1)
                    : (m[o] = c =
                        Ve.call(e, h, o, "get", i[o], v, F, 0, b.stringFilter));
              e._op && e._op[s] && e.kill(h, e._op[s]),
                Y &&
                  e._pt &&
                  ((Ne = e),
                  l.killTweensOf(h, m, e.globalTime(r)),
                  (y = !e.parent),
                  (Ne = 0)),
                e._pt && M && (at[d.id] = 1);
            }
            f && dr(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = O),
            (e._initted = (!e._op || e._pt) && !y),
            D && r <= 0 && W.render(S, !0, !0);
        },
        Qe = function (t, e, r, n) {
          var i,
            s,
            o = e.ease || n || "power1.inOut";
          if (Y(e))
            (s = r[t] || (r[t] = [])),
              e.forEach(function (t, r) {
                return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
              });
          else
            for (i in e)
              (s = r[i] || (r[i] = [])),
                "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: o });
        },
        Ze = function (t, e, r, n, i) {
          return D(t)
            ? t.call(e, r, n, i)
            : j(t) && ~t.indexOf("random(")
            ? de(t)
            : t;
        },
        Ke = ft + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Je = {};
      mt(Ke + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (Je[t] = 1);
      });
      var tr = (function (t) {
        function e(e, r, n, i) {
          var o;
          "number" == typeof r && ((n.duration = r), (r = n), (n = null));
          var u,
            c,
            h,
            f,
            d,
            p,
            g,
            m,
            v = (o = t.call(this, i ? r : Ct(r)) || this).vars,
            _ = v.duration,
            y = v.delay,
            b = v.immediateRender,
            w = v.stagger,
            T = v.overwrite,
            S = v.keyframes,
            k = v.defaults,
            E = v.scrollTrigger,
            M = v.yoyoEase,
            O = r.parent || l,
            C = (Y(e) || F(e) ? L(e[0]) : "length" in r) ? [e] : se(e);
          if (
            ((o._targets = C.length
              ? dt(C)
              : J(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !x.nullTargetWarn
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = T),
            S || w || q(_) || q(y))
          ) {
            if (
              ((r = o.vars),
              (u = o.timeline =
                new Xe({
                  data: "nested",
                  defaults: k || {},
                  targets: O && "nested" === O.data ? O.vars.targets : C,
                })).kill(),
              (u.parent = u._dp = s(o)),
              (u._start = 0),
              w || q(_) || q(y))
            ) {
              if (((f = C.length), (g = w && ue(w)), R(w)))
                for (d in w) ~Ke.indexOf(d) && (m || (m = {}), (m[d] = w[d]));
              for (c = 0; c < f; c++)
                ((h = Ot(r, Je)).stagger = 0),
                  M && (h.yoyoEase = M),
                  m && Et(h, m),
                  (p = C[c]),
                  (h.duration = +Ze(_, s(o), c, p, C)),
                  (h.delay = (+Ze(y, s(o), c, p, C) || 0) - o._delay),
                  !w &&
                    1 === f &&
                    h.delay &&
                    ((o._delay = y = h.delay), (o._start += y), (h.delay = 0)),
                  u.to(p, h, g ? g(c, p, C) : 0),
                  (u._ease = Pe.none);
              u.duration() ? (_ = y = 0) : (o.timeline = 0);
            } else if (S) {
              Ct(kt(u.vars.defaults, { ease: "none" })),
                (u._ease = Re(S.ease || r.ease || "none"));
              var P,
                A,
                j,
                D = 0;
              if (Y(S))
                S.forEach(function (t) {
                  return u.to(C, t, ">");
                }),
                  u.duration();
              else {
                for (d in ((h = {}), S))
                  "ease" === d ||
                    "easeEach" === d ||
                    Qe(d, S[d], h, S.easeEach);
                for (d in h)
                  for (
                    P = h[d].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      D = 0,
                      c = 0;
                    c < P.length;
                    c++
                  )
                    ((j = {
                      ease: (A = P[c]).e,
                      duration: ((A.t - (c ? P[c - 1].t : 0)) / 100) * _,
                    })[d] = A.v),
                      u.to(C, j, D),
                      (D += j.duration);
                u.duration() < _ && u.to({}, { duration: _ - u.duration() });
              }
            }
            _ || o.duration((_ = u.duration()));
          } else o.timeline = 0;
          return (
            !0 !== T || a || ((Ne = s(o)), l.killTweensOf(C), (Ne = 0)),
            Xt(O, s(o), n),
            r.reversed && o.reverse(),
            r.paused && o.paused(!0),
            (b ||
              (!_ &&
                !S &&
                o._start === _t(O._time) &&
                z(b) &&
                Rt(s(o)) &&
                "nested" !== O.data)) &&
              ((o._tTime = -1e-8), o.render(Math.max(0, -y) || 0)),
            E && Nt(s(o), E),
            o
          );
        }
        o(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              o,
              a,
              c,
              l,
              h,
              f,
              d = this._time,
              p = this._tDur,
              g = this._dur,
              m = t < 0,
              v = t > p - k && !m ? p : t < k ? 0 : t;
            if (g) {
              if (
                v !== this._tTime ||
                !t ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((n = v), (h = this.timeline), this._repeat)) {
                  if (((o = g + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * o + t, e, r);
                  if (
                    ((n = _t(v % o)),
                    v === p
                      ? ((s = this._repeat), (n = g))
                      : ((s = ~~(v / o)) && s === v / o && ((n = g), s--),
                        n > g && (n = g)),
                    (c = this._yoyo && 1 & s) &&
                      ((f = this._yEase), (n = g - n)),
                    (a = Bt(this._tTime, o)),
                    n === d && !r && this._initted)
                  )
                    return (this._tTime = v), this;
                  s !== a &&
                    (h && this._yEase && Ie(h, c),
                    !this.vars.repeatRefresh ||
                      c ||
                      this._lock ||
                      ((this._lock = r = 1),
                      (this.render(_t(o * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Ht(this, m ? t : n, r, e, v))
                    return (this._tTime = 0), this;
                  if (d !== this._time) return this;
                  if (g !== this._dur) return this.render(t, e, r);
                }
                if (
                  ((this._tTime = v),
                  (this._time = n),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (f || this._ease)(n / g)),
                  this._from && (this.ratio = l = 1 - l),
                  n && !d && !e && (me(this, "onStart"), this._tTime !== v))
                )
                  return this;
                for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
                (h &&
                  h.render(
                    t < 0
                      ? t
                      : !n && c
                      ? -1e-8
                      : h._dur * h._ease(n / this._dur),
                    e,
                    r
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && It(this, t, 0, r), me(this, "onUpdate")),
                  this._repeat &&
                    s !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    me(this, "onRepeat"),
                  (v !== this._tDur && v) ||
                    this._tTime !== v ||
                    (m && !this._onUpdate && It(this, t, 0, !0),
                    (t || !g) &&
                      ((v === this._tDur && this._ts > 0) ||
                        (!v && this._ts < 0)) &&
                      jt(this, 1),
                    e ||
                      (m && !d) ||
                      !(v || d || c) ||
                      (me(
                        this,
                        v === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(v < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, r, n) {
                var i,
                  s,
                  o,
                  a = t.ratio,
                  c =
                    e < 0 ||
                    (!e &&
                      ((!t._start && Ut(t) && (t._initted || !Vt(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Vt(t))))
                      ? 0
                      : 1,
                  l = t._rDelay,
                  h = 0;
                if (
                  (l &&
                    t._repeat &&
                    ((h = te(0, t._tDur, e)),
                    (s = Bt(h, l)),
                    t._yoyo && 1 & s && (c = 1 - c),
                    s !== Bt(t._tTime, l) &&
                      ((a = 1 - c),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  c !== a || u || n || t._zTime === k || (!e && t._zTime))
                ) {
                  if (!t._initted && Ht(t, e, n, r, h)) return;
                  for (
                    o = t._zTime,
                      t._zTime = e || (r ? k : 0),
                      r || (r = e && !o),
                      t.ratio = c,
                      t._from && (c = 1 - c),
                      t._time = 0,
                      t._tTime = h,
                      i = t._pt;
                    i;

                  )
                    i.r(c, i.d), (i = i._next);
                  e < 0 && It(t, e, 0, !0),
                    t._onUpdate && !r && me(t, "onUpdate"),
                    h && t._repeat && !r && t.parent && me(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === c &&
                      (c && jt(t, 1),
                      r ||
                        u ||
                        (me(t, c ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function (e) {
            return (
              (!e || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (r.resetTo = function (t, e, r, n) {
            v || Oe.wake(), this._ts || this.play();
            var i = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || $e(this, i),
              (function (t, e, r, n, i, s, o) {
                var a,
                  u,
                  c,
                  l,
                  h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!h)
                  for (
                    h = t._ptCache[e] = [],
                      c = t._ptLookup,
                      l = t._targets.length;
                    l--;

                  ) {
                    if ((a = c[l][e]) && a.d && a.d._pt)
                      for (a = a.d._pt; a && a.p !== e && a.fp !== e; )
                        a = a._next;
                    if (!a)
                      return (
                        (He = 1), (t.vars[e] = "+=0"), $e(t, o), (He = 0), 1
                      );
                    h.push(a);
                  }
                for (l = h.length; l--; )
                  ((a = (u = h[l])._pt || u).s =
                    (!n && 0 !== n) || i ? a.s + (n || 0) + s * a.c : n),
                    (a.c = r - a.s),
                    u.e && (u.e = vt(r) + ee(u.e)),
                    u.b && (u.b = a.s + ee(u.b));
              })(this, t, e, r, n, this._ease(i / this._dur), i)
                ? this.resetTo(t, e, r, n)
                : (Yt(this, 0),
                  this.parent ||
                    Pt(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0))
            );
          }),
          (r.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? ve(this) : this;
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Ne && !0 !== Ne.vars.overwrite)
                  ._first || ve(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  Gt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var n,
              i,
              s,
              o,
              a,
              u,
              c,
              l = this._targets,
              h = t ? se(t) : l,
              f = this._ptLookup,
              d = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var r = t.length, n = r === e.length;
                  n && r-- && t[r] === e[r];

                );
                return r < 0;
              })(l, h)
            )
              return "all" === e && (this._pt = 0), ve(this);
            for (
              n = this._op = this._op || [],
                "all" !== e &&
                  (j(e) &&
                    ((a = {}),
                    mt(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var r,
                      n,
                      i,
                      s,
                      o = t[0] ? pt(t[0]).harness : 0,
                      a = o && o.aliases;
                    if (!a) return e;
                    for (n in ((r = Et({}, e)), a))
                      if ((n in r))
                        for (i = (s = a[n].split(",")).length; i--; )
                          r[s[i]] = r[n];
                    return r;
                  })(l, e))),
                c = l.length;
              c--;

            )
              if (~h.indexOf(l[c]))
                for (a in ((i = f[c]),
                "all" === e
                  ? ((n[c] = e), (o = i), (s = {}))
                  : ((s = n[c] = n[c] || {}), (o = e)),
                o))
                  (u = i && i[a]) &&
                    (("kill" in u.d && !0 !== u.d.kill(a)) ||
                      At(this, u, "_pt"),
                    delete i[a]),
                    "all" !== s && (s[a] = 1);
            return this._initted && !this._pt && d && ve(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, e) {
            return Kt(1, arguments);
          }),
          (e.delayedCall = function (t, r, n, i) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, e, r) {
            return Kt(2, arguments);
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return l.killTweensOf(t, e, r);
          }),
          e
        );
      })(We);
      kt(tr.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        mt("staggerTo,staggerFrom,staggerFromTo", function (t) {
          tr[t] = function () {
            var e = new Xe(),
              r = re.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var er = function (t, e, r) {
          return (t[e] = r);
        },
        rr = function (t, e, r) {
          return t[e](r);
        },
        nr = function (t, e, r, n) {
          return t[e](n.fp, r);
        },
        ir = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        sr = function (t, e) {
          return D(t[e]) ? rr : I(t[e]) && t.setAttribute ? ir : er;
        },
        or = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        ar = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        ur = function (t, e) {
          var r = e._pt,
            n = "";
          if (!t && e.b) n = e.b;
          else if (1 === t && e.e) n = e.e;
          else {
            for (; r; )
              (n =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                n),
                (r = r._next);
            n += e.c;
          }
          e.set(e.t, e.p, n, e);
        },
        cr = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        lr = function (t, e, r, n) {
          for (var i, s = this._pt; s; )
            (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
        },
        hr = function (t) {
          for (var e, r, n = this._pt; n; )
            (r = n._next),
              (n.p === t && !n.op) || n.op === t
                ? At(this, n, "_pt")
                : n.dep || (e = 1),
              (n = r);
          return !e;
        },
        fr = function (t, e, r, n) {
          n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
        },
        dr = function (t) {
          for (var e, r, n, i, s = t._pt; s; ) {
            for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
              (s._next = r) ? (r._prev = s) : (i = s),
              (s = e);
          }
          t._pt = n;
        },
        pr = (function () {
          function t(t, e, r, n, i, s, o, a, u) {
            (this.t = e),
              (this.s = n),
              (this.c = i),
              (this.p = r),
              (this.r = s || or),
              (this.d = o || this),
              (this.set = a || er),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = fr),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      mt(
        ft +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (st[t] = 1);
        }
      ),
        ($.TweenMax = $.TweenLite = tr),
        ($.TimelineLite = $.TimelineMax = Xe),
        (l = new Xe({
          sortChildren: !1,
          defaults: T,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (x.stringFilter = Me);
      var gr = [],
        mr = {},
        vr = [],
        _r = 0,
        yr = function (t) {
          return (mr[t] || vr).map(function (t) {
            return t();
          });
        },
        br = function () {
          var t = Date.now(),
            e = [];
          t - _r > 2 &&
            (yr("matchMediaInit"),
            gr.forEach(function (t) {
              var r,
                n,
                i,
                s,
                o = t.queries,
                a = t.conditions;
              for (n in o)
                (r = h.matchMedia(o[n]).matches) && (i = 1),
                  r !== a[n] && ((a[n] = r), (s = 1));
              s && (t.revert(), i && e.push(t));
            }),
            yr("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t);
            }),
            (_r = t),
            yr("matchMedia"));
        },
        wr = (function () {
          function t(t, e) {
            (this.selector = e && oe(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              D(t) && ((r = e), (e = t), (t = D));
              var n = this,
                i = function () {
                  var t,
                    i = c,
                    s = n.selector;
                  return (
                    i && i !== n && i.data.push(n),
                    r && (n.selector = oe(r)),
                    (c = n),
                    (t = e.apply(n, arguments)),
                    D(t) && n._r.push(t),
                    (c = i),
                    (n.selector = s),
                    (n.isReverted = !1),
                    t
                  );
                };
              return (n.last = i), t === D ? i(n) : t ? (n[t] = i) : i;
            }),
            (e.ignore = function (t) {
              var e = c;
              (c = null), t(this), (c = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (r) {
                  return r instanceof t
                    ? e.push.apply(e, r.getTweens())
                    : r instanceof tr &&
                        !(r.parent && "nested" === r.parent.data) &&
                        e.push(r);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var r = this;
              if (t) {
                var n = this.getTweens();
                this.data.forEach(function (t) {
                  "isFlip" === t.data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (t) {
                      return n.splice(n.indexOf(t), 1);
                    }));
                }),
                  n
                    .map(function (t) {
                      return { g: t.globalTime(0), t };
                    })
                    .sort(function (t, e) {
                      return e.g - t.g || -1;
                    })
                    .forEach(function (e) {
                      return e.t.revert(t);
                    }),
                  this.data.forEach(function (e) {
                    return !(e instanceof We) && e.revert && e.revert(t);
                  }),
                  this._r.forEach(function (e) {
                    return e(t, r);
                  }),
                  (this.isReverted = !0);
              } else
                this.data.forEach(function (t) {
                  return t.kill && t.kill();
                });
              if ((this.clear(), e)) {
                var i = gr.indexOf(this);
                ~i && gr.splice(i, 1);
              }
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        xr = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              R(t) || (t = { matches: t });
              var n,
                i,
                s,
                o = new wr(0, r || this.scope),
                a = (o.conditions = {});
              for (i in (this.contexts.push(o),
              (e = o.add("onMatch", e)),
              (o.queries = t),
              t))
                "all" === i
                  ? (s = 1)
                  : (n = h.matchMedia(t[i])) &&
                    (gr.indexOf(o) < 0 && gr.push(o),
                    (a[i] = n.matches) && (s = 1),
                    n.addListener
                      ? n.addListener(br)
                      : n.addEventListener("change", br));
              return s && e(o), this;
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        Tr = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            e.forEach(function (t) {
              return _e(t);
            });
          },
          timeline: function (t) {
            return new Xe(t);
          },
          getTweensOf: function (t, e) {
            return l.getTweensOf(t, e);
          },
          getProperty: function (t, e, r, n) {
            j(t) && (t = se(t)[0]);
            var i = pt(t || {}).get,
              s = r ? St : Tt;
            return (
              "native" === r && (r = ""),
              t
                ? e
                  ? s(((ut[e] && ut[e].get) || i)(t, e, r, n))
                  : function (e, r, n) {
                      return s(((ut[e] && ut[e].get) || i)(t, e, r, n));
                    }
                : t
            );
          },
          quickSetter: function (t, e, r) {
            if ((t = se(t)).length > 1) {
              var n = t.map(function (t) {
                  return Er.quickSetter(t, e, r);
                }),
                i = n.length;
              return function (t) {
                for (var e = i; e--; ) n[e](t);
              };
            }
            t = t[0] || {};
            var s = ut[e],
              o = pt(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              u = s
                ? function (e) {
                    var n = new s();
                    (m._pt = 0),
                      n.init(t, r ? e + r : e, m, 0, [t]),
                      n.render(1, n),
                      m._pt && cr(1, m);
                  }
                : o.set(t, a);
            return s
              ? u
              : function (e) {
                  return u(t, a, r ? e + r : e, o, 1);
                };
          },
          quickTo: function (t, e, r) {
            var n,
              i = Er.to(
                t,
                Et((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {})
              ),
              s = function (t, r, n) {
                return i.resetTo(e, t, r, n);
              };
            return (s.tween = i), s;
          },
          isTweening: function (t) {
            return l.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Re(t.ease, T.ease)), Mt(T, t || {});
          },
          config: function (t) {
            return Mt(x, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              n = t.plugins,
              i = t.defaults,
              s = t.extendTimeline;
            (n || "").split(",").forEach(function (t) {
              return (
                t &&
                !ut[t] &&
                !$[t] &&
                J(e + " effect requires " + t + " plugin.")
              );
            }),
              (ct[e] = function (t, e, n) {
                return r(se(t), kt(e || {}, i), n);
              }),
              s &&
                (Xe.prototype[e] = function (t, r, n) {
                  return this.add(ct[e](t, R(r) ? r : (n = r) && {}, this), n);
                });
          },
          registerEase: function (t, e) {
            Pe[t] = Re(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? Re(t, e) : Pe;
          },
          getById: function (t) {
            return l.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var r,
              n,
              i = new Xe(t);
            for (
              i.smoothChildTiming = z(t.smoothChildTiming),
                l.remove(i),
                i._dp = 0,
                i._time = i._tTime = l._time,
                r = l._first;
              r;

            )
              (n = r._next),
                (!e &&
                  !r._dur &&
                  r instanceof tr &&
                  r.vars.onComplete === r._targets[0]) ||
                  Xt(i, r, r._start - r._delay),
                (r = n);
            return Xt(l, i, 0), i;
          },
          context: function (t, e) {
            return t ? new wr(t, e) : c;
          },
          matchMedia: function (t) {
            return new xr(t);
          },
          matchMediaRefresh: function () {
            return (
              gr.forEach(function (t) {
                var e,
                  r,
                  n = t.conditions;
                for (r in n) n[r] && ((n[r] = !1), (e = 1));
                e && t.revert();
              }) || br()
            );
          },
          addEventListener: function (t, e) {
            var r = mr[t] || (mr[t] = []);
            ~r.indexOf(e) || r.push(e);
          },
          removeEventListener: function (t, e) {
            var r = mr[t],
              n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1);
          },
          utils: {
            wrap: function t(e, r, n) {
              var i = r - e;
              return Y(e)
                ? fe(e, t(0, e.length), r)
                : Jt(n, function (t) {
                    return ((i + ((t - e) % i)) % i) + e;
                  });
            },
            wrapYoyo: function t(e, r, n) {
              var i = r - e,
                s = 2 * i;
              return Y(e)
                ? fe(e, t(0, e.length - 1), r)
                : Jt(n, function (t) {
                    return (
                      e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t)
                    );
                  });
            },
            distribute: ue,
            random: he,
            snap: le,
            normalize: function (t, e, r) {
              return pe(t, e, 0, 1, r);
            },
            getUnit: ee,
            clamp: function (t, e, r) {
              return Jt(r, function (r) {
                return te(t, e, r);
              });
            },
            splitColor: xe,
            toArray: se,
            selector: oe,
            mapRange: pe,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (r) {
                return t(parseFloat(r)) + (e || ee(r));
              };
            },
            interpolate: function t(e, r, n, i) {
              var s = isNaN(e + r)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * r;
                  };
              if (!s) {
                var o,
                  a,
                  u,
                  c,
                  l,
                  h = j(e),
                  f = {};
                if ((!0 === n && (i = 1) && (n = null), h))
                  (e = { p: e }), (r = { p: r });
                else if (Y(e) && !Y(r)) {
                  for (u = [], c = e.length, l = c - 2, a = 1; a < c; a++)
                    u.push(t(e[a - 1], e[a]));
                  c--,
                    (s = function (t) {
                      t *= c;
                      var e = Math.min(l, ~~t);
                      return u[e](t - e);
                    }),
                    (n = r);
                } else i || (e = Et(Y(e) ? [] : {}, e));
                if (!u) {
                  for (o in r) Ve.call(f, e, o, "get", r[o]);
                  s = function (t) {
                    return cr(t, f) || (h ? e.p : e);
                  };
                }
              }
              return Jt(n, s);
            },
            shuffle: ae,
          },
          install: Z,
          effects: ct,
          ticker: Oe,
          updateRoot: Xe.updateRoot,
          plugins: ut,
          globalTimeline: l,
          core: {
            PropTween: pr,
            globals: tt,
            Tween: tr,
            Timeline: Xe,
            Animation: We,
            getCache: pt,
            _removeLinkedListItem: At,
            reverting: function () {
              return u;
            },
            context: function (t) {
              return t && c && (c.data.push(t), (t._ctx = c)), c;
            },
            suppressOverwrites: function (t) {
              return (a = t);
            },
          },
        };
      mt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (Tr[t] = tr[t]);
      }),
        Oe.add(Xe.updateRoot),
        (m = Tr.to({}, { duration: 0 }));
      var Sr = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        kr = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, n) {
              n._onInit = function (t) {
                var n, i;
                if (
                  (j(r) &&
                    ((n = {}),
                    mt(r, function (t) {
                      return (n[t] = 1);
                    }),
                    (r = n)),
                  e)
                ) {
                  for (i in ((n = {}), r)) n[i] = e(r[i]);
                  r = n;
                }
                !(function (t, e) {
                  var r,
                    n,
                    i,
                    s = t._targets;
                  for (r in e)
                    for (n = s.length; n--; )
                      (i = t._ptLookup[n][r]) &&
                        (i = i.d) &&
                        (i._pt && (i = Sr(i, r)),
                        i && i.modifier && i.modifier(e[r], t, s[n], r));
                })(t, r);
              };
            },
          };
        },
        Er =
          Tr.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, n, i) {
                var s, o, a;
                for (s in ((this.tween = r), e))
                  (a = t.getAttribute(s) || ""),
                    ((o = this.add(
                      t,
                      "setAttribute",
                      (a || 0) + "",
                      e[s],
                      n,
                      i,
                      0,
                      0,
                      s
                    )).op = s),
                    (o.b = a),
                    this._props.push(s);
              },
              render: function (t, e) {
                for (var r = e._pt; r; )
                  u ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; )
                  this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
              },
            },
            kr("roundProps", ce),
            kr("modifiers"),
            kr("snap", le)
          ) || Tr;
      (tr.version = Xe.version = Er.version = "3.11.3"), (p = 1), B() && Ce();
      Pe.Power0, Pe.Power1, Pe.Power2;
      var Mr,
        Or,
        Cr,
        Pr,
        Ar,
        jr,
        Dr,
        Lr,
        Ir = Pe.Power3,
        Rr =
          (Pe.Power4,
          Pe.Linear,
          Pe.Quad,
          Pe.Cubic,
          Pe.Quart,
          Pe.Quint,
          Pe.Strong,
          Pe.Elastic,
          Pe.Back,
          Pe.SteppedEase,
          Pe.Bounce,
          Pe.Sine,
          Pe.Expo,
          Pe.Circ,
          {}),
        zr = 180 / Math.PI,
        Br = Math.PI / 180,
        qr = Math.atan2,
        Fr = /([A-Z])/g,
        Yr = /(left|right|width|margin|padding|x)/i,
        Wr = /[\s,\(]\S/,
        Xr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        Nr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Hr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Ur = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        Vr = function (t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        Gr = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        $r = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        Qr = function (t, e, r) {
          return (t.style[e] = r);
        },
        Zr = function (t, e, r) {
          return t.style.setProperty(e, r);
        },
        Kr = function (t, e, r) {
          return (t._gsap[e] = r);
        },
        Jr = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r);
        },
        tn = function (t, e, r, n, i) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
        },
        en = function (t, e, r, n, i) {
          var s = t._gsap;
          (s[e] = r), s.renderTransform(i, s);
        },
        rn = "transform",
        nn = rn + "Origin",
        sn = function (t, e) {
          var r = this,
            n = this.target,
            i = n.style;
          if (t in Rr) {
            if (
              ((this.tfm = this.tfm || {}),
              "transform" !== t &&
                (~(t = Xr[t] || t).indexOf(",")
                  ? t.split(",").forEach(function (t) {
                      return (r.tfm[t] = Tn(n, t));
                    })
                  : (this.tfm[t] = n._gsap.x ? n._gsap[t] : Tn(n, t))),
              this.props.indexOf(rn) >= 0)
            )
              return;
            n._gsap.svg &&
              ((this.svgo = n.getAttribute("data-svg-origin")),
              this.props.push(nn, e, "")),
              (t = rn);
          }
          (i || e) && this.props.push(t, e, i[t]);
        },
        on = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        an = function () {
          var t,
            e,
            r = this.props,
            n = this.target,
            i = n.style,
            s = n._gsap;
          for (t = 0; t < r.length; t += 3)
            r[t + 1]
              ? (n[r[t]] = r[t + 2])
              : r[t + 2]
              ? (i[r[t]] = r[t + 2])
              : i.removeProperty(r[t].replace(Fr, "-$1").toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg &&
              (s.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              !(t = Dr()) || t.isStart || i[rn] || (on(i), (s.uncache = 1));
          }
        },
        un = function (t, e) {
          var r = { target: t, props: [], revert: an, save: sn };
          return (
            e &&
              e.split(",").forEach(function (t) {
                return r.save(t);
              }),
            r
          );
        },
        cn = function (t, e) {
          var r = Or.createElementNS
            ? Or.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : Or.createElement(t);
          return r.style ? r : Or.createElement(t);
        },
        ln = function t(e, r, n) {
          var i = getComputedStyle(e);
          return (
            i[r] ||
            i.getPropertyValue(r.replace(Fr, "-$1").toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && t(e, fn(r) || r, 1)) ||
            ""
          );
        },
        hn = "O,Moz,ms,Ms,Webkit".split(","),
        fn = function (t, e, r) {
          var n = (e || Ar).style,
            i = 5;
          if (t in n && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(hn[i] + t in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? hn[i] : "") + t;
        },
        dn = function () {
          "undefined" != typeof window &&
            window.document &&
            ((Mr = window),
            (Or = Mr.document),
            (Cr = Or.documentElement),
            (Ar = cn("div") || { style: {} }),
            cn("div"),
            (rn = fn(rn)),
            (nn = rn + "Origin"),
            (Ar.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (Lr = !!fn("perspective")),
            (Dr = Er.core.reverting),
            (Pr = 1));
        },
        pn = function t(e) {
          var r,
            n = cn(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText;
          if (
            (Cr.appendChild(n),
            n.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
            Cr.removeChild(n),
            (this.style.cssText = o),
            r
          );
        },
        gn = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
        },
        mn = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (r) {
            e = pn.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === pn ||
              (e = pn.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +gn(t, ["x", "cx", "x1"]) || 0,
                  y: +gn(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        vn = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !mn(t));
        },
        _n = function (t, e) {
          if (e) {
            var r = t.style;
            e in Rr && e !== nn && (e = rn),
              r.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  r.removeProperty(e.replace(Fr, "-$1").toLowerCase()))
                : r.removeAttribute(e);
          }
        },
        yn = function (t, e, r, n, i, s) {
          var o = new pr(t._pt, e, r, 0, 1, s ? $r : Gr);
          return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
        },
        bn = { deg: 1, rad: 1, turn: 1 },
        wn = { grid: 1, flex: 1 },
        xn = function t(e, r, n, i) {
          var s,
            o,
            a,
            u,
            c = parseFloat(n) || 0,
            l = (n + "").trim().substr((c + "").length) || "px",
            h = Ar.style,
            f = Yr.test(r),
            d = "svg" === e.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            g = 100,
            m = "px" === i,
            v = "%" === i;
          return i === l || !c || bn[i] || bn[l]
            ? c
            : ("px" !== l && !m && (c = t(e, r, n, "px")),
              (u = e.getCTM && vn(e)),
              (!v && "%" !== l) || (!Rr[r] && !~r.indexOf("adius"))
                ? ((h[f ? "width" : "height"] = g + (m ? l : i)),
                  (o =
                    ~r.indexOf("adius") || ("em" === i && e.appendChild && !d)
                      ? e
                      : e.parentNode),
                  u && (o = (e.ownerSVGElement || {}).parentNode),
                  (o && o !== Or && o.appendChild) || (o = Or.body),
                  (a = o._gsap) &&
                  v &&
                  a.width &&
                  f &&
                  a.time === Oe.time &&
                  !a.uncache
                    ? vt((c / a.width) * g)
                    : ((v || "%" === l) &&
                        !wn[ln(o, "display")] &&
                        (h.position = ln(e, "position")),
                      o === e && (h.position = "static"),
                      o.appendChild(Ar),
                      (s = Ar[p]),
                      o.removeChild(Ar),
                      (h.position = "absolute"),
                      f &&
                        v &&
                        (((a = pt(o)).time = Oe.time), (a.width = o[p])),
                      vt(m ? (s * c) / g : s && c ? (g / s) * c : 0)))
                : ((s = u ? e.getBBox()[f ? "width" : "height"] : e[p]),
                  vt(v ? (c / s) * g : (c / 100) * s)));
        },
        Tn = function (t, e, r, n) {
          var i;
          return (
            Pr || dn(),
            e in Xr &&
              "transform" !== e &&
              ~(e = Xr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            Rr[e] && "transform" !== e
              ? ((i = Ln(t, n)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : i.svg
                    ? i.origin
                    : In(ln(t, nn)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (Mn[e] && Mn[e](t, e, r)) ||
                  ln(t, e) ||
                  gt(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ") ? xn(t, e, i, r) + r : i
          );
        },
        Sn = function (t, e, r, n) {
          if (!r || "none" === r) {
            var i = fn(e, t, 1),
              s = i && ln(t, i, 1);
            s && s !== r
              ? ((e = i), (r = s))
              : "borderColor" === e && (r = ln(t, "borderTopColor"));
          }
          var o,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            g,
            m,
            v = new pr(this._pt, t.style, e, 0, 1, ur),
            _ = 0,
            y = 0;
          if (
            ((v.b = r),
            (v.e = n),
            (r += ""),
            "auto" === (n += "") &&
              ((t.style[e] = n), (n = ln(t, e) || n), (t.style[e] = r)),
            Me((o = [r, n])),
            (n = o[1]),
            (u = (r = o[0]).match(N) || []),
            (n.match(N) || []).length)
          ) {
            for (; (a = N.exec(n)); )
              (f = a[0]),
                (p = n.substring(_, a.index)),
                l
                  ? (l = (l + 1) % 5)
                  : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                    (l = 1),
                f !== (h = u[y++] || "") &&
                  ((c = parseFloat(h) || 0),
                  (m = h.substr((c + "").length)),
                  "=" === f.charAt(1) && (f = yt(c, f) + m),
                  (d = parseFloat(f)),
                  (g = f.substr((d + "").length)),
                  (_ = N.lastIndex - g.length),
                  g ||
                    ((g = g || x.units[e] || m),
                    _ === n.length && ((n += g), (v.e += g))),
                  m !== g && (c = xn(t, e, h, g) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: p || 1 === y ? p : ",",
                    s: c,
                    c: d - c,
                    m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            v.c = _ < n.length ? n.substring(_, n.length) : "";
          } else v.r = "display" === e && "none" === n ? $r : Gr;
          return U.test(n) && (v.e = 0), (this._pt = v), v;
        },
        kn = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        En = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              n,
              i,
              s = e.t,
              o = s.style,
              a = e.u,
              u = s._gsap;
            if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
            else
              for (i = (a = a.split(",")).length; --i > -1; )
                (r = a[i]),
                  Rr[r] && ((n = 1), (r = "transformOrigin" === r ? nn : rn)),
                  _n(s, r);
            n &&
              (_n(s, rn),
              u &&
                (u.svg && s.removeAttribute("transform"),
                Ln(s, 1),
                (u.uncache = 1),
                on(o)));
          }
        },
        Mn = {
          clearProps: function (t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
              var s = (t._pt = new pr(t._pt, e, r, 0, 0, En));
              return (
                (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
              );
            }
          },
        },
        On = [1, 0, 0, 1, 0, 0],
        Cn = {},
        Pn = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        An = function (t) {
          var e = ln(t, rn);
          return Pn(e) ? On : e.substr(7).match(X).map(vt);
        },
        jn = function (t, e) {
          var r,
            n,
            i,
            s,
            o = t._gsap || pt(t),
            a = t.style,
            u = An(t);
          return o.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? On
              : u
            : (u !== On ||
                t.offsetParent ||
                t === Cr ||
                o.svg ||
                ((i = a.display),
                (a.display = "block"),
                ((r = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (n = t.nextElementSibling), Cr.appendChild(t)),
                (u = An(t)),
                i ? (a.display = i) : _n(t, "display"),
                s &&
                  (n
                    ? r.insertBefore(t, n)
                    : r
                    ? r.appendChild(t)
                    : Cr.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        Dn = function (t, e, r, n, i, s) {
          var o,
            a,
            u,
            c = t._gsap,
            l = i || jn(t, !0),
            h = c.xOrigin || 0,
            f = c.yOrigin || 0,
            d = c.xOffset || 0,
            p = c.yOffset || 0,
            g = l[0],
            m = l[1],
            v = l[2],
            _ = l[3],
            y = l[4],
            b = l[5],
            w = e.split(" "),
            x = parseFloat(w[0]) || 0,
            T = parseFloat(w[1]) || 0;
          r
            ? l !== On &&
              (a = g * _ - m * v) &&
              ((u = x * (-m / a) + T * (g / a) - (g * b - m * y) / a),
              (x = x * (_ / a) + T * (-v / a) + (v * b - _ * y) / a),
              (T = u))
            : ((x =
                (o = mn(t)).x + (~w[0].indexOf("%") ? (x / 100) * o.width : x)),
              (T =
                o.y +
                (~(w[1] || w[0]).indexOf("%") ? (T / 100) * o.height : T))),
            n || (!1 !== n && c.smooth)
              ? ((y = x - h),
                (b = T - f),
                (c.xOffset = d + (y * g + b * v) - y),
                (c.yOffset = p + (y * m + b * _) - b))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = x),
            (c.yOrigin = T),
            (c.smooth = !!n),
            (c.origin = e),
            (c.originIsAbsolute = !!r),
            (t.style[nn] = "0px 0px"),
            s &&
              (yn(s, c, "xOrigin", h, x),
              yn(s, c, "yOrigin", f, T),
              yn(s, c, "xOffset", d, c.xOffset),
              yn(s, c, "yOffset", p, c.yOffset)),
            t.setAttribute("data-svg-origin", x + " " + T);
        },
        Ln = function (t, e) {
          var r = t._gsap || new Ye(t);
          if ("x" in r && !e && !r.uncache) return r;
          var n,
            i,
            s,
            o,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            g,
            m,
            v,
            _,
            y,
            b,
            w,
            T,
            S,
            k,
            E,
            M,
            O,
            C,
            P,
            A,
            j,
            D,
            L,
            I,
            R = t.style,
            z = r.scaleX < 0,
            B = "px",
            q = "deg",
            F = getComputedStyle(t),
            Y = ln(t, nn) || "0";
          return (
            (n = i = s = u = c = l = h = f = d = 0),
            (o = a = 1),
            (r.svg = !(!t.getCTM || !vn(t))),
            F.translate &&
              (("none" === F.translate &&
                "none" === F.scale &&
                "none" === F.rotate) ||
                (R[rn] =
                  ("none" !== F.translate
                    ? "translate3d(" +
                      (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") +
                  ("none" !== F.scale
                    ? "scale(" + F.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== F[rn] ? F[rn] : "")),
              (R.scale = R.rotate = R.translate = "none")),
            (m = jn(t, r.svg)),
            r.svg &&
              (r.uncache
                ? ((O = t.getBBox()),
                  (Y = r.xOrigin - O.x + "px " + (r.yOrigin - O.y) + "px"),
                  (M = ""))
                : (M = !e && t.getAttribute("data-svg-origin")),
              Dn(t, M || Y, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
            (p = r.xOrigin || 0),
            (g = r.yOrigin || 0),
            m !== On &&
              ((b = m[0]),
              (w = m[1]),
              (T = m[2]),
              (S = m[3]),
              (n = k = m[4]),
              (i = E = m[5]),
              6 === m.length
                ? ((o = Math.sqrt(b * b + w * w)),
                  (a = Math.sqrt(S * S + T * T)),
                  (u = b || w ? qr(w, b) * zr : 0),
                  (h = T || S ? qr(T, S) * zr + u : 0) &&
                    (a *= Math.abs(Math.cos(h * Br))),
                  r.svg &&
                    ((n -= p - (p * b + g * T)), (i -= g - (p * w + g * S))))
                : ((I = m[6]),
                  (D = m[7]),
                  (P = m[8]),
                  (A = m[9]),
                  (j = m[10]),
                  (L = m[11]),
                  (n = m[12]),
                  (i = m[13]),
                  (s = m[14]),
                  (c = (v = qr(I, j)) * zr),
                  v &&
                    ((M = k * (_ = Math.cos(-v)) + P * (y = Math.sin(-v))),
                    (O = E * _ + A * y),
                    (C = I * _ + j * y),
                    (P = k * -y + P * _),
                    (A = E * -y + A * _),
                    (j = I * -y + j * _),
                    (L = D * -y + L * _),
                    (k = M),
                    (E = O),
                    (I = C)),
                  (l = (v = qr(-T, j)) * zr),
                  v &&
                    ((_ = Math.cos(-v)),
                    (L = S * (y = Math.sin(-v)) + L * _),
                    (b = M = b * _ - P * y),
                    (w = O = w * _ - A * y),
                    (T = C = T * _ - j * y)),
                  (u = (v = qr(w, b)) * zr),
                  v &&
                    ((M = b * (_ = Math.cos(v)) + w * (y = Math.sin(v))),
                    (O = k * _ + E * y),
                    (w = w * _ - b * y),
                    (E = E * _ - k * y),
                    (b = M),
                    (k = O)),
                  c &&
                    Math.abs(c) + Math.abs(u) > 359.9 &&
                    ((c = u = 0), (l = 180 - l)),
                  (o = vt(Math.sqrt(b * b + w * w + T * T))),
                  (a = vt(Math.sqrt(E * E + I * I))),
                  (v = qr(k, E)),
                  (h = Math.abs(v) > 2e-4 ? v * zr : 0),
                  (d = L ? 1 / (L < 0 ? -L : L) : 0)),
              r.svg &&
                ((M = t.getAttribute("transform")),
                (r.forceCSS =
                  t.setAttribute("transform", "") || !Pn(ln(t, rn))),
                M && t.setAttribute("transform", M))),
            Math.abs(h) > 90 &&
              Math.abs(h) < 270 &&
              (z
                ? ((o *= -1),
                  (h += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((a *= -1), (h += h <= 0 ? 180 : -180))),
            (e = e || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!e && r.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (t.offsetWidth * r.xPercent) / 100
                : 0) +
              B),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!e && r.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * r.yPercent) / 100
                : 0) +
              B),
            (r.z = s + B),
            (r.scaleX = vt(o)),
            (r.scaleY = vt(a)),
            (r.rotation = vt(u) + q),
            (r.rotationX = vt(c) + q),
            (r.rotationY = vt(l) + q),
            (r.skewX = h + q),
            (r.skewY = f + q),
            (r.transformPerspective = d + B),
            (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (R[nn] = In(Y)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = x.force3D),
            (r.renderTransform = r.svg ? Wn : Lr ? Yn : zn),
            (r.uncache = 0),
            r
          );
        },
        In = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        Rn = function (t, e, r) {
          var n = ee(e);
          return vt(parseFloat(e) + parseFloat(xn(t, "x", r + "px", n))) + n;
        },
        zn = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            Yn(t, e);
        },
        Bn = "0deg",
        qn = "0px",
        Fn = ") ",
        Yn = function (t, e) {
          var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.z,
            u = r.rotation,
            c = r.rotationY,
            l = r.rotationX,
            h = r.skewX,
            f = r.skewY,
            d = r.scaleX,
            p = r.scaleY,
            g = r.transformPerspective,
            m = r.force3D,
            v = r.target,
            _ = r.zOrigin,
            y = "",
            b = ("auto" === m && t && 1 !== t) || !0 === m;
          if (_ && (l !== Bn || c !== Bn)) {
            var w,
              x = parseFloat(c) * Br,
              T = Math.sin(x),
              S = Math.cos(x);
            (x = parseFloat(l) * Br),
              (w = Math.cos(x)),
              (s = Rn(v, s, T * w * -_)),
              (o = Rn(v, o, -Math.sin(x) * -_)),
              (a = Rn(v, a, S * w * -_ + _));
          }
          g !== qn && (y += "perspective(" + g + Fn),
            (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
            (b || s !== qn || o !== qn || a !== qn) &&
              (y +=
                a !== qn || b
                  ? "translate3d(" + s + ", " + o + ", " + a + ") "
                  : "translate(" + s + ", " + o + Fn),
            u !== Bn && (y += "rotate(" + u + Fn),
            c !== Bn && (y += "rotateY(" + c + Fn),
            l !== Bn && (y += "rotateX(" + l + Fn),
            (h === Bn && f === Bn) || (y += "skew(" + h + ", " + f + Fn),
            (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + Fn),
            (v.style[rn] = y || "translate(0, 0)");
        },
        Wn = function (t, e) {
          var r,
            n,
            i,
            s,
            o,
            a = e || this,
            u = a.xPercent,
            c = a.yPercent,
            l = a.x,
            h = a.y,
            f = a.rotation,
            d = a.skewX,
            p = a.skewY,
            g = a.scaleX,
            m = a.scaleY,
            v = a.target,
            _ = a.xOrigin,
            y = a.yOrigin,
            b = a.xOffset,
            w = a.yOffset,
            x = a.forceCSS,
            T = parseFloat(l),
            S = parseFloat(h);
          (f = parseFloat(f)),
            (d = parseFloat(d)),
            (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
            f || d
              ? ((f *= Br),
                (d *= Br),
                (r = Math.cos(f) * g),
                (n = Math.sin(f) * g),
                (i = Math.sin(f - d) * -m),
                (s = Math.cos(f - d) * m),
                d &&
                  ((p *= Br),
                  (o = Math.tan(d - p)),
                  (i *= o = Math.sqrt(1 + o * o)),
                  (s *= o),
                  p &&
                    ((o = Math.tan(p)),
                    (r *= o = Math.sqrt(1 + o * o)),
                    (n *= o))),
                (r = vt(r)),
                (n = vt(n)),
                (i = vt(i)),
                (s = vt(s)))
              : ((r = g), (s = m), (n = i = 0)),
            ((T && !~(l + "").indexOf("px")) ||
              (S && !~(h + "").indexOf("px"))) &&
              ((T = xn(v, "x", l, "px")), (S = xn(v, "y", h, "px"))),
            (_ || y || b || w) &&
              ((T = vt(T + _ - (_ * r + y * i) + b)),
              (S = vt(S + y - (_ * n + y * s) + w))),
            (u || c) &&
              ((o = v.getBBox()),
              (T = vt(T + (u / 100) * o.width)),
              (S = vt(S + (c / 100) * o.height))),
            (o =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              s +
              "," +
              T +
              "," +
              S +
              ")"),
            v.setAttribute("transform", o),
            x && (v.style[rn] = o);
        },
        Xn = function (t, e, r, n, i) {
          var s,
            o,
            a = 360,
            u = j(i),
            c = parseFloat(i) * (u && ~i.indexOf("rad") ? zr : 1) - n,
            l = n + c + "deg";
          return (
            u &&
              ("short" === (s = i.split("_")[1]) &&
                (c %= a) !== c % 180 &&
                (c += c < 0 ? a : -360),
              "cw" === s && c < 0
                ? (c = ((c + 36e9) % a) - ~~(c / a) * a)
                : "ccw" === s &&
                  c > 0 &&
                  (c = ((c - 36e9) % a) - ~~(c / a) * a)),
            (t._pt = o = new pr(t._pt, e, r, n, c, Hr)),
            (o.e = l),
            (o.u = "deg"),
            t._props.push(r),
            o
          );
        },
        Nn = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        Hn = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            u,
            c,
            l = Nn({}, r._gsap),
            h = r.style;
          for (i in (l.svg
            ? ((s = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (h[rn] = e),
              (n = Ln(r, 1)),
              _n(r, rn),
              r.setAttribute("transform", s))
            : ((s = getComputedStyle(r)[rn]),
              (h[rn] = e),
              (n = Ln(r, 1)),
              (h[rn] = s)),
          Rr))
            (s = l[i]) !== (o = n[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((a = ee(s) !== (c = ee(o)) ? xn(r, i, s, c) : parseFloat(s)),
              (u = parseFloat(o)),
              (t._pt = new pr(t._pt, n, i, a, u - a, Nr)),
              (t._pt.u = c || 0),
              t._props.push(i));
          Nn(n, l);
        };
      mt("padding,margin,Width,Radius", function (t, e) {
        var r = "Top",
          n = "Right",
          i = "Bottom",
          s = "Left",
          o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(
            function (r) {
              return e < 2 ? t + r : "border" + r + t;
            }
          );
        Mn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
          var s, a;
          if (arguments.length < 4)
            return (
              (s = o.map(function (e) {
                return Tn(t, e, r);
              })),
              5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
            );
          (s = (n + "").split(" ")),
            (a = {}),
            o.forEach(function (t, e) {
              return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
            }),
            t.init(e, a, i);
        };
      });
      var Un,
        Vn,
        Gn,
        $n = {
          name: "css",
          register: dn,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, n, i) {
            var s,
              o,
              a,
              u,
              c,
              l,
              h,
              f,
              d,
              p,
              g,
              m,
              v,
              _,
              y,
              b,
              w,
              T,
              S,
              k,
              E = this._props,
              M = t.style,
              O = r.vars.startAt;
            for (h in (Pr || dn(),
            (this.styles = this.styles || un(t)),
            (b = this.styles.props),
            (this.tween = r),
            e))
              if (
                "autoRound" !== h &&
                ((o = e[h]), !ut[h] || !Ge(h, e, r, n, t, i))
              )
                if (
                  ((c = typeof o),
                  (l = Mn[h]),
                  "function" === c && (c = typeof (o = o.call(r, n, t, i))),
                  "string" === c && ~o.indexOf("random(") && (o = de(o)),
                  l)
                )
                  l(this, t, h, o, r) && (y = 1);
                else if ("--" === h.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                    (o += ""),
                    (ke.lastIndex = 0),
                    ke.test(s) || ((f = ee(s)), (d = ee(o))),
                    d ? f !== d && (s = xn(t, h, s, d) + d) : f && (o += f),
                    this.add(M, "setProperty", s, o, n, i, 0, 0, h),
                    E.push(h),
                    b.push(h, 0, M[h]);
                else if ("undefined" !== c) {
                  if (
                    (O && h in O
                      ? ((s =
                          "function" == typeof O[h]
                            ? O[h].call(r, n, t, i)
                            : O[h]),
                        j(s) && ~s.indexOf("random(") && (s = de(s)),
                        ee(s + "") || (s += x.units[h] || ee(Tn(t, h)) || ""),
                        "=" === (s + "").charAt(1) && (s = Tn(t, h)))
                      : (s = Tn(t, h)),
                    (u = parseFloat(s)),
                    (p =
                      "string" === c &&
                      "=" === o.charAt(1) &&
                      o.substr(0, 2)) && (o = o.substr(2)),
                    (a = parseFloat(o)),
                    h in Xr &&
                      ("autoAlpha" === h &&
                        (1 === u &&
                          "hidden" === Tn(t, "visibility") &&
                          a &&
                          (u = 0),
                        b.push("visibility", 0, M.visibility),
                        yn(
                          this,
                          M,
                          "visibility",
                          u ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== h &&
                        "transform" !== h &&
                        ~(h = Xr[h]).indexOf(",") &&
                        (h = h.split(",")[0])),
                    (g = h in Rr))
                  )
                    if (
                      (this.styles.save(h),
                      m ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) ||
                          Ln(t, e.parseTransform),
                        (_ = !1 !== e.smoothOrigin && v.smooth),
                        ((m = this._pt =
                          new pr(
                            this._pt,
                            M,
                            rn,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === h)
                    )
                      (this._pt = new pr(
                        this._pt,
                        v,
                        "scaleY",
                        u,
                        (p ? yt(u, p + a) : a) - u || 0,
                        Nr
                      )),
                        (this._pt.u = 0),
                        E.push("scaleY", h),
                        (h += "X");
                    else {
                      if ("transformOrigin" === h) {
                        b.push(nn, 0, M[nn]),
                          (T = void 0),
                          (S = void 0),
                          (k = void 0),
                          (T = (w = o).split(" ")),
                          (S = T[0]),
                          (k = T[1] || "50%"),
                          ("top" !== S &&
                            "bottom" !== S &&
                            "left" !== k &&
                            "right" !== k) ||
                            ((w = S), (S = k), (k = w)),
                          (T[0] = kn[S] || S),
                          (T[1] = kn[k] || k),
                          (o = T.join(" ")),
                          v.svg
                            ? Dn(t, o, 0, _, 0, this)
                            : ((d = parseFloat(o.split(" ")[2]) || 0) !==
                                v.zOrigin &&
                                yn(this, v, "zOrigin", v.zOrigin, d),
                              yn(this, M, h, In(s), In(o)));
                        continue;
                      }
                      if ("svgOrigin" === h) {
                        Dn(t, o, 1, _, 0, this);
                        continue;
                      }
                      if (h in Cn) {
                        Xn(this, v, h, u, p ? yt(u, p + o) : o);
                        continue;
                      }
                      if ("smoothOrigin" === h) {
                        yn(this, v, "smooth", v.smooth, o);
                        continue;
                      }
                      if ("force3D" === h) {
                        v[h] = o;
                        continue;
                      }
                      if ("transform" === h) {
                        Hn(this, o, t);
                        continue;
                      }
                    }
                  else h in M || (h = fn(h) || h);
                  if (
                    g ||
                    ((a || 0 === a) && (u || 0 === u) && !Wr.test(o) && h in M)
                  )
                    a || (a = 0),
                      (f = (s + "").substr((u + "").length)) !==
                        (d = ee(o) || (h in x.units ? x.units[h] : f)) &&
                        (u = xn(t, h, s, d)),
                      (this._pt = new pr(
                        this._pt,
                        g ? v : M,
                        h,
                        u,
                        (p ? yt(u, p + a) : a) - u,
                        g ||
                        ("px" !== d && "zIndex" !== h) ||
                        !1 === e.autoRound
                          ? Nr
                          : Vr
                      )),
                      (this._pt.u = d || 0),
                      f !== d &&
                        "%" !== d &&
                        ((this._pt.b = s), (this._pt.r = Ur));
                  else if (h in M) Sn.call(this, t, h, s, p ? p + o : o);
                  else {
                    if (!(h in t)) {
                      K(h, o);
                      continue;
                    }
                    this.add(t, h, s || t[h], p ? p + o : o, n, i);
                  }
                  g || (h in M ? b.push(h, 0, M[h]) : b.push(h, 1, s || t[h])),
                    E.push(h);
                }
            y && dr(this);
          },
          render: function (t, e) {
            if (e.tween._time || !Dr())
              for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
            else e.styles.revert();
          },
          get: Tn,
          aliases: Xr,
          getSetter: function (t, e, r) {
            var n = Xr[e];
            return (
              n && n.indexOf(",") < 0 && (e = n),
              e in Rr && e !== nn && (t._gsap.x || Tn(t, "x"))
                ? r && jr === r
                  ? "scale" === e
                    ? Jr
                    : Kr
                  : (jr = r || {}) && ("scale" === e ? tn : en)
                : t.style && !I(t.style[e])
                ? Qr
                : ~e.indexOf("-")
                ? Zr
                : sr(t, e)
            );
          },
          core: { _removeProperty: _n, _getMatrix: jn },
        };
      (Er.utils.checkPrefix = fn),
        (Er.core.getStyleSaver = un),
        (Gn = mt(
          (Un = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
            "," +
            (Vn = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            Rr[t] = 1;
          }
        )),
        mt(Vn, function (t) {
          (x.units[t] = "deg"), (Cn[t] = 1);
        }),
        (Xr[Gn[13]] = Un + "," + Vn),
        mt(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            Xr[e[1]] = Gn[e[0]];
          }
        ),
        mt(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            x.units[t] = "px";
          }
        ),
        Er.registerPlugin($n);
      var Qn = Er.registerPlugin($n) || Er,
        Zn = (Qn.core.Tween, r(752)),
        Kn = r(769);
      function Jn(t) {
        let e,
          r = t.length;
        for (; 0 != r; )
          (e = Math.floor(Math.random() * r)),
            r--,
            ([t[r], t[e]] = [t[e], t[r]]);
        return t;
      }
      const ti = 768;
      Qn.registerPlugin(Zn.ScrollTrigger, Kn.ScrollSmoother);
      Qn.registerPlugin(Zn.ScrollTrigger, Kn.ScrollSmoother);
      Qn.registerPlugin(Zn.ScrollTrigger, Kn.ScrollSmoother);
      Qn.registerPlugin(Zn.ScrollTrigger, Kn.ScrollSmoother);
      new (class {
        constructor() {
          this.createScrolling(),
            window.innerWidth > ti && this.createLoop(),
            this.createSections(),
            this.initLazyImages();
          const t = window.matchMedia(`screen and (min-width: ${ti + 1}px)`),
            e = window.matchMedia(`screen and (max-width: ${ti}px)`);
          t.addListener(function (t) {
            t.matches && location.reload();
          }),
            e.addListener(function (t) {
              t.matches && location.reload();
            }),
            document.body.classList.remove("is-preloading");
        }
        createLoop() {
          Zn.ScrollTrigger.create({
            start: 0,
            end: "max",
            onLeave: (t) => {
              t.scroll(1, !1),
                this.projects && this.projects.reloadProjects(),
                Zn.ScrollTrigger.refresh(),
                Zn.ScrollTrigger.update();
            },
            onLeaveBack: (t) => {
              t.scroll(Zn.ScrollTrigger.maxScroll(window) - 1, !1),
                Zn.ScrollTrigger.refresh(),
                Zn.ScrollTrigger.update();
            },
          });
          let t = 0;
          window.addEventListener(
            "scroll",
            function (e) {
              let r = window.pageYOffset || document.documentElement.scrollTop;
              (document.body.scrollingDown = r > t), (t = r <= 0 ? 0 : r);
            },
            !1
          );
        }
        createScrolling() {
          this.scrolling = Kn.ScrollSmoother.create({
            smooth: window.innerWidth > ti && 1,
            effects: window.innerWidth > ti,
            smoothTouch: window.innerWidth > 992 && 0.1,
            normalizeScroll: !0,
          });
        }
        createSections() {
          (this.intro = new (class {
            constructor() {
              (this.currentIndex = 0),
                (this.refreshed = !0),
                (this.bgImages =
                  document.querySelectorAll(".js-intro-bg-image")),
                (this.site = document.querySelector(".js-site")),
                window.innerWidth > ti && this.animateLabel(),
                this.animateImage(),
                this.initImages(),
                this.loadImage(),
                this.reloadSection();
            }
            initImages() {
              this.images = Jn(document.querySelector(".js-intro-bg").images);
            }
            loadImage() {
              this.refreshed &&
                ((this.currentIndex =
                  this.currentIndex == this.images.length
                    ? 0
                    : this.currentIndex),
                this.bgImages.forEach((t) => {
                  (t.style.backgroundImage = `url('${
                    this.images[this.currentIndex]
                  }')`),
                    i()(t, { background: !0 }, function (e) {
                      document.body.classList.add("is-loaded"),
                        setTimeout(function () {
                          t.classList.add("is-loaded");
                        }, 750);
                    });
                }),
                this.currentIndex++);
            }
            reloadSection() {
              e()(".js-outro")
                .on("enter", (t) => {
                  (this.refreshed = !0),
                    this.site.classList.remove("is-scrolled");
                })
                .on("exit", (t) => {}),
                e()(".js-curation")
                  .on("enter", (t) => {
                    document.body.scrollingDown &&
                      (this.loadImage(), (this.refreshed = !1));
                  })
                  .on("exit", (t) => {});
            }
            animateLabel() {
              Qn.fromTo(
                ".js-intro-label",
                { scale: 0.667, y: 0 },
                {
                  scale: 1,
                  scrollTrigger: {
                    trigger: ".js-intro-container",
                    y: "2px",
                    pin: !0,
                    pinType: document.querySelector(".js-scrollable").style
                      .transform
                      ? "transform"
                      : "fixed",
                    scrub: !0,
                    onEnter: () => {
                      this.site.classList.remove("is-scrolled");
                    },
                    onLeave: () => {
                      this.site.classList.add("is-scrolled"),
                        document.body.classList.add("is-looped");
                    },
                    onEnterBack: () => {
                      this.site.classList.remove("is-scrolled");
                    },
                  },
                }
              );
            }
            animateImage() {
              Qn.fromTo(
                ".js-outro-shadow",
                { height: "50vh" },
                {
                  height: "0",
                  scrollTrigger: {
                    trigger: ".js-contact",
                    start: "bottom 50%",
                    end: "bottom top",
                    scrub: !0,
                  },
                }
              ),
                Qn.to(".js-intro-bg", {
                  scrollTrigger: {
                    trigger: ".js-intro",
                    start: "top top",
                    end: "bottom top",
                    pin: ".js-intro-bg",
                    scrub: !0,
                    pinType: document.querySelector(".js-scrollable").style
                      .transform
                      ? "transform"
                      : "fixed",
                  },
                  opacity: 0.1,
                }),
                e()(".js-outro")
                  .on("enter", (t) => {
                    document.body.classList.add("is-looped");
                  })
                  .on("exit", (t) => {});
            }
          })()),
            (this.agency = new (class {
              constructor() {
                (this.smoother = Kn.ScrollSmoother.get()),
                  (this.images = document.querySelectorAll(".js-agency-image")),
                  (this.texts = document.querySelector(".js-agency-texts")),
                  this.initTextsAnimation(),
                  window.innerWidth > ti && this.initDesktopImages();
              }
              initTextsAnimation() {
                Zn.ScrollTrigger.create({
                  trigger: ".js-agency-texts",
                  start: "center center",
                  end: window.innerWidth > ti ? "top bottom" : "top 60%",
                  endTrigger: ".curation",
                  pin: !0,
                  pinType: document.querySelector(".js-scrollable").style
                    .transform
                    ? "transform"
                    : "fixed",
                  onUpdate: (t) => {
                    t.progress >= 0 &&
                      t.progress <= 0.3 &&
                      ((this.texts.dataset.index = 1),
                      Qn.to(".js-agency-services-text", {
                        y: "0",
                        duration: 0.5,
                        ease: "sine.out",
                      })),
                      t.progress > 0.3 &&
                        t.progress <= 0.8 &&
                        ((this.texts.dataset.index = 2),
                        Qn.to(".js-agency-services-text", {
                          y: "-2em",
                          duration: 0.5,
                          ease: "sine.out",
                        })),
                      t.progress > 0.8 &&
                        t.progress <= 1 &&
                        ((this.texts.dataset.index = 3),
                        Qn.to(".js-agency-services-text", {
                          y: "-4em",
                          duration: 0.5,
                          ease: "sine.out",
                        }));
                  },
                });
              }
              initDesktopImages() {
                let t = Kn.ScrollSmoother.get();
                t.effects(".agency__image--1", { speed: 0.8 }),
                  t.effects(".agency__image--2", { speed: 0.9, lag: 0.1 }),
                  t.effects(".agency__image--3", { speed: 0.85 }),
                  t.effects(".agency__image--4", { speed: 0.9 }),
                  t.effects(".agency__image--5", { speed: 0.9, lag: 0.1 }),
                  t.effects(".agency__image--6", { speed: 1.1 });
                const e = [1.1, 1.7, 1.3, 2, 1.2, 1.7, 2.1, 1.8],
                  r = [0.5, 0.7, 0.9, 0.9, 1.5, 2.1, 1.8, 0.8];
                document
                  .querySelector(".js-agency")
                  .addEventListener("mousemove", (t) => {
                    const n = (t.screenX - window.innerWidth / 2) / 10,
                      i = (t.screenY - window.innerHeight / 2) / 10;
                    Qn.to(".js-agency-image-container img", {
                      x: function (t, e, i) {
                        return n * r[t];
                      },
                      y: function (t, e, n) {
                        return i * r[t];
                      },
                      duration: function (t, r, n) {
                        return e[t];
                      },
                    });
                  });
              }
            })()),
            (this.curation = new (class {
              constructor() {
                window.innerWidth > ti
                  ? this.initCurationDesktop()
                  : this.initCurationMobile();
              }
              initCurationMobile() {
                let t = Qn.timeline();
                t.fromTo(
                  ".js-curation-image-front",
                  { x: "100vw" },
                  { x: "0vw", duration: 0.7, ease: "sine.out" },
                  0
                ),
                  t.fromTo(
                    ".js-curation-image-back",
                    { x: "-100vw" },
                    { x: "0vw", duration: 0.7, ease: "sine.out" },
                    0
                  ),
                  t.to(".js-curation-image-back, .js-curation-image-front", {
                    scale: 0.3,
                    x: 0,
                    duration: 0.7,
                    ease: "sine.in",
                  }),
                  Zn.ScrollTrigger.create({
                    trigger: ".js-curation",
                    start: "center 75%",
                    end: "bottom top",
                    animation: t,
                    toggleActions: "play none none reverse",
                  });
              }
              initCurationDesktop() {
                let t = Qn.timeline();
                t.fromTo(
                  ".js-curation-image-front",
                  { x: "65vw" },
                  { x: "0vw", duration: 2 },
                  0
                ),
                  t.fromTo(
                    ".js-curation-image-back",
                    { x: "-65vw" },
                    { x: "0vw", duration: 2 },
                    0
                  ),
                  t.to(".js-curation-image-back, .js-curation-image-front", {
                    scale: 0.3,
                    x: 0,
                    duration: 2,
                  }),
                  Zn.ScrollTrigger.create({
                    trigger: ".js-curation",
                    pin: ".js-curation",
                    pinType: document.querySelector(".js-scrollable").style
                      .transform
                      ? "transform"
                      : "fixed",
                    start: "bottom bottom",
                    end: "+=2000px",
                    animation: t,
                    scrub: 1.2,
                    toggleActions: "play none none reverse",
                  });
              }
            })()),
            (this.projects = new (class {
              constructor() {
                let t = this;
                (this.refreshed = !0),
                  (this.horizontalScroll = null),
                  (this.projectGroups =
                    document.querySelectorAll(".js-projects-group")),
                  this.initProjects(),
                  this.addContent(),
                  window.innerWidth > ti &&
                    (this.setImagesDimensions(),
                    this.initHorizontalScroll(),
                    this.reloadProjects(),
                    window.addEventListener("resize", () => {
                      t.setImagesDimensions();
                    }));
              }
              initProjects() {
                this.projectGroups.forEach((t) => {
                  (t.currentIndex = 0), (t.projects = Jn(t.projects));
                });
              }
              reloadProjects() {
                this.addContent(),
                  this.setImagesDimensions(),
                  this.increaseIndexes();
              }
              increaseIndexes() {
                document.querySelectorAll(".js-projects-group").forEach((t) => {
                  t.currentIndex++,
                    (t.currentIndex =
                      t.currentIndex == t.projects.length ? 0 : t.currentIndex);
                });
              }
              addContent() {
                this.projectGroups.forEach((t) => {
                  let e = t.querySelector(".js-project-image"),
                    r = t.querySelector(".js-project-title"),
                    n = t.querySelector(".js-project-category");
                  e.setAttribute("src", t.projects[t.currentIndex].image_url),
                    (r.textContent = t.projects[t.currentIndex].title),
                    (n.textContent = t.projects[t.currentIndex].category),
                    i()(e, function (t) {
                      e.classList.add("is-loaded");
                    });
                });
              }
              setImagesDimensions() {
                document.querySelectorAll(".js-projects-group").forEach((t) => {
                  t.querySelector(".js-project-cover").style.width =
                    (window.innerHeight *
                      t.projects[t.currentIndex].image_width) /
                      t.projects[t.currentIndex].image_height +
                    "px";
                });
              }
              initHorizontalScroll() {
                let t = document.querySelector(".js-projects-showcase");
                this.horizontalScroll = Qn.to(t, {
                  ease: "none",
                  x: "-100%",
                  scrollTrigger: {
                    trigger: ".js-projects",
                    pin: !0,
                    pinType: document.querySelector(".js-scrollable").style
                      .transform
                      ? "transform"
                      : "fixed",
                    scrub: !0,
                    onUpdate: (t) => {
                      Qn.to(".projects__label", {
                        y: (e, r) =>
                          100 *
                            -t.progress.toFixed(3) *
                            r.parentElement.dataset.inertia +
                          "%",
                      });
                    },
                    end: () => "+=" + t.offsetWidth,
                  },
                });
              }
            })()),
            (this.services = new (class {
              constructor() {
                this.sortBrandCategories(),
                  window.innerWidth > ti
                    ? (this.initDesktopScroll(),
                      this.highlightBrandCategories())
                    : this.initMobileAnimation();
              }
              sortBrandCategories() {
                let t = document.querySelector(".js-brands-list"),
                  e = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                [...t.children]
                  .sort((t, e) =>
                    t.querySelector(".js-brands-name").innerText >
                    e.querySelector(".js-brands-name").innerText
                      ? 1
                      : -1
                  )
                  .forEach((e) => {
                    t.appendChild(e);
                  }),
                  [...t.children].forEach((r, n) => {
                    e.test(
                      r.querySelector(".js-brands-name").innerText.charAt(0)
                    ) && t.appendChild(r);
                  }),
                  [...t.children].forEach((e, r) => {
                    r > 0 &&
                      e.querySelector(".js-brands-letter").innerText ==
                        t.querySelectorAll(".js-brands-letter")[r - 1]
                          .innerText &&
                      e.classList.add("is-repeating");
                  });
              }
              highlightBrandCategories() {
                let t = document.querySelector(".js-brands-list");
                function e(e) {
                  (document.querySelector(
                    ".js-categories-list"
                  ).dataset.activeCategory = e),
                    (t.dataset.activeCategory = e);
                }
                function r() {
                  e(0), t.classList.remove("is-chosen");
                }
                document.querySelectorAll(".js-category").forEach((n, i) => {
                  n.addEventListener("mouseenter", (r) => {
                    t.classList.contains("is-chosen") || e(n.dataset.category);
                  }),
                    n.addEventListener("click", (i) => {
                      if (
                        (i.stopPropagation(), t.classList.contains("is-chosen"))
                      )
                        return r(), void t.classList.remove("is-chosen");
                      t.classList.add("is-chosen"), e(n.dataset.category);
                    });
                }),
                  document.body.addEventListener("click", (t) => {
                    r();
                  }),
                  document
                    .querySelector(".js-categories-list")
                    .addEventListener("mouseleave", (e) => {
                      t.classList.contains("is-chosen") || r();
                    });
              }
              initMobileAnimation() {
                Zn.ScrollTrigger.create({
                  trigger: ".js-services-bg",
                  start: "top top",
                  endTrigger: ".js-contact",
                  end: "bottom bottom",
                  pin: !0,
                  scrub: !0,
                  pinType: document.querySelector(".js-scrollable").style
                    .transform
                    ? "transform"
                    : "fixed",
                });
              }
              initDesktopScroll() {
                Zn.ScrollTrigger.create({
                  trigger: ".js-services",
                  pin: ".js-projects-showcase",
                  pinType: document.querySelector(".js-scrollable").style
                    .transform
                    ? "transform"
                    : "fixed",
                  start: "top-=3px bottom",
                  endTrigger:
                    window.innerWidth > 1024 ? ".js-services" : ".js-contact",
                  end: window.innerWidth > 1024 ? "bottom bottom" : "top top",
                  onUpdate: (t) => {
                    window.innerWidth > 1024 ||
                      (document.querySelector(".js-projects").style.position =
                        "fixed");
                  },
                });
                let t = document.querySelector(
                  ".services__services__group__heading span"
                ).offsetHeight;
                document
                  .querySelectorAll(".services__services__group__heading")
                  .forEach((e, r) => {
                    Zn.ScrollTrigger.create({
                      trigger: e,
                      pin: e,
                      pinType: document.querySelector(".js-scrollable").style
                        .transform
                        ? "transform"
                        : "fixed",
                      start: "top " + t * (r + 1),
                      end: "top top",
                      endTrigger: ".js-contact",
                    });
                  }),
                  Qn.to(".js-services", {
                    scrollTrigger: {
                      trigger: ".js-contact",
                      start: "30% bottom",
                      end: "top top",
                      scrub: !0,
                    },
                  }),
                  Zn.ScrollTrigger.create({
                    trigger: ".js-brands-list",
                    start: "top 40%+=200px",
                    end:
                      "+=" +
                      2 *
                        document.querySelector(".js-brands-list").offsetHeight,
                    scrub: !0,
                    onUpdate: (t) => {
                      Qn.set(".js-brands-header", {
                        y:
                          2 *
                          -document
                            .querySelector(".js-brands-list")
                            .getBoundingClientRect().height *
                          t.progress,
                      });
                    },
                  });
              }
            })()),
            (this.navigation = new (class {
              constructor() {
                (this.scrolling = Kn.ScrollSmoother.get()),
                  (this.internalLinks =
                    document.querySelectorAll(".js-internal-link")),
                  (this.header = document.querySelector(".js-header")),
                  (this.headerNav = document.querySelector(".js-header-nav")),
                  (this.headerButton =
                    document.querySelector(".js-header-button")),
                  (this.sections = []),
                  document.querySelector(".js-show-newsletter") &&
                    this.initNewsletter(),
                  this.initOffsetValues(),
                  this.addClickEvents(),
                  this.initSectionsPositions(),
                  window.innerWidth > ti && this.initDesktopColorToggle(),
                  window.addEventListener("resize", () => {
                    this.initSectionsPositions(), this.initOffsetValues();
                  });
                let t = this;
                window.addEventListener(
                  "scroll",
                  function () {
                    t.highlightSection(t.sections, window.pageYOffset);
                  },
                  !1
                ),
                  window.innerWidth > 1025 &&
                    (this.addMouseEvents(),
                    window.addEventListener("resize", () => {
                      this.initDesktopColorToggle();
                    }));
              }
              initNewsletter() {
                let t = document.querySelector(".js-show-newsletter"),
                  e = document.querySelector(".js-contact-newsletter");
                t.addEventListener("click", (t) => {
                  e.classList.add("is-active");
                });
              }
              initDesktopColorToggle() {
                let t = null;
                t && t.kill();
                let e =
                  document
                    .querySelector(".js-projects-showcase")
                    .getBoundingClientRect().width +
                  2020 -
                  window.innerWidth;
                t = Zn.ScrollTrigger.create({
                  trigger: ".js-curation",
                  start: "top-=200 top",
                  end: `bottom+=${e} top`,
                  onEnter: (t) => {
                    this.header.dataset.color = "black";
                  },
                  onLeave: (t) => {
                    this.header.dataset.color = "white";
                  },
                  onEnterBack: (t) => {
                    this.header.dataset.color = "black";
                  },
                  onLeaveBack: (t) => {
                    this.header.dataset.color = "white";
                  },
                });
              }
              initOffsetValues() {
                this.internalLinks.forEach((t, e) => {
                  t.dataset.offset = this.scrolling.offset(
                    "#" + t.dataset.slug
                  );
                });
              }
              addClickEvents() {
                this.headerButton.addEventListener("click", (t) => {
                  t.stopPropagation(),
                    this.header.classList.toggle("is-mobile-open"),
                    document.body.classList.toggle("is-locked");
                }),
                  document.querySelectorAll(".js-header a").forEach((t, e) => {
                    t.addEventListener("click", (t) => {
                      t.stopPropagation();
                    });
                  }),
                  document.body.addEventListener("click", () => {
                    this.header.classList.contains("is-mobile-open") &&
                      (this.header.classList.remove("is-mobile-open"),
                      document.body.classList.remove("is-locked"));
                  }),
                  this.internalLinks.forEach((t, e) => {
                    t.addEventListener("click", (e) => {
                      e.stopPropagation(),
                        this.header.classList.remove("is-mobile-open"),
                        document.body.classList.remove("is-locked"),
                        Qn.to(this.scrolling, {
                          scrollTop: Math.min(
                            Zn.ScrollTrigger.maxScroll(window),
                            "intro" == t.dataset.slug ? 1 : t.dataset.offset
                          ),
                          duration: 2.5,
                          ease: Ir.easeInOut,
                        });
                    });
                  });
              }
              addMouseEvents() {
                let t,
                  e = this;
                this.header.addEventListener("mouseenter", (r) => {
                  t = setTimeout(function () {
                    e.header.classList.add("is-active");
                  }, 150);
                }),
                  this.header.addEventListener("mouseleave", () => {
                    clearTimeout(t), e.header.classList.remove("is-active");
                  });
              }
              initSectionsPositions() {
                this.internalLinks.forEach((t, e) => {
                  this.sections[e] = {
                    slug: t.dataset.slug,
                    top: this.scrolling.offset("#" + t.dataset.slug),
                  };
                }),
                  (this.sections[0].color = "white"),
                  (this.sections[1].color = "white"),
                  (this.sections[2].color = "black"),
                  (this.sections[3].color = "white"),
                  (this.sections[4].color = "white"),
                  (this.sections[0].end = this.sections[1].top - 1),
                  (this.sections[1].end = this.sections[2].top - 1),
                  (this.sections[2].end = this.sections[3].top - 1),
                  (this.sections[3].end = this.sections[4].top - 1),
                  (this.sections[4].end =
                    this.sections[4].top +
                    document.querySelector(`#${this.sections[4].slug}`)
                      .offsetHeight);
              }
              highlightSection(t, e) {
                t.forEach(function (t) {
                  if (
                    ((r = e + 200), (n = t.top), (i = t.end), r >= n && r <= i)
                  ) {
                    let e =
                      document.querySelector(
                        `.js-internal-link[data-slug="${t.slug}"]`
                      ).dataset.index || 0;
                    document.querySelector(
                      ".js-header-nav-main"
                    ).dataset.index = e;
                  }
                  var r, n, i;
                });
              }
            })());
        }
        initLazyImages() {
          e()(".js-lazy-image").on("enter", (t) => {
            let e = t.dataset.src;
            t.setAttribute("src", e),
              i()(t, function (e) {
                t.classList.add("is-inview", "is-loaded");
              }).on("exit", (t) => {
                t.classList.remove("is-inview");
              });
          });
        }
      })();
    })();
})();
