var Views;
(function (Views) {
    class ViewMessage extends Views.View {
        template(model) {
            return `<p class="alert alert-info">${model}</p>`;
        }
    }
    Views.ViewMessage = ViewMessage;
})(Views || (Views = {}));
