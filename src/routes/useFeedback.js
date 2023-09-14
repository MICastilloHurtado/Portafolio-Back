const {Router} = require('express')
const {createFeedBack, getFeedBack} = require('../controller/feedBackController')

const useFeedback = Router()

useFeedback.get('/', (req, res) => {
    res.send('traer comentarios')
})

useFeedback.post('/', (req, res) => {
    res.send('traer comentarios')
})

module.exports = useFeedback