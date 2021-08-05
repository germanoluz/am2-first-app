const express = require("express");
const router = express.Router();

//Especifica a pasta contendo arquivos estáticos
// o nome public não precisa ser colocado na rota

router.use(express.static("public"));