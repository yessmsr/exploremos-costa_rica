import { Router } from "express";
import {
  getAllProvinces,
  getProvinceDetail,
} from "./province.controller.js";

const router = Router();

router.get("/", getAllProvinces);
router.get("/:slug", getProvinceDetail);

export default router;