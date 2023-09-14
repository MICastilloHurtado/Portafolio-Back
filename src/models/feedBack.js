const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('feedBack', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type :DataTypes.STRING,
            allowNull:false
        },
        text:{
            type :DataTypes.TEXT,
            allowNull:false
        }

        }
    )
}