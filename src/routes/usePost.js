const {Router} = require('express')

const usePost = Router()

usePost.get('/', (req, res) => {
    res.send('Traer los post')
})

usePost.post('/', (req, res) => {
    res.send('publicar post')
})

usePost.delete('/', (req, res) => {
    res.send('eliminat post')
})

module.exports = usePost