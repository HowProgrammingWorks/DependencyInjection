'use strict';

// File contains a small piece of the source to demonstrate main module
// of a sample application to be executed in the sandboxed context by
// another pice of code from `framework.js`. Read README.md for tasks.

// Print from the global context of application module
api.console.log('From application2 global context');

module.exports = () => {
  // Print from the exported function context
  api.timers.setTimeout(() => {
    api.console.log('From application2 exported function');
  }, 5000);
};
