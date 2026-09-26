const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Olivia's Tic Tac Toe API",
      version: "1.0.0",
      description: "API documentation for Olivia's Tic Tac Toe Game",
      contact: {
        name: "Son Nguyen",
        url: "https://github.com/hoangsonww",
        email: "hoangson091104@gmail.com",
      },
      termsOfService: "https://tictactoe-ai-app.vercel.app",
    },
    servers: [
      { url: "https://tic-tac-toe-backend-api.vercel.app" },
      { url: "http://localhost:4000" },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ BearerAuth: [] }],
  },
  apis: ["./routes/*.js", "./models/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
