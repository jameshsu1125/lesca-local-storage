const a = typeof window > "u", i = a ? (t) => Buffer.from(t).toString("base64") : window.btoa, m = a ? (t) => Buffer.from(t, "base64").toString() : window.atob, u = (t, r = 1) => {
  let e = "";
  return i(encodeURIComponent(escape(JSON.stringify(t)))).split("").forEach((o) => {
    e += String.fromCharCode(o.charCodeAt(0) + r);
  }), e;
}, l = (t, r = 1) => {
  try {
    let e = "";
    return t.split("").forEach((o) => {
      e += String.fromCharCode(o.charCodeAt(0) - r);
    }), JSON.parse(unescape(decodeURIComponent(m(e))));
  } catch {
    return !1;
  }
}, c = { toBase64: u, toJson: l }, { localStorage: n } = window, s = () => {
  try {
    return n.setItem("__test", "data"), !0;
  } catch {
    return !1;
  }
}, d = (t) => (/* @__PURE__ */ new Date()).getTime() - t, g = (t, r) => {
  const e = { data: r, timestamp: (/* @__PURE__ */ new Date()).getTime() }, o = c.toBase64(e, 3);
  return s() ? (n.setItem(t, o), e) : !1;
}, p = (t) => {
  if (s()) {
    const r = n.getItem(t);
    if (r) {
      const e = c.toJson(r, 3), { timestamp: o } = e;
      if (o) {
        const f = d(o);
        e.timestamp = f;
      }
      return e;
    }
  }
  return !1;
}, w = (t) => s() && n.getItem(t) ? (n.removeItem(t), !0) : !1, h = () => (s() && n.clear(), !1), C = {
  checkUsable: s,
  set: g,
  get: p,
  remove: w,
  clear: h
};
export {
  C as default
};
