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
			this._inputDate.value,
			this._inputQuantity.value,
			this._inputPrice.value
		);

		console.log(negotiation);
	}
}