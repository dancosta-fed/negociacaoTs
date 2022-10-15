export class Negociacao {
  // ===> this is a okay way of doing this <== //
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  // constructor(data: Date, quantidade: number, valor: number) {
  //   this._data = data;
  //   this._quantidade = quantidade;
  //   this._valor = valor;
  // }
  // ======== ======== //

  // ==> Below is a better way of doing it <== //
  constructor(
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
    return this._quantidade * this._valor; 
  }

}

// Another way to approach the constructor is like below

{/* 

  constructor(
    public readonly data: Date;
    public readonly quantidade: number;
    public readonly valor: number;
  )

  get volume(): number {
    return this.quantidade * this._valor;
  }

*/}