const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/product_managerdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('You are now connected to the database'))
.catch(err => console.log(`There was an error connecting to the database: ${err}`))