import { Modelo } from "../src/interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  // private negociacoes: Array<Negociacao> = []; // ==> one way of doing this
  private negociacoes: Negociacao[] = []; // other way of doing this

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> { // one way of doing this
  public lista(): readonly Negociacao[] { // other way of doing this
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  isEqual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
  }
}

