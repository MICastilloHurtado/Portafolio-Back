const {feedBack} = require('../db')

const createFeedBack = async (name, text) => 
    await feedBack.create({name, text})

const getFeedBack = async () => {
    await feedBack.findAll()
}

module.exports = {createFeedBack, getFeedBack}