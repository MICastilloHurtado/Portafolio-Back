const {Router} = require('express')
const {createFeedBack, getFeedBack} = require('../controller/feedBackController')

const useFeedback = Router()

useFeedback.get('/', async (req, res) => {
    try {
        const allFeedBacks = await getFeedBack()
        res.status(201).json({allFeedBacks})
    } catch (error) {
        res.status(401).json({error:error.message})
    }
})

useFeedback.post('/', (req, res) => {
    try {
        const {name, text} = req.body
        if(!name || !text) throw new Error('Porfavor llena todos los campos')
        const newFeedBack = createFeedBack(name, text)
        res.status(201).send('Comentario creado')        
    } catch (error) {
        res.status(401).json({error:error.message})
    }
})

module.exports = useFeedback