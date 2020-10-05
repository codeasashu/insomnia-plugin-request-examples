import { DEBOUNCE_MILLIS } from "./constants"

export function keyedDebounce(callback, millis = DEBOUNCE_MILLIS) {
    let timeout;
    let results = {};
  
    return function(key, ...args) {
      results[key] = args;
  
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!Object.keys(results).length) {
          return;
        }
  
        callback(results);
        results = {};
      }, millis);
    };
};

export function debounce(callback, millis = DEBOUNCE_MILLIS) {
    // For regular debounce, just use a keyed debounce with a fixed key
    return keyedDebounce(results => {
      callback.apply(null, results.__key__);
    }, millis).bind(null, '__key__');
};