const res = require("express/lib/response")

class UserService {
    verificaNull(dados){

        const dadosValores = Object.values(dados)
        const dadosParametros = Object.keys(dados)
        // const {whatsapp} = dados
        // const {email_sms} = dados
        
        let erro = "";
        for(let i = 0;i< dadosValores.length;i++){
            if(!dadosValores[i]){
                    if(dadosParametros[i] !== "whatsapp" && dadosParametros[i] !== "email_sms"){
                        erro += "O campo " +dadosParametros[i]+" está vazio <br>";
                    }
            }
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
        const {number} = dados
        if( isNaN(number)){
         erro = "Numero Invalido: Apenas Numeros<br>"
        }
        return (erro)
    }

    verificaMock(nulo, email, data, number, dados, mock){
        if(nulo == "" && email == "" && data == "" && number == "" ){

            let mockAntigo = [...mock]
            mock.push(dados)
            if(mockAntigo === mock){
                //console.log(mockAntigo)
                return("erro")
            }else{
                // console.log(mockAntigo)
                return("ok")
            }
        }else{
            return(nulo+email+data+number)
        }
    }
}

module.exports = new UserService();



