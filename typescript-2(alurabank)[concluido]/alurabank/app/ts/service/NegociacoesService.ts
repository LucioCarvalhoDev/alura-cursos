import { Negociacao } from "../models/index";
import { NegociacaoParcial } from "../models/NegociacaoParcial";

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {
                console.log(err);
                return [];
            });

    }
}

export interface HandlerFunction{
    (res: Response): Response
}