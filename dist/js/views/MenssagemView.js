import { View } from "./View";
export class MenssagemView extends View {
    template(model) {
        return `
      <p class="alert alert-info">${model}</p>
    `;
    }
}
