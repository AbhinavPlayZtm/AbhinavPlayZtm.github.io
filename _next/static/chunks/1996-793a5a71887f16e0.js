"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1996], {
        52077: function(e, l, o) {
            o.d(l, {
                Z: function() {
                    return v
                }
            });
            var n = o(26042),
                t = o(69396),
                i = o(85893),
                r = o(41664),
                a = o.n(r),
                s = o(16494),
                d = o(31996),
                c = o(67294),
                u = o(7004);

            function v(e) {
                var l = e.button,
                    o = e.type,
                    r = e.block,
                    v = e.website,
                    f = e.action,
                    h = e.loading,
                    g = e.className,
                    m = (0, c.useState)({
                        borderWidth: 2,
                        borderStyle: "solid",
                        boxShadow: "none"
                    }),
                    p = m[0],
                    x = m[1];
                return (0, c.useEffect)((function() {
                    if (l && r && v) {
                        var e, o, i, a = (null === (e = v.colorPalette) || void 0 === e || null === (o = e.Palette) || void 0 === o ? void 0 : o.colors) || (null === (i = v.colorPalette) || void 0 === i ? void 0 : i.colors) || [];
                        if (a.length > 0 && !v.noPaletteSupport) {
                            var s, c, u, f, h, g, m = a[(0, d.dz)(null === (s = r.layers) || void 0 === s ? void 0 : s.palette)] || a[0];
                            if (!l.style) {
                                var p = v.button || {
                                    background: v.secondaryColor,
                                    cornerRadius: 8,
                                    style: "solid"
                                };
                                p.background || (p.background = v.secondaryColor), l.style = {
                                    type: p.style,
                                    cornerRadius: p.cornerRadius,
                                    name: "custom"
                                }
                            }
                            if ("custom" === (null === (c = r.layers) || void 0 === c ? void 0 : c.palette)) m = {
                                color: null === (u = r.layers) || void 0 === u || null === (f = u.overlay) || void 0 === f ? void 0 : f.color1,
                                accent: null === (h = r.layers) || void 0 === h || null === (g = h.foreground) || void 0 === g ? void 0 : g.accent
                            };
                            if ("custom" === l.style.name) x((function(e) {
                                return (0, t.Z)((0, n.Z)({}, e), {
                                    backgroundColor: "outline" === l.style.type ? "transparent" : m.accent,
                                    color: "outline" === l.style.type ? (0, d.$O)(m.color) : (0, d.$O)(m.accent),
                                    borderRadius: l.style.cornerRadius,
                                    borderColor: "outline" === l.style.type ? (0, d.$O)(m.color) : m.accent
                                })
                            }));
                            else {
                                var y = v.buttons && v.buttons[l.style.name] || {
                                    type: "solid",
                                    cornerRadius: 0
                                };
                                x((function(e) {
                                    return (0, t.Z)((0, n.Z)({}, e), {
                                        backgroundColor: "outline" === y.type ? "transparent" : m.accent,
                                        color: "outline" === y.type ? (0, d.$O)(m.color) : (0, d.$O)(m.accent),
                                        borderRadius: y.cornerRadius,
                                        borderColor: "outline" === y.type ? (0, d.$O)(m.color) : m.accent
                                    })
                                }))
                            }
                        } else {
                            var b = v.button || {
                                background: v.secondaryColor,
                                cornerRadius: 8,
                                style: "solid"
                            };
                            b.background || (b.background = v.secondaryColor), x((function(e) {
                                return (0, t.Z)((0, n.Z)({}, e), {
                                    backgroundColor: "outline" === b.style ? "transparent" : b.background,
                                    color: "outline" === b.style ? b.background : (0, d.$O)(b.background),
                                    borderRadius: isNaN(b.cornerRadius) ? 8 : b.cornerRadius,
                                    borderColor: b.background
                                })
                            }))
                        }
                    }
                }), [l, r, v]), f || "submit" === o || "section" === l.type ? (0, i.jsx)("button", {
                    type: "submit" === o ? "submit" : "button",
                    onClick: function(e) {
                        return (0, u.Gc)(e, l, f)
                    },
                    className: (0, d.AK)("button", g),
                    style: p,
                    disabled: h,
                    children: h ? (0, i.jsx)(s.Z, {}) : l.label
                }) : (0, i.jsx)(a(), {
                    href: (0, u.f$)(l, v),
                    children: (0, i.jsx)("a", {
                        className: (0, d.AK)("button", g),
                        target: (0, u.U9)(l, v),
                        style: p,
                        children: l.label
                    })
                })
            }
        },
        4433: function(e, l, o) {
            o.d(l, {
                $h: function() {
                    return c
                },
                c8: function() {
                    return s
                },
                iz: function() {
                    return v
                }
            });
            var n = o(26042),
                t = o(69396),
                i = o(85893),
                r = o(67294),
                a = o(62246),
                s = 1928 / 118,
                d = [{
                    id: "slantLeft",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M".concat(e, " 0L-0 ").concat(l, "V0H").concat(e)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M0 0L".concat(e, " ").concat(l, "V0H0")
                    }
                }, {
                    id: "pointUp",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M0 0V".concat(l, "L").concat(e / 2, " 0L").concat(e, " ").concat(l, "L").concat(1.5 * e, " 0V0H0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M0 0L".concat(e / 2, " ").concat(l, "L").concat(e, " 0H0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M0 0 C".concat(e / 2, " ").concat(l, " ").concat(e - e / 2, " ").concat(l, " ").concat(e, " 0 L").concat(e, " 0 L0 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M0 ".concat(l, " C").concat(e / 2, " 0 ").concat(e - e / 2, " 0 ").concat(e, " ").concat(l, " L").concat(e, " 0 L0 0")
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M0 0C0 0 ".concat(.2023 * e, " ").concat(l, " ").concat(.3333 * e, " ").concat(l, "C").concat(.4681 * e, " ").concat(l, " ").concat(.5318 * e, " 0 ").concat(.6667 * e, " 0C").concat(.8015 * e, " 0 ").concat(e, " ").concat(l, " ").concat(e, " ").concat(l, "V0H0Z")
                    }
                }, {
                    id: "waveRight",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M".concat(e, " 0C").concat(e, " 0 ").concat(.8 * e, " ").concat(l, " ").concat(.666 * e, " ").concat(l, "C").concat(.547 * e, " ").concat(l, " ").concat(.483 * e, " 0 ").concat(.333 * e, " 0C").concat(.184 * e, " 0 -0.00012207 ").concat(l, " -0.00012207 ").concat(l, "V0H").concat(e)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M0 0L".concat(e / 3, " ").concat(l, "L").concat(e / 1.5, " 0L").concat(e, " ").concat(l, "V0H0")
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M".concat(e, " 0L").concat(e / 1.5, " ").concat(l, "L").concat(e / 3, " 0L0 ").concat(l, "V0H").concat(e)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M0 ".concat(l, "C").concat(e, " 0 ").concat(2 * e, " 0 ").concat(2 * e, " 0H0V").concat(l)
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(e) {
                        var l = Math.floor(e / s);
                        return "M".concat(e, " ").concat(l, "C").concat(e / 2, " 0 0 0 0 0H").concat(2 * e, "V").concat(l)
                    }
                }];

            function c(e) {
                return {
                    zIndex: 40 - (null === e || void 0 === e ? void 0 : e.idx)
                }
            }
            var u = function(e) {
                    var l = e.uniqueId,
                        o = e.width,
                        n = e.height,
                        t = e.divider,
                        r = Math.floor(o / s),
                        a = Math.floor(o),
                        c = Math.floor(n),
                        u = Math.floor(n - r),
                        v = d.find((function(e) {
                            return e.id === t
                        }));
                    return (0, i.jsx)("svg", {
                        className: "absolute bottom-0 left-0",
                        width: a,
                        height: c,
                        viewBox: "0 0 ".concat(a, " ").concat(c),
                        children: (0, i.jsxs)("clipPath", {
                            id: l,
                            children: [(0, i.jsx)("rect", {
                                width: a,
                                height: u,
                                fill: "transparent"
                            }), (0, i.jsx)("path", {
                                d: v.getPath(a),
                                transform: "translate(0, ".concat(u, ")"),
                                fill: "transparent"
                            })]
                        })
                    })
                },
                v = function(e) {
                    var l = e.divider,
                        o = e.previousDivider,
                        d = e.contentRef,
                        c = e.combinedWithHeaderOffset,
                        v = e.dividerUniqueId,
                        f = e.noPadding,
                        h = e.onPaddingChange,
                        g = function(e) {
                            var l, o, n = getComputedStyle(e);
                            return parseInt(null !== (l = n.paddingTop) && void 0 !== l ? l : "0") + parseInt(null !== (o = n.paddingBottom) && void 0 !== o ? o : "0")
                        },
                        m = (0, r.useState)({
                            width: 0,
                            height: 0
                        }),
                        p = m[0],
                        x = m[1],
                        y = (0, r.useState)({
                            top: 0,
                            bottom: 0
                        }),
                        b = y[0],
                        j = y[1],
                        w = !!l,
                        N = !!o;
                    (0, r.useEffect)((function() {
                        if (N) {
                            var e = Math.floor((p.width || window.innerWidth) / s);
                            d.current.style.marginTop = "-" + (e + 1) + "px", d.current.style.paddingTop = f ? "" : e + 1 + "px", j((function(l) {
                                return (0, t.Z)((0, n.Z)({}, l), {
                                    top: e + 1
                                })
                            }))
                        } else void 0 !== c ? j((function(e) {
                            return (0, t.Z)((0, n.Z)({}, e), {
                                top: c
                            })
                        })) : (d.current.style.marginTop = "", d.current.style.paddingTop = "", j((function(e) {
                            return (0, t.Z)((0, n.Z)({}, e), {
                                top: 0
                            })
                        })))
                    }), [N, p.width, c, f]), (0, r.useEffect)((function() {
                        if (w) {
                            var e = Math.floor((p.width || window.innerWidth) / s);
                            d.current.style.paddingBottom = f ? "" : e + "px", d.current.style.clipPath = "url(#".concat(v, ")"), j((function(l) {
                                return (0, t.Z)((0, n.Z)({}, l), {
                                    bottom: e
                                })
                            }))
                        } else d.current.style.paddingBottom = "", d.current.style.clipPath = "", j((function(e) {
                            return (0, t.Z)((0, n.Z)({}, e), {
                                bottom: 0
                            })
                        }))
                    }), [w, p.width, f]);
                    var k = (0, r.useCallback)((function() {
                        var e, l;
                        x({
                            width: null !== (e = d.current.offsetWidth) && void 0 !== e ? e : 0,
                            height: (null !== (l = d.current.offsetHeight) && void 0 !== l ? l : 0) - g(d.current)
                        })
                    }), [d]);
                    return (0, r.useEffect)((function() {
                        "function" === typeof h && h(b)
                    }), [b]), (0, a.Z)(k, w || N ? d : null), l ? (0, i.jsx)(u, {
                        uniqueId: v,
                        width: p.width,
                        height: p.height + (f ? 0 : b.top + b.bottom),
                        divider: l
                    }) : null
                }
        },
        74007: function(e, l, o) {
            o.d(l, {
                Z: function() {
                    return c
                }
            });
            var n = o(85893),
                t = o(67294),
                i = o(72510),
                r = o(11355),
                a = o(31996),
                s = o(40944),
                d = o(13880);

            function c(e) {
                var l = e.className,
                    o = e.icon,
                    c = e.iconClassName,
                    u = e.button,
                    v = e.buttonClassName,
                    f = e.openClassName,
                    h = e.iconOpenClassName,
                    g = e.children,
                    m = e.inline,
                    p = e.itemsContainerClass,
                    x = e.disabled,
                    y = e.itemsContainerStyle,
                    b = e.openUp,
                    j = void 0 !== b && b,
                    w = function() {
                        F(function(e) {
                            if (!e) return !1;
                            var l = e.getBoundingClientRect();
                            return !(l.left >= 0 && l.right <= (window.innerWidth || document.documentElement.clientWidth))
                        }(N.current))
                    },
                    N = (0, t.useRef)(),
                    k = (0, t.useState)(!1),
                    C = k[0],
                    F = k[1];
                return (0, n.jsx)(i.v, {
                    as: "div",
                    className: (0, a.AK)("relative inline-block text-left", l),
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    children: function(e) {
                        var l = e.open;
                        return (0, n.jsxs)(d.bv, {
                            portal: !0,
                            children: [(0, n.jsx)(i.v.Button, {
                                className: (0, a.AK)(v, l ? f : "", "cursor-pointer z-5 focus:outline-none"),
                                disabled: x,
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: u || (0, n.jsx)(s.Z, {
                                    icon: o || "DotsVerticalIcon",
                                    className: (0, a.AK)(c, "h-5 w-5", l ? h || "text-indigo-500" : "text-gray-500")
                                })
                            }), (0, n.jsx)(r.u, {
                                show: l,
                                as: t.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                ref: N,
                                beforeEnter: w,
                                afterLeave: function() {
                                    return F(!1)
                                },
                                children: (0, n.jsx)(i.v.Items, {
                                    className: (0, a.AK)(p, "z-100 max-h-60 py-3 px-6 rounded-lg bg-white focus:outline-none overflow-y-auto space-y-2 shadow-lg", m ? "static" : "absolute", j ? "bottom-full mb-10" : "mt-2", C ? "right-0" : "left-0"),
                                    style: y,
                                    children: g
                                })
                            })]
                        })
                    }
                })
            }
        },
        40944: function(e, l, o) {
            var n = o(40872),
                t = o(85893),
                i = o(91874);
            l.Z = function(e) {
                var l = (0, n.Z)({}, i)[e.icon];
                return l ? (0, t.jsx)(l, {
                    className: e.className,
                    onClick: e.onClick,
                    "aria-hidden": "true"
                }) : "<></>"
            }
        },
        90951: function(e, l, o) {
            o.d(l, {
                Z: function() {
                    return H
                }
            });
            var n = o(47568),
                t = o(26042),
                i = o(99534),
                r = o(20414),
                a = o(85893),
                s = o(9008),
                d = o.n(s),
                c = o(67294),
                u = o(25935),
                v = o(31996),
                f = o(85518),
                h = o(11163),
                g = o.n(h),
                m = (o(40993), o(42419)),
                p = o(28521),
                x = o(41968),
                y = o(28666),
                b = o(47041),
                j = o(52077),
                w = o(90387),
                N = o(41664),
                k = o.n(N),
                C = o(72510),
                F = o(11355),
                Z = o(94053),
                A = o(32713),
                S = o(43751),
                P = o(41984),
                _ = o(3677),
                L = o(92122),
                R = o(59956),
                M = o(72434),
                W = o(73423),
                K = o(83339),
                D = o(74007),
                I = o(75654);

            function E(e) {
                var l, o, n, i, r, s, d, u, f, h, g, m, p, x, y = e.website,
                    b = (0, v.ac)("(max-width: 1023px)"),
                    N = (0, v.ac)("(max-width: 767px)"),
                    E = (0, c.useState)(!1),
                    O = E[0],
                    T = E[1],
                    z = (0, c.useState)("#FFFFFF"),
                    B = z[0],
                    Q = z[1],
                    $ = (0, c.useState)("#000000"),
                    V = $[0],
                    H = $[1],
                    U = (0, c.useState)(null),
                    q = U[0],
                    G = U[1],
                    Y = (0, c.useState)(!1),
                    J = Y[0],
                    X = Y[1],
                    ee = (0, c.useState)({
                        combine: !1
                    }),
                    le = ee[0],
                    oe = ee[1],
                    ne = (0, c.useState)(null),
                    te = ne[0],
                    ie = ne[1],
                    re = (0, c.useState)(!1),
                    ae = re[0],
                    se = re[1],
                    de = (0, w.useRouter)(),
                    ce = (0, c.useRef)(null),
                    ue = (0, c.useRef)(null),
                    ve = null === y || void 0 === y || null === (l = y.pages) || void 0 === l ? void 0 : l.find((function(e) {
                        return !e.slug && e.default
                    })),
                    fe = null === y || void 0 === y ? void 0 : y.header,
                    he = null === (n = null === (o = y.pages) || void 0 === o ? void 0 : o.filter((function(e) {
                        return (!0 === e.showOnHeader || void 0 === e.showOnHeader) && null !== e.slug
                    }))) || void 0 === n ? void 0 : n.map((function(e) {
                        var l = {
                            href: "/".concat(e.slug || ""),
                            name: e.label,
                            current: de.asPath === "/".concat(e.slug || "") || de.asPath.includes("/".concat(e.slug, "/")),
                            type: e.type,
                            forceRender: e.forceRender
                        };
                        return "parent" === l.type && (l.nests = y.pages.filter((function(l) {
                            var o;
                            return l.Parent === e._id || (null === (o = l.Parent) || void 0 === o ? void 0 : o._id) === e._id
                        })).map((function(l) {
                            return {
                                href: "/".concat(e.slug, "/").concat(l.slug || ""),
                                name: l.label,
                                current: de.asPath === "/".concat(e.slug, "/").concat(l.slug || ""),
                                forceRender: l.forceRender
                            }
                        })), 0 === l.nests.length) ? null : l
                    })).filter((function(e) {
                        return null !== e && "nested" !== e.type
                    })),
                    ge = (null === le || void 0 === le ? void 0 : le.combine) && (!(null === fe || void 0 === fe ? void 0 : fe.sticky) || !J),
                    me = null === fe || void 0 === fe ? void 0 : fe.style,
                    pe = (null === fe || void 0 === fe ? void 0 : fe.navStyle) || "default",
                    xe = function() {
                        return (null === te || void 0 === te ? void 0 : te.length) > 0 && ae && (0, a.jsx)("div", {
                            className: "hidden lg:flex items-center flex-shrink-0 gap-4",
                            children: null === te || void 0 === te ? void 0 : te.map((function(e, l) {
                                return (0, a.jsx)(j.Z, {
                                    button: e,
                                    block: fe,
                                    website: y,
                                    className: "xl xl:!text-2xl !py-1.5 flex"
                                }, "banner-button-".concat(l))
                            }))
                        })
                    },
                    ye = function(e) {
                        return (0, a.jsx)("ul", {
                            className: (0, v.AK)("lg:flex items-center gap-x-4 gap-y-2 flex-wrap", "full-center" !== me ? "justify-end" : "", !e && "hidden"),
                            children: Array.isArray(y.social) && y.social.map((function(e, l) {
                                var o = I.W.find((function(l) {
                                        return l.id === e.type
                                    })),
                                    n = e.link;
                                return "custom" !== e.type && (n = (n = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === o || void 0 === o ? void 0 : o.host, ""), n = "https://".concat(null === o || void 0 === o ? void 0 : o.host, "/").concat(n)), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(k(), {
                                        href: n,
                                        children: (0, a.jsx)("a", {
                                            target: "_blank",
                                            children: (0, a.jsx)(I.Q, {
                                                icon: e,
                                                color: ge ? le.textColor : V,
                                                settings: y.socialSettings
                                            })
                                        })
                                    })
                                }, "social-icon-header-".concat(l))
                            }))
                        })
                    },
                    be = function(e) {
                        var l, o, n, i;
                        return (null === fe || void 0 === fe ? void 0 : fe.showLogo) && "branding" === (null === fe || void 0 === fe ? void 0 : fe.source) && (null === y || void 0 === y ? void 0 : y.logo) ? (0, a.jsx)(k(), {
                            href: "/",
                            children: (0, a.jsxs)("a", {
                                className: "max-w-full overflow-hidden grid",
                                target: (null === ve || void 0 === ve ? void 0 : ve.forceRender) ? "_parent" : "_self",
                                children: [(0, v.QW)(null === y || void 0 === y ? void 0 : y.logo) && (0, a.jsx)("img", {
                                    className: "hidden lg:block transition-all object-contain",
                                    src: (0, v.QW)(null === y || void 0 === y ? void 0 : y.logo),
                                    alt: null === fe || void 0 === fe ? void 0 : fe.siteName,
                                    style: {
                                        height: ((null === fe || void 0 === fe || null === (l = fe.logoDesktop) || void 0 === l ? void 0 : l.height) || 80) + "px"
                                    }
                                }), (0, v.QW)(null === y || void 0 === y ? void 0 : y.logo) && (0, a.jsx)("img", {
                                    className: "lg:hidden transition-all object-contain",
                                    src: (0, v.QW)(null === y || void 0 === y ? void 0 : y.logo),
                                    alt: null === fe || void 0 === fe ? void 0 : fe.siteName,
                                    style: {
                                        height: ((null === fe || void 0 === fe || null === (o = fe.logoMobile) || void 0 === o ? void 0 : o.height) || 40) + "px"
                                    }
                                })]
                            })
                        }) : (null === fe || void 0 === fe ? void 0 : fe.showLogo) && "upload" === (null === fe || void 0 === fe ? void 0 : fe.source) && (null === fe || void 0 === fe ? void 0 : fe.customLogo) ? (0, a.jsx)(k(), {
                            href: "/",
                            children: (0, a.jsxs)("a", {
                                className: "max-w-full overflow-hidden grid",
                                target: (null === ve || void 0 === ve ? void 0 : ve.forceRender) ? "_parent" : "_self",
                                children: [(0, v.QW)(null === fe || void 0 === fe ? void 0 : fe.customLogo) && (0, a.jsx)("img", {
                                    className: "hidden lg:block transition-all object-contain",
                                    src: (0, v.QW)(null === fe || void 0 === fe ? void 0 : fe.customLogo),
                                    alt: null === fe || void 0 === fe ? void 0 : fe.siteName,
                                    style: {
                                        height: ((null === fe || void 0 === fe || null === (n = fe.logoDesktop) || void 0 === n ? void 0 : n.height) || 80) + "px"
                                    }
                                }), (0, v.QW)(null === fe || void 0 === fe ? void 0 : fe.customLogo) && (0, a.jsx)("img", {
                                    className: "lg:hidden transition-all object-contain",
                                    src: (0, v.QW)(null === fe || void 0 === fe ? void 0 : fe.customLogo),
                                    alt: null === fe || void 0 === fe ? void 0 : fe.siteName,
                                    style: {
                                        height: ((null === fe || void 0 === fe || null === (i = fe.logoMobile) || void 0 === i ? void 0 : i.height) || 40) + "px"
                                    }
                                })]
                            })
                        }) : (0, a.jsx)(k(), {
                            href: "/",
                            children: (0, a.jsx)("a", {
                                className: "max-w-full overflow-hidden grid",
                                target: (null === ve || void 0 === ve ? void 0 : ve.forceRender) ? "_parent" : "_self",
                                children: (0, a.jsx)("h1", {
                                    className: "heading-small lg:heading-medium overflow-hidden whitespace-nowrap overflow-ellipsis",
                                    style: (0, t.Z)({
                                        color: ge && !e ? le.textColor : V
                                    }, (0, v.j2)(y)),
                                    children: null === fe || void 0 === fe ? void 0 : fe.siteName
                                })
                            })
                        })
                    },
                    je = function(e, l) {
                        var o = (0, v.mR)(l, (null === pe || void 0 === pe ? void 0 : pe.includes("subtle")) ? 10 : 80);
                        return {
                            borderColor: e.current ? l : "transparent",
                            backgroundColor: e.current && "default" !== pe ? o : "transparent",
                            color: e.current && pe.includes("bold") ? (0, v.$O)(l) : "currentColor"
                        }
                    },
                    we = function() {
                        var e;
                        if (0 === (null === he || void 0 === he ? void 0 : he.length)) return (0, a.jsx)(a.Fragment, {});
                        var l = (0, v.h)(B, -10);
                        l !== V && l !== B || (l = (0, v.h)(B, 10));
                        var o = ge ? le.textColor : V;
                        return (0, a.jsx)("ul", {
                            className: (0, v.AK)("hidden items-center flex-wrap", !(null === fe || void 0 === fe || null === (e = fe.menu) || void 0 === e ? void 0 : e.collapse) && "lg:flex", "left" === me && "justify-end", "full-center" === me && "justify-center", "default" === pe ? "gap-x-6" : "gap-x-2"),
                            style: {
                                color: o
                            },
                            children: null === he || void 0 === he ? void 0 : he.map((function(e) {
                                var n;
                                return (0, a.jsx)("li", {
                                    className: (0, v.AK)("default" === pe ? "border-b-2" : "", (null === pe || void 0 === pe ? void 0 : pe.includes("round")) && "rounded-lg"),
                                    style: je(e, o),
                                    children: "parent" === e.type ? (0, a.jsx)(D.Z, {
                                        buttonClassName: (0, v.AK)("inline-flex items-center gap-2", "default" === pe ? "py-1.5" : "py-2 px-3"),
                                        itemsContainerClass: (0, v.AK)("!p-4 !pr-6 w-max max-w-120 !max-h-[80vh] no-scrollbar", (null === pe || void 0 === pe ? void 0 : pe.includes("square")) && "!rounded-none", "default" === pe && "mt-0.5"),
                                        button: (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("span", {
                                                className: "body-normal whitespace-nowrap",
                                                children: e.name
                                            }), (0, a.jsx)(A.Z, {
                                                className: "w-4 h-4"
                                            })]
                                        }),
                                        itemsContainerStyle: {
                                            backgroundColor: l,
                                            color: o
                                        },
                                        children: null === (n = e.nests) || void 0 === n ? void 0 : n.map((function(e) {
                                            return (0, a.jsx)(C.v.Item, {
                                                children: (0, a.jsx)(k(), {
                                                    className: (0, v.AK)("block py-2 body-normal", "default" === pe ? "border-b-2" : "px-3", (null === pe || void 0 === pe ? void 0 : pe.includes("round")) && "rounded-lg"),
                                                    href: e.href,
                                                    legacyBehavior: !1,
                                                    target: e.forceRender ? "_parent" : "_self",
                                                    style: je(e, o),
                                                    children: e.name
                                                })
                                            }, "page-link-".concat(e.href))
                                        }))
                                    }) : (0, a.jsx)(k(), {
                                        className: (0, v.AK)("block body-normal whitespace-nowrap", "default" === pe ? "py-1.5" : "py-2 px-3"),
                                        legacyBehavior: !1,
                                        href: e.href,
                                        target: e.forceRender ? "_parent" : "_self",
                                        children: e.name
                                    })
                                }, "header-page-link-".concat(e.href))
                            }))
                        })
                    },
                    Ne = function() {
                        var e;
                        return 0 === (null === he || void 0 === he ? void 0 : he.length) ? (0, a.jsx)(a.Fragment, {}) : (null === fe || void 0 === fe || null === (e = fe.menu) || void 0 === e ? void 0 : e.collapse) ? (0, a.jsxs)("button", {
                            className: (0, v.AK)("hidden lg:inline-flex items-center justify-center p-2 rounded-md font-light gap-2 ", O ? "pointer-events-none" : "hover:opacity-80"),
                            style: {
                                color: ge ? le.textColor : V
                            },
                            onClick: function() {
                                return T(!0)
                            },
                            children: ["Menu ", ke()]
                        }) : null
                    },
                    ke = function() {
                        var e, l = "block h-5 w-5";
                        switch (null === fe || void 0 === fe || null === (e = fe.menu) || void 0 === e ? void 0 : e.icon) {
                            case "bars-3-bottom-left":
                                return (0, a.jsx)(L.Z, {
                                    className: l,
                                    "aria-hidden": "true"
                                });
                            case "bars-3-bottom-right":
                                return (0, a.jsx)(R.Z, {
                                    className: l,
                                    "aria-hidden": "true"
                                });
                            case "bars-3-center-left":
                                return (0, a.jsx)(M.Z, {
                                    className: l,
                                    "aria-hidden": "true"
                                });
                            case "bars-2":
                                return (0, a.jsx)(W.Z, {
                                    className: l,
                                    "aria-hidden": "true"
                                });
                            default:
                                return (0, a.jsx)(K.Z, {
                                    className: l,
                                    "aria-hidden": "true"
                                })
                        }
                    },
                    Ce = function(e) {
                        var l, o, n = {
                                none: {
                                    top: "pt-0",
                                    bottom: "pb-0"
                                },
                                small: {
                                    top: "pt-4",
                                    bottom: "pb-4"
                                },
                                medium: {
                                    top: "pt-6",
                                    bottom: "pb-6"
                                },
                                large: {
                                    top: "pt-8",
                                    bottom: "pb-8"
                                }
                            },
                            t = (null === (l = n[null === e || void 0 === e ? void 0 : e.top]) || void 0 === l ? void 0 : l.top) || n.medium.top,
                            i = (null === (o = n[null === e || void 0 === e ? void 0 : e.bottom]) || void 0 === o ? void 0 : o.bottom) || n.medium.bottom;
                        return "".concat(t, " ").concat(i)
                    },
                    Fe = function() {
                        X(window.scrollY > 0)
                    },
                    Ze = function(e) {
                        var l = document.querySelector("[data-combine-with-header]");
                        if (l) {
                            var o = null === l || void 0 === l ? void 0 : l.getAttribute("data-combine-with-header");
                            oe((function(n) {
                                return e < 10 && (null === l || void 0 === l ? void 0 : l.getAttribute("data-text-color")) !== n.textColor && setTimeout((function() {
                                    Ze(e + 1)
                                }), 100 * e), {
                                    combine: !0 === o || "true" === o,
                                    textColor: null === l || void 0 === l ? void 0 : l.getAttribute("data-text-color")
                                }
                            }))
                        } else oe((function(o) {
                            return e < 10 && (!l || (null === l || void 0 === l ? void 0 : l.getAttribute("data-text-color")) !== o.textColor) && setTimeout((function() {
                                Ze(e + 1)
                            }), 15 * e), {
                                combine: !1,
                                textColor: null
                            }
                        }))
                    };
                return (0, c.useEffect)((function() {
                    if (fe) {
                        var e, l, o, n, t, i;
                        if (ie((null === fe || void 0 === fe || null === (e = fe.buttons) || void 0 === e ? void 0 : e.items) || [fe.button]), se((null === fe || void 0 === fe || null === (l = fe.buttons) || void 0 === l ? void 0 : l.items) ? null === fe || void 0 === fe || null === (o = fe.buttons) || void 0 === o ? void 0 : o.enabled : !!fe.button), fe.layers)
                            if ("custom" === fe.layers.palette) {
                                var r;
                                Q((null === (r = fe.layers.overlay) || void 0 === r ? void 0 : r.color1) || "#FFFFFF")
                            } else {
                                var a, s, d = (null === y || void 0 === y || null === (a = y.colorPalette) || void 0 === a ? void 0 : a.Palette) || (null === y || void 0 === y ? void 0 : y.colorPalette);
                                Q((0, v.ow)(d, null === (s = fe.layers) || void 0 === s ? void 0 : s.palette, "color"))
                            }
                        else Q(fe.background || "#FFFFFF");
                        if (null === fe.siteName || void 0 === fe.siteName) fe.siteName = null === y || void 0 === y || null === (i = y.Business) || void 0 === i ? void 0 : i.name;
                        fe.style || (fe.style = "left"), (null === (n = fe.logoDesktop) || void 0 === n ? void 0 : n.height) || (fe.logoDesktop = {
                            height: 80
                        }), (null === (t = fe.logoMobile) || void 0 === t ? void 0 : t.height) || (fe.logoMobile = {
                            height: 40
                        }), fe.sticky && (null === ce || void 0 === ce ? void 0 : ce.current) && (document.documentElement.style.scrollPaddingTop = ce.current.clientHeight + "px")
                    }
                }), [fe]), (0, c.useEffect)((function() {
                    Ze(0)
                }), [de.asPath]), (0, c.useEffect)((function() {
                    B && H((0, v.$O)(B))
                }), [B]), (0, c.useEffect)((function() {
                    T(!1), G(null)
                }), [de.asPath, b]), (0, c.useEffect)((function() {
                    return window.addEventListener("scroll", Fe),
                        function() {
                            window.removeEventListener("scroll", Fe)
                        }
                }), []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("header", {
                        id: "website-header",
                        ref: ce,
                        className: (0, v.AK)("!z-[2000]", (null === fe || void 0 === fe ? void 0 : fe.sticky) ? "sticky top-0 transition-colors" : "", (null === fe || void 0 === fe ? void 0 : fe.sticky) && !le.combine && J || (null === fe || void 0 === fe ? void 0 : fe.sticky) && J ? "shadow-md" : ""),
                        style: {
                            backgroundColor: ge ? "transparent" : B,
                            color: ge ? le.textColor : V
                        },
                        children: (0, a.jsx)("div", {
                            className: (0, v.AK)("grid items-center lg:gap-6 xl:gap-10 mx-auto", Ce(null === fe || void 0 === fe ? void 0 : fe.spacing), (null === fe || void 0 === fe ? void 0 : fe.fullWidth) ? "px-6 lg:px-12" : "container"),
                            style: function(e) {
                                return "center" === e ? {
                                    gridTemplateColumns: "1fr auto 1fr"
                                } : "full-center" === e ? (null === he || void 0 === he ? void 0 : he.length) > 6 ? {
                                    gridTemplateColumns: "1fr 4fr 1fr"
                                } : {
                                    gridTemplateColumns: "1fr auto 1fr"
                                } : {
                                    gridTemplateColumns: "auto auto auto"
                                }
                            }(me),
                            children: "center" === me ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)("div", {
                                    className: "lg:w-auto whitespace-nowrap",
                                    children: [we(), Ne()]
                                }), (0, a.jsx)("div", {
                                    className: "flex justify-center truncate",
                                    children: be()
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-end",
                                    children: [(0, a.jsxs)("div", {
                                        className: "hidden lg:flex item-center gap-10",
                                        children: [(null === fe || void 0 === fe ? void 0 : fe.showSocial) && ye(), ae && xe()]
                                    }), (0, a.jsxs)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: [(ae || (null === he || void 0 === he ? void 0 : he.length) > 0 || (null === fe || void 0 === fe ? void 0 : fe.showSocial) && Array.isArray(null === y || void 0 === y ? void 0 : y.social) && (null === y || void 0 === y || null === (i = y.social) || void 0 === i ? void 0 : i.length) > 1) && (0, a.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: ge ? le.textColor : V
                                            },
                                            onClick: function() {
                                                return T(!0)
                                            },
                                            children: ke()
                                        }), !ae && 0 === (null === he || void 0 === he ? void 0 : he.length) && (null === fe || void 0 === fe ? void 0 : fe.showSocial) && Array.isArray(null === y || void 0 === y ? void 0 : y.social) && 1 === (null === y || void 0 === y || null === (r = y.social) || void 0 === r ? void 0 : r.length) && ye(!0)]
                                    })]
                                })]
                            }) : "full-center" === me ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "lg:w-auto whitespace-nowrap",
                                    children: (null === fe || void 0 === fe ? void 0 : fe.showSocial) && ye()
                                }), (0, a.jsxs)("div", {
                                    className: "flex-1 flex flex-col items-center gap-4 whitespace-nowrap",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center gap-4 w-full truncate",
                                        children: [be(), Ne()]
                                    }), we()]
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-end whitespace-nowrap",
                                    children: [ae && xe(), (0, a.jsxs)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: [(ae || (null === he || void 0 === he ? void 0 : he.length) > 0 || (null === fe || void 0 === fe ? void 0 : fe.showSocial) && Array.isArray(null === y || void 0 === y ? void 0 : y.social) && (null === y || void 0 === y || null === (s = y.social) || void 0 === s ? void 0 : s.length) > 1) && (0, a.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: ge ? le.textColor : V
                                            },
                                            onClick: function() {
                                                return T(!0)
                                            },
                                            children: ke()
                                        }), !ae && 0 === (null === he || void 0 === he ? void 0 : he.length) && (null === fe || void 0 === fe ? void 0 : fe.showSocial) && Array.isArray(null === y || void 0 === y ? void 0 : y.social) && 1 === (null === y || void 0 === y || null === (d = y.social) || void 0 === d ? void 0 : d.length) && ye(!0)]
                                    })]
                                })]
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "col-span-2 lg:col-span-1 truncate",
                                    children: be()
                                }), (0, a.jsxs)("div", {
                                    className: "hidden lg:flex item-center justify-end gap-10 lg:col-span-2",
                                    children: [Ne(), we(), (null === fe || void 0 === fe ? void 0 : fe.showSocial) && ye(), ae && xe()]
                                }), (0, a.jsxs)("div", {
                                    className: "ml-auto lg:hidden",
                                    children: [(ae || (null === he || void 0 === he ? void 0 : he.length) > 0 || (null === fe || void 0 === fe ? void 0 : fe.showSocial) && Array.isArray(null === y || void 0 === y ? void 0 : y.social) && (null === y || void 0 === y || null === (u = y.social) || void 0 === u ? void 0 : u.length) > 1) && (0, a.jsx)("button", {
                                        className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                        style: {
                                            color: ge ? le.textColor : V
                                        },
                                        onClick: function() {
                                            return T(!0)
                                        },
                                        children: ke()
                                    }), !ae && 0 === (null === he || void 0 === he ? void 0 : he.length) && (null === fe || void 0 === fe ? void 0 : fe.showSocial) && Array.isArray(null === y || void 0 === y ? void 0 : y.social) && 1 === (null === y || void 0 === y || null === (f = y.social) || void 0 === f ? void 0 : f.length) && ye(!0)]
                                })]
                            })
                        })
                    }), (0, a.jsx)(F.u, {
                        show: !!O,
                        as: "div",
                        children: (0, a.jsxs)(Z.V, {
                            className: "relative z-[30000] h-full",
                            initialFocus: ue,
                            onClose: function() {
                                return T(!1)
                            },
                            children: [(0, a.jsx)(F.u.Child, {
                                as: c.Fragment,
                                enter: "ease-in-out duration-500",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in-out duration-500",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, a.jsx)(Z.V.Overlay, {
                                    className: "fixed inset-0 bg-black bg-opacity-5 transition-opacity"
                                })
                            }), (0, a.jsx)(F.u.Child, {
                                as: c.Fragment,
                                enter: "transform transition transition-all ease-in-out duration-350",
                                enterFrom: (null === fe || void 0 === fe || null === (h = fe.menu) || void 0 === h ? void 0 : h.collapse) && !b ? "left" !== me ? "-translate-x-full" : "translate-x-full" : "translate-x-0 opacity-0",
                                enterTo: "translate-x-0 opacity-100",
                                leave: "transform transition transition-all ease-in-out duration-350",
                                leaveFrom: "translate-x-0 opacity-100",
                                leaveTo: (null === fe || void 0 === fe || null === (g = fe.menu) || void 0 === g ? void 0 : g.collapse) && !b ? "left" !== me ? "-translate-x-full" : "translate-x-full" : "translate-x-0 opacity-0",
                                children: (0, a.jsx)(Z.V.Panel, {
                                    className: (0, v.AK)("fixed flex flex-col shadow-lg", (null === fe || void 0 === fe || null === (m = fe.menu) || void 0 === m ? void 0 : m.collapse) && !b ? "left" !== me ? "top-0 left-0 bottom-0 w-80" : "top-0 bottom-0 right-0 w-80" : (!ae || 0 !== (null === he || void 0 === he ? void 0 : he.length) || (null === fe || void 0 === fe ? void 0 : fe.showSocial)) && !(0 === (null === he || void 0 === he ? void 0 : he.length) && (null === fe || void 0 === fe ? void 0 : fe.showSocial) && Array.isArray(null === y || void 0 === y ? void 0 : y.social) && (null === y || void 0 === y ? void 0 : y.social.length) > 1) && (ae || fe.showSocial || 1 !== he.length) && (1 !== (null === he || void 0 === he ? void 0 : he.length) || !ae && !fe.showSocial) ? "inset-0 h-full" : "top-0 left-0 right-0"),
                                    style: {
                                        backgroundColor: B,
                                        color: V
                                    },
                                    children: (0, a.jsxs)("div", {
                                        ref: ue,
                                        className: (0, v.AK)("flex-1 flex flex-col h-full mx-auto pb-6", (null === fe || void 0 === fe ? void 0 : fe.fullWidth) ? "w-full px-6" : "container"),
                                        children: [(0, a.jsxs)("div", {
                                            className: (0, v.AK)("items-center", Ce(null === fe || void 0 === fe ? void 0 : fe.spacing), "left" !== me ? "grid" : "flex justify-between"),
                                            style: "left" !== me ? {
                                                gridTemplateColumns: "1fr auto 1fr"
                                            } : {},
                                            children: [
                                                ["center", "full-center"].includes(me) && (0, a.jsx)("div", {}), (0, a.jsx)("div", {
                                                    className: "lg:invisible",
                                                    children: be(!0)
                                                }), (0, a.jsx)("div", {
                                                    className: "ml-auto",
                                                    children: (0, a.jsx)("button", {
                                                        className: "inline-flex items-center justify-center p-2 rounded-md outline-none",
                                                        style: {
                                                            color: V
                                                        },
                                                        onClick: function() {
                                                            return T(!1)
                                                        },
                                                        children: (0, a.jsx)(S.Z, {
                                                            className: "block h-5 w-5",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })
                                            ]
                                        }), (null === he || void 0 === he ? void 0 : he.length) > 0 && (0, a.jsxs)("div", {
                                            className: "flex-1 py-6 overflow-auto",
                                            children: [(0, a.jsx)(F.u, {
                                                as: "div",
                                                show: !q,
                                                enter: "transition-opacity",
                                                enterFrom: "opacity-0",
                                                enterTo: "opacity-100",
                                                children: (0, a.jsx)("ul", {
                                                    className: (0, v.AK)("flex flex-col justify-center lg:justify-start gap-3 w-full", b && ["center", "full-center"].includes(me) ? "text-center" : ""),
                                                    style: (0, t.Z)({
                                                        color: V
                                                    }, (0, v.SV)(y)),
                                                    children: 1 === he.length && "parent" === he[0].type ? (0, a.jsxs)(a.Fragment, {
                                                        children: [(0, a.jsx)("li", {
                                                            className: "text-xl lg:!text-sm font-medium py-2",
                                                            style: {
                                                                borderColor: he[0].current ? "".concat(V) : "transparent"
                                                            },
                                                            children: (0, a.jsx)("span", {
                                                                className: "block w-full",
                                                                children: he[0].name
                                                            })
                                                        }, "page-link-".concat(he[0].href)), null === (p = he[0].nests) || void 0 === p ? void 0 : p.map((function(e) {
                                                            return (0, a.jsx)("li", {
                                                                className: (0, v.AK)("relative body-large py-2", "default" !== pe ? "px-3" : "", ["center", "full-center"].includes(me) && "default" === pe ? "after:left-1/2 after:-translate-x-1/2" : "", e.current && "default" === pe ? "active-menu-item" : ""),
                                                                style: je(e, V),
                                                                children: (0, a.jsx)(k(), {
                                                                    className: "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior: !1,
                                                                    target: e.forceRender ? "_parent" : "_self",
                                                                    children: e.name
                                                                })
                                                            }, "page-link-".concat(e.href))
                                                        }))]
                                                    }) : (0, a.jsx)(a.Fragment, {
                                                        children: null === he || void 0 === he ? void 0 : he.map((function(e) {
                                                            return (0, a.jsx)("li", {
                                                                className: (0, v.AK)("relative body-large lg:!text-body py-2", "default" !== pe ? "px-3" : "", ["center", "full-center"].includes(me) && "default" === pe ? "after:left-1/2 after:-translate-x-1/2" : "", e.current && "default" === pe ? "active-menu-item" : ""),
                                                                style: je(e, V),
                                                                children: "parent" === e.type && e.nests.length > 0 ? (0, a.jsxs)("button", {
                                                                    className: "inline-flex items-center gap-2",
                                                                    onClick: function() {
                                                                        return G(e.nests)
                                                                    },
                                                                    children: [(0, a.jsx)("span", {
                                                                        children: e.name
                                                                    }), (0, a.jsx)(P.Z, {
                                                                        className: "w-4 h-4",
                                                                        "aria-hidden": "true"
                                                                    })]
                                                                }) : (0, a.jsx)(k(), {
                                                                    className: "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior: !1,
                                                                    target: e.forceRender ? "_parent" : "_self",
                                                                    children: e.name
                                                                })
                                                            }, "page-link-".concat(e.href))
                                                        }))
                                                    })
                                                })
                                            }), (0, a.jsx)(F.u, {
                                                as: "div",
                                                show: !!q,
                                                enter: "transition-opacity",
                                                enterFrom: "opacity-0",
                                                enterTo: "opacity-100",
                                                children: (0, a.jsx)("ul", {
                                                    className: (0, v.AK)("flex flex-col justify-center lg:justify-start gap-3 w-full", b && ["center", "full-center"].includes(me) ? "text-center" : ""),
                                                    style: (0, t.Z)({
                                                        color: V
                                                    }, (0, v.SV)(y)),
                                                    children: (0, a.jsxs)(a.Fragment, {
                                                        children: [q && (0, a.jsx)("li", {
                                                            children: (0, a.jsxs)("button", {
                                                                className: (0, v.AK)("flex items-center gap-2 w-full py-2 body-large lg:!text-body", "default" !== pe ? "px-3" : "", b && ["center", "full-center"].includes(me) ? "justify-center" : ""),
                                                                onClick: function() {
                                                                    return G(null)
                                                                },
                                                                children: [(0, a.jsx)(_.Z, {
                                                                    className: "w-4 h-4",
                                                                    "aria-hidden": "true"
                                                                }), (0, a.jsx)("span", {
                                                                    children: "Back"
                                                                })]
                                                            })
                                                        }), null === q || void 0 === q ? void 0 : q.map((function(e) {
                                                            return (0, a.jsx)("li", {
                                                                className: (0, v.AK)("relative body-large lg:!text-body py-2", "default" !== pe ? "px-3" : "", ["center", "full-center"].includes(me) && "default" === pe ? "after:left-1/2 after:-translate-x-1/2" : "", e.current && "default" === pe ? "active-menu-item" : ""),
                                                                style: je(e, V),
                                                                children: (0, a.jsx)(k(), {
                                                                    className: "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior: !1,
                                                                    target: e.forceRender ? "_parent" : "_self",
                                                                    children: e.name
                                                                })
                                                            }, "page-link-".concat(e.href))
                                                        }))]
                                                    })
                                                })
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: (0, v.AK)("flex flex-col max-w-[100vw] lg:hidden", ["center", "full-center"].includes(me) ? "items-center" : "", (null === he || void 0 === he ? void 0 : he.length) > 0 ? "" : "h-full justify-center"),
                                            children: [(null === fe || void 0 === fe ? void 0 : fe.showSocial) && (null === (x = y.social) || void 0 === x ? void 0 : x.length) > 0 && (0, a.jsx)("ul", {
                                                className: "flex items-center gap-x-4 gap-y-2 flex-wrap py-6",
                                                children: Array.isArray(y.social) && y.social.map((function(e, l) {
                                                    var o = I.W.find((function(l) {
                                                            return l.id === e.type
                                                        })),
                                                        n = e.link;
                                                    return "custom" !== e.type && (n = (n = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === o || void 0 === o ? void 0 : o.host, ""), n = "https://".concat(null === o || void 0 === o ? void 0 : o.host, "/").concat(n)), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(k(), {
                                                            href: n,
                                                            children: (0, a.jsx)("a", {
                                                                target: "_blank",
                                                                children: (0, a.jsx)(I.Q, {
                                                                    icon: e,
                                                                    color: ge && !N ? le.textColor : V,
                                                                    settings: y.socialSettings
                                                                })
                                                            })
                                                        })
                                                    }, "social-icon-header-".concat(l))
                                                }))
                                            }), (null === te || void 0 === te ? void 0 : te.length) > 0 && ae && (0, a.jsx)("div", {
                                                className: (0, v.AK)("flex items-center flex-shrink-0 flex-wrap gap-4", ["center", "full-center"].includes(me) ? "items-center justify-center" : ""),
                                                children: null === te || void 0 === te ? void 0 : te.map((function(e, l) {
                                                    return (0, a.jsx)(j.Z, {
                                                        button: e,
                                                        block: fe,
                                                        website: y,
                                                        className: (0, v.AK)("xl !font-normal !py-1.5", ["center", "full-center"].includes(me) ? "text-center" : "")
                                                    }, "banner-button-".concat(l))
                                                }))
                                            }), (null === fe || void 0 === fe ? void 0 : fe.button) && (0, a.jsx)("div", {
                                                className: "py-6",
                                                children: (0, a.jsx)(j.Z, {
                                                    className: "xl !font-normal !py-1.5",
                                                    button: fe.button,
                                                    block: fe,
                                                    website: y
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })
                    })]
                })
            }
            var O, T = o(165),
                z = o(40782),
                B = o(83457),
                Q = o.n(B),
                $ = {
                    success: {
                        color: "bg-green-50 text-green-800",
                        icon: (0, a.jsx)(m.Z, {
                            className: "h-5 w-5 text-green-400"
                        }),
                        progress: "bg-green-700"
                    },
                    error: {
                        color: "bg-red-50 text-red-800",
                        icon: (0, a.jsx)(p.Z, {
                            className: "h-5 w-5 text-red-400"
                        }),
                        progress: "bg-red-700"
                    },
                    info: {
                        color: "bg-indigo-50 text-indigo-800",
                        icon: (0, a.jsx)(x.Z, {
                            className: "h-5 w-5 text-indigo-400"
                        }),
                        progress: "bg-indigo-700"
                    },
                    warning: {
                        color: "bg-yellow-50 text-yellow-800",
                        icon: (0, a.jsx)(y.Z, {
                            className: "h-5 w-5 text-yellow-400"
                        }),
                        progress: "bg-yellow-700"
                    },
                    default: {
                        color: "bg-gray-50 text-gray-800",
                        icon: (0, a.jsx)(m.Z, {
                            className: "h-5 w-5 text-gray-400"
                        }),
                        progress: "bg-gray-700"
                    },
                    dark: {
                        color: "bg-white-600 font-gray-300",
                        icon: (0, a.jsx)(m.Z, {
                            className: "h-5 w-5 text-gray-400"
                        }),
                        progress: "bg-gray-300"
                    }
                },
                V = [],
                H = function(e) {
                    var l, s, h, m, p, x, y, j, w, N, k, C, F, Z, A, S, P, _, L, R, M, W, K, D, I, B, H, U, q = e.children,
                        G = e.website,
                        Y = e.page,
                        J = e.apiUrl,
                        X = e.ipAddress,
                        ee = e.hideFooter,
                        le = g().useRouter(),
                        oe = (0, c.useState)(0),
                        ne = oe[0],
                        te = oe[1],
                        ie = (0, c.useState)(!1),
                        re = ie[0],
                        ae = ie[1],
                        se = (0, c.useState)(null),
                        de = se[0],
                        ce = se[1],
                        ue = (0, c.useState)(0),
                        ve = ue[0],
                        fe = ue[1],
                        he = new v.bl(J),
                        ge = null !== (U = G.seo) && void 0 !== U ? U : {},
                        me = ge.headCode,
                        pe = ge.footerCode,
                        xe = (0, i.Z)(ge, ["headCode", "footerCode"]),
                        ye = (0, t.Z)({
                            globalHeadCode: me,
                            globalFooterCode: pe
                        }, xe, null === Y || void 0 === Y ? void 0 : Y.seo),
                        be = (0, c.useCallback)(function() {
                            var e = (0, n.Z)((function(e) {
                                return (0, r.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return 0 !== e.target.scrollTop && 0 !== ne || te(e.target.scrollTop), re ? [3, 2] : [4, we("scroll")];
                                        case 1:
                                            l.sent(), ae(!0), l.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(l) {
                                return e.apply(this, arguments)
                            }
                        }(), [re]),
                        je = c.Children.map(q, (function(e) {
                            return c.isValidElement(e) ? c.cloneElement(e, (0, t.Z)({}, e.props)) : e
                        })),
                        we = function() {
                            var e = (0, n.Z)((function(e) {
                                var l, n, t, i, a, s, d, c, u, v, h, g, m;
                                return (0, r.__generator)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return d = JSON.parse(localStorage.getItem("user") || "{}"), c = Math.abs(new Date - new Date(d.date)) / 36e5, d && d.ip && !(c > 24) && d.hash ? [3, 4] : (u = X || "0.0.0.0", window.unsupportedBrowser || X ? [3, 3] : [4, o.e(6216).then(o.bind(o, 76216))]);
                                        case 1:
                                            return [4, r.sent().publicIpv4()];
                                        case 2:
                                            u = r.sent(), r.label = 3;
                                        case 3:
                                            v = (new Date).getTime(), h = (new Date).getTime(), g = new Date(h - h % 864e5), localStorage.setItem("user", JSON.stringify({
                                                ip: u,
                                                date: g.toISOString(),
                                                hash: v
                                            })), d.ip = u, d.hash = v, r.label = 4;
                                        case 4:
                                            m = {
                                                idWebsite: G._id,
                                                url: document.location.pathname,
                                                event: e,
                                                platform: (null === window || void 0 === window || null === (l = window.navigator) || void 0 === l ? void 0 : l.platform) ? null === window || void 0 === window || null === (n = window.navigator) || void 0 === n || null === (t = n.platform) || void 0 === t ? void 0 : t.toString() : (null === window || void 0 === window || null === (i = window.navigator) || void 0 === i ? void 0 : i.oscpu) ? null === window || void 0 === window || null === (a = window.navigator) || void 0 === a ? void 0 : a.oscpu : "bot",
                                                title: document.title.split(" - ")[0] || "Home",
                                                device: /bot|googlebot|crawler|spider|robot|crawling/i.test(null === window || void 0 === window || null === (s = window.navigator) || void 0 === s ? void 0 : s.userAgent) ? "bot" : f.tq ? "mobile" : "desktop",
                                                ip: d.ip,
                                                hash: d.hash
                                            }, V.find((function(e) {
                                                return e.event === m.event
                                            })) || V.push(m), r.label = 5;
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(l) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, c.useEffect)((function() {
                        return ve < 6 && (clearInterval(O), O = setInterval((0, n.Z)((function() {
                                return (0, r.__generator)(this, (function(e) {
                                    return we("ping"), fe(ve + 1), [2]
                                }))
                            })), 3e4)), de !== le.asPath && (we("open"), ce(le.asPath), fe(0), ae(!1)),
                            function() {
                                ve >= 6 && fe(0), clearInterval(O), ae(!1)
                            }
                    }), [le, ve]), (0, c.useEffect)((function() {
                        var e, l = function() {
                            var e = (0, n.Z)((function() {
                                var e;
                                return (0, r.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return (null === V || void 0 === V ? void 0 : V.length) > 0 && (e = V.shift()) ? [4, he.post("/website/register-user-action", e)] : [3, 2];
                                        case 1:
                                            l.sent(), l.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        return l(), e = setInterval((function() {
                                l()
                            }), 500), document.querySelector("body").addEventListener("scroll", be), window.addEventListener("scroll", be),
                            function() {
                                clearInterval(e), document.querySelector("body").removeEventListener("scroll", be), window.removeEventListener("scroll", be)
                            }
                    }), [re]), (0, c.useEffect)((function() {
                        var e = function() {
                            window.scrollTo(0, 0)
                        };
                        return le.events.on("routeChangeComplete", e),
                            function() {
                                le.events.off("routeChangeComplete", e)
                            }
                    }), []), (0, c.useEffect)((function() {
                        var e;
                        window.cnDisableCache = !0;
                        var l = (0, b.getCookie)("pt");
                        l && (null === le || void 0 === le || null === (e = le.query) || void 0 === e ? void 0 : e.pt) !== l && "public" !== G.status && le.replace("".concat(le.asPath, "?pt=").concat(l), void 0, {
                            shallow: !0
                        })
                    }), [le, G]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(d(), {
                            children: [(0, a.jsx)("link", {
                                rel: "icon",
                                href: (null === (l = G.favicon) || void 0 === l ? void 0 : l.url) || "/favicon.ico"
                            }), (0, a.jsx)("title", {
                                children: (null === ye || void 0 === ye ? void 0 : ye.title) ? ye.title : (null === (s = G.Business) || void 0 === s ? void 0 : s.name) + " | " + (null === (h = G.Business) || void 0 === h || null === (m = h.type) || void 0 === m ? void 0 : m.name)
                            }), (0, a.jsx)("meta", {
                                httpEquiv: "Content-Language",
                                content: (null === G || void 0 === G ? void 0 : G.language) || "en"
                            }), (0, a.jsx)("meta", {
                                name: "description",
                                content: (null === ye || void 0 === ye ? void 0 : ye.description) ? ye.description : ""
                            }), (0, a.jsx)("meta", {
                                name: "keywords",
                                content: (null === ye || void 0 === ye ? void 0 : ye.keywords) ? ye.keywords : (null === G || void 0 === G || null === (p = G.Business) || void 0 === p || null === (x = p.name) || void 0 === x ? void 0 : x.split(" ").join(",")) + "," + (null === G || void 0 === G || null === (y = G.Business) || void 0 === y || null === (j = y.type) || void 0 === j || null === (w = j.name) || void 0 === w ? void 0 : w.split(" ").join(","))
                            }), (0, a.jsx)("meta", {
                                property: "og:title",
                                content: (null === ye || void 0 === ye ? void 0 : ye.title) ? ye.title : (null === (N = G.Business) || void 0 === N ? void 0 : N.name) + " | " + (null === (k = G.Business) || void 0 === k || null === (C = k.type) || void 0 === C ? void 0 : C.name)
                            }), (0, a.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, a.jsx)("meta", {
                                property: "og:description",
                                content: (null === ye || void 0 === ye ? void 0 : ye.description) ? ye.description : ""
                            }), (null === ye || void 0 === ye || null === (F = ye.Image) || void 0 === F ? void 0 : F.url) && (0, a.jsx)("meta", {
                                property: "og:image",
                                content: ye.Image.url
                            }), (null === ye || void 0 === ye ? void 0 : ye.globalHeadCode) && (0, u.ZP)(ye.globalHeadCode), (null === ye || void 0 === ye ? void 0 : ye.headCode) && (0, u.ZP)(ye.headCode), (null === G || void 0 === G || null === (Z = G.fonts) || void 0 === Z || null === (A = Z.head) || void 0 === A ? void 0 : A.name) && (null === G || void 0 === G || null === (S = G.fonts) || void 0 === S || null === (P = S.body) || void 0 === P ? void 0 : P.name) && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("link", {
                                    rel: "preconnect",
                                    href: "https://fonts.googleapis.com"
                                }), (0, a.jsx)("link", {
                                    rel: "preconnect",
                                    href: "https://fonts.gstatic.com",
                                    crossOrigin: !0
                                }), (0, a.jsx)("link", {
                                    href: "https://fonts.googleapis.com/css2?family=".concat(null === G || void 0 === G || null === (_ = G.fonts) || void 0 === _ || null === (L = _.head) || void 0 === L || null === (R = L.name) || void 0 === R ? void 0 : R.replace(/ /gi, "+"), ":wght@").concat(null === G || void 0 === G || null === (M = G.fonts) || void 0 === M || null === (W = M.head) || void 0 === W ? void 0 : W.weight, "&family=").concat(null === G || void 0 === G || null === (K = G.fonts) || void 0 === K || null === (D = K.body) || void 0 === D || null === (I = D.name) || void 0 === I ? void 0 : I.replace(/ /gi, "+"), ":wght@").concat(null === G || void 0 === G || null === (B = G.fonts) || void 0 === B || null === (H = B.body) || void 0 === H ? void 0 : H.weight, "&display=swap"),
                                    rel: "stylesheet"
                                })]
                            }), (null === G || void 0 === G ? void 0 : G.searchIndexing) ? (0, a.jsx)("meta", {
                                name: "robots",
                                content: "all"
                            }) : (0, a.jsx)("meta", {
                                name: "robots",
                                content: "noindex,nofollow"
                            })]
                        }), (0, a.jsx)(Q(), {
                            color: function() {
                                var e, l, o, n, t = (null === G || void 0 === G || null === (e = G.colorPalette) || void 0 === e || null === (l = e.Palette) || void 0 === l ? void 0 : l.colors) || (null === G || void 0 === G || null === (o = G.colorPalette) || void 0 === o ? void 0 : o.colors) || [];
                                return 0 === (null === t || void 0 === t ? void 0 : t.length) ? "#333" : (null === (n = t[0]) || void 0 === n ? void 0 : n.accent) || "#333"
                            }(),
                            startPosition: .3,
                            options: {
                                trickle: !0,
                                trickleSpeed: 100
                            }
                        }), (0, a.jsxs)("div", {
                            id: "main-body",
                            onScroll: function(e) {
                                return be(e)
                            },
                            className: "min-h-full w-full flex flex-col smooth-scroll hyphen",
                            style: (0, v.SV)(G),
                            children: [(0, a.jsx)(E, {
                                scrollY: ne,
                                website: G
                            }), je, !ee && (0, a.jsx)(T.default, {
                                website: G
                            }), (0, a.jsx)(z.ToastContainer, {
                                toastClassName: function(e) {
                                    var l = e.type;
                                    return $[l || "default"].color + " relative p-4 rounded-md justify-between overflow-hidden cursor-pointer text-sm font-medium my-2.5 shadow-md flex"
                                },
                                bodyClassName: function() {
                                    return "flex text-sm font-white font-medium items-center w-full max-w-xs"
                                },
                                icon: function(e) {
                                    var l = e.type;
                                    return $[l || "default"].icon
                                },
                                position: "bottom-center",
                                autoClose: 8e3,
                                hideProgressBar: !0,
                                newestOnTop: !0,
                                closeOnClick: !0,
                                rtl: !1,
                                pauseOnFocusLoss: !0,
                                draggable: !0,
                                pauseOnHover: !0,
                                closeButton: !1
                            })]
                        }), (null === ye || void 0 === ye ? void 0 : ye.globalFooterCode) && (0, u.ZP)(ye.globalFooterCode), (null === ye || void 0 === ye ? void 0 : ye.footerCode) && (0, u.ZP)(ye.footerCode)]
                    })
                }
        },
        7004: function(e, l, o) {
            o.d(l, {
                Gc: function() {
                    return i
                },
                U9: function() {
                    return t
                },
                f$: function() {
                    return n
                }
            });
            var n = function(e, l) {
                    if (e) {
                        if ("email" === e.type) return "mailto:" + e.link;
                        if ("phone" === e.type) return "tel:" + e.link;
                        if ("page" === e.type) {
                            var o, n, t, i = null === l || void 0 === l || null === (o = l.pages) || void 0 === o ? void 0 : o.find((function(l) {
                                    return l._id === e.page
                                })),
                                r = (null === i || void 0 === i ? void 0 : i.Parent) ? null === l || void 0 === l || null === (n = l.pages) || void 0 === n ? void 0 : n.find((function(e) {
                                    return e._id === (null === i || void 0 === i ? void 0 : i.Parent)
                                })) : null,
                                a = "";
                            return r && (a += "".concat(r.slug, "/")), a += null !== (t = null === i || void 0 === i ? void 0 : i.slug) && void 0 !== t ? t : "/"
                        }
                        return "section" === e.type ? "#" + e.link : (null === e || void 0 === e || null === (s = e.link) || void 0 === s ? void 0 : s.includes("http")) || (null === e || void 0 === e || null === (d = e.link) || void 0 === d ? void 0 : d.includes("https")) ? e.link : (null === e || void 0 === e ? void 0 : e.link) && "#" !== (null === e || void 0 === e ? void 0 : e.link) ? "/" === (null === e || void 0 === e ? void 0 : e.link) ? "/" : "https://" + (null === e || void 0 === e ? void 0 : e.link) : "#";
                        var s, d
                    }
                    return "/"
                },
                t = function(e, l) {
                    var o, n, t, i = null === l || void 0 === l || null === (o = l.pages) || void 0 === o ? void 0 : o.find((function(l) {
                        return l._id === (null === e || void 0 === e ? void 0 : e.page)
                    }));
                    return (null === e || void 0 === e ? void 0 : e.newPage) ? "_blank" : (null === i || void 0 === i ? void 0 : i.forceRender) ? "_parent" : (null === l || void 0 === l || null === (n = l.button) || void 0 === n ? void 0 : n.target) ? null === l || void 0 === l || null === (t = l.button) || void 0 === t ? void 0 : t.target : "_self"
                },
                i = function(e, l, o) {
                    if ("section" === (null === l || void 0 === l ? void 0 : l.type)) {
                        e.preventDefault();
                        var n = document.getElementById(l.link);
                        n && n.scrollIntoView({
                            behavior: "smooth"
                        })
                    } else "function" === typeof o && o(e)
                }
        },
        16494: function(e, l, o) {
            o.d(l, {
                Z: function() {
                    return i
                }
            });
            var n = o(85893),
                t = o(31996);

            function i(e) {
                var l = e.text,
                    o = e.className,
                    i = e.classNameChild;
                switch (e.variant) {
                    case "form":
                        return (0, n.jsx)("div", {
                            className: "w-full max-w-screen-sm my-8",
                            children: (0, n.jsxs)("div", {
                                className: "animate-pulse flex space-y-8 flex-col",
                                children: [(0, n.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, n.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/2"
                                    }), (0, n.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, n.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-5/6"
                                    })]
                                }), (0, n.jsx)("hr", {}), (0, n.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, n.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, n.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, n.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, n.jsx)("hr", {}), (0, n.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, n.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, n.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, n.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, n.jsx)("hr", {}), (0, n.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, n.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/6"
                                    }), (0, n.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, n.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-3/4"
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"
                                })]
                            })
                        });
                    case "skeleton":
                        return (0, n.jsx)("div", {
                            className: o,
                            children: (0, n.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, n.jsx)("div", {
                                    className: (0, t.AK)("h-6 bg-gray-200 rounded", i)
                                })
                            })
                        });
                    case "table":
                        return (0, n.jsx)("div", {
                            className: "w-full my-8",
                            children: (0, n.jsxs)("div", {
                                className: "animate-pulse flex space-y-2 flex-col",
                                children: [(0, n.jsxs)("div", {
                                    className: "space-x-2 flex",
                                    children: [(0, n.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, n.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, n.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, n.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, n.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, n.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map((function(e) {
                                    return (0, n.jsxs)("div", {
                                        className: "space-x-2 flex",
                                        children: [(0, n.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, n.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, n.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, n.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, n.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, n.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        })]
                                    }, e)
                                }))]
                            })
                        });
                    default:
                        return (0, n.jsxs)("div", {
                            className: (0, t.AK)("inline-flex items-center", o),
                            children: [(0, n.jsxs)("svg", {
                                className: (0, t.AK)("animate-spin ml-1 mr-3 h-4 w-4", o && "text-indigo-600"),
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, n.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, n.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), l || "" === l ? l : "Loading..."]
                        })
                }
            }
        },
        21123: function(e, l, o) {
            o.d(l, {
                Z: function() {
                    return c
                }
            });
            var n = o(26042),
                t = o(69396),
                i = o(85893),
                r = o(67294),
                a = o(31996),
                s = o(29260),
                d = o.n(s);

            function c(e) {
                var l, o, s, c = e.block,
                    u = e.website,
                    v = e.setTextColor,
                    f = e.onChange,
                    h = (0, r.useState)(null),
                    g = h[0],
                    m = h[1],
                    p = [{
                        id: "top-down",
                        value: "180deg",
                        icon: "ArrowDownIcon"
                    }, {
                        id: "left-right",
                        value: "90deg",
                        icon: "ArrowRightIcon"
                    }, {
                        id: "bottom-left-top-right",
                        value: "45deg",
                        icon: "ArrowUpRightIcon"
                    }, {
                        id: "bottom-right-top-left",
                        value: "315deg",
                        icon: "ArrowUpLeftIcon"
                    }];
                return (0, r.useEffect)((function() {
                    if (u && c) {
                        var e, l, o, i, r = (null === u || void 0 === u || null === (e = u.colorPalette) || void 0 === e || null === (l = e.Palette) || void 0 === l ? void 0 : l.colors) || (null === u || void 0 === u || null === (o = u.colorPalette) || void 0 === o ? void 0 : o.colors) || [];
                        if (null === (i = c.layers) || void 0 === i ? void 0 : i.palette)
                            if ("custom" === c.layers.palette) m(null === c || void 0 === c ? void 0 : c.layers);
                            else {
                                var s, d, v, f, h, g, x, y, b = (0, a.dz)(c.layers.palette),
                                    j = {};
                                if ("gradient" === (null === (s = c.layers.overlay) || void 0 === s ? void 0 : s.type)) j = {
                                    type: "gradient",
                                    color1: null === (f = r[b]) || void 0 === f ? void 0 : f.color,
                                    color2: null === (h = r[b % 2 === 0 ? b + 1 : b - 1]) || void 0 === h ? void 0 : h.color,
                                    accent: null === (g = r[b]) || void 0 === g ? void 0 : g.accent
                                };
                                else j = {
                                    type: "solid",
                                    color1: null === (x = r[b]) || void 0 === x ? void 0 : x.color,
                                    accent: null === (y = r[b]) || void 0 === y ? void 0 : y.accent
                                };
                                m((0, t.Z)((0, n.Z)({}, null === c || void 0 === c ? void 0 : c.layers), {
                                    overlay: (0, n.Z)({}, null === c || void 0 === c || null === (d = c.layers) || void 0 === d ? void 0 : d.overlay, j),
                                    foreground: {
                                        accent: (null === (v = r[b]) || void 0 === v ? void 0 : v.accent) || (0, a.$O)(j.color1 || "#FFFFFF")
                                    }
                                }))
                            }
                        else {
                            var w, N, k, C, F, Z, A, S, P, _, L, R = {
                                    type: "solid"
                                },
                                M = {
                                    enabled: !1
                                };
                            if ("object" === typeof(null === c || void 0 === c ? void 0 : c.background))
                                if ("image" === (null === c || void 0 === c || null === (N = c.background) || void 0 === N ? void 0 : N.type)) R.color1 = (null === (C = c.background.overlay) || void 0 === C ? void 0 : C.color.includes("rgba")) ? (0, a.s)(null === (F = c.background.overlay) || void 0 === F ? void 0 : F.color) : null === (Z = c.background.overlay) || void 0 === Z ? void 0 : Z.color, M.enabled = !0, M.media = null === c || void 0 === c || null === (A = c.background) || void 0 === A ? void 0 : A.image, M.positionX = (null === (S = c.background) || void 0 === S ? void 0 : S.imagePositionX) || "50%", M.positionY = (null === (P = c.background) || void 0 === P ? void 0 : P.imagePositionY) || "50%", M.opacity = (null === (_ = c.background) || void 0 === _ || null === (L = _.overlay) || void 0 === L ? void 0 : L.amount) || 50;
                                else if ("gradient" === (null === c || void 0 === c || null === (k = c.background) || void 0 === k ? void 0 : k.type)) {
                                var W, K, D;
                                R.type = "gradient", R.color1 = null === c || void 0 === c || null === (W = c.background) || void 0 === W ? void 0 : W.color, R.color2 = null === c || void 0 === c || null === (K = c.background) || void 0 === K ? void 0 : K.color2, R.direction = null === (D = p.find((function(e) {
                                    var l;
                                    return e.value === (null === c || void 0 === c || null === (l = c.background) || void 0 === l ? void 0 : l.direction)
                                }))) || void 0 === D ? void 0 : D.id
                            } else {
                                var I;
                                R.color1 = null === c || void 0 === c || null === (I = c.background) || void 0 === I ? void 0 : I.color
                            } else R.color1 = (null === c || void 0 === c ? void 0 : c.background) || "#FFFFFF";
                            m({
                                palette: "custom",
                                image: M,
                                overlay: R,
                                foreground: {
                                    accent: (null === (w = r[0]) || void 0 === w ? void 0 : w.accent) || (0, a.$O)(R.color1 || "#FFFFFF")
                                }
                            })
                        }
                    }
                }), [c, u]), (0, r.useEffect)((function() {
                    g && ("function" === typeof v && v((0, a.$O)(g.overlay.color1 || "#FFFFFF")), "function" === typeof f && f(g))
                }), [g]), (0, i.jsx)(i.Fragment, {
                    children: g && (0, i.jsxs)("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0 z-10",
                            style: function() {
                                var e, l, o, n, t, i, r, a = {};
                                "solid" === (null === g || void 0 === g || null === (e = g.overlay) || void 0 === e ? void 0 : e.type) ? a = {
                                    backgroundColor: null === g || void 0 === g || null === (o = g.overlay) || void 0 === o ? void 0 : o.color1
                                }: a = {
                                    backgroundImage: "linear-gradient(".concat(p.find((function(e) {
                                        var l;
                                        return e.id === ((null === g || void 0 === g || null === (l = g.overlay) || void 0 === l ? void 0 : l.direction) || "top-down")
                                    })).value, ", ").concat(null !== (i = null === g || void 0 === g || null === (n = g.overlay) || void 0 === n ? void 0 : n.color1) && void 0 !== i ? i : "#FFFFFF", ", ").concat(null !== (r = null === g || void 0 === g || null === (t = g.overlay) || void 0 === t ? void 0 : t.color2) && void 0 !== r ? r : "#D1D5DB", ")")
                                };
                                if (null === g || void 0 === g || null === (l = g.image) || void 0 === l ? void 0 : l.enabled) {
                                    var s, d, c = isNaN(null === g || void 0 === g || null === (s = g.image) || void 0 === s ? void 0 : s.opacity) ? 50 : null === g || void 0 === g || null === (d = g.image) || void 0 === d ? void 0 : d.opacity;
                                    a.opacity = c / 100
                                }
                                return a
                            }()
                        }), (null === (l = g.image) || void 0 === l ? void 0 : l.enabled) && g.image.media && (0, i.jsx)("div", {
                            className: "absolute inset-0 z-0 bg-white",
                            children: (0, i.jsx)(d(), {
                                priority: (null === c || void 0 === c ? void 0 : c.idx) <= 1,
                                sizes: "(max-width: 480px) 33vw, (max-width: 768px) 50vw, 100vw",
                                alt: "background",
                                src: (null === (o = g.image.media) || void 0 === o ? void 0 : o.preview) || (null === (s = g.image.media) || void 0 === s ? void 0 : s.url) || g.image.media,
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "".concat(g.image.positionX || "center", " ").concat(g.image.positionY || "center")
                            })
                        })]
                    })
                })
            }
        },
        75654: function(e, l, o) {
            o.d(l, {
                Q: function() {
                    return N
                },
                W: function() {
                    return w
                }
            });
            var n = o(85893),
                t = o(31996),
                i = o(71029),
                r = o(85296),
                a = o(44171),
                s = o(43180),
                d = o(10151),
                c = o(36234),
                u = o(66909),
                v = o(49791),
                f = o(28239),
                h = o(48192),
                g = o(94206),
                m = o(95115),
                p = o(13487),
                x = o(23863),
                y = o(14892),
                b = o(62458),
                j = function(e) {
                    var l = e.type,
                        o = e.className,
                        t = e.style;
                    switch (l) {
                        case "angi":
                            return (0, n.jsx)(i.Z, {
                                className: o,
                                style: t
                            });
                        case "behance":
                            return (0, n.jsx)(r.Z, {
                                className: o,
                                style: t
                            });
                        case "dribbble":
                            return (0, n.jsx)(a.Z, {
                                className: o,
                                style: t
                            });
                        case "facebook":
                            return (0, n.jsx)(s.Z, {
                                className: o,
                                style: t
                            });
                        case "homeadvisor":
                            return (0, n.jsx)(d.Z, {
                                className: o,
                                style: t
                            });
                        case "instagram":
                            return (0, n.jsx)(c.Z, {
                                className: o,
                                style: t
                            });
                        case "linkedin":
                            return (0, n.jsx)(u.Z, {
                                className: o,
                                style: t
                            });
                        case "pinterest":
                            return (0, n.jsx)(v.Z, {
                                className: o,
                                style: t
                            });
                        case "tiktok":
                            return (0, n.jsx)(f.Z, {
                                className: o,
                                style: t
                            });
                        case "thumbtack":
                            return (0, n.jsx)(h.Z, {
                                className: o,
                                style: t
                            });
                        case "twitter":
                            return (0, n.jsx)(g.Z, {
                                className: o,
                                style: t
                            });
                        case "twitterold":
                            return (0, n.jsx)(m.Z, {
                                className: o,
                                style: t
                            });
                        case "youtube":
                            return (0, n.jsx)(p.Z, {
                                className: o,
                                style: t
                            });
                        case "medium":
                            return (0, n.jsx)(x.Z, {
                                className: o,
                                style: t
                            });
                        case "threads":
                            return (0, n.jsx)(y.Z, {
                                className: o,
                                style: t
                            });
                        case "telegram":
                            return (0, n.jsx)(b.Z, {
                                className: o,
                                style: t
                            });
                        default:
                            return null
                    }
                },
                w = [{
                    id: "facebook",
                    host: "facebook.com"
                }, {
                    id: "twitter",
                    host: "twitter.com"
                }, {
                    id: "twitterold",
                    host: "twitter.com"
                }, {
                    id: "linkedin",
                    host: "linkedin.com"
                }, {
                    id: "youtube",
                    host: "youtube.com"
                }, {
                    id: "pinterest",
                    host: "pinterest.com"
                }, {
                    id: "instagram",
                    host: "instagram.com"
                }, {
                    id: "tiktok",
                    host: "tiktok.com"
                }, {
                    id: "thumbtack",
                    host: "thumbtack.com"
                }, {
                    id: "homeadvisor",
                    host: "homeadvisor.com"
                }, {
                    id: "angi",
                    host: "angi.com"
                }, {
                    id: "behance",
                    host: "behance.net"
                }, {
                    id: "dribbble",
                    host: "dribbble.com"
                }, {
                    id: "medium",
                    host: "medium.com"
                }, {
                    id: "threads",
                    host: "threads.net"
                }, {
                    id: "telegram",
                    host: "t.me"
                }],
                N = function(e) {
                    var l, o, i, r, a, s, d, c, u = e.icon,
                        v = e.color,
                        f = e.settings,
                        h = void 0 === f ? {} : f,
                        g = h.size = null !== (r = h.size) && void 0 !== r ? r : "large",
                        m = h.shape = null !== (a = h.shape) && void 0 !== a ? a : "none",
                        p = h.style = null !== (s = h.style) && void 0 !== s ? s : "solid",
                        x = "large" === g ? "w-8 h-8" : "medium" === g ? "w-7 h-7" : "w-6 h-6",
                        y = {};
                    return "none" !== m && (y = function() {
                        var e = "large" === g ? "w-12 h-12" : "medium" === g ? "w-10 h-10" : "w-8 h-8",
                            l = "circle" === m ? "rounded-full" : "square" === m ? "rounded-none" : "rounded" === m ? "rounded-md" : "",
                            o = "solid" === p ? v : "outline" === p ? "transparent" : "",
                            n = "outline" === p ? "border" : "";
                        return {
                            classes: (0, t.AK)(e, l, n),
                            styles: {
                                backgroundColor: o,
                                borderColor: v
                            }
                        }
                    }()), (0, n.jsxs)("div", {
                        className: (0, t.AK)("flex justify-center items-center", null !== (d = y.classes) && void 0 !== d ? d : ""),
                        style: null !== (c = y.styles) && void 0 !== c ? c : {},
                        children: ["custom" !== u.type && (0, n.jsx)(j, {
                            type: u.type,
                            className: (0, t.AK)(x),
                            style: {
                                color: "none" === m || "outline" === p ? v : (0, t.$O)(v)
                            }
                        }), "custom" === u.type && (null === (l = u.icon) || void 0 === l ? void 0 : l._id) && (0, n.jsx)("div", {
                            className: (0, t.AK)("flex-shrink-0 relative", x),
                            children: (0, n.jsx)("div", {
                                className: "absolute w-full h-full",
                                style: {
                                    backgroundColor: "none" === m || "outline" === p ? v : (0, t.$O)(v),
                                    WebkitMaskImage: 'url("'.concat(null === (o = u.icon) || void 0 === o ? void 0 : o.url, '")'),
                                    maskImage: 'url("'.concat(null === (i = u.icon) || void 0 === i ? void 0 : i.url, '")'),
                                    WebkitMaskPosition: "center",
                                    maskPosition: "center",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain"
                                }
                            })
                        })]
                    })
                }
        },
        165: function(e, l, o) {
            o.r(l), o.d(l, {
                default: function() {
                    return b
                }
            });
            var n = o(26042),
                t = o(85893),
                i = o(31996),
                r = o(67294),
                a = o(41664),
                s = o.n(a),
                d = o(90387),
                c = o(52077),
                u = o(90434),
                v = o(41984),
                f = o(43751),
                h = o(72510),
                g = o(94053),
                m = o(74007),
                p = o(75654),
                x = o(21123),
                y = o(4433);

            function b(e) {
                var l, o, a, b, j = e.website,
                    w = e.previousBlock,
                    N = (0, r.useState)(!1),
                    k = N[0],
                    C = N[1],
                    F = (0, r.useState)(""),
                    Z = F[0],
                    A = F[1],
                    S = (0, r.useState)(null),
                    P = S[0],
                    _ = S[1],
                    L = (0, r.useState)("#FFFFFF"),
                    R = L[0],
                    M = L[1],
                    W = (0, r.useState)("#000000"),
                    K = W[0],
                    D = W[1],
                    I = (0, r.useRef)(null),
                    E = (0, d.useRouter)(),
                    O = null === j || void 0 === j ? void 0 : j.footer;
                O && O.showName && (null === O.businessName || void 0 === O.businessName) && (O.businessName = null === j || void 0 === j || null === (b = j.Business) || void 0 === b ? void 0 : b.name);
                !O || null !== O.businessAddress && void 0 !== O.businessAddress || (O.businessAddress = "");
                var T = null === j || void 0 === j ? void 0 : j.header,
                    z = null === j || void 0 === j || null === (l = j.pages) || void 0 === l ? void 0 : l.find((function(e) {
                        return !e.slug && e.default
                    })),
                    B = null === (a = null === (o = j.pages) || void 0 === o ? void 0 : o.filter((function(e) {
                        return !0 === e.showOnFooter || void 0 === e.showOnFooter
                    }))) || void 0 === a ? void 0 : a.map((function(e) {
                        var l = {
                            href: "/".concat(e.slug || ""),
                            name: e.label,
                            current: E.asPath === "/".concat(e.slug || "") || E.asPath.includes("/".concat(e.slug, "/")),
                            type: e.type,
                            forceRender: e.forceRender
                        };
                        return "parent" === l.type && (l.nests = j.pages.filter((function(l) {
                            return l.Parent === e._id
                        })).map((function(l) {
                            return {
                                href: "/".concat(e.slug, "/").concat(l.slug || ""),
                                name: l.label,
                                current: E.asPath === "/".concat(e.slug, "/").concat(l.slug || ""),
                                forceRender: l.forceRender
                            }
                        })), 0 === l.nests.length) ? null : l
                    })).filter((function(e) {
                        return null !== e
                    })),
                    Q = function() {
                        var e, l, o, r;
                        return O.showLogo && "branding" === O.source && (null === j || void 0 === j ? void 0 : j.logo) ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, i.QW)(null === j || void 0 === j ? void 0 : j.logo) && (0, t.jsx)("img", {
                                className: "hidden lg:block transition-all object-contain",
                                src: (0, i.QW)(null === j || void 0 === j ? void 0 : j.logo),
                                alt: null === O || void 0 === O ? void 0 : O.businessName,
                                style: {
                                    height: ((null === O || void 0 === O || null === (e = O.logoDesktop) || void 0 === e ? void 0 : e.height) || 80) + "px"
                                }
                            }), (0, i.QW)(null === j || void 0 === j ? void 0 : j.logo) && (0, t.jsx)("img", {
                                className: "lg:hidden transition-all object-contain",
                                src: (0, i.QW)(null === j || void 0 === j ? void 0 : j.logo),
                                alt: null === O || void 0 === O ? void 0 : O.businessName,
                                style: {
                                    height: ((null === O || void 0 === O || null === (l = O.logoMobile) || void 0 === l ? void 0 : l.height) || 40) + "px"
                                }
                            })]
                        }) : O.showLogo && "upload" === O.source && (null === O || void 0 === O ? void 0 : O.customLogo) ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, i.QW)(null === O || void 0 === O ? void 0 : O.customLogo) && (0, t.jsx)("img", {
                                className: "hidden lg:block transition-all object-contain",
                                src: (0, i.QW)(null === O || void 0 === O ? void 0 : O.customLogo),
                                alt: null === O || void 0 === O ? void 0 : O.businessName,
                                style: {
                                    height: ((null === O || void 0 === O || null === (o = O.logoDesktop) || void 0 === o ? void 0 : o.height) || 80) + "px"
                                }
                            }), (0, i.QW)(null === O || void 0 === O ? void 0 : O.customLogo) && (0, t.jsx)("img", {
                                className: "lg:hidden transition-all object-contain",
                                src: (0, i.QW)(null === O || void 0 === O ? void 0 : O.customLogo),
                                alt: null === O || void 0 === O ? void 0 : O.businessName,
                                style: {
                                    height: ((null === O || void 0 === O || null === (r = O.logoMobile) || void 0 === r ? void 0 : r.height) || 40) + "px"
                                }
                            })]
                        }) : O.businessName ? (0, t.jsx)("div", {
                            className: "max-w-full overflow-hidden grid",
                            children: (0, t.jsx)("h3", {
                                className: (0, i.AK)("heading-medium overflow-hidden whitespace-nowrap overflow-ellipsis", "simple-right" !== (null === O || void 0 === O ? void 0 : O.style) && "simple-center" !== (null === O || void 0 === O ? void 0 : O.style) && "xl:heading-small"),
                                style: (0, n.Z)({
                                    color: K
                                }, (0, i.j2)(j)),
                                children: null === O || void 0 === O ? void 0 : O.businessName
                            })
                        }) : (0, t.jsx)(t.Fragment, {})
                    },
                    $ = function() {
                        if (0 === (null === B || void 0 === B ? void 0 : B.length)) return (0, t.jsx)(t.Fragment, {});
                        var e = (0, i.h)(R, -10);
                        return e !== K && e !== R || (e = (0, i.h)(R, 10)), (0, t.jsx)("ul", {
                            className: (0, i.AK)("flex flex-col lg:flex-row items-start lg:items-center flex-wrap gap-6", "stacked-right" === (null === O || void 0 === O ? void 0 : O.style) && "justify-end items-end", ("stacked-center" === (null === O || void 0 === O ? void 0 : O.style) || "simple-center" === (null === O || void 0 === O ? void 0 : O.style)) && "justify-center items-center"),
                            style: {
                                color: K
                            },
                            children: null === B || void 0 === B ? void 0 : B.filter((function(e) {
                                return "nested" !== e.type
                            })).map((function(l) {
                                var o;
                                return (0, t.jsx)("li", {
                                    className: "border-b-2",
                                    style: {
                                        borderColor: l.current ? "".concat(K) : "transparent"
                                    },
                                    children: "parent" === l.type ? (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)(m.Z, {
                                            className: "!hidden lg:!inline-block",
                                            openUp: !0,
                                            buttonClassName: "inline-flex items-center gap-2 pb-1.5",
                                            itemsContainerClass: "!pl-6 !pr-12 w-max max-w-120 !max-h-50 no-scrollbar",
                                            button: (0, t.jsxs)(t.Fragment, {
                                                children: [(0, t.jsx)("span", {
                                                    className: "body-normal whitespace-nowrap",
                                                    children: l.name
                                                }), (0, t.jsx)(u.Z, {
                                                    className: "w-4 h-4"
                                                })]
                                            }),
                                            itemsContainerStyle: {
                                                backgroundColor: e,
                                                color: K
                                            },
                                            children: null === (o = l.nests) || void 0 === o ? void 0 : o.map((function(e) {
                                                return (0, t.jsx)(h.v.Item, {
                                                    children: (0, t.jsx)(s(), {
                                                        href: e.href,
                                                        legacyBehavior: !1,
                                                        className: "block py-2 body-normal border-b-2",
                                                        style: {
                                                            borderColor: e.current ? "".concat(K) : "transparent"
                                                        },
                                                        target: e.forceRender ? "_parent" : "_self",
                                                        children: e.name
                                                    })
                                                }, "page-link-".concat(e.href))
                                            }))
                                        }), (0, t.jsxs)("button", {
                                            className: "inline-flex lg:hidden items-center gap-2",
                                            onClick: function() {
                                                C(!0), _(l.nests)
                                            },
                                            children: [(0, t.jsx)("span", {
                                                className: "body-normal",
                                                children: l.name
                                            }), (0, t.jsx)(v.Z, {
                                                className: "w-4 h-4",
                                                "aria-hidden": "true"
                                            })]
                                        })]
                                    }) : (0, t.jsx)(s(), {
                                        href: l.href,
                                        children: (0, t.jsx)("a", {
                                            className: "block pb-1.5 body-normal",
                                            target: l.forceRender ? "_parent" : "_self",
                                            children: l.name
                                        })
                                    })
                                }, "footer-page-link-".concat(l.href))
                            }))
                        })
                    },
                    V = function() {
                        return (null === j || void 0 === j ? void 0 : j.social) && 0 !== (null === j || void 0 === j ? void 0 : j.social.length) ? (0, t.jsx)("ul", {
                            className: (0, i.AK)("flex items-center gap-x-4 gap-y-2 flex-wrap", "stacked-right" === (null === O || void 0 === O ? void 0 : O.style) && "justify-end", ("stacked-center" === (null === O || void 0 === O ? void 0 : O.style) || "simple-center" === (null === O || void 0 === O ? void 0 : O.style)) && "justify-center"),
                            children: Array.isArray(j.social) && j.social.map((function(e, l) {
                                var o = p.W.find((function(l) {
                                        return l.id === e.type
                                    })),
                                    n = e.link;
                                return "custom" !== e.type && (n = (n = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === o || void 0 === o ? void 0 : o.host, ""), n = "https://".concat(null === o || void 0 === o ? void 0 : o.host, "/").concat(n)), (0, t.jsx)("li", {
                                    children: (0, t.jsx)(s(), {
                                        href: n,
                                        children: (0, t.jsx)("a", {
                                            target: "_blank",
                                            children: (0, t.jsx)(p.Q, {
                                                icon: e,
                                                color: K,
                                                settings: j.socialSettings
                                            })
                                        })
                                    })
                                }, "social-icon-header-".concat(l))
                            }))
                        }) : (0, t.jsx)(t.Fragment, {})
                    },
                    H = function() {
                        return !1 === O.madeWithDurable ? (0, t.jsx)(t.Fragment, {}) : (0, t.jsxs)("p", {
                            className: (0, i.AK)("body-normal lg:text-right whitespace-nowrap", ("stacked-center" === (null === O || void 0 === O ? void 0 : O.style) || "simple-center" === (null === O || void 0 === O ? void 0 : O.style)) && "!text-center", "stacked-left" === (null === O || void 0 === O ? void 0 : O.style) && "!text-left"),
                            children: [(0, t.jsx)("span", {
                                children: "Made with\xa0"
                            }), (0, t.jsx)(s(), {
                                href: "https://durable.co?referrer=".concat(encodeURIComponent(Z)),
                                children: (0, t.jsx)("a", {
                                    target: "_blank",
                                    className: "underline",
                                    style: {
                                        color: K
                                    },
                                    children: "Durable"
                                })
                            })]
                        })
                    },
                    U = function() {
                        return (0, t.jsx)(c.Z, {
                            className: "lg !py-2",
                            button: O.button,
                            block: O,
                            website: j
                        })
                    },
                    q = function() {
                        C(!1), _(null)
                    };
                return (0, r.useEffect)((function() {
                    E && q()
                }), [E]), (0, r.useEffect)((function() {
                    A(null === location || void 0 === location ? void 0 : location.origin)
                }), []), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("footer", {
                        className: "flex flex-1",
                        children: (0, t.jsxs)("div", {
                            ref: I,
                            id: "website-footer",
                            className: "relative flex-1 z-10 break-word",
                            style: {
                                color: K
                            },
                            children: [(0, t.jsx)(x.Z, {
                                block: O,
                                website: j,
                                onChange: function(e) {
                                    var l, o;
                                    M((null === e || void 0 === e || null === (l = e.overlay) || void 0 === l ? void 0 : l.color1) || "#FFFFFF"), D((0, i.$O)((null === e || void 0 === e || null === (o = e.overlay) || void 0 === o ? void 0 : o.color1) || "#FFFFFF"))
                                }
                            }), (0, t.jsx)("div", {
                                className: (0, i.AK)("relative z-10 container mx-auto", (0, i.bG)(null === O || void 0 === O ? void 0 : O.spacing)),
                                children: "split-left" === (null === O || void 0 === O ? void 0 : O.style) ? (0, t.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row lg:justify-between gap-12",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex flex-col items-start gap-12 lg:gap-6",
                                        children: [Q(), (0, t.jsxs)("div", {
                                            className: "flex flex-col lg:flex-row lg:items-center gap-12",
                                            children: [$(), O.showSocial && V(), (null === O || void 0 === O ? void 0 : O.button) && U()]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col gap-6",
                                        children: [!!O.additionalDetails && (0, t.jsx)("div", {
                                            className: "body-normal lg:text-right",
                                            style: {
                                                color: K
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        }), H()]
                                    })]
                                }) : "stacked-right" === O.style ? (0, t.jsxs)("div", {
                                    className: "flex flex-col justify-end items-end gap-12 text-right",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex flex-col items-end gap-6",
                                        children: [Q(), !!O.additionalDetails && (0, t.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: K
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col justify-end gap-12 lg:gap-14",
                                        children: [$(), O.showSocial && V(), (null === O || void 0 === O ? void 0 : O.button) && (0, t.jsx)("div", {
                                            children: U()
                                        })]
                                    }), H()]
                                }) : "stacked-center" === O.style ? (0, t.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-12 text-center",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex flex-col items-center gap-6",
                                        children: [Q(), !!O.additionalDetails && (0, t.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: K
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-12 lg:gap-14",
                                        children: [$(), O.showSocial && V(), (null === O || void 0 === O ? void 0 : O.button) && (0, t.jsx)("div", {
                                            children: U()
                                        })]
                                    }), H()]
                                }) : "stacked-left" === O.style ? (0, t.jsxs)("div", {
                                    className: "flex flex-col items-start gap-12 text-left",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex flex-col items-start gap-6",
                                        children: [Q(), !!O.additionalDetails && (0, t.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: K
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col items-start gap-12 lg:gap-14",
                                        children: [$(), O.showSocial && V(), (null === O || void 0 === O ? void 0 : O.button) && (0, t.jsx)("div", {
                                            children: U()
                                        })]
                                    }), H()]
                                }) : "simple-right" === O.style ? (0, t.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row gap-12",
                                    children: [(0, t.jsxs)("div", {
                                        className: (0, i.AK)("flex flex-col lg:flex-row items-start lg:items-center gap-6", (null === O || void 0 === O ? void 0 : O.showLogo) ? "lg:gap-10" : "lg:gap-2"),
                                        children: [Q(), !!O.additionalDetails && (0, t.jsxs)(t.Fragment, {
                                            children: [!(null === O || void 0 === O ? void 0 : O.showLogo) && (0, t.jsx)("span", {
                                                className: "hidden lg:inline-block",
                                                children: "\xb7"
                                            }), (0, t.jsx)("div", {
                                                className: "body-normal",
                                                style: {
                                                    color: K
                                                },
                                                children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                            })]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex-1 w-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-14 justify-end",
                                        children: [(0, t.jsxs)("div", {
                                            className: "flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-12 lg:gap-14 w-full lg:w-auto max-w-[100vw]",
                                            children: [$(), O.showSocial && V(), (null === O || void 0 === O ? void 0 : O.button) && U()]
                                        }), H()]
                                    })]
                                }) : "simple-center" === O.style ? (0, t.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-12 text-center",
                                    children: [(0, t.jsxs)("div", {
                                        className: (0, i.AK)("flex flex-col justify-center lg:items-center gap-6", (null === O || void 0 === O ? void 0 : O.showLogo) ? "lg:gap-6" : "lg:flex-row lg:gap-2"),
                                        children: [Q(), !!O.additionalDetails && (0, t.jsxs)(t.Fragment, {
                                            children: [!(null === O || void 0 === O ? void 0 : O.showLogo) && (0, t.jsx)("span", {
                                                className: "hidden lg:inline-block",
                                                children: "\xb7"
                                            }), (0, t.jsx)("div", {
                                                className: "body-normal",
                                                style: {
                                                    color: K
                                                },
                                                children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                            })]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:gap-14",
                                        children: [$(), O.showSocial && V(), (null === O || void 0 === O ? void 0 : O.button) && U(), H()]
                                    })]
                                }) : (0, t.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row items-start lg:justify-between gap-12",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex flex-col gap-6 items-start lg:max-w-[30vw]",
                                        children: [Q(), !!(null === O || void 0 === O ? void 0 : O.additionalDetails) && (0, t.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: K
                                            },
                                            children: null === O || void 0 === O ? void 0 : O.additionalDetails
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col gap-12 lg:gap-6",
                                        children: [(0, t.jsxs)("div", {
                                            className: "flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end",
                                            children: [$(), O.showSocial && V(), (null === O || void 0 === O ? void 0 : O.button) && U()]
                                        }), H()]
                                    })]
                                })
                            }), (0, t.jsx)(y.iz, {
                                previousDivider: null === w || void 0 === w ? void 0 : w.divider,
                                dividerUniqueId: "website-footer-divider",
                                divider: null,
                                contentRef: I
                            })]
                        })
                    }), (0, t.jsx)(g.V, {
                        open: k,
                        onClose: q,
                        className: "relative z-[30000] h-full",
                        children: (0, t.jsx)(g.V.Panel, {
                            className: "fixed inset-0 flex flex-col h-full",
                            style: {
                                backgroundColor: R,
                                color: K
                            },
                            children: (0, t.jsxs)("div", {
                                className: "flex-1 flex flex-col h-full container mx-auto pb-6",
                                children: [(0, t.jsxs)("div", {
                                    className: (0, i.AK)("items-center gap-3 py-6", "left" !== (null === T || void 0 === T ? void 0 : T.style) ? "grid" : "flex justify-between"),
                                    style: "left" !== (null === T || void 0 === T ? void 0 : T.style) ? {
                                        gridTemplateColumns: "1fr auto 1fr"
                                    } : {},
                                    children: [("center" === (null === T || void 0 === T ? void 0 : T.style) || "full-center" === (null === T || void 0 === T ? void 0 : T.style)) && (0, t.jsx)("div", {}), function() {
                                        var e, l, o, r;
                                        return (null === T || void 0 === T ? void 0 : T.showLogo) && "branding" === (null === T || void 0 === T ? void 0 : T.source) && (null === j || void 0 === j ? void 0 : j.logo) ? (0, t.jsx)(s(), {
                                            href: "/",
                                            children: (0, t.jsxs)("a", {
                                                target: (null === z || void 0 === z ? void 0 : z.forceRender) ? "_parent" : "_self",
                                                children: [(0, i.QW)(null === j || void 0 === j ? void 0 : j.logo) && (0, t.jsx)("img", {
                                                    className: "hidden lg:block transition-all object-contain",
                                                    src: (0, i.QW)(null === j || void 0 === j ? void 0 : j.logo),
                                                    alt: null === T || void 0 === T ? void 0 : T.siteName,
                                                    style: {
                                                        height: ((null === T || void 0 === T || null === (e = T.logoDesktop) || void 0 === e ? void 0 : e.height) || 80) + "px"
                                                    }
                                                }), (0, i.QW)(null === j || void 0 === j ? void 0 : j.logo) && (0, t.jsx)("img", {
                                                    className: "lg:hidden transition-all object-contain",
                                                    src: (0, i.QW)(null === j || void 0 === j ? void 0 : j.logo),
                                                    alt: null === T || void 0 === T ? void 0 : T.siteName,
                                                    style: {
                                                        height: ((null === T || void 0 === T || null === (l = T.logoMobile) || void 0 === l ? void 0 : l.height) || 40) + "px"
                                                    }
                                                })]
                                            })
                                        }) : (null === T || void 0 === T ? void 0 : T.showLogo) && "upload" === (null === T || void 0 === T ? void 0 : T.source) && (null === T || void 0 === T ? void 0 : T.customLogo) ? (0, t.jsx)(s(), {
                                            href: "/",
                                            children: (0, t.jsxs)("a", {
                                                target: (null === z || void 0 === z ? void 0 : z.forceRender) ? "_parent" : "_self",
                                                children: [(0, i.QW)(null === T || void 0 === T ? void 0 : T.customLogo) && (0, t.jsx)("img", {
                                                    className: "hidden lg:block transition-all object-contain",
                                                    src: (0, i.QW)(null === T || void 0 === T ? void 0 : T.customLogo),
                                                    alt: null === T || void 0 === T ? void 0 : T.siteName,
                                                    style: {
                                                        height: ((null === T || void 0 === T || null === (o = T.logoDesktop) || void 0 === o ? void 0 : o.height) || 80) + "px"
                                                    }
                                                }), (0, i.QW)(null === T || void 0 === T ? void 0 : T.customLogo) && (0, t.jsx)("img", {
                                                    className: "lg:hidden transition-all object-contain",
                                                    src: (0, i.QW)(null === T || void 0 === T ? void 0 : T.customLogo),
                                                    alt: null === T || void 0 === T ? void 0 : T.siteName,
                                                    style: {
                                                        height: ((null === T || void 0 === T || null === (r = T.logoMobile) || void 0 === r ? void 0 : r.height) || 40) + "px"
                                                    }
                                                })]
                                            })
                                        }) : (0, t.jsx)(s(), {
                                            href: "/",
                                            children: (0, t.jsx)("a", {
                                                target: (null === z || void 0 === z ? void 0 : z.forceRender) ? "_parent" : "_self",
                                                children: (0, t.jsx)("h1", {
                                                    className: "heading-small lg:heading-medium overflow-hidden overflow-ellipsis max-w-full",
                                                    style: (0, n.Z)({
                                                        color: K
                                                    }, (0, i.j2)(j)),
                                                    children: null === T || void 0 === T ? void 0 : T.siteName
                                                })
                                            })
                                        })
                                    }(), (0, t.jsx)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: (0, t.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: K
                                            },
                                            onClick: q,
                                            children: (0, t.jsx)(f.Z, {
                                                className: "block h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    })]
                                }), (0, t.jsx)("ul", {
                                    className: (0, i.AK)("flex-1 flex flex-col justify-center gap-3 w-full py-6 overflow-auto", "center" === (null === O || void 0 === O ? void 0 : O.style) || "full-center" === (null === O || void 0 === O ? void 0 : O.style) ? "text-center" : ""),
                                    style: (0, n.Z)({
                                        color: K
                                    }, (0, i.SV)(j)),
                                    children: null === P || void 0 === P ? void 0 : P.map((function(e) {
                                        return (0, t.jsx)("li", {
                                            className: (0, i.AK)("body-large py-2 border-b-2"),
                                            style: {
                                                borderColor: e.current ? "".concat(K) : "transparent"
                                            },
                                            children: (0, t.jsx)(s(), {
                                                href: e.href,
                                                children: (0, t.jsx)("a", {
                                                    className: "block w-full",
                                                    target: e.forceRender ? "_parent" : "_self",
                                                    children: e.name
                                                })
                                            })
                                        }, "page-link-".concat(e.href))
                                    }))
                                })]
                            })
                        })
                    })]
                })
            }
        },
        62246: function(e, l, o) {
            var n = o(67294),
                t = (o(31996), o(91033));
            l.Z = function(e, l) {
                var o = (0, n.useState)(!1),
                    i = o[0],
                    r = o[1],
                    a = (0, n.useRef)(e);
                a.current = e;
                var s = function(e) {
                    var l = !0,
                        o = !1,
                        n = void 0;
                    try {
                        for (var t, s = e[Symbol.iterator](); !(l = (t = s.next()).done); l = !0) {
                            var d = t.value;
                            document.body.contains(d.target) || r(!i), a.current(d.target)
                        }
                    } catch (c) {
                        o = !0, n = c
                    } finally {
                        try {
                            l || null == s.return || s.return()
                        } finally {
                            if (o) throw n
                        }
                    }
                };
                (0, n.useEffect)((function() {
                    if (l) {
                        var e = new t.Z(s),
                            o = Array.isArray(l) ? l : [l];
                        return o.forEach((function(l) {
                                return l.current && e.observe(l.current)
                            })),
                            function() {
                                o.forEach((function(l) {
                                    return l.current && e.unobserve(l.current)
                                })), e.disconnect()
                            }
                    }
                }), [l, i])
            }
        },
        31996: function(e, l, o) {
            o.d(l, {
                bl: function() {
                    return f
                },
                $O: function() {
                    return N
                },
                h: function() {
                    return L
                },
                Z9: function() {
                    return x
                },
                SV: function() {
                    return S
                },
                AK: function() {
                    return j
                },
                p$: function() {
                    return Z
                },
                n3: function() {
                    return W
                },
                sd: function() {
                    return I
                },
                dz: function() {
                    return O
                },
                yW: function() {
                    return M
                },
                QW: function() {
                    return E
                },
                Qm: function() {
                    return R
                },
                G0: function() {
                    return P
                },
                ow: function() {
                    return T
                },
                bG: function() {
                    return D
                },
                A2: function() {
                    return K
                },
                j2: function() {
                    return A
                },
                mR: function() {
                    return k
                },
                jn: function() {
                    return _
                },
                s: function() {
                    return C
                },
                ac: function() {
                    return F
                },
                oH: function() {
                    return w
                }
            });
            var n = o(26042),
                t = o(69396),
                i = o(85893),
                r = o(47568),
                a = o(51438),
                s = o(14924),
                d = o(20414),
                c = o(9669),
                u = o.n(c),
                v = o(83454),
                f = function e(l, o) {
                    (0, a.Z)(this, e);
                    var n = this;
                    (0, s.Z)(this, "get", function() {
                        var e = (0, r.Z)((function(e, l) {
                            return (0, d.__generator)(this, (function(o) {
                                return [2, new Promise((function(o, t) {
                                    u().get(e, {
                                        baseURL: n.baseURL,
                                        params: l || {},
                                        headers: {
                                            "Content-Type": "application/json",
                                            Accept: "*/*"
                                        }
                                    }).then(function() {
                                        var e = (0, r.Z)((function(e) {
                                            return (0, d.__generator)(this, (function(l) {
                                                return o(e.data), [2]
                                            }))
                                        }));
                                        return function(l) {
                                            return e.apply(this, arguments)
                                        }
                                    }()).catch((function(e) {
                                        e.response ? o({
                                            status: !1,
                                            message: e.response.data.message
                                        }) : e.request ? o({
                                            status: !1,
                                            message: e.request.message
                                        }) : o({
                                            status: !1,
                                            message: e.message
                                        }), o({
                                            status: !1,
                                            message: e.config
                                        })
                                    }))
                                }))]
                            }))
                        }));
                        return function(l, o) {
                            return e.apply(this, arguments)
                        }
                    }());
                    var t = this;
                    (0, s.Z)(this, "post", function() {
                        var e = (0, r.Z)((function(e, l, o) {
                            return (0, d.__generator)(this, (function(n) {
                                return [2, new Promise((function(n, i) {
                                    u().post(e, l || {}, {
                                        baseURL: t.baseURL,
                                        headers: {
                                            "Content-Type": o ? "multipart/form-data" : "application/json",
                                            Accept: "*/*"
                                        }
                                    }).then((function(e) {
                                        n(e.data)
                                    })).catch((function(e) {
                                        e.response ? n(e.response.data) : e.request ? n({
                                            status: !1,
                                            message: e.request
                                        }) : n({
                                            status: !1,
                                            message: e.message
                                        }), n({
                                            status: !1,
                                            message: e.config
                                        })
                                    }))
                                }))]
                            }))
                        }));
                        return function(l, o, n) {
                            return e.apply(this, arguments)
                        }
                    }()), u().defaults.withCredentials = null === o || void 0 === o || o, this.baseURL = l || v.env.API_URL || "https://api.durable.co"
                },
                h = o(43751),
                g = o(5152),
                m = function(e) {
                    var l = e.closeToast;
                    return (0, i.jsx)(h.Z, {
                        className: "h-5 w-5 text-gray-600",
                        onClick: l
                    })
                },
                p = o.n(g)()((function() {
                    return Promise.resolve().then(o.bind(o, 40782)).then((function(e) {
                        return e.toast
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [40782]
                        }
                    },
                    loading: function() {
                        return ""
                    },
                    ssr: !1
                }),
                x = {
                    default: function(e) {
                        p(e)
                    },
                    info: function(e) {
                        p.info(e)
                    },
                    success: function(e) {
                        p.success(e)
                    },
                    warn: function(e) {
                        p.warn(e)
                    },
                    error: function(e) {
                        p.error(e, {
                            autoClose: !1,
                            closeButton: (0, i.jsx)(m, {})
                        })
                    }
                },
                y = o(67294),
                b = (o(79981), o(90951));
            o(83454);

            function j() {
                for (var e = arguments.length, l = new Array(e), o = 0; o < e; o++) l[o] = arguments[o];
                return l.filter(Boolean).join(" ")
            }

            function w(e) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            }

            function N(e) {
                var l = !1;
                if (!e || !e[0]) return e;
                "#" === e[0] && (e = e.slice(1), l = !0);
                var o = parseInt(6 === (null === e || void 0 === e ? void 0 : e.length) ? e : "".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]), 16),
                    n = ((o >> 16) + (255 & o) + (o >> 8 & 255)) / 3;
                return (l ? "#" : "") + (n = n > 128 ? "111827" : "FFFFFF")
            }
            var k = function(e, l) {
                var o;
                return l /= 100, /^#([A-Fa-f0-9]{3}){1,2}$/.test(e) ? (3 === (null === (o = e.substring(1).split("")) || void 0 === o ? void 0 : o.length) && (o = [o[0], o[0], o[1], o[1], o[2], o[2]]), "rgba(" + [(o = "0x" + o.join("")) >> 16 & 255, o >> 8 & 255, 255 & o].join(",") + "," + l + ")") : e
            };

            function C(e) {
                var l = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
                    o = l ? (256 | l[1]).toString(16).slice(1) + (256 | l[2]).toString(16).slice(1) + (256 | l[3]).toString(16).slice(1) : e;
                return "#".concat(o)
            }

            function F(e) {
                var l = (0, y.useState)(!0),
                    o = l[0],
                    n = l[1];
                return (0, y.useEffect)((function() {
                    var l = window.matchMedia(e);
                    l.matches !== o && n(l.matches);
                    var t = function() {
                        n(l.matches)
                    };
                    return l.addListener(t),
                        function() {
                            return l.removeListener(t)
                        }
                }), [o, e]), o
            }

            function Z(e) {
                return JSON.parse(JSON.stringify(e))
            }
            var A = function(e) {
                    var l, o, n, t;
                    return {
                        fontFamily: (null === e || void 0 === e || null === (l = e.fonts) || void 0 === l || null === (o = l.head) || void 0 === o ? void 0 : o.family) || "sans-serif",
                        fontWeight: (null === e || void 0 === e || null === (n = e.fonts) || void 0 === n || null === (t = n.head) || void 0 === t ? void 0 : t.weight) || 500
                    }
                },
                S = function(e) {
                    var l, o, n, t;
                    return {
                        fontFamily: (null === e || void 0 === e || null === (l = e.fonts) || void 0 === l || null === (o = l.body) || void 0 === o ? void 0 : o.family) || "sans-serif",
                        fontWeight: (null === e || void 0 === e || null === (n = e.fonts) || void 0 === n || null === (t = n.body) || void 0 === t ? void 0 : t.weight) || 500
                    }
                };

            function P(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = e.props.children[0].props.website,
                    r = e.props.children[0].props.page,
                    a = e.props.children[0].props.apiUrl;
                return (0, i.jsx)(b.Z, (0, t.Z)((0, n.Z)({
                    page: r,
                    website: o,
                    apiUrl: a
                }, l), {
                    children: e
                }))
            }

            function _(e) {
                var l, o, n;
                return e.match(/^rgb/) ? (l = (e = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1], o = e[2], n = e[3]) : (l = (e = +("0x" + e.slice(1).replace(e.length < 5 && /./g, "$&$&"))) >> 16, o = e >> 8 & 255, n = 255 & e), Math.sqrt(l * l * .299 + o * o * .587 + n * n * .114) <= 127.5
            }

            function L(e, l) {
                if (!e) return "#FFFFFF";
                var o = parseInt(e.replace("#", ""), 16),
                    n = Math.round(2.55 * l),
                    t = (o >> 16) + n,
                    i = (o >> 8 & 255) + n,
                    r = (255 & o) + n;
                return "#" + (16777216 + 65536 * (t < 255 ? t < 1 ? 0 : t : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (r < 255 ? r < 1 ? 0 : r : 255)).toString(16).slice(1)
            }

            function R(e) {
                if (!e) return "";
                var l = e.split(" ");
                return l.length > 1 && "" !== l[1] ? l[0][0] + l[1][0] : e[0] + e[1]
            }
            var M = function(e, l) {
                    var o = {
                            small: "rounded-sm md:rounded-md lg:rounded-lg",
                            medium: "rounded-lg md:rounded-xl lg:rounded-2xl",
                            large: "rounded-2xl md:rounded-3xl lg:rounded-4xl",
                            "no-rounded": ""
                        },
                        n = String(e);
                    return e && "default" !== e || !l || (n = l), o[n] || o["no-rounded"]
                },
                W = function(e) {
                    return "1:1" === e ? "aspect-w-1 aspect-h-1" : "2:3" === e ? "aspect-w-2 aspect-h-3" : "3:2" === e ? "aspect-w-3 aspect-h-2" : "aspect-w-16 aspect-h-9"
                },
                K = function(e) {
                    var l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    switch (e) {
                        case "top":
                            return l ? "justify-start" : "items-start";
                        case "bottom":
                            return l ? "justify-end" : "items-end";
                        default:
                            return l ? "justify-center" : "items-center"
                    }
                },
                D = function(e) {
                    var l, o, n = {
                            none: {
                                top: "pt-0",
                                bottom: "pb-0"
                            },
                            small: {
                                top: "pt-8 lg:pt-12",
                                bottom: "pb-8 lg:pb-12"
                            },
                            medium: {
                                top: "pt-12 lg:pt-20",
                                bottom: "pb-12 lg:pb-20"
                            },
                            large: {
                                top: "pt-16 lg:pt-32",
                                bottom: "pb-16 lg:pb-32"
                            },
                            default: {
                                top: "pt-12 lg:pt-14 xl:pt-20",
                                bottom: "pb-12 lg:pb-14 xl:pb-20"
                            }
                        },
                        t = (null === (l = n[null === e || void 0 === e ? void 0 : e.top]) || void 0 === l ? void 0 : l.top) || n.default.top,
                        i = (null === (o = n[null === e || void 0 === e ? void 0 : e.bottom]) || void 0 === o ? void 0 : o.bottom) || n.default.bottom;
                    return "".concat(t, " ").concat(i)
                },
                I = function(e) {
                    return "".concat("https://cdn.durable.co", "/assets/").concat(e)
                },
                E = function(e) {
                    return (null === e || void 0 === e ? void 0 : e.url) || (null === e || void 0 === e ? void 0 : e.preview)
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "color1";
                    return parseInt((null === e || void 0 === e ? void 0 : e.replace(/[^0-9]/gi, "")) || 1, 10) - 1
                },
                T = function(e, l, o) {
                    var n, t = O(l);
                    return (null === e || void 0 === e ? void 0 : e.colors) && !isNaN(t) ? null === (n = e.colors[t]) || void 0 === n ? void 0 : n[o] : "#FFFFFF"
                }
        }
    }
]);