"use strict";var TextLoaderPlugin;!function(e){function t(e,t){var n=65279,r=e.readFileSync(t,"utf8");return r.charCodeAt(0)===n&&(r=r.substring(1)),r}var n=function(){function e(){}return e.prototype.load=function(e,t,n,r){var i=new XMLHttpRequest;i.onreadystatechange=function(){4===i.readyState&&(i.status>=200&&i.status<300||1223===i.status||0===i.status&&i.responseText&&i.responseText.length>0?n(i.responseText):r(i),i.onreadystatechange=null)},i.open("GET",t,!0),i.responseType="",i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(null)},e}(),r=function(){function e(){this.fs=require.nodeRequire("fs")}return e.prototype.load=function(e,n,r){r(t(this.fs,n))},e}(),i=function(){function e(e){this.textLoader=e}return e.prototype.load=function(t,n,r,i){i=i||{};var o=i["vs/text"]||{},s=o.paths||{},a=t;for(var l in s)s.hasOwnProperty(l)&&0===t.indexOf(l)&&(a=s[l]+t.substr(l.length));var c=n.toUrl(a);this.textLoader.load(t,c,function(n){i.isBuild&&(e.BUILD_MAP[t]=n),r(n)},function(){"function"==typeof r.error&&r.error("Could not find "+c)})},e.prototype.write=function(t,n,r){if(e.BUILD_MAP.hasOwnProperty(n)){var i=o.escapeText(e.BUILD_MAP[n]);r('define("'+t+"!"+n+'", function () { return "'+i+'"; });')}},e.BUILD_MAP={},e}();e.TextPlugin=i;var o=function(){function e(){}return e.escapeText=function(e){for(var t,n="\b".charCodeAt(0),r="\f".charCodeAt(0),i="\n".charCodeAt(0),o=0,s="\r".charCodeAt(0),a="	".charCodeAt(0),l="".charCodeAt(0),c="\\".charCodeAt(0),u='"'.charCodeAt(0),d=0,p=null,h=[],m=0,f=e.length;f>m;m++){switch(t=e.charCodeAt(m)){case n:p="\\b";break;case r:p="\\f";break;case i:p="\\n";break;case o:p="\\0";break;case s:p="\\r";break;case a:p="\\t";break;case l:p="\\v";break;case c:p="\\\\";break;case u:p='\\"'}null!==p&&(h.push(e.substring(d,m)),h.push(p),d=m+1,p=null)}return h.push(e.substring(d,f)),h.join("")},e}();e.Utilities=o,function(){var e=null,t="undefined"!=typeof process&&"undefined"!=typeof process.versions&&"undefined"!=typeof process.versions["atom-shell"];e="undefined"!=typeof process&&process.versions&&process.versions.node&&!t?new r:new n,define("vs/text",new i(e))}()}(TextLoaderPlugin||(TextLoaderPlugin={}));