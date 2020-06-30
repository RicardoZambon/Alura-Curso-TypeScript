class NegotiationController {
    constructor() {
        this._inputDate = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputPrice = document.querySelector('#price');
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(this._inputDate.value, this._inputQuantity.value, this._inputPrice.value);
        console.log(negotiation);
    }
}
