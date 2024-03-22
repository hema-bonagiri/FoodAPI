const { default: mongoose } = require('mongoose');

const mangoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/FoodAPI')
    .then(() => console.log('database is connected'))
    .catch(() => console.log('database is not connected'))