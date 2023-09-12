const { Router } = require('express')
const useFeedback = require('./useFeedback')
const usePost = require('./usePost')

const mainRouter = Router()

mainRouter.use('/post', usePost)

mainRouter.use('/feedback', useFeedback)

module.exports = mainRouter