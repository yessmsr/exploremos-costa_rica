import type { Request, Response } from "express";
import { getCategories } from "./category.service.js";

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await getCategories();

    return res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Error fetching categories",
    });
  }
};