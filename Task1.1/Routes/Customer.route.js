const CustomerController = require('../Controllers/Customer.controller')

const express = require('express');
const Router = express.Router()

/**
 * @swagger
 * /Customer/Get:
 *      get:
 *          description: Get all books
 *          responses:
 *              200:
 *                  description: Success
 * 
 */
Router.get('/Customer/Get/:id',CustomerController.Get)

Router.post('/Customer/Add',CustomerController.Add)
Router.put('/Customer/Update',CustomerController.Update)
Router.put('/Customer/Delete',CustomerController.Delete)

module.exports = Router