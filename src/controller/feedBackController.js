const {feedBack} = require('../db')

const createFeedBack = async (name, text) => 
    await feedBack.create({name:name, text:text})

const getFeedBack = async () => {
    return await feedBack.findAll({
        order: [['id', 'DESC']] 
    });
};


module.exports = {createFeedBack, getFeedBack}