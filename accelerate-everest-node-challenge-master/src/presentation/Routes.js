const { Router }  = require("express");

const router = Router();

const UserController = require("./controllers/UserController");
// const UserDados = require("./controllers/UserController");

router.get("/", UserController.handle);

// router.get("/customer", UserDados.handle);
   
module.exports = router;

