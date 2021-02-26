import { Generico } from "./Generico";

export class Negociacao implements Generico<Negociacao> {
    
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
    }
    get volume() {

        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log(`
            data: ${this.data}
            quantidade: ${this.quantidade}
            valor: ${this.valor}
            volume: ${this.volume}
        `)
    }

    ehIgual(negociacao: Negociacao): boolean {
        return JSON.stringify(this) === JSON.stringify(negociacao);
    }

}