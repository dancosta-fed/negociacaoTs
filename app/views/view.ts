// <T> == is for type. It will follow the child's.
export abstract class View<T> { 
  // use PROTECTED instead of PRIVATE because it will only allow the child to acess the element.
  protected elemento: HTMLElement;
  private escape = false;

  constructor(selector: string, escape?: boolean) {
    this.elemento = document.querySelector(selector);

    if (escape) {
      this.escape = escape;
    }
  }
  // using public isn't necessary. When there's nothings.. you assume the method is public.
  public update(model: T): void {
    let template = this.template(model);
    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
      // Remove any script could  be insert in the code.
    }
    this.elemento.innerHTML = template;
  }
  
  protected abstract template(model: T): string;

};