import type { Request, Response } from "express";
import { getProvinces, getProvinceBySlug } from "./province.service.js";

export const getAllProvinces = async (_req: Request, res: Response) => {
  try {
    const provinces = await getProvinces();

    return res.status(200).json({
      success: true,
      data: provinces,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Error fetching provinces",
    });
  }
};

export const getProvinceDetail = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug as string;

    const province = await getProvinceBySlug(slug);

    if (!province) {
      return res.status(404).json({
        success: false,
        message: "Province not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: province,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Error fetching province detail",
    });
  }
};