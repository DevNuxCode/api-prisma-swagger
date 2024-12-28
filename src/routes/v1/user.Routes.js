import express from 'express';
import { registerUser, loginUser, regenerateApiKey } from '../../controllers/v1/userController.js';
import authTokenMiddleware from '../../middlewares/authTokenMiddleware.js';

const router = express.Router();

// Routes for users
router.post('/register', registerUser); // Register a new user
router.post('/login', loginUser); // Login user and return JWT
router.post('/regenerate-api-key', authTokenMiddleware, regenerateApiKey); // Regenerate API Key for authenticated user

export default router;