import express from "express";
import cors from "cors";
import provinceRoutes from "./modules/provinces/province.routes.js";
import placeRoutes from "./modules/places/place.routes.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Exploremos Costa Rica API is running",
  });
});

app.use("/api/provinces", provinceRoutes);
app.use("/api/places", placeRoutes);