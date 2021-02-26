System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Imprime(...negociacoes) {
        negociacoes.forEach(obj => {
            obj.paraTexto();
        });
    }
    exports_1("Imprime", Imprime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
