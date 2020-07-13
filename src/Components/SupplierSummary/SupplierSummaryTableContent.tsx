import React from "react";

import SupplierDetailType from "./Types/SupplierDetailType";
import SupplierSummaryBusinessDetails from "./SupplierSummaryBusinessDetails";

type RenderRowType = (
  viewBy: string,
  supplierDetail: SupplierDetailType
) => JSX.Element;

const renderRow: RenderRowType = (viewBy, supplierDetail) => {
  switch (viewBy) {
    case "business":
      return (
        <SupplierSummaryBusinessDetails
          key={`business-detail-${supplierDetail.id}`}
          detail={supplierDetail}
        />
      );
    case "certification":
    case "crop":
    case "sites":
      break;
    default:
      break;
  }
  return (
    <React.Fragment
      key={`business-detail-${supplierDetail.id}`}
    ></React.Fragment>
  );
};

type RenderRowsType = (
  viewBy: string,
  supplierDetails: Array<SupplierDetailType>
) => Array<JSX.Element>;

const renderRows: RenderRowsType = (viewBy, supplierDetails) => {
  return supplierDetails.map((supplierDetail) =>
    renderRow(viewBy, supplierDetail)
  );
};

export type SupplierSummaryTableContentProps = {
  viewBy: string;
  supplierDetails: Array<SupplierDetailType>;
};

const SupplierSummaryTableContent = ({
  viewBy,
  supplierDetails,
}: SupplierSummaryTableContentProps) => {
  return <React.Fragment>{renderRows(viewBy, supplierDetails)}</React.Fragment>;
};

export default SupplierSummaryTableContent;
