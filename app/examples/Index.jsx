require('./a');

require.ensure(['./b'], function (require) {
  require('./b');
  require('./c');
}, 'custom-chunk-name');

require('./d');