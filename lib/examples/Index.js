(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./a', './d'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./a'), require('./d'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.a, global.d);
    global.Index = mod.exports;
  }
})(this, function () {
  'use strict';

  require.ensure(['./b'], function (require) {
    require('./b');
    require('./c');
  }, 'custom-chunk-name');
});