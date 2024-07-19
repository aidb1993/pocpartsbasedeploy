"use client";

import React, { useEffect, useState } from "react";
import { fetchPublicSearch } from "@/hooks/fetchPublicSearch";
import PartCard from "@/components/cards/PartCard";

const PublicSearchContainer = ({ partNumber }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPublicSearch(partNumber);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [partNumber]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      {data ? (
        <PartCard
          partNumber={partNumber}
          descriptions={data.final_descriptions || []}
          alternativePartNumbers={data.final_alt_parts || []}
          manufacturers={
            data.final_manufacturer.map((name) => ({
              name,
              nsn: data.nsn.join(", "),
            })) || []
          }
        />
      ) : (
        <div>No data found for the part number.</div>
      )}
    </div>
  );
};

export default PublicSearchContainer;
