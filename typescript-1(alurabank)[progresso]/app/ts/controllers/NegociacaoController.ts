class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes;
    private _negociacoesView = new NegociacoesView('#negociacoesView');

    constructor() {
        this._inputData = <HTMLInputElement>document.getElementById("data");
        this._inputQuantidade = <HTMLInputElement>document.getElementById("quantidade");
        this._inputValor = <HTMLInputElement>document.getElementById("valor");
        this._negociacoesView.update(this._negociacoes.paraArray());
        this.adiciona(new Event("dev"));
    }

    adiciona(evento: Event): void {
        evento.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, "/")),
            parseInt(this._inputQuantidade.value, 10),
            parseFloat(this._inputValor.value)
        )

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes.paraArray());
    }
}