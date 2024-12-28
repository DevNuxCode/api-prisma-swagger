import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import corsOptions from './database/corsOptions.js';
import userRoutes from './routes/v1/user.Routes.js';
import clientRoutes from './routes/v1/client.Routes.js';

const { json } = bodyParser;

const app = express();
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/clients', clientRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));