const express = require('express')

const router = require('./routes/router')

require('dotenv').config()
const app = express()

app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        app.listen(process.env.SERVER_PORT, () => {console.log(`Server is running on http://localhost:${process.env.SERVER_PORT}`);});
    } catch (e) {
        console.error(e);
    }
};
    
start();
module.exports = app;