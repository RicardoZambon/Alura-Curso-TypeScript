System.register(["./DomInject", "./LogRunningTime", "./Throttle"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (DomInject_1_1) {
                exportStar_1(DomInject_1_1);
            },
            function (LogRunningTime_1_1) {
                exportStar_1(LogRunningTime_1_1);
            },
            function (Throttle_1_1) {
                exportStar_1(Throttle_1_1);
            }
        ],
        execute: function () {
        }
    };
});
