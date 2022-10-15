import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = []; // ==> one way of doing this
  private negociacoes: Negociacao[] = []; // other way of doing this

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> { // one way of doing this
  lista(): readonly Negociacao[] { // other way of doing this
    return this.negociacoes;
  }
}

