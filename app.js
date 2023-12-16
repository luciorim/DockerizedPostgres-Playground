const express = require('express')
const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const router = require('./routes/router')

require('dotenv').config()
const app = express()

app.use(express.json())

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Project for learning new technologies",
            version: "1.0.0"
        },
        servers:[
            {
                url: 'http://localhost:3000'
            }
        ],
    },
    apis: ['./routes/router.js']
}
const swaggerSpec = swaggerJSDoc(options)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
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