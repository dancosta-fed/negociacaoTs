// <T> == is for type. It will follow the child's.
export abstract class View<T> { 
  protected elemento: HTMLElement;
  // use PROTECTED instead of PRIVATE because it will only allow the child to acess the element.

  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }
  // using public isn't necessary. When there's nothings.. you assume the method is public.
  public update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
  
  protected abstract template(model: T): string;

};