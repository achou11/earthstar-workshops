// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class EarthstarError extends Error {
    constructor(message){
        super(message || "");
        this.name = "EarthstarError";
    }
}
class ValidationError extends EarthstarError {
    constructor(message){
        super(message || "Validation error");
        this.name = "ValidationError";
    }
}
class ReplicaIsClosedError extends EarthstarError {
    constructor(message){
        super(message || "a Replica or ReplicaDriver was used after being closed");
        this.name = "ReplicaIsClosedError";
    }
}
class ReplicaCacheIsClosedError extends EarthstarError {
    constructor(message){
        super(message || "a ReplicaCache was used after being closed");
        this.name = "ReplicaCacheIsClosedError";
    }
}
class NotFoundError extends EarthstarError {
    constructor(message){
        super(message || "not found");
        this.name = "NotFoundError";
    }
}
class NetworkError extends EarthstarError {
    constructor(message){
        super(message || "network error");
        this.name = "NetworkError";
    }
}
class TimeoutError extends EarthstarError {
    constructor(message){
        super(message || "timeout error");
        this.name = "TimeoutError";
    }
}
class ConnectionRefusedError extends EarthstarError {
    constructor(message){
        super(message || "connection refused");
        this.name = "ConnectionRefused";
    }
}
class NotImplementedError extends EarthstarError {
    constructor(message){
        super(message || "not implemented yet");
        this.name = "NotImplementedError";
    }
}
function isErr(x) {
    return x instanceof EarthstarError;
}
function notErr(x) {
    return !(x instanceof EarthstarError);
}
export { EarthstarError as EarthstarError };
export { ValidationError as ValidationError };
export { ReplicaIsClosedError as ReplicaIsClosedError };
export { ReplicaCacheIsClosedError as ReplicaCacheIsClosedError };
export { NotFoundError as NotFoundError };
export { NetworkError as NetworkError };
export { TimeoutError as TimeoutError };
export { ConnectionRefusedError as ConnectionRefusedError };
export { NotImplementedError as NotImplementedError };
export { isErr as isErr };
export { notErr as notErr };
function shallowEqualArrays(arrA, arrB) {
    if (arrA === arrB) {
        return true;
    }
    if (!arrA || !arrB) {
        return false;
    }
    var len = arrA.length;
    if (arrB.length !== len) {
        return false;
    }
    for(var i = 0; i < len; i++){
        if (arrA[i] !== arrB[i]) {
            return false;
        }
    }
    return true;
}
function shallowEqualObjects(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    var len = aKeys.length;
    if (bKeys.length !== len) {
        return false;
    }
    for(var i = 0; i < len; i++){
        var key = aKeys[i];
        if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }
    }
    return true;
}
const cloneDeep = (value)=>{
    const typeofValue = typeof value;
    if ([
        "string",
        "number",
        "boolean",
        "string",
        "bigint",
        "symbol",
        "null",
        "undefined",
        "function", 
    ].includes(typeofValue)) {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map(cloneDeep);
    }
    if (typeofValue === "object") {
        const clone = {};
        for(let prop in value){
            clone[prop] = cloneDeep(value[prop]);
        }
        return clone;
    }
    throw new Error(`You've tried to clone something that can't be cloned`);
};
var o = Object.create;
var _ = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var J = Object.getOwnPropertyNames;
var N = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var b = (i, r)=>()=>(r || i((r = {
            exports: {}
        }).exports, r), r.exports);
var h = (i, r, n, c)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let e of J(r))!S.call(i, e) && e !== n && _(i, e, {
        get: ()=>r[e],
        enumerable: !(c = p(r, e)) || c.enumerable
    });
    return i;
};
var j = (i, r, n)=>(n = i != null ? o(N(i)) : {}, h(r || !i || !i.__esModule ? _(n, "default", {
        value: i,
        enumerable: !0
    }) : n, i));
var m = b((A, O)=>{
    "use strict";
    O.exports = function(i, r) {
        r || (r = {}), typeof r == "function" && (r = {
            cmp: r
        });
        var n = typeof r.cycles == "boolean" ? r.cycles : !1, c = r.cmp && function(l) {
            return function(t) {
                return function(f, u) {
                    var y = {
                        key: f,
                        value: t[f]
                    }, a = {
                        key: u,
                        value: t[u]
                    };
                    return l(y, a);
                };
            };
        }(r.cmp), e = [];
        return function l(t) {
            if (t && t.toJSON && typeof t.toJSON == "function" && (t = t.toJSON()), t !== void 0) {
                if (typeof t == "number") return isFinite(t) ? "" + t : "null";
                if (typeof t != "object") return JSON.stringify(t);
                var f, u;
                if (Array.isArray(t)) {
                    for(u = "[", f = 0; f < t.length; f++)f && (u += ","), u += l(t[f]) || "null";
                    return u + "]";
                }
                if (t === null) return "null";
                if (e.indexOf(t) !== -1) {
                    if (n) return JSON.stringify("__cycle__");
                    throw new TypeError("Converting circular structure to JSON");
                }
                var y = e.push(t) - 1, a = Object.keys(t).sort(c && c(t));
                for(u = "", f = 0; f < a.length; f++){
                    var s = a[f], v = l(t[s]);
                    !v || (u && (u += ","), u += JSON.stringify(s) + ":" + v);
                }
                return e.splice(y, 1), "{" + u + "}";
            }
        }(i);
    };
});
var x = j(m()), { default: g , ...k } = x, C = g !== void 0 ? g : k;
var S1 = Object.create;
var x1 = Object.defineProperty;
var g1 = Object.getOwnPropertyDescriptor;
var C1 = Object.getOwnPropertyNames;
var I = Object.getPrototypeOf, A = Object.prototype.hasOwnProperty;
var B = (a, r)=>()=>(r || a((r = {
            exports: {}
        }).exports, r), r.exports);
var O = (a, r, e, b)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let t of C1(r))!A.call(a, t) && t !== e && x1(a, t, {
        get: ()=>r[t],
        enumerable: !(b = g1(r, t)) || b.enumerable
    });
    return a;
};
var m1 = (a, r, e)=>(e = a != null ? S1(I(a)) : {}, O(r || !a || !a.__esModule ? x1(e, "default", {
        value: a,
        enumerable: !0
    }) : e, a));
var U = B((n)=>{
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    function v(a, r, e) {
        var b;
        if (e === void 0 && (e = {}), !r.codes) {
            r.codes = {};
            for(var t = 0; t < r.chars.length; ++t)r.codes[r.chars[t]] = t;
        }
        if (!e.loose && a.length * r.bits & 7) throw new SyntaxError("Invalid padding");
        for(var u = a.length; a[u - 1] === "=";)if (--u, !e.loose && !((a.length - u) * r.bits & 7)) throw new SyntaxError("Invalid padding");
        for(var h = new ((b = e.out) != null ? b : Uint8Array)(u * r.bits / 8 | 0), s = 0, i = 0, c = 0, f = 0; f < u; ++f){
            var l = r.codes[a[f]];
            if (l === void 0) throw new SyntaxError("Invalid character " + a[f]);
            i = i << r.bits | l, s += r.bits, s >= 8 && (s -= 8, h[c++] = 255 & i >> s);
        }
        if (s >= r.bits || 255 & i << 8 - s) throw new SyntaxError("Unexpected end of data");
        return h;
    }
    function p(a, r, e) {
        e === void 0 && (e = {});
        for(var b = e, t = b.pad, u = t === void 0 ? !0 : t, h = (1 << r.bits) - 1, s = "", i = 0, c = 0, f = 0; f < a.length; ++f)for(c = c << 8 | 255 & a[f], i += 8; i > r.bits;)i -= r.bits, s += r.chars[h & c >> i];
        if (i && (s += r.chars[h & c << r.bits - i]), u) for(; s.length * r.bits & 7;)s += "=";
        return s;
    }
    var d = {
        chars: "0123456789ABCDEF",
        bits: 4
    }, y = {
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bits: 5
    }, w = {
        chars: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bits: 5
    }, E = {
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bits: 6
    }, $ = {
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bits: 6
    }, D = {
        parse: function(r, e) {
            return v(r.toUpperCase(), d, e);
        },
        stringify: function(r, e) {
            return p(r, d, e);
        }
    }, F = {
        parse: function(r, e) {
            return e === void 0 && (e = {}), v(e.loose ? r.toUpperCase().replace(/0/g, "O").replace(/1/g, "L").replace(/8/g, "B") : r, y, e);
        },
        stringify: function(r, e) {
            return p(r, y, e);
        }
    }, H = {
        parse: function(r, e) {
            return v(r, w, e);
        },
        stringify: function(r, e) {
            return p(r, w, e);
        }
    }, L = {
        parse: function(r, e) {
            return v(r, E, e);
        },
        stringify: function(r, e) {
            return p(r, E, e);
        }
    }, M = {
        parse: function(r, e) {
            return v(r, $, e);
        },
        stringify: function(r, e) {
            return p(r, $, e);
        }
    }, P = {
        parse: v,
        stringify: p
    };
    n.base16 = D;
    n.base32 = F;
    n.base32hex = H;
    n.base64 = L;
    n.base64url = M;
    n.codec = P;
});
var o1 = m1(U(), 1), J1 = o1.default.base16, K = o1.default.base32, N1 = o1.default.base32hex, Q = o1.default.base64, R = o1.default.base64url, T = o1.default.codec, V = o1.default;
const mod = {
    default: V,
    base16: J1,
    base32: K,
    base32hex: N1,
    base64: Q,
    base64url: R,
    codec: T
};
var m2 = Object.create;
var y = Object.defineProperty;
var C2 = Object.getOwnPropertyDescriptor;
var D = Object.getOwnPropertyNames;
var T1 = Object.getPrototypeOf, z = Object.prototype.hasOwnProperty;
var G = (t, e)=>()=>(e || t((e = {
            exports: {}
        }).exports, e), e.exports);
var L = (t, e, s, n)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let i of D(e))!z.call(t, i) && i !== s && y(t, i, {
        get: ()=>e[i],
        enumerable: !(n = C2(e, i)) || n.enumerable
    });
    return t;
};
var M = (t, e, s)=>(s = t != null ? m2(T1(t)) : {}, L(e || !t || !t.__esModule ? y(s, "default", {
        value: t,
        enumerable: !0
    }) : s, t));
