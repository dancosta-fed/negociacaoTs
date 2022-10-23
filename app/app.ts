import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');
// by putting it inside an if clause, I'm assuming form it's not null.
if (form) {
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error('Não foi possível inicializar a aplicação. Verifique se o "form" existe.')
}

const botaoImporta = document.querySelector('#botao-importa');

if (botaoImporta) {
  botaoImporta.addEventListener('click', () => {
    controller.importaDados();
  })
} else {
  throw Error('Não foi possível localizar o botão de importar. Verifique se o mesmo existe.')
}