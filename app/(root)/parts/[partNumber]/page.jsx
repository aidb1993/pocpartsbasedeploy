import { v4 as uuidv4 } from "uuid";
import PartCard from "@/components/cards/PartCard";
import MarketPriceCard from "@/components/cards/MarketPriceCard";
import ProductListingsCard from "@/components/cards/ProductListingsCard";
import RelatedSearchesCard from "@/components/cards/RelatedSearchesCard";
import TestimonialCard from "@/components/cards/TestimonialCard";

async function fetchData(url, retries = 3) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      return fetchData(url, retries - 1);
    } else {
      console.error(error);
      return null;
    }
  }
}

const PartNumberPage = async ({ params }) => {
  const { partNumber } = params;
  const sessionId = uuidv4();

  const publicSearchUrl = `https://dev-apiservices.partsbase.com/pb-publicsearch?partnumber=${partNumber}&frompublicsearch=true`;
  const top10Url = `https://dev-apiservices.partsbase.com/dev-pbd-searchTop10?partnumber=${partNumber}&sessionid=${sessionId}`;
  const relatedSearchUrl = `https://dev-apiservices.partsbase.com/dev-pbd-relatedsearch?partnumber=${partNumber}&employeeid=0&sessionid=${sessionId}&industryName=&companyId=`;
  const testimonialsUrl = `https://dev-apiservices.partsbase.com/dev-pbd-Testimonials?size=2&sessionid=${sessionId}`;

  const [publicSearchData, top10Data, relatedSearchData, testimonialsData] = await Promise.all([
    fetchData(publicSearchUrl),
    fetchData(top10Url),
    fetchData(relatedSearchUrl),
    fetchData(testimonialsUrl)
  ]);

  if (!publicSearchData) {
    return <div>Failed to load part data.</div>;
  }

  return (
    <div>
      <PartCard
        partNumber={partNumber}
        descriptions={publicSearchData.final_descriptions || []}
        alternativePartNumbers={publicSearchData.final_alt_parts || []}
        manufacturers={
          publicSearchData.final_manufacturer.map((name) => ({
            name,
            nsn: publicSearchData.nsn.join(", "),
          })) || []
        }
      />
      <MarketPriceCard
        conditionCodes={
          publicSearchData.market_price.map((item) => item.ConditionCode) || []
        }
        medianMarket={
          publicSearchData.market_price.map((item) => item.MedianUnitPrice) ||
          []
        }
      />
      <ProductListingsCard productData={top10Data} />
      <RelatedSearchesCard
        data={relatedSearchData?.listfinal || []}
        partNumber={partNumber} // Ensure partNumber is passed here
      />
      <TestimonialCard data={testimonialsData} />
    </div>
  );
};

export default PartNumberPage;
