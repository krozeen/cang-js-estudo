let negociacaocontroller = new NegociacaoController();


//bind é utilizado para manter o contexto do this para negociacaocontroller
document.querySelector('.form')
        .addEventListener('submit', 
        negociacaocontroller.adiciona.bind(negociacaocontroller));