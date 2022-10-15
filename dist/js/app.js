import { Negociacao } from "./models/negociacao.js";
const negociacao = new Negociacao(new Date(), 10, 25);
console.log('negociacao', negociacao.volume);
