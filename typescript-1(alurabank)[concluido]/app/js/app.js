const controller = new NegociacaoController();
$(".form")
    .addEventListener("submit", controller.adiciona.bind(controller));
