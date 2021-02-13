class View {
    constructor(seletor) {
        this._target = document.querySelector(seletor);
    }
    update(model) {
        this._target.innerHTML = this.template(model);
    }
}
