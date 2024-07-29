import BreadcrumbCard from "@/components/cards/BreadcrumbCard";
import PartCard from "@/components/cards/PartCard";
import DemoForm from "@/components/forms/DemoForm";
import StatisticsCard from "@/components/cards/StatisticsCard";
import MarketPriceCard from "@/components/cards/MarketPriceCard";
import ProductListingsCard from "@/components/cards/ProductListingsCard";
import RelatedSearchesCard from "@/components/cards/RelatedSearchesCard";
import MembershipSection from "@/components/cards/MembershipSection";
import Testimonials from "@/components/cards/TestimonialCard";
import { breadcrumbs } from "@/constants";
import { metadata } from "./metadata";
import { v4 as uuidv4 } from "uuid";

export const generateMetadata = () => {
  return metadata;
};


async function fetchDataWithRetry(url, retries = 3) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return fetchDataWithRetry(url, retries - 1);
    } else {
      console.error(error);
      return null;
    }
  }
}

export default async function Home({ searchParams }) {
  const partNumber = searchParams.partnumber;
  const sessionId = searchParams.sessionid || uuidv4();

  const publicSearchUrl = `https://dev-apiservices.partsbase.com/pb-publicsearch?partnumber=${partNumber}&frompublicsearch=true`;
  const top10Url = `https://dev-apiservices.partsbase.com/dev-pbd-searchTop10?partnumber=${partNumber}&sessionid=${sessionId}`;
  const relatedSearchUrl = `https://dev-apiservices.partsbase.com/dev-pbd-relatedsearch?partnumber=${partNumber}&employeeid=0&sessionid=${sessionId}&industryName=&companyId=`;
  const testimonialsUrl = `https://dev-apiservices.partsbase.com/dev-pbd-Testimonials?size=2&sessionid=${sessionId}`;

  let publicSearchData = null;
  let top10Data = null;
  let relatedSearchesData = null;
  let testimonialsData = null;

  if (partNumber) {
    publicSearchData = await fetchDataWithRetry(publicSearchUrl);
    top10Data = await fetchDataWithRetry(top10Url);
    relatedSearchesData = await fetchDataWithRetry(relatedSearchUrl);
    testimonialsData = await fetchDataWithRetry(testimonialsUrl);
    console.log("Public search data:", publicSearchData);
    console.log("Top 10 data:", top10Data);
    console.log("Related searches data:", relatedSearchesData);
    console.log("Testimonials data:", testimonialsData);
  } else {
    console.log("No part number provided.");
  }

  return (
    <>
      <div className="mt-10">
        <BreadcrumbCard breadcrumbs={breadcrumbs} />
      </div>

      <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:justify-between xl:gap-8">
        <div className="flex-1">
          {partNumber && publicSearchData ? (
            publicSearchData.rateLimitExceeded ? (
              <div>
                Rate limit exceeded, please try again later. Retry after{" "}
                {publicSearchData.retryAfter} seconds.
              </div>
            ) : (
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
            )
          ) : (
            <div>Enter a part number to search.</div>
          )}
        </div>
        <div className="flex justify-center lg:justify-end">
          <DemoForm />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <div className="flex-1 md:w-full">
          <StatisticsCard
            partNumber={partNumber}
            activeSellers={publicSearchData?.active_seller || 0}
            searched={publicSearchData?.partsnumber_searched || 0}
            sellersLink="/view-all-suppliers"
            searchesDescription="times in the last 30 days"
          />
        </div>
        <div className="hidden xl:block xl:flex-1">
          <MarketPriceCard
            conditionCodes={
              publicSearchData?.market_price?.map(
                (item) => item.ConditionCode
              ) || []
            }
            medianMarket={
              publicSearchData?.market_price?.map(
                (item) => item.MedianUnitPrice
              ) || []
            }
          />
        </div>
      </div>

      <div className="mt-10">
        <ProductListingsCard productData={top10Data} />
      </div>

      <div className="mt-10">
        <RelatedSearchesCard data={relatedSearchesData?.listfinal || []} />
      </div>

      <div className="mt-10">
        <MembershipSection />
      </div>

      <div className="mt-10">
        <Testimonials data={testimonialsData} />
      </div>
    </>
  );
}
