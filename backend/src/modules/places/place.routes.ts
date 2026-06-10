import { Router } from "express";
import { getAllPlaces, getPlaceDetail } from "./place.controller.js";

const router = Router();

router.get("/", getAllPlaces);
router.get("/:slug", getPlaceDetail);

export default router;