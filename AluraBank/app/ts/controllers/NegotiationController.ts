class NegotiationController {

	private _inputDate: HTMLInputElement;
	private _inputQuantity: HTMLInputElement;
	private _inputPrice: HTMLInputElement;

	constructor() {
		this._inputDate = <HTMLInputElement>document.querySelector('#date');
		this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
		this._inputPrice = <HTMLInputElement>document.querySelector('#price');
	}

	add(event: Event) {

		event.preventDefault();

		const negotiation = new Negotiation(
			new Date(this._inputDate.value.replace(/-/g, ',')),
			parseInt(this._inputQuantity.value),
			parseFloat(this._inputPrice.value)
		);

		console.log(negotiation);
	}
}