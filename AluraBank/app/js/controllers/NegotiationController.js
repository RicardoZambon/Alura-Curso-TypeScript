System.register(["../helpers/decorators/index", "../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, NegotiationController, WeekDay;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_2.Negotiations();
                    this._viewNegotiations = new index_3.ViewNegotiations('#viewNegotiations');
                    this._viewMessage = new index_3.ViewMessage('#viewMessage');
                    this._viewNegotiations.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (this._isWeekDay(date)) {
                        this._viewMessage.update('Only negotiations during week days, please.');
                        return;
                    }
                    const negotiation = new index_2.Negotiation(date, parseInt(this._inputQuantity.val()), parseFloat(this._inputPrice.val()));
                    this._negotiations.add(negotiation);
                    this._viewNegotiations.update(this._negotiations);
                    this._viewMessage.update('Negotiation successfully added!');
                }
                _isWeekDay(date) {
                    return date.getDay() != WeekDay.Sunday && date.getDay() != WeekDay.Saturday;
                }
            };
            __decorate([
                index_1.domInject('#date')
            ], NegotiationController.prototype, "_inputDate", void 0);
            __decorate([
                index_1.domInject('#quantity')
            ], NegotiationController.prototype, "_inputQuantity", void 0);
            __decorate([
                index_1.domInject('#price')
            ], NegotiationController.prototype, "_inputPrice", void 0);
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
