import { NegociacaoController } from "./controllers/negociacaoController.js";
import { Negociacao } from "./models/negociacao.js";

const controller = new NegociacaoController();
const negociacao = new Negociacao(new Date(), 10, 25);

const form = document.querySelector('.form');
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  controller.adiciona();
})
