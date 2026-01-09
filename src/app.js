const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/auth.routes");

const app = express();
const taskRoutes = require("./routes/task.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend API running 🚀",
  });
});

module.exports = app;
