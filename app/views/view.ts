import { inspect } from "../src/decorators/inspect.js";
import { logarTempoDeExecucao } from "../src/decorators/logar-tempo-de-execucao.js";

// <T> == is for type. It will follow the child's.
export abstract class View<T> { 
  // use PROTECTED instead of PRIVATE because it will only allow the child to acess the element.
  protected elemento: HTMLElement;

  constructor(selector: string) {
    const elemento = document.querySelector(selector);

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Selector ${selector} não existe no DOM.`);
    }
  }
  // using public isn't necessary. When there's nothings.. you assume the method is public.
  // @inspect()
  @logarTempoDeExecucao(true)
  public update(model: T): void {
   
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }
  
  protected abstract template(model: T): string;

};