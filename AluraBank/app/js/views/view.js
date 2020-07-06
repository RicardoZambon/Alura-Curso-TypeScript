System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, _scape) {
                    this._scape = _scape;
                    this._element = $(selector);
                    if (typeof this._scape == 'undefined') {
                        this._scape = false;
                    }
                }
                update(model) {
                    let template = this.template(model);
                    if (this._scape) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    }
                    this._element.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
