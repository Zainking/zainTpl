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
      var isSafeMode = isSafeMode == undefined?true:isSafeMode;

      function HTMLEnCode (str) {
        var s = "";
        str = str.toString();
        if (!str || str.length == 0) return "";
        s = str.replace(/&/g, "&gt;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "'");
        s = s.replace(/\"/g, "&quot;");
        s = s.replace(/\n/g, "<br>");
        return s;
      }

      var reg = /{{[ ]*([a-zA-Z0-9_$.]+)[ ]*}}/g;
      var str = template.replace(reg, function (match, key, offset, string) {
        var stack = key.split('.');
        var inner = data;
        while (stack.length) {
          inner = inner[stack.shift()];
        }
        if (isSafeMode) {
          return inner?HTMLEnCode(inner):match;
        } else {
          return inner || match;
        }
      });
      return str;
    };
    return zainTpl;
});
