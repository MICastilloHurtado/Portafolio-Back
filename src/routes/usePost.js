const {Router} = require('express')
const {createPost, getAllPost, deletePost} = require('../controller/postController')

const usePost = Router()

usePost.get('/', async (req, res) => {
    try {
        const allPost = await getAllPost()
        res.status(201).json({allPost})
    } catch (error) {
        res.status(401).json({error:error.message})
    }
})

usePost.post('/', (req, res) => {
    try {
        const {title, text} = req.body
        if(!title || !text)throw new Error('Por favor completa todos los campos')
        const post =  createPost(title, text)
        res.status(201).send('Post creado')
    } catch ({error}) {
        res.status(401).json({error:error.message})
    }
})

usePost.delete('/', (req, res) => {
    try {
        const id = req.body.id;
        const deleted = deletePost(id); 
        if (deleted) {
            res.status(201).send('Post eliminado');
        } else {
            throw new Error('No se pudo eliminar el post');
        }
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
})

module.exports = usePost