import { useState, useEffect } from "react";
import { fetchTop10 } from "../services/top10Service";
import { generateSessionId } from "../lib/utils/generateSessionId";

const useTop10 = (partNumber) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sessionId = generateSessionId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTop10(partNumber, sessionId);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [partNumber, sessionId]);

  return { data, loading, error };
};

export default useTop10;
