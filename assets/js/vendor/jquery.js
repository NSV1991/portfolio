!(function (e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (e.document) return t(e);
                    throw new Error('jQuery requires a window with a document');
                })
        : t(e);
})('undefined' != typeof window ? window : this, function (T, R) {
    'use strict';
    function v(e) {
        return (
            'function' == typeof e &&
            'number' != typeof e.nodeType &&
            'function' != typeof e.item
        );
    }
    function g(e) {
        return null != e && e === e.window;
    }
    var t = [],
        M = Object.getPrototypeOf,
        s = t.slice,
        I = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        W = t.push,
        F = t.indexOf,
        B = {},
        $ = B.toString,
        _ = B.hasOwnProperty,
        z = _.toString,
        U = z.call(Object),
        y = {},
        C = T.document,
        X = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0,
        };
    function V(e, t, n) {
        var r,
            i,
            o = (n = n || C).createElement('script');
        if (((o.text = e), t))
            for (r in X)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function h(e) {
        return null == e
            ? e + ''
            : 'object' == typeof e || 'function' == typeof e
            ? B[$.call(e)] || 'object'
            : typeof e;
    }
    var e = '3.6.0',
        E = function (e, t) {
            return new E.fn.init(e, t);
        };
    function G(e) {
        var t = !!e && 'length' in e && e.length,
            n = h(e);
        return (
            !v(e) &&
            !g(e) &&
            ('array' === n ||
                0 === t ||
                ('number' == typeof t && 0 < t && t - 1 in e))
        );
    }
    (E.fn = E.prototype =
        {
            jquery: e,
            constructor: E,
            length: 0,
            toArray: function () {
                return s.call(this);
            },
            get: function (e) {
                return null == e
                    ? s.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                e = E.merge(this.constructor(), e);
                return (e.prevObject = this), e;
            },
            each: function (e) {
                return E.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    E.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    E.grep(this, function (e, t) {
                        return (t + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    E.grep(this, function (e, t) {
                        return t % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length,
                    e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: W,
            sort: t.sort,
            splice: t.splice,
        }),
        (E.extend = E.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o = arguments[0] || {},
                    a = 1,
                    s = arguments.length,
                    u = !1;
                for (
                    'boolean' == typeof o &&
                        ((u = o), (o = arguments[a] || {}), a++),
                        'object' == typeof o || v(o) || (o = {}),
                        a === s && ((o = this), a--);
                    a < s;
                    a++
                )
                    if (null != (e = arguments[a]))
                        for (t in e)
                            (n = e[t]),
                                '__proto__' !== t &&
                                    o !== n &&
                                    (u &&
                                    n &&
                                    (E.isPlainObject(n) ||
                                        (r = Array.isArray(n)))
                                        ? ((i = o[t]),
                                          (i =
                                              r && !Array.isArray(i)
                                                  ? []
                                                  : r || E.isPlainObject(i)
                                                  ? i
                                                  : {}),
                                          (r = !1),
                                          (o[t] = E.extend(u, i, n)))
                                        : void 0 !== n && (o[t] = n));
                return o;
            }),
        E.extend({
            expando: 'jQuery' + (e + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                return !(
                    !e ||
                    '[object Object]' !== $.call(e) ||
                    ((e = M(e)) &&
                        ('function' !=
                            typeof (e =
                                _.call(e, 'constructor') && e.constructor) ||
                            z.call(e) !== U))
                );
            },
            isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                V(
                    e,
                    {
                        nonce: t && t.nonce,
                    },
                    n
                );
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (G(e))
                    for (
                        n = e.length;
                        r < n && !1 !== t.call(e[r], r, e[r]);
                        r++
                    );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                t = t || [];
                return (
                    null != e &&
                        (G(Object(e))
                            ? E.merge(t, 'string' == typeof e ? [e] : e)
                            : W.call(t, e)),
                    t
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : F.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) != a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (G(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return I(a);
            },
            guid: 1,
            support: y,
        }),
        'function' == typeof Symbol &&
            (E.fn[Symbol.iterator] = t[Symbol.iterator]),
        E.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                ' '
            ),
            function (e, t) {
                B['[object ' + t + ']'] = t.toLowerCase();
            }
        );
    function r(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && E(e).is(n)) break;
                r.push(e);
            }
        return r;
    }
    function Y(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var e = (function (R) {
            function f(e, t) {
                return (
                    (e = '0x' + e.slice(1) - 65536),
                    t ||
                        (e < 0
                            ? String.fromCharCode(65536 + e)
                            : String.fromCharCode(
                                  (e >> 10) | 55296,
                                  (1023 & e) | 56320
                              ))
                );
            }
            function M(e, t) {
                return t
                    ? '\0' === e
                        ? '�'
                        : e.slice(0, -1) +
                          '\\' +
                          e.charCodeAt(e.length - 1).toString(16) +
                          ' '
                    : '\\' + e;
            }
            function I() {
                T();
            }
            var e,
                p,
                b,
                o,
                W,
                d,
                F,
                B,
                w,
                u,
                l,
                T,
                C,
                n,
                E,
                h,
                r,
                i,
                g,
                S = 'sizzle' + +new Date(),
                c = R.document,
                k = 0,
                $ = 0,
                _ = q(),
                z = q(),
                U = q(),
                y = q(),
                X = function (e, t) {
                    return e === t && (l = !0), 0;
                },
                V = {}.hasOwnProperty,
                t = [],
                G = t.pop,
                Y = t.push,
                A = t.push,
                Q = t.slice,
                v = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1;
                },
                J =
                    'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                a = '[\\x20\\t\\r\\n\\f]',
                s =
                    '(?:\\\\[\\da-fA-F]{1,6}' +
                    a +
                    '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
                K =
                    '\\[' +
                    a +
                    '*(' +
                    s +
                    ')(?:' +
                    a +
                    '*([*^$|!~]?=)' +
                    a +
                    '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                    s +
                    '))|)' +
                    a +
                    '*\\]',
                Z =
                    ':(' +
                    s +
                    ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                    K +
                    ')*)|.*)\\)|)',
                ee = new RegExp(a + '+', 'g'),
                m = new RegExp(
                    '^' + a + '+|((?:^|[^\\\\])(?:\\\\.)*)' + a + '+$',
                    'g'
                ),
                te = new RegExp('^' + a + '*,' + a + '*'),
                ne = new RegExp('^' + a + '*([>+~]|' + a + ')' + a + '*'),
                re = new RegExp(a + '|>'),
                ie = new RegExp(Z),
                oe = new RegExp('^' + s + '$'),
                x = {
                    ID: new RegExp('^#(' + s + ')'),
                    CLASS: new RegExp('^\\.(' + s + ')'),
                    TAG: new RegExp('^(' + s + '|[*])'),
                    ATTR: new RegExp('^' + K),
                    PSEUDO: new RegExp('^' + Z),
                    CHILD: new RegExp(
                        '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                            a +
                            '*(even|odd|(([+-]|)(\\d*)n|)' +
                            a +
                            '*(?:([+-]|)' +
                            a +
                            '*(\\d+)|))' +
                            a +
                            '*\\)|)',
                        'i'
                    ),
                    bool: new RegExp('^(?:' + J + ')$', 'i'),
                    needsContext: new RegExp(
                        '^' +
                            a +
                            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                            a +
                            '*((?:-\\d)?\\d*)' +
                            a +
                            '*\\)|)(?=[^-]|$)',
                        'i'
                    ),
                },
                ae = /HTML$/i,
                se = /^(?:input|select|textarea|button)$/i,
                ue = /^h\d$/i,
                N = /^[^{]+\{\s*\[native \w/,
                le = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ce = /[+~]/,
                j = new RegExp(
                    '\\\\[\\da-fA-F]{1,6}' + a + '?|\\\\([^\\r\\n\\f])',
                    'g'
                ),
                fe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                pe = ve(
                    function (e) {
                        return (
                            !0 === e.disabled &&
                            'fieldset' === e.nodeName.toLowerCase()
                        );
                    },
                    {
                        dir: 'parentNode',
                        next: 'legend',
                    }
                );
            try {
                A.apply((t = Q.call(c.childNodes)), c.childNodes),
                    t[c.childNodes.length].nodeType;
            } catch (e) {
                A = {
                    apply: t.length
                        ? function (e, t) {
                              Y.apply(e, Q.call(t));
                          }
                        : function (e, t) {
                              for (
                                  var n = e.length, r = 0;
                                  (e[n++] = t[r++]);

                              );
                              e.length = n - 1;
                          },
                };
            }
            function D(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = t && t.ownerDocument,
                    f = t ? t.nodeType : 9;
                if (
                    ((n = n || []),
                    'string' != typeof e ||
                        !e ||
                        (1 !== f && 9 !== f && 11 !== f))
                )
                    return n;
                if (!r && (T(t), (t = t || C), E)) {
                    if (11 !== f && (s = le.exec(e)))
                        if ((i = s[1])) {
                            if (9 === f) {
                                if (!(l = t.getElementById(i))) return n;
                                if (l.id === i) return n.push(l), n;
                            } else if (
                                c &&
                                (l = c.getElementById(i)) &&
                                g(t, l) &&
                                l.id === i
                            )
                                return n.push(l), n;
                        } else {
                            if (s[2])
                                return A.apply(n, t.getElementsByTagName(e)), n;
                            if (
                                (i = s[3]) &&
                                p.getElementsByClassName &&
                                t.getElementsByClassName
                            )
                                return (
                                    A.apply(n, t.getElementsByClassName(i)), n
                                );
                        }
                    if (
                        p.qsa &&
                        !y[e + ' '] &&
                        (!h || !h.test(e)) &&
                        (1 !== f || 'object' !== t.nodeName.toLowerCase())
                    ) {
                        if (
                            ((l = e),
                            (c = t),
                            1 === f && (re.test(e) || ne.test(e)))
                        ) {
                            for (
                                ((c = (ce.test(e) && ye(t.parentNode)) || t) ===
                                    t &&
                                    p.scope) ||
                                    ((a = t.getAttribute('id'))
                                        ? (a = a.replace(fe, M))
                                        : t.setAttribute('id', (a = S))),
                                    o = (u = d(e)).length;
                                o--;

                            )
                                u[o] = (a ? '#' + a : ':scope') + ' ' + P(u[o]);
                            l = u.join(',');
                        }
                        try {
                            return A.apply(n, c.querySelectorAll(l)), n;
                        } catch (t) {
                            y(e, !0);
                        } finally {
                            a === S && t.removeAttribute('id');
                        }
                    }
                }
                return B(e.replace(m, '$1'), t, n, r);
            }
            function q() {
                var r = [];
                return function e(t, n) {
                    return (
                        r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
                        (e[t + ' '] = n)
                    );
                };
            }
            function L(e) {
                return (e[S] = !0), e;
            }
            function H(e) {
                var t = C.createElement('fieldset');
                try {
                    return !!e(t);
                } catch (e) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                }
            }
            function de(e, t) {
                for (var n = e.split('|'), r = n.length; r--; )
                    b.attrHandle[n[r]] = t;
            }
            function he(e, t) {
                var n = t && e,
                    r =
                        n &&
                        1 === e.nodeType &&
                        1 === t.nodeType &&
                        e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
            }
            function ge(t) {
                return function (e) {
                    return 'form' in e
                        ? e.parentNode && !1 === e.disabled
                            ? 'label' in e
                                ? 'label' in e.parentNode
                                    ? e.parentNode.disabled === t
                                    : e.disabled === t
                                : e.isDisabled === t ||
                                  (e.isDisabled !== !t && pe(e) === t)
                            : e.disabled === t
                        : 'label' in e && e.disabled === t;
                };
            }
            function O(a) {
                return L(function (o) {
                    return (
                        (o = +o),
                        L(function (e, t) {
                            for (
                                var n, r = a([], e.length, o), i = r.length;
                                i--;

                            )
                                e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                        })
                    );
                });
            }
            function ye(e) {
                return e && void 0 !== e.getElementsByTagName && e;
            }
            for (e in ((p = D.support = {}),
            (W = D.isXML =
                function (e) {
                    var t = e && e.namespaceURI,
                        e = e && (e.ownerDocument || e).documentElement;
                    return !ae.test(t || (e && e.nodeName) || 'HTML');
                }),
            (T = D.setDocument =
                function (e) {
                    var e = e ? e.ownerDocument || e : c;
                    return (
                        e != C &&
                            9 === e.nodeType &&
                            e.documentElement &&
                            ((n = (C = e).documentElement),
                            (E = !W(C)),
                            c != C &&
                                (e = C.defaultView) &&
                                e.top !== e &&
                                (e.addEventListener
                                    ? e.addEventListener('unload', I, !1)
                                    : e.attachEvent &&
                                      e.attachEvent('onunload', I)),
                            (p.scope = H(function (e) {
                                return (
                                    n
                                        .appendChild(e)
                                        .appendChild(C.createElement('div')),
                                    void 0 !== e.querySelectorAll &&
                                        !e.querySelectorAll(
                                            ':scope fieldset div'
                                        ).length
                                );
                            })),
                            (p.attributes = H(function (e) {
                                return (
                                    (e.className = 'i'),
                                    !e.getAttribute('className')
                                );
                            })),
                            (p.getElementsByTagName = H(function (e) {
                                return (
                                    e.appendChild(C.createComment('')),
                                    !e.getElementsByTagName('*').length
                                );
                            })),
                            (p.getElementsByClassName = N.test(
                                C.getElementsByClassName
                            )),
                            (p.getById = H(function (e) {
                                return (
                                    (n.appendChild(e).id = S),
                                    !C.getElementsByName ||
                                        !C.getElementsByName(S).length
                                );
                            })),
                            p.getById
                                ? ((b.filter.ID = function (e) {
                                      var t = e.replace(j, f);
                                      return function (e) {
                                          return e.getAttribute('id') === t;
                                      };
                                  }),
                                  (b.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && E)
                                          return (t = t.getElementById(e))
                                              ? [t]
                                              : [];
                                  }))
                                : ((b.filter.ID = function (e) {
                                      var t = e.replace(j, f);
                                      return function (e) {
                                          e =
                                              void 0 !== e.getAttributeNode &&
                                              e.getAttributeNode('id');
                                          return e && e.value === t;
                                      };
                                  }),
                                  (b.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && E) {
                                          var n,
                                              r,
                                              i,
                                              o = t.getElementById(e);
                                          if (o) {
                                              if (
                                                  (n =
                                                      o.getAttributeNode(
                                                          'id'
                                                      )) &&
                                                  n.value === e
                                              )
                                                  return [o];
                                              for (
                                                  i = t.getElementsByName(e),
                                                      r = 0;
                                                  (o = i[r++]);

                                              )
                                                  if (
                                                      (n =
                                                          o.getAttributeNode(
                                                              'id'
                                                          )) &&
                                                      n.value === e
                                                  )
                                                      return [o];
                                          }
                                          return [];
                                      }
                                  })),
                            (b.find.TAG = p.getElementsByTagName
                                ? function (e, t) {
                                      return void 0 !== t.getElementsByTagName
                                          ? t.getElementsByTagName(e)
                                          : p.qsa
                                          ? t.querySelectorAll(e)
                                          : void 0;
                                  }
                                : function (e, t) {
                                      var n,
                                          r = [],
                                          i = 0,
                                          o = t.getElementsByTagName(e);
                                      if ('*' !== e) return o;
                                      for (; (n = o[i++]); )
                                          1 === n.nodeType && r.push(n);
                                      return r;
                                  }),
                            (b.find.CLASS =
                                p.getElementsByClassName &&
                                function (e, t) {
                                    if (
                                        void 0 !== t.getElementsByClassName &&
                                        E
                                    )
                                        return t.getElementsByClassName(e);
                                }),
                            (r = []),
                            (h = []),
                            (p.qsa = N.test(C.querySelectorAll)) &&
                                (H(function (e) {
                                    var t;
                                    (n.appendChild(e).innerHTML =
                                        "<a id='" +
                                        S +
                                        "'></a><select id='" +
                                        S +
                                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                        e.querySelectorAll(
                                            "[msallowcapture^='']"
                                        ).length &&
                                            h.push(
                                                '[*^$]=' + a + '*(?:\'\'|"")'
                                            ),
                                        e.querySelectorAll('[selected]')
                                            .length ||
                                            h.push(
                                                '\\[' +
                                                    a +
                                                    '*(?:value|' +
                                                    J +
                                                    ')'
                                            ),
                                        e.querySelectorAll('[id~=' + S + '-]')
                                            .length || h.push('~='),
                                        (t =
                                            C.createElement(
                                                'input'
                                            )).setAttribute('name', ''),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']")
                                            .length ||
                                            h.push(
                                                '\\[' +
                                                    a +
                                                    '*name' +
                                                    a +
                                                    '*=' +
                                                    a +
                                                    '*(?:\'\'|"")'
                                            ),
                                        e.querySelectorAll(':checked').length ||
                                            h.push(':checked'),
                                        e.querySelectorAll('a#' + S + '+*')
                                            .length || h.push('.#.+[+~]'),
                                        e.querySelectorAll('\\\f'),
                                        h.push('[\\r\\n\\f]');
                                }),
                                H(function (e) {
                                    e.innerHTML =
                                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = C.createElement('input');
                                    t.setAttribute('type', 'hidden'),
                                        e
                                            .appendChild(t)
                                            .setAttribute('name', 'D'),
                                        e.querySelectorAll('[name=d]').length &&
                                            h.push('name' + a + '*[*^$|!~]?='),
                                        2 !==
                                            e.querySelectorAll(':enabled')
                                                .length &&
                                            h.push(':enabled', ':disabled'),
                                        (n.appendChild(e).disabled = !0),
                                        2 !==
                                            e.querySelectorAll(':disabled')
                                                .length &&
                                            h.push(':enabled', ':disabled'),
                                        e.querySelectorAll('*,:x'),
                                        h.push(',.*:');
                                })),
                            (p.matchesSelector = N.test(
                                (i =
                                    n.matches ||
                                    n.webkitMatchesSelector ||
                                    n.mozMatchesSelector ||
                                    n.oMatchesSelector ||
                                    n.msMatchesSelector)
                            )) &&
                                H(function (e) {
                                    (p.disconnectedMatch = i.call(e, '*')),
                                        i.call(e, "[s!='']:x"),
                                        r.push('!=', Z);
                                }),
                            (h = h.length && new RegExp(h.join('|'))),
                            (r = r.length && new RegExp(r.join('|'))),
                            (e = N.test(n.compareDocumentPosition)),
                            (g =
                                e || N.test(n.contains)
                                    ? function (e, t) {
                                          var n =
                                                  9 === e.nodeType
                                                      ? e.documentElement
                                                      : e,
                                              t = t && t.parentNode;
                                          return (
                                              e === t ||
                                              !(
                                                  !t ||
                                                  1 !== t.nodeType ||
                                                  !(n.contains
                                                      ? n.contains(t)
                                                      : e.compareDocumentPosition &&
                                                        16 &
                                                            e.compareDocumentPosition(
                                                                t
                                                            ))
                                              )
                                          );
                                      }
                                    : function (e, t) {
                                          if (t)
                                              for (; (t = t.parentNode); )
                                                  if (t === e) return !0;
                                          return !1;
                                      }),
                            (X = e
                                ? function (e, t) {
                                      return e === t
                                          ? ((l = !0), 0)
                                          : !e.compareDocumentPosition -
                                                !t.compareDocumentPosition ||
                                                (1 &
                                                    (n =
                                                        (e.ownerDocument ||
                                                            e) ==
                                                        (t.ownerDocument || t)
                                                            ? e.compareDocumentPosition(
                                                                  t
                                                              )
                                                            : 1) ||
                                                (!p.sortDetached &&
                                                    t.compareDocumentPosition(
                                                        e
                                                    ) === n)
                                                    ? e == C ||
                                                      (e.ownerDocument == c &&
                                                          g(c, e))
                                                        ? -1
                                                        : t == C ||
                                                          (t.ownerDocument ==
                                                              c &&
                                                              g(c, t))
                                                        ? 1
                                                        : u
                                                        ? v(u, e) - v(u, t)
                                                        : 0
                                                    : 4 & n
                                                    ? -1
                                                    : 1);
                                      var n;
                                  }
                                : function (e, t) {
                                      if (e === t) return (l = !0), 0;
                                      var n,
                                          r = 0,
                                          i = e.parentNode,
                                          o = t.parentNode,
                                          a = [e],
                                          s = [t];
                                      if (!i || !o)
                                          return e == C
                                              ? -1
                                              : t == C
                                              ? 1
                                              : i
                                              ? -1
                                              : o
                                              ? 1
                                              : u
                                              ? v(u, e) - v(u, t)
                                              : 0;
                                      if (i === o) return he(e, t);
                                      for (n = e; (n = n.parentNode); )
                                          a.unshift(n);
                                      for (n = t; (n = n.parentNode); )
                                          s.unshift(n);
                                      for (; a[r] === s[r]; ) r++;
                                      return r
                                          ? he(a[r], s[r])
                                          : a[r] == c
                                          ? -1
                                          : s[r] == c
                                          ? 1
                                          : 0;
                                  })),
                        C
                    );
                }),
            (D.matches = function (e, t) {
                return D(e, null, null, t);
            }),
            (D.matchesSelector = function (e, t) {
                if (
                    (T(e),
                    p.matchesSelector &&
                        E &&
                        !y[t + ' '] &&
                        (!r || !r.test(t)) &&
                        (!h || !h.test(t)))
                )
                    try {
                        var n = i.call(e, t);
                        if (
                            n ||
                            p.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return n;
                    } catch (e) {
                        y(t, !0);
                    }
                return 0 < D(t, C, null, [e]).length;
            }),
            (D.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e), g(e, t);
            }),
            (D.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    n =
                        n && V.call(b.attrHandle, t.toLowerCase())
                            ? n(e, t, !E)
                            : void 0;
                return void 0 !== n
                    ? n
                    : p.attributes || !E
                    ? e.getAttribute(t)
                    : (n = e.getAttributeNode(t)) && n.specified
                    ? n.value
                    : null;
            }),
            (D.escape = function (e) {
                return (e + '').replace(fe, M);
            }),
            (D.error = function (e) {
                throw new Error('Syntax error, unrecognized expression: ' + e);
            }),
            (D.uniqueSort = function (e) {
                var t,
                    n = [],
                    r = 0,
                    i = 0;
                if (
                    ((l = !p.detectDuplicates),
                    (u = !p.sortStable && e.slice(0)),
                    e.sort(X),
                    l)
                ) {
                    for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                    for (; r--; ) e.splice(n[r], 1);
                }
                return (u = null), e;
            }),
            (o = D.getText =
                function (e) {
                    var t,
                        n = '',
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ('string' == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += o(e);
                        } else if (3 === i || 4 === i) return e.nodeValue;
                    } else for (; (t = e[r++]); ) n += o(t);
                    return n;
                }),
            ((b = D.selectors =
                {
                    cacheLength: 50,
                    createPseudo: L,
                    match: x,
                    attrHandle: {},
                    find: {},
                    relative: {
                        '>': {
                            dir: 'parentNode',
                            first: !0,
                        },
                        ' ': {
                            dir: 'parentNode',
                        },
                        '+': {
                            dir: 'previousSibling',
                            first: !0,
                        },
                        '~': {
                            dir: 'previousSibling',
                        },
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return (
                                (e[1] = e[1].replace(j, f)),
                                (e[3] = (e[3] || e[4] || e[5] || '').replace(
                                    j,
                                    f
                                )),
                                '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                                e.slice(0, 4)
                            );
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                'nth' === e[1].slice(0, 3)
                                    ? (e[3] || D.error(e[0]),
                                      (e[4] = +(e[4]
                                          ? e[5] + (e[6] || 1)
                                          : 2 *
                                            ('even' === e[3] ||
                                                'odd' === e[3]))),
                                      (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                                    : e[3] && D.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return x.CHILD.test(e[0])
                                ? null
                                : (e[3]
                                      ? (e[2] = e[4] || e[5] || '')
                                      : n &&
                                        ie.test(n) &&
                                        (t = d(n, !0)) &&
                                        (t =
                                            n.indexOf(')', n.length - t) -
                                            n.length) &&
                                        ((e[0] = e[0].slice(0, t)),
                                        (e[2] = n.slice(0, t))),
                                  e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(j, f).toLowerCase();
                            return '*' === e
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return (
                                          e.nodeName &&
                                          e.nodeName.toLowerCase() === t
                                      );
                                  };
                        },
                        CLASS: function (e) {
                            var t = _[e + ' '];
                            return (
                                t ||
                                ((t = new RegExp(
                                    '(^|' + a + ')' + e + '(' + a + '|$)'
                                )) &&
                                    _(e, function (e) {
                                        return t.test(
                                            ('string' == typeof e.className &&
                                                e.className) ||
                                                (void 0 !== e.getAttribute &&
                                                    e.getAttribute('class')) ||
                                                ''
                                        );
                                    }))
                            );
                        },
                        ATTR: function (t, n, r) {
                            return function (e) {
                                e = D.attr(e, t);
                                return null == e
                                    ? '!=' === n
                                    : !n ||
                                          ((e += ''),
                                          '=' === n
                                              ? e === r
                                              : '!=' === n
                                              ? e !== r
                                              : '^=' === n
                                              ? r && 0 === e.indexOf(r)
                                              : '*=' === n
                                              ? r && -1 < e.indexOf(r)
                                              : '$=' === n
                                              ? r && e.slice(-r.length) === r
                                              : '~=' === n
                                              ? -1 <
                                                (
                                                    ' ' +
                                                    e.replace(ee, ' ') +
                                                    ' '
                                                ).indexOf(r)
                                              : '|=' === n &&
                                                (e === r ||
                                                    e.slice(0, r.length + 1) ===
                                                        r + '-'));
                            };
                        },
                        CHILD: function (h, e, t, g, y) {
                            var m = 'nth' !== h.slice(0, 3),
                                v = 'last' !== h.slice(-4),
                                x = 'of-type' === e;
                            return 1 === g && 0 === y
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (e, t, n) {
                                      var r,
                                          i,
                                          o,
                                          a,
                                          s,
                                          u,
                                          l =
                                              m != v
                                                  ? 'nextSibling'
                                                  : 'previousSibling',
                                          c = e.parentNode,
                                          f = x && e.nodeName.toLowerCase(),
                                          p = !n && !x,
                                          d = !1;
                                      if (c) {
                                          if (m) {
                                              for (; l; ) {
                                                  for (a = e; (a = a[l]); )
                                                      if (
                                                          x
                                                              ? a.nodeName.toLowerCase() ===
                                                                f
                                                              : 1 === a.nodeType
                                                      )
                                                          return !1;
                                                  u = l =
                                                      'only' === h &&
                                                      !u &&
                                                      'nextSibling';
                                              }
                                              return !0;
                                          }
                                          if (
                                              ((u = [
                                                  v
                                                      ? c.firstChild
                                                      : c.lastChild,
                                              ]),
                                              v && p)
                                          ) {
                                              for (
                                                  d =
                                                      (s =
                                                          (r =
                                                              (i =
                                                                  (o =
                                                                      (a = c)[
                                                                          S
                                                                      ] ||
                                                                      (a[S] =
                                                                          {}))[
                                                                      a.uniqueID
                                                                  ] ||
                                                                  (o[
                                                                      a.uniqueID
                                                                  ] = {}))[h] ||
                                                              [])[0] === k &&
                                                          r[1]) && r[2],
                                                      a = s && c.childNodes[s];
                                                  (a =
                                                      (++s && a && a[l]) ||
                                                      (d = s = 0) ||
                                                      u.pop());

                                              )
                                                  if (
                                                      1 === a.nodeType &&
                                                      ++d &&
                                                      a === e
                                                  ) {
                                                      i[h] = [k, s, d];
                                                      break;
                                                  }
                                          } else if (
                                              !1 ===
                                              (d = p
                                                  ? (s =
                                                        (r =
                                                            (i =
                                                                (o =
                                                                    (a = e)[
                                                                        S
                                                                    ] ||
                                                                    (a[S] =
                                                                        {}))[
                                                                    a.uniqueID
                                                                ] ||
                                                                (o[a.uniqueID] =
                                                                    {}))[h] ||
                                                            [])[0] === k &&
                                                        r[1])
                                                  : d)
                                          )
                                              for (
                                                  ;
                                                  (a =
                                                      (++s && a && a[l]) ||
                                                      (d = s = 0) ||
                                                      u.pop()) &&
                                                  ((x
                                                      ? a.nodeName.toLowerCase() !==
                                                        f
                                                      : 1 !== a.nodeType) ||
                                                      !++d ||
                                                      (p &&
                                                          ((i =
                                                              (o =
                                                                  a[S] ||
                                                                  (a[S] = {}))[
                                                                  a.uniqueID
                                                              ] ||
                                                              (o[a.uniqueID] =
                                                                  {}))[h] = [
                                                              k,
                                                              d,
                                                          ]),
                                                      a !== e));

                                              );
                                          return (
                                              (d -= y) === g ||
                                              (d % g == 0 && 0 <= d / g)
                                          );
                                      }
                                  };
                        },
                        PSEUDO: function (e, o) {
                            var t,
                                a =
                                    b.pseudos[e] ||
                                    b.setFilters[e.toLowerCase()] ||
                                    D.error('unsupported pseudo: ' + e);
                            return a[S]
                                ? a(o)
                                : 1 < a.length
                                ? ((t = [e, e, '', o]),
                                  b.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? L(function (e, t) {
                                            for (
                                                var n,
                                                    r = a(e, o),
                                                    i = r.length;
                                                i--;

                                            )
                                                e[(n = v(e, r[i]))] = !(t[n] =
                                                    r[i]);
                                        })
                                      : function (e) {
                                            return a(e, 0, t);
                                        })
                                : a;
                        },
                    },
                    pseudos: {
                        not: L(function (e) {
                            var r = [],
                                i = [],
                                s = F(e.replace(m, '$1'));
                            return s[S]
                                ? L(function (e, t, n, r) {
                                      for (
                                          var i,
                                              o = s(e, null, r, []),
                                              a = e.length;
                                          a--;

                                      )
                                          (i = o[a]) && (e[a] = !(t[a] = i));
                                  })
                                : function (e, t, n) {
                                      return (
                                          (r[0] = e),
                                          s(r, null, n, i),
                                          (r[0] = null),
                                          !i.pop()
                                      );
                                  };
                        }),
                        has: L(function (t) {
                            return function (e) {
                                return 0 < D(t, e).length;
                            };
                        }),
                        contains: L(function (t) {
                            return (
                                (t = t.replace(j, f)),
                                function (e) {
                                    return (
                                        -1 < (e.textContent || o(e)).indexOf(t)
                                    );
                                }
                            );
                        }),
                        lang: L(function (n) {
                            return (
                                oe.test(n || '') ||
                                    D.error('unsupported lang: ' + n),
                                (n = n.replace(j, f).toLowerCase()),
                                function (e) {
                                    var t;
                                    do {
                                        if (
                                            (t = E
                                                ? e.lang
                                                : e.getAttribute('xml:lang') ||
                                                  e.getAttribute('lang'))
                                        )
                                            return (
                                                (t = t.toLowerCase()) === n ||
                                                0 === t.indexOf(n + '-')
                                            );
                                    } while (
                                        (e = e.parentNode) &&
                                        1 === e.nodeType
                                    );
                                    return !1;
                                }
                            );
                        }),
                        target: function (e) {
                            var t = R.location && R.location.hash;
                            return t && t.slice(1) === e.id;
                        },
                        root: function (e) {
                            return e === n;
                        },
                        focus: function (e) {
                            return (
                                e === C.activeElement &&
                                (!C.hasFocus || C.hasFocus()) &&
                                !!(e.type || e.href || ~e.tabIndex)
                            );
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ('input' === t && !!e.checked) ||
                                ('option' === t && !!e.selected)
                            );
                        },
                        selected: function (e) {
                            return (
                                e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            );
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !b.pseudos.empty(e);
                        },
                        header: function (e) {
                            return ue.test(e.nodeName);
                        },
                        input: function (e) {
                            return se.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ('input' === t && 'button' === e.type) ||
                                'button' === t
                            );
                        },
                        text: function (e) {
                            return (
                                'input' === e.nodeName.toLowerCase() &&
                                'text' === e.type &&
                                (null == (e = e.getAttribute('type')) ||
                                    'text' === e.toLowerCase())
                            );
                        },
                        first: O(function () {
                            return [0];
                        }),
                        last: O(function (e, t) {
                            return [t - 1];
                        }),
                        eq: O(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: O(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: O(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: O(function (e, t, n) {
                            for (
                                var r = n < 0 ? n + t : t < n ? t : n;
                                0 <= --r;

                            )
                                e.push(r);
                            return e;
                        }),
                        gt: O(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; )
                                e.push(r);
                            return e;
                        }),
                    },
                }).pseudos.nth = b.pseudos.eq),
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0,
            }))
                b.pseudos[e] = (function (t) {
                    return function (e) {
                        return (
                            'input' === e.nodeName.toLowerCase() && e.type === t
                        );
                    };
                })(e);
            for (e in {
                submit: !0,
                reset: !0,
            })
                b.pseudos[e] = (function (n) {
                    return function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ('input' === t || 'button' === t) && e.type === n
                        );
                    };
                })(e);
            function me() {}
            function P(e) {
                for (var t = 0, n = e.length, r = ''; t < n; t++)
                    r += e[t].value;
                return r;
            }
            function ve(a, e, t) {
                var s = e.dir,
                    u = e.next,
                    l = u || s,
                    c = t && 'parentNode' === l,
                    f = $++;
                return e.first
                    ? function (e, t, n) {
                          for (; (e = e[s]); )
                              if (1 === e.nodeType || c) return a(e, t, n);
                          return !1;
                      }
                    : function (e, t, n) {
                          var r,
                              i,
                              o = [k, f];
                          if (n) {
                              for (; (e = e[s]); )
                                  if ((1 === e.nodeType || c) && a(e, t, n))
                                      return !0;
                          } else
                              for (; (e = e[s]); )
                                  if (1 === e.nodeType || c)
                                      if (
                                          ((i =
                                              (i = e[S] || (e[S] = {}))[
                                                  e.uniqueID
                                              ] || (i[e.uniqueID] = {})),
                                          u && u === e.nodeName.toLowerCase())
                                      )
                                          e = e[s] || e;
                                      else {
                                          if (
                                              (r = i[l]) &&
                                              r[0] === k &&
                                              r[1] === f
                                          )
                                              return (o[2] = r[2]);
                                          if (((i[l] = o)[2] = a(e, t, n)))
                                              return !0;
                                      }
                          return !1;
                      };
            }
            function xe(i) {
                return 1 < i.length
                    ? function (e, t, n) {
                          for (var r = i.length; r--; )
                              if (!i[r](e, t, n)) return !1;
                          return !0;
                      }
                    : i[0];
            }
            function be(e, t, n, r, i) {
                for (
                    var o, a = [], s = 0, u = e.length, l = null != t;
                    s < u;
                    s++
                )
                    !(o = e[s]) ||
                        (n && !n(o, r, i)) ||
                        (a.push(o), l && t.push(s));
                return a;
            }
            function we(e) {
                for (
                    var r,
                        t,
                        n,
                        i = e.length,
                        o = b.relative[e[0].type],
                        a = o || b.relative[' '],
                        s = o ? 1 : 0,
                        u = ve(
                            function (e) {
                                return e === r;
                            },
                            a,
                            !0
                        ),
                        l = ve(
                            function (e) {
                                return -1 < v(r, e);
                            },
                            a,
                            !0
                        ),
                        c = [
                            function (e, t, n) {
                                e =
                                    (!o && (n || t !== w)) ||
                                    ((r = t).nodeType ? u : l)(e, t, n);
                                return (r = null), e;
                            },
                        ];
                    s < i;
                    s++
                )
                    if ((t = b.relative[e[s].type])) c = [ve(xe(c), t)];
                    else {
                        if (
                            (t = b.filter[e[s].type].apply(null, e[s].matches))[
                                S
                            ]
                        ) {
                            for (n = ++s; n < i && !b.relative[e[n].type]; n++);
                            return (function e(d, h, g, y, m, t) {
                                return (
                                    y && !y[S] && (y = e(y)),
                                    m && !m[S] && (m = e(m, t)),
                                    L(function (e, t, n, r) {
                                        var i,
                                            o,
                                            a,
                                            s = [],
                                            u = [],
                                            l = t.length,
                                            c =
                                                e ||
                                                (function (e, t, n) {
                                                    for (
                                                        var r = 0, i = t.length;
                                                        r < i;
                                                        r++
                                                    )
                                                        D(e, t[r], n);
                                                    return n;
                                                })(
                                                    h || '*',
                                                    n.nodeType ? [n] : n,
                                                    []
                                                ),
                                            f =
                                                !d || (!e && h)
                                                    ? c
                                                    : be(c, s, d, n, r),
                                            p = g
                                                ? m || (e ? d : l || y)
                                                    ? []
                                                    : t
                                                : f;
                                        if ((g && g(f, p, n, r), y))
                                            for (
                                                i = be(p, u),
                                                    y(i, [], n, r),
                                                    o = i.length;
                                                o--;

                                            )
                                                (a = i[o]) &&
                                                    (p[u[o]] = !(f[u[o]] = a));
                                        if (e) {
                                            if (m || d) {
                                                if (m) {
                                                    for (
                                                        i = [], o = p.length;
                                                        o--;

                                                    )
                                                        (a = p[o]) &&
                                                            i.push((f[o] = a));
                                                    m(null, (p = []), i, r);
                                                }
                                                for (o = p.length; o--; )
                                                    (a = p[o]) &&
                                                        -1 <
                                                            (i = m
                                                                ? v(e, a)
                                                                : s[o]) &&
                                                        (e[i] = !(t[i] = a));
                                            }
                                        } else (p = be(p === t ? p.splice(l, p.length) : p)), m ? m(null, t, p, r) : A.apply(t, p);
                                    })
                                );
                            })(
                                1 < s && xe(c),
                                1 < s &&
                                    P(
                                        e.slice(0, s - 1).concat({
                                            value:
                                                ' ' === e[s - 2].type
                                                    ? '*'
                                                    : '',
                                        })
                                    ).replace(m, '$1'),
                                t,
                                s < n && we(e.slice(s, n)),
                                n < i && we((e = e.slice(n))),
                                n < i && P(e)
                            );
                        }
                        c.push(t);
                    }
                return xe(c);
            }
            return (
                (me.prototype = b.filters = b.pseudos),
                (b.setFilters = new me()),
                (d = D.tokenize =
                    function (e, t) {
                        var n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l = z[e + ' '];
                        if (l) return t ? 0 : l.slice(0);
                        for (a = e, s = [], u = b.preFilter; a; ) {
                            for (o in ((n && !(r = te.exec(a))) ||
                                (r && (a = a.slice(r[0].length) || a),
                                s.push((i = []))),
                            (n = !1),
                            (r = ne.exec(a)) &&
                                ((n = r.shift()),
                                i.push({
                                    value: n,
                                    type: r[0].replace(m, ' '),
                                }),
                                (a = a.slice(n.length))),
                            b.filter))
                                !(r = x[o].exec(a)) ||
                                    (u[o] && !(r = u[o](r))) ||
                                    ((n = r.shift()),
                                    i.push({
                                        value: n,
                                        type: o,
                                        matches: r,
                                    }),
                                    (a = a.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? a.length : a ? D.error(e) : z(e, s).slice(0);
                    }),
                (F = D.compile =
                    function (e, t) {
                        var n,
                            y,
                            m,
                            v,
                            x,
                            r,
                            i = [],
                            o = [],
                            a = U[e + ' '];
                        if (!a) {
                            for (n = (t = t || d(e)).length; n--; )
                                ((a = we(t[n]))[S] ? i : o).push(a);
                            (a = U(
                                e,
                                ((v = 0 < (m = i).length),
                                (x = 0 < (y = o).length),
                                (r = function (e, t, n, r, i) {
                                    var o,
                                        a,
                                        s,
                                        u = 0,
                                        l = '0',
                                        c = e && [],
                                        f = [],
                                        p = w,
                                        d = e || (x && b.find.TAG('*', i)),
                                        h = (k +=
                                            null == p
                                                ? 1
                                                : Math.random() || 0.1),
                                        g = d.length;
                                    for (
                                        i && (w = t == C || t || i);
                                        l !== g && null != (o = d[l]);
                                        l++
                                    ) {
                                        if (x && o) {
                                            for (
                                                a = 0,
                                                    t ||
                                                        o.ownerDocument == C ||
                                                        (T(o), (n = !E));
                                                (s = y[a++]);

                                            )
                                                if (s(o, t || C, n)) {
                                                    r.push(o);
                                                    break;
                                                }
                                            i && (k = h);
                                        }
                                        v &&
                                            ((o = !s && o) && u--,
                                            e && c.push(o));
                                    }
                                    if (((u += l), v && l !== u)) {
                                        for (a = 0; (s = m[a++]); )
                                            s(c, f, t, n);
                                        if (e) {
                                            if (0 < u)
                                                for (; l--; )
                                                    c[l] ||
                                                        f[l] ||
                                                        (f[l] = G.call(r));
                                            f = be(f);
                                        }
                                        A.apply(r, f),
                                            i &&
                                                !e &&
                                                0 < f.length &&
                                                1 < u + m.length &&
                                                D.uniqueSort(r);
                                    }
                                    return i && ((k = h), (w = p)), c;
                                }),
                                v ? L(r) : r)
                            )).selector = e;
                        }
                        return a;
                    }),
                (B = D.select =
                    function (e, t, n, r) {
                        var i,
                            o,
                            a,
                            s,
                            u,
                            l = 'function' == typeof e && e,
                            c = !r && d((e = l.selector || e));
                        if (((n = n || []), 1 === c.length)) {
                            if (
                                2 < (o = c[0] = c[0].slice(0)).length &&
                                'ID' === (a = o[0]).type &&
                                9 === t.nodeType &&
                                E &&
                                b.relative[o[1].type]
                            ) {
                                if (
                                    !(t = (b.find.ID(
                                        a.matches[0].replace(j, f),
                                        t
                                    ) || [])[0])
                                )
                                    return n;
                                l && (t = t.parentNode),
                                    (e = e.slice(o.shift().value.length));
                            }
                            for (
                                i = x.needsContext.test(e) ? 0 : o.length;
                                i-- && ((a = o[i]), !b.relative[(s = a.type)]);

                            )
                                if (
                                    (u = b.find[s]) &&
                                    (r = u(
                                        a.matches[0].replace(j, f),
                                        (ce.test(o[0].type) &&
                                            ye(t.parentNode)) ||
                                            t
                                    ))
                                ) {
                                    if (
                                        (o.splice(i, 1), (e = r.length && P(o)))
                                    )
                                        break;
                                    return A.apply(n, r), n;
                                }
                        }
                        return (
                            (l || F(e, c))(
                                r,
                                t,
                                !E,
                                n,
                                !t || (ce.test(e) && ye(t.parentNode)) || t
                            ),
                            n
                        );
                    }),
                (p.sortStable = S.split('').sort(X).join('') === S),
                (p.detectDuplicates = !!l),
                T(),
                (p.sortDetached = H(function (e) {
                    return (
                        1 &
                        e.compareDocumentPosition(C.createElement('fieldset'))
                    );
                })),
                H(function (e) {
                    return (
                        (e.innerHTML = "<a href='#'></a>"),
                        '#' === e.firstChild.getAttribute('href')
                    );
                }) ||
                    de('type|href|height|width', function (e, t, n) {
                        if (!n)
                            return e.getAttribute(
                                t,
                                'type' === t.toLowerCase() ? 1 : 2
                            );
                    }),
                (p.attributes &&
                    H(function (e) {
                        return (
                            (e.innerHTML = '<input/>'),
                            e.firstChild.setAttribute('value', ''),
                            '' === e.firstChild.getAttribute('value')
                        );
                    })) ||
                    de('value', function (e, t, n) {
                        if (!n && 'input' === e.nodeName.toLowerCase())
                            return e.defaultValue;
                    }),
                H(function (e) {
                    return null == e.getAttribute('disabled');
                }) ||
                    de(J, function (e, t, n) {
                        if (!n)
                            return !0 === e[t]
                                ? t.toLowerCase()
                                : (n = e.getAttributeNode(t)) && n.specified
                                ? n.value
                                : null;
                    }),
                D
            );
        })(T),
        Q =
            ((E.find = e),
            (E.expr = e.selectors),
            (E.expr[':'] = E.expr.pseudos),
            (E.uniqueSort = E.unique = e.uniqueSort),
            (E.text = e.getText),
            (E.isXMLDoc = e.isXML),
            (E.contains = e.contains),
            (E.escapeSelector = e.escape),
            E.expr.match.needsContext);
    function u(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var J = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function K(e, n, r) {
        return v(n)
            ? E.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? E.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : 'string' != typeof n
            ? E.grep(e, function (e) {
                  return -1 < F.call(n, e) !== r;
              })
            : E.filter(n, e, r);
    }
    (E.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === r.nodeType
                ? E.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : E.find.matches(
                      e,
                      E.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        E.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ('string' != typeof e)
                    return this.pushStack(
                        E(e).filter(function () {
                            for (t = 0; t < r; t++)
                                if (E.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                    E.find(e, i[t], n);
                return 1 < r ? E.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(K(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(K(this, e || [], !0));
            },
            is: function (e) {
                return !!K(
                    this,
                    'string' == typeof e && Q.test(e) ? E(e) : e || [],
                    !1
                ).length;
            },
        });
    var Z,
        ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        te =
            (((E.fn.init = function (e, t, n) {
                if (!e) return this;
                if (((n = n || Z), 'string' != typeof e))
                    return e.nodeType
                        ? ((this[0] = e), (this.length = 1), this)
                        : v(e)
                        ? void 0 !== n.ready
                            ? n.ready(e)
                            : e(E)
                        : E.makeArray(e, this);
                if (
                    !(r =
                        '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
                            ? [null, e, null]
                            : ee.exec(e)) ||
                    (!r[1] && t)
                )
                    return (!t || t.jquery ? t || n : this.constructor(t)).find(
                        e
                    );
                if (r[1]) {
                    if (
                        ((t = t instanceof E ? t[0] : t),
                        E.merge(
                            this,
                            E.parseHTML(
                                r[1],
                                t && t.nodeType ? t.ownerDocument || t : C,
                                !0
                            )
                        ),
                        J.test(r[1]) && E.isPlainObject(t))
                    )
                        for (var r in t)
                            v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                }
                return (
                    (n = C.getElementById(r[2])) &&
                        ((this[0] = n), (this.length = 1)),
                    this
                );
            }).prototype = E.fn),
            (Z = E(C)),
            /^(?:parents|prev(?:Until|All))/),
        ne = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0,
        };
    function re(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    E.fn.extend({
        has: function (e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = 'string' != typeof e && E(e);
            if (!Q.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a
                                ? -1 < a.index(n)
                                : 1 === n.nodeType &&
                                  E.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? 'string' == typeof e
                    ? F.call(E(e), this[0])
                    : F.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        E.each(
            {
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                    return r(e, 'parentNode');
                },
                parentsUntil: function (e, t, n) {
                    return r(e, 'parentNode', n);
                },
                next: function (e) {
                    return re(e, 'nextSibling');
                },
                prev: function (e) {
                    return re(e, 'previousSibling');
                },
                nextAll: function (e) {
                    return r(e, 'nextSibling');
                },
                prevAll: function (e) {
                    return r(e, 'previousSibling');
                },
                nextUntil: function (e, t, n) {
                    return r(e, 'nextSibling', n);
                },
                prevUntil: function (e, t, n) {
                    return r(e, 'previousSibling', n);
                },
                siblings: function (e) {
                    return Y((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return Y(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && M(e.contentDocument)
                        ? e.contentDocument
                        : (u(e, 'template') && (e = e.content || e),
                          E.merge([], e.childNodes));
                },
            },
            function (r, i) {
                E.fn[r] = function (e, t) {
                    var n = E.map(this, i, e);
                    return (
                        (t = 'Until' !== r.slice(-5) ? e : t) &&
                            'string' == typeof t &&
                            (n = E.filter(t, n)),
                        1 < this.length &&
                            (ne[r] || E.uniqueSort(n),
                            te.test(r) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var S = /[^\x20\t\r\n\f]+/g;
    function c(e) {
        return e;
    }
    function ie(e) {
        throw e;
    }
    function oe(e, t, n, r) {
        var i;
        try {
            e && v((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && v((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (E.Callbacks = function (r) {
        var e, n;
        r =
            'string' == typeof r
                ? ((e = r),
                  (n = {}),
                  E.each(e.match(S) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : E.extend({}, r);
        function i() {
            for (s = s || r.once, a = o = !0; l.length; c = -1)
                for (t = l.shift(); ++c < u.length; )
                    !1 === u[c].apply(t[0], t[1]) &&
                        r.stopOnFalse &&
                        ((c = u.length), (t = !1));
            r.memory || (t = !1), (o = !1), s && (u = t ? [] : '');
        }
        var o,
            t,
            a,
            s,
            u = [],
            l = [],
            c = -1,
            f = {
                add: function () {
                    return (
                        u &&
                            (t && !o && ((c = u.length - 1), l.push(t)),
                            (function n(e) {
                                E.each(e, function (e, t) {
                                    v(t)
                                        ? (r.unique && f.has(t)) || u.push(t)
                                        : t &&
                                          t.length &&
                                          'string' !== h(t) &&
                                          n(t);
                                });
                            })(arguments),
                            t && !o && i()),
                        this
                    );
                },
                remove: function () {
                    return (
                        E.each(arguments, function (e, t) {
                            for (var n; -1 < (n = E.inArray(t, u, n)); )
                                u.splice(n, 1), n <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < E.inArray(e, u) : 0 < u.length;
                },
                empty: function () {
                    return (u = u && []), this;
                },
                disable: function () {
                    return (s = l = []), (u = t = ''), this;
                },
                disabled: function () {
                    return !u;
                },
                lock: function () {
                    return (s = l = []), t || o || (u = t = ''), this;
                },
                locked: function () {
                    return !!s;
                },
                fireWith: function (e, t) {
                    return (
                        s ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            l.push(t),
                            o || i()),
                        this
                    );
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!a;
                },
            };
        return f;
    }),
        E.extend({
            Deferred: function (e) {
                var o = [
                        [
                            'notify',
                            'progress',
                            E.Callbacks('memory'),
                            E.Callbacks('memory'),
                            2,
                        ],
                        [
                            'resolve',
                            'done',
                            E.Callbacks('once memory'),
                            E.Callbacks('once memory'),
                            0,
                            'resolved',
                        ],
                        [
                            'reject',
                            'fail',
                            E.Callbacks('once memory'),
                            E.Callbacks('once memory'),
                            1,
                            'rejected',
                        ],
                    ],
                    i = 'pending',
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return E.Deferred(function (r) {
                                E.each(o, function (e, t) {
                                    var n = v(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && v(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(r.notify)
                                                  .done(r.resolve)
                                                  .fail(r.reject)
                                            : r[t[0] + 'With'](
                                                  this,
                                                  n ? [e] : arguments
                                              );
                                    });
                                }),
                                    (i = null);
                            }).promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if (
                                                (e = a.apply(n, r)) ===
                                                o.promise()
                                            )
                                                throw new TypeError(
                                                    'Thenable self-resolution'
                                                );
                                            (t =
                                                e &&
                                                ('object' == typeof e ||
                                                    'function' == typeof e) &&
                                                e.then),
                                                v(t)
                                                    ? s
                                                        ? t.call(
                                                              e,
                                                              l(u, o, c, s),
                                                              l(u, o, ie, s)
                                                          )
                                                        : (u++,
                                                          t.call(
                                                              e,
                                                              l(u, o, c, s),
                                                              l(u, o, ie, s),
                                                              l(
                                                                  u,
                                                                  o,
                                                                  c,
                                                                  o.notifyWith
                                                              )
                                                          ))
                                                    : (a !== c &&
                                                          ((n = void 0),
                                                          (r = [e])),
                                                      (s || o.resolveWith)(
                                                          n,
                                                          r
                                                      ));
                                        }
                                    }
                                    var n = this,
                                        r = arguments,
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      E.Deferred
                                                          .exceptionHook &&
                                                          E.Deferred.exceptionHook(
                                                              e,
                                                              t.stackTrace
                                                          ),
                                                          u <= i + 1 &&
                                                              (a !== ie &&
                                                                  ((n = void 0),
                                                                  (r = [e])),
                                                              o.rejectWith(
                                                                  n,
                                                                  r
                                                              ));
                                                  }
                                              };
                                    i
                                        ? t()
                                        : (E.Deferred.getStackHook &&
                                              (t.stackTrace =
                                                  E.Deferred.getStackHook()),
                                          T.setTimeout(t));
                                };
                            }
                            return E.Deferred(function (e) {
                                o[0][3].add(
                                    l(0, e, v(r) ? r : c, e.notifyWith)
                                ),
                                    o[1][3].add(l(0, e, v(t) ? t : c)),
                                    o[2][3].add(l(0, e, v(n) ? n : ie));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? E.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    E.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return (
                                    s[t[0] + 'With'](
                                        this === s ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (s[t[0] + 'With'] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        (i[t] = this),
                            (o[t] =
                                1 < arguments.length ? s.call(arguments) : e),
                            --n || a.resolveWith(i, o);
                    };
                }
                var n = arguments.length,
                    r = n,
                    i = Array(r),
                    o = s.call(arguments),
                    a = E.Deferred();
                if (
                    n <= 1 &&
                    (oe(e, a.done(t(r)).resolve, a.reject, !n),
                    'pending' === a.state() || v(o[r] && o[r].then))
                )
                    return a.then();
                for (; r--; ) oe(o[r], t(r), a.reject);
                return a.promise();
            },
        });
    var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        se =
            ((E.Deferred.exceptionHook = function (e, t) {
                T.console &&
                    T.console.warn &&
                    e &&
                    ae.test(e.name) &&
                    T.console.warn(
                        'jQuery.Deferred exception: ' + e.message,
                        e.stack,
                        t
                    );
            }),
            (E.readyException = function (e) {
                T.setTimeout(function () {
                    throw e;
                });
            }),
            E.Deferred());
    function ue() {
        C.removeEventListener('DOMContentLoaded', ue),
            T.removeEventListener('load', ue),
            E.ready();
    }
    (E.fn.ready = function (e) {
        return (
            se.then(e).catch(function (e) {
                E.readyException(e);
            }),
            this
        );
    }),
        E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) ||
                    ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
                    se.resolveWith(C, [E]);
            },
        }),
        (E.ready.then = se.then),
        'complete' === C.readyState ||
        ('loading' !== C.readyState && !C.documentElement.doScroll)
            ? T.setTimeout(E.ready)
            : (C.addEventListener('DOMContentLoaded', ue),
              T.addEventListener('load', ue));
    function f(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ('object' === h(n))
            for (s in ((i = !0), n)) f(e, t, s, n[s], !0, o, a);
        else if (
            void 0 !== r &&
            ((i = !0),
            v(r) || (a = !0),
            (t = l
                ? a
                    ? (t.call(e, r), null)
                    : ((l = t),
                      function (e, t, n) {
                          return l.call(E(e), n);
                      })
                : t))
        )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }
    var le = /^-ms-/,
        ce = /-([a-z])/g;
    function fe(e, t) {
        return t.toUpperCase();
    }
    function x(e) {
        return e.replace(le, 'ms-').replace(ce, fe);
    }
    function m(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function pe() {
        this.expando = E.expando + pe.uid++;
    }
    (pe.uid = 1),
        (pe.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        m(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ('string' == typeof t) i[x(t)] = n;
                else for (r in t) i[x(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][x(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && 'string' == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(x)
                            : (t = x(t)) in r
                            ? [t]
                            : t.match(S) || []).length;
                        for (; n--; ) delete r[t[n]];
                    }
                    (void 0 !== t && !E.isEmptyObject(r)) ||
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !E.isEmptyObject(e);
            },
        });
    var b = new pe(),
        l = new pe(),
        de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        he = /[A-Z]/g;
    function ge(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = 'data-' + t.replace(he, '-$&').toLowerCase()),
                'string' == typeof (n = e.getAttribute(r)))
            ) {
                try {
                    n =
                        'true' === (i = n) ||
                        ('false' !== i &&
                            ('null' === i
                                ? null
                                : i === +i + ''
                                ? +i
                                : de.test(i)
                                ? JSON.parse(i)
                                : i));
                } catch (e) {}
                l.set(e, t, n);
            } else n = void 0;
        return n;
    }
    E.extend({
        hasData: function (e) {
            return l.hasData(e) || b.hasData(e);
        },
        data: function (e, t, n) {
            return l.access(e, t, n);
        },
        removeData: function (e, t) {
            l.remove(e, t);
        },
        _data: function (e, t, n) {
            return b.access(e, t, n);
        },
        _removeData: function (e, t) {
            b.remove(e, t);
        },
    }),
        E.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 !== n)
                    return 'object' == typeof n
                        ? this.each(function () {
                              l.set(this, n);
                          })
                        : f(
                              this,
                              function (e) {
                                  var t;
                                  if (o && void 0 === e)
                                      return void 0 !== (t = l.get(o, n)) ||
                                          void 0 !== (t = ge(o, n))
                                          ? t
                                          : void 0;
                                  this.each(function () {
                                      l.set(this, n, e);
                                  });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (
                    this.length &&
                    ((i = l.get(o)),
                    1 === o.nodeType && !b.get(o, 'hasDataAttrs'))
                ) {
                    for (t = a.length; t--; )
                        a[t] &&
                            0 === (r = a[t].name).indexOf('data-') &&
                            ((r = x(r.slice(5))), ge(o, r, i[r]));
                    b.set(o, 'hasDataAttrs', !0);
                }
                return i;
            },
            removeData: function (e) {
                return this.each(function () {
                    l.remove(this, e);
                });
            },
        }),
        E.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return (
                        (r = b.get(e, (t = (t || 'fx') + 'queue'))),
                        n &&
                            (!r || Array.isArray(n)
                                ? (r = b.access(e, t, E.makeArray(n)))
                                : r.push(n)),
                        r || []
                    );
            },
            dequeue: function (e, t) {
                t = t || 'fx';
                var n = E.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = E._queueHooks(e, t);
                'inprogress' === i && ((i = n.shift()), r--),
                    i &&
                        ('fx' === t && n.unshift('inprogress'),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                E.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + 'queueHooks';
                return (
                    b.get(e, n) ||
                    b.access(e, n, {
                        empty: E.Callbacks('once memory').add(function () {
                            b.remove(e, [t + 'queue', n]);
                        }),
                    })
                );
            },
        }),
        E.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    'string' != typeof t && ((n = t), (t = 'fx'), e--),
                    arguments.length < e
                        ? E.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = E.queue(this, t, n);
                              E._queueHooks(this, t),
                                  'fx' === t &&
                                      'inprogress' !== e[0] &&
                                      E.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    E.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || 'fx', []);
            },
            promise: function (e, t) {
                function n() {
                    --i || o.resolveWith(a, [a]);
                }
                var r,
                    i = 1,
                    o = E.Deferred(),
                    a = this,
                    s = this.length;
                for (
                    'string' != typeof e && ((t = e), (e = void 0)),
                        e = e || 'fx';
                    s--;

                )
                    (r = b.get(a[s], e + 'queueHooks')) &&
                        r.empty &&
                        (i++, r.empty.add(n));
                return n(), o.promise(t);
            },
        });
    function ye(e, t) {
        return (
            'none' === (e = t || e).style.display ||
            ('' === e.style.display && k(e) && 'none' === E.css(e, 'display'))
        );
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        me = new RegExp('^(?:([+-])=|)(' + e + ')([a-z%]*)$', 'i'),
        p = ['Top', 'Right', 'Bottom', 'Left'],
        w = C.documentElement,
        k = function (e) {
            return E.contains(e.ownerDocument, e);
        },
        ve = {
            composed: !0,
        };
    w.getRootNode &&
        (k = function (e) {
            return (
                E.contains(e.ownerDocument, e) ||
                e.getRootNode(ve) === e.ownerDocument
            );
        });
    function xe(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return E.css(e, t, '');
                  },
            u = s(),
            l = (n && n[3]) || (E.cssNumber[t] ? '' : 'px'),
            c =
                e.nodeType &&
                (E.cssNumber[t] || ('px' !== l && +u)) &&
                me.exec(E.css(e, t));
        if (c && c[3] !== l) {
            for (l = l || c[3], c = +(u /= 2) || 1; a--; )
                E.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                    (c /= o);
            E.style(e, t, (c *= 2) + l), (n = n || []);
        }
        return (
            n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
        );
    }
    var be = {};
    function A(e, t) {
        for (var n, r, i, o, a, s, u = [], l = 0, c = e.length; l < c; l++)
            (r = e[l]).style &&
                ((n = r.style.display),
                t
                    ? ('none' === n &&
                          ((u[l] = b.get(r, 'display') || null),
                          u[l] || (r.style.display = '')),
                      '' === r.style.display &&
                          ye(r) &&
                          (u[l] =
                              ((s = o = i = void 0),
                              (o = r.ownerDocument),
                              (a = r.nodeName),
                              (s = be[a]) ||
                                  ((i = o.body.appendChild(o.createElement(a))),
                                  (s = E.css(i, 'display')),
                                  i.parentNode.removeChild(i),
                                  (be[a] = s = 'none' === s ? 'block' : s)))))
                    : 'none' !== n &&
                      ((u[l] = 'none'), b.set(r, 'display', n)));
        for (l = 0; l < c; l++) null != u[l] && (e[l].style.display = u[l]);
        return e;
    }
    E.fn.extend({
        show: function () {
            return A(this, !0);
        },
        hide: function () {
            return A(this);
        },
        toggle: function (e) {
            return 'boolean' == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ye(this) ? E(this).show() : E(this).hide();
                  });
        },
    });
    var we = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i,
        n = C.createDocumentFragment().appendChild(C.createElement('div')),
        N =
            ((L = C.createElement('input')).setAttribute('type', 'radio'),
            L.setAttribute('checked', 'checked'),
            L.setAttribute('name', 't'),
            n.appendChild(L),
            (y.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (n.innerHTML = '<textarea>x</textarea>'),
            (y.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue),
            (n.innerHTML = '<option></option>'),
            (y.option = !!n.lastChild),
            {
                thead: [1, '<table>', '</table>'],
                col: [2, '<table><colgroup>', '</colgroup></table>'],
                tr: [2, '<table><tbody>', '</tbody></table>'],
                td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
                _default: [0, '', ''],
            });
    function j(e, t) {
        var n =
            void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || '*')
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || '*')
                : [];
        return void 0 === t || (t && u(e, t)) ? E.merge([e], n) : n;
    }
    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            b.set(e[n], 'globalEval', !t || b.get(t[n], 'globalEval'));
    }
    (N.tbody = N.tfoot = N.colgroup = N.caption = N.thead),
        (N.th = N.td),
        y.option ||
            (N.optgroup = N.option =
                [1, "<select multiple='multiple'>", '</select>']);
    var Se = /<|&#?\w+;/;
    function ke(e, t, n, r, i) {
        for (
            var o,
                a,
                s,
                u,
                l,
                c = t.createDocumentFragment(),
                f = [],
                p = 0,
                d = e.length;
            p < d;
            p++
        )
            if ((o = e[p]) || 0 === o)
                if ('object' === h(o)) E.merge(f, o.nodeType ? [o] : o);
                else if (Se.test(o)) {
                    for (
                        a = a || c.appendChild(t.createElement('div')),
                            s = (Te.exec(o) || ['', ''])[1].toLowerCase(),
                            s = N[s] || N._default,
                            a.innerHTML = s[1] + E.htmlPrefilter(o) + s[2],
                            l = s[0];
                        l--;

                    )
                        a = a.lastChild;
                    E.merge(f, a.childNodes),
                        ((a = c.firstChild).textContent = '');
                } else f.push(t.createTextNode(o));
        for (c.textContent = '', p = 0; (o = f[p++]); )
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (
                ((u = k(o)), (a = j(c.appendChild(o), 'script')), u && Ee(a), n)
            )
                for (l = 0; (o = a[l++]); ) Ce.test(o.type || '') && n.push(o);
        return c;
    }
    var Ae = /^([^.]*)(?:\.(.+)|)/;
    function a() {
        return !0;
    }
    function d() {
        return !1;
    }
    function Ne(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return C.activeElement;
                    } catch (e) {}
                })()) ==
            ('focus' === t)
        );
    }
    function je(e, t, n, r, i, o) {
        var a, s;
        if ('object' == typeof t) {
            for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
                je(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ('string' == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
            !1 === i)
        )
            i = d;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return E().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = E.guid++))),
            e.each(function () {
                E.event.add(this, t, i, r, n);
            })
        );
    }
    function De(e, i, o) {
        o
            ? (b.set(e, i, !1),
              E.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          r = b.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length)
                              (E.event.special[i] || {}).delegateType &&
                                  e.stopPropagation();
                          else if (
                              ((r = s.call(arguments)),
                              b.set(this, i, r),
                              (t = o(this, i)),
                              this[i](),
                              r !== (n = b.get(this, i)) || t
                                  ? b.set(this, i, !1)
                                  : (n = {}),
                              r !== n)
                          )
                              return (
                                  e.stopImmediatePropagation(),
                                  e.preventDefault(),
                                  n && n.value
                              );
                      } else
                          r.length &&
                              (b.set(this, i, {
                                  value: E.event.trigger(
                                      E.extend(r[0], E.Event.prototype),
                                      r.slice(1),
                                      this
                                  ),
                              }),
                              e.stopImmediatePropagation());
                  },
              }))
            : void 0 === b.get(e, i) && E.event.add(e, i, a);
    }
    (E.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = b.get(t);
            if (m(t))
                for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                        i && E.find.matchesSelector(w, i),
                        n.guid || (n.guid = E.guid++),
                        (s = h.events) || (s = h.events = Object.create(null)),
                        (a = h.handle) ||
                            (a = h.handle =
                                function (e) {
                                    return void 0 !== E &&
                                        E.event.triggered !== e.type
                                        ? E.event.dispatch.apply(t, arguments)
                                        : void 0;
                                }),
                        u = (e = (e || '').match(S) || ['']).length;
                    u--;

                )
                    (f = d = (p = Ae.exec(e[u]) || [])[1]),
                        (p = (p[2] || '').split('.').sort()),
                        f &&
                            ((l = E.event.special[f] || {}),
                            (f = (i ? l.delegateType : l.bindType) || f),
                            (l = E.event.special[f] || {}),
                            (d = E.extend(
                                {
                                    type: f,
                                    origType: d,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext:
                                        i && E.expr.match.needsContext.test(i),
                                    namespace: p.join('.'),
                                },
                                o
                            )),
                            (c = s[f]) ||
                                (((c = s[f] = []).delegateCount = 0),
                                (l.setup && !1 !== l.setup.call(t, r, p, a)) ||
                                    (t.addEventListener &&
                                        t.addEventListener(f, a))),
                            l.add &&
                                (l.add.call(t, d),
                                d.handler.guid || (d.handler.guid = n.guid)),
                            i ? c.splice(c.delegateCount++, 0, d) : c.push(d),
                            (E.event.global[f] = !0));
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = b.hasData(e) && b.get(e);
            if (y && (u = y.events)) {
                for (l = (t = (t || '').match(S) || ['']).length; l--; )
                    if (
                        ((d = g = (s = Ae.exec(t[l]) || [])[1]),
                        (h = (s[2] || '').split('.').sort()),
                        d)
                    ) {
                        for (
                            f = E.event.special[d] || {},
                                p =
                                    u[
                                        (d =
                                            (r ? f.delegateType : f.bindType) ||
                                            d)
                                    ] || [],
                                s =
                                    s[2] &&
                                    new RegExp(
                                        '(^|\\.)' +
                                            h.join('\\.(?:.*\\.|)') +
                                            '(\\.|$)'
                                    ),
                                a = o = p.length;
                            o--;

                        )
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r &&
                                        r !== c.selector &&
                                        ('**' !== r || !c.selector)) ||
                                    (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a &&
                            !p.length &&
                            ((f.teardown &&
                                !1 !== f.teardown.call(e, h, y.handle)) ||
                                E.removeEvent(e, d, y.handle),
                            delete u[d]);
                    } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && b.remove(e, 'handle events');
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a = new Array(arguments.length),
                s = E.event.fix(e),
                e =
                    (b.get(this, 'events') || Object.create(null))[s.type] ||
                    [],
                u = E.event.special[s.type] || {};
            for (a[0] = s, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (
                ((s.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, s))
            ) {
                for (
                    o = E.event.handlers.call(this, s, e), t = 0;
                    (r = o[t++]) && !s.isPropagationStopped();

                )
                    for (
                        s.currentTarget = r.elem, n = 0;
                        (i = r.handlers[n++]) &&
                        !s.isImmediatePropagationStopped();

                    )
                        (s.rnamespace &&
                            !1 !== i.namespace &&
                            !s.rnamespace.test(i.namespace)) ||
                            ((s.handleObj = i),
                            (s.data = i.data),
                            void 0 !==
                                (i = (
                                    (E.event.special[i.origType] || {})
                                        .handle || i.handler
                                ).apply(r.elem, a)) &&
                                !1 === (s.result = i) &&
                                (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (
                        1 === l.nodeType &&
                        ('click' !== e.type || !0 !== l.disabled)
                    ) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                                (a[i] = r.needsContext
                                    ? -1 < E(i, this).index(l)
                                    : E.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length &&
                            s.push({
                                elem: l,
                                handlers: o,
                            });
                    }
            return (
                (l = this),
                u < t.length &&
                    s.push({
                        elem: l,
                        handlers: t.slice(u),
                    }),
                s
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function (e) {
            return e[E.expando] ? e : new E.Event(e);
        },
        special: {
            load: {
                noBubble: !0,
            },
            click: {
                setup: function (e) {
                    e = this || e;
                    return (
                        we.test(e.type) &&
                            e.click &&
                            u(e, 'input') &&
                            De(e, 'click', a),
                        !1
                    );
                },
                trigger: function (e) {
                    e = this || e;
                    return (
                        we.test(e.type) &&
                            e.click &&
                            u(e, 'input') &&
                            De(e, 'click'),
                        !0
                    );
                },
                _default: function (e) {
                    e = e.target;
                    return (
                        (we.test(e.type) &&
                            e.click &&
                            u(e, 'input') &&
                            b.get(e, 'click')) ||
                        u(e, 'a')
                    );
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (E.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (E.Event = function (e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? a
                          : d),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && E.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[E.expando] = !0);
        }),
        (E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = a),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = a),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = a),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        E.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            E.event.addProp
        ),
        E.each(
            {
                focus: 'focusin',
                blur: 'focusout',
            },
            function (e, t) {
                E.event.special[e] = {
                    setup: function () {
                        return De(this, e, Ne), !1;
                    },
                    trigger: function () {
                        return De(this, e), !0;
                    },
                    _default: function () {
                        return !0;
                    },
                    delegateType: t,
                };
            }
        ),
        E.each(
            {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout',
            },
            function (e, i) {
                E.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            r = e.handleObj;
                        return (
                            (n && (n === this || E.contains(this, n))) ||
                                ((e.type = r.origType),
                                (t = r.handler.apply(this, arguments)),
                                (e.type = i)),
                            t
                        );
                    },
                };
            }
        ),
        E.fn.extend({
            on: function (e, t, n, r) {
                return je(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return je(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        E(e.delegateTarget).off(
                            r.namespace
                                ? r.origType + '.' + r.namespace
                                : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ('object' != typeof e)
                    return (
                        (!1 !== t && 'function' != typeof t) ||
                            ((n = t), (t = void 0)),
                        !1 === n && (n = d),
                        this.each(function () {
                            E.event.remove(this, e, n, t);
                        })
                    );
                for (i in e) this.off(i, t, e[i]);
                return this;
            },
        });
    var qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return (
            (u(e, 'table') &&
                u(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                E(e).children('tbody')[0]) ||
            e
        );
    }
    function Pe(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
    }
    function Re(e) {
        return (
            'true/' === (e.type || '').slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute('type'),
            e
        );
    }
    function Me(e, t) {
        var n, r, i, o;
        if (1 === t.nodeType) {
            if (b.hasData(e) && (o = b.get(e).events))
                for (i in (b.remove(t, 'handle events'), o))
                    for (n = 0, r = o[i].length; n < r; n++)
                        E.event.add(t, i, o[i][n]);
            l.hasData(e) &&
                ((e = l.access(e)), (e = E.extend({}, e)), l.set(t, e));
        }
    }
    function D(n, r, i, o) {
        r = I(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = v(d);
        if (h || (1 < f && 'string' == typeof d && !y.checkClone && Le.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), D(t, r, i, o);
            });
        if (
            f &&
            ((t = (e = ke(r, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (s = (a = E.map(j(e, 'script'), Pe)).length; c < f; c++)
                (u = e),
                    c !== p &&
                        ((u = E.clone(u, !0, !0)),
                        s && E.merge(a, j(u, 'script'))),
                    i.call(n[c], u, c);
            if (s)
                for (
                    l = a[a.length - 1].ownerDocument, E.map(a, Re), c = 0;
                    c < s;
                    c++
                )
                    (u = a[c]),
                        Ce.test(u.type || '') &&
                            !b.access(u, 'globalEval') &&
                            E.contains(l, u) &&
                            (u.src && 'module' !== (u.type || '').toLowerCase()
                                ? E._evalUrl &&
                                  !u.noModule &&
                                  E._evalUrl(
                                      u.src,
                                      {
                                          nonce:
                                              u.nonce ||
                                              u.getAttribute('nonce'),
                                      },
                                      l
                                  )
                                : V(u.textContent.replace(He, ''), u, l));
        }
        return n;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || E.cleanData(j(r)),
                r.parentNode &&
                    (n && k(r) && Ee(j(r, 'script')),
                    r.parentNode.removeChild(r));
        return e;
    }
    E.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = k(e);
            if (
                !(
                    y.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    E.isXMLDoc(e)
                )
            )
                for (a = j(c), r = 0, i = (o = j(e)).length; r < i; r++)
                    (s = o[r]),
                        'input' === (l = (u = a[r]).nodeName.toLowerCase()) &&
                        we.test(s.type)
                            ? (u.checked = s.checked)
                            : ('input' !== l && 'textarea' !== l) ||
                              (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (
                        o = o || j(e), a = a || j(c), r = 0, i = o.length;
                        r < i;
                        r++
                    )
                        Me(o[r], a[r]);
                else Me(e, c);
            return (
                0 < (a = j(c, 'script')).length && Ee(a, !f && j(e, 'script')),
                c
            );
        },
        cleanData: function (e) {
            for (
                var t, n, r, i = E.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (m(n)) {
                    if ((t = n[b.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r]
                                    ? E.event.remove(n, r)
                                    : E.removeEvent(n, r, t.handle);
                        n[b.expando] = void 0;
                    }
                    n[l.expando] && (n[l.expando] = void 0);
                }
        },
    }),
        E.fn.extend({
            detach: function (e) {
                return Ie(this, e, !0);
            },
            remove: function (e) {
                return Ie(this, e);
            },
            text: function (e) {
                return f(
                    this,
                    function (e) {
                        return void 0 === e
                            ? E.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return D(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        Oe(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return D(this, arguments, function (e) {
                    var t;
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (t = Oe(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function () {
                return D(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return D(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (E.cleanData(j(e, !1)), (e.textContent = ''));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return E.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return f(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            'string' == typeof e &&
                            !qe.test(e) &&
                            !N[(Te.exec(e) || ['', ''])[1].toLowerCase()]
                        ) {
                            e = E.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (E.cleanData(j(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return D(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        E.inArray(this, n) < 0 &&
                            (E.cleanData(j(this)),
                            t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        E.each(
            {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
            },
            function (e, a) {
                E.fn[e] = function (e) {
                    for (
                        var t, n = [], r = E(e), i = r.length - 1, o = 0;
                        o <= i;
                        o++
                    )
                        (t = o === i ? this : this.clone(!0)),
                            E(r[o])[a](t),
                            W.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    function We(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : T).getComputedStyle(e);
    }
    function Fe(e, t, n) {
        var r,
            i = {};
        for (r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
        for (r in ((n = n.call(e)), t)) e.style[r] = i[r];
        return n;
    }
    var Be,
        $e,
        _e,
        ze,
        Ue,
        Xe,
        Ve,
        i,
        Ge = new RegExp('^(' + e + ')(?!px)[a-z%]+$', 'i'),
        Ye = new RegExp(p.join('|'), 'i');
    function Qe(e, t, n) {
        var r,
            i,
            o = e.style;
        return (
            (n = n || We(e)) &&
                ('' !== (i = n.getPropertyValue(t) || n[t]) ||
                    k(e) ||
                    (i = E.style(e, t)),
                !y.pixelBoxStyles() &&
                    Ge.test(i) &&
                    Ye.test(t) &&
                    ((e = o.width),
                    (t = o.minWidth),
                    (r = o.maxWidth),
                    (o.minWidth = o.maxWidth = o.width = i),
                    (i = n.width),
                    (o.width = e),
                    (o.minWidth = t),
                    (o.maxWidth = r))),
            void 0 !== i ? i + '' : i
        );
    }
    function Je(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    function Ke() {
        var e;
        i &&
            ((Ve.style.cssText =
                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
            (i.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
            w.appendChild(Ve).appendChild(i),
            (e = T.getComputedStyle(i)),
            (Be = '1%' !== e.top),
            (Xe = 12 === Ze(e.marginLeft)),
            (i.style.right = '60%'),
            (ze = 36 === Ze(e.right)),
            ($e = 36 === Ze(e.width)),
            (i.style.position = 'absolute'),
            (_e = 12 === Ze(i.offsetWidth / 3)),
            w.removeChild(Ve),
            (i = null));
    }
    function Ze(e) {
        return Math.round(parseFloat(e));
    }
    (Ve = C.createElement('div')),
        (i = C.createElement('div')).style &&
            ((i.style.backgroundClip = 'content-box'),
            (i.cloneNode(!0).style.backgroundClip = ''),
            (y.clearCloneStyle = 'content-box' === i.style.backgroundClip),
            E.extend(y, {
                boxSizingReliable: function () {
                    return Ke(), $e;
                },
                pixelBoxStyles: function () {
                    return Ke(), ze;
                },
                pixelPosition: function () {
                    return Ke(), Be;
                },
                reliableMarginLeft: function () {
                    return Ke(), Xe;
                },
                scrollboxSize: function () {
                    return Ke(), _e;
                },
                reliableTrDimensions: function () {
                    var e, t, n;
                    return (
                        null == Ue &&
                            ((e = C.createElement('table')),
                            (t = C.createElement('tr')),
                            (n = C.createElement('div')),
                            (e.style.cssText =
                                'position:absolute;left:-11111px;border-collapse:separate'),
                            (t.style.cssText = 'border:1px solid'),
                            (t.style.height = '1px'),
                            (n.style.height = '9px'),
                            (n.style.display = 'block'),
                            w.appendChild(e).appendChild(t).appendChild(n),
                            (n = T.getComputedStyle(t)),
                            (Ue =
                                parseInt(n.height, 10) +
                                    parseInt(n.borderTopWidth, 10) +
                                    parseInt(n.borderBottomWidth, 10) ===
                                t.offsetHeight),
                            w.removeChild(e)),
                        Ue
                    );
                },
            }));
    var et = ['Webkit', 'Moz', 'ms'],
        tt = C.createElement('div').style,
        nt = {};
    function rt(e) {
        return (
            E.cssProps[e] ||
            nt[e] ||
            (e in tt
                ? e
                : (nt[e] =
                      (function (e) {
                          for (
                              var t = e[0].toUpperCase() + e.slice(1),
                                  n = et.length;
                              n--;

                          )
                              if ((e = et[n] + t) in tt) return e;
                      })(e) || e))
        );
    }
    var it = /^(none|table(?!-c[ea]).+)/,
        ot = /^--/,
        at = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block',
        },
        st = {
            letterSpacing: '0',
            fontWeight: '400',
        };
    function ut(e, t, n) {
        var r = me.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
    }
    function lt(e, t, n, r, i, o) {
        var a = 'width' === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (; a < 4; a += 2)
            'margin' === n && (u += E.css(e, n + p[a], !0, i)),
                r
                    ? ('content' === n &&
                          (u -= E.css(e, 'padding' + p[a], !0, i)),
                      'margin' !== n &&
                          (u -= E.css(e, 'border' + p[a] + 'Width', !0, i)))
                    : ((u += E.css(e, 'padding' + p[a], !0, i)),
                      'padding' !== n
                          ? (u += E.css(e, 'border' + p[a] + 'Width', !0, i))
                          : (s += E.css(e, 'border' + p[a] + 'Width', !0, i)));
        return (
            !r &&
                0 <= o &&
                (u +=
                    Math.max(
                        0,
                        Math.ceil(
                            e['offset' + t[0].toUpperCase() + t.slice(1)] -
                                o -
                                u -
                                s -
                                0.5
                        )
                    ) || 0),
            u
        );
    }
    function ct(e, t, n) {
        var r = We(e),
            i =
                (!y.boxSizingReliable() || n) &&
                'border-box' === E.css(e, 'boxSizing', !1, r),
            o = i,
            a = Qe(e, t, r),
            s = 'offset' + t[0].toUpperCase() + t.slice(1);
        if (Ge.test(a)) {
            if (!n) return a;
            a = 'auto';
        }
        return (
            ((!y.boxSizingReliable() && i) ||
                (!y.reliableTrDimensions() && u(e, 'tr')) ||
                'auto' === a ||
                (!parseFloat(a) && 'inline' === E.css(e, 'display', !1, r))) &&
                e.getClientRects().length &&
                ((i = 'border-box' === E.css(e, 'boxSizing', !1, r)),
                (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) +
                lt(e, t, n || (i ? 'border' : 'content'), o, r, a) +
                'px'
        );
    }
    function o(e, t, n, r, i) {
        return new o.prototype.init(e, t, n, r, i);
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return '' === (t = Qe(e, 'opacity')) ? '1' : t;
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = x(t),
                    u = ot.test(t),
                    l = e.style;
                if (
                    (u || (t = rt(s)),
                    (a = E.cssHooks[t] || E.cssHooks[s]),
                    void 0 === n)
                )
                    return a && 'get' in a && void 0 !== (i = a.get(e, !1, r))
                        ? i
                        : l[t];
                'string' == (o = typeof n) &&
                    (i = me.exec(n)) &&
                    i[1] &&
                    ((n = xe(e, t, i)), (o = 'number')),
                    null != n &&
                        n == n &&
                        ('number' !== o ||
                            u ||
                            (n += (i && i[3]) || (E.cssNumber[s] ? '' : 'px')),
                        y.clearCloneStyle ||
                            '' !== n ||
                            0 !== t.indexOf('background') ||
                            (l[t] = 'inherit'),
                        (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                            (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o = x(t);
            return (
                ot.test(t) || (t = rt(o)),
                'normal' ===
                    (i =
                        void 0 ===
                        (i =
                            (o = E.cssHooks[t] || E.cssHooks[o]) && 'get' in o
                                ? o.get(e, !0, n)
                                : i)
                            ? Qe(e, t, r)
                            : i) &&
                    t in st &&
                    (i = st[t]),
                '' === n || n
                    ? ((o = parseFloat(i)),
                      !0 === n || isFinite(o) ? o || 0 : i)
                    : i
            );
        },
    }),
        E.each(['height', 'width'], function (e, a) {
            E.cssHooks[a] = {
                get: function (e, t, n) {
                    if (t)
                        return !it.test(E.css(e, 'display')) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? ct(e, a, n)
                            : Fe(e, at, function () {
                                  return ct(e, a, n);
                              });
                },
                set: function (e, t, n) {
                    var r = We(e),
                        i = !y.scrollboxSize() && 'absolute' === r.position,
                        o =
                            (i || n) &&
                            'border-box' === E.css(e, 'boxSizing', !1, r),
                        n = n ? lt(e, a, n, o, r) : 0;
                    return (
                        o &&
                            i &&
                            (n -= Math.ceil(
                                e['offset' + a[0].toUpperCase() + a.slice(1)] -
                                    parseFloat(r[a]) -
                                    lt(e, a, 'border', !1, r) -
                                    0.5
                            )),
                        n &&
                            (o = me.exec(t)) &&
                            'px' !== (o[3] || 'px') &&
                            ((e.style[a] = t), (t = E.css(e, a))),
                        ut(0, t, n)
                    );
                },
            };
        }),
        (E.cssHooks.marginLeft = Je(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Qe(e, 'marginLeft')) ||
                        e.getBoundingClientRect().left -
                            Fe(
                                e,
                                {
                                    marginLeft: 0,
                                },
                                function () {
                                    return e.getBoundingClientRect().left;
                                }
                            )) + 'px'
                );
        })),
        E.each(
            {
                margin: '',
                padding: '',
                border: 'Width',
            },
            function (i, o) {
                (E.cssHooks[i + o] = {
                    expand: function (e) {
                        for (
                            var t = 0,
                                n = {},
                                r = 'string' == typeof e ? e.split(' ') : [e];
                            t < 4;
                            t++
                        )
                            n[i + p[t] + o] = r[t] || r[t - 2] || r[0];
                        return n;
                    },
                }),
                    'margin' !== i && (E.cssHooks[i + o].set = ut);
            }
        ),
        E.fn.extend({
            css: function (e, t) {
                return f(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = We(e), i = t.length; a < i; a++)
                                o[t[a]] = E.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((E.Tween = o).prototype = {
            constructor: o,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || E.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (E.cssNumber[n] ? '' : 'px'));
            },
            cur: function () {
                var e = o.propHooks[this.prop];
                return (e && e.get ? e : o.propHooks._default).get(this);
            },
            run: function (e) {
                var t,
                    n = o.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              E.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : o.propHooks._default).set(this),
                    this
                );
            },
        }).init.prototype = o.prototype),
        ((o.propHooks = {
            _default: {
                get: function (e) {
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (e = E.css(e.elem, e.prop, '')) && 'auto' !== e
                        ? e
                        : 0;
                },
                set: function (e) {
                    E.fx.step[e.prop]
                        ? E.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!E.cssHooks[e.prop] &&
                              null == e.elem.style[rt(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : E.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = o.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (E.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: 'swing',
        }),
        (E.fx = o.prototype.init),
        (E.fx.step = {});
    var q,
        ft,
        L,
        pt = /^(?:toggle|show|hide)$/,
        dt = /queueHooks$/;
    function ht() {
        ft &&
            (!1 === C.hidden && T.requestAnimationFrame
                ? T.requestAnimationFrame(ht)
                : T.setTimeout(ht, E.fx.interval),
            E.fx.tick());
    }
    function gt() {
        return (
            T.setTimeout(function () {
                q = void 0;
            }),
            (q = Date.now())
        );
    }
    function yt(e, t) {
        var n,
            r = 0,
            i = {
                height: e,
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i['margin' + (n = p[r])] = i['padding' + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function mt(e, t, n) {
        for (
            var r,
                i = (H.tweeners[t] || []).concat(H.tweeners['*']),
                o = 0,
                a = i.length;
            o < a;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function H(i, e, t) {
        var n,
            o,
            r,
            a,
            s,
            u,
            l,
            c = 0,
            f = H.prefilters.length,
            p = E.Deferred().always(function () {
                delete d.elem;
            }),
            d = function () {
                if (o) return !1;
                for (
                    var e = q || gt(),
                        e = Math.max(0, h.startTime + h.duration - e),
                        t = 1 - (e / h.duration || 0),
                        n = 0,
                        r = h.tweens.length;
                    n < r;
                    n++
                )
                    h.tweens[n].run(t);
                return (
                    p.notifyWith(i, [h, t, e]),
                    t < 1 && r
                        ? e
                        : (r || p.notifyWith(i, [h, 1, 0]),
                          p.resolveWith(i, [h]),
                          !1)
                );
            },
            h = p.promise({
                elem: i,
                props: E.extend({}, e),
                opts: E.extend(
                    !0,
                    {
                        specialEasing: {},
                        easing: E.easing._default,
                    },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: q || gt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    t = E.Tween(
                        i,
                        h.opts,
                        e,
                        t,
                        h.opts.specialEasing[e] || h.opts.easing
                    );
                    return h.tweens.push(t), t;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? h.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) h.tweens[t].run(1);
                    return (
                        e
                            ? (p.notifyWith(i, [h, 1, 0]),
                              p.resolveWith(i, [h, e]))
                            : p.rejectWith(i, [h, e]),
                        this
                    );
                },
            }),
            g = h.props,
            y = g,
            m = h.opts.specialEasing;
        for (r in y)
            if (
                ((s = m[(a = x(r))]),
                (u = y[r]),
                Array.isArray(u) && ((s = u[1]), (u = y[r] = u[0])),
                r !== a && ((y[a] = u), delete y[r]),
                (l = E.cssHooks[a]) && 'expand' in l)
            )
                for (r in ((u = l.expand(u)), delete y[a], u))
                    r in y || ((y[r] = u[r]), (m[r] = s));
            else m[a] = s;
        for (; c < f; c++)
            if ((n = H.prefilters[c].call(h, i, g, h.opts)))
                return (
                    v(n.stop) &&
                        (E._queueHooks(h.elem, h.opts.queue).stop =
                            n.stop.bind(n)),
                    n
                );
        return (
            E.map(g, mt, h),
            v(h.opts.start) && h.opts.start.call(i, h),
            h
                .progress(h.opts.progress)
                .done(h.opts.done, h.opts.complete)
                .fail(h.opts.fail)
                .always(h.opts.always),
            E.fx.timer(
                E.extend(d, {
                    elem: i,
                    anim: h,
                    queue: h.opts.queue,
                })
            ),
            h
        );
    }
    (E.Animation = E.extend(H, {
        tweeners: {
            '*': [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return xe(n.elem, e, me.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            for (
                var n,
                    r = 0,
                    i = (e = v(e) ? ((t = e), ['*']) : e.match(S)).length;
                r < i;
                r++
            )
                (n = e[r]),
                    (H.tweeners[n] = H.tweeners[n] || []),
                    H.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = 'width' in t || 'height' in t,
                    f = this,
                    p = {},
                    d = e.style,
                    h = e.nodeType && ye(e),
                    g = b.get(e, 'fxshow');
                for (r in (n.queue ||
                    (null == (a = E._queueHooks(e, 'fx')).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    f.always(function () {
                        f.always(function () {
                            a.unqueued--,
                                E.queue(e, 'fx').length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), pt.test(i))) {
                        if (
                            (delete t[r],
                            (o = o || 'toggle' === i),
                            i === (h ? 'hide' : 'show'))
                        ) {
                            if ('show' !== i || !g || void 0 === g[r]) continue;
                            h = !0;
                        }
                        p[r] = (g && g[r]) || E.style(e, r);
                    }
                if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                    for (r in (c &&
                        1 === e.nodeType &&
                        ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                        null == (l = g && g.display) &&
                            (l = b.get(e, 'display')),
                        'none' === (c = E.css(e, 'display')) &&
                            (l
                                ? (c = l)
                                : (A([e], !0),
                                  (l = e.style.display || l),
                                  (c = E.css(e, 'display')),
                                  A([e]))),
                        ('inline' === c ||
                            ('inline-block' === c && null != l)) &&
                            'none' === E.css(e, 'float') &&
                            (u ||
                                (f.done(function () {
                                    d.display = l;
                                }),
                                null == l &&
                                    ((c = d.display),
                                    (l = 'none' === c ? '' : c))),
                            (d.display = 'inline-block'))),
                    n.overflow &&
                        ((d.overflow = 'hidden'),
                        f.always(function () {
                            (d.overflow = n.overflow[0]),
                                (d.overflowX = n.overflow[1]),
                                (d.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    p))
                        u ||
                            (g
                                ? 'hidden' in g && (h = g.hidden)
                                : (g = b.access(e, 'fxshow', {
                                      display: l,
                                  })),
                            o && (g.hidden = !h),
                            h && A([e], !0),
                            f.done(function () {
                                for (r in (h || A([e]),
                                b.remove(e, 'fxshow'),
                                p))
                                    E.style(e, r, p[r]);
                            })),
                            (u = mt(h ? g[r] : 0, r, f)),
                            r in g ||
                                ((g[r] = u.start),
                                h && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? H.prefilters.unshift(e) : H.prefilters.push(e);
        },
    })),
        (E.speed = function (e, t, n) {
            var r =
                e && 'object' == typeof e
                    ? E.extend({}, e)
                    : {
                          complete: n || (!n && t) || (v(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !v(t) && t),
                      };
            return (
                E.fx.off
                    ? (r.duration = 0)
                    : 'number' != typeof r.duration &&
                      (r.duration in E.fx.speeds
                          ? (r.duration = E.fx.speeds[r.duration])
                          : (r.duration = E.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
                (r.old = r.complete),
                (r.complete = function () {
                    v(r.old) && r.old.call(this),
                        r.queue && E.dequeue(this, r.queue);
                }),
                r
            );
        }),
        E.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ye).css('opacity', 0).show().end().animate(
                    {
                        opacity: t,
                    },
                    e,
                    n,
                    r
                );
            },
            animate: function (t, e, n, r) {
                function i() {
                    var e = H(this, E.extend({}, t), a);
                    (o || b.get(this, 'finish')) && e.stop(!0);
                }
                var o = E.isEmptyObject(t),
                    a = E.speed(e, n, r);
                return (
                    (i.finish = i),
                    o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
                );
            },
            stop: function (i, e, o) {
                function a(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                }
                return (
                    'string' != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || 'fx', []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + 'queueHooks',
                            n = E.timers,
                            r = b.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && dt.test(t) && a(r[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this ||
                                (null != i && n[t].queue !== i) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || E.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || 'fx'),
                    this.each(function () {
                        var e,
                            t = b.get(this),
                            n = t[a + 'queue'],
                            r = t[a + 'queueHooks'],
                            i = E.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                                E.queue(this, a, []),
                                r && r.stop && r.stop.call(this, !0),
                                e = i.length;
                            e--;

                        )
                            i[e].elem === this &&
                                i[e].queue === a &&
                                (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        E.each(['toggle', 'show', 'hide'], function (e, r) {
            var i = E.fn[r];
            E.fn[r] = function (e, t, n) {
                return null == e || 'boolean' == typeof e
                    ? i.apply(this, arguments)
                    : this.animate(yt(r, !0), e, t, n);
            };
        }),
        E.each(
            {
                slideDown: yt('show'),
                slideUp: yt('hide'),
                slideToggle: yt('toggle'),
                fadeIn: {
                    opacity: 'show',
                },
                fadeOut: {
                    opacity: 'hide',
                },
                fadeToggle: {
                    opacity: 'toggle',
                },
            },
            function (e, r) {
                E.fn[e] = function (e, t, n) {
                    return this.animate(r, e, t, n);
                };
            }
        ),
        (E.timers = []),
        (E.fx.tick = function () {
            var e,
                t = 0,
                n = E.timers;
            for (q = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), (q = void 0);
        }),
        (E.fx.timer = function (e) {
            E.timers.push(e), E.fx.start();
        }),
        (E.fx.interval = 13),
        (E.fx.start = function () {
            ft || ((ft = !0), ht());
        }),
        (E.fx.stop = function () {
            ft = null;
        }),
        (E.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400,
        }),
        (E.fn.delay = function (r, e) {
            return (
                (r = (E.fx && E.fx.speeds[r]) || r),
                this.queue((e = e || 'fx'), function (e, t) {
                    var n = T.setTimeout(e, r);
                    t.stop = function () {
                        T.clearTimeout(n);
                    };
                })
            );
        }),
        (L = C.createElement('input')),
        (n = C.createElement('select').appendChild(C.createElement('option'))),
        (L.type = 'checkbox'),
        (y.checkOn = '' !== L.value),
        (y.optSelected = n.selected),
        ((L = C.createElement('input')).value = 't'),
        (L.type = 'radio'),
        (y.radioValue = 't' === L.value);
    var vt,
        xt = E.expr.attrHandle,
        bt =
            (E.fn.extend({
                attr: function (e, t) {
                    return f(this, E.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        E.removeAttr(this, e);
                    });
                },
            }),
            E.extend({
                attr: function (e, t, n) {
                    var r,
                        i,
                        o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return void 0 === e.getAttribute
                            ? E.prop(e, t, n)
                            : ((1 === o && E.isXMLDoc(e)) ||
                                  (i =
                                      E.attrHooks[t.toLowerCase()] ||
                                      (E.expr.match.bool.test(t)
                                          ? vt
                                          : void 0)),
                              void 0 !== n
                                  ? null === n
                                      ? void E.removeAttr(e, t)
                                      : i &&
                                        'set' in i &&
                                        void 0 !== (r = i.set(e, n, t))
                                      ? r
                                      : (e.setAttribute(t, n + ''), n)
                                  : !(
                                        i &&
                                        'get' in i &&
                                        null !== (r = i.get(e, t))
                                    ) && null == (r = E.find.attr(e, t))
                                  ? void 0
                                  : r);
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            var n;
                            if (!y.radioValue && 'radio' === t && u(e, 'input'))
                                return (
                                    (n = e.value),
                                    e.setAttribute('type', t),
                                    n && (e.value = n),
                                    t
                                );
                        },
                    },
                },
                removeAttr: function (e, t) {
                    var n,
                        r = 0,
                        i = t && t.match(S);
                    if (i && 1 === e.nodeType)
                        for (; (n = i[r++]); ) e.removeAttribute(n);
                },
            }),
            (vt = {
                set: function (e, t, n) {
                    return (
                        !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
                    );
                },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var a = xt[t] || E.find.attr;
                xt[t] = function (e, t, n) {
                    var r,
                        i,
                        o = t.toLowerCase();
                    return (
                        n ||
                            ((i = xt[o]),
                            (xt[o] = r),
                            (r = null != a(e, t, n) ? o : null),
                            (xt[o] = i)),
                        r
                    );
                };
            }),
            /^(?:input|select|textarea|button)$/i),
        wt = /^(?:a|area)$/i;
    function O(e) {
        return (e.match(S) || []).join(' ');
    }
    function P(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
    }
    function Tt(e) {
        return Array.isArray(e)
            ? e
            : ('string' == typeof e && e.match(S)) || [];
    }
    E.fn.extend({
        prop: function (e, t) {
            return f(this, E.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[E.propFix[e] || e];
            });
        },
    }),
        E.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && E.isXMLDoc(e)) ||
                            ((t = E.propFix[t] || t), (i = E.propHooks[t])),
                        void 0 !== n
                            ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && 'get' in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = E.find.attr(e, 'tabindex');
                        return t
                            ? parseInt(t, 10)
                            : bt.test(e.nodeName) ||
                              (wt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: {
                for: 'htmlFor',
                class: 'className',
            },
        }),
        y.optSelected ||
            (E.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return (
                        e && e.parentNode && e.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    e = e.parentNode;
                    e &&
                        (e.selectedIndex,
                        e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        E.each(
            [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable',
            ],
            function () {
                E.propFix[this.toLowerCase()] = this;
            }
        ),
        E.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = 0;
                if (v(t))
                    return this.each(function (e) {
                        E(this).addClass(t.call(this, e, P(this)));
                    });
                if ((e = Tt(t)).length)
                    for (; (n = this[s++]); )
                        if (
                            ((a = P(n)),
                            (r = 1 === n.nodeType && ' ' + O(a) + ' '))
                        ) {
                            for (o = 0; (i = e[o++]); )
                                r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
                            a !== (a = O(r)) && n.setAttribute('class', a);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = 0;
                if (v(t))
                    return this.each(function (e) {
                        E(this).removeClass(t.call(this, e, P(this)));
                    });
                if (!arguments.length) return this.attr('class', '');
                if ((e = Tt(t)).length)
                    for (; (n = this[s++]); )
                        if (
                            ((a = P(n)),
                            (r = 1 === n.nodeType && ' ' + O(a) + ' '))
                        ) {
                            for (o = 0; (i = e[o++]); )
                                for (; -1 < r.indexOf(' ' + i + ' '); )
                                    r = r.replace(' ' + i + ' ', ' ');
                            a !== (a = O(r)) && n.setAttribute('class', a);
                        }
                return this;
            },
            toggleClass: function (i, t) {
                var o = typeof i,
                    a = 'string' == o || Array.isArray(i);
                return 'boolean' == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : v(i)
                    ? this.each(function (e) {
                          E(this).toggleClass(i.call(this, e, P(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, r;
                          if (a)
                              for (
                                  t = 0, n = E(this), r = Tt(i);
                                  (e = r[t++]);

                              )
                                  n.hasClass(e)
                                      ? n.removeClass(e)
                                      : n.addClass(e);
                          else
                              (void 0 !== i && 'boolean' != o) ||
                                  ((e = P(this)) &&
                                      b.set(this, '__className__', e),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          'class',
                                          (!e &&
                                              !1 !== i &&
                                              b.get(this, '__className__')) ||
                                              ''
                                      ));
                      });
            },
            hasClass: function (e) {
                for (var t, n = 0, r = ' ' + e + ' '; (t = this[n++]); )
                    if (
                        1 === t.nodeType &&
                        -1 < (' ' + O(P(t)) + ' ').indexOf(r)
                    )
                        return !0;
                return !1;
            },
        });
    function Ct(e) {
        e.stopPropagation();
    }
    var Et = /\r/g,
        St =
            (E.fn.extend({
                val: function (t) {
                    var n,
                        e,
                        r,
                        i = this[0];
                    return arguments.length
                        ? ((r = v(t)),
                          this.each(function (e) {
                              1 === this.nodeType &&
                                  (null ==
                                  (e = r ? t.call(this, e, E(this).val()) : t)
                                      ? (e = '')
                                      : 'number' == typeof e
                                      ? (e += '')
                                      : Array.isArray(e) &&
                                        (e = E.map(e, function (e) {
                                            return null == e ? '' : e + '';
                                        })),
                                  ((n =
                                      E.valHooks[this.type] ||
                                      E.valHooks[
                                          this.nodeName.toLowerCase()
                                      ]) &&
                                      'set' in n &&
                                      void 0 !== n.set(this, e, 'value')) ||
                                      (this.value = e));
                          }))
                        : i
                        ? (n =
                              E.valHooks[i.type] ||
                              E.valHooks[i.nodeName.toLowerCase()]) &&
                          'get' in n &&
                          void 0 !== (e = n.get(i, 'value'))
                            ? e
                            : 'string' == typeof (e = i.value)
                            ? e.replace(Et, '')
                            : null == e
                            ? ''
                            : e
                        : void 0;
                },
            }),
            E.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = E.find.attr(e, 'value');
                            return null != t ? t : O(E.text(e));
                        },
                    },
                    select: {
                        get: function (e) {
                            for (
                                var t,
                                    n = e.options,
                                    r = e.selectedIndex,
                                    i = 'select-one' === e.type,
                                    o = i ? null : [],
                                    a = i ? r + 1 : n.length,
                                    s = r < 0 ? a : i ? r : 0;
                                s < a;
                                s++
                            )
                                if (
                                    ((t = n[s]).selected || s === r) &&
                                    !t.disabled &&
                                    (!t.parentNode.disabled ||
                                        !u(t.parentNode, 'optgroup'))
                                ) {
                                    if (((t = E(t).val()), i)) return t;
                                    o.push(t);
                                }
                            return o;
                        },
                        set: function (e, t) {
                            for (
                                var n,
                                    r,
                                    i = e.options,
                                    o = E.makeArray(t),
                                    a = i.length;
                                a--;

                            )
                                ((r = i[a]).selected =
                                    -1 <
                                    E.inArray(E.valHooks.option.get(r), o)) &&
                                    (n = !0);
                            return n || (e.selectedIndex = -1), o;
                        },
                    },
                },
            }),
            E.each(['radio', 'checkbox'], function () {
                (E.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t))
                            return (e.checked = -1 < E.inArray(E(e).val(), t));
                    },
                }),
                    y.checkOn ||
                        (E.valHooks[this].get = function (e) {
                            return null === e.getAttribute('value')
                                ? 'on'
                                : e.value;
                        });
            }),
            (y.focusin = 'onfocusin' in T),
            /^(?:focusinfocus|focusoutblur)$/),
        kt =
            (E.extend(E.event, {
                trigger: function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f = [n || C],
                        p = _.call(e, 'type') ? e.type : e,
                        d = _.call(e, 'namespace')
                            ? e.namespace.split('.')
                            : [],
                        h = (c = o = n = n || C);
                    if (
                        3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !St.test(p + E.event.triggered) &&
                        (-1 < p.indexOf('.') &&
                            ((p = (d = p.split('.')).shift()), d.sort()),
                        (s = p.indexOf(':') < 0 && 'on' + p),
                        ((e = e[E.expando]
                            ? e
                            : new E.Event(
                                  p,
                                  'object' == typeof e && e
                              )).isTrigger = r ? 2 : 3),
                        (e.namespace = d.join('.')),
                        (e.rnamespace = e.namespace
                            ? new RegExp(
                                  '(^|\\.)' +
                                      d.join('\\.(?:.*\\.|)') +
                                      '(\\.|$)'
                              )
                            : null),
                        (e.result = void 0),
                        e.target || (e.target = n),
                        (t = null == t ? [e] : E.makeArray(t, [e])),
                        (l = E.event.special[p] || {}),
                        r || !l.trigger || !1 !== l.trigger.apply(n, t))
                    ) {
                        if (!r && !l.noBubble && !g(n)) {
                            for (
                                a = l.delegateType || p,
                                    St.test(a + p) || (h = h.parentNode);
                                h;
                                h = h.parentNode
                            )
                                f.push(h), (o = h);
                            o === (n.ownerDocument || C) &&
                                f.push(o.defaultView || o.parentWindow || T);
                        }
                        for (i = 0; (h = f[i++]) && !e.isPropagationStopped(); )
                            (c = h),
                                (e.type = 1 < i ? a : l.bindType || p),
                                (u =
                                    (b.get(h, 'events') || Object.create(null))[
                                        e.type
                                    ] && b.get(h, 'handle')) && u.apply(h, t),
                                (u = s && h[s]) &&
                                    u.apply &&
                                    m(h) &&
                                    ((e.result = u.apply(h, t)),
                                    !1 === e.result && e.preventDefault());
                        return (
                            (e.type = p),
                            r ||
                                e.isDefaultPrevented() ||
                                (l._default &&
                                    !1 !== l._default.apply(f.pop(), t)) ||
                                !m(n) ||
                                (s &&
                                    v(n[p]) &&
                                    !g(n) &&
                                    ((o = n[s]) && (n[s] = null),
                                    (E.event.triggered = p),
                                    e.isPropagationStopped() &&
                                        c.addEventListener(p, Ct),
                                    n[p](),
                                    e.isPropagationStopped() &&
                                        c.removeEventListener(p, Ct),
                                    (E.event.triggered = void 0),
                                    o && (n[s] = o))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    n = E.extend(new E.Event(), n, {
                        type: e,
                        isSimulated: !0,
                    });
                    E.event.trigger(n, null, t);
                },
            }),
            E.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        E.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return E.event.trigger(e, t, n, !0);
                },
            }),
            y.focusin ||
                E.each(
                    {
                        focus: 'focusin',
                        blur: 'focusout',
                    },
                    function (n, r) {
                        function i(e) {
                            E.event.simulate(r, e.target, E.event.fix(e));
                        }
                        E.event.special[r] = {
                            setup: function () {
                                var e =
                                        this.ownerDocument ||
                                        this.document ||
                                        this,
                                    t = b.access(e, r);
                                t || e.addEventListener(n, i, !0),
                                    b.access(e, r, (t || 0) + 1);
                            },
                            teardown: function () {
                                var e =
                                        this.ownerDocument ||
                                        this.document ||
                                        this,
                                    t = b.access(e, r) - 1;
                                t
                                    ? b.access(e, r, t)
                                    : (e.removeEventListener(n, i, !0),
                                      b.remove(e, r));
                            },
                        };
                    }
                ),
            T.location),
        At = {
            guid: Date.now(),
        },
        Nt = /\?/,
        jt =
            ((E.parseXML = function (e) {
                var t, n;
                if (!e || 'string' != typeof e) return null;
                try {
                    t = new T.DOMParser().parseFromString(e, 'text/xml');
                } catch (e) {}
                return (
                    (n = t && t.getElementsByTagName('parsererror')[0]),
                    (t && !n) ||
                        E.error(
                            'Invalid XML: ' +
                                (n
                                    ? E.map(n.childNodes, function (e) {
                                          return e.textContent;
                                      }).join('\n')
                                    : e)
                        ),
                    t
                );
            }),
            /\[\]$/),
        Dt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
    (E.param = function (e, t) {
        function n(e, t) {
            (t = v(t) ? t() : t),
                (i[i.length] =
                    encodeURIComponent(e) +
                    '=' +
                    encodeURIComponent(null == t ? '' : t));
        }
        var r,
            i = [];
        if (null == e) return '';
        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
            E.each(e, function () {
                n(this.name, this.value);
            });
        else
            for (r in e)
                !(function n(r, e, i, o) {
                    if (Array.isArray(e))
                        E.each(e, function (e, t) {
                            i || jt.test(r)
                                ? o(r, t)
                                : n(
                                      r +
                                          '[' +
                                          ('object' == typeof t && null != t
                                              ? e
                                              : '') +
                                          ']',
                                      t,
                                      i,
                                      o
                                  );
                        });
                    else if (i || 'object' !== h(e)) o(r, e);
                    else for (var t in e) n(r + '[' + t + ']', e[t], i, o);
                })(r, e[r], t, n);
        return i.join('&');
    }),
        E.fn.extend({
            serialize: function () {
                return E.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = E.prop(this, 'elements');
                    return e ? E.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !E(this).is(':disabled') &&
                            Lt.test(this.nodeName) &&
                            !qt.test(e) &&
                            (this.checked || !we.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = E(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? E.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(Dt, '\r\n'),
                                  };
                              })
                            : {
                                  name: t.name,
                                  value: n.replace(Dt, '\r\n'),
                              };
                    })
                    .get();
            },
        });
    var Ht = /%20/g,
        Ot = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Wt = {},
        Ft = {},
        Bt = '*/'.concat('*'),
        $t = C.createElement('a');
    function _t(o) {
        return function (e, t) {
            'string' != typeof e && ((t = e), (e = '*'));
            var n,
                r = 0,
                i = e.toLowerCase().match(S) || [];
            if (v(t))
                for (; (n = i[r++]); )
                    '+' === n[0]
                        ? ((n = n.slice(1) || '*'),
                          (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function zt(t, r, i, o) {
        var a = {},
            s = t === Ft;
        function u(e) {
            var n;
            return (
                (a[e] = !0),
                E.each(t[e] || [], function (e, t) {
                    t = t(r, i, o);
                    return 'string' != typeof t || s || a[t]
                        ? s
                            ? !(n = t)
                            : void 0
                        : (r.dataTypes.unshift(t), u(t), !1);
                }),
                n
            );
        }
        return u(r.dataTypes[0]) || (!a['*'] && u('*'));
    }
    function Ut(e, t) {
        var n,
            r,
            i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e;
    }
    ($t.href = kt.href),
        E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: kt.href,
                type: 'GET',
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        kt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                    '*': Bt,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript',
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/,
                },
                responseFields: {
                    xml: 'responseXML',
                    text: 'responseText',
                    json: 'responseJSON',
                },
                converters: {
                    '* text': String,
                    'text html': !0,
                    'text json': JSON.parse,
                    'text xml': E.parseXML,
                },
                flatOptions: {
                    url: !0,
                    context: !0,
                },
            },
            ajaxSetup: function (e, t) {
                return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e);
            },
            ajaxPrefilter: _t(Wt),
            ajaxTransport: _t(Ft),
            ajax: function (e, t) {
                'object' == typeof e && ((t = e), (e = void 0));
                var u,
                    l,
                    c,
                    n,
                    f,
                    p,
                    d,
                    r,
                    i,
                    h = E.ajaxSetup({}, (t = t || {})),
                    g = h.context || h,
                    y = h.context && (g.nodeType || g.jquery) ? E(g) : E.event,
                    m = E.Deferred(),
                    v = E.Callbacks('once memory'),
                    x = h.statusCode || {},
                    o = {},
                    a = {},
                    s = 'canceled',
                    b = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (p) {
                                if (!n)
                                    for (n = {}; (t = Rt.exec(c)); )
                                        n[t[1].toLowerCase() + ' '] = (
                                            n[t[1].toLowerCase() + ' '] || []
                                        ).concat(t[2]);
                                t = n[e.toLowerCase() + ' '];
                            }
                            return null == t ? null : t.join(', ');
                        },
                        getAllResponseHeaders: function () {
                            return p ? c : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == p &&
                                    ((e = a[e.toLowerCase()] =
                                        a[e.toLowerCase()] || e),
                                    (o[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == p && (h.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (p) b.always(e[b.status]);
                                else for (var t in e) x[t] = [x[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            e = e || s;
                            return u && u.abort(e), w(0, e), this;
                        },
                    };
                if (
                    (m.promise(b),
                    (h.url = ((e || h.url || kt.href) + '').replace(
                        It,
                        kt.protocol + '//'
                    )),
                    (h.type = t.method || t.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || '*')
                        .toLowerCase()
                        .match(S) || ['']),
                    null == h.crossDomain)
                ) {
                    i = C.createElement('a');
                    try {
                        (i.href = h.url),
                            (i.href = i.href),
                            (h.crossDomain =
                                $t.protocol + '//' + $t.host !=
                                i.protocol + '//' + i.host);
                    } catch (e) {
                        h.crossDomain = !0;
                    }
                }
                if (
                    (h.data &&
                        h.processData &&
                        'string' != typeof h.data &&
                        (h.data = E.param(h.data, h.traditional)),
                    zt(Wt, h, t, b),
                    p)
                )
                    return b;
                for (r in ((d = E.event && h.global) &&
                    0 == E.active++ &&
                    E.event.trigger('ajaxStart'),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Mt.test(h.type)),
                (l = h.url.replace(Ot, '')),
                h.hasContent
                    ? h.data &&
                      h.processData &&
                      0 ===
                          (h.contentType || '').indexOf(
                              'application/x-www-form-urlencoded'
                          ) &&
                      (h.data = h.data.replace(Ht, '+'))
                    : ((i = h.url.slice(l.length)),
                      h.data &&
                          (h.processData || 'string' == typeof h.data) &&
                          ((l += (Nt.test(l) ? '&' : '?') + h.data),
                          delete h.data),
                      !1 === h.cache &&
                          ((l = l.replace(Pt, '$1')),
                          (i =
                              (Nt.test(l) ? '&' : '?') + '_=' + At.guid++ + i)),
                      (h.url = l + i)),
                h.ifModified &&
                    (E.lastModified[l] &&
                        b.setRequestHeader(
                            'If-Modified-Since',
                            E.lastModified[l]
                        ),
                    E.etag[l] &&
                        b.setRequestHeader('If-None-Match', E.etag[l])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                    t.contentType) &&
                    b.setRequestHeader('Content-Type', h.contentType),
                b.setRequestHeader(
                    'Accept',
                    h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                        ? h.accepts[h.dataTypes[0]] +
                              ('*' !== h.dataTypes[0]
                                  ? ', ' + Bt + '; q=0.01'
                                  : '')
                        : h.accepts['*']
                ),
                h.headers))
                    b.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p))
                    return b.abort();
                if (
                    ((s = 'abort'),
                    v.add(h.complete),
                    b.done(h.success),
                    b.fail(h.error),
                    (u = zt(Ft, h, t, b)))
                ) {
                    if (
                        ((b.readyState = 1),
                        d && y.trigger('ajaxSend', [b, h]),
                        p)
                    )
                        return b;
                    h.async &&
                        0 < h.timeout &&
                        (f = T.setTimeout(function () {
                            b.abort('timeout');
                        }, h.timeout));
                    try {
                        (p = !1), u.send(o, w);
                    } catch (e) {
                        if (p) throw e;
                        w(-1, e);
                    }
                } else w(-1, 'No Transport');
                function w(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = t;
                    p ||
                        ((p = !0),
                        f && T.clearTimeout(f),
                        (u = void 0),
                        (c = r || ''),
                        (b.readyState = 0 < e ? 4 : 0),
                        (r = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (a = (function (e, t, n) {
                                for (
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s = e.contents,
                                        u = e.dataTypes;
                                    '*' === u[0];

                                )
                                    u.shift(),
                                        void 0 === r &&
                                            (r =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    'Content-Type'
                                                ));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (
                                            !u[0] ||
                                            e.converters[i + ' ' + u[0]]
                                        ) {
                                            o = i;
                                            break;
                                        }
                                        a = a || i;
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(h, b, n)),
                        !r &&
                            -1 < E.inArray('script', h.dataTypes) &&
                            E.inArray('json', h.dataTypes) < 0 &&
                            (h.converters['text script'] = function () {}),
                        (a = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o; )
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !u &&
                                        r &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (u = o),
                                    (o = c.shift()))
                                )
                                    if ('*' === o) o = u;
                                    else if ('*' !== u && u !== o) {
                                        if (
                                            !(a = l[u + ' ' + o] || l['* ' + o])
                                        )
                                            for (i in l)
                                                if (
                                                    (s = i.split(' '))[1] ===
                                                        o &&
                                                    (a =
                                                        l[u + ' ' + s[0]] ||
                                                        l['* ' + s[0]])
                                                ) {
                                                    !0 === a
                                                        ? (a = l[i])
                                                        : !0 !== l[i] &&
                                                          ((o = s[0]),
                                                          c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return {
                                                        state: 'parsererror',
                                                        error: a
                                                            ? e
                                                            : 'No conversion from ' +
                                                              u +
                                                              ' to ' +
                                                              o,
                                                    };
                                                }
                                    }
                            return {
                                state: 'success',
                                data: t,
                            };
                        })(h, a, b, r)),
                        r
                            ? (h.ifModified &&
                                  ((n = b.getResponseHeader('Last-Modified')) &&
                                      (E.lastModified[l] = n),
                                  (n = b.getResponseHeader('etag')) &&
                                      (E.etag[l] = n)),
                              204 === e || 'HEAD' === h.type
                                  ? (s = 'nocontent')
                                  : 304 === e
                                  ? (s = 'notmodified')
                                  : ((s = a.state),
                                    (i = a.data),
                                    (r = !(o = a.error))))
                            : ((o = s),
                              (!e && s) || ((s = 'error'), e < 0 && (e = 0))),
                        (b.status = e),
                        (b.statusText = (t || s) + ''),
                        r
                            ? m.resolveWith(g, [i, s, b])
                            : m.rejectWith(g, [b, s, o]),
                        b.statusCode(x),
                        (x = void 0),
                        d &&
                            y.trigger(r ? 'ajaxSuccess' : 'ajaxError', [
                                b,
                                h,
                                r ? i : o,
                            ]),
                        v.fireWith(g, [b, s]),
                        d &&
                            (y.trigger('ajaxComplete', [b, h]),
                            --E.active || E.event.trigger('ajaxStop')));
                }
                return b;
            },
            getJSON: function (e, t, n) {
                return E.get(e, t, n, 'json');
            },
            getScript: function (e, t) {
                return E.get(e, void 0, t, 'script');
            },
        }),
        E.each(['get', 'post'], function (e, i) {
            E[i] = function (e, t, n, r) {
                return (
                    v(t) && ((r = r || n), (n = t), (t = void 0)),
                    E.ajax(
                        E.extend(
                            {
                                url: e,
                                type: i,
                                dataType: r,
                                data: t,
                                success: n,
                            },
                            E.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        E.ajaxPrefilter(function (e) {
            for (var t in e.headers)
                'content-type' === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || '');
        }),
        (E._evalUrl = function (e, t, n) {
            return E.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    'text script': function () {},
                },
                dataFilter: function (e) {
                    E.globalEval(e, t, n);
                },
            });
        }),
        E.fn.extend({
            wrapAll: function (e) {
                return (
                    this[0] &&
                        (v(e) && (e = e.call(this[0])),
                        (e = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstElementChild; )
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return v(n)
                    ? this.each(function (e) {
                          E(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = E(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = v(t);
                return this.each(function (e) {
                    E(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not('body')
                        .each(function () {
                            E(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (E.expr.pseudos.hidden = function (e) {
            return !E.expr.pseudos.visible(e);
        }),
        (E.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (E.ajaxSettings.xhr = function () {
            try {
                return new T.XMLHttpRequest();
            } catch (e) {}
        });
    var Xt = {
            0: 200,
            1223: 204,
        },
        Vt = E.ajaxSettings.xhr();
    (y.cors = !!Vt && 'withCredentials' in Vt),
        (y.ajax = Vt = !!Vt),
        E.ajaxTransport(function (i) {
            var o, a;
            if (y.cors || (Vt && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if (
                            (r.open(
                                i.type,
                                i.url,
                                i.async,
                                i.username,
                                i.password
                            ),
                            i.xhrFields)
                        )
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType &&
                            r.overrideMimeType &&
                            r.overrideMimeType(i.mimeType),
                        i.crossDomain ||
                            e['X-Requested-With'] ||
                            (e['X-Requested-With'] = 'XMLHttpRequest'),
                        e))
                            r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o =
                                        a =
                                        r.onload =
                                        r.onerror =
                                        r.onabort =
                                        r.ontimeout =
                                        r.onreadystatechange =
                                            null),
                                    'abort' === e
                                        ? r.abort()
                                        : 'error' === e
                                        ? 'number' != typeof r.status
                                            ? t(0, 'error')
                                            : t(r.status, r.statusText)
                                        : t(
                                              Xt[r.status] || r.status,
                                              r.statusText,
                                              'text' !==
                                                  (r.responseType || 'text') ||
                                                  'string' !=
                                                      typeof r.responseText
                                                  ? {
                                                        binary: r.response,
                                                    }
                                                  : {
                                                        text: r.responseText,
                                                    },
                                              r.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o('error')),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          T.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o('abort'));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        E.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        E.ajaxSetup({
            accepts: {
                script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            },
            contents: {
                script: /\b(?:java|ecma)script\b/,
            },
            converters: {
                'text script': function (e) {
                    return E.globalEval(e), e;
                },
            },
        }),
        E.ajaxPrefilter('script', function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = 'GET');
        }),
        E.ajaxTransport('script', function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = E('<script>')
                            .attr(n.scriptAttrs || {})
                            .prop({
                                charset: n.scriptCharset,
                                src: n.url,
                            })
                            .on(
                                'load error',
                                (i = function (e) {
                                    r.remove(),
                                        (i = null),
                                        e &&
                                            t(
                                                'error' === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            C.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/,
        Qt =
            (E.ajaxSetup({
                jsonp: 'callback',
                jsonpCallback: function () {
                    var e = Gt.pop() || E.expando + '_' + At.guid++;
                    return (this[e] = !0), e;
                },
            }),
            E.ajaxPrefilter('json jsonp', function (e, t, n) {
                var r,
                    i,
                    o,
                    a =
                        !1 !== e.jsonp &&
                        (Yt.test(e.url)
                            ? 'url'
                            : 'string' == typeof e.data &&
                              0 ===
                                  (e.contentType || '').indexOf(
                                      'application/x-www-form-urlencoded'
                                  ) &&
                              Yt.test(e.data) &&
                              'data');
                if (a || 'jsonp' === e.dataTypes[0])
                    return (
                        (r = e.jsonpCallback =
                            v(e.jsonpCallback)
                                ? e.jsonpCallback()
                                : e.jsonpCallback),
                        a
                            ? (e[a] = e[a].replace(Yt, '$1' + r))
                            : !1 !== e.jsonp &&
                              (e.url +=
                                  (Nt.test(e.url) ? '&' : '?') +
                                  e.jsonp +
                                  '=' +
                                  r),
                        (e.converters['script json'] = function () {
                            return o || E.error(r + ' was not called'), o[0];
                        }),
                        (e.dataTypes[0] = 'json'),
                        (i = T[r]),
                        (T[r] = function () {
                            o = arguments;
                        }),
                        n.always(function () {
                            void 0 === i ? E(T).removeProp(r) : (T[r] = i),
                                e[r] &&
                                    ((e.jsonpCallback = t.jsonpCallback),
                                    Gt.push(r)),
                                o && v(i) && i(o[0]),
                                (o = i = void 0);
                        }),
                        'script'
                    );
            }),
            (y.createHTMLDocument =
                (((e = C.implementation.createHTMLDocument('').body).innerHTML =
                    '<form></form><form></form>'),
                2 === e.childNodes.length)),
            (E.parseHTML = function (e, t, n) {
                return 'string' != typeof e
                    ? []
                    : ('boolean' == typeof t && ((n = t), (t = !1)),
                      t ||
                          (y.createHTMLDocument
                              ? (((r = (t =
                                    C.implementation.createHTMLDocument(
                                        ''
                                    )).createElement('base')).href =
                                    C.location.href),
                                t.head.appendChild(r))
                              : (t = C)),
                      (r = !n && []),
                      (n = J.exec(e))
                          ? [t.createElement(n[1])]
                          : ((n = ke([e], t, r)),
                            r && r.length && E(r).remove(),
                            E.merge([], n.childNodes)));
                var r;
            }),
            (E.fn.load = function (e, t, n) {
                var r,
                    i,
                    o,
                    a = this,
                    s = e.indexOf(' ');
                return (
                    -1 < s && ((r = O(e.slice(s))), (e = e.slice(0, s))),
                    v(t)
                        ? ((n = t), (t = void 0))
                        : t && 'object' == typeof t && (i = 'POST'),
                    0 < a.length &&
                        E.ajax({
                            url: e,
                            type: i || 'GET',
                            dataType: 'html',
                            data: t,
                        })
                            .done(function (e) {
                                (o = arguments),
                                    a.html(
                                        r
                                            ? E('<div>')
                                                  .append(E.parseHTML(e))
                                                  .find(r)
                                            : e
                                    );
                            })
                            .always(
                                n &&
                                    function (e, t) {
                                        a.each(function () {
                                            n.apply(
                                                this,
                                                o || [e.responseText, t, e]
                                            );
                                        });
                                    }
                            ),
                    this
                );
            }),
            (E.expr.pseudos.animated = function (t) {
                return E.grep(E.timers, function (e) {
                    return t === e.elem;
                }).length;
            }),
            (E.offset = {
                setOffset: function (e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s = E.css(e, 'position'),
                        u = E(e),
                        l = {};
                    'static' === s && (e.style.position = 'relative'),
                        (o = u.offset()),
                        (r = E.css(e, 'top')),
                        (a = E.css(e, 'left')),
                        (s =
                            ('absolute' === s || 'fixed' === s) &&
                            -1 < (r + a).indexOf('auto')
                                ? ((i = (s = u.position()).top), s.left)
                                : ((i = parseFloat(r) || 0),
                                  parseFloat(a) || 0)),
                        null !=
                            (t = v(t) ? t.call(e, n, E.extend({}, o)) : t)
                                .top && (l.top = t.top - o.top + i),
                        null != t.left && (l.left = t.left - o.left + s),
                        'using' in t ? t.using.call(e, l) : u.css(l);
                },
            }),
            E.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return void 0 === t
                            ? this
                            : this.each(function (e) {
                                  E.offset.setOffset(this, t, e);
                              });
                    var e,
                        n = this[0];
                    return n
                        ? n.getClientRects().length
                            ? ((e = n.getBoundingClientRect()),
                              (n = n.ownerDocument.defaultView),
                              {
                                  top: e.top + n.pageYOffset,
                                  left: e.left + n.pageXOffset,
                              })
                            : {
                                  top: 0,
                                  left: 0,
                              }
                        : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var e,
                            t,
                            n,
                            r = this[0],
                            i = {
                                top: 0,
                                left: 0,
                            };
                        if ('fixed' === E.css(r, 'position'))
                            t = r.getBoundingClientRect();
                        else {
                            for (
                                t = this.offset(),
                                    n = r.ownerDocument,
                                    e = r.offsetParent || n.documentElement;
                                e &&
                                (e === n.body || e === n.documentElement) &&
                                'static' === E.css(e, 'position');

                            )
                                e = e.parentNode;
                            e &&
                                e !== r &&
                                1 === e.nodeType &&
                                (((i = E(e).offset()).top += E.css(
                                    e,
                                    'borderTopWidth',
                                    !0
                                )),
                                (i.left += E.css(e, 'borderLeftWidth', !0)));
                        }
                        return {
                            top: t.top - i.top - E.css(r, 'marginTop', !0),
                            left: t.left - i.left - E.css(r, 'marginLeft', !0),
                        };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (
                            var e = this.offsetParent;
                            e && 'static' === E.css(e, 'position');

                        )
                            e = e.offsetParent;
                        return e || w;
                    });
                },
            }),
            E.each(
                {
                    scrollLeft: 'pageXOffset',
                    scrollTop: 'pageYOffset',
                },
                function (t, i) {
                    var o = 'pageYOffset' === i;
                    E.fn[t] = function (e) {
                        return f(
                            this,
                            function (e, t, n) {
                                var r;
                                if (
                                    (g(e)
                                        ? (r = e)
                                        : 9 === e.nodeType &&
                                          (r = e.defaultView),
                                    void 0 === n)
                                )
                                    return r ? r[i] : e[t];
                                r
                                    ? r.scrollTo(
                                          o ? r.pageXOffset : n,
                                          o ? n : r.pageYOffset
                                      )
                                    : (e[t] = n);
                            },
                            t,
                            e,
                            arguments.length
                        );
                    };
                }
            ),
            E.each(['top', 'left'], function (e, n) {
                E.cssHooks[n] = Je(y.pixelPosition, function (e, t) {
                    if (t)
                        return (
                            (t = Qe(e, n)),
                            Ge.test(t) ? E(e).position()[n] + 'px' : t
                        );
                });
            }),
            E.each(
                {
                    Height: 'height',
                    Width: 'width',
                },
                function (a, s) {
                    E.each(
                        {
                            padding: 'inner' + a,
                            content: s,
                            '': 'outer' + a,
                        },
                        function (r, o) {
                            E.fn[o] = function (e, t) {
                                var n =
                                        arguments.length &&
                                        (r || 'boolean' != typeof e),
                                    i =
                                        r ||
                                        (!0 === e || !0 === t
                                            ? 'margin'
                                            : 'border');
                                return f(
                                    this,
                                    function (e, t, n) {
                                        var r;
                                        return g(e)
                                            ? 0 === o.indexOf('outer')
                                                ? e['inner' + a]
                                                : e.document.documentElement[
                                                      'client' + a
                                                  ]
                                            : 9 === e.nodeType
                                            ? ((r = e.documentElement),
                                              Math.max(
                                                  e.body['scroll' + a],
                                                  r['scroll' + a],
                                                  e.body['offset' + a],
                                                  r['offset' + a],
                                                  r['client' + a]
                                              ))
                                            : void 0 === n
                                            ? E.css(e, t, i)
                                            : E.style(e, t, n, i);
                                    },
                                    s,
                                    n ? e : void 0,
                                    n
                                );
                            };
                        }
                    );
                }
            ),
            E.each(
                [
                    'ajaxStart',
                    'ajaxStop',
                    'ajaxComplete',
                    'ajaxError',
                    'ajaxSuccess',
                    'ajaxSend',
                ],
                function (e, t) {
                    E.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }
            ),
            E.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                    return this.off(e, null, t);
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length
                        ? this.off(e, '**')
                        : this.off(t, e || '**', n);
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
            }),
            E.each(
                'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                    ' '
                ),
                function (e, n) {
                    E.fn[n] = function (e, t) {
                        return 0 < arguments.length
                            ? this.on(n, null, e, t)
                            : this.trigger(n);
                    };
                }
            ),
            /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
        Jt =
            ((E.proxy = function (e, t) {
                var n, r;
                if (
                    ('string' == typeof t && ((r = e[t]), (t = e), (e = r)),
                    v(e))
                )
                    return (
                        (n = s.call(arguments, 2)),
                        ((r = function () {
                            return e.apply(
                                t || this,
                                n.concat(s.call(arguments))
                            );
                        }).guid = e.guid =
                            e.guid || E.guid++),
                        r
                    );
            }),
            (E.holdReady = function (e) {
                e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = u),
            (E.isFunction = v),
            (E.isWindow = g),
            (E.camelCase = x),
            (E.type = h),
            (E.now = Date.now),
            (E.isNumeric = function (e) {
                var t = E.type(e);
                return (
                    ('number' === t || 'string' === t) &&
                    !isNaN(e - parseFloat(e))
                );
            }),
            (E.trim = function (e) {
                return null == e ? '' : (e + '').replace(Qt, '');
            }),
            'function' == typeof define &&
                define.amd &&
                define('jquery', [], function () {
                    return E;
                }),
            T.jQuery),
        Kt = T.$;
    return (
        (E.noConflict = function (e) {
            return (
                T.$ === E && (T.$ = Kt),
                e && T.jQuery === E && (T.jQuery = Jt),
                E
            );
        }),
        void 0 === R && (T.jQuery = T.$ = E),
        E
    );
});
