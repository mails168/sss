!
function(e, t) {
	function n(e) {
		var t = e.length,
			n = lt.type(e);
		return lt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	function i(e) {
		var t = Ct[e] = {};
		return lt.each(e.match(ut) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	function r(e, n, i, r) {
		if (lt.acceptData(e)) {
			var o, a, s = lt.expando,
				l = "string" == typeof n,
				c = e.nodeType,
				u = c ? lt.cache : e,
				d = c ? e[s] : e[s] && s;
			if (d && u[d] && (r || u[d].data) || !l || i !== t) return d || (c ? e[s] = d = Z.pop() || lt.guid++ : d = s), u[d] || (u[d] = {}, c || (u[d].toJSON = lt.noop)), ("object" == typeof n || "function" == typeof n) && (r ? u[d] = lt.extend(u[d], n) : u[d].data = lt.extend(u[d].data, n)), o = u[d], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[lt.camelCase(n)] = i), l ? (a = o[n], null == a && (a = o[lt.camelCase(n)])) : a = o, a
		}
	}
	function o(e, t, n) {
		if (lt.acceptData(e)) {
			var i, r, o, a = e.nodeType,
				l = a ? lt.cache : e,
				c = a ? e[lt.expando] : lt.expando;
			if (l[c]) {
				if (t && (o = n ? l[c] : l[c].data)) {
					lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase)) : t in o ? t = [t] : (t = lt.camelCase(t), t = t in o ? [t] : t.split(" "));
					for (i = 0, r = t.length; r > i; i++) delete o[t[i]];
					if (!(n ? s : lt.isEmptyObject)(o)) return
				}(n || (delete l[c].data, s(l[c]))) && (a ? lt.cleanData([e], !0) : lt.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
			}
		}
	}
	function a(e, n, i) {
		if (i === t && 1 === e.nodeType) {
			var r = "data-" + n.replace(_t, "-$1").toLowerCase();
			if (i = e.getAttribute(r), "string" == typeof i) {
				try {
					i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Tt.test(i) ? lt.parseJSON(i) : i
				} catch (o) {}
				lt.data(e, n, i)
			} else i = t
		}
		return i
	}
	function s(e) {
		var t;
		for (t in e) if (("data" !== t || !lt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	function l() {
		return !0
	}
	function c() {
		return !1
	}
	function u(e, t) {
		do e = e[t];
		while (e && 1 !== e.nodeType);
		return e
	}
	function d(e, t, n) {
		if (t = t || 0, lt.isFunction(t)) return lt.grep(e, function(e, i) {
			var r = !! t.call(e, i, e);
			return r === n
		});
		if (t.nodeType) return lt.grep(e, function(e) {
			return e === t === n
		});
		if ("string" == typeof t) {
			var i = lt.grep(e, function(e) {
				return 1 === e.nodeType
			});
			if (Wt.test(t)) return lt.filter(t, i, !n);
			t = lt.filter(t, i)
		}
		return lt.grep(e, function(e) {
			return lt.inArray(e, t) >= 0 === n
		})
	}
	function f(e) {
		var t = Xt.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement) for (; t.length;) n.createElement(t.pop());
		return n
	}
	function p(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}
	function h(e) {
		var t = e.getAttributeNode("type");
		return e.type = (t && t.specified) + "/" + e.type, e
	}
	function m(e) {
		var t = on.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}
	function g(e, t) {
		for (var n, i = 0; null != (n = e[i]); i++) lt._data(n, "globalEval", !t || lt._data(t[i], "globalEval"))
	}
	function v(e, t) {
		if (1 === t.nodeType && lt.hasData(e)) {
			var n, i, r, o = lt._data(e),
				a = lt._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s) for (i = 0, r = s[n].length; r > i; i++) lt.event.add(t, n, s[n][i])
			}
			a.data && (a.data = lt.extend({}, a.data))
		}
	}
	function y(e, t) {
		var n, i, r;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !lt.support.noCloneEvent && t[lt.expando]) {
				r = lt._data(t);
				for (i in r.events) lt.removeEvent(t, i, r.handle);
				t.removeAttribute(lt.expando)
			}
			"script" === n && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	function b(e, n) {
		var i, r, o = 0,
			a = typeof e.getElementsByTagName !== Q ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Q ? e.querySelectorAll(n || "*") : t;
		if (!a) for (a = [], i = e.childNodes || e; null != (r = i[o]); o++)!n || lt.nodeName(r, n) ? a.push(r) : lt.merge(a, b(r, n));
		return n === t || n && lt.nodeName(e, n) ? lt.merge([e], a) : a
	}
	function x(e) {
		tn.test(e.type) && (e.defaultChecked = e.checked)
	}
	function w(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = _n.length; r--;) if (t = _n[r] + n, t in e) return t;
		return i
	}
	function k(e, t) {
		return e = t || e, "none" === lt.css(e, "display") || !lt.contains(e.ownerDocument, e)
	}
	function C(e, t) {
		for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = lt._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && k(i) && (o[a] = lt._data(i, "olddisplay", N(i.nodeName)))) : o[a] || (r = k(i), (n && "none" !== n || !r) && lt._data(i, "olddisplay", r ? n : lt.css(i, "display"))));
		for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
		return e
	}
	function T(e, t, n) {
		var i = yn.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}
	function _(e, t, n, i, r) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += lt.css(e, n + Tn[o], !0, r)), i ? ("content" === n && (a -= lt.css(e, "padding" + Tn[o], !0, r)), "margin" !== n && (a -= lt.css(e, "border" + Tn[o] + "Width", !0, r))) : (a += lt.css(e, "padding" + Tn[o], !0, r), "padding" !== n && (a += lt.css(e, "border" + Tn[o] + "Width", !0, r)));
		return a
	}
	function S(e, t, n) {
		var i = !0,
			r = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = dn(e),
			a = lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, o);
		if (0 >= r || null == r) {
			if (r = fn(e, t, o), (0 > r || null == r) && (r = e.style[t]), bn.test(r)) return r;
			i = a && (lt.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
		}
		return r + _(e, t, n || (a ? "border" : "content"), i, o) + "px"
	}
	function N(e) {
		var t = Y,
			n = wn[e];
		return n || (n = j(e, t), "none" !== n && n || (un = (un || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t), un.detach()), wn[e] = n), n
	}
	function j(e, t) {
		var n = lt(t.createElement(e)).appendTo(t.body),
			i = lt.css(n[0], "display");
		return n.remove(), i
	}
	function E(e, t, n, i) {
		var r;
		if (lt.isArray(t)) lt.each(t, function(t, r) {
			n || Nn.test(e) ? i(e, r) : E(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
		});
		else if (n || "object" !== lt.type(t)) i(e, t);
		else
		for (r in t) E(e + "[" + r + "]", t[r], n, i)
	}
	function I(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, r = 0,
				o = t.toLowerCase().match(ut) || [];
			if (lt.isFunction(n)) for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}
	function A(e, n, i, r) {
		function o(l) {
			var c;
			return a[l] = !0, lt.each(e[l] || [], function(e, l) {
				var u = l(n, i, r);
				return "string" != typeof u || s || a[u] ? s ? !(c = u) : t : (n.dataTypes.unshift(u), o(u), !1)
			}), c
		}
		var a = {},
			s = e === Pn;
		return o(n.dataTypes[0]) || !a["*"] && o("*")
	}
	function D(e, n) {
		var i, r, o = lt.ajaxSettings.flatOptions || {};
		for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
		return i && lt.extend(!0, e, i), e
	}
	function L(e, n, i) {
		var r, o, a, s, l = e.contents,
			c = e.dataTypes,
			u = e.responseFields;
		for (s in u) s in i && (n[u[s]] = i[s]);
		for (;
		"*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o) for (s in l) if (l[s] && l[s].test(o)) {
			c.unshift(s);
			break
		}
		if (c[0] in i) a = c[0];
		else {
			for (s in i) {
				if (!c[0] || e.converters[s + " " + c[0]]) {
					a = s;
					break
				}
				r || (r = s)
			}
			a = a || r
		}
		return a ? (a !== c[0] && c.unshift(a), i[a]) : t
	}
	function q(e, t) {
		var n, i, r, o, a = {},
			s = 0,
			l = e.dataTypes.slice(),
			c = l[0];
		if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1]) for (r in e.converters) a[r.toLowerCase()] = e.converters[r];
		for (; i = l[++s];) if ("*" !== i) {
			if ("*" !== c && c !== i) {
				if (r = a[c + " " + i] || a["* " + i], !r) for (n in a) if (o = n.split(" "), o[1] === i && (r = a[c + " " + o[0]] || a["* " + o[0]])) {
					r === !0 ? r = a[n] : a[n] !== !0 && (i = o[0], l.splice(s--, 0, i));
					break
				}
				if (r !== !0) if (r && e["throws"]) t = r(t);
				else
				try {
					t = r(t)
				} catch (u) {
					return {
						state: "parsererror",
						error: r ? u : "No conversion from " + c + " to " + i
					}
				}
			}
			c = i
		}
		return {
			state: "success",
			data: t
		}
	}
	function $() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}
	function H() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	function M() {
		return setTimeout(function() {
			Zn = t
		}), Zn = lt.now()
	}
	function B(e, t) {
		lt.each(t, function(t, n) {
			for (var i = (oi[t] || []).concat(oi["*"]), r = 0, o = i.length; o > r; r++) if (i[r].call(e, t, n)) return
		})
	}
	function O(e, t, n) {
		var i, r, o = 0,
			a = ri.length,
			s = lt.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (r) return !1;
				for (var t = Zn || M(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
				return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
			},
			c = s.promise({
				elem: e,
				props: lt.extend({}, t),
				opts: lt.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Zn || M(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = lt.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? c.tweens.length : 0;
					if (r) return this;
					for (r = !0; i > n; n++) c.tweens[n].run(1);
					return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
				}
			}),
			u = c.props;
		for (F(u, c.opts.specialEasing); a > o; o++) if (i = ri[o].call(c, e, u, c.opts)) return i;
		return B(c, u), lt.isFunction(c.opts.start) && c.opts.start.call(e, c), lt.fx.timer(lt.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	function F(e, t) {
		var n, i, r, o, a;
		for (r in e) if (i = lt.camelCase(r), o = t[i], n = e[r], lt.isArray(n) && (o = n[1], n = e[r] = n[0]), r !== i && (e[i] = n, delete e[r]), a = lt.cssHooks[i], a && "expand" in a) {
			n = a.expand(n), delete e[i];
			for (r in n) r in e || (e[r] = n[r], t[r] = o)
		} else t[i] = o
	}
	function U(e, t, n) {
		var i, r, o, a, s, l, c, u, d, f = this,
			p = e.style,
			h = {},
			m = [],
			g = e.nodeType && k(e);
		n.queue || (u = lt._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function() {
			u.unqueued || d()
		}), u.unqueued++, f.always(function() {
			f.always(function() {
				u.unqueued--, lt.queue(e, "fx").length || u.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === lt.css(e, "display") && "none" === lt.css(e, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", lt.support.shrinkWrapBlocks || f.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t) if (a = t[r], ti.exec(a)) {
			if (delete t[r], l = l || "toggle" === a, a === (g ? "hide" : "show")) continue;
			m.push(r)
		}
		if (o = m.length) {
			s = lt._data(e, "fxshow") || lt._data(e, "fxshow", {}), "hidden" in s && (g = s.hidden), l && (s.hidden = !g), g ? lt(e).show() : f.done(function() {
				lt(e).hide()
			}), f.done(function() {
				var t;
				lt._removeData(e, "fxshow");
				for (t in h) lt.style(e, t, h[t])
			});
			for (r = 0; o > r; r++) i = m[r], c = f.createTween(i, g ? s[i] : 0), h[i] = s[i] || lt.style(e, i), i in s || (s[i] = c.start, g && (c.end = c.start, c.start = "width" === i || "height" === i ? 1 : 0))
		}
	}
	function R(e, t, n, i, r) {
		return new R.prototype.init(e, t, n, i, r)
	}
	function W(e, t) {
		var n, i = {
			height: e
		},
			r = 0;
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Tn[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}
	function P(e) {
		return lt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var z, X, Q = typeof t,
		Y = e.document,
		V = e.location,
		J = e.jQuery,
		K = e.$,
		G = {},
		Z = [],
		et = "1.9.1",
		tt = Z.concat,
		nt = Z.push,
		it = Z.slice,
		rt = Z.indexOf,
		ot = G.toString,
		at = G.hasOwnProperty,
		st = et.trim,
		lt = function(e, t) {
			return new lt.fn.init(e, t, X)
		},
		ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ut = /\S+/g,
		dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ht = /^[\],:{}\s]*$/,
		mt = /(?:^|:|,)(?:\s*\[)+/g,
		gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		yt = /^-ms-/,
		bt = /-([\da-z])/gi,
		xt = function(e, t) {
			return t.toUpperCase()
		},
		wt = function(e) {
			(Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (kt(), lt.ready())
		},
		kt = function() {
			Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (Y.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt))
		};
	lt.fn = lt.prototype = {
		jquery: et,
		constructor: lt,
		init: function(e, n, i) {
			var r, o;
			if (!e) return this;
			if ("string" == typeof e) {
				if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
				if (r[1]) {
					if (n = n instanceof lt ? n[0] : n, lt.merge(this, lt.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), pt.test(r[1]) && lt.isPlainObject(n)) for (r in n) lt.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
					return this
				}
				if (o = Y.getElementById(r[2]), o && o.parentNode) {
					if (o.id !== r[2]) return i.find(e);
					this.length = 1, this[0] = o
				}
				return this.context = Y, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : lt.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), lt.makeArray(e, this))
		},
		selector: "",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return it.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = lt.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return lt.each(this, e, t)
		},
		ready: function(e) {
			return lt.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(it.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(lt.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: nt,
		sort: [].sort,
		splice: [].splice
	}, lt.fn.init.prototype = lt.fn, lt.extend = lt.fn.extend = function() {
		var e, n, i, r, o, a, s = arguments[0] || {},
			l = 1,
			c = arguments.length,
			u = !1;
		for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || lt.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++) if (null != (o = arguments[l])) for (r in o) e = s[r], i = o[r], s !== i && (u && i && (lt.isPlainObject(i) || (n = lt.isArray(i))) ? (n ? (n = !1, a = e && lt.isArray(e) ? e : []) : a = e && lt.isPlainObject(e) ? e : {}, s[r] = lt.extend(u, a, i)) : i !== t && (s[r] = i));
		return s
	}, lt.extend({
		noConflict: function(t) {
			return e.$ === lt && (e.$ = K), t && e.jQuery === lt && (e.jQuery = J), lt
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? lt.readyWait++ : lt.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--lt.readyWait : !lt.isReady) {
				if (!Y.body) return setTimeout(lt.ready);
				lt.isReady = !0, e !== !0 && --lt.readyWait > 0 || (z.resolveWith(Y, [lt]), lt.fn.trigger && lt(Y).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === lt.type(e)
		},
		isArray: Array.isArray ||
		function(e) {
			return "array" === lt.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[ot.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			if (!e || "object" !== lt.type(e) || e.nodeType || lt.isWindow(e)) return !1;
			try {
				if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			var i;
			for (i in e);
			return i === t || at.call(e, i)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || Y;
			var i = pt.exec(e),
				r = !n && [];
			return i ? [t.createElement(i[1])] : (i = lt.buildFragment([e], t, r), r && lt(r).remove(), lt.merge([], i.childNodes))
		},
		parseJSON: function(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = lt.trim(n), n && ht.test(n.replace(gt, "@").replace(vt, "]").replace(mt, ""))) ? Function("return " + n)() : (lt.error("Invalid JSON: " + n), t)
		},
		parseXML: function(n) {
			var i, r;
			if (!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
			} catch (o) {
				i = t
			}
			return i && i.documentElement && !i.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + n), i
		},
		noop: function() {},
		globalEval: function(t) {
			t && lt.trim(t) && (e.execScript ||
			function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(yt, "ms-").replace(bt, xt)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, i) {
			var r, o = 0,
				a = e.length,
				s = n(e);
			if (i) {
				if (s) for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
				else
				for (o in e) if (r = t.apply(e[o], i), r === !1) break
			} else if (s) for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
			else
			for (o in e) if (r = t.call(e[o], o, e[o]), r === !1) break;
			return e
		},
		trim: st && !st.call("??") ?
		function(e) {
			return null == e ? "" : st.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(dt, "")
		},
		makeArray: function(e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? lt.merge(i, "string" == typeof e ? [e] : e) : nt.call(i, e)), i
		},
		inArray: function(e, t, n) {
			var i;
			if (t) {
				if (rt) return rt.call(t, e, n);
				for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, n) {
			var i = n.length,
				r = e.length,
				o = 0;
			if ("number" == typeof i) for (; i > o; o++) e[r++] = n[o];
			else
			for (; n[o] !== t;) e[r++] = n[o++];
			return e.length = r, e
		},
		grep: function(e, t, n) {
			var i, r = [],
				o = 0,
				a = e.length;
			for (n = !! n; a > o; o++) i = !! t(e[o], o), n !== i && r.push(e[o]);
			return r
		},
		map: function(e, t, i) {
			var r, o = 0,
				a = e.length,
				s = n(e),
				l = [];
			if (s) for (; a > o; o++) r = t(e[o], o, i), null != r && (l[l.length] = r);
			else
			for (o in e) r = t(e[o], o, i), null != r && (l[l.length] = r);
			return tt.apply([], l)
		},
		guid: 1,
		proxy: function(e, n) {
			var i, r, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), lt.isFunction(e) ? (i = it.call(arguments, 2), r = function() {
				return e.apply(n || this, i.concat(it.call(arguments)))
			}, r.guid = e.guid = e.guid || lt.guid++, r) : t
		},
		access: function(e, n, i, r, o, a, s) {
			var l = 0,
				c = e.length,
				u = null == i;
			if ("object" === lt.type(i)) {
				o = !0;
				for (l in i) lt.access(e, n, l, i[l], !0, a, s)
			} else if (r !== t && (o = !0, lt.isFunction(r) || (s = !0), u && (s ? (n.call(e, r), n = null) : (u = n, n = function(e, t, n) {
				return u.call(lt(e), n)
			})), n)) for (; c > l; l++) n(e[l], i, s ? r : r.call(e[l], l, n(e[l], i)));
			return o ? e : u ? n.call(e) : c ? n(e[0], i) : a
		},
		now: function() {
			return (new Date).getTime()
		}
	}), lt.ready.promise = function(t) {
		if (!z) if (z = lt.Deferred(), "complete" === Y.readyState) setTimeout(lt.ready);
		else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", wt, !1), e.addEventListener("load", wt, !1);
		else {
			Y.attachEvent("onreadystatechange", wt), e.attachEvent("onload", wt);
			var n = !1;
			try {
				n = null == e.frameElement && Y.documentElement
			} catch (i) {}
			n && n.doScroll &&
			function r() {
				if (!lt.isReady) {
					try {
						n.doScroll("left")
					} catch (e) {
						return setTimeout(r, 50)
					}
					kt(), lt.ready()
				}
			}()
		}
		return z.promise(t)
	}, lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		G["[object " + t + "]"] = t.toLowerCase()
	}), X = lt(Y);
	var Ct = {};
	lt.Callbacks = function(e) {
		e = "string" == typeof e ? Ct[e] || i(e) : lt.extend({}, e);
		var n, r, o, a, s, l, c = [],
			u = !e.once && [],
			d = function(t) {
				for (r = e.memory && t, o = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++) if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
					r = !1;
					break
				}
				n = !1, c && (u ? u.length && d(u.shift()) : r ? c = [] : f.disable())
			},
			f = {
				add: function() {
					if (c) {
						var t = c.length;
						!
						function i(t) {
							lt.each(t, function(t, n) {
								var r = lt.type(n);
								"function" === r ? e.unique && f.has(n) || c.push(n) : n && n.length && "string" !== r && i(n)
							})
						}(arguments), n ? a = c.length : r && (l = t, d(r))
					}
					return this
				},
				remove: function() {
					return c && lt.each(arguments, function(e, t) {
						for (var i;
						(i = lt.inArray(t, c, i)) > -1;) c.splice(i, 1), n && (a >= i && a--, s >= i && s--)
					}), this
				},
				has: function(e) {
					return e ? lt.inArray(e, c) > -1 : !(!c || !c.length)
				},
				empty: function() {
					return c = [], this
				},
				disable: function() {
					return c = u = r = t, this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return u = t, r || f.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return t = t || [], t = [e, t.slice ? t.slice() : t], !c || o && !u || (n ? u.push(t) : d(t)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return f
	}, lt.extend({
		Deferred: function(e) {
			var t = [
				["resolve", "done", lt.Callbacks("once memory"), "resolved"],
				["reject", "fail", lt.Callbacks("once memory"), "rejected"],
				["notify", "progress", lt.Callbacks("memory")]
			],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return lt.Deferred(function(n) {
							lt.each(t, function(t, o) {
								var a = o[0],
									s = lt.isFunction(e[t]) && e[t];
								r[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && lt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? lt.extend(e, i) : i
					}
				},
				r = {};
			return i.pipe = i.then, lt.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				i[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
					return r[o[0] + "With"](this === r ? i : this, arguments), this
				}, r[o[0] + "With"] = a.fireWith
			}), i.promise(r), e && e.call(r, r), r
		},
		when: function(e) {
			var t, n, i, r = 0,
				o = it.call(arguments),
				a = o.length,
				s = 1 !== a || e && lt.isFunction(e.promise) ? a : 0,
				l = 1 === s ? e : lt.Deferred(),
				c = function(e, n, i) {
					return function(r) {
						n[e] = this, i[e] = arguments.length > 1 ? it.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if (a > 1) for (t = Array(a), n = Array(a), i = Array(a); a > r; r++) o[r] && lt.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
			return s || l.resolveWith(i, o), l.promise()
		}
	}), lt.support = function() {
		var t, n, i, r, o, a, s, l, c, u, d = Y.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
		o = Y.createElement("select"), s = o.appendChild(Y.createElement("option")), r = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t = {
			getSetAttribute: "t" !== d.className,
			leadingWhitespace: 3 === d.firstChild.nodeType,
			tbody: !d.getElementsByTagName("tbody").length,
			htmlSerialize: !! d.getElementsByTagName("link").length,
			style: /top/.test(i.getAttribute("style")),
			hrefNormalized: "/a" === i.getAttribute("href"),
			opacity: /^0.5/.test(i.style.opacity),
			cssFloat: !! i.style.cssFloat,
			checkOn: !! r.value,
			optSelected: s.selected,
			enctype: !! Y.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === Y.compatMode,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
		try {
			delete d.test
		} catch (f) {
			t.deleteExpando = !1
		}
		r = Y.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), a = Y.createDocumentFragment(), a.appendChild(r), t.appendChecked = r.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (u in {
			submit: !0,
			change: !0,
			focusin: !0
		}) d.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
		return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, lt(function() {
			var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				a = Y.getElementsByTagName("body")[0];
			a && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, i = d.appendChild(Y.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== Q && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = r = i = null)
		}), n = o = a = s = i = r = null, t
	}();
	var Tt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		_t = /([A-Z])/g;
	lt.extend({
		cache: {},
		expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(e) {
			return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando], !! e && !s(e)
		},
		data: function(e, t, n) {
			return r(e, t, n)
		},
		removeData: function(e, t) {
			return o(e, t)
		},
		_data: function(e, t, n) {
			return r(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return o(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), lt.fn.extend({
		data: function(e, n) {
			var i, r, o = this[0],
				s = 0,
				l = null;
			if (e === t) {
				if (this.length && (l = lt.data(o), 1 === o.nodeType && !lt._data(o, "parsedAttrs"))) {
					for (i = o.attributes; i.length > s; s++) r = i[s].name, r.indexOf("data-") || (r = lt.camelCase(r.slice(5)), a(o, r, l[r]));
					lt._data(o, "parsedAttrs", !0)
				}
				return l
			}
			return "object" == typeof e ? this.each(function() {
				lt.data(this, e)
			}) : lt.access(this, function(n) {
				return n === t ? o ? a(o, e, lt.data(o, e)) : null : (this.each(function() {
					lt.data(this, e, n)
				}), t)
			}, null, n, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				lt.removeData(this, e)
			})
		}
	}), lt.extend({
		queue: function(e, n, i) {
			var r;
			return e ? (n = (n || "fx") + "queue", r = lt._data(e, n), i && (!r || lt.isArray(i) ? r = lt._data(e, n, lt.makeArray(i)) : r.push(i)), r || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = lt.queue(e, t),
				i = n.length,
				r = n.shift(),
				o = lt._queueHooks(e, t),
				a = function() {
					lt.dequeue(e, t)
				};
			"inprogress" === r && (r = n.shift(), i--), o.cur = r, r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return lt._data(e, n) || lt._data(e, n, {
				empty: lt.Callbacks("once memory").add(function() {
					lt._removeData(e, t + "queue"), lt._removeData(e, n)
				})
			})
		}
	}), lt.fn.extend({
		queue: function(e, n) {
			var i = 2;
			return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? lt.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = lt.queue(this, e, n);
				lt._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && lt.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				lt.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = lt.fx ? lt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var i, r = 1,
				o = lt.Deferred(),
				a = this,
				s = this.length,
				l = function() {
					--r || o.resolveWith(a, [a])
				};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = lt._data(a[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var St, Nt, jt = /[\t\r\n]/g,
		Et = /\r/g,
		It = /^(?:input|select|textarea|button|object)$/i,
		At = /^(?:a|area)$/i,
		Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
		Lt = /^(?:checked|selected)$/i,
		qt = lt.support.getSetAttribute,
		$t = lt.support.input;
	lt.fn.extend({
		attr: function(e, t) {
			return lt.access(this, lt.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				lt.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return lt.access(this, lt.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = lt.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, i, r, o, a = 0,
				s = this.length,
				l = "string" == typeof e && e;
			if (lt.isFunction(e)) return this.each(function(t) {
				lt(this).addClass(e.call(this, t, this.className))
			});
			if (l) for (t = (e || "").match(ut) || []; s > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
				for (o = 0; r = t[o++];) 0 > i.indexOf(" " + r + " ") && (i += r + " ");
				n.className = lt.trim(i)
			}
			return this
		},
		removeClass: function(e) {
			var t, n, i, r, o, a = 0,
				s = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (lt.isFunction(e)) return this.each(function(t) {
				lt(this).removeClass(e.call(this, t, this.className))
			});
			if (l) for (t = (e || "").match(ut) || []; s > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
				for (o = 0; r = t[o++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
				n.className = e ? lt.trim(i) : ""
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				i = "boolean" == typeof t;
			return lt.isFunction(e) ? this.each(function(n) {
				lt(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) for (var r, o = 0, a = lt(this), s = t, l = e.match(ut) || []; r = l[o++];) s = i ? s : !a.hasClass(r), a[s ? "addClass" : "removeClass"](r);
				else(n === Q || "boolean" === n) && (this.className && lt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : lt._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, i, r, o = this[0];
			return arguments.length ? (r = lt.isFunction(e), this.each(function(n) {
				var o, a = lt(this);
				1 === this.nodeType && (o = r ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : lt.isArray(o) && (o = lt.map(o, function(e) {
					return null == e ? "" : e + ""
				})), i = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
			})) : o ? (i = lt.valHooks[o.type] || lt.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)) : void 0
		}
	}), lt.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function(e) {
					for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++) if (n = i[l], !(!n.selected && l !== r || (lt.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && lt.nodeName(n.parentNode, "optgroup"))) {
						if (t = lt(n).val(), o) return t;
						a.push(t)
					}
					return a
				},
				set: function(e, t) {
					var n = lt.makeArray(t);
					return lt(e).find("option").each(function() {
						this.selected = lt.inArray(lt(this).val(), n) >= 0
					}), n.length || (e.selectedIndex = -1), n
				}
			}
		},
		attr: function(e, n, i) {
			var r, o, a, s = e.nodeType;
			return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === Q ? lt.prop(e, n, i) : (o = 1 !== s || !lt.isXMLDoc(e), o && (n = n.toLowerCase(), r = lt.attrHooks[n] || (Dt.test(n) ? Nt : St)), i === t ? r && o && "get" in r && null !== (a = r.get(e, n)) ? a : (typeof e.getAttribute !== Q && (a = e.getAttribute(n)), null == a ? t : a) : null !== i ? r && o && "set" in r && (a = r.set(e, i, n)) !== t ? a : (e.setAttribute(n, i + ""), i) : (lt.removeAttr(e, n), t)) : void 0
		},
		removeAttr: function(e, t) {
			var n, i, r = 0,
				o = t && t.match(ut);
			if (o && 1 === e.nodeType) for (; n = o[r++];) i = lt.propFix[n] || n, Dt.test(n) ? !qt && Lt.test(n) ? e[lt.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : lt.attr(e, n, ""), e.removeAttribute(qt ? n : i)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!lt.support.radioValue && "radio" === t && lt.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(e, n, i) {
			var r, o, a, s = e.nodeType;
			return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !lt.isXMLDoc(e), a && (n = lt.propFix[n] || n, o = lt.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : It.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	}), Nt = {
		get: function(e, n) {
			var i = lt.prop(e, n),
				r = "boolean" == typeof i && e.getAttribute(n),
				o = "boolean" == typeof i ? $t && qt ? null != r : Lt.test(n) ? e[lt.camelCase("default-" + n)] : !! r : e.getAttributeNode(n);
			return o && o.value !== !1 ? n.toLowerCase() : t
		},
		set: function(e, t, n) {
			return t === !1 ? lt.removeAttr(e, n) : $t && qt || !Lt.test(n) ? e.setAttribute(!qt && lt.propFix[n] || n, n) : e[lt.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, $t && qt || (lt.attrHooks.value = {
		get: function(e, n) {
			var i = e.getAttributeNode(n);
			return lt.nodeName(e, "input") ? e.defaultValue : i && i.specified ? i.value : t
		},
		set: function(e, n, i) {
			return lt.nodeName(e, "input") ? (e.defaultValue = n, t) : St && St.set(e, n, i)
		}
	}), qt || (St = lt.valHooks.button = {
		get: function(e, n) {
			var i = e.getAttributeNode(n);
			return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value : i.specified) ? i.value : t
		},
		set: function(e, n, i) {
			var r = e.getAttributeNode(i);
			return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
		}
	}, lt.attrHooks.contenteditable = {
		get: St.get,
		set: function(e, t, n) {
			St.set(e, "" === t ? !1 : t, n)
		}
	}, lt.each(["width", "height"], function(e, n) {
		lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {
			set: function(e, i) {
				return "" === i ? (e.setAttribute(n, "auto"), i) : t
			}
		})
	})), lt.support.hrefNormalized || (lt.each(["href", "src", "width", "height"], function(e, n) {
		lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {
			get: function(e) {
				var i = e.getAttribute(n, 2);
				return null == i ? t : i
			}
		})
	}), lt.each(["href", "src"], function(e, t) {
		lt.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	})), lt.support.style || (lt.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), lt.support.optSelected || (lt.propHooks.selected = lt.extend(lt.propHooks.selected, {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	})), lt.support.enctype || (lt.propFix.enctype = "encoding"), lt.support.checkOn || lt.each(["radio", "checkbox"], function() {
		lt.valHooks[this] = {
			get: function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			}
		}
	}), lt.each(["radio", "checkbox"], function() {
		lt.valHooks[this] = lt.extend(lt.valHooks[this], {
			set: function(e, n) {
				return lt.isArray(n) ? e.checked = lt.inArray(lt(e).val(), n) >= 0 : t
			}
		})
	});
	var Ht = /^(?:input|select|textarea)$/i,
		Mt = /^key/,
		Bt = /^(?:mouse|contextmenu)|click/,
		Ot = /^(?:focusinfocus|focusoutblur)$/,
		Ft = /^([^.]*)(?:\.(.+)|)$/;
	lt.event = {
		global: {},
		add: function(e, n, i, r, o) {
			var a, s, l, c, u, d, f, p, h, m, g, v = lt._data(e);
			if (v) {
				for (i.handler && (c = i, i = c.handler, o = c.selector), i.guid || (i.guid = lt.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
					return typeof lt === Q || e && lt.event.triggered === e.type ? t : lt.event.dispatch.apply(d.elem, arguments)
				}, d.elem = e), n = (n || "").match(ut) || [""], l = n.length; l--;) a = Ft.exec(n[l]) || [], h = g = a[1], m = (a[2] || "").split(".").sort(), u = lt.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = lt.event.special[h] || {}, f = lt.extend({
					type: h,
					origType: g,
					data: r,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && lt.expr.match.needsContext.test(o),
					namespace: m.join(".")
				}, c), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && u.setup.call(e, r, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, f) : p.push(f), lt.event.global[h] = !0;
				e = null
			}
		},
		remove: function(e, t, n, i, r) {
			var o, a, s, l, c, u, d, f, p, h, m, g = lt.hasData(e) && lt._data(e);
			if (g && (u = g.events)) {
				for (t = (t || "").match(ut) || [""], c = t.length; c--;) if (s = Ft.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
					for (d = lt.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
					l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || lt.removeEvent(e, p, g.handle), delete u[p])
				} else
				for (p in u) lt.event.remove(e, p + t[c], n, i, !0);
				lt.isEmptyObject(u) && (delete g.handle, lt._removeData(e, "events"))
			}
		},
		trigger: function(n, i, r, o) {
			var a, s, l, c, u, d, f, p = [r || Y],
				h = at.call(n, "type") ? n.type : n,
				m = at.call(n, "namespace") ? n.namespace.split(".") : [];
			if (l = d = r = r || Y, 3 !== r.nodeType && 8 !== r.nodeType && !Ot.test(h + lt.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[lt.expando] ? n : new lt.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : lt.makeArray(i, [n]), u = lt.event.special[h] || {}, o || !u.trigger || u.trigger.apply(r, i) !== !1)) {
				if (!o && !u.noBubble && !lt.isWindow(r)) {
					for (c = u.delegateType || h, Ot.test(c + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l), d = l;
					d === (r.ownerDocument || Y) && p.push(d.defaultView || d.parentWindow || e)
				}
				for (f = 0;
				(l = p[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? c : u.bindType || h, a = (lt._data(l, "events") || {})[n.type] && lt._data(l, "handle"), a && a.apply(l, i), a = s && l[s], a && lt.acceptData(l) && a.apply && a.apply(l, i) === !1 && n.preventDefault();
				if (n.type = h, !(o || n.isDefaultPrevented() || u._default && u._default.apply(r.ownerDocument, i) !== !1 || "click" === h && lt.nodeName(r, "a") || !lt.acceptData(r) || !s || !r[h] || lt.isWindow(r))) {
					d = r[s], d && (r[s] = null), lt.event.triggered = h;
					try {
						r[h]()
					} catch (g) {}
					lt.event.triggered = t, d && (r[s] = d)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = lt.event.fix(e);
			var n, i, r, o, a, s = [],
				l = it.call(arguments),
				c = (lt._data(this, "events") || {})[e.type] || [],
				u = lt.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
				for (s = lt.event.handlers.call(this, e, c), n = 0;
				(o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0;
				(r = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((lt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var i, r, o, a, s = [],
				l = n.delegateCount,
				c = e.target;
			if (l && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
				for (o = [], a = 0; l > a; a++) r = n[a], i = r.selector + " ", o[i] === t && (o[i] = r.needsContext ? lt(i, this).index(c) >= 0 : lt.find(i, this, null, [c]).length), o[i] && o.push(r);
				o.length && s.push({
					elem: c,
					handlers: o
				})
			}
			return n.length > l && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		fix: function(e) {
			if (e[lt.expando]) return e;
			var t, n, i, r = e.type,
				o = e,
				a = this.fixHooks[r];
			for (a || (this.fixHooks[r] = a = Bt.test(r) ? this.mouseHooks : Mt.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new lt.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var i, r, o, a = n.button,
					s = n.fromElement;
				return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || Y, o = r.documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				trigger: function() {
					return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				}
			},
			focus: {
				trigger: function() {
					if (this !== Y.activeElement && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === Y.activeElement && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, i) {
			var r = lt.extend(new lt.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? lt.event.trigger(r, null, t) : lt.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
		}
	}, lt.removeEvent = Y.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var i = "on" + t;
		e.detachEvent && (typeof e[i] === Q && (e[i] = null), e.detachEvent(i, n))
	}, lt.Event = function(e, n) {
		return this instanceof lt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, n && lt.extend(this, n), this.timeStamp = e && e.timeStamp || lt.now(), this[lt.expando] = !0, t) : new lt.Event(e, n)
	}, lt.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = l, this.stopPropagation()
		}
	}, lt.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		lt.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = this,
					r = e.relatedTarget,
					o = e.handleObj;
				return (!r || r !== i && !lt.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), lt.support.submitBubbles || (lt.event.special.submit = {
		setup: function() {
			return lt.nodeName(this, "form") ? !1 : (lt.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					i = lt.nodeName(n, "input") || lt.nodeName(n, "button") ? n.form : t;
				i && !lt._data(i, "submitBubbles") && (lt.event.add(i, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), lt._data(i, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && lt.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return lt.nodeName(this, "form") ? !1 : (lt.event.remove(this, "._submit"), t)
		}
	}), lt.support.changeBubbles || (lt.event.special.change = {
		setup: function() {
			return Ht.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), lt.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, e, !0)
			})), !1) : (lt.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Ht.test(t.nodeName) && !lt._data(t, "changeBubbles") && (lt.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || lt.event.simulate("change", this.parentNode, e, !0)
				}), lt._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function(e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function() {
			return lt.event.remove(this, "._change"), !Ht.test(this.nodeName)
		}
	}), lt.support.focusinBubbles || lt.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			i = function(e) {
				lt.event.simulate(t, e.target, lt.event.fix(e), !0)
			};
		lt.event.special[t] = {
			setup: function() {
				0 === n++ && Y.addEventListener(e, i, !0)
			},
			teardown: function() {
				0 === --n && Y.removeEventListener(e, i, !0)
			}
		}
	}), lt.fn.extend({
		on: function(e, n, i, r, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (i = i || n, n = t);
				for (a in e) this.on(a, n, i, e[a], o);
				return this
			}
			if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = c;
			else if (!r) return this;
			return 1 === o && (s = r, r = function(e) {
				return lt().off(e), s.apply(this, arguments)
			}, r.guid = s.guid || (s.guid = lt.guid++)), this.each(function() {
				lt.event.add(this, e, r, i, n)
			})
		},
		one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function(e, n, i) {
			var r, o;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, lt(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = c), this.each(function() {
				lt.event.remove(this, e, i, n)
			})
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		trigger: function(e, t) {
			return this.each(function() {
				lt.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var i = this[0];
			return i ? lt.event.trigger(e, n, i, !0) : t
		}
	}), function(e, t) {
		function n(e) {
			return ht.test(e + "")
		}
		function i() {
			var e, t = [];
			return e = function(n, i) {
				return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = i
			}
		}
		function r(e) {
			return e[O] = !0, e
		}
		function o(e) {
			var t = A.createElement("div");
			try {
				return e(t)
			} catch (n) {
				return !1
			} finally {
				t = null
			}
		}
		function a(e, t, n, i) {
			var r, o, a, s, l, c, u, p, h, m;
			if ((t ? t.ownerDocument || t : F) !== A && I(t), t = t || A, n = n || [], !e || "string" != typeof e) return n;
			if (1 !== (s = t.nodeType) && 9 !== s) return [];
			if (!L && !i) {
				if (r = mt.exec(e)) if (a = r[1]) {
					if (9 === s) {
						if (o = t.getElementById(a), !o || !o.parentNode) return n;
						if (o.id === a) return n.push(o), n
					} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && M(t, o) && o.id === a) return n.push(o), n
				} else {
					if (r[2]) return K.apply(n, G.call(t.getElementsByTagName(e), 0)), n;
					if ((a = r[3]) && U.getByClassName && t.getElementsByClassName) return K.apply(n, G.call(t.getElementsByClassName(a), 0)), n
				}
				if (U.qsa && !q.test(e)) {
					if (u = !0, p = O, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (c = d(e), (u = t.getAttribute("id")) ? p = u.replace(yt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
						h = pt.test(e) && t.parentNode || t, m = c.join(",")
					}
					if (m) try {
						return K.apply(n, G.call(h.querySelectorAll(m), 0)), n
					} catch (g) {} finally {
						u || t.removeAttribute("id")
					}
				}
			}
			return x(e.replace(at, "$1"), t, n, i)
		}
		function s(e, t) {
			var n = t && e,
				i = n && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
			if (i) return i;
			if (n) for (; n = n.nextSibling;) if (n === t) return -1;
			return e ? 1 : -1
		}
		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function c(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function u(e) {
			return r(function(t) {
				return t = +t, r(function(n, i) {
					for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
				})
			})
		}
		function d(e, t) {
			var n, i, r, o, s, l, c, u = z[e + " "];
			if (u) return t ? 0 : u.slice(0);
			for (s = e, l = [], c = T.preFilter; s;) {
				(!n || (i = st.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(r = [])), n = !1, (i = ct.exec(s)) && (n = i.shift(), r.push({
					value: n,
					type: i[0].replace(at, " ")
				}), s = s.slice(n.length));
				for (o in T.filter)!(i = ft[o].exec(s)) || c[o] && !(i = c[o](i)) || (n = i.shift(), r.push({
					value: n,
					type: o,
					matches: i
				}), s = s.slice(n.length));
				if (!n) break
			}
			return t ? s.length : s ? a.error(e) : z(e, l).slice(0)
		}
		function f(e) {
			for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
			return i
		}
		function p(e, t, n) {
			var i = t.dir,
				r = n && "parentNode" === i,
				o = W++;
			return t.first ?
			function(t, n, o) {
				for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, o)
			} : function(t, n, a) {
				var s, l, c, u = R + " " + o;
				if (a) {
					for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, a)) return !0
				} else
				for (; t = t[i];) if (1 === t.nodeType || r) if (c = t[O] || (t[O] = {}), (l = c[i]) && l[0] === u) {
					if ((s = l[1]) === !0 || s === C) return s === !0
				} else if (l = c[i] = [u], l[1] = e(t, n, a) || C, l[1] === !0) return !0
			}
		}
		function h(e) {
			return e.length > 1 ?
			function(t, n, i) {
				for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
				return !0
			} : e[0]
		}
		function m(e, t, n, i, r) {
			for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
			return a
		}
		function g(e, t, n, i, o, a) {
			return i && !i[O] && (i = g(i)), o && !o[O] && (o = g(o, a)), r(function(r, a, s, l) {
				var c, u, d, f = [],
					p = [],
					h = a.length,
					g = r || b(t || "*", s.nodeType ? [s] : s, []),
					v = !e || !r && t ? g : m(g, f, e, s, l),
					y = n ? o || (r ? e : h || i) ? [] : a : v;
				if (n && n(v, y, s, l), i) for (c = m(y, p), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[p[u]] = !(v[p[u]] = d));
				if (r) {
					if (o || e) {
						if (o) {
							for (c = [], u = y.length; u--;)(d = y[u]) && c.push(v[u] = d);
							o(null, y = [], c, l)
						}
						for (u = y.length; u--;)(d = y[u]) && (c = o ? Z.call(r, d) : f[u]) > -1 && (r[c] = !(a[c] = d))
					}
				} else y = m(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, l) : K.apply(a, y)
			})
		}
		function v(e) {
			for (var t, n, i, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function(e) {
				return e === t
			}, a, !0), c = p(function(e) {
				return Z.call(t, e) > -1
			}, a, !0), u = [function(e, n, i) {
				return !o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
			}]; r > s; s++) if (n = T.relative[e[s].type]) u = [p(h(u), n)];
			else {
				if (n = T.filter[e[s].type].apply(null, e[s].matches), n[O]) {
					for (i = ++s; r > i && !T.relative[e[i].type]; i++);
					return g(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1)).replace(at, "$1"), n, i > s && v(e.slice(s, i)), r > i && v(e = e.slice(i)), r > i && f(e))
				}
				u.push(n)
			}
			return h(u)
		}
		function y(e, t) {
			var n = 0,
				i = t.length > 0,
				o = e.length > 0,
				s = function(r, s, l, c, u) {
					var d, f, p, h = [],
						g = 0,
						v = "0",
						y = r && [],
						b = null != u,
						x = E,
						w = r || o && T.find.TAG("*", u && s.parentNode || s),
						k = R += null == x ? 1 : Math.random() || .1;
					for (b && (E = s !== A && s, C = n); null != (d = w[v]); v++) {
						if (o && d) {
							for (f = 0; p = e[f++];) if (p(d, s, l)) {
								c.push(d);
								break
							}
							b && (R = k, C = ++n)
						}
						i && ((d = !p && d) && g--, r && y.push(d))
					}
					if (g += v, i && v !== g) {
						for (f = 0; p = t[f++];) p(y, h, s, l);
						if (r) {
							if (g > 0) for (; v--;) y[v] || h[v] || (h[v] = J.call(c));
							h = m(h)
						}
						K.apply(c, h), b && !r && h.length > 0 && g + t.length > 1 && a.uniqueSort(c)
					}
					return b && (R = k, E = x), y
				};
			return i ? r(s) : s
		}
		function b(e, t, n) {
			for (var i = 0, r = t.length; r > i; i++) a(e, t[i], n);
			return n
		}
		function x(e, t, n, i) {
			var r, o, a, s, l, c = d(e);
			if (!i && 1 === c.length) {
				if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !L && T.relative[o[1].type]) {
					if (t = T.find.ID(a.matches[0].replace(xt, wt), t)[0], !t) return n;
					e = e.slice(o.shift().value.length)
				}
				for (r = ft.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !T.relative[s = a.type]);) if ((l = T.find[s]) && (i = l(a.matches[0].replace(xt, wt), pt.test(o[0].type) && t.parentNode || t))) {
					if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, G.call(i, 0)), n;
					break
				}
			}
			return N(e, c)(i, t, L, n, pt.test(e)), n
		}
		function w() {}
		var k, C, T, _, S, N, j, E, I, A, D, L, q, $, H, M, B, O = "sizzle" + -new Date,
			F = e.document,
			U = {},
			R = 0,
			W = 0,
			P = i(),
			z = i(),
			X = i(),
			Q = typeof t,
			Y = 1 << 31,
			V = [],
			J = V.pop,
			K = V.push,
			G = V.slice,
			Z = V.indexOf ||
			function(e) {
				for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
				return -1
			},
			et = "[\\x20\\t\\r\\n\\f]",
			tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			nt = tt.replace("w", "w#"),
			it = "([*^$|!~]?=)",
			rt = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + it + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
			ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + rt.replace(3, 8) + ")*)|.*)\\)|)",
			at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
			st = RegExp("^" + et + "*," + et + "*"),
			ct = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
			ut = RegExp(ot),
			dt = RegExp("^" + nt + "$"),
			ft = {
				ID: RegExp("^#(" + tt + ")"),
				CLASS: RegExp("^\\.(" + tt + ")"),
				NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
				TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
				ATTR: RegExp("^" + rt),
				PSEUDO: RegExp("^" + ot),
				CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
				needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
			},
			pt = /[\x20\t\r\n\f]*[+~]/,
			ht = /^[^{]+\{\s*\[native code/,
			mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			gt = /^(?:input|select|textarea|button)$/i,
			vt = /^h\d$/i,
			yt = /'|\\/g,
			bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
			xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
			wt = function(e, t) {
				var n = "0x" + t - 65536;
				return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
			};
		try {
			G.call(F.documentElement.childNodes, 0)[0].nodeType
		} catch (kt) {
			G = function(e) {
				for (var t, n = []; t = this[e++];) n.push(t);
				return n
			}
		}
		S = a.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, I = a.setDocument = function(e) {
			var i = e ? e.ownerDocument || e : F;
			return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, D = i.documentElement, L = S(i), U.tagNameNoComments = o(function(e) {
				return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
			}), U.attributes = o(function(e) {
				e.innerHTML = "<select></select>";
				var t = typeof e.lastChild.getAttribute("multiple");
				return "boolean" !== t && "string" !== t
			}), U.getByClassName = o(function(e) {
				return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
			}), U.getByName = o(function(e) {
				e.id = O + 0, e.innerHTML = "<a name='" + O + "'></a><div name='" + O + "'></div>", D.insertBefore(e, D.firstChild);
				var t = i.getElementsByName && i.getElementsByName(O).length === 2 + i.getElementsByName(O + 0).length;
				return U.getIdNotName = !i.getElementById(O), D.removeChild(e), t
			}), T.attrHandle = o(function(e) {
				return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== Q && "#" === e.firstChild.getAttribute("href")
			}) ? {} : {
				href: function(e) {
					return e.getAttribute("href", 2)
				},
				type: function(e) {
					return e.getAttribute("type")
				}
			}, U.getIdNotName ? (T.find.ID = function(e, t) {
				if (typeof t.getElementById !== Q && !L) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, T.filter.ID = function(e) {
				var t = e.replace(xt, wt);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (T.find.ID = function(e, n) {
				if (typeof n.getElementById !== Q && !L) {
					var i = n.getElementById(e);
					return i ? i.id === e || typeof i.getAttributeNode !== Q && i.getAttributeNode("id").value === e ? [i] : t : []
				}
			}, T.filter.ID = function(e) {
				var t = e.replace(xt, wt);
				return function(e) {
					var n = typeof e.getAttributeNode !== Q && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), T.find.TAG = U.tagNameNoComments ?
			function(e, n) {
				return typeof n.getElementsByTagName !== Q ? n.getElementsByTagName(e) : t
			} : function(e, t) {
				var n, i = [],
					r = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[r++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, T.find.NAME = U.getByName &&
			function(e, n) {
				return typeof n.getElementsByName !== Q ? n.getElementsByName(name) : t
			}, T.find.CLASS = U.getByClassName &&
			function(e, n) {
				return typeof n.getElementsByClassName === Q || L ? t : n.getElementsByClassName(e)
			}, $ = [], q = [":focus"], (U.qsa = n(i.querySelectorAll)) && (o(function(e) {
				e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || q.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || q.push(":checked")
			}), o(function(e) {
				e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && q.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
			})), (U.matchesSelector = n(H = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
				U.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), $.push("!=", ot)
			}), q = RegExp(q.join("|")), $ = RegExp($.join("|")), M = n(D.contains) || D.compareDocumentPosition ?
			function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function(e, t) {
				if (t) for (; t = t.parentNode;) if (t === e) return !0;
				return !1
			}, B = D.compareDocumentPosition ?
			function(e, t) {
				var n;
				return e === t ? (j = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || M(F, e) ? -1 : t === i || M(F, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
			} : function(e, t) {
				var n, r = 0,
					o = e.parentNode,
					a = t.parentNode,
					l = [e],
					c = [t];
				if (e === t) return j = !0, 0;
				if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : 0;
				if (o === a) return s(e, t);
				for (n = e; n = n.parentNode;) l.unshift(n);
				for (n = t; n = n.parentNode;) c.unshift(n);
				for (; l[r] === c[r];) r++;
				return r ? s(l[r], c[r]) : l[r] === F ? -1 : c[r] === F ? 1 : 0
			}, j = !1, [0, 0].sort(B), U.detectDuplicates = j, A) : A
		}, a.matches = function(e, t) {
			return a(e, null, null, t)
		}, a.matchesSelector = function(e, t) {
			if ((e.ownerDocument || e) !== A && I(e), t = t.replace(bt, "='$1']"), !(!U.matchesSelector || L || $ && $.test(t) || q.test(t))) try {
				var n = H.call(e, t);
				if (n || U.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
			} catch (i) {}
			return a(t, A, null, [e]).length > 0
		}, a.contains = function(e, t) {
			return (e.ownerDocument || e) !== A && I(e), M(e, t)
		}, a.attr = function(e, t) {
			var n;
			return (e.ownerDocument || e) !== A && I(e), L || (t = t.toLowerCase()), (n = T.attrHandle[t]) ? n(e) : L || U.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
		}, a.error = function(e) {
			throw Error("Syntax error, unrecognized expression: " + e)
		}, a.uniqueSort = function(e) {
			var t, n = [],
				i = 1,
				r = 0;
			if (j = !U.detectDuplicates, e.sort(B), j) {
				for (; t = e[i]; i++) t === e[i - 1] && (r = n.push(i));
				for (; r--;) e.splice(n[r], 1)
			}
			return e
		}, _ = a.getText = function(e) {
			var t, n = "",
				i = 0,
				r = e.nodeType;
			if (r) {
				if (1 === r || 9 === r || 11 === r) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += _(e)
				} else if (3 === r || 4 === r) return e.nodeValue
			} else
			for (; t = e[i]; i++) n += _(t);
			return n
		}, T = a.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: ft,
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[5] && e[2];
					return ft.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ut.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					return "*" === e ?
					function() {
						return !0
					} : (e = e.replace(xt, wt).toLowerCase(), function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					})
				},
				CLASS: function(e) {
					var t = P[e + " "];
					return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && P(e, function(e) {
						return t.test(e.className || typeof e.getAttribute !== Q && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(i) {
						var r = a.attr(i, e);
						return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, i, r) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === i && 0 === r ?
					function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
							g = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							y = !l && !s;
						if (g) {
							if (o) {
								for (; m;) {
									for (d = t; d = d[m];) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
									h = m = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? g.firstChild : g.lastChild], a && y) {
								for (u = g[O] || (g[O] = {}), c = u[e] || [], p = c[0] === R && c[1], f = c[0] === R && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
									u[e] = [R, p, f];
									break
								}
							} else if (y && (c = (t[O] || (t[O] = {}))[e]) && c[0] === R) f = c[1];
							else
							for (;
							(d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[O] || (d[O] = {}))[e] = [R, f]), d !== t)););
							return f -= r, f === i || 0 === f % i && f / i >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
					return i[O] ? i(t) : i.length > 1 ? (n = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, n) {
						for (var r, o = i(e, t), a = o.length; a--;) r = Z.call(e, o[a]), e[r] = !(n[r] = o[a])
					}) : function(e) {
						return i(e, 0, n)
					}) : i
				}
			},
			pseudos: {
				not: r(function(e) {
					var t = [],
						n = [],
						i = N(e.replace(at, "$1"));
					return i[O] ? r(function(e, t, n, r) {
						for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, r, o) {
						return t[0] = e, i(t, null, o, n), !n.pop()
					}
				}),
				has: r(function(e) {
					return function(t) {
						return a(e, t).length > 0
					}
				}),
				contains: r(function(e) {
					return function(t) {
						return (t.textContent || t.innerText || _(t)).indexOf(e) > -1
					}
				}),
				lang: r(function(e) {
					return dt.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(), function(t) {
						var n;
						do
						if (n = L ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
						while ((t = t.parentNode) && 1 === t.nodeType);
						return !1
					}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === D
				},
				focus: function(e) {
					return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !! e.checked || "option" === t && !! e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
					return !0
				},
				parent: function(e) {
					return !T.pseudos.empty(e)
				},
				header: function(e) {
					return vt.test(e.nodeName)
				},
				input: function(e) {
					return gt.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
				},
				first: u(function() {
					return [0]
				}),
				last: u(function(e, t) {
					return [t - 1]
				}),
				eq: u(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: u(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: u(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: u(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: u(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; t > ++i;) e.push(i);
					return e
				})
			}
		};
		for (k in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) T.pseudos[k] = l(k);
		for (k in {
			submit: !0,
			reset: !0
		}) T.pseudos[k] = c(k);
		N = a.compile = function(e, t) {
			var n, i = [],
				r = [],
				o = X[e + " "];
			if (!o) {
				for (t || (t = d(e)), n = t.length; n--;) o = v(t[n]), o[O] ? i.push(o) : r.push(o);
				o = X(e, y(r, i))
			}
			return o
		}, T.pseudos.nth = T.pseudos.eq, T.filters = w.prototype = T.pseudos, T.setFilters = new w, I(), a.attr = lt.attr, lt.find = a, lt.expr = a.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = a.uniqueSort, lt.text = a.getText, lt.isXMLDoc = a.isXML, lt.contains = a.contains
	}(e);
	var Ut = /Until$/,
		Rt = /^(?:parents|prev(?:Until|All))/,
		Wt = /^.[^:#\[\.,]*$/,
		Pt = lt.expr.match.needsContext,
		zt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	lt.fn.extend({
		find: function(e) {
			var t, n, i, r = this.length;
			if ("string" != typeof e) return i = this, this.pushStack(lt(e).filter(function() {
				for (t = 0; r > t; t++) if (lt.contains(i[t], this)) return !0
			}));
			for (n = [], t = 0; r > t; t++) lt.find(e, this[t], n);
			return n = this.pushStack(r > 1 ? lt.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
		},
		has: function(e) {
			var t, n = lt(e, this),
				i = n.length;
			return this.filter(function() {
				for (t = 0; i > t; t++) if (lt.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(d(this, e, !1))
		},
		filter: function(e) {
			return this.pushStack(d(this, e, !0))
		},
		is: function(e) {
			return !!e && ("string" == typeof e ? Pt.test(e) ? lt(e, this.context).index(this[0]) >= 0 : lt.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function(e, t) {
			for (var n, i = 0, r = this.length, o = [], a = Pt.test(e) || "string" != typeof e ? lt(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
				if (a ? a.index(n) > -1 : lt.find.matchesSelector(n, e)) {
					o.push(n);
					break
				}
				n = n.parentNode
			}
			return this.pushStack(o.length > 1 ? lt.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? lt.inArray(this[0], lt(e)) : lt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? lt(e, t) : lt.makeArray(e && e.nodeType ? [e] : e),
				i = lt.merge(this.get(), n);
			return this.pushStack(lt.unique(i))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), lt.fn.andSelf = lt.fn.addBack, lt.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return lt.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return lt.dir(e, "parentNode", n)
		},
		next: function(e) {
			return u(e, "nextSibling")
		},
		prev: function(e) {
			return u(e, "previousSibling")
		},
		nextAll: function(e) {
			return lt.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return lt.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return lt.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return lt.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return lt.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return lt.sibling(e.firstChild)
		},
		contents: function(e) {
			return lt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : lt.merge([], e.childNodes)
		}
	}, function(e, t) {
		lt.fn[e] = function(n, i) {
			var r = lt.map(this, t, n);
			return Ut.test(e) || (i = n), i && "string" == typeof i && (r = lt.filter(i, r)), r = this.length > 1 && !zt[e] ? lt.unique(r) : r, this.length > 1 && Rt.test(e) && (r = r.reverse()), this.pushStack(r)
		}
	}), lt.extend({
		filter: function(e, t, n) {
			return n && (e = ":not(" + e + ")"), 1 === t.length ? lt.find.matchesSelector(t[0], e) ? [t[0]] : [] : lt.find.matches(e, t)
		},
		dir: function(e, n, i) {
			for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !lt(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
			return r
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Qt = / jQuery\d+="(?:null|\d+)"/g,
		Yt = RegExp("<(?:" + Xt + ")[\\s/>]", "i"),
		Vt = /^\s+/,
		Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Kt = /<([\w:]+)/,
		Gt = /<tbody/i,
		Zt = /<|&#?\w+;/,
		en = /<(?:script|style|link)/i,
		tn = /^(?:checkbox|radio)$/i,
		nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rn = /^$|\/(?:java|ecma)script/i,
		on = /^true\/(.*)/,
		an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		sn = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		ln = f(Y),
		cn = ln.appendChild(Y.createElement("div"));
	sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, lt.fn.extend({
		text: function(e) {
			return lt.access(this, function(e) {
				return e === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
			}, null, e, arguments.length)
		},
		wrapAll: function(e) {
			if (lt.isFunction(e)) return this.each(function(t) {
				lt(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return lt.isFunction(e) ? this.each(function(t) {
				lt(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = lt(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = lt.isFunction(e);
			return this.each(function(n) {
				lt(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
			})
		},
		before: function() {
			return this.domManip(arguments, !1, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, !1, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, i = 0; null != (n = this[i]); i++)(!e || lt.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || lt.cleanData(b(n)), n.parentNode && (t && lt.contains(n.ownerDocument, n) && g(b(n, "script")), n.parentNode.removeChild(n)));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && lt.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && lt.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return lt.clone(this, e, t)
			})
		},
		html: function(e) {
			return lt.access(this, function(e) {
				var n = this[0] || {},
					i = 0,
					r = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Qt, "") : t;
				if (!("string" != typeof e || en.test(e) || !lt.support.htmlSerialize && Yt.test(e) || !lt.support.leadingWhitespace && Vt.test(e) || sn[(Kt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Jt, "<$1></$2>");
					try {
						for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (lt.cleanData(b(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function(e) {
			var t = lt.isFunction(e);
			return t || "string" == typeof e || (e = lt(e).not(this).detach()), this.domManip([e], !0, function(e) {
				var t = this.nextSibling,
					n = this.parentNode;
				n && (lt(this).remove(), n.insertBefore(e, t))
			})
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, n, i) {
			e = tt.apply([], e);
			var r, o, a, s, l, c, u = 0,
				d = this.length,
				f = this,
				g = d - 1,
				v = e[0],
				y = lt.isFunction(v);
			if (y || !(1 >= d || "string" != typeof v || lt.support.checkClone) && nn.test(v)) return this.each(function(r) {
				var o = f.eq(r);
				y && (e[0] = v.call(this, r, n ? o.html() : t)), o.domManip(e, n, i)
			});
			if (d && (c = lt.buildFragment(e, this[0].ownerDocument, !1, this), r = c.firstChild, 1 === c.childNodes.length && (c = r), r)) {
				for (n = n && lt.nodeName(r, "tr"), s = lt.map(b(c, "script"), h), a = s.length; d > u; u++) o = c, u !== g && (o = lt.clone(o, !0, !0), a && lt.merge(s, b(o, "script"))), i.call(n && lt.nodeName(this[u], "table") ? p(this[u], "tbody") : this[u], o, u);
				if (a) for (l = s[s.length - 1].ownerDocument, lt.map(s, m), u = 0; a > u; u++) o = s[u], rn.test(o.type || "") && !lt._data(o, "globalEval") && lt.contains(l, o) && (o.src ? lt.ajax({
					url: o.src,
					type: "GET",
					dataType: "script",
					async: !1,
					global: !1,
					"throws": !0
				}) : lt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
				c = r = null
			}
			return this
		}
	}), lt.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		lt.fn[e] = function(e) {
			for (var n, i = 0, r = [], o = lt(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), lt(o[i])[t](n), nt.apply(r, n.get());
			return this.pushStack(r)
		}
	}), lt.extend({
		clone: function(e, t, n) {
			var i, r, o, a, s, l = lt.contains(e.ownerDocument, e);
			if (lt.support.html5Clone || lt.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, cn.removeChild(o = cn.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || lt.isXMLDoc(e))) for (i = b(o), s = b(e), a = 0; null != (r = s[a]); ++a) i[a] && y(r, i[a]);
			if (t) if (n) for (s = s || b(e), i = i || b(o), a = 0; null != (r = s[a]); a++) v(r, i[a]);
			else v(e, o);
			return i = b(o, "script"), i.length > 0 && g(i, !l && b(e, "script")), i = s = r = null, o
		},
		buildFragment: function(e, t, n, i) {
			for (var r, o, a, s, l, c, u, d = e.length, p = f(t), h = [], m = 0; d > m; m++) if (o = e[m], o || 0 === o) if ("object" === lt.type(o)) lt.merge(h, o.nodeType ? [o] : o);
			else if (Zt.test(o)) {
				for (s = s || p.appendChild(t.createElement("div")), l = (Kt.exec(o) || ["", ""])[1].toLowerCase(), u = sn[l] || sn._default, s.innerHTML = u[1] + o.replace(Jt, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
				if (!lt.support.leadingWhitespace && Vt.test(o) && h.push(t.createTextNode(Vt.exec(o)[0])), !lt.support.tbody) for (o = "table" !== l || Gt.test(o) ? "<table>" !== u[1] || Gt.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) lt.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
				for (lt.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = p.lastChild
			} else h.push(t.createTextNode(o));
			for (s && p.removeChild(s), lt.support.appendChecked || lt.grep(b(h, "input"), x), m = 0; o = h[m++];) if ((!i || -1 === lt.inArray(o, i)) && (a = lt.contains(o.ownerDocument, o), s = b(p.appendChild(o), "script"), a && g(s), n)) for (r = 0; o = s[r++];) rn.test(o.type || "") && n.push(o);
			return s = null, p
		},
		cleanData: function(e, t) {
			for (var n, i, r, o, a = 0, s = lt.expando, l = lt.cache, c = lt.support.deleteExpando, u = lt.event.special; null != (n = e[a]); a++) if ((t || lt.acceptData(n)) && (r = n[s], o = r && l[r])) {
				if (o.events) for (i in o.events) u[i] ? lt.event.remove(n, i) : lt.removeEvent(n, i, o.handle);
				l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== Q ? n.removeAttribute(s) : n[s] = null, Z.push(r))
			}
		}
	});
	var un, dn, fn, pn = /alpha\([^)]*\)/i,
		hn = /opacity\s*=\s*([^)]*)/,
		mn = /^(top|right|bottom|left)$/,
		gn = /^(none|table(?!-c[ea]).+)/,
		vn = /^margin/,
		yn = RegExp("^(" + ct + ")(.*)$", "i"),
		bn = RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
		xn = RegExp("^([+-])=(" + ct + ")", "i"),
		wn = {
			BODY: "block"
		},
		kn = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Cn = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Tn = ["Top", "Right", "Bottom", "Left"],
		_n = ["Webkit", "O", "Moz", "ms"];
	lt.fn.extend({
		css: function(e, n) {
			return lt.access(this, function(e, n, i) {
				var r, o, a = {},
					s = 0;
				if (lt.isArray(n)) {
					for (o = dn(e), r = n.length; r > s; s++) a[n[s]] = lt.css(e, n[s], !1, o);
					return a
				}
				return i !== t ? lt.style(e, n, i) : lt.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return C(this, !0)
		},
		hide: function() {
			return C(this)
		},
		toggle: function(e) {
			var t = "boolean" == typeof e;
			return this.each(function() {
				(t ? e : k(this)) ? lt(this).show() : lt(this).hide()
			})
		}
	}), lt.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = fn(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": lt.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, i, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = lt.camelCase(n),
					c = e.style;
				if (n = lt.cssProps[l] || (lt.cssProps[l] = w(c, l)), s = lt.cssHooks[n] || lt.cssHooks[l], i === t) return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o : c[n];
				if (a = typeof i, "string" === a && (o = xn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(lt.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || lt.cssNumber[l] || (i += "px"), lt.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (i = s.set(e, i, r)) === t))) try {
					c[n] = i
				} catch (u) {}
			}
		},
		css: function(e, n, i, r) {
			var o, a, s, l = lt.camelCase(n);
			return n = lt.cssProps[l] || (lt.cssProps[l] = w(e.style, l)), s = lt.cssHooks[n] || lt.cssHooks[l], s && "get" in s && (a = s.get(e, !0, i)), a === t && (a = fn(e, n, r)), "normal" === a && n in Cn && (a = Cn[n]), "" === i || i ? (o = parseFloat(a), i === !0 || lt.isNumeric(o) ? o || 0 : a) : a
		},
		swap: function(e, t, n, i) {
			var r, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			r = n.apply(e, i || []);
			for (o in t) e.style[o] = a[o];
			return r
		}
	}), e.getComputedStyle ? (dn = function(t) {
		return e.getComputedStyle(t, null)
	}, fn = function(e, n, i) {
		var r, o, a, s = i || dn(e),
			l = s ? s.getPropertyValue(n) || s[n] : t,
			c = e.style;
		return s && ("" !== l || lt.contains(e.ownerDocument, e) || (l = lt.style(e, n)), bn.test(l) && vn.test(n) && (r = c.width, o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = r, c.minWidth = o, c.maxWidth = a)), l
	}) : Y.documentElement.currentStyle && (dn = function(e) {
		return e.currentStyle
	}, fn = function(e, n, i) {
		var r, o, a, s = i || dn(e),
			l = s ? s[n] : t,
			c = e.style;
		return null == l && c && c[n] && (l = c[n]), bn.test(l) && !mn.test(n) && (r = c.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = r, a && (o.left = a)), "" === l ? "auto" : l
	}), lt.each(["height", "width"], function(e, n) {
		lt.cssHooks[n] = {
			get: function(e, i, r) {
				return i ? 0 === e.offsetWidth && gn.test(lt.css(e, "display")) ? lt.swap(e, kn, function() {
					return S(e, n, r)
				}) : S(e, n, r) : t
			},
			set: function(e, t, i) {
				var r = i && dn(e);
				return T(e, t, i ? _(e, n, i, lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, r), r) : 0)
			}
		}
	}), lt.support.opacity || (lt.cssHooks.opacity = {
		get: function(e, t) {
			return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				i = e.currentStyle,
				r = lt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = i && i.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === lt.trim(o.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = pn.test(o) ? o.replace(pn, r) : o + " " + r)
		}
	}), lt(function() {
		lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? lt.swap(e, {
					display: "inline-block"
				}, fn, [e, "marginRight"]) : t
			}
		}), !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"], function(e, n) {
			lt.cssHooks[n] = {
				get: function(e, i) {
					return i ? (i = fn(e, n), bn.test(i) ? lt(e).position()[n] + "px" : i) : t
				}
			}
		})
	}), lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !lt.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || lt.css(e, "display"))
	}, lt.expr.filters.visible = function(e) {
		return !lt.expr.filters.hidden(e)
	}), lt.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		lt.cssHooks[e + t] = {
			expand: function(n) {
				for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Tn[i] + t] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, vn.test(e) || (lt.cssHooks[e + t].set = T)
	});
	var Sn = /%20/g,
		Nn = /\[\]$/,
		jn = /\r?\n/g,
		En = /^(?:submit|button|image|reset|file)$/i,
		In = /^(?:input|select|textarea|keygen)/i;
	lt.fn.extend({
		serialize: function() {
			return lt.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = lt.prop(this, "elements");
				return e ? lt.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !lt(this).is(":disabled") && In.test(this.nodeName) && !En.test(e) && (this.checked || !tn.test(e))
			}).map(function(e, t) {
				var n = lt(this).val();
				return null == n ? null : lt.isArray(n) ? lt.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(jn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(jn, "\r\n")
				}
			}).get()
		}
	}), lt.param = function(e, n) {
		var i, r = [],
			o = function(e, t) {
				t = lt.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(e) || e.jquery && !lt.isPlainObject(e)) lt.each(e, function() {
			o(this.name, this.value)
		});
		else
		for (i in e) E(i, e[i], n, o);
		return r.join("&").replace(Sn, "+")
	}, lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		lt.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), lt.fn.hover = function(e, t) {
		return this.mouseenter(e).mouseleave(t || e)
	};
	var An, Dn, Ln = lt.now(),
		qn = /\?/,
		$n = /#.*$/,
		Hn = /([?&])_=[^&]*/,
		Mn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		On = /^(?:GET|HEAD)$/,
		Fn = /^\/\//,
		Un = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Rn = lt.fn.load,
		Wn = {},
		Pn = {},
		zn = "*/".concat("*");
	try {
		Dn = V.href
	} catch (Xn) {
		Dn = Y.createElement("a"), Dn.href = "", Dn = Dn.href
	}
	An = Un.exec(Dn.toLowerCase()) || [], lt.fn.load = function(e, n, i) {
		if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
		var r, o, a, s = this,
			l = e.indexOf(" ");
		return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), lt.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && lt.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, s.html(r ? lt("<div>").append(lt.parseHTML(e)).find(r) : e)
		}).complete(i &&
		function(e, t) {
			s.each(i, o || [e.responseText, t, e])
		}), this
	}, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		lt.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), lt.each(["get", "post"], function(e, n) {
		lt[n] = function(e, i, r, o) {
			return lt.isFunction(i) && (o = o || r, r = i, i = t), lt.ajax({
				url: e,
				type: n,
				dataType: o,
				data: i,
				success: r
			})
		}
	}), lt.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Dn,
			type: "GET",
			isLocal: Bn.test(An[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": zn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": lt.parseJSON,
				"text xml": lt.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? D(D(e, lt.ajaxSettings), t) : D(lt.ajaxSettings, e)
		},
		ajaxPrefilter: I(Wn),
		ajaxTransport: I(Pn),
		ajax: function(e, n) {
			function i(e, n, i, r) {
				var o, d, y, b, w, C = n;
				2 !== x && (x = 2, l && clearTimeout(l), u = t, s = r || "", k.readyState = e > 0 ? 4 : 0, i && (b = L(f, k, i)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (lt.lastModified[a] = w), w = k.getResponseHeader("etag"), w && (lt.etag[a] = w)), 204 === e ? (o = !0, C = "nocontent") : 304 === e ? (o = !0, C = "notmodified") : (o = q(f, b), C = o.state, d = o.data, y = o.error, o = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || C) + "", o ? m.resolveWith(p, [d, C, k]) : m.rejectWith(p, [k, C, y]), k.statusCode(v), v = t, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [k, f, o ? d : y]), g.fireWith(p, [k, C]), c && (h.trigger("ajaxComplete", [k, f]), --lt.active || lt.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, o, a, s, l, c, u, d, f = lt.ajaxSetup({}, n),
				p = f.context || f,
				h = f.context && (p.nodeType || p.jquery) ? lt(p) : lt.event,
				m = lt.Deferred(),
				g = lt.Callbacks("once memory"),
				v = f.statusCode || {},
				y = {},
				b = {},
				x = 0,
				w = "canceled",
				k = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!d) for (d = {}; t = Mn.exec(s);) d[t[1].toLowerCase()] = t[2];
							t = d[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? s : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = b[n] = b[n] || e, y[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (f.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) if (2 > x) for (t in e) v[t] = [v[t], e[t]];
						else k.always(e[k.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return u && u.abort(t), i(0, t), this
					}
				};
			if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, f.url = ((e || f.url || Dn) + "").replace($n, "").replace(Fn, An[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = lt.trim(f.dataType || "*").toLowerCase().match(ut) || [""], null == f.crossDomain && (r = Un.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === An[1] && r[2] === An[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (An[3] || ("http:" === An[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = lt.param(f.data, f.traditional)), A(Wn, f, n, k), 2 === x) return k;
			c = f.global, c && 0 === lt.active++ && lt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !On.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (qn.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Hn.test(a) ? a.replace(Hn, "$1_=" + Ln++) : a + (qn.test(a) ? "&" : "?") + "_=" + Ln++)), f.ifModified && (lt.lastModified[a] && k.setRequestHeader("If-Modified-Since", lt.lastModified[a]), lt.etag[a] && k.setRequestHeader("If-None-Match", lt.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : f.accepts["*"]);
			for (o in f.headers) k.setRequestHeader(o, f.headers[o]);
			if (f.beforeSend && (f.beforeSend.call(p, k, f) === !1 || 2 === x)) return k.abort();
			w = "abort";
			for (o in {
				success: 1,
				error: 1,
				complete: 1
			}) k[o](f[o]);
			if (u = A(Pn, f, n, k)) {
				k.readyState = 1, c && h.trigger("ajaxSend", [k, f]), f.async && f.timeout > 0 && (l = setTimeout(function() {
					k.abort("timeout")
				}, f.timeout));
				try {
					x = 1, u.send(y, i)
				} catch (C) {
					if (!(2 > x)) throw C;
					i(-1, C)
				}
			} else i(-1, "No Transport");
			return k
		},
		getScript: function(e, n) {
			return lt.get(e, t, n, "script")
		},
		getJSON: function(e, t, n) {
			return lt.get(e, t, n, "json")
		}
	}), lt.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return lt.globalEval(e), e
			}
		}
	})
	var Qn = [],
		Yn = /(=)\?(?=&|$)|\?\?/;
	lt.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Qn.pop() || lt.expando + "_" + Ln++;
			return this[e] = !0, e
		}
	}), lt.ajaxPrefilter("json jsonp", function(n, i, r) {
		var o, a, s, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (qn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || lt.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		}, r.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = i.jsonpCallback, Qn.push(o)), s && lt.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Vn, Jn, Kn = 0,
		Gn = e.ActiveXObject &&
		function() {
			var e;
			for (e in Vn) Vn[e](t, !0)
		};
	lt.ajaxSettings.xhr = e.ActiveXObject ?
	function() {
		return !this.isLocal && $() || H()
	} : $, Jn = lt.ajaxSettings.xhr(), lt.support.cors = !! Jn && "withCredentials" in Jn, Jn = lt.support.ajax = !! Jn, Jn && lt.ajaxTransport(function(n) {
		if (!n.crossDomain || lt.support.cors) {
			var i;
			return {
				send: function(r, o) {
					var a, s, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in r) l.setRequestHeader(s, r[s])
					} catch (c) {}
					l.send(n.hasContent && n.data || null), i = function(e, r) {
						var s, c, u, d;
						try {
							if (i && (r || 4 === l.readyState)) if (i = t, a && (l.onreadystatechange = lt.noop, Gn && delete Vn[a]), r) 4 !== l.readyState && l.abort();
							else {
								d = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
								try {
									u = l.statusText
								} catch (f) {
									u = ""
								}
								s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
							}
						} catch (p) {
							r || o(-1, p)
						}
						d && o(s, u, d, c)
					}, n.async ? 4 === l.readyState ? setTimeout(i) : (a = ++Kn, Gn && (Vn || (Vn = {}, lt(e).unload(Gn)), Vn[a] = i), l.onreadystatechange = i) : i()
				},
				abort: function() {
					i && i(t, !0)
				}
			}
		}
	});
	var Zn, ei, ti = /^(?:toggle|show|hide)$/,
		ni = RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
		ii = /queueHooks$/,
		ri = [U],
		oi = {
			"*": [function(e, t) {
				var n, i, r = this.createTween(e, t),
					o = ni.exec(t),
					a = r.cur(),
					s = +a || 0,
					l = 1,
					c = 20;
				if (o) {
					if (n = +o[2], i = o[3] || (lt.cssNumber[e] ? "" : "px"), "px" !== i && s) {
						s = lt.css(r.elem, e, !0) || n || 1;
						do l = l || ".5", s /= l, lt.style(r.elem, e, s + i);
						while (l !== (l = r.cur() / a) && 1 !== l && --c)
					}
					r.unit = i, r.start = s, r.end = o[1] ? s + (o[1] + 1) * n : n
				}
				return r
			}]
		};
	lt.Animation = lt.extend(O, {
		tweener: function(e, t) {
			lt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, i = 0, r = e.length; r > i; i++) n = e[i], oi[n] = oi[n] || [], oi[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? ri.unshift(e) : ri.push(e)
		}
	}), lt.Tween = R, R.prototype = {
		constructor: R,
		init: function(e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (lt.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = R.propHooks[this.prop];
			return e && e.get ? e.get(this) : R.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = R.propHooks[this.prop];
			return this.pos = t = this.options.duration ? lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
		}
	}, R.prototype.init.prototype = R.prototype, R.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = lt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				lt.fx.step[e.prop] ? lt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[lt.cssProps[e.prop]] || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, lt.each(["toggle", "show", "hide"], function(e, t) {
		var n = lt.fn[t];
		lt.fn[t] = function(e, i, r) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, r)
		}
	}), lt.fn.extend({
		fadeTo: function(e, t, n, i) {
			return this.filter(k).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function(e, t, n, i) {
			var r = lt.isEmptyObject(e),
				o = lt.speed(t, n, i),
				a = function() {
					var t = O(this, lt.extend({}, e), o);
					a.finish = function() {
						t.stop(!0)
					}, (r || lt._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, n, i) {
			var r = function(e) {
				var t = e.stop;
				delete e.stop, t(i)
			};
			return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = lt.timers,
					a = lt._data(this);
				if (n) a[n] && a[n].stop && r(a[n]);
				else
				for (n in a) a[n] && a[n].stop && ii.test(n) && r(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
				(t || !i) && lt.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = lt._data(this),
					i = n[e + "queue"],
					r = n[e + "queueHooks"],
					o = lt.timers,
					a = i ? i.length : 0;
				for (n.finish = !0, lt.queue(this, e, []), r && r.cur && r.cur.finish && r.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
				delete n.finish
			})
		}
	}), lt.each({
		slideDown: W("show"),
		slideUp: W("hide"),
		slideToggle: W("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		lt.fn[e] = function(e, n, i) {
			return this.animate(t, e, n, i)
		}
	}), lt.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? lt.extend({}, e) : {
			complete: n || !n && t || lt.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !lt.isFunction(t) && t
		};
		return i.duration = lt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in lt.fx.speeds ? lt.fx.speeds[i.duration] : lt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			lt.isFunction(i.old) && i.old.call(this), i.queue && lt.dequeue(this, i.queue)
		}, i
	}, lt.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, lt.timers = [], lt.fx = R.prototype.init, lt.fx.tick = function() {
		var e, n = lt.timers,
			i = 0;
		for (Zn = lt.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
		n.length || lt.fx.stop(), Zn = t
	}, lt.fx.timer = function(e) {
		e() && lt.timers.push(e) && lt.fx.start()
	}, lt.fx.interval = 13, lt.fx.start = function() {
		ei || (ei = setInterval(lt.fx.tick, lt.fx.interval))
	}, lt.fx.stop = function() {
		clearInterval(ei), ei = null
	}, lt.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, lt.fx.step = {}, lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(e) {
		return lt.grep(lt.timers, function(t) {
			return e === t.elem
		}).length
	}), lt.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			lt.offset.setOffset(this, e, t)
		});
		var n, i, r = {
			top: 0,
			left: 0
		},
			o = this[0],
			a = o && o.ownerDocument;
		return a ? (n = a.documentElement, lt.contains(n, o) ? (typeof o.getBoundingClientRect !== Q && (r = o.getBoundingClientRect()), i = P(a), {
			top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : r) : void 0
	}, lt.offset = {
		setOffset: function(e, t, n) {
			var i = lt.css(e, "position");
			"static" === i && (e.style.position = "relative");
			var r, o, a = lt(e),
				s = a.offset(),
				l = lt.css(e, "top"),
				c = lt.css(e, "left"),
				u = ("absolute" === i || "fixed" === i) && lt.inArray("auto", [l, c]) > -1,
				d = {},
				f = {};
			u ? (f = a.position(), r = f.top, o = f.left) : (r = parseFloat(l) || 0, o = parseFloat(c) || 0), lt.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + r), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
		}
	}, lt.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
					top: 0,
					left: 0
				},
					i = this[0];
				return "fixed" === lt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), lt.nodeName(e[0], "html") || (n = e.offset()), n.top += lt.css(e[0], "borderTopWidth", !0), n.left += lt.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - lt.css(i, "marginTop", !0),
					left: t.left - n.left - lt.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Y.documentElement; e && !lt.nodeName(e, "html") && "static" === lt.css(e, "position");) e = e.offsetParent;
				return e || Y.documentElement
			})
		}
	}), lt.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var i = /Y/.test(n);
		lt.fn[e] = function(r) {
			return lt.access(this, function(e, r, o) {
				var a = P(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : (a ? a.scrollTo(i ? lt(a).scrollLeft() : o, i ? o : lt(a).scrollTop()) : e[r] = o, t)
			}, e, r, arguments.length, null)
		}
	}), lt.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		lt.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(i, r) {
			lt.fn[r] = function(r, o) {
				var a = arguments.length && (i || "boolean" != typeof r),
					s = i || (r === !0 || o === !0 ? "margin" : "border");
				return lt.access(this, function(n, i, r) {
					var o;
					return lt.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? lt.css(n, i, s) : lt.style(n, i, r, s)
				}, n, a ? r : t, a, null)
			}
		})
	}), e.jQuery = e.$ = lt, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return lt
	})
}(window), function() {
	"use strict";
	function e(e) {
		function t(t, i) {
			var o, m, g = t == window,
				v = i && void 0 !== i.message ? i.message : void 0;
			if (i = e.extend({}, e.blockUI.defaults, i || {}), !i.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
				if (i.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, i.overlayCSS || {}), o = e.extend({}, e.blockUI.defaults.css, i.css || {}), i.onOverlayClick && (i.overlayCSS.cursor = "pointer"), m = e.extend({}, e.blockUI.defaults.themedCSS, i.themedCSS || {}), v = void 0 === v ? i.message : v, g && p && n(window, {
					fadeOut: 0
				}), v && "string" != typeof v && (v.parentNode || v.jquery)) {
					var y = v.jquery ? v[0] : v,
						b = {};
					e(t).data("blockUI.history", b), b.el = y, b.parent = y.parentNode, b.display = y.style.display, b.position = y.style.position, b.parent && b.parent.removeChild(y)
				}
				e(t).data("blockUI.onUnblock", i.onUnblock);
				var x, w, k, C, T = i.baseZ;
				x = u || i.forceIframe ? e('<iframe class="blockUI" style="z-index:' + T+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + i.iframeSrc + '"></iframe>') : e('<div class="blockUI" style="display:none"></div>'), w = i.theme ? e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + T+++';display:none"></div>') : e('<div class="blockUI blockOverlay" style="z-index:' + T+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), i.theme && g ? (C = '<div class="blockUI ' + i.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (T + 10) + ';display:none;position:fixed">', i.title && (C += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), C += '<div class="ui-widget-content ui-dialog-content"></div>', C += "</div>") : i.theme ? (C = '<div class="blockUI ' + i.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (T + 10) + ';display:none;position:absolute">', i.title && (C += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), C += '<div class="ui-widget-content ui-dialog-content"></div>', C += "</div>") : C = g ? '<div class="blockUI ' + i.blockMsgClass + ' blockPage" style="z-index:' + (T + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + i.blockMsgClass + ' blockElement" style="z-index:' + (T + 10) + ';display:none;position:absolute"></div>', k = e(C), v && (i.theme ? (k.css(m), k.addClass("ui-widget-content")) : k.css(o)), i.theme || w.css(i.overlayCSS), w.css("position", g ? "fixed" : "absolute"), (u || i.forceIframe) && x.css("opacity", 0);
				var _ = [x, w, k],
					S = g ? e("body") : e(t);
				e.each(_, function() {
					this.appendTo(S)
				}), i.theme && i.draggable && e.fn.draggable && k.draggable({
					handle: ".ui-dialog-titlebar",
					cancel: "li"
				});
				var N = f && (!e.support.boxModel || e("object,embed", g ? null : t).length > 0);
				if (d || N) {
					if (g && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (d || !e.support.boxModel) && !g) var j = l(t, "borderTopWidth"),
						E = l(t, "borderLeftWidth"),
						I = j ? "(0 - " + j + ")" : 0,
						A = E ? "(0 - " + E + ")" : 0;
					e.each(_, function(e, t) {
						var n = t[0].style;
						if (n.position = "absolute", 2 > e) g ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"'), g ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"'), A && n.setExpression("left", A), I && n.setExpression("top", I);
						else if (i.centerY) g && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), n.marginTop = 0;
						else if (!i.centerY && g) {
							var r = i.css && i.css.top ? parseInt(i.css.top, 10) : 0,
								o = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + r + ') + "px"';
							n.setExpression("top", o)
						}
					})
				}
				if (v && (i.theme ? k.find(".ui-widget-content").append(v) : k.append(v), (v.jquery || v.nodeType) && e(v).show()), (u || i.forceIframe) && i.showOverlay && x.show(), i.fadeIn) {
					var D = i.onBlock ? i.onBlock : c,
						L = i.showOverlay && !v ? D : c,
						q = v ? D : c;
					i.showOverlay && w._fadeIn(i.fadeIn, L), v && k._fadeIn(i.fadeIn, q)
				} else i.showOverlay && w.show(), v && k.show(), i.onBlock && i.onBlock();
				if (r(1, t, i), g ? (p = k[0], h = e(i.focusableElements, p), i.focusInput && setTimeout(a, 20)) : s(k[0], i.centerX, i.centerY), i.timeout) {
					var $ = setTimeout(function() {
						g ? e.unblockUI(i) : e(t).unblock(i)
					}, i.timeout);
					e(t).data("blockUI.timeout", $)
				}
			}
		}
		function n(t, n) {
			var o, a = t == window,
				s = e(t),
				l = s.data("blockUI.history"),
				c = s.data("blockUI.timeout");
			c && (clearTimeout(c), s.removeData("blockUI.timeout")), n = e.extend({}, e.blockUI.defaults, n || {}), r(0, t, n), null === n.onUnblock && (n.onUnblock = s.data("blockUI.onUnblock"), s.removeData("blockUI.onUnblock"));
			var u;
			u = a ? e("body").children().filter(".blockUI").add("body > .blockUI") : s.find(">.blockUI"), n.cursorReset && (u.length > 1 && (u[1].style.cursor = n.cursorReset), u.length > 2 && (u[2].style.cursor = n.cursorReset)), a && (p = h = null), n.fadeOut ? (o = u.length, u.stop().fadeOut(n.fadeOut, function() {
				0 === --o && i(u, l, n, t)
			})) : i(u, l, n, t)
		}
		function i(t, n, i, r) {
			var o = e(r);
			if (!o.data("blockUI.isBlocked")) {
				t.each(function() {
					this.parentNode && this.parentNode.removeChild(this)
				}), n && n.el && (n.el.style.display = n.display, n.el.style.position = n.position, n.parent && n.parent.appendChild(n.el), o.removeData("blockUI.history")), o.data("blockUI.static") && o.css("position", "static"), "function" == typeof i.onUnblock && i.onUnblock(r, i);
				var a = e(document.body),
					s = a.width(),
					l = a[0].style.width;
				a.width(s - 1).width(s), a[0].style.width = l
			}
		}
		function r(t, n, i) {
			var r = n == window,
				a = e(n);
			if ((t || (!r || p) && (r || a.data("blockUI.isBlocked"))) && (a.data("blockUI.isBlocked", t), r && i.bindEvents && (!t || i.showOverlay))) {
				var s = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
				t ? e(document).bind(s, i, o) : e(document).unbind(s, o)
			}
		}
		function o(t) {
			if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
				var n = h,
					i = !t.shiftKey && t.target === n[n.length - 1],
					r = t.shiftKey && t.target === n[0];
				if (i || r) return setTimeout(function() {
					a(r)
				}, 10), !1
			}
			var o = t.data,
				s = e(t.target);
			return s.hasClass("blockOverlay") && o.onOverlayClick && o.onOverlayClick(t), s.parents("div." + o.blockMsgClass).length > 0 ? !0 : 0 === s.parents().children().filter("div.blockUI").length
		}
		function a(e) {
			if (h) {
				var t = h[e === !0 ? h.length - 1 : 0];
				t && t.focus()
			}
		}
		function s(e, t, n) {
			var i = e.parentNode,
				r = e.style,
				o = (i.offsetWidth - e.offsetWidth) / 2 - l(i, "borderLeftWidth"),
				a = (i.offsetHeight - e.offsetHeight) / 2 - l(i, "borderTopWidth");
			t && (r.left = o > 0 ? o + "px" : "0"), n && (r.top = a > 0 ? a + "px" : "0")
		}
		function l(t, n) {
			return parseInt(e.css(t, n), 10) || 0
		}
		e.fn._fadeIn = e.fn.fadeIn;
		var c = e.noop ||
		function() {},
			u = /MSIE/.test(navigator.userAgent),
			d = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
			f = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));
		e.blockUI = function(e) {
			t(window, e)
		}, e.unblockUI = function(e) {
			n(window, e)
		}, e.growlUI = function(t, n, i, r) {
			var o = e('<div class="growlUI"></div>');
			t && o.append("<h1>" + t + "</h1>"), n && o.append("<h2>" + n + "</h2>"), void 0 === i && (i = 3e3);
			var a = function(t) {
				t = t || {}, e.blockUI({
					message: o,
					fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
					fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
					timeout: "undefined" != typeof t.timeout ? t.timeout : i,
					centerY: !1,
					showOverlay: !1,
					onUnblock: r,
					css: e.blockUI.defaults.growlCSS
				})
			};
			a();
			o.css("opacity");
			o.mouseover(function() {
				a({
					fadeIn: 0,
					timeout: 3e4
				});
				var t = e(".blockMsg");
				t.stop(), t.fadeTo(300, 1)
			}).mouseout(function() {
				e(".blockMsg").fadeOut(1e3)
			})
		}, e.fn.block = function(n) {
			if (this[0] === window) return e.blockUI(n), this;
			var i = e.extend({}, e.blockUI.defaults, n || {});
			return this.each(function() {
				var t = e(this);
				i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
					fadeOut: 0
				})
			}), this.each(function() {
				"static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, n)
			})
		}, e.fn.unblock = function(t) {
			return this[0] === window ? (e.unblockUI(t), this) : this.each(function() {
				n(this, t)
			})
		}, e.blockUI.version = 2.66, e.blockUI.defaults = {
			message: "<h1>Please wait...</h1>",
			title: null,
			draggable: !0,
			theme: !1,
			css: {
				padding: 0,
				margin: 0,
				width: "30%",
				top: "40%",
				left: "35%",
				textAlign: "center",
				color: "#000",
				border: "3px solid #aaa",
				backgroundColor: "#fff",
				cursor: "default"
			},
			themedCSS: {
				width: "30%",
				top: "40%",
				left: "35%"
			},
			overlayCSS: {
				backgroundColor: "#000",
				opacity: .6,
				cursor: "default"
			},
			cursorReset: "default",
			growlCSS: {
				width: "350px",
				top: "10px",
				left: "",
				right: "10px",
				border: "none",
				padding: "5px",
				opacity: .6,
				cursor: "default",
				color: "#fff",
				backgroundColor: "#000",
				"-webkit-border-radius": "10px",
				"-moz-border-radius": "10px",
				"border-radius": "10px"
			},
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
			forceIframe: !1,
			baseZ: 1e3,
			centerX: !0,
			centerY: !0,
			allowBodyStretch: !0,
			bindEvents: !0,
			constrainTabKey: !0,
			fadeIn: 200,
			fadeOut: 400,
			timeout: 0,
			showOverlay: !0,
			focusInput: !0,
			focusableElements: ":input:enabled:visible",
			onBlock: null,
			onUnblock: null,
			onOverlayClick: null,
			quirksmodeOffsetHack: 4,
			blockMsgClass: "blockMsg",
			ignoreIfBlocked: !1
		};
		var p = null,
			h = []
	}
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}(), function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
	function t(e) {
		return s.raw ? e : encodeURIComponent(e)
	}
	function n(e) {
		return s.raw ? e : decodeURIComponent(e)
	}
	function i(e) {
		return t(s.json ? JSON.stringify(e) : String(e))
	}
	function r(e) {
		0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			e = decodeURIComponent(e.replace(a, " "))
		} catch (t) {
			return
		}
		try {
			return s.json ? JSON.parse(e) : e
		} catch (t) {}
	}
	function o(t, n) {
		var i = s.raw ? t : r(t);
		return e.isFunction(n) ? n(i) : i
	}
	var a = /\+/g,
		s = e.cookie = function(r, a, l) {
			if (void 0 !== a && !e.isFunction(a)) {
				if (l = e.extend({}, s.defaults, l), "number" == typeof l.expires) {
					var c = l.expires,
						u = l.expires = new Date;
					u.setDate(u.getDate() + c)
				}
				return document.cookie = [t(r), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
			}
			for (var d = r ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], p = 0, h = f.length; h > p; p++) {
				var m = f[p].split("="),
					g = n(m.shift()),
					v = m.join("=");
				if (r && r === g) {
					d = o(v, a);
					break
				}
				r || void 0 === (v = o(v)) || (d[g] = v)
			}
			return d
		};
	s.defaults = {}, e.removeCookie = function(t, n) {
		return void 0 !== e.cookie(t) ? (e.cookie(t, "", e.extend({}, n, {
			expires: -1
		})), !0) : !1
	}
}), !
function(e, t, n, i) {
	var r = e(t);
	e.fn.lazyload = function(o) {
		function a() {
			var t = 0;
			l.each(function() {
				var n = e(this);
				if (!c.skip_invisible || n.is(":visible")) if (e.abovethetop(this, c) || e.leftofbegin(this, c));
				else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
					if (++t > c.failure_limit) return !1
				} else n.trigger("appear"), t = 0
			})
		}
		var s, l = this,
			c = {
				threshold: 0,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				container: t,
				data_attribute: "original",
				skip_invisible: !0,
				appear: null,
				load: null
			};
		return o && (i !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), i !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), e.extend(c, o)), s = c.container === i || c.container === t ? r : e(c.container), 0 === c.event.indexOf("scroll") && s.bind(c.event, function() {
			return a()
		}), this.each(function() {
			var t = this,
				n = e(t);
			t.loaded = !1, n.one("appear", function() {
				if (!this.loaded) {
					if (c.appear) {
						var i = l.length;
						c.appear.call(t, i, c)
					}
					e("<img />").bind("load", function() {
						n.hide().attr("src", n.data(c.data_attribute))[c.effect](c.effect_speed), t.loaded = !0;
						var i = e.grep(l, function(e) {
							return !e.loaded
						});
						if (l = e(i), c.load) {
							var r = l.length;
							c.load.call(t, r, c)
						}
					}).attr("src", n.data(c.data_attribute))
				}
			}), 0 !== c.event.indexOf("scroll") && n.bind(c.event, function() {
				t.loaded || n.trigger("appear")
			})
		}), r.bind("resize", function() {
			a()
		}), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function(t) {
			t.originalEvent && t.originalEvent.persisted && l.each(function() {
				e(this).trigger("appear")
			})
		}), e(n).ready(function() {
			a()
		}), this
	}, e.belowthefold = function(n, o) {
		var a;
		return a = o.container === i || o.container === t ? r.height() + r.scrollTop() : e(o.container).offset().top + e(o.container).height(), a <= e(n).offset().top - o.threshold
	}, e.rightoffold = function(n, o) {
		var a;
		return a = o.container === i || o.container === t ? r.width() + r.scrollLeft() : e(o.container).offset().left + e(o.container).width(), a <= e(n).offset().left - o.threshold
	}, e.abovethetop = function(n, o) {
		var a;
		return a = o.container === i || o.container === t ? r.scrollTop() : e(o.container).offset().top, a >= e(n).offset().top + o.threshold + e(n).height()
	}, e.leftofbegin = function(n, o) {
		var a;
		return a = o.container === i || o.container === t ? r.scrollLeft() : e(o.container).offset().left, a >= e(n).offset().left + o.threshold + e(n).width()
	}, e.inviewport = function(t, n) {
		return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
	}, e.extend(e.expr[":"], {
		"below-the-fold": function(t) {
			return e.belowthefold(t, {
				threshold: 0
			})
		},
		"above-the-top": function(t) {
			return !e.belowthefold(t, {
				threshold: 0
			})
		},
		"right-of-screen": function(t) {
			return e.rightoffold(t, {
				threshold: 0
			})
		},
		"left-of-screen": function(t) {
			return !e.rightoffold(t, {
				threshold: 0
			})
		},
		"in-viewport": function(t) {
			return e.inviewport(t, {
				threshold: 0
			})
		},
		"above-the-fold": function(t) {
			return !e.belowthefold(t, {
				threshold: 0
			})
		},
		"right-of-fold": function(t) {
			return e.rightoffold(t, {
				threshold: 0
			})
		},
		"left-of-fold": function(t) {
			return !e.rightoffold(t, {
				threshold: 0
			})
		}
	})
}(jQuery, window, document), function(e) {
	function t(t, n, i, r) {
		var o = {
			data: r || 0 === r || r === !1 ? r : n ? n.data : {},
			_wrap: n ? n._wrap : null,
			tmpl: null,
			parent: n || null,
			nodes: [],
			calls: c,
			nest: u,
			wrap: d,
			html: f,
			update: p
		};
		return t && e.extend(o, t, {
			nodes: [],
			parent: n
		}), i && (o.tmpl = i, o._ctnt = o._ctnt || o.tmpl(e, o), o.key = ++w, (C.length ? b : y)[w] = o), o
	}
	function n(t, r, o) {
		var a, s = o ? e.map(o, function(e) {
			return "string" == typeof e ? t.key ? e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + g + '="' + t.key + '" $2') : e : n(e, t, e._ctnt)
		}) : t;
		return r ? s : (s = s.join(""), s.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(t, n, r, o) {
			a = e(r).get(), l(a), n && (a = i(n).concat(a)), o && (a = a.concat(i(o)))
		}), a ? a : i(s))
	}
	function i(t) {
		var n = document.createElement("div");
		return n.innerHTML = t, e.makeArray(n.childNodes)
	}
	function r(t) {
		return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + e.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(t, n, i, r, o, s, l) {
			var c, u, d, f = e.tmpl.tag[i];
			if (!f) throw "Unknown template tag: " + i;
			return c = f._default || [], s && !/\w$/.test(o) && (o += s, s = ""), o ? (o = a(o), l = l ? "," + a(l) + ")" : s ? ")" : "", u = s ? o.indexOf(".") > -1 ? o + a(s) : "(" + o + ").call($item" + l : o, d = s ? u : "(typeof(" + o + ")==='function'?(" + o + ").call($item):(" + o + "))") : d = u = c.$1 || "null", r = a(r), "');" + f[n ? "close" : "open"].split("$notnull_1").join(o ? "typeof(" + o + ")!=='undefined' && (" + o + ")!=null" : "true").split("$1a").join(d).split("$1").join(u).split("$2").join(r || c.$2 || "") + "__.push('"
		}) + "');}return __;")
	}
	function o(t, i) {
		t._wrap = n(t, !0, e.isArray(i) ? i : [v.test(i) ? i : e(i).html()]).join("")
	}
	function a(e) {
		return e ? e.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
	}
	function s(e) {
		var t = document.createElement("div");
		return t.appendChild(e.cloneNode(!0)), t.innerHTML
	}
	function l(n) {
		function i(n) {
			function i(e) {
				e += c, a = u[e] = u[e] || t(a, y[a.parent.key + c] || a.parent)
			}
			var r, o, a, s, l = n;
			if (s = n.getAttribute(g)) {
				for (; l.parentNode && 1 === (l = l.parentNode).nodeType && !(r = l.getAttribute(g)););
				r !== s && (l = l.parentNode ? 11 === l.nodeType ? 0 : l.getAttribute(g) || 0 : 0, (a = y[s]) || (a = b[s], a = t(a, y[l] || b[l]), a.key = ++w, y[w] = a), k && i(s)), n.removeAttribute(g)
			} else k && (a = e.data(n, "tmplItem")) && (i(a.key), y[a.key] = a, l = e.data(n.parentNode, "tmplItem"), l = l ? l.key : 0);
			if (a) {
				for (o = a; o && o.key != l;) o.nodes.push(n), o = o.parent;
				delete a._ctnt, delete a._wrap, e.data(n, "tmplItem", a)
			}
		}
		var r, o, a, s, l, c = "_" + k,
			u = {};
		for (a = 0, s = n.length; s > a; a++) if (1 === (r = n[a]).nodeType) {
			for (o = r.getElementsByTagName("*"), l = o.length - 1; l >= 0; l--) i(o[l]);
			i(r)
		}
	}
	function c(e, t, n, i) {
		return e ? (C.push({
			_: e,
			tmpl: t,
			item: this,
			data: n,
			options: i
		}), void 0) : C.pop()
	}
	function u(t, n, i) {
		return e.tmpl(e.template(t), n, i, this)
	}
	function d(t, n) {
		var i = t.options || {};
		return i.wrapped = n, e.tmpl(e.template(t.tmpl), t.data, i, t.item)
	}
	function f(t, n) {
		var i = this._wrap;
		return e.map(e(e.isArray(i) ? i.join("") : i).filter(t || "*"), function(e) {
			return n ? e.innerText || e.textContent : e.outerHTML || s(e)
		})
	}
	function p() {
		var t = this.nodes;
		e.tmpl(null, null, null, this).insertBefore(t[0]), e(t).remove()
	}
	var h, m = e.fn.domManip,
		g = "_tmplitem",
		v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
		y = {},
		b = {},
		x = {
			key: 0,
			data: {}
		},
		w = 0,
		k = 0,
		C = [];
	e.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, n) {
		e.fn[t] = function(i) {
			var r, o, a, s, l = [],
				c = e(i),
				u = 1 === this.length && this[0].parentNode;
			if (h = y || {}, u && 11 === u.nodeType && 1 === u.childNodes.length && 1 === c.length) c[n](this[0]), l = this;
			else {
				for (o = 0, a = c.length; a > o; o++) k = o, r = (o > 0 ? this.clone(!0) : this).get(), e(c[o])[n](r), l = l.concat(r);
				k = 0, l = this.pushStack(l, t, c.selector)
			}
			return s = h, h = null, e.tmpl.complete(s), l
		}
	}), e.fn.extend({
		tmpl: function(t, n, i) {
			return e.tmpl(this[0], t, n, i)
		},
		tmplItem: function() {
			return e.tmplItem(this[0])
		},
		template: function(t) {
			return e.template(t, this[0])
		},
		domManip: function(t, n, i) {
			if (t[0] && e.isArray(t[0])) {
				for (var r, o = e.makeArray(arguments), a = t[0], s = a.length, l = 0; s > l && !(r = e.data(a[l++], "tmplItem")););
				r && k && (o[2] = function(t) {
					e.tmpl.afterManip(this, t, i)
				}), m.apply(this, o)
			} else m.apply(this, arguments);
			return k = 0, !h && e.tmpl.complete(y), this
		}
	}), e.extend({
		tmpl: function(i, r, a, s) {
			var l, c = !s;
			if (c) s = x, i = e.template[i] || e.template(null, i), b = {};
			else if (!i) return i = s.tmpl, y[s.key] = s, s.nodes = [], s.wrapped && o(s, s.wrapped), e(n(s, null, s.tmpl(e, s)));
			return i ? ("function" == typeof r && (r = r.call(s || {})), a && a.wrapped && o(a, a.wrapped), l = e.isArray(r) ? e.map(r, function(e) {
				return e ? t(a, s, i, e) : null
			}) : [t(a, s, i, r)], c ? e(n(s, null, l)) : l) : []
		},
		tmplItem: function(t) {
			var n;
			for (t instanceof e && (t = t[0]); t && 1 === t.nodeType && !(n = e.data(t, "tmplItem")) && (t = t.parentNode););
			return n || x
		},
		template: function(t, n) {
			return n ? ("string" == typeof n ? n = r(n) : n instanceof e && (n = n[0] || {}), n.nodeType && (n = e.data(n, "tmpl") || e.data(n, "tmpl", r(n.innerHTML))), "string" == typeof t ? e.template[t] = n : n) : t ? "string" != typeof t ? e.template(null, t) : e.template[t] || e.template(null, v.test(t) ? t : e(t)) : null
		},
		encode: function(e) {
			return ("" + e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
		}
	}), e.extend(e.tmpl, {
		tag: {
			tmpl: {
				_default: {
					$2: "null"
				},
				open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
			},
			wrap: {
				_default: {
					$2: "null"
				},
				open: "$item.calls(__,$1,$2);__=[];",
				close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
			},
			each: {
				_default: {
					$2: "$index, $value"
				},
				open: "if($notnull_1){$.each($1a,function($2){with(this){",
				close: "}});}"
			},
			"if": {
				open: "if(($notnull_1) && $1a){",
				close: "}"
			},
			"else": {
				_default: {
					$1: "true"
				},
				open: "}else if(($notnull_1) && $1a){"
			},
			html: {
				open: "if($notnull_1){__.push($1a);}"
			},
			"=": {
				_default: {
					$1: "$data"
				},
				open: "if($notnull_1){__.push($.encode($1a));}"
			},
			"!": {
				open: ""
			}
		},
		complete: function() {
			y = {}
		},
		afterManip: function(t, n, i) {
			var r = 11 === n.nodeType ? e.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
			i.call(t, n), l(r), k++
		}
	})
}(jQuery), function() {
	function e(e, t, n) {
		var i = t && n || 0,
			r = 0;
		for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(e) {
			16 > r && (t[i + r++] = f[e])
		}); 16 > r;) t[i + r++] = 0;
		return t
	}
	function t(e, t) {
		var n = t || 0,
			i = d;
		return i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]]
	}
	function n(e, n, i) {
		var r = n && i || 0,
			o = n || [];
		e = e || {};
		var a = null != e.clockseq ? e.clockseq : g,
			s = null != e.msecs ? e.msecs : (new Date).getTime(),
			l = null != e.nsecs ? e.nsecs : y + 1,
			c = s - v + (l - y) / 1e4;
		if (0 > c && null == e.clockseq && (a = a + 1 & 16383), (0 > c || s > v) && null == e.nsecs && (l = 0), l >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
		v = s, y = l, g = a, s += 122192928e5;
		var u = (1e4 * (268435455 & s) + l) % 4294967296;
		o[r++] = u >>> 24 & 255, o[r++] = u >>> 16 & 255, o[r++] = u >>> 8 & 255, o[r++] = 255 & u;
		var d = s / 4294967296 * 1e4 & 268435455;
		o[r++] = d >>> 8 & 255, o[r++] = 255 & d, o[r++] = d >>> 24 & 15 | 16, o[r++] = d >>> 16 & 255, o[r++] = a >>> 8 | 128, o[r++] = 255 & a;
		for (var f = e.node || m, p = 0; 6 > p; p++) o[r + p] = f[p];
		return n ? n : t(o)
	}
	function i(e, n, i) {
		var o = n && i || 0;
		"string" == typeof e && (n = "binary" == e ? new u(16) : null, e = null), e = e || {};
		var a = e.random || (e.rng || r)();
		if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, n) for (var s = 0; 16 > s; s++) n[o + s] = a[s];
		return n || t(a)
	}
	var r, o = this;
	if ("function" == typeof require) try {
		var a = require("crypto").randomBytes;
		r = a &&
		function() {
			return a(16)
		}
	} catch (s) {}
	if (!r && o.crypto && crypto.getRandomValues) {
		var l = new Uint8Array(16);
		r = function() {
			return crypto.getRandomValues(l), l
		}
	}
	if (!r) {
		var c = new Array(16);
		r = function() {
			for (var e, t = 0; 16 > t; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), c[t] = e >>> ((3 & t) << 3) & 255;
			return c
		}
	}
	for (var u = "function" == typeof Buffer ? Buffer : Array, d = [], f = {}, p = 0; 256 > p; p++) d[p] = (p + 256).toString(16).substr(1), f[d[p]] = p;
	var h = r(),
		m = [1 | h[0], h[1], h[2], h[3], h[4], h[5]],
		g = 16383 & (h[6] << 8 | h[7]),
		v = 0,
		y = 0,
		b = i;
	if (b.v1 = n, b.v4 = i, b.parse = e, b.unparse = t, b.BufferClass = u, "function" == typeof define && define.amd) define(function() {
		return b
	});
	else if ("undefined" != typeof module && module.exports) module.exports = b;
	else {
		var x = o.uuid;
		b.noConflict = function() {
			return o.uuid = x, b
		}, o.uuid = b
	}
}.call(this), +
function(e, t) {
	var n;
	n = t.openCourse ? t.openCourse : t.openCourse = {}, n.ns = function(t) {
		for (var n = t.split("."), i = this, r = 0; r < n.length; r++) {
			var o = e.trim(n[r]);
			i[o] = i[o] || {}, i = i[o]
		}
		return i
	}
}(window.jQuery, window), function(e, t, n) {
	{
		var i = n.ns("util");
		n.ns("ui")
	}
	i._loginName = "", i.isLogin = function() {
		return i._loginName
	}, n.isUser = function() {
		var e = i.isLogin();
		return e ? {
			userid: e
		} : null
	}, i._getCharsL = function(e) {
		var t = e.length,
			n = 0,
			i = e.match(/[^\x00-\x80]/g);
		return i && i.length > 0 && (n = i.length || 0), t + n
	}, i._sliceCnAndEns = function(e, t) {
		for (var n = "", i = e.length, e = e.split(""), r = 0, o = 0; i > o; o++) {
			var a = e[o],
				s = a.match(/[^\x00-\x80]/g);
			if (r += s && s.length > 0 ? 2 : 1, r > t) break;
			n += a
		}
		return n
	}, i._formatUpdateTme = function(e) {
		var t = new Date;
		t.setTime(e || 0);
		var n = new Date;
		if (n.getTime() < t.getTime()) return "1秒前";
		if (n.getFullYear() != t.getFullYear()) return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
		if (n.getMonth() != t.getMonth() || n.getDate() != t.getDate()) return t.getMonth() + 1 + "月" + t.getDate() + "日";
		if (n.getHours() != t.getHours()) {
			var i = t.getMinutes();
			return i = 10 > i ? "0" + i : i, t.getHours() + ":" + i
		}
		return n.getMinutes() != t.getMinutes() ? n.getMinutes() - t.getMinutes() + "分钟前" : n.getSeconds() != t.getSeconds() ? n.getSeconds() - t.getSeconds() + "秒前" : "1秒前"
	}, i._formatAnchorTime = function(e) {
		var t = Math.floor(e / 60),
			n = e % 60,
			i = 10 > n ? "0" + n : n,
			r = 10 > t ? "0" + t : t;
		return r + ":" + i
	}, i._returnAnchorTime = function(e) {
		var t = e.split(":");
		return 1 == t.length ? e : 60 * Number(t[0]) + Number(t[1])
	}, i._formatAccout = function(e) {
		var t = e.substring(0, e.indexOf("@")),
			n = e.substring(e.indexOf("@"));
		if (i._getCharsL(t) >= 2) {
			var r = t;
			t = r.substring(0, 2) + "***" + r.slice(-2)
		}
		return t + n
	}, i._showTime = function() {
		var e = new Date,
			t = "";
		return t = e.getFullYear() + "-", t = t + (e.getMonth() + 1) + "-", t = t + e.getDate() + " ", t = t + e.getHours() + ":", t = t + e.getMinutes() + ":", e.getSeconds() <= 9 ? t += "0" + e.getSeconds() : t = t + e.getSeconds() + "", t
	}, i._getTEDData = function(e) {
		var t = {};
		return t.text = e.replace(/^[\s\S]*\[text\]([\s\S]*)\[\/text\][\s\S]*$/gi, "$1"), t.detail = e.replace(/^[\s\S]*\[detail\]([\s\S]*)\[\/detail\][\s\S]*$/gi, "$1"), t.doc = e.replace(/^[\s\S]*\[doc\]([\s\S]*)\[\/doc\][\s\S]*$/gi, "$1"), t.headImg = e.replace(/^[\s\S]*\[headImg\]([\s\S]*)\[\/headImg\][\s\S]*$/gi, "$1"), t.detail == e && (t.detail = null), t
	};
	var r = function(t, n, i) {
		var r = [];
		for (var o in n) r.push(o + "=" + encodeURIComponent(n[o] || ""));
		var a = e('<iframe src="' + t + "?" + r.join("&") + '" width="1" height="1" frameborder="0" scrolling="no"></iframe>');
		e(document.body).append(a), a.on("load", function() {
			a.remove(), i && i()
		})
	};
	i._utracker = function() {
		var n = "__oc_uuid",
			i = e.cookie(n),
			r = function(e) {
				var t = new Date;
				t.setTime(t.getTime() + 31536e6), document.cookie = n + "=" + e + ";domain=.163.com;path=/;expires=" + t
			};
		i ? r(i) : r(t.uuid.v1())
	};
	var o = function(t) {
		return i._utracker(), n.util.isLogin() && (t.ursid = n.util.isLogin()), t.uuid = e.cookie("__oc_uuid"), t
	};
	i._formRequest = function() {
		var t = 0,
			n = {};
		return function(i, r, o, a) {
			var s, l = "formRequest" + t++,
				c = !1;
			for (var u in n) if (n[u].url == i) {
				c = !0, s = n[u];
				break
			}
			if (c) {
				var d = s.form.find('input[type="hidden"]');
				return d.each(function() {
					r[this.name] && (this.value = r[this.name])
				}), s.form.submit(), void 0
			}
			var f = e("<form>").attr({
				action: i,
				method: o || "get",
				target: l
			});
			a && f.attr("accept-charset", a);
			for (var u in r) f.append('<input type="hidden" name="' + u + "\" value='" + r[u] + "'/>");
			var p = e('<iframe name="' + l + '">').attr({
				frameborder: "0",
				name: l,
				id: l,
				style: "display:block; height:0"
			});
			n[l] = {
				url: i,
				form: f,
				iframe: p
			}, e(document.body).append(f).append(p), f.submit()
		}
	}(), i._isMobile = function() {
		var e = /(android)/gi,
			t = /(iphone)/gi,
			n = /(ipad)/gi,
			i = navigator.userAgent.toLowerCase();
		return e.test(i) || t.test(i) || n.test(i)
	}, i._formatViewCount = function(e) {
		return e > 9999 ? (e / 1e4).toFixed(1) + "万" : e
	}
}(window.jQuery, window, window.openCourse || {}), +
function(e, t, n) {
		o = function() {
			var t = e(document.body).data("pagename");
			if (t) {
				var n = {
					index: 0,
					ted: 1,
					gloal: 2,
					china: 3,
					bbc: 4,
					topic: 5,
					khan: 6,
					coursera: "7",
					"package": 8
				};
				e(".link", ".mainnav").eq(n[t]).addClass("current")
			}
		},
		
		s = function(t) {
			var n = t,
				i = 38,
				r = 40,
				o = e("body"),
				a = e("#j-SearchForm"),
				s = e("#j-SearchForm .search"),
				l = e("#j-search"),
				c = '<div class="j-searchcomment searchcomment"><ul class="commentlist j-commentlist" data-selected="1" data-total="${total}">{{each(index,item) data}}<li data-index="${index}" data-query="${item.searchKey}"><span class="search-display">${item.displayKey} </span><span class="search-desc f-c9">- ${item.desc}</span></li>{{/each}}</ul></div>',
				u = e(c).tmpl({
					data: n,
					total: n.length || 0
				});
			u.children().first().addClass("current");
			var d = u,
				f = function() {
					var t = e(this),
						n = t.data("query");
					l.val(n), l.focus(), e("#j-SearchForm").submit()
				},
				p = function() {
					var t = parseInt(e(this).data("index"));
					d.children().removeClass("current"), d.children()[t].className = "current", d.data("selected", t + 1)
				};
			a.on("submit", function() {
				if (e(".j-commentlist").length) {
					var t = parseInt(d.data("selected"));
					l.val(d.children().eq(t - 1).data("query")), d.remove()
				}
			}), d.on("mouseover", "li", p), d.on("click", "li", f);
			var h = function(e) {
				var t = parseInt(d.data("total")),
					n = parseInt(d.data("selected"));
				e.keyCode == r ? (n == t ? n = 1 : n++, d.children().removeClass("current"), d.children()[n - 1].className = "current", d.data("selected", n)) : e.keyCode == i && (1 == n ? n = t : n--, d.children().removeClass("current"), d.children()[n - 1].className = "current", d.data("selected", n))
			};
			l.on("focus", function() {
				if (!l.val()) {
					var e = parseInt(d.data("selected"));
					d.children().removeClass("current"), d.children()[e - 1].className = "current", d.data("selected", e), o.append(u);
					var t = s.offset();
					d.css({
						top: t.top + 34 + "px",
						left: t.left + "px"
					}), l.on("keyup", h), d.on("mouseover", "li", p), d.on("click", "li", f)
				}
			}).on("blur", function() {
				l.off("keyup", h), setTimeout(function() {
					u.remove()
				}, 200)
			}).on("input", function() {
				if (l.val()) l.off("keyup", h), u.remove();
				else {
					u.data("selected", 1), u.find(".current").removeClass("current"), u.children()[0].className = "current", o.append(u);
					var e = s.offset();
					d.css({
						top: e.top + 34 + "px",
						left: e.left + "px"
					}), l.on("keyup", h), d.on("mouseover", "li", p), d.on("click", "li", f)
				}
			})
		},
		l = function() {
			var t = !! window.ActiveXObject && !window.XMLHttpRequest;
			if (t) {
				var n = e('<div class="hide f-pr wrap">        						<a class="close f-pa j-close f-icon"></a>        						<div class="img f-fl"></div>      							<div class="right f-fl">      								<p class="ts">浏览器版本过低</p>      								<p>建议您对浏览器进行升级，以便获得更好的体验</p>      								<div><a class="f-fl btn f-f0 u-commonbtn j-close">我知道了</a></div>      							</div>      						</div>');
				n.find(".j-close").click(function() {
					e.unblockUI()
				}), e.blockUI.defaults.css = {}, e.blockUI({
					message: n,
					blockMsgClass: "u-browserDialog"
				})
			}
		},
		c = function() {
			r(), o(), l(), a(), i._utracker(), n.cb && (n.cb.initIndex && n.cb.initIndex(), n.cb.initCaptionCorrection && n.cb.initCaptionCorrection(), n.cb._initStatus && n.cb._initStatus(), n.cb._initMovieStore && n.cb._initMovieStore(), n.cb._initNote && n.cb._initNote(), n.cb._initRecommend && n.cb._initRecommend(), n.cb._initMyNote && n.cb._initMyNote()), e("img.lazy").lazyload({
				effect: "fadeIn"
			})
		};
}(window.jQuery), +
function(e) {
	var t = e("#j-fixnav");
	if (t.get(0)) {
		var n = t.offset().top,
			i = t.data("offset") || 0,
			r = t.data("clazz") || "current",
			o = t.find(".j-section"),
			a = o.map(function() {
				return e(e(this).attr("href"))
			});
		e(window).scroll(function() {
			var s = e(this).scrollTop(),
				l = [];
			a.each(function() {
				e(this).get(0) && l.push(e(this).offset().top)
			}), l.push(e(document.body).height());
			for (var c = 1, u = l.length; u > c; c++) o.eq(c - 1).toggleClass(r, s >= l[c - 1] - i && s < l[c] - i);
			t.toggleClass("fixed", s >= n), t.toggleClass("m-fixnavshadow", s >= n)
		})
	}
}(window.jQuery), +
function(e) {
	"use strict";
	var t = function(t) {
		var n = e(this),
			i = n.find(".j-downitem");
		t.data ? (n.removeClass("active"), i.hide()) : (n.addClass("active"), i.show())
	};
	e(document).on("mouseenter", ".j-hoverdown", !1, t), e(document).on("mouseleave", ".j-hoverdown", !0, t), e(".j-input").on("focus", ".j-txt", function() {
		e(this).parent().addClass("active"), e(this).parent().find("label").hide()
	}).on("blur", ".j-txt", function() {
		e(this).parent().removeClass("active"), e(this).val() || e(this).parent().find("label").show()
	})
}(window.jQuery), +
function(e) {
	var t = e(".j-row");
	t.each(function() {
		var t = e(this),
			n = t.children(),
			i = n.length,
			r = t.data("limit"),
			o = t.data("class") || "g-limitrow";
		if (i > r) {
			var a = e('<div class="u-showall">								<div class="upline"></div>								<div class="dnline"></div>								<div class="dnbtn">									<div class="center">										<a class="btn f-c6"><span class="txt">查看更多</span><span class="f-icon"></span></a>									</div>								</div>							</div>'),
				s = a.find(".btn"),
				l = s.find(".txt"),
				c = s.find(".f-icon");
			n.map(function(e) {
				e >= r && n.eq(e).hide()
			}), s.on("click", function() {
				var i = t.hasClass(o),
					a = i ? "隐藏更多" : "查看更多",
					s = i ? "" : "";
				t.toggleClass(o, !i), t.toggleClass("g-autorow", i), l.text(a), c.text(s), n.map(function(e) {
					e >= r && n.eq(e).toggle(i)
				}), e(window).scroll()
			}), t.parent().append(a)
		}
	})
}(window.jQuery), function(e, t, n) {
	function i() {
		return this.init.apply(this, arguments)
	}
	function r(e) {
		return new i(e)
	}
	var o = (n.ns("util"), n.ns("ui")),
		a = i.prototype;
	a.init = function(t) {
		if (t && (this.$pevBtn = "string" == e.type(t.pevBtn) ? e(t.pevBtn) : t.pevBtn, this.$nextBtn = "string" == e.type(t.nextBtn) ? e(t.nextBtn) : t.nextBtn, this.$container = "string" == e.type(t.container) ? e(t.container) : t.container, this.$listwrap = this.$container.children().eq(0), this.itemCount = this.$listwrap.children().length, this.startFn = t.startFn, this.endFn = t.endFn, this.wrapData = t.wrap, this.centerToggle = t.centerToggle || !1, this.wrapData)) {
			if (this.getItemWidth(), t.showIndex) {
				var n = parseInt(t.showIndex),
					i = n + this.maxScrollCount;
				i > this.itemCount - 1 && (i = this.itemCount - 1, n = i - this.maxScrollCount + 1, n = 0 > n ? 0 : n), this.currIndexs = [n, i], this.moveToIndex()
			} else this.currIndexs = [0, this.itemCount <= this.maxScrollCount ? this.itemCount - 1 : this.maxScrollCount - 1];
			this.updateBtn(), this.checkContainerWidth();
			var r = this;
			e(window).bind("resize", function() {
				r.checkContainerWidth()
			})
		}
	}, a.getItemWidth = function() {
		for (var e = this.$container.width(), t = 0; t < this.wrapData.length; t++) if (this.wrapData[t].containerWidth >= e) return this.itemWidth = this.wrapData[t].itemWidth, this.maxScrollCount = this.wrapData[t].scrollCount, this.baseLeft = this.wrapData[t].baseleft, void 0
	}, a.checkContainerWidth = function() {
		var e = this.itemWidth,
			t = this.maxScrollCount;
		this.getItemWidth(), (e != this.itemWidth || t != this.maxScrollCount) && this.resetPos(), this.itemCount < this.wrapData[0].scrollCount && this.centerToggle && this.$container.addClass(this.centerToggle)
	}, a.resetPos = function() {
		var e = (this.currIndexs[0], this.currIndexs[0] + (this.maxScrollCount - 1));
		if (e > this.itemCount - 1) {
			this.currIndexs[1] = this.itemCount - 1;
			var t = this.currIndexs[1] - (this.maxScrollCount - 1);
			this.currIndexs[0] = 0 > t ? 0 : t
		} else this.currIndexs[1] = e;
		this.moveToIndex(), this.updateBtn()
	}, a.moveToIndex = function() {
		this.$listwrap.css("margin-left", this.baseLeft + this.currIndexs[0] * -this.itemWidth + "px")
	}, a.onClickPev = function() {
		this.scrollFx(-1)
	}, a.onClickNext = function() {
		this.scrollFx(1)
	}, a.scrollFx = function(e) {
		this.startFn && this.startFn(this.currIndexs);
		var t = 0,
			n = this;
		0 > e ? (this.currIndexs[0] -= this.canScrollRightCount, this.currIndexs[1] -= this.canScrollRightCount, t = this.baseLeft + this.currIndexs[0] * -this.itemWidth, this.$listwrap.stop().animate({
			"margin-left": t + "px"
		}, 200, function() {
			n.endFX()
		})) : (this.currIndexs[0] += this.canScrollLeftCount, this.currIndexs[1] += this.canScrollLeftCount, t = this.baseLeft + this.currIndexs[0] * -this.itemWidth, this.$listwrap.stop().animate({
			"margin-left": t + "px"
		}, 200, function() {
			n.endFX()
		})), this.updateBtn()
	}, a.endFX = function() {
		this.endFn && this.endFn(this.currIndexs)
	}, a.updateBtn = function() {
		this.canScrollLeftCount = this.itemCount - 1 - this.currIndexs[1], this.canScrollLeftCount = this.canScrollLeftCount > this.maxScrollCount ? this.maxScrollCount : this.canScrollLeftCount, this.canScrollRightCount = this.currIndexs[0] - 0, this.canScrollRightCount = this.canScrollRightCount > this.maxScrollCount ? this.maxScrollCount : this.canScrollRightCount;
		var e = this;
		this.$nextBtn.unbind("click"), this.$pevBtn.unbind("click"), 0 == this.canScrollLeftCount ? this.$nextBtn.addClass("disable") : (this.$nextBtn.click(function() {
			e.onClickNext()
		}), this.$nextBtn.removeClass("disable")), 0 == this.canScrollRightCount ? this.$pevBtn.addClass("disable") : (this.$pevBtn.click(function() {
			e.onClickPev()
		}), this.$pevBtn.removeClass("disable"))
	}, o.switchSlide = e.switchSlide = r
}(window.jQuery, window, window.openCourse || {}), function(e, t, n) {
	function i() {
		return this.init.apply(this, arguments)
	}
	function r(e) {
		return new i(e)
	}
	var o = (n.ns("util"), n.ns("ui")),
		a = i.prototype;
	a.init = function(t) {
		t && (this.tabData = t, this.mode = t.mode || "click", this.defaultIndx = t.defaultIndx || 0, this.posTabIndex = -1, this.onTabSelect = t.onTabSelect || null, this.$tabs = "string" == e.type(t.tabs) ? e(t.tabs) : t.tabs, this.$tabcons = "string" == e.type(t.tabcons) ? e(t.tabcons) : t.tabcons, this.$tabcons.hide(), this.build())
	}, a.build = function() {
		var t = this;
		e.each(this.$tabs, function(n, i) {
			"click" == t.mode ? e(i).click(function() {
				t.onSelectTab(n)
			}) : e(i).on("mouseover", function() {
				t.onSelectTab(n)
			})
		}), this.onSelectTab(this.defaultIndx)
	}, a.onSelectTab = function(e) {
		if (e != this.posTabIndex) {
			var t = this.posTabIndex;
			t >= 0 && this.$tabcons.eq(t).hide(), this.posTabIndex = e, this.$tabcons.eq(this.posTabIndex).show(), this.onTabSelect && this.onTabSelect(e, t)
		}
	}, o.tab = r
}(window.jQuery, window, window.openCourse || {}), +
function(e, t, n) {
	function i() {
		var t = e("p", "#j-mainslide-data");
		t.each(function(t, n) {
			var i = e(n).find("span");
			N.push({
				link: i.eq(0).text(),
				bigpic: i.eq(1).text(),
				title: i.eq(3).text(),
				smallpic: i.eq(2).text(),
				bgcolor: i.eq(5).text()
			})
		}), j = N.length
	}
	function r() {
		if (e.each(N, function(t, n) {
			var i = e('<div class="imgItem f-pa j-slideImg"><div class="imgbox g-container f-pr"><a href="' + n.link + '" target="_blank"><div class="pic"></div><div class="txt f-pa f-cf f-f0">' + n.title + '</div></a></div></div>');
			i.css("background", n.bgcolor).find(".pic").css("background-image", "url(" + n.bigpic + ")"), w.append(i);
			var r = e('<div class="j-slideitem item f-pa">									<div class="posborder f-pa"></div>									<div class="slt"></div>							   </div>');
			r.css({
				left: 84 * t + "px",
				top: "0px"
			}).find(".slt").css("background-image", "url(" + n.smallpic + ")"), r.attr("index", t), k.append(r)
		}), g = w.find(".j-slideImg"), v = k.find(".j-slideitem"), !S) {
			var t = v.eq(j - 1);
			k.css({
				left: "50%",
				"margin-left": -(parseInt(t.css("left")) + t.width()) / 2 + "px"
			})
		}
	}
	function o() {
		e.each(v, function(t, n) {
			e(n).on("mouseenter", function() {
				u.call(this)
			}).on("mouseleave", f)
		})
	}
	function a() {
		e.each(N, function(t, n) {
			"" != e.trim(n.bigpic) && C.push(n.bigpic), "" != e.trim(n.smallpic) && C.push(n.smallpic)
		});
		for (var t = 0; t < C.length; t++) l(C[t])
	}
	function s() {
		r(), o(), c(0), d(), x.fadeOut()
	}
	function l(t) {
		e("<img />").bind("load", function() {
			T++, T == C.length && s()
		}).bind("error", function() {
			T++, T == C.length && s()
		}).attr("src", t)
	}
	function c(e) {
		if (I != e) {
			var t = I;
			t >= 0 && (g.eq(t).stop().css({
				"z-index": "3",
				opacity: "1"
			}), v.eq(t).removeClass("itempos").stop().animate({
				top: "0px"
			}, 200)), I = e, v.eq(I).addClass("itempos").stop().animate({
				top: "-6px"
			}, 200), g.eq(I).stop().css({
				"z-index": "2",
				opacity: "1",
				display: "block"
			}), t >= 0 && g.eq(t).stop().fadeTo(400, 0, function() {
				g.eq(t).hide().css("z-index", "1")
			})
		}
	}
	function u() {
		var t = e(this).attr("index");
		y && clearInterval(y), c(Number(t))
	}
	function d() {
		y && clearInterval(y), y = setInterval(function() {
			var e = I + 1;
			e = e > j - 1 ? 0 : e, c(Number(e))
		}, E)
	}
	function f() {
		d()
	}
	function p(e) {
		e.html('<p class="f-c9 empty">暂无排行</p>')
	}
	function h(e) {
		return 10 > e ? "0" + e : e
	}
	function m(e) {
		for (var t = "", i = 0; i < e.length && !(i > 9) && (e[i] && e[i].movie); i++) {
			var r = e[i].movie,
				o = 2 >= i ? "icon icon2" : "icon";
			t += '<li>								<a href="http://open.163.com' + r.pageurl + '" target="_blank" class="item">									<span class="num">' + n.util._formatViewCount(e[i].hits) + '</span>									<i class="' + o + '">' + h(i + 1) + '</i>									<span class="txt f-ib f-thide">' + r.title + "</span>								</a>							</li>"
		}
		return t
	}
	var g, v, y, b = (n.ns("util"), n.ns("ui")),
		x = e("#j-mainslide-loading"),
		w = e("#j-mainslide-imgs"),
		k = e("#j-mainslide-items"),
		C = [],
		T = 0,
		_ = t.SLIDEDATA,
		S = !! _,
		N = [],
		j = 0,
		E = 5e3,
		I = -1;
	return function() {
		i(), a()
	}(), S ? (function() {
		function t(e, t) {
			var n = i.eq(e),
				o = Number(n.data("left"));
			r.stop().animate({
				left: o + "px"
			}, 180, "swing"), t >= 0 && i.eq(t).removeClass("tabpos"), i.eq(e).addClass("tabpos")
		}
		var n = e("#j-mainslide-tabs"),
			i = n.find(".j-tab"),
			r = n.find(".j-tabline"),
			o = n.find(".j-mainslide-tabcon");
		e.each(i, function(t, n) {
			_[t] ? e(n).data("left", _[t].left).css("margin-left", _[t].marginleft + "px") : e(n).hide()
		}), b.tab({
			mode: "move",
			tabs: i,
			tabcons: o,
			onTabSelect: t
		})
	}(), function() {
		function t(e, t) {
			t >= 0 && n.eq(t).removeClass("subtabpos"), n.eq(e).addClass("subtabpos")
		}
		var n = e(".j-subtab"),
			i = e(".j-mainslide-subtabcon");
		b.tab({
			tabs: n,
			tabcons: i,
			onTabSelect: t
		})
	}(), t.returnRank || (t.returnRank = function(t) {
		var n = e(".j-mainslide-subtabcon"),
			i = e(".j-mainslide-monthrank").eq(0);
		t[0].topMonthList ? t[0].topWeekList.length > 0 ? i.html(m(t[0].topMonthList)) : p(n.eq(0)) : p(n.eq(0))
	}), void 0) : (e("#j-mainslide-tabs").remove(), void 0)
}(window.jQuery, window, window.openCourse || {}), +

function(e, t) {
	function n() {
		return this.init.apply(this, arguments)
	}
	function i(e) {
		return new n(e)
	}
	var r = (t.ns("util"), t.ns("ui"));
	n.setting = {
		parent: "pager",
		cpClass: "cPageNum",
		pnClass: "pageNum",
		pre: "上一页",
		preClass: "pre",
		next: "下一页",
		nextClass: "next",
		fn: null
	};
	var o = n.prototype;
	o.init = function(t) {
		t && e.extend(n.setting, t)
	}, o.build = function(e, t) {
		if (1 >= t) return this.p = 1, this.pn = 1, this.pHtml2(1);
		e > t && (e = t);
		var n = "";
		1 >= e ? e = 1 : (n += this.pHtml(e - 1, t, "pre"), n += this.pHtml(1, t, "1")), this.p = e, this.pn = t;
		var i = 2,
			r = 9 > t ? t : 9;
		if (e >= 7) {
			n += "...", i = e - 4;
			var o = e + 4;
			r = o > t ? t : o
		}
		for (var a = i; e > a; a++) n += this.pHtml(a, t);
		n += this.pHtml2(e);
		for (var a = e + 1; r >= a; a++) n += this.pHtml(a, t);
		return t > r && (n += "...", n += this.pHtml(t, t)), t > e && (n += this.pHtml(e + 1, t, "next")), n
	}, o.pHtml = function(e, t, i) {
		var r, o = n.setting.pnClass;
		"pre" == i ? (r = n.setting.pre, o = n.setting.nextClass) : "next" == i ? (r = n.setting.next, o = n.setting.nextClass) : r = e;
		var a = '<a   data-p="' + e + '" data-pn="' + t + '" class="f-icon f-ib ' + o + '">' + r + "</a>";
		return a
	}, o.pHtml2 = function(e) {
		var t = " <span class='f-ib f-icon " + n.setting.cpClass + "'>" + e + "</span> ";
		return t
	}, o.reset = function(t, i) {
		e(n.setting.parent).html(this.build(t, i));
		e(n.setting.parent).find("a").each(function(t, i) {
			e(i).click(function() {
				var t = e(this).data("p"),
					i = e(this).data("pn");
				null != n.setting.fn && n.setting.fn(t, i)
			})
		})
	}, r.pager = i
}(window.jQuery, window.openCourse || {}), +
function(e, t) {
	var n = (e.ns("util"), e.ns("ui"));
	return n.showOpenTip = function(e, n, i) {
		var r = t("#j-feedbackTip").clone(!1);
		i = i ? i + "px" : "163px", r.children().eq(1).text(e), r.toggleClass("wrongTip", 1 == n), r.toggleClass("okTip", 0 == n), t.blockUI.defaults.css = {}, t.blockUI({
			message: r,
			fadeIn: 700,
			fadeOut: 700,
			timeout: 3e3,
			showOverlay: !1,
			centerY: !1,
			css: {
				width: i
			}
		})
	}, e
}(window.openCourse || {}, window.jQuery), function(e, t, n) {
	function i() {
		return this.init.apply(this, arguments)
	}
	function r(e) {
		return new i(e)
	}
	var o = (n.ns("util"), n.ns("ui")),
		a = i.prototype,
		l = '<div class="u-share f-cb j-shareUI">	                <a class="j-btn btn weibo" title="分享到新浪微博" data-v="weibo"></a>                    <a class="j-btn btn qzone" title="分享到qq空间" data-v="qzone"></a>	                <a class="j-btn btn yixin" title="分享到易信" data-v="yixin"></a>	                <a class="j-btn btn renren" title="分享到人人" data-v="renren"></a>	                <a class="j-btn btn douban" title="分享到豆瓣" data-v="douban"></a>	            </div>';
	a.init = function(n) {
		this.__title = n.title || "", this.__topic = n.topic || "", this.__description = n.description || "", this.__pic = n.pic || "", this.__url = n.url || t.location.href, this.__shareID = {}, this.__shareID.sina = {}, this.__shareID.sina.id = "2216871876", this.__shareID.renren = "", this.__shareID.douban = "";
		var i = [];
		i[0] = "height=505,width=615,top=" + (screen.height - 280) / 2, i[1] = "left=" + (screen.width - 550) / 2, i[2] = "toolbar=no, menubar=no, scrollbars=no,", i[2] += "resizable=yes,location=no, status=no", this.__window = i.join(","), this.__parent = n.parent, this.__parent.html(e(l)), this.__body = this.__parent.find(".j-shareUI").eq(0), this.__initEvent(n)
	}, a.__initEvent = function() {
		var t = this;
		this.__body.on("click", ".j-btn", function() {
			var n = e(this).data("v");
			switch (n) {
			case "weibo":
				t.__shareSina();
				break;
			case "yixin":
				t.__shareYixin();
				break;
			case "weixin":
				t.__shareWeixin();
				break;
			case "qzone":
				t.__shareQzone();
				break;
			case "renren":
				t.__shareRenren();
				break;
			case "douban":
				t.__shareDouban()
			}
		})
	}, a.__shareYixin = function() {
		var e = {
			appkey: "0471687ce85576fe8a0d2d838f3d2248",
			type: "webpage",
			title: "网易公开课",
			desc: this.__title,
			userdesc: "",
			pic: this.__pic,
			url: this.__url
		},
			n = [];
		for (var i in e) n.push(i + "=" + encodeURIComponent(e[i] || ""));
		url = "http://open.yixin.im/share?" + n.join("&"), t.open(url, "_blank", this.__window)
	}, a.__shareQzone = function() {
		var e = {
			url: this.__url,
			title: this.__title,
			pics: this.__pic,
			summary: this.__desc
		},
			n = [];
		for (var i in e) n.push(i + "=" + encodeURIComponent(e[i] || ""));
		url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + n.join("&"), t.open(url, "Qzone", this.__window)
	}, a.__shareSina = function() {
		var e = {
			url: this.__url,
			appkey: this.__shareID.sina.id,
			title: this.__title,
			pic: this.__pic,
			ralateUid: this.__shareID.sina.ralateUid,
			language: "zh_cn"
		},
			n = [];
		for (var i in e) n.push(i + "=" + encodeURIComponent(e[i] || ""));
		url = "http://service.weibo.com/share/share.php?" + n.join("&"), t.open(url, "_blank", this.__window)
	}, a.__shareRenren = function() {
		var e = {
			api_key: this.__shareID.renren,
			resourceUrl: "",
			srcUrl: this.__url,
			pic: this.__pic,
			title: this.__topic,
			description: this.__description
		},
			n = location.href.indexOf("#"),
			i = -1 == n ? location.href : location.href.substr(0, n),
			r = "",
			o = function(e) {
				return e = e || {}, e.api_key = e.api_key || "", e.resourceUrl = e.resourceUrl || i, e.title = e.title || "", e.pic = e.pic || "", e.description = e.description || "", i == e.resourceUrl && (e.images = e.images || r), e.charset = e.charset || "", e
			},
			a = "http://widget.renren.com/dialog/share",
			s = o(e),
			l = [];
		for (var c in s) s[c] && l.push(c + "=" + encodeURIComponent(s[c]));
		var u = a + "?" + l.join("&"),
			d = "width=700,height=650,left=0,top=0,resizable=yes,scrollbars=1";
		t.open(u, "renren", d)
	}, a.__shareDouban = function() {
		var e = window.getSelection,
			n = document.getSelection,
			i = document.selection;
		s = e ? e() : n ? n() : i ? i.createRange().text : "";
		var r = {
			url: this.__url,
			title: this.__topic,
			images: this.__pic,
			sel: s
		},
			o = "",
			a = [];
		for (var l in r) a.push(l + "=" + encodeURIComponent(r[l] || ""));
		o = "http://www.douban.com/recommend/?" + a.join("&"), t.open(o, "douban", this.__window)
	}, o.ShareUI = r
}(window.jQuery, window, window.openCourse || {}), +
function(e, t) {
	"use strict";
	function n(t) {
		t.preventDefault();
		var n = e(this),
			r = n.data("mid"),
			a = n.data("plid"),
			l = n.data("name");
		if (i(r, a, l), !s) {
			s = e('<div class="f-pr">					<a class="close f-pa j-close"></a>		      		<div class="con">						<h2>请使用公开课App下载本课时</h2>						<h3>安装公开课App，下载视频，随时随地随心看</h3>						<a href="http://m.163.com/openapp/" target=""><div class="pic"></div></a>						<p class="info">扫描或点击下载<br>现支持iPhone，iPad，Android ，Android Pad</p>		      		</div>		      	</div>');
			var c = s.find(".j-close");
			c.click(o)
		}
		e.blockUI.defaults.css = {}, e.blockUI({
			message: s,
			blockMsgClass: "u-appDownloadTip"
		})
	}
	function i(e, t, n) {
		r() ? a._BItrack4TED({
			name: n,
			mid: e,
			plid: t,
			url: location.href,
			doctype: null,
			durl: null
		}) : a._BItrack({
			name: n,
			mid: e,
			plid: t,
			url: location.href,
			durl: null
		})
	}
	function r() {
		var t = e("title").text().toLowerCase(),
			n = "";
		return e(".nav .bread a").length > 0 && (n = e(".nav .bread a").eq(0).text().toLowerCase()), t.indexOf("ted") >= 0 || n.indexOf("ted") >= 0
	}
	function o() {
		e.unblockUI()
	}
	var a = t.ns("util"),
		s = (t.ns("ui"), null);
	e(document).delegate(".j-movie-download", "click", n)
}(window.jQuery, window.openCourse || {}), +
function(e, t) {
	{
		var n = (t.ns("util"), t.ns("ui"));
		n.loginui = function() {
			var e = t._urs;
			e && e.showIframe()
		}
	}
}(window.jQuery, window.openCourse || {}), function(e, t) {
	function n() {
		return this.init.apply(this, arguments)
	}
	function i(e) {
		return new n(e)
	}
	var r = n.prototype;
	r.init = function(e) {
		this.__id = "FPlayer";
		var t = /(iphone|ipad|ipod|android)/gi;
		t.test(navigator.userAgent) ? this.__initAP(e) : this.__initFp(e)
	}, r.__initAP = function(e) {
		var t = e.w,
			n = e.h,
			i = '<Video id="' + this.__id + '" width="' + t + '" height="' + n + '" controls="controls" autoplay="false" preload="auto">			<source src="' + e.appsrc + '" type="video/mp4">Your browser does not support the video tag.</video>';
		e.parent.append(i)
	}, r.__initFp = function(e) {
		var t = e.src,
			n = e.w,
			i = e.h,
			r = "";
		r = '		  <object type="application/x-shockwave-flash"  classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="' + n + '" height="' + i + '" id="' + this.__id + '" align="middle">		  	<param name="allowScriptAccess" value="always" />		  	<param name="allowFullScreen" value="true" />		  	<param name="movie" value="' + t + '" />		  	<param name="quality" value="high" />		  	<param name="wmode" value="transparent" />', r = r + '		  	<embed src="' + t + '" id="' + this.__id + '" quality="high"  width="' + n + '" height="' + i + '" name="FPlayer" align="middle" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" />		  	</object>', e.parent.append(r)
	}, r.__getFlashPlayer = function() {
		return -1 != navigator.appName.indexOf("Microsoft") ? window.document[this.__id] : document[this.__id]
	};
	var o = t.openCourse || {};
	o.openplayer = i
}(jQuery, window);
