// src/schemas/v1/clientSchema.js

import { z } from 'zod';

export const createClientSchema = z.object({
  name: z.string().min(1),
});

export const updateClientSchema = z.object({
  name: z.string().optional(),
});
