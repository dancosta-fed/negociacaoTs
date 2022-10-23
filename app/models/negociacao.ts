import { Modelo } from "../src/interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
  // ==> Below is a better (Simpler) way of doing it <== //
  constructor(
    private  _data: Date,
    public readonly quantidade: number,
    public readonly valor: number,
  ) {}

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(date, quantidade, valor);
  }

  get data(): Date {
    // This is defensive programming. By doing this, I ensure _data won't be modified
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor; 
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `;
  }

  public isEqual(negociacao: Negociacao): boolean {
    return this.data.getDate() === negociacao.data.getDate()
    && this.data.getMonth() === negociacao.data.getMonth()
    && this.data.getFullYear() === negociacao.data.getFullYear();
  }
}


{/* 
  ====> FIRST ATTEMPT <=====

  // ===> this is a okay way of doing this <== //
  
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  // constructor(data: Date, quantidade: number, valor: number) {
  //   this._data = data;
  //   this._quantidade = quantidade;
  //   this._valor = valor;
  // }

   get data(): Date {
    return this._data;
  };

  get quantidade(): number {
    return this._quantidade;
  };

  get valor(): number {
    return this._valor;
  };

  get volume(): number {
    return this.quantidade * this._valor;
  }



*/}

{/* 

  ====> SECOND ATTEMPT <====

// Another way to approach the constructor is like below
  constructor (
    private _data: Date, 
    private _quantidade: number, 
    private _valor: number) {}

  get data(): Date {
    return this._data;
  };

  get quantidade(): number {
    return this._quantidade;
  };

  get valor(): number {
    return this._valor;
  };

  get volume(): number {
    return this.quantidade * this._valor;
  }

*/}