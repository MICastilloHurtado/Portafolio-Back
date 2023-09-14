const { post } = require('../db')

const createPost = async ( title, text) => 
    await post.create({ title:title, text:text})

const getAllPost = async () => 
    await post.findAll({
        order: [['id', 'DESC']] 
    })

const deletePost = async (id) => 
    await post.destroy({where:{id}})

module.exports = {createPost, getAllPost, deletePost}