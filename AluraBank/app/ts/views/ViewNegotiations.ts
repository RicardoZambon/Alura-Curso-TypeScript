import { Negotiations } from '../models/Negotiations';
import { View } from './View';

export class ViewNegotiations extends View<Negotiations> {

    template(model: Negotiations): string {
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
                    
                    ${model.toArray().map(negotiation =>
                        `<tr>
                            <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() +1}/${negotiation.date.getFullYear()}</td>
                            <td>${negotiation.quantity}</td>
                            <td>${negotiation.price}</td>
                            <td>${negotiation.volume}</td>
                        </td>`
                    ).join('')}
                    
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
    }
}