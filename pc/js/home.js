duin.tryout = {};
var newSlide = function(e) {
    var n = {container: "",show: {container: "",data: null,template: ""},operate: {container: "",data: null,total: "",cur: "",hoverClass: "active",fun: null,triggerType: "click"},control: {width: "",height: "",interval: 5e3,animate: {type: "shadow","static": {},dynamic: {animateTime: 500,direction: 0},shadow: {animateTime: 800,zIndex: 1}}}};
    $.extend(!0, n, e);
    var t = /{(.*?)}/gi, i = n.show, r = n.operate, a = n.control, o = $(i.container), c = ($(r.total), $(r.cur), o.children()), u = $(r.container), d = (u.find("li"), a.animate.type), l = a.animate[d], s = i.data ? i.data.length : c.length;
    if (1 !== s) {
        var h = 0, m = !1, v = 0, f = {currIndex: v,preIndex: v - 1,slideCount: i.data ? i.data.length : c.length,setOperateClass: function(e) {
                u.children().removeClass(r.cur).eq(e).addClass(r.cur)
            },init: function(e) {
                this.setOperateClass(0), this[d].init(e)
            },main: function(e) {
                if (i.data && !e && this.assembly(), h = c.length) {
                    if (c.length * c.eq(0).outerWidth(!0) <= $(n.container).width())
                        return a.prev && $(a.prev).hide(), void (a.next && $(a.next).hide());
                    this.init(e), a.interval && this.autoRun(), this.handleEvent()
                }
            },autoRun: function() {
                this.autoSetTimer && clearInterval(this.autoSetTimer);
                {
                    var e = this;
                    u.find("li")
                }
                this.autoSetTimer = setInterval(function() {
                    e.slideCount = (e.currIndex + 1) % s, e.preIndex = e.currIndex, e.currIndex = e.slideCount, e[d].run()
                }, a.interval)
            },shadow: {init: function() {
                    var e = l.zIndex;
                    c.css({opacity: 0,"z-index": e}), c.eq(0).css({opacity: 1,"z-index": e + 1})
                },run: function() {
                    var e = this, n = f, t = n.currIndex, i = n.preIndex, a = l.zIndex;
                    this.animating && c.stop(!0, !0), this.animating = !0, n.setOperateClass(t), c.eq(t).css({opacity: 1}), c.eq(i).fadeTo(l.animateTime, 0, function() {
                        e.animating = !1, c.eq(i).css({opacity: 0,"z-index": a}), c.eq(t).css("z-index", a + 1)
                    }), "function" == typeof r.fun && r.fun(t)
                },event: function() {
                    var e = this, n = f;
                    u.children()[r.triggerType](function() {
                        var t = $(this), i = t.index();
                        i != n.currIndex && (n.preIndex = n.currIndex, n.currIndex = i, e.run())
                    })
                }},toStr: function(e, n) {
                var e = e.replace(t, function(e, t) {
                    var i = n[t];
                    return i ? i : ""
                });
                return e
            },assembly: function() {
                {
                    var e = this, n = [], t = i.data;
                    r.data
                }
                $.each(t, function(t, r) {
                    r.i = t + 1, n.push(e.toStr(i.template, r))
                }), o.html(n.join("")), c = o.children()
            },handleEvent: function() {
                var e = this;
                this[d].event(), a.prev && $(a.prev).click(function() {
                    if (m)
                        return !1;
                    e.autoSetTimer && clearInterval(e.autoSetTimer);
                    var n = e.currIndex - 1;
                    return e.preIndex = e.currIndex, e.currIndex = n, e[d].run(!0), !1
                }), a.next && $(a.next).click(function() {
                    if (m)
                        return !1;
                    e.autoSetTimer && clearInterval(e.autoSetTimer);
                    var n = e.currIndex + 1;
                    return e.preIndex = e.currIndex, e.currIndex = n, e[d].run(!0), !1
                }), a.interval && $(n.container).mouseenter(function() {
                    e.autoSetTimer && clearInterval(e.autoSetTimer)
                }).mouseleave(function() {
                    e.slideCount = e.currIndex, e.autoRun()
                })
            }};
        f.main()
    }
};
!function(e) {
    duin.home = duin.home ? duin.home : {};
    var n = function() {
        var n = {buyRecommGoodsBtn: ".home-p-buy"};
        return {init: function() {
                this.bindEvents(), this.bindTab()
            },bindEvents: function() {
                e(n.buyRecommGoodsBtn).click(function(e) {
                    1 !== parseInt(duin.userinfo.islogin) && (e.preventDefault(), duin.login())
                })
            },bindTab: function() {
                newSlide({container: ".home-rank-outer",show: {container: ".home-rank-wrapper"},operate: {container: ".home-rank-icon",hoverClass: "active",cur: "active",triggerType: "click"},control: {width: "",height: "",prev: "",next: "",interval: 5e3,animate: {type: "shadow","static": {},dynamic: {animateTime: 500,direction: 0},shadow: {animateTime: 800,zIndex: 1}}}})
            }}
    }();
    
}(jQuery);
;
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {def: "easeOutQuad",swing: function(n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    },easeInQuad: function(n, e, t, u, a) {
        return u * (e /= a) * e + t
    },easeOutQuad: function(n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    },easeInOutQuad: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    },easeInCubic: function(n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    },easeOutCubic: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    },easeInOutCubic: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    },easeInQuart: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    },easeOutQuart: function(n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    },easeInOutQuart: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    },easeInQuint: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    },easeOutQuint: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    },easeInOutQuint: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },easeInSine: function(n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    },easeOutSine: function(n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    },easeInOutSine: function(n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    },easeInExpo: function(n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    },easeOutExpo: function(n, e, t, u, a) {
        return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
    },easeInOutExpo: function(n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    },easeInCirc: function(n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    },easeOutCirc: function(n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    },easeInOutCirc: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },easeInElastic: function(n, e, t, u, a) {
        var r = 1.70158, i = 0, s = u;
        if (0 == e)
            return t;
        if (1 == (e /= a))
            return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else
            var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i)) + t
    },easeOutElastic: function(n, e, t, u, a) {
        var r = 1.70158, i = 0, s = u;
        if (0 == e)
            return t;
        if (1 == (e /= a))
            return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else
            var r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - r) * Math.PI / i) + u + t
    },easeInOutElastic: function(n, e, t, u, a) {
        var r = 1.70158, i = 0, s = u;
        if (0 == e)
            return t;
        if (2 == (e /= a / 2))
            return t + u;
        if (i || (i = .3 * a * 1.5), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else
            var r = i / (2 * Math.PI) * Math.asin(u / s);
        return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) * .5 + u + t
    },easeInBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    },easeOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    },easeInOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * e * e * (((r *= 1.525) + 1) * e - r) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
    },easeInBounce: function(n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    },easeOutBounce: function(n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? 7.5625 * u * e * e + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },easeInOutBounce: function(n, e, t, u, a) {
        return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }});
