// mocks/publicSearchData.js
const mockPublicSearchData = {
  market_price: [
    {
      ConditionCode: "AR",
      MedianUnitPrice: 180.0,
    },
    {
      ConditionCode: "EX",
      MedianUnitPrice: 895.78,
    },
    {
      ConditionCode: "FN",
      MedianUnitPrice: 1674.915,
    },
  ],
  nsn: ["4320144279119", "5845014333387", "5845014610320"],
  partsnumber_searched: 1,
  active_seller: 22,
  final_alt_parts: ["DK-121", "DK120"],
  final_descriptions: [
    "PARTS 001",
    "UNDERWATER ACOUSTIC BEACON",
    "DK120 OVERHAULED ULB",
  ],
  final_manufacturer: ["DUKANE"],
};

export default mockPublicSearchData;
