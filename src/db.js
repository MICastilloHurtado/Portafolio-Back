const { Sequelize } = require('sequelize');
require('dotenv').config()
const postModel = require('./models/post.js')
const feedBackModel = require('./models/feedBack.js')

const {DB_USER, DB_PASSWORD, DB_HOST, DATABASE_URL } = process.env

const local = true
const sequelize = local === true 
? new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/portafolio`, {logging:false})
: new Sequelize(`${DATABASE_URL}`,
    { 
      logging: false,
       native: false,
       })
             

postModel(sequelize)
feedBackModel(sequelize)

module.exports = {sequelize, ...sequelize.models}