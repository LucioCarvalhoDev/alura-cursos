import { Imprimivel } from "../models/Imprimivel";

export  function Imprime(...negociacoes: Imprimivel[]): void {
    negociacoes.forEach(obj => {
        obj.paraTexto();
    })
}

