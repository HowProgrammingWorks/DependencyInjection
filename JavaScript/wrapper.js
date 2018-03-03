'use strict';

function cloneInterface(anInterface) {
  const clone = {};
  let key, fn;
  for (key in anInterface) {
    fn = anInterface[key];
    clone[key] = wrapFunction(key, fn);
  }
  return clone;
}

function wrapFunction(key, fn) {
  console.log('Wrap function: ' + key);
  return (...args) => {
    console.log('Called wrapper for: ' + key);
    console.dir({ args });
    if (args.length > 0) {
      let callback = args[args.length - 1];
      if (typeof(callback) === 'function') {
        args[args.length - 1] = (...args) => {
          console.log('Callback: ' + key);
          callback(...args);
        };
      } else {
        callback = null;
      }
    }
    console.log('Call: ' + key);
    console.dir(args);
    const result = fn(...args);
    console.log('Ended wrapper for: ' + key);
    console.dir({ result });
    return result;
  };
}

module.exports = { cloneInterface, wrapFunction };
