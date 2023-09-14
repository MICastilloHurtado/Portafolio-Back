const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('post', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date:{
            type: DataTypes.DATETIME,
            defaultValue: DataTypes.NOW
        },
        title :{
            type:DataTypes.STRING,
            allowNull:false
        },
        text :{
            type:DataTypes.STRING,
            allowNull:false
        }
    }, {timestamps: true})
}