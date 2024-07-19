import { breadcrumbs, productData } from "@/constants";
import DemoForm from "@/components/forms/DemoForm";
import StatisticsCard from "@/components/cards/StatisticsCard";
import MarketPriceCard from "@/components/cards/MarketPriceCard";
/* import ProductListingsCard from "@/components/cards/ProductListingsCard"; */
import RelatedSearchesCard from "@/components/cards/RelatedSearchesCard";
import MembershipSection from "@/components/cards/MembershipSection";
import Testimonials from "@/components/cards/TestimonialCard";
import BreadcrumbCard from "@/components/cards/BreadcrumbCard";
import PublicSearchContainer from "@/components/containers/PublicSearchContainer";

export const metadata = {
  title: "Home | Partsbase Parts Public Search",
};

export default async function Home(params) {
  const partNumber = params.partNumber;
  console.log("partnumber", partNumber);

  // obtener ese numero una ves tenga ese numero hacer useffect,

  return (
    <>
      <div className="mt-10">
        <BreadcrumbCard breadcrumbs={breadcrumbs} />
      </div>

      <div className="mt-10 flex w-full flex-col justify-between gap-6 2xl:flex-row">
        <div className="flex-1 lg:w-full">
          {partNumber ? (
            <PublicSearchContainer partNumber={partNumber} />
          ) : (
            <div>Enter a part number to search.</div>
          )}
        </div>
        <div className="flex-1">
          <DemoForm />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <div className="flex-1 md:w-full">
          <StatisticsCard
            activeSellers={348}
            searched={321}
            sellersLink="/view-all-suppliers"
            searchesDescription="times in the last 30 days"
          />
        </div>
        <div className="hidden xl:block xl:flex-1">
          <MarketPriceCard
            conditionCodes={["AR", "EX", "FN"]}
            medianMarket={["$180.00000", "$895.78000", "$1616.99000"]}
          />
        </div>
      </div>

      {/* <section className="mt-10 flex w-full flex-col gap-6">
        <ProductListingsCard productData={productData} />
      </section> */}

      <div className="mt-10">
        <RelatedSearchesCard />
      </div>

      <div className="mt-10">
        <MembershipSection />
      </div>

      <div className="mt-10">
        <Testimonials />
      </div>
    </>
  );
}
