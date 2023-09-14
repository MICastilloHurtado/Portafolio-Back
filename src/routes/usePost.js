const {Router} = require('express')
const {createPost, getAllPost, deletePost} = require('../controller/postController')

const usePost = Router()

usePost.get('/', (req, res) => {
    res.send('Traer los post')
})

usePost.post('/', (req, res) => {
    res.send('publicar post')
})

usePost.delete('/', (req, res) => {
    res.send('eliminar post')
})

module.exports = usePost