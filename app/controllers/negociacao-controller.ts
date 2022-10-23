import { DiasDaSemana } from "../src/enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { domInjector } from "../src/decorators/dom-injector.js";
import { inspect } from "../src/decorators/inspect.js";
import { logarTempoDeExecucao } from "../src/decorators/logar-tempo-de-execucao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js"
import { NegociacoesService } from "../src/services/negociacoes-service.js";

export class NegociacaoController {
  // === sem decorator de propiedade === //
  // private inputData: HTMLInputElement;
  // private inputQuantidade: HTMLInputElement;
  // private inputValor: HTMLInputElement;
  // private negociacoes = new Negociacoes();
  // private negociacoesView = new NegociacoesView('#negociacoesView');
  // private mensagemView = new MensagemView('#mensagemView');

  // === com decorator de propiedade === //
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;

  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');
  private negociacoesService = new NegociacoesService();

  constructor() {
    // === sem decorator de propiedade === //
    // this.inputData = <HTMLInputElement>document.querySelector('#data'); // like this
    // this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement; // or better like this
    // this.inputValor = document.querySelector('#valor') as HTMLInputElement;
    // this.negociacoesView.update(this.negociacoes);

    // === com decorator de propiedade === //
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect()
  @logarTempoDeExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.isWeekDay(negociacao.data)) {
      this.mensagemView.update('Só são aceitas negociações em dias úteis');
      return;
    }
    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  public importaDados(): void {

    this.negociacoesService.obterNegociacoesDoDia()
    .then(negociacoesDeHoje => {
      for(let neg of negociacoesDeHoje) {
        this.negociacoes.adiciona(neg);
      }
      this.negociacoesView.update(this.negociacoes);
    })
  }

  private limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';

    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso');
  }

  private isWeekDay(data: Date): boolean {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
  }
}