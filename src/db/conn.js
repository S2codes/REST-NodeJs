const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/NewDB').then(()=> {
    console.log('Successfuly Connected to DB');
}).catch((e)=> {
    console.log('Error: Unable to connect to DB');
});