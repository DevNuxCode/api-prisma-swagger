import express from 'express';
import { createClient, getClients, getClientById, updateClient, deleteClient } from '../../controllers/v1/clientController.js';
import authTokenMiddleware from '../../middlewares/authTokenMiddleware.js';

const router = express.Router();

// Routes for clients
router.post('/', authTokenMiddleware, createClient); // Create a new client
router.get('/', authTokenMiddleware, getClients); // Get all clients for the authenticated user
router.get('/:id', authTokenMiddleware, getClientById); // Get a specific client by ID
router.put('/:id', authTokenMiddleware, updateClient); // Update client by ID
router.delete('/:id', authTokenMiddleware, deleteClient); // Delete client by ID

export default router;