System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogRunningTime(showInSeconds = false) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                let unit = 'ms';
                let divider = 1;
                if (showInSeconds) {
                    unit = 's';
                    divider = 1000;
                }
                console.log('---------------');
                console.log(`params received to method ${propertyKey}: ${JSON.stringify(args)}.`);
                const t1 = performance.now();
                const result = originalMethod.apply(this, args);
                console.log(`The method ${propertyKey} result is ${JSON.stringify(result)}.`);
                const t2 = performance.now();
                console.log(`The method ${propertyKey} took ${(t2 - t1) / divider} ${unit}.`);
                return result;
            };
            return descriptor;
        };
    }
    exports_1("LogRunningTime", LogRunningTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
