import { Negotiation, Negotiations } from '../models/index';
import { ViewNegotiations, ViewMessage } from '../views/index';

export class NegotiationController {

	private _inputDate: JQuery;
	private _inputQuantity: JQuery;
	private _inputPrice: JQuery;

	private _negotiations = new Negotiations();
	private _viewNegotiations = new ViewNegotiations('#viewNegotiations');
	private _viewMessage = new ViewMessage('#viewMessage');

	constructor() {
		this._inputDate = $('#date');
		this._inputQuantity = $('#quantity');
		this._inputPrice = $('#price');

		this._viewNegotiations.update(this._negotiations);


	}

	add(event: Event) {
		event.preventDefault();

		let date = new Date(this._inputDate.val().replace(/-/g, ','));
		if (this._isWeekDay(date)) {
			this._viewMessage.update('Only negotiations during week days, please.');
			return;
        }

		const negotiation = new Negotiation(
			date,
			parseInt(this._inputQuantity.val()),
			parseFloat(this._inputPrice.val())
		);

		this._negotiations.add(negotiation);

		this._viewNegotiations.update(this._negotiations);

		this._negotiations.toArray().forEach(negotiation => {
			console.log(negotiation.date);
			console.log(negotiation.quantity);
			console.log(negotiation.price);
		});

		this._viewMessage.update('Negotiation successfully added!');
	}

	private _isWeekDay(date: Date) {
		return date.getDay() != WeekDay.Sunday && date.getDay() != WeekDay.Saturday;
    }
}

enum WeekDay {
	Sunday,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday
}