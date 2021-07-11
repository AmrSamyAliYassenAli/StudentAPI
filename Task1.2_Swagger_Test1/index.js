const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app =  express();

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title:'Library API',
            version:'1.0.0'
        }
    },
    apis:['index.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
console.log(swaggerDocs);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /books:
 *      get:
 *          description: Get all books
 *          responses:
 *              200:
 *                  description: Success
 * 
 */
app.get('/books',(req,res)=>{
    res.send([{
        id:1,
        title:'Harry Potter'
    }])
});

/**
 * @swagger
 * /books:
 *      post:
 *          description: Create a new book
 *          paramaters:
 *          -name: title
 *              description: title of the book
 *              in: formData
 *              required: true
 *              type: String
 *          responses:
 *                  201:
 *                      description: Created
 */
app.post('/books',(req,res)=>{
    res.status(200).send(req);
});

app.listen(5000,()=>console.log("Listening on Port 5000"));