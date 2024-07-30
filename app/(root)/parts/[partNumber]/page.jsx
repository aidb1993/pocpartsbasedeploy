import { v4 as uuidv4 } from "uuid";
import PartCard from "@/components/cards/PartCard";
import MarketPriceCard from "@/components/cards/MarketPriceCard";
import ProductListingsCard from "@/components/cards/ProductListingsCard";
import RelatedSearchesCard from "@/components/cards/RelatedSearchesCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import DemoForm from "@/components/forms/DemoForm";
import BreadcrumbCard from "@/components/cards/BreadcrumbCard";
import { getBreadcrumbs } from "@/constants";
import { fetchAllData } from "@/lib/fetchData";
import { Suspense } from "react";
import MembershipSection from "@/components/cards/MembershipSection";
import StatisticsCard from "@/components/cards/StatisticsCard";

const PartNumberPage = async ({ params }) => {
  const partNumber = params.partNumber?.toUpperCase();
  const sessionId = uuidv4();

  let publicSearchData = null;
  let top10Data = null;
  let relatedSearchesData = null;
  let testimonialsData = null;

  if (partNumber) {
    const data = await fetchAllData(partNumber, sessionId);
    publicSearchData = data.publicSearchData;
    top10Data = data.top10Data;
    relatedSearchesData = data.relatedSearchData;
    testimonialsData = data.testimonialsData;

    console.log("Public search data:", publicSearchData);
    console.log("Top 10 data:", top10Data);
    console.log("Related searches data:", relatedSearchesData);
    console.log("Testimonials data:", testimonialsData);
  } else {
    console.log("No part number provided.");
  }

  if (!publicSearchData) {
    return <div>Failed to load part data.</div>;
  }

  return (
    <>
      <div className="mt-20">
        <BreadcrumbCard breadcrumbs={getBreadcrumbs(partNumber)} />
      </div>

      <div className="mt-20 flex flex-col gap-6 lg:flex-row lg:justify-between xl:gap-8">
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
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
                  alternativePartNumbers={
                    publicSearchData.final_alt_parts || []
                  }
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
          </Suspense>
        </div>
        <div className="flex justify-center lg:justify-end">
          <DemoForm />
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-6">
        <div className="flex-1 md:w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <StatisticsCard
              partNumber={partNumber}
              activeSellers={publicSearchData?.active_seller || 0}
              searched={publicSearchData?.partsnumber_searched || 0}
              sellersLink="/view-all-suppliers"
              searchesDescription="times in the last 30 days"
            />
          </Suspense>
        </div>
        <div className="hidden xl:block xl:flex-1">
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </div>
      </div>

      <div className="mt-20">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductListingsCard productData={top10Data} />
        </Suspense>
      </div>

      <div className="mt-20">
        <Suspense fallback={<div>Loading...</div>}>
          <RelatedSearchesCard
            partNumber={partNumber}
            data={relatedSearchesData?.listfinal || []}
          />
        </Suspense>
      </div>

      <div className="mt-20">
        <MembershipSection />
      </div>

      <div className="mt-20">
        <Suspense fallback={<div>Loading...</div>}>
          {testimonialsData ? (
            <TestimonialCard data={testimonialsData} />
          ) : (
            <div>Failed to load testimonials.</div>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default PartNumberPage;
