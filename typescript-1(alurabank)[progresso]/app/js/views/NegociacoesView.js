class NegociacoesView {
    constructor(seletor) {
        this._target = document.querySelector(seletor);
    }
    template(negociacoes) {
        return (`
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${negociacoes.map(negociacao => {
            return (`
                            <tr>
                                <td>${negociacao.formatarData()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `);
        })}
                </tbody>

                <tfoot>
                </tfoot>
        </table> 
        `);
    }
    update(negociacoes) {
        this._target.innerHTML = this.template(negociacoes);
    }
}
