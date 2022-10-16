// <T> == is for type. It will follow the child's.
export class View {
    // use PROTECTED instead of PRIVATE because it will only allow the child to acess the element.
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    // using public isn't necessary. When there's nothings.. you assume the method is public.
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
;
