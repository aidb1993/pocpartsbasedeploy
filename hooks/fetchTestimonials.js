import axios from "axios";

const BASE_URL = "https://dev-apiservices.partsbase.com";

export const fetchTestimonials = async (size, sessionId) => {
  try {
    const response = await axios.get(`${BASE_URL}/dev-pbd-Testimonials`, {
      params: { size, sessionid: sessionId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};
