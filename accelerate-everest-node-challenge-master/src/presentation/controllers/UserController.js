const UserService = require("../../domain/user/services/UserService")
var moment = require('moment');
moment().format()
const UserMock = require("../../domain/user/mocks/UserMock")

class UserController {

    handle(req, res, next) {

        const dados = req.body

        let nulo = UserService.verificaNull(dados)
        let email = UserService.verificaEmail(dados)
        let data = UserService.verificaData(dados)
        let number = UserService.verificaNumber(dados)
        if(nulo == "" && email == "" && data == "" && number == "" ){
            UserMock.User.push(dados)
            console.log(UserMock.User)
            res.send("ok")
        }else{
            res.send(nulo+email+data+number)
        }
    }
}
module.exports = new UserController();