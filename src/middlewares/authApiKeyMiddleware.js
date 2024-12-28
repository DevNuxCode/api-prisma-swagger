// src/middlewares/authApiKeyMiddleware.js

import prisma from '../database/prismaClient.js';

const authApiKeyMiddleware = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ message: 'API key missing' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { apiKey } });

    if (!user) {
      return res.status(403).json({ message: 'Invalid API key' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default authApiKeyMiddleware;
