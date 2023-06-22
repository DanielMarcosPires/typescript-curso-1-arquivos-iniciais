import { NegociacaoController } from "./controllers/negociacaoController.js";
const controller = new NegociacaoController();
const $form = document.querySelector('#submit');
$form.addEventListener('submit', (e) => {
    e.preventDefault();
    controller.adiciona();
});
