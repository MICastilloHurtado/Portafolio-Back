const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('post', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        title :{
            type:DataTypes.STRING,
            allowNull:false
        },
        text :{
            type:DataTypes.TEXT,
            allowNull:false
        }
    }, {timestamps: true})
}