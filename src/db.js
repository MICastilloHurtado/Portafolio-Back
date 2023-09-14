const { Sequelize } = require('sequelize');
require('dotenv').config()
const postModel = require('./models/post.js')
const feedBackModel = require('./models/feedBack.js')

const {DB_USER, DB_PASSWORD, DB_HOST} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/portafolio`,
        {logging:false})

postModel(sequelize)
feedBackModel(sequelize)

module.exports = {sequelize}