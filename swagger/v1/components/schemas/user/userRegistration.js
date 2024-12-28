
export default {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        format: 'email',
        description: 'Email address of the user',
      },
      password: {
        type: 'string',
        description: 'Password for the user',
      },
    },
    required: ['email', 'password'],
  };