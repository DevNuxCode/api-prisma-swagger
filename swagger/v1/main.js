// swagger/v1/main.js

import info from './info.js';
import servers from './servers.js';
import userPaths from './paths/users.js';
import clientPaths from './paths/clients.js';
import components from './components/index.js';

export default {
  openapi: '3.0.0',
  info,
  servers,
  paths: {
    ...userPaths,
    ...clientPaths,
  },
  components,
};
