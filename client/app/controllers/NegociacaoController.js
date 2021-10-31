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

    //Descontinuado
    //let dataformatada = new Date(this._inputData.value.replace(/-/g, ','));

    /*E utilizado spread operator para passar como parametro separadamente
    o resultado do split do array */

    //Spread trata cada elemento do array de forma individual
    /*Função map é utilizada para tratar o mes (0 a 11), sendo 0 janeiro 
     e 11 dezembro*/
    let dataformatada = new Date(...this._inputData.value
                                  .split('-')
                                  .map((element, index) => {
                                        if(index === 1){
                                          return element - 1;
                                        }
                                       return element;
                                  }));

    let negociacao = new Negociacao(dataformatada,
                                    parseFloat(this._inputValor.value),
                                    parseInt(this._inputQuantidade.value));


    console.log(negociacao);



  }

}