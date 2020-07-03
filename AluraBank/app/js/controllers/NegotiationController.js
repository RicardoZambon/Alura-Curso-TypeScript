System.register(["../models/Negotiation", "../models/Negotiations", "../views/ViewNegotiations", "../views/ViewMessage"], function (exports_1, context_1) {
    "use strict";
    var Negotiation_1, Negotiations_1, ViewNegotiations_1, ViewMessage_1, NegotiationController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Negotiation_1_1) {
                Negotiation_1 = Negotiation_1_1;
            },
            function (Negotiations_1_1) {
                Negotiations_1 = Negotiations_1_1;
            },
            function (ViewNegotiations_1_1) {
                ViewNegotiations_1 = ViewNegotiations_1_1;
            },
            function (ViewMessage_1_1) {
                ViewMessage_1 = ViewMessage_1_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new Negotiations_1.Negotiations();
                    this._viewNegotiations = new ViewNegotiations_1.ViewNegotiations('#viewNegotiations');
                    this._viewMessage = new ViewMessage_1.ViewMessage('#viewMessage');
                    this._inputDate = $('#date');
                    this._inputQuantity = $('#quantity');
                    this._inputPrice = $('#price');
                    this._viewNegotiations.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new Negotiation_1.Negotiation(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputQuantity.val()), parseFloat(this._inputPrice.val()));
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
