const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
});
//Criar tabela caso nao exista
//User.sync();

module.exports = User;