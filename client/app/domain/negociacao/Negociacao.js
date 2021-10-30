class Negociacao {
  constructor(_data, _quantidade, _valor){
    Object.assign(this, { _quantidade, _valor } );
    this._data = new Date(_data.getTime());
    Object.freeze(this);
  }

  get Volume(){
    return this._quantidade * this._valor;
  }

  get Date(){
    return new Date(this._data.getTime());
  }

  get Quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }
}