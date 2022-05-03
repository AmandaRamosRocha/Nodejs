const res = require("express/lib/response")

class UserService {
    verificaNull(dados){

        const dadosValores = Object.values(dados)
        const dadosParametros = Object.keys(dados)
        let i = 0
        let erro = ""
        while(i< dadosValores.length){
            if(!dadosValores[i]){
                if(dadosValores[i] !== false && dadosValores[i] !== false ){
                    erro = "O campo " +dadosParametros[i]+" está vazio <br>"
                    break;
                }
                
            }
            i++
        }
        return(erro)
    }
    verificaEmail(dados){

        let erro;
        if(dados.email == dados.email_confirmation){
            erro = ""
        }else{
            erro = "Emails não correspondem <br>"
        }
        return(erro)
    }

    verificaData(dados){

        let erro;
        if(Date.parse(dados.birhdate)){
            erro = ""
        }else{
            erro = "Data inválida<br>"
        }

        return(erro)
    }

    verificaNumber(dados){
        let erro = ""
        if( isNaN(dados.number)){
         erro = "Numero Invalido: Apenas Numeros<br>"
        }
        return (erro)
    }
}

module.exports = new UserService();



