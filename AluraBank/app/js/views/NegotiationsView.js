class NegotiationsView {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update() {
        this._element.innerHTML = this.template();
    }
    template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody></tbody>
                <tfoot></tfoot>
            </table>
        `;
    }
}
