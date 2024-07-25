// app/(root)/(home)/page.jsx
import axios from "axios";
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

async function fetchData(partNumber, retryAttempt = 0) {
  try {
    console.log(`Fetching data for part number: ${partNumber}`);
    const publicSearchRes = await axios.get(
      `https://dev-apiservices.partsbase.com/pb-publicsearch?partnumber=${partNumber}&frompublicsearch=true`
    );
    console.log("Data fetched successfully:", publicSearchRes.data);
    return publicSearchRes.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      const retryAfter = error.response.headers["retry-after"];
      console.error(`Rate limit exceeded. Retry after ${retryAfter} seconds.`);
      if (retryAttempt < 3) {
        await new Promise((resolve) =>
          setTimeout(resolve, (retryAfter || 1) * 1000)
        );
        return fetchData(partNumber, retryAttempt + 1);
      }
      return { rateLimitExceeded: true, retryAfter };
    } else {
      console.error(
        "Failed to fetch data:",
        error.response ? error.response.data : error.message
      );
      return null;
    }
  }
}

async function fetchTop10Data(partNumber, sessionId, retryAttempt = 0) {
  try {
    console.log(`Fetching top 10 data for part number: ${partNumber}`);
    const top10Res = await axios.get(
      `https://dev-apiservices.partsbase.com/dev-pbd-searchTop10?partnumber=${partNumber}&sessionid=${sessionId}`
    );
    console.log("Top 10 data fetched successfully:", top10Res.data);
    return top10Res.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      const retryAfter = error.response.headers["retry-after"];
      console.error(`Rate limit exceeded. Retry after ${retryAfter} seconds.`);
      if (retryAttempt < 3) {
        await new Promise((resolve) =>
          setTimeout(resolve, (retryAfter || 1) * 1000)
        );
        return fetchTop10Data(partNumber, sessionId, retryAttempt + 1);
      }
      return { rateLimitExceeded: true, retryAfter };
    } else {
      console.error(
        "Failed to fetch top 10 data:",
        error.response ? error.response.data : error.message
      );
      return null;
    }
  }
}

async function fetchRelatedSearchesData(
  partNumber,
  sessionId,
  retryAttempt = 0
) {
  try {
    console.log(`Fetching related searches for part number: ${partNumber}`);
    const relatedSearchRes = await axios.get(
      `https://dev-apiservices.partsbase.com/dev-pbd-relatedsearch?partnumber=${partNumber}&employeeid=0&sessionid=${sessionId}&industryName=&companyId=`
    );
    console.log(
      "Related searches fetched successfully:",
      relatedSearchRes.data
    );
    return relatedSearchRes.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      const retryAfter = error.response.headers["retry-after"];
      console.error(`Rate limit exceeded. Retry after ${retryAfter} seconds.`);
      if (retryAttempt < 3) {
        await new Promise((resolve) =>
          setTimeout(resolve, (retryAfter || 1) * 1000)
        );
        return fetchRelatedSearchesData(
          partNumber,
          sessionId,
          retryAttempt + 1
        );
      }
      return { rateLimitExceeded: true, retryAfter };
    } else {
      console.error(
        "Failed to fetch related searches:",
        error.response ? error.response.data : error.message
      );
      return null;
    }
  }
}

async function fetchTestimonialsData(sessionId) {
  try {
    const testimonialsRes = await axios.get(
      `https://dev-apiservices.partsbase.com/dev-pbd-Testimonials?size=2&sessionid=${sessionId}`
    );
    return testimonialsRes.data;
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}

export default async function Home({ searchParams }) {
  const partNumber = searchParams.partnumber;
  const sessionId = searchParams.sessionid || uuidv4();

  let publicSearchData = null;
  let top10Data = null;
  let relatedSearchesData = null;
  let testimonialsData = null;

  if (partNumber) {
    publicSearchData = await fetchData(partNumber);
    top10Data = await fetchTop10Data(partNumber, sessionId);
    relatedSearchesData = await fetchRelatedSearchesData(partNumber, sessionId);
    testimonialsData = await fetchTestimonialsData(sessionId);
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

      <div className="mt-10 flex w-full flex-col justify-between gap-6 xl:flex-row">
        <div className="flex-1 lg:w-full">
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
        <div className="flex flex-1 justify-center xl:justify-end">
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
