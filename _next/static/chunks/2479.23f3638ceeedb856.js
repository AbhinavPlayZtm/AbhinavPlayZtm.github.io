(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2479], {
        39828: function() {},
        41126: function(e, t, o) {
            "use strict";
            o.d(t, {
                h: function() {
                    return Z
                }
            });
            var n = o(67294),
                r = o(94192),
                i = o(19946),
                a = o(16723),
                l = o(3855);

            function u(e, t) {
                let [o, r] = (0, n.useState)(e), i = (0, l.E)(e);
                return (0, a.e)((() => r(i.current)), [i, r, ...t]), o
            }
            var s = o(23784),
                c = o(12351),
                d = o(32984),
                p = o(9362),
                b = o(61363),
                f = o(11497),
                v = o(64103),
                m = o(4503),
                x = o(16567),
                g = o(14157),
                R = o(31591),
                C = o(84575);
            let O = (0, c.yV)((function(e, t) {
                return (0, c.sY)({
                    ourProps: {
                        ref: t,
                        style: {
                            position: "absolute",
                            width: 1,
                            height: 1,
                            padding: 0,
                            margin: -1,
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                            display: "none"
                        }
                    },
                    theirProps: e,
                    slot: {},
                    defaultTag: "div",
                    name: "VisuallyHidden"
                })
            }));

            function h(e = {}, t = null, o = []) {
                for (let [n, r] of Object.entries(e)) T(o, y(t, n), r);
                return o
            }

            function y(e, t) {
                return e ? e + "[" + t + "]" : t
            }

            function T(e, t, o) {
                if (Array.isArray(o))
                    for (let [n, r] of o.entries()) T(e, y(t, n.toString()), r);
                else o instanceof Date ? e.push([t, o.toISOString()]) : "boolean" == typeof o ? e.push([t, o ? "1" : "0"]) : "string" == typeof o ? e.push([t, o]) : "number" == typeof o ? e.push([t, `${o}`]) : null == o ? e.push([t, ""]) : h(o, t, e)
            }
            var S, P = ((S = P || {})[S.Open = 0] = "Open", S[S.Closed = 1] = "Closed", S),
                I = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(I || {}),
                k = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(k || {}),
                w = (e => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.SetDisabled = 2] = "SetDisabled", e[e.GoToOption = 3] = "GoToOption", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e))(w || {});

            function E(e, t = (e => e)) {
                let o = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
                    n = (0, C.z2)(t(e.options.slice()), (e => e.dataRef.current.domRef.current)),
                    r = o ? n.indexOf(o) : null;
                return -1 === r && (r = null), {
                    options: n,
                    activeOptionIndex: r
                }
            }
            let M = {
                    1: e => e.disabled || 1 === e.comboboxState ? e : { ...e,
                        activeOptionIndex: null,
                        comboboxState: 1
                    },
                    0(e) {
                        if (e.disabled || 0 === e.comboboxState) return e;
                        let t = e.activeOptionIndex,
                            {
                                value: o,
                                mode: n
                            } = e.comboboxPropsRef.current,
                            r = e.options.findIndex((e => {
                                let t = e.dataRef.current.value;
                                return (0, d.E)(n, {
                                    1: () => o.includes(t),
                                    0: () => o === t
                                })
                            }));
                        return -1 !== r && (t = r), { ...e,
                            comboboxState: 0,
                            activeOptionIndex: t
                        }
                    },
                    2: (e, t) => e.disabled === t.disabled ? e : { ...e,
                        disabled: t.disabled
                    },
                    3(e, t) {
                        var o;
                        if (e.disabled || e.optionsRef.current && !e.optionsPropsRef.current.static && 1 === e.comboboxState) return e;
                        let n = E(e);
                        if (null === n.activeOptionIndex) {
                            let e = n.options.findIndex((e => !e.dataRef.current.disabled)); - 1 !== e && (n.activeOptionIndex = e)
                        }
                        let r = (0, f.d)(t, {
                            resolveItems: () => n.options,
                            resolveActiveIndex: () => n.activeOptionIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                        return { ...e,
                            ...n,
                            activeOptionIndex: r,
                            activationTrigger: null != (o = t.trigger) ? o : 1
                        }
                    },
                    4: (e, t) => {
                        let o = {
                                id: t.id,
                                dataRef: t.dataRef
                            },
                            n = E(e, (e => [...e, o]));
                        if (null === e.activeOptionIndex) {
                            let {
                                value: r,
                                mode: i
                            } = e.comboboxPropsRef.current, a = t.dataRef.current.value;
                            (0, d.E)(i, {
                                1: () => r.includes(a),
                                0: () => r === a
                            }) && (n.activeOptionIndex = n.options.indexOf(o))
                        }
                        let r = { ...e,
                            ...n,
                            activationTrigger: 1
                        };
                        return e.comboboxPropsRef.current.__demoMode && void 0 === e.comboboxPropsRef.current.value && (r.activeOptionIndex = 0), r
                    },
                    5: (e, t) => {
                        let o = E(e, (e => {
                            let o = e.findIndex((e => e.id === t.id));
                            return -1 !== o && e.splice(o, 1), e
                        }));
                        return { ...e,
                            ...o,
                            activationTrigger: 1
                        }
                    }
                },
                A = (0, n.createContext)(null);

            function V(e) {
                let t = (0, n.useContext)(A);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, V), t
                }
                return t
            }
            A.displayName = "ComboboxContext";
            let D = (0, n.createContext)(null);

            function F() {
                let e = (0, n.useContext)(D);
                if (null === e) {
                    let e = new Error("ComboboxActions is missing a parent <Combobox /> component.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, F), e
                }
                return e
            }
            D.displayName = "ComboboxActions";
            let _ = (0, n.createContext)(null);

            function N() {
                let e = (0, n.useContext)(_);
                if (null === e) {
                    let e = new Error("ComboboxData is missing a parent <Combobox /> component.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, N), e
                }
                return e
            }

            function L(e, t) {
                return (0, d.E)(t.type, M, e, t)
            }
            _.displayName = "ComboboxData";
            let $ = n.Fragment,
                Y = (0, c.yV)((function(e, t) {
                    let {
                        name: o,
                        value: r,
                        onChange: i,
                        disabled: l = !1,
                        __demoMode: u = !1,
                        nullable: s = !1,
                        multiple: p = !1,
                        ...b
                    } = e, v = (0, n.useRef)(!1), g = (0, n.useRef)({
                        value: r,
                        mode: p ? 1 : 0,
                        onChange: i,
                        nullable: s,
                        __demoMode: u
                    });
                    g.current.value = r, g.current.mode = p ? 1 : 0, g.current.nullable = s;
                    let R = (0, n.useRef)({
                            static: !1,
                            hold: !1
                        }),
                        C = (0, n.useRef)({
                            displayValue: void 0
                        }),
                        y = (0, n.useReducer)(L, {
                            comboboxState: u ? 0 : 1,
                            comboboxPropsRef: g,
                            optionsPropsRef: R,
                            inputPropsRef: C,
                            labelRef: (0, n.createRef)(),
                            inputRef: (0, n.createRef)(),
                            buttonRef: (0, n.createRef)(),
                            optionsRef: (0, n.createRef)(),
                            disabled: l,
                            options: [],
                            activeOptionIndex: null,
                            activationTrigger: 1
                        }),
                        [{
                            comboboxState: T,
                            options: S,
                            activeOptionIndex: P,
                            optionsRef: I,
                            inputRef: k,
                            buttonRef: w
                        }, E] = y,
                        M = (0, n.useMemo)((() => ({
                            value: r,
                            mode: p ? 1 : 0,
                            get activeOptionIndex() {
                                if (v.current && null === P && S.length > 0) {
                                    let e = S.findIndex((e => !e.dataRef.current.disabled));
                                    if (-1 !== e) return e
                                }
                                return P
                            }
                        })), [r, P, S]),
                        V = M.activeOptionIndex;
                    (0, a.e)((() => {
                        g.current.onChange = e => (0, d.E)(M.mode, {
                            0: () => i(e),
                            1() {
                                let t = M.value.slice(),
                                    o = t.indexOf(e);
                                return -1 === o ? t.push(e) : t.splice(o, 1), i(t)
                            }
                        })
                    }), [M, i, g, M]), (0, a.e)((() => E({
                        type: 2,
                        disabled: l
                    })), [l]), (0, m.O)([w, k, I], (() => {
                        0 === T && E({
                            type: 1
                        })
                    }));
                    let F = null === V ? null : S[V].dataRef.current.value,
                        N = (0, n.useMemo)((() => ({
                            open: 0 === T,
                            disabled: l,
                            activeIndex: V,
                            activeOption: F
                        })), [T, l, S, V]),
                        Y = (0, n.useCallback)((() => {
                            var e;
                            if (!k.current) return;
                            let t = C.current.displayValue;
                            k.current.value = "function" == typeof t ? null != (e = t(r)) ? e : "" : "string" == typeof r ? r : ""
                        }), [r, k, C]),
                        B = (0, n.useCallback)((e => {
                            let t = S.find((t => t.id === e));
                            if (!t) return;
                            let {
                                dataRef: o
                            } = t;
                            g.current.onChange(o.current.value), Y()
                        }), [S, g, k]),
                        j = (0, n.useCallback)((() => {
                            if (null !== V) {
                                let {
                                    dataRef: e,
                                    id: t
                                } = S[V];
                                g.current.onChange(e.current.value), Y(), E({
                                    type: 3,
                                    focus: f.T.Specific,
                                    id: t
                                })
                            }
                        }), [V, S, g, k]),
                        U = (0, n.useMemo)((() => ({
                            selectOption: B,
                            selectActiveOption: j,
                            openCombobox() {
                                E({
                                    type: 0
                                }), v.current = !0
                            },
                            closeCombobox() {
                                E({
                                    type: 1
                                }), v.current = !1
                            },
                            goToOption: (e, t, o) => (v.current = !1, e === f.T.Specific ? E({
                                type: 3,
                                focus: f.T.Specific,
                                id: t,
                                trigger: o
                            }) : E({
                                type: 3,
                                focus: e,
                                trigger: o
                            })),
                            registerOption: (e, t) => (E({
                                type: 4,
                                id: e,
                                dataRef: t
                            }), () => E({
                                type: 5,
                                id: e
                            }))
                        })), [B, j, E]);
                    (0, a.e)((() => {
                        1 === T && Y()
                    }), [Y, T]), (0, a.e)(Y, [Y]);
                    let G = null === t ? {} : {
                        ref: t
                    };
                    return n.createElement(D.Provider, {
                        value: U
                    }, n.createElement(_.Provider, {
                        value: M
                    }, n.createElement(A.Provider, {
                        value: y
                    }, n.createElement(x.up, {
                        value: (0, d.E)(T, {
                            0: x.ZM.Open,
                            1: x.ZM.Closed
                        })
                    }, null != o && null != r && h({
                        [o]: r
                    }).map((([e, t]) => n.createElement(O, { ...(0, c.oA)({
                            key: e,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            name: e,
                            value: t
                        })
                    }))), (0, c.sY)({
                        ourProps: G,
                        theirProps: b,
                        slot: N,
                        defaultTag: $,
                        name: "Combobox"
                    })))))
                })),
                B = (0, c.yV)((function(e, t) {
                    var o, p;
                    let {
                        value: v,
                        onChange: m,
                        displayValue: x,
                        ...g
                    } = e, [R] = V("Combobox.Input"), C = N(), O = F(), h = (0, s.T)(R.inputRef, t), y = R.inputPropsRef, T = `headlessui-combobox-input-${(0,i.M)()}`, S = (0, r.G)(), P = (0, l.E)(m);
                    (0, a.e)((() => {
                        y.current.displayValue = x
                    }), [x, y]);
                    let I = (0, n.useCallback)((e => {
                            switch (e.key) {
                                case b.R.Backspace:
                                case b.R.Delete:
                                    if (0 !== C.mode || !R.comboboxPropsRef.current.nullable) return;
                                    let t = e.currentTarget;
                                    S.requestAnimationFrame((() => {
                                        "" === t.value && (R.comboboxPropsRef.current.onChange(null), R.optionsRef.current && (R.optionsRef.current.scrollTop = 0), O.goToOption(f.T.Nothing))
                                    }));
                                    break;
                                case b.R.Enter:
                                    if (0 !== R.comboboxState) return;
                                    if (e.preventDefault(), e.stopPropagation(), null === C.activeOptionIndex) return void O.closeCombobox();
                                    O.selectActiveOption(), 0 === C.mode && O.closeCombobox();
                                    break;
                                case b.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), (0, d.E)(R.comboboxState, {
                                        0: () => {
                                            O.goToOption(f.T.Next)
                                        },
                                        1: () => {
                                            O.openCombobox(), S.nextFrame((() => {
                                                C.value || O.goToOption(f.T.Next)
                                            }))
                                        }
                                    });
                                case b.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), (0, d.E)(R.comboboxState, {
                                        0: () => {
                                            O.goToOption(f.T.Previous)
                                        },
                                        1: () => {
                                            O.openCombobox(), S.nextFrame((() => {
                                                C.value || O.goToOption(f.T.Last)
                                            }))
                                        }
                                    });
                                case b.R.Home:
                                case b.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), O.goToOption(f.T.First);
                                case b.R.End:
                                case b.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), O.goToOption(f.T.Last);
                                case b.R.Escape:
                                    return e.preventDefault(), R.optionsRef.current && !R.optionsPropsRef.current.static && e.stopPropagation(), O.closeCombobox();
                                case b.R.Tab:
                                    O.selectActiveOption(), O.closeCombobox()
                            }
                        }), [S, R, O, C]),
                        k = (0, n.useCallback)((e => {
                            var t;
                            O.openCombobox(), null == (t = P.current) || t.call(P, e)
                        }), [O, P]),
                        w = u((() => {
                            if (R.labelRef.current) return [R.labelRef.current.id].join(" ")
                        }), [R.labelRef.current]),
                        E = (0, n.useMemo)((() => ({
                            open: 0 === R.comboboxState,
                            disabled: R.disabled
                        })), [R]),
                        M = {
                            ref: h,
                            id: T,
                            role: "combobox",
                            type: "text",
                            "aria-controls": null == (o = R.optionsRef.current) ? void 0 : o.id,
                            "aria-expanded": R.disabled ? void 0 : 0 === R.comboboxState,
                            "aria-activedescendant": null === C.activeOptionIndex || null == (p = R.options[C.activeOptionIndex]) ? void 0 : p.id,
                            "aria-multiselectable": 1 === C.mode || void 0,
                            "aria-labelledby": w,
                            disabled: R.disabled,
                            onKeyDown: I,
                            onChange: k
                        };
                    return (0, c.sY)({
                        ourProps: M,
                        theirProps: g,
                        slot: E,
                        defaultTag: "input",
                        name: "Combobox.Input"
                    })
                })),
                j = (0, c.yV)((function(e, t) {
                    var o;
                    let [a] = V("Combobox.Button"), l = N(), d = F(), p = (0, s.T)(a.buttonRef, t), m = `headlessui-combobox-button-${(0,i.M)()}`, x = (0, r.G)(), R = (0, n.useCallback)((e => {
                        switch (e.key) {
                            case b.R.ArrowDown:
                                return e.preventDefault(), e.stopPropagation(), 1 === a.comboboxState && (d.openCombobox(), x.nextFrame((() => {
                                    l.value || d.goToOption(f.T.First)
                                }))), x.nextFrame((() => {
                                    var e;
                                    return null == (e = a.inputRef.current) ? void 0 : e.focus({
                                        preventScroll: !0
                                    })
                                }));
                            case b.R.ArrowUp:
                                return e.preventDefault(), e.stopPropagation(), 1 === a.comboboxState && (d.openCombobox(), x.nextFrame((() => {
                                    l.value || d.goToOption(f.T.Last)
                                }))), x.nextFrame((() => {
                                    var e;
                                    return null == (e = a.inputRef.current) ? void 0 : e.focus({
                                        preventScroll: !0
                                    })
                                }));
                            case b.R.Escape:
                                return e.preventDefault(), a.optionsRef.current && !a.optionsPropsRef.current.static && e.stopPropagation(), d.closeCombobox(), x.nextFrame((() => {
                                    var e;
                                    return null == (e = a.inputRef.current) ? void 0 : e.focus({
                                        preventScroll: !0
                                    })
                                }));
                            default:
                                return
                        }
                    }), [x, a, d, l]), C = (0, n.useCallback)((e => {
                        if ((0, v.P)(e.currentTarget)) return e.preventDefault();
                        0 === a.comboboxState ? d.closeCombobox() : (e.preventDefault(), d.openCombobox()), x.nextFrame((() => {
                            var e;
                            return null == (e = a.inputRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }))
                    }), [d, x, a]), O = u((() => {
                        if (a.labelRef.current) return [a.labelRef.current.id, m].join(" ")
                    }), [a.labelRef.current, m]), h = (0, n.useMemo)((() => ({
                        open: 0 === a.comboboxState,
                        disabled: a.disabled
                    })), [a]), y = e, T = {
                        ref: p,
                        id: m,
                        type: (0, g.f)(e, a.buttonRef),
                        tabIndex: -1,
                        "aria-haspopup": !0,
                        "aria-controls": null == (o = a.optionsRef.current) ? void 0 : o.id,
                        "aria-expanded": a.disabled ? void 0 : 0 === a.comboboxState,
                        "aria-labelledby": O,
                        disabled: a.disabled,
                        onClick: C,
                        onKeyDown: R
                    };
                    return (0, c.sY)({
                        ourProps: T,
                        theirProps: y,
                        slot: h,
                        defaultTag: "button",
                        name: "Combobox.Button"
                    })
                })),
                U = (0, c.yV)((function(e, t) {
                    let [o] = V("Combobox.Label"), r = `headlessui-combobox-label-${(0,i.M)()}`, a = (0, s.T)(o.labelRef, t), l = (0, n.useCallback)((() => {
                        var e;
                        return null == (e = o.inputRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }), [o.inputRef]), u = (0, n.useMemo)((() => ({
                        open: 0 === o.comboboxState,
                        disabled: o.disabled
                    })), [o]);
                    return (0, c.sY)({
                        ourProps: {
                            ref: a,
                            id: r,
                            onClick: l
                        },
                        theirProps: e,
                        slot: u,
                        defaultTag: "label",
                        name: "Combobox.Label"
                    })
                })),
                G = c.AN.RenderStrategy | c.AN.Static,
                q = (0, c.yV)((function(e, t) {
                    var o;
                    let {
                        hold: r = !1,
                        ...l
                    } = e, [d] = V("Combobox.Options"), p = N(), {
                        optionsPropsRef: b
                    } = d, f = (0, s.T)(d.optionsRef, t), v = `headlessui-combobox-options-${(0,i.M)()}`, m = (0, x.oJ)(), g = null !== m ? m === x.ZM.Open : 0 === d.comboboxState;
                    (0, a.e)((() => {
                        var t;
                        b.current.static = null != (t = e.static) && t
                    }), [b, e.static]), (0, a.e)((() => {
                        b.current.hold = r
                    }), [r, b]), (0, R.B)({
                        container: d.optionsRef.current,
                        enabled: 0 === d.comboboxState,
                        accept: e => "option" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                        walk(e) {
                            e.setAttribute("role", "none")
                        }
                    });
                    let C = u((() => {
                            var e, t, o;
                            return null != (o = null == (e = d.labelRef.current) ? void 0 : e.id) ? o : null == (t = d.buttonRef.current) ? void 0 : t.id
                        }), [d.labelRef.current, d.buttonRef.current]),
                        O = (0, n.useMemo)((() => ({
                            open: 0 === d.comboboxState
                        })), [d]),
                        h = {
                            "aria-activedescendant": null === p.activeOptionIndex || null == (o = d.options[p.activeOptionIndex]) ? void 0 : o.id,
                            "aria-labelledby": C,
                            role: "listbox",
                            id: v,
                            ref: f
                        };
                    return (0, c.sY)({
                        ourProps: h,
                        theirProps: l,
                        slot: O,
                        defaultTag: "ul",
                        features: G,
                        visible: g,
                        name: "Combobox.Options"
                    })
                })),
                K = (0, c.yV)((function(e, t) {
                    let {
                        disabled: o = !1,
                        value: r,
                        ...l
                    } = e, [u] = V("Combobox.Option"), b = N(), v = F(), m = `headlessui-combobox-option-${(0,i.M)()}`, x = null !== b.activeOptionIndex && u.options[b.activeOptionIndex].id === m, g = (0, d.E)(b.mode, {
                        1: () => b.value.includes(r),
                        0: () => b.value === r
                    }), R = (0, n.useRef)(null), C = (0, n.useRef)({
                        disabled: o,
                        value: r,
                        domRef: R
                    }), O = (0, s.T)(t, R);
                    (0, a.e)((() => {
                        C.current.disabled = o
                    }), [C, o]), (0, a.e)((() => {
                        C.current.value = r
                    }), [C, r]), (0, a.e)((() => {
                        var e, t;
                        C.current.textValue = null == (t = null == (e = R.current) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
                    }), [C, R]);
                    let h = (0, n.useCallback)((() => v.selectOption(m)), [v, m]);
                    (0, a.e)((() => v.registerOption(m, C)), [C, m]);
                    let y = (0, n.useRef)(!u.comboboxPropsRef.current.__demoMode);
                    (0, a.e)((() => {
                        if (!u.comboboxPropsRef.current.__demoMode) return;
                        let e = (0, p.k)();
                        return e.requestAnimationFrame((() => {
                            y.current = !0
                        })), e.dispose
                    }), []), (0, a.e)((() => {
                        if (0 !== u.comboboxState || !x || !y.current || 0 === u.activationTrigger) return;
                        let e = (0, p.k)();
                        return e.requestAnimationFrame((() => {
                            var e, t;
                            null == (t = null == (e = R.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })), e.dispose
                    }), [R, x, u.comboboxState, u.activationTrigger, b.activeOptionIndex]);
                    let T = (0, n.useCallback)((e => {
                            if (o) return e.preventDefault();
                            h(), 0 === b.mode && (v.closeCombobox(), (0, p.k)().nextFrame((() => {
                                var e;
                                return null == (e = u.inputRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            })))
                        }), [v, u.inputRef, o, h]),
                        S = (0, n.useCallback)((() => {
                            if (o) return v.goToOption(f.T.Nothing);
                            v.goToOption(f.T.Specific, m)
                        }), [o, m, v]),
                        P = (0, n.useCallback)((() => {
                            o || x || v.goToOption(f.T.Specific, m, 0)
                        }), [o, x, m, v]),
                        I = (0, n.useCallback)((() => {
                            o || !x || u.optionsPropsRef.current.hold || v.goToOption(f.T.Nothing)
                        }), [o, x, v, u.comboboxState, u.comboboxPropsRef]),
                        k = (0, n.useMemo)((() => ({
                            active: x,
                            selected: g,
                            disabled: o
                        })), [x, g, o]);
                    return (0, c.sY)({
                        ourProps: {
                            id: m,
                            ref: O,
                            role: "option",
                            tabIndex: !0 === o ? void 0 : -1,
                            "aria-disabled": !0 === o || void 0,
                            "aria-selected": !0 === g || void 0,
                            disabled: void 0,
                            onClick: T,
                            onFocus: S,
                            onPointerMove: P,
                            onMouseMove: P,
                            onPointerLeave: I,
                            onMouseLeave: I
                        },
                        theirProps: l,
                        slot: k,
                        defaultTag: "li",
                        name: "Combobox.Option"
                    })
                })),
                Z = Object.assign(Y, {
                    Input: B,
                    Button: j,
                    Label: U,
                    Options: q,
                    Option: K
                })
        },
        42708: function(e, t, o) {
            "use strict";
            o.d(t, {
                YD: function() {
                    return p
                }
            });
            var n = o(67294),
                r = Object.defineProperty,
                i = (e, t, o) => (((e, t, o) => {
                    t in e ? r(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: o
                    }) : e[t] = o
                })(e, "symbol" !== typeof t ? t + "" : t, o), o),
                a = new Map,
                l = new WeakMap,
                u = 0,
                s = void 0;

            function c(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(o=e.root,o?(l.has(o)||(u+=1,l.set(o,u.toString())),l.get(o)):"0"):e[t]}`;
                    var o
                })).toString()
            }

            function d(e, t, o = {}, n = s) {
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== n) {
                    const r = e.getBoundingClientRect();
                    return t(n, {
                        isIntersecting: n,
                        target: e,
                        intersectionRatio: "number" === typeof o.threshold ? o.threshold : 0,
                        time: 0,
                        boundingClientRect: r,
                        intersectionRect: r,
                        rootBounds: r
                    }), () => {}
                }
                const {
                    id: r,
                    observer: i,
                    elements: l
                } = function(e) {
                    let t = c(e),
                        o = a.get(t);
                    if (!o) {
                        const n = new Map;
                        let r;
                        const i = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var o;
                                const i = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = i), null == (o = n.get(t.target)) || o.forEach((e => {
                                    e(i, t)
                                }))
                            }))
                        }), e);
                        r = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), o = {
                            id: t,
                            observer: i,
                            elements: n
                        }, a.set(t, o)
                    }
                    return o
                }(o);
                let u = l.get(e) || [];
                return l.has(e) || l.set(e, u), u.push(t), i.observe(e),
                    function() {
                        u.splice(u.indexOf(t), 1), 0 === u.length && (l.delete(e), i.unobserve(e)), 0 === l.size && (i.disconnect(), a.delete(r))
                    }
            }
            n.Component;

            function p({
                threshold: e,
                delay: t,
                trackVisibility: o,
                rootMargin: r,
                root: i,
                triggerOnce: a,
                skip: l,
                initialInView: u,
                fallbackInView: s,
                onChange: c
            } = {}) {
                var p;
                const [b, f] = n.useState(null), v = n.useRef(), [m, x] = n.useState({
                    inView: !!u,
                    entry: void 0
                });
                v.current = c, n.useEffect((() => {
                    if (l || !b) return;
                    let n;
                    return n = d(b, ((e, t) => {
                        x({
                            inView: e,
                            entry: t
                        }), v.current && v.current(e, t), t.isIntersecting && a && n && (n(), n = void 0)
                    }), {
                        root: i,
                        rootMargin: r,
                        threshold: e,
                        trackVisibility: o,
                        delay: t
                    }, s), () => {
                        n && n()
                    }
                }), [Array.isArray(e) ? e.toString() : e, b, i, r, a, l, o, s, t]);
                const g = null == (p = m.entry) ? void 0 : p.target,
                    R = n.useRef();
                b || !g || a || l || R.current === g || (R.current = g, x({
                    inView: !!u,
                    entry: void 0
                }));
                const C = [f, m.inView, m.entry];
                return C.ref = C[0], C.inView = C[1], C.entry = C[2], C
            }
        }
    }
]);