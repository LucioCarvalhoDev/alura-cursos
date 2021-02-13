abstract class View<T> {

    protected _target: Element;

    constructor(seletor: string) {
        this._target = document.querySelector(seletor);
    }

    update(model: T) {
        this._target.innerHTML = this.template(model);
    }

    abstract template(model: T): string;
}

