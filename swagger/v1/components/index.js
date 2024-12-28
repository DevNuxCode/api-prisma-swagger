// swagger/v1/components/index.js

import userSchemas from './schemas/user/index.js';
import clientSchemas from './schemas/client/index.js';
import securitySchemes from './securitySchemes/index.js';

export default {
  schemas: {
    ...userSchemas,
    ...clientSchemas,
  },
  securitySchemes,
};
