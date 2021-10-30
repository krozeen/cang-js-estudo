class Negociacao {
  constructor(data, quantidade, valor){
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  get Volume(){
    return this._quantidade * this._valor;
  }

  get Date(){
    return this._data;
  }

  get Quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }
}