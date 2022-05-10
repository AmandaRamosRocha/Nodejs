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
        let adcionaMock = UserService.verificaMock(nulo, email, data, number, dados, UserMock.User)

        console.log(UserMock.User)
        res.send(adcionaMock);
    }
}
module.exports = new UserController();