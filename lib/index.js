var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "lesca-atobtoa"], function (require, exports, lesca_atobtoa_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    lesca_atobtoa_1 = __importDefault(lesca_atobtoa_1);
    var localStorage = window.localStorage;
    /**
     * Check localStorage useful
     * @returns
     */
    var checkUsable = function () {
        try {
            localStorage.setItem('__test', 'data');
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    /**
     * throw error
     * @returns none
     */
    var err = function () {
        return new Error('您的瀏覽器不支援localStorage.請更換瀏覽器或是非使用無痕模式瀏覽');
    };
    /**
     * convert time to rest time
     * @param {number} timestamp
     * @returns time delta
     */
    var delta = function (timestamp) {
        var dat = new Date().getTime();
        return dat - timestamp;
    };
    /**
     * set item
     * @param {string} key save as key
     * @param {*} data any data
     * @returns item
     */
    var set = function (key, data) {
        var item = { data: data, timestamp: new Date().getTime() };
        var base64 = lesca_atobtoa_1.default.toBase64(item, 3);
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
    var get = function (key) {
        if (checkUsable()) {
            var item = localStorage.getItem(key);
            if (item) {
                var data = lesca_atobtoa_1.default.toJson(item, 3);
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
    var remove = function (key) {
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
    var clear = function () {
        if (checkUsable()) {
            localStorage.clear();
            return false;
        }
        err();
        return false;
    };
    exports.default = { checkUsable: checkUsable, set: set, get: get, remove: remove, clear: clear };
});
