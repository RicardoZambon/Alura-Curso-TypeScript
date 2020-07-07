System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, _scape = false) {
                    this._scape = _scape;
                    this._element = $(selector);
                }
                update(model) {
                    const t1 = performance.now();
                    let template = this.template(model);
                    if (this._scape) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    }
                    this._element.html(template);
                    const t2 = performance.now();
                    console.log(`The update running time is ${t2 - t1} ms.`);
                }
            };
            exports_1("View", View);
        }
    };
});
