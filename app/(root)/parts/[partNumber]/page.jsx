import React from "react";
import SearchWrapper from "@/components/ui/SearchWrapper";

const PartNumberPage = ({ params }) => {
  const { partNumber } = params;

  return (
    <div>
      <SearchWrapper partNumber={partNumber} />
    </div>
  );
};

export default PartNumberPage;
