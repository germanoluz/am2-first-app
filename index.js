/*
Aplicação para estudo de NodeJS em Autoração Multimídia 2 no Curso de SMD 2021.2 UFC
Germano Luz 
*/

const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port=3000;
const address = "localhost";

//código do meu faker 
const faker = require("Faker");
faker.locale = "pt_BR";

global.users = [];

for (let index = 0; index < 1000; index++){
    const name = faker.name.findName();
    const address = faker.address.streetName();
    const email = faker.internet.email(name);
    const age = faker.datatype.number(30, 40);
    const height = faker.datatype.number(1.90);
    const vote = faker.datatype.boolean();

    user = {
        name,
        address,
        email,
        age,
        height,
        vote
    }

    users.push(user);

}
//console.log(users);


// a palavra reservada global cria uma variável ou objeto global para o sistemas. Ele pode ser visto em qualquer parta do código ou dos módulos do projeto. Assim, Users podem ser vistos tanto aqui no index.js quanto em routes.js
/*global.users =[
    {name:"Wellington W. F. Sarmento",address:"Rua Dom Jeronimo, 666",email:"wwagner@virtual.ufc.br",age:46,height:1.70,vote:true},
    {name:"PAtricia S. Paula",address:"Rua Dom Jeronimo, 666",email:"patricia@virtual.ufc.br",age:46,height:1.70,vote:true},
    {name:"Henrique Sérgio L. Pequeno",address:"Rua do Henrique, 666",email:"henrique@virtual.ufc.br",age:46,height:1.70,vote:true}];
*/

app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); 
app.use(express.json()); 

app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express

const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando em ${host}, na porta ${port}`);
});

