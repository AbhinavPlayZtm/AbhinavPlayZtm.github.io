"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [258], {
        6604: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return y
                }
            });
            var o = n(828),
                i = n(85893),
                a = n(67294),
                l = n(26042),
                c = n(69396),
                r = n(31996),
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
                        m = void 0 === v ? "none" : v,
                        f = t.duration,
                        h = void 0 === f ? 300 : f,
                        g = (t.asChild, t.unmount, t.style),
                        p = t.delay,
                        y = t.className,
                        x = (0, a.useState)(!1),
                        w = x[0],
                        j = x[1],
                        b = null !== (e = d[m]) && void 0 !== e ? e : d.none,
                        F = (0, c.Z)((0, l.Z)({}, b), {
                            enter: "".concat(b.enter, " ").concat(s[h], " ").concat(p ? "delay-".concat(p) : ""),
                            leave: "".concat(b.leave, " ").concat(s[h], " ").concat(p ? "delay-".concat(p) : "")
                        });
                    return (0, a.useEffect)((function() {
                        if (o) {
                            var t = setTimeout((function() {
                                return j(!0)
                            }), 150);
                            return function() {
                                t && clearTimeout(t)
                            }
                        }
                    }), [o]), (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("div", {
                            className: (0, r.AK)("transition-all", w ? "".concat(F.enter, " ").concat(F.enterTo) : "".concat(F.enter, " ").concat(F.enterFrom), y),
                            style: g,
                            children: u
                        })
                    })
                },
                v = n(42708),
                m = "default",
                f = "medium",
                h = "none",
                g = "medium";
            var p = {
                    slow: 750,
                    medium: 500,
                    fast: 250
                },
                y = function(t) {
                    var e = t.children,
                        n = t.settings,
                        l = t.globalSettings,
                        c = t.unmount,
                        r = void 0 !== c && c,
                        s = t.delay,
                        d = t.className,
                        y = t.style,
                        x = function(t, e) {
                            var n = t || {},
                                o = n.type,
                                i = void 0 === o ? m : o,
                                a = n.speed,
                                l = void 0 === a ? f : a;
                            return "default" === i && (i = (null === e || void 0 === e ? void 0 : e.type) || h, l = (null === e || void 0 === e ? void 0 : e.speed) || g), {
                                type: i,
                                speed: l
                            }
                        }(n, l),
                        w = x.type,
                        j = x.speed,
                        b = (0, a.useState)(!1),
                        F = b[0],
                        C = b[1],
                        T = (0, o.Z)((0, v.YD)({
                            triggerOnce: !0
                        }), 3),
                        N = T[0],
                        k = T[1];
                    T[2];
                    return (0, a.useEffect)((function() {
                        k && C(!0)
                    }), [k]), "none" === w ? (0, i.jsx)("div", {
                        className: d,
                        style: y,
                        children: e
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [!F && (0, i.jsx)("div", {
                            className: "absolute left-0 top-8 min-h-full min-w-full",
                            ref: N
                        }), (0, i.jsx)(u, {
                            show: F,
                            animation: w,
                            duration: p[j],
                            unmount: r,
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
                l = n(4433),
                c = [{
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
                r = function(t) {
                    var e = t.width,
                        n = t.shape,
                        i = t.strokeWidth,
                        a = t.strokeColor,
                        r = t.strokeType,
                        s = c.find((function(t) {
                            return t.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        d = Math.floor(e),
                        u = "none" === s.id ? Math.floor(i) : Math.floor(d / l.c8),
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
                            strokeDasharray: "dashed" === r ? "40 20" : void 0
                        })
                    })
                },
                s = function(t) {
                    var e = t.border,
                        n = t.contentRef,
                        l = t.sectionDivider,
                        c = e || {},
                        s = c.type,
                        d = c.width,
                        u = c.color,
                        v = (0, i.useState)(0),
                        m = v[0],
                        f = v[1],
                        h = (0, i.useCallback)((function() {
                            var t;
                            f(null !== (t = n.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [n]);
                    return (0, a.Z)(h, e ? n : null), e ? (0, o.jsx)(r, {
                        width: m,
                        shape: l,
                        strokeType: s,
                        strokeWidth: d,
                        strokeColor: u
                    }) : null
                }
        },
        10258: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var o = n(26042),
                i = n(85893),
                a = n(31996),
                l = n(33752),
                c = n.n(l),
                r = n(40944),
                s = n(29260),
                d = n.n(s),
                u = n(399),
                v = n(21123),
                m = n(67294),
                f = n(4433),
                h = n(60546),
                g = n(6604);

            function p(t) {
                var e, n, l, s, p, y, x, w, j, b, F, C, T, N, k = t.id,
                    L = t.website,
                    A = t.block,
                    M = t.previousBlock;
                Array.isArray(A.items) || (A.items = [{
                    content: A.content,
                    by: A.by
                }]);
                var S = null === A || void 0 === A ? void 0 : A.align,
                    P = null === A || void 0 === A ? void 0 : A.animation,
                    Z = null === L || void 0 === L ? void 0 : L.animation,
                    K = null === A || void 0 === A ? void 0 : A.divider,
                    H = null === A || void 0 === A ? void 0 : A.border,
                    R = (0, m.useRef)(null),
                    W = (0, m.useState)("#FFFFFF"),
                    B = W[0],
                    D = W[1],
                    E = (0, u.Z)(A).minHeight;
                return (0, i.jsxs)("section", {
                    className: "relative",
                    children: [(0, i.jsxs)("div", {
                        ref: R,
                        id: k,
                        className: (0, a.AK)("relative flex flex-none flex-shrink-0 break-word", (0, a.A2)((null === A || void 0 === A ? void 0 : A.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: E
                        }, (0, f.$h)(A)),
                        children: [(0, i.jsx)(v.Z, {
                            block: A,
                            website: L,
                            setTextColor: D
                        }), (0, i.jsx)("div", {
                            className: (0, a.AK)("relative z-10 container mx-auto testimonials-carousel", (0, a.bG)(null === A || void 0 === A ? void 0 : A.spacing)),
                            children: (0, i.jsx)(g.Z, {
                                settings: P,
                                globalSettings: Z,
                                children: (null === A || void 0 === A || null === (e = A.items) || void 0 === e ? void 0 : e.length) > 1 ? (0, i.jsx)(c(), {
                                    cellAlign: "center",
                                    slidesToShow: 1,
                                    autoplay: !0,
                                    pauseOnHover: !0,
                                    wrapAround: !0,
                                    transitionMode: "scroll",
                                    defaultControlsConfig: {
                                        nextButtonStyle: {
                                            background: "transparent"
                                        },
                                        nextButtonText: (0, i.jsx)(r.Z, {
                                            icon: "ChevronRightIcon",
                                            className: (0, a.AK)("w-6 lg:w-12 h-6 lg:h-12 -mr-4 md:mr-0", "#111827" === B ? "text-gray-900" : "text-white")
                                        }),
                                        prevButtonStyle: {
                                            background: "transparent"
                                        },
                                        prevButtonText: (0, i.jsx)(r.Z, {
                                            icon: "ChevronLeftIcon",
                                            className: (0, a.AK)("w-6 lg:w-12 h-6 lg:h-12 -ml-4 md:ml-0", "#111827" === B ? "text-gray-900" : "text-white")
                                        })
                                    },
                                    renderBottomCenterControls: function(t) {
                                        var e;
                                        return (0, i.jsx)("ul", {
                                            className: (0, a.AK)("flex gap-4 lg:gap-5 w-full", "right" === S ? "justify-end" : "left" === S ? "justify-start" : "justify-center"),
                                            children: null === A || void 0 === A || null === (e = A.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                                                return (0, i.jsx)("li", {
                                                    children: (0, i.jsx)("button", {
                                                        className: (0, a.AK)("w-2.5 h-2.5 rounded-full transition-all", t.currentSlide === n ? "bg-gray-900 ring-4 ring-gray-200" : "", t.currentSlide > n ? "bg-gray-900" : "", t.currentSlide < n ? "bg-gray-400" : ""),
                                                        onClick: function() {
                                                            return t.goToSlide(n)
                                                        }
                                                    })
                                                }, n)
                                            }))
                                        })
                                    },
                                    children: null === A || void 0 === A || null === (n = A.items) || void 0 === n ? void 0 : n.map((function(t, e) {
                                        var n;
                                        return (0, i.jsx)("div", {
                                            className: (0, a.AK)("px-8 md:px-28 my-auto h-full flex"),
                                            children: (0, i.jsxs)("div", {
                                                className: (0, a.AK)("flex flex-col gap-4 justify-center lg:max-w-5xl break-word", "text-".concat(S), "".concat("left" === S ? "ml-0 mr-auto items-start" : "right" === S ? "ml-auto mr-0 items-end" : "mx-auto items-center")),
                                                children: [(null === (n = t.image) || void 0 === n ? void 0 : n.url) && (0, i.jsx)("div", {
                                                    className: (0, a.AK)("relative w-24 h-24 rounded-full overflow-hidden"),
                                                    children: (0, a.QW)(null === t || void 0 === t ? void 0 : t.image) && (0, i.jsx)(d(), {
                                                        onContextMenu: function(t) {
                                                            t.preventDefault()
                                                        },
                                                        src: (0, a.QW)(null === t || void 0 === t ? void 0 : t.image),
                                                        alt: t.by || t.image.description || t.image.author,
                                                        layout: "fill",
                                                        objectFit: "cover"
                                                    })
                                                }), t.content && (0, i.jsx)("h3", {
                                                    className: "heading-medium",
                                                    style: (0, o.Z)({
                                                        color: B
                                                    }, (0, a.j2)(L)),
                                                    children: t.content
                                                }), t.by && (0, i.jsx)("p", {
                                                    className: "body-large",
                                                    style: {
                                                        color: B
                                                    },
                                                    children: t.by
                                                })]
                                            })
                                        }, "testimonial-item-".concat(e))
                                    }))
                                }) : (0, i.jsx)("div", {
                                    className: "flex h-full my-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: (0, a.AK)("max-w-5xl flex flex-col gap-4 justify-center", "text-".concat(S), "".concat("left" === S ? "ml-0 mr-auto items-start" : "right" === S ? "ml-auto mr-0 items-end" : "mx-auto items-center")),
                                        children: [(null === (l = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === l ? void 0 : l.image) && (0, i.jsx)("div", {
                                            className: (0, a.AK)("relative w-24 h-24 rounded-full overflow-hidden"),
                                            children: (0, a.QW)(null === (s = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === s ? void 0 : s.image) && (0, i.jsx)(d(), {
                                                onContextMenu: function(t) {
                                                    t.preventDefault()
                                                },
                                                src: (0, a.QW)(null === (p = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === p ? void 0 : p.image),
                                                alt: (null === (y = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === y ? void 0 : y.by) || (null === (x = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === x || null === (w = x.image) || void 0 === w ? void 0 : w.description) || (null === (j = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === j || null === (b = j.image) || void 0 === b ? void 0 : b.author),
                                                layout: "fill",
                                                objectFit: "cover"
                                            })
                                        }), (null === (F = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === F ? void 0 : F.content) && (0, i.jsx)("h3", {
                                            className: "heading-medium",
                                            style: (0, o.Z)({
                                                color: B
                                            }, (0, a.j2)(L)),
                                            children: null === (C = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === C ? void 0 : C.content
                                        }), (null === (T = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === T ? void 0 : T.by) && (0, i.jsx)("p", {
                                            className: "body-large",
                                            style: {
                                                color: B
                                            },
                                            children: null === (N = null === A || void 0 === A ? void 0 : A.items[0]) || void 0 === N ? void 0 : N.by
                                        })]
                                    })
                                })
                            })
                        }), (0, i.jsx)(f.iz, {
                            previousDivider: null === M || void 0 === M ? void 0 : M.divider,
                            dividerUniqueId: "".concat(k, "-").concat(K),
                            divider: K,
                            contentRef: R
                        })]
                    }), H && (0, i.jsx)(h.OC, {
                        border: H,
                        sectionDivider: K,
                        contentRef: R
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
                    l = i[1],
                    c = (0, o.useState)([0, 0]),
                    r = c[0],
                    s = c[1];
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
                    t && l(1 === t.idx ? (null === (e = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === e ? void 0 : e.offsetHeight) || 80 : 0)
                }), [t, r]), {
                    minHeight: (null === t || void 0 === t || null === (e = t.spacing) || void 0 === e ? void 0 : e.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
                }
            }
        }
    }
]);