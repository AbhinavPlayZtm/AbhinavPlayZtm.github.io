"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6383], {
        6604: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return x
                }
            });
            var i = n(828),
                o = n(85893),
                a = n(67294),
                r = n(26042),
                c = n(69396),
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
                u = function(e) {
                    var t, n = e.show,
                        i = void 0 === n || n,
                        u = (e.appear, e.children),
                        v = e.animation,
                        f = void 0 === v ? "none" : v,
                        m = e.duration,
                        h = void 0 === m ? 300 : m,
                        g = (e.asChild, e.unmount, e.style),
                        p = e.delay,
                        x = e.className,
                        y = (0, a.useState)(!1),
                        w = y[0],
                        b = y[1],
                        j = null !== (t = d[f]) && void 0 !== t ? t : d.none,
                        F = (0, c.Z)((0, r.Z)({}, j), {
                            enter: "".concat(j.enter, " ").concat(s[h], " ").concat(p ? "delay-".concat(p) : ""),
                            leave: "".concat(j.leave, " ").concat(s[h], " ").concat(p ? "delay-".concat(p) : "")
                        });
                    return (0, a.useEffect)((function() {
                        if (i) {
                            var e = setTimeout((function() {
                                return b(!0)
                            }), 150);
                            return function() {
                                e && clearTimeout(e)
                            }
                        }
                    }), [i]), (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)("div", {
                            className: (0, l.AK)("transition-all", w ? "".concat(F.enter, " ").concat(F.enterTo) : "".concat(F.enter, " ").concat(F.enterFrom), x),
                            style: g,
                            children: u
                        })
                    })
                },
                v = n(42708),
                f = "default",
                m = "medium",
                h = "none",
                g = "medium";
            var p = {
                    slow: 750,
                    medium: 500,
                    fast: 250
                },
                x = function(e) {
                    var t = e.children,
                        n = e.settings,
                        r = e.globalSettings,
                        c = e.unmount,
                        l = void 0 !== c && c,
                        s = e.delay,
                        d = e.className,
                        x = e.style,
                        y = function(e, t) {
                            var n = e || {},
                                i = n.type,
                                o = void 0 === i ? f : i,
                                a = n.speed,
                                r = void 0 === a ? m : a;
                            return "default" === o && (o = (null === t || void 0 === t ? void 0 : t.type) || h, r = (null === t || void 0 === t ? void 0 : t.speed) || g), {
                                type: o,
                                speed: r
                            }
                        }(n, r),
                        w = y.type,
                        b = y.speed,
                        j = (0, a.useState)(!1),
                        F = j[0],
                        k = j[1],
                        T = (0, i.Z)((0, v.YD)({
                            triggerOnce: !0
                        }), 3),
                        C = T[0],
                        N = T[1];
                    T[2];
                    return (0, a.useEffect)((function() {
                        N && k(!0)
                    }), [N]), "none" === w ? (0, o.jsx)("div", {
                        className: d,
                        style: x,
                        children: t
                    }) : (0, o.jsxs)(o.Fragment, {
                        children: [!F && (0, o.jsx)("div", {
                            className: "absolute left-0 top-8 min-h-full min-w-full",
                            ref: C
                        }), (0, o.jsx)(u, {
                            show: F,
                            animation: w,
                            duration: p[b],
                            unmount: l,
                            disableLeave: !0,
                            delay: s,
                            className: d,
                            style: x,
                            children: t
                        })]
                    })
                }
        },
        60546: function(e, t, n) {
            n.d(t, {
                OC: function() {
                    return s
                }
            });
            var i = n(85893),
                o = n(67294),
                a = n(62246),
                r = n(4433),
                c = [{
                    id: "slantLeft",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0L-0 ").concat(t)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e, " ").concat(t)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(e, t) {
                        return "M0 0".concat(t, "L").concat(e / 2, " 0L").concat(e, " ").concat(t, "L").concat(1.5 * e, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e / 2, " ").concat(t, "L").concat(e, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(e, t) {
                        return "M0 0 C".concat(e / 2, " ").concat(t, " ").concat(e - e / 2, " ").concat(t, " ").concat(e, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, " C").concat(e / 2, " 0 ").concat(e - e / 2, " 0 ").concat(e, " ").concat(t)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(e, t) {
                        return "M0 0C0 0 ".concat(.2023 * e, " ").concat(t, " ").concat(.3333 * e, " ").concat(t, "C").concat(.4681 * e, " ").concat(t, " ").concat(.5318 * e, " 0 ").concat(.6667 * e, " 0C").concat(.8015 * e, " 0 ").concat(e, " ").concat(t, " ").concat(e, " ").concat(t)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0C").concat(e, " 0 ").concat(.8 * e, " ").concat(t, " ").concat(.666 * e, " ").concat(t, "C").concat(.547 * e, " ").concat(t, " ").concat(.483 * e, " 0 ").concat(.333 * e, " 0C").concat(.184 * e, " 0 -0.00012207 ").concat(t, " -0.00012207 ").concat(t)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e / 3, " ").concat(t, "L").concat(e / 1.5, " 0L").concat(e, " ").concat(t)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0L").concat(e / 1.5, " ").concat(t, "L").concat(e / 3, " 0L0 ").concat(t)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, "C").concat(e, " 0 ").concat(2 * e, " 0 ").concat(2 * e, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " ").concat(t, "C").concat(e / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, "H").concat(e)
                    }
                }],
                l = function(e) {
                    var t = e.width,
                        n = e.shape,
                        o = e.strokeWidth,
                        a = e.strokeColor,
                        l = e.strokeType,
                        s = c.find((function(e) {
                            return e.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        d = Math.floor(t),
                        u = "none" === s.id ? Math.floor(o) : Math.floor(d / r.c8),
                        v = s.getPath(d, u);
                    return (0, i.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: d,
                        height: u,
                        viewBox: "0 0 ".concat(d, " ").concat(u),
                        children: (0, i.jsx)("path", {
                            d: v,
                            stroke: a,
                            strokeWidth: o,
                            strokeDasharray: "dashed" === l ? "40 20" : void 0
                        })
                    })
                },
                s = function(e) {
                    var t = e.border,
                        n = e.contentRef,
                        r = e.sectionDivider,
                        c = t || {},
                        s = c.type,
                        d = c.width,
                        u = c.color,
                        v = (0, o.useState)(0),
                        f = v[0],
                        m = v[1],
                        h = (0, o.useCallback)((function() {
                            var e;
                            m(null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0)
                        }), [n]);
                    return (0, a.Z)(h, t ? n : null), t ? (0, i.jsx)(l, {
                        width: f,
                        shape: r,
                        strokeType: s,
                        strokeWidth: d,
                        strokeColor: u
                    }) : null
                }
        },
        76383: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n(26042),
                o = n(85893),
                a = n(31996),
                r = n(29260),
                c = n.n(r),
                l = n(52077),
                s = n(399),
                d = n(67294),
                u = n(21123),
                v = n(4433),
                f = n(60546),
                m = n(6604);

            function h(e) {
                var t = e.id,
                    n = e.block,
                    r = e.website,
                    h = e.previousBlock,
                    g = null === n || void 0 === n ? void 0 : n.content,
                    p = null === n || void 0 === n ? void 0 : n.align,
                    x = null === n || void 0 === n ? void 0 : n.image,
                    y = null === n || void 0 === n ? void 0 : n.button,
                    w = null === n || void 0 === n ? void 0 : n.animation,
                    b = null === r || void 0 === r ? void 0 : r.animation,
                    j = null === n || void 0 === n ? void 0 : n.divider,
                    F = null === n || void 0 === n ? void 0 : n.border,
                    k = (0, d.useRef)(null),
                    T = (0, d.useState)("#FFFFFF"),
                    C = T[0],
                    N = T[1],
                    M = (0, d.useState)({
                        top: 0,
                        bottom: 0
                    }),
                    L = M[0],
                    A = M[1],
                    P = (0, s.Z)(n).minHeight,
                    R = function() {
                        var e;
                        switch (null === n || void 0 === n || null === (e = n.image) || void 0 === e ? void 0 : e.align) {
                            case "left":
                                return "flex-col-reverse lg:flex-row-reverse";
                            case "top":
                                return "flex-col-reverse";
                            case "bottom":
                                return "flex-col";
                            default:
                                return "flex-col lg:flex-row"
                        }
                    },
                    S = function() {
                        switch (p) {
                            case "left":
                                return "justify-start";
                            case "center":
                                return "justify-center";
                            case "right":
                                return "justify-end";
                            case "middle":
                                return "items-center";
                            case "bottom":
                                return "items-end";
                            default:
                                return "items-start"
                        }
                    },
                    Z = function(e) {
                        return (0, a.QW)(null === x || void 0 === x ? void 0 : x.media) ? (0, o.jsx)("div", {
                            className: (0, a.AK)("flex-shrink-0 relative w-full mx-auto", (0, a.n3)(x.aspectRatio), e && "lg:aspect-none"),
                            children: (0, o.jsx)(c(), {
                                onContextMenu: function(e) {
                                    e.preventDefault()
                                },
                                priority: (null === n || void 0 === n ? void 0 : n.idx) <= 1,
                                sizes: "(max-width: 480px) 33vw, (max-width: 768px) 50vw, 100vw",
                                src: (0, a.QW)(null === x || void 0 === x ? void 0 : x.media),
                                objectFit: e || !x.imageFit ? "cover" : x.imageFit,
                                objectPosition: "".concat(x.imagePositionX || "center", " ").concat(x.imagePositionY || "center"),
                                layout: "fill",
                                alt: x.altText || x.media.description || x.media.author,
                                className: e ? "" : (0, a.yW)(null === x || void 0 === x ? void 0 : x.cornerRadius, null === r || void 0 === r ? void 0 : r.cornerRadius)
                            })
                        }) : null
                    },
                    I = function() {
                        return (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("div", {
                                className: "rich-text-block",
                                style: {
                                    color: C
                                },
                                dangerouslySetInnerHTML: {
                                    __html: g
                                }
                            }), y && (0, o.jsx)(l.Z, {
                                button: y,
                                block: n,
                                website: r,
                                className: "lg mt-6 lg:mt-8 w-full md:w-max"
                            })]
                        })
                    };
                return (0, o.jsxs)("section", {
                    className: "relative",
                    children: [(null === x || void 0 === x ? void 0 : x.borderless) ? (0, o.jsxs)("div", {
                        ref: k,
                        id: t,
                        className: (0, a.AK)("relative flex break-word", R()),
                        style: (0, i.Z)({
                            minHeight: P
                        }, (0, v.$h)(n)),
                        children: [(0, o.jsxs)("div", {
                            className: (0, a.AK)("flex-1 relative"),
                            style: {
                                paddingTop: (null === L || void 0 === L ? void 0 : L.top) || 0,
                                paddingBottom: (null === L || void 0 === L ? void 0 : L.bottom) || 0
                            },
                            children: [(0, o.jsx)(u.Z, {
                                block: n,
                                website: r,
                                setTextColor: N
                            }), (0, o.jsx)("div", {
                                className: (0, a.AK)("relative z-10 flex !flex-col h-full px-5 lg:px-20", S(), (0, a.A2)(null === n || void 0 === n ? void 0 : n.verticalAlign, !0)),
                                children: (0, o.jsx)(m.Z, {
                                    settings: w,
                                    globalSettings: b,
                                    children: (0, o.jsx)("div", {
                                        className: (0, a.AK)("flex flex-col w-full lg:max-w-[512px] xl:max-w-screen-sm 2xl:max-w-screen-md", "left" === (null === x || void 0 === x ? void 0 : x.align) ? "lg:mr-auto lg:ml-0" : "lg:mr-0 lg:ml-auto", (0, a.bG)(null === n || void 0 === n ? void 0 : n.spacing)),
                                        children: I()
                                    })
                                })
                            })]
                        }), (0, o.jsx)("div", {
                            className: "flex-1 relative",
                            children: Z(!0)
                        }), (0, o.jsx)(v.iz, {
                            previousDivider: null === h || void 0 === h ? void 0 : h.divider,
                            dividerUniqueId: "".concat(t, "-").concat(j),
                            divider: j,
                            contentRef: k,
                            noPadding: !0,
                            onPaddingChange: A
                        })]
                    }) : (0, o.jsxs)("div", {
                        ref: k,
                        id: t,
                        className: (0, a.AK)("flex flex-none flex-shrink-0 relative break-word", (0, a.A2)(null === n || void 0 === n ? void 0 : n.verticalAlign)),
                        style: (0, i.Z)({
                            minHeight: P
                        }, (0, v.$h)(n)),
                        children: [(0, o.jsx)(u.Z, {
                            block: n,
                            website: r,
                            setTextColor: N
                        }), (0, o.jsx)("div", {
                            className: (0, a.AK)("relative z-10 container mx-auto", (0, a.bG)(null === n || void 0 === n ? void 0 : n.spacing)),
                            children: (0, o.jsxs)(m.Z, {
                                settings: w,
                                globalSettings: b,
                                className: (0, a.AK)("flex w-full gap-10 lg:gap-20", R(), S()),
                                children: [(0, o.jsx)("div", {
                                    className: (0, a.AK)("flex-1 flex flex-col max-w-240", function() {
                                        var e;
                                        if (["left", "right"].includes(null === n || void 0 === n || null === (e = n.image) || void 0 === e ? void 0 : e.align)) return "items-center lg:items-start";
                                        switch (p) {
                                            case "left":
                                                return "items-start";
                                            case "center":
                                                return "items-center text-center mx-auto";
                                            case "right":
                                                return "items-end text-right ml-auto"
                                        }
                                    }()),
                                    children: I()
                                }), (0, o.jsx)("div", {
                                    className: (0, a.AK)("flex-1 flex w-full h-full", function() {
                                        var e;
                                        if (["left", "right"].includes(null === n || void 0 === n || null === (e = n.image) || void 0 === e ? void 0 : e.align)) return "left" === p ? "justify-end" : "justify-center lg:justify-start";
                                        switch (p) {
                                            case "left":
                                                return "items-start lg:max-w-1/2";
                                            case "center":
                                                return "items-center lg:max-w-1/2 mx-auto text-center";
                                            case "right":
                                                return "items-end lg:max-w-1/2 ml-auto text-right"
                                        }
                                    }()),
                                    children: Z(!1)
                                })]
                            })
                        }), (0, o.jsx)(v.iz, {
                            previousDivider: null === h || void 0 === h ? void 0 : h.divider,
                            dividerUniqueId: "".concat(t, "-").concat(j),
                            divider: j,
                            contentRef: k
                        })]
                    }), F && (0, o.jsx)(f.OC, {
                        border: F,
                        sectionDivider: j,
                        contentRef: k
                    })]
                })
            }
        },
        399: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = n(67294);

            function o(e) {
                var t, n, o = (0, i.useState)(0),
                    a = o[0],
                    r = o[1],
                    c = (0, i.useState)([0, 0]),
                    l = c[0],
                    s = c[1];
                return (0, i.useEffect)((function() {
                    var e = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, i.useEffect)((function() {
                    var t;
                    e && r(1 === e.idx ? (null === (t = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === t ? void 0 : t.offsetHeight) || 80 : 0)
                }), [e, l]), {
                    minHeight: (null === e || void 0 === e || null === (t = e.spacing) || void 0 === t ? void 0 : t.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
                }
            }
        },
        42708: function(e, t, n) {
            n.d(t, {
                YD: function() {
                    return v
                }
            });
            var i = n(67294),
                o = Object.defineProperty,
                a = (e, t, n) => (((e, t, n) => {
                    t in e ? o(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                r = new Map,
                c = new WeakMap,
                l = 0,
                s = void 0;

            function d(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(c.has(n)||(l+=1,c.set(n,l.toString())),c.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function u(e, t, n = {}, i = s) {
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== i) {
                    const o = e.getBoundingClientRect();
                    return t(i, {
                        isIntersecting: i,
                        target: e,
                        intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: o,
                        intersectionRect: o,
                        rootBounds: o
                    }), () => {}
                }
                const {
                    id: o,
                    observer: a,
                    elements: c
                } = function(e) {
                    let t = d(e),
                        n = r.get(t);
                    if (!n) {
                        const i = new Map;
                        let o;
                        const a = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const a = t.isIntersecting && o.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = a), null == (n = i.get(t.target)) || n.forEach((e => {
                                    e(a, t)
                                }))
                            }))
                        }), e);
                        o = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: a,
                            elements: i
                        }, r.set(t, n)
                    }
                    return n
                }(n);
                let l = c.get(e) || [];
                return c.has(e) || c.set(e, l), l.push(t), a.observe(e),
                    function() {
                        l.splice(l.indexOf(t), 1), 0 === l.length && (c.delete(e), a.unobserve(e)), 0 === c.size && (a.disconnect(), r.delete(o))
                    }
            }
            i.Component;

            function v({
                threshold: e,
                delay: t,
                trackVisibility: n,
                rootMargin: o,
                root: a,
                triggerOnce: r,
                skip: c,
                initialInView: l,
                fallbackInView: s,
                onChange: d
            } = {}) {
                var v;
                const [f, m] = i.useState(null), h = i.useRef(), [g, p] = i.useState({
                    inView: !!l,
                    entry: void 0
                });
                h.current = d, i.useEffect((() => {
                    if (c || !f) return;
                    let i;
                    return i = u(f, ((e, t) => {
                        p({
                            inView: e,
                            entry: t
                        }), h.current && h.current(e, t), t.isIntersecting && r && i && (i(), i = void 0)
                    }), {
                        root: a,
                        rootMargin: o,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, s), () => {
                        i && i()
                    }
                }), [Array.isArray(e) ? e.toString() : e, f, a, o, r, c, n, s, t]);
                const x = null == (v = g.entry) ? void 0 : v.target,
                    y = i.useRef();
                f || !x || r || c || y.current === x || (y.current = x, p({
                    inView: !!l,
                    entry: void 0
                }));
                const w = [m, g.inView, g.entry];
                return w.ref = w[0], w.inView = w[1], w.entry = w[2], w
            }
        }
    }
]);