const {Router} = require('express')

const useFeedback = Router()

useFeedback.get('/', (req, res) => {
    res.send('traer comentarios')
})

useFeedback.post('/', (req, res) => {
    res.send('traer comentarios')
})

module.exports = useFeedback