const Sequelize = require('sequelize');

const connectaBd = new Sequelize( "teste", "root", "2407",{
    host: 'localhost',
    dialect: 'mysql'
});
connectaBd.authenticate()
.then(function() {
     console.log("Conexão com banco de bados realizado com sucesso !");
}).catch(function() {
    console.log("Erro: conexão com banco de dados falhou!");
});
module.exports = connectaBd