import Atobtoa from 'lesca-atobtoa';

const { localStorage } = window;

/**
 * Check localStorage useful
 * @returns
 */
const checkUsable = () => {
  try {
    localStorage.setItem('__test', 'data');
    return true;
  } catch {
    return false;
  }
};

/**
 * throw error
 * @returns none
 */
const err = () => {
  return new Error('您的瀏覽器不支援localStorage.請更換瀏覽器或是非使用無痕模式瀏覽');
};

/**
 * convert time to rest time
 * @param {number} timestamp
 * @returns time delta
 */
const delta = (timestamp: number) => {
  const dat = new Date().getTime();
  return dat - timestamp;
};

/**
 * set item
 * @param {string} key save as key
 * @param {*} data any data
 * @returns item
 */
const set = (key: string, data: object) => {
  const item = { data, timestamp: new Date().getTime() };
  const base64 = Atobtoa.toBase64(item, 3);
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
const get = (key: string) => {
  if (checkUsable()) {
    const item = localStorage.getItem(key);
    if (item) {
      const data = Atobtoa.toJson(item, 3);
      const { timestamp } = data;
      if (timestamp) {
        const time = delta(timestamp);
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
const remove = (key: string) => {
  if (checkUsable()) {
    const item = localStorage.getItem(key);
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
const clear = () => {
  if (checkUsable()) {
    localStorage.clear();
    return false;
  }
  err();
  return false;
};

export default { checkUsable, set, get, remove, clear };
