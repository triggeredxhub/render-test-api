const SequelizeService = require ("../service/sequelize")
const { DataTypes } = require("sequelize");



const databaseConfig = new SequelizeService;

const EMS_Users = databaseConfig.sequelize.define("EMS_Users", {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    role: {
        type: DataTypes.ENUM('student'),
        allowNull: false 
    },

});


module.exports = EMS_Users;
