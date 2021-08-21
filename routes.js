const express = require("express");
const router = express.Router();

// const faker = require("faker");

// let db = require("./db");

// db.criarDB("minhaBaseDados");

router.use(express.static('public'));

router.get('/',(req,res)=>{ 
    res.render('pages/home');
});

router.get('/about',(req,res)=>{ 

    res.render('pages/about');
});

router.get('/cadastro',(req,res)=>{ 

    res.render('pages/cadastro',{users:users}); 
});

router.post('/cadastro/remove',(req,res)=>{
    let name = req.body.name;

    if(users.length==0){
        console.log("Erro: Não há elemento a ser removido!");
        return res.status(400).json({
            status:'error',
            error:`Removed element: ${name}`
        });

    } else {
        for(let cont=0;cont<users.length;cont++){
            if(users[cont].name==name){
                users.splice(cont,1);
                console.log("Elemento Removido: ",name);
                return res.status(200).json({
                    status:'sucess',
                    data:users
                });
            } else if(cont==users.length-1){
                console.log("Erro ao remover elemento: ",name);
                return res.status(400).json({
                    status:'error',
                    error:`Removed element: ${name}`
                });
            }
        }
    }
});

router.post('/cadastro/update',(req,res)=>{
    //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    users[req.body.id].name=req.body.name;
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].height=req.body.height;
    users[req.body.id].vote=req.body.vote;

    console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos

    res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
});

router.get('/cadastro/list',(req,res)=>{
    //Para fazer em casa: Como seria uma rotina para listar todos os itens cadastrados?

});

router.post('/cadastro/addUser',(req,res)=>{
    //Para fazer em casa: Como seria uma rotina para listar todos os itens cadastrados?

});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;