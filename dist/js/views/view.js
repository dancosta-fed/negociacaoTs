// <T> == is for type. It will follow the child's.
export class View {
    constructor(selector, escape) {
        this.escape = false;
        this.elemento = document.querySelector(selector);
        if (escape) {
            this.escape = escape;
        }
    }
    // using public isn't necessary. When there's nothings.. you assume the method is public.
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
            // Remove any script could  be insert in the code.
        }
        this.elemento.innerHTML = template;
    }
}
;
