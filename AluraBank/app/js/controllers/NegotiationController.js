System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegotiationController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_1.Negotiations();
                    this._viewNegotiations = new index_2.ViewNegotiations('#viewNegotiations');
                    this._viewMessage = new index_2.ViewMessage('#viewMessage');
                    this._inputDate = $('#date');
                    this._inputQuantity = $('#quantity');
                    this._inputPrice = $('#price');
                    this._viewNegotiations.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new index_1.Negotiation(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputQuantity.val()), parseFloat(this._inputPrice.val()));
                    this._negotiations.add(negotiation);
                    this._viewNegotiations.update(this._negotiations);
                    this._negotiations.toArray().forEach(negotiation => {
                        console.log(negotiation.date);
                        console.log(negotiation.quantity);
                        console.log(negotiation.price);
                    });
                    this._viewMessage.update('Negotiation successfully added!');
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
