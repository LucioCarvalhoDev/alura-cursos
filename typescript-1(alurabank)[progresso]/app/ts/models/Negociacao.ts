class Negociacao {

    constructor(private _data:Date, private _quantidade:number,  private _valor:number) {

    }

    formatarData() {
        return `${this._data.getDate()}/${this._data.getMonth()+1}/${this.data.getFullYear()}`
    }

    get data() {

        return this._data;
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    get volume() {

        return this._quantidade * this._valor;
    }
}