import { Router } from "express";
import { getAllProvinces } from "./province.controller.js";

const router = Router();

router.get("/", getAllProvinces);

export default router;