declare var $: any;

abstract class View<T> {
    protected _element: any;

    constructor(selector: string) {
        this._element = $(selector);
    }

    update(model: T): void {
        this._element.html(this.template(model));
    }

    abstract template(model: T): string;
}