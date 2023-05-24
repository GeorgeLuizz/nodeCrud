const Sequelize =  require('sequelize')
const database  = require('../db.js')

const Time = database.define('Time', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cores: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numTitulos: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Time