import React from "react";
import MicroFrontEndComponent from "./MicroFrontEndComponent";

type Props = {
  buyerId: string;
  viewBy: string;
};

const SupplierSummary = ({ buyerId, viewBy }: Props) => {
  return (
    <React.Fragment>
      <MicroFrontEndComponent
        microUiDomain={"http://localhost:3000"}
        microUiName={"mfeFairFarmsBuyers"}
        componentName={"SupplierSummary"}
        buyerId={buyerId}
        viewBy={viewBy}
      >
        <p>Loading...</p>
      </MicroFrontEndComponent>
    </React.Fragment>
  );
};

export default SupplierSummary;
