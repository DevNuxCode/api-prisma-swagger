// swagger/v1/components/schemas/client/Client.js

export default {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
      },
      name: {
        type: 'string',
        description: 'Name of the client',
      },
      userId: {
        type: 'string',
        format: 'uuid',
        description: 'ID of the associated user',
      },
    },
  };
  