import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = []; // ==> one way of doing this
  private negociacoes: Negociacao[] = []; // other way of doing this

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> { // one way of doing this
  public lista(): readonly Negociacao[] { // other way of doing this
    return this.negociacoes;
  }
}

