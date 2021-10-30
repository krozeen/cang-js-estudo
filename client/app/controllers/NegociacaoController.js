class NegociacaoController {

  constructor(){

    //$ esta sendo utilizado para nao replicar o querySelector
    //bind necessario para manter o contexto do this para a DOM
    let $ = document.querySelector.bind(document);
    
    this._inputData = $('#data');
    this._inputValor = $('#valor');
    this._inputQuantidade = $('#quantidade');
  }

  adiciona(event) {
    //comando para nao recarregar pagina ao submitar o formulario
    event.preventDefault();

    let negociacao = new Negociacao(this._inputData,
                                    parseFloat(this._inputValor),
                                    parseInt(this._inputQuantidade));


    console.log(negociacao);



  }

}