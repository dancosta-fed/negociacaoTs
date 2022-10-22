import { View } from "./view.js";
import { Negociacoes } from "../models/negociacoes.js";
import { escape } from "./escape.js";


 export class NegociacoesView extends View<Negociacoes> {
  
  @escape
  protected template(model: Negociacoes): string {
    return ` 

      <table class="table" table-hover table-bordered>
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>

        <tbody>
          ${model.lista().map(negociacao => {
            return `
              <tr>
                <td>${this.dateFormated(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `
          }).join('')}
        </tbody>
      </table>

    `;

  }

  private dateFormated(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }

 };
