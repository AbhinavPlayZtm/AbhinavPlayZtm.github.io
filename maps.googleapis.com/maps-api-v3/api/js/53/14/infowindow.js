google.maps.__gjsload__('infowindow', function(_) {
    var RK = function(a) {
            return !!a.infoWindow.get("logAsInternal")
        },
        TBa = function() {
            this.g = new _.w.Set
        },
        UBa = function(a, b) {
            if (1 === a.g.size) {
                var c = _.u(Array, "from").call(Array, _.u(a.g, "values").call(a.g))[0];
                c.El !== b.El && (c.set("map", null), a.g.delete(c))
            }
            a.g.add(b)
        },
        TK = function(a) {
            var b = this;
            this.j = this.D = null;
            this.F = this.G = !1;
            this.yn = a.yn;
            this.shouldFocus = a.shouldFocus;
            this.ga = document.createElement("div");
            this.ga.style.cursor = "default";
            this.ga.style.position = "absolute";
            this.ga.style.left = this.ga.style.top =
                "0";
            a.Cd.floatPane.appendChild(this.ga);
            this.anchor = _.jp("div", this.ga);
            this.o = _.jp("div", this.anchor);
            this.rb = _.jp("div", this.o);
            this.rb.setAttribute("role", "dialog");
            this.rb.tabIndex = -1;
            this.K = _.jp("div", this.o);
            this.g = _.jp("div", this.rb);
            _.jva(this.ga);
            _.dp(this.rb, "gm-style-iw");
            _.dp(this.anchor, "gm-style-iw-a");
            _.dp(this.o, "gm-style-iw-t");
            _.dp(this.K, "gm-style-iw-tc");
            _.dp(this.rb, "gm-style-iw-c");
            _.dp(this.g, "gm-style-iw-d");
            _.zk.g && !_.zk.F && (a.Sb ? this.rb.style.paddingLeft = "0" : this.rb.style.paddingRight =
                "0", this.rb.style.paddingBottom = "0", this.g.style.overflow = "scroll");
            SK(this, !1);
            _.Ch(this.ga, "mousedown", _.th);
            _.Ch(this.ga, "mouseup", _.th);
            _.Ch(this.ga, "mousemove", _.th);
            _.Ch(this.ga, "pointerdown", _.th);
            _.Ch(this.ga, "pointerup", _.th);
            _.Ch(this.ga, "pointermove", _.th);
            _.Ch(this.ga, "dblclick", _.th);
            _.Ch(this.ga, "click", _.th);
            _.Ch(this.ga, "touchstart", _.th);
            _.Ch(this.ga, "touchend", _.th);
            _.Ch(this.ga, "touchmove", _.th);
            _.Ro(this.ga, "contextmenu", this, this.tC);
            _.Ro(this.ga, "wheel", this, _.th);
            _.Ro(this.ga,
                "mousewheel", this, _.qh);
            _.Ro(this.ga, "MozMousePixelScroll", this, _.qh);
            this.h = new _.Yr({
                Hi: new _.R(8, 8),
                Qj: new _.Xi(14, 14),
                offset: new _.R(-6, -6),
                ownerElement: this.rb
            });
            this.rb.appendChild(this.h.element);
            _.Ch(this.h.element, "click", function(c) {
                _.th(c);
                _.N(b, "closeclick");
                b.set("open", !1)
            });
            this.C = new _.ak(function() {
                !b.G && b.get("content") && b.get("visible") && (_.N(b, "domready"), b.G = !0)
            }, 0);
            this.H = _.Ch(this.ga, "keydown", function(c) {
                "Escape" !== c.key && "Esc" !== c.key || !b.rb.contains(document.activeElement) ||
                    (c.stopPropagation(), _.N(b, "closeclick"), b.set("open", !1))
            })
        },
        VBa = function(a) {
            var b = !!a.get("open"),
                c = a.get("content");
            c = b ? c : null;
            if (c == a.j) SK(a, b && a.get("position"));
            else {
                if (a.j) {
                    var d = a.j.parentNode;
                    d == a.g && d.removeChild(a.j)
                }
                c && (a.G = !1, a.g.appendChild(c));
                SK(a, b && a.get("position"));
                a.j = c;
                a.resize()
            }
        },
        WBa = function(a) {
            var b = a.get("pixelOffset") || new _.Xi(0, 0),
                c = new _.Xi(a.rb.offsetWidth, a.rb.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            var d = b.height + 60,
                e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            0 > b.height && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        SK = function(a, b) {
            a.ga.style.visibility = b ? "" : "hidden";
            b && a.shouldFocus && (a.focus(), a.shouldFocus = !1);
            b ? XBa(a) : a.F = !1
        },
        XBa = function(a) {
            !a.F && a.get("open") && a.get("visible") && a.get("position") && (_.N(a, "visible"), a.F = !0)
        },
        UK = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = WBa(a),
                    d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.ip(a.anchor, b);
                b = a.get("zIndex");
                _.kp(a.ga, _.rg(b) ? b : e + 60);
                a.set("pixelBounds", _.Kj(d,
                    e, f, c))
            }
        },
        YBa = function(a, b) {
            var c = a.__gm;
            a = c.get("panes");
            c = c.get("innerContainer");
            b = {
                Cd: a,
                Sb: _.Lw.Sb(),
                yn: c,
                shouldFocus: b
            };
            return new TK(b)
        },
        VK = function(a, b, c) {
            var d = this;
            this.model = a;
            this.isOpen = !0;
            this.g = this.o = this.ha = null;
            this.h = [];
            var e = a.get("shouldFocus");
            this.C = YBa(b, e);
            var f = b.__gm;
            (e = b instanceof _.Vh) && c ? c.then(function(l) {
                d.isOpen && (d.ha = l, d.g = new _.OG(function(m) {
                    d.o = new _.sr(b, l, m, function() {});
                    l.ub(d.o);
                    return d.o
                }), d.g.bindTo("latLngPosition", a, "position"), ZBa(d))
            }) : (this.g = new _.OG,
                this.g.bindTo("latLngPosition", a, "position"), this.g.bindTo("center", f, "projectionCenterQ"), this.g.bindTo("zoom", f), this.g.bindTo("offset", f), this.g.bindTo("projection", b), this.g.bindTo("focus", b, "position"), ZBa(this));
            this.D = e ? RK(a) ? "Ia" : "Id" : null;
            this.F = e ? RK(a) ? 148284 : 148285 : null;
            var g = new _.PG(["scale"], "visible", function(l) {
                return null == l || .3 <= l
            });
            this.g && g.bindTo("scale", this.g);
            var h = this.C;
            h.set("logAsInternal", RK(a));
            h.bindTo("ariaLabel", a);
            h.bindTo("zIndex", a);
            h.bindTo("layoutPixelBounds",
                f, "pixelBounds");
            h.bindTo("disableAutoPan", a);
            h.bindTo("pendingFocus", a);
            h.bindTo("maxWidth", a);
            h.bindTo("minWidth", a);
            h.bindTo("content", a);
            h.bindTo("pixelOffset", a);
            h.bindTo("visible", g);
            this.j = new _.ak(function() {
                if (b instanceof _.Vh)
                    if (d.ha) {
                        var l = a.get("position");
                        l && _.Sja(b, d.ha, new _.mi(l), WBa(h))
                    } else c.then(function() {
                        d.j.start()
                    });
                else(l = h.get("pixelBounds")) ? _.N(f, "pantobounds", l) : d.j.start()
            }, 150);
            if (e) {
                var k = null;
                this.h.push(_.So(a, "position_changed", function() {
                    var l = a.get("position");
                    !l || a.get("disableAutoPan") || l.equals(k) || (d.j.start(), k = l)
                }))
            } else a.get("disableAutoPan") || this.j.start();
            h.set("open", !0);
            this.h.push(_.M(h, "domready", function() {
                a.trigger("domready")
            }));
            this.h.push(_.M(h, "visible", function() {
                a.trigger("visible")
            }));
            this.h.push(_.M(h, "closeclick", function() {
                a.close();
                a.trigger("closeclick")
            }));
            this.h.push(_.So(a, "pixelposition_changed", function() {
                $Ba(d)
            }));
            this.D && _.Q(b, this.D);
            this.F && _.P(b, this.F)
        },
        ZBa = function(a) {
            a.g && a.h.push(_.So(a.g, "pixelposition_changed",
                function() {
                    $Ba(a)
                }))
        },
        $Ba = function(a) {
            var b = a.model.get("pixelPosition") || a.g && a.g.get("pixelPosition");
            a.C.set("position", b)
        },
        aCa = function(a, b, c) {
            return b instanceof _.Vh ? new VK(a, b, c) : new VK(a, b)
        },
        bCa = function(a) {
            a = a.__gm;
            a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new TBa);
            return a.get("IW_AUTO_CLOSER")
        };
    _.B(TK, _.O);
    _.n = TK.prototype;
    _.n.ariaLabel_changed = function() {
        var a = this.get("ariaLabel");
        a ? this.rb.setAttribute("aria-label", a) : this.rb.removeAttribute("aria-label")
    };
    _.n.open_changed = function() {
        VBa(this)
    };
    _.n.content_changed = function() {
        VBa(this)
    };
    _.n.pendingFocus_changed = function() {
        this.get("pendingFocus") && (this.get("open") && this.get("visible") && this.get("position") ? _.Ck(this.rb, !0) : console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."), this.set("pendingFocus", !1))
    };
    _.n.dispose = function() {
        var a = this;
        setTimeout(function() {
            document.activeElement && document.activeElement !== document.body || (a.D && a.D !== document.body ? _.Ck(a.D, !0) || _.Ck(a.yn, !0) : _.Ck(a.yn, !0))
        });
        this.H && _.xh(this.H);
        this.ga.parentNode.removeChild(this.ga);
        this.C.stop();
        this.C.dispose()
    };
    _.n.getSize = function() {
        var a = this.get("layoutPixelBounds"),
            b = this.get("pixelOffset"),
            c = this.get("maxWidth") || 648,
            d = this.get("minWidth") || 0;
        if (!b) return null;
        a ? (b = a.wa - a.na - (11 + -b.height), a = a.ya - a.ta - 6, 240 <= a && (a -= 120), 240 <= b && (b -= 120)) : (a = 648, b = 654);
        a = Math.min(a, c);
        a = Math.max(d, a);
        a = Math.max(0, a);
        b = Math.max(0, b);
        return {
            de: new _.Xi(a, b),
            minWidth: d
        }
    };
    _.n.pixelOffset_changed = function() {
        var a = this.get("pixelOffset") || new _.Xi(0, 0);
        this.o.style.right = _.Oo(-a.width);
        this.o.style.bottom = _.Oo(-a.height + 11);
        this.resize()
    };
    _.n.layoutPixelBounds_changed = function() {
        this.resize()
    };
    _.n.resize = function() {
        var a = this.getSize();
        if (a) {
            var b = a.de;
            a = a.minWidth;
            this.rb.style.maxWidth = _.Oo(b.width);
            this.rb.style.maxHeight = _.Oo(b.height);
            this.rb.style.minWidth = _.Oo(a);
            this.g.style.maxHeight = _.zk.g ? _.Oo(b.height - 18) : _.Oo(b.height - 36);
            UK(this);
            this.C.start()
        }
    };
    _.n.position_changed = function() {
        this.get("position") ? (UK(this), SK(this, !!this.get("open"))) : SK(this, !1)
    };
    _.n.zIndex_changed = function() {
        UK(this)
    };
    _.n.visible_changed = function() {
        this.ga.style.display = this.get("visible") ? "" : "none";
        this.C.start();
        if (this.get("visible")) {
            var a = this.h.element.style.display;
            this.h.element.style.display = "none";
            this.h.element.getBoundingClientRect();
            this.h.element.style.display = a;
            XBa(this)
        } else this.F = !1
    };
    _.n.tC = function(a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d;) b = d == c, d = d.parentNode;
        b ? _.qh(a) : _.sh(a)
    };
    _.n.focus = function() {
        this.D = document.activeElement;
        var a;
        _.zk.G && (a = this.g.getBoundingClientRect());
        if (this.get("disableAutoPan")) _.Ck(this.rb, !0);
        else {
            var b = _.qp(this.g);
            if (b.length) {
                b = b[0];
                a = a || this.g.getBoundingClientRect();
                var c = b.getBoundingClientRect();
                _.Ck(c.bottom <= a.bottom && c.right <= a.right ? b : this.rb, !0)
            } else _.Ck(this.h.element, !0)
        }
    };
    VK.prototype.close = function() {
        if (this.isOpen) {
            this.isOpen = !1;
            for (var a = _.A(this.h), b = a.next(); !b.done; b = a.next()) _.xh(b.value);
            this.h.length = 0;
            this.j.stop();
            this.j.dispose();
            this.ha && this.o && this.ha.hf(this.o);
            a = this.C;
            a.unbindAll();
            a.set("open", !1);
            a.dispose();
            this.g && this.g.unbindAll()
        }
    };
    _.oh("infowindow", {
        py: function(a) {
            var b = null;
            _.So(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.Qs.g.delete(a), b.OC.close(), b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? f.get("innerContainer") ? (b = {
                        OC: aCa(a, e, e instanceof _.Vh ? f.h.then(function(g) {
                            return g.ha
                        }) : void 0),
                        Qs: bCa(e)
                    }, UBa(b.Qs, a)) : _.Nh(f, "innercontainer_changed", d) : _.Nh(f, "panes_changed", d)
                }
            })
        }
    });
});