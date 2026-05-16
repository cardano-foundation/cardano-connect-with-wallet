import { k as getDefaultExportFromCjs, r as reactExports, l as Wallet, N as NetworkType, y as yt, O as Ot, R as React2, j as jsxRuntimeExports, n as React, o as requireReactDom } from './index-Dcr_zcAl.js';

var dist$1 = {exports: {}};

var dist = dist$1.exports;

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist$1.exports;
	hasRequiredDist = 1;
	(function (module, exports) {
		var define_process_env_default = {};
		/*! For license information please see index.js.LICENSE.txt */
		!(function(e, t) {
		  "object" == 'object' && "object" == 'object' ? module.exports = t() : "function" == typeof undefined && undefined.amd ? undefined([], t) : "object" == 'object' ? exports.CardanoPeerConnect = t() : e.CardanoPeerConnect = t();
		})(dist, () => (() => {
		  var e = { 726(e2) {
		    var t2;
		    globalThis, t2 = function() {
		      return (() => {
		        var e3 = { "./node_modules/@basementuniverse/commonjs/common.js": (e4) => {
		          Math.floatEquals = (e5, t5, n4 = Number.EPSILON) => Math.abs(e5 - t5) < n4, Math.clamp = (e5, t5 = 0, n4 = 1) => e5 < t5 ? t5 : e5 > n4 ? n4 : e5, Math.frac = (e5) => e5 >= 0 ? e5 - Math.floor(e5) : e5 - Math.ceil(e5), Math.lerp = (e5, t5, n4) => e5 + (t5 - e5) * n4, Math.unlerp = (e5, t5, n4) => (n4 - e5) / (t5 - e5), Math.blerp = (e5, t5, n4, r3, o, i) => Math.lerp(Math.lerp(e5, t5, o), Math.lerp(n4, r3, o), i), Math.remap = (e5, t5, n4, r3, o) => r3 + (e5 - t5) * (o - r3) / (n4 - t5), Math.smoothstep = (e5, t5, n4) => Math.lerp(e5, t5, 3 * Math.pow(n4, 2) - 2 * Math.pow(n4, 3)), Math.radians = (e5) => Math.PI / 180 * e5, Math.degrees = (e5) => 180 / Math.PI * e5, Math.randomBetween = (e5, t5) => Math.random() * (t5 - e5) + e5, Math.randomIntBetween = (e5, t5) => Math.floor(Math.random() * (t5 - e5 + 1)) + e5, Math.cltRandom = (e5 = 0.5, t5 = 0.5, n4 = 2) => {
		            let r3 = 0;
		            for (let e6 = n4; e6--; ) r3 += Math.random();
		            return e5 + (r3 - n4 / 2) / (n4 / 2) * t5;
		          }, Math.cltRandomInt = (e5, t5) => Math.floor(e5 + Math.cltRandom(0.5, 0.5, 2) * (t5 + 1 - e5)), Math.weightedRandom = (e5) => {
		            let t5 = e5.reduce((e6, t6) => e6 + t6, 0), n4 = 0;
		            const r3 = Math.random() * t5;
		            for (; t5 > r3; ) t5 -= e5[n4++];
		            return n4 - 1;
		          }, Math.lerpArray = (e5, t5, n4 = Math.lerp) => {
		            const r3 = t5 * (e5.length - 1), o = Math.clamp(Math.trunc(r3), 0, e5.length - 1);
		            return n4(e5[o] || 0, e5[o + 1] || 0, Math.frac(r3));
		          }, Math.dot = (e5, t5) => e5.reduce((e6, n4, r3) => e6 + n4 * t5[r3], 0), Math.factorial = (e5) => {
		            let t5 = 1;
		            for (let n4 = 2; n4 <= e5; n4++) t5 *= n4;
		            return t5;
		          }, Math.permutation = (e5, t5) => Math.factorial(e5) / Math.factorial(e5 - t5), Math.combination = (e5, t5) => Math.factorial(e5) / (Math.factorial(t5) * Math.factorial(e5 - t5)), Array.times = (e5, t5) => Array(t5).fill(0).map((t6, n4) => e5(n4)), Array.range = (e5) => Array.times((e6) => e6, e5), Array.zip = (e5, t5) => e5.map((e6, n4) => [e6, t5[n4]]), Object.defineProperty(Array.prototype, "at", { value: function(e5) {
		            const t5 = this.length;
		            return this[e5 < 0 ? t5 - Math.abs(e5 + 1) % t5 - 1 : e5 % t5];
		          } }), Object.defineProperty(Array.prototype, "chunk", { value: function(e5) {
		            return Array.times((t5) => this.slice(t5 * e5, t5 * e5 + e5), Math.ceil(this.length / e5));
		          } }), Object.defineProperty(Array.prototype, "shuffle", { value: function() {
		            return this.map((e5) => [Math.random(), e5]).sort((e5, t5) => e5[0] - t5[0]).map((e5) => e5[1]);
		          } });
		          const t4 = (e5, t5) => e5 || t5 ? "object" == typeof e5 ? { x: e5.x || 0, y: e5.y || 0 } : null == t5 ? { x: e5, y: e5 } : { x: e5, y: t5 } : { x: 0, y: 0 };
		          t4.components = (e5) => [e5.x, e5.y], t4.ux = () => t4(1, 0), t4.uy = () => t4(0, 1), t4.add = (e5, t5) => ({ x: e5.x + t5.x, y: e5.y + t5.y }), t4.mul = (e5, t5) => ({ x: e5.x * t5, y: e5.y * t5 }), t4.sub = (e5, t5) => ({ x: e5.x - t5.x, y: e5.y - t5.y }), t4.len = (e5) => Math.sqrt(e5.x * e5.x + e5.y * e5.y), t4.manhattan = (e5) => Math.abs(e5.x) + Math.abs(e5.y), t4.nor = (e5) => {
		            let n4 = t4.len(e5);
		            return n4 ? { x: e5.x / n4, y: e5.y / n4 } : t4();
		          }, t4.dot = (e5, t5) => e5.x * t5.x + e5.y * t5.y, t4.rot = (e5, t5) => {
		            let n4 = Math.sin(t5), r3 = Math.cos(t5);
		            return { x: r3 * e5.x - n4 * e5.y, y: n4 * e5.x + r3 * e5.y };
		          }, t4.eq = (e5, t5) => e5.x === t5.x && e5.y === t5.y, t4.rad = (e5) => Math.atan2(e5.y, e5.x), t4.cpy = (e5) => t4(e5), t4.map = (e5, t5) => ({ x: t5(e5.x, "x"), y: t5(e5.y, "y") }), t4.str = (e5, t5 = ", ") => `${e5.x}${t5}${e5.y}`;
		          const n3 = (e5 = 4, t5 = 4, n4 = []) => ({ m: e5, n: t5, entries: n4.concat(Array(e5 * t5).fill(0)).slice(0, e5 * t5) });
		          n3.identity = (e5) => n3(e5, e5, Array(e5 * e5).fill(0).map((t5, n4) => +(Math.floor(n4 / e5) === n4 % e5))), n3.get = (e5, t5, n4) => e5.entries[n4 - 1 + (t5 - 1) * e5.n], n3.set = (e5, t5, n4, r3) => {
		            e5.entries[n4 - 1 + (t5 - 1) * e5.n] = r3;
		          }, n3.row = (e5, t5) => {
		            const n4 = (t5 - 1) * e5.n;
		            return e5.entries.slice(n4, n4 + e5.n);
		          }, n3.col = (e5, t5) => Array.times((r3) => n3.get(e5, r3 + 1, t5), e5.m), n3.add = (e5, t5) => e5.m === t5.m && e5.n === t5.n && n3.map(e5, (e6, n4) => e6 + t5.entries[n4]), n3.sub = (e5, t5) => e5.m === t5.m && e5.n === t5.n && n3.map(e5, (e6, n4) => e6 - t5.entries[n4]), n3.mul = (e5, t5) => {
		            if (e5.n !== t5.m) return false;
		            const r3 = n3(e5.m, t5.n);
		            for (let o = 1; o <= e5.m; o++) for (let i = 1; i <= t5.n; i++) n3.set(r3, o, i, Math.dot(n3.row(e5, o), n3.col(t5, i)));
		            return r3;
		          }, n3.scale = (e5, t5) => n3.map(e5, (e6) => e6 * t5), n3.trans = (e5) => n3(e5.n, e5.m, Array.times((t5) => n3.col(e5, t5 + 1), e5.n).flat()), n3.minor = (e5, t5, r3) => {
		            if (e5.m !== e5.n) return false;
		            const o = [];
		            for (let i = 1; i <= e5.m; i++) if (i !== t5) for (let t6 = 1; t6 <= e5.n; t6++) t6 !== r3 && o.push(n3.get(e5, i, t6));
		            return n3(e5.m - 1, e5.n - 1, o);
		          }, n3.det = (e5) => {
		            if (e5.m !== e5.n) return false;
		            if (1 === e5.m) return e5.entries[0];
		            if (2 === e5.m) return e5.entries[0] * e5.entries[3] - e5.entries[1] * e5.entries[2];
		            let t5 = 0, r3 = 1;
		            for (let o = 1; o <= e5.n; o++) t5 += r3 * e5.entries[o - 1] * n3.det(n3.minor(e5, 1, o)), r3 *= -1;
		            return t5;
		          }, n3.nor = (e5) => {
		            if (e5.m !== e5.n) return false;
		            const t5 = n3.det(e5);
		            return n3.map(e5, (e6) => e6 * t5);
		          }, n3.adj = (e5) => {
		            const t5 = n3(e5.m, e5.n);
		            for (let r4 = 1; r4 <= e5.m; r4++) for (let o = 1; o <= e5.n; o++) n3.set(t5, r4, o, n3.det(n3.minor(e5, r4, o)));
		            const r3 = n3.map(t5, (e6, t6) => e6 * (t6 % 2 ? -1 : 1));
		            return n3.trans(r3);
		          }, n3.inv = (e5) => {
		            if (e5.m !== e5.n) return false;
		            const t5 = n3.det(e5);
		            return 0 !== t5 && n3.scale(n3.adj(e5), 1 / t5);
		          }, n3.eq = (e5, t5) => e5.m === t5.m && e5.n === t5.n && n3.str(e5) === n3.str(t5), n3.cpy = (e5) => n3(e5.m, e5.n, [...e5.entries]), n3.map = (e5, t5) => n3(e5.m, e5.n, e5.entries.map(t5)), n3.str = (e5, t5 = ", ", n4 = "\n") => e5.entries.chunk(e5.n).map((e6) => e6.join(t5)).join(n4), e4.exports = { vec: t4, mat: n3 };
		        }, "./node_modules/seed-random/index.js": (e4, t4, n3) => {
		          "use strict";
		          var r3 = 256, o = [], i = void 0 === n3.g ? window : n3.g, s = Math.pow(r3, 6), a = Math.pow(2, 52), c = 2 * a, u = 255, l = Math.random;
		          function p(e5) {
		            var t5, n4 = e5.length, o2 = this, i2 = 0, s2 = o2.i = o2.j = 0, a2 = o2.S = [];
		            for (n4 || (e5 = [n4++]); i2 < r3; ) a2[i2] = i2++;
		            for (i2 = 0; i2 < r3; i2++) a2[i2] = a2[s2 = u & s2 + e5[i2 % n4] + (t5 = a2[i2])], a2[s2] = t5;
		            (o2.g = function(e6) {
		              for (var t6, n5 = 0, i3 = o2.i, s3 = o2.j, a3 = o2.S; e6--; ) t6 = a3[i3 = u & i3 + 1], n5 = n5 * r3 + a3[u & (a3[i3] = a3[s3 = u & s3 + t6]) + (a3[s3] = t6)];
		              return o2.i = i3, o2.j = s3, n5;
		            })(r3);
		          }
		          function h(e5, t5) {
		            var n4, r4 = [], o2 = (typeof e5)[0];
		            if (t5 && "o" == o2) for (n4 in e5) try {
		              r4.push(h(e5[n4], t5 - 1));
		            } catch (e6) {
		            }
		            return r4.length ? r4 : "s" == o2 ? e5 : e5 + "\0";
		          }
		          function d(e5, t5) {
		            for (var n4, r4 = e5 + "", o2 = 0; o2 < r4.length; ) t5[u & o2] = u & (n4 ^= 19 * t5[u & o2]) + r4.charCodeAt(o2++);
		            return f(t5);
		          }
		          function f(e5) {
		            return String.fromCharCode.apply(0, e5);
		          }
		          e4.exports = function(t5, n4) {
		            if (n4 && true === n4.global) return n4.global = false, Math.random = e4.exports(t5, n4), n4.global = true, Math.random;
		            var u2 = [], l2 = (d(h(n4 && n4.entropy ? [t5, f(o)] : 0 in arguments ? t5 : (function(e5) {
		              try {
		                return i.crypto.getRandomValues(e5 = new Uint8Array(r3)), f(e5);
		              } catch (e6) {
		                return [+/* @__PURE__ */ new Date(), i, i.navigator && i.navigator.plugins, i.screen, f(o)];
		              }
		            })(), 3), u2), new p(u2));
		            return d(f(l2.S), o), function() {
		              for (var e5 = l2.g(6), t6 = s, n5 = 0; e5 < a; ) e5 = (e5 + n5) * r3, t6 *= r3, n5 = l2.g(1);
		              for (; e5 >= c; ) e5 /= 2, t6 /= 2, n5 >>>= 1;
		              return (e5 + n5) / t6;
		            };
		          }, e4.exports.resetGlobal = function() {
		            Math.random = l;
		          }, d(Math.random(), o);
		        } }, t3 = {};
		        function n2(r3) {
		          var o = t3[r3];
		          if (void 0 !== o) return o.exports;
		          var i = t3[r3] = { exports: {} };
		          return e3[r3](i, i.exports, n2), i.exports;
		        }
		        n2.g = (function() {
		          if ("object" == typeof globalThis) return globalThis;
		          try {
		            return this || new Function("return this")();
		          } catch (e4) {
		            if ("object" == typeof window) return window;
		          }
		        })();
		        var r2 = {};
		        return (() => {
		          "use strict";
		          var e4 = r2;
		          Object.defineProperty(e4, "__esModule", { value: true }), e4.identicon = void 0;
		          const t4 = n2("./node_modules/seed-random/index.js"), o = n2("./node_modules/@basementuniverse/commonjs/common.js"), i = { size: 100, baseSeed: "", font: "Helvetica", fontStyle: "bold", fontSize: 0.4, backgroundColours: ["#16a085", "#1abc9c", "#2ecc71", "#3498db", "#1970b9", "#9b59b6", "#e67e22", "#e74c3c", "#e0395b"], initialsColours: ["#ffffff"], initialsOffset: o.vec(), initialsAlpha: 1, initialsCompositeOperation: "source-over", stripeColours: ["#f1c40f"], stripeAlpha: 0.15, stripeCompositeOperation: "lighter", stripes: [3, 8], stripeWidth: [0.2, 0.7], stripeDeviation: [-0.5, 0.5], curveAmount: [0.2, 0.4], curveOffset: [0, 0.5], startWidthSign: ["positive", "negative"], endWidthSign: ["positive", "negative"] }, s = 2 * Math.PI, a = { positive: 1, negative: -1 };
		          function c(e5, t5, n3) {
		            const r3 = a[t5.startWidthSign.shuffle()[0]], i2 = n3 + Math.randomBetween(t5.stripeWidth[0], t5.stripeWidth[1]) * r3, s2 = n3 + Math.PI + Math.randomBetween(t5.curveOffset[0], t5.curveOffset[1]), c2 = a[t5.endWidthSign.shuffle()[0]], l = s2 + Math.randomBetween(t5.stripeWidth[0], t5.stripeWidth[1]) * c2, p = n3 + Math.PI / 2, h = o.vec.mul(o.vec(t5.size), 0.5), d = 2 * Math.sqrt(h.x * h.x + h.y * h.y), f = u(h, d, n3), g = u(h, d, i2), y = u(h, d, s2), m = u(h, d, l), v = u(h, d * Math.randomBetween(t5.curveAmount[0], t5.curveAmount[1]), p);
		            e5.beginPath(), e5.moveTo(f.x, f.y), e5.quadraticCurveTo(v.x, v.y, y.x, y.y), e5.lineTo(m.x, m.y), e5.quadraticCurveTo(v.x, v.y, g.x, g.y), e5.closePath(), e5.fill();
		          }
		          function u(e5, t5, n3) {
		            return o.vec.add(e5, o.vec(t5 * Math.sin(n3), t5 * Math.cos(n3)));
		          }
		          e4.identicon = function(e5, n3 = {}) {
		            const r3 = Object.assign({}, i, n3);
		            e5 && "string" == typeof e5 || (e5 = "Anonymous");
		            const a2 = e5.split(/[\s\-']/).map((e6) => e6[0].toUpperCase()).join(""), u2 = `${n3.baseSeed}${e5}`;
		            t4(u2, { global: true });
		            const l = document.createElement("canvas"), p = l.getContext("2d");
		            return l.width = r3.size, l.height = r3.size, (function(e6, t5, n4) {
		              e6.save();
		              const r4 = Math.randomIntBetween(0, Math.max(t5.backgroundColours.length, t5.stripeColours.length, t5.initialsColours.length) - 1);
		              e6.fillStyle = t5.backgroundColours[Math.clamp(r4, 0, t5.backgroundColours.length - 1)], e6.fillRect(0, 0, t5.size, t5.size), e6.save(), e6.fillStyle = t5.stripeColours[Math.clamp(r4, 0, t5.stripeColours.length - 1)], e6.globalAlpha = t5.stripeAlpha, e6.globalCompositeOperation = t5.stripeCompositeOperation;
		              const i2 = Math.randomIntBetween(t5.stripes[0], t5.stripes[1]);
		              let a3 = Math.random() * s;
		              for (let n5 = 0; n5 < i2; n5++) c(e6, t5, a3), a3 += Math.randomBetween(t5.stripeDeviation[0], t5.stripeDeviation[1]);
		              e6.restore(), (function(e7, t6, n5, r5) {
		                e7.save(), e7.font = `${t6.fontStyle} ${Math.floor(t6.size * t6.fontSize)}px ${t6.font}`, e7.fillStyle = t6.initialsColours[Math.clamp(r5, 0, t6.initialsColours.length - 1)], e7.globalAlpha = t6.initialsAlpha, e7.globalCompositeOperation = t6.initialsCompositeOperation, e7.textAlign = "center", e7.textBaseline = "middle";
		                const i3 = o.vec.mul(o.vec(t6.size), 0.5);
		                e7.fillText(n5, i3.x + t6.initialsOffset.x, i3.y + t6.initialsOffset.y), e7.restore();
		              })(e6, t5, n4, r4), e6.restore();
		            })(p, r3, a2), t4.resetGlobal(), l;
		          };
		        })(), r2;
		      })();
		    }, e2.exports = t2();
		  }, 684(e2, t2, n2) {
		    function r2(e3) {
		      this.mode = i.MODE_8BIT_BYTE, this.data = e3, this.parsedData = [];
		      for (var t3 = 0, n3 = this.data.length; t3 < n3; t3++) {
		        var r3 = [], o2 = this.data.charCodeAt(t3);
		        o2 > 65536 ? (r3[0] = 240 | (1835008 & o2) >>> 18, r3[1] = 128 | (258048 & o2) >>> 12, r3[2] = 128 | (4032 & o2) >>> 6, r3[3] = 128 | 63 & o2) : o2 > 2048 ? (r3[0] = 224 | (61440 & o2) >>> 12, r3[1] = 128 | (4032 & o2) >>> 6, r3[2] = 128 | 63 & o2) : o2 > 128 ? (r3[0] = 192 | (1984 & o2) >>> 6, r3[1] = 128 | 63 & o2) : r3[0] = o2, this.parsedData.push(r3);
		      }
		      this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
		    }
		    function o(e3, t3) {
		      this.typeNumber = e3, this.errorCorrectLevel = t3, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
		    }
		    r2.prototype = { getLength: function(e3) {
		      return this.parsedData.length;
		    }, write: function(e3) {
		      for (var t3 = 0, n3 = this.parsedData.length; t3 < n3; t3++) e3.put(this.parsedData[t3], 8);
		    } }, o.prototype = { addData: function(e3) {
		      var t3 = new r2(e3);
		      this.dataList.push(t3), this.dataCache = null;
		    }, isDark: function(e3, t3) {
		      if (e3 < 0 || this.moduleCount <= e3 || t3 < 0 || this.moduleCount <= t3) throw new Error(e3 + "," + t3);
		      return this.modules[e3][t3];
		    }, getModuleCount: function() {
		      return this.moduleCount;
		    }, make: function() {
		      this.makeImpl(false, this.getBestMaskPattern());
		    }, makeImpl: function(e3, t3) {
		      this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
		      for (var n3 = 0; n3 < this.moduleCount; n3++) {
		        this.modules[n3] = new Array(this.moduleCount);
		        for (var r3 = 0; r3 < this.moduleCount; r3++) this.modules[n3][r3] = null;
		      }
		      this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e3, t3), this.typeNumber >= 7 && this.setupTypeNumber(e3), null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t3);
		    }, setupPositionProbePattern: function(e3, t3) {
		      for (var n3 = -1; n3 <= 7; n3++) if (!(e3 + n3 <= -1 || this.moduleCount <= e3 + n3)) for (var r3 = -1; r3 <= 7; r3++) t3 + r3 <= -1 || this.moduleCount <= t3 + r3 || (this.modules[e3 + n3][t3 + r3] = 0 <= n3 && n3 <= 6 && (0 == r3 || 6 == r3) || 0 <= r3 && r3 <= 6 && (0 == n3 || 6 == n3) || 2 <= n3 && n3 <= 4 && 2 <= r3 && r3 <= 4);
		    }, getBestMaskPattern: function() {
		      for (var e3 = 0, t3 = 0, n3 = 0; n3 < 8; n3++) {
		        this.makeImpl(true, n3);
		        var r3 = s.getLostPoint(this);
		        (0 == n3 || e3 > r3) && (e3 = r3, t3 = n3);
		      }
		      return t3;
		    }, createMovieClip: function(e3, t3, n3) {
		      var r3 = e3.createEmptyMovieClip(t3, n3);
		      this.make();
		      for (var o2 = 0; o2 < this.modules.length; o2++) for (var i2 = 1 * o2, s2 = 0; s2 < this.modules[o2].length; s2++) {
		        var a2 = 1 * s2;
		        this.modules[o2][s2] && (r3.beginFill(0, 100), r3.moveTo(a2, i2), r3.lineTo(a2 + 1, i2), r3.lineTo(a2 + 1, i2 + 1), r3.lineTo(a2, i2 + 1), r3.endFill());
		      }
		      return r3;
		    }, setupTimingPattern: function() {
		      for (var e3 = 8; e3 < this.moduleCount - 8; e3++) null == this.modules[e3][6] && (this.modules[e3][6] = e3 % 2 == 0);
		      for (var t3 = 8; t3 < this.moduleCount - 8; t3++) null == this.modules[6][t3] && (this.modules[6][t3] = t3 % 2 == 0);
		    }, setupPositionAdjustPattern: function() {
		      for (var e3 = s.getPatternPosition(this.typeNumber), t3 = 0; t3 < e3.length; t3++) for (var n3 = 0; n3 < e3.length; n3++) {
		        var r3 = e3[t3], o2 = e3[n3];
		        if (null == this.modules[r3][o2]) for (var i2 = -2; i2 <= 2; i2++) for (var a2 = -2; a2 <= 2; a2++) this.modules[r3 + i2][o2 + a2] = -2 == i2 || 2 == i2 || -2 == a2 || 2 == a2 || 0 == i2 && 0 == a2;
		      }
		    }, setupTypeNumber: function(e3) {
		      for (var t3 = s.getBCHTypeNumber(this.typeNumber), n3 = 0; n3 < 18; n3++) {
		        var r3 = !e3 && 1 == (t3 >> n3 & 1);
		        this.modules[Math.floor(n3 / 3)][n3 % 3 + this.moduleCount - 8 - 3] = r3;
		      }
		      for (n3 = 0; n3 < 18; n3++) r3 = !e3 && 1 == (t3 >> n3 & 1), this.modules[n3 % 3 + this.moduleCount - 8 - 3][Math.floor(n3 / 3)] = r3;
		    }, setupTypeInfo: function(e3, t3) {
		      for (var n3 = this.errorCorrectLevel << 3 | t3, r3 = s.getBCHTypeInfo(n3), o2 = 0; o2 < 15; o2++) {
		        var i2 = !e3 && 1 == (r3 >> o2 & 1);
		        o2 < 6 ? this.modules[o2][8] = i2 : o2 < 8 ? this.modules[o2 + 1][8] = i2 : this.modules[this.moduleCount - 15 + o2][8] = i2;
		      }
		      for (o2 = 0; o2 < 15; o2++) i2 = !e3 && 1 == (r3 >> o2 & 1), o2 < 8 ? this.modules[8][this.moduleCount - o2 - 1] = i2 : o2 < 9 ? this.modules[8][15 - o2 - 1 + 1] = i2 : this.modules[8][15 - o2 - 1] = i2;
		      this.modules[this.moduleCount - 8][8] = !e3;
		    }, mapData: function(e3, t3) {
		      for (var n3 = -1, r3 = this.moduleCount - 1, o2 = 7, i2 = 0, a2 = this.moduleCount - 1; a2 > 0; a2 -= 2) for (6 == a2 && a2--; ; ) {
		        for (var c2 = 0; c2 < 2; c2++) if (null == this.modules[r3][a2 - c2]) {
		          var u2 = false;
		          i2 < e3.length && (u2 = 1 == (e3[i2] >>> o2 & 1)), s.getMask(t3, r3, a2 - c2) && (u2 = !u2), this.modules[r3][a2 - c2] = u2, -1 == --o2 && (i2++, o2 = 7);
		        }
		        if ((r3 += n3) < 0 || this.moduleCount <= r3) {
		          r3 -= n3, n3 = -n3;
		          break;
		        }
		      }
		    } }, o.PAD0 = 236, o.PAD1 = 17, o.createData = function(e3, t3, n3) {
		      for (var r3 = l.getRSBlocks(e3, t3), i2 = new p(), a2 = 0; a2 < n3.length; a2++) {
		        var c2 = n3[a2];
		        i2.put(c2.mode, 4), i2.put(c2.getLength(), s.getLengthInBits(c2.mode, e3)), c2.write(i2);
		      }
		      var u2 = 0;
		      for (a2 = 0; a2 < r3.length; a2++) u2 += r3[a2].dataCount;
		      if (i2.getLengthInBits() > 8 * u2) throw new Error("code length overflow. (" + i2.getLengthInBits() + ">" + 8 * u2 + ")");
		      for (i2.getLengthInBits() + 4 <= 8 * u2 && i2.put(0, 4); i2.getLengthInBits() % 8 != 0; ) i2.putBit(false);
		      for (; !(i2.getLengthInBits() >= 8 * u2 || (i2.put(o.PAD0, 8), i2.getLengthInBits() >= 8 * u2)); ) i2.put(o.PAD1, 8);
		      return o.createBytes(i2, r3);
		    }, o.createBytes = function(e3, t3) {
		      for (var n3 = 0, r3 = 0, o2 = 0, i2 = new Array(t3.length), a2 = new Array(t3.length), c2 = 0; c2 < t3.length; c2++) {
		        var l2 = t3[c2].dataCount, p2 = t3[c2].totalCount - l2;
		        r3 = Math.max(r3, l2), o2 = Math.max(o2, p2), i2[c2] = new Array(l2);
		        for (var h2 = 0; h2 < i2[c2].length; h2++) i2[c2][h2] = 255 & e3.buffer[h2 + n3];
		        n3 += l2;
		        var d2 = s.getErrorCorrectPolynomial(p2), f = new u(i2[c2], d2.getLength() - 1).mod(d2);
		        for (a2[c2] = new Array(d2.getLength() - 1), h2 = 0; h2 < a2[c2].length; h2++) {
		          var g = h2 + f.getLength() - a2[c2].length;
		          a2[c2][h2] = g >= 0 ? f.get(g) : 0;
		        }
		      }
		      var y = 0;
		      for (h2 = 0; h2 < t3.length; h2++) y += t3[h2].totalCount;
		      var m = new Array(y), v = 0;
		      for (h2 = 0; h2 < r3; h2++) for (c2 = 0; c2 < t3.length; c2++) h2 < i2[c2].length && (m[v++] = i2[c2][h2]);
		      for (h2 = 0; h2 < o2; h2++) for (c2 = 0; c2 < t3.length; c2++) h2 < a2[c2].length && (m[v++] = a2[c2][h2]);
		      return m;
		    };
		    for (var i = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, s = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(e3) {
		      for (var t3 = e3 << 10; s.getBCHDigit(t3) - s.getBCHDigit(s.G15) >= 0; ) t3 ^= s.G15 << s.getBCHDigit(t3) - s.getBCHDigit(s.G15);
		      return (e3 << 10 | t3) ^ s.G15_MASK;
		    }, getBCHTypeNumber: function(e3) {
		      for (var t3 = e3 << 12; s.getBCHDigit(t3) - s.getBCHDigit(s.G18) >= 0; ) t3 ^= s.G18 << s.getBCHDigit(t3) - s.getBCHDigit(s.G18);
		      return e3 << 12 | t3;
		    }, getBCHDigit: function(e3) {
		      for (var t3 = 0; 0 != e3; ) t3++, e3 >>>= 1;
		      return t3;
		    }, getPatternPosition: function(e3) {
		      return s.PATTERN_POSITION_TABLE[e3 - 1];
		    }, getMask: function(e3, t3, n3) {
		      switch (e3) {
		        case 0:
		          return (t3 + n3) % 2 == 0;
		        case 1:
		          return t3 % 2 == 0;
		        case 2:
		          return n3 % 3 == 0;
		        case 3:
		          return (t3 + n3) % 3 == 0;
		        case 4:
		          return (Math.floor(t3 / 2) + Math.floor(n3 / 3)) % 2 == 0;
		        case 5:
		          return t3 * n3 % 2 + t3 * n3 % 3 == 0;
		        case 6:
		          return (t3 * n3 % 2 + t3 * n3 % 3) % 2 == 0;
		        case 7:
		          return (t3 * n3 % 3 + (t3 + n3) % 2) % 2 == 0;
		        default:
		          throw new Error("bad maskPattern:" + e3);
		      }
		    }, getErrorCorrectPolynomial: function(e3) {
		      for (var t3 = new u([1], 0), n3 = 0; n3 < e3; n3++) t3 = t3.multiply(new u([1, a.gexp(n3)], 0));
		      return t3;
		    }, getLengthInBits: function(e3, t3) {
		      if (1 <= t3 && t3 < 10) switch (e3) {
		        case i.MODE_NUMBER:
		          return 10;
		        case i.MODE_ALPHA_NUM:
		          return 9;
		        case i.MODE_8BIT_BYTE:
		        case i.MODE_KANJI:
		          return 8;
		        default:
		          throw new Error("mode:" + e3);
		      }
		      else if (t3 < 27) switch (e3) {
		        case i.MODE_NUMBER:
		          return 12;
		        case i.MODE_ALPHA_NUM:
		          return 11;
		        case i.MODE_8BIT_BYTE:
		          return 16;
		        case i.MODE_KANJI:
		          return 10;
		        default:
		          throw new Error("mode:" + e3);
		      }
		      else {
		        if (!(t3 < 41)) throw new Error("type:" + t3);
		        switch (e3) {
		          case i.MODE_NUMBER:
		            return 14;
		          case i.MODE_ALPHA_NUM:
		            return 13;
		          case i.MODE_8BIT_BYTE:
		            return 16;
		          case i.MODE_KANJI:
		            return 12;
		          default:
		            throw new Error("mode:" + e3);
		        }
		      }
		    }, getLostPoint: function(e3) {
		      for (var t3 = e3.getModuleCount(), n3 = 0, r3 = 0; r3 < t3; r3++) for (var o2 = 0; o2 < t3; o2++) {
		        for (var i2 = 0, s2 = e3.isDark(r3, o2), a2 = -1; a2 <= 1; a2++) if (!(r3 + a2 < 0 || t3 <= r3 + a2)) for (var c2 = -1; c2 <= 1; c2++) o2 + c2 < 0 || t3 <= o2 + c2 || 0 == a2 && 0 == c2 || s2 == e3.isDark(r3 + a2, o2 + c2) && i2++;
		        i2 > 5 && (n3 += 3 + i2 - 5);
		      }
		      for (r3 = 0; r3 < t3 - 1; r3++) for (o2 = 0; o2 < t3 - 1; o2++) {
		        var u2 = 0;
		        e3.isDark(r3, o2) && u2++, e3.isDark(r3 + 1, o2) && u2++, e3.isDark(r3, o2 + 1) && u2++, e3.isDark(r3 + 1, o2 + 1) && u2++, 0 != u2 && 4 != u2 || (n3 += 3);
		      }
		      for (r3 = 0; r3 < t3; r3++) for (o2 = 0; o2 < t3 - 6; o2++) e3.isDark(r3, o2) && !e3.isDark(r3, o2 + 1) && e3.isDark(r3, o2 + 2) && e3.isDark(r3, o2 + 3) && e3.isDark(r3, o2 + 4) && !e3.isDark(r3, o2 + 5) && e3.isDark(r3, o2 + 6) && (n3 += 40);
		      for (o2 = 0; o2 < t3; o2++) for (r3 = 0; r3 < t3 - 6; r3++) e3.isDark(r3, o2) && !e3.isDark(r3 + 1, o2) && e3.isDark(r3 + 2, o2) && e3.isDark(r3 + 3, o2) && e3.isDark(r3 + 4, o2) && !e3.isDark(r3 + 5, o2) && e3.isDark(r3 + 6, o2) && (n3 += 40);
		      var l2 = 0;
		      for (o2 = 0; o2 < t3; o2++) for (r3 = 0; r3 < t3; r3++) e3.isDark(r3, o2) && l2++;
		      return n3 + Math.abs(100 * l2 / t3 / t3 - 50) / 5 * 10;
		    } }, a = { glog: function(e3) {
		      if (e3 < 1) throw new Error("glog(" + e3 + ")");
		      return a.LOG_TABLE[e3];
		    }, gexp: function(e3) {
		      for (; e3 < 0; ) e3 += 255;
		      for (; e3 >= 256; ) e3 -= 255;
		      return a.EXP_TABLE[e3];
		    }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, c = 0; c < 8; c++) a.EXP_TABLE[c] = 1 << c;
		    for (c = 8; c < 256; c++) a.EXP_TABLE[c] = a.EXP_TABLE[c - 4] ^ a.EXP_TABLE[c - 5] ^ a.EXP_TABLE[c - 6] ^ a.EXP_TABLE[c - 8];
		    for (c = 0; c < 255; c++) a.LOG_TABLE[a.EXP_TABLE[c]] = c;
		    function u(e3, t3) {
		      if (null == e3.length) throw new Error(e3.length + "/" + t3);
		      for (var n3 = 0; n3 < e3.length && 0 == e3[n3]; ) n3++;
		      this.num = new Array(e3.length - n3 + t3);
		      for (var r3 = 0; r3 < e3.length - n3; r3++) this.num[r3] = e3[r3 + n3];
		    }
		    function l(e3, t3) {
		      this.totalCount = e3, this.dataCount = t3;
		    }
		    function p() {
		      this.buffer = [], this.length = 0;
		    }
		    u.prototype = { get: function(e3) {
		      return this.num[e3];
		    }, getLength: function() {
		      return this.num.length;
		    }, multiply: function(e3) {
		      for (var t3 = new Array(this.getLength() + e3.getLength() - 1), n3 = 0; n3 < this.getLength(); n3++) for (var r3 = 0; r3 < e3.getLength(); r3++) t3[n3 + r3] ^= a.gexp(a.glog(this.get(n3)) + a.glog(e3.get(r3)));
		      return new u(t3, 0);
		    }, mod: function(e3) {
		      if (this.getLength() - e3.getLength() < 0) return this;
		      for (var t3 = a.glog(this.get(0)) - a.glog(e3.get(0)), n3 = new Array(this.getLength()), r3 = 0; r3 < this.getLength(); r3++) n3[r3] = this.get(r3);
		      for (r3 = 0; r3 < e3.getLength(); r3++) n3[r3] ^= a.gexp(a.glog(e3.get(r3)) + t3);
		      return new u(n3, 0).mod(e3);
		    } }, l.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], l.getRSBlocks = function(e3, t3) {
		      var n3 = l.getRsBlockTable(e3, t3);
		      if (null == n3) throw new Error("bad rs block @ typeNumber:" + e3 + "/errorCorrectLevel:" + t3);
		      for (var r3 = n3.length / 3, o2 = [], i2 = 0; i2 < r3; i2++) for (var s2 = n3[3 * i2 + 0], a2 = n3[3 * i2 + 1], c2 = n3[3 * i2 + 2], u2 = 0; u2 < s2; u2++) o2.push(new l(a2, c2));
		      return o2;
		    }, l.getRsBlockTable = function(e3, t3) {
		      switch (t3) {
		        case 1:
		          return l.RS_BLOCK_TABLE[4 * (e3 - 1) + 0];
		        case 0:
		          return l.RS_BLOCK_TABLE[4 * (e3 - 1) + 1];
		        case 3:
		          return l.RS_BLOCK_TABLE[4 * (e3 - 1) + 2];
		        case 2:
		          return l.RS_BLOCK_TABLE[4 * (e3 - 1) + 3];
		        default:
		          return;
		      }
		    }, p.prototype = { get: function(e3) {
		      var t3 = Math.floor(e3 / 8);
		      return 1 == (this.buffer[t3] >>> 7 - e3 % 8 & 1);
		    }, put: function(e3, t3) {
		      for (var n3 = 0; n3 < t3; n3++) this.putBit(1 == (e3 >>> t3 - n3 - 1 & 1));
		    }, getLengthInBits: function() {
		      return this.length;
		    }, putBit: function(e3) {
		      var t3 = Math.floor(this.length / 8);
		      this.buffer.length <= t3 && this.buffer.push(0), e3 && (this.buffer[t3] |= 128 >>> this.length % 8), this.length++;
		    } };
		    var h = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
		    function d(e3) {
		      if (this.options = { padding: 4, width: 256, height: 256, typeNumber: 4, color: "#000000", background: "#ffffff", ecl: "M" }, "string" == typeof e3 && (e3 = { content: e3 }), e3) for (var t3 in e3) this.options[t3] = e3[t3];
		      if ("string" != typeof this.options.content) throw new Error("Expected 'content' as string!");
		      if (0 === this.options.content.length) throw new Error("Expected 'content' to be non-empty!");
		      if (!(this.options.padding >= 0)) throw new Error("Expected 'padding' value to be non-negative!");
		      if (!(this.options.width > 0 && this.options.height > 0)) throw new Error("Expected 'width' or 'height' value to be higher than zero!");
		      var n3 = this.options.content, r3 = (function(e4, t4) {
		        for (var n4 = (function(e5) {
		          var t5 = encodeURI(e5).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
		          return t5.length + (t5.length != e5 ? 3 : 0);
		        })(e4), r4 = 1, o2 = 0, i3 = 0, s2 = h.length; i3 <= s2; i3++) {
		          var a2 = h[i3];
		          if (!a2) throw new Error("Content too long: expected " + o2 + " but got " + n4);
		          switch (t4) {
		            case "L":
		              o2 = a2[0];
		              break;
		            case "M":
		              o2 = a2[1];
		              break;
		            case "Q":
		              o2 = a2[2];
		              break;
		            case "H":
		              o2 = a2[3];
		              break;
		            default:
		              throw new Error("Unknwon error correction level: " + t4);
		          }
		          if (n4 <= o2) break;
		          r4++;
		        }
		        if (r4 > h.length) throw new Error("Content too long");
		        return r4;
		      })(n3, this.options.ecl), i2 = (function(e4) {
		        switch (e4) {
		          case "L":
		            return 1;
		          case "M":
		            return 0;
		          case "Q":
		            return 3;
		          case "H":
		            return 2;
		          default:
		            throw new Error("Unknwon error correction level: " + e4);
		        }
		      })(this.options.ecl);
		      this.qrcode = new o(r3, i2), this.qrcode.addData(n3), this.qrcode.make();
		    }
		    d.prototype.svg = function(e3) {
		      var t3 = this.options || {}, n3 = this.qrcode.modules;
		      void 0 === e3 && (e3 = { container: t3.container || "svg" });
		      for (var r3 = void 0 === t3.pretty || !!t3.pretty, o2 = r3 ? "  " : "", i2 = r3 ? "\r\n" : "", s2 = t3.width, a2 = t3.height, c2 = n3.length, u2 = s2 / (c2 + 2 * t3.padding), l2 = a2 / (c2 + 2 * t3.padding), p2 = void 0 !== t3.join && !!t3.join, h2 = void 0 !== t3.swap && !!t3.swap, d2 = void 0 === t3.xmlDeclaration || !!t3.xmlDeclaration, f = void 0 !== t3.predefined && !!t3.predefined, g = f ? o2 + '<defs><path id="qrmodule" d="M0 0 h' + l2 + " v" + u2 + ' H0 z" style="fill:' + t3.color + ';shape-rendering:crispEdges;" /></defs>' + i2 : "", y = o2 + '<rect x="0" y="0" width="' + s2 + '" height="' + a2 + '" style="fill:' + t3.background + ';shape-rendering:crispEdges;"/>' + i2, m = "", v = "", b = 0; b < c2; b++) for (var w = 0; w < c2; w++) if (n3[w][b]) {
		        var C = w * u2 + t3.padding * u2, _ = b * l2 + t3.padding * l2;
		        if (h2) {
		          var S = C;
		          C = _, _ = S;
		        }
		        if (p2) {
		          var T = u2 + C, P = l2 + _;
		          C = Number.isInteger(C) ? Number(C) : C.toFixed(2), _ = Number.isInteger(_) ? Number(_) : _.toFixed(2), T = Number.isInteger(T) ? Number(T) : T.toFixed(2), v += "M" + C + "," + _ + " V" + (P = Number.isInteger(P) ? Number(P) : P.toFixed(2)) + " H" + T + " V" + _ + " H" + C + " Z ";
		        } else m += f ? o2 + '<use x="' + C.toString() + '" y="' + _.toString() + '" href="#qrmodule" />' + i2 : o2 + '<rect x="' + C.toString() + '" y="' + _.toString() + '" width="' + u2 + '" height="' + l2 + '" style="fill:' + t3.color + ';shape-rendering:crispEdges;"/>' + i2;
		      }
		      p2 && (m = o2 + '<path x="0" y="0" style="fill:' + t3.color + ';shape-rendering:crispEdges;" d="' + v + '" />');
		      var k = "";
		      switch (e3.container) {
		        case "svg":
		          d2 && (k += '<?xml version="1.0" standalone="yes"?>' + i2), k += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + s2 + '" height="' + a2 + '">' + i2, k += g + y + m, k += "</svg>";
		          break;
		        case "svg-viewbox":
		          d2 && (k += '<?xml version="1.0" standalone="yes"?>' + i2), k += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + s2 + " " + a2 + '">' + i2, k += g + y + m, k += "</svg>";
		          break;
		        case "g":
		          k += '<g width="' + s2 + '" height="' + a2 + '">' + i2, k += g + y + m, k += "</g>";
		          break;
		        default:
		          k += (g + y + m).replace(/^\s+/, "");
		      }
		      return k;
		    }, d.prototype.save = function(e3, t3) {
		      var r3 = this.svg();
		      "function" != typeof t3 && (t3 = function(e4, t4) {
		      });
		      try {
		        n2(531).writeFile(e3, r3, t3);
		      } catch (e4) {
		        t3(e4);
		      }
		    }, e2.exports = d;
		  }, 963(e2) {
		    "use strict";
		    const t2 = { generateIdentifier: function() {
		      return Math.random().toString(36).substring(2, 12);
		    } };
		    t2.localCName = t2.generateIdentifier(), t2.splitLines = function(e3) {
		      return e3.trim().split("\n").map((e4) => e4.trim());
		    }, t2.splitSections = function(e3) {
		      return e3.split("\nm=").map((e4, t3) => (t3 > 0 ? "m=" + e4 : e4).trim() + "\r\n");
		    }, t2.getDescription = function(e3) {
		      const n2 = t2.splitSections(e3);
		      return n2 && n2[0];
		    }, t2.getMediaSections = function(e3) {
		      const n2 = t2.splitSections(e3);
		      return n2.shift(), n2;
		    }, t2.matchPrefix = function(e3, n2) {
		      return t2.splitLines(e3).filter((e4) => 0 === e4.indexOf(n2));
		    }, t2.parseCandidate = function(e3) {
		      let t3;
		      t3 = 0 === e3.indexOf("a=candidate:") ? e3.substring(12).split(" ") : e3.substring(10).split(" ");
		      const n2 = { foundation: t3[0], component: { 1: "rtp", 2: "rtcp" }[t3[1]] || t3[1], protocol: t3[2].toLowerCase(), priority: parseInt(t3[3], 10), ip: t3[4], address: t3[4], port: parseInt(t3[5], 10), type: t3[7] };
		      for (let e4 = 8; e4 < t3.length; e4 += 2) switch (t3[e4]) {
		        case "raddr":
		          n2.relatedAddress = t3[e4 + 1];
		          break;
		        case "rport":
		          n2.relatedPort = parseInt(t3[e4 + 1], 10);
		          break;
		        case "tcptype":
		          n2.tcpType = t3[e4 + 1];
		          break;
		        case "ufrag":
		          n2.ufrag = t3[e4 + 1], n2.usernameFragment = t3[e4 + 1];
		          break;
		        default:
		          void 0 === n2[t3[e4]] && (n2[t3[e4]] = t3[e4 + 1]);
		      }
		      return n2;
		    }, t2.writeCandidate = function(e3) {
		      const t3 = [];
		      t3.push(e3.foundation);
		      const n2 = e3.component;
		      "rtp" === n2 ? t3.push(1) : "rtcp" === n2 ? t3.push(2) : t3.push(n2), t3.push(e3.protocol.toUpperCase()), t3.push(e3.priority), t3.push(e3.address || e3.ip), t3.push(e3.port);
		      const r2 = e3.type;
		      return t3.push("typ"), t3.push(r2), "host" !== r2 && e3.relatedAddress && void 0 !== e3.relatedPort && (t3.push("raddr"), t3.push(e3.relatedAddress), t3.push("rport"), t3.push(e3.relatedPort)), e3.tcpType && "tcp" === e3.protocol.toLowerCase() && (t3.push("tcptype"), t3.push(e3.tcpType)), (e3.usernameFragment || e3.ufrag) && (t3.push("ufrag"), t3.push(e3.usernameFragment || e3.ufrag)), "candidate:" + t3.join(" ");
		    }, t2.parseIceOptions = function(e3) {
		      return e3.substring(14).split(" ");
		    }, t2.parseRtpMap = function(e3) {
		      let t3 = e3.substring(9).split(" ");
		      const n2 = { payloadType: parseInt(t3.shift(), 10) };
		      return t3 = t3[0].split("/"), n2.name = t3[0], n2.clockRate = parseInt(t3[1], 10), n2.channels = 3 === t3.length ? parseInt(t3[2], 10) : 1, n2.numChannels = n2.channels, n2;
		    }, t2.writeRtpMap = function(e3) {
		      let t3 = e3.payloadType;
		      void 0 !== e3.preferredPayloadType && (t3 = e3.preferredPayloadType);
		      const n2 = e3.channels || e3.numChannels || 1;
		      return "a=rtpmap:" + t3 + " " + e3.name + "/" + e3.clockRate + (1 !== n2 ? "/" + n2 : "") + "\r\n";
		    }, t2.parseExtmap = function(e3) {
		      const t3 = e3.substring(9).split(" ");
		      return { id: parseInt(t3[0], 10), direction: t3[0].indexOf("/") > 0 ? t3[0].split("/")[1] : "sendrecv", uri: t3[1], attributes: t3.slice(2).join(" ") };
		    }, t2.writeExtmap = function(e3) {
		      return "a=extmap:" + (e3.id || e3.preferredId) + (e3.direction && "sendrecv" !== e3.direction ? "/" + e3.direction : "") + " " + e3.uri + (e3.attributes ? " " + e3.attributes : "") + "\r\n";
		    }, t2.parseFmtp = function(e3) {
		      const t3 = {};
		      let n2;
		      const r2 = e3.substring(e3.indexOf(" ") + 1).split(";");
		      for (let e4 = 0; e4 < r2.length; e4++) n2 = r2[e4].trim().split("="), t3[n2[0].trim()] = n2[1];
		      return t3;
		    }, t2.writeFmtp = function(e3) {
		      let t3 = "", n2 = e3.payloadType;
		      if (void 0 !== e3.preferredPayloadType && (n2 = e3.preferredPayloadType), e3.parameters && Object.keys(e3.parameters).length) {
		        const r2 = [];
		        Object.keys(e3.parameters).forEach((t4) => {
		          void 0 !== e3.parameters[t4] ? r2.push(t4 + "=" + e3.parameters[t4]) : r2.push(t4);
		        }), t3 += "a=fmtp:" + n2 + " " + r2.join(";") + "\r\n";
		      }
		      return t3;
		    }, t2.parseRtcpFb = function(e3) {
		      const t3 = e3.substring(e3.indexOf(" ") + 1).split(" ");
		      return { type: t3.shift(), parameter: t3.join(" ") };
		    }, t2.writeRtcpFb = function(e3) {
		      let t3 = "", n2 = e3.payloadType;
		      return void 0 !== e3.preferredPayloadType && (n2 = e3.preferredPayloadType), e3.rtcpFeedback && e3.rtcpFeedback.length && e3.rtcpFeedback.forEach((e4) => {
		        t3 += "a=rtcp-fb:" + n2 + " " + e4.type + (e4.parameter && e4.parameter.length ? " " + e4.parameter : "") + "\r\n";
		      }), t3;
		    }, t2.parseSsrcMedia = function(e3) {
		      const t3 = e3.indexOf(" "), n2 = { ssrc: parseInt(e3.substring(7, t3), 10) }, r2 = e3.indexOf(":", t3);
		      return r2 > -1 ? (n2.attribute = e3.substring(t3 + 1, r2), n2.value = e3.substring(r2 + 1)) : n2.attribute = e3.substring(t3 + 1), n2;
		    }, t2.parseSsrcGroup = function(e3) {
		      const t3 = e3.substring(13).split(" ");
		      return { semantics: t3.shift(), ssrcs: t3.map((e4) => parseInt(e4, 10)) };
		    }, t2.getMid = function(e3) {
		      const n2 = t2.matchPrefix(e3, "a=mid:")[0];
		      if (n2) return n2.substring(6);
		    }, t2.parseFingerprint = function(e3) {
		      const t3 = e3.substring(14).split(" ");
		      return { algorithm: t3[0].toLowerCase(), value: t3[1].toUpperCase() };
		    }, t2.getDtlsParameters = function(e3, n2) {
		      return { role: "auto", fingerprints: t2.matchPrefix(e3 + n2, "a=fingerprint:").map(t2.parseFingerprint) };
		    }, t2.writeDtlsParameters = function(e3, t3) {
		      let n2 = "a=setup:" + t3 + "\r\n";
		      return e3.fingerprints.forEach((e4) => {
		        n2 += "a=fingerprint:" + e4.algorithm + " " + e4.value + "\r\n";
		      }), n2;
		    }, t2.parseCryptoLine = function(e3) {
		      const t3 = e3.substring(9).split(" ");
		      return { tag: parseInt(t3[0], 10), cryptoSuite: t3[1], keyParams: t3[2], sessionParams: t3.slice(3) };
		    }, t2.writeCryptoLine = function(e3) {
		      return "a=crypto:" + e3.tag + " " + e3.cryptoSuite + " " + ("object" == typeof e3.keyParams ? t2.writeCryptoKeyParams(e3.keyParams) : e3.keyParams) + (e3.sessionParams ? " " + e3.sessionParams.join(" ") : "") + "\r\n";
		    }, t2.parseCryptoKeyParams = function(e3) {
		      if (0 !== e3.indexOf("inline:")) return null;
		      const t3 = e3.substring(7).split("|");
		      return { keyMethod: "inline", keySalt: t3[0], lifeTime: t3[1], mkiValue: t3[2] ? t3[2].split(":")[0] : void 0, mkiLength: t3[2] ? t3[2].split(":")[1] : void 0 };
		    }, t2.writeCryptoKeyParams = function(e3) {
		      return e3.keyMethod + ":" + e3.keySalt + (e3.lifeTime ? "|" + e3.lifeTime : "") + (e3.mkiValue && e3.mkiLength ? "|" + e3.mkiValue + ":" + e3.mkiLength : "");
		    }, t2.getCryptoParameters = function(e3, n2) {
		      return t2.matchPrefix(e3 + n2, "a=crypto:").map(t2.parseCryptoLine);
		    }, t2.getIceParameters = function(e3, n2) {
		      const r2 = t2.matchPrefix(e3 + n2, "a=ice-ufrag:")[0], o = t2.matchPrefix(e3 + n2, "a=ice-pwd:")[0];
		      return r2 && o ? { usernameFragment: r2.substring(12), password: o.substring(10) } : null;
		    }, t2.writeIceParameters = function(e3) {
		      let t3 = "a=ice-ufrag:" + e3.usernameFragment + "\r\na=ice-pwd:" + e3.password + "\r\n";
		      return e3.iceLite && (t3 += "a=ice-lite\r\n"), t3;
		    }, t2.parseRtpParameters = function(e3) {
		      const n2 = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] }, r2 = t2.splitLines(e3)[0].split(" ");
		      n2.profile = r2[2];
		      for (let o2 = 3; o2 < r2.length; o2++) {
		        const i = r2[o2], s = t2.matchPrefix(e3, "a=rtpmap:" + i + " ")[0];
		        if (s) {
		          const r3 = t2.parseRtpMap(s), o3 = t2.matchPrefix(e3, "a=fmtp:" + i + " ");
		          switch (r3.parameters = o3.length ? t2.parseFmtp(o3[0]) : {}, r3.rtcpFeedback = t2.matchPrefix(e3, "a=rtcp-fb:" + i + " ").map(t2.parseRtcpFb), n2.codecs.push(r3), r3.name.toUpperCase()) {
		            case "RED":
		            case "ULPFEC":
		              n2.fecMechanisms.push(r3.name.toUpperCase());
		          }
		        }
		      }
		      t2.matchPrefix(e3, "a=extmap:").forEach((e4) => {
		        n2.headerExtensions.push(t2.parseExtmap(e4));
		      });
		      const o = t2.matchPrefix(e3, "a=rtcp-fb:* ").map(t2.parseRtcpFb);
		      return n2.codecs.forEach((e4) => {
		        o.forEach((t3) => {
		          e4.rtcpFeedback.find((e5) => e5.type === t3.type && e5.parameter === t3.parameter) || e4.rtcpFeedback.push(t3);
		        });
		      }), n2;
		    }, t2.writeRtpDescription = function(e3, n2) {
		      let r2 = "";
		      r2 += "m=" + e3 + " ", r2 += n2.codecs.length > 0 ? "9" : "0", r2 += " " + (n2.profile || "UDP/TLS/RTP/SAVPF") + " ", r2 += n2.codecs.map((e4) => void 0 !== e4.preferredPayloadType ? e4.preferredPayloadType : e4.payloadType).join(" ") + "\r\n", r2 += "c=IN IP4 0.0.0.0\r\n", r2 += "a=rtcp:9 IN IP4 0.0.0.0\r\n", n2.codecs.forEach((e4) => {
		        r2 += t2.writeRtpMap(e4), r2 += t2.writeFmtp(e4), r2 += t2.writeRtcpFb(e4);
		      });
		      let o = 0;
		      return n2.codecs.forEach((e4) => {
		        e4.maxptime > o && (o = e4.maxptime);
		      }), o > 0 && (r2 += "a=maxptime:" + o + "\r\n"), n2.headerExtensions && n2.headerExtensions.forEach((e4) => {
		        r2 += t2.writeExtmap(e4);
		      }), r2;
		    }, t2.parseRtpEncodingParameters = function(e3) {
		      const n2 = [], r2 = t2.parseRtpParameters(e3), o = -1 !== r2.fecMechanisms.indexOf("RED"), i = -1 !== r2.fecMechanisms.indexOf("ULPFEC"), s = t2.matchPrefix(e3, "a=ssrc:").map((e4) => t2.parseSsrcMedia(e4)).filter((e4) => "cname" === e4.attribute), a = s.length > 0 && s[0].ssrc;
		      let c;
		      const u = t2.matchPrefix(e3, "a=ssrc-group:FID").map((e4) => e4.substring(17).split(" ").map((e5) => parseInt(e5, 10)));
		      u.length > 0 && u[0].length > 1 && u[0][0] === a && (c = u[0][1]), r2.codecs.forEach((e4) => {
		        if ("RTX" === e4.name.toUpperCase() && e4.parameters.apt) {
		          let t3 = { ssrc: a, codecPayloadType: parseInt(e4.parameters.apt, 10) };
		          a && c && (t3.rtx = { ssrc: c }), n2.push(t3), o && (t3 = JSON.parse(JSON.stringify(t3)), t3.fec = { ssrc: a, mechanism: i ? "red+ulpfec" : "red" }, n2.push(t3));
		        }
		      }), 0 === n2.length && a && n2.push({ ssrc: a });
		      let l = t2.matchPrefix(e3, "b=");
		      return l.length && (l = 0 === l[0].indexOf("b=TIAS:") ? parseInt(l[0].substring(7), 10) : 0 === l[0].indexOf("b=AS:") ? 1e3 * parseInt(l[0].substring(5), 10) * 0.95 - 16e3 : void 0, n2.forEach((e4) => {
		        e4.maxBitrate = l;
		      })), n2;
		    }, t2.parseRtcpParameters = function(e3) {
		      const n2 = {}, r2 = t2.matchPrefix(e3, "a=ssrc:").map((e4) => t2.parseSsrcMedia(e4)).filter((e4) => "cname" === e4.attribute)[0];
		      r2 && (n2.cname = r2.value, n2.ssrc = r2.ssrc);
		      const o = t2.matchPrefix(e3, "a=rtcp-rsize");
		      n2.reducedSize = o.length > 0, n2.compound = 0 === o.length;
		      const i = t2.matchPrefix(e3, "a=rtcp-mux");
		      return n2.mux = i.length > 0, n2;
		    }, t2.writeRtcpParameters = function(e3) {
		      let t3 = "";
		      return e3.reducedSize && (t3 += "a=rtcp-rsize\r\n"), e3.mux && (t3 += "a=rtcp-mux\r\n"), void 0 !== e3.ssrc && e3.cname && (t3 += "a=ssrc:" + e3.ssrc + " cname:" + e3.cname + "\r\n"), t3;
		    }, t2.parseMsid = function(e3) {
		      let n2;
		      const r2 = t2.matchPrefix(e3, "a=msid:");
		      if (1 === r2.length) return n2 = r2[0].substring(7).split(" "), { stream: n2[0], track: n2[1] };
		      const o = t2.matchPrefix(e3, "a=ssrc:").map((e4) => t2.parseSsrcMedia(e4)).filter((e4) => "msid" === e4.attribute);
		      return o.length > 0 ? (n2 = o[0].value.split(" "), { stream: n2[0], track: n2[1] }) : void 0;
		    }, t2.parseSctpDescription = function(e3) {
		      const n2 = t2.parseMLine(e3), r2 = t2.matchPrefix(e3, "a=max-message-size:");
		      let o;
		      r2.length > 0 && (o = parseInt(r2[0].substring(19), 10)), isNaN(o) && (o = 65536);
		      const i = t2.matchPrefix(e3, "a=sctp-port:");
		      if (i.length > 0) return { port: parseInt(i[0].substring(12), 10), protocol: n2.fmt, maxMessageSize: o };
		      const s = t2.matchPrefix(e3, "a=sctpmap:");
		      if (s.length > 0) {
		        const e4 = s[0].substring(10).split(" ");
		        return { port: parseInt(e4[0], 10), protocol: e4[1], maxMessageSize: o };
		      }
		    }, t2.writeSctpDescription = function(e3, t3) {
		      let n2 = [];
		      return n2 = "DTLS/SCTP" !== e3.protocol ? ["m=" + e3.kind + " 9 " + e3.protocol + " " + t3.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t3.port + "\r\n"] : ["m=" + e3.kind + " 9 " + e3.protocol + " " + t3.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t3.port + " " + t3.protocol + " 65535\r\n"], void 0 !== t3.maxMessageSize && n2.push("a=max-message-size:" + t3.maxMessageSize + "\r\n"), n2.join("");
		    }, t2.generateSessionId = function() {
		      return Math.random().toString().substr(2, 22);
		    }, t2.writeSessionBoilerplate = function(e3, n2, r2) {
		      let o;
		      const i = void 0 !== n2 ? n2 : 2;
		      return o = e3 || t2.generateSessionId(), "v=0\r\no=" + (r2 || "thisisadapterortc") + " " + o + " " + i + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
		    }, t2.getDirection = function(e3, n2) {
		      const r2 = t2.splitLines(e3);
		      for (let e4 = 0; e4 < r2.length; e4++) switch (r2[e4]) {
		        case "a=sendrecv":
		        case "a=sendonly":
		        case "a=recvonly":
		        case "a=inactive":
		          return r2[e4].substring(2);
		      }
		      return n2 ? t2.getDirection(n2) : "sendrecv";
		    }, t2.getKind = function(e3) {
		      return t2.splitLines(e3)[0].split(" ")[0].substring(2);
		    }, t2.isRejected = function(e3) {
		      return "0" === e3.split(" ", 2)[1];
		    }, t2.parseMLine = function(e3) {
		      const n2 = t2.splitLines(e3)[0].substring(2).split(" ");
		      return { kind: n2[0], port: parseInt(n2[1], 10), protocol: n2[2], fmt: n2.slice(3).join(" ") };
		    }, t2.parseOLine = function(e3) {
		      const n2 = t2.matchPrefix(e3, "o=")[0].substring(2).split(" ");
		      return { username: n2[0], sessionId: n2[1], sessionVersion: parseInt(n2[2], 10), netType: n2[3], addressType: n2[4], address: n2[5] };
		    }, t2.isValidSDP = function(e3) {
		      if ("string" != typeof e3 || 0 === e3.length) return false;
		      const n2 = t2.splitLines(e3);
		      for (let e4 = 0; e4 < n2.length; e4++) if (n2[e4].length < 2 || "=" !== n2[e4].charAt(1)) return false;
		      return true;
		    }, e2.exports = t2;
		  }, 531() {
		  } }, t = {};
		  function n(r2) {
		    var o = t[r2];
		    if (void 0 !== o) return o.exports;
		    var i = t[r2] = { exports: {} };
		    return e[r2](i, i.exports, n), i.exports;
		  }
		  n.n = (e2) => {
		    var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
		    return n.d(t2, { a: t2 }), t2;
		  }, n.d = (e2, t2) => {
		    for (var r2 in t2) n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
		  }, n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
		    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
		  };
		  var r = {};
		  return (() => {
		    "use strict";
		    n.r(r), n.d(r, { AutoConnectHelper: () => h, CardanoPeerConnect: () => Mn, DAppPeerConnect: () => $n, ExperimentalContainer: () => I, PeerConnectIdenticon: () => C });
		    var e2 = {};
		    n.r(e2), n.d(e2, { fixNegotiationNeeded: () => pe, shimAddTrackRemoveTrack: () => ue, shimAddTrackRemoveTrackWithNative: () => ce, shimGetSendersWithDtmf: () => se, shimGetUserMedia: () => re, shimMediaStream: () => oe, shimOnTrack: () => ie, shimPeerConnection: () => le, shimSenderReceiverGetStats: () => ae });
		    var t2 = {};
		    n.r(t2), n.d(t2, { shimAddTransceiver: () => Ce, shimCreateAnswer: () => Te, shimCreateOffer: () => Se, shimGetDisplayMedia: () => de, shimGetParameters: () => _e, shimGetStats: () => ye, shimGetUserMedia: () => he, shimOnTrack: () => fe, shimPeerConnection: () => ge, shimRTCDataChannel: () => we, shimReceiverGetStats: () => ve, shimRemoveStream: () => be, shimSenderGetStats: () => me });
		    var o = {};
		    n.r(o), n.d(o, { shimAudioContext: () => Me, shimCallbacksAPI: () => Ee, shimConstraints: () => Ae, shimCreateOfferLegacy: () => Ie, shimGetUserMedia: () => Re, shimLocalStreamsAPI: () => Pe, shimRTCIceServerUrls: () => xe, shimRemoteStreamsAPI: () => ke, shimTrackEventTransceiver: () => De });
		    var i, s = {};
		    function a(e3) {
		      return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
		        return typeof e4;
		      } : function(e4) {
		        return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
		      }, a(e3);
		    }
		    function c(e3, t3) {
		      for (var n2 = 0; n2 < t3.length; n2++) {
		        var r2 = t3[n2];
		        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, p(r2.key), r2);
		      }
		    }
		    function u(e3, t3, n2) {
		      return t3 && c(e3.prototype, t3), n2 && c(e3, n2), Object.defineProperty(e3, "prototype", { writable: false }), e3;
		    }
		    function l(e3, t3, n2) {
		      return (t3 = p(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
		    }
		    function p(e3) {
		      var t3 = (function(e4) {
		        if ("object" != a(e4) || !e4) return e4;
		        var t4 = e4[Symbol.toPrimitive];
		        if (void 0 !== t4) {
		          var n2 = t4.call(e4, "string");
		          if ("object" != a(n2)) return n2;
		          throw new TypeError("@@toPrimitive must return a primitive value.");
		        }
		        return String(e4);
		      })(e3);
		      return "symbol" == a(t3) ? t3 : t3 + "";
		    }
		    n.r(s), n.d(s, { removeExtmapAllowMixed: () => ze, shimAddIceCandidateNullOrEmpty: () => We, shimConnectionState: () => Fe, shimMaxMessageSize: () => Ue, shimParameterlessSetLocalDescription: () => $e, shimRTCIceCandidate: () => je, shimRTCIceCandidateRelayProtocol: () => Be, shimSendThrowTypeError: () => Ne });
		    var h = u(function e3() {
		      !(function(e4, t3) {
		        if (!(e4 instanceof t3)) throw new TypeError("Cannot call a class as a function");
		      })(this, e3);
		    });
		    i = h, l(h, "autoConnectKey", "cardano-peer-autoconnect-id"), l(h, "discoveryPeerIdKey", "cardano-peer-discovery-id"), l(h, "walletDiscoveryPeerIdKey", "cardano-wallet-discovery-address"), l(h, "addAutoConnectId", function(e3) {
		      if (!i.isAutoConnectId(e3)) {
		        var t3 = i.getAutoConnectIds();
		        t3.push(e3), localStorage.setItem(i.autoConnectKey, JSON.stringify(t3));
		      }
		    }), l(h, "getAutoConnectIds", function() {
		      var e3;
		      return JSON.parse(null !== (e3 = localStorage.getItem(i.autoConnectKey)) && void 0 !== e3 ? e3 : "[]");
		    }), l(h, "isAutoConnectId", function(e3) {
		      return i.getAutoConnectIds().includes(e3);
		    }), l(h, "resetAutoConnectIds", function() {
		      localStorage.setItem(i.autoConnectKey, JSON.stringify([]));
		    }), l(h, "removeAutoConnectId", function(e3) {
		      var t3 = i.getAutoConnectIds(), n2 = t3.indexOf(e3);
		      -1 !== n2 && (t3.splice(n2, 1), localStorage.setItem(i.autoConnectKey, JSON.stringify(t3)));
		    }), l(h, "saveDiscoveryPeerId", function(e3) {
		      localStorage.setItem(i.discoveryPeerIdKey, e3);
		    }), l(h, "saveWalletDiscoveryPeerId", function(e3) {
		      localStorage.setItem(i.walletDiscoveryPeerIdKey, e3);
		    }), l(h, "getWalletDiscoveryPeerId", function() {
		      return localStorage.getItem(i.walletDiscoveryPeerIdKey);
		    });
		    var d = n(726);
		    function f(e3) {
		      return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
		        return typeof e4;
		      } : function(e4) {
		        return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
		      }, f(e3);
		    }
		    function g(e3, t3) {
		      for (var n2 = 0; n2 < t3.length; n2++) {
		        var r2 = t3[n2];
		        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, m(r2.key), r2);
		      }
		    }
		    function y(e3, t3, n2) {
		      return t3 && g(e3.prototype, t3), n2 && g(e3, n2), Object.defineProperty(e3, "prototype", { writable: false }), e3;
		    }
		    function m(e3) {
		      var t3 = (function(e4) {
		        if ("object" != f(e4) || !e4) return e4;
		        var t4 = e4[Symbol.toPrimitive];
		        if (void 0 !== t4) {
		          var n2 = t4.call(e4, "string");
		          if ("object" != f(n2)) return n2;
		          throw new TypeError("@@toPrimitive must return a primitive value.");
		        }
		        return String(e4);
		      })(e3);
		      return "symbol" == f(t3) ? t3 : t3 + "";
		    }
		    var v, b, w, C = y(function e3() {
		      !(function(e4, t3) {
		        if (!(e4 instanceof t3)) throw new TypeError("Cannot call a class as a function");
		      })(this, e3);
		    });
		    function _() {
		      var e3, t3, n2 = "function" == typeof Symbol ? Symbol : {}, r2 = n2.iterator || "@@iterator", o2 = n2.toStringTag || "@@toStringTag";
		      function i2(n3, r3, o3, i3) {
		        var c3 = r3 && r3.prototype instanceof a2 ? r3 : a2, u3 = Object.create(c3.prototype);
		        return S(u3, "_invoke", (function(n4, r4, o4) {
		          var i4, a3, c4, u4 = 0, l3 = o4 || [], p3 = false, h3 = { p: 0, n: 0, v: e3, a: d2, f: d2.bind(e3, 4), d: function(t4, n5) {
		            return i4 = t4, a3 = 0, c4 = e3, h3.n = n5, s2;
		          } };
		          function d2(n5, r5) {
		            for (a3 = n5, c4 = r5, t3 = 0; !p3 && u4 && !o5 && t3 < l3.length; t3++) {
		              var o5, i5 = l3[t3], d3 = h3.p, f2 = i5[2];
		              n5 > 3 ? (o5 = f2 === r5) && (c4 = i5[(a3 = i5[4]) ? 5 : (a3 = 3, 3)], i5[4] = i5[5] = e3) : i5[0] <= d3 && ((o5 = n5 < 2 && d3 < i5[1]) ? (a3 = 0, h3.v = r5, h3.n = i5[1]) : d3 < f2 && (o5 = n5 < 3 || i5[0] > r5 || r5 > f2) && (i5[4] = n5, i5[5] = r5, h3.n = f2, a3 = 0));
		            }
		            if (o5 || n5 > 1) return s2;
		            throw p3 = true, r5;
		          }
		          return function(o5, l4, f2) {
		            if (u4 > 1) throw TypeError("Generator is already running");
		            for (p3 && 1 === l4 && d2(l4, f2), a3 = l4, c4 = f2; (t3 = a3 < 2 ? e3 : c4) || !p3; ) {
		              i4 || (a3 ? a3 < 3 ? (a3 > 1 && (h3.n = -1), d2(a3, c4)) : h3.n = c4 : h3.v = c4);
		              try {
		                if (u4 = 2, i4) {
		                  if (a3 || (o5 = "next"), t3 = i4[o5]) {
		                    if (!(t3 = t3.call(i4, c4))) throw TypeError("iterator result is not an object");
		                    if (!t3.done) return t3;
		                    c4 = t3.value, a3 < 2 && (a3 = 0);
		                  } else 1 === a3 && (t3 = i4.return) && t3.call(i4), a3 < 2 && (c4 = TypeError("The iterator does not provide a '" + o5 + "' method"), a3 = 1);
		                  i4 = e3;
		                } else if ((t3 = (p3 = h3.n < 0) ? c4 : n4.call(r4, h3)) !== s2) break;
		              } catch (t4) {
		                i4 = e3, a3 = 1, c4 = t4;
		              } finally {
		                u4 = 1;
		              }
		            }
		            return { value: t3, done: p3 };
		          };
		        })(n3, o3, i3), true), u3;
		      }
		      var s2 = {};
		      function a2() {
		      }
		      function c2() {
		      }
		      function u2() {
		      }
		      t3 = Object.getPrototypeOf;
		      var l2 = [][r2] ? t3(t3([][r2]())) : (S(t3 = {}, r2, function() {
		        return this;
		      }), t3), p2 = u2.prototype = a2.prototype = Object.create(l2);
		      function h2(e4) {
		        return Object.setPrototypeOf ? Object.setPrototypeOf(e4, u2) : (e4.__proto__ = u2, S(e4, o2, "GeneratorFunction")), e4.prototype = Object.create(p2), e4;
		      }
		      return c2.prototype = u2, S(p2, "constructor", u2), S(u2, "constructor", c2), c2.displayName = "GeneratorFunction", S(u2, o2, "GeneratorFunction"), S(p2), S(p2, o2, "Generator"), S(p2, r2, function() {
		        return this;
		      }), S(p2, "toString", function() {
		        return "[object Generator]";
		      }), (_ = function() {
		        return { w: i2, m: h2 };
		      })();
		    }
		    function S(e3, t3, n2, r2) {
		      var o2 = Object.defineProperty;
		      try {
		        o2({}, "", {});
		      } catch (e4) {
		        o2 = 0;
		      }
		      S = function(e4, t4, n3, r3) {
		        function i2(t5, n4) {
		          S(e4, t5, function(e5) {
		            return this._invoke(t5, n4, e5);
		          });
		        }
		        t4 ? o2 ? o2(e4, t4, { value: n3, enumerable: !r3, configurable: !r3, writable: !r3 }) : e4[t4] = n3 : (i2("next", 0), i2("throw", 1), i2("return", 2));
		      }, S(e3, t3, n2, r2);
		    }
		    function T(e3) {
		      return (function(e4) {
		        if (Array.isArray(e4)) return k(e4);
		      })(e3) || (function(e4) {
		        if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"]) return Array.from(e4);
		      })(e3) || P(e3) || (function() {
		        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		      })();
		    }
		    function P(e3, t3) {
		      if (e3) {
		        if ("string" == typeof e3) return k(e3, t3);
		        var n2 = {}.toString.call(e3).slice(8, -1);
		        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? k(e3, t3) : void 0;
		      }
		    }
		    function k(e3, t3) {
		      (null == t3 || t3 > e3.length) && (t3 = e3.length);
		      for (var n2 = 0, r2 = Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
		      return r2;
		    }
		    function E(e3, t3, n2, r2, o2, i2, s2) {
		      try {
		        var a2 = e3[i2](s2), c2 = a2.value;
		      } catch (e4) {
		        return void n2(e4);
		      }
		      a2.done ? t3(c2) : Promise.resolve(c2).then(r2, o2);
		    }
		    function R(e3) {
		      return function() {
		        var t3 = this, n2 = arguments;
		        return new Promise(function(r2, o2) {
		          var i2 = e3.apply(t3, n2);
		          function s2(e4) {
		            E(i2, r2, o2, s2, a2, "next", e4);
		          }
		          function a2(e4) {
		            E(i2, r2, o2, s2, a2, "throw", e4);
		          }
		          s2(void 0);
		        });
		      };
		    }
		    function A(e3) {
		      return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
		        return typeof e4;
		      } : function(e4) {
		        return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
		      }, A(e3);
		    }
		    function x(e3, t3) {
		      for (var n2 = 0; n2 < t3.length; n2++) {
		        var r2 = t3[n2];
		        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, D(r2.key), r2);
		      }
		    }
		    function D(e3) {
		      var t3 = (function(e4) {
		        if ("object" != A(e4) || !e4) return e4;
		        var t4 = e4[Symbol.toPrimitive];
		        if (void 0 !== t4) {
		          var n2 = t4.call(e4, "string");
		          if ("object" != A(n2)) return n2;
		          throw new TypeError("@@toPrimitive must return a primitive value.");
		        }
		        return String(e4);
		      })(e3);
		      return "symbol" == A(t3) ? t3 : t3 + "";
		    }
		    v = C, w = function(e3) {
		      return e3.length < 68 ? (console.warn("Connection hash is too short. Not generating identicon."), null) : (0, d.identicon)(e3.split("").reverse().map(function(e4, t3) {
		        return t3 > 0 && t3 % 10 == 0 ? "-" : e4;
		      }).join(""), { size: 100, baseSeed: "cardano-peer-connect", fontSize: 0.17, initialsColours: ["#000000", "#FF0000", "#0000FF"] }).toDataURL();
		    }, (b = m(b = "getBase64Identicon")) in v ? Object.defineProperty(v, b, { value: w, enumerable: true, configurable: true, writable: true }) : v[b] = w;
		    var I = (function() {
		      return (function(e3, t3) {
		        return t3 && x(e3.prototype, t3), Object.defineProperty(e3, "prototype", { writable: false }), e3;
		      })(function e3(t3) {
		        !(function(e4, t4) {
		          if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
		        })(this, e3), Object.assign(this, t3);
		      }, [{ key: "get", value: function(e3) {
		        return this[e3];
		      } }, { key: "set", value: function(e3, t3) {
		        this[e3] = t3;
		      } }]);
		    })();
		    function M(e3) {
		      var t3 = /* @__PURE__ */ new Map();
		      for (var n2 in e3) {
		        var r2 = e3[n2];
		        if ("function" == typeof r2) {
		          var o2 = "AsyncFunction" === r2.constructor.name ? "async_function" : "function";
		          t3.set(n2, { valueType: o2 });
		        } else "object" === A(r2) ? t3.set(n2, { valueType: "object", value: JSON.parse(JSON.stringify(r2)) }) : t3.set(n2, { valueType: A(r2), value: r2 });
		      }
		      return t3;
		    }
		    function O(e3, t3) {
		      return L.apply(this, arguments);
		    }
		    function L() {
		      return L = R(_().m(function e3(t3, n2) {
		        var r2, o2, i2, s2, a2, c2, u2 = arguments;
		        return _().w(function(e4) {
		          for (; ; ) switch (e4.n) {
		            case 0:
		              for (r2 = u2.length, o2 = new Array(r2 > 2 ? r2 - 2 : 0), i2 = 2; i2 < r2; i2++) o2[i2 - 2] = u2[i2];
		              if (s2 = M(t3), a2 = s2.get(n2)) {
		                e4.n = 1;
		                break;
		              }
		              throw new Error("No property or function with the name '".concat(n2, "' found."));
		            case 1:
		              if ("function" !== a2.valueType && "async_function" !== a2.valueType) {
		                e4.n = 3;
		                break;
		              }
		              return c2 = t3[n2], e4.n = 2, c2.apply(void 0, o2);
		            case 2:
		              return e4.a(2, e4.v);
		            case 3:
		              return e4.a(2, t3[n2]);
		          }
		        }, e3);
		      })), L.apply(this, arguments);
		    }
		    function j(e3) {
		      var t3 = {};
		      return e3.forEach(function(e4, n2) {
		        t3[n2] = e4;
		      }), JSON.stringify(t3);
		    }
		    var B = function(e3, t3, n2) {
		      var r2, o2 = (function(e4) {
		        var t4 = JSON.parse(e4), n3 = /* @__PURE__ */ new Map();
		        for (var r3 in t4) n3.set(r3, t4[r3]);
		        return n3;
		      })(t3), i2 = {}, s2 = (function(e4) {
		        var t4 = "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
		        if (!t4) {
		          if (Array.isArray(e4) || (t4 = P(e4))) {
		            t4 && (e4 = t4);
		            var n3 = 0, r3 = function() {
		            };
		            return { s: r3, n: function() {
		              return n3 >= e4.length ? { done: true } : { done: false, value: e4[n3++] };
		            }, e: function(e5) {
		              throw e5;
		            }, f: r3 };
		          }
		          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		        }
		        var o3, i3 = true, s3 = false;
		        return { s: function() {
		          t4 = t4.call(e4);
		        }, n: function() {
		          var e5 = t4.next();
		          return i3 = e5.done, e5;
		        }, e: function(e5) {
		          s3 = true, o3 = e5;
		        }, f: function() {
		          try {
		            i3 || null == t4.return || t4.return();
		          } finally {
		            if (s3) throw o3;
		          }
		        } };
		      })(o2.keys());
		      try {
		        var a2 = function() {
		          var t4, s3 = r2.value, a3 = o2.get(s3);
		          if (!a3) return 1;
		          "function" === a3.valueType || "async_function" === a3.valueType ? i2[s3] = function() {
		            for (var t5 = arguments.length, r3 = new Array(t5), o3 = 0; o3 < t5; o3++) r3[o3] = arguments[o3];
		            return r3 = null != r3 ? r3 : [], new Promise(function(t6, o4) {
		              e3.call(n2, [s3].concat(T(r3)), function(e4) {
		                e4.error ? o4(e4.error) : t6(e4);
		              });
		            });
		          } : i2[s3] = null !== (t4 = a3.value) && void 0 !== t4 ? t4 : null;
		        };
		        for (s2.s(); !(r2 = s2.n()).done; ) a2();
		      } catch (e4) {
		        s2.e(e4);
		      } finally {
		        s2.f();
		      }
		      return i2;
		    }, U = function(e3, t3, n2, r2) {
		      e3.register(t3, (function() {
		        var e4 = R(_().m(function e5(t4, o2, i2) {
		          var s2, a2;
		          return _().w(function(e6) {
		            for (; ; ) switch (e6.n) {
		              case 0:
		                if (t4 !== r2) {
		                  e6.n = 2;
		                  break;
		                }
		                return s2 = o2[0], e6.n = 1, O.apply(void 0, [n2, s2].concat(T(o2.splice(1))));
		              case 1:
		                void 0 !== (a2 = e6.v) && i2(a2);
		              case 2:
		                return e6.a(2);
		            }
		          }, e5);
		        }));
		        return function(t4, n3, r3) {
		          return e4.apply(this, arguments);
		        };
		      })());
		    };
		    class N {
		      constructor() {
		        this.encoder = new TextEncoder(), this._pieces = [], this._parts = [];
		      }
		      append_buffer(e3) {
		        this.flush(), this._parts.push(e3);
		      }
		      append(e3) {
		        this._pieces.push(e3);
		      }
		      flush() {
		        if (this._pieces.length > 0) {
		          const e3 = new Uint8Array(this._pieces);
		          this._parts.push(e3), this._pieces = [];
		        }
		      }
		      toArrayBuffer() {
		        const e3 = [];
		        for (const t3 of this._parts) e3.push(t3);
		        return (function(e4) {
		          let t3 = 0;
		          for (const n3 of e4) t3 += n3.byteLength;
		          const n2 = new Uint8Array(t3);
		          let r2 = 0;
		          for (const t4 of e4) {
		            const e5 = new Uint8Array(t4.buffer, t4.byteOffset, t4.byteLength);
		            n2.set(e5, r2), r2 += t4.byteLength;
		          }
		          return n2;
		        })(e3).buffer;
		      }
		    }
		    function F(e3) {
		      return new W(e3).unpack();
		    }
		    function z(e3) {
		      const t3 = new $(), n2 = t3.pack(e3);
		      return n2 instanceof Promise ? n2.then(() => t3.getBuffer()) : t3.getBuffer();
		    }
		    class W {
		      constructor(e3) {
		        this.index = 0, this.dataBuffer = e3, this.dataView = new Uint8Array(this.dataBuffer), this.length = this.dataBuffer.byteLength;
		      }
		      unpack() {
		        const e3 = this.unpack_uint8();
		        if (e3 < 128) return e3;
		        if ((224 ^ e3) < 32) return (224 ^ e3) - 32;
		        let t3;
		        if ((t3 = 160 ^ e3) <= 15) return this.unpack_raw(t3);
		        if ((t3 = 176 ^ e3) <= 15) return this.unpack_string(t3);
		        if ((t3 = 144 ^ e3) <= 15) return this.unpack_array(t3);
		        if ((t3 = 128 ^ e3) <= 15) return this.unpack_map(t3);
		        switch (e3) {
		          case 192:
		            return null;
		          case 193:
		          case 212:
		          case 213:
		          case 214:
		          case 215:
		            return;
		          case 194:
		            return false;
		          case 195:
		            return true;
		          case 202:
		            return this.unpack_float();
		          case 203:
		            return this.unpack_double();
		          case 204:
		            return this.unpack_uint8();
		          case 205:
		            return this.unpack_uint16();
		          case 206:
		            return this.unpack_uint32();
		          case 207:
		            return this.unpack_uint64();
		          case 208:
		            return this.unpack_int8();
		          case 209:
		            return this.unpack_int16();
		          case 210:
		            return this.unpack_int32();
		          case 211:
		            return this.unpack_int64();
		          case 216:
		            return t3 = this.unpack_uint16(), this.unpack_string(t3);
		          case 217:
		            return t3 = this.unpack_uint32(), this.unpack_string(t3);
		          case 218:
		            return t3 = this.unpack_uint16(), this.unpack_raw(t3);
		          case 219:
		            return t3 = this.unpack_uint32(), this.unpack_raw(t3);
		          case 220:
		            return t3 = this.unpack_uint16(), this.unpack_array(t3);
		          case 221:
		            return t3 = this.unpack_uint32(), this.unpack_array(t3);
		          case 222:
		            return t3 = this.unpack_uint16(), this.unpack_map(t3);
		          case 223:
		            return t3 = this.unpack_uint32(), this.unpack_map(t3);
		        }
		      }
		      unpack_uint8() {
		        const e3 = 255 & this.dataView[this.index];
		        return this.index++, e3;
		      }
		      unpack_uint16() {
		        const e3 = this.read(2), t3 = 256 * (255 & e3[0]) + (255 & e3[1]);
		        return this.index += 2, t3;
		      }
		      unpack_uint32() {
		        const e3 = this.read(4), t3 = 256 * (256 * (256 * e3[0] + e3[1]) + e3[2]) + e3[3];
		        return this.index += 4, t3;
		      }
		      unpack_uint64() {
		        const e3 = this.read(8), t3 = 256 * (256 * (256 * (256 * (256 * (256 * (256 * e3[0] + e3[1]) + e3[2]) + e3[3]) + e3[4]) + e3[5]) + e3[6]) + e3[7];
		        return this.index += 8, t3;
		      }
		      unpack_int8() {
		        const e3 = this.unpack_uint8();
		        return e3 < 128 ? e3 : e3 - 256;
		      }
		      unpack_int16() {
		        const e3 = this.unpack_uint16();
		        return e3 < 32768 ? e3 : e3 - 65536;
		      }
		      unpack_int32() {
		        const e3 = this.unpack_uint32();
		        return e3 < 2 ** 31 ? e3 : e3 - 2 ** 32;
		      }
		      unpack_int64() {
		        const e3 = this.unpack_uint64();
		        return e3 < 2 ** 63 ? e3 : e3 - 2 ** 64;
		      }
		      unpack_raw(e3) {
		        if (this.length < this.index + e3) throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e3} ${this.length}`);
		        const t3 = this.dataBuffer.slice(this.index, this.index + e3);
		        return this.index += e3, t3;
		      }
		      unpack_string(e3) {
		        const t3 = this.read(e3);
		        let n2, r2, o2 = 0, i2 = "";
		        for (; o2 < e3; ) n2 = t3[o2], n2 < 160 ? (r2 = n2, o2++) : (192 ^ n2) < 32 ? (r2 = (31 & n2) << 6 | 63 & t3[o2 + 1], o2 += 2) : (224 ^ n2) < 16 ? (r2 = (15 & n2) << 12 | (63 & t3[o2 + 1]) << 6 | 63 & t3[o2 + 2], o2 += 3) : (r2 = (7 & n2) << 18 | (63 & t3[o2 + 1]) << 12 | (63 & t3[o2 + 2]) << 6 | 63 & t3[o2 + 3], o2 += 4), i2 += String.fromCodePoint(r2);
		        return this.index += e3, i2;
		      }
		      unpack_array(e3) {
		        const t3 = new Array(e3);
		        for (let n2 = 0; n2 < e3; n2++) t3[n2] = this.unpack();
		        return t3;
		      }
		      unpack_map(e3) {
		        const t3 = {};
		        for (let n2 = 0; n2 < e3; n2++) t3[this.unpack()] = this.unpack();
		        return t3;
		      }
		      unpack_float() {
		        const e3 = this.unpack_uint32();
		        return (e3 >> 31 ? -1 : 1) * (8388607 & e3 | 8388608) * 2 ** ((e3 >> 23 & 255) - 127 - 23);
		      }
		      unpack_double() {
		        const e3 = this.unpack_uint32(), t3 = (e3 >> 20 & 2047) - 1023;
		        return (e3 >> 31 ? -1 : 1) * ((1048575 & e3 | 1048576) * 2 ** (t3 - 20) + this.unpack_uint32() * 2 ** (t3 - 52));
		      }
		      read(e3) {
		        const t3 = this.index;
		        if (t3 + e3 <= this.length) return this.dataView.subarray(t3, t3 + e3);
		        throw new Error("BinaryPackFailure: read index out of range");
		      }
		    }
		    class $ {
		      getBuffer() {
		        return this._bufferBuilder.toArrayBuffer();
		      }
		      pack(e3) {
		        if ("string" == typeof e3) this.pack_string(e3);
		        else if ("number" == typeof e3) Math.floor(e3) === e3 ? this.pack_integer(e3) : this.pack_double(e3);
		        else if ("boolean" == typeof e3) true === e3 ? this._bufferBuilder.append(195) : false === e3 && this._bufferBuilder.append(194);
		        else if (void 0 === e3) this._bufferBuilder.append(192);
		        else {
		          if ("object" != typeof e3) throw new Error(`Type "${typeof e3}" not yet supported`);
		          if (null === e3) this._bufferBuilder.append(192);
		          else {
		            const t3 = e3.constructor;
		            if (e3 instanceof Array) {
		              const t4 = this.pack_array(e3);
		              if (t4 instanceof Promise) return t4.then(() => this._bufferBuilder.flush());
		            } else if (e3 instanceof ArrayBuffer) this.pack_bin(new Uint8Array(e3));
		            else if ("BYTES_PER_ELEMENT" in e3) {
		              const t4 = e3;
		              this.pack_bin(new Uint8Array(t4.buffer, t4.byteOffset, t4.byteLength));
		            } else if (e3 instanceof Date) this.pack_string(e3.toString());
		            else {
		              if (e3 instanceof Blob) return e3.arrayBuffer().then((e4) => {
		                this.pack_bin(new Uint8Array(e4)), this._bufferBuilder.flush();
		              });
		              if (t3 != Object && !t3.toString().startsWith("class")) throw new Error(`Type "${t3.toString()}" not yet supported`);
		              {
		                const t4 = this.pack_object(e3);
		                if (t4 instanceof Promise) return t4.then(() => this._bufferBuilder.flush());
		              }
		            }
		          }
		        }
		        this._bufferBuilder.flush();
		      }
		      pack_bin(e3) {
		        const t3 = e3.length;
		        if (t3 <= 15) this.pack_uint8(160 + t3);
		        else if (t3 <= 65535) this._bufferBuilder.append(218), this.pack_uint16(t3);
		        else {
		          if (!(t3 <= 4294967295)) throw new Error("Invalid length");
		          this._bufferBuilder.append(219), this.pack_uint32(t3);
		        }
		        this._bufferBuilder.append_buffer(e3);
		      }
		      pack_string(e3) {
		        const t3 = this._textEncoder.encode(e3), n2 = t3.length;
		        if (n2 <= 15) this.pack_uint8(176 + n2);
		        else if (n2 <= 65535) this._bufferBuilder.append(216), this.pack_uint16(n2);
		        else {
		          if (!(n2 <= 4294967295)) throw new Error("Invalid length");
		          this._bufferBuilder.append(217), this.pack_uint32(n2);
		        }
		        this._bufferBuilder.append_buffer(t3);
		      }
		      pack_array(e3) {
		        const t3 = e3.length;
		        if (t3 <= 15) this.pack_uint8(144 + t3);
		        else if (t3 <= 65535) this._bufferBuilder.append(220), this.pack_uint16(t3);
		        else {
		          if (!(t3 <= 4294967295)) throw new Error("Invalid length");
		          this._bufferBuilder.append(221), this.pack_uint32(t3);
		        }
		        const n2 = (r2) => {
		          if (r2 < t3) {
		            const t4 = this.pack(e3[r2]);
		            return t4 instanceof Promise ? t4.then(() => n2(r2 + 1)) : n2(r2 + 1);
		          }
		        };
		        return n2(0);
		      }
		      pack_integer(e3) {
		        if (e3 >= -32 && e3 <= 127) this._bufferBuilder.append(255 & e3);
		        else if (e3 >= 0 && e3 <= 255) this._bufferBuilder.append(204), this.pack_uint8(e3);
		        else if (e3 >= -128 && e3 <= 127) this._bufferBuilder.append(208), this.pack_int8(e3);
		        else if (e3 >= 0 && e3 <= 65535) this._bufferBuilder.append(205), this.pack_uint16(e3);
		        else if (e3 >= -32768 && e3 <= 32767) this._bufferBuilder.append(209), this.pack_int16(e3);
		        else if (e3 >= 0 && e3 <= 4294967295) this._bufferBuilder.append(206), this.pack_uint32(e3);
		        else if (e3 >= -2147483648 && e3 <= 2147483647) this._bufferBuilder.append(210), this.pack_int32(e3);
		        else if (e3 >= -9223372036854776e3 && e3 <= 9223372036854776e3) this._bufferBuilder.append(211), this.pack_int64(e3);
		        else {
		          if (!(e3 >= 0 && e3 <= 18446744073709552e3)) throw new Error("Invalid integer");
		          this._bufferBuilder.append(207), this.pack_uint64(e3);
		        }
		      }
		      pack_double(e3) {
		        let t3 = 0;
		        e3 < 0 && (t3 = 1, e3 = -e3);
		        const n2 = Math.floor(Math.log(e3) / Math.LN2), r2 = e3 / 2 ** n2 - 1, o2 = Math.floor(r2 * 2 ** 52), i2 = 2 ** 32, s2 = t3 << 31 | n2 + 1023 << 20 | o2 / i2 & 1048575, a2 = o2 % i2;
		        this._bufferBuilder.append(203), this.pack_int32(s2), this.pack_int32(a2);
		      }
		      pack_object(e3) {
		        const t3 = Object.keys(e3), n2 = t3.length;
		        if (n2 <= 15) this.pack_uint8(128 + n2);
		        else if (n2 <= 65535) this._bufferBuilder.append(222), this.pack_uint16(n2);
		        else {
		          if (!(n2 <= 4294967295)) throw new Error("Invalid length");
		          this._bufferBuilder.append(223), this.pack_uint32(n2);
		        }
		        const r2 = (n3) => {
		          if (n3 < t3.length) {
		            const o2 = t3[n3];
		            if (e3.hasOwnProperty(o2)) {
		              this.pack(o2);
		              const t4 = this.pack(e3[o2]);
		              if (t4 instanceof Promise) return t4.then(() => r2(n3 + 1));
		            }
		            return r2(n3 + 1);
		          }
		        };
		        return r2(0);
		      }
		      pack_uint8(e3) {
		        this._bufferBuilder.append(e3);
		      }
		      pack_uint16(e3) {
		        this._bufferBuilder.append(e3 >> 8), this._bufferBuilder.append(255 & e3);
		      }
		      pack_uint32(e3) {
		        const t3 = 4294967295 & e3;
		        this._bufferBuilder.append((4278190080 & t3) >>> 24), this._bufferBuilder.append((16711680 & t3) >>> 16), this._bufferBuilder.append((65280 & t3) >>> 8), this._bufferBuilder.append(255 & t3);
		      }
		      pack_uint64(e3) {
		        const t3 = e3 / 2 ** 32, n2 = e3 % 2 ** 32;
		        this._bufferBuilder.append((4278190080 & t3) >>> 24), this._bufferBuilder.append((16711680 & t3) >>> 16), this._bufferBuilder.append((65280 & t3) >>> 8), this._bufferBuilder.append(255 & t3), this._bufferBuilder.append((4278190080 & n2) >>> 24), this._bufferBuilder.append((16711680 & n2) >>> 16), this._bufferBuilder.append((65280 & n2) >>> 8), this._bufferBuilder.append(255 & n2);
		      }
		      pack_int8(e3) {
		        this._bufferBuilder.append(255 & e3);
		      }
		      pack_int16(e3) {
		        this._bufferBuilder.append((65280 & e3) >> 8), this._bufferBuilder.append(255 & e3);
		      }
		      pack_int32(e3) {
		        this._bufferBuilder.append(e3 >>> 24 & 255), this._bufferBuilder.append((16711680 & e3) >>> 16), this._bufferBuilder.append((65280 & e3) >>> 8), this._bufferBuilder.append(255 & e3);
		      }
		      pack_int64(e3) {
		        const t3 = Math.floor(e3 / 2 ** 32), n2 = e3 % 2 ** 32;
		        this._bufferBuilder.append((4278190080 & t3) >>> 24), this._bufferBuilder.append((16711680 & t3) >>> 16), this._bufferBuilder.append((65280 & t3) >>> 8), this._bufferBuilder.append(255 & t3), this._bufferBuilder.append((4278190080 & n2) >>> 24), this._bufferBuilder.append((16711680 & n2) >>> 16), this._bufferBuilder.append((65280 & n2) >>> 8), this._bufferBuilder.append(255 & n2);
		      }
		      constructor() {
		        this._bufferBuilder = new N(), this._textEncoder = new TextEncoder();
		      }
		    }
		    let V = true, G = true;
		    function J(e3, t3, n2) {
		      const r2 = e3.match(t3);
		      return r2 && r2.length >= n2 && parseFloat(r2[n2], 10);
		    }
		    function H(e3, t3, n2) {
		      if (!e3.RTCPeerConnection) return;
		      if (!Object.getOwnPropertyDescriptor(EventTarget.prototype, "addEventListener").writable) return void X("Unable to polyfill events");
		      const r2 = e3.RTCPeerConnection.prototype, o2 = r2.addEventListener;
		      r2.addEventListener = function(e4, r3) {
		        if (e4 !== t3) return o2.apply(this, arguments);
		        const i3 = (e5) => {
		          const t4 = n2(e5);
		          t4 && (r3.handleEvent ? r3.handleEvent(t4) : r3(t4));
		        };
		        return this._eventMap = this._eventMap || {}, this._eventMap[t3] || (this._eventMap[t3] = /* @__PURE__ */ new Map()), this._eventMap[t3].set(r3, i3), o2.apply(this, [e4, i3]);
		      };
		      const i2 = r2.removeEventListener;
		      r2.removeEventListener = function(e4, n3) {
		        if (e4 !== t3 || !this._eventMap || !this._eventMap[t3]) return i2.apply(this, arguments);
		        if (!this._eventMap[t3].has(n3)) return i2.apply(this, arguments);
		        const r3 = this._eventMap[t3].get(n3);
		        return this._eventMap[t3].delete(n3), 0 === this._eventMap[t3].size && delete this._eventMap[t3], 0 === Object.keys(this._eventMap).length && delete this._eventMap, i2.apply(this, [e4, r3]);
		      }, Object.defineProperty(r2, "on" + t3, { get() {
		        return this["_on" + t3];
		      }, set(e4) {
		        this["_on" + t3] && (this.removeEventListener(t3, this["_on" + t3]), delete this["_on" + t3]), e4 && this.addEventListener(t3, this["_on" + t3] = e4);
		      }, enumerable: true, configurable: true });
		    }
		    function K(e3) {
		      return "boolean" != typeof e3 ? new Error("Argument type: " + typeof e3 + ". Please use a boolean.") : (V = e3, e3 ? "adapter.js logging disabled" : "adapter.js logging enabled");
		    }
		    function Y(e3) {
		      return "boolean" != typeof e3 ? new Error("Argument type: " + typeof e3 + ". Please use a boolean.") : (G = !e3, "adapter.js deprecation warnings " + (e3 ? "disabled" : "enabled"));
		    }
		    function X() {
		      if ("object" == typeof window) {
		        if (V) return;
		        "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
		      }
		    }
		    function q(e3, t3) {
		      G && console.warn(e3 + " is deprecated, please use " + t3 + " instead.");
		    }
		    function Q(e3) {
		      return "[object Object]" === Object.prototype.toString.call(e3);
		    }
		    function Z(e3) {
		      return Q(e3) ? Object.keys(e3).reduce(function(t3, n2) {
		        const r2 = Q(e3[n2]), o2 = r2 ? Z(e3[n2]) : e3[n2], i2 = r2 && !Object.keys(o2).length;
		        return void 0 === o2 || i2 ? t3 : Object.assign(t3, { [n2]: o2 });
		      }, {}) : e3;
		    }
		    function ee(e3, t3, n2) {
		      t3 && !n2.has(t3.id) && (n2.set(t3.id, t3), Object.keys(t3).forEach((r2) => {
		        r2.endsWith("Id") ? ee(e3, e3.get(t3[r2]), n2) : r2.endsWith("Ids") && t3[r2].forEach((t4) => {
		          ee(e3, e3.get(t4), n2);
		        });
		      }));
		    }
		    function te(e3, t3, n2) {
		      const r2 = n2 ? "outbound-rtp" : "inbound-rtp", o2 = /* @__PURE__ */ new Map();
		      if (null === t3) return o2;
		      const i2 = [];
		      return e3.forEach((e4) => {
		        "track" === e4.type && e4.trackIdentifier === t3.id && i2.push(e4);
		      }), i2.forEach((t4) => {
		        e3.forEach((n3) => {
		          n3.type === r2 && n3.trackId === t4.id && ee(e3, n3, o2);
		        });
		      }), o2;
		    }
		    const ne = X;
		    function re(e3, t3) {
		      const n2 = e3 && e3.navigator;
		      if (!n2.mediaDevices) return;
		      const r2 = function(e4) {
		        if ("object" != typeof e4 || e4.mandatory || e4.optional) return e4;
		        const t4 = {};
		        return Object.keys(e4).forEach((n3) => {
		          if ("require" === n3 || "advanced" === n3 || "mediaSource" === n3) return;
		          const r3 = "object" == typeof e4[n3] ? e4[n3] : { ideal: e4[n3] };
		          void 0 !== r3.exact && "number" == typeof r3.exact && (r3.min = r3.max = r3.exact);
		          const o3 = function(e5, t5) {
		            return e5 ? e5 + t5.charAt(0).toUpperCase() + t5.slice(1) : "deviceId" === t5 ? "sourceId" : t5;
		          };
		          if (void 0 !== r3.ideal) {
		            t4.optional = t4.optional || [];
		            let e5 = {};
		            "number" == typeof r3.ideal ? (e5[o3("min", n3)] = r3.ideal, t4.optional.push(e5), e5 = {}, e5[o3("max", n3)] = r3.ideal, t4.optional.push(e5)) : (e5[o3("", n3)] = r3.ideal, t4.optional.push(e5));
		          }
		          void 0 !== r3.exact && "number" != typeof r3.exact ? (t4.mandatory = t4.mandatory || {}, t4.mandatory[o3("", n3)] = r3.exact) : ["min", "max"].forEach((e5) => {
		            void 0 !== r3[e5] && (t4.mandatory = t4.mandatory || {}, t4.mandatory[o3(e5, n3)] = r3[e5]);
		          });
		        }), e4.advanced && (t4.optional = (t4.optional || []).concat(e4.advanced)), t4;
		      }, o2 = function(e4, o3) {
		        if (t3.version >= 61) return o3(e4);
		        if ((e4 = JSON.parse(JSON.stringify(e4))) && "object" == typeof e4.audio) {
		          const t4 = function(e5, t5, n3) {
		            t5 in e5 && !(n3 in e5) && (e5[n3] = e5[t5], delete e5[t5]);
		          };
		          t4((e4 = JSON.parse(JSON.stringify(e4))).audio, "autoGainControl", "googAutoGainControl"), t4(e4.audio, "noiseSuppression", "googNoiseSuppression"), e4.audio = r2(e4.audio);
		        }
		        if (e4 && "object" == typeof e4.video) {
		          let i3 = e4.video.facingMode;
		          i3 = i3 && ("object" == typeof i3 ? i3 : { ideal: i3 });
		          const s2 = t3.version < 66;
		          if (i3 && ("user" === i3.exact || "environment" === i3.exact || "user" === i3.ideal || "environment" === i3.ideal) && (!n2.mediaDevices.getSupportedConstraints || !n2.mediaDevices.getSupportedConstraints().facingMode || s2)) {
		            let t4;
		            if (delete e4.video.facingMode, "environment" === i3.exact || "environment" === i3.ideal ? t4 = ["back", "rear"] : "user" !== i3.exact && "user" !== i3.ideal || (t4 = ["front"]), t4) return n2.mediaDevices.enumerateDevices().then((n3) => {
		              let s3 = (n3 = n3.filter((e5) => "videoinput" === e5.kind)).find((e5) => t4.some((t5) => e5.label.toLowerCase().includes(t5)));
		              return !s3 && n3.length && t4.includes("back") && (s3 = n3[n3.length - 1]), s3 && (e4.video.deviceId = i3.exact ? { exact: s3.deviceId } : { ideal: s3.deviceId }), e4.video = r2(e4.video), ne("chrome: " + JSON.stringify(e4)), o3(e4);
		            });
		          }
		          e4.video = r2(e4.video);
		        }
		        return ne("chrome: " + JSON.stringify(e4)), o3(e4);
		      }, i2 = function(e4) {
		        return t3.version >= 64 ? e4 : { name: { PermissionDeniedError: "NotAllowedError", PermissionDismissedError: "NotAllowedError", InvalidStateError: "NotAllowedError", DevicesNotFoundError: "NotFoundError", ConstraintNotSatisfiedError: "OverconstrainedError", TrackStartError: "NotReadableError", MediaDeviceFailedDueToShutdown: "NotAllowedError", MediaDeviceKillSwitchOn: "NotAllowedError", TabCaptureError: "AbortError", ScreenCaptureError: "AbortError", DeviceCaptureError: "AbortError" }[e4.name] || e4.name, message: e4.message, constraint: e4.constraint || e4.constraintName, toString() {
		          return this.name + (this.message && ": ") + this.message;
		        } };
		      };
		      if (n2.getUserMedia = function(e4, t4, r3) {
		        o2(e4, (e5) => {
		          n2.webkitGetUserMedia(e5, t4, (e6) => {
		            r3 && r3(i2(e6));
		          });
		        });
		      }.bind(n2), n2.mediaDevices.getUserMedia) {
		        const e4 = n2.mediaDevices.getUserMedia.bind(n2.mediaDevices);
		        n2.mediaDevices.getUserMedia = function(t4) {
		          return o2(t4, (t5) => e4(t5).then((e5) => {
		            if (t5.audio && !e5.getAudioTracks().length || t5.video && !e5.getVideoTracks().length) throw e5.getTracks().forEach((e6) => {
		              e6.stop();
		            }), new DOMException("", "NotFoundError");
		            return e5;
		          }, (e5) => Promise.reject(i2(e5))));
		        };
		      }
		    }
		    function oe(e3) {
		      e3.MediaStream = e3.MediaStream || e3.webkitMediaStream;
		    }
		    function ie(e3, t3) {
		      if (!(t3.version > 102)) if ("object" == typeof e3 && e3.RTCPeerConnection && !("ontrack" in e3.RTCPeerConnection.prototype)) {
		        Object.defineProperty(e3.RTCPeerConnection.prototype, "ontrack", { get() {
		          return this._ontrack;
		        }, set(e4) {
		          this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e4);
		        }, enumerable: true, configurable: true });
		        const t4 = e3.RTCPeerConnection.prototype.setRemoteDescription;
		        e3.RTCPeerConnection.prototype.setRemoteDescription = function() {
		          return this._ontrackpoly || (this._ontrackpoly = (t5) => {
		            t5.stream.addEventListener("addtrack", (n2) => {
		              let r2;
		              r2 = e3.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e4) => e4.track && e4.track.id === n2.track.id) : { track: n2.track };
		              const o2 = new Event("track");
		              o2.track = n2.track, o2.receiver = r2, o2.transceiver = { receiver: r2 }, o2.streams = [t5.stream], this.dispatchEvent(o2);
		            }), t5.stream.getTracks().forEach((n2) => {
		              let r2;
		              r2 = e3.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e4) => e4.track && e4.track.id === n2.id) : { track: n2 };
		              const o2 = new Event("track");
		              o2.track = n2, o2.receiver = r2, o2.transceiver = { receiver: r2 }, o2.streams = [t5.stream], this.dispatchEvent(o2);
		            });
		          }, this.addEventListener("addstream", this._ontrackpoly)), t4.apply(this, arguments);
		        };
		      } else H(e3, "track", (e4) => (e4.transceiver || Object.defineProperty(e4, "transceiver", { value: { receiver: e4.receiver } }), e4));
		    }
		    function se(e3) {
		      if ("object" == typeof e3 && e3.RTCPeerConnection && !("getSenders" in e3.RTCPeerConnection.prototype) && "createDTMFSender" in e3.RTCPeerConnection.prototype) {
		        const t3 = function(e4, t4) {
		          return { track: t4, get dtmf() {
		            return void 0 === this._dtmf && ("audio" === t4.kind ? this._dtmf = e4.createDTMFSender(t4) : this._dtmf = null), this._dtmf;
		          }, _pc: e4 };
		        };
		        if (!e3.RTCPeerConnection.prototype.getSenders) {
		          e3.RTCPeerConnection.prototype.getSenders = function() {
		            return this._senders = this._senders || [], this._senders.slice();
		          };
		          const n3 = e3.RTCPeerConnection.prototype.addTrack;
		          e3.RTCPeerConnection.prototype.addTrack = function(e4, r4) {
		            let o2 = n3.apply(this, arguments);
		            return o2 || (o2 = t3(this, e4), this._senders.push(o2)), o2;
		          };
		          const r3 = e3.RTCPeerConnection.prototype.removeTrack;
		          e3.RTCPeerConnection.prototype.removeTrack = function(e4) {
		            r3.apply(this, arguments);
		            const t4 = this._senders.indexOf(e4);
		            -1 !== t4 && this._senders.splice(t4, 1);
		          };
		        }
		        const n2 = e3.RTCPeerConnection.prototype.addStream;
		        e3.RTCPeerConnection.prototype.addStream = function(e4) {
		          this._senders = this._senders || [], n2.apply(this, [e4]), e4.getTracks().forEach((e5) => {
		            this._senders.push(t3(this, e5));
		          });
		        };
		        const r2 = e3.RTCPeerConnection.prototype.removeStream;
		        e3.RTCPeerConnection.prototype.removeStream = function(e4) {
		          this._senders = this._senders || [], r2.apply(this, [e4]), e4.getTracks().forEach((e5) => {
		            const t4 = this._senders.find((t5) => t5.track === e5);
		            t4 && this._senders.splice(this._senders.indexOf(t4), 1);
		          });
		        };
		      } else if ("object" == typeof e3 && e3.RTCPeerConnection && "getSenders" in e3.RTCPeerConnection.prototype && "createDTMFSender" in e3.RTCPeerConnection.prototype && e3.RTCRtpSender && !("dtmf" in e3.RTCRtpSender.prototype)) {
		        const t3 = e3.RTCPeerConnection.prototype.getSenders;
		        e3.RTCPeerConnection.prototype.getSenders = function() {
		          const e4 = t3.apply(this, []);
		          return e4.forEach((e5) => e5._pc = this), e4;
		        }, Object.defineProperty(e3.RTCRtpSender.prototype, "dtmf", { get() {
		          return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
		        } });
		      }
		    }
		    function ae(e3, t3) {
		      if (t3.version >= 67) return;
		      if (!("object" == typeof e3 && e3.RTCPeerConnection && e3.RTCRtpSender && e3.RTCRtpReceiver)) return;
		      if (!("getStats" in e3.RTCRtpSender.prototype)) {
		        const t4 = e3.RTCPeerConnection.prototype.getSenders;
		        t4 && (e3.RTCPeerConnection.prototype.getSenders = function() {
		          const e4 = t4.apply(this, []);
		          return e4.forEach((e5) => e5._pc = this), e4;
		        });
		        const n3 = e3.RTCPeerConnection.prototype.addTrack;
		        n3 && (e3.RTCPeerConnection.prototype.addTrack = function() {
		          const e4 = n3.apply(this, arguments);
		          return e4._pc = this, e4;
		        }), e3.RTCRtpSender.prototype.getStats = function() {
		          const e4 = this;
		          return this._pc.getStats().then((t5) => te(t5, e4.track, true));
		        };
		      }
		      if (!("getStats" in e3.RTCRtpReceiver.prototype)) {
		        const t4 = e3.RTCPeerConnection.prototype.getReceivers;
		        t4 && (e3.RTCPeerConnection.prototype.getReceivers = function() {
		          const e4 = t4.apply(this, []);
		          return e4.forEach((e5) => e5._pc = this), e4;
		        }), H(e3, "track", (e4) => (e4.receiver._pc = e4.srcElement, e4)), e3.RTCRtpReceiver.prototype.getStats = function() {
		          const e4 = this;
		          return this._pc.getStats().then((t5) => te(t5, e4.track, false));
		        };
		      }
		      if (!("getStats" in e3.RTCRtpSender.prototype) || !("getStats" in e3.RTCRtpReceiver.prototype)) return;
		      const n2 = e3.RTCPeerConnection.prototype.getStats;
		      e3.RTCPeerConnection.prototype.getStats = function() {
		        if (arguments.length > 0 && arguments[0] instanceof e3.MediaStreamTrack) {
		          const e4 = arguments[0];
		          let t4, n3, r2;
		          return this.getSenders().forEach((n4) => {
		            n4.track === e4 && (t4 ? r2 = true : t4 = n4);
		          }), this.getReceivers().forEach((t5) => (t5.track === e4 && (n3 ? r2 = true : n3 = t5), t5.track === e4)), r2 || t4 && n3 ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t4 ? t4.getStats() : n3 ? n3.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
		        }
		        return n2.apply(this, arguments);
		      };
		    }
		    function ce(e3) {
		      e3.RTCPeerConnection.prototype.getLocalStreams = function() {
		        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((e4) => this._shimmedLocalStreams[e4][0]);
		      };
		      const t3 = e3.RTCPeerConnection.prototype.addTrack;
		      e3.RTCPeerConnection.prototype.addTrack = function(e4, n3) {
		        if (!n3) return t3.apply(this, arguments);
		        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
		        const r3 = t3.apply(this, arguments);
		        return this._shimmedLocalStreams[n3.id] ? -1 === this._shimmedLocalStreams[n3.id].indexOf(r3) && this._shimmedLocalStreams[n3.id].push(r3) : this._shimmedLocalStreams[n3.id] = [n3, r3], r3;
		      };
		      const n2 = e3.RTCPeerConnection.prototype.addStream;
		      e3.RTCPeerConnection.prototype.addStream = function(e4) {
		        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e4.getTracks().forEach((e5) => {
		          if (this.getSenders().find((t5) => t5.track === e5)) throw new DOMException("Track already exists.", "InvalidAccessError");
		        });
		        const t4 = this.getSenders();
		        n2.apply(this, arguments);
		        const r3 = this.getSenders().filter((e5) => -1 === t4.indexOf(e5));
		        this._shimmedLocalStreams[e4.id] = [e4].concat(r3);
		      };
		      const r2 = e3.RTCPeerConnection.prototype.removeStream;
		      e3.RTCPeerConnection.prototype.removeStream = function(e4) {
		        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e4.id], r2.apply(this, arguments);
		      };
		      const o2 = e3.RTCPeerConnection.prototype.removeTrack;
		      e3.RTCPeerConnection.prototype.removeTrack = function(e4) {
		        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e4 && Object.keys(this._shimmedLocalStreams).forEach((t4) => {
		          const n3 = this._shimmedLocalStreams[t4].indexOf(e4);
		          -1 !== n3 && this._shimmedLocalStreams[t4].splice(n3, 1), 1 === this._shimmedLocalStreams[t4].length && delete this._shimmedLocalStreams[t4];
		        }), o2.apply(this, arguments);
		      };
		    }
		    function ue(e3, t3) {
		      if (!e3.RTCPeerConnection) return;
		      if (e3.RTCPeerConnection.prototype.addTrack && t3.version >= 65) return ce(e3);
		      const n2 = e3.RTCPeerConnection.prototype.getLocalStreams;
		      e3.RTCPeerConnection.prototype.getLocalStreams = function() {
		        const e4 = n2.apply(this);
		        return this._reverseStreams = this._reverseStreams || {}, e4.map((e5) => this._reverseStreams[e5.id]);
		      };
		      const r2 = e3.RTCPeerConnection.prototype.addStream;
		      e3.RTCPeerConnection.prototype.addStream = function(t4) {
		        if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t4.getTracks().forEach((e4) => {
		          if (this.getSenders().find((t5) => t5.track === e4)) throw new DOMException("Track already exists.", "InvalidAccessError");
		        }), !this._reverseStreams[t4.id]) {
		          const n3 = new e3.MediaStream(t4.getTracks());
		          this._streams[t4.id] = n3, this._reverseStreams[n3.id] = t4, t4 = n3;
		        }
		        r2.apply(this, [t4]);
		      };
		      const o2 = e3.RTCPeerConnection.prototype.removeStream;
		      function i2(e4, t4) {
		        let n3 = t4.sdp;
		        return Object.keys(e4._reverseStreams || []).forEach((t5) => {
		          const r3 = e4._reverseStreams[t5], o3 = e4._streams[r3.id];
		          n3 = n3.replace(new RegExp(o3.id, "g"), r3.id);
		        }), new RTCSessionDescription({ type: t4.type, sdp: n3 });
		      }
		      e3.RTCPeerConnection.prototype.removeStream = function(e4) {
		        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, o2.apply(this, [this._streams[e4.id] || e4]), delete this._reverseStreams[this._streams[e4.id] ? this._streams[e4.id].id : e4.id], delete this._streams[e4.id];
		      }, e3.RTCPeerConnection.prototype.addTrack = function(t4, n3) {
		        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
		        const r3 = [].slice.call(arguments, 1);
		        if (1 !== r3.length || !r3[0].getTracks().find((e4) => e4 === t4)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
		        if (this.getSenders().find((e4) => e4.track === t4)) throw new DOMException("Track already exists.", "InvalidAccessError");
		        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
		        const o3 = this._streams[n3.id];
		        if (o3) o3.addTrack(t4), Promise.resolve().then(() => {
		          this.dispatchEvent(new Event("negotiationneeded"));
		        });
		        else {
		          const r4 = new e3.MediaStream([t4]);
		          this._streams[n3.id] = r4, this._reverseStreams[r4.id] = n3, this.addStream(r4);
		        }
		        return this.getSenders().find((e4) => e4.track === t4);
		      }, ["createOffer", "createAnswer"].forEach(function(t4) {
		        const n3 = e3.RTCPeerConnection.prototype[t4], r3 = { [t4]() {
		          const e4 = arguments;
		          return arguments.length && "function" == typeof arguments[0] ? n3.apply(this, [(t5) => {
		            const n4 = i2(this, t5);
		            e4[0].apply(null, [n4]);
		          }, (t5) => {
		            e4[1] && e4[1].apply(null, t5);
		          }, arguments[2]]) : n3.apply(this, arguments).then((e5) => i2(this, e5));
		        } };
		        e3.RTCPeerConnection.prototype[t4] = r3[t4];
		      });
		      const s2 = e3.RTCPeerConnection.prototype.setLocalDescription;
		      e3.RTCPeerConnection.prototype.setLocalDescription = function() {
		        return arguments.length && arguments[0].type ? (arguments[0] = (function(e4, t4) {
		          let n3 = t4.sdp;
		          return Object.keys(e4._reverseStreams || []).forEach((t5) => {
		            const r3 = e4._reverseStreams[t5], o3 = e4._streams[r3.id];
		            n3 = n3.replace(new RegExp(r3.id, "g"), o3.id);
		          }), new RTCSessionDescription({ type: t4.type, sdp: n3 });
		        })(this, arguments[0]), s2.apply(this, arguments)) : s2.apply(this, arguments);
		      };
		      const a2 = Object.getOwnPropertyDescriptor(e3.RTCPeerConnection.prototype, "localDescription");
		      Object.defineProperty(e3.RTCPeerConnection.prototype, "localDescription", { get() {
		        const e4 = a2.get.apply(this);
		        return "" === e4.type ? e4 : i2(this, e4);
		      } }), e3.RTCPeerConnection.prototype.removeTrack = function(e4) {
		        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
		        if (!e4._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
		        if (e4._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
		        let t4;
		        this._streams = this._streams || {}, Object.keys(this._streams).forEach((n3) => {
		          this._streams[n3].getTracks().find((t5) => e4.track === t5) && (t4 = this._streams[n3]);
		        }), t4 && (1 === t4.getTracks().length ? this.removeStream(this._reverseStreams[t4.id]) : t4.removeTrack(e4.track), this.dispatchEvent(new Event("negotiationneeded")));
		      };
		    }
		    function le(e3, t3) {
		      !e3.RTCPeerConnection && e3.webkitRTCPeerConnection && (e3.RTCPeerConnection = e3.webkitRTCPeerConnection), e3.RTCPeerConnection && t3.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t4) {
		        const n2 = e3.RTCPeerConnection.prototype[t4], r2 = { [t4]() {
		          return arguments[0] = new ("addIceCandidate" === t4 ? e3.RTCIceCandidate : e3.RTCSessionDescription)(arguments[0]), n2.apply(this, arguments);
		        } };
		        e3.RTCPeerConnection.prototype[t4] = r2[t4];
		      });
		    }
		    function pe(e3, t3) {
		      t3.version > 102 || H(e3, "negotiationneeded", (e4) => {
		        const n2 = e4.target;
		        if (!(t3.version < 72 || n2.getConfiguration && "plan-b" === n2.getConfiguration().sdpSemantics) || "stable" === n2.signalingState) return e4;
		      });
		    }
		    function he(e3, t3) {
		      const n2 = e3 && e3.navigator, r2 = e3 && e3.MediaStreamTrack;
		      if (n2.getUserMedia = function(e4, t4, r3) {
		        q("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n2.mediaDevices.getUserMedia(e4).then(t4, r3);
		      }, !(t3.version > 55 && "autoGainControl" in n2.mediaDevices.getSupportedConstraints())) {
		        const e4 = function(e5, t5, n3) {
		          t5 in e5 && !(n3 in e5) && (e5[n3] = e5[t5], delete e5[t5]);
		        }, t4 = n2.mediaDevices.getUserMedia.bind(n2.mediaDevices);
		        if (n2.mediaDevices.getUserMedia = function(n3) {
		          return "object" == typeof n3 && "object" == typeof n3.audio && (n3 = JSON.parse(JSON.stringify(n3)), e4(n3.audio, "autoGainControl", "mozAutoGainControl"), e4(n3.audio, "noiseSuppression", "mozNoiseSuppression")), t4(n3);
		        }, r2 && r2.prototype.getSettings) {
		          const t5 = r2.prototype.getSettings;
		          r2.prototype.getSettings = function() {
		            const n3 = t5.apply(this, arguments);
		            return e4(n3, "mozAutoGainControl", "autoGainControl"), e4(n3, "mozNoiseSuppression", "noiseSuppression"), n3;
		          };
		        }
		        if (r2 && r2.prototype.applyConstraints) {
		          const t5 = r2.prototype.applyConstraints;
		          r2.prototype.applyConstraints = function(n3) {
		            return "audio" === this.kind && "object" == typeof n3 && (n3 = JSON.parse(JSON.stringify(n3)), e4(n3, "autoGainControl", "mozAutoGainControl"), e4(n3, "noiseSuppression", "mozNoiseSuppression")), t5.apply(this, [n3]);
		          };
		        }
		      }
		    }
		    function de(e3, t3) {
		      e3.navigator.mediaDevices && "getDisplayMedia" in e3.navigator.mediaDevices || e3.navigator.mediaDevices && (e3.navigator.mediaDevices.getDisplayMedia = function(n2) {
		        if (!n2 || !n2.video) {
		          const e4 = new DOMException("getDisplayMedia without video constraints is undefined");
		          return e4.name = "NotFoundError", e4.code = 8, Promise.reject(e4);
		        }
		        return true === n2.video ? n2.video = { mediaSource: t3 } : n2.video.mediaSource = t3, e3.navigator.mediaDevices.getUserMedia(n2);
		      });
		    }
		    function fe(e3) {
		      "object" == typeof e3 && e3.RTCTrackEvent && "receiver" in e3.RTCTrackEvent.prototype && !("transceiver" in e3.RTCTrackEvent.prototype) && Object.defineProperty(e3.RTCTrackEvent.prototype, "transceiver", { get() {
		        return { receiver: this.receiver };
		      } });
		    }
		    function ge(e3, t3) {
		      "object" == typeof e3 && (e3.RTCPeerConnection || e3.mozRTCPeerConnection) && (!e3.RTCPeerConnection && e3.mozRTCPeerConnection && (e3.RTCPeerConnection = e3.mozRTCPeerConnection), t3.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t4) {
		        const n2 = e3.RTCPeerConnection.prototype[t4], r2 = { [t4]() {
		          return arguments[0] = new ("addIceCandidate" === t4 ? e3.RTCIceCandidate : e3.RTCSessionDescription)(arguments[0]), n2.apply(this, arguments);
		        } };
		        e3.RTCPeerConnection.prototype[t4] = r2[t4];
		      }));
		    }
		    function ye(e3, t3) {
		      if ("object" != typeof e3 || !e3.RTCPeerConnection && !e3.mozRTCPeerConnection) return;
		      if (t3.version >= 151) return;
		      const n2 = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }, r2 = e3.RTCPeerConnection.prototype.getStats;
		      e3.RTCPeerConnection.prototype.getStats = function() {
		        const [e4, o2, i2] = arguments;
		        return "closed" === this.signalingState ? Promise.resolve(/* @__PURE__ */ new Map()) : r2.apply(this, [e4 || null]).then((e5) => {
		          if (t3.version < 53 && !o2) try {
		            e5.forEach((e6) => {
		              e6.type = n2[e6.type] || e6.type;
		            });
		          } catch (t4) {
		            if ("TypeError" !== t4.name) throw t4;
		            e5.forEach((t5, r3) => {
		              e5.set(r3, Object.assign({}, t5, { type: n2[t5.type] || t5.type }));
		            });
		          }
		          return e5;
		        }).then(o2, i2);
		      };
		    }
		    function me(e3) {
		      if ("object" != typeof e3 || !e3.RTCPeerConnection || !e3.RTCRtpSender) return;
		      if (e3.RTCRtpSender && "getStats" in e3.RTCRtpSender.prototype) return;
		      const t3 = e3.RTCPeerConnection.prototype.getSenders;
		      t3 && (e3.RTCPeerConnection.prototype.getSenders = function() {
		        const e4 = t3.apply(this, []);
		        return e4.forEach((e5) => e5._pc = this), e4;
		      });
		      const n2 = e3.RTCPeerConnection.prototype.addTrack;
		      n2 && (e3.RTCPeerConnection.prototype.addTrack = function() {
		        const e4 = n2.apply(this, arguments);
		        return e4._pc = this, e4;
		      }), e3.RTCRtpSender.prototype.getStats = function() {
		        return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
		      };
		    }
		    function ve(e3) {
		      if ("object" != typeof e3 || !e3.RTCPeerConnection || !e3.RTCRtpSender) return;
		      if (e3.RTCRtpSender && "getStats" in e3.RTCRtpReceiver.prototype) return;
		      const t3 = e3.RTCPeerConnection.prototype.getReceivers;
		      t3 && (e3.RTCPeerConnection.prototype.getReceivers = function() {
		        const e4 = t3.apply(this, []);
		        return e4.forEach((e5) => e5._pc = this), e4;
		      }), H(e3, "track", (e4) => (e4.receiver._pc = e4.srcElement, e4)), e3.RTCRtpReceiver.prototype.getStats = function() {
		        return this._pc.getStats(this.track);
		      };
		    }
		    function be(e3) {
		      e3.RTCPeerConnection && !("removeStream" in e3.RTCPeerConnection.prototype) && (e3.RTCPeerConnection.prototype.removeStream = function(e4) {
		        q("removeStream", "removeTrack"), this.getSenders().forEach((t3) => {
		          t3.track && e4.getTracks().includes(t3.track) && this.removeTrack(t3);
		        });
		      });
		    }
		    function we(e3) {
		      e3.DataChannel && !e3.RTCDataChannel && (e3.RTCDataChannel = e3.DataChannel);
		    }
		    function Ce(e3) {
		      if ("object" != typeof e3 || !e3.RTCPeerConnection) return;
		      const t3 = e3.RTCPeerConnection.prototype.addTransceiver;
		      t3 && (e3.RTCPeerConnection.prototype.addTransceiver = function() {
		        this.setParametersPromises = [];
		        let e4 = arguments[1] && arguments[1].sendEncodings;
		        void 0 === e4 && (e4 = []), e4 = [...e4];
		        const n2 = e4.length > 0;
		        n2 && e4.forEach((e5) => {
		          if ("rid" in e5 && !/^[a-z0-9]{0,16}$/i.test(e5.rid)) throw new TypeError("Invalid RID value provided.");
		          if ("scaleResolutionDownBy" in e5 && !(parseFloat(e5.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
		          if ("maxFramerate" in e5 && !(parseFloat(e5.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
		        });
		        const r2 = t3.apply(this, arguments);
		        if (n2) {
		          const { sender: t4 } = r2, n3 = t4.getParameters();
		          (!("encodings" in n3) || 1 === n3.encodings.length && 0 === Object.keys(n3.encodings[0]).length) && (n3.encodings = e4, t4.sendEncodings = e4, this.setParametersPromises.push(t4.setParameters(n3).then(() => {
		            delete t4.sendEncodings;
		          }).catch(() => {
		            delete t4.sendEncodings;
		          })));
		        }
		        return r2;
		      });
		    }
		    function _e(e3) {
		      if ("object" != typeof e3 || !e3.RTCRtpSender) return;
		      const t3 = e3.RTCRtpSender.prototype.getParameters;
		      t3 && (e3.RTCRtpSender.prototype.getParameters = function() {
		        const e4 = t3.apply(this, arguments);
		        return "encodings" in e4 || (e4.encodings = [].concat(this.sendEncodings || [{}])), e4;
		      });
		    }
		    function Se(e3) {
		      if ("object" != typeof e3 || !e3.RTCPeerConnection) return;
		      const t3 = e3.RTCPeerConnection.prototype.createOffer;
		      e3.RTCPeerConnection.prototype.createOffer = function() {
		        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t3.apply(this, arguments)).finally(() => {
		          this.setParametersPromises = [];
		        }) : t3.apply(this, arguments);
		      };
		    }
		    function Te(e3) {
		      if ("object" != typeof e3 || !e3.RTCPeerConnection) return;
		      const t3 = e3.RTCPeerConnection.prototype.createAnswer;
		      e3.RTCPeerConnection.prototype.createAnswer = function() {
		        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t3.apply(this, arguments)).finally(() => {
		          this.setParametersPromises = [];
		        }) : t3.apply(this, arguments);
		      };
		    }
		    function Pe(e3) {
		      if ("object" == typeof e3 && e3.RTCPeerConnection) {
		        if ("getLocalStreams" in e3.RTCPeerConnection.prototype || (e3.RTCPeerConnection.prototype.getLocalStreams = function() {
		          return this._localStreams || (this._localStreams = []), this._localStreams;
		        }), !("addStream" in e3.RTCPeerConnection.prototype)) {
		          const t3 = e3.RTCPeerConnection.prototype.addTrack;
		          e3.RTCPeerConnection.prototype.addStream = function(e4) {
		            this._localStreams || (this._localStreams = []), this._localStreams.includes(e4) || this._localStreams.push(e4), e4.getAudioTracks().forEach((n2) => t3.call(this, n2, e4)), e4.getVideoTracks().forEach((n2) => t3.call(this, n2, e4));
		          }, e3.RTCPeerConnection.prototype.addTrack = function(e4, ...n2) {
		            return n2 && n2.forEach((e5) => {
		              this._localStreams ? this._localStreams.includes(e5) || this._localStreams.push(e5) : this._localStreams = [e5];
		            }), t3.apply(this, arguments);
		          };
		        }
		        "removeStream" in e3.RTCPeerConnection.prototype || (e3.RTCPeerConnection.prototype.removeStream = function(e4) {
		          this._localStreams || (this._localStreams = []);
		          const t3 = this._localStreams.indexOf(e4);
		          if (-1 === t3) return;
		          this._localStreams.splice(t3, 1);
		          const n2 = e4.getTracks();
		          this.getSenders().forEach((e5) => {
		            n2.includes(e5.track) && this.removeTrack(e5);
		          });
		        });
		      }
		    }
		    function ke(e3) {
		      if ("object" == typeof e3 && e3.RTCPeerConnection && ("getRemoteStreams" in e3.RTCPeerConnection.prototype || (e3.RTCPeerConnection.prototype.getRemoteStreams = function() {
		        return this._remoteStreams ? this._remoteStreams : [];
		      }), !("onaddstream" in e3.RTCPeerConnection.prototype))) {
		        Object.defineProperty(e3.RTCPeerConnection.prototype, "onaddstream", { get() {
		          return this._onaddstream;
		        }, set(e4) {
		          this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e4), this.addEventListener("track", this._onaddstreampoly = (e5) => {
		            e5.streams.forEach((e6) => {
		              if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(e6)) return;
		              this._remoteStreams.push(e6);
		              const t4 = new Event("addstream");
		              t4.stream = e6, this.dispatchEvent(t4);
		            });
		          });
		        } });
		        const t3 = e3.RTCPeerConnection.prototype.setRemoteDescription;
		        e3.RTCPeerConnection.prototype.setRemoteDescription = function() {
		          const e4 = this;
		          return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t4) {
		            t4.streams.forEach((t5) => {
		              if (e4._remoteStreams || (e4._remoteStreams = []), e4._remoteStreams.indexOf(t5) >= 0) return;
		              e4._remoteStreams.push(t5);
		              const n2 = new Event("addstream");
		              n2.stream = t5, e4.dispatchEvent(n2);
		            });
		          }), t3.apply(e4, arguments);
		        };
		      }
		    }
		    function Ee(e3) {
		      if ("object" != typeof e3 || !e3.RTCPeerConnection) return;
		      const t3 = e3.RTCPeerConnection.prototype, n2 = t3.createOffer, r2 = t3.createAnswer, o2 = t3.setLocalDescription, i2 = t3.setRemoteDescription, s2 = t3.addIceCandidate;
		      t3.createOffer = function(e4, t4) {
		        const r3 = arguments.length >= 2 ? arguments[2] : arguments[0], o3 = n2.apply(this, [r3]);
		        return t4 ? (o3.then(e4, t4), Promise.resolve()) : o3;
		      }, t3.createAnswer = function(e4, t4) {
		        const n3 = arguments.length >= 2 ? arguments[2] : arguments[0], o3 = r2.apply(this, [n3]);
		        return t4 ? (o3.then(e4, t4), Promise.resolve()) : o3;
		      };
		      let a2 = function(e4, t4, n3) {
		        const r3 = o2.apply(this, [e4]);
		        return n3 ? (r3.then(t4, n3), Promise.resolve()) : r3;
		      };
		      t3.setLocalDescription = a2, a2 = function(e4, t4, n3) {
		        const r3 = i2.apply(this, [e4]);
		        return n3 ? (r3.then(t4, n3), Promise.resolve()) : r3;
		      }, t3.setRemoteDescription = a2, a2 = function(e4, t4, n3) {
		        const r3 = s2.apply(this, [e4]);
		        return n3 ? (r3.then(t4, n3), Promise.resolve()) : r3;
		      }, t3.addIceCandidate = a2;
		    }
		    function Re(e3) {
		      const t3 = e3 && e3.navigator;
		      if (t3.mediaDevices && t3.mediaDevices.getUserMedia) {
		        const e4 = t3.mediaDevices, n2 = e4.getUserMedia.bind(e4);
		        t3.mediaDevices.getUserMedia = (e5) => n2(Ae(e5));
		      }
		      !t3.getUserMedia && t3.mediaDevices && t3.mediaDevices.getUserMedia && (t3.getUserMedia = function(e4, n2, r2) {
		        t3.mediaDevices.getUserMedia(e4).then(n2, r2);
		      }.bind(t3));
		    }
		    function Ae(e3) {
		      return e3 && void 0 !== e3.video ? Object.assign({}, e3, { video: Z(e3.video) }) : e3;
		    }
		    function xe(e3) {
		      if (!e3.RTCPeerConnection) return;
		      const t3 = e3.RTCPeerConnection;
		      e3.RTCPeerConnection = function(e4, n2) {
		        if (e4 && e4.iceServers) {
		          const t4 = [];
		          for (let n3 = 0; n3 < e4.iceServers.length; n3++) {
		            let r2 = e4.iceServers[n3];
		            void 0 === r2.urls && r2.url ? (q("RTCIceServer.url", "RTCIceServer.urls"), r2 = JSON.parse(JSON.stringify(r2)), r2.urls = r2.url, delete r2.url, t4.push(r2)) : t4.push(e4.iceServers[n3]);
		          }
		          e4.iceServers = t4;
		        }
		        return new t3(e4, n2);
		      }, e3.RTCPeerConnection.prototype = t3.prototype, "generateCertificate" in t3 && Object.defineProperty(e3.RTCPeerConnection, "generateCertificate", { get: () => t3.generateCertificate });
		    }
		    function De(e3) {
		      "object" == typeof e3 && e3.RTCTrackEvent && "receiver" in e3.RTCTrackEvent.prototype && !("transceiver" in e3.RTCTrackEvent.prototype) && Object.defineProperty(e3.RTCTrackEvent.prototype, "transceiver", { get() {
		        return { receiver: this.receiver };
		      } });
		    }
		    function Ie(e3) {
		      const t3 = e3.RTCPeerConnection.prototype.createOffer;
		      e3.RTCPeerConnection.prototype.createOffer = function(e4) {
		        if (e4) {
		          void 0 !== e4.offerToReceiveAudio && (e4.offerToReceiveAudio = !!e4.offerToReceiveAudio);
		          const t4 = this.getTransceivers().find((e5) => "audio" === e5.receiver.track.kind);
		          false === e4.offerToReceiveAudio && t4 ? "sendrecv" === t4.direction ? t4.setDirection ? t4.setDirection("sendonly") : t4.direction = "sendonly" : "recvonly" === t4.direction && (t4.setDirection ? t4.setDirection("inactive") : t4.direction = "inactive") : true !== e4.offerToReceiveAudio || t4 || this.addTransceiver("audio", { direction: "recvonly" }), void 0 !== e4.offerToReceiveVideo && (e4.offerToReceiveVideo = !!e4.offerToReceiveVideo);
		          const n2 = this.getTransceivers().find((e5) => "video" === e5.receiver.track.kind);
		          false === e4.offerToReceiveVideo && n2 ? "sendrecv" === n2.direction ? n2.setDirection ? n2.setDirection("sendonly") : n2.direction = "sendonly" : "recvonly" === n2.direction && (n2.setDirection ? n2.setDirection("inactive") : n2.direction = "inactive") : true !== e4.offerToReceiveVideo || n2 || this.addTransceiver("video", { direction: "recvonly" });
		        }
		        return t3.apply(this, arguments);
		      };
		    }
		    function Me(e3) {
		      "object" != typeof e3 || e3.AudioContext || (e3.AudioContext = e3.webkitAudioContext);
		    }
		    var Oe = n(963), Le = n.n(Oe);
		    function je(e3) {
		      if (!e3.RTCIceCandidate || e3.RTCIceCandidate && "foundation" in e3.RTCIceCandidate.prototype) return;
		      const t3 = e3.RTCIceCandidate;
		      e3.RTCIceCandidate = function(e4) {
		        if ("object" == typeof e4 && e4.candidate && 0 === e4.candidate.indexOf("a=") && ((e4 = JSON.parse(JSON.stringify(e4))).candidate = e4.candidate.substring(2)), e4.candidate && e4.candidate.length) {
		          const n2 = new t3(e4), r2 = Le().parseCandidate(e4.candidate);
		          for (const e5 in r2) e5 in n2 || Object.defineProperty(n2, e5, { value: r2[e5] });
		          return n2.toJSON = function() {
		            return { candidate: n2.candidate, sdpMid: n2.sdpMid, sdpMLineIndex: n2.sdpMLineIndex, usernameFragment: n2.usernameFragment };
		          }, n2;
		        }
		        return new t3(e4);
		      }, e3.RTCIceCandidate.prototype = t3.prototype, H(e3, "icecandidate", (t4) => (t4.candidate && Object.defineProperty(t4, "candidate", { value: new e3.RTCIceCandidate(t4.candidate), writable: "false" }), t4));
		    }
		    function Be(e3) {
		      !e3.RTCIceCandidate || e3.RTCIceCandidate && "relayProtocol" in e3.RTCIceCandidate.prototype || H(e3, "icecandidate", (e4) => {
		        if (e4.candidate) {
		          const t3 = Le().parseCandidate(e4.candidate.candidate);
		          "relay" === t3.type && (e4.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[t3.priority >> 24]);
		        }
		        return e4;
		      });
		    }
		    function Ue(e3, t3) {
		      if (!e3.RTCPeerConnection) return;
		      "sctp" in e3.RTCPeerConnection.prototype || Object.defineProperty(e3.RTCPeerConnection.prototype, "sctp", { get() {
		        return void 0 === this._sctp ? null : this._sctp;
		      } });
		      const n2 = e3.RTCPeerConnection.prototype.setRemoteDescription;
		      e3.RTCPeerConnection.prototype.setRemoteDescription = function() {
		        if (this._sctp = null, "chrome" === t3.browser && t3.version >= 76) {
		          const { sdpSemantics: e4 } = this.getConfiguration();
		          "plan-b" === e4 && Object.defineProperty(this, "sctp", { get() {
		            return void 0 === this._sctp ? null : this._sctp;
		          }, enumerable: true, configurable: true });
		        }
		        if ((function(e4) {
		          if (!e4 || !e4.sdp) return false;
		          const t4 = Le().splitSections(e4.sdp);
		          return t4.shift(), t4.some((e5) => {
		            const t5 = Le().parseMLine(e5);
		            return t5 && "application" === t5.kind && -1 !== t5.protocol.indexOf("SCTP");
		          });
		        })(arguments[0])) {
		          const e4 = (function(e5) {
		            const t4 = e5.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
		            if (null === t4 || t4.length < 2) return -1;
		            const n4 = parseInt(t4[1], 10);
		            return n4 != n4 ? -1 : n4;
		          })(arguments[0]), n3 = (function(e5) {
		            let n4 = 65536;
		            return "firefox" === t3.browser && (n4 = t3.version < 57 ? -1 === e5 ? 16384 : 2147483637 : t3.version < 60 ? 57 === t3.version ? 65535 : 65536 : 2147483637), n4;
		          })(e4), r2 = (function(e5, n4) {
		            let r3 = 65536;
		            "firefox" === t3.browser && 57 === t3.version && (r3 = 65535);
		            const o3 = Le().matchPrefix(e5.sdp, "a=max-message-size:");
		            return o3.length > 0 ? r3 = parseInt(o3[0].substring(19), 10) : "firefox" === t3.browser && -1 !== n4 && (r3 = 2147483637), r3;
		          })(arguments[0], e4);
		          let o2;
		          o2 = 0 === n3 && 0 === r2 ? Number.POSITIVE_INFINITY : 0 === n3 || 0 === r2 ? Math.max(n3, r2) : Math.min(n3, r2);
		          const i2 = {};
		          Object.defineProperty(i2, "maxMessageSize", { get: () => o2 }), this._sctp = i2;
		        }
		        return n2.apply(this, arguments);
		      };
		    }
		    function Ne(e3, t3) {
		      if (!e3.RTCPeerConnection || !("createDataChannel" in e3.RTCPeerConnection.prototype)) return;
		      if ("chrome" === t3.browser && t3.version > 149) return;
		      if ("firefox" === t3.browser && t3.version > 60) return;
		      function n2(e4, t4) {
		        const n3 = e4.send;
		        e4.send = function() {
		          const r3 = arguments[0], o2 = r3.length || r3.size || r3.byteLength;
		          if ("open" === e4.readyState && t4.sctp && o2 > t4.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t4.sctp.maxMessageSize + " bytes)");
		          return n3.apply(e4, arguments);
		        };
		      }
		      const r2 = e3.RTCPeerConnection.prototype.createDataChannel;
		      e3.RTCPeerConnection.prototype.createDataChannel = function() {
		        const e4 = r2.apply(this, arguments);
		        return n2(e4, this), e4;
		      }, H(e3, "datachannel", (e4) => (n2(e4.channel, e4.target), e4));
		    }
		    function Fe(e3) {
		      if (!e3.RTCPeerConnection || "connectionState" in e3.RTCPeerConnection.prototype) return;
		      const t3 = e3.RTCPeerConnection.prototype;
		      Object.defineProperty(t3, "connectionState", { get() {
		        return { completed: "connected", checking: "connecting" }[this.iceConnectionState] || this.iceConnectionState;
		      }, enumerable: true, configurable: true }), Object.defineProperty(t3, "onconnectionstatechange", { get() {
		        return this._onconnectionstatechange || null;
		      }, set(e4) {
		        this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e4 && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e4);
		      }, enumerable: true, configurable: true }), ["setLocalDescription", "setRemoteDescription"].forEach((e4) => {
		        const n2 = t3[e4];
		        t3[e4] = function() {
		          return this._connectionstatechangepoly || (this._connectionstatechangepoly = (e5) => {
		            const t4 = e5.target;
		            if (t4._lastConnectionState !== t4.connectionState) {
		              t4._lastConnectionState = t4.connectionState;
		              const n3 = new Event("connectionstatechange", e5);
		              t4.dispatchEvent(n3);
		            }
		            return e5;
		          }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n2.apply(this, arguments);
		        };
		      });
		    }
		    function ze(e3, t3) {
		      if (!e3.RTCPeerConnection) return;
		      if ("chrome" === t3.browser && t3.version >= 71) return;
		      if ("safari" === t3.browser && t3._safariVersion >= 13.1) return;
		      const n2 = e3.RTCPeerConnection.prototype.setRemoteDescription;
		      e3.RTCPeerConnection.prototype.setRemoteDescription = function(t4) {
		        if (t4 && t4.sdp && -1 !== t4.sdp.indexOf("\na=extmap-allow-mixed")) {
		          const n3 = t4.sdp.split("\n").filter((e4) => "a=extmap-allow-mixed" !== e4.trim()).join("\n");
		          e3.RTCSessionDescription && t4 instanceof e3.RTCSessionDescription ? arguments[0] = new e3.RTCSessionDescription({ type: t4.type, sdp: n3 }) : t4.sdp = n3;
		        }
		        return n2.apply(this, arguments);
		      };
		    }
		    function We(e3, t3) {
		      if (!e3.RTCPeerConnection || !e3.RTCPeerConnection.prototype) return;
		      const n2 = e3.RTCPeerConnection.prototype.addIceCandidate;
		      n2 && 0 !== n2.length && (e3.RTCPeerConnection.prototype.addIceCandidate = function() {
		        return arguments[0] ? ("chrome" === t3.browser && t3.version < 78 || "firefox" === t3.browser && t3.version < 68 || "safari" === t3.browser) && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n2.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
		      });
		    }
		    function $e(e3, t3) {
		      if (!e3.RTCPeerConnection || !e3.RTCPeerConnection.prototype) return;
		      const n2 = e3.RTCPeerConnection.prototype.setLocalDescription;
		      n2 && 0 !== n2.length && (e3.RTCPeerConnection.prototype.setLocalDescription = function() {
		        let e4 = arguments[0] || {};
		        if ("object" != typeof e4 || e4.type && e4.sdp) return n2.apply(this, arguments);
		        if (e4 = { type: e4.type, sdp: e4.sdp }, !e4.type) switch (this.signalingState) {
		          case "stable":
		          case "have-local-offer":
		          case "have-remote-pranswer":
		            e4.type = "offer";
		            break;
		          default:
		            e4.type = "answer";
		        }
		        return e4.sdp || "offer" !== e4.type && "answer" !== e4.type ? n2.apply(this, [e4]) : ("offer" === e4.type ? this.createOffer : this.createAnswer).apply(this).then((e5) => n2.apply(this, [e5]));
		      });
		    }
		    const Ve = (function({ window: n2 } = {}, r2 = { shimChrome: true, shimFirefox: true, shimSafari: true }) {
		      const i2 = X, a2 = (function(e3) {
		        const t3 = { browser: null, version: null };
		        if (void 0 === e3 || !e3.navigator || !e3.navigator.userAgent) return t3.browser = "Not a browser.", t3;
		        const { navigator: n3 } = e3;
		        if (n3.userAgentData && n3.userAgentData.brands) {
		          const e4 = n3.userAgentData.brands.find((e5) => "Chromium" === e5.brand);
		          if (e4) return { browser: "chrome", version: parseInt(e4.version, 10) };
		        }
		        if (n3.mozGetUserMedia) t3.browser = "firefox", t3.version = parseInt(J(n3.userAgent, /Firefox\/(\d+)\./, 1));
		        else if (n3.webkitGetUserMedia || false === e3.isSecureContext && e3.webkitRTCPeerConnection) t3.browser = "chrome", t3.version = parseInt(J(n3.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)) || null;
		        else {
		          if (!e3.RTCPeerConnection || !n3.userAgent.match(/AppleWebKit\/(\d+)\./)) return t3.browser = "Not a supported browser.", t3;
		          t3.browser = "safari", t3.version = parseInt(J(n3.userAgent, /AppleWebKit\/(\d+)\./, 1)), t3.supportsUnifiedPlan = e3.RTCRtpTransceiver && "currentDirection" in e3.RTCRtpTransceiver.prototype, t3._safariVersion = J(n3.userAgent, /Version\/(\d+(\.?\d+))/, 1);
		        }
		        return t3;
		      })(n2), c2 = { browserDetails: a2, commonShim: s, extractVersion: J, disableLog: K, disableWarnings: Y, sdp: Oe };
		      switch (a2.browser) {
		        case "chrome":
		          if (!e2 || !le || !r2.shimChrome) return i2("Chrome shim is not included in this adapter release."), c2;
		          if (null === a2.version) return i2("Chrome shim can not determine version, not shimming."), c2;
		          i2("adapter.js shimming chrome."), c2.browserShim = e2, We(n2, a2), $e(n2), re(n2, a2), oe(n2), le(n2, a2), ie(n2, a2), ue(n2, a2), se(n2), ae(n2, a2), pe(n2, a2), je(n2), Be(n2), Fe(n2), Ue(n2, a2), Ne(n2, a2), ze(n2, a2);
		          break;
		        case "firefox":
		          if (!t2 || !ge || !r2.shimFirefox) return i2("Firefox shim is not included in this adapter release."), c2;
		          i2("adapter.js shimming firefox."), c2.browserShim = t2, We(n2, a2), $e(n2), he(n2, a2), ge(n2, a2), ye(n2, a2), fe(n2), be(n2), me(n2), ve(n2), we(n2), Ce(n2), _e(n2), Se(n2), Te(n2), je(n2), Fe(n2), Ue(n2, a2), Ne(n2, a2);
		          break;
		        case "safari":
		          if (!o || !r2.shimSafari) return i2("Safari shim is not included in this adapter release."), c2;
		          i2("adapter.js shimming safari."), c2.browserShim = o, We(n2, a2), $e(n2), xe(n2), Ie(n2), Ee(n2), Pe(n2), ke(n2), De(n2), Re(n2), Me(n2), je(n2), Be(n2), Ue(n2, a2), Ne(n2, a2), ze(n2, a2);
		          break;
		        default:
		          i2("Unsupported browser!");
		      }
		      return c2;
		    })({ window: "undefined" == typeof window ? void 0 : window }), Ge = Ve;
		    var Je, He, Ke, Ye = 4294967295;
		    function Xe(e3, t3, n2) {
		      var r2 = Math.floor(n2 / 4294967296), o2 = n2;
		      e3.setUint32(t3, r2), e3.setUint32(t3 + 4, o2);
		    }
		    function qe(e3, t3) {
		      return 4294967296 * e3.getInt32(t3) + e3.getUint32(t3 + 4);
		    }
		    var Qe = ("undefined" == typeof process || "never" !== (null === (Je = null === process || void 0 === process ? void 0 : define_process_env_default) || void 0 === Je ? void 0 : Je.TEXT_ENCODING)) && "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;
		    function Ze(e3) {
		      for (var t3 = e3.length, n2 = 0, r2 = 0; r2 < t3; ) {
		        var o2 = e3.charCodeAt(r2++);
		        if (4294967168 & o2) if (4294965248 & o2) {
		          if (o2 >= 55296 && o2 <= 56319 && r2 < t3) {
		            var i2 = e3.charCodeAt(r2);
		            56320 == (64512 & i2) && (++r2, o2 = ((1023 & o2) << 10) + (1023 & i2) + 65536);
		          }
		          n2 += 4294901760 & o2 ? 4 : 3;
		        } else n2 += 2;
		        else n2++;
		      }
		      return n2;
		    }
		    var et = Qe ? new TextEncoder() : void 0, tt = Qe ? "undefined" != typeof process && "force" !== (null === (He = null === process || void 0 === process ? void 0 : define_process_env_default) || void 0 === He ? void 0 : He.TEXT_ENCODING) ? 200 : 0 : Ye, nt = (null == et ? void 0 : et.encodeInto) ? function(e3, t3, n2) {
		      et.encodeInto(e3, t3.subarray(n2));
		    } : function(e3, t3, n2) {
		      t3.set(et.encode(e3), n2);
		    };
		    function rt(e3, t3, n2) {
		      for (var r2 = t3, o2 = r2 + n2, i2 = [], s2 = ""; r2 < o2; ) {
		        var a2 = e3[r2++];
		        if (128 & a2) if (192 == (224 & a2)) {
		          var c2 = 63 & e3[r2++];
		          i2.push((31 & a2) << 6 | c2);
		        } else if (224 == (240 & a2)) {
		          c2 = 63 & e3[r2++];
		          var u2 = 63 & e3[r2++];
		          i2.push((31 & a2) << 12 | c2 << 6 | u2);
		        } else if (240 == (248 & a2)) {
		          var l2 = (7 & a2) << 18 | (c2 = 63 & e3[r2++]) << 12 | (u2 = 63 & e3[r2++]) << 6 | 63 & e3[r2++];
		          l2 > 65535 && (l2 -= 65536, i2.push(l2 >>> 10 & 1023 | 55296), l2 = 56320 | 1023 & l2), i2.push(l2);
		        } else i2.push(a2);
		        else i2.push(a2);
		        i2.length >= 4096 && (s2 += String.fromCharCode.apply(String, i2), i2.length = 0);
		      }
		      return i2.length > 0 && (s2 += String.fromCharCode.apply(String, i2)), s2;
		    }
		    var ot, it = Qe ? new TextDecoder() : null, st = Qe ? "undefined" != typeof process && "force" !== (null === (Ke = null === process || void 0 === process ? void 0 : define_process_env_default) || void 0 === Ke ? void 0 : Ke.TEXT_DECODER) ? 200 : 0 : Ye, at = function(e3, t3) {
		      this.type = e3, this.data = t3;
		    }, ct = (ot = function(e3, t3) {
		      return ot = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
		        e4.__proto__ = t4;
		      } || function(e4, t4) {
		        for (var n2 in t4) Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
		      }, ot(e3, t3);
		    }, function(e3, t3) {
		      if ("function" != typeof t3 && null !== t3) throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
		      function n2() {
		        this.constructor = e3;
		      }
		      ot(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (n2.prototype = t3.prototype, new n2());
		    }), ut = (function(e3) {
		      function t3(n2) {
		        var r2 = e3.call(this, n2) || this, o2 = Object.create(t3.prototype);
		        return Object.setPrototypeOf(r2, o2), Object.defineProperty(r2, "name", { configurable: true, enumerable: false, value: t3.name }), r2;
		      }
		      return ct(t3, e3), t3;
		    })(Error), lt = { type: -1, encode: function(e3) {
		      var t3, n2, r2, o2;
		      return e3 instanceof Date ? (function(e4) {
		        var t4, n3 = e4.sec, r3 = e4.nsec;
		        if (n3 >= 0 && r3 >= 0 && n3 <= 17179869183) {
		          if (0 === r3 && n3 <= 4294967295) {
		            var o3 = new Uint8Array(4);
		            return (t4 = new DataView(o3.buffer)).setUint32(0, n3), o3;
		          }
		          var i2 = n3 / 4294967296, s2 = 4294967295 & n3;
		          return o3 = new Uint8Array(8), (t4 = new DataView(o3.buffer)).setUint32(0, r3 << 2 | 3 & i2), t4.setUint32(4, s2), o3;
		        }
		        return o3 = new Uint8Array(12), (t4 = new DataView(o3.buffer)).setUint32(0, r3), Xe(t4, 4, n3), o3;
		      })((r2 = 1e6 * ((t3 = e3.getTime()) - 1e3 * (n2 = Math.floor(t3 / 1e3))), { sec: n2 + (o2 = Math.floor(r2 / 1e9)), nsec: r2 - 1e9 * o2 })) : null;
		    }, decode: function(e3) {
		      var t3 = (function(e4) {
		        var t4 = new DataView(e4.buffer, e4.byteOffset, e4.byteLength);
		        switch (e4.byteLength) {
		          case 4:
		            return { sec: t4.getUint32(0), nsec: 0 };
		          case 8:
		            var n2 = t4.getUint32(0);
		            return { sec: 4294967296 * (3 & n2) + t4.getUint32(4), nsec: n2 >>> 2 };
		          case 12:
		            return { sec: qe(t4, 4), nsec: t4.getUint32(0) };
		          default:
		            throw new ut("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(e4.length));
		        }
		      })(e3);
		      return new Date(1e3 * t3.sec + t3.nsec / 1e6);
		    } }, pt = (function() {
		      function e3() {
		        this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(lt);
		      }
		      return e3.prototype.register = function(e4) {
		        var t3 = e4.type, n2 = e4.encode, r2 = e4.decode;
		        if (t3 >= 0) this.encoders[t3] = n2, this.decoders[t3] = r2;
		        else {
		          var o2 = 1 + t3;
		          this.builtInEncoders[o2] = n2, this.builtInDecoders[o2] = r2;
		        }
		      }, e3.prototype.tryToEncode = function(e4, t3) {
		        for (var n2 = 0; n2 < this.builtInEncoders.length; n2++) if (null != (r2 = this.builtInEncoders[n2]) && null != (o2 = r2(e4, t3))) return new at(-1 - n2, o2);
		        for (n2 = 0; n2 < this.encoders.length; n2++) {
		          var r2, o2;
		          if (null != (r2 = this.encoders[n2]) && null != (o2 = r2(e4, t3))) return new at(n2, o2);
		        }
		        return e4 instanceof at ? e4 : null;
		      }, e3.prototype.decode = function(e4, t3, n2) {
		        var r2 = t3 < 0 ? this.builtInDecoders[-1 - t3] : this.decoders[t3];
		        return r2 ? r2(e4, t3, n2) : new at(t3, e4);
		      }, e3.defaultCodec = new e3(), e3;
		    })();
		    function ht(e3) {
		      return e3 instanceof Uint8Array ? e3 : ArrayBuffer.isView(e3) ? new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength) : e3 instanceof ArrayBuffer ? new Uint8Array(e3) : Uint8Array.from(e3);
		    }
		    function dt(e3) {
		      return "".concat(e3 < 0 ? "-" : "", "0x").concat(Math.abs(e3).toString(16).padStart(2, "0"));
		    }
		    !(function() {
		      function e3(e4, t3, n2, r2, o2, i2, s2, a2) {
		        void 0 === e4 && (e4 = pt.defaultCodec), void 0 === t3 && (t3 = void 0), void 0 === n2 && (n2 = 100), void 0 === r2 && (r2 = 2048), void 0 === o2 && (o2 = false), void 0 === i2 && (i2 = false), void 0 === s2 && (s2 = false), void 0 === a2 && (a2 = false), this.extensionCodec = e4, this.context = t3, this.maxDepth = n2, this.initialBufferSize = r2, this.sortKeys = o2, this.forceFloat32 = i2, this.ignoreUndefined = s2, this.forceIntegerToFloat = a2, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
		      }
		      e3.prototype.reinitializeState = function() {
		        this.pos = 0;
		      }, e3.prototype.encodeSharedRef = function(e4) {
		        return this.reinitializeState(), this.doEncode(e4, 1), this.bytes.subarray(0, this.pos);
		      }, e3.prototype.encode = function(e4) {
		        return this.reinitializeState(), this.doEncode(e4, 1), this.bytes.slice(0, this.pos);
		      }, e3.prototype.doEncode = function(e4, t3) {
		        if (t3 > this.maxDepth) throw new Error("Too deep objects in depth ".concat(t3));
		        null == e4 ? this.encodeNil() : "boolean" == typeof e4 ? this.encodeBoolean(e4) : "number" == typeof e4 ? this.encodeNumber(e4) : "string" == typeof e4 ? this.encodeString(e4) : this.encodeObject(e4, t3);
		      }, e3.prototype.ensureBufferSizeToWrite = function(e4) {
		        var t3 = this.pos + e4;
		        this.view.byteLength < t3 && this.resizeBuffer(2 * t3);
		      }, e3.prototype.resizeBuffer = function(e4) {
		        var t3 = new ArrayBuffer(e4), n2 = new Uint8Array(t3), r2 = new DataView(t3);
		        n2.set(this.bytes), this.view = r2, this.bytes = n2;
		      }, e3.prototype.encodeNil = function() {
		        this.writeU8(192);
		      }, e3.prototype.encodeBoolean = function(e4) {
		        false === e4 ? this.writeU8(194) : this.writeU8(195);
		      }, e3.prototype.encodeNumber = function(e4) {
		        Number.isSafeInteger(e4) && !this.forceIntegerToFloat ? e4 >= 0 ? e4 < 128 ? this.writeU8(e4) : e4 < 256 ? (this.writeU8(204), this.writeU8(e4)) : e4 < 65536 ? (this.writeU8(205), this.writeU16(e4)) : e4 < 4294967296 ? (this.writeU8(206), this.writeU32(e4)) : (this.writeU8(207), this.writeU64(e4)) : e4 >= -32 ? this.writeU8(224 | e4 + 32) : e4 >= -128 ? (this.writeU8(208), this.writeI8(e4)) : e4 >= -32768 ? (this.writeU8(209), this.writeI16(e4)) : e4 >= -2147483648 ? (this.writeU8(210), this.writeI32(e4)) : (this.writeU8(211), this.writeI64(e4)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(e4)) : (this.writeU8(203), this.writeF64(e4));
		      }, e3.prototype.writeStringHeader = function(e4) {
		        if (e4 < 32) this.writeU8(160 + e4);
		        else if (e4 < 256) this.writeU8(217), this.writeU8(e4);
		        else if (e4 < 65536) this.writeU8(218), this.writeU16(e4);
		        else {
		          if (!(e4 < 4294967296)) throw new Error("Too long string: ".concat(e4, " bytes in UTF-8"));
		          this.writeU8(219), this.writeU32(e4);
		        }
		      }, e3.prototype.encodeString = function(e4) {
		        if (e4.length > tt) {
		          var t3 = Ze(e4);
		          this.ensureBufferSizeToWrite(5 + t3), this.writeStringHeader(t3), nt(e4, this.bytes, this.pos), this.pos += t3;
		        } else t3 = Ze(e4), this.ensureBufferSizeToWrite(5 + t3), this.writeStringHeader(t3), (function(e5, t4, n2) {
		          for (var r2 = e5.length, o2 = n2, i2 = 0; i2 < r2; ) {
		            var s2 = e5.charCodeAt(i2++);
		            if (4294967168 & s2) {
		              if (4294965248 & s2) {
		                if (s2 >= 55296 && s2 <= 56319 && i2 < r2) {
		                  var a2 = e5.charCodeAt(i2);
		                  56320 == (64512 & a2) && (++i2, s2 = ((1023 & s2) << 10) + (1023 & a2) + 65536);
		                }
		                4294901760 & s2 ? (t4[o2++] = s2 >> 18 & 7 | 240, t4[o2++] = s2 >> 12 & 63 | 128, t4[o2++] = s2 >> 6 & 63 | 128) : (t4[o2++] = s2 >> 12 & 15 | 224, t4[o2++] = s2 >> 6 & 63 | 128);
		              } else t4[o2++] = s2 >> 6 & 31 | 192;
		              t4[o2++] = 63 & s2 | 128;
		            } else t4[o2++] = s2;
		          }
		        })(e4, this.bytes, this.pos), this.pos += t3;
		      }, e3.prototype.encodeObject = function(e4, t3) {
		        var n2 = this.extensionCodec.tryToEncode(e4, this.context);
		        if (null != n2) this.encodeExtension(n2);
		        else if (Array.isArray(e4)) this.encodeArray(e4, t3);
		        else if (ArrayBuffer.isView(e4)) this.encodeBinary(e4);
		        else {
		          if ("object" != typeof e4) throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(e4)));
		          this.encodeMap(e4, t3);
		        }
		      }, e3.prototype.encodeBinary = function(e4) {
		        var t3 = e4.byteLength;
		        if (t3 < 256) this.writeU8(196), this.writeU8(t3);
		        else if (t3 < 65536) this.writeU8(197), this.writeU16(t3);
		        else {
		          if (!(t3 < 4294967296)) throw new Error("Too large binary: ".concat(t3));
		          this.writeU8(198), this.writeU32(t3);
		        }
		        var n2 = ht(e4);
		        this.writeU8a(n2);
		      }, e3.prototype.encodeArray = function(e4, t3) {
		        var n2 = e4.length;
		        if (n2 < 16) this.writeU8(144 + n2);
		        else if (n2 < 65536) this.writeU8(220), this.writeU16(n2);
		        else {
		          if (!(n2 < 4294967296)) throw new Error("Too large array: ".concat(n2));
		          this.writeU8(221), this.writeU32(n2);
		        }
		        for (var r2 = 0, o2 = e4; r2 < o2.length; r2++) {
		          var i2 = o2[r2];
		          this.doEncode(i2, t3 + 1);
		        }
		      }, e3.prototype.countWithoutUndefined = function(e4, t3) {
		        for (var n2 = 0, r2 = 0, o2 = t3; r2 < o2.length; r2++) void 0 !== e4[o2[r2]] && n2++;
		        return n2;
		      }, e3.prototype.encodeMap = function(e4, t3) {
		        var n2 = Object.keys(e4);
		        this.sortKeys && n2.sort();
		        var r2 = this.ignoreUndefined ? this.countWithoutUndefined(e4, n2) : n2.length;
		        if (r2 < 16) this.writeU8(128 + r2);
		        else if (r2 < 65536) this.writeU8(222), this.writeU16(r2);
		        else {
		          if (!(r2 < 4294967296)) throw new Error("Too large map object: ".concat(r2));
		          this.writeU8(223), this.writeU32(r2);
		        }
		        for (var o2 = 0, i2 = n2; o2 < i2.length; o2++) {
		          var s2 = i2[o2], a2 = e4[s2];
		          this.ignoreUndefined && void 0 === a2 || (this.encodeString(s2), this.doEncode(a2, t3 + 1));
		        }
		      }, e3.prototype.encodeExtension = function(e4) {
		        var t3 = e4.data.length;
		        if (1 === t3) this.writeU8(212);
		        else if (2 === t3) this.writeU8(213);
		        else if (4 === t3) this.writeU8(214);
		        else if (8 === t3) this.writeU8(215);
		        else if (16 === t3) this.writeU8(216);
		        else if (t3 < 256) this.writeU8(199), this.writeU8(t3);
		        else if (t3 < 65536) this.writeU8(200), this.writeU16(t3);
		        else {
		          if (!(t3 < 4294967296)) throw new Error("Too large extension object: ".concat(t3));
		          this.writeU8(201), this.writeU32(t3);
		        }
		        this.writeI8(e4.type), this.writeU8a(e4.data);
		      }, e3.prototype.writeU8 = function(e4) {
		        this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e4), this.pos++;
		      }, e3.prototype.writeU8a = function(e4) {
		        var t3 = e4.length;
		        this.ensureBufferSizeToWrite(t3), this.bytes.set(e4, this.pos), this.pos += t3;
		      }, e3.prototype.writeI8 = function(e4) {
		        this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e4), this.pos++;
		      }, e3.prototype.writeU16 = function(e4) {
		        this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e4), this.pos += 2;
		      }, e3.prototype.writeI16 = function(e4) {
		        this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e4), this.pos += 2;
		      }, e3.prototype.writeU32 = function(e4) {
		        this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e4), this.pos += 4;
		      }, e3.prototype.writeI32 = function(e4) {
		        this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e4), this.pos += 4;
		      }, e3.prototype.writeF32 = function(e4) {
		        this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e4), this.pos += 4;
		      }, e3.prototype.writeF64 = function(e4) {
		        this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e4), this.pos += 8;
		      }, e3.prototype.writeU64 = function(e4) {
		        this.ensureBufferSizeToWrite(8), (function(e5, t3, n2) {
		          var r2 = n2 / 4294967296, o2 = n2;
		          e5.setUint32(t3, r2), e5.setUint32(t3 + 4, o2);
		        })(this.view, this.pos, e4), this.pos += 8;
		      }, e3.prototype.writeI64 = function(e4) {
		        this.ensureBufferSizeToWrite(8), Xe(this.view, this.pos, e4), this.pos += 8;
		      };
		    })();
		    var ft = (function() {
		      function e3(e4, t3) {
		        void 0 === e4 && (e4 = 16), void 0 === t3 && (t3 = 16), this.maxKeyLength = e4, this.maxLengthPerKey = t3, this.hit = 0, this.miss = 0, this.caches = [];
		        for (var n2 = 0; n2 < this.maxKeyLength; n2++) this.caches.push([]);
		      }
		      return e3.prototype.canBeCached = function(e4) {
		        return e4 > 0 && e4 <= this.maxKeyLength;
		      }, e3.prototype.find = function(e4, t3, n2) {
		        e: for (var r2 = 0, o2 = this.caches[n2 - 1]; r2 < o2.length; r2++) {
		          for (var i2 = o2[r2], s2 = i2.bytes, a2 = 0; a2 < n2; a2++) if (s2[a2] !== e4[t3 + a2]) continue e;
		          return i2.str;
		        }
		        return null;
		      }, e3.prototype.store = function(e4, t3) {
		        var n2 = this.caches[e4.length - 1], r2 = { bytes: e4, str: t3 };
		        n2.length >= this.maxLengthPerKey ? n2[Math.random() * n2.length | 0] = r2 : n2.push(r2);
		      }, e3.prototype.decode = function(e4, t3, n2) {
		        var r2 = this.find(e4, t3, n2);
		        if (null != r2) return this.hit++, r2;
		        this.miss++;
		        var o2 = rt(e4, t3, n2), i2 = Uint8Array.prototype.slice.call(e4, t3, t3 + n2);
		        return this.store(i2, o2), o2;
		      }, e3;
		    })(), gt = function(e3, t3) {
		      var n2, r2, o2, i2, s2 = { label: 0, sent: function() {
		        if (1 & o2[0]) throw o2[1];
		        return o2[1];
		      }, trys: [], ops: [] };
		      return i2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
		        return this;
		      }), i2;
		      function a2(i3) {
		        return function(a3) {
		          return (function(i4) {
		            if (n2) throw new TypeError("Generator is already executing.");
		            for (; s2; ) try {
		              if (n2 = 1, r2 && (o2 = 2 & i4[0] ? r2.return : i4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, i4[1])).done) return o2;
		              switch (r2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
		                case 0:
		                case 1:
		                  o2 = i4;
		                  break;
		                case 4:
		                  return s2.label++, { value: i4[1], done: false };
		                case 5:
		                  s2.label++, r2 = i4[1], i4 = [0];
		                  continue;
		                case 7:
		                  i4 = s2.ops.pop(), s2.trys.pop();
		                  continue;
		                default:
		                  if (!((o2 = (o2 = s2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
		                    s2 = 0;
		                    continue;
		                  }
		                  if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
		                    s2.label = i4[1];
		                    break;
		                  }
		                  if (6 === i4[0] && s2.label < o2[1]) {
		                    s2.label = o2[1], o2 = i4;
		                    break;
		                  }
		                  if (o2 && s2.label < o2[2]) {
		                    s2.label = o2[2], s2.ops.push(i4);
		                    break;
		                  }
		                  o2[2] && s2.ops.pop(), s2.trys.pop();
		                  continue;
		              }
		              i4 = t3.call(e3, s2);
		            } catch (e4) {
		              i4 = [6, e4], r2 = 0;
		            } finally {
		              n2 = o2 = 0;
		            }
		            if (5 & i4[0]) throw i4[1];
		            return { value: i4[0] ? i4[1] : void 0, done: true };
		          })([i3, a3]);
		        };
		      }
		    }, yt = function(e3) {
		      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		      var t3, n2 = e3[Symbol.asyncIterator];
		      return n2 ? n2.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), t3 = {}, r2("next"), r2("throw"), r2("return"), t3[Symbol.asyncIterator] = function() {
		        return this;
		      }, t3);
		      function r2(n3) {
		        t3[n3] = e3[n3] && function(t4) {
		          return new Promise(function(r3, o2) {
		            !(function(e4, t5, n4, r4) {
		              Promise.resolve(r4).then(function(t6) {
		                e4({ value: t6, done: n4 });
		              }, t5);
		            })(r3, o2, (t4 = e3[n3](t4)).done, t4.value);
		          });
		        };
		      }
		    }, mt = function(e3) {
		      return this instanceof mt ? (this.v = e3, this) : new mt(e3);
		    }, vt = function(e3) {
		      var t3 = typeof e3;
		      return "string" === t3 || "number" === t3;
		    }, bt = new DataView(new ArrayBuffer(0)), wt = new Uint8Array(bt.buffer), Ct = (function() {
		      try {
		        bt.getInt8(0);
		      } catch (e3) {
		        return e3.constructor;
		      }
		      throw new Error("never reached");
		    })(), _t = new Ct("Insufficient data"), St = new ft();
		    function Tt(e3, t3, n2, r2) {
		      Object.defineProperty(e3, t3, { get: n2, set: r2, enumerable: true, configurable: true });
		    }
		    !(function() {
		      function e3(e4, t3, n2, r2, o2, i2, s2, a2) {
		        void 0 === e4 && (e4 = pt.defaultCodec), void 0 === t3 && (t3 = void 0), void 0 === n2 && (n2 = Ye), void 0 === r2 && (r2 = Ye), void 0 === o2 && (o2 = Ye), void 0 === i2 && (i2 = Ye), void 0 === s2 && (s2 = Ye), void 0 === a2 && (a2 = St), this.extensionCodec = e4, this.context = t3, this.maxStrLength = n2, this.maxBinLength = r2, this.maxArrayLength = o2, this.maxMapLength = i2, this.maxExtLength = s2, this.keyDecoder = a2, this.totalPos = 0, this.pos = 0, this.view = bt, this.bytes = wt, this.headByte = -1, this.stack = [];
		      }
		      e3.prototype.reinitializeState = function() {
		        this.totalPos = 0, this.headByte = -1, this.stack.length = 0;
		      }, e3.prototype.setBuffer = function(e4) {
		        this.bytes = ht(e4), this.view = (function(e5) {
		          if (e5 instanceof ArrayBuffer) return new DataView(e5);
		          var t3 = ht(e5);
		          return new DataView(t3.buffer, t3.byteOffset, t3.byteLength);
		        })(this.bytes), this.pos = 0;
		      }, e3.prototype.appendBuffer = function(e4) {
		        if (-1 !== this.headByte || this.hasRemaining(1)) {
		          var t3 = this.bytes.subarray(this.pos), n2 = ht(e4), r2 = new Uint8Array(t3.length + n2.length);
		          r2.set(t3), r2.set(n2, t3.length), this.setBuffer(r2);
		        } else this.setBuffer(e4);
		      }, e3.prototype.hasRemaining = function(e4) {
		        return this.view.byteLength - this.pos >= e4;
		      }, e3.prototype.createExtraByteError = function(e4) {
		        var t3 = this.view, n2 = this.pos;
		        return new RangeError("Extra ".concat(t3.byteLength - n2, " of ").concat(t3.byteLength, " byte(s) found at buffer[").concat(e4, "]"));
		      }, e3.prototype.decode = function(e4) {
		        this.reinitializeState(), this.setBuffer(e4);
		        var t3 = this.doDecodeSync();
		        if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
		        return t3;
		      }, e3.prototype.decodeMulti = function(e4) {
		        return gt(this, function(t3) {
		          switch (t3.label) {
		            case 0:
		              this.reinitializeState(), this.setBuffer(e4), t3.label = 1;
		            case 1:
		              return this.hasRemaining(1) ? [4, this.doDecodeSync()] : [3, 3];
		            case 2:
		              return t3.sent(), [3, 1];
		            case 3:
		              return [2];
		          }
		        });
		      }, e3.prototype.decodeAsync = function(e4) {
		        var t3, n2, r2, o2, i2, s2, a2, c2;
		        return i2 = this, s2 = void 0, c2 = function() {
		          var i3, s3, a3, c3, u2, l2, p2, h2;
		          return gt(this, function(d2) {
		            switch (d2.label) {
		              case 0:
		                i3 = false, d2.label = 1;
		              case 1:
		                d2.trys.push([1, 6, 7, 12]), t3 = yt(e4), d2.label = 2;
		              case 2:
		                return [4, t3.next()];
		              case 3:
		                if ((n2 = d2.sent()).done) return [3, 5];
		                if (a3 = n2.value, i3) throw this.createExtraByteError(this.totalPos);
		                this.appendBuffer(a3);
		                try {
		                  s3 = this.doDecodeSync(), i3 = true;
		                } catch (e5) {
		                  if (!(e5 instanceof Ct)) throw e5;
		                }
		                this.totalPos += this.pos, d2.label = 4;
		              case 4:
		                return [3, 2];
		              case 5:
		                return [3, 12];
		              case 6:
		                return c3 = d2.sent(), r2 = { error: c3 }, [3, 12];
		              case 7:
		                return d2.trys.push([7, , 10, 11]), n2 && !n2.done && (o2 = t3.return) ? [4, o2.call(t3)] : [3, 9];
		              case 8:
		                d2.sent(), d2.label = 9;
		              case 9:
		                return [3, 11];
		              case 10:
		                if (r2) throw r2.error;
		                return [7];
		              case 11:
		                return [7];
		              case 12:
		                if (i3) {
		                  if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
		                  return [2, s3];
		                }
		                throw l2 = (u2 = this).headByte, p2 = u2.pos, h2 = u2.totalPos, new RangeError("Insufficient data in parsing ".concat(dt(l2), " at ").concat(h2, " (").concat(p2, " in the current buffer)"));
		            }
		          });
		        }, new ((a2 = void 0) || (a2 = Promise))(function(e5, t4) {
		          function n3(e6) {
		            try {
		              o3(c2.next(e6));
		            } catch (e7) {
		              t4(e7);
		            }
		          }
		          function r3(e6) {
		            try {
		              o3(c2.throw(e6));
		            } catch (e7) {
		              t4(e7);
		            }
		          }
		          function o3(t5) {
		            var o4;
		            t5.done ? e5(t5.value) : (o4 = t5.value, o4 instanceof a2 ? o4 : new a2(function(e6) {
		              e6(o4);
		            })).then(n3, r3);
		          }
		          o3((c2 = c2.apply(i2, s2 || [])).next());
		        });
		      }, e3.prototype.decodeArrayStream = function(e4) {
		        return this.decodeMultiAsync(e4, true);
		      }, e3.prototype.decodeStream = function(e4) {
		        return this.decodeMultiAsync(e4, false);
		      }, e3.prototype.decodeMultiAsync = function(e4, t3) {
		        return (function(e5, t4, n2) {
		          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		          var r2, o2 = n2.apply(e5, t4 || []), i2 = [];
		          return r2 = {}, s2("next"), s2("throw"), s2("return"), r2[Symbol.asyncIterator] = function() {
		            return this;
		          }, r2;
		          function s2(e6) {
		            o2[e6] && (r2[e6] = function(t5) {
		              return new Promise(function(n3, r3) {
		                i2.push([e6, t5, n3, r3]) > 1 || a2(e6, t5);
		              });
		            });
		          }
		          function a2(e6, t5) {
		            try {
		              !(function(e7) {
		                e7.value instanceof mt ? Promise.resolve(e7.value.v).then(c2, u2) : l2(i2[0][2], e7);
		              })(o2[e6](t5));
		            } catch (e7) {
		              l2(i2[0][3], e7);
		            }
		          }
		          function c2(e6) {
		            a2("next", e6);
		          }
		          function u2(e6) {
		            a2("throw", e6);
		          }
		          function l2(e6, t5) {
		            e6(t5), i2.shift(), i2.length && a2(i2[0][0], i2[0][1]);
		          }
		        })(this, arguments, function() {
		          var n2, r2, o2, i2, s2, a2, c2, u2, l2;
		          return gt(this, function(p2) {
		            switch (p2.label) {
		              case 0:
		                n2 = t3, r2 = -1, p2.label = 1;
		              case 1:
		                p2.trys.push([1, 13, 14, 19]), o2 = yt(e4), p2.label = 2;
		              case 2:
		                return [4, mt(o2.next())];
		              case 3:
		                if ((i2 = p2.sent()).done) return [3, 12];
		                if (s2 = i2.value, t3 && 0 === r2) throw this.createExtraByteError(this.totalPos);
		                this.appendBuffer(s2), n2 && (r2 = this.readArraySize(), n2 = false, this.complete()), p2.label = 4;
		              case 4:
		                p2.trys.push([4, 9, , 10]), p2.label = 5;
		              case 5:
		                return [4, mt(this.doDecodeSync())];
		              case 6:
		                return [4, p2.sent()];
		              case 7:
		                return p2.sent(), 0 === --r2 ? [3, 8] : [3, 5];
		              case 8:
		                return [3, 10];
		              case 9:
		                if (!((a2 = p2.sent()) instanceof Ct)) throw a2;
		                return [3, 10];
		              case 10:
		                this.totalPos += this.pos, p2.label = 11;
		              case 11:
		                return [3, 2];
		              case 12:
		                return [3, 19];
		              case 13:
		                return c2 = p2.sent(), u2 = { error: c2 }, [3, 19];
		              case 14:
		                return p2.trys.push([14, , 17, 18]), i2 && !i2.done && (l2 = o2.return) ? [4, mt(l2.call(o2))] : [3, 16];
		              case 15:
		                p2.sent(), p2.label = 16;
		              case 16:
		                return [3, 18];
		              case 17:
		                if (u2) throw u2.error;
		                return [7];
		              case 18:
		                return [7];
		              case 19:
		                return [2];
		            }
		          });
		        });
		      }, e3.prototype.doDecodeSync = function() {
		        e: for (; ; ) {
		          var e4 = this.readHeadByte(), t3 = void 0;
		          if (e4 >= 224) t3 = e4 - 256;
		          else if (e4 < 192) if (e4 < 128) t3 = e4;
		          else if (e4 < 144) {
		            if (0 != (r2 = e4 - 128)) {
		              this.pushMapState(r2), this.complete();
		              continue e;
		            }
		            t3 = {};
		          } else if (e4 < 160) {
		            if (0 != (r2 = e4 - 144)) {
		              this.pushArrayState(r2), this.complete();
		              continue e;
		            }
		            t3 = [];
		          } else {
		            var n2 = e4 - 160;
		            t3 = this.decodeUtf8String(n2, 0);
		          }
		          else if (192 === e4) t3 = null;
		          else if (194 === e4) t3 = false;
		          else if (195 === e4) t3 = true;
		          else if (202 === e4) t3 = this.readF32();
		          else if (203 === e4) t3 = this.readF64();
		          else if (204 === e4) t3 = this.readU8();
		          else if (205 === e4) t3 = this.readU16();
		          else if (206 === e4) t3 = this.readU32();
		          else if (207 === e4) t3 = this.readU64();
		          else if (208 === e4) t3 = this.readI8();
		          else if (209 === e4) t3 = this.readI16();
		          else if (210 === e4) t3 = this.readI32();
		          else if (211 === e4) t3 = this.readI64();
		          else if (217 === e4) n2 = this.lookU8(), t3 = this.decodeUtf8String(n2, 1);
		          else if (218 === e4) n2 = this.lookU16(), t3 = this.decodeUtf8String(n2, 2);
		          else if (219 === e4) n2 = this.lookU32(), t3 = this.decodeUtf8String(n2, 4);
		          else if (220 === e4) {
		            if (0 !== (r2 = this.readU16())) {
		              this.pushArrayState(r2), this.complete();
		              continue e;
		            }
		            t3 = [];
		          } else if (221 === e4) {
		            if (0 !== (r2 = this.readU32())) {
		              this.pushArrayState(r2), this.complete();
		              continue e;
		            }
		            t3 = [];
		          } else if (222 === e4) {
		            if (0 !== (r2 = this.readU16())) {
		              this.pushMapState(r2), this.complete();
		              continue e;
		            }
		            t3 = {};
		          } else if (223 === e4) {
		            if (0 !== (r2 = this.readU32())) {
		              this.pushMapState(r2), this.complete();
		              continue e;
		            }
		            t3 = {};
		          } else if (196 === e4) {
		            var r2 = this.lookU8();
		            t3 = this.decodeBinary(r2, 1);
		          } else if (197 === e4) r2 = this.lookU16(), t3 = this.decodeBinary(r2, 2);
		          else if (198 === e4) r2 = this.lookU32(), t3 = this.decodeBinary(r2, 4);
		          else if (212 === e4) t3 = this.decodeExtension(1, 0);
		          else if (213 === e4) t3 = this.decodeExtension(2, 0);
		          else if (214 === e4) t3 = this.decodeExtension(4, 0);
		          else if (215 === e4) t3 = this.decodeExtension(8, 0);
		          else if (216 === e4) t3 = this.decodeExtension(16, 0);
		          else if (199 === e4) r2 = this.lookU8(), t3 = this.decodeExtension(r2, 1);
		          else if (200 === e4) r2 = this.lookU16(), t3 = this.decodeExtension(r2, 2);
		          else {
		            if (201 !== e4) throw new ut("Unrecognized type byte: ".concat(dt(e4)));
		            r2 = this.lookU32(), t3 = this.decodeExtension(r2, 4);
		          }
		          this.complete();
		          for (var o2 = this.stack; o2.length > 0; ) {
		            var i2 = o2[o2.length - 1];
		            if (0 === i2.type) {
		              if (i2.array[i2.position] = t3, i2.position++, i2.position !== i2.size) continue e;
		              o2.pop(), t3 = i2.array;
		            } else {
		              if (1 === i2.type) {
		                if (!vt(t3)) throw new ut("The type of key must be string or number but " + typeof t3);
		                if ("__proto__" === t3) throw new ut("The key __proto__ is not allowed");
		                i2.key = t3, i2.type = 2;
		                continue e;
		              }
		              if (i2.map[i2.key] = t3, i2.readCount++, i2.readCount !== i2.size) {
		                i2.key = null, i2.type = 1;
		                continue e;
		              }
		              o2.pop(), t3 = i2.map;
		            }
		          }
		          return t3;
		        }
		      }, e3.prototype.readHeadByte = function() {
		        return -1 === this.headByte && (this.headByte = this.readU8()), this.headByte;
		      }, e3.prototype.complete = function() {
		        this.headByte = -1;
		      }, e3.prototype.readArraySize = function() {
		        var e4 = this.readHeadByte();
		        switch (e4) {
		          case 220:
		            return this.readU16();
		          case 221:
		            return this.readU32();
		          default:
		            if (e4 < 160) return e4 - 144;
		            throw new ut("Unrecognized array type byte: ".concat(dt(e4)));
		        }
		      }, e3.prototype.pushMapState = function(e4) {
		        if (e4 > this.maxMapLength) throw new ut("Max length exceeded: map length (".concat(e4, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
		        this.stack.push({ type: 1, size: e4, key: null, readCount: 0, map: {} });
		      }, e3.prototype.pushArrayState = function(e4) {
		        if (e4 > this.maxArrayLength) throw new ut("Max length exceeded: array length (".concat(e4, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
		        this.stack.push({ type: 0, size: e4, array: new Array(e4), position: 0 });
		      }, e3.prototype.decodeUtf8String = function(e4, t3) {
		        var n2;
		        if (e4 > this.maxStrLength) throw new ut("Max length exceeded: UTF-8 byte length (".concat(e4, ") > maxStrLength (").concat(this.maxStrLength, ")"));
		        if (this.bytes.byteLength < this.pos + t3 + e4) throw _t;
		        var r2, o2 = this.pos + t3;
		        return r2 = this.stateIsMapKey() && (null === (n2 = this.keyDecoder) || void 0 === n2 ? void 0 : n2.canBeCached(e4)) ? this.keyDecoder.decode(this.bytes, o2, e4) : e4 > st ? (function(e5, t4, n3) {
		          var r3 = e5.subarray(t4, t4 + n3);
		          return it.decode(r3);
		        })(this.bytes, o2, e4) : rt(this.bytes, o2, e4), this.pos += t3 + e4, r2;
		      }, e3.prototype.stateIsMapKey = function() {
		        return this.stack.length > 0 && 1 === this.stack[this.stack.length - 1].type;
		      }, e3.prototype.decodeBinary = function(e4, t3) {
		        if (e4 > this.maxBinLength) throw new ut("Max length exceeded: bin length (".concat(e4, ") > maxBinLength (").concat(this.maxBinLength, ")"));
		        if (!this.hasRemaining(e4 + t3)) throw _t;
		        var n2 = this.pos + t3, r2 = this.bytes.subarray(n2, n2 + e4);
		        return this.pos += t3 + e4, r2;
		      }, e3.prototype.decodeExtension = function(e4, t3) {
		        if (e4 > this.maxExtLength) throw new ut("Max length exceeded: ext length (".concat(e4, ") > maxExtLength (").concat(this.maxExtLength, ")"));
		        var n2 = this.view.getInt8(this.pos + t3), r2 = this.decodeBinary(e4, t3 + 1);
		        return this.extensionCodec.decode(r2, n2, this.context);
		      }, e3.prototype.lookU8 = function() {
		        return this.view.getUint8(this.pos);
		      }, e3.prototype.lookU16 = function() {
		        return this.view.getUint16(this.pos);
		      }, e3.prototype.lookU32 = function() {
		        return this.view.getUint32(this.pos);
		      }, e3.prototype.readU8 = function() {
		        var e4 = this.view.getUint8(this.pos);
		        return this.pos++, e4;
		      }, e3.prototype.readI8 = function() {
		        var e4 = this.view.getInt8(this.pos);
		        return this.pos++, e4;
		      }, e3.prototype.readU16 = function() {
		        var e4 = this.view.getUint16(this.pos);
		        return this.pos += 2, e4;
		      }, e3.prototype.readI16 = function() {
		        var e4 = this.view.getInt16(this.pos);
		        return this.pos += 2, e4;
		      }, e3.prototype.readU32 = function() {
		        var e4 = this.view.getUint32(this.pos);
		        return this.pos += 4, e4;
		      }, e3.prototype.readI32 = function() {
		        var e4 = this.view.getInt32(this.pos);
		        return this.pos += 4, e4;
		      }, e3.prototype.readU64 = function() {
		        var e4, t3, n2 = (e4 = this.view, t3 = this.pos, 4294967296 * e4.getUint32(t3) + e4.getUint32(t3 + 4));
		        return this.pos += 8, n2;
		      }, e3.prototype.readI64 = function() {
		        var e4 = qe(this.view, this.pos);
		        return this.pos += 8, e4;
		      }, e3.prototype.readF32 = function() {
		        var e4 = this.view.getFloat32(this.pos);
		        return this.pos += 4, e4;
		      }, e3.prototype.readF64 = function() {
		        var e4 = this.view.getFloat64(this.pos);
		        return this.pos += 8, e4;
		      };
		    })();
		    class Pt {
		      constructor() {
		        this.chunkedMTU = 16300, this._dataCount = 1, this.chunk = (e3) => {
		          const t3 = [], n2 = e3.byteLength, r2 = Math.ceil(n2 / this.chunkedMTU);
		          let o2 = 0, i2 = 0;
		          for (; i2 < n2; ) {
		            const s2 = Math.min(n2, i2 + this.chunkedMTU), a2 = e3.slice(i2, s2), c2 = { __peerData: this._dataCount, n: o2, data: a2, total: r2 };
		            t3.push(c2), i2 = s2, o2++;
		          }
		          return this._dataCount++, t3;
		        };
		      }
		    }
		    const kt = Ge.default || Ge, Et = new class {
		      isWebRTCSupported() {
		        return "undefined" != typeof RTCPeerConnection;
		      }
		      isBrowserSupported() {
		        const e3 = this.getBrowser(), t3 = this.getVersion();
		        return !!this.supportedBrowsers.includes(e3) && ("chrome" === e3 ? t3 >= this.minChromeVersion : "firefox" === e3 ? t3 >= this.minFirefoxVersion : "safari" === e3 && !this.isIOS && t3 >= this.minSafariVersion);
		      }
		      getBrowser() {
		        return kt.browserDetails.browser;
		      }
		      getVersion() {
		        return kt.browserDetails.version || 0;
		      }
		      isUnifiedPlanSupported() {
		        const e3 = this.getBrowser(), t3 = kt.browserDetails.version || 0;
		        if ("chrome" === e3 && t3 < this.minChromeVersion) return false;
		        if ("firefox" === e3 && t3 >= this.minFirefoxVersion) return true;
		        if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return false;
		        let n2, r2 = false;
		        try {
		          n2 = new RTCPeerConnection(), n2.addTransceiver("audio"), r2 = true;
		        } catch (e4) {
		        } finally {
		          n2 && n2.close();
		        }
		        return r2;
		      }
		      toString() {
		        return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
		      }
		      constructor() {
		        this.isIOS = "undefined" != typeof navigator && ["iPad", "iPhone", "iPod"].includes(navigator.platform), this.supportedBrowsers = ["firefox", "chrome", "safari"], this.minFirefoxVersion = 59, this.minChromeVersion = 72, this.minSafariVersion = 605;
		      }
		    }(), Rt = (e3) => !e3 || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e3), At = () => Math.random().toString(36).slice(2), xt = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }, { urls: ["turn:eu-0.turn.peerjs.com:3478", "turn:us-0.turn.peerjs.com:3478"], username: "peerjs", credential: "peerjsp" }], sdpSemantics: "unified-plan" }, Dt = new class extends Pt {
		      noop() {
		      }
		      blobToArrayBuffer(e3, t3) {
		        const n2 = new FileReader();
		        return n2.onload = function(e4) {
		          e4.target && t3(e4.target.result);
		        }, n2.readAsArrayBuffer(e3), n2;
		      }
		      binaryStringToArrayBuffer(e3) {
		        const t3 = new Uint8Array(e3.length);
		        for (let n2 = 0; n2 < e3.length; n2++) t3[n2] = 255 & e3.charCodeAt(n2);
		        return t3.buffer;
		      }
		      isSecure() {
		        return "https:" === location.protocol;
		      }
		      constructor(...e3) {
		        super(...e3), this.CLOUD_HOST = "0.peerjs.com", this.CLOUD_PORT = 443, this.chunkedBrowsers = { Chrome: 1, chrome: 1 }, this.defaultConfig = xt, this.browser = Et.getBrowser(), this.browserVersion = Et.getVersion(), this.pack = z, this.unpack = F, this.supports = (function() {
		          const e4 = { browser: Et.isBrowserSupported(), webRTC: Et.isWebRTCSupported(), audioVideo: false, data: false, binaryBlob: false, reliable: false };
		          if (!e4.webRTC) return e4;
		          let t3;
		          try {
		            let n2;
		            t3 = new RTCPeerConnection(xt), e4.audioVideo = true;
		            try {
		              n2 = t3.createDataChannel("_PEERJSTEST", { ordered: true }), e4.data = true, e4.reliable = !!n2.ordered;
		              try {
		                n2.binaryType = "blob", e4.binaryBlob = !Et.isIOS;
		              } catch (e5) {
		              }
		            } catch (e5) {
		            } finally {
		              n2 && n2.close();
		            }
		          } catch (e5) {
		          } finally {
		            t3 && t3.close();
		          }
		          return e4;
		        })(), this.validateId = Rt, this.randomToken = At;
		      }
		    }();
		    var It, Mt = new class {
		      get logLevel() {
		        return this._logLevel;
		      }
		      set logLevel(e3) {
		        this._logLevel = e3;
		      }
		      log(...e3) {
		        this._logLevel >= 3 && this._print(3, ...e3);
		      }
		      warn(...e3) {
		        this._logLevel >= 2 && this._print(2, ...e3);
		      }
		      error(...e3) {
		        this._logLevel >= 1 && this._print(1, ...e3);
		      }
		      setLogFunction(e3) {
		        this._print = e3;
		      }
		      _print(e3, ...t3) {
		        const n2 = ["PeerJS: ", ...t3];
		        for (const e4 in n2) n2[e4] instanceof Error && (n2[e4] = "(" + n2[e4].name + ") " + n2[e4].message);
		        e3 >= 3 ? console.log(...n2) : e3 >= 2 ? console.warn("WARNING", ...n2) : e3 >= 1 && console.error("ERROR", ...n2);
		      }
		      constructor() {
		        this._logLevel = 0;
		      }
		    }(), Ot = Object.prototype.hasOwnProperty, Lt = "~";
		    function jt() {
		    }
		    function Bt(e3, t3, n2) {
		      this.fn = e3, this.context = t3, this.once = n2 || false;
		    }
		    function Ut(e3, t3, n2, r2, o2) {
		      if ("function" != typeof n2) throw new TypeError("The listener must be a function");
		      var i2 = new Bt(n2, r2 || e3, o2), s2 = Lt ? Lt + t3 : t3;
		      return e3._events[s2] ? e3._events[s2].fn ? e3._events[s2] = [e3._events[s2], i2] : e3._events[s2].push(i2) : (e3._events[s2] = i2, e3._eventsCount++), e3;
		    }
		    function Nt(e3, t3) {
		      0 === --e3._eventsCount ? e3._events = new jt() : delete e3._events[t3];
		    }
		    function Ft() {
		      this._events = new jt(), this._eventsCount = 0;
		    }
		    Object.create && (jt.prototype = /* @__PURE__ */ Object.create(null), new jt().__proto__ || (Lt = false)), Ft.prototype.eventNames = function() {
		      var e3, t3, n2 = [];
		      if (0 === this._eventsCount) return n2;
		      for (t3 in e3 = this._events) Ot.call(e3, t3) && n2.push(Lt ? t3.slice(1) : t3);
		      return Object.getOwnPropertySymbols ? n2.concat(Object.getOwnPropertySymbols(e3)) : n2;
		    }, Ft.prototype.listeners = function(e3) {
		      var t3 = Lt ? Lt + e3 : e3, n2 = this._events[t3];
		      if (!n2) return [];
		      if (n2.fn) return [n2.fn];
		      for (var r2 = 0, o2 = n2.length, i2 = new Array(o2); r2 < o2; r2++) i2[r2] = n2[r2].fn;
		      return i2;
		    }, Ft.prototype.listenerCount = function(e3) {
		      var t3 = Lt ? Lt + e3 : e3, n2 = this._events[t3];
		      return n2 ? n2.fn ? 1 : n2.length : 0;
		    }, Ft.prototype.emit = function(e3, t3, n2, r2, o2, i2) {
		      var s2 = Lt ? Lt + e3 : e3;
		      if (!this._events[s2]) return false;
		      var a2, c2, u2 = this._events[s2], l2 = arguments.length;
		      if (u2.fn) {
		        switch (u2.once && this.removeListener(e3, u2.fn, void 0, true), l2) {
		          case 1:
		            return u2.fn.call(u2.context), true;
		          case 2:
		            return u2.fn.call(u2.context, t3), true;
		          case 3:
		            return u2.fn.call(u2.context, t3, n2), true;
		          case 4:
		            return u2.fn.call(u2.context, t3, n2, r2), true;
		          case 5:
		            return u2.fn.call(u2.context, t3, n2, r2, o2), true;
		          case 6:
		            return u2.fn.call(u2.context, t3, n2, r2, o2, i2), true;
		        }
		        for (c2 = 1, a2 = new Array(l2 - 1); c2 < l2; c2++) a2[c2 - 1] = arguments[c2];
		        u2.fn.apply(u2.context, a2);
		      } else {
		        var p2, h2 = u2.length;
		        for (c2 = 0; c2 < h2; c2++) switch (u2[c2].once && this.removeListener(e3, u2[c2].fn, void 0, true), l2) {
		          case 1:
		            u2[c2].fn.call(u2[c2].context);
		            break;
		          case 2:
		            u2[c2].fn.call(u2[c2].context, t3);
		            break;
		          case 3:
		            u2[c2].fn.call(u2[c2].context, t3, n2);
		            break;
		          case 4:
		            u2[c2].fn.call(u2[c2].context, t3, n2, r2);
		            break;
		          default:
		            if (!a2) for (p2 = 1, a2 = new Array(l2 - 1); p2 < l2; p2++) a2[p2 - 1] = arguments[p2];
		            u2[c2].fn.apply(u2[c2].context, a2);
		        }
		      }
		      return true;
		    }, Ft.prototype.on = function(e3, t3, n2) {
		      return Ut(this, e3, t3, n2, false);
		    }, Ft.prototype.once = function(e3, t3, n2) {
		      return Ut(this, e3, t3, n2, true);
		    }, Ft.prototype.removeListener = function(e3, t3, n2, r2) {
		      var o2 = Lt ? Lt + e3 : e3;
		      if (!this._events[o2]) return this;
		      if (!t3) return Nt(this, o2), this;
		      var i2 = this._events[o2];
		      if (i2.fn) i2.fn !== t3 || r2 && !i2.once || n2 && i2.context !== n2 || Nt(this, o2);
		      else {
		        for (var s2 = 0, a2 = [], c2 = i2.length; s2 < c2; s2++) (i2[s2].fn !== t3 || r2 && !i2[s2].once || n2 && i2[s2].context !== n2) && a2.push(i2[s2]);
		        a2.length ? this._events[o2] = 1 === a2.length ? a2[0] : a2 : Nt(this, o2);
		      }
		      return this;
		    }, Ft.prototype.removeAllListeners = function(e3) {
		      var t3;
		      return e3 ? (t3 = Lt ? Lt + e3 : e3, this._events[t3] && Nt(this, t3)) : (this._events = new jt(), this._eventsCount = 0), this;
		    }, Ft.prototype.off = Ft.prototype.removeListener, Ft.prototype.addListener = Ft.prototype.on, Ft.prefixed = Lt, Ft.EventEmitter = Ft, It = Ft;
		    var zt = {};
		    Tt(zt, "ConnectionType", () => Wt), Tt(zt, "PeerErrorType", () => $t), Tt(zt, "BaseConnectionErrorType", () => Vt), Tt(zt, "DataConnectionErrorType", () => Gt), Tt(zt, "SerializationType", () => Jt), Tt(zt, "SocketEventType", () => Ht), Tt(zt, "ServerMessageType", () => Kt);
		    var Wt = (function(e3) {
		      return e3.Data = "data", e3.Media = "media", e3;
		    })({}), $t = (function(e3) {
		      return e3.BrowserIncompatible = "browser-incompatible", e3.Disconnected = "disconnected", e3.InvalidID = "invalid-id", e3.InvalidKey = "invalid-key", e3.Network = "network", e3.PeerUnavailable = "peer-unavailable", e3.SslUnavailable = "ssl-unavailable", e3.ServerError = "server-error", e3.SocketError = "socket-error", e3.SocketClosed = "socket-closed", e3.UnavailableID = "unavailable-id", e3.WebRTC = "webrtc", e3;
		    })({}), Vt = (function(e3) {
		      return e3.NegotiationFailed = "negotiation-failed", e3.ConnectionClosed = "connection-closed", e3;
		    })({}), Gt = (function(e3) {
		      return e3.NotOpenYet = "not-open-yet", e3.MessageToBig = "message-too-big", e3;
		    })({}), Jt = (function(e3) {
		      return e3.Binary = "binary", e3.BinaryUTF8 = "binary-utf8", e3.JSON = "json", e3.None = "raw", e3;
		    })({}), Ht = (function(e3) {
		      return e3.Message = "message", e3.Disconnected = "disconnected", e3.Error = "error", e3.Close = "close", e3;
		    })({}), Kt = (function(e3) {
		      return e3.Heartbeat = "HEARTBEAT", e3.Candidate = "CANDIDATE", e3.Offer = "OFFER", e3.Answer = "ANSWER", e3.Open = "OPEN", e3.Error = "ERROR", e3.IdTaken = "ID-TAKEN", e3.InvalidKey = "INVALID-KEY", e3.Leave = "LEAVE", e3.Expire = "EXPIRE", e3;
		    })({});
		    const Yt = "1.5.5";
		    class Xt extends It.EventEmitter {
		      constructor(e3, t3, n2, r2, o2, i2 = 5e3) {
		        super(), this.pingInterval = i2, this._disconnected = true, this._messagesQueue = [];
		        const s2 = e3 ? "wss://" : "ws://";
		        this._baseUrl = s2 + t3 + ":" + n2 + r2 + "peerjs?key=" + o2;
		      }
		      start(e3, t3) {
		        this._id = e3;
		        const n2 = `${this._baseUrl}&id=${e3}&token=${t3}`;
		        !this._socket && this._disconnected && (this._socket = new WebSocket(n2 + "&version=" + Yt), this._disconnected = false, this._socket.onmessage = (e4) => {
		          let t4;
		          try {
		            t4 = JSON.parse(e4.data), Mt.log("Server message received:", t4);
		          } catch (t5) {
		            return void Mt.log("Invalid server message", e4.data);
		          }
		          this.emit(Ht.Message, t4);
		        }, this._socket.onclose = (e4) => {
		          this._disconnected || (Mt.log("Socket closed.", e4), this._cleanup(), this._disconnected = true, this.emit(Ht.Disconnected));
		        }, this._socket.onopen = () => {
		          this._disconnected || (this._sendQueuedMessages(), Mt.log("Socket open"), this._scheduleHeartbeat());
		        });
		      }
		      _scheduleHeartbeat() {
		        this._wsPingTimer = setTimeout(() => {
		          this._sendHeartbeat();
		        }, this.pingInterval);
		      }
		      _sendHeartbeat() {
		        if (!this._wsOpen()) return void Mt.log("Cannot send heartbeat, because socket closed");
		        const e3 = JSON.stringify({ type: Kt.Heartbeat });
		        this._socket.send(e3), this._scheduleHeartbeat();
		      }
		      _wsOpen() {
		        return !!this._socket && 1 === this._socket.readyState;
		      }
		      _sendQueuedMessages() {
		        const e3 = [...this._messagesQueue];
		        this._messagesQueue = [];
		        for (const t3 of e3) this.send(t3);
		      }
		      send(e3) {
		        if (this._disconnected) return;
		        if (!this._id) return void this._messagesQueue.push(e3);
		        if (!e3.type) return void this.emit(Ht.Error, "Invalid message");
		        if (!this._wsOpen()) return;
		        const t3 = JSON.stringify(e3);
		        this._socket.send(t3);
		      }
		      close() {
		        this._disconnected || (this._cleanup(), this._disconnected = true);
		      }
		      _cleanup() {
		        this._socket && (this._socket.onopen = this._socket.onmessage = this._socket.onclose = null, this._socket.close(), this._socket = void 0), clearTimeout(this._wsPingTimer);
		      }
		    }
		    class qt {
		      constructor(e3) {
		        this.connection = e3;
		      }
		      startConnection(e3) {
		        const t3 = this._startPeerConnection();
		        if (this.connection.peerConnection = t3, this.connection.type === Wt.Media && e3._stream && this._addTracksToConnection(e3._stream, t3), e3.originator) {
		          const n2 = this.connection, r2 = { ordered: !!e3.reliable }, o2 = t3.createDataChannel(n2.label, r2);
		          n2._initializeDataChannel(o2), this._makeOffer();
		        } else this.handleSDP("OFFER", e3.sdp);
		      }
		      _startPeerConnection() {
		        Mt.log("Creating RTCPeerConnection.");
		        const e3 = new RTCPeerConnection(this.connection.provider.options.config);
		        return this._setupListeners(e3), e3;
		      }
		      _setupListeners(e3) {
		        const t3 = this.connection.peer, n2 = this.connection.connectionId, r2 = this.connection.type, o2 = this.connection.provider;
		        Mt.log("Listening for ICE candidates."), e3.onicecandidate = (e4) => {
		          e4.candidate && e4.candidate.candidate && (Mt.log(`Received ICE candidates for ${t3}:`, e4.candidate), o2.socket.send({ type: Kt.Candidate, payload: { candidate: e4.candidate, type: r2, connectionId: n2 }, dst: t3 }));
		        }, e3.oniceconnectionstatechange = () => {
		          switch (e3.iceConnectionState) {
		            case "failed":
		              Mt.log("iceConnectionState is failed, closing connections to " + t3), this.connection.emitError(Vt.NegotiationFailed, "Negotiation of connection to " + t3 + " failed."), this.connection.close();
		              break;
		            case "closed":
		              Mt.log("iceConnectionState is closed, closing connections to " + t3), this.connection.emitError(Vt.ConnectionClosed, "Connection to " + t3 + " closed."), this.connection.close();
		              break;
		            case "disconnected":
		              Mt.log("iceConnectionState changed to disconnected on the connection with " + t3);
		              break;
		            case "completed":
		              e3.onicecandidate = () => {
		              };
		          }
		          this.connection.emit("iceStateChanged", e3.iceConnectionState);
		        }, Mt.log("Listening for data channel"), e3.ondatachannel = (e4) => {
		          Mt.log("Received data channel");
		          const r3 = e4.channel;
		          o2.getConnection(t3, n2)._initializeDataChannel(r3);
		        }, Mt.log("Listening for remote stream"), e3.ontrack = (e4) => {
		          Mt.log("Received remote stream");
		          const r3 = e4.streams[0], i2 = o2.getConnection(t3, n2);
		          if (i2.type === Wt.Media) {
		            const e5 = i2;
		            this._addStreamToMediaConnection(r3, e5);
		          }
		        };
		      }
		      cleanup() {
		        Mt.log("Cleaning up PeerConnection to " + this.connection.peer);
		        const e3 = this.connection.peerConnection;
		        if (!e3) return;
		        this.connection.peerConnection = null, e3.onicecandidate = e3.oniceconnectionstatechange = e3.ondatachannel = e3.ontrack = () => {
		        };
		        const t3 = "closed" !== e3.signalingState;
		        let n2 = false;
		        const r2 = this.connection.dataChannel;
		        r2 && (n2 = !!r2.readyState && "closed" !== r2.readyState), (t3 || n2) && e3.close();
		      }
		      async _makeOffer() {
		        const e3 = this.connection.peerConnection, t3 = this.connection.provider;
		        try {
		          const n2 = await e3.createOffer(this.connection.options.constraints);
		          Mt.log("Created offer."), this.connection.options.sdpTransform && "function" == typeof this.connection.options.sdpTransform && (n2.sdp = this.connection.options.sdpTransform(n2.sdp) || n2.sdp);
		          try {
		            await e3.setLocalDescription(n2), Mt.log("Set localDescription:", n2, `for:${this.connection.peer}`);
		            let r2 = { sdp: n2, type: this.connection.type, connectionId: this.connection.connectionId, metadata: this.connection.metadata };
		            if (this.connection.type === Wt.Data) {
		              const e4 = this.connection;
		              r2 = { ...r2, label: e4.label, reliable: e4.reliable, serialization: e4.serialization };
		            }
		            t3.socket.send({ type: Kt.Offer, payload: r2, dst: this.connection.peer });
		          } catch (e4) {
		            "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" != e4 && (t3.emitError($t.WebRTC, e4), Mt.log("Failed to setLocalDescription, ", e4));
		          }
		        } catch (e4) {
		          t3.emitError($t.WebRTC, e4), Mt.log("Failed to createOffer, ", e4);
		        }
		      }
		      async _makeAnswer() {
		        const e3 = this.connection.peerConnection, t3 = this.connection.provider;
		        try {
		          const n2 = await e3.createAnswer();
		          Mt.log("Created answer."), this.connection.options.sdpTransform && "function" == typeof this.connection.options.sdpTransform && (n2.sdp = this.connection.options.sdpTransform(n2.sdp) || n2.sdp);
		          try {
		            await e3.setLocalDescription(n2), Mt.log("Set localDescription:", n2, `for:${this.connection.peer}`), t3.socket.send({ type: Kt.Answer, payload: { sdp: n2, type: this.connection.type, connectionId: this.connection.connectionId }, dst: this.connection.peer });
		          } catch (e4) {
		            t3.emitError($t.WebRTC, e4), Mt.log("Failed to setLocalDescription, ", e4);
		          }
		        } catch (e4) {
		          t3.emitError($t.WebRTC, e4), Mt.log("Failed to create answer, ", e4);
		        }
		      }
		      async handleSDP(e3, t3) {
		        t3 = new RTCSessionDescription(t3);
		        const n2 = this.connection.peerConnection, r2 = this.connection.provider;
		        Mt.log("Setting remote description", t3);
		        const o2 = this;
		        try {
		          await n2.setRemoteDescription(t3), Mt.log(`Set remoteDescription:${e3} for:${this.connection.peer}`), "OFFER" === e3 && await o2._makeAnswer();
		        } catch (e4) {
		          r2.emitError($t.WebRTC, e4), Mt.log("Failed to setRemoteDescription, ", e4);
		        }
		      }
		      async handleCandidate(e3) {
		        Mt.log("handleCandidate:", e3);
		        try {
		          await this.connection.peerConnection.addIceCandidate(e3), Mt.log(`Added ICE candidate for:${this.connection.peer}`);
		        } catch (e4) {
		          this.connection.provider.emitError($t.WebRTC, e4), Mt.log("Failed to handleCandidate, ", e4);
		        }
		      }
		      _addTracksToConnection(e3, t3) {
		        if (Mt.log(`add tracks from stream ${e3.id} to peer connection`), !t3.addTrack) return Mt.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
		        e3.getTracks().forEach((n2) => {
		          t3.addTrack(n2, e3);
		        });
		      }
		      _addStreamToMediaConnection(e3, t3) {
		        Mt.log(`add stream ${e3.id} to media connection ${t3.connectionId}`), t3.addStream(e3);
		      }
		    }
		    class Qt extends It.EventEmitter {
		      emitError(e3, t3) {
		        Mt.error("Error:", t3), this.emit("error", new Zt(`${e3}`, t3));
		      }
		    }
		    class Zt extends Error {
		      constructor(e3, t3) {
		        "string" == typeof t3 ? super(t3) : (super(), Object.assign(this, t3)), this.type = e3;
		      }
		    }
		    class en extends Qt {
		      get open() {
		        return this._open;
		      }
		      constructor(e3, t3, n2) {
		        super(), this.peer = e3, this.provider = t3, this.options = n2, this._open = false, this.metadata = n2.metadata;
		      }
		    }
		    class tn extends en {
		      static #e = this.ID_PREFIX = "mc_";
		      get type() {
		        return Wt.Media;
		      }
		      get localStream() {
		        return this._localStream;
		      }
		      get remoteStream() {
		        return this._remoteStream;
		      }
		      constructor(e3, t3, n2) {
		        super(e3, t3, n2), this._localStream = this.options._stream, this.connectionId = this.options.connectionId || tn.ID_PREFIX + Dt.randomToken(), this._negotiator = new qt(this), this._localStream && this._negotiator.startConnection({ _stream: this._localStream, originator: true });
		      }
		      _initializeDataChannel(e3) {
		        this.dataChannel = e3, this.dataChannel.onopen = () => {
		          Mt.log(`DC#${this.connectionId} dc connection success`), this.emit("willCloseOnRemote");
		        }, this.dataChannel.onclose = () => {
		          Mt.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
		        };
		      }
		      addStream(e3) {
		        Mt.log("Receiving stream", e3), this._remoteStream = e3, super.emit("stream", e3);
		      }
		      handleMessage(e3) {
		        const t3 = e3.type, n2 = e3.payload;
		        switch (e3.type) {
		          case Kt.Answer:
		            this._negotiator.handleSDP(t3, n2.sdp), this._open = true;
		            break;
		          case Kt.Candidate:
		            this._negotiator.handleCandidate(n2.candidate);
		            break;
		          default:
		            Mt.warn(`Unrecognized message type:${t3} from peer:${this.peer}`);
		        }
		      }
		      answer(e3, t3 = {}) {
		        if (this._localStream) return void Mt.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
		        this._localStream = e3, t3 && t3.sdpTransform && (this.options.sdpTransform = t3.sdpTransform), this._negotiator.startConnection({ ...this.options._payload, _stream: e3 });
		        const n2 = this.provider._getMessages(this.connectionId);
		        for (const e4 of n2) this.handleMessage(e4);
		        this._open = true;
		      }
		      close() {
		        this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this._localStream = null, this._remoteStream = null, this.provider && (this.provider._removeConnection(this), this.provider = null), this.options && this.options._stream && (this.options._stream = null), this.open && (this._open = false, super.emit("close"));
		      }
		    }
		    class nn {
		      constructor(e3) {
		        this._options = e3;
		      }
		      _buildRequest(e3) {
		        const t3 = this._options.secure ? "https" : "http", { host: n2, port: r2, path: o2, key: i2 } = this._options, s2 = new URL(`${t3}://${n2}:${r2}${o2}${i2}/${e3}`);
		        return s2.searchParams.set("ts", `${Date.now()}${Math.random()}`), s2.searchParams.set("version", Yt), fetch(s2.href, { referrerPolicy: this._options.referrerPolicy });
		      }
		      async retrieveId() {
		        try {
		          const e3 = await this._buildRequest("id");
		          if (200 !== e3.status) throw new Error(`Error. Status:${e3.status}`);
		          return e3.text();
		        } catch (e3) {
		          Mt.error("Error retrieving ID", e3);
		          let t3 = "";
		          throw "/" === this._options.path && this._options.host !== Dt.CLOUD_HOST && (t3 = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."), new Error("Could not get an ID from the server." + t3);
		        }
		      }
		      async listAllPeers() {
		        try {
		          const e3 = await this._buildRequest("peers");
		          if (200 !== e3.status) {
		            if (401 === e3.status) {
		              let e4 = "";
		              throw e4 = this._options.host === Dt.CLOUD_HOST ? "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key." : "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.", new Error("It doesn't look like you have permission to list peers IDs. " + e4);
		            }
		            throw new Error(`Error. Status:${e3.status}`);
		          }
		          return e3.json();
		        } catch (e3) {
		          throw Mt.error("Error retrieving list peers", e3), new Error("Could not get list peers from the server." + e3);
		        }
		      }
		    }
		    class rn extends en {
		      static #e = this.ID_PREFIX = "dc_";
		      static #t = this.MAX_BUFFERED_AMOUNT = 8388608;
		      get type() {
		        return Wt.Data;
		      }
		      constructor(e3, t3, n2) {
		        super(e3, t3, n2), this.connectionId = this.options.connectionId || rn.ID_PREFIX + At(), this.label = this.options.label || this.connectionId, this.reliable = !!this.options.reliable, this._negotiator = new qt(this), this._negotiator.startConnection(this.options._payload || { originator: true, reliable: this.reliable });
		      }
		      _initializeDataChannel(e3) {
		        this.dataChannel = e3, this.dataChannel.onopen = () => {
		          Mt.log(`DC#${this.connectionId} dc connection success`), this._open = true, this.emit("open");
		        }, this.dataChannel.onmessage = (e4) => {
		          Mt.log(`DC#${this.connectionId} dc onmessage:`, e4.data);
		        }, this.dataChannel.onclose = () => {
		          Mt.log(`DC#${this.connectionId} dc closed for:`, this.peer), this.close();
		        };
		      }
		      close(e3) {
		        e3?.flush ? this.send({ __peerData: { type: "close" } }) : (this._negotiator && (this._negotiator.cleanup(), this._negotiator = null), this.provider && (this.provider._removeConnection(this), this.provider = null), this.dataChannel && (this.dataChannel.onopen = null, this.dataChannel.onmessage = null, this.dataChannel.onclose = null, this.dataChannel = null), this.open && (this._open = false, super.emit("close")));
		      }
		      send(e3, t3 = false) {
		        if (this.open) return this._send(e3, t3);
		        this.emitError(Gt.NotOpenYet, "Connection is not open. You should listen for the `open` event before sending messages.");
		      }
		      async handleMessage(e3) {
		        const t3 = e3.payload;
		        switch (e3.type) {
		          case Kt.Answer:
		            await this._negotiator.handleSDP(e3.type, t3.sdp);
		            break;
		          case Kt.Candidate:
		            await this._negotiator.handleCandidate(t3.candidate);
		            break;
		          default:
		            Mt.warn("Unrecognized message type:", e3.type, "from peer:", this.peer);
		        }
		      }
		    }
		    class on extends rn {
		      get bufferSize() {
		        return this._bufferSize;
		      }
		      _initializeDataChannel(e3) {
		        super._initializeDataChannel(e3), this.dataChannel.binaryType = "arraybuffer", this.dataChannel.addEventListener("message", (e4) => this._handleDataMessage(e4));
		      }
		      _bufferedSend(e3) {
		        !this._buffering && this._trySend(e3) || (this._buffer.push(e3), this._bufferSize = this._buffer.length);
		      }
		      _trySend(e3) {
		        if (!this.open) return false;
		        if (this.dataChannel.bufferedAmount > rn.MAX_BUFFERED_AMOUNT) return this._buffering = true, setTimeout(() => {
		          this._buffering = false, this._tryBuffer();
		        }, 50), false;
		        try {
		          this.dataChannel.send(e3);
		        } catch (e4) {
		          return Mt.error(`DC#:${this.connectionId} Error when sending:`, e4), this._buffering = true, this.close(), false;
		        }
		        return true;
		      }
		      _tryBuffer() {
		        if (!this.open) return;
		        if (0 === this._buffer.length) return;
		        const e3 = this._buffer[0];
		        this._trySend(e3) && (this._buffer.shift(), this._bufferSize = this._buffer.length, this._tryBuffer());
		      }
		      close(e3) {
		        e3?.flush ? this.send({ __peerData: { type: "close" } }) : (this._buffer = [], this._bufferSize = 0, super.close());
		      }
		      constructor(...e3) {
		        super(...e3), this._buffer = [], this._bufferSize = 0, this._buffering = false;
		      }
		    }
		    class sn extends on {
		      close(e3) {
		        super.close(e3), this._chunkedData = {};
		      }
		      constructor(e3, t3, n2) {
		        super(e3, t3, n2), this.chunker = new Pt(), this.serialization = Jt.Binary, this._chunkedData = {};
		      }
		      _handleDataMessage({ data: e3 }) {
		        const t3 = F(e3), n2 = t3.__peerData;
		        if (n2) return "close" === n2.type ? void this.close() : void this._handleChunk(t3);
		        this.emit("data", t3);
		      }
		      _handleChunk(e3) {
		        const t3 = e3.__peerData, n2 = this._chunkedData[t3] || { data: [], count: 0, total: e3.total };
		        if (n2.data[e3.n] = new Uint8Array(e3.data), n2.count++, this._chunkedData[t3] = n2, n2.total === n2.count) {
		          delete this._chunkedData[t3];
		          const e4 = (function(e5) {
		            let t4 = 0;
		            for (const n4 of e5) t4 += n4.byteLength;
		            const n3 = new Uint8Array(t4);
		            let r2 = 0;
		            for (const t5 of e5) n3.set(t5, r2), r2 += t5.byteLength;
		            return n3;
		          })(n2.data);
		          this._handleDataMessage({ data: e4 });
		        }
		      }
		      _send(e3, t3) {
		        const n2 = z(e3);
		        if (n2 instanceof Promise) return this._send_blob(n2);
		        !t3 && n2.byteLength > this.chunker.chunkedMTU ? this._sendChunks(n2) : this._bufferedSend(n2);
		      }
		      async _send_blob(e3) {
		        const t3 = await e3;
		        t3.byteLength > this.chunker.chunkedMTU ? this._sendChunks(t3) : this._bufferedSend(t3);
		      }
		      _sendChunks(e3) {
		        const t3 = this.chunker.chunk(e3);
		        Mt.log(`DC#${this.connectionId} Try to send ${t3.length} chunks...`);
		        for (const e4 of t3) this.send(e4, true);
		      }
		    }
		    class an extends on {
		      _handleDataMessage({ data: e3 }) {
		        super.emit("data", e3);
		      }
		      _send(e3, t3) {
		        this._bufferedSend(e3);
		      }
		      constructor(...e3) {
		        super(...e3), this.serialization = Jt.None;
		      }
		    }
		    class cn extends on {
		      _handleDataMessage({ data: e3 }) {
		        const t3 = this.parse(this.decoder.decode(e3)), n2 = t3.__peerData;
		        n2 && "close" === n2.type ? this.close() : this.emit("data", t3);
		      }
		      _send(e3, t3) {
		        const n2 = this.encoder.encode(this.stringify(e3));
		        n2.byteLength >= Dt.chunkedMTU ? this.emitError(Gt.MessageToBig, "Message too big for JSON channel") : this._bufferedSend(n2);
		      }
		      constructor(...e3) {
		        super(...e3), this.serialization = Jt.JSON, this.encoder = new TextEncoder(), this.decoder = new TextDecoder(), this.stringify = JSON.stringify, this.parse = JSON.parse;
		      }
		    }
		    class un extends Qt {
		      static #e = this.DEFAULT_KEY = "peerjs";
		      get id() {
		        return this._id;
		      }
		      get options() {
		        return this._options;
		      }
		      get open() {
		        return this._open;
		      }
		      get socket() {
		        return this._socket;
		      }
		      get connections() {
		        const e3 = /* @__PURE__ */ Object.create(null);
		        for (const [t3, n2] of this._connections) e3[t3] = n2;
		        return e3;
		      }
		      get destroyed() {
		        return this._destroyed;
		      }
		      get disconnected() {
		        return this._disconnected;
		      }
		      constructor(e3, t3) {
		        let n2;
		        super(), this._serializers = { raw: an, json: cn, binary: sn, "binary-utf8": sn, default: sn }, this._id = null, this._lastServerId = null, this._destroyed = false, this._disconnected = false, this._open = false, this._connections = /* @__PURE__ */ new Map(), this._lostMessages = /* @__PURE__ */ new Map(), e3 && e3.constructor == Object ? t3 = e3 : e3 && (n2 = e3.toString()), t3 = { debug: 0, host: Dt.CLOUD_HOST, port: Dt.CLOUD_PORT, path: "/", key: un.DEFAULT_KEY, token: Dt.randomToken(), config: Dt.defaultConfig, referrerPolicy: "strict-origin-when-cross-origin", serializers: {}, ...t3 }, this._options = t3, this._serializers = { ...this._serializers, ...this.options.serializers }, "/" === this._options.host && (this._options.host = window.location.hostname), this._options.path && ("/" !== this._options.path[0] && (this._options.path = "/" + this._options.path), "/" !== this._options.path[this._options.path.length - 1] && (this._options.path += "/")), void 0 === this._options.secure && this._options.host !== Dt.CLOUD_HOST ? this._options.secure = Dt.isSecure() : this._options.host == Dt.CLOUD_HOST && (this._options.secure = true), this._options.logFunction && Mt.setLogFunction(this._options.logFunction), Mt.logLevel = this._options.debug || 0, this._api = new nn(t3), this._socket = this._createServerConnection(), Dt.supports.audioVideo || Dt.supports.data ? !n2 || Dt.validateId(n2) ? n2 ? this._initialize(n2) : this._api.retrieveId().then((e4) => this._initialize(e4)).catch((e4) => this._abort($t.ServerError, e4)) : this._delayedAbort($t.InvalidID, `ID "${n2}" is invalid`) : this._delayedAbort($t.BrowserIncompatible, "The current browser does not support WebRTC");
		      }
		      _createServerConnection() {
		        const e3 = new Xt(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
		        return e3.on(Ht.Message, (e4) => {
		          this._handleMessage(e4);
		        }), e3.on(Ht.Error, (e4) => {
		          this._abort($t.SocketError, e4);
		        }), e3.on(Ht.Disconnected, () => {
		          this.disconnected || (this.emitError($t.Network, "Lost connection to server."), this.disconnect());
		        }), e3.on(Ht.Close, () => {
		          this.disconnected || this._abort($t.SocketClosed, "Underlying socket is already closed.");
		        }), e3;
		      }
		      _initialize(e3) {
		        this._id = e3, this.socket.start(e3, this._options.token);
		      }
		      _handleMessage(e3) {
		        const t3 = e3.type, n2 = e3.payload, r2 = e3.src;
		        switch (t3) {
		          case Kt.Open:
		            this._lastServerId = this.id, this._open = true, this.emit("open", this.id);
		            break;
		          case Kt.Error:
		            this._abort($t.ServerError, n2.msg);
		            break;
		          case Kt.IdTaken:
		            this._abort($t.UnavailableID, `ID "${this.id}" is taken`);
		            break;
		          case Kt.InvalidKey:
		            this._abort($t.InvalidKey, `API KEY "${this._options.key}" is invalid`);
		            break;
		          case Kt.Leave:
		            Mt.log(`Received leave message from ${r2}`), this._cleanupPeer(r2), this._connections.delete(r2);
		            break;
		          case Kt.Expire:
		            this.emitError($t.PeerUnavailable, `Could not connect to peer ${r2}`);
		            break;
		          case Kt.Offer: {
		            const e4 = n2.connectionId;
		            let t4 = this.getConnection(r2, e4);
		            if (t4 && (t4.close(), Mt.warn(`Offer received for existing Connection ID:${e4}`)), n2.type === Wt.Media) {
		              const o3 = new tn(r2, this, { connectionId: e4, _payload: n2, metadata: n2.metadata });
		              t4 = o3, this._addConnection(r2, t4), this.emit("call", o3);
		            } else {
		              if (n2.type !== Wt.Data) return void Mt.warn(`Received malformed connection type:${n2.type}`);
		              {
		                const o3 = new this._serializers[n2.serialization](r2, this, { connectionId: e4, _payload: n2, metadata: n2.metadata, label: n2.label, serialization: n2.serialization, reliable: n2.reliable });
		                t4 = o3, this._addConnection(r2, t4), this.emit("connection", o3);
		              }
		            }
		            const o2 = this._getMessages(e4);
		            for (const e5 of o2) t4.handleMessage(e5);
		            break;
		          }
		          default: {
		            if (!n2) return void Mt.warn(`You received a malformed message from ${r2} of type ${t3}`);
		            const o2 = n2.connectionId, i2 = this.getConnection(r2, o2);
		            i2 && i2.peerConnection ? i2.handleMessage(e3) : o2 ? this._storeMessage(o2, e3) : Mt.warn("You received an unrecognized message:", e3);
		            break;
		          }
		        }
		      }
		      _storeMessage(e3, t3) {
		        this._lostMessages.has(e3) || this._lostMessages.set(e3, []), this._lostMessages.get(e3).push(t3);
		      }
		      _getMessages(e3) {
		        const t3 = this._lostMessages.get(e3);
		        return t3 ? (this._lostMessages.delete(e3), t3) : [];
		      }
		      connect(e3, t3 = {}) {
		        if (t3 = { serialization: "default", ...t3 }, this.disconnected) return Mt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."), void this.emitError($t.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
		        const n2 = new this._serializers[t3.serialization](e3, this, t3);
		        return this._addConnection(e3, n2), n2;
		      }
		      call(e3, t3, n2 = {}) {
		        if (this.disconnected) return Mt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."), void this.emitError($t.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
		        if (!t3) return void Mt.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
		        const r2 = new tn(e3, this, { ...n2, _stream: t3 });
		        return this._addConnection(e3, r2), r2;
		      }
		      _addConnection(e3, t3) {
		        Mt.log(`add connection ${t3.type}:${t3.connectionId} to peerId:${e3}`), this._connections.has(e3) || this._connections.set(e3, []), this._connections.get(e3).push(t3);
		      }
		      _removeConnection(e3) {
		        const t3 = this._connections.get(e3.peer);
		        if (t3) {
		          const n2 = t3.indexOf(e3);
		          -1 !== n2 && t3.splice(n2, 1);
		        }
		        this._lostMessages.delete(e3.connectionId);
		      }
		      getConnection(e3, t3) {
		        const n2 = this._connections.get(e3);
		        if (!n2) return null;
		        for (const e4 of n2) if (e4.connectionId === t3) return e4;
		        return null;
		      }
		      _delayedAbort(e3, t3) {
		        setTimeout(() => {
		          this._abort(e3, t3);
		        }, 0);
		      }
		      _abort(e3, t3) {
		        Mt.error("Aborting!"), this.emitError(e3, t3), this._lastServerId ? this.disconnect() : this.destroy();
		      }
		      destroy() {
		        this.destroyed || (Mt.log(`Destroy peer with ID:${this.id}`), this.disconnect(), this._cleanup(), this._destroyed = true, this.emit("close"));
		      }
		      _cleanup() {
		        for (const e3 of this._connections.keys()) this._cleanupPeer(e3), this._connections.delete(e3);
		        this.socket.removeAllListeners();
		      }
		      _cleanupPeer(e3) {
		        const t3 = this._connections.get(e3);
		        if (t3) for (const e4 of t3) e4.close();
		      }
		      disconnect() {
		        if (this.disconnected) return;
		        const e3 = this.id;
		        Mt.log(`Disconnect peer with ID:${e3}`), this._disconnected = true, this._open = false, this.socket.close(), this._lastServerId = e3, this._id = null, this.emit("disconnected", e3);
		      }
		      reconnect() {
		        if (this.disconnected && !this.destroyed) Mt.log(`Attempting reconnection to server with ID ${this._lastServerId}`), this._disconnected = false, this._initialize(this._lastServerId);
		        else {
		          if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
		          if (this.disconnected || this.open) throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);
		          Mt.error("In a hurry? We're still trying to make the initial connection!");
		        }
		      }
		      listAllPeers(e3 = (e4) => {
		      }) {
		        this._api.listAllPeers().then((t3) => e3(t3)).catch((e4) => this._abort($t.ServerError, e4));
		      }
		    }
		    var ln = un;
		    function pn(e3) {
		      return pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
		        return typeof e4;
		      } : function(e4) {
		        return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
		      }, pn(e3);
		    }
		    function hn(e3, t3) {
		      (null == t3 || t3 > e3.length) && (t3 = e3.length);
		      for (var n2 = 0, r2 = Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
		      return r2;
		    }
		    function dn(e3, t3) {
		      for (var n2 = 0; n2 < t3.length; n2++) {
		        var r2 = t3[n2];
		        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, fn(r2.key), r2);
		      }
		    }
		    function fn(e3) {
		      var t3 = (function(e4) {
		        if ("object" != pn(e4) || !e4) return e4;
		        var t4 = e4[Symbol.toPrimitive];
		        if (void 0 !== t4) {
		          var n2 = t4.call(e4, "string");
		          if ("object" != pn(n2)) return n2;
		          throw new TypeError("@@toPrimitive must return a primitive value.");
		        }
		        return String(e4);
		      })(e3);
		      return "symbol" == pn(t3) ? t3 : t3 + "";
		    }
		    var gn = (function() {
		      return (function(e3, t3) {
		        return t3 && dn(e3.prototype, t3), Object.defineProperty(e3, "prototype", { writable: false }), e3;
		      })(function e3(t3) {
		        var n2 = t3.scope, r2 = t3.logLevel, o2 = t3.enabled, i2 = void 0 === o2 || o2;
		        !(function(e4, t4) {
		          if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
		        })(this, e3), (function(e4, t4, n3) {
		          (t4 = fn(t4)) in e4 ? Object.defineProperty(e4, t4, { value: n3, enumerable: true, configurable: true, writable: true }) : e4[t4] = n3;
		        })(this, "logLevel", "info"), this.scope = n2, r2 && (this.logLevel = r2), "boolean" == typeof i2 && (i2 ? localStorage.setItem("Peer-Connect-Logging", "true") : localStorage.setItem("Peer-Connect-Logging", "false"));
		      }, [{ key: "disable", value: function() {
		        localStorage.setItem("Peer-Connect-Logging", "false");
		      } }, { key: "enable", value: function() {
		        localStorage.setItem("Peer-Connect-Logging", "true");
		      } }, { key: "formatMessage", value: function(e3, t3) {
		        var n2 = "Info";
		        return "error" == e3 ? n2 = "Error" : "warn" == e3 ? n2 = "Warning" : "debug" == e3 && (n2 = "Debug"), "%c".concat(n2, "%c %c").concat(this.scope, "%c ").concat(t3);
		      } }, { key: "getTagStyle", value: function(e3) {
		        var t3 = "\n      padding: 2px 4px; \n      border-radius: 4px; \n      font-weight: bold';\n    ";
		        return "error" == e3 ? t3 = "\n        color: white; \n        background-color: #FF0012;\n        ".concat(t3, " \n      ") : "warn" == e3 ? t3 = "\n        color: black; \n        background-color: #FFD900;\n        ".concat(t3, " \n      ") : "info" == e3 ? t3 = "\n        color: white; \n        background-color: #0084B0; \n        ".concat(t3, "\n      ") : "debug" == e3 && (t3 = "\n        color: white; \n        background-color: #5BE300; \n        ".concat(t3, "\n      ")), t3;
		      } }, { key: "log", value: function(e3, t3) {
		        var n2 = "\n      color: white; \n      background-color: #454545; \n      padding: 2px 4px; \n      border-radius: 4px; \n      font-weight: bold';\n    ";
		        "true" === localStorage.getItem("Peer-Connect-Logging") && ("debug" === e3 || "info" === e3 ? console.log(this.formatMessage(e3, t3), this.getTagStyle(e3), "", n2, "color: black") : "warn" === e3 ? console.warn(this.formatMessage(e3, t3), this.getTagStyle(e3), "", n2, "color: black") : "error" === e3 && console.error(this.formatMessage(e3, t3), this.getTagStyle(e3), "", n2, "color: black"));
		      } }, { key: "argsToString", value: function(e3) {
		        var t3, n2 = "", r2 = (function(e4, t4) {
		          var n3 = "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
		          if (!n3) {
		            if (Array.isArray(e4) || (n3 = (function(e5, t5) {
		              if (e5) {
		                if ("string" == typeof e5) return hn(e5, t5);
		                var n4 = {}.toString.call(e5).slice(8, -1);
		                return "Object" === n4 && e5.constructor && (n4 = e5.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e5) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? hn(e5, t5) : void 0;
		              }
		            })(e4)) || t4 && e4 && "number" == typeof e4.length) {
		              n3 && (e4 = n3);
		              var r3 = 0, o3 = function() {
		              };
		              return { s: o3, n: function() {
		                return r3 >= e4.length ? { done: true } : { done: false, value: e4[r3++] };
		              }, e: function(e5) {
		                throw e5;
		              }, f: o3 };
		            }
		            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		          }
		          var i2, s2 = true, a2 = false;
		          return { s: function() {
		            n3 = n3.call(e4);
		          }, n: function() {
		            var e5 = n3.next();
		            return s2 = e5.done, e5;
		          }, e: function(e5) {
		            a2 = true, i2 = e5;
		          }, f: function() {
		            try {
		              s2 || null == n3.return || n3.return();
		            } finally {
		              if (a2) throw i2;
		            }
		          } };
		        })(e3);
		        try {
		          for (r2.s(); !(t3 = r2.n()).done; ) {
		            var o2 = t3.value;
		            n2 += "string" == typeof o2 || "number" == typeof o2 || "boolean" == typeof o2 ? o2 + ",\n" : JSON.stringify(o2, void 0, 4) + ",\n";
		          }
		        } catch (e4) {
		          r2.e(e4);
		        } finally {
		          r2.f();
		        }
		        return n2.replace(/,\n$/, "");
		      } }, { key: "debug", value: function() {
		        if ("debug" === this.logLevel) {
		          for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++) t3[n2] = arguments[n2];
		          this.log("debug", this.argsToString(t3));
		        }
		      } }, { key: "info", value: function() {
		        if (["debug", "info"].includes(this.logLevel)) {
		          for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++) t3[n2] = arguments[n2];
		          this.log("info", this.argsToString(t3));
		        }
		      } }, { key: "warn", value: function() {
		        if (["debug", "info", "warn"].includes(this.logLevel)) {
		          for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++) t3[n2] = arguments[n2];
		          this.log("warn", this.argsToString(t3));
		        }
		      } }, { key: "error", value: function() {
		        for (var e3 = arguments.length, t3 = new Array(e3), n2 = 0; n2 < e3; n2++) t3[n2] = arguments[n2];
		        this.log("error", this.argsToString(t3));
		      } }]);
		    })();
		    function yn(e3) {
		      return yn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
		        return typeof e4;
		      } : function(e4) {
		        return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
		      }, yn(e3);
		    }
		    function mn(e3, t3) {
		      (null == t3 || t3 > e3.length) && (t3 = e3.length);
		      for (var n2 = 0, r2 = Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
		      return r2;
		    }
		    function vn(e3, t3) {
		      for (var n2 = 0; n2 < t3.length; n2++) {
		        var r2 = t3[n2];
		        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, wn(r2.key), r2);
		      }
		    }
		    function bn(e3, t3, n2) {
		      return (t3 = wn(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
		    }
		    function wn(e3) {
		      var t3 = (function(e4) {
		        if ("object" != yn(e4) || !e4) return e4;
		        var t4 = e4[Symbol.toPrimitive];
		        if (void 0 !== t4) {
		          var n2 = t4.call(e4, "string");
		          if ("object" != yn(n2)) return n2;
		          throw new TypeError("@@toPrimitive must return a primitive value.");
		        }
		        return String(e4);
		      })(e3);
		      return "symbol" == yn(t3) ? t3 : t3 + "";
		    }
		    var Cn = (function() {
		      return (function(e3, t3) {
		        return t3 && vn(e3.prototype, t3), Object.defineProperty(e3, "prototype", { writable: false }), e3;
		      })(function e3(t3, n2) {
		        var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e4;
		        !(function(e4, t4) {
		          if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
		        })(this, e3), bn(this, "handlers", /* @__PURE__ */ new Map()), bn(this, "pending", /* @__PURE__ */ new Map()), this.conn = t3, this.logger = n2, this.timeoutMs = r2;
		      }, [{ key: "peerId", get: function() {
		        return this.conn.peer;
		      } }, { key: "register", value: function(e3, t3) {
		        this.handlers.set(e3, t3);
		      } }, { key: "call", value: function(e3, t3, n2) {
		        var r2 = this, o2 = "".concat(Date.now(), "-").concat(Math.random().toString(36).slice(2)), i2 = setTimeout(function() {
		          r2.pending.delete(o2), r2.logger.warn("PeerRpc: call '".concat(e3, "' timed out")), n2({ error: "timeout" });
		        }, this.timeoutMs);
		        this.pending.set(o2, { callback: n2, timer: i2 }), this.send({ _rpcId: o2, _method: e3, _args: t3 });
		      } }, { key: "onData", value: function(e3) {
		        var t3, n2 = this;
		        try {
		          t3 = "string" == typeof e3 ? JSON.parse(e3) : e3;
		        } catch (e4) {
		          return void this.logger.warn("PeerRpc: failed to parse incoming message");
		        }
		        if ("string" == typeof t3._method) {
		          var r2 = this.handlers.get(t3._method);
		          return r2 ? void r2(this.conn.peer, t3._args, function(e4) {
		            n2.send({ _rpcId: t3._rpcId, _result: e4 });
		          }) : void this.logger.warn("PeerRpc: no handler registered for '".concat(t3._method, "'"));
		        }
		        if ("string" == typeof t3._rpcId && "_result" in t3) {
		          var o2 = this.pending.get(t3._rpcId);
		          o2 && (clearTimeout(o2.timer), this.pending.delete(t3._rpcId), o2.callback(t3._result));
		        }
		      } }, { key: "send", value: function(e3) {
		        try {
		          this.conn.send(JSON.stringify(e3));
		        } catch (e4) {
		          this.logger.error("PeerRpc: failed to send message", e4);
		        }
		      } }, { key: "destroy", value: function() {
		        var e3, t3 = (function(e4, t4) {
		          var n3 = "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
		          if (!n3) {
		            if (Array.isArray(e4) || (n3 = (function(e5, t5) {
		              if (e5) {
		                if ("string" == typeof e5) return mn(e5, t5);
		                var n4 = {}.toString.call(e5).slice(8, -1);
		                return "Object" === n4 && e5.constructor && (n4 = e5.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e5) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? mn(e5, t5) : void 0;
		              }
		            })(e4)) || t4 && e4 && "number" == typeof e4.length) {
		              n3 && (e4 = n3);
		              var r2 = 0, o2 = function() {
		              };
		              return { s: o2, n: function() {
		                return r2 >= e4.length ? { done: true } : { done: false, value: e4[r2++] };
		              }, e: function(e5) {
		                throw e5;
		              }, f: o2 };
		            }
		            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		          }
		          var i2, s2 = true, a2 = false;
		          return { s: function() {
		            n3 = n3.call(e4);
		          }, n: function() {
		            var e5 = n3.next();
		            return s2 = e5.done, e5;
		          }, e: function(e5) {
		            a2 = true, i2 = e5;
		          }, f: function() {
		            try {
		              s2 || null == n3.return || n3.return();
		            } finally {
		              if (a2) throw i2;
		            }
		          } };
		        })(this.pending.values());
		        try {
		          for (t3.s(); !(e3 = t3.n()).done; ) {
		            var n2 = e3.value.timer;
		            clearTimeout(n2);
		          }
		        } catch (e4) {
		          t3.e(e4);
		        } finally {
		          t3.f();
		        }
		        this.pending.clear(), this.handlers.clear();
		      } }]);
		    })();
		    function _n(e3, t3) {
		      var n2 = localStorage.getItem(e3);
		      if (n2) return n2;
		      var r2 = (function(e4) {
		        for (var t4, n3 = [navigator.userAgent, navigator.language, "".concat(screen.width, "x").concat(screen.height), String((/* @__PURE__ */ new Date()).getTimezoneOffset()), String(null !== (t4 = navigator.hardwareConcurrency) && void 0 !== t4 ? t4 : "unknown")].join("|"), r3 = 0, o2 = 0; o2 < n3.length; o2++) r3 = (r3 << 5) - r3 + n3.charCodeAt(o2), r3 &= r3;
		        return "".concat(e4, "-").concat(Math.abs(r3).toString(36), "-").concat(Date.now().toString(24));
		      })(t3);
		      return localStorage.setItem(e3, r2), r2;
		    }
		    function Sn(e3) {
		      return Sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
		        return typeof e4;
		      } : function(e4) {
		        return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
		      }, Sn(e3);
		    }
		    function Tn(e3) {
		      return (function(e4) {
		        if (Array.isArray(e4)) return Pn(e4);
		      })(e3) || (function(e4) {
		        if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"]) return Array.from(e4);
		      })(e3) || (function(e4, t3) {
		        if (e4) {
		          if ("string" == typeof e4) return Pn(e4, t3);
		          var n2 = {}.toString.call(e4).slice(8, -1);
		          return "Object" === n2 && e4.constructor && (n2 = e4.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e4) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Pn(e4, t3) : void 0;
		        }
		      })(e3) || (function() {
		        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		      })();
		    }
		    function Pn(e3, t3) {
		      (null == t3 || t3 > e3.length) && (t3 = e3.length);
		      for (var n2 = 0, r2 = Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
		      return r2;
		    }
		    function kn() {
		      var e3, t3, n2 = "function" == typeof Symbol ? Symbol : {}, r2 = n2.iterator || "@@iterator", o2 = n2.toStringTag || "@@toStringTag";
		      function i2(n3, r3, o3, i3) {
		        var c3 = r3 && r3.prototype instanceof a2 ? r3 : a2, u3 = Object.create(c3.prototype);
		        return En(u3, "_invoke", (function(n4, r4, o4) {
		          var i4, a3, c4, u4 = 0, l3 = o4 || [], p3 = false, h3 = { p: 0, n: 0, v: e3, a: d2, f: d2.bind(e3, 4), d: function(t4, n5) {
		            return i4 = t4, a3 = 0, c4 = e3, h3.n = n5, s2;
		          } };
		          function d2(n5, r5) {
		            for (a3 = n5, c4 = r5, t3 = 0; !p3 && u4 && !o5 && t3 < l3.length; t3++) {
		              var o5, i5 = l3[t3], d3 = h3.p, f2 = i5[2];
		              n5 > 3 ? (o5 = f2 === r5) && (c4 = i5[(a3 = i5[4]) ? 5 : (a3 = 3, 3)], i5[4] = i5[5] = e3) : i5[0] <= d3 && ((o5 = n5 < 2 && d3 < i5[1]) ? (a3 = 0, h3.v = r5, h3.n = i5[1]) : d3 < f2 && (o5 = n5 < 3 || i5[0] > r5 || r5 > f2) && (i5[4] = n5, i5[5] = r5, h3.n = f2, a3 = 0));
		            }
		            if (o5 || n5 > 1) return s2;
		            throw p3 = true, r5;
		          }
		          return function(o5, l4, f2) {
		            if (u4 > 1) throw TypeError("Generator is already running");
		            for (p3 && 1 === l4 && d2(l4, f2), a3 = l4, c4 = f2; (t3 = a3 < 2 ? e3 : c4) || !p3; ) {
		              i4 || (a3 ? a3 < 3 ? (a3 > 1 && (h3.n = -1), d2(a3, c4)) : h3.n = c4 : h3.v = c4);
		              try {
		                if (u4 = 2, i4) {
		                  if (a3 || (o5 = "next"), t3 = i4[o5]) {
		                    if (!(t3 = t3.call(i4, c4))) throw TypeError("iterator result is not an object");
		                    if (!t3.done) return t3;
		                    c4 = t3.value, a3 < 2 && (a3 = 0);
		                  } else 1 === a3 && (t3 = i4.return) && t3.call(i4), a3 < 2 && (c4 = TypeError("The iterator does not provide a '" + o5 + "' method"), a3 = 1);
		                  i4 = e3;
		                } else if ((t3 = (p3 = h3.n < 0) ? c4 : n4.call(r4, h3)) !== s2) break;
		              } catch (t4) {
		                i4 = e3, a3 = 1, c4 = t4;
		              } finally {
		                u4 = 1;
		              }
		            }
		            return { value: t3, done: p3 };
		          };
		        })(n3, o3, i3), true), u3;
		      }
		      var s2 = {};
		      function a2() {
		      }
		      function c2() {
		      }
		      function u2() {
		      }
		      t3 = Object.getPrototypeOf;
		      var l2 = [][r2] ? t3(t3([][r2]())) : (En(t3 = {}, r2, function() {
		        return this;
		      }), t3), p2 = u2.prototype = a2.prototype = Object.create(l2);
		      function h2(e4) {
		        return Object.setPrototypeOf ? Object.setPrototypeOf(e4, u2) : (e4.__proto__ = u2, En(e4, o2, "GeneratorFunction")), e4.prototype = Object.create(p2), e4;
		      }
		      return c2.prototype = u2, En(p2, "constructor", u2), En(u2, "constructor", c2), c2.displayName = "GeneratorFunction", En(u2, o2, "GeneratorFunction"), En(p2), En(p2, o2, "Generator"), En(p2, r2, function() {
		        return this;
		      }), En(p2, "toString", function() {
		        return "[object Generator]";
		      }), (kn = function() {
		        return { w: i2, m: h2 };
		      })();
		    }
		    function En(e3, t3, n2, r2) {
		      var o2 = Object.defineProperty;
		      try {
		        o2({}, "", {});
		      } catch (e4) {
		        o2 = 0;
		      }
		      En = function(e4, t4, n3, r3) {
		        function i2(t5, n4) {
		          En(e4, t5, function(e5) {
		            return this._invoke(t5, n4, e5);
		          });
		        }
		        t4 ? o2 ? o2(e4, t4, { value: n3, enumerable: !r3, configurable: !r3, writable: !r3 }) : e4[t4] = n3 : (i2("next", 0), i2("throw", 1), i2("return", 2));
		      }, En(e3, t3, n2, r2);
		    }
		    function Rn(e3, t3, n2, r2, o2, i2, s2) {
		      try {
		        var a2 = e3[i2](s2), c2 = a2.value;
		      } catch (e4) {
		        return void n2(e4);
		      }
		      a2.done ? t3(c2) : Promise.resolve(c2).then(r2, o2);
		    }
		    function An(e3) {
		      return function() {
		        var t3 = this, n2 = arguments;
		        return new Promise(function(r2, o2) {
		          var i2 = e3.apply(t3, n2);
		          function s2(e4) {
		            Rn(i2, r2, o2, s2, a2, "next", e4);
		          }
		          function a2(e4) {
		            Rn(i2, r2, o2, s2, a2, "throw", e4);
		          }
		          s2(void 0);
		        });
		      };
		    }
		    function xn(e3, t3) {
		      for (var n2 = 0; n2 < t3.length; n2++) {
		        var r2 = t3[n2];
		        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, In(r2.key), r2);
		      }
		    }
		    function Dn(e3, t3, n2) {
		      return (t3 = In(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
		    }
		    function In(e3) {
		      var t3 = (function(e4) {
		        if ("object" != Sn(e4) || !e4) return e4;
		        var t4 = e4[Symbol.toPrimitive];
		        if (void 0 !== t4) {
		          var n2 = t4.call(e4, "string");
		          if ("object" != Sn(n2)) return n2;
		          throw new TypeError("@@toPrimitive must return a primitive value.");
		        }
		        return String(e4);
		      })(e3);
		      return "symbol" == Sn(t3) ? t3 : t3 + "";
		    }
		    var Mn = (function() {
		      return (function(e3, t3) {
		        return t3 && xn(e3.prototype, t3), Object.defineProperty(e3, "prototype", { writable: false }), e3;
		      })(function e3(t3) {
		        var n2, r2, o2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		        !(function(e4, t4) {
		          if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
		        })(this, e3), Dn(this, "identicon", null), Dn(this, "logLevel", "info"), Dn(this, "walletPeer", null), Dn(this, "discoveryPeer", null), Dn(this, "activeConn", null), Dn(this, "activeRpc", null), Dn(this, "dappIdentifier", null), Dn(this, "cip30Functions", ["getNetworkId", "getUtxos", "getCollateral", "getBalance", "getUsedAddresses", "getUnusedAddresses", "getChangeAddress", "getRewardAddresses", "signTx", "signData", "submitTx"]), Dn(this, "setLogLevel", function(e4) {
		          o2.logLevel = e4, o2.logger.logLevel = e4;
		        }), Dn(this, "setUpDiscoveryPeer", function() {
		          if (!o2.discoveryPeer || o2.discoveryPeer.destroyed) {
		            var e4 = _n("peer-connect-wallet-discovery-id", "wallet-disc");
		            if (o2.logger.debug("WALLET: discovery peer ID:", e4), h.saveDiscoveryPeerId(e4), o2.discoveryPeer) try {
		              o2.discoveryPeer.destroy();
		            } catch (e5) {
		            }
		            o2.discoveryPeer = new ln(e4, o2.peerJsConfig), o2.discoveryPeer.on("open", function(e5) {
		              o2.logger.debug("WALLET: discovery peer open, ID:", e5);
		            }), o2.discoveryPeer.on("connection", function(e5) {
		              o2.logger.debug("WALLET: DApp connecting to discovery peer from:", e5.peer);
		              var t4 = new Cn(e5, o2.logger);
		              e5.on("open", function() {
		                o2.logger.debug("WALLET: DApp discovery connection open");
		              }), e5.on("data", function(e6) {
		                return t4.onData(e6);
		              }), e5.on("error", function(e6) {
		                return o2.logger.warn("WALLET: discovery connection error", e6);
		              }), t4.register("connect", function(e6, t5, n3) {
		                o2.logger.debug("WALLET: DApp connecting via discovery, dApp address:", t5.dappAddress), o2.connect(t5.dappAddress), n3(true);
		              });
		            }), o2.discoveryPeer.on("error", function(e5) {
		              o2.logger.warn("WALLET: discovery peer error:", e5);
		            });
		          }
		        }), Dn(this, "getDiscoveryAddress", function() {
		          var e4, t4;
		          return null !== (e4 = null === (t4 = o2.discoveryPeer) || void 0 === t4 ? void 0 : t4.id) && void 0 !== e4 ? e4 : null;
		        }), Dn(this, "setOnConnect", function(e4) {
		          o2.onConnect = e4;
		        }), Dn(this, "setOnDisconnect", function(e4) {
		          o2.onDisconnect = e4;
		        }), Dn(this, "setOnServerShutdown", function(e4) {
		          o2.onServerShutdown = e4;
		        }), Dn(this, "setOnApiInject", function(e4) {
		          o2.onApiInject = e4;
		        }), Dn(this, "injectApi", function() {
		          var e4, t4, n3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
		          if (!o2.activeRpc) throw new Error("Not connected to a DApp.");
		          var r3 = M(null !== (e4 = o2._cip30ExperimentalApi) && void 0 !== e4 ? e4 : new I({})), i3 = M(null !== (t4 = o2._cip30EnableExperimentalApi) && void 0 !== t4 ? t4 : new I({})), s2 = { api: { apiVersion: o2.walletInfo.version, name: o2.walletInfo.name, icon: o2.walletInfo.icon, methods: o2.cip30Functions, experimentalApi: j(r3), fullExperimentalApi: j(i3) }, overwrite: n3 };
		          o2.activeRpc.call("api", s2, function(e5) {
		            var t5;
		            e5.error && o2.logger.warn("Api could not be injected. Error: " + (null !== (t5 = e5.errorMessage) && void 0 !== t5 ? t5 : "unknown error.")), o2.onApiInject(e5);
		          });
		        }), Dn(this, "generateIdenticon", function() {
		          var e4;
		          if (null === (e4 = o2.walletPeer) || void 0 === e4 || !e4.id || !o2.dappIdentifier) throw new Error("Cannot generate identicon: missing peer ID or DApp identifier.");
		          o2.identicon = C.getBase64Identicon(o2.walletPeer.id + o2.dappIdentifier);
		        }), Dn(this, "getIdenticon", function() {
		          return o2.identicon;
		        }), this.walletInfo = t3, this.peerJsConfig = null !== (n2 = i2.peerJsConfig) && void 0 !== n2 ? n2 : {}, this.logLevel = null !== (r2 = i2.logLevel) && void 0 !== r2 ? r2 : "info", this.logger = new gn({ scope: "CardanoPeerConnect", logLevel: this.logLevel }), this.onConnect = function() {
		        }, this.onDisconnect = function() {
		        }, this.onServerShutdown = function() {
		        }, this.onApiInject = function() {
		        }, this.setUpDiscoveryPeer();
		      }, [{ key: "setExperimentalApi", value: function(e3) {
		        this._cip30ExperimentalApi = e3;
		      } }, { key: "setEnableExperimentalApi", value: function(e3) {
		        this._cip30EnableExperimentalApi = e3;
		      } }, { key: "connect", value: function(e3) {
		        var t3, n2 = this;
		        this.dappIdentifier = e3, this.activeRpc && (this.activeRpc.destroy(), this.activeRpc = null), null !== (t3 = this.activeConn) && void 0 !== t3 && t3.open && this.activeConn.close(), this.activeConn = null;
		        var r2 = _n("peer-connect-wallet-id", "wallet");
		        this.logger.debug("WALLET: connecting to DApp:", e3);
		        var o2 = function() {
		          var t4 = function(r3) {
		            var o3, i2, s2 = n2.walletPeer.connect(e3, { reliable: true });
		            n2.activeConn = s2;
		            var a2 = new Cn(s2, n2.logger);
		            n2.activeRpc = a2, a2.register("shutdown", (function() {
		              var e4 = An(kn().m(function e5(t5, r4, o4) {
		                return kn().w(function(e6) {
		                  for (; ; ) switch (e6.n) {
		                    case 0:
		                      if (t5 === r4.dApp.address) {
		                        e6.n = 1;
		                        break;
		                      }
		                      throw new Error("Address mismatch in shutdown: ".concat(t5, " vs ").concat(r4.dApp.address));
		                    case 1:
		                      a2.destroy(), n2.activeRpc = null, n2.activeConn = null, n2.onServerShutdown(r4), n2.logger.debug("WALLET: server shutdown, re-establishing discovery"), n2.setUpDiscoveryPeer();
		                    case 2:
		                      return e6.a(2);
		                  }
		                }, e5);
		              }));
		              return function(t5, n3, r4) {
		                return e4.apply(this, arguments);
		              };
		            })()), a2.register("invoke", (function() {
		              var t5 = An(kn().m(function t6(r4, o4, i3) {
		                var s3, a3, c2;
		                return kn().w(function(t7) {
		                  for (; ; ) switch (t7.n) {
		                    case 0:
		                      if (s3 = o4[0], r4 !== e3) {
		                        t7.n = 2;
		                        break;
		                      }
		                      return t7.n = 1, (a3 = n2)[s3].apply(a3, Tn(o4.slice(1)));
		                    case 1:
		                      void 0 !== (c2 = t7.v) && i3(c2);
		                    case 2:
		                      return t7.a(2);
		                  }
		                }, t6);
		              }));
		              return function(e4, n3, r4) {
		                return t5.apply(this, arguments);
		              };
		            })()), U(a2, "invokeExperimental", null !== (o3 = n2._cip30ExperimentalApi) && void 0 !== o3 ? o3 : new I({}), e3), U(a2, "invokeEnableExperimental", null !== (i2 = n2._cip30EnableExperimentalApi) && void 0 !== i2 ? i2 : new I({}), e3), s2.on("open", function() {
		              n2.logger.debug("WALLET: connection to DApp open, calling connect RPC"), a2.call("connect", n2.walletInfo, function(e4) {
		                var t5;
		                n2.logger.debug("WALLET: DApp connect response:", e4), e4.connected ? (n2.injectApi(), null !== (t5 = n2.discoveryPeer) && void 0 !== t5 && t5.id && a2.call("setDiscovery", { walletDiscoveryAddress: n2.discoveryPeer.id }, function(e5) {
		                  n2.logger.debug("WALLET: setDiscovery result:", e5);
		                })) : n2.logger.warn("WALLET: connection rejected:", e4.errorMessage), n2.generateIdenticon(), n2.onConnect(e4);
		              });
		            }), s2.on("error", function(e4) {
		              n2.logger.warn("WALLET: connection error (attempt ".concat(r3, "):"), e4), n2.activeRpc === a2 && r3 < 25 ? setTimeout(function() {
		                return t4(r3 + 1);
		              }, 200) : r3 >= 25 && n2.logger.error("WALLET: failed to connect after 25 attempts");
		            }), s2.on("close", function() {
		              n2.logger.info("WALLET: connection to DApp closed"), n2.activeRpc === a2 && (a2.destroy(), n2.activeRpc = null, n2.activeConn = null);
		            }), s2.on("data", function(e4) {
		              return a2.onData(e4);
		            });
		          };
		          t4(1);
		        };
		        return !this.walletPeer || this.walletPeer.destroyed ? (this.walletPeer = new ln(r2, this.peerJsConfig), this.walletPeer.on("error", function(e4) {
		          return n2.logger.error("WALLET: peer error:", e4);
		        }), this.walletPeer.once("open", o2)) : this.walletPeer.open ? o2() : this.walletPeer.once("open", o2), r2;
		      } }, { key: "disconnect", value: function(e3) {
		        var t3 = this;
		        if (!this.activeRpc) throw new Error("Not connected to a DApp.");
		        this.activeRpc.call("disconnect", this.walletInfo, function(e4) {
		          var n2;
		          null !== (n2 = t3.activeConn) && void 0 !== n2 && n2.open && t3.activeConn.close(), t3.activeRpc && (t3.activeRpc.destroy(), t3.activeRpc = null), t3.activeConn = null, t3.onDisconnect(e4), t3.logger.debug("WALLET: setup discovery after disconnect"), t3.setUpDiscoveryPeer();
		        });
		      } }]);
		    })(), On = n(684), Ln = n.n(On);
		    function jn(e3) {
		      return jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
		        return typeof e4;
		      } : function(e4) {
		        return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
		      }, jn(e3);
		    }
		    function Bn(e3, t3) {
		      (null == t3 || t3 > e3.length) && (t3 = e3.length);
		      for (var n2 = 0, r2 = Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
		      return r2;
		    }
		    function Un(e3, t3) {
		      var n2 = Object.keys(e3);
		      if (Object.getOwnPropertySymbols) {
		        var r2 = Object.getOwnPropertySymbols(e3);
		        t3 && (r2 = r2.filter(function(t4) {
		          return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
		        })), n2.push.apply(n2, r2);
		      }
		      return n2;
		    }
		    function Nn(e3) {
		      for (var t3 = 1; t3 < arguments.length; t3++) {
		        var n2 = null != arguments[t3] ? arguments[t3] : {};
		        t3 % 2 ? Un(Object(n2), true).forEach(function(t4) {
		          zn(e3, t4, n2[t4]);
		        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : Un(Object(n2)).forEach(function(t4) {
		          Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
		        });
		      }
		      return e3;
		    }
		    function Fn(e3, t3) {
		      for (var n2 = 0; n2 < t3.length; n2++) {
		        var r2 = t3[n2];
		        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, Wn(r2.key), r2);
		      }
		    }
		    function zn(e3, t3, n2) {
		      return (t3 = Wn(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
		    }
		    function Wn(e3) {
		      var t3 = (function(e4) {
		        if ("object" != jn(e4) || !e4) return e4;
		        var t4 = e4[Symbol.toPrimitive];
		        if (void 0 !== t4) {
		          var n2 = t4.call(e4, "string");
		          if ("object" != jn(n2)) return n2;
		          throw new TypeError("@@toPrimitive must return a primitive value.");
		        }
		        return String(e4);
		      })(e3);
		      return "symbol" == jn(t3) ? t3 : t3 + "";
		    }
		    var $n = (function() {
		      return (function(e3, t3) {
		        return t3 && Fn(e3.prototype, t3), Object.defineProperty(e3, "prototype", { writable: false }), e3;
		      })(function e3(t3) {
		        var n2 = this, r2 = t3.dAppInfo, o2 = t3.walletDiscoveryPeerId, i2 = t3.loggingEnabled, s2 = t3.verifyConnection, a2 = t3.onConnect, c2 = t3.onDisconnect, u2 = t3.onApiEject, l2 = t3.onApiInject, p2 = t3.useWalletDiscovery, d2 = t3.peerJsConfig;
		        !(function(e4, t4) {
		          if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
		        })(this, e3), zn(this, "walletDiscoveryPeer", null), zn(this, "activeRpc", null), zn(this, "connectedWallet", null), zn(this, "enableLogging", false), zn(this, "logLevel", "info"), zn(this, "identicon", null), zn(this, "setUpDiscoveryPeer", function(e4) {
		          var t4 = null != e4 ? e4 : h.getWalletDiscoveryPeerId();
		          if (t4) {
		            n2.logger.debug("DApp: setting up discovery peer targeting wallet at", t4), n2.walletDiscoveryPeer && !n2.walletDiscoveryPeer.destroyed && n2.walletDiscoveryPeer.destroy();
		            var r3 = _n("peer-connect-dapp-discovery-id", "dapp-disc");
		            h.saveDiscoveryPeerId(r3), n2.walletDiscoveryPeer = new ln(r3, n2.peerJsConfig), n2.walletDiscoveryPeer.on("open", function() {
		              if (n2.walletDiscoveryPeer) {
		                n2.logger.debug("DApp: discovery peer open, connecting to wallet discovery:", t4);
		                var e5 = n2.walletDiscoveryPeer.connect(t4, { reliable: true }), r4 = new Cn(e5, n2.logger);
		                e5.on("open", function() {
		                  n2.logger.debug("DApp: discovery connected to wallet, calling connect RPC"), r4.call("connect", { dappAddress: n2.peer.id }, function(e6) {
		                    n2.logger.debug("DApp: discovery connect RPC response:", e6);
		                  });
		                }), e5.on("data", function(e6) {
		                  return r4.onData(e6);
		                }), e5.on("error", function(e6) {
		                  return n2.logger.warn("DApp: discovery connection error", e6);
		                });
		              }
		            }), n2.walletDiscoveryPeer.on("error", function(e5) {
		              n2.logger.warn("DApp: discovery peer error", e5);
		            });
		          }
		        }), zn(this, "setLogLevel", function(e4) {
		          n2.logLevel = e4, n2.logger.logLevel = e4;
		        }), zn(this, "leftServer", function(e4) {
		          if (e4 === n2.connectedWallet) {
		            n2.connectedWallet = null, n2.onDisconnect && n2.onDisconnect(e4);
		            var t4 = window.cardano || {}, r3 = Object.keys(t4).find(function(n3) {
		              return t4[n3].identifier === e4;
		            });
		            r3 ? (n2.logger.info("".concat(e4, " disconnected. ").concat(r3, " removed from window.cardano")), delete window.cardano[r3.toLowerCase()], n2.onApiEject && n2.onApiEject(r3, e4)) : n2.logger.info("".concat(e4, " disconnected. Cleanup was not necessary."));
		          }
		        }), zn(this, "shutdownServer", function() {
		          if (n2.connectedWallet && n2.activeRpc) {
		            var e4 = { connected: false, error: false, errorMessage: "Server is closing connections.", dApp: n2.dAppInfo };
		            n2.activeRpc.call("shutdown", e4, function() {
		            });
		          }
		        }), zn(this, "isWalletNameInjected", function(e4) {
		          var t4 = window.cardano || {};
		          return Object.keys(t4).find(function(t5) {
		            return t5 === e4.toLowerCase();
		          });
		        }), zn(this, "isP2pWalletCompliantName", function(e4) {
		          return e4.includes("p2p");
		        }), zn(this, "generateIdenticon", function() {
		          n2.identicon = C.getBase64Identicon(n2.connectedWallet + n2.getAddress());
		        }), zn(this, "getIdenticon", function() {
		          return n2.identicon;
		        }), i2 && (this.enableLogging = i2), this.logger = new gn({ scope: "DAppPeerConnect", logLevel: "info", enabled: i2 }), this.peerJsConfig = null != d2 ? d2 : {};
		        var f2 = _n("peer-connect-dapp-id", "dapp");
		        this.peer = new ln(f2, this.peerJsConfig), this.dAppInfo = Nn(Nn({}, r2), {}, { address: f2 }), this.onConnect = a2, this.onDisconnect = c2, this.onApiEject = u2, this.onApiInject = l2, this.logger.info("DApp peer ID: ".concat(f2)), this.peer.on("open", function(e4) {
		          n2.logger.info("DApp peer server ready, ID:", e4), n2.dAppInfo.address = e4;
		        }), this.peer.on("connection", function(e4) {
		          n2.logger.info("DApp: incoming wallet connection from", e4.peer), n2.setUpWalletConnection(e4, s2, p2);
		        }), this.peer.on("error", function(e4) {
		          n2.logger.error("DApp peer error:", e4);
		        }), this.peer.on("disconnected", function() {
		          n2.logger.warn("DApp peer disconnected from signaling server");
		        }), p2 && setTimeout(function() {
		          return n2.setUpDiscoveryPeer(o2);
		        }, 1e3);
		      }, [{ key: "setUpWalletConnection", value: function(e3, t3, n2) {
		        var r2 = this, o2 = new Cn(e3, this.logger);
		        e3.on("open", function() {
		          r2.logger.info("DApp: wallet connection established with", e3.peer);
		          var t4 = window.cardano || {};
		          Object.keys(t4).find(function(n3) {
		            return t4[n3].identifier === e3.peer;
		          }) ? r2.logger.info("Saw address ".concat(e3.peer)) : r2.logger.info("Saw address ".concat(e3.peer, " but it has not injected its API yet"));
		        }), e3.on("close", function() {
		          r2.logger.info("DApp: wallet connection closed:", e3.peer), r2.leftServer(e3.peer), r2.activeRpc === o2 && (o2.destroy(), r2.activeRpc = null);
		        }), e3.on("error", function(e4) {
		          r2.logger.error("DApp: wallet connection error:", e4);
		        }), e3.on("data", function(e4) {
		          return o2.onData(e4);
		        }), o2.register("connect", function(e4, n3, i2) {
		          if (r2.connectedWallet) r2.connectedWallet === e4 ? (r2.logger.info("Connection already established to ".concat(e4, ".")), i2({ address: e4, dApp: r2.dAppInfo, connected: true, error: false })) : (i2({ dApp: r2.dAppInfo, address: e4, connected: false, error: false, errorMessage: "Connection failed. Another wallet has already been connected to this dApp." }), r2.logger.info("Connection failed. Another wallet has already been connected to this dApp."));
		          else {
		            var s2 = function(t4) {
		              var s3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a2 = arguments.length > 2 ? arguments[2] : void 0;
		              n3.requestAutoconnect && t4 && s3 && h.addAutoConnectId(e4), t4 ? (r2.connectedWallet = e4, r2.activeRpc = o2, r2.logger.info("Successfully connected ".concat(r2.connectedWallet)), i2({ dApp: r2.dAppInfo, address: e4, connected: true, error: false, autoConnect: s3 }), r2.generateIdenticon(), r2.onConnect && r2.onConnect(e4, a2)) : (i2({ dApp: r2.dAppInfo, address: e4, connected: false, error: true, errorMessage: "User denied connection to ".concat(e4), autoConnect: s3 }), r2.logger.info("User denied connection to ".concat(e4)));
		            };
		            void 0 !== t3 ? h.isAutoConnectId(e4) ? s2(true, true, n3) : t3(Nn(Nn({}, n3), {}, { address: e4 }), s2) : s2(true);
		          }
		        }), o2.register("disconnect", function(e4, t4, n3) {
		          if (r2.connectedWallet) return r2.connectedWallet !== e4 ? (r2.logger.info("Unregistered address ".concat(e4, " is calling disconnect.")), void n3({ dApp: r2.dAppInfo, connected: false, error: true, errorMessage: "Unregistered address ".concat(e4, " is calling disconnect.") })) : (r2.logger.info("Wallet ".concat(r2.connectedWallet, " is calling disconnect.")), n3({ dApp: r2.dAppInfo, connected: false, error: false }), r2.leftServer(e4), void (r2.connectedWallet = null));
		          r2.logger.info("Calling disconnect with no connected wallet."), n3({ dApp: r2.dAppInfo, connected: false, error: true, errorMessage: "No wallet is connected." });
		        }), o2.register("setDiscovery", function(e4, t4, o3) {
		          return r2.logger.debug("DApp: setDiscovery with:", t4), n2 ? (h.saveWalletDiscoveryPeerId(t4.walletDiscoveryAddress), o3(true)) : o3(false);
		        }), o2.register("api", function(e4, t4, n3) {
		          if (e4 === r2.connectedWallet) if (-1 === r2.getInjectedApis().indexOf(e4) || t4.overwrite) {
		            var i2, s2 = {}, a2 = (function(e5, t5) {
		              var n4 = "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
		              if (!n4) {
		                if (Array.isArray(e5) || (n4 = (function(e6, t6) {
		                  if (e6) {
		                    if ("string" == typeof e6) return Bn(e6, t6);
		                    var n5 = {}.toString.call(e6).slice(8, -1);
		                    return "Object" === n5 && e6.constructor && (n5 = e6.constructor.name), "Map" === n5 || "Set" === n5 ? Array.from(e6) : "Arguments" === n5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? Bn(e6, t6) : void 0;
		                  }
		                })(e5)) || t5 && e5 && "number" == typeof e5.length) {
		                  n4 && (e5 = n4);
		                  var r3 = 0, o3 = function() {
		                  };
		                  return { s: o3, n: function() {
		                    return r3 >= e5.length ? { done: true } : { done: false, value: e5[r3++] };
		                  }, e: function(e6) {
		                    throw e6;
		                  }, f: o3 };
		                }
		                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		              }
		              var i3, s3 = true, a3 = false;
		              return { s: function() {
		                n4 = n4.call(e5);
		              }, n: function() {
		                var e6 = n4.next();
		                return s3 = e6.done, e6;
		              }, e: function(e6) {
		                a3 = true, i3 = e6;
		              }, f: function() {
		                try {
		                  s3 || null == n4.return || n4.return();
		                } finally {
		                  if (a3) throw i3;
		                }
		              } };
		            })(t4.api.methods);
		            try {
		              var c2 = function() {
		                var e5 = i2.value;
		                s2[e5] = function() {
		                  for (var t5 = arguments.length, n4 = new Array(t5), r3 = 0; r3 < t5; r3++) n4[r3] = arguments[r3];
		                  return new Promise(function(t6) {
		                    o2.call("invoke", [e5].concat(n4), function(e6) {
		                      return t6(e6);
		                    });
		                  });
		                };
		              };
		              for (a2.s(); !(i2 = a2.n()).done; ) c2();
		            } catch (e5) {
		              a2.e(e5);
		            } finally {
		              a2.f();
		            }
		            var u2 = B(o2, t4.api.experimentalApi, "invokeExperimental"), l2 = B(o2, t4.api.fullExperimentalApi, "invokeEnableExperimental");
		            s2.experimental = l2;
		            var p2 = { apiVersion: t4.api.apiVersion, name: t4.api.name, icon: t4.api.icon, identifier: e4, experimental: u2, isEnabled: function() {
		              return Promise.resolve(true);
		            }, enable: function() {
		              return Promise.resolve(s2);
		            } };
		            if (r2.isWalletNameInjected(t4.api.name) && !t4.overwrite) return r2.logger.info("Not injecting wallet api. API for wallet '".concat(t4.api.name, "' is already injected.")), n3({ dApp: r2.dAppInfo, connected: false, error: true, errorMessage: "Wallet with name ".concat(t4.api.name, " is already injected.") });
		            r2.isP2pWalletCompliantName(t4.api.name) || r2.logger.warn("Injected wallet does not contain 'p2p' in name, this is discouraged."), window.cardano = window.cardano || {}, window.cardano[t4.api.name.toLowerCase()] = p2, r2.logger.info("injected api of ".concat(t4.api.name, " into window.cardano")), n3({ dApp: r2.dAppInfo, connected: true, error: false }), r2.onApiInject && r2.onApiInject(t4.api.name, e4);
		          } else r2.logger.info("".concat(e4, " already injected"));
		        });
		      } }, { key: "getInjectedApis", value: function() {
		        var e3 = window.cardano || {};
		        return Object.keys(e3).filter(function(t3) {
		          return "string" == typeof e3[t3].identifier;
		        }).map(function(t3) {
		          return e3[t3].identifier;
		        });
		      } }, { key: "generateQRCode", value: function(e3) {
		        var t3 = "".concat(this.peer.id, ":peerjs:").concat(Date.now()), n2 = new (Ln())({ content: t3, padding: 4, width: 256, height: 256, color: "#000000", background: "#ffffff", ecl: "M" });
		        e3.innerHTML = n2.svg();
		      } }, { key: "getConnectedWallet", value: function() {
		        return this.connectedWallet;
		      } }, { key: "getAddress", value: function() {
		        return this.peer.id;
		      } }]);
		    })();
		  })(), r;
		})()); 
	} (dist$1, dist$1.exports));
	return dist$1.exports;
}

var distExports = requireDist();
const index = /*@__PURE__*/getDefaultExportFromCjs(distExports);

function useCardano(props) {
  const dAppConnect = reactExports.useRef(null);
  const cip45Connected = reactExports.useRef(false);
  const cip45Address = reactExports.useRef(null);
  const cip45Identicon = reactExports.useRef(null);
  const connectedCip45Wallet = reactExports.useRef(null);
  const [peerConnectAddress, setPeerConnectAddress] = reactExports.useState(
    Wallet.peerConnectAddressObserver.get()
  );
  const [isEnabled, setIsEnabled] = reactExports.useState(
    Wallet.enabledObserver.get()
  );
  const [isConnecting, setIsConnecting] = reactExports.useState(
    Wallet.isConnectingObserver.get()
  );
  const [enabledWallet, setEnabledWallet] = reactExports.useState(
    Wallet.enabledWalletObserver.get()
  );
  const [stakeAddress, setStakeAddress] = reactExports.useState(
    Wallet.stakeAddressObserver.get()
  );
  const [usedAddresses, setUsedAddresses] = reactExports.useState(
    Wallet.usedAddressesObserver.get()
  );
  const [unusedAddresses, setUnusedAddresses] = reactExports.useState(
    Wallet.unusedAddressesObserver.get()
  );
  const [accountBalance, setAccountBalance] = reactExports.useState(
    Wallet.accountBalanceObserver.get()
  );
  const [installedExtensions, setInstalledExtensions] = reactExports.useState(
    Wallet.installedWalletExtensionsObserver.get()
  );
  const [isConnected, setIsConnected] = reactExports.useState(
    Wallet.isConnected.get()
  );
  const [lastConnectedWallet, setLastConnectedWallet] = reactExports.useState(
    Wallet.lastConnectedWallet.get()
  );
  const [enabledExtensions, setEnabledExtensions] = reactExports.useState(
    Wallet.enabledExtensionsObserver.get()
  );
  const [supportedExtensions, setSupportedExtensions] = reactExports.useState(
    Wallet.supportedExtensionsObserver.get()
  );
  const limitNetwork = props?.limitNetwork || NetworkType.MAINNET;
  reactExports.useEffect(() => {
    Wallet.checkEnabled(limitNetwork).catch((error) => {
      console.error(error);
      disconnect();
    });
    Wallet.subscribeToObservables(
      setIsEnabled,
      setIsConnecting,
      setEnabledWallet,
      setStakeAddress,
      setUsedAddresses,
      setUnusedAddresses,
      setInstalledExtensions,
      setAccountBalance,
      setIsConnected,
      setLastConnectedWallet,
      setPeerConnectAddress,
      setEnabledExtensions,
      setSupportedExtensions
    );
    return () => {
      Wallet.unsubscribeFromObservables(
        setIsEnabled,
        setIsConnecting,
        setEnabledWallet,
        setStakeAddress,
        setUsedAddresses,
        setUnusedAddresses,
        setInstalledExtensions,
        setAccountBalance,
        setIsConnected,
        setLastConnectedWallet,
        setPeerConnectAddress,
        setEnabledExtensions,
        setSupportedExtensions
      );
    };
  }, []);
  const initDappConnect = reactExports.useCallback(
    (dAppName, dAppUrl, verifyConnection, onApiInject, onApiEject, onConnect) => {
      dAppConnect.current = new distExports.DAppPeerConnect({
        dAppInfo: {
          name: dAppName,
          url: dAppUrl
        },
        verifyConnection,
        onApiInject,
        onApiEject,
        onConnect: (address, walletInfo) => {
          cip45Connected.current = true;
          cip45Address.current = address;
          cip45Identicon.current = dAppConnect.current?.getIdenticon() ?? null;
          if (walletInfo) {
            connectedCip45Wallet.current = walletInfo;
          }
          if (typeof onConnect === "function") {
            onConnect(address, walletInfo);
          }
        },
        onDisconnect: (_address) => {
          cip45Connected.current = false;
          cip45Address.current = null;
          cip45Identicon.current = null;
        },
        useWalletDiscovery: true
      });
      setPeerConnectAddress(dAppConnect.current.getAddress());
    },
    []
  );
  const disconnect = reactExports.useCallback(() => {
    Wallet.disconnect();
  }, []);
  const connectToWallet = reactExports.useCallback(
    async (walletName, retries = 20, retryIntervalInMs = 25) => {
      try {
        await Wallet.connectToWallet(
          walletName,
          limitNetwork,
          void 0,
          retries,
          retryIntervalInMs
        );
      } catch (error) {
        console.error(error);
      }
    },
    [limitNetwork]
  );
  const checkEnabled = reactExports.useCallback(async () => {
    try {
      await Wallet.checkEnabled(limitNetwork);
    } catch (error) {
      console.error(error);
      disconnect();
    }
  }, [lastConnectedWallet]);
  const signMessage = reactExports.useCallback(
    async (message, onSignMessage, onSignError) => {
      Wallet.signMessage(message, onSignMessage, onSignError);
    },
    [isEnabled, enabledWallet, limitNetwork]
  );
  const connect = reactExports.useCallback(
    async (walletName, onConnect, onError, extensions) => {
      if (isConnecting) return;
      const errorHandler = typeof onError === "undefined" ? (error) => console.error(error) : onError;
      const extensionObjects = extensions?.map((cip) => ({ cip })) ?? [];
      Wallet.connect(walletName, limitNetwork, onConnect, errorHandler, extensionObjects);
    },
    [connectToWallet, isConnecting]
  );
  reactExports.useEffect(() => {
    if (isConnected) {
      checkEnabled();
    }
  }, [isConnected]);
  reactExports.useEffect(() => {
    Wallet.startInjectWalletListener();
    return () => {
      Wallet.stopInjectWalletListener();
    };
  }, []);
  return {
    isEnabled,
    isConnected,
    isConnecting,
    enabledWallet,
    stakeAddress,
    usedAddresses,
    unusedAddresses,
    signMessage,
    connect,
    disconnect,
    installedExtensions,
    accountBalance,
    dAppConnect,
    initDappConnect,
    peerConnectAddress,
    cip45Connected,
    cip45Address,
    cip45Identicon,
    connectedCip45Wallet,
    enabledExtensions,
    supportedExtensions
  };
}

const colors = {
	aliceblue: [240, 248, 255],
	antiquewhite: [250, 235, 215],
	aqua: [0, 255, 255],
	aquamarine: [127, 255, 212],
	azure: [240, 255, 255],
	beige: [245, 245, 220],
	bisque: [255, 228, 196],
	black: [0, 0, 0],
	blanchedalmond: [255, 235, 205],
	blue: [0, 0, 255],
	blueviolet: [138, 43, 226],
	brown: [165, 42, 42],
	burlywood: [222, 184, 135],
	cadetblue: [95, 158, 160],
	chartreuse: [127, 255, 0],
	chocolate: [210, 105, 30],
	coral: [255, 127, 80],
	cornflowerblue: [100, 149, 237],
	cornsilk: [255, 248, 220],
	crimson: [220, 20, 60],
	cyan: [0, 255, 255],
	darkblue: [0, 0, 139],
	darkcyan: [0, 139, 139],
	darkgoldenrod: [184, 134, 11],
	darkgray: [169, 169, 169],
	darkgreen: [0, 100, 0],
	darkgrey: [169, 169, 169],
	darkkhaki: [189, 183, 107],
	darkmagenta: [139, 0, 139],
	darkolivegreen: [85, 107, 47],
	darkorange: [255, 140, 0],
	darkorchid: [153, 50, 204],
	darkred: [139, 0, 0],
	darksalmon: [233, 150, 122],
	darkseagreen: [143, 188, 143],
	darkslateblue: [72, 61, 139],
	darkslategray: [47, 79, 79],
	darkslategrey: [47, 79, 79],
	darkturquoise: [0, 206, 209],
	darkviolet: [148, 0, 211],
	deeppink: [255, 20, 147],
	deepskyblue: [0, 191, 255],
	dimgray: [105, 105, 105],
	dimgrey: [105, 105, 105],
	dodgerblue: [30, 144, 255],
	firebrick: [178, 34, 34],
	floralwhite: [255, 250, 240],
	forestgreen: [34, 139, 34],
	fuchsia: [255, 0, 255],
	gainsboro: [220, 220, 220],
	ghostwhite: [248, 248, 255],
	gold: [255, 215, 0],
	goldenrod: [218, 165, 32],
	gray: [128, 128, 128],
	green: [0, 128, 0],
	greenyellow: [173, 255, 47],
	grey: [128, 128, 128],
	honeydew: [240, 255, 240],
	hotpink: [255, 105, 180],
	indianred: [205, 92, 92],
	indigo: [75, 0, 130],
	ivory: [255, 255, 240],
	khaki: [240, 230, 140],
	lavender: [230, 230, 250],
	lavenderblush: [255, 240, 245],
	lawngreen: [124, 252, 0],
	lemonchiffon: [255, 250, 205],
	lightblue: [173, 216, 230],
	lightcoral: [240, 128, 128],
	lightcyan: [224, 255, 255],
	lightgoldenrodyellow: [250, 250, 210],
	lightgray: [211, 211, 211],
	lightgreen: [144, 238, 144],
	lightgrey: [211, 211, 211],
	lightpink: [255, 182, 193],
	lightsalmon: [255, 160, 122],
	lightseagreen: [32, 178, 170],
	lightskyblue: [135, 206, 250],
	lightslategray: [119, 136, 153],
	lightslategrey: [119, 136, 153],
	lightsteelblue: [176, 196, 222],
	lightyellow: [255, 255, 224],
	lime: [0, 255, 0],
	limegreen: [50, 205, 50],
	linen: [250, 240, 230],
	magenta: [255, 0, 255],
	maroon: [128, 0, 0],
	mediumaquamarine: [102, 205, 170],
	mediumblue: [0, 0, 205],
	mediumorchid: [186, 85, 211],
	mediumpurple: [147, 112, 219],
	mediumseagreen: [60, 179, 113],
	mediumslateblue: [123, 104, 238],
	mediumspringgreen: [0, 250, 154],
	mediumturquoise: [72, 209, 204],
	mediumvioletred: [199, 21, 133],
	midnightblue: [25, 25, 112],
	mintcream: [245, 255, 250],
	mistyrose: [255, 228, 225],
	moccasin: [255, 228, 181],
	navajowhite: [255, 222, 173],
	navy: [0, 0, 128],
	oldlace: [253, 245, 230],
	olive: [128, 128, 0],
	olivedrab: [107, 142, 35],
	orange: [255, 165, 0],
	orangered: [255, 69, 0],
	orchid: [218, 112, 214],
	palegoldenrod: [238, 232, 170],
	palegreen: [152, 251, 152],
	paleturquoise: [175, 238, 238],
	palevioletred: [219, 112, 147],
	papayawhip: [255, 239, 213],
	peachpuff: [255, 218, 185],
	peru: [205, 133, 63],
	pink: [255, 192, 203],
	plum: [221, 160, 221],
	powderblue: [176, 224, 230],
	purple: [128, 0, 128],
	rebeccapurple: [102, 51, 153],
	red: [255, 0, 0],
	rosybrown: [188, 143, 143],
	royalblue: [65, 105, 225],
	saddlebrown: [139, 69, 19],
	salmon: [250, 128, 114],
	sandybrown: [244, 164, 96],
	seagreen: [46, 139, 87],
	seashell: [255, 245, 238],
	sienna: [160, 82, 45],
	silver: [192, 192, 192],
	skyblue: [135, 206, 235],
	slateblue: [106, 90, 205],
	slategray: [112, 128, 144],
	slategrey: [112, 128, 144],
	snow: [255, 250, 250],
	springgreen: [0, 255, 127],
	steelblue: [70, 130, 180],
	tan: [210, 180, 140],
	teal: [0, 128, 128],
	thistle: [216, 191, 216],
	tomato: [255, 99, 71],
	turquoise: [64, 224, 208],
	violet: [238, 130, 238],
	wheat: [245, 222, 179],
	white: [255, 255, 255],
	whitesmoke: [245, 245, 245],
	yellow: [255, 255, 0],
	yellowgreen: [154, 205, 50],
};

for (const key in colors) Object.freeze(colors[key]);
const cssKeywords = Object.freeze(colors);

const reverseNames = Object.create(null);

// Create a list of reverse color names
for (const name in cssKeywords) {
	if (Object.hasOwn(cssKeywords, name)) {
		reverseNames[cssKeywords[name]] = name;
	}
}

const cs = {
	to: {},
	get: {},
};

cs.get = function (string) {
	const prefix = string.slice(0, 3).toLowerCase();
	let value;
	let model;
	switch (prefix) {
		case 'hsl': {
			value = cs.get.hsl(string);
			model = 'hsl';
			break;
		}

		case 'hwb': {
			value = cs.get.hwb(string);
			model = 'hwb';
			break;
		}

		default: {
			value = cs.get.rgb(string);
			model = 'rgb';
			break;
		}
	}

	if (!value) {
		return null;
	}

	return {model, value};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	const abbr = /^#([a-f\d]{3,4})$/i;
	const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
	const rgba = /^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i;
	const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i;
	const keyword = /^(\w+)$/;

	let rgb = [0, 0, 0, 1];
	let match;
	let i;
	let hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			const i2 = i * 2;
			rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = Number.parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Number.parseFloat(match[i + 1]);
		}

		if (match[4]) {
			rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
		}
	} else if (match = string.toLowerCase().match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!Object.hasOwn(cssKeywords, match[1])) {
			return null;
		}

		// eslint-disable-next-line unicorn/prefer-spread
		rgb = cssKeywords[match[1]].slice();
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}

	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
	const match = string.match(hsl);

	if (match) {
		const alpha = Number.parseFloat(match[4]);
		const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
		const s = clamp(Number.parseFloat(match[2]), 0, 100);
		const l = clamp(Number.parseFloat(match[3]), 0, 100);
		const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
	const match = string.match(hwb);

	if (match) {
		const alpha = Number.parseFloat(match[4]);
		const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
		const w = clamp(Number.parseFloat(match[2]), 0, 100);
		const b = clamp(Number.parseFloat(match[3]), 0, 100);
		const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function (...rgba) {
	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function (...rgba) {
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function (...rgba) {
	const r = Math.round(rgba[0] / 255 * 100);
	const g = Math.round(rgba[1] / 255 * 100);
	const b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function (...hsla) {
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// Hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function (...hwba) {
	let a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (...rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// Helpers
function clamp(number_, min, max) {
	return Math.min(Math.max(min, number_), max);
}

function hexDouble(number_) {
	const string_ = Math.round(number_).toString(16).toUpperCase();
	return (string_.length < 2) ? '0' + string_ : string_;
}

/* MIT license */
/* eslint-disable no-mixed-operators */

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert$1 = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	oklab: {channels: 3, labels: ['okl', 'oka', 'okb']},
	lch: {channels: 3, labels: 'lch'},
	oklch: {channels: 3, labels: ['okl', 'okc', 'okh']},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']},
};

// LAB f(t) constant
const LAB_FT = (6 / 29) ** 3;

// SRGB non-linear transform functions
function srgbNonlinearTransform(c) {
	const cc = c > 0.003_130_8
		? ((1.055 * (c ** (1 / 2.4))) - 0.055)
		: c * 12.92;
	return Math.min(Math.max(0, cc), 1);
}

function srgbNonlinearTransformInv(c) {
	return c > 0.040_45 ? (((c + 0.055) / 1.055) ** 2.4) : (c / 12.92);
}

// Hide .channels and .labels properties
for (const model of Object.keys(convert$1)) {
	if (!('channels' in convert$1[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert$1[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert$1[model].labels.length !== convert$1[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert$1[model];
	delete convert$1[model].channels;
	delete convert$1[model].labels;
	Object.defineProperty(convert$1[model], 'channels', {value: channels});
	Object.defineProperty(convert$1[model], 'labels', {value: labels});
}

convert$1.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	switch (max) {
		case min: {
			h = 0;

			break;
		}

		case r: {
			h = (g - b) / delta;

			break;
		}

		case g: {
			h = 2 + (b - r) / delta;

			break;
		}

		case b: {
			h = 4 + (r - g) / delta;

			break;
		}
	// No default
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert$1.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		switch (v) {
			case r: {
				h = bdif - gdif;

				break;
			}

			case g: {
				h = (1 / 3) + rdif - bdif;

				break;
			}

			case b: {
				h = (2 / 3) + gdif - rdif;

				break;
			}
		// No default
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100,
	];
};

convert$1.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert$1.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert$1.rgb.oklab = function (rgb) {
	// Assume sRGB
	const r = srgbNonlinearTransformInv(rgb[0] / 255);
	const g = srgbNonlinearTransformInv(rgb[1] / 255);
	const b = srgbNonlinearTransformInv(rgb[2] / 255);

	const lp = Math.cbrt(0.412_221_470_8 * r + 0.536_332_536_3 * g + 0.051_445_992_9 * b);
	const mp = Math.cbrt(0.211_903_498_2 * r + 0.680_699_545_1 * g + 0.107_396_956_6 * b);
	const sp = Math.cbrt(0.088_302_461_9 * r + 0.281_718_837_6 * g + 0.629_978_700_5 * b);

	const l = 0.210_454_255_3 * lp + 0.793_617_785 * mp - 0.004_072_046_8 * sp;
	const aa = 1.977_998_495_1 * lp - 2.428_592_205 * mp + 0.450_593_709_9 * sp;
	const bb = 0.025_904_037_1 * lp + 0.782_771_766_2 * mp - 0.808_675_766 * sp;

	return [l * 100, aa * 100, bb * 100];
};

convert$1.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert$1.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Number.POSITIVE_INFINITY;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert$1.keyword.rgb = function (keyword) {
	return [...cssKeywords[keyword]];
};

convert$1.rgb.xyz = function (rgb) {
	// Assume sRGB
	const r = srgbNonlinearTransformInv(rgb[0] / 255);
	const g = srgbNonlinearTransformInv(rgb[1] / 255);
	const b = srgbNonlinearTransformInv(rgb[2] / 255);

	const x = (r * 0.412_456_4) + (g * 0.357_576_1) + (b * 0.180_437_5);
	const y = (r * 0.212_672_9) + (g * 0.715_152_2) + (b * 0.072_175);
	const z = (r * 0.019_333_9) + (g * 0.119_192) + (b * 0.950_304_1);

	return [x * 100, y * 100, z * 100];
};

convert$1.rgb.lab = function (rgb) {
	const xyz = convert$1.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > LAB_FT ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > LAB_FT ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > LAB_FT ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$1.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t3;
	let value;

	if (s === 0) {
		value = l * 255;
		return [value, value, value];
	}

	const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			value = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			value = t2;
		} else if (3 * t3 < 2) {
			value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			value = t1;
		}

		rgb[i] = value * 255;
	}

	return rgb;
};

convert$1.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert$1.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0: {
			return [v, t, p];
		}

		case 1: {
			return [q, v, p];
		}

		case 2: {
			return [p, v, t];
		}

		case 3: {
			return [p, q, v];
		}

		case 4: {
			return [t, p, v];
		}

		case 5: {
			return [v, p, q];
		}
	}
};

convert$1.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert$1.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	// eslint-disable-next-line no-bitwise
	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces, default-case-last */
	switch (i) {
		default:
		case 6:
		case 0: { r = v;  g = n;  b = wh; break;
		}

		case 1: { r = n;  g = v;  b = wh; break;
		}

		case 2: { r = wh; g = v;  b = n; break;
		}

		case 3: { r = wh; g = n;  b = v; break;
		}

		case 4: { r = n;  g = wh; b = v; break;
		}

		case 5: { r = v;  g = wh; b = n; break;
		}
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces, default-case-last */

	return [r * 255, g * 255, b * 255];
};

convert$1.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert$1.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.240_454_2) + (y * -1.537_138_5) + (z * -0.498_531_4);
	g = (x * -0.969_266) + (y * 1.876_010_8) + (z * 0.041_556);
	b = (x * 0.055_643_4) + (y * -0.204_025_9) + (z * 1.057_225_2);

	// Assume sRGB
	r = srgbNonlinearTransform(r);
	g = srgbNonlinearTransform(g);
	b = srgbNonlinearTransform(b);

	return [r * 255, g * 255, b * 255];
};

convert$1.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > LAB_FT ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > LAB_FT ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > LAB_FT ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$1.xyz.oklab = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;

	const lp = Math.cbrt(0.818_933_010_1 * x + 0.361_866_742_4 * y - 0.128_859_713_7 * z);
	const mp = Math.cbrt(0.032_984_543_6 * x + 0.929_311_871_5 * y + 0.036_145_638_7 * z);
	const sp = Math.cbrt(0.048_200_301_8 * x + 0.264_366_269_1 * y + 0.633_851_707 * z);

	const l = 0.210_454_255_3 * lp + 0.793_617_785 * mp - 0.004_072_046_8 * sp;
	const a = 1.977_998_495_1 * lp - 2.428_592_205 * mp + 0.450_593_709_9 * sp;
	const b = 0.025_904_037_1 * lp + 0.782_771_766_2 * mp - 0.808_675_766 * sp;

	return [l * 100, a * 100, b * 100];
};

convert$1.oklab.oklch = function (oklab) {
	return convert$1.lab.lch(oklab);
};

convert$1.oklab.xyz = function (oklab) {
	const ll = oklab[0] / 100;
	const a = oklab[1] / 100;
	const b = oklab[2] / 100;

	const l = (0.999_999_998 * ll + 0.396_337_792 * a + 0.215_803_758 * b) ** 3;
	const m = (1.000_000_008 * ll - 0.105_561_342 * a - 0.063_854_175 * b) ** 3;
	const s = (1.000_000_055 * ll - 0.089_484_182 * a - 1.291_485_538 * b) ** 3;

	const x = 1.227_013_851 * l - 0.557_799_98 * m + 0.281_256_149 * s;
	const y = -0.040_580_178 * l + 1.112_256_87 * m - 0.071_676_679 * s;
	const z = -0.076_381_285 * l - 0.421_481_978 * m + 1.586_163_22 * s;

	return [x * 100, y * 100, z * 100];
};

convert$1.oklab.rgb = function (oklab) {
	const ll = oklab[0] / 100;
	const aa = oklab[1] / 100;
	const bb = oklab[2] / 100;

	const l = (ll + 0.396_337_777_4 * aa + 0.215_803_757_3 * bb) ** 3;
	const m = (ll - 0.105_561_345_8 * aa - 0.063_854_172_8 * bb) ** 3;
	const s = (ll - 0.089_484_177_5 * aa - 1.291_485_548 * bb) ** 3;

	// Assume sRGB
	const r = srgbNonlinearTransform(4.076_741_662_1 * l - 3.307_711_591_3 * m + 0.230_969_929_2 * s);
	const g = srgbNonlinearTransform(-1.268_438_004_6 * l + 2.609_757_401_1 * m - 0.341_319_396_5 * s);
	const b = srgbNonlinearTransform(-0.004_196_086_3 * l - 0.703_418_614_7 * m + 1.707_614_701 * s);

	return [r * 255, g * 255, b * 255];
};

convert$1.oklch.oklab = function (oklch) {
	return convert$1.lch.lab(oklch);
};

convert$1.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;

	// Illuminant D65 XYZ Tristrimulus Values
	// https://en.wikipedia.org/wiki/CIE_1931_color_space
	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert$1.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert$1.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert$1.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		/* eslint-disable no-bitwise */
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));
		/* eslint-enable no-bitwise */

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert$1.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
};

convert$1.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	// eslint-disable-next-line no-bitwise
	if (r >> 4 === g >> 4 && g >> 4 === b >> 4) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert$1.ansi16.rgb = function (args) {
	args = args[0];

	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (Math.trunc(args > 50) + 1) * 0.5;
	/* eslint-disable no-bitwise */
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;
	/* eslint-enable no-bitwise */

	return [r, g, b];
};

convert$1.ansi256.rgb = function (args) {
	args = args[0];

	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert$1.rgb.hex = function (args) {
	/* eslint-disable no-bitwise */
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);
	/* eslint-enable no-bitwise */

	const string = integer.toString(16).toUpperCase();
	return '000000'.slice(string.length) + string;
};

convert$1.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = [...colorString].map(char => char + char).join('');
	}

	const integer = Number.parseInt(colorString, 16);
	/* eslint-disable no-bitwise */
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;
	/* eslint-enable no-bitwise */

	return [r, g, b];
};

convert$1.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let hue;

	const grayscale = chroma < 1 ? min / (1 - chroma) : 0;

	if (chroma <= 0) {
		hue = 0;
	} else if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert$1.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2 * s * l) : (2 * s * (1 - l));

	let f = 0;
	if (c < 1) {
		f = (l - 0.5 * c) / (1 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert$1.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert$1.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0: {
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		}

		case 1: {
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		}

		case 2: {
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		}

		case 3: {
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		}

		case 4: {
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		}

		default: {
			pure[0] = 1; pure[1] = 0; pure[2] = w;
		}
	}
	/* eslint-enable max-statements-per-line */

	mg = (1 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255,
	];
};

convert$1.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1 - c);
	let f = 0;

	if (v > 0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert$1.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1 - c) + 0.5 * c;
	let s = 0;

	if (l > 0 && l < 0.5) {
		s = c / (2 * l);
	} else if (l >= 0.5 && l < 1) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert$1.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert$1.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert$1.apple.rgb = function (apple) {
	return [(apple[0] / 65_535) * 255, (apple[1] / 65_535) * 255, (apple[2] / 65_535) * 255];
};

convert$1.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65_535, (rgb[1] / 255) * 65_535, (rgb[2] / 255) * 65_535];
};

convert$1.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert$1.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert$1.gray.hsv = convert$1.gray.hsl;

convert$1.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert$1.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert$1.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert$1.gray.hex = function (gray) {
	/* eslint-disable no-bitwise */
	const value = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (value << 16) + (value << 8) + value;
	/* eslint-enable no-bitwise */

	const string = integer.toString(16).toUpperCase();
	return '000000'.slice(string.length) + string;
};

convert$1.rgb.gray = function (rgb) {
	const value = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [value / 255 * 100];
};

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(convert$1);

	for (let {length} = models, i = 0; i < length; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null,
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length > 0) {
		const current = queue.pop();
		const adjacents = Object.keys(convert$1[current]);

		for (let {length} = adjacents, i = 0; i < length; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = convert$1[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(convert$1[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

function route(fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let {length} = models, i = 0; i < length; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
}

const convert = {};

const models = Object.keys(convert$1);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let {length} = result, i = 0; i < length; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

for (const fromModel of models) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: convert$1[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: convert$1[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	for (const toModel of routeModels) {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	}
}

const skippedModels = [
	// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// Gray conflicts with some method names, and has its own method defined.
	'gray',

	// Shouldn't really be in color-convert either...
	'hex',
];

const hashedModelKeys = {};
for (const model of Object.keys(convert)) {
	hashedModelKeys[[...convert[model].labels].sort().join('')] = model;
}

const limiters = {};

function Color(object, model) {
	if (!(this instanceof Color)) {
		return new Color(object, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	let i;
	let channels;

	if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = [...object.color];
		this.valpha = object.valpha;
	} else if (typeof object === 'string') {
		const result = cs.get(object);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + object);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		const newArray = Array.prototype.slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	} else if (typeof object === 'number') {
		// This is always RGB - can be converted later on.
		this.model = 'rgb';
		this.color = [
			(object >> 16) & 0xFF,
			(object >> 8) & 0xFF,
			object & 0xFF,
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		const keys = Object.keys(object);
		if ('alpha' in object) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
		}

		const hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
		}

		this.model = hashedModelKeys[hashedKeys];

		const {labels} = convert[this.model];
		const color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(object[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// Perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString() {
		return this.string();
	},

	toJSON() {
		return this[this.model]();
	},

	string(places) {
		let self = this.model in cs.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return cs.to[self.model](...arguments_);
	},

	percentString(places) {
		const self = this.rgb().round(typeof places === 'number' ? places : 1);
		const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return cs.to.rgb.percent(...arguments_);
	},

	array() {
		return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
	},

	object() {
		const result = {};
		const {channels} = convert[this.model];
		const {labels} = convert[this.model];

		for (let i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round(places) {
		places = Math.max(places || 0, 0);
		return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
	},

	alpha(value) {
		if (value !== undefined) {
			return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
		}

		return this.valpha;
	},

	// Rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(95.047)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(108.833)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return convert[this.model].keyword(this.color);
	},

	hex(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return cs.to.hex(...this.rgb().round().color);
	},

	hexa(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		const rgbArray = this.rgb().round().color;

		let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
		if (alphaHex.length === 1) {
			alphaHex = '0' + alphaHex;
		}

		return cs.to.hex(...rgbArray) + alphaHex;
	},

	rgbNumber() {
		const rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		const rgb = this.rgb().color;

		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = (chan <= 0.04045) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level(color2) {
		// https://www.w3.org/TR/WCAG/#contrast-enhanced
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const rgb = this.rgb().color;
		const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
		return yiq < 128;
	},

	isLight() {
		return !this.isDark();
	},

	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}

		return rgb;
	},

	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_colour_to_grayscale
		const rgb = this.rgb().color;
		const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(value, value, value);
	},

	fade(ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer(ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix(mixinColor, weight) {
		// Ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}

		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === undefined ? 0.5 : weight;

		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();

		const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;

		return Color.rgb(
			w1 * color1.red() + w2 * color2.red(),
			w1 * color1.green() + w2 * color2.green(),
			w1 * color1.blue() + w2 * color2.blue(),
			color1.alpha() * p + color2.alpha() * (1 - p));
	},
};

// Model conversion methods and static constructors
for (const model of Object.keys(convert)) {
	if (skippedModels.includes(model)) {
		continue;
	}

	const {channels} = convert[model];

	// Conversion methods
	Color.prototype[model] = function (...arguments_) {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments_.length > 0) {
			return new Color(arguments_, model);
		}

		return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
	};

	// 'static' construction methods
	Color[model] = function (...arguments_) {
		let color = arguments_[0];
		if (typeof color === 'number') {
			color = zeroArray(arguments_, channels);
		}

		return new Color(color, model);
	};
}

function roundTo(number, places) {
	return Number(number.toFixed(places));
}

function roundToPlace(places) {
	return function (number) {
		return roundTo(number, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	for (const m of model) {
		(limiters[m] ||= [])[channel] = modifier;
	}

	model = model[0];

	return function (value) {
		let result;

		if (value !== undefined) {
			if (modifier) {
				value = modifier(value);
			}

			result = this[model]();
			result.color[channel] = value;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}

function zeroArray(array, length) {
	for (let i = 0; i < length; i++) {
		if (typeof array[i] !== 'number') {
			array[i] = 0;
		}
	}

	return array;
}

const Modal = yt("div").withConfig({
  shouldForwardProp: (prop) => !["customCSS"].includes(prop)
})`
  position: fixed;
  z-index: 100;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  ${(props) => props.customCSS}
`;
const ModalContent = yt.div`
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #aeaeae;
  border-radius: 9px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);

  &:focus {
    outline: none;
  }
`;
const CopyInputContainer = yt("div").withConfig({
  shouldForwardProp: (prop) => !["primaryColor"].includes(prop)
})`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 10px;
  padding: 10px;
  width: 95%;
  max-width: 300px;

  & > input {
    flex: 1;
    border: none;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
  }
  & > button {
    background-color: ${(props) => props.primaryColor};
    border-radius: 3px;
    color: white;
    border: none;
    padding: 6px 10px;
    cursor: pointer;
  }
`;
const fadeInOut = Ot`
  0%, 100% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`;
const Toast = yt.div`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  &.show {
    visibility: visible;
    animation: ${fadeInOut} 3s ease;
  }
`;

//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

//---------------------------------------------------------------------
// qrcode
//---------------------------------------------------------------------

/**
 * qrcode
 * @param typeNumber 1 to 40
 * @param errorCorrectionLevel 'L','M','Q','H'
 */
const qrcode = function(typeNumber, errorCorrectionLevel) {

  const PAD0 = 0xEC;
  const PAD1 = 0x11;

  let _typeNumber = typeNumber;
  const _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
  let _modules = null;
  let _moduleCount = 0;
  let _dataCache = null;
  const _dataList = [];

  const _this = {};

  const makeImpl = function(test, maskPattern) {

    _moduleCount = _typeNumber * 4 + 17;
    _modules = function(moduleCount) {
      const modules = new Array(moduleCount);
      for (let row = 0; row < moduleCount; row += 1) {
        modules[row] = new Array(moduleCount);
        for (let col = 0; col < moduleCount; col += 1) {
          modules[row][col] = null;
        }
      }
      return modules;
    }(_moduleCount);

    setupPositionProbePattern(0, 0);
    setupPositionProbePattern(_moduleCount - 7, 0);
    setupPositionProbePattern(0, _moduleCount - 7);
    setupPositionAdjustPattern();
    setupTimingPattern();
    setupTypeInfo(test, maskPattern);

    if (_typeNumber >= 7) {
      setupTypeNumber(test);
    }

    if (_dataCache == null) {
      _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
    }

    mapData(_dataCache, maskPattern);
  };

  const setupPositionProbePattern = function(row, col) {

    for (let r = -1; r <= 7; r += 1) {

      if (row + r <= -1 || _moduleCount <= row + r) continue;

      for (let c = -1; c <= 7; c += 1) {

        if (col + c <= -1 || _moduleCount <= col + c) continue;

        if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
            || (0 <= c && c <= 6 && (r == 0 || r == 6) )
            || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
          _modules[row + r][col + c] = true;
        } else {
          _modules[row + r][col + c] = false;
        }
      }
    }
  };

  const getBestMaskPattern = function() {

    let minLostPoint = 0;
    let pattern = 0;

    for (let i = 0; i < 8; i += 1) {

      makeImpl(true, i);

      const lostPoint = QRUtil.getLostPoint(_this);

      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }
    }

    return pattern;
  };

  const setupTimingPattern = function() {

    for (let r = 8; r < _moduleCount - 8; r += 1) {
      if (_modules[r][6] != null) {
        continue;
      }
      _modules[r][6] = (r % 2 == 0);
    }

    for (let c = 8; c < _moduleCount - 8; c += 1) {
      if (_modules[6][c] != null) {
        continue;
      }
      _modules[6][c] = (c % 2 == 0);
    }
  };

  const setupPositionAdjustPattern = function() {

    const pos = QRUtil.getPatternPosition(_typeNumber);

    for (let i = 0; i < pos.length; i += 1) {

      for (let j = 0; j < pos.length; j += 1) {

        const row = pos[i];
        const col = pos[j];

        if (_modules[row][col] != null) {
          continue;
        }

        for (let r = -2; r <= 2; r += 1) {

          for (let c = -2; c <= 2; c += 1) {

            if (r == -2 || r == 2 || c == -2 || c == 2
                || (r == 0 && c == 0) ) {
              _modules[row + r][col + c] = true;
            } else {
              _modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  };

  const setupTypeNumber = function(test) {

    const bits = QRUtil.getBCHTypeNumber(_typeNumber);

    for (let i = 0; i < 18; i += 1) {
      const mod = (!test && ( (bits >> i) & 1) == 1);
      _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
    }

    for (let i = 0; i < 18; i += 1) {
      const mod = (!test && ( (bits >> i) & 1) == 1);
      _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  };

  const setupTypeInfo = function(test, maskPattern) {

    const data = (_errorCorrectionLevel << 3) | maskPattern;
    const bits = QRUtil.getBCHTypeInfo(data);

    // vertical
    for (let i = 0; i < 15; i += 1) {

      const mod = (!test && ( (bits >> i) & 1) == 1);

      if (i < 6) {
        _modules[i][8] = mod;
      } else if (i < 8) {
        _modules[i + 1][8] = mod;
      } else {
        _modules[_moduleCount - 15 + i][8] = mod;
      }
    }

    // horizontal
    for (let i = 0; i < 15; i += 1) {

      const mod = (!test && ( (bits >> i) & 1) == 1);

      if (i < 8) {
        _modules[8][_moduleCount - i - 1] = mod;
      } else if (i < 9) {
        _modules[8][15 - i - 1 + 1] = mod;
      } else {
        _modules[8][15 - i - 1] = mod;
      }
    }

    // fixed module
    _modules[_moduleCount - 8][8] = (!test);
  };

  const mapData = function(data, maskPattern) {

    let inc = -1;
    let row = _moduleCount - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    const maskFunc = QRUtil.getMaskFunction(maskPattern);

    for (let col = _moduleCount - 1; col > 0; col -= 2) {

      if (col == 6) col -= 1;

      while (true) {

        for (let c = 0; c < 2; c += 1) {

          if (_modules[row][col - c] == null) {

            let dark = false;

            if (byteIndex < data.length) {
              dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
            }

            const mask = maskFunc(row, col - c);

            if (mask) {
              dark = !dark;
            }

            _modules[row][col - c] = dark;
            bitIndex -= 1;

            if (bitIndex == -1) {
              byteIndex += 1;
              bitIndex = 7;
            }
          }
        }

        row += inc;

        if (row < 0 || _moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  };

  const createBytes = function(buffer, rsBlocks) {

    let offset = 0;

    let maxDcCount = 0;
    let maxEcCount = 0;

    const dcdata = new Array(rsBlocks.length);
    const ecdata = new Array(rsBlocks.length);

    for (let r = 0; r < rsBlocks.length; r += 1) {

      const dcCount = rsBlocks[r].dataCount;
      const ecCount = rsBlocks[r].totalCount - dcCount;

      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);

      dcdata[r] = new Array(dcCount);

      for (let i = 0; i < dcdata[r].length; i += 1) {
        dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
      }
      offset += dcCount;

      const rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      const rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

      const modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (let i = 0; i < ecdata[r].length; i += 1) {
        const modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
      }
    }

    let totalCodeCount = 0;
    for (let i = 0; i < rsBlocks.length; i += 1) {
      totalCodeCount += rsBlocks[i].totalCount;
    }

    const data = new Array(totalCodeCount);
    let index = 0;

    for (let i = 0; i < maxDcCount; i += 1) {
      for (let r = 0; r < rsBlocks.length; r += 1) {
        if (i < dcdata[r].length) {
          data[index] = dcdata[r][i];
          index += 1;
        }
      }
    }

    for (let i = 0; i < maxEcCount; i += 1) {
      for (let r = 0; r < rsBlocks.length; r += 1) {
        if (i < ecdata[r].length) {
          data[index] = ecdata[r][i];
          index += 1;
        }
      }
    }

    return data;
  };

  const createData = function(typeNumber, errorCorrectionLevel, dataList) {

    const rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

    const buffer = qrBitBuffer();

    for (let i = 0; i < dataList.length; i += 1) {
      const data = dataList[i];
      buffer.put(data.getMode(), 4);
      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
      data.write(buffer);
    }

    // calc num max data.
    let totalDataCount = 0;
    for (let i = 0; i < rsBlocks.length; i += 1) {
      totalDataCount += rsBlocks[i].dataCount;
    }

    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw 'code length overflow. ('
        + buffer.getLengthInBits()
        + '>'
        + totalDataCount * 8
        + ')';
    }

    // end code
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
      buffer.put(0, 4);
    }

    // padding
    while (buffer.getLengthInBits() % 8 != 0) {
      buffer.putBit(false);
    }

    // padding
    while (true) {

      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(PAD0, 8);

      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(PAD1, 8);
    }

    return createBytes(buffer, rsBlocks);
  };

  _this.addData = function(data, mode) {

    mode = mode || 'Byte';

    let newData = null;

    switch(mode) {
    case 'Numeric' :
      newData = qrNumber(data);
      break;
    case 'Alphanumeric' :
      newData = qrAlphaNum(data);
      break;
    case 'Byte' :
      newData = qr8BitByte(data);
      break;
    case 'Kanji' :
      newData = qrKanji(data);
      break;
    default :
      throw 'mode:' + mode;
    }

    _dataList.push(newData);
    _dataCache = null;
  };

  _this.isDark = function(row, col) {
    if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
      throw row + ',' + col;
    }
    return _modules[row][col];
  };

  _this.getModuleCount = function() {
    return _moduleCount;
  };

  _this.make = function() {
    if (_typeNumber < 1) {
      let typeNumber = 1;

      for (; typeNumber < 40; typeNumber++) {
        const rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
        const buffer = qrBitBuffer();

        for (let i = 0; i < _dataList.length; i++) {
          const data = _dataList[i];
          buffer.put(data.getMode(), 4);
          buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
          data.write(buffer);
        }

        let totalDataCount = 0;
        for (let i = 0; i < rsBlocks.length; i++) {
          totalDataCount += rsBlocks[i].dataCount;
        }

        if (buffer.getLengthInBits() <= totalDataCount * 8) {
          break;
        }
      }

      _typeNumber = typeNumber;
    }

    makeImpl(false, getBestMaskPattern() );
  };

  _this.createTableTag = function(cellSize, margin) {

    cellSize = cellSize || 2;
    margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

    let qrHtml = '';

    qrHtml += '<table style="';
    qrHtml += ' border-width: 0px; border-style: none;';
    qrHtml += ' border-collapse: collapse;';
    qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
    qrHtml += '">';
    qrHtml += '<tbody>';

    for (let r = 0; r < _this.getModuleCount(); r += 1) {

      qrHtml += '<tr>';

      for (let c = 0; c < _this.getModuleCount(); c += 1) {
        qrHtml += '<td style="';
        qrHtml += ' border-width: 0px; border-style: none;';
        qrHtml += ' border-collapse: collapse;';
        qrHtml += ' padding: 0px; margin: 0px;';
        qrHtml += ' width: ' + cellSize + 'px;';
        qrHtml += ' height: ' + cellSize + 'px;';
        qrHtml += ' background-color: ';
        qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
        qrHtml += ';';
        qrHtml += '"/>';
      }

      qrHtml += '</tr>';
    }

    qrHtml += '</tbody>';
    qrHtml += '</table>';

    return qrHtml;
  };

  _this.createSvgTag = function(cellSize, margin, alt, title) {

    let opts = {};
    if (typeof arguments[0] == 'object') {
      // Called by options.
      opts = arguments[0];
      // overwrite cellSize and margin.
      cellSize = opts.cellSize;
      margin = opts.margin;
      alt = opts.alt;
      title = opts.title;
    }

    cellSize = cellSize || 2;
    margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

    // Compose alt property surrogate
    alt = (typeof alt === 'string') ? {text: alt} : alt || {};
    alt.text = alt.text || null;
    alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

    // Compose title property surrogate
    title = (typeof title === 'string') ? {text: title} : title || {};
    title.text = title.text || null;
    title.id = (title.text) ? title.id || 'qrcode-title' : null;

    const size = _this.getModuleCount() * cellSize + margin * 2;
    let c, mc, r, mr, qrSvg='', rect;

    rect = 'l' + cellSize + ',0 0,' + cellSize +
      ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

    qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
    qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
    qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
    qrSvg += ' preserveAspectRatio="xMinYMin meet"';
    qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
        escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
    qrSvg += '>';
    qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
        escapeXml(title.text) + '</title>' : '';
    qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
        escapeXml(alt.text) + '</description>' : '';
    qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
    qrSvg += '<path d="';

    for (r = 0; r < _this.getModuleCount(); r += 1) {
      mr = r * cellSize + margin;
      for (c = 0; c < _this.getModuleCount(); c += 1) {
        if (_this.isDark(r, c) ) {
          mc = c*cellSize+margin;
          qrSvg += 'M' + mc + ',' + mr + rect;
        }
      }
    }

    qrSvg += '" stroke="transparent" fill="black"/>';
    qrSvg += '</svg>';

    return qrSvg;
  };

  _this.createDataURL = function(cellSize, margin) {

    cellSize = cellSize || 2;
    margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

    const size = _this.getModuleCount() * cellSize + margin * 2;
    const min = margin;
    const max = size - margin;

    return createDataURL(size, size, function(x, y) {
      if (min <= x && x < max && min <= y && y < max) {
        const c = Math.floor( (x - min) / cellSize);
        const r = Math.floor( (y - min) / cellSize);
        return _this.isDark(r, c)? 0 : 1;
      } else {
        return 1;
      }
    } );
  };

  _this.createImgTag = function(cellSize, margin, alt) {

    cellSize = cellSize || 2;
    margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

    const size = _this.getModuleCount() * cellSize + margin * 2;

    let img = '';
    img += '<img';
    img += '\u0020src="';
    img += _this.createDataURL(cellSize, margin);
    img += '"';
    img += '\u0020width="';
    img += size;
    img += '"';
    img += '\u0020height="';
    img += size;
    img += '"';
    if (alt) {
      img += '\u0020alt="';
      img += escapeXml(alt);
      img += '"';
    }
    img += '/>';

    return img;
  };

  const escapeXml = function(s) {
    let escaped = '';
    for (let i = 0; i < s.length; i += 1) {
      const c = s.charAt(i);
      switch(c) {
      case '<': escaped += '&lt;'; break;
      case '>': escaped += '&gt;'; break;
      case '&': escaped += '&amp;'; break;
      case '"': escaped += '&quot;'; break;
      default : escaped += c; break;
      }
    }
    return escaped;
  };

  const _createHalfASCII = function(margin) {
    const cellSize = 1;
    margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

    const size = _this.getModuleCount() * cellSize + margin * 2;
    const min = margin;
    const max = size - margin;

    let y, x, r1, r2, p;

    const blocks = {
      '██': '█',
      '█ ': '▀',
      ' █': '▄',
      '  ': ' '
    };

    const blocksLastLineNoMargin = {
      '██': '▀',
      '█ ': '▀',
      ' █': ' ',
      '  ': ' '
    };

    let ascii = '';
    for (y = 0; y < size; y += 2) {
      r1 = Math.floor((y - min) / cellSize);
      r2 = Math.floor((y + 1 - min) / cellSize);
      for (x = 0; x < size; x += 1) {
        p = '█';

        if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
          p = ' ';
        }

        if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
          p += ' ';
        }
        else {
          p += '█';
        }

        // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
        ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
      }

      ascii += '\n';
    }

    if (size % 2 && margin > 0) {
      return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
    }

    return ascii.substring(0, ascii.length-1);
  };

  _this.createASCII = function(cellSize, margin) {
    cellSize = cellSize || 1;

    if (cellSize < 2) {
      return _createHalfASCII(margin);
    }

    cellSize -= 1;
    margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

    const size = _this.getModuleCount() * cellSize + margin * 2;
    const min = margin;
    const max = size - margin;

    let y, x, r, p;

    const white = Array(cellSize+1).join('██');
    const black = Array(cellSize+1).join('  ');

    let ascii = '';
    let line = '';
    for (y = 0; y < size; y += 1) {
      r = Math.floor( (y - min) / cellSize);
      line = '';
      for (x = 0; x < size; x += 1) {
        p = 1;

        if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
          p = 0;
        }

        // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
        line += p ? white : black;
      }

      for (r = 0; r < cellSize; r += 1) {
        ascii += line + '\n';
      }
    }

    return ascii.substring(0, ascii.length-1);
  };

  _this.renderTo2dContext = function(context, cellSize) {
    cellSize = cellSize || 2;
    const length = _this.getModuleCount();
    for (let row = 0; row < length; row++) {
      for (let col = 0; col < length; col++) {
        context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
        context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  };

  return _this;
};

//---------------------------------------------------------------------
// qrcode.stringToBytes
//---------------------------------------------------------------------

qrcode.stringToBytes = function(s) {
  const bytes = [];
  for (let i = 0; i < s.length; i += 1) {
    const c = s.charCodeAt(i);
    bytes.push(c & 0xff);
  }
  return bytes;
};

//---------------------------------------------------------------------
// qrcode.createStringToBytes
//---------------------------------------------------------------------

/**
 * @param unicodeData base64 string of byte array.
 * [16bit Unicode],[16bit Bytes], ...
 * @param numChars
 */
qrcode.createStringToBytes = function(unicodeData, numChars) {

  // create conversion map.

  const unicodeMap = function() {

    const bin = base64DecodeInputStream(unicodeData);
    const read = function() {
      const b = bin.read();
      if (b == -1) throw 'eof';
      return b;
    };

    let count = 0;
    const unicodeMap = {};
    while (true) {
      const b0 = bin.read();
      if (b0 == -1) break;
      const b1 = read();
      const b2 = read();
      const b3 = read();
      const k = String.fromCharCode( (b0 << 8) | b1);
      const v = (b2 << 8) | b3;
      unicodeMap[k] = v;
      count += 1;
    }
    if (count != numChars) {
      throw count + ' != ' + numChars;
    }

    return unicodeMap;
  }();

  const unknownChar = '?'.charCodeAt(0);

  return function(s) {
    const bytes = [];
    for (let i = 0; i < s.length; i += 1) {
      const c = s.charCodeAt(i);
      if (c < 128) {
        bytes.push(c);
      } else {
        const b = unicodeMap[s.charAt(i)];
        if (typeof b == 'number') {
          if ( (b & 0xff) == b) {
            // 1byte
            bytes.push(b);
          } else {
            // 2bytes
            bytes.push(b >>> 8);
            bytes.push(b & 0xff);
          }
        } else {
          bytes.push(unknownChar);
        }
      }
    }
    return bytes;
  };
};

//---------------------------------------------------------------------
// QRMode
//---------------------------------------------------------------------

const QRMode = {
  MODE_NUMBER :    1 << 0,
  MODE_ALPHA_NUM : 1 << 1,
  MODE_8BIT_BYTE : 1 << 2,
  MODE_KANJI :     1 << 3
};

//---------------------------------------------------------------------
// QRErrorCorrectionLevel
//---------------------------------------------------------------------

const QRErrorCorrectionLevel = {
  L : 1,
  M : 0,
  Q : 3,
  H : 2
};

//---------------------------------------------------------------------
// QRMaskPattern
//---------------------------------------------------------------------

const QRMaskPattern = {
  PATTERN000 : 0,
  PATTERN001 : 1,
  PATTERN010 : 2,
  PATTERN011 : 3,
  PATTERN100 : 4,
  PATTERN101 : 5,
  PATTERN110 : 6,
  PATTERN111 : 7
};

//---------------------------------------------------------------------
// QRUtil
//---------------------------------------------------------------------

const QRUtil = function() {

  const PATTERN_POSITION_TABLE = [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]
  ];
  const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
  const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
  const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

  const _this = {};

  const getBCHDigit = function(data) {
    let digit = 0;
    while (data != 0) {
      digit += 1;
      data >>>= 1;
    }
    return digit;
  };

  _this.getBCHTypeInfo = function(data) {
    let d = data << 10;
    while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
      d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
    }
    return ( (data << 10) | d) ^ G15_MASK;
  };

  _this.getBCHTypeNumber = function(data) {
    let d = data << 12;
    while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
      d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
    }
    return (data << 12) | d;
  };

  _this.getPatternPosition = function(typeNumber) {
    return PATTERN_POSITION_TABLE[typeNumber - 1];
  };

  _this.getMaskFunction = function(maskPattern) {

    switch (maskPattern) {

    case QRMaskPattern.PATTERN000 :
      return function(i, j) { return (i + j) % 2 == 0; };
    case QRMaskPattern.PATTERN001 :
      return function(i, j) { return i % 2 == 0; };
    case QRMaskPattern.PATTERN010 :
      return function(i, j) { return j % 3 == 0; };
    case QRMaskPattern.PATTERN011 :
      return function(i, j) { return (i + j) % 3 == 0; };
    case QRMaskPattern.PATTERN100 :
      return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
    case QRMaskPattern.PATTERN101 :
      return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
    case QRMaskPattern.PATTERN110 :
      return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
    case QRMaskPattern.PATTERN111 :
      return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

    default :
      throw 'bad maskPattern:' + maskPattern;
    }
  };

  _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
    let a = qrPolynomial([1], 0);
    for (let i = 0; i < errorCorrectLength; i += 1) {
      a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
    }
    return a;
  };

  _this.getLengthInBits = function(mode, type) {

    if (1 <= type && type < 10) {

      // 1 - 9

      switch(mode) {
      case QRMode.MODE_NUMBER    : return 10;
      case QRMode.MODE_ALPHA_NUM : return 9;
      case QRMode.MODE_8BIT_BYTE : return 8;
      case QRMode.MODE_KANJI     : return 8;
      default :
        throw 'mode:' + mode;
      }

    } else if (type < 27) {

      // 10 - 26

      switch(mode) {
      case QRMode.MODE_NUMBER    : return 12;
      case QRMode.MODE_ALPHA_NUM : return 11;
      case QRMode.MODE_8BIT_BYTE : return 16;
      case QRMode.MODE_KANJI     : return 10;
      default :
        throw 'mode:' + mode;
      }

    } else if (type < 41) {

      // 27 - 40

      switch(mode) {
      case QRMode.MODE_NUMBER    : return 14;
      case QRMode.MODE_ALPHA_NUM : return 13;
      case QRMode.MODE_8BIT_BYTE : return 16;
      case QRMode.MODE_KANJI     : return 12;
      default :
        throw 'mode:' + mode;
      }

    } else {
      throw 'type:' + type;
    }
  };

  _this.getLostPoint = function(qrcode) {

    const moduleCount = qrcode.getModuleCount();

    let lostPoint = 0;

    // LEVEL1

    for (let row = 0; row < moduleCount; row += 1) {
      for (let col = 0; col < moduleCount; col += 1) {

        let sameCount = 0;
        const dark = qrcode.isDark(row, col);

        for (let r = -1; r <= 1; r += 1) {

          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }

          for (let c = -1; c <= 1; c += 1) {

            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }

            if (r == 0 && c == 0) {
              continue;
            }

            if (dark == qrcode.isDark(row + r, col + c) ) {
              sameCount += 1;
            }
          }
        }

        if (sameCount > 5) {
          lostPoint += (3 + sameCount - 5);
        }
      }
    };

    // LEVEL2

    for (let row = 0; row < moduleCount - 1; row += 1) {
      for (let col = 0; col < moduleCount - 1; col += 1) {
        let count = 0;
        if (qrcode.isDark(row, col) ) count += 1;
        if (qrcode.isDark(row + 1, col) ) count += 1;
        if (qrcode.isDark(row, col + 1) ) count += 1;
        if (qrcode.isDark(row + 1, col + 1) ) count += 1;
        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    }

    // LEVEL3

    for (let row = 0; row < moduleCount; row += 1) {
      for (let col = 0; col < moduleCount - 6; col += 1) {
        if (qrcode.isDark(row, col)
            && !qrcode.isDark(row, col + 1)
            &&  qrcode.isDark(row, col + 2)
            &&  qrcode.isDark(row, col + 3)
            &&  qrcode.isDark(row, col + 4)
            && !qrcode.isDark(row, col + 5)
            &&  qrcode.isDark(row, col + 6) ) {
          lostPoint += 40;
        }
      }
    }

    for (let col = 0; col < moduleCount; col += 1) {
      for (let row = 0; row < moduleCount - 6; row += 1) {
        if (qrcode.isDark(row, col)
            && !qrcode.isDark(row + 1, col)
            &&  qrcode.isDark(row + 2, col)
            &&  qrcode.isDark(row + 3, col)
            &&  qrcode.isDark(row + 4, col)
            && !qrcode.isDark(row + 5, col)
            &&  qrcode.isDark(row + 6, col) ) {
          lostPoint += 40;
        }
      }
    }

    // LEVEL4

    let darkCount = 0;

    for (let col = 0; col < moduleCount; col += 1) {
      for (let row = 0; row < moduleCount; row += 1) {
        if (qrcode.isDark(row, col) ) {
          darkCount += 1;
        }
      }
    }

    const ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;

    return lostPoint;
  };

  return _this;
}();

//---------------------------------------------------------------------
// QRMath
//---------------------------------------------------------------------

const QRMath = function() {

  const EXP_TABLE = new Array(256);
  const LOG_TABLE = new Array(256);

  // initialize tables
  for (let i = 0; i < 8; i += 1) {
    EXP_TABLE[i] = 1 << i;
  }
  for (let i = 8; i < 256; i += 1) {
    EXP_TABLE[i] = EXP_TABLE[i - 4]
      ^ EXP_TABLE[i - 5]
      ^ EXP_TABLE[i - 6]
      ^ EXP_TABLE[i - 8];
  }
  for (let i = 0; i < 255; i += 1) {
    LOG_TABLE[EXP_TABLE[i] ] = i;
  }

  const _this = {};

  _this.glog = function(n) {

    if (n < 1) {
      throw 'glog(' + n + ')';
    }

    return LOG_TABLE[n];
  };

  _this.gexp = function(n) {

    while (n < 0) {
      n += 255;
    }

    while (n >= 256) {
      n -= 255;
    }

    return EXP_TABLE[n];
  };

  return _this;
}();

//---------------------------------------------------------------------
// qrPolynomial
//---------------------------------------------------------------------

const qrPolynomial = function(num, shift) {

  if (typeof num.length == 'undefined') {
    throw num.length + '/' + shift;
  }

  const _num = function() {
    let offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset += 1;
    }
    const _num = new Array(num.length - offset + shift);
    for (let i = 0; i < num.length - offset; i += 1) {
      _num[i] = num[i + offset];
    }
    return _num;
  }();

  const _this = {};

  _this.getAt = function(index) {
    return _num[index];
  };

  _this.getLength = function() {
    return _num.length;
  };

  _this.multiply = function(e) {

    const num = new Array(_this.getLength() + e.getLength() - 1);

    for (let i = 0; i < _this.getLength(); i += 1) {
      for (let j = 0; j < e.getLength(); j += 1) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
      }
    }

    return qrPolynomial(num, 0);
  };

  _this.mod = function(e) {

    if (_this.getLength() - e.getLength() < 0) {
      return _this;
    }

    const ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

    const num = new Array(_this.getLength() );
    for (let i = 0; i < _this.getLength(); i += 1) {
      num[i] = _this.getAt(i);
    }

    for (let i = 0; i < e.getLength(); i += 1) {
      num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
    }

    // recursive call
    return qrPolynomial(num, 0).mod(e);
  };

  return _this;
};

//---------------------------------------------------------------------
// QRRSBlock
//---------------------------------------------------------------------

const QRRSBlock = function() {

  const RS_BLOCK_TABLE = [

    // L
    // M
    // Q
    // H

    // 1
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],

    // 2
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],

    // 3
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],

    // 4
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],

    // 5
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],

    // 6
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],

    // 7
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],

    // 8
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],

    // 9
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],

    // 10
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],

    // 11
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],

    // 12
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],

    // 13
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],

    // 14
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],

    // 15
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12, 7, 37, 13],

    // 16
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],

    // 17
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],

    // 18
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],

    // 19
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],

    // 20
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],

    // 21
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],

    // 22
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],

    // 23
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],

    // 24
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],

    // 25
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],

    // 26
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],

    // 27
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],

    // 28
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],

    // 29
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],

    // 30
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],

    // 31
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],

    // 32
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],

    // 33
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],

    // 34
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],

    // 35
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],

    // 36
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],

    // 37
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],

    // 38
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],

    // 39
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],

    // 40
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
  ];

  const qrRSBlock = function(totalCount, dataCount) {
    const _this = {};
    _this.totalCount = totalCount;
    _this.dataCount = dataCount;
    return _this;
  };

  const _this = {};

  const getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

    switch(errorCorrectionLevel) {
    case QRErrorCorrectionLevel.L :
      return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
    case QRErrorCorrectionLevel.M :
      return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
    case QRErrorCorrectionLevel.Q :
      return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
    case QRErrorCorrectionLevel.H :
      return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
    default :
      return undefined;
    }
  };

  _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

    const rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

    if (typeof rsBlock == 'undefined') {
      throw 'bad rs block @ typeNumber:' + typeNumber +
          '/errorCorrectionLevel:' + errorCorrectionLevel;
    }

    const length = rsBlock.length / 3;

    const list = [];

    for (let i = 0; i < length; i += 1) {

      const count = rsBlock[i * 3 + 0];
      const totalCount = rsBlock[i * 3 + 1];
      const dataCount = rsBlock[i * 3 + 2];

      for (let j = 0; j < count; j += 1) {
        list.push(qrRSBlock(totalCount, dataCount) );
      }
    }

    return list;
  };

  return _this;
}();

//---------------------------------------------------------------------
// qrBitBuffer
//---------------------------------------------------------------------

const qrBitBuffer = function() {

  const _buffer = [];
  let _length = 0;

  const _this = {};

  _this.getBuffer = function() {
    return _buffer;
  };

  _this.getAt = function(index) {
    const bufIndex = Math.floor(index / 8);
    return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
  };

  _this.put = function(num, length) {
    for (let i = 0; i < length; i += 1) {
      _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
    }
  };

  _this.getLengthInBits = function() {
    return _length;
  };

  _this.putBit = function(bit) {

    const bufIndex = Math.floor(_length / 8);
    if (_buffer.length <= bufIndex) {
      _buffer.push(0);
    }

    if (bit) {
      _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
    }

    _length += 1;
  };

  return _this;
};

//---------------------------------------------------------------------
// qrNumber
//---------------------------------------------------------------------

const qrNumber = function(data) {

  const _mode = QRMode.MODE_NUMBER;
  const _data = data;

  const _this = {};

  _this.getMode = function() {
    return _mode;
  };

  _this.getLength = function(buffer) {
    return _data.length;
  };

  _this.write = function(buffer) {

    const data = _data;

    let i = 0;

    while (i + 2 < data.length) {
      buffer.put(strToNum(data.substring(i, i + 3) ), 10);
      i += 3;
    }

    if (i < data.length) {
      if (data.length - i == 1) {
        buffer.put(strToNum(data.substring(i, i + 1) ), 4);
      } else if (data.length - i == 2) {
        buffer.put(strToNum(data.substring(i, i + 2) ), 7);
      }
    }
  };

  const strToNum = function(s) {
    let num = 0;
    for (let i = 0; i < s.length; i += 1) {
      num = num * 10 + chatToNum(s.charAt(i) );
    }
    return num;
  };

  const chatToNum = function(c) {
    if ('0' <= c && c <= '9') {
      return c.charCodeAt(0) - '0'.charCodeAt(0);
    }
    throw 'illegal char :' + c;
  };

  return _this;
};

//---------------------------------------------------------------------
// qrAlphaNum
//---------------------------------------------------------------------

const qrAlphaNum = function(data) {

  const _mode = QRMode.MODE_ALPHA_NUM;
  const _data = data;

  const _this = {};

  _this.getMode = function() {
    return _mode;
  };

  _this.getLength = function(buffer) {
    return _data.length;
  };

  _this.write = function(buffer) {

    const s = _data;

    let i = 0;

    while (i + 1 < s.length) {
      buffer.put(
        getCode(s.charAt(i) ) * 45 +
        getCode(s.charAt(i + 1) ), 11);
      i += 2;
    }

    if (i < s.length) {
      buffer.put(getCode(s.charAt(i) ), 6);
    }
  };

  const getCode = function(c) {

    if ('0' <= c && c <= '9') {
      return c.charCodeAt(0) - '0'.charCodeAt(0);
    } else if ('A' <= c && c <= 'Z') {
      return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    } else {
      switch (c) {
      case '\u0020' : return 36;
      case '$' : return 37;
      case '%' : return 38;
      case '*' : return 39;
      case '+' : return 40;
      case '-' : return 41;
      case '.' : return 42;
      case '/' : return 43;
      case ':' : return 44;
      default :
        throw 'illegal char :' + c;
      }
    }
  };

  return _this;
};

//---------------------------------------------------------------------
// qr8BitByte
//---------------------------------------------------------------------

const qr8BitByte = function(data) {

  const _mode = QRMode.MODE_8BIT_BYTE;
  const _data = data;
  const _bytes = qrcode.stringToBytes(data);

  const _this = {};

  _this.getMode = function() {
    return _mode;
  };

  _this.getLength = function(buffer) {
    return _bytes.length;
  };

  _this.write = function(buffer) {
    for (let i = 0; i < _bytes.length; i += 1) {
      buffer.put(_bytes[i], 8);
    }
  };

  return _this;
};

//---------------------------------------------------------------------
// qrKanji
//---------------------------------------------------------------------

const qrKanji = function(data) {

  const _mode = QRMode.MODE_KANJI;
  const _data = data;

  const stringToBytes = qrcode.stringToBytes;
  !function(c, code) {
    // self test for sjis support.
    const test = stringToBytes(c);
    if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
      throw 'sjis not supported.';
    }
  }('\u53cb', 0x9746);

  const _bytes = stringToBytes(data);

  const _this = {};

  _this.getMode = function() {
    return _mode;
  };

  _this.getLength = function(buffer) {
    return ~~(_bytes.length / 2);
  };

  _this.write = function(buffer) {

    const data = _bytes;

    let i = 0;

    while (i + 1 < data.length) {

      let c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

      if (0x8140 <= c && c <= 0x9FFC) {
        c -= 0x8140;
      } else if (0xE040 <= c && c <= 0xEBBF) {
        c -= 0xC140;
      } else {
        throw 'illegal char at ' + (i + 1) + '/' + c;
      }

      c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

      buffer.put(c, 13);

      i += 2;
    }

    if (i < data.length) {
      throw 'illegal char at ' + (i + 1);
    }
  };

  return _this;
};

//=====================================================================
// GIF Support etc.
//

//---------------------------------------------------------------------
// byteArrayOutputStream
//---------------------------------------------------------------------

const byteArrayOutputStream = function() {

  const _bytes = [];

  const _this = {};

  _this.writeByte = function(b) {
    _bytes.push(b & 0xff);
  };

  _this.writeShort = function(i) {
    _this.writeByte(i);
    _this.writeByte(i >>> 8);
  };

  _this.writeBytes = function(b, off, len) {
    off = off || 0;
    len = len || b.length;
    for (let i = 0; i < len; i += 1) {
      _this.writeByte(b[i + off]);
    }
  };

  _this.writeString = function(s) {
    for (let i = 0; i < s.length; i += 1) {
      _this.writeByte(s.charCodeAt(i) );
    }
  };

  _this.toByteArray = function() {
    return _bytes;
  };

  _this.toString = function() {
    let s = '';
    s += '[';
    for (let i = 0; i < _bytes.length; i += 1) {
      if (i > 0) {
        s += ',';
      }
      s += _bytes[i];
    }
    s += ']';
    return s;
  };

  return _this;
};

//---------------------------------------------------------------------
// base64EncodeOutputStream
//---------------------------------------------------------------------

const base64EncodeOutputStream = function() {

  let _buffer = 0;
  let _buflen = 0;
  let _length = 0;
  let _base64 = '';

  const _this = {};

  const writeEncoded = function(b) {
    _base64 += String.fromCharCode(encode(b & 0x3f) );
  };

  const encode = function(n) {
    if (n < 0) {
      throw 'n:' + n;
    } else if (n < 26) {
      return 0x41 + n;
    } else if (n < 52) {
      return 0x61 + (n - 26);
    } else if (n < 62) {
      return 0x30 + (n - 52);
    } else if (n == 62) {
      return 0x2b;
    } else if (n == 63) {
      return 0x2f;
    } else {
      throw 'n:' + n;
    }
  };

  _this.writeByte = function(n) {

    _buffer = (_buffer << 8) | (n & 0xff);
    _buflen += 8;
    _length += 1;

    while (_buflen >= 6) {
      writeEncoded(_buffer >>> (_buflen - 6) );
      _buflen -= 6;
    }
  };

  _this.flush = function() {

    if (_buflen > 0) {
      writeEncoded(_buffer << (6 - _buflen) );
      _buffer = 0;
      _buflen = 0;
    }

    if (_length % 3 != 0) {
      // padding
      const padlen = 3 - _length % 3;
      for (let i = 0; i < padlen; i += 1) {
        _base64 += '=';
      }
    }
  };

  _this.toString = function() {
    return _base64;
  };

  return _this;
};

//---------------------------------------------------------------------
// base64DecodeInputStream
//---------------------------------------------------------------------

const base64DecodeInputStream = function(str) {

  const _str = str;
  let _pos = 0;
  let _buffer = 0;
  let _buflen = 0;

  const _this = {};

  _this.read = function() {

    while (_buflen < 8) {

      if (_pos >= _str.length) {
        if (_buflen == 0) {
          return -1;
        }
        throw 'unexpected end of file./' + _buflen;
      }

      const c = _str.charAt(_pos);
      _pos += 1;

      if (c == '=') {
        _buflen = 0;
        return -1;
      } else if (c.match(/^\s$/) ) {
        // ignore if whitespace.
        continue;
      }

      _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
      _buflen += 6;
    }

    const n = (_buffer >>> (_buflen - 8) ) & 0xff;
    _buflen -= 8;
    return n;
  };

  const decode = function(c) {
    if (0x41 <= c && c <= 0x5a) {
      return c - 0x41;
    } else if (0x61 <= c && c <= 0x7a) {
      return c - 0x61 + 26;
    } else if (0x30 <= c && c <= 0x39) {
      return c - 0x30 + 52;
    } else if (c == 0x2b) {
      return 62;
    } else if (c == 0x2f) {
      return 63;
    } else {
      throw 'c:' + c;
    }
  };

  return _this;
};

//---------------------------------------------------------------------
// gifImage (B/W)
//---------------------------------------------------------------------

const gifImage = function(width, height) {

  const _width = width;
  const _height = height;
  const _data = new Array(width * height);

  const _this = {};

  _this.setPixel = function(x, y, pixel) {
    _data[y * _width + x] = pixel;
  };

  _this.write = function(out) {

    //---------------------------------
    // GIF Signature

    out.writeString('GIF87a');

    //---------------------------------
    // Screen Descriptor

    out.writeShort(_width);
    out.writeShort(_height);

    out.writeByte(0x80); // 2bit
    out.writeByte(0);
    out.writeByte(0);

    //---------------------------------
    // Global Color Map

    // black
    out.writeByte(0x00);
    out.writeByte(0x00);
    out.writeByte(0x00);

    // white
    out.writeByte(0xff);
    out.writeByte(0xff);
    out.writeByte(0xff);

    //---------------------------------
    // Image Descriptor

    out.writeString(',');
    out.writeShort(0);
    out.writeShort(0);
    out.writeShort(_width);
    out.writeShort(_height);
    out.writeByte(0);

    //---------------------------------
    // Local Color Map

    //---------------------------------
    // Raster Data

    const lzwMinCodeSize = 2;
    const raster = getLZWRaster(lzwMinCodeSize);

    out.writeByte(lzwMinCodeSize);

    let offset = 0;

    while (raster.length - offset > 255) {
      out.writeByte(255);
      out.writeBytes(raster, offset, 255);
      offset += 255;
    }

    out.writeByte(raster.length - offset);
    out.writeBytes(raster, offset, raster.length - offset);
    out.writeByte(0x00);

    //---------------------------------
    // GIF Terminator
    out.writeString(';');
  };

  const bitOutputStream = function(out) {

    const _out = out;
    let _bitLength = 0;
    let _bitBuffer = 0;

    const _this = {};

    _this.write = function(data, length) {

      if ( (data >>> length) != 0) {
        throw 'length over';
      }

      while (_bitLength + length >= 8) {
        _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
        length -= (8 - _bitLength);
        data >>>= (8 - _bitLength);
        _bitBuffer = 0;
        _bitLength = 0;
      }

      _bitBuffer = (data << _bitLength) | _bitBuffer;
      _bitLength = _bitLength + length;
    };

    _this.flush = function() {
      if (_bitLength > 0) {
        _out.writeByte(_bitBuffer);
      }
    };

    return _this;
  };

  const getLZWRaster = function(lzwMinCodeSize) {

    const clearCode = 1 << lzwMinCodeSize;
    const endCode = (1 << lzwMinCodeSize) + 1;
    let bitLength = lzwMinCodeSize + 1;

    // Setup LZWTable
    const table = lzwTable();

    for (let i = 0; i < clearCode; i += 1) {
      table.add(String.fromCharCode(i) );
    }
    table.add(String.fromCharCode(clearCode) );
    table.add(String.fromCharCode(endCode) );

    const byteOut = byteArrayOutputStream();
    const bitOut = bitOutputStream(byteOut);

    // clear code
    bitOut.write(clearCode, bitLength);

    let dataIndex = 0;

    let s = String.fromCharCode(_data[dataIndex]);
    dataIndex += 1;

    while (dataIndex < _data.length) {

      const c = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      if (table.contains(s + c) ) {

        s = s + c;

      } else {

        bitOut.write(table.indexOf(s), bitLength);

        if (table.size() < 0xfff) {

          if (table.size() == (1 << bitLength) ) {
            bitLength += 1;
          }

          table.add(s + c);
        }

        s = c;
      }
    }

    bitOut.write(table.indexOf(s), bitLength);

    // end code
    bitOut.write(endCode, bitLength);

    bitOut.flush();

    return byteOut.toByteArray();
  };

  const lzwTable = function() {

    const _map = {};
    let _size = 0;

    const _this = {};

    _this.add = function(key) {
      if (_this.contains(key) ) {
        throw 'dup key:' + key;
      }
      _map[key] = _size;
      _size += 1;
    };

    _this.size = function() {
      return _size;
    };

    _this.indexOf = function(key) {
      return _map[key];
    };

    _this.contains = function(key) {
      return typeof _map[key] != 'undefined';
    };

    return _this;
  };

  return _this;
};

const createDataURL = function(width, height, getPixel) {
  const gif = gifImage(width, height);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      gif.setPixel(x, y, getPixel(x, y) );
    }
  }

  const b = byteArrayOutputStream();
  gif.write(b);

  const base64 = base64EncodeOutputStream();
  const bytes = b.toByteArray();
  for (let i = 0; i < bytes.length; i += 1) {
    base64.writeByte(bytes[i]);
  }
  base64.flush();

  return 'data:image/gif;base64,' + base64;
};

const stringToBytes = qrcode.stringToBytes;

/**
 *  Props equality check
 */
function deepEqual(a, b, visited = new WeakMap()) {
    // same reference or same primitive value
    if (Object.is(a, b))
        return true;
    // different types -> cannot be equal
    if (typeof a !== typeof b)
        return false;
    // null / undefined check
    if (a == null || b == null)
        return false;
    // functions compare only by reference
    if (typeof a === 'function' || typeof b === 'function') {
        return a === b;
    }
    // avoid infinite loops on circular references
    if (typeof a === 'object' && typeof b === 'object') {
        if (visited.has(a) && visited.get(a) === b) {
            return true;
        }
        visited.set(a, b);
    }
    // date
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    // arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i], visited))
                return false;
        }
        return true;
    }
    // sets
    if (a instanceof Set && b instanceof Set) {
        if (a.size !== b.size)
            return false;
        for (const val of a) {
            if (![...b].some(bVal => deepEqual(val, bVal, visited)))
                return false;
        }
        return true;
    }
    // maps
    if (a instanceof Map && b instanceof Map) {
        if (a.size !== b.size)
            return false;
        for (const [key, val] of a) {
            if (!b.has(key) || !deepEqual(val, b.get(key), visited))
                return false;
        }
        return true;
    }
    // plain objects
    if (Object.getPrototypeOf(a) === Object.prototype ||
        Object.getPrototypeOf(a) === null) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length)
            return false;
        for (const key of keysA) {
            if (!keysB.includes(key))
                return false;
            if (!deepEqual(a[key], b[key], visited))
                return false;
        }
        return true;
    }
    // remaining objects with custom prototypes (e.g., DOMPointInit, CSSProperties)
    try {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    catch {
        return false;
    }
}
/**
 *  FileType to MimeType mapping
 */
function mimeFor(fileType = 'png') {
    switch (fileType) {
        case 'jpg':
            return 'image/jpeg';
        case 'webp':
            return 'image/webp';
        case 'png':
        default:
            return 'image/png';
    }
}
/**
 *  Create an <a download> and click it
 */
function triggerDownload(url, fileName) {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = url;
    document.body.appendChild(link); // Safari in some contexts requires the element to be in the DOM.
    link.click();
    link.remove();
}

function utf16to8(str) {
    let out = '', i, c;
    const len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        }
        else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
        else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}
/**
 * Draw a rounded square in the canvas
 */
function drawRoundedSquare(lineWidth, x, y, size, color, radii, fill, ctx) {
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    // Adjust coordinates so that the outside of the stroke is aligned to the edges
    y += lineWidth / 2;
    x += lineWidth / 2;
    size -= lineWidth;
    if (!Array.isArray(radii)) {
        radii = [radii, radii, radii, radii];
    }
    // Radius should not be greater than half the size or less than zero
    radii = radii.map((r) => {
        r = Math.min(r, size / 2);
        return (r < 0) ? 0 : r;
    });
    const rTopLeft = radii[0] || 0;
    const rTopRight = radii[1] || 0;
    const rBottomRight = radii[2] || 0;
    const rBottomLeft = radii[3] || 0;
    ctx.beginPath();
    ctx.moveTo(x + rTopLeft, y);
    ctx.lineTo(x + size - rTopRight, y);
    if (rTopRight)
        ctx.quadraticCurveTo(x + size, y, x + size, y + rTopRight);
    ctx.lineTo(x + size, y + size - rBottomRight);
    if (rBottomRight)
        ctx.quadraticCurveTo(x + size, y + size, x + size - rBottomRight, y + size);
    ctx.lineTo(x + rBottomLeft, y + size);
    if (rBottomLeft)
        ctx.quadraticCurveTo(x, y + size, x, y + size - rBottomLeft);
    ctx.lineTo(x, y + rTopLeft);
    if (rTopLeft)
        ctx.quadraticCurveTo(x, y, x + rTopLeft, y);
    ctx.closePath();
    ctx.stroke();
    if (fill) {
        ctx.fill();
    }
}
/**
 * Draw a single positional pattern eye.
 */
function drawPositioningPattern(ctx, cellSize, offset, row, col, color, radii = [0, 0, 0, 0]) {
    const lineWidth = Math.ceil(cellSize);
    let radiiOuter;
    let radiiInner;
    if (typeof radii !== 'number' && !Array.isArray(radii)) {
        radiiOuter = radii.outer || 0;
        radiiInner = radii.inner || 0;
    }
    else {
        radiiOuter = radii;
        radiiInner = radiiOuter;
    }
    let colorOuter;
    let colorInner;
    if (typeof color !== 'string') {
        colorOuter = color.outer;
        colorInner = color.inner;
    }
    else {
        colorOuter = color;
        colorInner = color;
    }
    let y = (row * cellSize) + offset;
    let x = (col * cellSize) + offset;
    let size = cellSize * 7;
    // Outer box
    drawRoundedSquare(lineWidth, x, y, size, colorOuter, radiiOuter, false, ctx);
    // Inner box
    size = cellSize * 3;
    y += cellSize * 2;
    x += cellSize * 2;
    drawRoundedSquare(lineWidth, x, y, size, colorInner, radiiInner, true, ctx);
}
;
/**
 * Is this dot inside a positional pattern zone.
 */
function isInPositioninZone(row, col, zones) {
    return zones.some((zone) => (row >= zone.row && row <= zone.row + 7 &&
        col >= zone.col && col <= zone.col + 7));
}
/**
 * Checks whether the coordinate is behind the logo and needs to be removed. true if the coordinate is behind the logo and needs to be removed.
 */
function removeCoordinateBehindLogo(removeQrCodeBehindLogo, row, col, dWidthLogo, dHeightLogo, dxLogo, dyLogo, cellSize, offset, logoImage, logoPadding = 0, logoPaddingStyle = 'square') {
    if (!removeQrCodeBehindLogo || !logoImage) {
        return false;
    }
    const paddingInCells = Math.ceil(logoPadding / cellSize);
    const snappedPadding = paddingInCells * cellSize;
    const absolute_dxLogo = dxLogo + offset;
    const absolute_dyLogo = dyLogo + offset;
    const cellLeft = Math.round(col * cellSize) + offset;
    const cellTop = Math.round(row * cellSize) + offset;
    const w = (Math.ceil((col + 1) * cellSize) - Math.floor(col * cellSize));
    const h = (Math.ceil((row + 1) * cellSize) - Math.floor(row * cellSize));
    const cellRight = cellLeft + w;
    const cellBottom = cellTop + h;
    if (logoPaddingStyle === 'square') {
        const logoLeft = absolute_dxLogo - snappedPadding;
        const logoRight = absolute_dxLogo + dWidthLogo + snappedPadding;
        const logoTop = absolute_dyLogo - snappedPadding;
        const logoBottom = absolute_dyLogo + dHeightLogo + snappedPadding;
        const overlapX = cellLeft < logoRight && cellRight > logoLeft;
        const overlapY = cellTop < logoBottom && cellBottom > logoTop;
        return overlapX && overlapY;
    }
    if (logoPaddingStyle === 'circle') {
        const logoCenterX = absolute_dxLogo + dWidthLogo / 2;
        const logoCenterY = absolute_dyLogo + dHeightLogo / 2;
        const circleRadius = (Math.max(dWidthLogo, dHeightLogo) / 2) + snappedPadding;
        const closestX = Math.max(cellLeft, Math.min(logoCenterX, cellRight));
        const closestY = Math.max(cellTop, Math.min(logoCenterY, cellBottom));
        const distanceX = logoCenterX - closestX;
        const distanceY = logoCenterY - closestY;
        const distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);
        return distanceSquared < (circleRadius * circleRadius);
    }
    return false;
}
/**
 *  Load an HTMLImageElement as a Promise so we can await it
 */
function loadImage(src, enableCORS) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        if (enableCORS) {
            image.crossOrigin = 'Anonymous';
        }
        image.onload = (event) => resolve({ image, event });
        image.onerror = () => reject(new Error(`Failed to load logo image: ${src}`));
        image.src = src;
    });
}
const DEFAULT_PROPS = {
    value: 'https://reactjs.org/',
    ecLevel: 'M',
    enableCORS: false,
    size: 150,
    quietZone: 10,
    bgColor: '#FFFFFF',
    fgColor: '#000000',
    logoOpacity: 1,
    qrStyle: 'squares',
    eyeRadius: [0, 0, 0],
    logoPaddingStyle: 'square',
    logoPaddingRadius: 0,
    removeQrCodeBehindLogo: false,
};
/**
 *  Render a QR code into a canvas.

 *  - If `canvas` is provided, draws into it. Otherwise creates a new offscreen canvas.
 *  - Resolves AFTER the logo (if any) has been loaded and drawn, so the returned canvas is always in its final state.
 *
 *   Browser-only: uses `document`, `Image`, and `window.devicePixelRatio`.
 */
async function renderQRCodeToCanvas(canvas, opts) {
    if (typeof document === 'undefined') {
        throw new Error('renderQRCodeToCanvas must be called in a browser environment');
    }
    const props = { ...DEFAULT_PROPS, ...opts };
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Canvas 2D context not available');
    }
    // just make sure that these params are passed as numbers
    const size = +props.size;
    const quietZone = +props.quietZone;
    const logoWidth = props.logoWidth ? +props.logoWidth : 0;
    const logoHeight = props.logoHeight ? +props.logoHeight : 0;
    const logoPadding = props.logoPadding ? +props.logoPadding : 0;
    const qrCode = qrcode(0, props.ecLevel);
    qrCode.addData(utf16to8(props.value));
    qrCode.make();
    const canvasSize = size + (2 * quietZone);
    const length = qrCode.getModuleCount();
    const cellSize = size / length;
    const scale = props.pixelRatio ?? window.devicePixelRatio ?? 1;
    const dWidthLogo = logoWidth || size * 0.2;
    const dHeightLogo = logoHeight || dWidthLogo;
    const dxLogo = (size - dWidthLogo) / 2;
    const dyLogo = (size - dHeightLogo) / 2;
    canvas.height = canvas.width = canvasSize * scale;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.fillStyle = props.bgColor;
    ctx.fillRect(0, 0, canvasSize, canvasSize);
    const offset = quietZone;
    const positioningZones = [
        { row: 0, col: 0 },
        { row: 0, col: length - 7 },
        { row: length - 7, col: 0 },
    ];
    ctx.strokeStyle = props.fgColor;
    const shouldSkipCell = (row, col) => isInPositioninZone(row, col, positioningZones) ||
        removeCoordinateBehindLogo(props.removeQrCodeBehindLogo, row, col, dWidthLogo, dHeightLogo, dxLogo, dyLogo, cellSize, offset, props.logoImage, logoPadding, props.logoPaddingStyle);
    if (props.qrStyle === 'dots') {
        ctx.fillStyle = props.fgColor;
        const radius = cellSize / 2;
        for (let row = 0; row < length; row++) {
            for (let col = 0; col < length; col++) {
                if (qrCode.isDark(row, col) && !shouldSkipCell(row, col)) {
                    ctx.beginPath();
                    ctx.arc(Math.round(col * cellSize) + radius + offset, Math.round(row * cellSize) + radius + offset, (radius / 100) * 75, 0, 2 * Math.PI, false);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        }
    }
    else if (props.qrStyle === 'fluid') {
        const radius = Math.ceil(cellSize / 2);
        for (let row = 0; row < length; row++) {
            for (let col = 0; col < length; col++) {
                if (qrCode.isDark(row, col) && !shouldSkipCell(row, col)) {
                    const roundedCorners = [false, false, false, false]; // top-left, top-right, bottom-right, bottom-left
                    if ((row > 0 && !qrCode.isDark(row - 1, col)) && (col > 0 && !qrCode.isDark(row, col - 1)))
                        roundedCorners[0] = true;
                    if ((row > 0 && !qrCode.isDark(row - 1, col)) && (col < length - 1 && !qrCode.isDark(row, col + 1)))
                        roundedCorners[1] = true;
                    if ((row < length - 1 && !qrCode.isDark(row + 1, col)) && (col < length - 1 && !qrCode.isDark(row, col + 1)))
                        roundedCorners[2] = true;
                    if ((row < length - 1 && !qrCode.isDark(row + 1, col)) && (col > 0 && !qrCode.isDark(row, col - 1)))
                        roundedCorners[3] = true;
                    const w = (Math.ceil((col + 1) * cellSize) - Math.floor(col * cellSize));
                    const h = (Math.ceil((row + 1) * cellSize) - Math.floor(row * cellSize));
                    ctx.fillStyle = props.fgColor;
                    ctx.beginPath();
                    ctx.arc(Math.round(col * cellSize) + radius + offset, Math.round(row * cellSize) + radius + offset, radius, 0, 2 * Math.PI, false);
                    ctx.closePath();
                    ctx.fill();
                    if (!roundedCorners[0])
                        ctx.fillRect(Math.round(col * cellSize) + offset, Math.round(row * cellSize) + offset, w / 2, h / 2);
                    if (!roundedCorners[1])
                        ctx.fillRect(Math.round(col * cellSize) + offset + Math.floor(w / 2), Math.round(row * cellSize) + offset, w / 2, h / 2);
                    if (!roundedCorners[2])
                        ctx.fillRect(Math.round(col * cellSize) + offset + Math.floor(w / 2), Math.round(row * cellSize) + offset + Math.floor(h / 2), w / 2, h / 2);
                    if (!roundedCorners[3])
                        ctx.fillRect(Math.round(col * cellSize) + offset, Math.round(row * cellSize) + offset + Math.floor(h / 2), w / 2, h / 2);
                }
            }
        }
    }
    else {
        for (let row = 0; row < length; row++) {
            for (let col = 0; col < length; col++) {
                if (qrCode.isDark(row, col) && !shouldSkipCell(row, col)) {
                    ctx.fillStyle = props.fgColor;
                    const w = Math.ceil((col + 1) * cellSize) - Math.floor(col * cellSize);
                    const h = Math.ceil((row + 1) * cellSize) - Math.floor(row * cellSize);
                    ctx.fillRect(Math.round(col * cellSize) + offset, Math.round(row * cellSize) + offset, w, h);
                }
            }
        }
    }
    // Draw positioning patterns (eyes)
    for (let i = 0; i < 3; i++) {
        const { row, col } = positioningZones[i];
        let radii = props.eyeRadius;
        let color;
        if (Array.isArray(radii)) {
            radii = radii[i];
        }
        if (typeof radii === 'number') {
            radii = [radii, radii, radii, radii];
        }
        if (!opts.eyeColor) {
            color = props.fgColor;
        }
        else if (Array.isArray(opts.eyeColor)) {
            color = opts.eyeColor[i];
        }
        else {
            color = opts.eyeColor;
        }
        drawPositioningPattern(ctx, cellSize, offset, row, col, color, radii);
    }
    if (props.logoImage) {
        try {
            const { image, event } = await loadImage(props.logoImage, props.enableCORS);
            ctx.save();
            if (logoPadding) {
                ctx.beginPath();
                ctx.strokeStyle = props.bgColor;
                ctx.fillStyle = props.bgColor;
                const dWidthLogoPadding = dWidthLogo + (2 * logoPadding);
                const dHeightLogoPadding = dHeightLogo + (2 * logoPadding);
                const dxLogoPadding = dxLogo + offset - logoPadding;
                const dyLogoPadding = dyLogo + offset - logoPadding;
                if (props.logoPaddingStyle === 'circle') {
                    const dxCenterLogoPadding = dxLogoPadding + (dWidthLogoPadding / 2);
                    const dyCenterLogoPadding = dyLogoPadding + (dHeightLogoPadding / 2);
                    ctx.ellipse(dxCenterLogoPadding, dyCenterLogoPadding, dWidthLogoPadding / 2, dHeightLogoPadding / 2, 0, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fill();
                }
                else {
                    ctx.roundRect(dxLogoPadding, dyLogoPadding, dWidthLogoPadding, dHeightLogoPadding, props.logoPaddingRadius);
                    ctx.stroke();
                    ctx.fill();
                }
            }
            ctx.globalAlpha = props.logoOpacity;
            ctx.drawImage(image, dxLogo + offset, dyLogo + offset, dWidthLogo, dHeightLogo);
            ctx.restore();
            if (opts.logoOnLoad) {
                opts.logoOnLoad(event);
            }
        }
        catch (err) {
            // do not fail the whole render if the logo can't load
            console.warn('[react-qrcode-logo] QRCode logo loading failed:', err);
        }
    }
    return canvas;
}
// --------------------------
// Public headless API
// --------------------------
/**
 * Build a fully-rendered canvas with the QR code.
 * Defaults to devicePixelRatio = 1 for pixel-perfect export output.
 */
async function generateCanvas(opts) {
    const canvas = document.createElement('canvas');
    return renderQRCodeToCanvas(canvas, { ...opts, pixelRatio: opts.pixelRatio ?? 1 });
}
/**
 * Return a data URL for the QR code
 */
async function generateDataURL(opts, fileType = 'png') {
    const canvas = await generateCanvas(opts);
    return canvas.toDataURL(mimeFor(fileType), 1.0);
}
/**
 * Return a Blob for the QR code
 */
async function generateBlob(opts, fileType = 'png') {
    const canvas = await generateCanvas(opts);
    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('toBlob returned null'))), mimeFor(fileType), 1.0);
    });
}
/**
 * Generate and downloads QRCode w specified props
 */
async function downloadQRCode(opts, fileType = 'png', fileName = 'react-qrcode-logo') {
    const url = await generateDataURL(opts, fileType);
    triggerDownload(url, fileName);
}

class QRCode extends React2.Component {
    canvasRef = React2.createRef();
    /**
     * Download the currently-rendered QR code.
     * Uses the on-screen canvas (DPR-scaled) — the visible result is identical to what the user sees.
     */
    download(fileType, fileName) {
        if (!this.canvasRef.current)
            return;
        const url = this.canvasRef.current.toDataURL(mimeFor(fileType), 1.0);
        triggerDownload(url, fileName ?? 'react-qrcode-logo');
    }
    shouldComponentUpdate(nextProps) {
        return !deepEqual(this.props, nextProps);
    }
    componentDidMount() {
        this.update();
    }
    componentDidUpdate() {
        this.update();
    }
    update() {
        if (!this.canvasRef.current)
            return;
        renderQRCodeToCanvas(this.canvasRef.current, this.props)
            .catch((err) => {
            console.error('[react-qrcode-logo] QRCode render failed:', err);
        });
    }
    render() {
        const size = this.props.size ?? DEFAULT_PROPS.size;
        const quietZone = this.props.quietZone ?? DEFAULT_PROPS.quietZone;
        const qrSize = +size + 2 * +quietZone;
        return (React2.createElement("canvas", { id: this.props.id ?? 'react-qrcode-logo', height: qrSize, width: qrSize, style: { height: qrSize + 'px', width: qrSize + 'px', ...this.props.style }, ref: this.canvasRef }));
    }
}

// src/primitive.tsx
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}
function getOwnerWindow(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access window outside of the DOM");
  }
  return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access document outside of the DOM");
  }
  return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getOwnerDocument(node);
  if (!activeElement?.nodeName) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(activeElement.contentDocument.body, activeDescendant);
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getOwnerDocument(activeElement).getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
function isFrame(element) {
  return element.tagName === "IFRAME";
}

// packages/react/compose-refs/src/compose-refs.tsx
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}

// packages/react/context/src/create-context.tsx
function createContext2(rootComponentName, defaultContext) {
  const Context = reactExports.createContext(defaultContext);
  const Provider = (props) => {
    const { children, ...context } = props;
    const value = reactExports.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName) {
    const context = reactExports.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// packages/react/use-layout-effect/src/use-layout-effect.tsx
var useLayoutEffect2 = globalThis?.document ? reactExports.useLayoutEffect : () => {
};

// packages/react/id/src/id.tsx
var useReactId = React[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
  const [id, setId] = reactExports.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// src/use-effect-event.tsx
var useReactEffectEvent = React[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = React[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
  if (typeof useReactEffectEvent === "function") {
    return useReactEffectEvent(callback);
  }
  const ref = reactExports.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  if (typeof useReactInsertionEffect === "function") {
    useReactInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    useLayoutEffect2(() => {
      ref.current = callback;
    });
  }
  return reactExports.useMemo(() => (...args) => ref.current?.(...args), []);
}

// src/use-controllable-state.tsx
var useInsertionEffect = React[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = reactExports.useRef(prop !== void 0);
    reactExports.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = reactExports.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = reactExports.useState(defaultProp);
  const prevValueRef = reactExports.useRef(value);
  const onChangeRef = reactExports.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
  const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
  const isControlled = controlledState !== void 0;
  const onChange = useEffectEvent(onChangeProp);
  if (true) {
    const isControlledRef = reactExports.useRef(controlledState !== void 0);
    reactExports.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const args = [{ ...initialArg, state: defaultProp }];
  if (init) {
    args.push(init);
  }
  const [internalState, dispatch] = reactExports.useReducer(
    (state2, action) => {
      if (action.type === SYNC_STATE) {
        return { ...state2, state: action.state };
      }
      const next = reducer(state2, action);
      if (isControlled && !Object.is(next.state, state2.state)) {
        onChange(next.state);
      }
      return next;
    },
    ...args
  );
  const uncontrolledState = internalState.state;
  const prevValueRef = reactExports.useRef(uncontrolledState);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== uncontrolledState) {
      prevValueRef.current = uncontrolledState;
      if (!isControlled) {
        onChange(uncontrolledState);
      }
    }
  }, [onChange, uncontrolledState, prevValueRef, isControlled]);
  const state = reactExports.useMemo(() => {
    const isControlled2 = controlledState !== void 0;
    if (isControlled2) {
      return { ...internalState, state: controlledState };
    }
    return internalState;
  }, [internalState, controlledState]);
  reactExports.useEffect(() => {
    if (isControlled && !Object.is(controlledState, internalState.state)) {
      dispatch({ type: SYNC_STATE, state: controlledState });
    }
  }, [controlledState, internalState.state, isControlled]);
  return [state, dispatch];
}

var reactDomExports = requireReactDom();
const ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

// src/slot.tsx
// @__NO_SIDE_EFFECTS__
function createSlot$2(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone$2(ownerName);
  const Slot2 = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = reactExports.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable$2);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
          return reactExports.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot$3 = /* @__PURE__ */ createSlot$2("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone$2(ownerName) {
  const SlotClone = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (reactExports.isValidElement(children)) {
      const childrenRef = getElementRef$3(children);
      const props2 = mergeProps$2(slotProps, children.props);
      if (children.type !== reactExports.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return reactExports.cloneElement(children, props2);
    }
    return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER$2 = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable$2(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER$2;
  return Slottable2;
}
var Slottable$2 = /* @__PURE__ */ createSlottable$2("Slottable");
function isSlottable$2(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
function mergeProps$2(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$3(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// src/primitive.tsx
var NODES$1 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive$1 = NODES$1.reduce((primitive, node) => {
  const Slot = createSlot$2(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent$1(target, event) {
  if (target) reactDomExports.flushSync(() => target.dispatchEvent(event));
}
var Root$7 = Primitive$1;

// packages/react/use-callback-ref/src/use-callback-ref.tsx
function useCallbackRef$1(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

// packages/react/use-escape-keydown/src/use-escape-keydown.tsx
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef$1(onEscapeKeyDownProp);
  reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

"use client";
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = reactExports.useContext(DismissableLayerContext);
    const [node, setNode] = reactExports.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = reactExports.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    reactExports.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    reactExports.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    reactExports.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = reactExports.forwardRef((props, forwardedRef) => {
  const context = reactExports.useContext(DismissableLayerContext);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive$1.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
  const isPointerInsideReactTreeRef = reactExports.useRef(false);
  const handleClickRef = reactExports.useRef(() => {
  });
  reactExports.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef$1(onFocusOutside);
  const isFocusInsideReactTreeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent$1(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
var Root$6 = DismissableLayer;
var Branch = DismissableLayerBranch;

"use client";
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = reactExports.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = reactExports.useState(null);
  const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
  const lastFocusedElementRef = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = reactExports.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  reactExports.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  reactExports.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive$1.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) {
    updatedArray.splice(index, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
var Root$5 = FocusScope;

"use client";
var PORTAL_NAME$1 = "Portal";
var Portal$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = reactExports.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? ReactDOM.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Primitive$1.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal$1.displayName = PORTAL_NAME$1;
var Root$4 = Portal$1;

"use client";
function useStateMachine(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}

// src/presence.tsx
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : reactExports.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef$2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? reactExports.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef(null);
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: reactExports.useCallback((node2) => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef$2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Root$3 = Presence;

"use client";
var count = 0;
function FocusGuards(props) {
  useFocusGuards();
  return props.children;
}
function useFocusGuards() {
  reactExports.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values$1(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values$1 === "function" ? __values$1(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

const tslib_es6 = {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values: __values$1,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
};

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
var removedBarSizeVariable = '--removed-body-scroll-bar-size';

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = reactExports.useState(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

/**
 * creates a Ref object with on change callback
 * @param callback
 * @returns {RefObject}
 *
 * @see {@link useCallbackRef}
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */
function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        },
    };
}

/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link useMergeRefs} to be used in ReactComponents
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function mergeRefs(refs) {
    return createCallbackRef(function (newValue) { return refs.forEach(function (ref) { return assignRef(ref, newValue); }); });
}

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? reactExports.useLayoutEffect : reactExports.useEffect;
var currentValues = new WeakMap();
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    var callbackRef = useCallbackRef(defaultValue || null, function (newValue) {
        return refs.forEach(function (ref) { return assignRef(ref, newValue); });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function () {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function (ref) {
                if (!nextRefs_1.has(ref)) {
                    assignRef(ref, null);
                }
            });
            nextRefs_1.forEach(function (ref) {
                if (!prevRefs_1.has(ref)) {
                    assignRef(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
}

/**
 * Create a _lense_ on Ref, making it possible to transform ref value
 * @param {ReactRef} ref
 * @param {Function} transformer. 👉 Ref would be __NOT updated__ on `transformer` update.
 * @returns {RefObject}
 *
 * @see https://github.com/theKashey/use-callback-ref#usetransformref-to-replace-reactuseimperativehandle
 * @example
 *
 * const ResizableWithRef = forwardRef((props, ref) =>
 *  <Resizable {...props} ref={useTransformRef(ref, i => i ? i.resizable : null)}/>
 * );
 */
function useTransformRef(ref, transformer) {
    return useCallbackRef(null, function (value) { return assignRef(ref, transformer(value)); });
}

/**
 * Transforms one ref to another
 * @example
 * ```tsx
 * const ResizableWithRef = forwardRef((props, ref) =>
 *   <Resizable {...props} ref={transformRef(ref, i => i ? i.resizable : null)}/>
 * );
 * ```
 */
function transformRef(ref, transformer) {
    return createCallbackRef(function (value) { return assignRef(ref, transformer(value)); });
}

/**
 * Unmemoized version of {@link useRefToCallback}
 * @see {@link useRefToCallback}
 * @param ref
 */
function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            ref.current = newValue;
        }
    };
}
var nullCallback = function () { return null; };
// lets maintain a weak ref to, well, ref :)
// not using `kashe` to keep this package small
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    var usedRef = ref || nullCallback;
    var storedRef = weakMem.get(usedRef);
    if (storedRef) {
        return storedRef;
    }
    var cb = refToCallback(usedRef);
    weakMem.set(usedRef, cb);
    return cb;
};
/**
 * Transforms a given `ref` into `callback`.
 *
 * To transform `callback` into ref use {@link useCallbackRef|useCallbackRef(undefined, callback)}
 *
 * @param {ReactRef} ref
 * @returns {Function}
 *
 * @see https://github.com/theKashey/use-callback-ref#reftocallback
 *
 * @example
 * const ref = useRef(0);
 * const setRef = useRefToCallback(ref);
 * 👉 setRef(10);
 * ✅ ref.current === 10
 */
function useRefToCallback(ref) {
    return weakMemoize(ref);
}

const isNode = false;

var env = {
    isNode: isNode,
    forceCache: false,
};

var cache = new WeakMap();
var NO_OPTIONS = {};
function useSidecar(importer, effect) {
    var options = (effect && effect.options) || NO_OPTIONS;
    if (env.isNode && !options.ssr) {
        return [null, null];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useRealSidecar(importer, effect);
}
function useRealSidecar(importer, effect) {
    var options = (effect && effect.options) || NO_OPTIONS;
    var couldUseCache = env.forceCache || (env.isNode && !!options.ssr) || !options.async;
    var _a = reactExports.useState(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];
    var _b = reactExports.useState(null), error = _b[0], setError = _b[1];
    reactExports.useEffect(function () {
        if (!Car) {
            importer().then(function (car) {
                var resolved = effect ? effect.read() : car.default || car;
                if (!resolved) {
                    console.error('Sidecar error: with importer', importer);
                    var error_1;
                    if (effect) {
                        console.error('Sidecar error: with medium', effect);
                        error_1 = new Error('Sidecar medium was not found');
                    }
                    else {
                        error_1 = new Error('Sidecar was not found in exports');
                    }
                    setError(function () { return error_1; });
                    throw error_1;
                }
                cache.set(importer, resolved);
                setCar(function () { return resolved; });
            }, function (e) { return setError(function () { return e; }); });
        }
    }, []);
    return [Car, error];
}

// eslint-disable-next-line @typescript-eslint/ban-types
function sidecar(importer, errorComponent) {
    var ErrorCase = function () { return errorComponent; };
    return function Sidecar(props) {
        var _a = useSidecar(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
            return ErrorCase;
        }
        // @ts-expect-error type shenanigans
        return Car ? reactExports.createElement(Car, __assign({}, props)) : null;
    };
}

var config = {
    onError: function (e) { return console.error(e); },
};
var setConfig = function (conf) {
    Object.assign(config, conf);
};

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
}

function renderCar(WrappedComponent, defaults) {
    function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = reactExports.useCallback(function SideTarget() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            reactExports.useLayoutEffect(function () {
                stateRef.current(args);
            });
            return null;
        }, []);
        // @ts-ignore
        return reactExports.createElement(WrappedComponent, __assign({}, props, { children: renderTarget }));
    }
    var Children = reactExports.memo(function (_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = reactExports.useState(defaultState.current), state = _b[0], setState = _b[1];
        reactExports.useEffect(function () {
            stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
    }, function () { return true; });
    return function Combiner(props) {
        var defaultState = reactExports.useRef(defaults(props));
        var ref = reactExports.useRef(function (state) { return (defaultState.current = state); });
        return (reactExports.createElement(reactExports.Fragment, null,
            reactExports.createElement(State, { stateRef: ref, props: props }),
            reactExports.createElement(Children, { stateRef: ref, defaultState: defaultState, children: props.children })));
    };
}

var SideCar$1 = function (_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return reactExports.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar$1;
}

var effectCar = createSidecarMedium();

var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = reactExports.forwardRef(function (props, parentRef) {
    var ref = reactExports.useRef(null);
    var _a = reactExports.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return (reactExports.createElement(reactExports.Fragment, null,
        enabled && (reactExports.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noRelative: noRelative, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode: gapMode })),
        forwardProps ? (reactExports.cloneElement(reactExports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef }))) : (reactExports.createElement(Container, __assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName,
};

var currentNonce;
var setNonce = function (nonce) {
    currentNonce = nonce;
};
var getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};

/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles, isDynamic) {
        reactExports.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};

/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};

var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

var Style = styleSingleton();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function () {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function () {
    reactExports.useEffect(function () {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function () {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            }
            else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = reactExports.useMemo(function () { return getGapWidth(gapMode); }, [gapMode]);
    return reactExports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};

var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== ownerDocument.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = (parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1);
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScroll) < 1) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScrollTop) < 1) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = reactExports.useRef([]);
    var touchStartRef = reactExports.useRef([0, 0]);
    var activeAxis = reactExports.useRef();
    var id = reactExports.useState(idCounter++)[0];
    var Style = reactExports.useState(styleSingleton)[0];
    var lastProps = reactExports.useRef(props);
    reactExports.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    reactExports.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = reactExports.useCallback(function (event, parent) {
        if (('touches' in event && event.touches.length === 2) || (event.type === 'wheel' && event.ctrlKey)) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        // allow drag selection (iOS); check if selection's anchorNode is the same as target or contains target
        var selection = window.getSelection();
        var anchorNode = selection && selection.anchorNode;
        var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
        if (isTouchingSelection) {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = reactExports.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = reactExports.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should, shadowParent: getOutermostShadowParent(target) };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = reactExports.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = reactExports.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = reactExports.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    reactExports.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (reactExports.createElement(reactExports.Fragment, null,
        inert ? reactExports.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? reactExports.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null));
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while (node !== null) {
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}

const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = reactExports.forwardRef(function (props, ref) { return (reactExports.createElement(RemoveScroll, __assign({}, props, { ref: ref, sideCar: SideCar }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;

var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
    return targets
        .map(function (target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    })
        .filter(function (x) { return Boolean(x); });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                }
                catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-aria-hidden'; }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
/**
 * Marks everything except given node(or nodes) as inert
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var inertOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-inert-ed'; }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
/**
 * @returns if current browser supports inert
 */
var supportsInert = function () {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
/**
 * Automatic function to "suppress" DOM elements - _hide_ or _inert_ in the best possible way
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var suppressOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-suppressed'; }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};

// src/slot.tsx
// @__NO_SIDE_EFFECTS__
function createSlot$1(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone$1(ownerName);
  const Slot2 = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = reactExports.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable$1);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
          return reactExports.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot$2 = /* @__PURE__ */ createSlot$1("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone$1(ownerName) {
  const SlotClone = reactExports.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (reactExports.isValidElement(children)) {
      const childrenRef = getElementRef$1(children);
      const props2 = mergeProps$1(slotProps, children.props);
      if (children.type !== reactExports.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return reactExports.cloneElement(children, props2);
    }
    return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER$1 = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable$1(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER$1;
  return Slottable2;
}
var Slottable$1 = /* @__PURE__ */ createSlottable$1("Slottable");
function isSlottable$1(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
function mergeProps$1(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$1(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

"use client";
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeDialog, forceMount, children: reactExports.Children.map(children, (child) => /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var Slot$1 = createSlot$1("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot$1, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive$1.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive$1.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive$1.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  reactExports.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  reactExports.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root$2 = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;

// src/slot.tsx
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = React[" use ".trim().toString()];
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = reactExports.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    const childrenArray = reactExports.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
          return reactExports.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = reactExports.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    if (reactExports.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== reactExports.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return reactExports.cloneElement(children, props2);
    }
    return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// src/primitive.tsx
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) reactDomExports.flushSync(() => target.dispatchEvent(event));
}
var Root$1 = Primitive;

// src/visually-hidden.tsx
var VISUALLY_HIDDEN_STYLES = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
});
var NAME = "VisuallyHidden";
var VisuallyHidden = reactExports.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: { ...VISUALLY_HIDDEN_STYLES, ...props.style }
      }
    );
  }
);
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;

const ModalDialog = (props) => {
  const {
    visible,
    content,
    handleClose,
    qrStyle,
    eyeRadius,
    icon,
    subtitle,
    primaryColor,
    customCSS
  } = props;
  const toastRef = reactExports.useRef(null);
  const onClickCopy = (event) => {
    event.stopPropagation();
    navigator.clipboard.writeText(content);
    toastRef.current?.classList.add("show");
    setTimeout(function() {
      toastRef.current?.classList.remove("show");
    }, 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root$2, { open: visible, onOpenChange: (open) => !open && handleClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Portal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { customCSS: customCSS || "" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalContent, { "data-testid": "modal-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHidden, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: "P2P Wallet Connection" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        QRCode,
        {
          removeQrCodeBehindLogo: true,
          logoImage: icon ? icon : void 0,
          ecLevel: "H",
          eyeRadius: eyeRadius ? eyeRadius : 0,
          qrStyle: qrStyle ? qrStyle : "squares",
          value: content
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CopyInputContainer, { primaryColor: primaryColor || "#0538AF", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: content,
            style: { textOverflow: "ellipsis" },
            readOnly: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClickCopy, children: "Copy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { maxWidth: 300 }, children: subtitle ? subtitle : "You can utilize a CIP45-compliant mobile wallet, such as Eternl, on your smartphone to establish a connection as a peer-to-peer wallet." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toast, { ref: toastRef, children: "P2P identifier copied to clipboard!" })
    ] }) })
  ] }) });
};

function getMobileOS() {
  if ("userAgentData" in navigator) {
    const platform = navigator.userAgentData?.platform;
    if (platform === "Android") return "Android";
  }
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "iOS";
  if (/android/i.test(ua)) return "Android";
  return "unknown";
}

export { Color as C, DismissableLayer as D, FocusScope as F, ModalDialog as M, Primitive$1 as P, ReactRemoveScroll as R, createContextScope as a, useLayoutEffect2 as b, composeRefs as c, useCallbackRef$1 as d, useControllableState as e, composeEventHandlers as f, useId as g, Presence as h, Portal$1 as i, hideOthers as j, useFocusGuards as k, dispatchDiscreteCustomEvent$1 as l, useCardano as m, getMobileOS as n, reactDomExports as r, useComposedRefs as u };
//# sourceMappingURL=common-DRPlBVDz.js.map
