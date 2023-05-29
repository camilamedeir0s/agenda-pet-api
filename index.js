const cors = require('cors');
const express = require('express');
const app = express();

const connectDB = require('./src/database/db');
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'OK' })
})

app.use(cors());
app.options('*', cors());
app.all('*', require("./src/routes/index.js"));

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server OK');
})