import express from "express";
import teamsRoutes from "./routes/teams.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors";

const app = express();

app.use(cors())

app.use(express.json())

app.use(indexRoutes)

app.use('/api', teamsRoutes)

app.use((req, res, next) => {
  res.json({
    message: "Endpoint Not Found"
  })
})

export default app;