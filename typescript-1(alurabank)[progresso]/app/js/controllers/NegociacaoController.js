class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes;
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagensView = new MensagensView("#mensagensView");
        this._inputData = document.getElementById("data");
        this._inputQuantidade = document.getElementById("quantidade");
        this._inputValor = document.getElementById("valor");
        this._negociacoesView.update(this._negociacoes);
        this.adiciona(new Event("dev"));
    }
    adiciona(evento) {
        evento.preventDefault();
        const negociacao = new Negociacao(new Date((this._inputData.value.replace(/-/g, "/")) || Date()), parseInt(this._inputQuantidade.value, 10), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagensView.update("Negociacão adicionada com sucesso!");
    }
}
