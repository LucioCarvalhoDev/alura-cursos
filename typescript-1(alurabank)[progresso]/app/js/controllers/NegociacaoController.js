class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes;
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._inputData = document.getElementById("data");
        this._inputQuantidade = document.getElementById("quantidade");
        this._inputValor = document.getElementById("valor");
        this._negociacoesView.update(this._negociacoes.paraArray());
    }
    adiciona(evento) {
        evento.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, "/")), parseInt(this._inputQuantidade.value, 10), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes.paraArray());
    }
}
