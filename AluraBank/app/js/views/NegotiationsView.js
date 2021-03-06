class NegotiationsView {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
    template(model) {
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
                
                <tbody>
                    
                    ${model.toArray().map(negotiation => `<tr>
                            <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                            <td>${negotiation.quantity}</td>
                            <td>${negotiation.price}</td>
                            <td>${negotiation.volume}</td>
                        </td>`).join('')}
                    
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
    }
}
