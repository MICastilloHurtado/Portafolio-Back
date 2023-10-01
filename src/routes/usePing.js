const {Router} = require('express')
const pg = require('pg')
require('dotenv').config()
const {DATABASE_URL} = process.env

const usePing = Router()

const pool = new pg.Pool({
    connectionString:DATABASE_URL,
    // ssl:true
})

usePing.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()')
        return res.status(201).json(result.rows[0])        
    } catch (error) {
        res.status(401).json({error:error.message})
    }
})

module.exports = usePing