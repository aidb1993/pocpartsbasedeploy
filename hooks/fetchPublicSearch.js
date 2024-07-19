import axios from "axios";

const BASE_URL = "https://dev-apiservices.partsbase.com";

export const fetchPublicSearch = async (partNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}/pb-publicsearch`, {
      params: { partnumber: partNumber, frompublicsearch: true },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching public search data:", error);
    throw error;
  }
};
