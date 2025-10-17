import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(express.json());

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     description: Returns a welcome message for the Audeyo cloud storage service.
 *     responses:
 *       200:
 *         description: Successful response with welcome message
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "To Audeyo the cloud storage for your documents, videos, photos and other data in very structural file and folder hierarchical manner."
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Internal server error"
 */

app.get("/", (req, res) => {
  res.send(
    "To Audeyo the cloud storage for your documents, videos, photos and other data in very structural file and folder heirarchical manner."
  );
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns a simple message indicating the server is running fine.
 *     responses:
 *       200:
 *         description: Successful response indicating server health
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Server running fine"
 */

app.get("/health", (req, res) => {
  res.send("Server running fine");
});

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Audeyo Server API Documentation",
      version: "1.0.0",
      description: "API documentation for the Audeyo cloud storage service.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
