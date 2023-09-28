const express = require('express')
const morgan = require('morgan')
const mainRouter = require('./routes')
const pg = require('pg')
require('dotenv').config()
const {DATABASE_URL} = process.env

const pool = new pg.Pool({
    connectionString:DATABASE_URL,
    ssl:true
})

const app = express()

app.get('/ping', async(req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.use(express.json())
app.use(morgan('dev'))
app.use(mainRouter)

module.exports = app;