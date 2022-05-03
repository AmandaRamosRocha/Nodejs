const express = require('express');
const routes = require('./presentation/Routes');
const UserController = require("./domain/user/services/UserService");


const app = express();

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})