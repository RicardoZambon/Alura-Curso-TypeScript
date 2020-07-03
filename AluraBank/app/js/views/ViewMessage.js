import { View } from './View';
export class ViewMessage extends View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
