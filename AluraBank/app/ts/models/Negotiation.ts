class Negotiation {

    constructor(private _date: Date, private _quantity: number, private _price: number) {

    }

    get date(): Date {
        return this._date;
    }

    get quantity(): number {
        return this._quantity;
    }

    get price(): number {
        return this._price;
    }

    get volume(): number {
        return this._quantity * this._price;
    }
}