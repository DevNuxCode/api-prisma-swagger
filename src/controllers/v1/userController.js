// src/controllers/v1/userController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../../database/prismaClient.js';

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const apiKey = uuidv4();
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, apiKey },
    });
    res.status(201).json(user);
   
  } catch (error) {
    res.status(500).json({ message: error.message });
    
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required',
    });
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      console.log({email})
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const regenerateApiKey = async (req, res) => {
  try {
    const newApiKey = uuidv4();
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { apiKey: newApiKey },
    });
    res.json({ apiKey: user.apiKey });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
