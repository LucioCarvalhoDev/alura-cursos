class View {
    constructor(seletor) {
        this._target = $(seletor);
    }
    update(model) {
        this._target.html(this.template(model));
    }
}
