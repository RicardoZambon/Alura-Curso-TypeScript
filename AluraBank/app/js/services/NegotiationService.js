System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, NegotiationService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegotiationService = class NegotiationService {
                getNegotiations(handler) {
                    return fetch('http://localhost:8080/dados')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((data) => data.map(n => new index_1.Negotiation(new Date(), n.vezes, n.montante)))
                        .catch(err => { throw err; });
                }
            };
            exports_1("NegotiationService", NegotiationService);
        }
    };
});
