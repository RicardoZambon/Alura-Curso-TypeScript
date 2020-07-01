class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._inputDate = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputPrice = document.querySelector('#price');
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputQuantity.value), parseFloat(this._inputPrice.value));
        this._negotiations.add(negotiation);
        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.date);
            console.log(negotiation.quantity);
            console.log(negotiation.price);
        });
    }
}
