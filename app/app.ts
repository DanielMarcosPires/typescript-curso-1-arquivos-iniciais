import { NegociacaoController } from "./controllers/negociacaoController.js";
import { Negociacao } from "./models/negociacao.js";

const controller = new NegociacaoController();

const $form = document.querySelector('#submit');

$form.addEventListener('submit',(e)=>{
    e.preventDefault();
    controller.adiciona();
})