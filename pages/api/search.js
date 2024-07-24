import axios from "axios";

export default async function handler(req, res) {
  const { partnumber } = req.query;

  if (!partnumber) {
    return res.status(400).json({ error: "Part number is required" });
  }

  try {
    const response = await axios.get(
      "https://dev-apiservices.partsbase.com/pb-publicsearch",
      {
        params: { partnumber, frompublicsearch: true },
      }
    );
    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}
