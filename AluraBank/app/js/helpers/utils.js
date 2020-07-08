System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function print(...objects) {
        objects.forEach(obj => obj.toText());
    }
    exports_1("print", print);
    return {
        setters: [],
        execute: function () {
        }
    };
});
