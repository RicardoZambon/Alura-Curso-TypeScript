System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegotiationController, WeekDay;
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
                    const t1 = performance.now();
                    event.preventDefault();
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (this._isWeekDay(date)) {
                        this._viewMessage.update('Only negotiations during week days, please.');
                        return;
                    }
                    const negotiation = new index_1.Negotiation(date, parseInt(this._inputQuantity.val()), parseFloat(this._inputPrice.val()));
                    this._negotiations.add(negotiation);
                    this._viewNegotiations.update(this._negotiations);
                    this._viewMessage.update('Negotiation successfully added!');
                    const t2 = performance.now();
                    console.log(`The add running time is ${t2 - t1} ms.`);
                }
                _isWeekDay(date) {
                    return date.getDay() != WeekDay.Sunday && date.getDay() != WeekDay.Saturday;
                }
            };
            exports_1("NegotiationController", NegotiationController);
            (function (WeekDay) {
                WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
                WeekDay[WeekDay["Monday"] = 1] = "Monday";
                WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
                WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
                WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
                WeekDay[WeekDay["Friday"] = 5] = "Friday";
                WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
            })(WeekDay || (WeekDay = {}));
        }
    };
});
