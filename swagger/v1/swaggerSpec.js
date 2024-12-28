import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/v1/*.js'],
};

export default swaggerJsDoc(options);