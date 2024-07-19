"use client";

import React from "react";
import PublicSearchContainer from "@/components/containers/PublicSearchContainer";

const SearchWrapper = ({ partNumber }) => {
  if (!partNumber) {
    return <div>No part number provided</div>;
  }

  return <PublicSearchContainer partNumber={partNumber} />;
};

export default SearchWrapper;
