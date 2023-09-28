const { Router } = require('express')
const useFeedback = require('./useFeedback')
const usePost = require('./usePost')
const pg = require('pg')
require('dotenv').config()
const {DATABASE_URL} = process.env

const pool = new pg.Pool({
    connectionString:DATABASE_URL
})

const mainRouter = Router()

mainRouter.use('/', (req, res) =>{
    res.status(201).send('Pagina funcionando')
})

mainRouter.get('/ping', async(req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

mainRouter.use('/post', usePost)

mainRouter.use('/feedback', useFeedback)

module.exports = mainRouter