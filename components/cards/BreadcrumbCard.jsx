import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

const BreadcrumbCard = ({ breadcrumbs }) => {
  return (
    <Breadcrumb className="border-b border-gray-200 pb-2 pt-10">
      <BreadcrumbList className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={crumb.href}
                className="text-primary-500 hover:text-primary-400"
              >
                {crumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2 text-gray-300">|</span>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbCard;
