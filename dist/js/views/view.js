export class View {
    constructor(selector, escape) {
        this.escape = false;
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Selector ${selector} não existe no DOM.`);
        }
        if (escape) {
            this.escape = escape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
;
