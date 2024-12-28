// swagger/v1/paths/clients.js
  
export default {
    '/clients': {
      get: {
        summary: 'Get all clients',
        responses: {
          200: {
            description: 'List of clients',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Client',
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Create a new client',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ClientInput',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Client created successfully',
          },
          400: {
            description: 'Validation error',
          },
        },
      },
    },
  };
