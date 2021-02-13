class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes;
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagensView = new MensagensView("#mensagensView");
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoesView.update(this._negociacoes);
        this.adiciona(new Event("dev"));
    }
    adiciona(evento) {
        evento.preventDefault();
        const negociacao = new Negociacao(new Date((this._inputData.val().replace(/-/g, "/")) || Date()), parseInt(this._inputQuantidade.val(), 10), parseFloat(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagensView.update("Negociacão adicionada com sucesso!");
    }
}
