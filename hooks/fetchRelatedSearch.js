import axios from "axios";

const BASE_URL = "https://dev-apiservices.partsbase.com";

export const fetchRelatedSearch = async (partNumber, sessionId) => {
  try {
    const response = await axios.get(`${BASE_URL}/dev-pbd-relatedsearch`, {
      params: {
        partnumber: partNumber,
        employeeid: "0",
        sessionid: sessionId,
        industryName: "",
        companyId: "",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching related search data:", error);
    throw error;
  }
};
