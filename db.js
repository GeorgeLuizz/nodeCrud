const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodeCrud', null, null, {
    dialect: 'sqlite', 
    storage: './nodeCrud.db'
})

sequelize.sync()

module.exports = sequelize
