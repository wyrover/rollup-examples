
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function () {
  'use strict';

  var demo = {
    init: function init() {
      console.log('[001]: hello world!');
      console.log('[002]: hello world!');
      console.log('[003]: hello world!');
    }
  };

  var arr1 = [1, 2, 3];
  var arr2 = [4, 5, 6];
  console.log(arr1.concat( arr2));

  console.log('test1');
  demo.init();

}());
//# sourceMappingURL=index.js.map
