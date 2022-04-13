"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lescaAtobtoa = _interopRequireDefault(require("lesca-atobtoa"));

var _window = window,
    localStorage = _window.localStorage;
/**
 * Check localStorage useful
 * @returns
 */

var checkUsable = function checkUsable() {
  try {
    localStorage.setItem('__test', 'data');
    return true;
  } catch (_unused) {
    return false;
  }
};
/**
 * throw error
 * @returns none
 */


var err = function err() {
  return new Error('您的瀏覽器不支援localStorage.請更換瀏覽器或是非使用無痕模式瀏覽');
};
/**
 * convert time to rest time
 * @param {number} timestamp
 * @returns time delta
 */


var delta = function delta(timestamp) {
  var dat = new Date().getTime();
  return dat - timestamp;
};
/**
 * set item
 * @param {string} key save as key
 * @param {*} data any data
 * @returns item
 */


var set = function set(key, data) {
  var item = {
    data: data,
    timestamp: new Date().getTime()
  };

  var base64 = _lescaAtobtoa["default"].toBase64(item, 3);

  if (checkUsable()) {
    localStorage.setItem(key, base64);
    return item;
  }

  err();
  return false;
};
/**
 * set item
 * @param {string} key get by key
 * @returns item
 */


var get = function get(key) {
  if (checkUsable()) {
    var item = localStorage.getItem(key);

    if (item) {
      var data = _lescaAtobtoa["default"].toJson(item, 3);

      var timestamp = data.timestamp;

      if (timestamp) {
        var time = delta(timestamp);
        data.timestamp = time;
      }

      return data;
    }
  }

  err();
  return false;
};
/**
 * set item
 * @param {string} key remove by key
 * @returns boolean
 */


var remove = function remove(key) {
  if (checkUsable()) {
    var item = localStorage.getItem(key);

    if (item) {
      localStorage.removeItem(key);
      return true;
    }

    return false;
  }

  err();
  return false;
};
/**
 * clear all
 * @param {string} key clear all key
 * @returns boolean
 */


var clear = function clear() {
  if (checkUsable()) {
    localStorage.clear();
    return false;
  }

  err();
  return false;
};

var _default = {
  checkUsable: checkUsable,
  set: set,
  get: get,
  remove: remove,
  clear: clear
};
exports["default"] = _default;