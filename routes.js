const express = require("express");
const router = express.Router();
const faker = require("faker");

let db = require("./db");

router.get("/", (req, res)=>{
    //res.render("pages/home");
    res.send("Página de teste");
});

router.get("/about", (req, res)=>{

    let usuarios = [];
    
    //usando Faker pra criar 6 perfis de usuarios
    for (let cont=1; oont<=6; cont++){
        usuarios.push({
            name:faker.name.findName(),
            email:faker.internet.email(),
            avatar:faker.image.image()
        });
    }
    console.log(usuarios);
    res.render("pages/about", {usuarios});
    res.send("Página sobre");
});

router.get("/curriculo", (req, res)=>{
    //res.render("pages/curriculo");
    res.send("Curriculo!");
});

router.get("/cadastro/insert", (req, res)=>{
    //inserir um usuário
});

router.get("/cadastro/list", (req, res)=>{
    //listar usuários
});
module.exports = router;