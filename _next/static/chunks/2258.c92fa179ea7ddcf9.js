"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2258], {
        6604: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return y
                }
            });
            var o = n(828),
                i = n(85893),
                a = n(67294),
                c = n(26042),
                r = n(69396),
                l = n(31996),
                s = {
                    250: "duration-250",
                    300: "duration-300",
                    500: "duration-500",
                    700: "duration-700",
                    750: "duration-750"
                },
                d = {
                    fadeIn: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 !block",
                        enterTo: "opacity-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0"
                    },
                    slideFromBottom: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 translate-y-8",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-8"
                    },
                    slideFromRight: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 translate-x-8",
                        enterTo: "opacity-100 translate-x-0",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 translate-x-0",
                        leaveTo: "opacity-0 translate-x-8"
                    },
                    slideFromLeft: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 -translate-x-8",
                        enterTo: "opacity-100 translate-x-0",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 translate-x-0",
                        leaveTo: "opacity-0 -translate-x-8"
                    },
                    fadeAndGrow: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95"
                    },
                    zoomOut: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-105",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-105"
                    },
                    zoomIn: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95"
                    },
                    popUp: {
                        enter: "transition-all ease-in-out",
                        enterFrom: "opacity-0 scale-0",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition-all ease-in-out",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-0"
                    },
                    none: {
                        enter: "",
                        enterFrom: "",
                        enterTo: "",
                        leave: "",
                        leaveFrom: "",
                        leaveTo: ""
                    }
                },
                u = function(t) {
                    var e, n = t.show,
                        o = void 0 === n || n,
                        u = (t.appear, t.children),
                        v = t.animation,
                        f = void 0 === v ? "none" : v,
                        m = t.duration,
                        p = void 0 === m ? 300 : m,
                        h = (t.asChild, t.unmount, t.style),
                        g = t.delay,
                        y = t.className,
                        b = (0, a.useState)(!1),
                        x = b[0],
                        w = b[1],
                        F = null !== (e = d[f]) && void 0 !== e ? e : d.none,
                        k = (0, r.Z)((0, c.Z)({}, F), {
                            enter: "".concat(F.enter, " ").concat(s[p], " ").concat(g ? "delay-".concat(g) : ""),
                            leave: "".concat(F.leave, " ").concat(s[p], " ").concat(g ? "delay-".concat(g) : "")
                        });
                    return (0, a.useEffect)((function() {
                        if (o) {
                            var t = setTimeout((function() {
                                return w(!0)
                            }), 150);
                            return function() {
                                t && clearTimeout(t)
                            }
                        }
                    }), [o]), (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("div", {
                            className: (0, l.AK)("transition-all", x ? "".concat(k.enter, " ").concat(k.enterTo) : "".concat(k.enter, " ").concat(k.enterFrom), y),
                            style: h,
                            children: u
                        })
                    })
                },
                v = n(42708),
                f = "default",
                m = "medium",
                p = "none",
                h = "medium";
            var g = {
                    slow: 750,
                    medium: 500,
                    fast: 250
                },
                y = function(t) {
                    var e = t.children,
                        n = t.settings,
                        c = t.globalSettings,
                        r = t.unmount,
                        l = void 0 !== r && r,
                        s = t.delay,
                        d = t.className,
                        y = t.style,
                        b = function(t, e) {
                            var n = t || {},
                                o = n.type,
                                i = void 0 === o ? f : o,
                                a = n.speed,
                                c = void 0 === a ? m : a;
                            return "default" === i && (i = (null === e || void 0 === e ? void 0 : e.type) || p, c = (null === e || void 0 === e ? void 0 : e.speed) || h), {
                                type: i,
                                speed: c
                            }
                        }(n, c),
                        x = b.type,
                        w = b.speed,
                        F = (0, a.useState)(!1),
                        k = F[0],
                        T = F[1],
                        j = (0, o.Z)((0, v.YD)({
                            triggerOnce: !0
                        }), 3),
                        C = j[0],
                        L = j[1];
                    j[2];
                    return (0, a.useEffect)((function() {
                        L && T(!0)
                    }), [L]), "none" === x ? (0, i.jsx)("div", {
                        className: d,
                        style: y,
                        children: e
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [!k && (0, i.jsx)("div", {
                            className: "absolute left-0 top-8 min-h-full min-w-full",
                            ref: C
                        }), (0, i.jsx)(u, {
                            show: k,
                            animation: x,
                            duration: g[w],
                            unmount: l,
                            disableLeave: !0,
                            delay: s,
                            className: d,
                            style: y,
                            children: e
                        })]
                    })
                }
        },
        60546: function(t, e, n) {
            n.d(e, {
                OC: function() {
                    return s
                }
            });
            var o = n(85893),
                i = n(67294),
                a = n(62246),
                c = n(4433),
                r = [{
                    id: "slantLeft",
                    getPath: function(t, e) {
                        return "M".concat(t, " 0L-0 ").concat(e)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(t, e) {
                        return "M0 0L".concat(t, " ").concat(e)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(t, e) {
                        return "M0 0".concat(e, "L").concat(t / 2, " 0L").concat(t, " ").concat(e, "L").concat(1.5 * t, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(t, e) {
                        return "M0 0L".concat(t / 2, " ").concat(e, "L").concat(t, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(t, e) {
                        return "M0 0 C".concat(t / 2, " ").concat(e, " ").concat(t - t / 2, " ").concat(e, " ").concat(t, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(t, e) {
                        return "M0 ".concat(e, " C").concat(t / 2, " 0 ").concat(t - t / 2, " 0 ").concat(t, " ").concat(e)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(t, e) {
                        return "M0 0C0 0 ".concat(.2023 * t, " ").concat(e, " ").concat(.3333 * t, " ").concat(e, "C").concat(.4681 * t, " ").concat(e, " ").concat(.5318 * t, " 0 ").concat(.6667 * t, " 0C").concat(.8015 * t, " 0 ").concat(t, " ").concat(e, " ").concat(t, " ").concat(e)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(t, e) {
                        return "M".concat(t, " 0C").concat(t, " 0 ").concat(.8 * t, " ").concat(e, " ").concat(.666 * t, " ").concat(e, "C").concat(.547 * t, " ").concat(e, " ").concat(.483 * t, " 0 ").concat(.333 * t, " 0C").concat(.184 * t, " 0 -0.00012207 ").concat(e, " -0.00012207 ").concat(e)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(t, e) {
                        return "M0 0L".concat(t / 3, " ").concat(e, "L").concat(t / 1.5, " 0L").concat(t, " ").concat(e)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(t, e) {
                        return "M".concat(t, " 0L").concat(t / 1.5, " ").concat(e, "L").concat(t / 3, " 0L0 ").concat(e)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(t, e) {
                        return "M0 ".concat(e, "C").concat(t, " 0 ").concat(2 * t, " 0 ").concat(2 * t, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(t, e) {
                        return "M".concat(t, " ").concat(e, "C").concat(t / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(t, e) {
                        return "M0 ".concat(e, "H").concat(t)
                    }
                }],
                l = function(t) {
                    var e = t.width,
                        n = t.shape,
                        i = t.strokeWidth,
                        a = t.strokeColor,
                        l = t.strokeType,
                        s = r.find((function(t) {
                            return t.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        d = Math.floor(e),
                        u = "none" === s.id ? Math.floor(i) : Math.floor(d / c.c8),
                        v = s.getPath(d, u);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: d,
                        height: u,
                        viewBox: "0 0 ".concat(d, " ").concat(u),
                        children: (0, o.jsx)("path", {
                            d: v,
                            stroke: a,
                            strokeWidth: i,
                            strokeDasharray: "dashed" === l ? "40 20" : void 0
                        })
                    })
                },
                s = function(t) {
                    var e = t.border,
                        n = t.contentRef,
                        c = t.sectionDivider,
                        r = e || {},
                        s = r.type,
                        d = r.width,
                        u = r.color,
                        v = (0, i.useState)(0),
                        f = v[0],
                        m = v[1],
                        p = (0, i.useCallback)((function() {
                            var t;
                            m(null !== (t = n.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [n]);
                    return (0, a.Z)(p, e ? n : null), e ? (0, o.jsx)(l, {
                        width: f,
                        shape: c,
                        strokeType: s,
                        strokeWidth: d,
                        strokeColor: u
                    }) : null
                }
        },
        82258: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var o = n(26042),
                i = n(85893),
                a = n(31996),
                c = n(52077),
                r = n(399),
                l = n(21123),
                s = n(67294),
                d = n(4433),
                u = n(60546),
                v = n(6604);

            function f(t) {
                var e, n, f, m = t.id,
                    p = t.block,
                    h = t.website,
                    g = t.previousBlock,
                    y = null === p || void 0 === p ? void 0 : p.headline,
                    b = null === p || void 0 === p ? void 0 : p.content,
                    x = (null === p || void 0 === p || null === (e = p.buttons) || void 0 === e ? void 0 : e.items) || [p.button],
                    w = (null === p || void 0 === p || null === (n = p.buttons) || void 0 === n ? void 0 : n.items) ? null === p || void 0 === p || null === (f = p.buttons) || void 0 === f ? void 0 : f.enabled : !!p.button,
                    F = (null === p || void 0 === p ? void 0 : p.align) || "center",
                    k = null === p || void 0 === p ? void 0 : p.animation,
                    T = null === h || void 0 === h ? void 0 : h.animation,
                    j = null === p || void 0 === p ? void 0 : p.divider,
                    C = null === p || void 0 === p ? void 0 : p.border,
                    L = 1 === (null === p || void 0 === p ? void 0 : p.idx) && (null === p || void 0 === p ? void 0 : p.combineWithHeader),
                    M = (0, s.useState)("#FFFFFF"),
                    N = M[0],
                    R = M[1],
                    S = (0, r.Z)(p),
                    P = S.minHeight,
                    H = S.headerHeight,
                    V = (0, s.useRef)(null);
                return (0, i.jsxs)("section", {
                    className: "relative",
                    children: [(0, i.jsxs)("div", {
                        ref: V,
                        id: m,
                        "data-text-color": N,
                        className: (0, a.AK)("flex-shrink-0 flex relative break-word", function(t) {
                            var e = {
                                top: "items-start",
                                center: "items-center",
                                bottom: "items-end"
                            };
                            return e[t] || e.center
                        }(null === p || void 0 === p ? void 0 : p.verticalAlign)),
                        style: (0, o.Z)({
                            minHeight: P
                        }, (null === p || void 0 === p ? void 0 : p.combineWithHeader) ? {
                            marginTop: "-".concat(H, "px"),
                            paddingTop: "".concat(H, "px")
                        } : {}, (0, d.$h)(p)),
                        "data-combine-with-header": L,
                        children: [(0, i.jsx)(l.Z, {
                            block: p,
                            website: h,
                            setTextColor: R
                        }), (0, i.jsx)("div", {
                            className: (0, a.AK)("relative z-10 container mx-auto", function(t) {
                                var e, n, o = {
                                        none: {
                                            top: "pt-0",
                                            bottom: "pb-0"
                                        },
                                        small: {
                                            top: "pt-8 lg:pt-32",
                                            bottom: "pb-8 lg:pb-32"
                                        },
                                        medium: {
                                            top: "pt-12 lg:pt-40",
                                            bottom: "pb-12 lg:pb-40"
                                        },
                                        large: {
                                            top: "pt-20 lg:pt-48",
                                            bottom: "pb-20 lg:pb-48"
                                        },
                                        default: {
                                            top: "pt-12 lg:pt-32 xl:pt-40",
                                            bottom: "pb-12 lg:pb-32 xl:pb-40"
                                        }
                                    },
                                    i = (null === (e = o[null === t || void 0 === t ? void 0 : t.top]) || void 0 === e ? void 0 : e.top) || o.default.top,
                                    a = (null === (n = o[null === t || void 0 === t ? void 0 : t.bottom]) || void 0 === n ? void 0 : n.bottom) || o.default.bottom;
                                return "".concat(i, " ").concat(a)
                            }(null === p || void 0 === p ? void 0 : p.spacing)),
                            children: (0, i.jsxs)(v.Z, {
                                settings: k,
                                globalSettings: T,
                                className: (0, a.AK)("max-w-3xl", "text-".concat(F), "left" === F ? "ml-0 mr-auto" : "right" === F ? "ml-auto mr-0" : "mx-auto"),
                                children: [y && (0, i.jsx)("h2", {
                                    className: (0, a.AK)("mb-6 break-word", "text-".concat(F), function() {
                                        switch (null === p || void 0 === p ? void 0 : p.headingTextStyle) {
                                            case "sm":
                                                return "heading-small";
                                            case "md":
                                                return "heading-medium";
                                            case "lg":
                                                return "heading-large";
                                            default:
                                                return "heading-xlarge"
                                        }
                                    }()),
                                    style: (0, o.Z)({
                                        color: N
                                    }, (0, a.j2)(h)),
                                    children: y
                                }), b && (0, i.jsx)("p", {
                                    className: (0, a.AK)(function() {
                                        switch (null === p || void 0 === p ? void 0 : p.subtextTextStyle) {
                                            case "sm":
                                                return "body-small";
                                            case "md":
                                                return "body-normal";
                                            default:
                                                return "body-large"
                                        }
                                    }()),
                                    style: (0, o.Z)({
                                        color: N
                                    }, (0, a.SV)(h)),
                                    children: b
                                }), (null === x || void 0 === x ? void 0 : x.length) > 0 && w && (0, i.jsx)("div", {
                                    className: "flex md:inline-flex flex-col md:flex-row md:gap-4 ",
                                    children: null === x || void 0 === x ? void 0 : x.map((function(t, e) {
                                        return (0, i.jsx)(c.Z, {
                                            button: t,
                                            block: p,
                                            website: h,
                                            className: (0, a.AK)("xl w-full md:w-max", y || b ? "mt-6 lg:mt-8" : "")
                                        }, "banner-button-".concat(e))
                                    }))
                                })]
                            })
                        }), (0, i.jsx)(d.iz, {
                            previousDivider: null === g || void 0 === g ? void 0 : g.divider,
                            dividerUniqueId: "".concat(m, "-").concat(j),
                            divider: j,
                            contentRef: V,
                            combinedWithHeaderOffset: L ? H : 0
                        })]
                    }), C && (0, i.jsx)(u.OC, {
                        border: C,
                        sectionDivider: j,
                        contentRef: V
                    })]
                })
            }
        },
        399: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            var o = n(67294);

            function i(t) {
                var e, n, i = (0, o.useState)(0),
                    a = i[0],
                    c = i[1],
                    r = (0, o.useState)([0, 0]),
                    l = r[0],
                    s = r[1];
                return (0, o.useEffect)((function() {
                    var t = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", t), t(),
                        function() {
                            return window.removeEventListener("resize", t)
                        }
                }), []), (0, o.useEffect)((function() {
                    var e;
                    t && c(1 === t.idx ? (null === (e = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === e ? void 0 : e.offsetHeight) || 80 : 0)
                }), [t, l]), {
                    minHeight: (null === t || void 0 === t || null === (e = t.spacing) || void 0 === e ? void 0 : e.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
                }
            }
        },
        42708: function(t, e, n) {
            n.d(e, {
                YD: function() {
                    return v
                }
            });
            var o = n(67294),
                i = Object.defineProperty,
                a = (t, e, n) => (((t, e, n) => {
                    e in t ? i(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : t[e] = n
                })(t, "symbol" !== typeof e ? e + "" : e, n), n),
                c = new Map,
                r = new WeakMap,
                l = 0,
                s = void 0;

            function d(t) {
                return Object.keys(t).sort().filter((e => void 0 !== t[e])).map((e => {
                    return `${e}_${"root"===e?(n=t.root,n?(r.has(n)||(l+=1,r.set(n,l.toString())),r.get(n)):"0"):t[e]}`;
                    var n
                })).toString()
            }

            function u(t, e, n = {}, o = s) {
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== o) {
                    const i = t.getBoundingClientRect();
                    return e(o, {
                        isIntersecting: o,
                        target: t,
                        intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: i,
                        intersectionRect: i,
                        rootBounds: i
                    }), () => {}
                }
                const {
                    id: i,
                    observer: a,
                    elements: r
                } = function(t) {
                    let e = d(t),
                        n = c.get(e);
                    if (!n) {
                        const o = new Map;
                        let i;
                        const a = new IntersectionObserver((e => {
                            e.forEach((e => {
                                var n;
                                const a = e.isIntersecting && i.some((t => e.intersectionRatio >= t));
                                t.trackVisibility && "undefined" === typeof e.isVisible && (e.isVisible = a), null == (n = o.get(e.target)) || n.forEach((t => {
                                    t(a, e)
                                }))
                            }))
                        }), t);
                        i = a.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), n = {
                            id: e,
                            observer: a,
                            elements: o
                        }, c.set(e, n)
                    }
                    return n
                }(n);
                let l = r.get(t) || [];
                return r.has(t) || r.set(t, l), l.push(e), a.observe(t),
                    function() {
                        l.splice(l.indexOf(e), 1), 0 === l.length && (r.delete(t), a.unobserve(t)), 0 === r.size && (a.disconnect(), c.delete(i))
                    }
            }
            o.Component;

            function v({
                threshold: t,
                delay: e,
                trackVisibility: n,
                rootMargin: i,
                root: a,
                triggerOnce: c,
                skip: r,
                initialInView: l,
                fallbackInView: s,
                onChange: d
            } = {}) {
                var v;
                const [f, m] = o.useState(null), p = o.useRef(), [h, g] = o.useState({
                    inView: !!l,
                    entry: void 0
                });
                p.current = d, o.useEffect((() => {
                    if (r || !f) return;
                    let o;
                    return o = u(f, ((t, e) => {
                        g({
                            inView: t,
                            entry: e
                        }), p.current && p.current(t, e), e.isIntersecting && c && o && (o(), o = void 0)
                    }), {
                        root: a,
                        rootMargin: i,
                        threshold: t,
                        trackVisibility: n,
                        delay: e
                    }, s), () => {
                        o && o()
                    }
                }), [Array.isArray(t) ? t.toString() : t, f, a, i, c, r, n, s, e]);
                const y = null == (v = h.entry) ? void 0 : v.target,
                    b = o.useRef();
                f || !y || c || r || b.current === y || (b.current = y, g({
                    inView: !!l,
                    entry: void 0
                }));
                const x = [m, h.inView, h.entry];
                return x.ref = x[0], x.inView = x[1], x.entry = x[2], x
            }
        }
    }
]);