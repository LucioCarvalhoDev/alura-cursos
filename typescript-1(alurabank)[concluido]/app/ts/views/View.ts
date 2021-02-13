abstract class View<T> {

    protected _target: JQuery;

    constructor(seletor: string) {
        this._target = $(seletor);
    }

    update(model: T) {
        this._target.html(this.template(model));
    }

    abstract template(model: T): string;
}

