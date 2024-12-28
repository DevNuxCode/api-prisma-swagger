// swagger/v1/paths/users.js

export default {
    '/users/register': {
      post: {
        summary: 'Register a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserRegistration',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'User registered successfully',
          },
          400: {
            description: 'Validation error',
          },
        },
      },
    },
    '/users/login': {
      post: {
        summary: 'Login a user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserLogin',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'User logged in successfully',
          },
          401: {
            description: 'Invalid credentials',
          },
        },
      },
    },
  };
