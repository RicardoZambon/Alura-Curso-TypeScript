import { domInject, throttle } from '../helpers/decorators/index';
import { Negotiation, Negotiations, PartialNegotiation } from '../models/index';
import { ViewNegotiations, ViewMessage } from '../views/index';
import { NegotiationService } from '../services/index';

export class NegotiationController {

	@domInject('#date')
	private _inputDate: JQuery;

	@domInject('#quantity')
	private _inputQuantity: JQuery;

	@domInject('#price')
	private _inputPrice: JQuery;

	private _negotiations = new Negotiations();
	private _viewNegotiations = new ViewNegotiations('#viewNegotiations');
	private _viewMessage = new ViewMessage('#viewMessage');
	private _negotiationService = new NegotiationService();

	constructor() {
		this._viewNegotiations.update(this._negotiations);
	}

	@throttle()
	add() {
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
		this._viewMessage.update('Negotiation successfully added!');
	}

	private _isWeekDay(date: Date) {
		return date.getDay() != WeekDay.Sunday && date.getDay() != WeekDay.Saturday;
	}
	
	@throttle()
	importData(event: Event) {

		function isOk(res: Response) {
			if (res.ok) {
				return res;
			} else {
				throw new Error(res.statusText);
			}
		}

		this._negotiationService
			.getNegotiations(isOk)
			.then(negotiations => {
				negotiations.forEach(negotiation => {
					this._negotiations.add(negotiation)
				});

				this._viewNegotiations.update(this._negotiations);
			})
		
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