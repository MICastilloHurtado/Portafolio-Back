const { Router } = require('express')
const useFeedback = require('./useFeedback')
const usePost = require('./usePost')
const usePing = require('./usePing')

const mainRouter = Router()

mainRouter.use('/ping', usePing)

mainRouter.use('/post', usePost)

mainRouter.use('/feedback', useFeedback)

module.exports = mainRouter