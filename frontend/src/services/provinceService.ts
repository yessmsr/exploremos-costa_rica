import API_URL from "./api";
import type { Province } from "../types/province";

export const getProvinces = async (): Promise<Province[]> => {
  const response = await fetch(`${API_URL}/provinces`);

  const result = await response.json();

  return result.data;
};

export const getProvinceBySlug = async (slug: string) => {
  const response = await fetch(
    `${API_URL}/provinces/${slug}`
  );

  const result = await response.json();

  return result.data;
};