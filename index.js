const app = require('./src/app')
const {sequelize} = require('./src/db')

app.listen(3001, () => {
    sequelize.sync({force:false})
    console.log('Server is running on port 3001...')
})