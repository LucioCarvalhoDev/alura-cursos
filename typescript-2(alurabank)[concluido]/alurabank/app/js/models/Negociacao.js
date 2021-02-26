System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                paraTexto() {
                    console.log(`
            data: ${this.data}
            quantidade: ${this.quantidade}
            valor: ${this.valor}
            volume: ${this.volume}
        `);
                }
                ehIgual(negociacao) {
                    return JSON.stringify(this) === JSON.stringify(negociacao);
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
