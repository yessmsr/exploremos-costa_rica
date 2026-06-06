import type { Request, Response } from "express";
import { getProvinces } from "./province.service.js";

export const getAllProvinces = async (_req: Request, res: Response) => {
  try {
    const provinces = await getProvinces();

    return res.status(200).json({
      success: true,
      data: provinces,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Error fetching provinces",
    });
  }
};