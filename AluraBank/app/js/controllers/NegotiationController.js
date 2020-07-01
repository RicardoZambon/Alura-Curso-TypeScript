class NegotiationController {
    constructor() {
        this._inputDate = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputPrice = document.querySelector('#price');
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputQuantity.value), parseFloat(this._inputPrice.value));
        console.log(negotiation);
    }
}
