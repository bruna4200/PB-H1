module.exports.ValidacaoDeRegras = (Doador) => {
    var retorno
    if(Doador.valorDoacao == 10){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 10% nas lojas xpto. Código do brinde de desconto é ${this.brinde(doador)}`
           }
    }
    else if(Doador.valorDoacao == 20){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 20% nas lojas xpto. Código do brinde de desconto é ${this.brinde(doador)}`
           }
    }
    else if(Doador.valorDoacao == 50){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 30% nas lojas xpto. Código do brinde de desconto é ${this.brinde(doador)}`
           }
    }
    else if(Doador.valorDoacao >= 100){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 50% nas lojas xpto. Código do brinde de desconto é ${this.brinde(doador)}`
           }
    }
    else{
       retorno = {
        "Error":"Valor deve ser 10 Reais, 20 Reais, 50 Reais, igual ou acima de 100 Reais",
        "Valor informado":`${Doador.valorDoacao}`
    }

    }
    return retorno
};

module.exports.brinde = (doador) => {
    var a = ""
    return a.concat(Math.floor(Math.random() * 9999) + 1001,doador.CPF,Math.floor(Math.random() * 99999) + 10000); 
}