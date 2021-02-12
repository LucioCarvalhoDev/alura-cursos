class NegociacoesView {

    _target:Element;

    constructor (seletor:string) {
        this._target = document.querySelector(seletor);
    }

    private template(negociacoes:Negociacao[]): string {   

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
                        `)
                    })}
                </tbody>

                <tfoot>
                </tfoot>
        </table> 
        `)
    }

    update(negociacoes:Negociacao[]): void {
        this._target.innerHTML = this.template(negociacoes);
    }
}