var g2 = G((u)=>{
    "use strict";
    Object.defineProperty(u, "__esModule", {
        value: !0
    });
    u.Hash = u.createHash = void 0;
    var I = [
        1116352408,
        1899447441,
        -1245643825,
        -373957723,
        961987163,
        1508970993,
        -1841331548,
        -1424204075,
        -670586216,
        310598401,
        607225278,
        1426881987,
        1925078388,
        -2132889090,
        -1680079193,
        -1046744716,
        -459576895,
        -272742522,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        -1740746414,
        -1473132947,
        -1341970488,
        -1084653625,
        -958395405,
        -710438585,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        -2117940946,
        -1838011259,
        -1564481375,
        -1474664885,
        -1035236496,
        -949202525,
        -778901479,
        -694614492,
        -200395387,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        -2067236844,
        -1933114872,
        -1866530822,
        -1538233109,
        -1090935817,
        -965641998
    ], p = {
        sha256: 1
    };
    function O(t) {
        if (t && !p[t] && !p[t.toLowerCase()]) throw new Error("Digest method not supported");
        return new E;
    }
    u.createHash = O;
    var E = class {
        constructor(){
            this.A = 1779033703, this.B = -1150833019, this.C = 1013904242, this.D = -1521486534, this.E = 1359893119, this.F = -1694144372, this.G = 528734635, this.H = 1541459225, this._size = 0, this._sp = 0, (!w || d >= 8e3) && (w = new ArrayBuffer(8e3), d = 0), this._byte = new Uint8Array(w, d, 80), this._word = new Int32Array(w, d, 20), d += 80;
        }
        update(e) {
            if (typeof e == "string") return this._utf8(e);
            if (e == null) throw new TypeError("Invalid type: " + typeof e);
            let s = e.byteOffset, n = e.byteLength, i = n / 64 | 0, c = 0;
            if (i && !(s & 3) && !(this._size % 64)) {
                let f = new Int32Array(e.buffer, s, i * 16);
                for(; i--;)this._int32(f, c >> 2), c += 64;
                this._size += c;
            }
            if (e.BYTES_PER_ELEMENT !== 1 && e.buffer) {
                let f1 = new Uint8Array(e.buffer, s + c, n - c);
                return this._uint8(f1);
            }
            return c === n ? this : this._uint8(e, c);
        }
        _uint8(e, s) {
            let { _byte: n , _word: i  } = this, c = e.length;
            for(s = s | 0; s < c;){
                let r = this._size % 64, f = r;
                for(; s < c && f < 64;)n[f++] = e[s++];
                f >= 64 && this._int32(i), this._size += f - r;
            }
            return this;
        }
        _utf8(e) {
            let { _byte: s , _word: n  } = this, i = e.length, c = this._sp;
            for(let r = 0; r < i;){
                let f = this._size % 64, h = f;
                for(; r < i && h < 64;){
                    let x = e.charCodeAt(r++) | 0;
                    x < 128 ? s[h++] = x : x < 2048 ? (s[h++] = 192 | x >>> 6, s[h++] = 128 | x & 63) : x < 55296 || x > 57343 ? (s[h++] = 224 | x >>> 12, s[h++] = 128 | x >>> 6 & 63, s[h++] = 128 | x & 63) : c ? (x = ((c & 1023) << 10) + (x & 1023) + 65536, s[h++] = 240 | x >>> 18, s[h++] = 128 | x >>> 12 & 63, s[h++] = 128 | x >>> 6 & 63, s[h++] = 128 | x & 63, c = 0) : c = x;
                }
                h >= 64 && (this._int32(n), n[0] = n[16]), this._size += h - f;
            }
            return this._sp = c, this;
        }
        _int32(e, s) {
            let { A: n , B: i , C: c , D: r , E: f , F: h , G: x , H: a  } = this, o = 0;
            for(s = s | 0; o < 16;)l[o++] = b(e[s++]);
            for(o = 16; o < 64; o++)l[o] = j(l[o - 2]) + l[o - 7] + Y(l[o - 15]) + l[o - 16] | 0;
            for(o = 0; o < 64; o++){
                let F = a + R(f) + U(f, h, x) + I[o] + l[o] | 0, H = N(n) + v(n, i, c) | 0;
                a = x, x = h, h = f, f = r + F | 0, r = c, c = i, i = n, n = F + H | 0;
            }
            this.A = n + this.A | 0, this.B = i + this.B | 0, this.C = c + this.C | 0, this.D = r + this.D | 0, this.E = f + this.E | 0, this.F = h + this.F | 0, this.G = x + this.G | 0, this.H = a + this.H | 0;
        }
        digest(e) {
            let { _byte: s , _word: n  } = this, i = this._size % 64 | 0;
            for(s[i++] = 128; i & 3;)s[i++] = 0;
            if (i >>= 2, i > 14) {
                for(; i < 16;)n[i++] = 0;
                i = 0, this._int32(n);
            }
            for(; i < 16;)n[i++] = 0;
            let c = this._size * 8, r = (c & 4294967295) >>> 0, f = (c - r) / 4294967296;
            return f && (n[14] = b(f)), r && (n[15] = b(r)), this._int32(n), e === "hex" ? this._hex() : this._bin();
        }
        _hex() {
            let { A: e , B: s , C: n , D: i , E: c , F: r , G: f , H: h  } = this;
            return _(e) + _(s) + _(n) + _(i) + _(c) + _(r) + _(f) + _(h);
        }
        _bin() {
            let { A: e , B: s , C: n , D: i , E: c , F: r , G: f , H: h , _byte: x , _word: a  } = this;
            return a[0] = b(e), a[1] = b(s), a[2] = b(n), a[3] = b(i), a[4] = b(c), a[5] = b(r), a[6] = b(f), a[7] = b(h), x.slice(0, 32);
        }
    };
    u.Hash = E;
    var l = new Int32Array(64), w, d = 0, _ = (t)=>(t + 4294967296).toString(16).substr(-8), P = (t)=>t << 24 & 4278190080 | t << 8 & 16711680 | t >> 8 & 65280 | t >> 24 & 255, S = (t)=>t, b = k() ? S : P, U = (t, e, s)=>s ^ t & (e ^ s), v = (t, e, s)=>t & e | s & (t | e), N = (t)=>(t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10), R = (t)=>(t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7), Y = (t)=>(t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3, j = (t)=>(t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
    function k() {
        return new Uint8Array(new Uint16Array([
            65279
        ]).buffer)[0] === 254;
    }
});
var B1 = M(g2()), J2 = !0, { Hash: Q1 , createHash: V1  } = B1, { default: A1 , ...K1 } = B1, X = A1 !== void 0 ? A1 : K1;
const mod1 = {
    default: X,
    Hash: Q1,
    __esModule: J2,
    createHash: V1
};
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _255n = BigInt(255);
const CURVE_ORDER = _2n ** BigInt(252) + BigInt("27742317777372353535851937790883648493");
const CURVE = {
    a: BigInt(-1),
    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
    P: _2n ** _255n - BigInt(19),
    l: CURVE_ORDER,
    n: CURVE_ORDER,
    h: BigInt(8),
    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
};
const MAX_256B = _2n ** BigInt(256);
const SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742");
const SQRT_AD_MINUS_ONE = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
const INVSQRT_A_MINUS_D = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
const ONE_MINUS_D_SQ = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
const D_MINUS_ONE_SQ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
class ExtendedPoint {
    constructor(x, y, z, t){
        this.x = x;
        this.y = y;
        this.z = z;
        this.t = t;
    }
    static BASE = new ExtendedPoint(CURVE.Gx, CURVE.Gy, _1n, mod2(CURVE.Gx * CURVE.Gy));
    static ZERO = new ExtendedPoint(_0n, _1n, _1n, _0n);
    static fromAffine(p) {
        if (!(p instanceof Point)) {
            throw new TypeError("ExtendedPoint#fromAffine: expected Point");
        }
        if (p.equals(Point.ZERO)) return ExtendedPoint.ZERO;
        return new ExtendedPoint(p.x, p.y, _1n, mod2(p.x * p.y));
    }
    static toAffineBatch(points) {
        const toInv = invertBatch(points.map((p)=>p.z));
        return points.map((p, i)=>p.toAffine(toInv[i]));
    }
    static normalizeZ(points) {
        return this.toAffineBatch(points).map(this.fromAffine);
    }
    equals(other) {
        assertExtPoint(other);
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const { x: X2 , y: Y2 , z: Z2  } = other;
        const X1Z2 = mod2(X1 * Z2);
        const X2Z1 = mod2(X2 * Z1);
        const Y1Z2 = mod2(Y1 * Z2);
        const Y2Z1 = mod2(Y2 * Z1);
        return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
    }
    negate() {
        return new ExtendedPoint(mod2(-this.x), this.y, this.z, mod2(-this.t));
    }
    double() {
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const { a  } = CURVE;
        const A = mod2(X1 ** _2n);
        const B = mod2(Y1 ** _2n);
        const C = mod2(_2n * mod2(Z1 ** _2n));
        const D = mod2(a * A);
        const E = mod2(mod2((X1 + Y1) ** _2n) - A - B);
        const G = D + B;
        const F = G - C;
        const H = D - B;
        const X3 = mod2(E * F);
        const Y3 = mod2(G * H);
        const T3 = mod2(E * H);
        const Z3 = mod2(F * G);
        return new ExtendedPoint(X3, Y3, Z3, T3);
    }
    add(other) {
        assertExtPoint(other);
        const { x: X1 , y: Y1 , z: Z1 , t: T1  } = this;
        const { x: X2 , y: Y2 , z: Z2 , t: T2  } = other;
        const A = mod2((Y1 - X1) * (Y2 + X2));
        const B = mod2((Y1 + X1) * (Y2 - X2));
        const F = mod2(B - A);
        if (F === _0n) return this.double();
        const C = mod2(Z1 * _2n * T2);
        const D = mod2(T1 * _2n * Z2);
        const E = D + C;
        const G = B + A;
        const H = D - C;
        const X3 = mod2(E * F);
        const Y3 = mod2(G * H);
        const T3 = mod2(E * H);
        const Z3 = mod2(F * G);
        return new ExtendedPoint(X3, Y3, Z3, T3);
    }
    subtract(other) {
        return this.add(other.negate());
    }
    precomputeWindow(W) {
        const windows = 1 + 256 / W;
        const points = [];
        let p = this;
        let base = p;
        for(let window1 = 0; window1 < windows; window1++){
            base = p;
            points.push(base);
            for(let i = 1; i < 2 ** (W - 1); i++){
                base = base.add(p);
                points.push(base);
            }
            p = base.double();
        }
        return points;
    }
    wNAF(n, affinePoint) {
        if (!affinePoint && this.equals(ExtendedPoint.BASE)) {
            affinePoint = Point.BASE;
        }
        const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
        if (256 % W) {
            throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
        }
        let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
        if (!precomputes) {
            precomputes = this.precomputeWindow(W);
            if (affinePoint && W !== 1) {
                precomputes = ExtendedPoint.normalizeZ(precomputes);
                pointPrecomputes.set(affinePoint, precomputes);
            }
        }
        let p = ExtendedPoint.ZERO;
        let f = ExtendedPoint.ZERO;
        const windows = 1 + 256 / W;
        const windowSize = 2 ** (W - 1);
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for(let window1 = 0; window1 < windows; window1++){
            const offset = window1 * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
                wbits -= maxNumber;
                n += _1n;
            }
            if (wbits === 0) {
                let pr = precomputes[offset];
                if (window1 % 2) pr = pr.negate();
                f = f.add(pr);
            } else {
                let cached = precomputes[offset + Math.abs(wbits) - 1];
                if (wbits < 0) cached = cached.negate();
                p = p.add(cached);
            }
        }
        return ExtendedPoint.normalizeZ([
            p,
            f
        ])[0];
    }
    multiply(scalar, affinePoint) {
        return this.wNAF(normalizeScalar(scalar, CURVE.l), affinePoint);
    }
    multiplyUnsafe(scalar) {
        let n = normalizeScalar(scalar, CURVE.l, false);
        const G = ExtendedPoint.BASE;
        const P0 = ExtendedPoint.ZERO;
        if (n === _0n) return P0;
        if (this.equals(P0) || n === _1n) return this;
        if (this.equals(G)) return this.wNAF(n);
        let p = P0;
        let d = this;
        while(n > _0n){
            if (n & _1n) p = p.add(d);
            d = d.double();
            n >>= _1n;
        }
        return p;
    }
    isSmallOrder() {
        return this.multiplyUnsafe(CURVE.h).equals(ExtendedPoint.ZERO);
    }
    isTorsionFree() {
        return this.multiplyUnsafe(CURVE.l).equals(ExtendedPoint.ZERO);
    }
    toAffine(invZ = invert(this.z)) {
        const { x , y , z  } = this;
        const ax = mod2(x * invZ);
        const ay = mod2(y * invZ);
        const zz = mod2(z * invZ);
        if (zz !== _1n) throw new Error("invZ was invalid");
        return new Point(ax, ay);
    }
    fromRistrettoBytes() {
        legacyRist();
    }
    toRistrettoBytes() {
        legacyRist();
    }
    fromRistrettoHash() {
        legacyRist();
    }
    x;
    y;
    z;
    t;
}
function assertExtPoint(other) {
    if (!(other instanceof ExtendedPoint)) {
        throw new TypeError("ExtendedPoint expected");
    }
}
function assertRstPoint(other) {
    if (!(other instanceof RistrettoPoint)) {
        throw new TypeError("RistrettoPoint expected");
    }
}
function legacyRist() {
    throw new Error("Legacy method: switch to RistrettoPoint");
}
class RistrettoPoint {
    static BASE = new RistrettoPoint(ExtendedPoint.BASE);
    static ZERO = new RistrettoPoint(ExtendedPoint.ZERO);
    constructor(ep){
        this.ep = ep;
    }
    static calcElligatorRistrettoMap(r0) {
        const { d  } = CURVE;
        const r = mod2(SQRT_M1 * r0 * r0);
        const Ns = mod2((r + _1n) * ONE_MINUS_D_SQ);
        let c = BigInt(-1);
        const D = mod2((c - d * r) * mod2(r + d));
        let { isValid: Ns_D_is_sq , value: s  } = uvRatio(Ns, D);
        let s_ = mod2(s * r0);
        if (!edIsNegative(s_)) s_ = mod2(-s_);
        if (!Ns_D_is_sq) s = s_;
        if (!Ns_D_is_sq) c = r;
        const Nt = mod2(c * (r - _1n) * D_MINUS_ONE_SQ - D);
        const s2 = s * s;
        const W0 = mod2((s + s) * D);
        const W1 = mod2(Nt * SQRT_AD_MINUS_ONE);
        const W2 = mod2(_1n - s2);
        const W3 = mod2(_1n + s2);
        return new ExtendedPoint(mod2(W0 * W3), mod2(W2 * W1), mod2(W1 * W3), mod2(W0 * W2));
    }
    static hashToCurve(hex) {
        hex = ensureBytes(hex, 64);
        const r1 = bytes255ToNumberLE(hex.slice(0, 32));
        const R1 = this.calcElligatorRistrettoMap(r1);
        const r2 = bytes255ToNumberLE(hex.slice(32, 64));
        const R2 = this.calcElligatorRistrettoMap(r2);
        return new RistrettoPoint(R1.add(R2));
    }
    static fromHex(hex) {
        hex = ensureBytes(hex, 32);
        const { a , d  } = CURVE;
        const emsg = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint";
        const s = bytes255ToNumberLE(hex);
        if (!equalBytes(numberTo32BytesLE(s), hex) || edIsNegative(s)) {
            throw new Error(emsg);
        }
        const s2 = mod2(s * s);
        const u1 = mod2(_1n + a * s2);
        const u2 = mod2(_1n - a * s2);
        const u1_2 = mod2(u1 * u1);
        const u2_2 = mod2(u2 * u2);
        const v = mod2(a * d * u1_2 - u2_2);
        const { isValid , value: I  } = invertSqrt(mod2(v * u2_2));
        const Dx = mod2(I * u2);
        const Dy = mod2(I * Dx * v);
        let x = mod2((s + s) * Dx);
        if (edIsNegative(x)) x = mod2(-x);
        const y = mod2(u1 * Dy);
        const t = mod2(x * y);
        if (!isValid || edIsNegative(t) || y === _0n) throw new Error(emsg);
        return new RistrettoPoint(new ExtendedPoint(x, y, _1n, t));
    }
    toRawBytes() {
        let { x , y , z , t  } = this.ep;
        const u1 = mod2(mod2(z + y) * mod2(z - y));
        const u2 = mod2(x * y);
        const { value: invsqrt  } = invertSqrt(mod2(u1 * u2 ** _2n));
        const D1 = mod2(invsqrt * u1);
        const D2 = mod2(invsqrt * u2);
        const zInv = mod2(D1 * D2 * t);
        let D;
        if (edIsNegative(t * zInv)) {
            let _x = mod2(y * SQRT_M1);
            let _y = mod2(x * SQRT_M1);
            x = _x;
            y = _y;
            D = mod2(D1 * INVSQRT_A_MINUS_D);
        } else {
            D = D2;
        }
        if (edIsNegative(x * zInv)) y = mod2(-y);
        let s = mod2((z - y) * D);
        if (edIsNegative(s)) s = mod2(-s);
        return numberTo32BytesLE(s);
    }
    toHex() {
        return bytesToHex(this.toRawBytes());
    }
    toString() {
        return this.toHex();
    }
    equals(other) {
        assertRstPoint(other);
        const a = this.ep;
        const b = other.ep;
        const one = mod2(a.x * b.y) === mod2(a.y * b.x);
        const two = mod2(a.y * b.y) === mod2(a.x * b.x);
        return one || two;
    }
    add(other) {
        assertRstPoint(other);
        return new RistrettoPoint(this.ep.add(other.ep));
    }
    subtract(other) {
        assertRstPoint(other);
        return new RistrettoPoint(this.ep.subtract(other.ep));
    }
    multiply(scalar) {
        return new RistrettoPoint(this.ep.multiply(scalar));
    }
    multiplyUnsafe(scalar) {
        return new RistrettoPoint(this.ep.multiplyUnsafe(scalar));
    }
    ep;
}
const pointPrecomputes = new WeakMap();
class Point {
    static BASE = new Point(CURVE.Gx, CURVE.Gy);
    static ZERO = new Point(_0n, _1n);
    _WINDOW_SIZE;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes.delete(this);
    }
    static fromHex(hex, strict = true) {
        const { d , P  } = CURVE;
        hex = ensureBytes(hex, 32);
        const normed = hex.slice();
        normed[31] = hex[31] & ~0x80;
        const y = bytesToNumberLE(normed);
        if (strict && y >= P) throw new Error("Expected 0 < hex < P");
        if (!strict && y >= MAX_256B) throw new Error("Expected 0 < hex < 2**256");
        const y2 = mod2(y * y);
        const u = mod2(y2 - _1n);
        const v = mod2(d * y2 + _1n);
        let { isValid , value: x  } = uvRatio(u, v);
        if (!isValid) throw new Error("Point.fromHex: invalid y coordinate");
        const isXOdd = (x & _1n) === _1n;
        const isLastByteOdd = (hex[31] & 0x80) !== 0;
        if (isLastByteOdd !== isXOdd) {
            x = mod2(-x);
        }
        return new Point(x, y);
    }
    static async fromPrivateKey(privateKey) {
        return (await getExtendedPublicKey(privateKey)).point;
    }
    toRawBytes() {
        const bytes = numberTo32BytesLE(this.y);
        bytes[31] |= this.x & _1n ? 0x80 : 0;
        return bytes;
    }
    toHex() {
        return bytesToHex(this.toRawBytes());
    }
    toX25519() {
        const { y  } = this;
        const u = mod2((_1n + y) * invert(_1n - y));
        return numberTo32BytesLE(u);
    }
    isTorsionFree() {
        return ExtendedPoint.fromAffine(this).isTorsionFree();
    }
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
    negate() {
        return new Point(mod2(-this.x), this.y);
    }
    add(other) {
        return ExtendedPoint.fromAffine(this).add(ExtendedPoint.fromAffine(other)).toAffine();
    }
    subtract(other) {
        return this.add(other.negate());
    }
    multiply(scalar) {
        return ExtendedPoint.fromAffine(this).multiply(scalar, this).toAffine();
    }
    x;
    y;
}
class Signature {
    constructor(r, s){
        this.r = r;
        this.s = s;
        this.assertValidity();
    }
    static fromHex(hex) {
        const bytes = ensureBytes(hex, 64);
        const r = Point.fromHex(bytes.slice(0, 32), false);
        const s = bytesToNumberLE(bytes.slice(32, 64));
        return new Signature(r, s);
    }
    assertValidity() {
        const { r , s  } = this;
        if (!(r instanceof Point)) throw new Error("Expected Point instance");
        normalizeScalar(s, CURVE.l, false);
        return this;
    }
    toRawBytes() {
        const u8 = new Uint8Array(64);
        u8.set(this.r.toRawBytes());
        u8.set(numberTo32BytesLE(this.s), 32);
        return u8;
    }
    toHex() {
        return bytesToHex(this.toRawBytes());
    }
    r;
    s;
}
function concatBytes(...arrays) {
    if (!arrays.every((a)=>a instanceof Uint8Array)) {
        throw new Error("Expected Uint8Array list");
    }
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
const hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error("Uint8Array expected");
    let hex = "";
    for(let i = 0; i < uint8a.length; i++){
        hex += hexes[uint8a[i]];
    }
    return hex;
}
function hexToBytes(hex) {
    if (typeof hex !== "string") {
        throw new TypeError("hexToBytes: expected string, got " + typeof hex);
    }
    if (hex.length % 2) {
        throw new Error("hexToBytes: received invalid unpadded hex");
    }
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const __byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(__byte) || __byte < 0) {
            throw new Error("Invalid byte sequence");
        }
        array[i] = __byte;
    }
    return array;
}
function numberTo32BytesBE(num) {
    const hex = num.toString(16).padStart(32 * 2, "0");
    return hexToBytes(hex);
}
function numberTo32BytesLE(num) {
    return numberTo32BytesBE(num).reverse();
}
function edIsNegative(num) {
    return (mod2(num) & _1n) === _1n;
}
function bytesToNumberLE(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    return BigInt("0x" + bytesToHex(Uint8Array.from(uint8a).reverse()));
}
function bytes255ToNumberLE(bytes) {
    return mod2(bytesToNumberLE(bytes) & _2n ** _255n - _1n);
}
function mod2(a, b = CURVE.P) {
    const res = a % b;
    return res >= _0n ? res : b + res;
}
function invert(number, modulo = CURVE.P) {
    if (number === _0n || modulo <= _0n) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    let a = mod2(number, modulo);
    let b = modulo;
    let x = _0n, y = _1n, u = _1n, v = _0n;
    while(a !== _0n){
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n) throw new Error("invert: does not exist");
    return mod2(x, modulo);
}
function invertBatch(nums, p = CURVE.P) {
    const tmp = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i)=>{
        if (num === _0n) return acc;
        tmp[i] = acc;
        return mod2(acc * num, p);
    }, _1n);
    const inverted = invert(lastMultiplied, p);
    nums.reduceRight((acc, num, i)=>{
        if (num === _0n) return acc;
        tmp[i] = mod2(acc * tmp[i], p);
        return mod2(acc * num, p);
    }, inverted);
    return tmp;
}
function pow2(x, power) {
    const { P  } = CURVE;
    let res = x;
    while((power--) > _0n){
        res *= res;
        res %= P;
    }
    return res;
}
function pow_2_252_3(x) {
    const { P  } = CURVE;
    const _5n = BigInt(5);
    const _10n = BigInt(10);
    const _20n = BigInt(20);
    const _40n = BigInt(40);
    const _80n = BigInt(80);
    const x2 = x * x % P;
    const b2 = x2 * x % P;
    const b4 = pow2(b2, _2n) * b2 % P;
    const b5 = pow2(b4, _1n) * x % P;
    const b10 = pow2(b5, _5n) * b5 % P;
    const b20 = pow2(b10, _10n) * b10 % P;
    const b40 = pow2(b20, _20n) * b20 % P;
    const b80 = pow2(b40, _40n) * b40 % P;
    const b160 = pow2(b80, _80n) * b80 % P;
    const b240 = pow2(b160, _80n) * b80 % P;
    const b250 = pow2(b240, _10n) * b10 % P;
    const pow_p_5_8 = pow2(b250, _2n) * x % P;
    return {
        pow_p_5_8,
        b2
    };
}
function uvRatio(u, v) {
    const v3 = mod2(v * v * v);
    const v7 = mod2(v3 * v3 * v);
    const pow = pow_2_252_3(u * v7).pow_p_5_8;
    let x = mod2(u * v3 * pow);
    const vx2 = mod2(v * x * x);
    const root1 = x;
    const root2 = mod2(x * SQRT_M1);
    const useRoot1 = vx2 === u;
    const useRoot2 = vx2 === mod2(-u);
    const noRoot = vx2 === mod2(-u * SQRT_M1);
    if (useRoot1) x = root1;
    if (useRoot2 || noRoot) x = root2;
    if (edIsNegative(x)) x = mod2(-x);
    return {
        isValid: useRoot1 || useRoot2,
        value: x
    };
}
function invertSqrt(number) {
    return uvRatio(_1n, number);
}
async function sha512ModqLE(...args) {
    const hash = await utils.sha512(concatBytes(...args));
    const value = bytesToNumberLE(hash);
    return mod2(value, CURVE.l);
}
function equalBytes(b1, b2) {
    if (b1.length !== b2.length) {
        return false;
    }
    for(let i = 0; i < b1.length; i++){
        if (b1[i] !== b2[i]) {
            return false;
        }
    }
    return true;
}
function ensureBytes(hex, expectedLength) {
    const bytes = hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
    if (typeof expectedLength === "number" && bytes.length !== expectedLength) {
        throw new Error(`Expected ${expectedLength} bytes`);
    }
    return bytes;
}
function normalizeScalar(num, max, strict = true) {
    if (!max) throw new TypeError("Specify max value");
    if (typeof num === "number" && Number.isSafeInteger(num)) num = BigInt(num);
    if (typeof num === "bigint" && num < max) {
        if (strict) {
            if (_0n < num) return num;
        } else {
            if (_0n <= num) return num;
        }
    }
    throw new TypeError("Expected valid scalar: 0 < scalar < max");
}
function adjustBytes25519(bytes) {
    bytes[0] &= 248;
    bytes[31] &= 127;
    bytes[31] |= 64;
    return bytes;
}
function decodeScalar25519(n) {
    return bytesToNumberLE(adjustBytes25519(ensureBytes(n, 32)));
}
async function getExtendedPublicKey(key) {
    key = typeof key === "bigint" || typeof key === "number" ? numberTo32BytesBE(normalizeScalar(key, MAX_256B)) : ensureBytes(key);
    if (key.length !== 32) throw new Error(`Expected 32 bytes`);
    const hashed = await utils.sha512(key);
    const head = adjustBytes25519(hashed.slice(0, 32));
    const prefix = hashed.slice(32, 64);
    const scalar = mod2(bytesToNumberLE(head), CURVE.l);
    const point = Point.BASE.multiply(scalar);
    const pointBytes = point.toRawBytes();
    return {
        head,
        prefix,
        scalar,
        point,
        pointBytes
    };
}
async function getPublicKey(privateKey) {
    return (await getExtendedPublicKey(privateKey)).pointBytes;
}
async function sign(message, privateKey) {
    message = ensureBytes(message);
    const { prefix , scalar , pointBytes  } = await getExtendedPublicKey(privateKey);
    const r = await sha512ModqLE(prefix, message);
    const R = Point.BASE.multiply(r);
    const k = await sha512ModqLE(R.toRawBytes(), pointBytes, message);
    const s = mod2(r + k * scalar, CURVE.l);
    return new Signature(R, s).toRawBytes();
}
async function verify(sig, message, publicKey) {
    message = ensureBytes(message);
    if (!(publicKey instanceof Point)) {
        publicKey = Point.fromHex(publicKey, false);
    }
    const { r , s  } = sig instanceof Signature ? sig.assertValidity() : Signature.fromHex(sig);
    const SB = ExtendedPoint.BASE.multiplyUnsafe(s);
    const k = await sha512ModqLE(r.toRawBytes(), publicKey.toRawBytes(), message);
    const kA = ExtendedPoint.fromAffine(publicKey).multiplyUnsafe(k);
    const RkA = ExtendedPoint.fromAffine(r).add(kA);
    return RkA.subtract(SB).multiplyUnsafe(CURVE.h).equals(ExtendedPoint.ZERO);
}
Point.BASE._setWindowSize(8);
function cswap(swap, x_2, x_3) {
    const dummy = mod2(swap * (x_2 - x_3));
    x_2 = mod2(x_2 - dummy);
    x_3 = mod2(x_3 + dummy);
    return [
        x_2,
        x_3
    ];
}
function montgomeryLadder(pointU, scalar) {
    const { P  } = CURVE;
    const u = normalizeScalar(pointU, P);
    const k = normalizeScalar(scalar, P);
    const a24 = BigInt(121665);
    const x_1 = u;
    let x_2 = _1n;
    let z_2 = _0n;
    let x_3 = u;
    let z_3 = _1n;
    let swap = _0n;
    let sw;
    for(let t = BigInt(255 - 1); t >= _0n; t--){
        const k_t = k >> t & _1n;
        swap ^= k_t;
        sw = cswap(swap, x_2, x_3);
        x_2 = sw[0];
        x_3 = sw[1];
        sw = cswap(swap, z_2, z_3);
        z_2 = sw[0];
        z_3 = sw[1];
        swap = k_t;
        const A = x_2 + z_2;
        const AA = mod2(A * A);
        const B = x_2 - z_2;
        const BB = mod2(B * B);
        const E = AA - BB;
        const C = x_3 + z_3;
        const D = x_3 - z_3;
        const DA = mod2(D * A);
        const CB = mod2(C * B);
        x_3 = mod2((DA + CB) ** _2n);
        z_3 = mod2(x_1 * (DA - CB) ** _2n);
        x_2 = mod2(AA * BB);
        z_2 = mod2(E * (AA + mod2(a24 * E)));
    }
    sw = cswap(swap, x_2, x_3);
    x_2 = sw[0];
    x_3 = sw[1];
    sw = cswap(swap, z_2, z_3);
    z_2 = sw[0];
    z_3 = sw[1];
    const { pow_p_5_8 , b2  } = pow_2_252_3(z_2);
    const xp2 = mod2(pow2(pow_p_5_8, BigInt(3)) * b2);
    return mod2(x_2 * xp2);
}
function encodeUCoordinate(u) {
    return numberTo32BytesLE(mod2(u, CURVE.P));
}
function decodeUCoordinate(uEnc) {
    const u = ensureBytes(uEnc, 32);
    u[31] &= 127;
    return bytesToNumberLE(u);
}
const curve25519 = {
    BASE_POINT_U: "0900000000000000000000000000000000000000000000000000000000000000",
    scalarMult (privateKey, publicKey) {
        const u = decodeUCoordinate(publicKey);
        const p = decodeScalar25519(privateKey);
        const pu = montgomeryLadder(u, p);
        if (pu === _0n) throw new Error("Invalid private or public key received");
        return encodeUCoordinate(pu);
    },
    scalarMultBase (privateKey) {
        return curve25519.scalarMult(privateKey, curve25519.BASE_POINT_U);
    }
};
const utils = {
    TORSION_SUBGROUP: [
        "0100000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
        "0000000000000000000000000000000000000000000000000000000000000080",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
        "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
        "0000000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa", 
    ],
    bytesToHex,
    getExtendedPublicKey,
    mod: mod2,
    invert,
    hashToPrivateScalar: (hash)=>{
        hash = ensureBytes(hash);
        if (hash.length < 40 || hash.length > 1024) {
            throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
        }
        const num = mod2(bytesToNumberLE(hash), CURVE.l);
        if (num === _0n || num === _1n) throw new Error("Invalid private key");
        return num;
    },
    randomBytes: (bytesLength = 32)=>{
        return crypto.getRandomValues(new Uint8Array(bytesLength));
    },
    randomPrivateKey: ()=>{
        return utils.randomBytes(32);
    },
    sha512: async (message)=>{
        const buffer = await crypto.subtle.digest("SHA-512", message.buffer);
        return new Uint8Array(buffer);
    },
    precompute (windowSize = 8, point = Point.BASE) {
        const cached = point.equals(Point.BASE) ? point : new Point(point.x, point.y);
        cached._setWindowSize(windowSize);
        cached.multiply(_2n);
        return cached;
    }
};
const mod3 = {
    CURVE: CURVE,
    ExtendedPoint: ExtendedPoint,
    getPublicKey: getPublicKey,
    Point: Point,
    RistrettoPoint: RistrettoPoint,
    sign: sign,
    utils: utils,
    verify: verify
};
function toUtf8_3(text) {
    const bytes = [];
    for(let i = 0, n = text.length; i < n; ++i){
        const c = text.charCodeAt(i);
        if (c < 0x80) {
            bytes.push(c);
        } else if (c < 0x800) {
            bytes.push(0xC0 | c >> 6, 0x80 | c & 0x3f);
        } else if (c < 0xd800 || c >= 0xe000) {
            bytes.push(0xe0 | c >> 12, 0x80 | c >> 6 & 0x3f, 0x80 | c & 0x3f);
        } else {
            let cp = 0x10000 + ((c & 0x3ff) << 10 | text.charCodeAt(++i) & 0x3ff);
            bytes.push(0xf0 | cp >> 18 & 0x7, 0x80 | cp >> 12 & 0x3f, 0x80 | cp >> 6 & 0x3f, 0x80 | cp & 0x3f);
        }
    }
    return new Uint8Array(bytes);
}
const toUtf8 = toUtf8_3;
const PRIME32_1 = 2654435761;
const PRIME32_2 = 2246822519;
const PRIME32_3 = 3266489917;
const PRIME32_4 = 668265263;
const PRIME32_5 = 374761393;
function xxHash32(buffer, seed = 0) {
    buffer = typeof buffer === 'string' ? toUtf8(buffer) : buffer;
    const b = buffer;
    let acc = seed + 374761393 & 0xffffffff;
    let offset = 0;
    if (b.length >= 16) {
        const accN = [
            seed + 2654435761 + 2246822519 & 0xffffffff,
            seed + 2246822519 & 0xffffffff,
            seed + 0 & 0xffffffff,
            seed - 2654435761 & 0xffffffff, 
        ];
        const b1 = buffer;
        const limit = b1.length - 16;
        let lane = 0;
        for(offset = 0; (offset & 0xfffffff0) <= limit; offset += 4){
            const i = offset;
            const laneN0 = b1[i + 0] + (b1[i + 1] << 8);
            const laneN1 = b1[i + 2] + (b1[i + 3] << 8);
            const laneNP = laneN0 * 2246822519 + (laneN1 * 2246822519 << 16);
            let acc1 = accN[lane] + laneNP & 0xffffffff;
            acc1 = acc1 << 13 | acc1 >>> 19;
            const acc0 = acc1 & 0xffff;
            const acc11 = acc1 >>> 16;
            accN[lane] = acc0 * PRIME32_1 + (acc11 * PRIME32_1 << 16) & 0xffffffff;
            lane = lane + 1 & 0x3;
        }
        acc = (accN[0] << 1 | accN[0] >>> 31) + (accN[1] << 7 | accN[1] >>> 25) + (accN[2] << 12 | accN[2] >>> 20) + (accN[3] << 18 | accN[3] >>> 14) & 0xffffffff;
    }
    acc = acc + buffer.length & 0xffffffff;
    let limit1 = buffer.length - 4;
    for(; offset <= limit1; offset += 4){
        const i1 = offset;
        const laneN01 = b[i1 + 0] + (b[i1 + 1] << 8);
        const laneN11 = b[i1 + 2] + (b[i1 + 3] << 8);
        const laneP = laneN01 * 3266489917 + (laneN11 * 3266489917 << 16);
        acc = acc + laneP & 0xffffffff;
        acc = acc << 17 | acc >>> 15;
        acc = (acc & 0xffff) * PRIME32_4 + ((acc >>> 16) * PRIME32_4 << 16) & 0xffffffff;
    }
    for(; offset < b.length; ++offset){
        const lane1 = b[offset];
        acc = acc + lane1 * PRIME32_5;
        acc = acc << 11 | acc >>> 21;
        acc = (acc & 0xffff) * PRIME32_1 + ((acc >>> 16) * PRIME32_1 << 16) & 0xffffffff;
    }
    acc = acc ^ acc >>> 15;
    acc = ((acc & 0xffff) * PRIME32_2 & 0xffffffff) + ((acc >>> 16) * PRIME32_2 << 16);
    acc = acc ^ acc >>> 13;
    acc = ((acc & 0xffff) * PRIME32_3 & 0xffffffff) + ((acc >>> 16) * PRIME32_3 << 16);
    acc = acc ^ acc >>> 16;
    return acc < 0 ? acc + 4294967296 : acc;
}
function deferred() {
    let methods;
    let state = "pending";
    const promise = new Promise((resolve, reject)=>{
        methods = {
            async resolve (value) {
                await value;
                state = "fulfilled";
                resolve(value);
            },
            reject (reason) {
                state = "rejected";
                reject(reason);
            }
        };
    });
    Object.defineProperty(promise, "state", {
        get: ()=>state
    });
    return Object.assign(promise, methods);
}
const decoder = new TextDecoder();
const encoder = new TextEncoder();
function bytesToString(bytes) {
    return decoder.decode(bytes);
}
function stringToBytes(str) {
    return encoder.encode(str);
}
function stringLengthInBytes(str) {
    return stringToBytes(str).length;
}
function concatBytes1(a, b) {
    if (!b || b.length === 0) return a;
    if (!a || a.length === 0) return b;
    var c = new Uint8Array(a.length + b.length);
    c.set(a);
    c.set(b, a.length);
    return c;
}
function b64StringToBytes(b64string) {
    return mod.base64.parse(b64string);
}
function isBytes(bytes) {
    return bytes?.constructor?.name === "Uint8Array";
}
function isBuffer(buf) {
    return buf?.constructor?.name === "Buffer";
}
function identifyBufOrBytes(bufOrBytes) {
    if (isBytes(bufOrBytes)) return "bytes";
    if (isBuffer(bufOrBytes)) return "buffer";
    return "?";
}
export { bytesToString as bytesToString };
export { stringToBytes as stringToBytes };
export { stringLengthInBytes as stringLengthInBytes };
export { concatBytes1 as concatBytes };
export { b64StringToBytes as b64StringToBytes };
export { isBytes as isBytes };
export { isBuffer as isBuffer };
export { identifyBufOrBytes as identifyBufOrBytes };
function onlyHasChars(str, allowedChars) {
    for (let s of str){
        if (allowedChars.indexOf(s) === -1) return false;
    }
    return true;
}
function isOnlyPrintableAscii(s) {
    let bytes = stringToBytes(s);
    for (let __byte of bytes){
        if (__byte < 32 || __byte > 126) return false;
    }
    return true;
}
function isDigit(ch) {
    if (ch === "") return false;
    return digits.indexOf(ch) !== -1;
}
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = alphaLower.toUpperCase();
const digits = "0123456789";
const b32chars = alphaLower + "234567";
const authorNameChars = alphaLower + digits;
const authorKeyChars = b32chars;
const authorAddressChars = authorNameChars + b32chars + "@.";
const workspaceNameChars = alphaLower + digits;
const workspaceKeyChars = alphaLower + digits;
const workspaceAddressChars = workspaceNameChars + b32chars + "+.";
const pathPunctuation = "/'()-._~!$&+,:=@%";
const pathChars = alphaLower + alphaUpper + digits + pathPunctuation;
export { onlyHasChars as onlyHasChars };
export { isOnlyPrintableAscii as isOnlyPrintableAscii };
export { isDigit as isDigit };
export { alphaLower as alphaLower };
export { alphaUpper as alphaUpper };
export { digits as digits };
export { b32chars as b32chars };
export { authorNameChars as authorNameChars };
export { authorKeyChars as authorKeyChars };
export { authorAddressChars as authorAddressChars };
export { workspaceNameChars as workspaceNameChars };
export { workspaceKeyChars as workspaceKeyChars };
export { workspaceAddressChars as workspaceAddressChars };
export { pathPunctuation as pathPunctuation };
export { pathChars as pathChars };
function assembleAuthorAddress(name, encodedPubkey) {
    return `@${name}.${encodedPubkey}`;
}
function assembleShareAddress(name, encodedPubkey) {
    return `+${name}.${encodedPubkey}`;
}
function checkAuthorIsValid(addr) {
    const parsed = parseAuthorAddress(addr);
    if (notErr(parsed)) return true;
    return parsed;
}
function checkShareIsValid(addr) {
    const parsed = parseShareAddress(addr);
    if (notErr(parsed)) return true;
    return parsed;
}
function parseAuthorOrShareAddress(address) {
    if (address.startsWith("@")) {
        return parseAuthorAddress(address);
    } else if (address.startsWith("+")) {
        return parseShareAddress(address);
    }
    return new ValidationError("address must start with either @ or +");
}
function parseAuthorAddress(address) {
    return parseAddress(address, {
        sigil: "@",
        separator: ".",
        minNameLength: 4,
        maxNameLength: 4,
        minPubkeyLength: 53,
        maxPubkeyLength: 53,
        allowedNameCharacters: authorNameChars,
        allowedPubkeyCharacters: authorKeyChars,
        pubkeyMustStartWithB: true
    });
}
function parseShareAddress(address) {
    return parseAddress(address, {
        sigil: "+",
        separator: ".",
        minNameLength: 1,
        maxNameLength: 15,
        minPubkeyLength: 1,
        maxPubkeyLength: 53,
        allowedNameCharacters: workspaceNameChars,
        allowedPubkeyCharacters: workspaceKeyChars,
        pubkeyMustStartWithB: false
    });
}
function parseAddress(address, opts) {
    const { sigil , separator , minNameLength , maxNameLength , minPubkeyLength , maxPubkeyLength , allowedNameCharacters , allowedPubkeyCharacters , pubkeyMustStartWithB ,  } = opts;
    if (typeof address !== "string") {
        return new ValidationError("address must be a string");
    }
    if (address.length < 4) return new ValidationError("address is too short");
    if (address[0] !== sigil) {
        return new ValidationError(`address must start with a sigil: "${sigil}"`);
    }
    if (address.indexOf(separator) === -1) {
        return new ValidationError(`address must contain a separator character: "${separator}"`);
    }
    const parts = address.slice(1).split(separator);
    if (parts.length !== 2) {
        return new ValidationError(`address must have exactly 2 parts separated by a "${separator}" separator`);
    }
    const [name, pubkey] = parts;
    if (name.length < minNameLength || name.length > maxNameLength) {
        return new ValidationError(`name must be between ${minNameLength} and ${maxNameLength} characters long, but is ${name.length}`);
    }
    if (pubkey.length < minPubkeyLength || pubkey.length > maxPubkeyLength) {
        return new ValidationError(`pubkey must be between ${minPubkeyLength} and ${maxPubkeyLength} characters long, but is ${pubkey.length}`);
    }
    if (!onlyHasChars(name, allowedNameCharacters)) {
        return new ValidationError(`name "${name}" must only have allowed characters`);
    }
    if (!onlyHasChars(pubkey, allowedPubkeyCharacters)) {
        return new ValidationError(`pubkey "${pubkey}" must only have allowed characters`);
    }
    if (isDigit(name[0])) {
        return new ValidationError(`name "${name}" must not start with a digit`);
    }
    if (isDigit(pubkey[0])) {
        return new ValidationError(`pubkey "${pubkey}" must not start with a digit`);
    }
    if (pubkeyMustStartWithB && pubkey[0] !== "b") {
        return new ValidationError(`pubkey "${pubkey}" must start with 'b'`);
    }
    return {
        address,
        name,
        pubkey
    };
}
export { assembleAuthorAddress as assembleAuthorAddress };
export { assembleShareAddress as assembleShareAddress };
export { checkAuthorIsValid as checkAuthorIsValid };
export { checkShareIsValid as checkShareIsValid };
export { parseAuthorOrShareAddress as parseAuthorOrShareAddress };
export { parseAuthorAddress as parseAuthorAddress };
export { parseShareAddress as parseShareAddress };
export { parseAddress as parseAddress };
function isPlainObject(obj) {
    if (Object.prototype.toString.call(obj) !== "[object Object]") {
        return false;
    }
    if (("" + obj.constructor).startsWith("class")) return false;
    return true;
}
function checkIsPlainObject(x) {
    return isPlainObject(x) ? null : "expected plain object but got " + x;
}
function checkLiteral(val) {
    return (x)=>{
        if (x !== val) return `expected literal value ${JSON.stringify(val)}`;
        return null;
    };
}
function checkString(opts = {}) {
    return (x)=>{
        if (opts.optional !== true && x === undefined) return "required";
        if (opts.optional === true && x === undefined) return null;
        let len = stringLengthInBytes(x);
        if (typeof x !== "string") {
            return "expected a string but got " + JSON.stringify(x);
        }
        if (opts.minLen !== undefined && len < opts.minLen) {
            return `string shorter than min length of ${opts.minLen} chars`;
        }
        if (opts.maxLen !== undefined && len > opts.maxLen) {
            return `string shorter than max length of ${opts.maxLen} chars`;
        }
        if (opts.len !== undefined && len !== opts.len) {
            return `string does not have required length of ${opts.len} chars: ${x}`;
        }
        if (opts.allowedChars !== undefined && !onlyHasChars(x, opts.allowedChars)) {
            return "contains disallowed characters";
        }
        return null;
    };
}
function checkInt(opts = {}) {
    return (x)=>{
        if (opts.optional !== true && x === undefined) return "required";
        if (opts.optional === true && x === undefined) return null;
        if (opts.nullable !== true && x === null) return "not nullable";
        if (opts.nullable === true && x === null) return null;
        if (typeof x !== "number") {
            return "expected a number but got " + JSON.stringify(x);
        }
        if (isNaN(x)) return "is NaN";
        if (!isFinite(x)) return "is Infinity";
        if (x !== Math.round(x)) return "expected an integer";
        if (opts.min !== undefined && x < opts.min) {
            return `integer too small (must be >= ${opts.min})`;
        }
        if (opts.max !== undefined && x > opts.max) {
            return `integer too large (must be <= ${opts.max})`;
        }
        return null;
    };
}
function checkObj(opts = {}) {
    opts.allowLiteralUndefined = opts.allowLiteralUndefined ?? false;
    opts.allowExtraKeys = opts.allowExtraKeys ?? false;
    return (x)=>{
        if (!isPlainObject(x)) return "expected an object";
        if (opts.allowLiteralUndefined === false) {
            for (let [k, v] of Object.entries(x)){
                if (v === undefined) {
                    return `${k} is explicitly set to undefined but should be missing instead`;
                }
            }
        }
        if (opts.objSchema !== undefined) {
            if (opts.allowExtraKeys === false) {
                let objKeys = Object.keys(x);
                let schemaKeys = Object.keys(opts.objSchema);
                let extraObjKeys = objKeys.filter((k)=>schemaKeys.indexOf(k) === -1);
                if (extraObjKeys.length > 0) {
                    return `object has extra keys not in the schema: ${extraObjKeys.join(", ")}`;
                }
            }
            for (let [key, validator] of Object.entries(opts.objSchema)){
                let err = validator(x[key]);
                if (err !== null) return `${key}: ${err}`;
            }
        }
        return null;
    };
}
export { isPlainObject as isPlainObject };
export { checkIsPlainObject as checkIsPlainObject };
export { checkLiteral as checkLiteral };
export { checkString as checkString };
export { checkInt as checkInt };
export { checkObj as checkObj };
const { codec  } = mod;
const myEncoding = {
    chars: "abcdefghijklmnopqrstuvwxyz234567",
    bits: 5
};
function base32BytesToString(bytes) {
    return "b" + codec.stringify(bytes, myEncoding, {
        pad: false
    });
}
function base32StringToBytes(str) {
    if (!str.startsWith("b")) {
        throw new ValidationError("can't decode base32 string - it should start with a 'b'. " + str);
    }
    if (str[str.length - 1] === "=") {
        throw new ValidationError("can't decode base32 string - it contains padding characters ('=')");
    }
    return codec.parse(str.slice(1), myEncoding, {
        loose: true
    });
}
export { base32BytesToString as base32BytesToString };
export { base32StringToBytes as base32StringToBytes };
var LogLevel;
(function(LogLevel) {
    LogLevel[LogLevel["None"] = -1] = "None";
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warn"] = 1] = "Warn";
    LogLevel[LogLevel["Log"] = 2] = "Log";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
const DEFAULT_LOG_LEVEL = LogLevel.Error;
let globalLogLevels = {
    _default: DEFAULT_LOG_LEVEL
};
function updateLogLevels(newLogLevels) {
    globalLogLevels = {
        ...globalLogLevels,
        ...newLogLevels
    };
}
function setLogLevel(source, level) {
    globalLogLevels[source] = level;
}
function setDefaultLogLevel(level) {
    globalLogLevels._default = level;
}
function getLogLevel(source) {
    if (source in globalLogLevels) {
        return globalLogLevels[source];
    } else {
        return globalLogLevels._default;
    }
}
function getLogLevels() {
    return globalLogLevels;
}
class Logger {
    source;
    color = undefined;
    constructor(source, color){
        this.source = source;
        this.color = color || "aqua";
    }
    _print(level, showTag, indent, ...args) {
        if (level <= getLogLevel(this.source)) {
            if (showTag) {
                const tag = `[${this.source}]`;
                if (this.color !== undefined) {
                    const tagArgs = [
                        `%c ${tag}`,
                        `color: ${this.color}`
                    ];
                    console.log(indent, ...tagArgs, ...args);
                } else {
                    console.log(indent, tag, ...args);
                }
            } else {
                console.log(indent, ...args);
            }
        }
    }
    error(...args) {
        this._print(LogLevel.Error, true, "!!", ...args);
    }
    warn(...args) {
        this._print(LogLevel.Warn, true, "! ", ...args);
    }
    log(...args) {
        this._print(LogLevel.Log, true, "  ", ...args);
    }
    info(...args) {
        this._print(LogLevel.Info, true, "    ", ...args);
    }
    debug(...args) {
        this._print(LogLevel.Debug, true, "      ", ...args);
    }
    blank() {
        this._print(LogLevel.Info, false, "");
    }
}
export { LogLevel as LogLevel };
export { DEFAULT_LOG_LEVEL as DEFAULT_LOG_LEVEL };
export { updateLogLevels as updateLogLevels };
export { setLogLevel as setLogLevel };
export { setDefaultLogLevel as setDefaultLogLevel };
export { getLogLevel as getLogLevel };
export { getLogLevels as getLogLevels };
export { Logger as Logger };
class UpdatableHash {
    hash;
    internalUpdate;
    internalDigest;
    constructor(opts){
        this.hash = opts.hash;
        this.internalUpdate = opts.update;
        this.internalDigest = opts.digest;
    }
    update(data) {
        this.hash = this.internalUpdate(this.hash, data);
        return this.hash;
    }
    digest() {
        return this.internalDigest(this.hash);
    }
}
const { createHash  } = mod1;
const logger = new Logger("crypto-driver-noble", "cyan");
const CryptoDriverNoble = class {
    static sha256(input) {
        if (typeof input === "string") {
            return Promise.resolve(createHash("sha256").update(input, "utf-8").digest());
        } else {
            return Promise.resolve(createHash("sha256").update(input).digest());
        }
    }
    static updatableSha256() {
        return new UpdatableHash({
            hash: createHash("sha256"),
            update: (hash, data)=>hash.update(data),
            digest: (hash)=>hash.digest()
        });
    }
    static async generateKeypairBytes() {
        logger.debug("generateKeypairBytes");
        const secret = mod3.utils.randomPrivateKey();
        const pubkey = await mod3.getPublicKey(secret);
        return {
            pubkey,
            secret
        };
    }
    static sign(keypairBytes, msg) {
        logger.debug("sign");
        if (typeof msg === "string") msg = stringToBytes(msg);
        return mod3.sign(msg, keypairBytes.secret);
    }
    static async verify(publicKey, sig, msg) {
        logger.debug("verify");
        try {
            if (typeof msg === "string") msg = stringToBytes(msg);
            const result = await mod3.verify(sig, msg, publicKey);
            return result;
        } catch  {
            return false;
        }
    }
};
export { CryptoDriverNoble as CryptoDriverNoble };
function microsecondNow() {
    return Date.now() * 1000;
}
function sleep(ms) {
    return new Promise((res)=>{
        setTimeout(res, ms);
    });
}
function randomId() {
    return "" + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
}
function replaceAll(str, from, to) {
    return str.split(from).join(to);
}
function countChars(str, __char) {
    if (__char.length != 1) {
        throw new Error("char must have length 1 but is " + JSON.stringify(__char));
    }
    return str.split(__char).length - 1;
}
function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function generateShareAddress(name) {
    const randomFromString = (str)=>{
        return str[Math.floor(Math.random() * str.length)];
    };
    const firstLetter = randomFromString(alphaLower);
    const rest = Array.from(Array(11), ()=>randomFromString(workspaceKeyChars)).join("");
    const suffix = `${firstLetter}${rest}`;
    const address = `+${name}.${suffix}`;
    const isValid = checkShareIsValid(address);
    if (isErr(isValid)) {
        return isValid;
    }
    return address;
}
export { microsecondNow as microsecondNow };
export { sleep as sleep };
export { randomId as randomId };
export { replaceAll as replaceAll };
export { countChars as countChars };
export { isObjectEmpty as isObjectEmpty };
export { generateShareAddress as generateShareAddress };
function encodeAuthorKeypairToStrings(shortname, pair) {
    return {
        address: assembleAuthorAddress(shortname, base32BytesToString(pair.pubkey)),
        secret: base32BytesToString(pair.secret)
    };
}
function encodeShareKeypairToStrings(name, pair) {
    return {
        address: assembleShareAddress(name, base32BytesToString(pair.pubkey)),
        secret: base32BytesToString(pair.secret)
    };
}
function decodeKeypairToBytes(pair) {
    try {
        const address = isAuthorKeypair(pair) ? pair.address : pair.shareAddress;
        const parsed = parseAuthorOrShareAddress(address);
        if (isErr(parsed)) return parsed;
        const bytes = {
            pubkey: base32StringToBytes(parsed.pubkey),
            secret: base32StringToBytes(pair.secret)
        };
        if (bytes.pubkey.length !== 32) {
            return new ValidationError(`pubkey bytes should be 32 bytes long, not ${bytes.pubkey.length} after base32 decoding.  ${address}`);
        }
        if (bytes.secret.length !== 32) {
            return new ValidationError(`secret bytes should be 32 bytes long, not ${bytes.secret.length} after base32 decoding.  ${pair.secret}`);
        }
        return bytes;
    } catch (err) {
        return new ValidationError("crash while decoding author keypair: " + err.message);
    }
}
function isAuthorKeypair(keypair) {
    return "address" in keypair;
}
export { encodeAuthorKeypairToStrings as encodeAuthorKeypairToStrings };
export { encodeShareKeypairToStrings as encodeShareKeypairToStrings };
export { decodeKeypairToBytes as decodeKeypairToBytes };
export { isAuthorKeypair as isAuthorKeypair };
let logger1 = new Logger("crypto", "cyan");
let GlobalCryptoDriver = CryptoDriverNoble;
function setGlobalCryptoDriver(driver) {
    logger1.debug(`set global crypto driver: ${driver.name}`);
    GlobalCryptoDriver = driver;
}
export { GlobalCryptoDriver as GlobalCryptoDriver };
export { setGlobalCryptoDriver as setGlobalCryptoDriver };
let logger2 = new Logger("crypto", "cyan");
const Crypto = class {
    static async sha256base32(input) {
        const b32 = await GlobalCryptoDriver.sha256(input);
        return base32BytesToString(b32);
    }
    static updatableSha256() {
        return GlobalCryptoDriver.updatableSha256();
    }
    static async generateAuthorKeypair(name) {
        logger2.debug(`generateAuthorKeypair("${name}")`);
        const keypairBytes = await GlobalCryptoDriver.generateKeypairBytes();
        const keypairFormatted = {
            address: assembleAuthorAddress(name, base32BytesToString(keypairBytes.pubkey)),
            secret: base32BytesToString(keypairBytes.secret)
        };
        const err = checkAuthorIsValid(keypairFormatted.address);
        if (isErr(err)) return err;
        return keypairFormatted;
    }
    static async generateShareKeypair(name) {
        logger2.debug(`generateAuthorKeypair("${name}")`);
        const keypairBytes = await GlobalCryptoDriver.generateKeypairBytes();
        const keypairFormatted = {
            shareAddress: assembleShareAddress(name, base32BytesToString(keypairBytes.pubkey)),
            secret: base32BytesToString(keypairBytes.secret)
        };
        const err = checkShareIsValid(keypairFormatted.shareAddress);
        if (isErr(err)) return err;
        return keypairFormatted;
    }
    static async sign(keypair, msg) {
        logger2.debug(`sign`);
        try {
            const keypairBytes = decodeKeypairToBytes(keypair);
            if (isErr(keypairBytes)) return keypairBytes;
            const signed = await GlobalCryptoDriver.sign(keypairBytes, msg);
            return base32BytesToString(signed);
        } catch (err) {
            return new ValidationError("unexpected error while signing: " + err.message);
        }
    }
    static verify(address, sig, msg) {
        logger2.debug(`verify`);
        try {
            const parsed = parseAuthorOrShareAddress(address);
            if (isErr(parsed)) return Promise.resolve(false);
            return GlobalCryptoDriver.verify(base32StringToBytes(parsed.pubkey), base32StringToBytes(sig), msg);
        } catch  {
            return Promise.resolve(false);
        }
    }
    static async checkKeypairIsValid(keypair) {
        logger2.debug(`checkAuthorKeypairIsValid`);
        const address = isAuthorKeypair(keypair) ? keypair.address : keypair.shareAddress;
        try {
            if (typeof address !== "string" || typeof keypair.secret !== "string") {
                return new ValidationError("address and secret must be strings");
            }
            const parseErr = parseAuthorOrShareAddress(address);
            if (isErr(parseErr)) return parseErr;
            const msg = "a test message to sign. " + randomId();
            const sig = await this.sign(keypair, msg);
            if (isErr(sig)) return sig;
            const isValid = await this.verify(address, sig, msg);
            if (isValid === false) {
                return new ValidationError("pubkey does not match secret");
            }
            return true;
        } catch (err) {
            return new ValidationError("unexpected error in checkAuthorKeypairIsValid: " + err.message);
        }
    }
};
export { Crypto as Crypto };
new Logger("validator es.4", "red");
const FUTURE_CUTOFF_MICROSECONDS = 10 * 60 * 1000 * 1000;
const ES4_CORE_SCHEMA = {
    objSchema: {
        format: checkLiteral("es.4"),
        author: checkString({
            allowedChars: authorAddressChars
        }),
        content: checkString({
            maxLen: 4000000
        }),
        contentHash: checkString({
            allowedChars: b32chars,
            len: 53
        }),
        deleteAfter: checkInt({
            min: 10000000000000,
            max: 9007199254740990,
            nullable: true
        }),
        path: checkString({
            allowedChars: pathChars,
            minLen: 2,
            maxLen: 512
        }),
        signature: checkString({
            allowedChars: b32chars,
            len: 104
        }),
        timestamp: checkInt({
            min: 10000000000000,
            max: 9007199254740990
        }),
        workspace: checkString({
            allowedChars: workspaceAddressChars
        })
    },
    allowLiteralUndefined: false,
    allowExtraKeys: false
};
const FormatEs4 = class {
    static id = "es.4";
    static hashDocument(doc) {
        const docWithFakeSig = {
            ...doc,
            signature: "bthisisafakesignatureusedtofillintheobjectwhenvalidatingitforhashingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        };
        const err = this._checkBasicDocumentValidity(docWithFakeSig);
        if (isErr(err)) return Promise.resolve(err);
        return Crypto.sha256base32(`author\t${doc.author}\n` + `contentHash\t${doc.contentHash}\n` + (doc.deleteAfter === null ? "" : `deleteAfter\t${doc.deleteAfter}\n`) + `format\t${doc.format}\n` + `path\t${doc.path}\n` + `timestamp\t${doc.timestamp}\n` + `workspace\t${doc.workspace}\n`);
    }
    static async generateDocument({ input , keypair , share , timestamp  }) {
        const doc = {
            format: "es.4",
            author: keypair.address,
            content: input.content,
            contentHash: await Crypto.sha256base32(input.content),
            deleteAfter: input.deleteAfter ?? null,
            path: input.path,
            timestamp,
            workspace: share,
            signature: "?"
        };
        const signedDoc = await this.signDocument(keypair, doc);
        if (isErr(signedDoc)) {
            return signedDoc;
        }
        return {
            doc: signedDoc
        };
    }
    static async signDocument(keypair, doc) {
        const hash = await this.hashDocument(doc);
        if (isErr(hash)) return hash;
        const sig = await Crypto.sign(keypair, hash);
        if (isErr(sig)) return sig;
        return {
            ...doc,
            signature: sig
        };
    }
    static async wipeDocument(keypair, doc) {
        if (doc.content.length === 0) {
            return doc;
        }
        const cleanedResult = this.removeExtraFields(doc);
        if (isErr(cleanedResult)) return cleanedResult;
        const cleanedDoc = cleanedResult.doc;
        const emptyDoc = {
            ...cleanedDoc,
            content: "",
            contentHash: await Crypto.sha256base32(""),
            signature: "?"
        };
        return this.signDocument(keypair, emptyDoc);
    }
    static removeExtraFields(doc) {
        if (!isPlainObject(doc)) {
            return new ValidationError("doc is not a plain javascript object");
        }
        const validKeys = new Set(Object.keys(ES4_CORE_SCHEMA.objSchema || {}));
        const doc2 = {};
        const extras = {};
        for (const [key, val] of Object.entries(doc)){
            if (validKeys.has(key)) {
                doc2[key] = val;
            } else {
                if (!key.startsWith("_")) {
                    return new ValidationError("extra document fields must have names starting with an underscore");
                }
                extras[key] = val;
            }
        }
        return {
            doc: doc2,
            extras
        };
    }
    static async checkDocumentIsValid(doc, now) {
        if (now === undefined) now = Date.now() * 1000;
        const errBV = this._checkBasicDocumentValidity(doc);
        if (isErr(errBV)) return errBV;
        const errT = this._checkTimestampIsOk(doc.timestamp, doc.deleteAfter, now);
        if (isErr(errT)) return errT;
        const errW = this._checkAuthorCanWriteToPath(doc.author, doc.path);
        if (isErr(errW)) return errW;
        const errP = this._checkPathIsValid(doc.path, doc.deleteAfter);
        if (isErr(errP)) return errP;
        const errAA = checkAuthorIsValid(doc.author);
        if (isErr(errAA)) return errAA;
        const errWA = checkShareIsValid(doc.workspace);
        if (isErr(errWA)) return errWA;
        const errS = await this._checkAuthorSignatureIsValid(doc);
        if (isErr(errS)) return errS;
        const errCH = await this._checkContentMatchesHash(doc.content, doc.contentHash);
        if (isErr(errCH)) return errCH;
        return true;
    }
    static _checkBasicDocumentValidity(doc) {
        const err = checkObj(ES4_CORE_SCHEMA)(doc);
        if (err !== null) return new ValidationError(err);
        return true;
    }
    static _checkAuthorCanWriteToPath(author, path) {
        if (path.indexOf("~") === -1) return true;
        if (path.indexOf("~" + author) !== -1) return true;
        return new ValidationError(`author ${author} can't write to path ${path}`);
    }
    static _checkTimestampIsOk(timestamp, deleteAfter, now) {
        if (timestamp > now + FUTURE_CUTOFF_MICROSECONDS) {
            return new ValidationError("timestamp too far in the future");
        }
        if (deleteAfter !== null) {
            if (now > deleteAfter) {
                return new ValidationError("ephemeral doc has expired");
            }
            if (deleteAfter <= timestamp) {
                return new ValidationError("ephemeral doc expired before it was created");
            }
        }
        return true;
    }
    static _checkPathIsValid(path, deleteAfter) {
        if (!path.startsWith("/")) {
            return new ValidationError("invalid path: must start with /");
        }
        if (path.endsWith("/")) {
            return new ValidationError("invalid path: must not end with /");
        }
        if (path.startsWith("/@")) {
            return new ValidationError('invalid path: must not start with "/@"');
        }
        if (path.indexOf("//") !== -1) {
            return new ValidationError("invalid path: must not contain two consecutive slashes");
        }
        if (deleteAfter !== undefined) {
            if (path.indexOf("!") === -1 && deleteAfter !== null) {
                return new ValidationError("when deleteAfter is set, path must contain '!'");
            }
            if (path.indexOf("!") !== -1 && deleteAfter === null) {
                return new ValidationError("when deleteAfter is null, path must not contain '!'");
            }
        }
        return true;
    }
    static async _checkAuthorSignatureIsValid(doc) {
        try {
            const hash = await this.hashDocument(doc);
            if (isErr(hash)) return hash;
            const verified = await Crypto.verify(doc.author, doc.signature, hash);
            if (verified !== true) {
                return new ValidationError("signature is invalid");
            }
            return true;
        } catch  {
            return new ValidationError("signature is invalid (unexpected exception)");
        }
    }
    static async _checkContentMatchesHash(content, contentHash) {
        if (await Crypto.sha256base32(content) !== contentHash) {
            return new ValidationError("content does not match contentHash");
        }
        return true;
    }
    static getAttachmentInfo(_doc) {
        return new ValidationError("es.4 does not support attachments");
    }
    static updateAttachmentFields(_creds, _doc, _size, _hash) {
        return Promise.resolve(new ValidationError("es.4 does not support attachments"));
    }
    static authorFromCredentials(credentials) {
        return credentials.address;
    }
};
export { FormatEs4 as FormatEs4 };
new Logger("validator es.5", "red");
const FUTURE_CUTOFF_MICROSECONDS1 = 10 * 60 * 1000 * 1000;
const MAX_BLOB_SIZE = Number.MAX_SAFE_INTEGER;
const ES5_CORE_SCHEMA = {
    objSchema: {
        format: checkLiteral("es.5"),
        author: checkString({
            allowedChars: authorAddressChars
        }),
        text: checkString({
            maxLen: 8000
        }),
        textHash: checkString({
            allowedChars: b32chars,
            len: 53
        }),
        deleteAfter: checkInt({
            min: 10000000000000,
            max: 9007199254740990,
            optional: true
        }),
        path: checkString({
            allowedChars: pathChars,
            minLen: 2,
            maxLen: 512
        }),
        signature: checkString({
            allowedChars: b32chars,
            len: 104
        }),
        shareSignature: checkString({
            allowedChars: b32chars,
            len: 104
        }),
        timestamp: checkInt({
            min: 10000000000000,
            max: 9007199254740990
        }),
        share: checkString({
            allowedChars: workspaceAddressChars
        }),
        attachmentSize: checkInt({
            min: 0,
            max: MAX_BLOB_SIZE,
            optional: true
        }),
        attachmentHash: checkString({
            allowedChars: b32chars,
            len: 53,
            optional: true
        })
    },
    allowLiteralUndefined: false,
    allowExtraKeys: false
};
const FormatEs5 = class {
    static id = "es.5";
    static hashDocument(doc) {
        const docWithFakeSig = {
            ...doc,
            signature: "bthisisafakesignatureusedtofillintheobjectwhenvalidatingitforhashingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            shareSignature: "bthisisafakesignatureusedtofillintheobjectwhenvalidatingitforhashingaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        };
        const err = this._checkBasicDocumentValidity(docWithFakeSig);
        if (isErr(err)) return Promise.resolve(err);
        return Crypto.sha256base32((doc.attachmentHash === undefined ? "" : `attachmentHash\t${doc.attachmentHash}\n`) + (doc.attachmentSize === undefined ? "" : `attachmentSize\t${doc.attachmentSize}\n`) + `author\t${doc.author}\n` + (doc.deleteAfter === undefined ? "" : `deleteAfter\t${doc.deleteAfter}\n`) + `format\t${doc.format}\n` + `path\t${doc.path}\n` + `textHash\t${doc.textHash}\n` + `timestamp\t${doc.timestamp}\n` + `share\t${doc.share}\n`);
    }
    static async generateDocument({ input , keypair , share , timestamp , prevLatestDoc , config  }) {
        if (input.text === undefined && prevLatestDoc?.text === undefined) {
            return new ValidationError("Couldn't determine document text from given input or previous version's text.");
        }
        const nextText = input.text !== undefined ? input.text : prevLatestDoc?.text;
        const doc = {
            ...prevLatestDoc,
            format: "es.5",
            author: keypair.address,
            text: nextText,
            textHash: await Crypto.sha256base32(nextText),
            path: input.path,
            timestamp,
            share,
            signature: "?",
            shareSignature: "?"
        };
        if (input.deleteAfter) {
            doc["deleteAfter"] = input.deleteAfter;
        }
        const signed = await this.signDocument(keypair, doc, config);
        if (isErr(signed)) {
            return signed;
        }
        if (input.attachment) {
            return {
                doc: signed,
                attachment: input.attachment
            };
        }
        return {
            doc: signed
        };
    }
    static async signDocument(credentials, doc, config) {
        const hash = await this.hashDocument(doc);
        if (isErr(hash)) return hash;
        const sig = await Crypto.sign(credentials, hash);
        if (config.shareSecret === undefined) {
            return new EarthstarError(`Tried to write a document to ${doc.share} without the secret.`);
        }
        const shareSig = await Crypto.sign({
            shareAddress: doc.share,
            secret: config.shareSecret
        }, hash);
        if (isErr(sig)) return sig;
        if (isErr(shareSig)) return shareSig;
        return {
            ...doc,
            signature: sig,
            shareSignature: shareSig
        };
    }
    static async wipeDocument(credentials, doc, config) {
        if (doc.text.length === 0) {
            return doc;
        }
        const cleanedResult = this.removeExtraFields(doc);
        if (isErr(cleanedResult)) return cleanedResult;
        const cleanedDoc = cleanedResult.doc;
        if (cleanedDoc.attachmentHash) {
            const emptyDoc = {
                ...cleanedDoc,
                text: "",
                textHash: await Crypto.sha256base32(""),
                signature: "?",
                shareSignature: "?",
                attachmentHash: await Crypto.sha256base32(""),
                attachmentSize: 0
            };
            return this.signDocument(credentials, emptyDoc, config);
        }
        const emptyDoc1 = {
            ...cleanedDoc,
            text: "",
            textHash: await Crypto.sha256base32(""),
            signature: "?",
            shareSignature: "?"
        };
        return this.signDocument(credentials, emptyDoc1, config);
    }
    static removeExtraFields(doc) {
        if (!isPlainObject(doc)) {
            return new ValidationError("doc is not a plain javascript object");
        }
        const validKeys = new Set(Object.keys(ES5_CORE_SCHEMA.objSchema || {}));
        const doc2 = {};
        const extras = {};
        for (const [key, val] of Object.entries(doc)){
            if (validKeys.has(key)) {
                doc2[key] = val;
            } else {
                if (!key.startsWith("_")) {
                    return new ValidationError("extra document fields must have names starting with an underscore");
                }
                extras[key] = val;
            }
        }
        return {
            doc: doc2,
            extras
        };
    }
    static async checkDocumentIsValid(doc, now) {
        if (now === undefined) now = Date.now() * 1000;
        const errBV = this._checkBasicDocumentValidity(doc);
        if (isErr(errBV)) return errBV;
        const errT = this._checkTimestampIsOk(doc.timestamp, doc.deleteAfter ? doc.deleteAfter : null, now);
        if (isErr(errT)) return errT;
        const errW = this._checkAuthorCanWriteToPath(doc.author, doc.path);
        if (isErr(errW)) return errW;
        const errBFC = this._checkAttachmentFieldsConsistent(doc);
        if (isErr(errBFC)) return errBFC;
        const errP = this._checkPathIsValid(doc.path, !!doc.attachmentHash, doc.deleteAfter);
        if (isErr(errP)) return errP;
        const errAA = checkAuthorIsValid(doc.author);
        if (isErr(errAA)) return errAA;
        const errWA = checkShareIsValid(doc.share);
        if (isErr(errWA)) return errWA;
        const errS = await this._checkAuthorSignatureIsValid(doc);
        if (isErr(errS)) return errS;
        const errSS = await this._checkShareSignatureIsValid(doc);
        if (isErr(errSS)) return errSS;
        const errCH = await this._checkContentMatchesHash(doc.text, doc.textHash);
        if (isErr(errCH)) return errCH;
        return true;
    }
    static _checkBasicDocumentValidity(doc) {
        const err = checkObj(ES5_CORE_SCHEMA)(doc);
        if (err !== null) return new ValidationError(err);
        return true;
    }
    static _checkAttachmentFieldsConsistent(doc) {
        if (doc.text.length === 0 && doc.attachmentSize && doc.attachmentSize > 0) {
            return new ValidationError("Documents with attachments must have text.");
        }
        if (doc.text.length > 0 && doc.attachmentSize && doc.attachmentSize === 0) {
            "Documents with deleted attachments must have no text.";
        }
        if (doc.attachmentHash && doc.attachmentSize === undefined) {
            return new ValidationError("Attachment size is undefined while attachment hash is defined");
        }
        if (doc.attachmentSize && doc.attachmentHash === undefined) {
            return new ValidationError("Attachment hash is undefined while attachment size is defined");
        }
        return true;
    }
    static _checkAuthorCanWriteToPath(author, path) {
        if (path.indexOf("~") === -1) return true;
        if (path.indexOf("~" + author) !== -1) return true;
        return new ValidationError(`author ${author} can't write to path ${path}`);
    }
    static _checkTimestampIsOk(timestamp, deleteAfter, now) {
        if (timestamp > now + FUTURE_CUTOFF_MICROSECONDS1) {
            return new ValidationError("timestamp too far in the future");
        }
        if (deleteAfter !== null) {
            if (now > deleteAfter) {
                return new ValidationError("ephemeral doc has expired");
            }
            if (deleteAfter <= timestamp) {
                return new ValidationError("ephemeral doc expired before it was created");
            }
        }
        return true;
    }
    static _checkPathIsValid(path, hasAttachment, deleteAfter) {
        if (!path.startsWith("/")) {
            return new ValidationError("invalid path: must start with /");
        }
        if (path.endsWith("/")) {
            return new ValidationError("invalid path: must not end with /");
        }
        if (path.startsWith("/@")) {
            return new ValidationError('invalid path: must not start with "/@"');
        }
        if (path.indexOf("//") !== -1) {
            return new ValidationError("invalid path: must not contain two consecutive slashes");
        }
        if (deleteAfter !== undefined) {
            if (path.indexOf("!") === -1 && deleteAfter !== null) {
                return new ValidationError("when deleteAfter is set, path must contain '!'");
            }
            if (path.indexOf("!") !== -1 && deleteAfter === null) {
                return new ValidationError("when deleteAfter is null, path must not contain '!'");
            }
        }
        if (!pathHasFileExtension(path) && hasAttachment) {
            return new ValidationError("when a attachment is provided, the path must end with a file extension");
        }
        if (pathHasFileExtension(path) && hasAttachment === false) {
            return new ValidationError("when no attachment is provided, the path cannot end with a file extension");
        }
        return true;
    }
    static async _checkAuthorSignatureIsValid(doc) {
        try {
            const hash = await this.hashDocument(doc);
            if (isErr(hash)) return hash;
            const verified = await Crypto.verify(doc.author, doc.signature, hash);
            if (verified !== true) {
                return new ValidationError("signature is invalid");
            }
            return true;
        } catch  {
            return new ValidationError("signature is invalid (unexpected exception)");
        }
    }
    static async _checkShareSignatureIsValid(doc) {
        try {
            const hash = await this.hashDocument(doc);
            if (isErr(hash)) return hash;
            const verified = await Crypto.verify(doc.share, doc.shareSignature, hash);
            if (verified !== true) {
                return new ValidationError("share signature is invalid");
            }
            return true;
        } catch  {
            return new ValidationError("share signature is invalid (unexpected exception)");
        }
    }
    static async _checkContentMatchesHash(content, contentHash) {
        if (await Crypto.sha256base32(content) !== contentHash) {
            return new ValidationError("content does not match contentHash");
        }
        return true;
    }
    static getAttachmentInfo(doc) {
        if (doc.attachmentHash && doc.attachmentSize === 0) {
            return new ValidationError("This document has had its attachment wiped");
        }
        if (!doc.attachmentHash || !doc.attachmentSize) {
            return new ValidationError("This document has no attachment.");
        }
        return {
            size: doc.attachmentSize,
            hash: doc.attachmentHash
        };
    }
    static updateAttachmentFields(credentials, doc, size, hash, config) {
        const updatedDoc = {
            ...doc,
            attachmentHash: hash,
            attachmentSize: size
        };
        return this.signDocument(credentials, updatedDoc, config);
    }
    static authorFromCredentials(credentials) {
        return credentials.address;
    }
};
const fileExtensionRegex = /^.*\.(\w+)$/;
const endingWithKeypairAddrRegex = /^.*~@\w{4}\.\w{53}$/;
function pathHasFileExtension(path) {
    if (path.indexOf(".") === -1) {
        return false;
    }
    const matches = path.match(fileExtensionRegex);
    if (matches === null) {
        return false;
    }
    const extension = matches[1];
    if (extension.length === 53 && path.match(endingWithKeypairAddrRegex)) {
        return false;
    }
    return true;
}
export { FormatEs5 as FormatEs5 };
const DEFAULT_FORMATS = [
    FormatEs5
];
function getFormatWithFallback(format) {
    return format || FormatEs5;
}
function getFormatsWithFallback(formats) {
    return formats || DEFAULT_FORMATS;
}
function getFormatIntersection(formatNames, formats) {
    const intersection = [];
    for (const f of formats){
        if (formatNames.includes(f.id)) {
            intersection.push(f);
        }
    }
    return intersection;
}
function getFormatLookup(formats) {
    const f = formats || DEFAULT_FORMATS;
    const formatLookup = {};
    for (const format of f){
        formatLookup[format.id] = format;
    }
    return formatLookup;
}
export { FormatEs5 as DEFAULT_FORMAT };
export { DEFAULT_FORMATS as DEFAULT_FORMATS };
export { getFormatWithFallback as getFormatWithFallback };
export { getFormatsWithFallback as getFormatsWithFallback };
export { getFormatIntersection as getFormatIntersection };
export { getFormatLookup as getFormatLookup };
class CombineStream {
    closed = false;
    transform = new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
        }
    });
    writer = this.transform.writable.getWriter();
    readable = this.transform.readable;
    writables = [];
    checkClosed() {
        if (this.closed) {
            throw "Closed";
        }
    }
    getWritableStream() {
        this.checkClosed();
        const writer = this.writer;
        const writable = new WritableStream({
            async write (chunk) {
                await writer.ready;
                await writer.write(chunk);
            }
        });
        this.writables.push(writable);
        return writable;
    }
    async close() {
        this.checkClosed();
        for (const writableStream of this.writables){
            await writableStream.abort();
        }
        this.transform.writable.abort();
        this.closed = true;
    }
    isClosed() {
        return this.closed;
    }
}
class CloneStream {
    transformStream = new TransformStream(new PassThroughTransformer());
    sourceReadable = this.transformStream.readable;
    writable = this.transformStream.writable;
    getReadableStream() {
        const [r1, r2] = this.sourceReadable.tee();
        this.sourceReadable = r1;
        return r2;
    }
}
class CloneMidStream {
    closed = false;
    subscribers = [];
    writables = [];
    checkClosed() {
        if (this.closed) {
            throw "Closed";
        }
    }
    writable;
    constructor(){
        const subscribers = this.subscribers;
        this.writable = new WritableStream({
            write (chunk) {
                const notifies = subscribers.map(({ writer  })=>{
                    return new Promise((resolve)=>{
                        writer.ready.then(()=>{
                            writer.write(chunk).then(resolve);
                        });
                    });
                });
                Promise.all(notifies);
            }
        });
    }
    getReadableStream() {
        this.checkClosed();
        const transform = new TransformStream({
            transform (chunk, controller) {
                controller.enqueue(chunk);
            }
        });
        this.subscribers.push({
            transform,
            writer: transform.writable.getWriter()
        });
        return transform.readable;
    }
    async close() {
        this.checkClosed();
        for (const writableStream of this.writables){
            await writableStream.abort();
        }
        for (const { transform  } of this.subscribers){
            await transform.writable.abort();
            await transform.readable.cancel();
        }
        this.closed = true;
    }
    isClosed() {
        return this.closed;
    }
}
class MultiStream {
    closed = false;
    combineStream = new CombineStream();
    cloneStream;
    checkClosed() {
        if (this.closed) {
            throw "Closed";
        }
    }
    constructor(joinMidStream){
        if (joinMidStream) {
            this.cloneStream = new CloneMidStream();
        } else {
            this.cloneStream = new CloneStream();
        }
        this.combineStream.readable.pipeTo(this.cloneStream.writable);
    }
    getWritableStream() {
        return this.combineStream.getWritableStream();
    }
    getReadableStream() {
        return this.cloneStream.getReadableStream();
    }
    close() {
        this.checkClosed();
        this.combineStream.close();
        this.closed = true;
    }
    isClosed() {
        return this.closed;
    }
}
class CallbackSink {
    callbacks = new Set();
    onWrite(callback) {
        this.callbacks.add(callback);
        return ()=>{
            this.callbacks.delete(callback);
        };
    }
    async write(chunk) {
        for (const callback of this.callbacks){
            await callback(chunk);
        }
    }
    close() {
        this.callbacks.clear();
    }
}
class BlockingBus {
    callbacks = new Set();
    lock = new LockStream();
    on(cb) {
        this.callbacks.add(cb);
        return ()=>{
            this.callbacks.delete(cb);
        };
    }
    async send(item) {
        for (const callback of this.callbacks){
            await this.lock.run(()=>callback(item));
        }
    }
}
class PassThroughTransformer {
    transform(chunk, controller) {
        controller.enqueue(chunk);
    }
}
class LockStream {
    writable = new WritableStream({
        async write (cb) {
            await cb();
        }
    });
    writer = this.writable.getWriter();
    closed = false;
    checkClosed() {
        if (this.closed) {
            throw "Closed";
        }
    }
    async run(cb) {
        this.checkClosed();
        await this.writer.ready;
        return this.writer.write(cb);
    }
    async close() {
        this.checkClosed();
        await this.writable.abort();
        this.closed = true;
    }
    isClosed() {
        return this.closed;
    }
}
class ChannelTransformer {
    channel;
    channelKey;
    constructor(channel, key){
        this.channel = channel;
        this.channelKey = key;
    }
    transform(chunk, controller) {
        if (this.channel === "*" || this.channel === chunk[this.channelKey]) {
            controller.enqueue(chunk);
            return;
        }
    }
}
class ChannelMultiStream {
    multistream;
    channelKey;
    constructor(key, joinMidStream){
        this.multistream = new MultiStream(joinMidStream);
        this.channelKey = key;
    }
    getWritableStream() {
        return this.multistream.getWritableStream();
    }
    getReadableStream(channel) {
        const channelTransform = new TransformStream(new ChannelTransformer(channel, this.channelKey));
        return this.multistream.getReadableStream().pipeThrough(channelTransform);
    }
}
class StreamSplitter {
    transforms = new Map();
    incomingCloner = new CloneStream();
    writable = this.incomingCloner.writable;
    getKey;
    constructor(getKey){
        this.getKey = getKey;
    }
    getReadable(key) {
        const { transforms , incomingCloner , getKey  } = this;
        const transform = transforms.get(key);
        if (!transform) {
            const incomingClone = incomingCloner.getReadableStream();
            const newTransform = new TransformStream(new PassThroughTransformer());
            const filterTransform = new TransformStream({
                transform (chunk, controller) {
                    if (getKey(chunk) === key) {
                        controller.enqueue(chunk);
                    }
                }
            });
            incomingClone.pipeThrough(filterTransform).pipeTo(newTransform.writable).catch((err)=>{
                newTransform.writable.abort(err);
            });
            transforms.set(key, newTransform);
            return newTransform.readable;
        }
        return transform.readable;
    }
}
function websocketWritable(socketOrUrl, prepareToSend) {
    const socketIsOpen = deferred();
    const initialSocket = deferred();
    const setUpSocket = ()=>{
        if (initialSocket.state === "pending") {
            let socket;
            if (socketOrUrl instanceof WebSocket) {
                socket = socketOrUrl;
            } else {
                socket = new WebSocket(socketOrUrl);
            }
            initialSocket.resolve(socket);
            socket.binaryType = "arraybuffer";
            if (socket.readyState === socket.OPEN) {
                socketIsOpen.resolve();
            }
            socket.onopen = ()=>{
                socketIsOpen.resolve();
            };
        }
    };
    let heartbeatInterval;
    return new WritableStream({
        async write (chunk, controller) {
            setUpSocket();
            const socket = await initialSocket;
            await socketIsOpen;
            try {
                const toSend = prepareToSend(chunk);
                socket.send(toSend);
            } catch (err) {
                controller.error(err);
            }
            socket.onclose = ()=>{
                clearInterval(heartbeatInterval);
                controller.error("Socket closed before we were done");
            };
        },
        async close () {
            setUpSocket();
            const socket = await initialSocket;
            await socketIsOpen;
            socket.close();
        },
        async abort () {
            setUpSocket();
            const socket = await initialSocket;
            await socketIsOpen;
            socket.close();
        }
    });
}
function websocketReadable(socketOrUrl, prepareForQueue) {
    const initialSocket = deferred();
    let erroredOutAlready = false;
    const setupSocket = ()=>{
        if (initialSocket.state === "pending") {
            if (socketOrUrl instanceof WebSocket) {
                initialSocket.resolve(socketOrUrl);
            } else {
                try {
                    const socket = new WebSocket(socketOrUrl);
                    initialSocket.resolve(socket);
                } catch (err) {
                    initialSocket.reject(err);
                }
            }
        }
    };
    return new ReadableStream({
        async start (controller) {
            setupSocket();
            const socket = await initialSocket;
            socket.binaryType = "arraybuffer";
            socket.onmessage = (event)=>{
                const toQueue = prepareForQueue(event);
                controller.enqueue(toQueue);
            };
            socket.onclose = ()=>{
                if (erroredOutAlready) {
                    return;
                }
                controller.close();
            };
            socket.onerror = (err)=>{
                erroredOutAlready = true;
                controller.error(err);
            };
        },
        async cancel () {
            setupSocket();
            const socket = await initialSocket;
            socket.close();
        }
    });
}
function internalEntryToHaveEntry(id, entry) {
    const existingVersions = {};
    for(const versionId in entry.versions){
        existingVersions[versionId] = entry.versions[versionId].timestamp;
    }
    return {
        id,
        versions: existingVersions
    };
}
class HaveEntryKeeper {
    entriesById = new Map();
    versionsById = new Map();
    ready = deferred();
    liveEntryBus = new BlockingBus();
    writable;
    readable;
    onlyLiveReadable;
    constructor(mode){
        const addDoc = this.addDoc.bind(this);
        const getEntries = this.getEntries.bind(this);
        const { ready , liveEntryBus  } = this;
        this.writable = new WritableStream({
            write (querySourceEvent) {
                if (querySourceEvent.kind === "existing" || querySourceEvent.kind === "success") {
                    const entry = addDoc(querySourceEvent.doc);
                    if (querySourceEvent.kind === "success") {
                        liveEntryBus.send(entry);
                    }
                }
                if (querySourceEvent.kind === `processed_all_existing`) {
                    ready.resolve();
                }
            },
            close () {
                ready.resolve();
            }
        });
        this.readable = new ReadableStream({
            start (controller) {
                liveEntryBus.on((entry)=>{
                    controller.enqueue(entry);
                });
                ready.then(()=>{
                    const entries = getEntries();
                    for (const entry of entries){
                        controller.enqueue(entry);
                    }
                    if (mode === "existing") {
                        controller.close();
                    }
                });
            }
        });
        this.onlyLiveReadable = new ReadableStream({
            start (controller) {
                liveEntryBus.on((entry)=>{
                    controller.enqueue(entry);
                });
            }
        });
    }
    addDoc(doc) {
        const encoder = new TextEncoder();
        const pathBytes = encoder.encode(doc.path);
        const versionBytes = encoder.encode(doc.path + doc.author);
        const entryId = xxHash32(pathBytes).toString(16);
        const versionId = xxHash32(versionBytes).toString(16);
        const existing = this.entriesById.get(entryId);
        const versionInfo = {
            author: doc.author,
            timestamp: doc.timestamp
        };
        if (existing) {
            this.entriesById.set(entryId, {
                path: doc.path,
                versions: {
                    ...existing.versions,
                    [versionId]: versionInfo
                }
            });
        } else {
            this.entriesById.set(entryId, {
                path: doc.path,
                versions: {
                    [versionId]: versionInfo
                }
            });
        }
        this.versionsById.set(versionId, {
            entryId,
            version: versionInfo
        });
        return internalEntryToHaveEntry(entryId, {
            path: doc.path,
            versions: {
                ...existing?.versions,
                [versionId]: versionInfo
            }
        });
    }
    getId(id) {
        let entryId = id;
        const maybeVersion = this.versionsById.get(id);
        if (maybeVersion) {
            entryId = maybeVersion.entryId;
        }
        const maybeEntry = this.entriesById.get(entryId);
        if (maybeEntry) {
            return internalEntryToHaveEntry(entryId, maybeEntry);
        }
    }
    getPathAndVersionsForId(id) {
        const entry = this.entriesById.get(id);
        if (entry) {
            const versions = {};
            for(const versionId in entry.versions){
                versions[versionId] = entry.versions[versionId].author;
            }
            return {
                path: entry.path,
                versions
            };
        }
        const maybeVersion = this.versionsById.get(id);
        if (!maybeVersion) {
            return undefined;
        }
        const path = this.getPathAndVersionsForId(maybeVersion.entryId)?.path;
        if (!path) {
            console.error("HaveEntryKeeper: A version of a HaveEntry claimed to belong to an Entry which could not be found.");
            return undefined;
        }
        return {
            path,
            versions: {
                [id]: maybeVersion.version.author
            }
        };
    }
    getRootId(versionId) {
        return this.versionsById.get(versionId)?.entryId;
    }
    hasEntryWithId(id) {
        return this.entriesById.has(id) || this.versionsById.has(id);
    }
    getEntries() {
        return Array.from(this.entriesById.entries()).map(([id, entry])=>internalEntryToHaveEntry(id, entry));
    }
    getHash() {
        const entries = Array.from(this.entriesById.entries()).sort(([aId], [bId])=>{
            return aId < bId ? -1 : 1;
        }).map(([id, entry])=>{
            const versionStrings = [];
            for(const key in entry.versions){
                const v = entry.versions[key];
                versionStrings.push(`${v.author}_${v.timestamp}`);
            }
            return `${id}:${versionStrings.join(",")}`;
        });
        const asString = entries.join(".");
        const encoder = new TextEncoder();
        const entriesBytes = encoder.encode(asString);
        return xxHash32(entriesBytes).toString(16);
    }
    isReady() {
        return this.ready;
    }
}
class MultiDeferred {
    deferreds = new Set();
    state = "pending";
    resolve(value) {
        if (this.state !== "pending") {
            return;
        }
        this.state = "fulfilled";
        for (const deferred of this.deferreds){
            deferred.resolve(value);
        }
    }
    reject(reason) {
        if (this.state !== "pending") {
            return;
        }
        this.state = "rejected";
        for (const deferred of this.deferreds){
            deferred.reject(reason);
        }
    }
    getPromise() {
        const promise = deferred();
        if (this.state === "fulfilled") {
            promise.resolve();
        } else if (this.state === "rejected") {
            promise.reject();
        } else {
            this.deferreds.add(promise);
        }
        return promise;
    }
}
class SyncAgent {
    outboundEventBus = new BlockingBus();
    rootIdsRequested = new Set();
    fulfilledMap = new Map();
    fulfilledCount = 0;
    statusBus = new BlockingBus();
    initialHash = deferred();
    gotAllPartnerHaves = deferred();
    isPartnerFulfilled = deferred();
    isFulfilled = deferred();
    isDoneMultiDeferred = new MultiDeferred();
    writable;
    readable;
    replica;
    getStatus() {
        return {
            requested: this.fulfilledMap.size,
            received: this.fulfilledCount,
            status: this.isDoneMultiDeferred.state === "rejected" ? "aborted" : this.initialHash.state === "pending" ? "preparing" : this.fulfilledCount < this.fulfilledMap.size ? "syncing" : this.isDoneMultiDeferred.state === "fulfilled" ? "done" : "idling"
        };
    }
    registerWant(versionId) {
        this.fulfilledMap.set(versionId, false);
        this.statusBus.send(this.getStatus());
    }
    fulfilWant(versionId) {
        const unfulfilledWant = this.fulfilledMap.get(versionId);
        if (unfulfilledWant === undefined) {
            return false;
        }
        if (unfulfilledWant === true) {
            return true;
        }
        this.fulfilledMap.set(versionId, true);
        this.fulfilledCount++;
        this.statusBus.send(this.getStatus());
        return true;
    }
    constructor({ replica , mode , formats , transferManager  }){
        const { outboundEventBus , statusBus , initialHash , isPartnerFulfilled , fulfilledMap , rootIdsRequested , isDoneMultiDeferred , isFulfilled , gotAllPartnerHaves ,  } = this;
        this.replica = replica;
        replica.onEvent((event)=>{
            if (event.kind === "willClose") {
                this.cancel();
            }
        });
        const haveEntryKeeper = new HaveEntryKeeper(mode === "live" ? "everything" : "existing");
        const queryStream = replica.getQueryStream({
            historyMode: "all",
            orderBy: "localIndex ASC"
        }, mode === "live" ? "everything" : "existing", formats);
        const registerWant = this.registerWant.bind(this);
        const fulfilWant = this.fulfilWant.bind(this);
        const getStatus = this.getStatus.bind(this);
        const cancel = this.cancel.bind(this);
        const formatLookup = getFormatLookup(formats);
        const haveEntrySink = new WritableStream({
            write (haveEntry) {
                if (rootIdsRequested.has(haveEntry.id)) {
                    return;
                }
                outboundEventBus.send({
                    kind: "HAVE",
                    ...haveEntry
                });
            }
        });
        queryStream.pipeTo(haveEntryKeeper.writable);
        haveEntryKeeper.isReady().then(()=>{
            const hash = haveEntryKeeper.getHash();
            this.initialHash.resolve(hash);
            outboundEventBus.send({
                kind: "HASH",
                hash
            });
        });
        gotAllPartnerHaves.then(async ()=>{
            await isFulfilled;
            await isPartnerFulfilled;
            await outboundEventBus.send({
                kind: "CMD_FINISHED"
            });
        });
        this.writable = new WritableStream({
            async write (event) {
                if (isDoneMultiDeferred.state === "rejected") {
                    return;
                }
                switch(event.kind){
                    case "HASH":
                        {
                            const ourHash = await initialHash;
                            if (ourHash === event.hash && mode === "only_existing") {
                                gotAllPartnerHaves.resolve();
                                isFulfilled.resolve();
                                break;
                            }
                            if (ourHash === event.hash && mode === "live") {
                                haveEntryKeeper.onlyLiveReadable.pipeTo(haveEntrySink);
                                break;
                            }
                            haveEntryKeeper.readable.pipeTo(haveEntrySink).then(()=>{
                                outboundEventBus.send({
                                    kind: "EXHAUSTED_HAVES"
                                });
                            });
                            break;
                        }
                    case "HAVE":
                        {
                            if (!haveEntryKeeper.hasEntryWithId(event.id)) {
                                await outboundEventBus.send({
                                    kind: "WANT",
                                    id: event.id
                                });
                                for(const versionId in event.versions){
                                    registerWant(versionId);
                                    rootIdsRequested.add(event.id);
                                }
                                break;
                            }
                            for(const haveId in event.versions){
                                const timestamp = event.versions[haveId];
                                if (fulfilledMap.has(haveId)) {
                                    continue;
                                }
                                const existingEntry = haveEntryKeeper.getId(haveId);
                                if (!existingEntry) {
                                    await outboundEventBus.send({
                                        kind: "WANT",
                                        id: haveId
                                    });
                                    registerWant(haveId);
                                    rootIdsRequested.add(event.id);
                                    continue;
                                }
                                const existingTimestamp = existingEntry.versions[haveId];
                                if (timestamp > existingTimestamp) {
                                    await outboundEventBus.send({
                                        kind: "WANT",
                                        id: haveId
                                    });
                                    rootIdsRequested.add(event.id);
                                    registerWant(haveId);
                                }
                            }
                            break;
                        }
                    case "WANT":
                        {
                            const maybePathAndVersions = haveEntryKeeper.getPathAndVersionsForId(event.id);
                            if (!maybePathAndVersions) {
                                console.error("Got a WANT event for a document not on record.");
                                break;
                            }
                            const allVersions = await replica.getAllDocsAtPath(maybePathAndVersions.path);
                            for(const id in maybePathAndVersions.versions){
                                const authorAddress = maybePathAndVersions.versions[id];
                                const doc = allVersions.find((doc)=>doc.author === authorAddress);
                                if (doc) {
                                    await outboundEventBus.send({
                                        kind: "DOC",
                                        id,
                                        doc
                                    });
                                } else {
                                    console.error("Got a WANT event for a document not on record.");
                                }
                            }
                            break;
                        }
                    case "DOC":
                        {
                            if (fulfilledMap.has(event.id)) {
                                const format = formatLookup[event.doc.format];
                                if (!format) {
                                    console.error(`Was sent a doc with a format we don't know about (${event.doc.format})`);
                                    break;
                                }
                                const attachment = await replica.getAttachment(event.doc, formatLookup[event.doc.format]);
                                if (attachment === undefined) {
                                    const canDownload = await transferManager.handleDownload(event.doc, replica);
                                    if (!canDownload) {
                                        const attachmentInfo = format.getAttachmentInfo(event.doc);
                                        transferManager.registerExpectedTransfer(replica.share, attachmentInfo.hash);
                                        await outboundEventBus.send({
                                            kind: "WANT_ATTACHMENT",
                                            attachmentHash: attachmentInfo.hash,
                                            doc: event.doc,
                                            shareAddress: replica.share
                                        });
                                    }
                                }
                                await replica.ingest(format, event.doc);
                                fulfilWant(event.id);
                                break;
                            } else {
                                console.error("Was sent a doc we never asked for");
                            }
                            break;
                        }
                    case "FULFILLED":
                        isPartnerFulfilled.resolve(true);
                        break;
                    case "EXHAUSTED_HAVES":
                        gotAllPartnerHaves.resolve();
                        break;
                    case "WANT_ATTACHMENT":
                        transferManager.handleUpload(event, replica);
                        break;
                    case "ABORT":
                        await cancel();
                }
            }
        });
        this.readable = new ReadableStream({
            start (controller) {
                const unsub = outboundEventBus.on((event)=>{
                    if (isDoneMultiDeferred.state !== "rejected" && event.kind !== "CMD_FINISHED") {
                        controller.enqueue(event);
                    }
                    if (event.kind === "ABORT") {
                        isDoneMultiDeferred.reject("Aborted");
                    }
                    if (event.kind === "ABORT" || event.kind === "CMD_FINISHED") {
                        controller.close();
                        statusBus.send(getStatus());
                        unsub();
                    }
                    if (event.kind === "CMD_FINISHED") {
                        isDoneMultiDeferred.resolve();
                    }
                });
            }
        });
        this.gotAllPartnerHaves.then(()=>{
            const status = this.getStatus();
            if (status.received === status.requested) {
                this.isFulfilled.resolve(true);
            } else {
                const unsub = this.onStatusUpdate((statusUpdate)=>{
                    if (statusUpdate.received === statusUpdate.requested) {
                        unsub();
                        this.isFulfilled.resolve(true);
                    }
                });
            }
        });
        this.isFulfilled.then(()=>{
            this.outboundEventBus.send({
                kind: "FULFILLED"
            });
        });
        this.isDoneMultiDeferred.getPromise().then(()=>{
            this.statusBus.send(this.getStatus());
        }).catch(()=>{
            statusBus.send(getStatus());
        });
    }
    onStatusUpdate(callback) {
        return this.statusBus.on(callback);
    }
    async cancel(reason) {
        if (this.isDoneMultiDeferred.state === "fulfilled" || this.isDoneMultiDeferred.state === "rejected") {
            return;
        }
        await this.outboundEventBus.send({
            kind: "ABORT"
        });
    }
    isDone() {
        return this.isDoneMultiDeferred.getPromise();
    }
}
class AttachmentTransfer {
    kind;
    status = "ready";
    share;
    loaded = 0;
    expectedSize;
    sourceDoc;
    statusBus = new BlockingBus();
    transferOp = deferred();
    multiDeferred = new MultiDeferred();
    hash;
    requester;
    abortController = new AbortController();
    constructor({ stream , replica , doc , format , requester  }){
        this.sourceDoc = doc;
        this.share = replica.share;
        this.requester = requester;
        const attachmentInfo = format.getAttachmentInfo(doc);
        if (isErr(attachmentInfo)) {
            throw new ValidationError("AttachmentTransfer was given a doc which has no attachment!");
        }
        this.hash = attachmentInfo.hash;
        this.expectedSize = attachmentInfo.size;
        const updateLoaded = this.updateLoaded.bind(this);
        if (stream instanceof ReadableStream) {
            this.kind = "download";
            const counterStream = new ReadableStream({
                async start (controller) {
                    const reader = stream.getReader();
                    while(true){
                        const { done , value  } = await reader.read();
                        if (done) {
                            break;
                        }
                        updateLoaded(value.byteLength);
                        controller.enqueue(value);
                    }
                    controller.close();
                }
            });
            this.transferOp.resolve(()=>{
                const promise = deferred();
                replica.ingestAttachment(format, doc, counterStream).then((result)=>{
                    if (isErr(result) && this.loaded === 0) {
                        this.changeStatus("missing_attachment");
                        return;
                    }
                    if (isErr(result)) {
                        promise.reject(result);
                        return;
                    }
                    promise.resolve();
                }).catch((err)=>{
                    promise.reject(err);
                });
                return promise;
            });
        } else {
            this.kind = "upload";
            replica.getAttachment(doc, format).then(async (attachmentRes)=>{
                if (!attachmentRes) {
                    await this.changeStatus("missing_attachment");
                    await stream.abort();
                    return;
                }
                if (isErr(attachmentRes)) {
                    await this.changeStatus("failed");
                    await stream.abort();
                    return;
                }
                const counterTransform = new TransformStream({
                    transform (chunk, controller) {
                        updateLoaded(chunk.byteLength);
                        controller.enqueue(chunk);
                    }
                });
                this.transferOp.resolve(()=>attachmentRes.stream().then((readable)=>{
                        return readable.pipeThrough(counterTransform).pipeTo(stream);
                    }));
            });
        }
    }
    async start() {
        if (this.status !== "ready") {
            return;
        }
        const transferOp = await this.transferOp;
        await this.changeStatus("in_progress");
        transferOp().then(async ()=>{
            await this.changeStatus("complete");
        }).catch(async ()=>{
            await this.changeStatus("failed");
        });
        return;
    }
    updateLoaded(toAdd) {
        this.loaded += toAdd;
        this.statusBus.send({
            status: this.status,
            bytesLoaded: this.loaded,
            totalBytes: this.expectedSize
        });
    }
    async changeStatus(status) {
        if (this.status === "complete" || this.status === "failed" || this.status === "missing_attachment") {
            return;
        }
        this.status = status;
        await this.statusBus.send({
            status: status,
            bytesLoaded: this.loaded,
            totalBytes: this.expectedSize
        });
        if (status === "complete") {
            this.multiDeferred.resolve();
        }
        if (status === "failed") {
            this.multiDeferred.reject("Attachment transfer failed");
        }
        if (status === "missing_attachment") {
            this.multiDeferred.reject("The other peer does not have this attachment");
        }
    }
    get doc() {
        return this.sourceDoc;
    }
    onProgress(callback) {
        const unsub = this.statusBus.on(callback);
        return unsub;
    }
    abort() {
        this.abortController.abort();
    }
    isDone() {
        return this.multiDeferred.getPromise();
    }
}
class PromiseEnroller {
    promises = new Set();
    sealed = false;
    multiDeferred = new MultiDeferred();
    allowRejectedPromises;
    constructor(allowRejectedPromises = false){
        this.allowRejectedPromises = allowRejectedPromises;
    }
    enrol(promise) {
        if (this.sealed) {
            throw new EarthstarError("Tried to enrol a promise when enrolment was already sealed.");
        }
        this.promises.add(promise);
        promise.then(()=>{
            this.checkAllDone();
        }).catch((err)=>{
            if (this.allowRejectedPromises) {
                return;
            }
            throw err;
        });
    }
    checkAllDone() {
        if (!this.sealed) {
            return;
        }
        if (this.allowRejectedPromises) {
            Promise.allSettled(this.promises).then(()=>{
                this.multiDeferred.resolve();
            });
        } else {
            Promise.all(this.promises).then(()=>{
                this.multiDeferred.resolve();
            }).catch(()=>{
                this.multiDeferred.reject();
            });
        }
    }
    seal() {
        if (this.sealed) {
            return;
        }
        this.sealed = true;
        this.checkAllDone();
    }
    isSealed() {
        return this.sealed;
    }
    isDone() {
        const promise = this.multiDeferred.getPromise();
        return promise;
    }
}
class TransferQueue {
    waiting = [];
    active = new Set();
    failed = new Set();
    completed = new Set();
    activeLimit;
    transfersRequestedByUsEnroller = new PromiseEnroller(true);
    reports = {};
    reportBus = new BlockingBus();
    constructor(activeLimit){
        this.activeLimit = activeLimit;
    }
    async activate(transfer) {
        this.active.add(transfer);
        transfer.isDone().then(()=>{
            this.completed.add(transfer);
        }).catch(()=>{
            this.failed.add(transfer);
        }).finally(()=>{
            this.active.delete(transfer);
            this.admitNext();
        });
        await transfer.start();
    }
    queue(transfer) {
        this.waiting.push(transfer);
    }
    admitNext() {
        if (this.waiting.length === 0) {
            return;
        }
        if (this.active.size >= this.activeLimit) {
            return;
        }
        const first = this.waiting.shift();
        if (first) {
            this.activate(first);
        }
    }
    async addTransfer(transfer) {
        transfer.onProgress(()=>{
            this.updateTransferStatus(transfer);
        });
        if (transfer.requester === "us") {
            this.transfersRequestedByUsEnroller.enrol(transfer.isDone());
        }
        if (this.active.size < this.activeLimit) {
            await this.activate(transfer);
        } else {
            this.queue(transfer);
        }
    }
    gotAllTransfersRequestedByUs() {
        this.transfersRequestedByUsEnroller.seal();
    }
    cancel() {
        this.transfersRequestedByUsEnroller.seal();
        for (const transfer of this.active){
            transfer.abort();
        }
    }
    updateTransferStatus(transfer) {
        const shareReports = this.reports[transfer.share];
        if (!shareReports) {
            this.reports[transfer.share] = {};
        }
        this.reports[transfer.share][transfer.hash + transfer.kind] = {
            author: transfer.doc.author,
            path: transfer.doc.path,
            format: transfer.doc.format,
            hash: transfer.hash,
            kind: transfer.kind,
            status: transfer.status,
            bytesLoaded: transfer.loaded,
            totalBytes: transfer.expectedSize
        };
        this.reportBus.send(this.getReport());
    }
    getReport() {
        const report = {};
        for(const shareKey in this.reports){
            const transferReports = [];
            const shareReport = this.reports[shareKey];
            for(const key in shareReport){
                const transferReport = shareReport[key];
                transferReports.push(transferReport);
            }
            report[shareKey] = transferReports;
        }
        return report;
    }
    hasQueuedTransfer(hash, kind) {
        for (const active of this.active){
            if (active.hash === hash && active.kind === kind) {
                return true;
            }
        }
        for (const waiting of this.waiting){
            if (waiting.hash === hash && waiting.kind === kind) {
                return true;
            }
        }
        return false;
    }
    onReportUpdate(cb) {
        return this.reportBus.on(cb);
    }
    transfersRequestedByUsFinished() {
        return this.transfersRequestedByUsEnroller.isDone();
    }
}
class TransferManager {
    partner;
    queue;
    formats;
    otherSyncerId = deferred();
    receivedAllExpectedTransfersEnroller = new PromiseEnroller();
    madeAllAttachmentRequestsEnroller = new PromiseEnroller();
    formatsLookup;
    reportDidUpdateBus = new BlockingBus();
    expectedTransferPromises = new Map();
    constructor(opts){
        this.partner = opts.partner;
        this.queue = new TransferQueue(this.partner.concurrentTransfers);
        this.formats = opts.formats;
        this.formatsLookup = getFormatLookup(this.formats);
        this.queue.onReportUpdate(async (report)=>{
            await this.reportDidUpdateBus.send(report);
        });
        this.madeAllAttachmentRequestsEnroller.isDone().then(()=>{
            this.receivedAllExpectedTransfersEnroller.seal();
        });
        this.receivedAllExpectedTransfersEnroller.isDone().then(()=>{
            this.queue.gotAllTransfersRequestedByUs();
        });
    }
    registerSyncAgent(agent) {
        const existingDocsStream = agent.replica.getQueryStream({
            orderBy: "localIndex ASC"
        }, "existing", this.formats);
        const { formatsLookup  } = this;
        const handleDownload = this.handleDownload.bind(this);
        const pipePromise = existingDocsStream.pipeTo(new WritableStream({
            async write (event) {
                if (event.kind === "existing" || event.kind === "success") {
                    const format = formatsLookup[event.doc.format];
                    const res = await agent.replica.getAttachment(event.doc, format);
                    if (isErr(res)) {
                        return;
                    } else if (res === undefined) {
                        await handleDownload(event.doc, agent.replica);
                    }
                }
            }
        }));
        this.madeAllAttachmentRequestsEnroller.enrol(pipePromise);
        this.madeAllAttachmentRequestsEnroller.enrol(agent.isDone());
    }
    allSyncAgentsKnown() {
        this.madeAllAttachmentRequestsEnroller.seal();
    }
    registerExpectedTransfer(share, hash) {
        const promise = deferred();
        const key = `${share}_${hash}`;
        this.expectedTransferPromises.set(key, promise);
        this.receivedAllExpectedTransfersEnroller.enrol(promise);
    }
    allTransfersRequested() {
        this.receivedAllExpectedTransfersEnroller.seal();
    }
    async queueTransfer(transfer) {
        if (this.queue.hasQueuedTransfer(transfer.hash, transfer.kind)) {
            return;
        }
        await this.queue.addTransfer(transfer);
    }
    async handleDownload(doc, replica) {
        const format = this.formatsLookup[doc.format];
        const attachmentInfo = format.getAttachmentInfo(doc);
        if (isErr(attachmentInfo)) {
            throw new EarthstarError("TransferManager: attempted to download doc with no attachment.");
        }
        const result = await this.partner.getDownload({
            doc,
            shareAddress: replica.share,
            syncerId: await this.otherSyncerId,
            attachmentHash: attachmentInfo.hash
        });
        if (result === undefined) {
            return false;
        }
        const transfer = new AttachmentTransfer({
            replica,
            doc,
            format,
            stream: result,
            requester: "us"
        });
        await this.queueTransfer(transfer);
        return true;
    }
    async handleUpload(transferOpts, replica) {
        const result = await this.partner.handleUploadRequest({
            shareAddress: transferOpts.shareAddress,
            syncerId: await this.otherSyncerId,
            doc: transferOpts.doc,
            attachmentHash: transferOpts.attachmentHash
        });
        if (result === undefined) {
            return false;
        }
        const format = this.formatsLookup[transferOpts.doc.format];
        try {
            const transfer = new AttachmentTransfer({
                doc: transferOpts.doc,
                format,
                replica,
                stream: result,
                requester: "them"
            });
            await this.queueTransfer(transfer);
        } catch  {
            return false;
        }
        return true;
    }
    async handleTransferRequest({ replica , path , author , source , kind , formatName  }) {
        const stream = await this.partner.handleTransferRequest(source, kind);
        if (stream === undefined) {
            return;
        }
        const format = getFormatLookup(this.formats)[formatName];
        if (!format) {
            return;
        }
        const docs = await replica.getAllDocsAtPath(path, [
            format
        ]);
        const doc = docs.find((doc)=>doc.author === author);
        if (!doc) {
            return;
        }
        const transfer = new AttachmentTransfer({
            doc: doc,
            format,
            replica,
            stream,
            requester: kind === "upload" ? "us" : "them"
        });
        if (transfer.requester === "us") {
            const key = `${transfer.share}_${transfer.hash}`;
            const promise = this.expectedTransferPromises.get(key);
            if (promise) {
                promise.resolve();
            }
        }
        await this.queueTransfer(transfer);
    }
    cancel() {
        this.queue.cancel();
    }
    getReport() {
        return this.queue.getReport();
    }
    onReportUpdate(cb) {
        return this.reportDidUpdateBus.on(cb);
    }
    transfersRequestedByUsFinished() {
        return this.queue.transfersRequestedByUsFinished();
    }
    registerOtherSyncerId(id) {
        this.otherSyncerId.resolve(id);
    }
}
class Syncer {
    peer;
    id = randomId();
    partner;
    outgoingEventBus = new BlockingBus();
    syncAgents = new Map();
    mode;
    incomingStreamCloner = new CloneStream();
    statusBus = new BlockingBus();
    agentStreamSplitter = new StreamSplitter((chunk)=>{
        if (chunk.kind === "DISCLOSE" || chunk.kind === "SYNCER_FULFILLED" || chunk.kind === "HEARTBEAT") {
            return;
        }
        return chunk.to;
    });
    formats;
    transferManager;
    partnerIsFulfilled = deferred();
    isDoneMultiDeferred = new MultiDeferred();
    heartbeatInterval;
    constructor(opts){
        const { outgoingEventBus  } = this;
        const handleIncomingEvent = this.handleIncomingEvent.bind(this);
        this.peer = opts.peer;
        this.mode = opts.mode;
        this.formats = getFormatsWithFallback(opts.formats);
        this.partner = opts.partner;
        this.transferManager = new TransferManager({
            partner: this.partner,
            formats: this.formats
        });
        this.transferManager.onReportUpdate(async ()=>{
            await this.statusBus.send(this.getStatus());
        });
        this.heartbeatInterval = setInterval(()=>{
            this.outgoingEventBus.send({
                kind: "HEARTBEAT"
            });
        }, 1000);
        const outgoingStream = new ReadableStream({
            start (controller) {
                outgoingEventBus.on((event)=>{
                    if (event.kind === "CMD_FINISHED") {
                        controller.close();
                        return;
                    }
                    controller.enqueue(event);
                });
            }
        });
        outgoingStream.pipeTo(opts.partner.writable).catch(()=>{});
        opts.partner.readable.pipeTo(this.incomingStreamCloner.writable).catch((err)=>{
            this.cancel(err);
        });
        const incomingClone = this.incomingStreamCloner.getReadableStream();
        incomingClone.pipeTo(new WritableStream({
            async write (event) {
                await handleIncomingEvent(event);
            }
        })).catch((err)=>{
            this.cancel(err);
        });
        const incomingCloneForAgents = this.incomingStreamCloner.getReadableStream();
        incomingCloneForAgents.pipeTo(this.agentStreamSplitter.writable).catch((err)=>{
            this.cancel(err);
        });
        const salt = randomId();
        Promise.all(this.peer.shares().map((ws)=>saltAndHashShare(salt, ws))).then((saltedShares)=>{
            outgoingEventBus.send({
                kind: "DISCLOSE",
                salt,
                syncerId: this.id,
                shares: saltedShares,
                formats: this.formats ? this.formats.map((f)=>f.id) : [
                    FormatEs5.id
                ]
            });
        });
        this.transferManager.transfersRequestedByUsFinished().then(async ()=>{
            await this.outgoingEventBus.send({
                kind: "SYNCER_FULFILLED"
            });
        });
        this.partnerIsFulfilled.then(async ()=>{
            await this.transferManager.transfersRequestedByUsFinished();
            clearInterval(this.heartbeatInterval);
            await this.outgoingEventBus.send({
                kind: "CMD_FINISHED"
            });
            this.isDoneMultiDeferred.resolve();
        });
    }
    addShare(address, formats) {
        if (this.syncAgents.has(address)) {
            return;
        }
        const replica = this.peer.getReplica(address);
        if (!replica) {
            console.error("Couldn't get the replica for a share we had in common.");
            return;
        }
        const agent = new SyncAgent({
            replica,
            mode: this.mode === "once" ? "only_existing" : "live",
            formats,
            transferManager: this.transferManager
        });
        agent.onStatusUpdate(()=>{
            this.statusBus.send(this.getStatus());
        });
        this.syncAgents.set(address, agent);
        const { outgoingEventBus  } = this;
        agent.readable.pipeTo(new WritableStream({
            async write (event) {
                await outgoingEventBus.send({
                    ...event,
                    to: replica.share
                });
            }
        })).then(()=>{});
        const incomingFilteredEvents = this.agentStreamSplitter.getReadable(replica.share);
        incomingFilteredEvents.pipeThrough(new TransformStream({
            transform (event, controller) {
                switch(event.kind){
                    case "DISCLOSE":
                    case "SYNCER_FULFILLED":
                    case "HEARTBEAT":
                        break;
                    default:
                        {
                            if (event.to === replica.share) {
                                const { to: _to , ...agentEvent } = event;
                                controller.enqueue(agentEvent);
                                break;
                            }
                        }
                }
            }
        })).pipeTo(agent.writable).catch((err)=>{
            this.cancel(err);
        });
        this.transferManager.registerSyncAgent(agent);
    }
    async handleIncomingEvent(event) {
        switch(event.kind){
            case "DISCLOSE":
                {
                    const intersectingFormats = getFormatIntersection(event.formats, this.formats);
                    if (intersectingFormats.length === 0) {
                        break;
                    }
                    const serverSaltedSet = new Set(event.shares);
                    const commonShareSet = new Set();
                    for (const plainWs of this.peer.shares()){
                        const saltedWs = await saltAndHashShare(event.salt, plainWs);
                        if (serverSaltedSet.has(saltedWs)) {
                            commonShareSet.add(plainWs);
                        }
                    }
                    for (const share of commonShareSet){
                        this.addShare(share, intersectingFormats);
                    }
                    this.transferManager.registerOtherSyncerId(event.syncerId);
                    this.transferManager.allSyncAgentsKnown();
                    if (commonShareSet.size === 0 && this.mode === "once") {
                        this.outgoingEventBus.send({
                            "kind": "SYNCER_FULFILLED"
                        });
                    }
                    break;
                }
            case "SYNCER_FULFILLED":
                {
                    this.partnerIsFulfilled.resolve();
                }
        }
    }
    getStatus() {
        const status = {};
        for (const [shareAddr, agent] of this.syncAgents){
            status[shareAddr] = {
                docs: agent.getStatus(),
                attachments: this.transferManager.getReport()[shareAddr] || []
            };
        }
        return status;
    }
    onStatusChange(callback) {
        return this.statusBus.on(callback);
    }
    async cancel(reason) {
        this.isDoneMultiDeferred.reject(reason);
        for (const [_addr, agent] of this.syncAgents){
            await agent.cancel();
        }
        clearInterval(this.heartbeatInterval);
        this.transferManager.cancel();
    }
    handleTransferRequest({ shareAddress , path , author , source , kind , formatName  }) {
        const replica = this.peer.getReplica(shareAddress);
        if (!replica) {
            return;
        }
        return this.transferManager.handleTransferRequest({
            replica,
            author,
            formatName,
            kind,
            path,
            source
        });
    }
    isDone() {
        return this.isDoneMultiDeferred.getPromise();
    }
}
function saltAndHashShare(salt, share) {
    return Crypto.sha256base32(salt + share + salt);
}
export { Syncer as Syncer };
class PartnerLocal {
    readable;
    writable;
    concurrentTransfers = 1024;
    incomingEventBus = new BlockingBus();
    outgoingEventBus = new BlockingBus();
    partnerPeer;
    partnerSyncer;
    constructor(peer, peerSelf, mode, formats){
        this.partnerPeer = peer;
        const { incomingEventBus , outgoingEventBus  } = this;
        this.readable = new ReadableStream({
            start (controller) {
                outgoingEventBus.on((event)=>{
                    controller.enqueue(event);
                });
            }
        });
        this.writable = new WritableStream({
            async write (event) {
                await incomingEventBus.send(event);
            }
        });
        this.partnerSyncer = new Syncer({
            peer,
            formats,
            partner: {
                writable: new WritableStream({
                    async write (event) {
                        await outgoingEventBus.send(event);
                    }
                }),
                readable: new ReadableStream({
                    start (controller) {
                        incomingEventBus.on((event)=>{
                            controller.enqueue(event);
                        });
                    }
                }),
                concurrentTransfers: 1024,
                async getDownload (opts) {
                    const partnerReplica = peerSelf.getReplica(opts.shareAddress);
                    if (!partnerReplica) {
                        throw new ValidationError("Tried to get a receiving transfer for an unknown share.");
                    }
                    const attachment = await partnerReplica.replicaDriver.attachmentDriver.getAttachment(opts.doc.format, opts.attachmentHash);
                    if (!attachment) {
                        return undefined;
                    }
                    if (isErr(attachment)) {
                        return;
                    }
                    return await attachment.stream();
                },
                handleUploadRequest (_opts) {
                    return Promise.resolve(undefined);
                },
                handleTransferRequest (_source, _kind) {
                    return Promise.resolve(undefined);
                }
            },
            mode
        });
    }
    async getDownload(opts) {
        const partnerReplica = this.partnerPeer.getReplica(opts.shareAddress);
        if (!partnerReplica) {
            throw new ValidationError("Tried to get a receiving transfer for an unknown share.");
        }
        const attachment = await partnerReplica.replicaDriver.attachmentDriver.getAttachment(opts.doc.format, opts.attachmentHash);
        if (!attachment) {
            return undefined;
        }
        if (isErr(attachment)) {
            return;
        }
        return await attachment.stream();
    }
    handleUploadRequest(_opts) {
        return Promise.resolve(undefined);
    }
    handleTransferRequest(_source, _kind) {
        return Promise.resolve(undefined);
    }
}
export { PartnerLocal as PartnerLocal };
class PartnerWebClient {
    readable;
    writable;
    concurrentTransfers = 16;
    isSecure;
    wsUrl;
    constructor(opts){
        const url = new URL(opts.url);
        const hostAndPath = `${url.host}${url.pathname === "/" ? "" : url.pathname}`;
        this.isSecure = url.protocol === "https:" || url.protocol === "wss:";
        this.wsUrl = `${this.isSecure ? "wss://" : "ws://"}${hostAndPath}/'`;
        const urlWithMode = new URL(opts.mode, this.wsUrl);
        const socket = new WebSocket(urlWithMode.toString());
        this.writable = websocketWritable(socket, (outgoing)=>JSON.stringify(outgoing));
        this.readable = websocketReadable(socket, (incoming)=>JSON.parse(incoming.data.toString()));
    }
    getDownload(opts) {
        const url = new URL(`${opts.syncerId}/download/${opts.shareAddress}/${opts.doc.format}/${opts.doc.author}${opts.doc.path}`, this.wsUrl);
        const readable = websocketReadable(url.toString(), (event)=>{
            if (event.data instanceof ArrayBuffer) {
                const bytes = new Uint8Array(event.data);
                return bytes;
            }
            return null;
        });
        return Promise.resolve(readable);
    }
    handleUploadRequest(opts) {
        const url = new URL(`${opts.syncerId}/upload/${opts.shareAddress}/${opts.doc.format}/${opts.doc.author}${opts.doc.path}`, this.wsUrl);
        const writable = websocketWritable(url.toString(), (outgoing)=>outgoing);
        return Promise.resolve(writable);
    }
    handleTransferRequest(_source, _kind) {
        return Promise.resolve(undefined);
    }
}
export { PartnerWebClient as PartnerWebClient };
const logger3 = new Logger("peer", "orangeRed");
const J3 = JSON.stringify;
class Peer {
    replicaEventBus = new BlockingBus();
    replicaMap = new Map();
    constructor(){
        logger3.debug("constructor");
    }
    hasShare(share) {
        return this.replicaMap.has(share);
    }
    shares() {
        const keys = [
            ...this.replicaMap.keys()
        ];
        keys.sort();
        return keys;
    }
    replicas() {
        const keys = [
            ...this.replicaMap.keys()
        ];
        keys.sort();
        return keys.map((key)=>this.replicaMap.get(key));
    }
    size() {
        return this.replicaMap.size;
    }
    getReplica(ws) {
        return this.replicaMap.get(ws);
    }
    async addReplica(replica) {
        logger3.debug(`addReplica(${J3(replica.share)})`);
        if (this.replicaMap.has(replica.share)) {
            logger3.debug(`already had a replica with that share`);
            throw new Error(`Peer.addReplica: already has a replica with share ${J3(replica.share)}.  Don't add another one.`);
        }
        this.replicaMap.set(replica.share, replica);
        await this.replicaEventBus.send(this.replicaMap);
        logger3.debug(`    ...addReplica: done`);
    }
    async removeReplicaByShare(share) {
        logger3.debug(`removeReplicaByShare(${J3(share)})`);
        this.replicaMap.delete(share);
        await this.replicaEventBus.send(this.replicaMap);
    }
    async removeReplica(replica) {
        const existingReplica = this.replicaMap.get(replica.share);
        if (replica === existingReplica) {
            logger3.debug(`removeReplica(${J3(replica.share)})`);
            await this.removeReplicaByShare(replica.share);
        } else {
            logger3.debug(`removeReplica(${J3(replica.share)}) -- same share but it's a different instance now; ignoring`);
        }
    }
    sync(target, live = false, formats) {
        try {
            const partner = new PartnerWebClient({
                url: target,
                mode: live ? "live" : "once"
            });
            const syncer = new Syncer({
                partner,
                mode: live ? "live" : "once",
                peer: this,
                formats
            });
            return syncer;
        } catch  {
            if (target instanceof Peer) {
                const syncer1 = new Syncer({
                    peer: this,
                    partner: new PartnerLocal(target, this, live ? "live" : "once", formats),
                    mode: live ? "live" : "once",
                    formats
                });
                return syncer1;
            }
            console.error("Provided an invalid target for syncing to a peer:", target);
            return undefined;
        }
    }
    onReplicasChange(callback) {
        return this.replicaEventBus.on(callback);
    }
}
export { Peer as Peer };
const DEFAULT_QUERY = {
    historyMode: "latest",
    orderBy: "path ASC",
    startAfter: undefined,
    limit: undefined,
    filter: undefined,
    formats: [
        "es.5"
    ]
};
export { DEFAULT_QUERY as DEFAULT_QUERY };
const logger4 = new Logger("query", "green");
function cleanUpQuery(inputQuery) {
    const query = {
        ...DEFAULT_QUERY,
        ...inputQuery
    };
    const invalidResponse = {
        query: {
            limit: 0
        },
        isValid: false,
        willMatch: "nothing"
    };
    if (query.limit !== undefined && query.limit < 0) {
        logger4.debug("cleanUpQuery: unreasonable limit - returning empty invalid query", invalidResponse);
        return invalidResponse;
    }
    if (query.orderBy?.startsWith("path") && query.startAfter?.localIndex !== undefined) {
        logger4.debug('cleanUpQuery: orderBy is "path" but startAfter is not compatible - returning empty invalid query', invalidResponse);
        return invalidResponse;
    }
    if (query.orderBy?.startsWith("localIndex") && query.startAfter?.path !== undefined) {
        logger4.debug('cleanUpQuery: orderBy is "localIndex" but startAfter is not compatible - returning empty invalid query', invalidResponse);
        return invalidResponse;
    }
    if (query.historyMode !== undefined && query.historyMode !== "all" && query.historyMode !== "latest") {
        logger4.debug(`cleanUpQuery: unknown historyMode ${JSON.stringify(query.historyMode)} - returning empty invalid query`, invalidResponse);
        return invalidResponse;
    }
    if (query.orderBy !== undefined) {
        if ([
            "path ASC",
            "path DESC",
            "localIndex ASC",
            "localIndex DESC"
        ].indexOf(query.orderBy) === -1) {
            logger4.debug(`cleanUpQuery: unrecognized orderBy value ${JSON.stringify(query.orderBy)} - returning empty invalid query`, invalidResponse);
            return invalidResponse;
        }
    }
    let willMatch = query.historyMode === "all" ? "all" : "all-latest";
    if (query.filter !== undefined && !shallowEqualObjects(query.filter, {})) {
        willMatch = "some";
    }
    if (query.startAfter !== undefined && !shallowEqualObjects(query.startAfter, {})) {
        willMatch = "some";
    }
    if (query.limit !== undefined) {
        if (query.limit > 0) willMatch = "some";
        if (query.limit === 0) willMatch = "nothing";
    }
    if (query.filter !== undefined) {
        const filter = query.filter;
        if (filter.path && filter.pathStartsWith && !filter.path.startsWith(filter.pathStartsWith)) {
            willMatch = "nothing";
        }
        if (filter.path && filter.pathEndsWith && !filter.path.endsWith(filter.pathEndsWith)) {
            willMatch = "nothing";
        }
        if (filter.timestamp && filter.timestampGt && !(filter.timestamp > filter.timestampGt)) {
            willMatch = "nothing";
        }
        if (filter.timestamp && filter.timestampLt && !(filter.timestamp < filter.timestampLt)) {
            willMatch = "nothing";
        }
        if (filter.timestampGt && filter.timestampLt && !(filter.timestampLt + 1 < filter.timestampGt)) {
            willMatch = "nothing";
        }
    }
    if (willMatch === "nothing") {
        let nopQuery = {
            query: {
                limit: 0
            },
            isValid: true,
            willMatch: "nothing"
        };
        logger4.debug(`cleanUpQuery - this query will match nothing, so returning a simpler query that also matches nothing`, nopQuery);
        return nopQuery;
    }
    logger4.debug(`cleanUpQuery - query is ok!  willMatch = ${willMatch}`);
    return {
        query,
        isValid: true,
        willMatch
    };
}
function docMatchesFilter(doc, filter) {
    if (filter.path !== undefined && doc.path !== filter.path) return false;
    if (filter.pathStartsWith !== undefined && !doc.path.startsWith(filter.pathStartsWith)) {
        return false;
    }
    if (filter.pathEndsWith !== undefined && !doc.path.endsWith(filter.pathEndsWith)) {
        return false;
    }
    if (filter.author !== undefined && doc.author !== filter.author) {
        return false;
    }
    if (filter.timestamp !== undefined && doc.timestamp !== filter.timestamp) {
        return false;
    }
    if (filter.timestampGt !== undefined && !(doc.timestamp > filter.timestampGt)) {
        return false;
    }
    if (filter.timestampLt !== undefined && !(doc.timestamp < filter.timestampLt)) {
        return false;
    }
    return true;
}
function docIsExpired(doc, now) {
    if (doc.deleteAfter === null || doc.deleteAfter === undefined) {
        return false;
    }
    const nowToUse = now || Date.now() * 1000;
    return nowToUse > doc.deleteAfter;
}
export { cleanUpQuery as cleanUpQuery };
export { docMatchesFilter as docMatchesFilter };
export { docIsExpired as docIsExpired };
new Logger("query helpers", "gold");
const escapeRegex = /[.*+?^${}()|[\]\\]/g;
function escapeStringForRegex(s) {
    return s.replace(escapeRegex, "\\$&");
}
let _matchAll = (re, str)=>{
    if (re.flags.indexOf("g") === -1) {
        throw new TypeError('matchAll requires a regex with the "g" flag set');
    }
    let matches = [];
    let m;
    while((m = re.exec(str)) !== null){
        matches.push(m);
    }
    return matches;
};
let globToRegex = (glob, forceEntireMatch = true)=>{
    if (glob.indexOf("***") !== -1) {
        throw new ValidationError("invalid glob query has three stars in a row: " + glob);
    }
    let regex = replaceAll(glob, "**", ";");
    regex = replaceAll(regex, "*", "#");
    regex = escapeStringForRegex(regex);
    regex = replaceAll(regex, ";", ".*");
    regex = replaceAll(regex, "#", "[^/]*");
    if (forceEntireMatch) {
        regex = "^" + regex + "$";
    }
    return regex;
};
let globToQueryAndRegex = (glob)=>{
    if (glob.indexOf("*") === -1) {
        return {
            query: {
                filter: {
                    path: glob
                }
            },
            regex: null
        };
    }
    let globParts = glob.split("*");
    let firstPart = globParts[0];
    let lastPart = globParts[globParts.length - 1];
    let filter = {};
    let query = {};
    if (firstPart) filter.pathStartsWith = firstPart;
    if (lastPart) filter.pathEndsWith = lastPart;
    let regex = "?";
    if (globParts.length === 3) {
        let [a, b, c] = globParts;
        if (a === "" && b === "") regex = null;
        if (b === "" && c === "") regex = null;
    }
    if (regex === "?") {
        regex = globToRegex(glob);
    }
    if (!isObjectEmpty(filter)) {
        query.filter = filter;
    }
    return {
        query,
        regex
    };
};
async function queryByGlobAsync(replica, glob, moreQueryOptions = {}, formats) {
    let { query , regex  } = globToQueryAndRegex(glob);
    query = {
        ...query,
        ...moreQueryOptions
    };
    let docs = await replica.queryDocs(query, formats);
    if (regex !== null) {
        let re = new RegExp(regex);
        docs = docs.filter((doc)=>re.test(doc.path));
    }
    return docs;
}
function parseTemplate(template) {
    if (template.indexOf("}{") !== -1) {
        throw new ValidationError("template is not allowed to have to adjacent variables {like}{this}");
    }
    if (template.indexOf("*{") !== -1 || template.indexOf("}*") !== -1) {
        throw new ValidationError("template cannot have a star touching a variable *{likeThis}");
    }
    let numLBrackets = countChars(template, "{");
    let numRBrackets = countChars(template, "}");
    if (numLBrackets !== numRBrackets) {
        throw new ValidationError("unbalanced curly braces");
    }
    let bracketVarRe = /\{(.*?)\}/g;
    let validVarName = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    let varMatches = _matchAll(bracketVarRe, template);
    let varNames = varMatches.map((match)=>match[1]);
    for (let varName of varNames){
        if (!validVarName.test(varName)) {
            throw new ValidationError("variable name in template is not valid.  can only contain alphanumeric and underscore, and not start with number");
        }
    }
    if (numLBrackets !== varNames.length || numRBrackets !== varNames.length) {
        throw new ValidationError("weird curly brace mismatch, maybe }backwards{");
    }
    let varNamesSet = new Set(varNames);
    if (varNamesSet.size !== varNames.length) {
        throw new ValidationError("variable names may not be repeated");
    }
    let glob = template.replace(bracketVarRe, "*");
    let parts = [];
    if (varMatches.length === 0) {
        parts.push(globToRegex(template, false));
    }
    for(let ii = 0; ii < varMatches.length; ii++){
        let bracketMatch = varMatches[ii];
        let varName1 = bracketMatch[1];
        let matchStart = bracketMatch.index;
        let matchEnd = bracketMatch.index + bracketMatch[0].length;
        if (ii === 0) {
            let begin = template.slice(0, matchStart);
            parts.push(globToRegex(begin, false));
        }
        let reForThisVariable = "(?<" + varName1 + ">[^/]*)";
        parts.push(reForThisVariable);
        if (ii <= varMatches.length - 2) {
            let nextMatch = varMatches[ii + 1];
            let between = template.slice(matchEnd, nextMatch.index);
            parts.push(globToRegex(between, false));
        } else {
            let end = template.slice(matchEnd);
            parts.push(globToRegex(end, false));
        }
    }
    let namedCaptureRegex = "^" + parts.join("") + "$";
    return {
        template,
        varNames,
        glob,
        namedCaptureRegex
    };
}
let extractTemplateVariablesFromPathUsingRegex = (namedCaptureRegex, path)=>{
    const matches2 = path.match(new RegExp(namedCaptureRegex));
    if (matches2 === null) return null;
    return {
        ...matches2.groups
    };
};
let extractTemplateVariablesFromPath = (template, path)=>{
    if (template.indexOf("{") === -1 && template.indexOf("}") === -1) {
        return template === path ? {} : null;
    }
    let { namedCaptureRegex  } = parseTemplate(template);
    return extractTemplateVariablesFromPathUsingRegex(namedCaptureRegex, path);
};
let insertVariablesIntoTemplate = (vars, template)=>{
    for (let [varName, value] of Object.entries(vars)){
        template = template.replace("{" + varName + "}", value);
    }
    return template;
};
async function queryByTemplateAsync(replica, template, moreQueryOptions = {}, formats) {
    let { glob  } = parseTemplate(template);
    let { query , regex  } = globToQueryAndRegex(glob);
    query = {
        ...query,
        ...moreQueryOptions
    };
    let docs = await replica.queryDocs(query, formats);
    if (regex != null) {
        let re = new RegExp(regex);
        docs = docs.filter((doc)=>re.test(doc.path));
    }
    return docs;
}
export { escapeStringForRegex as escapeStringForRegex };
export { _matchAll as _matchAll };
export { globToRegex as globToRegex };
export { globToQueryAndRegex as globToQueryAndRegex };
export { queryByGlobAsync as queryByGlobAsync };
export { parseTemplate as parseTemplate };
export { extractTemplateVariablesFromPathUsingRegex as extractTemplateVariablesFromPathUsingRegex };
export { extractTemplateVariablesFromPath as extractTemplateVariablesFromPath };
export { insertVariablesIntoTemplate as insertVariablesIntoTemplate };
export { queryByTemplateAsync as queryByTemplateAsync };
var Cmp;
(function(Cmp) {
    Cmp[Cmp["LT"] = -1] = "LT";
    Cmp[Cmp["EQ"] = 0] = "EQ";
    Cmp[Cmp["GT"] = 1] = "GT";
})(Cmp || (Cmp = {}));
export { Cmp as Cmp };
function sortedInPlace(array) {
    array.sort();
    return array;
}
function compareBasic(a, b, order = "ASC") {
    if (Array.isArray(a) && shallowEqualArrays(a, b)) {
        return Cmp.EQ;
    }
    if (typeof a === "object" && shallowEqualObjects(a, b)) {
        return Cmp.EQ;
    }
    if (a === b) return Cmp.EQ;
    if (order === "ASC" || order === undefined) {
        return a < b ? Cmp.LT : Cmp.GT;
    } else if (order === "DESC") {
        return a > b ? Cmp.LT : Cmp.GT;
    } else {
        throw new Error("unexpected sort order to compareBasic: " + JSON.stringify(order));
    }
}
function compareArrays(a, b, sortOrders) {
    let minLen = Math.min(a.length, b.length);
    for(let ii = 0; ii < minLen; ii++){
        let sortOrder = sortOrders?.[ii] ?? "ASC";
        let elemCmp = compareBasic(a[ii], b[ii], sortOrder);
        if (elemCmp !== Cmp.EQ) return elemCmp;
    }
    if (a.length === b.length) return Cmp.EQ;
    let ii1 = Math.min(a.length, b.length);
    let sortOrder1 = sortOrders?.[ii1] ?? "ASC";
    return compareBasic(a.length, b.length, sortOrder1);
}
function compareByObjKey(key, sortOrder = "ASC") {
    return (a, b)=>compareBasic(a[key], b[key], sortOrder);
}
function compareByFn(fn) {
    return (a, b)=>compareBasic(fn(a), fn(b));
}
function compareByObjArrayFn(fn) {
    return (a, b)=>compareArrays(fn(a), fn(b));
}
export { sortedInPlace as sortedInPlace };
export { compareBasic as compareBasic };
export { compareArrays as compareArrays };
export { compareByObjKey as compareByObjKey };
export { compareByFn as compareByFn };
export { compareByObjArrayFn as compareByObjArrayFn };
const J4 = JSON.stringify;
const logger5 = new Logger("replica", "gold");
const loggerSet = new Logger("replica set", "gold");
const loggerIngest = new Logger("replica ingest", "gold");
function docCompareNewestFirst(a, b) {
    return compareArrays([
        a.timestamp,
        a.signature
    ], [
        b.timestamp,
        a.signature
    ], [
        "DESC",
        "ASC"
    ]);
}
class MultiformatReplica {
    replicaId;
    share;
    replicaDriver;
    formatsConfig;
    _isClosed = false;
    ingestLockStream = new LockStream();
    eventMultiStream = new ChannelMultiStream("kind", true);
    eventWriter;
    callbackSink = new CallbackSink();
    eraseInterval;
    expireEventTimeouts = new Map();
    constructor({ driver , config  }){
        const addressIsValidResult = checkShareIsValid(driver.docDriver.share);
        if (isErr(addressIsValidResult)) {
            throw addressIsValidResult;
        }
        logger5.debug(`constructor.  driver = ${driver?.constructor?.name}`);
        this.replicaId = "replica-" + randomId();
        this.share = driver.docDriver.share;
        this.replicaDriver = driver;
        this.formatsConfig = config || {};
        this.eventWriter = this.eventMultiStream.getWritableStream().getWriter();
        this.eventMultiStream.getReadableStream("*").pipeTo(new WritableStream(this.callbackSink));
        this.eraseInterval = setInterval(()=>{
            if (!this.isClosed()) {
                this.pruneExpiredDocsAndAttachments();
            } else {
                clearInterval(this.eraseInterval);
            }
        }, 1000 * 60 * 60);
    }
    isClosed() {
        return this._isClosed;
    }
    async close(erase) {
        logger5.debug("closing...");
        if (this._isClosed) throw new ReplicaIsClosedError();
        for (const timeout of this.expireEventTimeouts.values()){
            clearTimeout(timeout);
        }
        logger5.debug("    sending willClose blockingly...");
        await this.eventWriter.write({
            kind: "willClose"
        });
        logger5.debug("    marking self as closed...");
        if (erase === false) {
            await this.pruneExpiredDocsAndAttachments();
        }
        await this.replicaDriver.attachmentDriver.clearStaging();
        this._isClosed = true;
        logger5.debug(`    closing ReplicaDriver (erase = ${erase})...`);
        await this.replicaDriver.docDriver.close(erase);
        await this.replicaDriver.attachmentDriver.close(erase);
        logger5.debug("    sending didClose nonblockingly...");
        this.eventWriter.write({
            kind: "didClose"
        });
        logger5.debug("...closing done");
        clearInterval(this.eraseInterval);
        return Promise.resolve();
    }
    async getConfig(key) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        return await this.replicaDriver.docDriver.getConfig(key);
    }
    async setConfig(key, value) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        return await this.replicaDriver.docDriver.setConfig(key, value);
    }
    async listConfigKeys() {
        if (this._isClosed) throw new ReplicaIsClosedError();
        return await this.replicaDriver.docDriver.listConfigKeys();
    }
    async deleteConfig(key) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        return await this.replicaDriver.docDriver.deleteConfig(key);
    }
    getMaxLocalIndex() {
        if (this._isClosed) throw new ReplicaIsClosedError();
        return this.replicaDriver.docDriver.getMaxLocalIndex();
    }
    getAllDocs(formats) {
        logger5.debug(`getAllDocs()`);
        return this.queryDocs({
            historyMode: "all",
            orderBy: "path ASC"
        }, formats);
    }
    getLatestDocs(formats) {
        logger5.debug(`getLatestDocs()`);
        return this.queryDocs({
            historyMode: "latest",
            orderBy: "path ASC"
        }, formats);
    }
    getAllDocsAtPath(path, formats) {
        logger5.debug(`getAllDocsAtPath("${path}")`);
        return this.queryDocs({
            historyMode: "all",
            orderBy: "path ASC",
            filter: {
                path: path
            }
        }, formats);
    }
    async getLatestDocAtPath(path, format) {
        logger5.debug(`getLatestDocsAtPath("${path}")`);
        const docs = await this.queryDocs({
            historyMode: "latest",
            orderBy: "path ASC",
            filter: {
                path: path
            }
        }, format ? [
            format
        ] : undefined);
        if (docs.length === 0) return undefined;
        return docs[0];
    }
    async queryDocs(query = {}, formats) {
        logger5.debug(`queryDocs`, query);
        if (this._isClosed) throw new ReplicaIsClosedError();
        const f = getFormatsWithFallback(formats);
        return await this.replicaDriver.docDriver.queryDocs({
            ...query,
            formats: f.map((f)=>f.id)
        });
    }
    async queryPaths(query = {}, formats) {
        const docs = await this.queryDocs(query, formats);
        const pathsSet = new Set(docs.map(({ path  })=>path));
        return Array.from(pathsSet).sort();
    }
    async queryAuthors(query = {}, formats) {
        const docs = await this.queryDocs(query, formats);
        const authorsSet = new Set(docs.map(({ author  })=>author));
        return Array.from(authorsSet).sort();
    }
    async set(keypair, docToSet, format = FormatEs5) {
        loggerSet.debug(`set`, docToSet);
        if (this._isClosed) throw new ReplicaIsClosedError();
        loggerSet.debug("...deciding timestamp: getting latest doc at the same path (from any author)");
        const latestDocSamePath = await this.getLatestDocAtPath(docToSet.path);
        let timestamp;
        if (typeof docToSet.timestamp === "number") {
            timestamp = docToSet.timestamp;
        } else {
            if (latestDocSamePath === undefined) {
                timestamp = microsecondNow();
            } else {
                timestamp = Math.max(microsecondNow(), latestDocSamePath.timestamp + 1);
            }
        }
        loggerSet.debug("...generating doc");
        let cleanedDoc;
        if (latestDocSamePath) {
            const res = format.removeExtraFields(latestDocSamePath);
            if (!isErr(res)) {
                cleanedDoc = res.doc;
            }
        }
        const result = await format.generateDocument({
            keypair,
            input: {
                ...docToSet,
                format: format.id
            },
            share: this.share,
            timestamp,
            prevLatestDoc: cleanedDoc,
            config: this.formatsConfig[format.id]
        });
        if (isErr(result)) {
            return {
                kind: "failure",
                reason: "invalid_document",
                err: result
            };
        }
        loggerSet.debug("...signature =", result.doc.signature);
        if (result.attachment) {
            const stageResult = await this.replicaDriver.attachmentDriver.stage(format.id, result.attachment);
            if (isErr(stageResult)) {
                return {
                    kind: "failure",
                    reason: `invalid_document`,
                    err: stageResult
                };
            }
            const updatedDocRes = await format.updateAttachmentFields(keypair, result.doc, stageResult.size, stageResult.hash, this.formatsConfig[format.id]);
            if (isErr(updatedDocRes)) {
                await stageResult.reject();
                return {
                    kind: "failure",
                    reason: `invalid_document`,
                    err: updatedDocRes
                };
            }
            loggerSet.debug("...ingesting attachment");
            loggerSet.debug("-----------------------");
            await stageResult.commit();
            await this.eventWriter.write({
                kind: "attachment_ingest",
                doc: updatedDocRes,
                hash: stageResult.hash,
                size: stageResult.size
            });
            loggerSet.debug("...done ingesting attachment");
            loggerSet.debug("...ingesting");
            loggerSet.debug("-----------------------");
            const ingestEvent = await this.ingest(format, updatedDocRes);
            loggerSet.debug("...done ingesting");
            loggerSet.debug("...set is done.");
            return ingestEvent;
        }
        loggerSet.debug("...ingesting");
        loggerSet.debug("-----------------------");
        const ingestResult = await this.ingest(format, result.doc);
        loggerSet.debug("...done ingesting");
        loggerSet.debug("...set is done.");
        return ingestResult;
    }
    async ingest(format, docToIngest) {
        loggerIngest.debug(`ingest`, docToIngest);
        if (this._isClosed) throw new ReplicaIsClosedError();
        loggerIngest.debug("...removing extra fields");
        const removeResultsOrErr = format.removeExtraFields(docToIngest);
        if (isErr(removeResultsOrErr)) {
            return {
                kind: "failure",
                reason: "invalid_document",
                err: removeResultsOrErr
            };
        }
        docToIngest = removeResultsOrErr.doc;
        const extraFields = removeResultsOrErr.extras;
        if (Object.keys(extraFields).length > 0) {
            loggerIngest.debug(`...extra fields found: ${J4(extraFields)}`);
        }
        const docIsValid = await format.checkDocumentIsValid(docToIngest);
        if (isErr(docIsValid)) {
            return {
                kind: "failure",
                reason: "invalid_document",
                err: docIsValid
            };
        }
        const ingestPromise = deferred();
        await this.ingestLockStream.run(async ()=>{
            loggerIngest.debug(" >> ingest: start of protected region");
            loggerIngest.debug("  > getting other history docs at the same path by any author");
            const existingDocsSamePath = await this.getAllDocsAtPath(docToIngest.path, [
                format
            ]);
            loggerIngest.debug(`  > ...got ${existingDocsSamePath.length}`);
            loggerIngest.debug("  > getting prevLatest and prevSameAuthor");
            const prevLatest = existingDocsSamePath[0] ?? null;
            const prevSameAuthor = existingDocsSamePath.filter((d)=>d.author === docToIngest.author)[0] ?? null;
            loggerIngest.debug("  > checking if new doc is latest at this path");
            existingDocsSamePath.push(docToIngest);
            existingDocsSamePath.sort(docCompareNewestFirst);
            const isLatest = existingDocsSamePath[0] === docToIngest;
            loggerIngest.debug(`  > ...isLatest: ${isLatest}`);
            if (!isLatest && prevSameAuthor !== null) {
                loggerIngest.debug("  > new doc is not latest and there is another one from the same author...");
                const docComp = docCompareNewestFirst(docToIngest, prevSameAuthor);
                if (docComp === Cmp.GT) {
                    loggerIngest.debug("  > new doc is GT prevSameAuthor, so it is obsolete");
                    ingestPromise.resolve({
                        kind: "nothing_happened",
                        reason: "obsolete_from_same_author",
                        doc: docToIngest
                    });
                    return;
                }
                if (docComp === Cmp.EQ) {
                    loggerIngest.debug("  > new doc is EQ prevSameAuthor, so it is redundant (already_had_it)");
                    ingestPromise.resolve({
                        kind: "nothing_happened",
                        reason: "already_had_it",
                        doc: docToIngest
                    });
                    return;
                }
            }
            loggerIngest.debug("  > upserting into ReplicaDriver...");
            const docAsWritten = await this.replicaDriver.docDriver.upsert(docToIngest);
            loggerIngest.debug("  > ...done upserting into ReplicaDriver");
            loggerIngest.debug("  > ...getting ReplicaDriver maxLocalIndex...");
            const maxLocalIndex = await this.replicaDriver.docDriver.getMaxLocalIndex();
            loggerIngest.debug(" >> ingest: end of protected region, returning a WriteEvent from the lock");
            ingestPromise.resolve({
                kind: "success",
                maxLocalIndex,
                doc: docAsWritten,
                docIsLatest: isLatest,
                prevDocFromSameAuthor: prevSameAuthor,
                prevLatestDoc: prevLatest
            });
            await this.eventWriter.write({
                kind: "success",
                maxLocalIndex,
                doc: docAsWritten,
                docIsLatest: isLatest,
                prevDocFromSameAuthor: prevSameAuthor,
                prevLatestDoc: prevLatest
            });
            if (docAsWritten.deleteAfter) {
                const key = `${docAsWritten.path}|${docAsWritten.author}`;
                const existingTimeout = this.expireEventTimeouts.get(key);
                if (existingTimeout) {
                    clearTimeout(existingTimeout);
                }
                const waitFor = docAsWritten.deleteAfter / 1000 - Date.now();
                this.expireEventTimeouts.set(key, setTimeout(()=>{
                    this.eventWriter.write({
                        kind: "expire",
                        doc: docAsWritten
                    });
                }, waitFor));
            }
        });
        return ingestPromise;
    }
    async overwriteAllDocsByAuthor(keypair, format) {
        const f = getFormatWithFallback(format);
        logger5.debug(`overwriteAllDocsByAuthor("${keypair.address}")`);
        if (this._isClosed) throw new ReplicaIsClosedError();
        const docsToOverwrite = await this.queryDocs({
            filter: {
                author: keypair.address
            },
            historyMode: "all"
        }, [
            f
        ]);
        logger5.debug(`    ...found ${docsToOverwrite.length} docs to overwrite`);
        let numOverwritten = 0;
        let numAlreadyEmpty = 0;
        for (const doc of docsToOverwrite){
            const didWipe = await this.wipeDocument(keypair, doc, getFormatWithFallback(format));
            if (isErr(didWipe)) {
                return didWipe;
            } else {
                numOverwritten += 1;
            }
        }
        logger5.debug(`    ...done; ${numOverwritten} overwritten to be empty; ${numAlreadyEmpty} were already empty; out of total ${docsToOverwrite.length} docs`);
        return numOverwritten;
    }
    async wipeDocAtPath(keypair, path, format = FormatEs5) {
        const latestDocAtPath = await this.getLatestDocAtPath(path, format);
        if (!latestDocAtPath) {
            return new ValidationError("No document exists at that path");
        }
        return this.wipeDocument(keypair, latestDocAtPath, format);
    }
    async wipeDocument(keypair, doc, format) {
        const docToWipe = {
            ...doc,
            timestamp: Math.max(doc.timestamp + 1, Date.now() * 1000),
            author: keypair.address
        };
        const wipedDoc = await format.wipeDocument(keypair, docToWipe, this.formatsConfig[format.id]);
        if (isErr(wipedDoc)) {
            return {
                kind: "failure",
                err: wipedDoc,
                reason: "invalid_document"
            };
        }
        const didIngest = await this.ingest(format, wipedDoc);
        if (didIngest.kind === "success") {
            const attachmentInfo = format.getAttachmentInfo(doc);
            if (!isErr(attachmentInfo)) {
                const eraseRes = await this.replicaDriver.attachmentDriver.erase(format.id, attachmentInfo.hash);
                if (!isErr(eraseRes)) {
                    await this.eventWriter.write({
                        kind: "attachment_prune",
                        format: format.id,
                        hash: attachmentInfo.hash
                    });
                }
            }
        }
        return didIngest;
    }
    async pruneExpiredDocsAndAttachments(formats = DEFAULT_FORMATS) {
        const erasedDocs = await this.replicaDriver.docDriver.eraseExpiredDocs();
        for (const doc of erasedDocs){
            await this.eventWriter.write({
                kind: "expire",
                doc
            });
        }
        const formatLookup = getFormatLookup(formats);
        const allowedHashes = {};
        await this.getQueryStream({
            historyMode: "all",
            orderBy: "localIndex ASC"
        }, "existing", formats).pipeTo(new WritableStream({
            write (event) {
                if (event.kind === "existing") {
                    const format = formatLookup[event.doc.format];
                    const attachmentInfo = format.getAttachmentInfo(event.doc);
                    if (!isErr(attachmentInfo)) {
                        const maybeExistingSet = allowedHashes[format.id];
                        if (maybeExistingSet) {
                            maybeExistingSet.add(attachmentInfo.hash);
                        } else {
                            allowedHashes[format.id] = new Set([
                                attachmentInfo.hash
                            ]);
                        }
                    }
                }
            }
        }));
        const erasedAttachments = await this.replicaDriver.attachmentDriver.filter(allowedHashes);
        for (const attachment of erasedAttachments){
            await this.eventWriter.write({
                kind: "attachment_prune",
                format: attachment.format,
                hash: attachment.hash
            });
        }
    }
    getEventStream(channel = "*") {
        return this.eventMultiStream.getReadableStream(channel);
    }
    getQueryStream(query = {}, mode, formats) {
        const queryDocs = this.queryDocs.bind(this);
        const getEventStream = this.getEventStream.bind(this);
        return new ReadableStream({
            async start (controller) {
                if (mode === "existing" || mode === "everything") {
                    const docs = await queryDocs(query, formats);
                    for (const doc of docs){
                        controller.enqueue({
                            kind: "existing",
                            doc: doc
                        });
                    }
                }
                controller.enqueue({
                    kind: "processed_all_existing"
                });
                if (mode === "existing") {
                    controller.close();
                    return;
                }
                const eventStream = getEventStream();
                const reader = eventStream.getReader();
                while(true){
                    const { done , value: event  } = await reader.read();
                    if (done) return;
                    if (event.kind === "expire" || event.kind === "success") {
                        if (query.filter) {
                            if (docMatchesFilter(event.doc, query.filter)) {
                                controller.enqueue(event);
                                continue;
                            }
                        }
                        controller.enqueue(event);
                        continue;
                    }
                }
            }
        });
    }
    onEvent(callback) {
        return this.callbackSink.onWrite(callback);
    }
    async ingestAttachment(format, doc, attachment) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        const removeResultsOrErr = format.removeExtraFields(doc);
        if (isErr(removeResultsOrErr)) {
            return Promise.resolve(removeResultsOrErr);
        }
        doc = removeResultsOrErr.doc;
        const docIsValid = await format.checkDocumentIsValid(doc);
        if (isErr(docIsValid)) {
            return Promise.resolve(docIsValid);
        }
        const existingAttachment = await this.getAttachment(doc, format);
        if (existingAttachment && !isErr(existingAttachment)) {
            return false;
        }
        const attachmentInfo = format.getAttachmentInfo(doc);
        if (isErr(attachmentInfo)) {
            return Promise.resolve(attachmentInfo);
        }
        const stageRes = await this.replicaDriver.attachmentDriver.stage(doc.format, attachment);
        if (isErr(stageRes)) {
            return stageRes;
        }
        if (stageRes.hash !== attachmentInfo.hash) {
            await stageRes.reject();
            return new ValidationError("Attachment's hash did not match the document's");
        }
        if (stageRes.size !== attachmentInfo.size) {
            await stageRes.reject();
            return new ValidationError("Attachment's size did not match the document's");
        }
        await stageRes.commit();
        await this.eventWriter.write({
            kind: "attachment_ingest",
            doc,
            hash: stageRes.hash,
            size: stageRes.size
        });
        return true;
    }
    getAttachment(doc, format = FormatEs5) {
        if (doc.deleteAfter && doc.deleteAfter < Date.now() * 1000) {
            return Promise.resolve(new ValidationError("This document has expired"));
        }
        const attachmentInfo = format.getAttachmentInfo(doc);
        if (!isErr(attachmentInfo)) {
            return this.replicaDriver.attachmentDriver.getAttachment(doc.format, attachmentInfo.hash);
        } else {
            return Promise.resolve(attachmentInfo);
        }
    }
    addAttachments(docs, formats) {
        const f = getFormatsWithFallback(formats);
        const formatLookup = {};
        for (const format of f){
            formatLookup[format.id] = format;
        }
        const promises = docs.map((doc)=>{
            return new Promise((resolve)=>{
                const format = formatLookup[doc.format];
                const attachmentInfo = format.getAttachmentInfo(doc);
                if (!isErr(attachmentInfo)) {
                    this.replicaDriver.attachmentDriver.getAttachment(doc.format, attachmentInfo.hash).then((attachment)=>{
                        resolve({
                            ...doc,
                            attachment
                        });
                    });
                } else {
                    return resolve({
                        ...doc,
                        attachment: attachmentInfo
                    });
                }
            });
        });
        return Promise.all(promises);
    }
}
export { MultiformatReplica as MultiformatReplica };
class Replica extends MultiformatReplica {
    constructor(opts){
        super({
            driver: opts.driver,
            config: {
                "es.5": {
                    shareSecret: opts.shareSecret
                }
            }
        });
    }
}
export { Replica as Replica };
const logger6 = new Logger("replica-cache", "green");
function justLocalIndex({ _localIndex  }) {
    return _localIndex;
}
function sortAndLimit(query, docs) {
    const filteredDocs = [];
    for (const doc of docs){
        if (query.orderBy === "path ASC") {
            if (query.startAfter !== undefined) {
                if (query.startAfter.path !== undefined && doc.path <= query.startAfter.path) {
                    continue;
                }
            }
        }
        if (query.orderBy === "path DESC") {
            if (query.startAfter !== undefined) {
                if (query.startAfter.path !== undefined && doc.path >= query.startAfter.path) {
                    continue;
                }
            }
        }
        if (query.orderBy === "localIndex ASC") {
            if (query.startAfter !== undefined) {
                if (query.startAfter.localIndex !== undefined && (doc._localIndex || 0) <= query.startAfter.localIndex) {
                    continue;
                }
            }
        }
        if (query.orderBy === "localIndex DESC") {
            if (query.startAfter !== undefined) {
                if (query.startAfter.localIndex !== undefined && (doc._localIndex || 0) >= query.startAfter.localIndex) {
                    continue;
                }
            }
        }
        filteredDocs.push(doc);
        if (query.limit !== undefined && filteredDocs.length >= query.limit) {
            break;
        }
    }
    return filteredDocs;
}
class ReplicaCache {
    version = 0;
    replica;
    docCache = new Map();
    timeToLive;
    onCacheUpdatedCallbacks = new Set();
    closed = false;
    onFireCacheUpdatedsWrapper = (cb)=>cb();
    constructor(replica, timeToLive, onCacheUpdatedWrapper){
        this.replica = replica;
        this.timeToLive = timeToLive || 1000;
        if (onCacheUpdatedWrapper) {
            this.onFireCacheUpdatedsWrapper = onCacheUpdatedWrapper;
        }
        const onReplicaEvent = this.onReplicaEvent.bind(this);
        this.replica.getEventStream("*").pipeTo(new WritableStream({
            write (event) {
                if (event.kind === "attachment_ingest" || event.kind === "success" || event.kind === "expire") {
                    onReplicaEvent(event);
                }
            }
        })).catch(()=>{});
    }
    async close() {
        if (this.closed) throw new ReplicaCacheIsClosedError();
        this.closed = true;
        await Promise.all(Array.from(this.docCache.values()).map((entry)=>entry.close()));
        this.docCache.clear();
        this.onCacheUpdatedCallbacks.clear();
    }
    isClosed() {
        return this.closed;
    }
    getAllDocs(formats) {
        return this.queryDocs({
            historyMode: "all",
            orderBy: "path DESC"
        }, formats);
    }
    getLatestDocs(formats) {
        return this.queryDocs({
            historyMode: "latest",
            orderBy: "path DESC"
        }, formats);
    }
    getAllDocsAtPath(path, formats) {
        return this.queryDocs({
            historyMode: "all",
            orderBy: "path DESC",
            filter: {
                path: path
            }
        }, formats);
    }
    getLatestDocAtPath(path, format) {
        const docs = this.queryDocs({
            historyMode: "latest",
            orderBy: "path DESC",
            filter: {
                path: path
            }
        }, format ? [
            format
        ] : undefined);
        if (docs.length === 0) {
            return undefined;
        }
        return docs[0];
    }
    queryDocs(query = {}, formats) {
        if (this.closed) throw new ReplicaCacheIsClosedError();
        if (this.replica.isClosed()) {
            throw new ReplicaIsClosedError();
        }
        const f = formats ? formats : DEFAULT_FORMATS;
        const queryWithFormats = {
            ...query,
            formats: f.map((f)=>f.id)
        };
        const cleanUpQueryResult = cleanUpQuery(queryWithFormats);
        if (cleanUpQueryResult.willMatch === "nothing") {
            return [];
        }
        const queryString = C(cleanUpQueryResult.query);
        const cachedResult = this.docCache.get(queryString);
        if (cachedResult) {
            if (Date.now() > cachedResult.expires) {
                this.replica.queryDocs(query, formats).then((docs)=>{
                    const localIndexes = docs.map(justLocalIndex).sort();
                    const cacheLocalIndexes = cachedResult.docs.map(justLocalIndex).sort();
                    if (shallowEqualArrays(localIndexes, cacheLocalIndexes)) {
                        return;
                    }
                    this.docCache.set(queryString, {
                        stream: cachedResult.stream,
                        close: cachedResult.close,
                        docs: docs,
                        expires: Date.now() + this.timeToLive
                    });
                    logger6.debug("Updated cache because result expired.");
                    this.fireOnCacheUpdateds();
                });
            }
            return cachedResult.docs;
        }
        const stream = this.replica.getQueryStream(query, "new", formats);
        const callbackSink = new CallbackSink();
        const unsub = callbackSink.onWrite((event)=>{
            if (event.kind === "existing" || event.kind === "success") {
                logger6.debug({
                    doc: event.doc.path,
                    queryString
                });
                this._updateCache(queryString, event.doc);
            }
        });
        const callbackStream = new WritableStream(callbackSink);
        const abortController = new AbortController();
        stream.pipeTo(callbackStream, {
            signal: abortController.signal
        });
        const close = ()=>{
            unsub();
        };
        this.docCache.set(queryString, {
            stream,
            docs: [],
            expires: Date.now() + this.timeToLive,
            close
        });
        this.replica.queryDocs(queryWithFormats).then((docs)=>{
            this.docCache.set(queryString, {
                stream,
                close,
                docs: docs,
                expires: Date.now() + this.timeToLive
            });
            logger6.debug("Updated cache with a new entry.");
            this.fireOnCacheUpdateds();
        });
        return [];
    }
    queryPaths(query = {}, formats) {
        const docs = this.queryDocs(query, formats);
        const pathsSet = new Set(docs.map(({ path  })=>path));
        return Array.from(pathsSet).sort();
    }
    queryAuthors(query = {}, formats) {
        const docs = this.queryDocs(query, formats);
        const authorsSet = new Set(docs.map(({ author  })=>author));
        return Array.from(authorsSet).sort();
    }
    _updateCache(key, doc) {
        const entry = this.docCache.get(key);
        if (!entry) {
            return;
        }
        const query = JSON.parse(key);
        const appendDoc = ()=>{
            const nextDocs = [
                ...entry.docs,
                doc
            ];
            this.docCache.set(key, {
                ...entry,
                docs: sortAndLimit(query, nextDocs)
            });
            this.fireOnCacheUpdateds();
        };
        const replaceDoc = ({ exact  })=>{
            const nextDocs = entry.docs.map((existingDoc)=>{
                if (exact && existingDoc.path === doc.path && existingDoc.author === doc.author) {
                    return doc;
                } else if (!exact && existingDoc.path === doc.path) {
                    return doc;
                }
                return existingDoc;
            });
            this.docCache.set(key, {
                ...entry,
                docs: sortAndLimit(query, nextDocs)
            });
            this.fireOnCacheUpdateds();
        };
        const documentsWithSamePath = entry.docs.filter((existingDoc)=>existingDoc.path === doc.path);
        const documentsWithSamePathAndAuthor = entry.docs.filter((existingDoc)=>existingDoc.path === doc.path && existingDoc.author === doc.author);
        if (documentsWithSamePath.length === 0) {
            if (query.filter && docMatchesFilter(doc, query.filter) || !query.filter) {
                logger6.debug("Updated cache after appending a doc to a entry with matching filter.");
                appendDoc();
            }
            return;
        }
        const historyMode = query.historyMode || "latest";
        if (historyMode === "all") {
            if (documentsWithSamePathAndAuthor.length === 0) {
                logger6.debug("Updated cache after appending a version of a doc to a historyMode: all query.");
                appendDoc();
                return;
            }
            logger6.debug("Updated cache after replacing a version of a doc in a historyMode: all query.");
            replaceDoc({
                exact: true
            });
            return;
        }
        const latestDoc = documentsWithSamePath[0];
        const docIsDifferent = doc.author !== latestDoc?.author || !shallowEqualObjects(doc, latestDoc);
        const docIsLater = doc.timestamp > latestDoc.timestamp;
        if (docIsDifferent && docIsLater) {
            logger6.debug("Updated cache after replacing a doc with its latest version.");
            replaceDoc({
                exact: false
            });
            return;
        }
    }
    fireOnCacheUpdateds() {
        this.version++;
        this.onFireCacheUpdatedsWrapper(()=>{
            this.onCacheUpdatedCallbacks.forEach((cb)=>{
                cb();
            });
        });
    }
    onCacheUpdated(callback) {
        if (this.closed) throw new ReplicaCacheIsClosedError();
        if (this.replica.isClosed()) {
            throw new ReplicaIsClosedError();
        }
        this.onCacheUpdatedCallbacks.add(callback);
        return ()=>{
            this.onCacheUpdatedCallbacks.delete(callback);
        };
    }
    set(keypair, docToSet, format) {
        if (this.closed) throw new ReplicaCacheIsClosedError();
        return this.replica.set(keypair, docToSet, format);
    }
    overwriteAllDocsByAuthor(keypair, format) {
        if (this.closed) throw new ReplicaCacheIsClosedError();
        if (this.replica.isClosed()) {
            throw new ReplicaIsClosedError();
        }
        return this.replica.overwriteAllDocsByAuthor(keypair, format);
    }
    wipeDocAtPath(keypair, path, format = FormatEs5) {
        if (this.closed) throw new ReplicaCacheIsClosedError();
        return this.replica.wipeDocAtPath(keypair, path, format);
    }
    attachmentCache = new Map();
    onReplicaEvent(event) {
        const cacheKey = `${event.doc.path}|${event.doc.author}`;
        const cacheEntry = this.attachmentCache.get(cacheKey);
        if (!cacheEntry) {
            return;
        }
        this.replica.getAttachment(event.doc, cacheEntry.format).then((res)=>{
            this.attachmentCache.set(cacheKey, {
                expires: Date.now() + this.timeToLive,
                attachment: res,
                format: cacheEntry.format
            });
            this.fireOnCacheUpdateds();
        });
    }
    getAttachment(doc, format = FormatEs5) {
        if (this.closed) throw new ReplicaCacheIsClosedError();
        if (this.replica.isClosed()) {
            throw new ReplicaIsClosedError();
        }
        const attachmentInfo = format.getAttachmentInfo(doc);
        if (isErr(attachmentInfo)) {
            return attachmentInfo;
        }
        const cacheKey = `${doc.path}|${doc.author}`;
        const cachedResult = this.attachmentCache.get(cacheKey);
        if (cachedResult) {
            if (Date.now() > cachedResult.expires) {
                this.replica.getAttachment(doc, format).then((res)=>{
                    this.attachmentCache.set(cacheKey, {
                        expires: Date.now() + this.timeToLive,
                        attachment: res,
                        format
                    });
                    this.fireOnCacheUpdateds();
                });
            }
            return cachedResult.attachment;
        }
        this.attachmentCache.set(cacheKey, {
            attachment: undefined,
            expires: Date.now() + this.timeToLive,
            format
        });
        this.replica.getAttachment(doc, format).then((res)=>{
            this.attachmentCache.set(cacheKey, {
                expires: Date.now() + this.timeToLive,
                attachment: res,
                format
            });
            this.fireOnCacheUpdateds();
        });
        return undefined;
    }
    addAttachments(docs, formats) {
        const result = [];
        const lookup = getFormatLookup(formats);
        for (const doc of docs){
            const cachedResult = this.getAttachment(doc, lookup[doc.format]);
            result.push({
                ...doc,
                attachment: cachedResult
            });
        }
        return result;
    }
}
export { ReplicaCache as ReplicaCache };
let logger7 = new Logger("storage driver async memory", "yellow");
function combinePathAndAuthor(doc) {
    return `${doc.path}|${doc.author}`;
}
function docComparePathASCthenNewestFirst(a, b) {
    return compareArrays([
        a.path,
        a.timestamp,
        a.signature
    ], [
        b.path,
        b.timestamp,
        a.signature
    ], [
        "ASC",
        "DESC",
        "ASC"
    ]);
}
function docComparePathDESCthenNewestFirst(a, b) {
    return compareArrays([
        a.path,
        a.timestamp,
        a.signature
    ], [
        b.path,
        b.timestamp,
        a.signature
    ], [
        "DESC",
        "DESC",
        "ASC"
    ]);
}
class DocDriverMemory {
    share;
    _maxLocalIndex = -1;
    _isClosed = false;
    _configKv = {};
    docByPathAndAuthor = new Map();
    docsByPathNewestFirst = new Map();
    latestDocsByPath = new Map();
    constructor(share){
        logger7.debug("constructor");
        const addressIsValidResult = checkShareIsValid(share);
        if (isErr(addressIsValidResult)) {
            throw addressIsValidResult;
        }
        this.share = share;
    }
    isClosed() {
        return this._isClosed;
    }
    close(erase) {
        logger7.debug("close");
        if (this._isClosed) throw new ReplicaIsClosedError();
        if (erase) {
            logger7.debug("...close: and erase");
            this._configKv = {};
            this._maxLocalIndex = -1;
            this.docsByPathNewestFirst.clear();
            this.docByPathAndAuthor.clear();
        }
        this._isClosed = true;
        logger7.debug("...close is done.");
        return Promise.resolve();
    }
    async getConfig(key) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        return this._configKv[key];
    }
    async setConfig(key, value) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        this._configKv[key] = value;
    }
    async listConfigKeys() {
        if (this._isClosed) throw new ReplicaIsClosedError();
        return sortedInPlace(Object.keys(this._configKv));
    }
    async deleteConfig(key) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        let had = key in this._configKv;
        delete this._configKv[key];
        return had;
    }
    getMaxLocalIndex() {
        if (this._isClosed) throw new ReplicaIsClosedError();
        logger7.debug(`getMaxLocalIndex(): it's ${this._maxLocalIndex}`);
        return Promise.resolve(this._maxLocalIndex);
    }
    async _getAllDocs() {
        if (this._isClosed) throw new ReplicaIsClosedError();
        return [
            ...this.docByPathAndAuthor.values()
        ];
    }
    async _getLatestDocs() {
        if (this._isClosed) throw new ReplicaIsClosedError();
        return Array.from(this.latestDocsByPath.values());
    }
    async queryDocs(queryToClean) {
        logger7.debug("queryDocs", queryToClean);
        if (this._isClosed) throw new ReplicaIsClosedError();
        const { query , willMatch  } = cleanUpQuery(queryToClean);
        logger7.debug(`    cleanUpQuery.  willMatch = ${willMatch}`);
        if (willMatch === "nothing") {
            return [];
        }
        if (query.historyMode === "latest" && query.filter?.path) {
            const maybeDoc = this.latestDocsByPath.get(query.filter.path);
            if (maybeDoc && maybeDoc.deleteAfter && maybeDoc.deleteAfter < Date.now() * 1000) {
                return [];
            }
            return maybeDoc ? [
                maybeDoc
            ] : [];
        }
        if (query.historyMode === "all" && query.filter?.path) {
            const maybeDocs = this.docsByPathNewestFirst.get(query.filter.path);
            if (maybeDocs) {
                const notExpired = [];
                for (const doc of maybeDocs){
                    if (doc.deleteAfter === null || doc.deleteAfter === undefined) {
                        notExpired.push(doc);
                    }
                    if (doc.deleteAfter && doc.deleteAfter > Date.now() * 1000) {
                        notExpired.push(doc);
                    }
                }
                return notExpired;
            }
            return [];
        }
        logger7.debug(`    getting docs; historyMode = ${query.historyMode}`);
        const docs = query.historyMode === "all" ? await this._getAllDocs() : await this._getLatestDocs();
        const filteredDocs = [];
        logger7.debug(`    filtering docs`);
        const microNow = Date.now() * 1000;
        for (const doc1 of docs){
            if (query.orderBy === "path ASC") {
                if (query.startAfter !== undefined) {
                    if (query.startAfter.path !== undefined && doc1.path <= query.startAfter.path) {
                        continue;
                    }
                }
            }
            if (query.orderBy === "path DESC") {
                if (query.startAfter !== undefined) {
                    if (query.startAfter.path !== undefined && doc1.path >= query.startAfter.path) {
                        continue;
                    }
                }
            }
            if (query.orderBy === "localIndex ASC") {
                if (query.startAfter !== undefined) {
                    if (query.startAfter.localIndex !== undefined && (doc1._localIndex ?? 0) <= query.startAfter.localIndex) {
                        continue;
                    }
                }
            }
            if (query.orderBy === "localIndex DESC") {
                if (query.startAfter !== undefined) {
                    if (query.startAfter.localIndex !== undefined && (doc1._localIndex ?? 0) >= query.startAfter.localIndex) {
                        continue;
                    }
                }
            }
            if (doc1.deleteAfter && doc1.deleteAfter < microNow) {
                continue;
            }
            if (query.filter && !docMatchesFilter(doc1, query.filter)) continue;
            filteredDocs.push(doc1);
        }
        logger7.debug(`    ordering docs: ${query.orderBy}`);
        if (query.orderBy === "path ASC") {
            filteredDocs.sort(docComparePathASCthenNewestFirst);
        } else if (query.orderBy === "path DESC") {
            filteredDocs.sort(docComparePathDESCthenNewestFirst);
        } else if (query.orderBy === "localIndex ASC") {
            filteredDocs.sort(compareByObjKey("_localIndex", "ASC"));
        } else if (query.orderBy === "localIndex DESC") {
            filteredDocs.sort(compareByObjKey("_localIndex", "DESC"));
        } else if (query.orderBy) {
            throw new ValidationError("unrecognized query orderBy: " + JSON.stringify(query.orderBy));
        }
        if (query.limit !== undefined && docs.length >= query.limit) {
            return filteredDocs.slice(0, query.limit);
        }
        logger7.debug(`    queryDocs is done: found ${filteredDocs.length} docs.`);
        return filteredDocs;
    }
    upsert(doc) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        doc = {
            ...doc
        };
        this._maxLocalIndex += 1;
        doc._localIndex = this._maxLocalIndex;
        Object.freeze(doc);
        logger7.debug("upsert", doc);
        this.docByPathAndAuthor.set(combinePathAndAuthor(doc), doc);
        let docsByPath = this.docsByPathNewestFirst.get(doc.path) ?? [];
        docsByPath = docsByPath.filter((d)=>d.author !== doc.author);
        docsByPath.push(doc);
        docsByPath.sort(docComparePathASCthenNewestFirst);
        this.docsByPathNewestFirst.set(doc.path, docsByPath);
        const latestDoc = docsByPath[0];
        this.latestDocsByPath.set(doc.path, latestDoc);
        return Promise.resolve(doc);
    }
    eraseExpiredDocs() {
        const expiredDocs = [];
        for (const [, doc] of this.docByPathAndAuthor){
            if (docIsExpired(doc)) {
                expiredDocs.push(doc);
            }
        }
        for (const expiredDoc of expiredDocs){
            this.docsByPathNewestFirst.delete(expiredDoc.path);
            this.latestDocsByPath.delete(expiredDoc.path);
            this.docByPathAndAuthor.delete(combinePathAndAuthor(expiredDoc));
        }
        return Promise.resolve(expiredDocs);
    }
}
export { DocDriverMemory as DocDriverMemory };
async function streamToBytes(stream) {
    let bytes = new Uint8Array();
    await stream.pipeTo(new WritableStream({
        write (chunk) {
            const nextBytes = new Uint8Array(bytes.length + chunk.length);
            nextBytes.set(bytes);
            nextBytes.set(chunk, bytes.length);
            bytes = nextBytes;
        }
    }));
    return bytes;
}
class AttachmentDriverMemory {
    stagingMap = new Map();
    attachmentMap = new Map();
    closed = false;
    getKey(formatName, attachmentHash) {
        return `${formatName}___${attachmentHash}`;
    }
    getAttachment(formatName, attachmentHash) {
        if (this.closed) throw new ReplicaIsClosedError();
        const key = this.getKey(formatName, attachmentHash);
        const attachment = this.attachmentMap.get(key);
        if (!attachment) {
            return Promise.resolve(undefined);
        }
        return Promise.resolve({
            bytes: async ()=>new Uint8Array(await attachment.arrayBuffer()),
            stream: ()=>Promise.resolve(attachment.stream())
        });
    }
    async stage(formatName, attachment) {
        if (this.closed) throw new ReplicaIsClosedError();
        const bytes = attachment instanceof Uint8Array ? attachment : await streamToBytes(attachment);
        const hash = await Crypto.sha256base32(bytes);
        const newAttachment = new Blob([
            bytes
        ]);
        const key = this.getKey(formatName, hash);
        this.stagingMap.set(key, newAttachment);
        return Promise.resolve({
            hash,
            size: bytes.byteLength,
            commit: ()=>{
                this.attachmentMap.set(key, newAttachment);
                this.stagingMap.delete(key);
                return Promise.resolve();
            },
            reject: ()=>{
                this.stagingMap.delete(key);
                return Promise.resolve();
            }
        });
    }
    erase(formatName, attachmentHash) {
        if (this.closed) throw new ReplicaIsClosedError();
        const key = this.getKey(formatName, attachmentHash);
        if (this.attachmentMap.has(key)) {
            this.attachmentMap.delete(key);
            return Promise.resolve(true);
        }
        return Promise.resolve(new ValidationError("No attachment with that signature found."));
    }
    wipe() {
        if (this.closed) throw new ReplicaIsClosedError();
        this.attachmentMap.clear();
        return Promise.resolve();
    }
    async filter(hashes) {
        if (this.closed) throw new ReplicaIsClosedError();
        const erasedAttachments = [];
        for (const key of this.attachmentMap.keys()){
            const [format, hash] = key.split("___");
            const hashesToKeep = hashes[format];
            if (hashesToKeep && !hashesToKeep.has(hash)) {
                const result = await this.erase(format, hash);
                if (result) {
                    erasedAttachments.push({
                        format,
                        hash
                    });
                }
            }
        }
        return erasedAttachments;
    }
    clearStaging() {
        if (this.closed) throw new ReplicaIsClosedError();
        this.stagingMap.clear();
        return Promise.resolve();
    }
    isClosed() {
        return this.closed;
    }
    async close(erase) {
        if (this.closed) throw new ReplicaIsClosedError();
        if (erase) {
            await this.wipe();
        }
        this.closed = true;
        return;
    }
}
export { AttachmentDriverMemory as AttachmentDriverMemory };
class ReplicaDriverMemory {
    docDriver;
    attachmentDriver;
    constructor(shareAddress){
        this.docDriver = new DocDriverMemory(shareAddress);
        this.attachmentDriver = new AttachmentDriverMemory();
    }
}
export { ReplicaDriverMemory as ReplicaDriverMemory };
let logger8 = new Logger("storage driver localStorage", "gold");
function isSerializedDriverDocs(value) {
    if (typeof value !== "object") {
        return false;
    }
    return "byPathAndAuthor" in value && "byPathNewestFirst" in value;
}
class DocDriverLocalStorage extends DocDriverMemory {
    _localStorageKeyConfig;
    _localStorageKeyDocs;
    constructor(share, key){
        super(share);
        logger8.debug("constructor");
        this._localStorageKeyConfig = `earthstar:config:${share}${key ? `:${key}` : ""}`;
        this._localStorageKeyDocs = `earthstar:documents:${share}${key ? `:${key}` : ""}`;
        const existingData = localStorage.getItem(this._localStorageKeyDocs);
        if (existingData !== null) {
            logger8.debug("...constructor: loading data from localStorage");
            const parsed = JSON.parse(existingData);
            if (!isSerializedDriverDocs(parsed)) {
                console.warn(`localStorage data could not be parsed for share ${share}`);
                return;
            }
            this.docByPathAndAuthor = new Map(Object.entries(parsed.byPathAndAuthor));
            this.docsByPathNewestFirst = new Map(Object.entries(parsed.byPathNewestFirst));
            this.latestDocsByPath = new Map(Object.entries(parsed.latestDocsByPath));
            const localIndexes = Array.from(this.docByPathAndAuthor.values()).map((doc)=>doc._localIndex);
            this._maxLocalIndex = Math.max(...localIndexes);
        } else {
            logger8.debug("...constructor: there was no existing data in localStorage");
        }
        logger8.debug("...constructor is done.");
    }
    close(erase) {
        logger8.debug("close");
        if (this._isClosed) throw new ReplicaIsClosedError();
        if (erase) {
            logger8.debug("...close: and erase");
            this._configKv = {};
            this._maxLocalIndex = -1;
            this.docsByPathNewestFirst.clear();
            this.docByPathAndAuthor.clear();
            logger8.debug("...close: erasing localStorage");
            localStorage.removeItem(this._localStorageKeyDocs);
            for (const key of this._listConfigKeysSync()){
                this._deleteConfigSync(key);
            }
            logger8.debug("...close: erasing is done");
        }
        this._isClosed = true;
        logger8.debug("...close is done.");
        return Promise.resolve();
    }
    _getConfigSync(key) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        key = `${this._localStorageKeyConfig}:${key}`;
        let result = localStorage.getItem(key);
        return result === null ? undefined : result;
    }
    _setConfigSync(key, value) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        key = `${this._localStorageKeyConfig}:${key}`;
        localStorage.setItem(key, value);
    }
    _listConfigKeysSync() {
        if (this._isClosed) throw new ReplicaIsClosedError();
        let keys = Object.keys(localStorage).filter((key)=>key.startsWith(this._localStorageKeyConfig + ":")).map((key)=>key.slice(this._localStorageKeyConfig.length + 1));
        keys.sort();
        return keys;
    }
    _deleteConfigSync(key) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        let hadIt = this._getConfigSync(key);
        key = `${this._localStorageKeyConfig}:${key}`;
        localStorage.removeItem(key);
        return hadIt !== undefined;
    }
    async getConfig(key) {
        return this._getConfigSync(key);
    }
    async setConfig(key, value) {
        return this._setConfigSync(key, value);
    }
    async listConfigKeys() {
        return this._listConfigKeysSync();
    }
    async deleteConfig(key) {
        return this._deleteConfigSync(key);
    }
    async upsert(doc) {
        if (this._isClosed) throw new ReplicaIsClosedError();
        const upsertedDoc = await super.upsert(doc);
        const docsToBeSerialised = {
            byPathAndAuthor: Object.fromEntries(this.docByPathAndAuthor),
            byPathNewestFirst: Object.fromEntries(this.docsByPathNewestFirst),
            latestDocsByPath: Object.fromEntries(this.latestDocsByPath)
        };
        localStorage.setItem(this._localStorageKeyDocs, JSON.stringify(docsToBeSerialised));
        return upsertedDoc;
    }
}
const logger9 = new Logger("replica driver indexeddb", "gold");
function docComparePathASCthenNewestFirst1(a, b) {
    return compareArrays([
        a.path,
        a.timestamp,
        a.signature
    ], [
        b.path,
        b.timestamp,
        a.signature
    ], [
        "ASC",
        "DESC",
        "ASC"
    ]);
}
function docComparePathDESCthenNewestFirst1(a, b) {
    return compareArrays([
        a.path,
        a.timestamp,
        a.signature
    ], [
        b.path,
        b.timestamp,
        a.signature
    ], [
        "DESC",
        "DESC",
        "ASC"
    ]);
}
const DOCS_STORE = "docs";
const CONFIG_STORE = "config";
class DocDriverIndexedDB {
    share;
    db = deferred();
    gotInitialMaxLocalIndex = deferred();
    localMaxLocalIndex = -1;
    closed = false;
    constructor(share, namespace){
        const addressIsValidResult = checkShareIsValid(share);
        if (isErr(addressIsValidResult)) {
            throw addressIsValidResult;
        }
        this.share = share;
        logger9.debug("constructor");
        if (!window.indexedDB) {
            throw new EarthstarError("IndexedDB is not supported by this runtime.");
        }
        const request = window.indexedDB.open(`earthstar:share_docs:${this.share}${namespace ? `/${namespace}` : ""}`, 1);
        request.onerror = ()=>{
            logger9.error(`Could not open IndexedDB for ${this.share}'s attachments.`);
            logger9.error(request.error);
            throw new EarthstarError(`Could not open IndexedDB for ${this.share}'s attachments.`);
        };
        request.onupgradeneeded = function() {
            const db = request.result;
            const docsStore = db.createObjectStore(DOCS_STORE, {
                keyPath: [
                    "path",
                    "author"
                ]
            });
            docsStore.createIndex("comboIndex", [
                "_localIndex",
                "timestamp",
                "path",
                "author", 
            ], {
                unique: true
            });
            docsStore.createIndex("pathTimestampIndex", [
                "path",
                "timestamp", 
            ], {
                unique: false
            });
            docsStore.createIndex("pathAuthorIndex", [
                "path",
                "author", 
            ], {
                unique: true
            });
            docsStore.createIndex("deleteAfterIndex", "deleteAfter", {
                unique: false
            });
            docsStore.createIndex("localIndexIndex", "_localIndex", {
                unique: true
            });
            const configStore = db.createObjectStore(CONFIG_STORE, {
                keyPath: "key"
            });
            configStore.createIndex("keyIndex", [
                "key", 
            ], {
                unique: true
            });
        };
        request.onsuccess = ()=>{
            this.db.resolve(request.result);
            const localIndex = request.result.transaction([
                DOCS_STORE
            ], "readonly").objectStore(DOCS_STORE).index("localIndexIndex");
            const getLast = localIndex.openCursor(null, "prev");
            getLast.onsuccess = ()=>{
                if (getLast.result) {
                    this.gotInitialMaxLocalIndex.resolve(getLast.result.value._localIndex);
                } else {
                    this.gotInitialMaxLocalIndex.resolve(-1);
                }
            };
        };
        this.gotInitialMaxLocalIndex.then((localIndex)=>{
            this.localMaxLocalIndex = localIndex;
        });
    }
    isClosed() {
        return this.closed;
    }
    async close(erase) {
        if (this.closed) throw new ReplicaIsClosedError();
        this.closed = true;
        const eraseDeferred = deferred();
        if (erase) {
            const db = await this.db;
            const transaction = db.transaction([
                DOCS_STORE,
                CONFIG_STORE
            ], "readwrite");
            const eraseDocsDeferred = deferred();
            const eraseConfigDeferred = deferred();
            const deleteDocs = transaction.objectStore(DOCS_STORE).clear().onsuccess = ()=>{
                eraseDocsDeferred.resolve();
            };
            const deleteConfig = transaction.objectStore(CONFIG_STORE).clear().onsuccess = ()=>{
                eraseConfigDeferred.resolve();
            };
            await Promise.all([
                deleteDocs,
                deleteConfig
            ]);
            eraseDeferred.resolve();
        } else {
            eraseDeferred.resolve();
        }
        (await this.db).close();
        await sleep(20);
        return eraseDeferred;
    }
    async getMaxLocalIndex() {
        await this.gotInitialMaxLocalIndex;
        return this.localMaxLocalIndex;
    }
    async queryDocs(queryToClean) {
        const db = await this.db;
        const docStore = db.transaction([
            DOCS_STORE
        ], "readonly").objectStore(DOCS_STORE);
        const docsPromise = deferred();
        const { query , willMatch  } = cleanUpQuery(queryToClean);
        logger9.debug(`    cleanUpQuery.  willMatch = ${willMatch}`);
        if (willMatch === "nothing") {
            return [];
        }
        if (query.filter?.path && query.historyMode === "latest") {
            const range = IDBKeyRange.bound([
                query.filter.path,
                query.filter.timestampGt || 0
            ], [
                query.filter.path,
                query.filter.timestampLt || Number.MAX_SAFE_INTEGER, 
            ]);
            const index = docStore.index("pathTimestampIndex");
            const getCursor = index.openCursor(range, "prev");
            getCursor.onsuccess = ()=>{
                if (getCursor.result?.value) {
                    docsPromise.resolve([
                        getCursor.result.value
                    ]);
                } else {
                    docsPromise.resolve([]);
                }
            };
        } else if (query.filter?.path && query.historyMode === "all") {
            const index1 = docStore.index("pathAuthorIndex");
            const range1 = IDBKeyRange.bound([
                query.filter.path,
                " "
            ], [
                query.filter.path,
                "~", 
            ]);
            const getOp = index1.getAll(range1);
            getOp.onsuccess = ()=>{
                if (getOp.result) {
                    docsPromise.resolve(Array.from(getOp.result));
                } else {
                    docsPromise.resolve([]);
                }
            };
        } else {
            const pathLower = query.startAfter?.path || query.filter?.path || query.filter?.pathStartsWith || " ";
            const authorLower = query.filter?.author || " ";
            const timestampLower = query.filter?.timestamp || query.filter?.timestampGt || 0;
            const localIndexLower = query.startAfter?.localIndex || 0;
            const pathUpper = query.filter?.path || "~";
            const authorUpper = query.filter?.author || "~";
            const timestampUpper = query.filter?.timestamp || query.filter?.timestampLt || Number.MAX_SAFE_INTEGER;
            const localIndexUpper = Number.MAX_SAFE_INTEGER;
            const range2 = IDBKeyRange.bound([
                localIndexLower,
                timestampLower,
                pathLower,
                authorLower
            ], [
                localIndexUpper,
                timestampUpper,
                pathUpper,
                authorUpper, 
            ]);
            const index2 = docStore.index("comboIndex");
            const getOp1 = index2.getAll(range2);
            getOp1.onsuccess = ()=>{
                if (getOp1.result) {
                    docsPromise.resolve(getOp1.result);
                } else {
                    docsPromise.resolve([]);
                }
            };
        }
        const docs = await docsPromise;
        if (query.historyMode === "latest") {
            const docsForLatest = docs.splice(0, docs.length);
            const latests = new Map();
            for (const doc of docsForLatest){
                const latest = latests.get(doc.path);
                if (!latest || latest.timestamp < doc.timestamp) {
                    latests.set(doc.path, doc);
                }
            }
            docs.push(...latests.values());
        }
        const filteredDocs = [];
        logger9.debug(`    filtering docs`);
        const now = Date.now() * 1000;
        for (const doc1 of docs){
            if (doc1.deleteAfter && doc1.deleteAfter < now) {
                continue;
            }
            if (query.filter && !docMatchesFilter(doc1, query.filter)) continue;
            filteredDocs.push(doc1);
        }
        logger9.debug(`    ordering docs: ${query.orderBy}`);
        if (query.orderBy === "path ASC") {
            filteredDocs.sort(docComparePathASCthenNewestFirst1);
        } else if (query.orderBy === "path DESC") {
            filteredDocs.sort(docComparePathDESCthenNewestFirst1);
        } else if (query.orderBy === "localIndex ASC") {
            filteredDocs.sort(compareByObjKey("_localIndex", "ASC"));
        } else if (query.orderBy === "localIndex DESC") {
            filteredDocs.sort(compareByObjKey("_localIndex", "DESC"));
        } else if (query.orderBy) {
            throw new ValidationError("unrecognized query orderBy: " + JSON.stringify(query.orderBy));
        }
        if (query.limit !== undefined && docs.length >= query.limit) {
            return filteredDocs.slice(0, query.limit);
        }
        logger9.debug(`    queryDocs is done: found ${filteredDocs.length} docs.`);
        return filteredDocs;
    }
    async upsert(doc) {
        const db = await this.db;
        const docStore = db.transaction([
            DOCS_STORE
        ], "readwrite").objectStore(DOCS_STORE);
        const index = docStore.index("pathAuthorIndex");
        const updatedExisting = deferred();
        const cursorExisting = index.openCursor([
            doc.path,
            doc.author
        ]);
        await this.gotInitialMaxLocalIndex;
        this.localMaxLocalIndex += 1;
        doc._localIndex = this.localMaxLocalIndex;
        cursorExisting.onsuccess = ()=>{
            if (cursorExisting.result) {
                const updateOp = cursorExisting.result.update(doc);
                updateOp.onsuccess = ()=>{
                    updatedExisting.resolve(!!updateOp.result);
                };
            } else {
                updatedExisting.resolve(false);
            }
        };
        const didUpdate = await updatedExisting;
        if (didUpdate) {
            return doc;
        }
        const sndDocStore = db.transaction([
            DOCS_STORE
        ], "readwrite").objectStore(DOCS_STORE);
        const putOp = sndDocStore.put(doc);
        const didPut = deferred();
        putOp.onsuccess = ()=>{
            didPut.resolve();
        };
        putOp.onerror = ()=>{
            throw putOp.error;
        };
        await didPut;
        return doc;
    }
    async eraseExpiredDocs() {
        const deletedDocs = [];
        const db = await this.db;
        const docStore = db.transaction([
            DOCS_STORE
        ], "readwrite").objectStore(DOCS_STORE);
        const index = docStore.index("deleteAfterIndex");
        const microNow = Date.now() * 1000;
        const range = IDBKeyRange.bound(0, microNow);
        const cursor = index.openCursor(range);
        const deletedAll = deferred();
        cursor.onsuccess = ()=>{
            if (cursor.result?.value) {
                const doc = cursor.result.value;
                if (doc.deleteAfter !== null && doc.deleteAfter !== undefined) {
                    deletedDocs.push(doc);
                    const deleteOp = cursor.result.delete();
                    deleteOp.onsuccess = ()=>{
                        cursor.result?.continue();
                    };
                }
            } else {
                deletedAll.resolve();
            }
        };
        await deletedAll;
        return deletedDocs;
    }
    async getConfig(key) {
        const db = await this.db;
        const configStore = db.transaction([
            CONFIG_STORE
        ], "readonly").objectStore(CONFIG_STORE);
        const gotConfig = deferred();
        const getOp = configStore.get(key);
        getOp.onsuccess = ()=>{
            gotConfig.resolve(getOp.result?.value);
        };
        return gotConfig;
    }
    async setConfig(key, value) {
        const db = await this.db;
        const configStore = db.transaction([
            CONFIG_STORE
        ], "readwrite").objectStore(CONFIG_STORE);
        const didSetConfig = deferred();
        const setOp = configStore.put({
            key,
            value
        });
        setOp.onsuccess = ()=>{
            didSetConfig.resolve();
        };
        return didSetConfig;
    }
    async listConfigKeys() {
        const db = await this.db;
        const configStore = db.transaction([
            CONFIG_STORE
        ], "readonly").objectStore(CONFIG_STORE);
        const gotConfigKeys = deferred();
        const index = configStore.index("keyIndex");
        const getAllOp = index.openKeyCursor();
        const keys = [];
        getAllOp.onsuccess = ()=>{
            if (getAllOp.result) {
                keys.push(getAllOp.result.primaryKey);
                getAllOp.result.continue();
            } else {
                gotConfigKeys.resolve(keys);
            }
        };
        return gotConfigKeys;
    }
    async deleteConfig(key) {
        const db = await this.db;
        const configStore = db.transaction([
            CONFIG_STORE
        ], "readwrite").objectStore(CONFIG_STORE);
        const didDeleteConfig = deferred();
        const index = configStore.index("keyIndex");
        const range = IDBKeyRange.bound([
            key
        ], [
            key
        ]);
        const cursor = index.openCursor(range);
        cursor.onsuccess = ()=>{
            if (cursor.result) {
                const deleteOp = cursor.result.delete();
                deleteOp.onsuccess = ()=>{
                    didDeleteConfig.resolve(true);
                };
            } else {
                didDeleteConfig.resolve(false);
            }
        };
        return didDeleteConfig;
    }
}
const logger10 = new Logger("replica driver indexeddb", "gold");
const ATTACHMENT_STAGING_STORE = "attachment_staging_index";
const ATTACHMENT_INDEX_STORE = "attachments_index";
const ATTACHMENT_BYTES_STORE = "attachments_bytes";
class AttachmentDriverIndexedDB {
    db = deferred();
    share;
    closed = false;
    constructor(share, namespace){
        this.share = share;
        if (!window.indexedDB) {
            throw new EarthstarError("IndexedDB is not supported by this runtime.");
        }
        const request = window.indexedDB.open(`earthstar:share_attachments:${this.share}${namespace ? `/${namespace}` : ""}`, 1);
        request.onerror = ()=>{
            logger10.error(`Could not open IndexedDB for ${this.share}'s attachments.`);
            logger10.error(request.error);
            throw new EarthstarError(`Could not open IndexedDB for ${this.share}'s attachments.`);
        };
        request.onupgradeneeded = function() {
            const db = request.result;
            db.createObjectStore(ATTACHMENT_BYTES_STORE);
            db.createObjectStore(ATTACHMENT_INDEX_STORE, {
                keyPath: "id"
            });
            db.createObjectStore(ATTACHMENT_STAGING_STORE, {
                keyPath: "id"
            });
        };
        request.onsuccess = ()=>{
            this.db.resolve(request.result);
        };
    }
    getIndexKey(formatName, attachmentHash) {
        return `${formatName}___${attachmentHash}`;
    }
    async getAttachment(formatName, attachmentHash) {
        if (this.closed) throw new ReplicaIsClosedError();
        const resultDeferred = deferred();
        const indexKey = this.getIndexKey(formatName, attachmentHash);
        const db = await this.db;
        const transaction = db.transaction([
            ATTACHMENT_INDEX_STORE, 
        ], "readonly");
        const getKey = transaction.objectStore(ATTACHMENT_INDEX_STORE).get(indexKey);
        const blobKeyDeferred = deferred();
        getKey.onerror = ()=>{
            blobKeyDeferred.reject();
        };
        getKey.onsuccess = ()=>{
            if (getKey.result === undefined) {
                blobKeyDeferred.reject();
            } else {
                blobKeyDeferred.resolve(getKey.result.blobKey);
            }
        };
        blobKeyDeferred.then((blobKey)=>{
            const blobTransaction = db.transaction([
                ATTACHMENT_BYTES_STORE
            ], "readonly");
            const getBlob = blobTransaction.objectStore(ATTACHMENT_BYTES_STORE).get(blobKey);
            getBlob.onsuccess = ()=>{
                const blob = new Blob([
                    getBlob.result
                ]);
                resultDeferred.resolve({
                    bytes: async ()=>new Uint8Array(await blob.arrayBuffer()),
                    stream: ()=>Promise.resolve(blob.stream())
                });
            };
            getBlob.onerror = ()=>{
                resultDeferred.resolve(undefined);
            };
        }).catch(()=>{
            resultDeferred.resolve(undefined);
        });
        return resultDeferred;
    }
    async erase(formatName, attachmentHash) {
        if (this.closed) throw new ReplicaIsClosedError();
        const resultDeferred = deferred();
        const indexKey = this.getIndexKey(formatName, attachmentHash);
        const db = await this.db;
        const transaction = db.transaction([
            ATTACHMENT_INDEX_STORE, 
        ], "readonly");
        const getKey = transaction.objectStore(ATTACHMENT_INDEX_STORE).get(indexKey);
        const blobKeyDeferred = deferred();
        getKey.onerror = ()=>{
            blobKeyDeferred.reject();
        };
        getKey.onsuccess = ()=>{
            db.transaction([
                ATTACHMENT_INDEX_STORE
            ], "readwrite").objectStore(ATTACHMENT_INDEX_STORE).delete(indexKey);
            if (getKey.result === undefined) {
                blobKeyDeferred.reject();
            } else {
                blobKeyDeferred.resolve(getKey.result.blobKey);
            }
        };
        blobKeyDeferred.then((blobKey)=>{
            const deleteBlob = db.transaction([
                ATTACHMENT_BYTES_STORE
            ], "readwrite").objectStore(ATTACHMENT_BYTES_STORE).delete(blobKey);
            deleteBlob.onsuccess = ()=>{
                resultDeferred.resolve(true);
            };
            deleteBlob.onerror = ()=>{
                resultDeferred.resolve(undefined);
            };
        }).catch(()=>{
            resultDeferred.resolve(new ValidationError("No attachment found"));
        });
        return resultDeferred;
    }
    async stage(formatName, attachment) {
        if (this.closed) throw new ReplicaIsClosedError();
        const db = await this.db;
        const bytes = attachment instanceof Uint8Array ? attachment : await streamToBytes(attachment);
        const hash = await Crypto.sha256base32(bytes);
        const indexKey = this.getIndexKey(formatName, hash);
        const blobKey = `${indexKey}___${randomId()}`;
        const transaction = db.transaction([
            ATTACHMENT_BYTES_STORE,
            ATTACHMENT_STAGING_STORE, 
        ], "readwrite");
        const dataPut = transaction.objectStore(ATTACHMENT_BYTES_STORE).put(bytes, blobKey);
        const stagingPut = transaction.objectStore(ATTACHMENT_STAGING_STORE).put({
            id: indexKey,
            blobKey
        });
        const putDeferred = deferred();
        const stagingDeferred = deferred();
        dataPut.onsuccess = ()=>putDeferred.resolve();
        stagingPut.onsuccess = ()=>stagingDeferred.resolve();
        await putDeferred;
        await stagingDeferred;
        return {
            hash,
            size: bytes.byteLength,
            reject: async ()=>{
                const deleteTransaction = db.transaction([
                    ATTACHMENT_BYTES_STORE,
                    ATTACHMENT_STAGING_STORE, 
                ], "readwrite");
                const dataDelete = deleteTransaction.objectStore(ATTACHMENT_BYTES_STORE).delete(blobKey);
                const stagingDelete = deleteTransaction.objectStore(ATTACHMENT_STAGING_STORE).delete(indexKey);
                const deleteDeferred = deferred();
                const stagingDeleteDeferred = deferred();
                dataDelete.onsuccess = ()=>{
                    deleteDeferred.resolve();
                };
                stagingDelete.onsuccess = ()=>{
                    stagingDeleteDeferred.resolve();
                };
                await Promise.all([
                    deleteDeferred,
                    stagingDeleteDeferred
                ]);
            },
            commit: async ()=>{
                const transaction = db.transaction([
                    ATTACHMENT_INDEX_STORE,
                    ATTACHMENT_STAGING_STORE, 
                ], "readwrite");
                const deleteStaging = transaction.objectStore(ATTACHMENT_STAGING_STORE).delete(indexKey);
                const putRealIndex = transaction.objectStore(ATTACHMENT_INDEX_STORE).put({
                    id: indexKey,
                    blobKey
                });
                const deleteDeferred = deferred();
                const realIndexDeferred = deferred();
                deleteStaging.onsuccess = ()=>deleteDeferred.resolve();
                putRealIndex.onsuccess = ()=>realIndexDeferred.resolve();
                await Promise.all([
                    deleteDeferred,
                    realIndexDeferred
                ]);
            }
        };
    }
    async wipe() {
        if (this.closed) throw new ReplicaIsClosedError();
        const db = await this.db;
        const transaction = db.transaction([
            ATTACHMENT_BYTES_STORE,
            ATTACHMENT_INDEX_STORE,
            ATTACHMENT_STAGING_STORE, 
        ], "readwrite");
        const wipeData = transaction.objectStore(ATTACHMENT_BYTES_STORE).clear();
        const wipeIndex = transaction.objectStore(ATTACHMENT_INDEX_STORE).clear();
        const wipeStaging = transaction.objectStore(ATTACHMENT_STAGING_STORE).clear();
        const dataDeferred = deferred();
        const indexDeferred = deferred();
        const stagingDeferred = deferred();
        wipeData.onsuccess = ()=>dataDeferred.resolve();
        wipeIndex.onsuccess = ()=>indexDeferred.resolve();
        wipeStaging.onsuccess = ()=>stagingDeferred.resolve();
        await Promise.all([
            dataDeferred,
            indexDeferred,
            stagingDeferred
        ]);
    }
    async clearStaging() {
        if (this.closed) throw new ReplicaIsClosedError();
        const db = await this.db;
        const transaction = db.transaction([
            ATTACHMENT_BYTES_STORE,
            ATTACHMENT_STAGING_STORE, 
        ]);
        const cursorReq = transaction.objectStore(ATTACHMENT_STAGING_STORE).openCursor();
        const result = deferred();
        cursorReq.onsuccess = ()=>{
            const res = cursorReq.result;
            if (!res) {
                result.resolve();
                return;
            }
            const blobKey = res.value.blobKey;
            const deleteBlob = transaction.objectStore(ATTACHMENT_BYTES_STORE).delete(blobKey);
            res.delete();
            deleteBlob.onsuccess = ()=>{
                res.continue();
            };
            deleteBlob.onerror = ()=>{
                res.continue();
            };
        };
        return result;
    }
    async filter(attachments) {
        if (this.closed) throw new ReplicaIsClosedError();
        const db = await this.db;
        const transaction = db.transaction([
            ATTACHMENT_BYTES_STORE,
            ATTACHMENT_INDEX_STORE, 
        ], "readwrite");
        const BATCH_SIZE = 50;
        const deleted = [];
        const deletionOps = [];
        const wipeDeferred = deferred();
        const wipeBatch = (range = null)=>{
            const getAllReq = transaction.objectStore(ATTACHMENT_INDEX_STORE).getAll(range, 50);
            getAllReq.onsuccess = ()=>{
                const results = getAllReq.result;
                for (const result of results){
                    const [format, hash] = result.id.split("___");
                    if (attachments[format] && !attachments[format].has(hash)) {
                        deleted.push({
                            format,
                            hash
                        });
                        deletionOps.push(this.erase(format, hash));
                    }
                }
                if (results.length === BATCH_SIZE) {
                    const lastItem = results[results.length - 1];
                    const nextKeyRange = IDBKeyRange.lowerBound(lastItem.id, true);
                    wipeBatch(nextKeyRange);
                } else {
                    wipeDeferred.resolve();
                }
            };
        };
        wipeBatch();
        await wipeDeferred;
        await Promise.all(deletionOps);
        return deleted;
    }
    isClosed() {
        return this.closed;
    }
    async close(erase) {
        if (this.closed) throw new ReplicaIsClosedError();
        if (erase) {
            await this.wipe();
        }
        this.closed = true;
        const db = await this.db;
        db.close();
        await sleep(20);
        return;
    }
}
class ReplicaDriverWeb {
    docDriver;
    attachmentDriver;
    constructor(shareAddress, namespace){
        this.docDriver = new DocDriverIndexedDB(shareAddress, namespace);
        this.attachmentDriver = new AttachmentDriverIndexedDB(shareAddress, namespace);
    }
}
export { DocDriverLocalStorage as DocDriverLocalStorage };
export { DocDriverIndexedDB as DocDriverIndexedDB };
export { AttachmentDriverIndexedDB as AttachmentDriverIndexedDB };
export { ReplicaDriverWeb as ReplicaDriverWeb };
