namespace Views {
    export class ViewMessage extends Views.View<string> {

        template(model: string): string {
            return `<p class="alert alert-info">${model}</p>`;
        }
    }
}