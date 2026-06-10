import type { Request, Response } from "express";
import { getPlaces, getPlaceBySlug } from "./place.service.js";

export const getAllPlaces = async (_req: Request, res: Response) => {
  try {
    const places = await getPlaces();

    return res.status(200).json({
      success: true,
      data: places,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Error fetching places",
    });
  }
};

export const getPlaceDetail = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug as string;

    const place = await getPlaceBySlug(slug);

    if (!place) {
      return res.status(404).json({
        success: false,
        message: "Place not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: place,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Error fetching place detail",
    });
  }
};