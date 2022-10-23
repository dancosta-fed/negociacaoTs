import { Negociacao } from "../../models/negociacao.js";

import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";

export class NegociacoesService {
  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
   return fetch('http://localhost:8080/dados')
    .then(response => response.json())
    .then((dados: NegociacoesDoDia[]) => {
      return dados.map(dadosDeHoje => {
        return new Negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante);
      })
    })
    // .catch((err) => console.error(err));
  }
}