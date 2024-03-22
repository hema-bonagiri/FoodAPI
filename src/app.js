const express = require('express');
const app = express();
const cors = require('cors');
const port = 3100;
app.use(cors());
const Food = require('./models/info');
require('./db/conn');
app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Api Creation</h1>')
})
app.get('/getfood', async(req, res) => {
    try {
        const getFood = await Food.find({});
        res.status(201).send(getFood);
    } catch (e) {
        console.log(e);
    }
})

app.post('/Food', async(req, res) => {
    try {
        console.log('req.body', req.body);
        const newFood = new Food(req.body);
        console.log(newFood);
        const insertData = await newFood.save();
        console.log(insertData);
        res.status(201).send(insertData)
    } catch (e) {
        console.log(e);
    }
})

app.listen(port, () => {
    console.log('server is listening at port number ${port}');
})