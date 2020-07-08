export class Negotiation {

    constructor(readonly date: Date, readonly quantity: number, readonly price: number) {

    }

    get volume(): number {
        return this.quantity * this.price;
    }

    toText(): void {
        console.log('Print')
        console.log(
            `Date: ${this.date}
            Quantity: ${this.quantity}
            Price: ${this.price}
            Volume: ${this.volume}`
        );
    }
}