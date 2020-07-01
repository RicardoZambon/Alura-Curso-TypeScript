class NegotiationController {

	private _inputDate : Element;
	private _inputQuantity: Element;
	private _inputPrice: Element;

	constructor() {
		this._inputDate = document.querySelector('#date');
		this._inputQuantity = document.querySelector('#quantity');
		this._inputPrice = document.querySelector('#price');
	}

	add(event : Event) {

		event.preventDefault();

		const negotiation = new Negotiation(
			this._inputDate.value,
			this._inputQuantity.value,
			this._inputPrice.value
		);

		console.log(negotiation);
	}
}