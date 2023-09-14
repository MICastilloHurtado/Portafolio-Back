const { post } = require('../db')

const createPost = async (date, title, text) => 
    await post.create({date, title, text})

const getAllPost = async () => 
    await post.findAll()

const deletePost = async (id) => 
    await post.destroy({where:{id}})

module.exports = {createPost, getAllPost, deletePost}