(function (global, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        global.zainTpl = factory();
    }
})(this, function () {
    function zainTpl(template, data, isSafeMode){
      
      var template = template || '';
      var data = data || {};
      var isSafeMode = isSafeMode || true;


      return '';
    };
    return zainTpl;
});
