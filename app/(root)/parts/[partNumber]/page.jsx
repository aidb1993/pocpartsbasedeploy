import { v4 as uuidv4 } from "uuid";
import PartCard from "@/components/cards/PartCard";
import MarketPriceCard from "@/components/cards/MarketPriceCard";
import ProductListingsCard from "@/components/cards/ProductListingsCard";
import RelatedSearchesCard from "@/components/cards/RelatedSearchesCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import axios from "axios";
import productListingsData from "@/mocks/productListingsData";

export const getServerSideProps = async (context) => {
  const { partNumber } = context.params;
  const sessionId = context.query.sessionid || uuidv4();

  try {
    const [publicSearchRes, top10Res, relatedSearchRes, testimonialsRes] =
      await Promise.all([
        axios.get(
          `https://dev-apiservices.partsbase.com/pb-publicsearch?partnumber=${partNumber}&frompublicsearch=true`
        ),
        axios.get(
          `https://dev-apiservices.partsbase.com/dev-pbd-searchTop10?partnumber=${partNumber}&sessionid=${sessionId}`
        ),
        axios.get(
          `https://dev-apiservices.partsbase.com/dev-pbd-relatedsearch?partnumber=${partNumber}&employeeid=0&sessionid=${sessionId}&industryName=&companyId=`
        ),
        axios.get(
          `https://dev-apiservices.partsbase.com/dev-pbd-Testimonials?size=2&sessionid=${sessionId}`
        ),
      ]);

    const publicSearchData = publicSearchRes.data;
    const top10Data = top10Res.data;
    const relatedSearchData = relatedSearchRes.data;
    const testimonialsData = testimonialsRes.data;

    return {
      props: {
        partNumber,
        publicSearchData,
        top10Data,
        relatedSearchData,
        testimonialsData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        partNumber,
        publicSearchData: null,
        top10Data: productListingsData, // Fallback to mock data
        relatedSearchData: null,
        testimonialsData: null,
      },
    };
  }
};

const PartNumberPage = ({
  partNumber,
  publicSearchData,
  top10Data,
  relatedSearchData,
  testimonialsData,
}) => {
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
