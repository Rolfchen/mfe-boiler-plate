import React from "react";
import MicroFrontEndComponent from "./MicroFrontEndComponent";

type Props = {
  buyerId: string;
};

const SupplierOverview = ({ buyerId }: Props) => {
  return (
    <React.Fragment>
      <MicroFrontEndComponent
        microUiDomain={"http://localhost:3000"}
        microUiName={"mfeFairFarmsBuyers"}
        componentName={"StatisticsOverview"}
        buyerId={buyerId}
      >
        <p>Loading...</p>
      </MicroFrontEndComponent>
    </React.Fragment>
  );
};

export default SupplierOverview;
