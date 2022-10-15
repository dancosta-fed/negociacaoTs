export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = []; // ==> one way of doing this
        this.negociacoes = []; // other way of doing this
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> { // one way of doing this
    lista() {
        return this.negociacoes;
    }
}
