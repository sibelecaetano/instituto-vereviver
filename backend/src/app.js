import express from "express";
import cors from "cors";
import subscriberRoutes from "./routes/subscriber.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

app.use("/subscribers", subscriberRoutes);

export default app;
