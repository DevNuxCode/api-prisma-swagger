// src/controllers/v1/clientController.js
import prisma from '../../database/prismaClient.js';

export const createClient = async (req, res) => {
  const { name } = req.body;
  try {
    const client = await prisma.client.create({
      data: {
        name,
        ownerId: req.user.id,
      },
    });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await prisma.client.findMany({
      where: { ownerId: req.user.id },
    });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await prisma.client.findUnique({
      where: { id },
    });
    if (!client || client.ownerId !== req.user.id) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const client = await prisma.client.update({
      where: { id },
      data: { name },
    });
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.client.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