;
!function(e) {
    "use strict";
    e.matchMedia = e.matchMedia || function(e) {
        var t, n = e.documentElement, a = n.firstElementChild || n.firstChild, r = e.createElement("body"), s = e.createElement("div");
        return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(s), function(e) {
            return s.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(r, a), t = 42 === s.offsetWidth, n.removeChild(r), {matches: t,media: e}
        }
    }(e.document)
}(this), function(e) {
    "use strict";
    function t() {
        w(!0)
    }
    var n = {};
    e.respond = n, n.update = function() {
    };
    var a = [], r = function() {
        var t = !1;
        try {
            t = new e.XMLHttpRequest
        } catch (n) {
            t = new e.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function() {
            return t
        }
    }(), s = function(e, t) {
        var n = r();
        n && (n.open("GET", e, !0), n.onreadystatechange = function() {
            4 !== n.readyState || 200 !== n.status && 304 !== n.status || t(n.responseText)
        }, 4 !== n.readyState && n.send(null))
    }, i = function(e) {
        return e.replace(n.regex.minmaxwh, "").match(n.regex.other)
    };
    if (n.ajax = s, n.queue = a, n.unsupportedmq = i, n.regex = {media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,only: /(only\s+)?([a-zA-Z]+)\s?/,minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other: /\([^\)]*\)/g}, n.mediaQueriesSupported = e.matchMedia && null !== e.matchMedia("only all") && e.matchMedia("only all").matches, !n.mediaQueriesSupported) {
        var o, l, m, d = e.document, h = d.documentElement, u = [], c = [], f = [], p = {}, g = 30, y = d.getElementsByTagName("head")[0] || h, x = d.getElementsByTagName("base")[0], v = y.getElementsByTagName("link"), E = function() {
            var e, t = d.createElement("div"), n = d.body, a = h.style.fontSize, r = n && n.style.fontSize, s = !1;
            return t.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = s = d.createElement("body"), n.style.background = "none"), h.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(t), s && h.insertBefore(n, h.firstChild), e = t.offsetWidth, s ? h.removeChild(n) : n.removeChild(t), h.style.fontSize = a, r && (n.style.fontSize = r), e = m = parseFloat(e)
        }, w = function(t) {
            var n = "clientWidth", a = h[n], r = "CSS1Compat" === d.compatMode && a || d.body[n] || a, s = {}, i = v[v.length - 1], p = (new Date).getTime();
            if (t && o && g > p - o)
                return e.clearTimeout(l), void (l = e.setTimeout(w, g));
            o = p;
            for (var x in u)
                if (u.hasOwnProperty(x)) {
                    var S = u[x], T = S.minw, C = S.maxw, b = null === T, $ = null === C, z = "em";
                    T && (T = parseFloat(T) * (T.indexOf(z) > -1 ? m || E() : 1)), C && (C = parseFloat(C) * (C.indexOf(z) > -1 ? m || E() : 1)), S.hasquery && (b && $ || !(b || r >= T) || !($ || C >= r)) || (s[S.media] || (s[S.media] = []), s[S.media].push(c[S.rules]))
                }
            for (var M in f)
                f.hasOwnProperty(M) && f[M] && f[M].parentNode === y && y.removeChild(f[M]);
            f.length = 0;
            for (var R in s)
                if (s.hasOwnProperty(R)) {
                    var O = d.createElement("style"), k = s[R].join("\n");
                    O.type = "text/css", O.media = R, y.insertBefore(O, i.nextSibling), O.styleSheet ? O.styleSheet.cssText = k : O.appendChild(d.createTextNode(k)), f.push(O)
                }
        }, S = function(e, t, a) {
            var r = e.replace(n.regex.comments, "").replace(n.regex.keyframes, "").match(n.regex.media), s = r && r.length || 0;
            t = t.substring(0, t.lastIndexOf("/"));
            var o = function(e) {
                return e.replace(n.regex.urls, "$1" + t + "$2$3")
            }, l = !s && a;
            t.length && (t += "/"), l && (s = 1);
            for (var m = 0; s > m; m++) {
                var d, h, f, p;
                l ? (d = a, c.push(o(e))) : (d = r[m].match(n.regex.findStyles) && RegExp.$1, c.push(RegExp.$2 && o(RegExp.$2))), f = d.split(","), p = f.length;
                for (var g = 0; p > g; g++)
                    h = f[g], i(h) || u.push({media: h.split("(")[0].match(n.regex.only) && RegExp.$2 || "all",rules: c.length - 1,hasquery: h.indexOf("(") > -1,minw: h.match(n.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),maxw: h.match(n.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")})
            }
            w()
        }, T = function() {
            if (a.length) {
                var t = a.shift();
                s(t.href, function(n) {
                    S(n, t.href, t.media), p[t.href] = !0, e.setTimeout(function() {
                        T()
                    }, 0)
                })
            }
        }, C = function() {
            for (var t = 0; t < v.length; t++) {
                var n = v[t], r = n.href, s = n.media, i = n.rel && "stylesheet" === n.rel.toLowerCase();
                r && i && !p[r] && (n.styleSheet && n.styleSheet.rawCssText ? (S(n.styleSheet.rawCssText, r, s), p[r] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(r) && !x || r.replace(RegExp.$1, "").split("/")[0] === e.location.host) && ("//" === r.substring(0, 2) && (r = e.location.protocol + r), a.push({href: r,media: s})))
            }
            T()
        };
        C(), n.update = C, n.getEmValue = E, e.addEventListener ? e.addEventListener("resize", t, !1) : e.attachEvent && e.attachEvent("onresize", t)
    }
}(this);
;
define("home:widget/banner/banner.js", function(e, n) {
    duin.home = duin.home ? duin.home : {};
    var i = function(e) {
        var n = {outerContainer: ".home-big-banner-out",wrapper: ".home-banner-wrapper",lis: ".home-banner-wrapper li",icoWrapper: ".home-banner-ico",curIcoClass: ".cur",timeInterval: 5e3}, i = $.extend(n, e);
        return {init: function() {
                this.bindEvents(), this.main()
            },run: function(e, n) {
                var r = "-100%", t = $(i.outerContainer), a = t.find(i.lis), s = a.length, o = parseInt(e.index(), 10), d = parseInt(n.index(), 10), u = (o + 1) % s, l = 0, c = a.eq(u), m = t.find(i.wrapper);
                if (t.find(".show").removeClass("show").addClass("hidden"), n.addClass("show").removeClass("hidden"), e.addClass("show").removeClass("hidden"), d > o) {
                    var f = "-100%";
                    m.css("left", f), r = "0%", l = "0%"
                } else
                    m.css("left", "0%"), r = "-100%", l = 0, o === s - 1 && (l = "-100%");
                var h = i.curIcoClass.substring(1);
                t.find(i.icoWrapper).find(i.curIcoClass).removeClass(h), t.find(i.icoWrapper).find("li").eq(o).addClass(h), m.animate({left: r}, 800, "easeOutQuint", function() {
                    n.addClass("hidden").removeClass("show"), m.css("left", l), c.addClass("show").removeClass("hidden")
                })
            },main: function() {
                var e = this;
                e.timer = setTimeout(function() {
                    e.setIntervalFunc()
                }, i.timeInterval)
            },setIntervalFunc: function() {
                var e = this, n = $(i.outerContainer), r = n.find(i.lis);
                if (r.length < 2)
                    return void clearTimeout(e.timer);
                var t = n.find(i.icoWrapper).find(i.curIcoClass).index(), a = r.eq(t), s = r.eq((t + 1) % r.length);
                e.run(s, a), clearTimeout(e.timer), e.timer = setTimeout(function() {
                    e.setIntervalFunc()
                }, i.timeInterval)
            },bindEvents: function() {
                var e = this, n = $(i.outerContainer), r = n.find(i.lis), t = n.find(i.wrapper);
                n.find(i.icoWrapper).find("li").click(function() {
                    var a = n.find(i.curIcoClass).index(), s = $(this).index();
                    if (a === s)
                        return !1;
                    t.is(":animated") && t.stop(!0, !0);
                    var o = r.eq(a), d = r.eq(s);
                    return clearTimeout(e.timer), $(i.outerContainer).find(".show").removeClass("show").addClass("hidden"), o.addClass("show").removeClass("hidden"), e.run(d, o), e.timer = setTimeout(function() {
                        e.setIntervalFunc()
                    }, i.timeInterval), !1
                }), t.find("li").mouseenter(function() {
                    return clearTimeout(e.timer), !1
                }).mouseleave(function() {
                    return e.main(), !1
                }), $(i.dirRight).length > 0 && ($(i.dirRight).click(function() {
                    if(t.find('li').length <= 1) {
                        return;
                    }
                    return t.is(":animated") && t.stop(!0, !0), clearTimeout(e.timer), e.setIntervalFunc(), !1
                }), $(i.dirLeft).click(function() {
                    if(t.find('li').length <= 1) {
                        return;
                    }
                    t.is(":animated") && t.stop(!0, !0), clearTimeout(e.timer);
                    var r = n.find(i.lis), a = r.length, s = n.find(i.icoWrapper).find(i.curIcoClass).index(), o = r.eq(s), d = r.eq((s + a - 1) % a);
                    return e.run(d, o), clearTimeout(e.timer), e.timer = setTimeout(function() {
                        e.setIntervalFunc()
                    }, i.timeInterval), !1
                }))
            }}
    };
    n.init = i
});
