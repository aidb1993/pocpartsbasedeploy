import axios from "axios";

const BASE_URL = "https://dev-apiservices.partsbase.com";

export const fetchRelevantParts = async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/dev-pbd-relevantparts`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching relevant parts data:", error);
    throw error;
  }
};
